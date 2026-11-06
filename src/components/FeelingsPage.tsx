import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  FEELINGS_CATEGORIES,
  SHAYARI_LIST,
  MAAFI_SUBCATEGORIES,
  MAAFI_SPECIAL_SHAYARIS,
  normalizeFeelingsCategoryId
} from '../data/shayariData';
import { ShayariCard } from './ShayariCard';
import { ShayariPagination } from './ShayariPagination';
import {
  Static35BottomLanguageBar,
  Static35TopLanguageSelector
} from './Static35LanguageBar';
import { getPaginatedSlice } from '../utils/pagination';
import { Shayari, FontStyleId, MaafiSubCategory } from '../types/shayari';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';
import {
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  ValentineLangCode
} from '../data/valentineWeekMeta';
import {
  VALID_FEELINGS_MAIN_CAT_IDS,
  VALID_MAAFI_CAT_IDS,
  buildFeelingsCleanPath
} from '../data/static35/static35Meta';
import {
  ensureStatic35LanguageLoaded,
  getStatic35CategoryHeading,
  isStatic35LanguageReady
} from '../data/static35/static35Loader';
import { getCategorySeoDetail } from '../data/categories/categorySeoContent';

function extractMaafiSubFromCategory(rawCat?: string): MaafiSubCategory | 'general' {
  if (!rawCat) return 'general';
  const cleaned = rawCat.trim().toLowerCase().replace(/-shayari$/, '');
  if (VALID_MAAFI_CAT_IDS.has(cleaned)) {
    return cleaned as MaafiSubCategory;
  }
  return 'general';
}

interface FeelingsPageProps {
  initialCategory?: string;
  initialLang?: ValentineLangCode;
  initialPage?: number;
  onSelectCategory?: (category: string, lang?: ValentineLangCode) => void;
  onSelectLanguageUrl?: (lang: ValentineLangCode, category: string) => void;
  onPageChange?: (page: number) => void;
  getPageHref?: (page: number) => string;
  onNavigateHome?: () => void;
  onNavigateFestival?: () => void;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onOpenCardModal: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

export const FeelingsPage: React.FC<FeelingsPageProps> = ({
  initialCategory = 'love',
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
  const initialMaafiSub = extractMaafiSubFromCategory(initialCategory);
  const [activeCategory, setActiveCategory] = useState<string>(
    initialMaafiSub !== 'general'
      ? 'sorry'
      : initialCategory === 'all'
        ? 'all'
        : normalizeFeelingsCategoryId(initialCategory || 'love')
  );
  const [maafiSubCategory, setMaafiSubCategory] = useState<MaafiSubCategory | 'general'>(
    initialMaafiSub
  );
  const [activeLang, setActiveLang] = useState<ValentineLangCode>(initialLang || 'hi');
  const [isLoadingLang, setIsLoadingLang] = useState<boolean>(false);
  const [, forcePackRender] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(
    initialPage && initialPage >= 1 ? initialPage : 1
  );
  const { ui } = useGlobalLanguage();

  useEffect(() => {
    if (initialCategory) {
      const sub = extractMaafiSubFromCategory(initialCategory);
      if (sub !== 'general') {
        setActiveCategory('sorry');
        setMaafiSubCategory(sub);
      } else if (initialCategory === 'all') {
        setActiveCategory('all');
        setMaafiSubCategory('general');
      } else {
        setActiveCategory(normalizeFeelingsCategoryId(initialCategory));
        setMaafiSubCategory('general');
      }
    }
    setCurrentPage(initialPage && initialPage >= 1 ? initialPage : 1);
  }, [initialCategory, initialPage]);

  useEffect(() => {
    setActiveLang(initialLang || 'hi');
  }, [initialLang]);

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
    void triggerLoadLang(activeLang);
  }, [activeLang, triggerLoadLang]);

  const currentCatKey =
    activeCategory === 'sorry' && maafiSubCategory !== 'general'
      ? maafiSubCategory
      : activeCategory;

  const handleLanguageSelect = (nextLang: ValentineLangCode) => {
    setActiveLang(nextLang);
    setCurrentPage(1);
    onSelectLanguageUrl?.(nextLang, currentCatKey);
    void triggerLoadLang(nextLang);
  };

  const handlePageSelect = (nextPage: number) => {
    setCurrentPage(nextPage);
    onPageChange?.(nextPage);
  };

  const activeFeelObj = FEELINGS_CATEGORIES.find((f) => f.id === activeCategory);
  const activeMaafiSubObj =
    activeCategory === 'sorry' && maafiSubCategory !== 'general'
      ? MAAFI_SUBCATEGORIES.find((m) => m.id === maafiSubCategory)
      : undefined;

  // Exact 1,531 main Feelings shayaris + 100 Maafi shayaris = 1,631 total Feelings shayaris (0 Religious leakage)
  const mainFeelingsShayaris = useMemo(
    () => SHAYARI_LIST.filter((s) => VALID_FEELINGS_MAIN_CAT_IDS.has(String(s.category))),
    []
  );

