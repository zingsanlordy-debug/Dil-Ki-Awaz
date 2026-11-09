import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import { FESTIVAL_CATEGORIES, SHAYARI_LIST } from '../data/shayariData';
import { ShayariCard } from './ShayariCard';
import { ShayariPagination } from './ShayariPagination';
import {
  Static35BottomLanguageBar
} from './Static35LanguageBar';
import { getPaginatedSlice } from '../utils/pagination';
import { Shayari, FontStyleId } from '../types/shayari';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';
import {
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  ValentineLangCode
} from '../data/valentineWeekMeta';
import {
  HOLIDAY_35_META,
  Holiday35Id,
  buildHoliday35CleanPath,
  isHoliday35Category
} from '../data/static35/static35Meta';
import {
  ensureStatic35LanguageLoaded,
  getStatic35CategoryHeading,
  isStatic35LanguageReady
} from '../data/static35/static35Loader';
import { DIWALI_35_FAQS, DIWALI_35_SEO } from '../data/static35/diwali35Data';
import { DiwaliOfferBox } from './DiwaliOfferBox';
import { DiwaliTopBanner320x50 } from './DiwaliAds';

interface FestivalPageProps {
  initialCategory?: string;
  initialLang?: ValentineLangCode;
  initialPage?: number;
  onSelectCategory?: (category: string, lang?: ValentineLangCode) => void;
  onSelectLanguageUrl?: (lang: ValentineLangCode, holidayId: Holiday35Id) => void;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  onNavigateHome?: () => void;
  onNavigateFeelings?: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

export const FestivalPage: React.FC<FestivalPageProps> = ({
  initialCategory = 'diwali',
  initialLang,
  initialPage = 1,
  onSelectCategory,
  onSelectLanguageUrl,
  onPageChange,
  getPageHref,
  onNavigateHome,
  isFavorite,
  onToggleFavorite,
  onOpenCardModal,
  onOpenComments
}) => {
  const normalizeFestivalCategory = (cat?: string) => (!cat ? 'diwali' : cat);

  const [activeCategory, setActiveCategory] = useState<string>(
    normalizeFestivalCategory(initialCategory)
  );
  const [activeLang, setActiveLang] = useState<ValentineLangCode>(initialLang || 'hi');
  const [isLoadingLang, setIsLoadingLang] = useState<boolean>(false);
  const [, forcePackRender] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(
    initialPage && initialPage >= 1 ? initialPage : 1
  );
  const { globalLanguage, activeLanguageOption, ui, isRtl } = useGlobalLanguage();

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(normalizeFestivalCategory(initialCategory));
    }
    setCurrentPage(initialPage && initialPage >= 1 ? initialPage : 1);
  }, [initialCategory, initialPage]);

  const isStatic35Holiday = isHoliday35Category(activeCategory);

  const triggerLoadLang = useCallback(async (lang: ValentineLangCode) => {
    if (isStatic35LanguageReady(lang)) return;
    setIsLoadingLang(true);
    try {
      await ensureStatic35LanguageLoaded(lang);
      forcePackRender((n) => n + 1);
    } finally {
      setIsLoadingLang(false);
    }
  }, []);

  useEffect(() => {
    if (activeLanguageOption?.apiCode) {
      const targetLang = activeLanguageOption.apiCode as ValentineLangCode;
      if (targetLang && targetLang !== activeLang) {
        setActiveLang(targetLang);
        void triggerLoadLang(targetLang);
      }
    } else if (initialLang) {
      setActiveLang(initialLang);
      void triggerLoadLang(initialLang);
    }
  }, [activeLanguageOption, initialLang, triggerLoadLang]);

  useEffect(() => {
    if (isStatic35Holiday) {
      void triggerLoadLang(activeLang);
    }
  }, [isStatic35Holiday, activeLang, triggerLoadLang]);

  const handleLanguageSelect = (nextLang: ValentineLangCode) => {
    if (!isHoliday35Category(activeCategory)) return;
    setActiveLang(nextLang);
    setCurrentPage(1);
    onSelectLanguageUrl?.(nextLang, activeCategory);
    void triggerLoadLang(nextLang);
  };

  const handlePageSelect = (nextPage: number) => {
    setCurrentPage(nextPage);
    onPageChange?.(nextPage);
  };

  const activeFestObj = FESTIVAL_CATEGORIES.find((f) => f.id === activeCategory);

  const activeHeadingSource = activeFestObj
    ? `${activeFestObj.name} Shayari (${activeFestObj.hindiName} शायरी)`
    : 'Festival Shayari (त्यौहार शायरी)';
  const translatedActiveHeading = useTranslatedText(
    isStatic35Holiday ? '' : activeHeadingSource,
    activeFestObj ? `${activeFestObj.name} Shayari` : 'Festival Shayari'
  );

  const categoryShayaris = useMemo(
    () =>
      SHAYARI_LIST.filter(
        (s) =>
          s.categoryType === 'festival' &&
          (activeCategory === 'all' || s.category === activeCategory)
      ),
    [activeCategory]
  );

  const pagination = useMemo(
    () => getPaginatedSlice(categoryShayaris, currentPage),
    [categoryShayaris, currentPage]
  );

  const staticLangMeta = VALENTINE_LANGUAGE_MAP.get(activeLang) || VALENTINE_LANGUAGES[0];
  const holidayMeta = isStatic35Holiday ? HOLIDAY_35_META[activeCategory] : null;
  const staticHolidayHeading =
    isStatic35Holiday && holidayMeta
      ? getStatic35CategoryHeading(
          activeCategory,
          activeLang,
          `${holidayMeta.name} Shayari (${holidayMeta.dateLabel})`
        )
      : '';

  const effectiveDir = isStatic35Holiday
    ? staticLangMeta.rtl
      ? 'rtl'
      : 'ltr'
    : isRtl
      ? 'rtl'
      : 'ltr';

  const cardLanguage = globalLanguage === 'english' ? 'english' : 'hindi';
  const holidaySharePath = isStatic35Holiday
    ? buildHoliday35CleanPath(activeCategory, activeLang, pagination.currentPage)
    : undefined;

  const [visibleFestCount, setVisibleFestCount] = useState<number>(10);
  useEffect(() => {
    setVisibleFestCount(10);
  }, [activeCategory, activeLang, currentPage]);

  useEffect(() => {
    if (visibleFestCount >= pagination.pageItems.length) return;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 900) {
        setVisibleFestCount((prev) => Math.min(prev + 10, pagination.pageItems.length));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleFestCount, pagination.pageItems.length]);

  return (
    <div
      dir={effectiveDir}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 bg-white"
    >
      {/* Top Category Header + Back to Home */}
      <div className="border-b-2 border-[#ffe4e8] pb-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
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
              {activeFestObj ? `${activeFestObj.icon} ` : '🎉 '}
              {activeCategory === 'diwali'
                ? (DIWALI_35_SEO[activeLang]?.h1 || '125 Happy Diwali Wishes, Shayari aur Messages in Hindi')
                : isStatic35Holiday
                  ? staticHolidayHeading
                  : globalLanguage === 'default'
                    ? activeFestObj
                      ? `${activeFestObj.name} Shayari (${activeFestObj.hindiName} शायरी)`
                      : 'Festival Shayari (त्यौहार शायरी)'
                    : translatedActiveHeading}
            </h1>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-[#fff0f3] text-[#d94f70] font-extrabold text-[14px] sm:text-[15px] border border-[#ffe4e8] tabular-nums">
            {isStatic35Holiday
              ? `${categoryShayaris.length} Shayari • ${staticLangMeta.nativeLabel}`
              : `${categoryShayaris.length} Shayari`}
          </span>
        </div>

        {activeCategory === 'diwali' && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#fff0f3] to-[#fff8f9] border-2 border-[#ffd6df] text-slate-800 shadow-2xs">
            <p className="text-[15px] sm:text-[17px] font-bold text-[#d94f70] leading-relaxed">
              🪔 {DIWALI_35_SEO[activeLang]?.introText || 'Diwali Week 6 Nov se 11 Nov 2026 tak hai. Dhanteras, Choti Diwali, Diwali, Govardhan Puja aur Bhai Dooj - sabki wishes yahin se copy karo. 125 Wishes x 35 Languages = 4375 Wishes.'}
            </p>
          </div>
        )}
      </div>

      {/* Top Diwali 320x50 Ad Banner (only on Diwali section) */}
      {activeCategory === 'diwali' && <DiwaliTopBanner320x50 />}

      {/* Diwali H2 Section Title above shayari cards */}
      {activeCategory === 'diwali' && (
        <h2 className="text-[22px] sm:text-[26px] font-bold text-slate-800 font-rozha text-center sm:text-left pt-2 pb-1">
          {DIWALI_35_SEO[activeLang]?.h1 || '125 Happy Diwali Wishes, Shayari aur Messages in Hindi'}
        </h2>
      )}

      {/* DIRECT SHAYARI CARDS ONLY */}
      {pagination.pageItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {pagination.pageItems.slice(0, visibleFestCount).map((shayari, index) => {
              const cardElement = (
                <ShayariCard
                  key={isStatic35Holiday ? `${shayari.id}-${activeLang}` : shayari.id}
                  shayari={shayari}
                  isFavorite={isFavorite(shayari.id)}
                  onToggleFavorite={onToggleFavorite}
                  currentLanguage={
                    isStatic35Holiday
                      ? activeLang.startsWith('en')
                        ? 'english'
                        : 'hindi'
                      : cardLanguage
                  }
                  staticLangCode={isStatic35Holiday ? activeLang : undefined}
                  shareCanonicalPath={holidaySharePath}
                  onOpenCardModal={onOpenCardModal}
                  onOpenComments={onOpenComments}
                />
              );
              return cardElement;
            })}
          </div>

          {visibleFestCount < pagination.pageItems.length && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleFestCount((prev) =>
                    Math.min(prev + 10, pagination.pageItems.length)
                  )
                }
                className="px-6 py-2.5 rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffd6df] font-bold text-[14px] transition-all cursor-pointer shadow-2xs"
              >
                और शायरी लोड करें ({pagination.pageItems.length - visibleFestCount} बाकी) ↓
              </button>
            </div>
          )}

          {/* Festive Diwali Gift Offer Box (Auto-Link System + 6 Cards) */}
          {activeCategory === 'diwali' && <DiwaliOfferBox />}

          <ShayariPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            startIndex={pagination.startIndex}
            endIndex={pagination.endIndex}
            totalItems={pagination.totalItems}
            onPageChange={handlePageSelect}
            getPageHref={getPageHref}
          />

          {/* 6 FAQs in 35 Languages */}
          {activeCategory === 'diwali' && (
            <section className="my-10 pt-6 border-t-2 border-[#ffe4e8] space-y-4">
              <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#d94f70] flex items-center gap-2">
                <span>❓</span>
                <span>Diwali 2026 FAQ - Questions &amp; Answers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(DIWALI_35_FAQS[activeLang] || DIWALI_35_FAQS['hi']).map((faq, i) => (
                  <div key={i} className="p-4 sm:p-5 rounded-2xl bg-[#fff8f9] border border-[#ffd6df] space-y-2">
                    <h3 className="font-bold text-[16px] text-[#d94f70] flex items-start gap-2">
                      <span className="shrink-0 text-amber-600 font-black">Q{i + 1}.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-[14px] text-slate-700 leading-relaxed font-normal pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {isStatic35Holiday && holidayMeta && (
            <Static35BottomLanguageBar
              sectionLabel={`${holidayMeta.name} Shayari (${holidayMeta.dateLabel})`}
              activeLang={activeLang}
              isLoadingLang={isLoadingLang}
              buildHref={(lang) => buildHoliday35CleanPath(activeCategory, lang)}
              onSelectLanguage={handleLanguageSelect}
            />
          )}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-[#fff8f9] rounded-3xl border-2 border-dashed border-[#ffe4e8]">
          <p className="text-[22px] text-slate-600 font-bold">{ui.noShayariFound}</p>
        </div>
      )}

      {/* ALL FESTIVAL CATEGORIES */}
      <section className="pt-6 border-t-2 border-[#ffe4e8] space-y-5">
        <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#d94f70]">
          🎉 All Festival Shayari Categories
        </h2>

        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {FESTIVAL_CATEGORIES.map((fest) => {
            const isCurrent = activeCategory === fest.id;
            const festHref = isHoliday35Category(fest.id)
              ? buildHoliday35CleanPath(fest.id, isStatic35Holiday ? activeLang : 'hi')
              : `/${fest.id}-shayari`;
            return (
              <a
                key={fest.id}
                href={festHref}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(fest.id);
                  setCurrentPage(1);
                  onSelectCategory?.(
                    fest.id,
                    isHoliday35Category(fest.id)
                      ? isStatic35Holiday
                        ? activeLang
                        : 'hi'
                      : undefined
                  );
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`min-h-[48px] px-3.5 py-2.5 rounded-2xl border flex items-center gap-2 transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                    : 'bg-[#fff8f9] hover:bg-white text-slate-900 border-[#ffd6df] hover:border-[#d94f70]'
                }`}
              >
                <span className="text-lg shrink-0">{fest.icon}</span>
                <span className="text-[13px] sm:text-[14px] font-extrabold truncate">
                  {fest.name}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};
