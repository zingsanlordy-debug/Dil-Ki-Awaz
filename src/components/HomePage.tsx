import React, { useMemo } from 'react';
import { ArrowRight, Flame, Heart, HeartHandshake, Pencil, Sparkles } from 'lucide-react';
import {
  Shayari,
  FontStyleId,
  LanguageType,
  ReligiousCategory,
  FamilyRitualCategory
} from '../types/shayari';
import {
  FEELINGS_CATEGORIES,
  FESTIVAL_CATEGORIES,
  MAAFI_SUBCATEGORIES_META
} from '../data/categories/categoryMeta';
import { RELIGIOUS_CATEGORIES } from '../data/categories/religiousMeta';
import { FAMILY_RITUALS_CATEGORIES } from '../data/categories/familyRitualsMeta';
import { MONTHS_META } from '../zq-mansoon-special/monthsMeta';
import { MonthId } from '../zq-mansoon-special/types';
import {
  useGlobalLanguage,
  useTranslatedText,
  TranslatedText
} from '../context/GlobalLanguageContext';
import { VALENTINE_CATEGORIES, ValentineCategoryId } from '../data/valentineWeekMeta';
import { ShayariCard } from './ShayariCard';
import { ShayariPagination } from './ShayariPagination';
import { getPaginatedSlice } from '../utils/pagination';

interface HomePageProps {
  onOpenFestival: (category?: string) => void;
  onOpenFeelings: (category?: string) => void;
  onOpenValentineWeek: (category?: ValentineCategoryId) => void;
  onOpenReligious: (category: ReligiousCategory) => void;
  onOpenFamilyRituals: (category: FamilyRitualCategory) => void;
  onOpenMansoonSpecial: (monthId?: MonthId) => void;
  onOpenWriteShayari?: () => void;
  onOpenZqMoments?: () => void;
  trendingShayaris?: Shayari[];
  currentPage?: number;
  onPageChange?: (page: number) => void;
  isFavorite?: (id: string) => boolean;
  onToggleFavorite?: (id: string) => void;
  currentLanguage?: LanguageType;
  onOpenCardModal?: (shayari: Shayari, selectedFont: FontStyleId) => void;
  onOpenComments?: (shayari: Shayari) => void;
}

const RITUAL_CARD_ACCENTS: Record<
  FamilyRitualCategory,
  { borderAccent: string; badgeColor: string }
