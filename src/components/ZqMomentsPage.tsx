import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Heart,
  MessageCircle,
  Share2,
  ImagePlus,
  Send,
  Check,
  UserPlus,
  UserCheck,
  Trash2,
  Loader2,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Copy
} from 'lucide-react';
import {
  DraftMomentPhoto,
  MomentFontStyleId,
  ZqMomentComment,
  ZqMomentPost
} from '../types/zqMoments';
import { PageSeoIntro } from './PageSeoIntro';
import { OriginalDeclarationBox } from './OriginalDeclarationBox';
import { PostReportTriggerAndDrawer, UgcSeoSafeFooter } from './PostReportAndFooter';
import { useGlobalLanguage, TranslatedText } from '../context/GlobalLanguageContext';
import {
  ZQ_MOMENT_STYLISH_FONTS,
  MAX_MOMENT_CAPTION_WORDS,
  getMomentFontDefinition,
  stripStylishUnicode,
  applyStylishUnicode,
  countCaptionWords,
  clampToMaxWords
} from '../utils/zqMomentsFonts';
import {
  subscribeZqMoments,
  createZqMomentPost,
  updateZqMomentLikeCount,
  subscribeZqMomentComments,
  addZqMomentComment,
  deleteZqMomentPost,
  reportZqMomentPost,
  getOrCreateLocalUserId,
  isCallerAdminModerator
} from '../firebase';
import { formatTimeAgo } from '../utils/autoFilter';
import {
  validateZqMomentSubmission,
  ZQ_PROFANITY_BLOCK_MESSAGE
} from '../utils/zqMomentsFilter';
import {
  ALLOWED_MOMENT_PHOTO_ACCEPT,
  PhotoUploadValidationError,
  ZQ_NSFW_PHOTO_BLOCK_MESSAGE,
  validateAndScanMomentPhoto,
  warmupNsfwModel
} from '../utils/zqMomentsMedia';
import {
  INITIAL_ZQ_MOMENT_SEEDS,
  getDeletedSeedIds,
  markSeedPostDeleted,
  getSeedReportCounts,
  reportSeedCommunityPost,
  getSeedMomentLikeDeltas,
  adjustSeedMomentLikeDelta,
  getSeedMomentComments,
  appendSeedMomentComment
} from '../data/communitySeeds';
import { DynamicMomentPhotoGrid } from './DynamicMomentPhotoGrid';

const POSTER_NAME_STORAGE_KEY = 'zq_moments_poster_name';
const LIKED_MOMENTS_STORAGE_KEY = 'zq_moments_liked_ids';
const FOLLOWING_USERS_STORAGE_KEY = 'zq_moments_following_keys';

const AVATAR_GRADIENTS = [
  'from-rose-500 to-pink-600',
  'from-amber-500 to-orange-600',
  'from-fuchsia-500 to-rose-600',
  'from-sky-500 to-indigo-600',
  'from-emerald-500 to-teal-600',
  'from-violet-500 to-purple-600'
];

function getAvatarGradient(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return AVATAR_GRADIENTS[hash % AVATAR_GRADIENTS.length];
}

function getAvatarInitial(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return 'Z';
  const chars = Array.from(trimmed);
  return chars[0].toUpperCase();
}

function readJsonSet(key: string): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeJsonSet(key: string, map: Record<string, boolean>): void {
  try {
    localStorage.setItem(key, JSON.stringify(map));
  } catch {
    // ignore
  }
}

interface MomentCommentsDrawerProps {
  momentId: string;
  isSeedMoment?: boolean;
  visitorUserId: string;
  defaultAuthorName: string;
  onSaveAuthorName: (name: string) => void;
  onSeedCommentAdded?: () => void;
  onToast: (msg: string) => void;
}

