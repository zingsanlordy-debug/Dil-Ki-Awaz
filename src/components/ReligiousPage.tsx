import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { RELIGIOUS_CATEGORIES, RELIGIOUS_SHAYARIS } from '../data/categories/index';
import { ShayariCard } from './ShayariCard';
import { ShayariPagination } from './ShayariPagination';
import { getPaginatedSlice } from '../utils/pagination';
import { Shayari, FontStyleId, ReligiousCategory } from '../types/shayari';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';

interface ReligiousPageProps {
  initialCategory?: string;
  initialPage?: number;
  onSelectCategory?: (category: ReligiousCategory) => void;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  onNavigateHome?: () => void;
  onNavigateFeelings?: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

const VALID_RELIGIOUS_IDS = new Set<string>(RELIGIOUS_CATEGORIES.map((c) => c.id));

function normalizeReligiousCategory(raw?: string): ReligiousCategory {
  if (!raw) return 'sanatan-hindu';
  const cleaned = raw.trim().toLowerCase().replace(/-shayari$/, '');
  if (VALID_RELIGIOUS_IDS.has(cleaned)) {
    return cleaned as ReligiousCategory;
  }
  return 'sanatan-hindu';
}

export const ReligiousPage: React.FC<ReligiousPageProps> = ({
  initialCategory = 'sanatan-hindu',
  initialPage = 1,
  onSelectCategory,
  onPageChange,
  getPageHref,
  onNavigateHome,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal,
  onOpenComments
}) => {
  const [activeCategory, setActiveCategory] = useState<ReligiousCategory>(
    normalizeReligiousCategory(initialCategory)
  );
  const [currentPage, setCurrentPage] = useState<number>(
    initialPage && initialPage >= 1 ? initialPage : 1
  );
  const { globalLanguage, ui, isRtl } = useGlobalLanguage();

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(normalizeReligiousCategory(initialCategory));
    }
    setCurrentPage(initialPage && initialPage >= 1 ? initialPage : 1);
  }, [initialCategory, initialPage]);

  const handlePageSelect = (nextPage: number) => {
    setCurrentPage(nextPage);
    onPageChange?.(nextPage);
  };

  const activeMeta =
    RELIGIOUS_CATEGORIES.find((c) => c.id === activeCategory) || RELIGIOUS_CATEGORIES[0];

  const translatedHeading = useTranslatedText(
    activeMeta.name,
    activeMeta.englishTitle
  );

  const categoryShayaris = useMemo(
    () => RELIGIOUS_SHAYARIS.filter((s) => s.category === activeCategory),
    [activeCategory]
  );

  const pagination = useMemo(
    () => getPaginatedSlice(categoryShayaris, currentPage),
    [categoryShayaris, currentPage]
  );

  const cardLanguage =
    globalLanguage === 'english'
      ? 'english'
      : globalLanguage === 'urdu'
        ? 'urdu'
        : 'hindi';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 bg-white"
    >
      {/* Top Category Header + Back to Home */}
      <div className="border-b-2 border-[#ffe4e8] pb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {onNavigateHome && (
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffe4e8] text-[14px] font-extrabold inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{ui.btnHome}</span>
            </a>
          )}
          <h1 className="font-rozha text-[24px] sm:text-[30px] font-bold text-[#d94f70] leading-snug">
            {activeMeta.icon}{' '}
            {globalLanguage === 'default' ? activeMeta.name : translatedHeading}
          </h1>
        </div>
        <span className="px-3.5 py-1 rounded-full bg-[#fff0f3] text-[#d94f70] font-extrabold text-[14px] sm:text-[15px] border border-[#ffe4e8] tabular-nums">
          {categoryShayaris.length} Shayari
        </span>
      </div>

      {/* DIRECT SHAYARI CARDS */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {pagination.pageItems.map((shayari) => (
            <ShayariCard
              key={shayari.id}
              shayari={shayari}
              isFavorite={isFavorite(shayari.id)}
              onToggleFavorite={onToggleFavorite}
              currentLanguage={cardLanguage}
              onOpenCardModal={onOpenCardModal}
              onOpenComments={onOpenComments}
            />
          ))}
        </div>

        <ShayariPagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          startIndex={pagination.startIndex}
          endIndex={pagination.endIndex}
          totalItems={pagination.totalItems}
          onPageChange={handlePageSelect}
          getPageHref={getPageHref}
        />
      </div>

      {/* All 4 Religious Categories Switcher */}
      <section className="pt-6 border-t-2 border-[#ffe4e8] space-y-4">
        <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#d94f70]">
          🙏 All Religious Shayari Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {RELIGIOUS_CATEGORIES.map((rel) => {
            const isCurrent = activeCategory === rel.id;
            return (
              <a
                key={rel.id}
                href={rel.path}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(rel.id);
                  setCurrentPage(1);
                  onSelectCategory?.(rel.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`min-h-[52px] px-4 py-3 rounded-2xl border flex items-center justify-between gap-2 transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                    : 'bg-[#fff8f9] hover:bg-white text-slate-900 border-[#ffd6df] hover:border-[#d94f70]'
                }`}
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span className="text-xl shrink-0">{rel.icon}</span>
                  <span className="text-[14px] font-extrabold truncate">{rel.englishTitle}</span>
                </span>
                <span className="text-[12px] font-bold tabular-nums shrink-0">{rel.count}</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};