  const all1631FeelingsShayaris = useMemo(
    () =>
      SHAYARI_LIST.filter(
        (s) =>
          VALID_FEELINGS_MAIN_CAT_IDS.has(String(s.category)) ||
          VALID_MAAFI_CAT_IDS.has(String(s.category))
      ),
    []
  );

  const categoryShayaris = useMemo(() => {
    if (activeCategory === 'sorry' && maafiSubCategory !== 'general') {
      return MAAFI_SPECIAL_SHAYARIS.filter((s) => s.category === maafiSubCategory);
    }
    if (activeCategory === 'all') {
      return all1631FeelingsShayaris;
    }
    return mainFeelingsShayaris.filter((s) => s.category === activeCategory);
  }, [all1631FeelingsShayaris, mainFeelingsShayaris, activeCategory, maafiSubCategory]);

  const pagination = useMemo(
    () => getPaginatedSlice(categoryShayaris, currentPage),
    [categoryShayaris, currentPage]
  );

  const langMeta = VALENTINE_LANGUAGE_MAP.get(activeLang) || VALENTINE_LANGUAGES[0];

  const fallbackHeading = activeMaafiSubObj
    ? activeMaafiSubObj.name
    : activeFeelObj
      ? `${activeFeelObj.name} (${activeFeelObj.hindiName})`
      : 'Feelings Shayari (फीलिंग्स शायरी)';

  const staticHeading = getStatic35CategoryHeading(currentCatKey, activeLang, fallbackHeading);
  const sectionShortLabel = activeMaafiSubObj
    ? `${activeMaafiSubObj.englishTitle} Shayari`
    : activeFeelObj
      ? activeFeelObj.name
      : 'Feelings Shayari';

  const canonicalSharePath = buildFeelingsCleanPath(currentCatKey, activeLang, pagination.currentPage);

  const catSeoDetail = useMemo(
    () => getCategorySeoDetail(activeCategory !== 'all' ? activeCategory : undefined),
    [activeCategory]
  );

  const [visibleCardCount, setVisibleCardCount] = useState<number>(10);
  useEffect(() => {
    setVisibleCardCount(10);
  }, [activeCategory, maafiSubCategory, activeLang, currentPage]);

  useEffect(() => {
    if (visibleCardCount >= pagination.pageItems.length) return;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 900) {
        setVisibleCardCount((prev) => Math.min(prev + 10, pagination.pageItems.length));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCardCount, pagination.pageItems.length]);

