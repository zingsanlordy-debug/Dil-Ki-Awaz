import {
  FEELINGS_CATEGORIES,
  FEELINGS_CATEGORY_MERGE_MAP,
  MAAFI_SUBCATEGORIES_META,
  normalizeFeelingsCategoryId
} from '../categories/categoryMeta';
import {
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  ValentineLangCode,
  ValentineLanguageMeta,
  normalizeValentineLangParam
} from '../valentineWeekMeta';
import type { GlobalLanguageId } from '../../utils/globalTranslations';

export type Holiday35Id = 'new-year' | 'christmas' | 'diwali';

export const HOLIDAY_35_META: Record<
  Holiday35Id,
  {
    id: Holiday35Id;
    name: string;
    shortName: string;
    hindiName: string;
    dateLabel: string;
    icon: string;
    count: number;
  }
> = {
  'new-year': {
    id: 'new-year',
    name: 'New Year',
    shortName: 'New Year',
    hindiName: 'नया साल',
    dateLabel: '1 January',
    icon: '🎉',
    count: 25
  },
  christmas: {
    id: 'christmas',
    name: 'Christmas Day',
    shortName: 'Christmas',
    hindiName: 'क्रिसमस डे',
    dateLabel: '25 December',
    icon: '🎄',
    count: 25
  },
  diwali: {
    id: 'diwali',
    name: 'Diwali',
    shortName: 'Diwali',
    hindiName: 'दीपावली',
    dateLabel: '8 November',
    icon: '🪔',
    count: 100
  }
};

export function isHoliday35Category(catId?: string | null): catId is Holiday35Id {
  return catId === 'new-year' || catId === 'christmas' || catId === 'diwali';
}

/**
 * Clean ISO path prefix for each of the 35 languages used in prefix-style SEO URLs:
 * e.g. /en/new-year-shayari, /hi/new-year-shayari, /ta/christmas-shayari, /zh-cn/christmas-shayari
 */
export const STATIC35_ISO_PREFIX_BY_CODE: Readonly<Record<ValentineLangCode, string>> = {
  hi: 'hi',
  'hi-Latn': 'hi-latn',
  ta: 'ta',
  te: 'te',
  kn: 'kn',
  ml: 'ml',
  mr: 'mr',
  gu: 'gu',
  bn: 'bn',
  pa: 'pa',
  or: 'or',
  as: 'as',
  ur: 'ur',
  bho: 'bho',
  bgc: 'bgc',
  'en-US': 'en',
  'en-GB': 'en-gb',
  es: 'es',
  pt: 'pt',
  fr: 'fr',
  de: 'de',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  ar: 'ar',
  th: 'th',
  tl: 'tl',
  ru: 'ru',
  'zh-CN': 'zh-cn',
  id: 'id',
  tr: 'tr',
  vi: 'vi',
  nl: 'nl',
  pl: 'pl',
  fa: 'fa'
};

export const STATIC35_CODE_BY_GLOBAL_ID: Readonly<
  Record<Exclude<GlobalLanguageId, 'default'>, ValentineLangCode>
> = {
  hindi: 'hi',
  hinglish: 'hi-Latn',
  tamil: 'ta',
  telugu: 'te',
  kannada: 'kn',
  malayalam: 'ml',
  marathi: 'mr',
  gujarati: 'gu',
  bengali: 'bn',
  punjabi: 'pa',
  odia: 'or',
  assamese: 'as',
  urdu: 'ur',
  bhojpuri: 'bho',
  haryanvi: 'bgc',
  english: 'en-US',
  'english-uk': 'en-GB',
  spanish: 'es',
  portuguese: 'pt',
  french: 'fr',
  german: 'de',
  italian: 'it',
  japanese: 'ja',
  korean: 'ko',
  arabic: 'ar',
  thai: 'th',
  tagalog: 'tl',
  russian: 'ru',
  chinese: 'zh-CN',
  indonesian: 'id',
  turkish: 'tr',
  vietnamese: 'vi',
  dutch: 'nl',
  polish: 'pl',
  persian: 'fa'
};

export const STATIC35_GLOBAL_ID_BY_CODE: Readonly<
  Record<ValentineLangCode, Exclude<GlobalLanguageId, 'default'>>
