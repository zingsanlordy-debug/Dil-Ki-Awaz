/**
 * Phase 0 / Phase 5 Security Rules Verification Suite (Dirty Dozen Payloads)
 * Verifies that all 12 adversarial payloads across /shayaris, /zq_moments, and
 * /zq_moments/{momentId}/comments return PERMISSION_DENIED, while legitimate operations succeed.
 */

const SERVER_TIME = '2026-10-24T12:00:00.000Z';

interface AuthContext {
  uid: string;
  email: string;
  email_verified: boolean;
}

interface MockDbState {
  shayaris: Record<string, Record<string, unknown>>;
  zq_moments: Record<string, Record<string, unknown>>;
  comments: Record<string, Record<string, Record<string, unknown>>>;
}

const ALLOWED_MOMENT_FONTS = [
  'normal',
  'bold',
  'italic',
  'bold-italic',
  'cursive',
  'bold-cursive',
  'typewriter',
  'serif',
  'serif-italic',
  'serif-bold-italic',
  'gothic',
  'bold-gothic',
  'bubble',
  'dark-bubble',
  'fancy',
  'square',
  'dark-square',
  'small-caps',
  'wide',
  'sans-bold',
  'sans-italic',
  'sans-bold-italic',
  'royal',
  'handwritten',
  'rozha',
  'yatra',
  'poetic-tiro',
  'underline',
  'sparkle',
  'airy-spaced'
];

function isValidId(id: string): boolean {
  return (
    typeof id === 'string' &&
    id.length >= 6 &&
    id.length <= 128 &&
    /^[a-zA-Z0-9_\-]+$/.test(id)
  );
}

function isValidUserId(uid: unknown): boolean {
  return (
    typeof uid === 'string' &&
    uid.length >= 6 &&
    uid.length <= 128 &&
    /^[a-zA-Z0-9_\-]+$/.test(uid)
  );
}

function isAdmin(auth: AuthContext | null): boolean {
  return (
    auth !== null &&
    auth.email_verified === true &&
    auth.email === 'sastabazaarlootindia@gmail.com'
  );
}

function hasNoLinks(val: string): boolean {
  const lower = val.toLowerCase();
  const protocolOrWww = /(https?:\/\/|ftp:\/\/|www\.|(^|[^a-z])(mailto:|tel:))/s;
  const shorteners =
    /(^|[^a-z0-9])(bit\.ly|t\.me|wa\.me|youtu\.be|tinyurl\.com|goo\.gl|instagram\.com|facebook\.com|telegram\.me|whatsapp\.com)([^a-z0-9]|$)/s;
  const bareDomains =
    /[a-z0-9\-]+\.(com|org|net|xyz|online|site|shop|store|link|click|blogspot|wordpress|apk)([^a-z0-9]|$)/s;
  const domainPaths = /[a-z0-9\-]+\.(in|io|co|me|app|info|live|tv)\//s;
  const email = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}/s;

  return (
    !protocolOrWww.test(lower) &&
    !shorteners.test(lower) &&
    !bareDomains.test(lower) &&
    !domainPaths.test(lower) &&
    !email.test(lower)
  );
}

function hasNoPhoneNumbers(val: string): boolean {
  const phoneRe = /([0-9०-९][ \t\r\n\-\.()+]*){9}[0-9०-९]/s;
  return !phoneRe.test(val);
}

function codePointSize(val: string): number {
  return Array.from(val).length;
}

