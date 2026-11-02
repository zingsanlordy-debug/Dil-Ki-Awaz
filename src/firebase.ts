import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  increment,
  serverTimestamp,
  getDocFromServer,
  Timestamp
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../firebase-applet-config.json';
import blueprint from '../firebase-blueprint.json';
import { GlobalShayariItem, LanguageType } from './types/shayari';
import {
  MomentFontStyleId,
  ZqMomentComment,
  ZqMomentPost
} from './types/zqMoments';
import { detectShayariLanguage, LANGUAGE_TAG_LABELS } from './utils/languageDetect';
import { processAndUploadMomentPhotos } from './utils/zqMomentsMedia';
import { getMomentFontDefinition } from './utils/zqMomentsFonts';
import { validateZqMomentSubmission } from './utils/zqMomentsFilter';

// Initialize Firebase App, Firestore (with explicit database ID), Auth, and Storage
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const storage = getStorage(app);
storage.maxUploadRetryTime = 3000;
storage.maxOperationRetryTime = 3000;

// Validate connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
void testConnection();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write'
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email
        })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Blueprint schema constants (synced directly from firebase-blueprint.json)
const SHAYARI_SCHEMA_PROPS = blueprint.entities.ShayariDoc.properties;
export const SHAYARI_MIN_LENGTH = SHAYARI_SCHEMA_PROPS.text.minLength;
export const SHAYARI_MAX_LENGTH = SHAYARI_SCHEMA_PROPS.text.maxLength;
export const AUTHOR_MAX_LENGTH = SHAYARI_SCHEMA_PROPS.authorName.maxLength;
export const USER_ID_MIN_LENGTH = SHAYARI_SCHEMA_PROPS.userId.minLength;
export const USER_ID_MAX_LENGTH = SHAYARI_SCHEMA_PROPS.userId.maxLength;
export const USER_ID_PATTERN = new RegExp(SHAYARI_SCHEMA_PROPS.userId.pattern);

const ZQ_MOMENT_PROPS = blueprint.entities.ZqMomentDoc.properties;
const ZQ_MOMENT_COMMENT_PROPS = blueprint.entities.ZqMomentCommentDoc.properties;
export const MOMENT_POSTER_MAX_LENGTH = ZQ_MOMENT_PROPS.posterName.maxLength;
export const MOMENT_CAPTION_MAX_LENGTH = ZQ_MOMENT_PROPS.caption.maxLength;
export const MOMENT_COMMENT_AUTHOR_MAX_LENGTH = ZQ_MOMENT_COMMENT_PROPS.authorName.maxLength;
export const MOMENT_COMMENT_TEXT_MAX_LENGTH = ZQ_MOMENT_COMMENT_PROPS.text.maxLength;

export const VISITOR_USER_ID_KEY = 'userId';
const LEGACY_LOCAL_USER_ID_KEY = 'zq_local_user_id';
export const ADMIN_SESSION_STORAGE_KEY = 'zq_admin_2026_session';
export const ZQ_ADMIN_PASSWORD_CORRECT = 'zqadmin2026';
const BOOTSTRAPPED_ADMIN_EMAIL = 'sastabazaarlootindia@gmail.com';