> = {
  hi: 'hindi',
  'hi-Latn': 'hinglish',
  ta: 'tamil',
  te: 'telugu',
  kn: 'kannada',
  ml: 'malayalam',
  mr: 'marathi',
  gu: 'gujarati',
  bn: 'bengali',
  pa: 'punjabi',
  or: 'odia',
  as: 'assamese',
  ur: 'urdu',
  bho: 'bhojpuri',
  bgc: 'haryanvi',
  'en-US': 'english',
  'en-GB': 'english-uk',
  es: 'spanish',
  pt: 'portuguese',
  fr: 'french',
  de: 'german',
  it: 'italian',
  ja: 'japanese',
  ko: 'korean',
  ar: 'arabic',
  th: 'thai',
  tl: 'tagalog',
  ru: 'russian',
  'zh-CN': 'chinese',
  id: 'indonesian',
  tr: 'turkish',
  vi: 'vietnamese',
  nl: 'dutch',
  pl: 'polish',
  fa: 'persian'
};

export function getStatic35IsoPrefix(langCode: ValentineLangCode = 'hi'): string {
  return STATIC35_ISO_PREFIX_BY_CODE[langCode] || 'hi';
}

export function getStatic35LangMeta(langCode: ValentineLangCode = 'hi'): ValentineLanguageMeta {
  return VALENTINE_LANGUAGE_MAP.get(langCode) || VALENTINE_LANGUAGES[0];
}

export function parseStatic35LangToken(raw?: string | null): ValentineLangCode | null {
  if (!raw) return null;
  const cleaned = raw.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  if (!cleaned) return null;
  for (const [code, iso] of Object.entries(STATIC35_ISO_PREFIX_BY_CODE)) {
    if (iso === cleaned) {
      return code as ValentineLangCode;
    }
  }
  return normalizeValentineLangParam(cleaned);
}

/**
 * Builds clean SEO path for New Year & Christmas across all 35 languages:
 * e.g. /en/new-year-shayari, /hi/new-year-shayari, /en/christmas-shayari, /hi/christmas-shayari
 */
export function buildHoliday35CleanPath(
  holidayId: Holiday35Id,
  langCode: ValentineLangCode = 'hi',
  page?: number
): string {
  const isHindi = langCode === 'hi';
  const iso = getStatic35IsoPrefix(langCode);
  const base = holidayId === 'diwali' && isHindi ? '/diwali-shayari' : `/${iso}/${holidayId}-shayari`;
  if (page && page >= 2) {
    return `${base}/page/${page}`;
  }
  return base;
}

/**
 * Resolves the canonical base Hindi path for any Feelings category or Maafi sub-category or Hub:
 * - 'all' / undefined -> '/feelings-shayari'
 * - maafi sub -> '/feelings/maa-se-maafi-shayari'
 * - feelings cat -> '/feelings/love-shayari/' (or '/feelings/birthday-shayari/')
 */
export function getFeelingsHindiBasePath(catId?: string): string {
  if (!catId || catId === 'all') {
    return '/feelings-shayari';
  }
  const maafi = MAAFI_SUBCATEGORIES_META.find((m) => m.id === catId);
  if (maafi) {
    return maafi.slug;
  }
  const normalized = normalizeFeelingsCategoryId(catId);
  const feel = FEELINGS_CATEGORIES.find((f) => f.id === normalized);
  if (feel) {
    return feel.slug;
  }
  const merged = FEELINGS_CATEGORY_MERGE_MAP[catId.trim().toLowerCase()];
  if (merged) {
    const mergedFeel = FEELINGS_CATEGORIES.find((f) => f.id === merged);
    if (mergedFeel) return mergedFeel.slug;
  }
  return '/feelings-shayari';
}

/**
 * Builds clean SEO path for Feelings Hub + 28 Feelings Categories + 4 Maafi Sub-Categories across 35 languages:
 * - Hindi (default): /feelings-shayari, /feelings/love-shayari/, /feelings/love-shayari/page/2
 * - Other 34 languages: /feelings-shayari/english, /feelings/love-shayari/english, /feelings/love-shayari/tamil/page/2
 */
export function buildFeelingsCleanPath(
  catId?: string,
  langCode: ValentineLangCode = 'hi',
  page?: number,
  alwaysIncludeLangSlug = false
): string {
  const hindiBase = getFeelingsHindiBasePath(catId);
  const trimmedBase = hindiBase.replace(/\/+$/, '');
  const langMeta = getStatic35LangMeta(langCode);

  const langBase =
    !alwaysIncludeLangSlug && langMeta.code === 'hi'
      ? hindiBase
      : `${trimmedBase}/${langMeta.slug}`;

  if (page && page >= 2) {
    return `${langBase.replace(/\/+$/, '')}/page/${page}`;
  }
  return langBase;
}

export const VALID_FEELINGS_MAIN_CAT_IDS: ReadonlySet<string> = new Set(
  FEELINGS_CATEGORIES.map((f) => f.id)
);

export const VALID_MAAFI_CAT_IDS: ReadonlySet<string> = new Set(
  MAAFI_SUBCATEGORIES_META.map((m) => m.id)
);
