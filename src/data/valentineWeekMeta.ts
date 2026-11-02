export type ValentineCategoryId =
  | 'rose-day'
  | 'propose-day'
  | 'chocolate-day'
  | 'teddy-day'
  | 'promise-day'
  | 'hug-day'
  | 'kiss-day'
  | 'valentine-day'
  | 'slap-day'
  | 'kick-day'
  | 'perfume-day'
  | 'flirting-day'
  | 'confession-day'
  | 'missing-day'
  | 'breakup-day';

export type ValentineLangCode =
  // 15 Indian Languages
  | 'hi'
  | 'hi-Latn'
  | 'ta'
  | 'te'
  | 'kn'
  | 'ml'
  | 'mr'
  | 'gu'
  | 'bn'
  | 'pa'
  | 'or'
  | 'as'
  | 'ur'
  | 'bho'
  | 'bgc'
  // 20 Global Languages
  | 'en-US'
  | 'en-GB'
  | 'es'
  | 'pt'
  | 'fr'
  | 'de'
  | 'it'
  | 'ja'
  | 'ko'
  | 'ar'
  | 'th'
  | 'tl'
  | 'ru'
  | 'zh-CN'
  | 'id'
  | 'tr'
  | 'vi'
  | 'nl'
  | 'pl'
  | 'fa';

export interface ValentineCategoryMeta {
  order: number;
  id: ValentineCategoryId;
  shortName: string;
  heading: string;
  hindiName: string;
  dateLabel: string;
  icon: string;
  count: number;
  partLabel: 'Valentine Week' | 'Anti-Valentine Week';
  subtitle: string;
}

export interface ValentineLanguageMeta {
  code: ValentineLangCode;
  slug: string;
  hreflang: string;
  englishName: string;
  nativeLabel: string;
  regionGroup: 'indian' | 'global';
  isPrimary12: boolean;
  rtl: boolean;
  speechLang: string;
}

export interface ValentineBaseShayari {
  id: string;
  categoryId: ValentineCategoryId;
  index: number; // 1 to 40 within category
  title: string;
  titleHindi: string;
  likes: number;
  tags: string[];
  hi: string[];
  'hi-Latn': string[];
  'en-US': string[];
  'en-GB': string[];
  bho: string[];
  bgc: string[];
}