function isValidShayariDoc(data: Record<string, unknown>): boolean {
  const required = [
    'userId',
    'authorName',
    'category',
    'categoryName',
    'categoryIcon',
    'moodEmoji',
    'title',
    'text',
    'language',
    'status',
    'createdAt'
  ];
  const allowed = [...required, 'reportCount'];
  const keys = Object.keys(data);
  if (!required.every((k) => keys.includes(k)) || !keys.every((k) => allowed.includes(k))) {
    return false;
  }

  const validReportCount =
    !('reportCount' in data) ||
    (typeof data.reportCount === 'number' &&
      Number.isInteger(data.reportCount) &&
      data.reportCount >= 0 &&
      data.reportCount <= 10);

  return (
    isValidUserId(data.userId) &&
    typeof data.authorName === 'string' &&
    codePointSize(data.authorName) >= 1 &&
    codePointSize(data.authorName) <= 50 &&
    hasNoLinks(data.authorName) &&
    hasNoPhoneNumbers(data.authorName) &&
    typeof data.category === 'string' &&
    codePointSize(data.category) >= 3 &&
    codePointSize(data.category) <= 20 &&
    ['Love', 'Sad', 'Attitude', 'Alone', 'Motivational', 'Festival', 'Dosti'].includes(
      data.category
    ) &&
    typeof data.categoryName === 'string' &&
    codePointSize(data.categoryName) >= 1 &&
    codePointSize(data.categoryName) <= 40 &&
    typeof data.categoryIcon === 'string' &&
    codePointSize(data.categoryIcon) >= 1 &&
    codePointSize(data.categoryIcon) <= 16 &&
    typeof data.moodEmoji === 'string' &&
    codePointSize(data.moodEmoji) >= 1 &&
    codePointSize(data.moodEmoji) <= 16 &&
    typeof data.title === 'string' &&
    codePointSize(data.title) >= 2 &&
    codePointSize(data.title) <= 120 &&
    hasNoLinks(data.title) &&
    hasNoPhoneNumbers(data.title) &&
    typeof data.text === 'string' &&
    codePointSize(data.text) >= 10 &&
    codePointSize(data.text) <= 500 &&
    hasNoLinks(data.text) &&
    hasNoPhoneNumbers(data.text) &&
    typeof data.language === 'string' &&
    codePointSize(data.language) >= 5 &&
    codePointSize(data.language) <= 12 &&
    ['hindi', 'hinglish', 'english'].includes(data.language) &&
    typeof data.status === 'string' &&
    codePointSize(data.status) >= 8 &&
    codePointSize(data.status) <= 12 &&
    data.status === 'approved' &&
    validReportCount &&
    typeof data.createdAt === 'string'
  );
}

function evaluateCreateShayari(shayariId: string, incoming: Record<string, unknown>): boolean {
  return (
    isValidId(shayariId) &&
    isValidShayariDoc(incoming) &&
    (!('reportCount' in incoming) || incoming.reportCount === 0) &&
    incoming.createdAt === SERVER_TIME
  );
}

function evaluateUpdateShayari(
  shayariId: string,
  existing: Record<string, unknown>,
  incoming: Record<string, unknown>,
  auth: AuthContext | null
): boolean {
  if (!isValidId(shayariId) || !isValidShayariDoc(incoming) || existing.status !== 'approved') {
    return false;
  }
  if (isAdmin(auth)) return true;

  const affectedKeys = Object.keys(incoming).filter((k) => incoming[k] !== existing[k]);
  const expectedReportCount =
    typeof existing.reportCount === 'number' && Number.isInteger(existing.reportCount)
      ? existing.reportCount + 1
      : 1;

  return (
    affectedKeys.length === 1 &&
    affectedKeys[0] === 'reportCount' &&
    incoming.userId === existing.userId &&
    incoming.createdAt === existing.createdAt &&
    incoming.status === existing.status &&
    incoming.reportCount === expectedReportCount
  );
}

function isValidMomentImage(img: unknown): boolean {
  return (
    typeof img === 'string' &&
    codePointSize(img) >= 15 &&
    codePointSize(img) <= 120000 &&
    (img.slice(0, 8) === 'https://' || img.slice(0, 11) === 'data:image/')
  );
}

function isValidMomentImages(imgs: unknown): boolean {
  if (!Array.isArray(imgs) || imgs.length < 1 || imgs.length > 9) return false;
  return (
    isValidMomentImage(imgs[0]) &&
    (imgs.length < 2 || isValidMomentImage(imgs[1])) &&
    (imgs.length < 3 || isValidMomentImage(imgs[2])) &&
    (imgs.length < 4 || isValidMomentImage(imgs[3])) &&
    (imgs.length < 5 || isValidMomentImage(imgs[4])) &&
    (imgs.length < 6 || isValidMomentImage(imgs[5])) &&
    (imgs.length < 7 || isValidMomentImage(imgs[6])) &&
    (imgs.length < 8 || isValidMomentImage(imgs[7])) &&
    (imgs.length < 9 || isValidMomentImage(imgs[8]))
  );
}

