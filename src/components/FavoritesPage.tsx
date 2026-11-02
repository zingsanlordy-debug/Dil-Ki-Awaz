import React from 'react';
import { SHAYARI_LIST } from '../data/shayariData';
import { ALL_SPECIAL_SHAYARI_AS_SHAYARI } from '../zq-mansoon-special/data';
import { VALENTINE_SHAYARIS_AS_STANDARD } from '../data/valentineWeekBase';
import { ShayariCard } from './ShayariCard';
import { Shayari, FontStyleId, LanguageType } from '../types/shayari';
import { Bookmark, Heart } from 'lucide-react';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';

interface FavoritesPageProps {
  favoriteIds: string[];
  customShayaris?: Shayari[];
  onNavigateHome: () => void;
  onOpenWriteShayari?: () => void;
  onToggleFavorite: (id: string) => void;
  currentLanguage?: LanguageType;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favoriteIds,
  customShayaris = [],
  onNavigateHome,
  onToggleFavorite,
  currentLanguage = 'hindi',
  onOpenCardModal
}) => {
  const { ui, isRtl } = useGlobalLanguage();
  const favTitle = useTranslatedText('आपकी पसंदीदा शायरियाँ', 'Your Favorite Shayaris');
  const savedLabel = useTranslatedText('सेव की गई शायरियाँ', 'Saved Shayaris');
  const emptyTitle = useTranslatedText(
    'अभी तक कोई पसंदीदा शायरी नहीं जोड़ी गई',
    'No favorite shayaris saved yet'
  );
  const emptyDesc = useTranslatedText(
    'किसी भी शायरी कार्ड पर बने दिल (Heart) के निशान पर क्लिक करके उसे यहाँ सेव करें।',
    'Tap the heart icon on any shayari card to save it here.'
  );
  const exploreLabel = useTranslatedText('शायरी एक्सप्लोर करें', 'Explore Shayari');

  const allShayaris = [
    ...customShayaris,
    ...SHAYARI_LIST,
    ...ALL_SPECIAL_SHAYARI_AS_SHAYARI,
    ...VALENTINE_SHAYARIS_AS_STANDARD
  ];
  const shayariMap = new Map<string, Shayari>();
  for (const item of allShayaris) {
    if (!shayariMap.has(item.id)) {
      shayariMap.set(item.id, item);
    }
  }
  const favoriteShayaris = favoriteIds
    .map((id) => shayariMap.get(id))
    .filter((item): item is Shayari => Boolean(item));

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 space-y-8 bg-white"
    >
      {/* Header Banner */}
      <div className="relative text-center py-8 sm:py-10 px-6 rounded-3xl bg-[#fff8f9] border border-[#ffe4e8] shadow-xs">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#fff0f3] border border-[#ffe4e8] flex items-center justify-center text-3xl mb-4 shadow-inner">
          <Bookmark className="w-8 h-8 text-[#d94f70] fill-[#d94f70]" />
        </div>

        <h1 className="font-rozha text-[26px] sm:text-[32px] font-bold tracking-wide text-[#d94f70] leading-[1.45] break-words py-1">
          {favTitle} ({ui.btnPasandida} - {favoriteShayaris.length})
        </h1>

        <p className="mt-2 text-[18px] text-slate-600 font-semibold">
          {favoriteShayaris.length} {savedLabel} ❤️
        </p>
      </div>

      {/* Grid */}
      {favoriteShayaris.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {favoriteShayaris.map((shayari) => (
            <ShayariCard
              key={shayari.id}
              shayari={shayari}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
              currentLanguage={currentLanguage}
              onlyCopyAndWhatsapp={true}
              onOpenCardModal={onOpenCardModal}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#fff8f9] rounded-3xl border border-[#ffe4e8] p-7">
          <Heart className="w-12 h-12 text-[#d94f70]/40 mx-auto mb-4" />
          <h2 className="text-[26px] font-bold text-slate-800 leading-[1.45] break-words">
            {emptyTitle}
          </h2>
          <p className="text-[18px] text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
            {emptyDesc}
          </p>
          <button
            onClick={onNavigateHome}
            className="mt-5 min-h-[52px] px-6 py-3 bg-[#d94f70] text-white rounded-2xl text-[18px] font-bold cursor-pointer hover:bg-[#b32f4f] shadow-xs"
          >
            {exploreLabel}
          </button>
        </div>
      )}
    </div>
  );
};