export const VALENTINE_CATEGORIES: readonly ValentineCategoryMeta[] = [
  {
    order: 1,
    id: 'rose-day',
    shortName: 'Rose Day',
    heading: 'Rose Day Shayari (7 Feb)',
    hindiName: 'रोज़ डे शायरी',
    dateLabel: '7 Feb',
    icon: '🌹',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'प्यार की पहली सुबह और सुर्ख गुलाब की पंखुड़ियों में लिपटे दिल के जज़्बात'
  },
  {
    order: 2,
    id: 'propose-day',
    shortName: 'Propose Day',
    heading: 'Propose Day Shayari (8 Feb)',
    hindiName: 'प्रपोज़ डे शायरी',
    dateLabel: '8 Feb',
    icon: '💍',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'धड़कते दिल से उम्र भर साथ चलने का सच्चा और सादगी भरा इज़हार'
  },
  {
    order: 3,
    id: 'chocolate-day',
    shortName: 'Chocolate Day',
    heading: 'Chocolate Day Shayari (9 Feb)',
    hindiName: 'चॉकलेट डे शायरी',
    dateLabel: '9 Feb',
    icon: '🍫',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'चॉकलेट से भी मीठी मुस्कान और रिश्तों में घुलती मिठास की प्यारी शायरी'
  },
  {
    order: 4,
    id: 'teddy-day',
    shortName: 'Teddy Day',
    heading: 'Teddy Day Shayari (10 Feb)',
    hindiName: 'टेडी डे शायरी',
    dateLabel: '10 Feb',
    icon: '🧸',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'मासूमियत, नरम एहसास और दूर रहकर भी पास होने की क्यूट टेडी शायरी'
  },
  {
    order: 5,
    id: 'promise-day',
    shortName: 'Promise Day',
    heading: 'Promise Day Shayari (11 Feb)',
    hindiName: 'प्रॉमिस डे शायरी',
    dateLabel: '11 Feb',
    icon: '🤝',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'दिखावे की कसमों से दूर हर धूप-छाँव में हाथ थामे रखने के सच्चे वादे'
  },
  {
    order: 6,
    id: 'hug-day',
    shortName: 'Hug Day',
    heading: 'Hug Day Shayari (12 Feb)',
    hindiName: 'हग डे शायरी',
    dateLabel: '12 Feb',
    icon: '🫂',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'बिना लफ़्ज़ों के सारी थकान और ग़म पिघला देने वाली सुकून भरी झप्पी'
  },
  {
    order: 7,
    id: 'kiss-day',
    shortName: 'Kiss Day',
    heading: 'Kiss Day Shayari (13 Feb)',
    hindiName: 'किस डे शायरी',
    dateLabel: '13 Feb',
    icon: '💋',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'माथे के पाक बोसे से लेकर रूह को छू लेने वाले स्नेह और सम्मान की शायरी'
  },
  {
    order: 8,
    id: 'valentine-day',
    shortName: 'Valentine Day',
    heading: 'Valentine Day Shayari (14 Feb)',
    hindiName: 'वैलेंटाइन डे शायरी',
    dateLabel: '14 Feb',
    icon: '❤️',
    count: 40,
    partLabel: 'Valentine Week',
    subtitle: 'सच्ची मोहब्बत, हमसफ़र के साथ और दिल से निकली दुआओं का खास जश्न'
  },
  {
    order: 9,
    id: 'slap-day',
    shortName: 'Slap Day',
    heading: 'Slap Day Shayari (15 Feb)',
    hindiName: 'स्लैप डे शायरी',
    dateLabel: '15 Feb',
    icon: '👋',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'झूठे वादों, फरेब और घमंड को मुस्कान व स्वाभिमान से जवाब देने वाली शायरी'
  },
  {
    order: 10,
    id: 'kick-day',
    shortName: 'Kick Day',
    heading: 'Kick Day Shayari (16 Feb)',
    hindiName: 'किक डे शायरी',
    dateLabel: '16 Feb',
    icon: '🥾',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'कड़वी यादों और मतलबी रिश्तों को ज़िंदगी से बाहर कर नई शुरुआत करने का हौसला'
  },
  {
    order: 11,
    id: 'perfume-day',
    shortName: 'Perfume Day',
    heading: 'Perfume Day Shayari (17 Feb)',
    hindiName: 'परफ्यूम डे शायरी',
    dateLabel: '17 Feb',
    icon: '🌸',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'यादों की भीनी खुशबू, किरदार की महक और खुद से प्यार करने का ताज़ा एहसास'
  },
  {
    order: 12,
    id: 'flirting-day',
    shortName: 'Flirting Day',
    heading: 'Flirting Day Shayari (18 Feb)',
    hindiName: 'फ्लर्टिंग डे शायरी',
    dateLabel: '18 Feb',
    icon: '😉',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'हल्की-फुल्की शरारत, आँखों के इशारों और प्यारी मुस्कान से भरी नटखट शायरी'
  },
  {
    order: 13,
    id: 'confession-day',
    shortName: 'Confession Day',
    heading: 'Confession Day Shayari (19 Feb)',
    hindiName: 'कन्फेशन डे शायरी',
    dateLabel: '19 Feb',
    icon: '💌',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'बरसों से दिल में दबी अनकही बातों और सच्चे जज़्बात को बेझिझक कहने का दिन'
  },
  {
    order: 14,
    id: 'missing-day',
    shortName: 'Missing Day',
    heading: 'Missing Day Shayari (20 Feb)',
    hindiName: 'मिसिंग डे शायरी',
    dateLabel: '20 Feb',
    icon: '🌙',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'खामोश शामों, पुरानी चैट्स और किसी खास की कमी में भीगी यादों की शायरी'
  },
  {
    order: 15,
    id: 'breakup-day',
    shortName: 'Breakup Day',
    heading: 'Breakup Day Shayari (21 Feb)',
    hindiName: 'ब्रेकअप डे शायरी',
    dateLabel: '21 Feb',
    icon: '💔',
    count: 40,
    partLabel: 'Anti-Valentine Week',
    subtitle: 'बिना गिला किए अधूरे रिश्ते को अलविदा कहकर सुकून और आत्मसम्मान चुनने का दिन'
  }
];