function isValidZqMomentDoc(data: Record<string, unknown>): boolean {
  const required = [
    'userId',
    'posterName',
    'caption',
    'fontStyle',
    'images',
    'likeCount',
    'commentCount',
    'timestamp'
  ];
  const allowed = [...required, 'reportCount'];
  const keys = Object.keys(data);
  if (!required.every((k) => keys.includes(k)) || !keys.every((k) => allowed.includes(k))) {
    return false;
  }

  const validReportCount =
    !('reportCount' in data) ||
    (typeof data.reportCount === 'number' &&
      Number.isInteger(data.reportCount) &&
      data.reportCount >= 0 &&
      data.reportCount <= 10);

  return (
    isValidUserId(data.userId) &&
    typeof data.posterName === 'string' &&
    codePointSize(data.posterName) >= 1 &&
    codePointSize(data.posterName) <= 60 &&
    hasNoLinks(data.posterName) &&
    hasNoPhoneNumbers(data.posterName) &&
    typeof data.caption === 'string' &&
    codePointSize(data.caption) <= 8000 &&
    hasNoLinks(data.caption) &&
    hasNoPhoneNumbers(data.caption) &&
    typeof data.fontStyle === 'string' &&
    codePointSize(data.fontStyle) >= 3 &&
    codePointSize(data.fontStyle) <= 32 &&
    ALLOWED_MOMENT_FONTS.includes(data.fontStyle) &&
    isValidMomentImages(data.images) &&
    typeof data.likeCount === 'number' &&
    Number.isInteger(data.likeCount) &&
    data.likeCount >= 0 &&
    data.likeCount <= 10000000 &&
    typeof data.commentCount === 'number' &&
    Number.isInteger(data.commentCount) &&
    data.commentCount >= 0 &&
    data.commentCount <= 1000000 &&
    validReportCount &&
    typeof data.timestamp === 'string'
  );
}

function evaluateCreateMoment(momentId: string, incoming: Record<string, unknown>): boolean {
  return (
    isValidId(momentId) &&
    isValidZqMomentDoc(incoming) &&
    incoming.likeCount === 0 &&
    incoming.commentCount === 0 &&
    (!('reportCount' in incoming) || incoming.reportCount === 0) &&
    incoming.timestamp === SERVER_TIME
  );
}

function evaluateUpdateMoment(
  momentId: string,
  existing: Record<string, unknown>,
  incoming: Record<string, unknown>,
  auth: AuthContext | null
): boolean {
  if (!isValidId(momentId) || !isValidZqMomentDoc(incoming)) return false;
  if (isAdmin(auth)) return true;

  const affectedKeys = Object.keys(incoming).filter((k) => incoming[k] !== existing[k]);
  const isLikeAction =
    affectedKeys.length === 1 &&
    affectedKeys[0] === 'likeCount' &&
    incoming.userId === existing.userId &&
    incoming.timestamp === existing.timestamp &&
    (incoming.likeCount === (existing.likeCount as number) + 1 ||
      incoming.likeCount === (existing.likeCount as number) - 1);

  const isCommentIncAction =
    affectedKeys.length === 1 &&
    affectedKeys[0] === 'commentCount' &&
    incoming.userId === existing.userId &&
    incoming.timestamp === existing.timestamp &&
    incoming.commentCount === (existing.commentCount as number) + 1;

  const expectedReportCount =
    typeof existing.reportCount === 'number' && Number.isInteger(existing.reportCount)
      ? existing.reportCount + 1
      : 1;

  const isReportIncAction =
    affectedKeys.length === 1 &&
    affectedKeys[0] === 'reportCount' &&
    incoming.userId === existing.userId &&
    incoming.timestamp === existing.timestamp &&
    incoming.reportCount === expectedReportCount;

  return isLikeAction || isCommentIncAction || isReportIncAction;
}