function generateRandomHex(byteLength = 12): string {
  const arr = new Uint8Array(byteLength);
  if (typeof globalThis.crypto !== 'undefined' && globalThis.crypto.getRandomValues) {
    globalThis.crypto.getRandomValues(arr);
  } else {
    for (let i = 0; i < byteLength; i++) {
      arr[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function isValidStoredUserId(val: string | null): val is string {
  return Boolean(
    val &&
      val.length >= USER_ID_MIN_LENGTH &&
      val.length <= USER_ID_MAX_LENGTH &&
      USER_ID_PATTERN.test(val)
  );
}

let memoryFallbackUserId: string | null = null;

/**
 * Generates a unique visitor userId on first visit and saves it in localStorage under "userId".
 * Seamlessly migrates any previously stored legacy userId so returning authors keep ownership.
 */
export function getOrCreateLocalUserId(): string {
  try {
    const existingPrimary = localStorage.getItem(VISITOR_USER_ID_KEY);
    if (isValidStoredUserId(existingPrimary)) {
      return existingPrimary;
    }

    const existingLegacy = localStorage.getItem(LEGACY_LOCAL_USER_ID_KEY);
    if (isValidStoredUserId(existingLegacy)) {
      localStorage.setItem(VISITOR_USER_ID_KEY, existingLegacy);
      return existingLegacy;
    }

    const created = `visitor_${Date.now().toString(36)}_${generateRandomHex(10)}`;
    localStorage.setItem(VISITOR_USER_ID_KEY, created);
    localStorage.setItem(LEGACY_LOCAL_USER_ID_KEY, created);
    return created;
  } catch {
    if (!memoryFallbackUserId) {
      memoryFallbackUserId = `visitor_${Date.now().toString(36)}_${generateRandomHex(10)}`;
    }
    return memoryFallbackUserId;
  }
}

// Immediately initialize and persist visitor userId on first app visit
getOrCreateLocalUserId();

export function isZqAdminUnlocked(): boolean {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_STORAGE_KEY) === ZQ_ADMIN_PASSWORD_CORRECT;
  } catch {
    return false;
  }
}

export function setZqAdminUnlocked(unlocked: boolean): void {
  try {
    if (unlocked) {
      sessionStorage.setItem(ADMIN_SESSION_STORAGE_KEY, ZQ_ADMIN_PASSWORD_CORRECT);
    } else {
      sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
    }
  } catch {
    // ignore
  }
}

function extractTimestampMillis(rawTs: unknown): number {
  if (rawTs instanceof Timestamp) {
    return rawTs.toMillis();
  }
  if (
    rawTs &&
    typeof rawTs === 'object' &&
    'seconds' in rawTs &&
    typeof (rawTs as { seconds: unknown }).seconds === 'number'
  ) {
    return (rawTs as { seconds: number }).seconds * 1000;
  }
  return Date.now();
}

export interface CreateGlobalShayariInput {
  authorName: string;
  category: string;
  categoryName: string;
  categoryIcon: string;
  moodEmoji: string;
  title: string;
  text: string;
  language: LanguageType;
}

export function mapRawDocToGlobalShayari(
  id: string,
  data: Record<string, unknown>
): GlobalShayariItem {
  const text = typeof data.text === 'string' ? data.text : '';
  const moodEmoji = typeof data.moodEmoji === 'string' ? data.moodEmoji : '❤️';
  const category = typeof data.category === 'string' ? data.category : 'Love';
  const categoryName =
    typeof data.categoryName === 'string' ? data.categoryName : `${moodEmoji} ${category}`;
  const categoryIcon = typeof data.categoryIcon === 'string' ? data.categoryIcon : moodEmoji;
  const authorName = typeof data.authorName === 'string' ? data.authorName : 'शायरी प्रेमी';
  const language: LanguageType =
    data.language === 'english' || data.language === 'hinglish' || data.language === 'hindi'
      ? data.language
      : detectShayariLanguage(text, 'hindi');
  const title =
    typeof data.title === 'string' && data.title.trim()
      ? data.title
      : `${authorName} की ${category} शायरी ${moodEmoji}`;
  const userId = typeof data.userId === 'string' ? data.userId : '';

  const rawLines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const baseLines = rawLines.length > 0 ? rawLines : [text];
  const lastLine = baseLines[baseLines.length - 1] || '';
  const linesWithMood = lastLine.endsWith(moodEmoji)
    ? baseLines
    : baseLines.map((line, idx) => (idx === baseLines.length - 1 ? `${line} ${moodEmoji}` : line));

  const createdAtMillis = extractTimestampMillis(data.createdAt);
  const reportCount =
    typeof data.reportCount === 'number' && Number.isFinite(data.reportCount)
      ? Math.max(0, Math.floor(data.reportCount))
      : 0;

  return {
    id,
    userId,
    createdAtMillis,
    status: 'approved',
    rawText: text,
    moodEmoji,
    reportCount,
    category: category.toLowerCase(),
    categoryType: category === 'Festival' ? 'festival' : 'feelings',
    categoryName,
    categoryIcon,
    title,
    lines: linesWithMood,
    linesHindi: linesWithMood,
    linesHinglish: linesWithMood,
    linesEnglish: linesWithMood,
    language,
    tags: [category, LANGUAGE_TAG_LABELS[language], authorName, 'DilKiAwaaz'],
    author: authorName,
    initialLikes: 1,
    commentsCount: 0,
    comments: []
  };
}

/**
 * Auto-approves and saves a clean shayari directly to Firebase collection "shayaris"
 * with status="approved" and the visitor's persistent localStorage userId.
 */
export async function createApprovedGlobalShayari(
  input: CreateGlobalShayariInput
): Promise<GlobalShayariItem> {
  const userId = getOrCreateLocalUserId();
  const shayariId = `sh_${Date.now()}_${generateRandomHex(5)}`;

  const cleanAuthor =
    Array.from(input.authorName.trim()).slice(0, AUTHOR_MAX_LENGTH).join('') || 'शायरी प्रेमी';
  const cleanText = Array.from(input.text.trim()).slice(0, SHAYARI_MAX_LENGTH).join('');
  const cleanTitle = Array.from(input.title.trim())
    .slice(0, SHAYARI_SCHEMA_PROPS.title.maxLength)
    .join('');
  const cleanCategoryName = Array.from(input.categoryName.trim())
    .slice(0, SHAYARI_SCHEMA_PROPS.categoryName.maxLength)
    .join('');
  const cleanCategoryIcon = Array.from(input.categoryIcon)
    .slice(0, SHAYARI_SCHEMA_PROPS.categoryIcon.maxLength)
    .join('');
  const cleanMoodEmoji = Array.from(input.moodEmoji)
    .slice(0, SHAYARI_SCHEMA_PROPS.moodEmoji.maxLength)
    .join('');

  const shayariPayload = {
    userId,
    authorName: cleanAuthor,
    category: input.category,
    categoryName: cleanCategoryName,
    categoryIcon: cleanCategoryIcon,
    moodEmoji: cleanMoodEmoji,
    title: cleanTitle,
    text: cleanText,
    language: input.language,
    status: 'approved' as const,
    reportCount: 0,
    createdAt: serverTimestamp()
  };

  try {
    await setDoc(doc(db, 'shayaris', shayariId), shayariPayload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `shayaris/${shayariId}`);
  }

  return mapRawDocToGlobalShayari(shayariId, {
    ...shayariPayload,
    createdAt: Timestamp.now()
  });
}

/**
 * Deletes an author's own shayari from Firebase collection "shayaris"
 * ONLY if the document's userId strictly matches the visitor's userId in localStorage.
 */
export async function deleteGlobalShayariAsAuthor(shayariId: string): Promise<void> {
  const visitorUserId = getOrCreateLocalUserId();
  const shayariRef = doc(db, 'shayaris', shayariId);
  const path = `shayaris/${shayariId}`;

  let docUserId = '';
  try {
    const snap = await getDoc(shayariRef);
    if (!snap.exists()) {
      return;
    }
    const rawData = snap.data() as Record<string, unknown>;
    docUserId = typeof rawData.userId === 'string' ? rawData.userId : '';
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }

  if (!docUserId || docUserId !== visitorUserId) {
    throw new Error('Ownership check failed: userId does not match the author of this shayari.');
  }

  try {
    await deleteDoc(shayariRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Deletes any approved shayari from Firebase collection "shayaris" as Admin (/admin-zq).
 */
export async function deleteGlobalShayariAsAdmin(
  shayariId: string,
  adminPassword?: string
): Promise<void> {
  const isVerifiedFirebaseAdmin = Boolean(
    auth.currentUser?.emailVerified && auth.currentUser?.email === BOOTSTRAPPED_ADMIN_EMAIL
  );
  const isPasswordAuthorized =
    adminPassword === ZQ_ADMIN_PASSWORD_CORRECT || isZqAdminUnlocked();

  if (!isPasswordAuthorized && !isVerifiedFirebaseAdmin) {
    throw new Error('Unauthorized admin deletion attempt.');
  }

  const path = `shayaris/${shayariId}`;
  try {
    await deleteDoc(doc(db, 'shayaris', shayariId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export function isCallerAdminModerator(): boolean {
  const isVerifiedFirebaseAdmin = Boolean(
    auth.currentUser?.emailVerified && auth.currentUser?.email === BOOTSTRAPPED_ADMIN_EMAIL
  );
  return isZqAdminUnlocked() || isVerifiedFirebaseAdmin;
}

/**
 * RULE 3: 3 Report = Auto Delete System (+ Admin 1 Report = Auto Delete) for Apni Shayari.
 * Allows repeat reports even by the same visitor ("chahe 1 hi insan 3 baar mare").
 */
export async function reportGlobalShayari(
  shayariId: string
): Promise<{ deleted: boolean; reportCount: number }> {
  const shayariRef = doc(db, 'shayaris', shayariId);
  const path = `shayaris/${shayariId}`;
  const adminCaller = isCallerAdminModerator();

  let currentReports = 0;
  try {
    const snap = await getDoc(shayariRef);
    if (!snap.exists()) {
      return { deleted: true, reportCount: 3 };
    }
    const raw = snap.data() as Record<string, unknown>;
    currentReports =
      typeof raw.reportCount === 'number' && Number.isFinite(raw.reportCount)
        ? Math.max(0, Math.floor(raw.reportCount))
        : 0;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }

  const nextReportCount = adminCaller ? 3 : currentReports + 1;

  if (nextReportCount >= 3) {
    try {
      await deleteDoc(shayariRef);
      return { deleted: true, reportCount: nextReportCount };
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  }

  try {
    await updateDoc(shayariRef, {
      reportCount: nextReportCount
    });
    return { deleted: false, reportCount: nextReportCount };
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

/**
 * Real-time subscription to all status="approved" shayaris in Firebase collection "shayaris".
 */
export function subscribeApprovedShayaris(
  onItems: (items: GlobalShayariItem[]) => void,
  onSubscriptionError?: (err: Error) => void
): () => void {
  const approvedQuery = query(collection(db, 'shayaris'), where('status', '==', 'approved'));

  return onSnapshot(
    approvedQuery,
    (snapshot) => {
      const list: GlobalShayariItem[] = snapshot.docs.map((docSnap) => {
        const raw = docSnap.data({ serverTimestamps: 'estimate' }) as Record<string, unknown>;
        return mapRawDocToGlobalShayari(docSnap.id, raw);
      });
      list.sort((a, b) => b.createdAtMillis - a.createdAtMillis);
      onItems(list);
    },
    (error) => {
      if (onSubscriptionError) {
        onSubscriptionError(error);
      }
      handleFirestoreError(error, OperationType.LIST, 'shayaris');
    }
  );
}

/* ============================================================================
 * ZQ-MOMENTS 💗 GLOBAL REAL-TIME SOCIAL FEED (Collection: "zq_moments")
 * ========================================================================== */

function mapRawDocToZqMoment(id: string, data: Record<string, unknown>): ZqMomentPost {
  const userId = typeof data.userId === 'string' ? data.userId : '';
  const posterName =
    typeof data.posterName === 'string' && data.posterName.trim()
      ? data.posterName
      : 'ZQ Creator';
  const caption = typeof data.caption === 'string' ? data.caption : '';
  const fontDef = getMomentFontDefinition(
    typeof data.fontStyle === 'string' ? data.fontStyle : 'normal'
  );
  const rawImages = Array.isArray(data.images) ? data.images : [];
  const images = rawImages
    .filter((item): item is string => typeof item === 'string' && item.length > 0)
    .slice(0, 9);
  const likeCount =
    typeof data.likeCount === 'number' && Number.isFinite(data.likeCount)
      ? Math.max(0, Math.floor(data.likeCount))
      : 0;
  const commentCount =
    typeof data.commentCount === 'number' && Number.isFinite(data.commentCount)
      ? Math.max(0, Math.floor(data.commentCount))
      : 0;
  const reportCount =
    typeof data.reportCount === 'number' && Number.isFinite(data.reportCount)
      ? Math.max(0, Math.floor(data.reportCount))
      : 0;
  const timestampMillis = extractTimestampMillis(data.timestamp);

  return {
    id,
    userId,
    posterName,
    caption,
    fontStyle: fontDef.id,
    images,
    likeCount,
    commentCount,
    reportCount,
    timestampMillis
  };
}

function mapRawDocToZqMomentComment(
  id: string,
  momentId: string,
  data: Record<string, unknown>
): ZqMomentComment {
  return {
    id,
    momentId: typeof data.momentId === 'string' ? data.momentId : momentId,
    userId: typeof data.userId === 'string' ? data.userId : '',
    authorName:
      typeof data.authorName === 'string' && data.authorName.trim()
        ? data.authorName
        : 'Visitor',
    text: typeof data.text === 'string' ? data.text : '',
    timestampMillis: extractTimestampMillis(data.timestamp)
  };
}

/**
 * Real-time subscription to all posts in "zq_moments", ordered newest first (timestamp desc).
 */
export function subscribeZqMoments(
  onPosts: (posts: ZqMomentPost[]) => void,
  onSubscriptionError?: (err: Error) => void
): () => void {
  const momentsQuery = query(
    collection(db, 'zq_moments'),
    where('timestamp', '>=', Timestamp.fromMillis(0)),
    orderBy('timestamp', 'desc'),
    limit(100)
  );

  return onSnapshot(
    momentsQuery,
    (snapshot) => {
      const list = snapshot.docs.map((docSnap) => {
        const raw = docSnap.data({ serverTimestamps: 'estimate' }) as Record<string, unknown>;
        return mapRawDocToZqMoment(docSnap.id, raw);
      });
      list.sort((a, b) => b.timestampMillis - a.timestampMillis);
      onPosts(list);
    },
    (error) => {
      if (onSubscriptionError) {
        onSubscriptionError(error);
      }
      handleFirestoreError(error, OperationType.LIST, 'zq_moments');
    }
  );
}

export interface CreateZqMomentInput {
  posterName: string;
  caption: string;
  fontStyle: MomentFontStyleId;
  files: File[];
  existingCaptions?: readonly string[];
  onUploadProgress?: (completed: number, total: number) => void;
}

/**
 * Uploads 1 to 9 photos and creates an Auto-LIVE global real-time post in "zq_moments".
 */
export async function createZqMomentPost(input: CreateZqMomentInput): Promise<string> {
  const userId = getOrCreateLocalUserId();
  const momentId = `zqm_${Date.now()}_${generateRandomHex(5)}`;

  const cleanPosterName =
    Array.from(input.posterName.trim()).slice(0, MOMENT_POSTER_MAX_LENGTH).join('') ||
    'ZQ Creator';
  const cleanCaption = Array.from(input.caption.trim())
    .slice(0, MOMENT_CAPTION_MAX_LENGTH)
    .join('');

  const filterCheck = validateZqMomentSubmission(
    cleanCaption,
    cleanPosterName,
    input.existingCaptions || []
  );
  if (!filterCheck.allowed) {
    throw new Error(filterCheck.message || 'Blocked by ZQ-MOMENTS smart filter.');
  }

  const validFont = getMomentFontDefinition(input.fontStyle).id;

  const uploadedImages = await processAndUploadMomentPhotos(
    storage,
    momentId,
    input.files,
    input.onUploadProgress
  );

  const payload = {
    userId,
    posterName: cleanPosterName,
    caption: cleanCaption,
    fontStyle: validFont,
    images: uploadedImages,
    likeCount: 0,
    commentCount: 0,
    reportCount: 0,
    timestamp: serverTimestamp()
  };

  try {
    await setDoc(doc(db, 'zq_moments', momentId), payload);
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `zq_moments/${momentId}`);
  }

  return momentId;
}

/**
 * Globally increments or decrements likeCount on a "zq_moments" document.
 */
export async function updateZqMomentLikeCount(
  momentId: string,
  delta: 1 | -1
): Promise<void> {
  const path = `zq_moments/${momentId}`;
  try {
    await updateDoc(doc(db, 'zq_moments', momentId), {
      likeCount: increment(delta)
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

/**
 * Real-time subscription to sub-collection "zq_moments/{momentId}/comments".
 */
export function subscribeZqMomentComments(
  momentId: string,
  onComments: (comments: ZqMomentComment[]) => void,
  onSubscriptionError?: (err: Error) => void
): () => void {
  const path = `zq_moments/${momentId}/comments`;
  const commentsQuery = query(
    collection(db, 'zq_moments', momentId, 'comments'),
    where('timestamp', '>=', Timestamp.fromMillis(0)),
    orderBy('timestamp', 'asc'),
    limit(200)
  );

  return onSnapshot(
    commentsQuery,
    (snapshot) => {
      const list = snapshot.docs.map((docSnap) => {
        const raw = docSnap.data({ serverTimestamps: 'estimate' }) as Record<string, unknown>;
        return mapRawDocToZqMomentComment(docSnap.id, momentId, raw);
      });
      list.sort((a, b) => a.timestampMillis - b.timestampMillis);
      onComments(list);
    },
    (error) => {
      if (onSubscriptionError) {
        onSubscriptionError(error);
      }
      handleFirestoreError(error, OperationType.LIST, path);
    }
  );
}

/**
 * Atomically saves a new comment in sub-collection "zq_moments/{momentId}/comments"
 * and increments commentCount on the parent "zq_moments/{momentId}" document.
 */
export async function addZqMomentComment(
  momentId: string,
  authorName: string,
  text: string
): Promise<void> {
  const userId = getOrCreateLocalUserId();
  const commentId = `cmt_${Date.now()}_${generateRandomHex(5)}`;

  const cleanAuthor =
    Array.from(authorName.trim()).slice(0, MOMENT_COMMENT_AUTHOR_MAX_LENGTH).join('') ||
    'Visitor';
  const cleanText = Array.from(text.trim()).slice(0, MOMENT_COMMENT_TEXT_MAX_LENGTH).join('');
  if (!cleanText) {
    throw new Error('Comment text cannot be empty.');
  }

  const filterCheck = validateZqMomentSubmission(cleanText, cleanAuthor);
  if (!filterCheck.allowed) {
    throw new Error(filterCheck.message || 'Blocked by ZQ-MOMENTS smart filter.');
  }

  const momentRef = doc(db, 'zq_moments', momentId);
  const commentRef = doc(db, 'zq_moments', momentId, 'comments', commentId);
  const path = `zq_moments/${momentId}/comments/${commentId}`;

  const batch = writeBatch(db);
  batch.set(commentRef, {
    momentId,
    userId,
    authorName: cleanAuthor,
    text: cleanText,
    timestamp: serverTimestamp()
  });
  batch.update(momentRef, {
    commentCount: increment(1)
  });

  try {
    await batch.commit();
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Deletes a ZQ-MOMENTS post if the caller is the original poster (localStorage userId) or Admin.
 */
export async function deleteZqMomentPost(momentId: string): Promise<void> {
  const visitorUserId = getOrCreateLocalUserId();
  const adminCaller = isCallerAdminModerator();
  const momentRef = doc(db, 'zq_moments', momentId);
  const path = `zq_moments/${momentId}`;

  if (!adminCaller) {
    let docUserId = '';
    try {
      const snap = await getDoc(momentRef);
      if (!snap.exists()) return;
      const raw = snap.data() as Record<string, unknown>;
      docUserId = typeof raw.userId === 'string' ? raw.userId : '';
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }

    if (!docUserId || docUserId !== visitorUserId) {
      throw new Error('Only the author or admin can delete this moment.');
    }
  }

  try {
    await deleteDoc(momentRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * RULE 3: 3 Report = Auto Delete System (+ Admin 1 Report = Auto Delete) for ZQ Moment.
 * Allows repeat reports even by the same visitor ("chahe 1 hi insan 3 baar mare").
 */
export async function reportZqMomentPost(
  momentId: string
): Promise<{ deleted: boolean; reportCount: number }> {
  const momentRef = doc(db, 'zq_moments', momentId);
  const path = `zq_moments/${momentId}`;
  const adminCaller = isCallerAdminModerator();

  let currentReports = 0;
  try {
    const snap = await getDoc(momentRef);
    if (!snap.exists()) {
      return { deleted: true, reportCount: 3 };
    }
    const raw = snap.data() as Record<string, unknown>;
    currentReports =
      typeof raw.reportCount === 'number' && Number.isFinite(raw.reportCount)
        ? Math.max(0, Math.floor(raw.reportCount))
        : 0;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }

  const nextReportCount = adminCaller ? 3 : currentReports + 1;

  if (nextReportCount >= 3) {
    try {
      await deleteDoc(momentRef);
      return { deleted: true, reportCount: nextReportCount };
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  }

  try {
    await updateDoc(momentRef, {
      reportCount: nextReportCount
    });
    return { deleted: false, reportCount: nextReportCount };
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}