export const VALENTINE_PRIMARY_12_CODES: readonly ValentineLangCode[] = [
  'hi',
  'en-US',
  'ta',
  'te',
  'mr',
  'bn',
  'es',
  'pt',
  'fr',
  'ja',
  'ko',
  'de'
];

export const VALENTINE_LANGUAGES: readonly ValentineLanguageMeta[] = [
  // === 15 INDIAN LANGUAGES ===
  {
    code: 'hi',
    slug: 'hindi',
    hreflang: 'hi',
    englishName: 'Hindi',
    nativeLabel: 'हिंदी',
    regionGroup: 'indian',
    isPrimary12: true,
    rtl: false,
    speechLang: 'hi-IN'
  },
  {
    code: 'hi-Latn',
    slug: 'hinglish',
    hreflang: 'hi-Latn',
    englishName: 'Hinglish',
    nativeLabel: 'Hinglish',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'hi-IN'
  },
  {
    code: 'ta',
    slug: 'tamil',
    hreflang: 'ta',
    englishName: 'Tamil',
    nativeLabel: 'தமிழ்',
    regionGroup: 'indian',
    isPrimary12: true,
    rtl: false,
    speechLang: 'ta-IN'
  },
  {
    code: 'te',
    slug: 'telugu',
    hreflang: 'te',
    englishName: 'Telugu',
    nativeLabel: 'తెలుగు',
    regionGroup: 'indian',
    isPrimary12: true,
    rtl: false,
    speechLang: 'te-IN'
  },
  {
    code: 'kn',
    slug: 'kannada',
    hreflang: 'kn',
    englishName: 'Kannada',
    nativeLabel: 'ಕನ್ನಡ',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'kn-IN'
  },
  {
    code: 'ml',
    slug: 'malayalam',
    hreflang: 'ml',
    englishName: 'Malayalam',
    nativeLabel: 'മലയാളം',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'ml-IN'
  },
  {
    code: 'mr',
    slug: 'marathi',
    hreflang: 'mr',
    englishName: 'Marathi',
    nativeLabel: 'मराठी',
    regionGroup: 'indian',
    isPrimary12: true,
    rtl: false,
    speechLang: 'mr-IN'
  },
  {
    code: 'gu',
    slug: 'gujarati',
    hreflang: 'gu',
    englishName: 'Gujarati',
    nativeLabel: 'ગુજરાતી',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'gu-IN'
  },
  {
    code: 'bn',
    slug: 'bengali',
    hreflang: 'bn',
    englishName: 'Bengali',
    nativeLabel: 'বাংলা',
    regionGroup: 'indian',
    isPrimary12: true,
    rtl: false,
    speechLang: 'bn-IN'
  },
  {
    code: 'pa',
    slug: 'punjabi',
    hreflang: 'pa',
    englishName: 'Punjabi',
    nativeLabel: 'ਪੰਜਾਬੀ',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'pa-IN'
  },
  {
    code: 'or',
    slug: 'odia',
    hreflang: 'or',
    englishName: 'Odia',
    nativeLabel: 'ଓଡ଼ିଆ',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'or-IN'
  },
  {
    code: 'as',
    slug: 'assamese',
    hreflang: 'as',
    englishName: 'Assamese',
    nativeLabel: 'অসমীয়া',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'as-IN'
  },
  {
    code: 'ur',
    slug: 'urdu',
    hreflang: 'ur',
    englishName: 'Urdu',
    nativeLabel: 'اردو',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: true,
    speechLang: 'ur-PK'
  },
  {
    code: 'bho',
    slug: 'bhojpuri',
    hreflang: 'bho',
    englishName: 'Bhojpuri',
    nativeLabel: 'भोजपुरी',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'hi-IN'
  },
  {
    code: 'bgc',
    slug: 'haryanvi',
    hreflang: 'bgc',
    englishName: 'Haryanvi',
    nativeLabel: 'हरियाणवी',
    regionGroup: 'indian',
    isPrimary12: false,
    rtl: false,
    speechLang: 'hi-IN'
  },

  // === 20 GLOBAL LANGUAGES ===
  {
    code: 'en-US',
    slug: 'english',
    hreflang: 'en-US',
    englishName: 'English (USA)',
    nativeLabel: 'English',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'en-US'
  },
  {
    code: 'en-GB',
    slug: 'english-uk',
    hreflang: 'en-GB',
    englishName: 'English (UK)',
    nativeLabel: 'English (UK)',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'en-GB'
  },
  {
    code: 'es',
    slug: 'spanish',
    hreflang: 'es',
    englishName: 'Spanish',
    nativeLabel: 'Español',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'es-ES'
  },
  {
    code: 'pt',
    slug: 'portuguese',
    hreflang: 'pt',
    englishName: 'Portuguese',
    nativeLabel: 'Português',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'pt-BR'
  },
  {
    code: 'fr',
    slug: 'french',
    hreflang: 'fr',
    englishName: 'French',
    nativeLabel: 'Français',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'fr-FR'
  },
  {
    code: 'de',
    slug: 'german',
    hreflang: 'de',
    englishName: 'German',
    nativeLabel: 'Deutsch',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'de-DE'
  },
  {
    code: 'it',
    slug: 'italian',
    hreflang: 'it',
    englishName: 'Italian',
    nativeLabel: 'Italiano',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'it-IT'
  },
  {
    code: 'ja',
    slug: 'japanese',
    hreflang: 'ja',
    englishName: 'Japanese',
    nativeLabel: '日本語',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'ja-JP'
  },
  {
    code: 'ko',
    slug: 'korean',
    hreflang: 'ko',
    englishName: 'Korean',
    nativeLabel: '한국어',
    regionGroup: 'global',
    isPrimary12: true,
    rtl: false,
    speechLang: 'ko-KR'
  },
  {
    code: 'ar',
    slug: 'arabic',
    hreflang: 'ar',
    englishName: 'Arabic',
    nativeLabel: 'العربية',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: true,
    speechLang: 'ar-SA'
  },
  {
    code: 'th',
    slug: 'thai',
    hreflang: 'th',
    englishName: 'Thai',
    nativeLabel: 'ไทย',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'th-TH'
  },
  {
    code: 'tl',
    slug: 'tagalog',
    hreflang: 'tl',
    englishName: 'Tagalog',
    nativeLabel: 'Tagalog',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'tl-PH'
  },
  {
    code: 'ru',
    slug: 'russian',
    hreflang: 'ru',
    englishName: 'Russian',
    nativeLabel: 'Русский',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'ru-RU'
  },
  {
    code: 'zh-CN',
    slug: 'chinese',
    hreflang: 'zh-CN',
    englishName: 'Chinese (Simplified)',
    nativeLabel: '简体中文',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'zh-CN'
  },
  {
    code: 'id',
    slug: 'indonesian',
    hreflang: 'id',
    englishName: 'Indonesian',
    nativeLabel: 'Bahasa Indonesia',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'id-ID'
  },
  {
    code: 'tr',
    slug: 'turkish',
    hreflang: 'tr',
    englishName: 'Turkish',
    nativeLabel: 'Türkçe',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'tr-TR'
  },
  {
    code: 'vi',
    slug: 'vietnamese',
    hreflang: 'vi',
    englishName: 'Vietnamese',
    nativeLabel: 'Tiếng Việt',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'vi-VN'
  },
  {
    code: 'nl',
    slug: 'dutch',
    hreflang: 'nl',
    englishName: 'Dutch',
    nativeLabel: 'Nederlands',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'nl-NL'
  },
  {
    code: 'pl',
    slug: 'polish',
    hreflang: 'pl',
    englishName: 'Polish',
    nativeLabel: 'Polski',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: false,
    speechLang: 'pl-PL'
  },
  {
    code: 'fa',
    slug: 'persian',
    hreflang: 'fa',
    englishName: 'Persian',
    nativeLabel: 'فارسی',
    regionGroup: 'global',
    isPrimary12: false,
    rtl: true,
    speechLang: 'fa-IR'
  }
];

