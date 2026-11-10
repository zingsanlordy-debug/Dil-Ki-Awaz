import React, { useMemo } from 'react';
import { ArrowLeft, BookOpen, ChevronRight, Home, Sparkles } from 'lucide-react';
import { Shayari, FontStyleId, LanguageType } from '../types/shayari';
import { ShayariCard } from './ShayariCard';
import { getRelatedShayaris, getShayariPath } from '../utils/shayariSlug';
import { useGlobalLanguage, TranslatedText } from '../context/GlobalLanguageContext';

interface ShayariDetailPageProps {
  shayari: Shayari;
  allShayaris?: Shayari[];
  relatedShayaris?: Shayari[];
  onBackToCategory: () => void;
  onOpenShayari: (shayari: Shayari) => void;
  onOpenHome?: () => void;
  onNavigateHome?: () => void;
  onOpenCategory: (cat: string, type?: string) => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  currentLanguage?: LanguageType;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

export const ShayariDetailPage: React.FC<ShayariDetailPageProps> = ({
  shayari,
  allShayaris = [],
  relatedShayaris,
  onBackToCategory,
  onOpenShayari,
  onOpenHome,
  onNavigateHome,
  onOpenCategory,
  isFavorite,
  onToggleFavorite,
  currentLanguage = 'hindi',
  onOpenCardModal,
  onOpenComments
}) => {
  const { isRtl } = useGlobalLanguage();

  const handleHome = onOpenHome || onNavigateHome || onBackToCategory;

  const relatedList = useMemo(() => {
    if (relatedShayaris && relatedShayaris.length > 0) return relatedShayaris;
    return getRelatedShayaris(shayari, allShayaris, 6);
  }, [shayari, allShayaris, relatedShayaris]);

  const canonicalPath = getShayariPath(shayari);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 space-y-8 bg-white min-h-[70vh]"
    >
      {/* 1. BREADCRUMBS */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold text-slate-600 border-b border-[#ffe4e8] pb-4"
      >
        <button
          onClick={handleHome}
          type="button"
          className="flex items-center gap-1.5 text-slate-600 hover:text-[#d94f70] transition-colors cursor-pointer"
        >
          <Home className="w-4 h-4 text-[#d94f70]" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

        <button
          onClick={() => onOpenCategory(shayari.category, shayari.categoryType)}
          type="button"
          className="hover:text-[#d94f70] transition-colors cursor-pointer capitalize font-bold text-[#d94f70]"
        >
          {shayari.categoryName || shayari.category}
        </button>

        <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />

        <span className="text-slate-800 font-extrabold truncate max-w-[220px] sm:max-w-xs">
          {shayari.title || 'Shayari'}
        </span>
      </nav>

      {/* 2. BACK BUTTON */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBackToCategory}
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#fff0f3] hover:bg-[#ffe4e8] text-[#d94f70] font-bold text-sm sm:text-base transition-all cursor-pointer border border-[#ffd6df] shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 shrink-0" />
          <span>
            <TranslatedText
              text="वापस श्रेणी पर जाएँ"
              english="Back to Category"
              defaultDisplay="Back to Category"
            />
          </span>
        </button>

        <span className="text-xs sm:text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          ZQ FEELINGS • 100% Original
        </span>
      </div>

      {/* 3. MAIN FEATURED SHAYARI CARD */}
      <div className="bg-[#fff8f9] p-2 sm:p-5 rounded-3xl border-2 border-[#ffd6df] shadow-xs">
        <ShayariCard
          shayari={shayari}
          isFavorite={isFavorite(shayari.id)}
          onToggleFavorite={onToggleFavorite}
          currentLanguage={currentLanguage}
          shareCanonicalPath={canonicalPath}
          onOpenCardModal={onOpenCardModal}
          onOpenComments={onOpenComments}
        />
      </div>

      {/* 4. RELATED SHAYARI SECTION */}
      {relatedList.length > 0 && (
        <section className="space-y-6 pt-6 border-t-2 border-[#ffe4e8]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-[#d94f70] shrink-0" />
            <h2 className="font-rozha text-2xl sm:text-3xl font-bold text-[#d94f70]">
              <TranslatedText
                text="संबंधित शायरी (Related Shayari)"
                english="Related Shayari"
                defaultDisplay="Related Shayari (संबंधित शायरी)"
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {relatedList.map((rel) => (
              <div key={rel.id} className="relative group">
                <ShayariCard
                  shayari={rel}
                  isFavorite={isFavorite(rel.id)}
                  onToggleFavorite={onToggleFavorite}
                  currentLanguage={currentLanguage}
                  shareCanonicalPath={getShayariPath(rel)}
                  onOpenCardModal={onOpenCardModal}
                  onOpenComments={onOpenComments}
                />
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onOpenCategory(shayari.category, shayari.categoryType)}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 text-white font-bold text-base sm:text-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <span>
                <TranslatedText
                  text={`और भी ${shayari.categoryName || shayari.category} शायरी पढ़ें`}
                  english={`Read more ${shayari.category} Shayari`}
                  defaultDisplay={`Read more ${shayari.category} Shayari`}
                />
              </span>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
