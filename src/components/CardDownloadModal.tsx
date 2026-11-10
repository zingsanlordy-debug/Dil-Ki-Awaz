import React, { useRef, useState } from 'react';
import { X, Copy, Check, Share2, Sparkles } from 'lucide-react';
import { Shayari, FontStyleId } from '../types/shayari';
import { getFontOptionById, transformShayariLine } from '../data/fonts';
import { loadGoogleFontAsync } from '../utils/fontLoader';
import { getCategoryGradientTheme } from '../utils/categoryTheme';
import { formatShayariCopyText } from '../utils/copyShayariFormat';

interface CardDownloadModalProps {
  shayari: Shayari | null;
  selectedFont: FontStyleId;
  onClose: () => void;
}

export const CardDownloadModal: React.FC<CardDownloadModalProps> = ({
  shayari,
  selectedFont,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (!shayari) return null;

  const fontOption = getFontOptionById(selectedFont, shayari.language);
  if (fontOption?.googleFontFamily) {
    loadGoogleFontAsync(fontOption.googleFontFamily);
  }
  const categoryTheme = getCategoryGradientTheme(shayari.category, shayari.categoryType);

  const displayLines = shayari.lines.map((l) => transformShayariLine(l, selectedFont));

  const handleCopyText = () => {
    const textToCopy = formatShayariCopyText({
      title: shayari.title,
      lines: displayLines,
      category: String(shayari.category || ''),
      tags: shayari.tags
    });
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `🌸 *${shayari.title}* 🌸\n\n${displayLines.map((l) => `"${l}"`).join('\n')}\n\n💖 *ZQ FEELINGS - Dil Ki Awaaz*\n👉 ${window.location.origin}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border border-[#ffe4e8] rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-[#fff0f3] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="font-rozha text-[26px] font-bold text-[#d94f70] mb-5 text-center leading-snug pr-8">
          शायरी कार्ड प्रीव्यू (Shayari Card)
        </h3>

        {/* The Card for visual export */}
        <div
          ref={cardRef}
          className="relative rounded-2xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-8 shadow-md text-center overflow-hidden"
        >
          {/* Soft Corner Accents */}
          <div className="absolute top-3 left-3 text-[#d94f70]/50 text-sm">🌸</div>
          <div className="absolute top-3 right-3 text-[#d94f70]/50 text-sm">🌸</div>
          <div className="absolute bottom-3 left-3 text-[#d94f70]/50 text-sm">🌸</div>
          <div className="absolute bottom-3 right-3 text-[#d94f70]/50 text-sm">🌸</div>

          {/* Top Brand Banner */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#ffe4e8] text-[#d94f70] text-[14px] font-bold tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#d94f70]" />
            <span>
              <span className="zq-feelings-logo">ZQ FEELINGS</span> - Dil Ki Awaaz 💗
            </span>
          </div>

          {/* Gradient + Emoji Header Graphic */}
          <div
            className={`mx-auto my-3.5 w-full max-w-[260px] py-5 px-4 flex items-center justify-center gap-3 rounded-2xl border-2 text-white shadow-md ${categoryTheme.gradientClass}`}
          >
            <span className="text-2xl opacity-90 select-none" aria-hidden="true">
              {categoryTheme.accentLeft}
            </span>
            <span className="text-5xl drop-shadow-md select-none" aria-hidden="true">
              {categoryTheme.emoji}
            </span>
            <span className="text-2xl opacity-90 select-none" aria-hidden="true">
              {categoryTheme.accentRight}
            </span>
          </div>

          <h4 className="text-[18px] font-bold text-[#d94f70] mb-3.5 tracking-wide">
            ~ {shayari.title} ~
          </h4>

          {/* Shayari in Selected Font (19px, line-height 1.8) */}
          <div
            className={`space-y-3 text-[19px] leading-[1.8] font-semibold text-slate-900 ${fontOption.fontClass || ''}`}
            style={fontOption.fontFamily ? { fontFamily: fontOption.fontFamily } : undefined}
          >
            {displayLines.map((line, idx) => (
              <p
                key={idx}
                style={fontOption.fontFamily ? { fontFamily: fontOption.fontFamily } : undefined}
                className="leading-[1.8] drop-shadow-2xs"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 pt-3.5 border-t border-[#ffe4e8] flex items-center justify-between text-[14px] text-[#d94f70] font-bold">
            <span className="zq-feelings-logo">✍️ ZQ FEELINGS - Dil Ki Awaaz 💗</span>
            <span>🌐 dil-ki-awaaz.vercel.app</span>
          </div>
        </div>

        {/* Modal Action Buttons (18px bold) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            onClick={handleCopyText}
            className="min-h-[52px] flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white hover:bg-[#fff0f3] text-slate-800 font-bold text-[18px] cursor-pointer border-2 border-[#ffe4e8] transition-colors shadow-2xs"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-[#d94f70]" />}
            <span>{copied ? 'कॉपी हो गया!' : 'टेक्स्ट कॉपी करें'}</span>
          </button>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[52px] flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[18px] cursor-pointer shadow-xs transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>व्हाट्सएप शेयर</span>
          </a>
        </div>
      </div>
    </div>
  );
};