export const VALENTINE_LANGUAGE_MAP: ReadonlyMap<ValentineLangCode, ValentineLanguageMeta> = new Map(
  VALENTINE_LANGUAGES.map((l) => [l.code, l])
);

const LANG_PARAM_ALIASES: Record<string, ValentineLangCode> = {
  hi: 'hi',
  'hi-in': 'hi',
  hindi: 'hi',
  'hi-latn': 'hi-Latn',
  hinglish: 'hi-Latn',
  ta: 'ta',
  'ta-in': 'ta',
  tamil: 'ta',
  te: 'te',
  'te-in': 'te',
  telugu: 'te',
  kn: 'kn',
  'kn-in': 'kn',
  kannada: 'kn',
  ml: 'ml',
  'ml-in': 'ml',
  malayalam: 'ml',
  mr: 'mr',
  'mr-in': 'mr',
  marathi: 'mr',
  gu: 'gu',
  'gu-in': 'gu',
  gujarati: 'gu',
  bn: 'bn',
  'bn-in': 'bn',
  'bn-bd': 'bn',
  bengali: 'bn',
  pa: 'pa',
  'pa-in': 'pa',
  punjabi: 'pa',
  or: 'or',
  'or-in': 'or',
  odia: 'or',
  as: 'as',
  'as-in': 'as',
  assamese: 'as',
  ur: 'ur',
  'ur-pk': 'ur',
  'ur-in': 'ur',
  urdu: 'ur',
  bho: 'bho',
  bhojpuri: 'bho',
  bgc: 'bgc',
  haryanvi: 'bgc',
  en: 'en-US',
  'en-us': 'en-US',
  'en-gb': 'en-GB',
  'en-uk': 'en-GB',
  'english-uk': 'en-GB',
  'english-usa': 'en-US',
  english: 'en-US',
  es: 'es',
  spanish: 'es',
  pt: 'pt',
  portuguese: 'pt',
  fr: 'fr',
  french: 'fr',
  de: 'de',
  german: 'de',
  it: 'it',
  italian: 'it',
  ja: 'ja',
  japanese: 'ja',
  ko: 'ko',
  korean: 'ko',
  ar: 'ar',
  arabic: 'ar',
  th: 'th',
  thai: 'th',
  tl: 'tl',
  fil: 'tl',
  tagalog: 'tl',
  ru: 'ru',
  russian: 'ru',
  zh: 'zh-CN',
  'zh-cn': 'zh-CN',
  'zh-hans': 'zh-CN',
  chinese: 'zh-CN',
  id: 'id',
  in: 'id',
  indonesian: 'id',
  tr: 'tr',
  turkish: 'tr',
  vi: 'vi',
  vietnamese: 'vi',
  nl: 'nl',
  dutch: 'nl',
  pl: 'pl',
  polish: 'pl',
  fa: 'fa',
  persian: 'fa'
};

