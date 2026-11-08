import React, { useState } from 'react';
import { ALL_CATEGORIES_FOR_POSTING } from '../data/shayariData';
import { ShayariCard } from './ShayariCard';
import { Shayari, FontStyleId, LanguageType, CommentItem } from '../types/shayari';
import { getCategoryGradientTheme } from '../utils/categoryTheme';
import { Crown, Filter, ArrowLeft } from 'lucide-react';
import { TranslatedText, useGlobalLanguage } from '../context/GlobalLanguageContext';

interface ZqOfficialPageProps {
  officialShayaris: Shayari[];
  onOpenAdminModal: () => void;
  onNavigateHome?: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments: (targetId: string, title: string, comments: CommentItem[]) => void;
}

export const ZqOfficialPage: React.FC<ZqOfficialPageProps> = ({
  officialShayaris,
  onOpenAdminModal,
  onNavigateHome,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal,
  onOpenComments
}) => {
  const { globalLanguage } = useGlobalLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('love');
  const effectiveLanguage: LanguageType =
    globalLanguage === 'english'
      ? 'english'
      : globalLanguage === 'urdu'
        ? 'urdu'
        : 'hindi';
  const heroTheme = getCategoryGradientTheme(selectedCategory, 'feelings');

  const filteredList =
    selectedCategory === 'all'
      ? officialShayaris
      : officialShayaris.filter((s) => s.category === selectedCategory);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 bg-white">
      {/* Top Breadcrumb & Page Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-base sm:text-lg text-slate-700">
        <div className="flex items-center gap-2">
          <button
            onClick={onNavigateHome}
            className="min-h-[50px] flex items-center gap-2 text-[#d94f70] hover:text-[#b32f4f] text-[18px] sm:text-[20px] font-extrabold cursor-pointer px-4 py-2 rounded-2xl bg-[#fff0f3] border border-[#ffe4e8]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>होम (Home)</span>
          </button>
          <span className="text-xl font-bold">/</span>
          <h1 className="text-slate-900 text-[18px] sm:text-[20px] font-bold">
            <span className="zq-feelings-logo">ZQ FEELINGS</span> 👑 Official
          </h1>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-900 text-sm sm:text-base font-black shadow-md border border-amber-300">
          <Crown className="w-5 h-5 text-amber-900 fill-amber-900" />
          <span>
            👑 Official <span className="zq-feelings-logo">ZQ FEELINGS</span> (Verified)
          </span>
        </div>
      </div>

      {/* Category Gradient + Emoji Banner inside ZQ Official */}
      <div
        className={`relative overflow-hidden w-full rounded-3xl border-2 px-6 py-10 sm:py-12 text-center text-white shadow-lg flex flex-col items-center justify-center gap-3 ${heroTheme.gradientClass}`}
      >
        <div className="gloss-overlay" />
        <div className="relative z-10 flex items-center justify-center gap-4">
          <span className="text-3xl sm:text-4xl opacity-90 select-none" aria-hidden="true">
            {heroTheme.accentLeft}
          </span>
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/15 backdrop-blur-xs border border-white/30 flex items-center justify-center text-6xl sm:text-7xl shadow-md select-none">
            {heroTheme.emoji}
          </div>
          <span className="text-3xl sm:text-4xl opacity-90 select-none" aria-hidden="true">
            {heroTheme.accentRight}
          </span>
        </div>
        <h3 className="relative z-10 font-rozha text-[24px] sm:text-[30px] font-bold tracking-wide text-white drop-shadow-sm mt-1">
          👑 ZQ Official ·{' '}
          <TranslatedText
            text={heroTheme.hindiName}
            english={heroTheme.name}
            defaultDisplay={`${heroTheme.name} · ${heroTheme.hindiName}`}
          />
        </h3>
      </div>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="bg-[#fff8f9] border-2 border-[#ffe4e8] rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2.5 mb-5">
          <Filter className="w-6 h-6 text-[#d94f70]" />
          <h2 className="text-[26px] font-bold text-[#d94f70] tracking-wide">
            ZQ श्रेणियां चुनें (Choose Category)
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`min-h-[52px] px-5 py-3.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border-2 shadow-xs ${
              selectedCategory === 'all'
                ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-md'
                : 'bg-white text-slate-900 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
            }`}
          >
            🌟 सभी Official ({officialShayaris.length})
          </button>

          {ALL_CATEGORIES_FOR_POSTING.map((cat) => {
            const count = officialShayaris.filter((s) => s.category === cat.id).length;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`min-h-[52px] px-5 py-3.5 flex items-center gap-2.5 rounded-2xl text-[18px] font-bold transition-all cursor-pointer border-2 shadow-xs ${
                  isActive
                    ? 'btn-glossy-pink text-white border-pink-400 shadow-md scale-105'
                    : 'bg-white text-slate-900 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span>{cat.name}</span>
                {count > 0 && (
                  <span className="text-sm bg-[#d94f70]/20 text-[#d94f70] px-2 py-0.5 rounded-full font-bold ml-1">
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* SHAYARI LIST WITH GOLDEN OFFICIAL BADGE */}
      {filteredList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredList.map((shayari) => (
            <div key={shayari.id} className="relative">
              {/* Golden Badge on Top */}
              <div className="absolute -top-3.5 left-4 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-slate-900 text-sm font-bold shadow-md border border-amber-200">
                <Crown className="w-4 h-4 text-amber-900 fill-amber-900" />
                <span>
                  👑 Official <span className="zq-feelings-logo">ZQ FEELINGS</span>
                </span>
                <span className="text-emerald-900 text-xs font-bold">✅ Auto Verified</span>
              </div>

              <ShayariCard
                shayari={shayari}
                isFavorite={isFavorite(shayari.id)}
                onToggleFavorite={onToggleFavorite}
                currentLanguage={effectiveLanguage}
                onOpenCardModal={onOpenCardModal}
                onOpenComments={(s) =>
                  onOpenComments(s.id, s.title, s.comments || [])
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#fff8f9] rounded-3xl border-2 border-dashed border-[#ffe4e8] p-7 space-y-3">
          <div className="text-5xl">👑</div>
          <h3 className="text-[26px] font-bold text-slate-800">
            इस श्रेणी में अभी ZQ Official शायरी जोड़ी जा रही है
          </h3>
          <p className="text-[18px] text-slate-600 max-w-md mx-auto font-medium">
            कृपया दूसरी श्रेणी चुनें अथवा नीचे एडमिन पैनल से नई आधिकारिक शायरी पोस्ट करें।
          </p>
        </div>
      )}

      {/* SMALL DISCRETE LINK AT BOTTOM OF ZQ-FEELINGS PAGE PER REQUIREMENT */}
      <div className="pt-10 pb-4 text-center border-t border-[#ffe4e8]">
        <button
          onClick={onOpenAdminModal}
          className="text-sm sm:text-base text-slate-400 hover:text-[#d94f70] transition-colors cursor-pointer inline-flex items-center gap-1.5 font-bold hover:underline"
          title="Admin Login"
        >
          <span>Admin Login 🔐</span>
        </button>
      </div>
    </div>
  );
};
