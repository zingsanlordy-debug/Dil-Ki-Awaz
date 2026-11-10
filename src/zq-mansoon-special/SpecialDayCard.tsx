import React, { useState, useEffect, useMemo } from 'react';
import {
  Copy,
  Check,
  Volume2,
  VolumeX,
  Heart,
  Sparkles,
  Download,
  MessageCircle,
  Minus,
  Plus
} from 'lucide-react';
import { Shayari, FontStyleId, LanguageType } from '../types/shayari';
import {
  FONT_OPTIONS,
  getFontsForLanguage,
  transformShayariLine,
  HINDI_FONTS_30
} from '../data/fonts';
import { loadGoogleFontAsync } from '../utils/fontLoader';
import { useFontSize } from '../context/FontSizeContext';
import {
  useGlobalLanguage,
  useTranslatedShayariLines,
  useTranslatedText
} from '../context/GlobalLanguageContext';
import { FlatSpecialShayari } from './data';
import { formatShayariCopyText } from '../utils/copyShayariFormat';

interface SpecialDayCardProps {
  item: FlatSpecialShayari;
  pageLanguage: LanguageType;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

const LANGUAGE_LABELS: Record<'hindi' | 'hinglish' | 'english', string> = {
  hindi: '🇮🇳 हिन्दी',
  hinglish: '💬 Hinglish',
  english: '🇬🇧 English'
};

export const SpecialDayCard: React.FC<SpecialDayCardProps> = ({
  item,
  pageLanguage,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal,
  onOpenComments
}) => {
  const { shayari } = item;
  const [cardLanguage, setCardLanguage] = useState<'hindi' | 'hinglish' | 'english'>(
    pageLanguage === 'hinglish' || pageLanguage === 'english' ? pageLanguage : 'hindi'
  );
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(shayari.initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const {
    shayariTextClass,
    fontSizePx,
    increaseFontSize,
    decreaseFontSize,
    canIncrease,
    canDecrease
  } = useFontSize();

  const { globalLanguage, setGlobalLanguage, ui, speechLangCode } = useGlobalLanguage();

  useEffect(() => {
    setCardLanguage(
      pageLanguage === 'hinglish' || pageLanguage === 'english' ? pageLanguage : 'hindi'
    );
  }, [pageLanguage]);

  const activeLangForFont = (
    globalLanguage && globalLanguage !== 'default'
      ? globalLanguage
      : cardLanguage || 'hinglish'
  ).toLowerCase();
  const availableFonts = useMemo(() => getFontsForLanguage(activeLangForFont), [activeLangForFont]);

  const [selectedFont, setSelectedFont] = useState<FontStyleId>(() => availableFonts[0]?.id || 'en-normal');

  useEffect(() => {
    if (!availableFonts.some((f) => f.id === selectedFont)) {
      setSelectedFont(availableFonts[0]?.id || 'en-normal');
    }
  }, [availableFonts]);

  const currentFontOption = useMemo(
    () => availableFonts.find((f) => f.id === selectedFont) || availableFonts[0] || HINDI_FONTS_30[0],
    [availableFonts, selectedFont]
  );

  useEffect(() => {
    if (currentFontOption?.googleFontFamily) {
      loadGoogleFontAsync(currentFontOption.googleFontFamily);
    }
  }, [currentFontOption]);

  const baseHindiLines =
    shayari.linesHindi && shayari.linesHindi.length > 0 ? shayari.linesHindi : shayari.lines;
  const { lines: rawLines, languageBadge, isRtl } = useTranslatedShayariLines(
    baseHindiLines,
    shayari.linesEnglish,
    shayari.linesHinglish,
    cardLanguage
  );

  const translatedDayName = useTranslatedText(item.dayNameHindi, item.dayNameEnglish);
  const translatedMonthName = useTranslatedText(item.monthNameHindi, item.monthNameEnglish);

  const displayLines = rawLines.map((line) => transformShayariLine(line, selectedFont));

  const specialPageUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/${item.monthId}-special-shayari`
      : `https://dil-ki-awaaz.vercel.app/${item.monthId}-special-shayari`;

  const sharePayloadText = `🌸 *${translatedDayName} (${item.dayNameEnglish})* 🌸\n📅 ${item.dateLabel}\n\n${displayLines
    .map((line) => `"${line}"`)
    .join('\n')}\n\n💖 *ZQ FEELINGS - Dil Ki Awaaz*\n${specialPageUrl}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(sharePayloadText)}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    specialPageUrl
  )}&quote=${encodeURIComponent(
    `🌸 ${translatedDayName} (${item.dateLabel}) 🌸\n\n${displayLines.join('\n')}\n\n💖 ZQ FEELINGS`
  )}`;

  const handleCopy = () => {
    const cleanDayHashtag = item.dayNameEnglish.replace(/[^a-zA-Z0-9]/g, '');
    const monthHashtag = `${item.monthNameEnglish.replace(/[^a-zA-Z0-9]/g, '')}Shayari`;
    const textToCopy = formatShayariCopyText({
      title: `${translatedDayName} (${item.dateLabel})`,
      lines: displayLines,
      category: item.monthId,
      tags: [cleanDayHashtag, monthHashtag, ...shayari.tags]
    });
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

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
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(rawLines.join('. '));
    const targetSpeechLang =
      globalLanguage !== 'default'
        ? speechLangCode
        : cardLanguage === 'english'
        ? 'en-US'
        : 'hi-IN';
    utterance.lang = targetSpeechLang;
    utterance.rate = 0.86;
    utterance.pitch = 1.04;

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

  return (
    <article className="group relative rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] shadow-xs hover:shadow-lg hover:border-[#d94f70]/50 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Card Header: Icon, Date/Title, Listen & Favorites Heart */}
      <div className="p-5 sm:p-6 pb-4 flex items-start justify-between gap-3 border-b border-[#ffe4e8] bg-white">
        <div className="flex items-start gap-3.5 min-w-0">
          <span className="text-2xl sm:text-3xl p-2.5 rounded-2xl bg-[#fff8f9] border border-[#ffe4e8] shadow-2xs shrink-0">
            {item.icon}
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 text-[14px] font-bold text-slate-600">
              <span className="text-[#d94f70] font-extrabold">{item.dateLabel}</span>
              <span aria-hidden="true">·</span>
              <span>
                {translatedMonthName} ({item.monthNameEnglish})
              </span>
              <span aria-hidden="true">·</span>
              <span>{rawLines.length} Lines</span>
            </div>
            <h3
              dir={isRtl ? 'rtl' : 'ltr'}
              className="text-[22px] sm:text-[24px] font-bold text-[#d94f70] mt-1 leading-snug"
            >
              {translatedDayName}
            </h3>
            <p className="text-[14px] text-slate-500 font-semibold truncate">
              {item.dayNameEnglish}
            </p>
          </div>
        </div>

        {/* Listen & Favorites (Dil wala icon) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleSpeak}
            title={isSpeaking ? 'आवाज़ बंद करें' : 'शायरी सुनें (Listen)'}
            className={`min-h-[48px] min-w-[48px] p-2.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border flex items-center justify-center ${
              isSpeaking
                ? 'bg-[#d94f70] text-white border-[#d94f70]'
                : 'bg-white text-slate-700 border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff0f3]'
            }`}
          >
            {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          <button
            type="button"
            onClick={() => onToggleFavorite(shayari.id)}
            title="पसंदीदा (Favorites) में सेव करें"
            aria-label="Toggle Favorite"
            className={`min-h-[48px] min-w-[48px] p-2.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border flex items-center justify-center ${
              isFavorite
                ? 'bg-[#fff0f3] text-[#d94f70] border-[#d94f70]'
                : 'bg-white text-slate-500 border-[#ffe4e8] hover:text-[#d94f70] hover:bg-[#fff0f3]'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-[#d94f70] text-[#d94f70]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Font Size (- / +) Controls */}
      <div className="px-4 sm:px-5 py-2 bg-[#fff0f3]/65 border-b border-[#ffe4e8] flex items-center justify-end">
        <div
          className="inline-flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-[#ffe4e8]"
          title="फ़ॉन्ट साइज़ घटाएं या बढ़ाएं (Font Size - / +)"
        >
          <button
            type="button"
            onClick={decreaseFontSize}
            disabled={!canDecrease}
            aria-label="Decrease font size"
            className="min-h-[32px] min-w-[32px] px-1.5 rounded-lg text-[14px] font-extrabold text-slate-800 hover:bg-[#fff0f3] hover:text-[#d94f70] disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-0.5"
          >
            <span>A</span>
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="px-1.5 text-[13px] font-bold text-[#d94f70] tabular-nums select-none">
            {fontSizePx}px
          </span>
          <button
            type="button"
            onClick={increaseFontSize}
            disabled={!canIncrease}
            aria-label="Increase font size"
            className="min-h-[32px] min-w-[32px] px-1.5 rounded-lg text-[14px] font-extrabold text-slate-800 hover:bg-[#fff0f3] hover:text-[#d94f70] disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-0.5"
          >
            <span>A</span>
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Shayari Body in Stylish Font */}
      <div className="px-6 py-8 sm:px-8 sm:py-9 flex-1 flex flex-col justify-center min-h-[210px] bg-[#fff8f9]">
        <div className="relative py-3 px-2 sm:px-3">
          <span className="absolute -top-4 left-0 text-4xl font-serif text-[#d94f70]/30 select-none">
            “
          </span>
          <span className="absolute -bottom-4 right-0 text-4xl font-serif text-[#d94f70]/30 select-none">
            ”
          </span>

          <div
            dir={isRtl ? 'rtl' : 'ltr'}
            style={currentFontOption?.fontFamily ? { fontFamily: currentFontOption.fontFamily } : undefined}
            className={`space-y-3.5 text-center tracking-wide transition-all duration-200 ${shayariTextClass} ${
              currentFontOption.fontClass || ''
            } ${
              selectedFont === 'sparkle'
                ? 'bg-[#fff0f3] p-5 rounded-2xl border border-[#ffe4e8]'
                : ''
            } ${
              selectedFont === 'neon'
                ? 'drop-shadow-[0_2px_10px_rgba(255,100,50,0.4)] text-[#d94f70]'
                : ''
            }`}
          >
            {displayLines.map((line, idx) => (
              <p
                key={idx}
                style={currentFontOption?.fontFamily ? { fontFamily: currentFontOption.fontFamily } : undefined}
                className={`select-text leading-[1.8] hover:text-[#d94f70] transition-colors ${
                  selectedFont === 'neon' ? 'text-[#d94f70]' : 'text-[#000000]'
                }`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Signature line */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[15px] text-[#d94f70] font-bold">
          <Sparkles className="w-4 h-4 text-[#d94f70]" />
          <span className="zq-feelings-logo">ZQ FEELINGS 💗</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-[14px] text-slate-600 font-bold">
            {globalLanguage !== 'default' ? languageBadge : LANGUAGE_LABELS[cardLanguage]}
          </span>
        </div>
      </div>

      {/* LANGUAGE-SPECIFIC DYNAMIC FONTS SWITCHER */}
      <div className="px-5 sm:px-6 py-4 bg-white border-t border-b border-[#ffe4e8]">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[15px] font-bold text-slate-800 flex items-center gap-2">
            <span>{availableFonts.length} स्टाइलिश फ़ॉन्ट्स:</span>
            <span className="text-[#d94f70] font-extrabold">{currentFontOption.name}</span>
          </span>
          <span className="text-[13px] text-slate-500 font-semibold">
            स्क्रॉल करें →
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-pink-200">
          {availableFonts.map((font) => {
            const isActive = selectedFont === font.id;
            return (
              <button
                key={font.id}
                type="button"
                onClick={() => {
                  setSelectedFont(font.id);
                  if (font.googleFontFamily) loadGoogleFontAsync(font.googleFontFamily);
                }}
                title={font.description}
                style={font.fontFamily ? { fontFamily: font.fontFamily } : undefined}
                className={`min-h-[44px] flex-shrink-0 px-3.5 py-2 rounded-xl text-[16px] font-bold transition-all cursor-pointer border whitespace-nowrap ${
                  font.fontClass || ''
                } ${
                  isActive
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-xs'
                    : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
                }`}
              >
                {font.displayName}
              </button>
            );
          })}
        </div>
      </div>

      {/* PRIMARY ACTION BUTTONS: COPY · WHATSAPP SHARE · DOWNLOAD IMAGE */}
      <div className="p-5 sm:p-6 bg-white space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* 1. COPY BUTTON */}
          <button
            type="button"
            onClick={handleCopy}
            className={`min-h-[50px] flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-[16px] font-bold transition-all cursor-pointer shadow-2xs active:scale-95 border-2 ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white text-slate-900 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70] hover:bg-[#fff0f3]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-5 h-5" />
                <span>{ui.copiedBtn}</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 text-[#d94f70]" />
                <span>{ui.copyBtn}</span>
              </>
            )}
          </button>

          {/* 2. DIRECT WHATSAPP SHARE BUTTON */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-[16px] font-bold text-white bg-[#25D366] hover:bg-[#20ba59] border-2 border-[#20ba59] shadow-2xs transition-all cursor-pointer active:scale-95"
          >
            <svg aria-hidden="true" className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 2C6.51 2 2.016 6.494 2.016 12.016c0 1.968.563 3.867 1.64 5.515L2 22l4.64-1.609c1.578.984 3.39 1.516 5.39 1.516 5.524 0 10.016-4.493 10.016-10.016C22.047 6.494 17.555 2 12.031 2zm5.782 14.328c-.25.703-1.453 1.344-2.016 1.39-.562.047-1.125.204-3.75-0.89-3.234-1.344-5.328-4.64-5.484-4.844-.156-.203-1.28-1.703-1.28-3.25 0-1.547.812-2.312 1.094-2.625.28-.312.625-.39.843-.39.219 0 .438 0 .625.015.204.016.485-.078.75.563.282.688.954 2.328 1.032 2.484.078.157.14.36.031.579-.109.218-.172.343-.343.546-.172.204-.36.454-.516.61-.172.172-.36.36-.156.703.203.344.906 1.485 1.938 2.406 1.328 1.188 2.453 1.563 2.797 1.735.344.172.547.14.75-.094.203-.235.875-1.016 1.109-1.36.234-.343.469-.281.781-.171.313.109 1.985.937 2.328 1.109.344.172.578.25.656.39.078.14.078.813-.172 1.516z" />
            </svg>
            <span>{ui.whatsappBtn}</span>
          </a>

          {/* 3. DIRECT FACEBOOK SHARE BUTTON */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="min-h-[50px] flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-[16px] font-bold text-white bg-[#1877F2] hover:bg-[#1666d1] border-2 border-[#1666d1] shadow-2xs transition-all cursor-pointer active:scale-95"
          >
            <svg aria-hidden="true" className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>

        {/* Secondary Row: Like, Comments, and Prominent Download Image Button */}
        <div className="pt-2.5 border-t border-[#ffe4e8] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleLike}
              className={`min-h-[46px] flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[16px] font-bold cursor-pointer transition-all border ${
                hasLiked
                  ? 'bg-[#fff0f3] text-[#d94f70] border-[#d94f70]'
                  : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:text-[#d94f70]'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasLiked ? 'fill-[#d94f70]' : ''}`} />
              <span className="tabular-nums">{likes.toLocaleString()}</span>
            </button>

            {onOpenComments && (
              <button
                type="button"
                onClick={() => onOpenComments(shayari)}
                className="min-h-[46px] flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[16px] font-bold text-slate-800 bg-[#fff8f9] border border-[#ffe4e8] hover:text-[#d94f70] cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="tabular-nums">{shayari.comments?.length || 0}</span>
              </button>
            )}
          </div>

          {/* 3. DOWNLOAD IMAGE BUTTON */}
          {onOpenCardModal && (
            <button
              type="button"
              onClick={() =>
                onOpenCardModal(
                  {
                    ...shayari,
                    title: translatedDayName,
                    categoryName: `${item.dateLabel} • ${item.dayNameEnglish}`,
                    lines: rawLines,
                    linesHindi: rawLines
                  },
                  selectedFont
                )
              }
              className="min-h-[46px] flex items-center gap-2 px-4 py-2 rounded-xl text-[16px] font-bold text-[#d94f70] bg-[#fff0f3] hover:bg-[#d94f70] hover:text-white border border-[#ffe4e8] hover:border-[#d94f70] cursor-pointer transition-all shadow-2xs"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download Image</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