export function normalizeValentineLangParam(raw?: string | null): ValentineLangCode | null {
  if (!raw) return null;
  const cleaned = raw.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  if (!cleaned) return null;
  if (LANG_PARAM_ALIASES[cleaned]) {
    return LANG_PARAM_ALIASES[cleaned];
  }
  const basePrefix = cleaned.split('-')[0];
  if (basePrefix && LANG_PARAM_ALIASES[basePrefix]) {
    return LANG_PARAM_ALIASES[basePrefix];
  }
  return null;
}

/**
 * Builds clean SEO path for any Valentine category + language:
 * e.g. /valentine-week/rose-day-shayari/hindi, /valentine-week/rose-day-shayari/tamil, /valentine-week/tamil
 */
export function buildValentineCleanPath(
  catId?: ValentineCategoryId,
  langCode?: ValentineLangCode,
  alwaysIncludeLangSlug = false
): string {
  const basePath = catId ? `/valentine-week/${catId}-shayari` : '/valentine-week';
  if (!langCode) return basePath;
  const meta = VALENTINE_LANGUAGE_MAP.get(langCode);
  if (!meta) return basePath;
  if (!alwaysIncludeLangSlug && langCode === 'hi') {
    return basePath;
  }
  return `${basePath}/${meta.slug}`;
}