const MomentCommentsDrawer: React.FC<MomentCommentsDrawerProps> = ({
  momentId,
  isSeedMoment = false,
  visitorUserId,
  defaultAuthorName,
  onSaveAuthorName,
  onSeedCommentAdded,
  onToast
}) => {
  const [comments, setComments] = useState<ZqMomentComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentAuthor, setCommentAuthor] = useState(defaultAuthorName);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    if (isSeedMoment) {
      setComments(getSeedMomentComments(momentId));
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = subscribeZqMomentComments(
      momentId,
      (list) => {
        setComments(list);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [momentId, isSeedMoment]);

  useEffect(() => {
    const timer = window.setInterval(() => setNowMs(Date.now()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!commentAuthor && defaultAuthorName) {
      setCommentAuthor(defaultAuthorName);
    }
  }, [defaultAuthorName, commentAuthor]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = commentAuthor.trim();
    const trimmedText = commentText.trim();

    if (!trimmedName) {
      setErrorMsg('Please enter your name to comment.');
      return;
    }
    if (!trimmedText) {
      setErrorMsg('Please write a comment before posting.');
      return;
    }
    const filterCheck = validateZqMomentSubmission(trimmedText, trimmedName);
    if (!filterCheck.allowed) {
      setErrorMsg(filterCheck.message || ZQ_PROFANITY_BLOCK_MESSAGE);
      return;
    }

    setSubmitting(true);
    try {
      onSaveAuthorName(trimmedName);
      if (isSeedMoment) {
        appendSeedMomentComment(momentId, visitorUserId, trimmedName, trimmedText);
        setComments(getSeedMomentComments(momentId));
        onSeedCommentAdded?.();
      } else {
        await addZqMomentComment(momentId, trimmedName, trimmedText);
      }
      setCommentText('');
      onToast('Comment posted!');
    } catch {
      setErrorMsg('Could not post comment right now. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="border-t border-slate-100 bg-slate-50/70 px-4 sm:px-5 py-4 space-y-4">
      {/* Real-time Comments List */}
      <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
        {loading ? (
          <div className="py-4 flex items-center justify-center gap-2 text-slate-500 text-[15px]">
            <Loader2 className="w-4 h-4 animate-spin text-[#d94f70]" />
            <span>Loading comments...</span>
          </div>
        ) : comments.length === 0 ? (
          <p className="text-[15px] text-slate-500 py-2 text-center">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((cmt) => (
            <div key={cmt.id} className="flex items-start gap-2.5">
              <div
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${getAvatarGradient(
                  cmt.userId || cmt.authorName
                )} text-white text-[13px] font-bold flex items-center justify-center shrink-0 mt-0.5`}
              >
                {getAvatarInitial(cmt.authorName)}
              </div>
              <div className="flex-1 min-w-0 bg-white border border-slate-200/80 rounded-2xl px-3.5 py-2.5">
                <div className="flex items-center gap-2 text-[14px]">
                  <span className="font-bold text-slate-900 truncate">{cmt.authorName}</span>
                  <span className="text-slate-300" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[13px] text-slate-500 shrink-0">
                    {formatTimeAgo(cmt.timestampMillis, nowMs)}
                  </span>
                </div>
                <p className="text-[16px] text-slate-800 leading-relaxed break-words mt-0.5">
                  {cmt.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {errorMsg && (
        <div
          role="alert"
          className="px-3.5 py-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[14px] font-semibold flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Write Comment Form */}
      <form onSubmit={handleCommentSubmit} className="space-y-2.5">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={commentAuthor}
            onChange={(e) => {
              setCommentAuthor(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            maxLength={60}
            placeholder="Your Name"
            aria-label="Your Name for Comment"
            className="sm:w-40 min-h-[44px] bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-[15px] font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
          />
          <div className="flex-1 flex items-center gap-2">
            <input
              type="text"
              value={commentText}
              onChange={(e) => {
                setCommentText(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              maxLength={500}
              placeholder="Write a comment..."
              aria-label="Write a comment"
              className="flex-1 min-h-[44px] bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-[15px] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
            />
            <button
              type="submit"
              disabled={submitting}
              className="min-h-[44px] min-w-[44px] px-4 py-2 rounded-xl bg-[#d94f70] hover:bg-[#b32f4f] text-white text-[15px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50 shrink-0 whitespace-nowrap"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Post</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

interface ZqMomentsPageProps {
  onNavigateHome?: () => void;
}

export const ZqMomentsPage: React.FC<ZqMomentsPageProps> = () => {
  const { ui } = useGlobalLanguage();
  const visitorUserId = getOrCreateLocalUserId();
  const adminModerator = isCallerAdminModerator();

  // Create Post Box State
  const [posterName, setPosterName] = useState<string>(() => {
    try {
      return localStorage.getItem(POSTER_NAME_STORAGE_KEY) || '';
    } catch {
      return '';
    }
  });
  const [plainCaption, setPlainCaption] = useState<string>('');
  const [selectedFont, setSelectedFont] = useState<MomentFontStyleId>('normal');
  const [draftPhotos, setDraftPhotos] = useState<DraftMomentPhoto[]>([]);
  const [isOriginalDeclared, setIsOriginalDeclared] = useState(false);
  const [isCheckingPhotos, setIsCheckingPhotos] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [uploadStepText, setUploadStepText] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const isComposingRef = useRef(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const createBoxRef = useRef<HTMLDivElement | null>(null);

  // Global Real-time Feed + Initial Seed Feed State
  const [posts, setPosts] = useState<ZqMomentPost[]>([]);
  const [isLoadingFeed, setIsLoadingFeed] = useState(true);
  const [feedFilter, setFeedFilter] = useState<'all' | 'following'>('all');
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>(() =>
    readJsonSet(LIKED_MOMENTS_STORAGE_KEY)
  );
  const [likeBusyMap, setLikeBusyMap] = useState<Record<string, boolean>>({});
  const [followingMap, setFollowingMap] = useState<Record<string, boolean>>(() =>
    readJsonSet(FOLLOWING_USERS_STORAGE_KEY)
  );
  const [openCommentsMap, setOpenCommentsMap] = useState<Record<string, boolean>>({});
  const [deletingMap, setDeletingMap] = useState<Record<string, boolean>>({});
  const [reportingMap, setReportingMap] = useState<Record<string, boolean>>({});
  const [deletedSeedIds, setDeletedSeedIds] = useState<Record<string, boolean>>(() =>
    getDeletedSeedIds()
  );
  const [seedReportCounts, setSeedReportCounts] = useState<Record<string, number>>(() =>
    getSeedReportCounts()
  );
  const [seedLikeDeltas, setSeedLikeDeltas] = useState<Record<string, number>>(() =>
    getSeedMomentLikeDeltas()
  );
  const [seedCommentRev, setSeedCommentRev] = useState(0);
  const [copiedPostId, setCopiedPostId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [nowMs, setNowMs] = useState(() => Date.now());

  // Lightbox Modal State
  const [lightboxState, setLightboxState] = useState<{
    photos: string[];
    index: number;
    posterName: string;
  } | null>(null);

  const toastTimerRef = useRef<number | null>(null);
  const draftPhotosRef = useRef<DraftMomentPhoto[]>([]);
  draftPhotosRef.current = draftPhotos;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  // Real-time subscription to global "zq_moments" feed
  useEffect(() => {
    const unsubscribe = subscribeZqMoments(
      (livePosts) => {
        setPosts(livePosts);
        setIsLoadingFeed(false);
      },
      () => {
        setIsLoadingFeed(false);
      }
    );
    return () => unsubscribe();
  }, []);

  // Live relative time ticker
  useEffect(() => {
    const interval = window.setInterval(() => setNowMs(Date.now()), 30000);
    return () => window.clearInterval(interval);
  }, []);

  // Warm up client-side NSFWJS model in background for fast photo moderation
  useEffect(() => {
    const timer = window.setTimeout(() => {
      warmupNsfwModel();
    }, 350);
    return () => window.clearTimeout(timer);
  }, []);

  // Revoke object URLs on unmount
  useEffect(() => {
    return () => {
      draftPhotosRef.current.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxState) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxState(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxState((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.photos.length }
            : null
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                index: (prev.index - 1 + prev.photos.length) % prev.photos.length
              }
            : null
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxState]);

  const persistPosterName = (name: string) => {
    setPosterName(name);
    try {
      localStorage.setItem(POSTER_NAME_STORAGE_KEY, name);
    } catch {
      // ignore
    }
  };

  // Live textarea value rendered in the currently selected stylish font
  const liveStyledTextareaValue = applyStylishUnicode(plainCaption, selectedFont, true);
  const currentWordCount = countCaptionWords(plainCaption);
  const activeFontDef = getMomentFontDefinition(selectedFont);

  const handleCaptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (formError) setFormError(null);
    const rawVal = e.target.value;
    const selectionStart = e.target.selectionStart ?? rawVal.length;

    if (isComposingRef.current) {
      const normalized = stripStylishUnicode(rawVal);
      const clamped = clampToMaxWords(normalized, MAX_MOMENT_CAPTION_WORDS);
      setPlainCaption(clamped.text);
      return;
    }

    const beforeCursorPlain = stripStylishUnicode(rawVal.slice(0, selectionStart));
    const fullPlain = stripStylishUnicode(rawVal);
    const clamped = clampToMaxWords(fullPlain, MAX_MOMENT_CAPTION_WORDS);
    setPlainCaption(clamped.text);

    if (clamped.wasClamped) {
      showToast(`Maximum ${MAX_MOMENT_CAPTION_WORDS} words allowed`);
    }

    // Preserve exact cursor placement when Unicode surrogate pairs are used
    const nextBeforeStyled = applyStylishUnicode(
      beforeCursorPlain.slice(0, clamped.text.length),
      selectedFont,
      true
    );
    const nextCursorPos = nextBeforeStyled.length;
    requestAnimationFrame(() => {
      if (textareaRef.current && document.activeElement === textareaRef.current) {
        textareaRef.current.setSelectionRange(nextCursorPos, nextCursorPos);
      }
    });
  };

  const handleSelectPhotos = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormError(null);
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    e.target.value = '';
    if (selectedFiles.length === 0) return;

    const remainingSlots = 9 - draftPhotos.length;
    if (remainingSlots <= 0) {
      showToast('Maximum 9 photos allowed per post');
      return;
    }

    const candidates = selectedFiles.slice(0, remainingSlots);
    if (selectedFiles.length > remainingSlots) {
      showToast('Selected first photos up to 9 maximum');
    }

    setIsCheckingPhotos(true);
    try {
      const safeAdded: DraftMomentPhoto[] = [];
      let blockedMessage: string | null = null;

      for (let idx = 0; idx < candidates.length; idx++) {
        const file = candidates[idx];
        try {
          await validateAndScanMomentPhoto(file);
          safeAdded.push({
            id: `draft_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 7)}`,
            file,
            previewUrl: URL.createObjectURL(file)
          });
        } catch (err) {
          const msg =
            err instanceof PhotoUploadValidationError
              ? err.message
              : 'Only JPG, PNG, and WEBP photos up to 5MB are allowed.';
          if (!blockedMessage || msg === ZQ_NSFW_PHOTO_BLOCK_MESSAGE) {
            blockedMessage = msg;
          }
        }
      }

      if (safeAdded.length > 0) {
        setDraftPhotos((prev) => {
          const available = Math.max(0, 9 - prev.length);
          const acceptedSlice = safeAdded.slice(0, available);
          const overflowSlice = safeAdded.slice(available);
          overflowSlice.forEach((p) => URL.revokeObjectURL(p.previewUrl));
          return [...prev, ...acceptedSlice];
        });
      }

      if (blockedMessage) {
        setFormError(blockedMessage);
      }
    } finally {
      setIsCheckingPhotos(false);
    }
  };

  const handleRemoveDraftPhoto = (index: number) => {
    setDraftPhotos((prev) => {
      const target = prev[index];
      if (target) {
        URL.revokeObjectURL(target.previewUrl);
      }
      return prev.filter((_, idx) => idx !== index);
    });
  };

  // Merge live Firestore posts with the 5 Initial Original Guest Seed Moments
  const combinedPosts = useMemo<ZqMomentPost[]>(() => {
    void seedCommentRev;
    const activeSeeds = INITIAL_ZQ_MOMENT_SEEDS.filter(
      (seed) => !deletedSeedIds[seed.id]
    ).map((seed) => ({
      ...seed,
      likeCount: Math.max(0, seed.likeCount + (seedLikeDeltas[seed.id] || 0)),
      commentCount: getSeedMomentComments(seed.id).length,
      reportCount: seedReportCounts[seed.id] || 0
    }));

    const merged = [...posts, ...activeSeeds];
    merged.sort((a, b) => b.timestampMillis - a.timestampMillis);
    return merged;
  }, [posts, deletedSeedIds, seedLikeDeltas, seedReportCounts, seedCommentRev]);

  const existingCaptionPool = useMemo<string[]>(
    () =>
      combinedPosts
        .map((p) => stripStylishUnicode(p.caption))
        .filter((txt) => txt.trim().length > 0),
    [combinedPosts]
  );

  const handleSubmitMoment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isCheckingPhotos || isPosting) return;
    setFormError(null);

    // RULE 1: Compulsory Original Declaration check
    if (!isOriginalDeclared) {
      setFormError(
        'Post LIVE karne se pehle "Haan, ye mera khud ka original content hai" checkbox tick karna anivarya hai.'
      );
      return;
    }

    const trimmedName = posterName.trim();
    if (!trimmedName) {
      setFormError('Please enter Your Name before sharing.');
      return;
    }

    // RULE 2: Smart Auto-Filter on Caption & Author (gaali, link, copy-paste, >=80% duplicate)
    const filterCheck = validateZqMomentSubmission(
      plainCaption,
      trimmedName,
      existingCaptionPool
    );
    if (!filterCheck.allowed) {
      setFormError(filterCheck.message || ZQ_PROFANITY_BLOCK_MESSAGE);
      return;
    }

    if (currentWordCount > MAX_MOMENT_CAPTION_WORDS) {
      setFormError(`Caption cannot exceed ${MAX_MOMENT_CAPTION_WORDS} words.`);
      return;
    }

    if (draftPhotos.length < 1 || draftPhotos.length > 9) {
      setFormError('Please upload at least 1 original photo (up to 9 photos).');
      return;
    }

    setIsPosting(true);
    setUploadStepText('Auto-Filter checking photo originality & safety...');

    try {
      persistPosterName(trimmedName);
      const finalStyledCaption = applyStylishUnicode(plainCaption.trim(), selectedFont, false);

      await createZqMomentPost({
        posterName: trimmedName,
        caption: finalStyledCaption,
        fontStyle: selectedFont,
        files: draftPhotos.map((d) => d.file),
        existingCaptions: existingCaptionPool,
        onUploadProgress: (done, total) => {
          setUploadStepText(
            done < total
              ? `Uploading photos (${done}/${total})...`
              : 'Going LIVE on ZQ-MOMENTS 💗...'
          );
        }
      });

      // Clean up draft state after successful Auto-LIVE publish
      draftPhotos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      setDraftPhotos([]);
      setPlainCaption('');
      setIsOriginalDeclared(false);
      setUploadStepText('');
      showToast('Auto-LIVE on ZQ-MOMENTS 💗!');
    } catch (err) {
      if (err instanceof PhotoUploadValidationError) {
        setFormError(err.message);
      } else if (err instanceof Error && err.message && !err.message.trim().startsWith('{')) {
        setFormError(err.message);
      } else {
        setFormError('Could not publish your post right now. Please try again.');
      }
    } finally {
      setIsPosting(false);
      setUploadStepText('');
    }
  };

  const handleCopyCaption = async (post: ZqMomentPost) => {
    if (!post.caption.trim()) return;
    try {
      await navigator.clipboard.writeText(post.caption);
      setCopiedPostId(post.id);
      showToast('Copied!');
      window.setTimeout(() => {
        setCopiedPostId((prev) => (prev === post.id ? null : prev));
      }, 1800);
    } catch {
      showToast('Could not copy text');
    }
  };

  const handleToggleLike = async (post: ZqMomentPost) => {
    if (likeBusyMap[post.id]) return;
    const currentlyLiked = Boolean(likedMap[post.id]);
    const delta: 1 | -1 = currentlyLiked ? -1 : 1;

    if (delta === -1 && post.likeCount <= 0) {
      const cleaned = { ...likedMap };
      delete cleaned[post.id];
      setLikedMap(cleaned);
      writeJsonSet(LIKED_MOMENTS_STORAGE_KEY, cleaned);
      return;
    }

    const nextLikedMap = { ...likedMap };
    if (currentlyLiked) {
      delete nextLikedMap[post.id];
    } else {
      nextLikedMap[post.id] = true;
    }
    setLikedMap(nextLikedMap);
    writeJsonSet(LIKED_MOMENTS_STORAGE_KEY, nextLikedMap);

    if (post.isSeedPost) {
      adjustSeedMomentLikeDelta(post.id, delta);
      setSeedLikeDeltas(getSeedMomentLikeDeltas());
      return;
    }

    setLikeBusyMap((prev) => ({ ...prev, [post.id]: true }));

    try {
      await updateZqMomentLikeCount(post.id, delta);
    } catch {
      // Revert local toggle on network failure
      setLikedMap(likedMap);
      writeJsonSet(LIKED_MOMENTS_STORAGE_KEY, likedMap);
      showToast('Could not update like right now');
    } finally {
      setLikeBusyMap((prev) => {
        const next = { ...prev };
        delete next[post.id];
        return next;
      });
    }
  };

  const getFollowKey = (post: ZqMomentPost) =>
    post.userId ? `uid:${post.userId}` : `name:${post.posterName.toLowerCase()}`;

  const handleToggleFollow = (post: ZqMomentPost) => {
    const key = getFollowKey(post);
    const isNowFollowing = !followingMap[key];
    const nextMap = { ...followingMap };
    if (isNowFollowing) {
      nextMap[key] = true;
    } else {
      delete nextMap[key];
    }
    setFollowingMap(nextMap);
    writeJsonSet(FOLLOWING_USERS_STORAGE_KEY, nextMap);
    showToast(
      isNowFollowing ? `Following ${post.posterName}` : `Unfollowed ${post.posterName}`
    );
  };

  const handleShareMoment = async (post: ZqMomentPost) => {
    const shareUrl = `${window.location.origin}/zq-moments`;
    const shareText = post.caption
      ? `${post.posterName} on ZQ-MOMENTS 💗:\n\n${post.caption}\n\n${shareUrl}`
      : `Check out ${post.posterName}'s post on ZQ-MOMENTS 💗: ${shareUrl}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'ZQ-MOMENTS 💗',
          text: post.caption || `${post.posterName} on ZQ-MOMENTS 💗`,
          url: shareUrl
        });
        return;
      } catch {
        // User cancelled or share failed; fall back to clipboard only if not AbortError
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      showToast('Post link & caption copied!');
    } catch {
      showToast('Could not share post');
    }
  };

  const handleDeleteMoment = async (post: ZqMomentPost) => {
    if (deletingMap[post.id]) return;

    if (post.isSeedPost) {
      if (!adminModerator) return;
      markSeedPostDeleted(post.id);
      setDeletedSeedIds(getDeletedSeedIds());
      showToast('Admin: Post deleted');
      return;
    }

    setDeletingMap((prev) => ({ ...prev, [post.id]: true }));
    try {
      await deleteZqMomentPost(post.id);
      showToast('Post deleted');
    } catch {
      showToast('Could not delete post');
    } finally {
      setDeletingMap((prev) => {
        const next = { ...prev };
        delete next[post.id];
        return next;
      });
    }
  };

  // RULE 3: 3 Report = Instant Auto Delete (+ Admin 1 Report = Instant Auto Delete)
  const handleReportMoment = async (post: ZqMomentPost, _reason: string) => {
    if (reportingMap[post.id]) return;

    setReportingMap((prev) => ({ ...prev, [post.id]: true }));
    try {
      if (post.isSeedPost) {
        const res = reportSeedCommunityPost(post.id, adminModerator);
        setSeedReportCounts(getSeedReportCounts());
        if (res.deleted) {
          setDeletedSeedIds(getDeletedSeedIds());
          showToast(
            adminModerator
              ? 'Admin 1-Report Power: Post Auto-Deleted!'
              : '3 Reports complete — Post Auto-Deleted!'
          );
        } else {
          showToast(`Report darj (${res.reportCount}/3) — 3 Report par Auto-Delete`);
        }
        return;
      }

      const res = await reportZqMomentPost(post.id);
      if (res.deleted) {
        showToast(
          adminModerator
            ? 'Admin 1-Report Power: Post Auto-Deleted!'
            : '3 Reports complete — Post Auto-Deleted!'
        );
      } else {
        showToast(`Report darj (${res.reportCount}/3) — 3 Report par Auto-Delete`);
      }
    } catch {
      showToast('Could not submit report right now');
    } finally {
      setReportingMap((prev) => {
        const next = { ...prev };
        delete next[post.id];
        return next;
      });
    }
  };

  const displayedPosts =
    feedFilter === 'following'
      ? combinedPosts.filter((p) => Boolean(followingMap[getFollowKey(p)]))
      : combinedPosts;

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Floating Toast Notification ("Copied!", etc.) */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-slate-900 text-white text-[15px] font-semibold shadow-xl flex items-center gap-2 pointer-events-none transition-opacity duration-150"
        >
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">{toastMessage}</span>
        </div>
      )}

      {/* Top Page SEO Title & Soft Description Box */}
      <div className="mb-6">
        <PageSeoIntro
          title={ui.momentsIntroTitle}
          description={ui.momentsIntroDesc}
        />
      </div>

      {/* 1. ZQ-MOMENTS 💗 SECTION HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#ffe4e8]">
        <div>
          <h2 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#d94f70] leading-tight">
            ZQ-MOMENTS 💗
          </h2>
          <p className="text-[16px] text-slate-600 mt-1">
            <TranslatedText text="100% Original Moments · Smart Auto-Filter · Instant Auto-LIVE · 3-Report Auto-Delete" />
          </p>
        </div>

        {/* Interactive Feed Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#fff0f3] border border-[#ffe4e8] rounded-2xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setFeedFilter('all')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-[15px] font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
              feedFilter === 'all'
                ? 'bg-[#d94f70] text-white shadow-2xs'
                : 'text-slate-700 hover:text-[#d94f70]'
            }`}
          >
            <TranslatedText text="All Moments" /> ({combinedPosts.length})
          </button>
          <button
            type="button"
            onClick={() => setFeedFilter('following')}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-[15px] font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              feedFilter === 'following'
                ? 'bg-[#d94f70] text-white shadow-2xs'
                : 'text-slate-700 hover:text-[#d94f70]'
            }`}
          >
            <TranslatedText text="Following" />
          </button>
        </div>
      </div>

      {/* Responsive Desktop 2-Column / Mobile 1-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
        {/* LEFT COLUMN: 2. CREATE POST BOX */}
        <section
          ref={createBoxRef}
          aria-label="Create ZQ-MOMENTS Post"
          className="lg:col-span-5 lg:sticky lg:top-6 bg-white border border-[#ffe4e8] rounded-3xl p-5 sm:p-6 shadow-xs space-y-5"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
            <h2 className="text-[20px] font-bold text-slate-900">
              <TranslatedText text="Create Post" />
            </h2>
            <span className="text-[14px] text-slate-500 font-medium">Public · Live</span>
          </div>

          {formError && (
            <div
              role="alert"
              className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-[15px] font-semibold flex items-center gap-2.5"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmitMoment} className="space-y-4">
            {/* Field 1 (Top): Input for "Your Name" */}
            <div>
              <label
                htmlFor="zq-moment-poster-name"
                className="block text-[15px] font-bold text-slate-800 mb-1.5"
              >
                <TranslatedText text="Your Name" />
              </label>
              <input
                id="zq-moment-poster-name"
                type="text"
                value={posterName}
                onChange={(e) => {
                  setPosterName(e.target.value);
                  if (formError) setFormError(null);
                }}
                maxLength={60}
                placeholder="Your Name"
                className="w-full min-h-[48px] bg-[#fff8f9] border border-[#ffe4e8] rounded-2xl px-4 py-2.5 text-[16px] font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70]"
              />
            </div>

            {/* Field 2 (Middle): Textarea for caption with MAX 500 WORDS limit + live counter 150/500 */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="zq-moment-caption"
                  className="text-[15px] font-bold text-slate-800"
                >
                  <TranslatedText text="Caption" />
                </label>
                <span
                  className={`text-[14px] font-semibold tabular-nums ${
                    currentWordCount >= MAX_MOMENT_CAPTION_WORDS
                      ? 'text-red-600'
                      : 'text-slate-500'
                  }`}
                >
                  {currentWordCount}/{MAX_MOMENT_CAPTION_WORDS}
                </span>
              </div>
              <textarea
                id="zq-moment-caption"
                ref={textareaRef}
                rows={4}
                value={liveStyledTextareaValue}
                onCompositionStart={() => {
                  isComposingRef.current = true;
                }}
                onCompositionEnd={(e) => {
                  isComposingRef.current = false;
                  const normalized = stripStylishUnicode(e.currentTarget.value);
                  const clamped = clampToMaxWords(normalized, MAX_MOMENT_CAPTION_WORDS);
                  setPlainCaption(clamped.text);
                }}
                onChange={handleCaptionChange}
                placeholder="Share your thoughts, story, or shayari (up to 500 words)..."
                className={`w-full bg-[#fff8f9] border border-[#ffe4e8] rounded-2xl px-4 py-3 text-[18px] leading-[1.7] text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d94f70] resize-y ${activeFontDef.cssClass}`}
              />
            </div>

            {/* Field 3: Stylish Font Selector (30 stylish fonts in a horizontal scrollable row) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-slate-700">
                  Stylish Font ({ZQ_MOMENT_STYLISH_FONTS.length} Styles)
                </span>
                <span className="text-[13px] text-slate-500">{activeFontDef.label}</span>
              </div>

              <div
                role="radiogroup"
                aria-label="Select Stylish Font"
                className="flex items-center gap-2 overflow-x-auto pb-2 pt-0.5 scroll-smooth"
              >
                {ZQ_MOMENT_STYLISH_FONTS.map((font) => {
                  const isActive = selectedFont === font.id;
                  return (
                    <button
                      key={font.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => setSelectedFont(font.id)}
                      className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-[15px] transition-all cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-xs'
                          : 'bg-white text-slate-800 border-slate-200 hover:border-[#d94f70]'
                      } ${font.cssClass}`}
                    >
                      <span>{font.previewChip}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Field 4 (Bottom): Photo Upload (MIN 1, MAX 9 photos with Dynamic Grid Preview) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[15px] font-bold text-slate-800">
                  Photos ({draftPhotos.length}/9)
                </span>
                <span className="text-[12px] text-slate-500 text-right">
                  Original Only · No Logo/Watermark/Blur/NSFW
                </span>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept={ALLOWED_MOMENT_PHOTO_ACCEPT}
                multiple
                onChange={handleSelectPhotos}
                className="hidden"
              />

              {draftPhotos.length > 0 && (
                <DynamicMomentPhotoGrid
                  photos={draftPhotos.map((d) => d.previewUrl)}
                  altPrefix="Selected preview"
                  onRemovePhoto={handleRemoveDraftPhoto}
                />
              )}

              {draftPhotos.length < 9 && (
                <button
                  type="button"
                  disabled={isCheckingPhotos || isPosting}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full min-h-[52px] px-4 py-3 rounded-2xl border border-dashed border-[#d94f70]/60 bg-[#fff8f9] hover:bg-[#fff0f3] text-[#d94f70] text-[16px] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-60 whitespace-nowrap"
                >
                  {isCheckingPhotos ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                      <span>Auto-Filter scanning photo...</span>
                    </>
                  ) : (
                    <>
                      <ImagePlus className="w-5 h-5 shrink-0" />
                      <span>
                        {draftPhotos.length === 0
                          ? 'Select 1 to 9 Original Photos'
                          : `Add More Photos (${draftPhotos.length}/9)`}
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* RULE 1: COMPULSORY ORIGINAL DECLARATION DIRECTLY ABOVE UPLOAD/POST BUTTON */}
            <OriginalDeclarationBox
              id="zq-moment-original-declaration"
              checked={isOriginalDeclared}
              onChange={(checked) => {
                setIsOriginalDeclared(checked);
                if (checked && formError) setFormError(null);
              }}
            />

            {/* Post Button: "Share to ZQ-MOMENTS 💗" (Disabled until Original Declaration is ticked) */}
            <div className="space-y-2">
              <button
                type="submit"
                disabled={isPosting || isCheckingPhotos || !isOriginalDeclared}
                className="w-full min-h-[54px] px-5 py-3.5 rounded-2xl btn-glossy-pink text-white text-[18px] font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-[0.99] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isPosting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin shrink-0" />
                    <span className="truncate">{uploadStepText || 'Going LIVE...'}</span>
                  </>
                ) : (
                  <span>Share to ZQ-MOMENTS 💗 (Auto-LIVE)</span>
                )}
              </button>
              {!isOriginalDeclared && (
                <p className="text-[12px] font-semibold text-slate-600 text-center">
                  * Post LIVE karne se pehle upar Original Content checkbox tick karein.
                </p>
              )}
            </div>
          </form>
        </section>

        {/* RIGHT COLUMN: 3. GLOBAL REAL-TIME FEED DISPLAY */}
        <section
          aria-label="ZQ-MOMENTS Global Feed"
          className="lg:col-span-7 space-y-6"
        >
          {isLoadingFeed && combinedPosts.length === 0 ? (
            <div className="bg-white border border-[#ffe4e8] rounded-3xl p-12 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-[#d94f70] animate-spin mx-auto" />
              <p className="text-[17px] font-semibold text-slate-600">
                Loading live ZQ-MOMENTS 💗 feed...
              </p>
            </div>
          ) : displayedPosts.length === 0 ? (
            <div className="bg-white border border-[#ffe4e8] rounded-3xl p-10 sm:p-12 text-center space-y-4">
              <h3 className="text-[22px] font-bold text-slate-900">
                {feedFilter === 'following'
                  ? 'No posts from people you follow yet'
                  : 'Be the first to share on ZQ-MOMENTS 💗'}
              </h3>
              <p className="text-[16px] text-slate-600 max-w-md mx-auto">
                {feedFilter === 'following'
                  ? 'Tap Follow on any creator in All Moments to see their posts here.'
                  : 'Upload 1 to 9 clean original photos, pick your favorite stylish font, and share your moment live!'}
              </p>
              {feedFilter === 'following' ? (
                <button
                  type="button"
                  onClick={() => setFeedFilter('all')}
                  className="min-h-[48px] px-6 py-2.5 rounded-2xl bg-[#d94f70] text-white text-[16px] font-bold cursor-pointer"
                >
                  View All Moments
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    createBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
                    fileInputRef.current?.click();
                  }}
                  className="min-h-[48px] px-6 py-2.5 rounded-2xl bg-[#d94f70] text-white text-[16px] font-bold cursor-pointer"
                >
                  Upload First Photo
                </button>
              )}
            </div>
          ) : (
            displayedPosts.map((post) => {
              const postFontDef = getMomentFontDefinition(post.fontStyle);
              const isLiked = Boolean(likedMap[post.id]);
              const isFollowing = Boolean(followingMap[getFollowKey(post)]);
              const isCommentsOpen = Boolean(openCommentsMap[post.id]);
              const canDelete =
                (!post.isSeedPost && post.userId && post.userId === visitorUserId) ||
                adminModerator;
              const isCopied = copiedPostId === post.id;

              return (
                <article
                  key={post.id}
                  className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-2xs transition-shadow hover:shadow-sm"
                >
                  {/* a) TOP: Left = Round profile icon + Poster Name + Time Ago | Right = Follow button */}
                  <div className="px-4 sm:px-5 py-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-11 h-11 rounded-full bg-gradient-to-br ${getAvatarGradient(
                          post.userId || post.posterName
                        )} text-white text-[18px] font-bold flex items-center justify-center shrink-0 shadow-2xs`}
                      >
                        {getAvatarInitial(post.posterName)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[17px] font-bold text-slate-900 truncate">
                          {post.posterName}
                        </div>
                        <div className="flex items-center gap-1.5 text-[13px] text-slate-500">
                          <span>{formatTimeAgo(post.timestampMillis, nowMs)}</span>
                          <span aria-hidden="true">·</span>
                          <span>ZQ-MOMENTS</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleToggleFollow(post)}
                        className={`min-h-[44px] px-4 py-2 rounded-xl text-[15px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                          isFollowing
                            ? 'bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200'
                            : 'bg-[#fff0f3] text-[#d94f70] border border-[#ffe4e8] hover:bg-[#d94f70] hover:text-white'
                        }`}
                      >
                        {isFollowing ? (
                          <>
                            <UserCheck className="w-4 h-4 shrink-0" />
                            <span>Following</span>
                          </>
                        ) : (
                          <>
                            <UserPlus className="w-4 h-4 shrink-0" />
                            <span>Follow</span>
                          </>
                        )}
                      </button>

                      {canDelete && (
                        <button
                          type="button"
                          onClick={() => handleDeleteMoment(post)}
                          disabled={Boolean(deletingMap[post.id])}
                          aria-label="Delete your post"
                          title="Delete post"
                          className="min-h-[44px] min-w-[44px] rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
                        >
                          {deletingMap[post.id] ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <Trash2 className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* b) MIDDLE: Copyable Caption Text in its selected Stylish Font */}
                  {post.caption.trim().length > 0 && (
                    <div className="px-4 sm:px-5 pb-3.5">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => handleCopyCaption(post)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            void handleCopyCaption(post);
                          }
                        }}
                        title="Click to copy caption"
                        className="group relative rounded-2xl px-3 py-2 -mx-3 hover:bg-[#fff8f9] active:bg-[#fff0f3] transition-colors cursor-pointer"
                      >
                        <p
                          className={`text-[19px] leading-[1.75] text-slate-900 whitespace-pre-line break-words ${postFontDef.cssClass}`}
                        >
                          <TranslatedText text={post.caption} />
                        </p>
                        <div className="mt-1.5 flex items-center justify-end gap-1 text-[12px] text-slate-400 group-hover:text-[#d94f70] transition-colors">
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-600 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Tap caption to copy</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* c) MIDDLE-BOTTOM: Dynamic Photo Grid (1 to 9 photos, zero empty boxes) */}
                  {post.images.length > 0 && (
                    <div className="px-3 sm:px-4 pb-3">
                      <DynamicMomentPhotoGrid
                        photos={post.images}
                        altPrefix={`${post.posterName} - Hindi Shayari Photo Status on ZQ Moments`}
                        onPhotoClick={(photoIdx) =>
                          setLightboxState({
                            photos: post.images,
                            index: photoIdx,
                            posterName: post.posterName
                          })
                        }
                      />
                    </div>
                  )}

                  {/* d) BOTTOM: 3 Action Buttons in a row (Like ❤️, Comment 💬, Share) */}
                  <div className="px-3 sm:px-4 py-2.5 border-t border-slate-100 grid grid-cols-3 gap-2">
                    {/* Action 1: Like ❤️ Button */}
                    <button
                      type="button"
                      onClick={() => handleToggleLike(post)}
                      disabled={Boolean(likeBusyMap[post.id])}
                      className={`min-h-[46px] px-3 py-2 rounded-xl text-[16px] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap tabular-nums ${
                        isLiked
                          ? 'bg-[#fff0f3] text-[#d94f70]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#d94f70]'
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 shrink-0 transition-transform duration-150 ${
                          isLiked ? 'fill-[#d94f70] text-[#d94f70] scale-110' : ''
                        }`}
                      />
                      <span>{post.likeCount}</span>
                    </button>

                    {/* Action 2: Comment 💬 Button */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenCommentsMap((prev) => ({
                          ...prev,
                          [post.id]: !prev[post.id]
                        }))
                      }
                      className={`min-h-[46px] px-3 py-2 rounded-xl text-[16px] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap tabular-nums ${
                        isCommentsOpen
                          ? 'bg-slate-100 text-slate-900'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span>{post.commentCount}</span>
                    </button>

                    {/* Action 3: Share Button */}
                    <button
                      type="button"
                      onClick={() => handleShareMoment(post)}
                      className="min-h-[46px] px-3 py-2 rounded-xl text-[16px] font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Share2 className="w-5 h-5 shrink-0" />
                      <span>Share</span>
                    </button>
                  </div>

                  {/* RULE 3: REPORT BUTTON & DRAWER (3 Reports = Instant Auto Delete, Admin = 1 Report Auto Delete) */}
                  <div className="px-4 sm:px-5 py-2.5 border-t border-slate-100 bg-white">
                    <PostReportTriggerAndDrawer
                      reportCount={post.reportCount || 0}
                      isReporting={Boolean(reportingMap[post.id])}
                      isAdminModerator={adminModerator}
                      onSubmitReport={(reason) => handleReportMoment(post, reason)}
                      compactButton={true}
                    />
                  </div>

                  {/* Expandable Real-Time Comments Sub-Collection Drawer */}
                  {isCommentsOpen && (
                    <MomentCommentsDrawer
                      momentId={post.id}
                      isSeedMoment={Boolean(post.isSeedPost)}
                      visitorUserId={visitorUserId}
                      defaultAuthorName={posterName}
                      onSaveAuthorName={persistPosterName}
                      onSeedCommentAdded={() => setSeedCommentRev((n) => n + 1)}
                      onToast={showToast}
                    />
                  )}

                  {/* RULE 4: COMPULSORY SEO SAFE FOOTER ON EVERY ZQ MOMENT POST */}
                  <UgcSeoSafeFooter />
                </article>
              );
            })
          )}
        </section>
      </div>

      {/* Full-Screen Photo Lightbox Viewer */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxState.posterName} photo viewer`}
          onClick={() => setLightboxState(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex flex-col items-center justify-center p-4"
        >
          <div className="w-full max-w-4xl flex items-center justify-between text-white pb-3">
            <span className="text-[16px] font-semibold truncate">
              {lightboxState.posterName} · {lightboxState.index + 1} /{' '}
              {lightboxState.photos.length}
            </span>
            <button
              type="button"
              onClick={() => setLightboxState(null)}
              aria-label="Close photo viewer"
              className="min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative w-full max-w-4xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxState.photos.length > 1 && (
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() =>
                  setLightboxState((prev) =>
                    prev
                      ? {
                          ...prev,
                          index:
                            (prev.index - 1 + prev.photos.length) % prev.photos.length
                        }
                      : null
                  )
                }
                className="absolute left-2 sm:left-4 z-10 min-h-[44px] min-w-[44px] rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img
              src={lightboxState.photos[lightboxState.index]}
              alt={`${lightboxState.posterName} - Hindi Shayari Photo Status ${lightboxState.index + 1} on ZQ Moments`}
              referrerPolicy="no-referrer"
              className="max-h-[78vh] max-w-full object-contain rounded-2xl select-none"
            />

            {lightboxState.photos.length > 1 && (
              <button
                type="button"
                aria-label="Next photo"
                onClick={() =>
                  setLightboxState((prev) =>
                    prev
                      ? { ...prev, index: (prev.index + 1) % prev.photos.length }
                      : null
                  )
                }
                className="absolute right-2 sm:right-4 z-10 min-h-[44px] min-w-[44px] rounded-full bg-slate-900/75 hover:bg-slate-900 text-white flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