  return (
    <div
      dir={langMeta.rtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 bg-white"
    >
      {/* Top Category Header + Back to Home + 35-Language Static Drawer */}
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
              {activeMaafiSubObj
                ? `${activeMaafiSubObj.icon} `
                : activeFeelObj
                  ? `${activeFeelObj.icon} `
                  : '💗 '}
              {staticHeading}
            </h1>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-[#fff0f3] text-[#d94f70] font-extrabold text-[14px] sm:text-[15px] border border-[#ffe4e8] tabular-nums">
            {categoryShayaris.length} Shayari • {langMeta.nativeLabel}
          </span>
        </div>

        <Static35TopLanguageSelector
          activeLang={activeLang}
          isLoadingLang={isLoadingLang}
          buildHref={(lang) => buildFeelingsCleanPath(currentCatKey, lang, 1)}
          onSelectLanguage={handleLanguageSelect}
        />

        {/* 2-3 Line SEO Friendly Category Intro (Google Top 1 Ranking) */}
        {catSeoDetail?.introText && activeLang === 'hi' && (
          <div className="mt-3 bg-[#fff8f9] border border-[#ffe4e8] rounded-2xl p-4 sm:p-5 shadow-2xs">
            <p className="text-[14px] sm:text-[15px] font-semibold text-slate-700 leading-relaxed">
              {catSeoDetail.introText}
            </p>
          </div>
        )}
      </div>

      {/* DIRECT SHAYARI CARDS (Lazy loaded first 10, then on scroll for maximum speed) */}
      {pagination.pageItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {pagination.pageItems.slice(0, visibleCardCount).map((shayari) => (
              <ShayariCard
                key={`${shayari.id}-${activeLang}`}
                shayari={shayari}
                isFavorite={isFavorite(shayari.id)}
                onToggleFavorite={onToggleFavorite}
                currentLanguage={activeLang.startsWith('en') ? 'english' : 'hindi'}
                staticLangCode={activeLang}
                shareCanonicalPath={canonicalSharePath}
                onOpenCardModal={onOpenCardModal}
                onOpenComments={onOpenComments}
              />
            ))}
          </div>

          {visibleCardCount < pagination.pageItems.length && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() =>
                  setVisibleCardCount((prev) => Math.min(prev + 10, pagination.pageItems.length))
                }
                className="px-6 py-2.5 rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffd6df] font-bold text-[14px] transition-all cursor-pointer shadow-2xs"
              >
                और शायरी लोड करें ({pagination.pageItems.length - visibleCardCount} बाकी) ↓
              </button>
            </div>
          )}

          <ShayariPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            startIndex={pagination.startIndex}
            endIndex={pagination.endIndex}
            totalItems={pagination.totalItems}
            onPageChange={handlePageSelect}
            getPageHref={
              getPageHref ||
              ((pg) => buildFeelingsCleanPath(currentCatKey, activeLang, pg))
            }
          />

          <Static35BottomLanguageBar
            sectionLabel={sectionShortLabel}
            activeLang={activeLang}
            isLoadingLang={isLoadingLang}
            buildHref={(lang) => buildFeelingsCleanPath(currentCatKey, lang, 1)}
            onSelectLanguage={handleLanguageSelect}
          />

          {/* Related Categories Cross-Linking Section */}
          {catSeoDetail?.relatedCategoryIds && catSeoDetail.relatedCategoryIds.length > 0 && (
            <section className="mt-8 pt-6 border-t-2 border-[#ffe4e8] space-y-3">
              <h3 className="font-rozha text-[18px] sm:text-[20px] font-bold text-[#d94f70]">
                🔗 आपको यह शायरी भी पसंद आएगी (Related Categories):
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {catSeoDetail.relatedCategoryIds.map((relId) => {
                  const relDetail = getCategorySeoDetail(relId);
                  if (!relDetail) return null;
                  return (
                    <a
                      key={relId}
                      href={buildFeelingsCleanPath(relId, activeLang, 1)}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCategory(relId);
                        setMaafiSubCategory('general');
                        setCurrentPage(1);
                        onSelectCategory?.(relId, activeLang);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="px-3.5 py-2 rounded-xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffd6df] hover:border-[#d94f70] text-[13px] sm:text-[14px] font-bold text-slate-800 hover:text-[#d94f70] transition-all shadow-2xs"
                    >
                      {relDetail.categoryName} ({relDetail.hindiName}) →
                    </a>
                  );
                })}
              </div>
            </section>
          )}

          {/* People Also Ask FAQ Section (Schema FAQ Rich Snippet Support) */}
          {catSeoDetail?.faqs && catSeoDetail.faqs.length > 0 && (
            <section className="mt-8 pt-6 border-t-2 border-[#ffe4e8] space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl select-none">💡</span>
                <h2 className="font-rozha text-[22px] sm:text-[24px] font-bold text-[#d94f70]">
                  {catSeoDetail.categoryName} - अक्सर पूछे जाने वाले सवाल (FAQ)
                </h2>
              </div>
              <div className="space-y-3">
                {catSeoDetail.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fff8f9] border border-[#ffe4e8] rounded-2xl p-4 sm:p-5 shadow-2xs"
                  >
                    <h3 className="font-bold text-[16px] sm:text-[17px] text-slate-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[14px] sm:text-[15px] text-slate-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <div className="text-center py-16 px-6 bg-[#fff8f9] rounded-3xl border-2 border-dashed border-[#ffe4e8]">
          <p className="text-[22px] text-slate-600 font-bold">{ui.noShayariFound}</p>
        </div>
      )}

      {/* ALL FEELINGS CATEGORIES */}
      <section className="pt-6 border-t-2 border-[#ffe4e8] space-y-5">
        <h2 className="font-rozha text-[22px] sm:text-[26px] font-bold text-[#d94f70]">
          💗 All Feelings Shayari Categories (35 Languages)
        </h2>

        <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          {FEELINGS_CATEGORIES.map((cat) => {
            const isCurrent = activeCategory === cat.id && maafiSubCategory === 'general';
            const catHref = buildFeelingsCleanPath(cat.id, activeLang, 1);
            return (
              <a
                key={cat.id}
                href={catHref}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(cat.id);
                  setMaafiSubCategory('general');
                  setCurrentPage(1);
                  onSelectCategory?.(cat.id, activeLang);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`min-h-[48px] px-3.5 py-2.5 rounded-2xl border flex items-center gap-2 transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                    : 'bg-[#fff8f9] hover:bg-white text-slate-900 border-[#ffd6df] hover:border-[#d94f70]'
                }`}
              >
                <span className="text-lg shrink-0">{cat.icon}</span>
                <span className="text-[13px] sm:text-[14px] font-extrabold truncate">
                  {cat.name.replace(/\s+Shayari$/i, '')}
                </span>
              </a>
            );
          })}

          {MAAFI_SUBCATEGORIES.map((mSub) => {
            const isCurrent = activeCategory === 'sorry' && maafiSubCategory === mSub.id;
            const maafiHref = buildFeelingsCleanPath(mSub.id, activeLang, 1);
            return (
              <a
                key={mSub.id}
                href={maafiHref}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory('sorry');
                  setMaafiSubCategory(mSub.id);
                  setCurrentPage(1);
                  onSelectCategory?.(mSub.id, activeLang);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`min-h-[48px] px-3.5 py-2.5 rounded-2xl border flex items-center gap-2 transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#d94f70] text-white border-[#d94f70] shadow-2xs'
                    : 'bg-[#fff8f9] hover:bg-white text-slate-900 border-[#ffd6df] hover:border-[#d94f70]'
                }`}
              >
                <span className="text-lg shrink-0">{mSub.icon}</span>
                <span className="text-[13px] sm:text-[14px] font-extrabold truncate">
                  {mSub.englishTitle}
                </span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
};