/**
 * Extracts language code from clean pathname (/valentine-week/rose-day-shayari/tamil or /valentine-week/tamil)
 */
export function extractValentineLangFromPath(pathname: string): ValentineLangCode | null {
  const clean = pathname.trim().toLowerCase().replace(/\/+$/, '');
  const parts = clean.split('/').filter(Boolean);
  // /valentine-week/<day>-shayari/<lang> OR /valentine-week/<lang>
  if (parts[0] !== 'valentine-week') return null;
  if (parts.length === 3) {
    return normalizeValentineLangParam(parts[2]);
  }
  if (parts.length === 2) {
    const second = parts[1].replace(/-shayari$/, '');
    const isDay = VALENTINE_CATEGORIES.some((c) => c.id === second);
    if (!isDay) {
      return normalizeValentineLangParam(parts[1]);
    }
  }
  return null;
}

/**
 * Auto-detects user language from:
 * 1) Clean URL path (/valentine-week/rose-day-shayari/hindi or /tamil)
 * 2) Legacy ?lang= query parameter
 * 3) Browser navigator.languages / navigator.language
 * 4) Fallback to Hindi ('hi')
 */
export function detectInitialValentineLanguage(): ValentineLangCode {
  if (typeof window === 'undefined') return 'hi';

  try {
    const fromPath = extractValentineLangFromPath(window.location.pathname);
    if (fromPath) return fromPath;
  } catch {
    // ignore
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = normalizeValentineLangParam(params.get('lang'));
    if (fromQuery) return fromQuery;
  } catch {
    // ignore URLSearchParams error
  }

  try {
    const candidates =
      navigator.languages && navigator.languages.length > 0
        ? navigator.languages
        : [navigator.language];
    for (const candidate of candidates) {
      if (!candidate) continue;
      const lower = candidate.toLowerCase();
      if (lower === 'en-in') return 'hi';
      const normalized = normalizeValentineLangParam(lower);
      if (normalized) return normalized;
    }
  } catch {
    // ignore navigator access error
  }

  return 'hi';
}

export const VALENTINE_PRIMARY_12_LIST: readonly ValentineLanguageMeta[] =
  VALENTINE_PRIMARY_12_CODES.map((code) => VALENTINE_LANGUAGE_MAP.get(code)!);

export const VALENTINE_EXTRA_23_LIST: readonly ValentineLanguageMeta[] =
  VALENTINE_LANGUAGES.filter((l) => !l.isPrimary12);
