import React, { useMemo, useState } from 'react';
import {
  Copy,
  Check,
  Volume2,
  VolumeX,
  Heart,
  Sparkles,
  Download,
  MessageCircle,
  Trash2,
  Clock,
  User
} from 'lucide-react';
import { Shayari, FontStyleId, LanguageType } from '../types/shayari';
import { FONT_OPTIONS, transformShayariLine } from '../data/fonts';
import { useFontSize } from '../context/FontSizeContext';
import { LANGUAGE_TAG_LABELS, resolveShayariLanguage } from '../utils/languageDetect';
import {
  useGlobalLanguage,
  useTranslatedShayariLines,
  useTranslatedText
} from '../context/GlobalLanguageContext';
import {
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  ValentineLangCode
} from '../data/valentineWeekMeta';
import {
  getStatic35CategoryHeading,
  getStatic35ShayariLines,
  getStatic35ShayariTitle
} from '../data/static35/static35Loader';
import { PostReportTriggerAndDrawer, UgcSeoSafeFooter } from './PostReportAndFooter';
import { formatShayariCopyText } from '../utils/copyShayariFormat';

export interface ShayariCardProps {
  shayari: Shayari;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  currentLanguage: LanguageType;
  staticLangCode?: ValentineLangCode;
  shareCanonicalPath?: string;
  onlyCopyAndWhatsapp?: boolean;
  authorDisplayName?: string;
  timeAgoLabel?: string;
  canDelete?: boolean;
  isDeleting?: boolean;
  showDeleteLabel?: boolean;
  onDelete?: () => void;
  isGuestUgcPost?: boolean;
  reportCount?: number;
  isReporting?: boolean;
  isAdminModerator?: boolean;
  onReportPost?: (reason: string) => Promise<void> | void;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

interface ResolvedCardViewProps extends ShayariCardProps {
  rawLines: string[];
  resolvedTitle: string;
  resolvedCategoryName: string;
  languageTagLabel: string;
  schemaLang: string;
  targetSpeechLang: string;
  isRtl: boolean;
}

const ShayariCardView: React.FC<ResolvedCardViewProps> = ({
  shayari,
  isFavorite,
  onToggleFavorite,
  shareCanonicalPath,
  onlyCopyAndWhatsapp = false,
  authorDisplayName,
  timeAgoLabel,
  canDelete = false,
  isDeleting = false,
  showDeleteLabel = false,
  onDelete,
  isGuestUgcPost = false,
  reportCount = 0,
  isReporting = false,
  isAdminModerator = false,
  onReportPost,
  onOpenCardModal,
  onOpenComments,
  rawLines,
  resolvedTitle,
  resolvedCategoryName,
  languageTagLabel,
  schemaLang,
  targetSpeechLang,
  isRtl
}) => {
  const [selectedFont, setSelectedFont] = useState<FontStyleId>('normal');
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(shayari.initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { fontSizeMode } = useFontSize();
  const { ui } = useGlobalLanguage();

  const currentFontOption = FONT_OPTIONS.find((f) => f.id === selectedFont) || FONT_OPTIONS[0];

  // Transform lines with active font (20 fonts supported)
  const displayLines = useMemo(
    () => rawLines.map((line) => transformShayariLine(line, selectedFont)),
    [rawLines, selectedFont]
  );

  const handleCopy = () => {
    const textToCopy = formatShayariCopyText({
      title: resolvedTitle,
      lines: displayLines,
      category: String(shayari.category || ''),
      tags: shayari.tags
    });
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const currentSharePageUrl = shareCanonicalPath
    ? typeof window !== 'undefined'
      ? `${window.location.origin}${shareCanonicalPath}`
      : `https://zqfeelings.com${shareCanonicalPath}`
    : typeof window !== 'undefined'
      ? window.location.href
      : 'https://zqfeelings.com/';

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `🌸 *${resolvedTitle}* 🌸\n\n${displayLines.map((line) => `"${line}"`).join('\n')}\n\n💖 *ZQ FEELINGS - Dil Ki Awaaz*\n${currentSharePageUrl}`
  )}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentSharePageUrl
  )}&quote=${encodeURIComponent(
    `🌸 ${resolvedTitle} 🌸\n\n${displayLines.join('\n')}\n\n💖 ZQ FEELINGS - Dil Ki Awaaz`
  )}`;

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = rawLines.join('. ');
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = targetSpeechLang;
    utterance.rate = 0.85;
    utterance.pitch = 1.05;

    const voices = window.speechSynthesis.getVoices();
    const langPrefix = targetSpeechLang.split('-')[0];
    const matchedVoice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(langPrefix.toLowerCase())
    );
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Shayari text: 19px with line-height 1.8, pure black #000000 for crisp mobile reading
  const shayariTypographyClass =
    fontSizeMode === 'small'
      ? 'text-[17px] leading-[1.8] text-[#000000] font-semibold'
      : fontSizeMode === 'big'
        ? 'text-[23px] leading-[1.8] text-[#000000] font-bold'
        : 'text-[19px] leading-[1.8] text-[#000000] font-semibold';

  return (
    <article
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="group relative rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] shadow-xs hover:shadow-lg hover:border-[#d94f70]/50 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <meta itemProp="additionalType" content="https://schema.org/Poem" />
      <meta itemProp="genre" content={`${languageTagLabel} Shayari / Poetry`} />
      <meta itemProp="inLanguage" content={schemaLang} />
      <meta
        itemProp="author"
        content={
          isGuestUgcPost
            ? `${authorDisplayName || shayari.author || 'Guest User'} (Guest User)`
            : shayari.author || 'ZQ FEELINGS - Dil Ki Awaaz'
        }
      />

      {/* Top soft blush aura */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ffe4e8]/60 rounded-full blur-xl pointer-events-none group-hover:bg-[#ffccd5]/80 transition-all" />

      {/* Card Header Info (Increased padding for better mobile reading) */}
      <div className="p-5 sm:p-6 pb-4 flex items-start justify-between gap-3 border-b border-[#ffe4e8] bg-white">
        <div className="flex items-start gap-3.5 min-w-0">
          <span className="text-2xl sm:text-3xl p-2.5 rounded-2xl bg-[#fff8f9] border border-[#ffe4e8] shadow-2xs shrink-0">
            {shayari.categoryIcon}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] font-bold">
              <span className="tracking-wide text-[#d94f70]">{resolvedCategoryName}</span>
              {shayari.subCategory && (
                <span className="px-2 py-0.5 rounded-lg bg-[#fff0f3] text-[#d94f70] border border-[#ffd6df] text-[13px] font-extrabold shadow-2xs">
                  [{shayari.subCategory}]
                </span>
              )}
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="text-slate-700">{languageTagLabel}</span>
              {timeAgoLabel && (
                <>
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{timeAgoLabel}</span>
                  </span>
                </>
              )}
            </div>
            <h3
              itemProp="headline"
              dir={isRtl ? 'rtl' : 'ltr'}
              className="text-[26px] font-bold text-[#d94f70] mt-1.5 leading-[1.4] break-words"
            >
              {resolvedTitle}
            </h3>
            {authorDisplayName && (
              <div className="mt-1.5 flex items-center gap-1.5 text-[16px] text-slate-700 font-bold">
                <User className="w-4 h-4 text-[#d94f70] shrink-0" />
                <span className="truncate">{authorDisplayName}</span>
              </div>
            )}
          </div>
        </div>

        {/* Header Actions (Listen/Favorite and/or Owner/Admin Delete) */}
        {(!onlyCopyAndWhatsapp || (canDelete && onDelete)) && (
          <div className="flex items-center gap-2 shrink-0">
            {!onlyCopyAndWhatsapp && (
              <>
                <button
                  onClick={handleSpeak}
                  title={isSpeaking ? 'आवाज़ बंद करें' : 'शायरी सुनें (Listen)'}
                  className={`min-h-[52px] min-w-[52px] p-3 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border flex items-center justify-center ${
                    isSpeaking
                      ? 'bg-[#d94f70] text-white border-[#d94f70] animate-pulse'
                      : 'bg-white text-slate-700 border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff0f3]'
                  }`}
                >
                  {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                <button
                  onClick={() => onToggleFavorite(shayari.id)}
                  title="पसंदीदा में जोड़ें"
                  className={`min-h-[52px] min-w-[52px] p-3 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border flex items-center justify-center ${
                    isFavorite
                      ? 'bg-[#fff0f3] text-[#d94f70] border-[#d94f70]'
                      : 'bg-white text-slate-500 border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff0f3]'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#d94f70]' : ''}`} />
                </button>
              </>
            )}

            {canDelete && onDelete && (
              <button
                type="button"
                onClick={onDelete}
                disabled={isDeleting}
                title="शायरी डिलीट करें (Delete Shayari)"
                aria-label="Delete Shayari"
                className={`min-h-[48px] ${
                  showDeleteLabel ? 'px-4 py-2.5 gap-1.5' : 'min-w-[48px] p-3'
                } rounded-2xl text-[16px] font-bold transition-all cursor-pointer border flex items-center justify-center bg-red-50 text-red-600 border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600 disabled:opacity-50`}
              >
                <Trash2 className="w-5 h-5 shrink-0" />
                {showDeleteLabel && <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>}
              </button>
            )}
          </div>
        )}
      </div>

      {/* SHAYARI CONTENT (19px, LINE HEIGHT 1.8, GENEROUS MOBILE PADDING) */}
      <div className="px-6 py-8 sm:px-9 sm:py-10 flex-1 flex flex-col justify-center min-h-[210px] bg-[#fff8f9]">
        <div className="relative py-3 px-2 sm:px-3">
          <span className="absolute -top-4 left-0 text-4xl font-serif text-[#d94f70]/30 select-none">
            “
          </span>
          <span className="absolute -bottom-4 right-0 text-4xl font-serif text-[#d94f70]/30 select-none">
            ”
          </span>

          <div
            itemProp="text"
            dir={isRtl ? 'rtl' : 'ltr'}
            className={`space-y-3.5 text-center tracking-wide transition-all duration-200 ${shayariTypographyClass} ${currentFontOption.fontClass || ''} ${selectedFont === 'sparkle' ? 'bg-[#fff0f3] p-5 rounded-2xl border border-[#ffe4e8]' : ''} ${selectedFont === 'neon' ? 'drop-shadow-[0_2px_10px_rgba(255,100,50,0.4)] text-[#d94f70]' : ''}`}
          >
            {displayLines.map((line, idx) => (
              <p
                key={idx}
                className={`select-text leading-[1.8] hover:text-[#d94f70] transition-colors ${
                  selectedFont === 'neon' ? 'text-[#d94f70]' : 'text-[#000000]'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Author signature & Language Tag */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[16px] text-[#d94f70] font-bold">
          <Sparkles className="w-4 h-4 text-[#d94f70]" />
          {authorDisplayName ? (
            <span>{`✍️ ${authorDisplayName}`}</span>
          ) : (
            <span className="zq-feelings-logo">ZQ FEELINGS 💗</span>
          )}
          <span className="text-[15px] text-slate-700 font-bold">({languageTagLabel})</span>
          {timeAgoLabel && (
            <span className="text-[14px] text-slate-500 font-semibold">· {timeAgoLabel}</span>
          )}
          {displayLines.length === 2 && (
            <span className="text-[14px] text-amber-800 font-bold">· ⚡ 2 Lines Status</span>
          )}
        </div>
      </div>

      {/* 20 FONTS SELECTOR */}
      <div className="px-5 sm:px-6 py-4 bg-white border-t border-b border-[#ffe4e8]">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[16px] font-bold text-slate-800 flex items-center gap-1.5">
            <span>{ui.stylesLabel}</span>
            <span className="text-[#d94f70] font-extrabold">{currentFontOption.name}</span>
          </span>
          <span className="text-[14px] text-slate-500 font-semibold">{ui.scrollStylesHint}</span>
        </div>

        {/* Horizontally scrollable 20 chips */}
        <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-pink-200">
          {FONT_OPTIONS.map((font) => {
            const isActive = selectedFont === font.id;
            return (
              <button
                key={font.id}
                onClick={() => setSelectedFont(font.id)}
                title={font.description}
                className={`min-h-[48px] flex-shrink-0 px-4 py-2.5 rounded-xl text-[18px] font-bold transition-all cursor-pointer border whitespace-nowrap ${font.fontClass || ''} ${
                  isActive
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-xs scale-105'
                    : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
                }`}
              >
                {font.displayName}
              </button>
            );
          })}
        </div>
      </div>

      {/* CARD FOOTER: ACTIONS (18px BOLD BUTTONS & INCREASED PADDING) */}
      <div className="p-5 sm:p-6 bg-white flex flex-wrap items-center justify-between gap-3.5 border-t border-[#ffe4e8]">
        {!onlyCopyAndWhatsapp && (
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleLike}
              className={`min-h-[52px] flex items-center gap-2 px-4 py-3 rounded-2xl text-[18px] font-bold cursor-pointer transition-all border ${
                hasLiked
                  ? 'bg-[#fff0f3] text-[#d94f70] border-[#d94f70]'
                  : 'bg-white text-slate-800 border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff8f9]'
              }`}
            >
              <Heart className={`w-5 h-5 ${hasLiked ? 'fill-[#d94f70]' : ''}`} />
              <span>{likes.toLocaleString()}</span>
            </button>

            {onOpenComments && (
              <button
                onClick={() => onOpenComments(shayari)}
                title="टिप्पणी देखें व लिखें (Comments)"
                className="min-h-[52px] flex items-center gap-2 px-4 py-3 rounded-2xl text-[18px] font-bold text-slate-800 bg-white border border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff0f3] cursor-pointer transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{shayari.comments?.length || shayari.commentsCount || 0}</span>
              </button>
            )}

            {onOpenCardModal && (
              <button
                onClick={() =>
                  onOpenCardModal(
                    {
                      ...shayari,
                      title: resolvedTitle,
                      categoryName: resolvedCategoryName,
                      lines: rawLines,
                      linesHindi: rawLines
                    },
                    selectedFont
                  )
                }
                title={ui.downloadBtn}
                className="min-h-[52px] flex items-center gap-2 px-4 py-3 rounded-2xl text-[18px] font-bold text-slate-800 bg-white border border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff0f3] cursor-pointer transition-colors"
              >
                <Download className="w-5 h-5" />
                <span className="hidden sm:inline">{ui.downloadBtn}</span>
              </button>
            )}
          </div>
        )}

        {/* PRIMARY ACTIONS: BOTTOM COPY & WHATSAPP BUTTONS (18px BOLD) */}
        <div
          className={`flex items-center gap-3 ${
            onlyCopyAndWhatsapp ? 'w-full' : 'w-full sm:w-auto'
          }`}
        >
          {/* COPY BUTTON */}
          <button
            onClick={handleCopy}
            className={`min-h-[52px] ${
              onlyCopyAndWhatsapp ? 'flex-1' : 'flex-1 sm:flex-initial'
            } flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer shadow-xs active:scale-95 border ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-500/20'
                : 'bg-white text-slate-900 hover:text-[#d94f70] hover:bg-[#fff0f3] border-2 border-[#ffe4e8]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-emerald-200" />
                <span>{ui.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-[#d94f70]" />
                <span>{ui.copyBtn}</span>
              </>
            )}
          </button>

          {/* WHATSAPP SHARE BUTTON */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
            title="Share on WhatsApp"
            className={`min-h-[52px] ${
              onlyCopyAndWhatsapp ? 'flex-1' : 'flex-1 sm:flex-initial'
            } flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-[17px] font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95 border border-[#20ba59]`}
          >
            <svg aria-hidden="true" className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 2C6.51 2 2.016 6.494 2.016 12.016c0 1.968.563 3.867 1.64 5.515L2 22l4.64-1.609c1.578.984 3.39 1.516 5.39 1.516 5.524 0 10.016-4.493 10.016-10.016C22.047 6.494 17.555 2 12.031 2zm5.782 14.328c-.25.703-1.453 1.344-2.016 1.39-.562.047-1.125.204-3.75-0.89-3.234-1.344-5.328-4.64-5.484-4.844-.156-.203-1.28-1.703-1.28-3.25 0-1.547.812-2.312 1.094-2.625.28-.312.625-.39.843-.39.219 0 .438 0 .625.015.204.016.485-.078.75.563.282.688.954 2.328 1.032 2.484.078.157.14.36.031.579-.109.218-.172.343-.343.546-.172.204-.36.454-.516.61-.172.172-.36.36-.156.703.203.344.906 1.485 1.938 2.406 1.328 1.188 2.453 1.563 2.797 1.735.344.172.547.14.75-.094.203-.235.875-1.016 1.109-1.36.234-.343.469-.281.781-.171.313.109 1.985.937 2.328 1.109.344.172.578.25.656.39.078.14.078.813-.172 1.516z" />
            </svg>
            <span>{ui.whatsappBtn}</span>
          </a>

          {/* FACEBOOK SHARE BUTTON */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            title="Share on Facebook"
            className="min-h-[52px] flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-2xl text-[17px] font-bold text-white bg-[#1877F2] hover:bg-[#1666d1] shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95 border border-[#1666d1]"
          >
            <svg aria-hidden="true" className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <span className="hidden sm:inline">Facebook</span>
          </a>
        </div>

        {/* GUEST UGC REPORT BAR (3 Reports = Instant Auto Delete, Admin = 1 Report Auto Delete) */}
        {isGuestUgcPost && onReportPost && (
          <div className="w-full pt-3 mt-1 border-t border-[#ffe4e8]/80">
            <PostReportTriggerAndDrawer
              reportCount={reportCount}
              isReporting={isReporting}
              isAdminModerator={isAdminModerator}
              onSubmitReport={onReportPost}
              compactButton={true}
            />
          </div>
        )}
      </div>

      {/* RULE 4: COMPULSORY SEO SAFE FOOTER ON EVERY GUEST UGC POST */}
      {isGuestUgcPost && <UgcSeoSafeFooter />}
    </article>
  );
};

/**
 * 100% Static Pre-Translated Card Body (Zero live /api/translate calls — Valentine SEO model)
 */
const Static35ShayariCardBranch: React.FC<
  ShayariCardProps & { staticLangCode: ValentineLangCode }
> = (props) => {
  const { shayari, staticLangCode } = props;
  const langMeta = VALENTINE_LANGUAGE_MAP.get(staticLangCode) || VALENTINE_LANGUAGES[0];

  const rawLines = useMemo(
    () => Array.from(getStatic35ShayariLines(shayari, staticLangCode)),
    [shayari, staticLangCode]
  );
  const resolvedTitle = useMemo(
    () => getStatic35ShayariTitle(shayari, staticLangCode),
    [shayari, staticLangCode]
  );
  const resolvedCategoryName = useMemo(
    () =>
      getStatic35CategoryHeading(
        String(shayari.category),
        staticLangCode,
        shayari.categoryName
      ),
    [shayari.category, shayari.categoryName, staticLangCode]
  );

  return (
    <ShayariCardView
      {...props}
      rawLines={rawLines}
      resolvedTitle={resolvedTitle}
      resolvedCategoryName={resolvedCategoryName}
      languageTagLabel={langMeta.nativeLabel}
      schemaLang={langMeta.hreflang}
      targetSpeechLang={langMeta.speechLang}
      isRtl={langMeta.rtl}
    />
  );
};

/**
 * Live Dynamic-Translated Card Body for untouched sections (other Festivals, Religious, Sanskar, Wall, etc.)
 */
const LiveShayariCardBranch: React.FC<ShayariCardProps> = (props) => {
  const { shayari, currentLanguage } = props;
  const { globalLanguage, activeLanguageOption, speechLangCode } = useGlobalLanguage();

  const baseHindiLines =
    shayari.linesHindi && shayari.linesHindi.length > 0 ? shayari.linesHindi : shayari.lines;
  const { lines: rawLines, languageBadge, isRtl } = useTranslatedShayariLines(
    baseHindiLines,
    shayari.linesEnglish,
    shayari.linesHinglish,
    currentLanguage,
    shayari.linesUrdu
  );

  const translatedTitle = useTranslatedText(shayari.title);
  const translatedCategoryName = useTranslatedText(shayari.categoryName);

  const effectiveLanguage = resolveShayariLanguage(shayari, rawLines, currentLanguage);
  const languageTagLabel =
    globalLanguage !== 'default' ? languageBadge : LANGUAGE_TAG_LABELS[effectiveLanguage];

  const targetSpeechLang =
    globalLanguage !== 'default'
      ? speechLangCode
      : effectiveLanguage === 'english'
        ? 'en-US'
        : effectiveLanguage === 'urdu'
          ? 'ur-PK'
          : 'hi-IN';

  const schemaLang = activeLanguageOption
    ? activeLanguageOption.apiCode
    : effectiveLanguage === 'english'
      ? 'en'
      : effectiveLanguage === 'urdu'
        ? 'ur'
        : effectiveLanguage === 'hinglish'
          ? 'hi-Latn'
          : 'hi';

  return (
    <ShayariCardView
      {...props}
      rawLines={rawLines}
      resolvedTitle={translatedTitle}
      resolvedCategoryName={translatedCategoryName}
      languageTagLabel={languageTagLabel}
      schemaLang={schemaLang}
      targetSpeechLang={targetSpeechLang}
      isRtl={isRtl}
    />
  );
};

export const ShayariCard: React.FC<ShayariCardProps> = (props) => {
  if (props.staticLangCode) {
    return <Static35ShayariCardBranch {...props} staticLangCode={props.staticLangCode} />;
  }
  return <LiveShayariCardBranch {...props} />;
};