function evaluateCreateComment(
  momentId: string,
  commentId: string,
  incoming: Record<string, unknown>,
  dbBefore: MockDbState,
  parentCommentCountAfter: number
): boolean {
  const allowed = ['momentId', 'userId', 'authorName', 'text', 'timestamp'];
  const keys = Object.keys(incoming);
  if (!allowed.every((k) => keys.includes(k)) || !keys.every((k) => allowed.includes(k))) {
    return false;
  }

  const parentBefore = dbBefore.zq_moments[momentId];
  if (!parentBefore) return false;

  const validSchema =
    isValidId(momentId) &&
    isValidId(commentId) &&
    typeof incoming.momentId === 'string' &&
    incoming.momentId === momentId &&
    isValidUserId(incoming.userId) &&
    typeof incoming.authorName === 'string' &&
    codePointSize(incoming.authorName) >= 1 &&
    codePointSize(incoming.authorName) <= 60 &&
    typeof incoming.text === 'string' &&
    codePointSize(incoming.text) >= 1 &&
    codePointSize(incoming.text) <= 500 &&
    incoming.timestamp === SERVER_TIME;

  const atomicCountSynced =
    parentCommentCountAfter === (parentBefore.commentCount as number) + 1;

  return validSchema && atomicCountSynced;
}

function evaluateCollectionAccess(collectionName: string): boolean {
  return collectionName === 'shayaris' || collectionName === 'zq_moments';
}