> = {
  'newborn-babies': {
    borderAccent: 'border-pink-200 hover:border-pink-500',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200'
  },
  'godh-bharai': {
    borderAccent: 'border-emerald-200 hover:border-emerald-500',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  'naamkaran-mundan': {
    borderAccent: 'border-amber-200 hover:border-amber-500',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
  },
  'grah-pravesh': {
    borderAccent: 'border-violet-200 hover:border-violet-500',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-200'
  }
};

// Systematic ordering of Feeling categories (Love -> Dard/Sharabi -> Rishte/Maafi -> Life/Attitude/Daily/Funny)
const SYSTEMATIC_FEELING_ORDER: readonly string[] = [
  'love',
  'heart-touching',
  'miss-you',
  'yaad',
  'khwab',
  '2-line',
  'sad',
  'sad-love',
  'emotional',
  'alone',
  'breakup',
  'bewafa',
  'sharabi',
  'matlabi-duniya',
  'dosti',
  'family',
  'bhai-behen',
  'sorry',
  'maa-se-maafi',
  'papa-se-maafi',
  'biwi-se-maafi',
  'husband-se-maafi',
  'motivational',
  'kismat',
  'attitude',
  'boys',
  'girls',
  'khushi',
  'funny',
  'good-morning',
  'good-night',
  'birthday-feelings'
];

// Systematic ordering of 27 Festivals (Major Hindu/Indian -> Harvest -> Islamic/Sikh/Christian -> Celebrations & National)
const SYSTEMATIC_FESTIVAL_ORDER: readonly string[] = [
  'diwali',
  'holi',
  'navratri',
  'dussehra',
  'ganesh-chaturthi',
  'janmashtami',
  'mahashivratri',
  'ram-navami',
  'rakshabandhan',
  'bhai-dooj',
  'karva-chauth',
  'chhath-puja',
  'makar-sankranti',
  'lohri',
  'baisakhi',
  'pongal',
  'onam',
  'eid',
  'bakrid',
  'eid-milad',
  'guru-nanak-jayanti',
  'christmas',
  'new-year',
  'birthday',
  'republic-day',
  'independence-day',
  'gandhi-jayanti'
];

interface FeelingChipItem {
  id: string;
  englishName: string;
  hindiName: string;
  icon: string;
  href: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenFestival,
  onOpenFeelings,
  onOpenValentineWeek,
  onOpenReligious,
  onOpenFamilyRituals,
  onOpenMansoonSpecial,
  onOpenWriteShayari,
  onOpenZqMoments,
  trendingShayaris = [],
  currentPage = 1,
  onPageChange,
  isFavorite,
  onToggleFavorite,
  currentLanguage = 'hindi',
  onOpenCardModal,
  onOpenComments
}) => {
  const { ui, isRtl } = useGlobalLanguage();
  const momentsDesc = useTranslatedText(ui.homeMomentsDesc);
  const openMomentsText = useTranslatedText(ui.openZqMoments);
  const trendingPagination = useMemo(
    () => getPaginatedSlice(trendingShayaris, currentPage),
    [trendingShayaris, currentPage]
  );

  const orderedFeelingChips = useMemo<FeelingChipItem[]>(() => {
    const map = new Map<string, FeelingChipItem>();

    for (const f of FEELINGS_CATEGORIES) {
      map.set(f.id, {
        id: f.id,
        englishName: f.name.replace(/\s+Shayari$/i, ''),
        hindiName: f.hindiName,
        icon: f.icon,
        href: f.slug
      });
    }

    for (const m of MAAFI_SUBCATEGORIES_META) {
      map.set(m.id, {
        id: m.id,
        englishName: m.englishTitle,
        hindiName: m.hindiTitle,
        icon: m.icon,
        href: m.slug
      });
    }

    const ordered: FeelingChipItem[] = [];
    for (const id of SYSTEMATIC_FEELING_ORDER) {
      const found = map.get(id);
      if (found) {
        ordered.push(found);
        map.delete(id);
      }
    }
    for (const remaining of map.values()) {
      ordered.push(remaining);
    }
    return ordered;
  }, []);

  const orderedFestivalChips = useMemo(() => {
    const map = new Map(FESTIVAL_CATEGORIES.map((f) => [f.id, f] as const));
    const ordered: Array<(typeof FESTIVAL_CATEGORIES)[number]> = [];
    for (const id of SYSTEMATIC_FESTIVAL_ORDER) {
      const found = map.get(id as (typeof FESTIVAL_CATEGORIES)[number]['id']);
      if (found) {
        ordered.push(found);
        map.delete(found.id);
      }
    }
    for (const remaining of map.values()) {
      ordered.push(remaining);
    }
    return ordered;
  }, []);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-9 space-y-10 bg-white"
    >
      {/* 4. MAIN SECTION — TWO COLUMNS SIDE BY SIDE WITH A VERTICAL LINE IN MIDDLE */}
      <section className="bg-[#fff8f9] border-2 border-[#ffe4e8] rounded-3xl p-5 sm:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-7 md:gap-8 items-stretch">
          {/* LEFT SIDE: FEELING SHAYARI + ALL FEELING CATEGORY CHIPS DIRECTLY BELOW */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-2.5 border-b-2 border-[#ffe4e8] pb-3.5">
              <Heart className="w-6 h-6 text-[#d94f70] fill-[#d94f70] shrink-0" />
              <h2 className="font-rozha text-[24px] sm:text-[28px] font-bold text-[#d94f70] leading-snug">
                <TranslatedText
                  text="फीलिंग्स शायरी (Feeling Shayari)"
                  english="Feeling Shayari"
                  defaultDisplay="Feeling Shayari (फीलिंग्स शायरी)"
                />
              </h2>
            </div>

            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2.5">
              {orderedFeelingChips.map((chip) => (
                <a
                  key={chip.id}
                  href={chip.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenFeelings(chip.id);
                  }}
                  className="group min-h-[50px] px-3.5 py-2.5 rounded-2xl bg-white hover:bg-[#d94f70] border border-[#ffd6df] hover:border-[#d94f70] text-slate-900 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  <span className="text-xl leading-none shrink-0 group-hover:scale-110 transition-transform">
                    {chip.icon}
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[14px] sm:text-[15px] font-extrabold truncate">
                      <TranslatedText
                        text={chip.hindiName}
                        english={chip.englishName}
                        defaultDisplay={chip.englishName}
                      />
                    </span>
                    <span className="block text-[12px] font-semibold text-slate-500 group-hover:text-pink-100 truncate">
                      {chip.hindiName}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE LINE: HORIZONTAL ON MOBILE, VERTICAL ON DESKTOP */}
          <hr className="block md:hidden border-t-2 border-[#e5b8c5] my-1" />
          <div
            className="hidden md:block w-[2px] self-stretch bg-[#e5b8c5] rounded-full"
            aria-hidden="true"
          />

          {/* RIGHT SIDE: FESTIVAL SHAYARI + ALL FESTIVAL CATEGORIES & 12 MONTHS CHIPS DIRECTLY BELOW */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-2.5 border-b-2 border-[#ffe4e8] pb-3.5">
              <span className="text-2xl leading-none shrink-0" aria-hidden="true">
                🎉
              </span>
              <h2 className="font-rozha text-[24px] sm:text-[28px] font-bold text-[#d94f70] leading-snug">
                <TranslatedText
                  text="त्यौहार शायरी (Festival Shayari)"
                  english="Festival Shayari"
                  defaultDisplay="Festival Shayari (त्यौहार शायरी)"
                />
              </h2>
            </div>

            {/* 27 Festival Chips */}
            <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2.5">
              {orderedFestivalChips.map((fest) => {
                const festHref =
                  fest.id === 'new-year' || fest.id === 'christmas'
                    ? `/hi/${fest.id}-shayari`
                    : `/${fest.id}-shayari`;
                return (
                <a
                  key={fest.id}
                  href={festHref}
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenFestival(fest.id);
                  }}
                  className="group min-h-[50px] px-3.5 py-2.5 rounded-2xl bg-white hover:bg-amber-600 border border-[#ffd6df] hover:border-amber-600 text-slate-900 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  <span className="text-xl leading-none shrink-0 group-hover:scale-110 transition-transform">
                    {fest.icon}
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[14px] sm:text-[15px] font-extrabold truncate">
                      <TranslatedText
                        text={fest.hindiName}
                        english={fest.name}
                        defaultDisplay={fest.name}
                      />
                    </span>
                    <span className="block text-[12px] font-semibold text-slate-500 group-hover:text-amber-100 truncate">
                      {fest.hindiName}
                    </span>
                  </span>
                </a>
                );
              })}
            </div>

            {/* 12 Months (January to December) Chips Inside Festival Column for Clean Balancing */}
            <div className="pt-2 border-t border-[#ffe4e8] space-y-2.5">
              <h3 className="text-[15px] font-extrabold text-[#991B1B] tracking-wide uppercase">
                📅 12 Months Special (January &ndash; December)
              </h3>
              <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 gap-2">
                {MONTHS_META.map((m) => (
                  <a
                    key={m.id}
                    href={`/${m.id}-special-shayari`}
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenMansoonSpecial(m.id);
                    }}
                    className="group min-h-[46px] px-3 py-2 rounded-xl bg-white hover:bg-[#d94f70] border border-[#ffd6df] hover:border-[#d94f70] text-slate-900 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <span className="text-lg leading-none shrink-0 group-hover:scale-110 transition-transform">
                      {m.heroIcon}
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-[13px] sm:text-[14px] font-extrabold truncate">
                        <TranslatedText
                          text={m.nameHindi}
                          english={m.nameEnglish}
                          defaultDisplay={m.nameEnglish}
                        />
                      </span>
                      <span className="block text-[11px] font-semibold text-slate-500 group-hover:text-pink-100 truncate">
                        {m.nameHindi}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALENTINE WEEK SPECIAL — SINGLE FULL-WIDTH SECTION WITH 15 CATEGORY CARDS (4 PER ROW, RELIGIOUS CARD DESIGN) */}
      <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-9 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ffe4e8] pb-5">
          <div className="flex items-center gap-3">
            <Heart className="w-7 h-7 text-[#e11d48] fill-[#e11d48] shrink-0" />
            <h2 className="font-rozha text-[24px] sm:text-[26px] font-bold text-[#d94f70] leading-snug">
              Valentine Week Special - 7 Feb to 21 Feb - 15 Days - 600 Shayari
            </h2>
          </div>

          <a
            href="/valentine-week"
            onClick={(e) => {
              e.preventDefault();
              onOpenValentineWeek();
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white border border-[#ffd6df] hover:border-[#d94f70] text-[14px] sm:text-[15px] font-extrabold text-[#d94f70] hover:bg-[#d94f70] hover:text-white transition-all cursor-pointer"
          >
            <span>All 600 Shayari</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALENTINE_CATEGORIES.map((vCat) => {
            const isValentinePart = vCat.partLabel === 'Valentine Week';
            const borderAccent = isValentinePart
              ? 'border-rose-200 hover:border-[#e11d48]'
              : 'border-pink-200 hover:border-[#be123c]';
            const gradientAccent = isValentinePart
              ? 'from-[#e11d48] to-[#f43f5e]'
              : 'from-[#9f1239] to-[#db2777]';
            const badgeAccent = isValentinePart
              ? 'bg-rose-50 text-rose-700 border-rose-200'
              : 'bg-pink-50 text-pink-800 border-pink-200';

            return (
              <a
                key={vCat.id}
                href={`/valentine-week/${vCat.id}-shayari`}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenValentineWeek(vCat.id);
                }}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-white border-2 ${borderAccent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientAccent} text-white flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      {vCat.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-xl text-[13px] font-extrabold border ${badgeAccent}`}
                    >
                      {vCat.count} Shayari
                    </span>
                  </div>

                  <h3 className="font-rozha text-[22px] font-bold text-slate-900 group-hover:text-[#d94f70] leading-snug">
                    {vCat.shortName} - {vCat.dateLabel}
                  </h3>
                  <p className="text-[16px] font-bold text-[#d94f70] mt-0.5">{vCat.hindiName}</p>
                  <p className="mt-2.5 text-[14px] text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {vCat.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[15px] font-bold text-[#d94f70]">
                  <span>{ui.clickHere}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 5. RELIGIOUS SHAYARI — 4 CARDS (Sanatan Hindu, Islamic Allah, Masih Faith, Sikh Dharm) */}
      <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#ffe4e8] pb-5">
          <Sparkles className="w-7 h-7 text-[#d94f70] shrink-0" />
          <h2 className="font-rozha text-[26px] font-bold text-[#d94f70] leading-snug">
            <TranslatedText
              text="धार्मिक और आध्यात्मिक शायरी (Religious Shayari)"
              english="Religious Shayari"
              defaultDisplay="Religious Shayari (धार्मिक शायरी)"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RELIGIOUS_CATEGORIES.map((rel) => (
            <a
              key={rel.id}
              href={rel.path}
              onClick={(e) => {
                e.preventDefault();
                onOpenReligious(rel.id);
              }}
              className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-white border-2 ${rel.borderAccent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${rel.accentGradient} text-white flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    {rel.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-xl text-[13px] font-extrabold border ${rel.badgeColor}`}
                  >
                    {rel.count} Shayari
                  </span>
                </div>

                <h3 className="font-rozha text-[22px] font-bold text-slate-900 group-hover:text-[#d94f70] leading-snug">
                  <TranslatedText
                    text={rel.hindiTitle}
                    english={rel.englishTitle}
                    defaultDisplay={rel.englishTitle}
                  />
                </h3>
                <p className="text-[16px] font-bold text-[#d94f70] mt-0.5">{rel.hindiTitle}</p>
                <p className="mt-2.5 text-[14px] text-slate-600 font-medium leading-relaxed line-clamp-2">
                  {rel.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[15px] font-bold text-[#d94f70]">
                <span>{ui.clickHere}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 6. SANSKAR & FAMILY RITUALS — 4 CATEGORIES DIRECTLY (Newborn Baby, Godh Bharai, Naamkaran & Mundan, Grah Pravesh) */}
      <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-9 space-y-6">
        <div className="flex items-center gap-3 border-b border-[#ffe4e8] pb-5">
          <HeartHandshake className="w-7 h-7 text-[#d94f70] shrink-0" />
          <h2 className="font-rozha text-[26px] font-bold text-[#d94f70] leading-snug">
            <TranslatedText
              text="संस्कार और पारिवारिक रस्में (Sanskar & Family Rituals)"
              english="Sanskar & Family Rituals"
              defaultDisplay="Sanskar & Family Rituals (संस्कार)"
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FAMILY_RITUALS_CATEGORIES.map((ritual) => {
            const accent = RITUAL_CARD_ACCENTS[ritual.id];
            return (
              <a
                key={ritual.id}
                href={ritual.path}
                onClick={(e) => {
                  e.preventDefault();
                  onOpenFamilyRituals(ritual.id);
                }}
                className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-white border-2 ${accent.borderAccent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-left`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ritual.accentGradient} text-white flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      {ritual.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-xl text-[13px] font-extrabold border ${accent.badgeColor}`}
                    >
                      {ritual.count} Shayari
                    </span>
                  </div>

                  <h3 className="font-rozha text-[22px] font-bold text-slate-900 group-hover:text-[#d94f70] leading-snug">
                    <TranslatedText
                      text={ritual.hindiTitle}
                      english={ritual.englishTitle}
                      defaultDisplay={ritual.englishTitle}
                    />
                  </h3>
                  <p className="text-[16px] font-bold text-[#d94f70] mt-0.5">
                    {ritual.hindiTitle}
                  </p>
                  <p className="mt-2.5 text-[14px] text-slate-600 font-medium leading-relaxed line-clamp-2">
                    {ritual.subtitle}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[15px] font-bold text-[#d94f70]">
                  <span>{ui.clickHere}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 7. RECENT & TRENDING SHAYARI */}
      {trendingShayaris.length > 0 && isFavorite && onToggleFavorite && (
        <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-9 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ffe4e8] pb-5">
            <div className="flex items-center gap-3">
              <Flame className="w-7 h-7 text-[#d94f70] shrink-0" />
              <h2 className="font-rozha text-[24px] sm:text-[26px] font-bold text-[#d94f70] leading-snug">
                <TranslatedText
                  text="ट्रेंडिंग और नई शायरी (Recent & Trending Shayari)"
                  english="Recent & Trending Shayari"
                  defaultDisplay="Recent & Trending Shayari (ट्रेंडिंग शायरी)"
                />
              </h2>
            </div>

            {onOpenWriteShayari && (
              <a
                href="/apni-shayari-likhe"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenWriteShayari();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-white border border-[#ffd6df] hover:border-[#d94f70] text-[14px] sm:text-[15px] font-extrabold text-[#d94f70] hover:bg-[#d94f70] hover:text-white transition-all cursor-pointer"
              >
                <span>Apni Shayari Likhe</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPagination.pageItems.map((shayari) => (
              <ShayariCard
                key={shayari.id}
                shayari={shayari}
                isFavorite={isFavorite(shayari.id)}
                onToggleFavorite={onToggleFavorite}
                currentLanguage={currentLanguage}
                onOpenCardModal={onOpenCardModal}
                onOpenComments={onOpenComments}
              />
            ))}
          </div>

          <ShayariPagination
            currentPage={trendingPagination.currentPage}
            totalPages={trendingPagination.totalPages}
            startIndex={trendingPagination.startIndex}
            endIndex={trendingPagination.endIndex}
            totalItems={trendingPagination.totalItems}
            onPageChange={(pg) => onPageChange?.(pg)}
            getPageHref={(pg) => (pg <= 1 ? '/' : `/page/${pg}`)}
          />
        </section>
      )}

      {/* 8. APNI SHAYARI LIKHE */}
      {onOpenWriteShayari && (
        <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-rozha text-[26px] sm:text-[30px] font-bold text-[#d94f70] leading-snug flex items-center gap-2.5">
              <Pencil className="w-7 h-7 text-[#d94f70] shrink-0" />
              <span>Apni Shayari Likhe (अपनी शायरी लिखें)</span>
            </h2>
            <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
              <TranslatedText
                text="यहाँ आप अपने दिल की बात को अपनी शायरी में लिख सकते हैं, सेव कर सकते हैं और 20 स्टाइलिश फ़ॉन्ट्स में शेयर कर सकते हैं।"
                english="Write your own heartfelt shayari here, save your collection, and share in 20 stylish fonts with one click."
                defaultDisplay="Yahan aap apne dil ki baat ko shayari me likh sakte hain, save kar sakte hain aur 20 stylish fonts ke sath share kar sakte hain."
              />
            </p>
          </div>

          <a
            href="/apni-shayari-likhe"
            onClick={(e) => {
              e.preventDefault();
              onOpenWriteShayari();
            }}
            className="min-h-[54px] px-7 py-3.5 rounded-2xl btn-glossy-pink text-white text-[18px] font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm whitespace-nowrap shrink-0"
          >
            <span>{ui.btnWriteShayari}</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </section>
      )}

      {/* 8. ZQ MOMENTS */}
      {onOpenZqMoments && (
        <section className="bg-[#fff8f9] border border-[#ffe4e8] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-rozha text-[26px] sm:text-[30px] font-bold text-[#d94f70] leading-snug">
              ZQ Moments 💗
            </h2>
            <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
              {momentsDesc}
            </p>
          </div>

          <a
            href="/zq-moments"
            onClick={(e) => {
              e.preventDefault();
              onOpenZqMoments();
            }}
            className="min-h-[54px] px-7 py-3.5 rounded-2xl btn-glossy-pink text-white text-[18px] font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm whitespace-nowrap shrink-0"
          >
            <span>{openMomentsText}</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </section>
      )}
    </div>
  );
};