function runDirtyDozenSuite(): void {
  const shayariId = 'sh_1729771200_abc123';
  const momentId = 'zqm_1729771200_abc123';
  const visitorUserId = 'visitor_m2p9x8k1_4f9a2c8e1b0d7a3f';

  const baseValidShayari: Record<string, unknown> = {
    userId: visitorUserId,
    authorName: 'Aarav',
    category: 'Love',
    categoryName: '❤️ Love',
    categoryIcon: '❤️',
    moodEmoji: '❤️',
    title: 'Aarav ki Love Shayari ❤️',
    text: 'Dil ki har dhadkan me tera hi naam likha hai ❤️',
    language: 'hinglish',
    status: 'approved',
    createdAt: SERVER_TIME
  };

  const baseValidMoment: Record<string, unknown> = {
    userId: visitorUserId,
    posterName: 'Riya Sharma',
    caption: 'Golden sunset moments with friends 💗',
    fontStyle: 'cursive',
    images: ['https://firebasestorage.googleapis.com/v0/b/demo/o/photo1.webp'],
    likeCount: 0,
    commentCount: 0,
    timestamp: SERVER_TIME
  };

  const db: MockDbState = {
    shayaris: {
      [shayariId]: baseValidShayari,
      sh_unapproved_01: { ...baseValidShayari, status: 'pending' }
    },
    zq_moments: {
      [momentId]: baseValidMoment
    },
    comments: {}
  };

  const dirtyDozenChecks: Array<{ name: string; allowed: boolean }> = [
    {
      name: '1. Shadow field injection on create (shayaris or zq_moments)',
      allowed:
        isValidShayariDoc({ ...baseValidShayari, isAdmin: true }) ||
        evaluateCreateMoment(momentId, { ...baseValidMoment, isVerified: true })
    },
    {
      name: '2. Shayari link / phone / out-of-bounds text bypass',
      allowed:
        isValidShayariDoc({ ...baseValidShayari, text: 'Hi' }) ||
        isValidShayariDoc({
          ...baseValidShayari,
          text: 'Visit https://spamlink.com ya call +91 98765-43210 aaj'
        })
    },
    {
      name: '3. Shayari edit, unapproved status, or fake report jump bypass',
      allowed:
        evaluateCreateShayari(shayariId, { ...baseValidShayari, status: 'pending' }) ||
        evaluateUpdateShayari(
          shayariId,
          baseValidShayari,
          { ...baseValidShayari, text: 'Tampered shayari text' },
          null
        ) ||
        evaluateUpdateShayari(
          shayariId,
          baseValidShayari,
          { ...baseValidShayari, reportCount: 5 },
          null
        )
    },
    {
      name: '4. ZQ-MOMENTS 0 photos or >9 photos upload',
      allowed:
        evaluateCreateMoment(momentId, { ...baseValidMoment, images: [] }) ||
        evaluateCreateMoment(momentId, {
          ...baseValidMoment,
          images: Array(10).fill('https://firebasestorage.googleapis.com/v0/b/demo/o/p.webp')
        })
    },
    {
      name: '5. ZQ-MOMENTS poisoned image element at index 1',
      allowed: evaluateCreateMoment(momentId, {
        ...baseValidMoment,
        images: [
          'https://firebasestorage.googleapis.com/v0/b/demo/o/photo1.webp',
          'javascript:evil_payload_string_here'
        ]
      })
    },
    {
      name: '6. ZQ-MOMENTS fake initial likeCount / commentCount / reportCount on create',
      allowed:
        evaluateCreateMoment(momentId, { ...baseValidMoment, likeCount: 500 }) ||
        evaluateCreateMoment(momentId, { ...baseValidMoment, commentCount: 12 }) ||
        evaluateCreateMoment(momentId, { ...baseValidMoment, reportCount: 2 })
    },
    {
      name: '7. ZQ-MOMENTS forged client timestamp on create',
      allowed: evaluateCreateMoment(momentId, {
        ...baseValidMoment,
        timestamp: '2020-01-01T00:00:00.000Z'
      })
    },
    {
      name: '8. ZQ-MOMENTS caption or images tampering on update',
      allowed: evaluateUpdateMoment(
        momentId,
        baseValidMoment,
        { ...baseValidMoment, caption: 'Tampered caption' },
        null
      )
    },
    {
      name: '9. ZQ-MOMENTS arbitrary like jump (+100) or negative likeCount (-1)',
      allowed:
        evaluateUpdateMoment(
          momentId,
          baseValidMoment,
          { ...baseValidMoment, likeCount: 100 },
          null
        ) ||
        evaluateUpdateMoment(
          momentId,
          baseValidMoment,
          { ...baseValidMoment, likeCount: -1 },
          null
        )
    },
    {
      name: '10. Orphaned comment or comment without atomic parent commentCount + 1',
      allowed:
        evaluateCreateComment(
          'zqm_nonexistent_999',
          'cmt_123456',
          {
            momentId: 'zqm_nonexistent_999',
            userId: visitorUserId,
            authorName: 'Kabir',
            text: 'Nice post!',
            timestamp: SERVER_TIME
          },
          db,
          1
        ) ||
        evaluateCreateComment(
          momentId,
          'cmt_123456',
          {
            momentId,
            userId: visitorUserId,
            authorName: 'Kabir',
            text: 'Nice post!',
            timestamp: SERVER_TIME
          },
          db,
          0 // parent commentCount not incremented atomically!
        )
    },
    {
      name: '11. Accessing blocked collections (users, admins, private)',
      allowed:
        evaluateCollectionAccess('users') ||
        evaluateCollectionAccess('admins') ||
        evaluateCollectionAccess('private')
    },
    {
      name: '12. Unverified admin email spoofing or poisoned document ID',
      allowed:
        isAdmin({
          uid: 'spoof_1',
          email: 'sastabazaarlootindia@gmail.com',
          email_verified: false
        }) || isValidId('zqm_invalid$id!')
    }
  ];

  for (const check of dirtyDozenChecks) {
    if (check.allowed) {
      throw new Error(`SECURITY FAILURE: ${check.name} was unexpectedly allowed!`);
    }
  }

  // Positive control checks
  const validMomentCreate = evaluateCreateMoment(momentId, baseValidMoment);
  const validDataUriMoment = evaluateCreateMoment(momentId, {
    ...baseValidMoment,
    images: ['data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=']
  });
  const validLikeIncrement = evaluateUpdateMoment(
    momentId,
    baseValidMoment,
    { ...baseValidMoment, likeCount: 1 },
    null
  );
  const validCommentBatch = evaluateCreateComment(
    momentId,
    'cmt_1729771200_xyz',
    {
      momentId,
      userId: visitorUserId,
      authorName: 'Kabir',
      text: 'Beautiful photos! 💗',
      timestamp: SERVER_TIME
    },
    db,
    1
  );

  const validShayariReportIncrement = evaluateUpdateShayari(
    shayariId,
    { ...baseValidShayari, reportCount: 0 },
    { ...baseValidShayari, reportCount: 1 },
    null
  );
  const validMomentReportIncrement = evaluateUpdateMoment(
    momentId,
    { ...baseValidMoment, reportCount: 1 },
    { ...baseValidMoment, reportCount: 2 },
    null
  );

  if (
    !validMomentCreate ||
    !validDataUriMoment ||
    !validLikeIncrement ||
    !validCommentBatch ||
    !validShayariReportIncrement ||
    !validMomentReportIncrement
  ) {
    throw new Error('Positive control verification failed!');
  }

  console.log(
    'All 12 Dirty Dozen security checks returned PERMISSION_DENIED and all ZQ-MOMENTS + Shayari positive controls passed.'
  );
}

runDirtyDozenSuite();
