export type GlobalLanguageId =
  | 'default'
  // === 15 Original Indian Languages ===
  | 'hindi'
  | 'hinglish'
  | 'tamil'
  | 'telugu'
  | 'kannada'
  | 'malayalam'
  | 'marathi'
  | 'gujarati'
  | 'bengali'
  | 'punjabi'
  | 'odia'
  | 'assamese'
  | 'urdu'
  | 'bhojpuri'
  | 'haryanvi'
  // === 14 Newly Added Indian / Subcontinent Languages ===
  | 'nepali'
  | 'maithili'
  | 'dogri'
  | 'manipuri'
  | 'santali'
  | 'konkani'
  | 'sindhi'
  | 'kashmiri'
  | 'bodo'
  | 'rajasthani'
  | 'chhattisgarhi'
  | 'magahi'
  | 'awadhi'
  | 'tulu'
  // === 20 Original Global Languages ===
  | 'english'
  | 'english-uk'
  | 'spanish'
  | 'portuguese'
  | 'french'
  | 'german'
  | 'italian'
  | 'japanese'
  | 'korean'
  | 'arabic'
  | 'thai'
  | 'tagalog'
  | 'russian'
  | 'chinese'
  | 'indonesian'
  | 'turkish'
  | 'vietnamese'
  | 'dutch'
  | 'polish'
  | 'persian'
  // === 28 Newly Added Global Languages ===
  | 'sinhala'
  | 'myanmar'
  | 'khmer'
  | 'lao'
  | 'mongolian'
  | 'uzbek'
  | 'kazakh'
  | 'kyrgyz'
  | 'tajik'
  | 'turkmen'
  | 'azerbaijani'
  | 'georgian'
  | 'armenian'
  | 'amharic'
  | 'somali'
  | 'swahili'
  | 'yoruba'
  | 'igbo'
  | 'hausa'
  | 'zulu'
  | 'pashto'
  | 'kurdish'
  | 'malay'
  | 'javanese'
  | 'sundanese'
  | 'cebuano'
  | 'hmong'
  | 'samoan';

export interface GlobalLanguageOption {
  number: number;
  id: Exclude<GlobalLanguageId, 'default'>;
  label: string;
  nativeLabel: string;
  flag: string;
  apiCode: string;
  speechLang: string;
  rtl: boolean;
  regionGroup: 'indian' | 'global';
}

export const GLOBAL_LANGUAGES: GlobalLanguageOption[] = [
  // === 15 ORIGINAL INDIAN LANGUAGES ===
  { number: 1, id: 'hindi', label: 'Hindi', nativeLabel: 'हिंदी', flag: '🇮🇳', apiCode: 'hi', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 2, id: 'hinglish', label: 'Hinglish', nativeLabel: 'Hinglish', flag: '🇮🇳', apiCode: 'hi-Latn', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 3, id: 'tamil', label: 'Tamil', nativeLabel: 'தமிழ்', flag: '🇮🇳', apiCode: 'ta', speechLang: 'ta-IN', rtl: false, regionGroup: 'indian' },
  { number: 4, id: 'telugu', label: 'Telugu', nativeLabel: 'తెలుగు', flag: '🇮🇳', apiCode: 'te', speechLang: 'te-IN', rtl: false, regionGroup: 'indian' },
  { number: 5, id: 'kannada', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', flag: '🇮🇳', apiCode: 'kn', speechLang: 'kn-IN', rtl: false, regionGroup: 'indian' },
  { number: 6, id: 'malayalam', label: 'Malayalam', nativeLabel: 'മലയാളം', flag: '🇮🇳', apiCode: 'ml', speechLang: 'ml-IN', rtl: false, regionGroup: 'indian' },
  { number: 7, id: 'marathi', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳', apiCode: 'mr', speechLang: 'mr-IN', rtl: false, regionGroup: 'indian' },
  { number: 8, id: 'gujarati', label: 'Gujarati', nativeLabel: 'ગુજરાતી', flag: '🇮🇳', apiCode: 'gu', speechLang: 'gu-IN', rtl: false, regionGroup: 'indian' },
  { number: 9, id: 'bengali', label: 'Bengali', nativeLabel: 'বাংলা', flag: '🇮🇳', apiCode: 'bn', speechLang: 'bn-IN', rtl: false, regionGroup: 'indian' },
  { number: 10, id: 'punjabi', label: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ', flag: '🇮🇳', apiCode: 'pa', speechLang: 'pa-IN', rtl: false, regionGroup: 'indian' },
  { number: 11, id: 'odia', label: 'Odia', nativeLabel: 'ଓଡ଼ିଆ', flag: '🇮🇳', apiCode: 'or', speechLang: 'or-IN', rtl: false, regionGroup: 'indian' },
  { number: 12, id: 'assamese', label: 'Assamese', nativeLabel: 'অসমীয়া', flag: '🇮🇳', apiCode: 'as', speechLang: 'as-IN', rtl: false, regionGroup: 'indian' },
  { number: 13, id: 'urdu', label: 'Urdu', nativeLabel: 'اردو', flag: '🇮🇳', apiCode: 'ur', speechLang: 'ur-PK', rtl: true, regionGroup: 'indian' },
  { number: 14, id: 'bhojpuri', label: 'Bhojpuri', nativeLabel: 'भोजपुरी', flag: '🇮🇳', apiCode: 'bho', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 15, id: 'haryanvi', label: 'Haryanvi', nativeLabel: 'हरियाणवी', flag: '🇮🇳', apiCode: 'bgc', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },

  // === 14 NEW INDIAN & SUB-CONTINENT LANGUAGES (Requested by User) ===
  { number: 16, id: 'nepali', label: 'Nepali', nativeLabel: 'नेपाली', flag: '🇳🇵', apiCode: 'ne', speechLang: 'ne-NP', rtl: false, regionGroup: 'indian' },
  { number: 17, id: 'maithili', label: 'Maithili', nativeLabel: 'मैथिली', flag: '🇮🇳', apiCode: 'mai', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 18, id: 'dogri', label: 'Dogri', nativeLabel: 'डोगरी', flag: '🇮🇳', apiCode: 'doi', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 19, id: 'manipuri', label: 'Manipuri', nativeLabel: 'মৈতৈলোন্', flag: '🇮🇳', apiCode: 'mni', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 20, id: 'santali', label: 'Santali', nativeLabel: 'ᱥᱟᱱᱛᱟᱲᱤ', flag: '🇮🇳', apiCode: 'sat', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 21, id: 'konkani', label: 'Konkani', nativeLabel: 'कोंकणी', flag: '🇮🇳', apiCode: 'kok', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 22, id: 'sindhi', label: 'Sindhi', nativeLabel: 'سنڌي', flag: '🇮🇳', apiCode: 'sd', speechLang: 'ur-PK', rtl: true, regionGroup: 'indian' },
  { number: 23, id: 'kashmiri', label: 'Kashmiri', nativeLabel: 'کٲشُر', flag: '🇮🇳', apiCode: 'ks', speechLang: 'ur-PK', rtl: true, regionGroup: 'indian' },
  { number: 24, id: 'bodo', label: 'Bodo', nativeLabel: 'बड़ो', flag: '🇮🇳', apiCode: 'brx', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 25, id: 'rajasthani', label: 'Rajasthani', nativeLabel: 'राजस्थानी', flag: '🇮🇳', apiCode: 'raj', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 26, id: 'chhattisgarhi', label: 'Chhattisgarhi', nativeLabel: 'छत्तीसगढ़ी', flag: '🇮🇳', apiCode: 'hne', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 27, id: 'magahi', label: 'Magahi', nativeLabel: 'मगही', flag: '🇮🇳', apiCode: 'mag', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 28, id: 'awadhi', label: 'Awadhi', nativeLabel: 'अवधी', flag: '🇮🇳', apiCode: 'awa', speechLang: 'hi-IN', rtl: false, regionGroup: 'indian' },
  { number: 29, id: 'tulu', label: 'Tulu', nativeLabel: 'ತುಳು', flag: '🇮🇳', apiCode: 'tcy', speechLang: 'kn-IN', rtl: false, regionGroup: 'indian' },

  // === 20 ORIGINAL GLOBAL LANGUAGES ===
  { number: 30, id: 'english', label: 'English (USA)', nativeLabel: 'English', flag: '🇺🇸', apiCode: 'en-US', speechLang: 'en-US', rtl: false, regionGroup: 'global' },
  { number: 31, id: 'english-uk', label: 'English (UK)', nativeLabel: 'English (UK)', flag: '🇬🇧', apiCode: 'en-GB', speechLang: 'en-GB', rtl: false, regionGroup: 'global' },
  { number: 32, id: 'spanish', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸', apiCode: 'es', speechLang: 'es-ES', rtl: false, regionGroup: 'global' },
  { number: 33, id: 'portuguese', label: 'Portuguese', nativeLabel: 'Português', flag: '🇵🇹', apiCode: 'pt', speechLang: 'pt-BR', rtl: false, regionGroup: 'global' },
  { number: 34, id: 'french', label: 'French', nativeLabel: 'Français', flag: '🇫🇷', apiCode: 'fr', speechLang: 'fr-FR', rtl: false, regionGroup: 'global' },
  { number: 35, id: 'german', label: 'German', nativeLabel: 'Deutsch', flag: '🇩🇪', apiCode: 'de', speechLang: 'de-DE', rtl: false, regionGroup: 'global' },
  { number: 36, id: 'italian', label: 'Italian', nativeLabel: 'Italiano', flag: '🇮🇹', apiCode: 'it', speechLang: 'it-IT', rtl: false, regionGroup: 'global' },
  { number: 37, id: 'japanese', label: 'Japanese', nativeLabel: '日本語', flag: '🇯🇵', apiCode: 'ja', speechLang: 'ja-JP', rtl: false, regionGroup: 'global' },
  { number: 38, id: 'korean', label: 'Korean', nativeLabel: '한국어', flag: '🇰🇷', apiCode: 'ko', speechLang: 'ko-KR', rtl: false, regionGroup: 'global' },
  { number: 39, id: 'arabic', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦', apiCode: 'ar', speechLang: 'ar-SA', rtl: true, regionGroup: 'global' },
  { number: 40, id: 'thai', label: 'Thai', nativeLabel: 'ไทย', flag: '🇹🇭', apiCode: 'th', speechLang: 'th-TH', rtl: false, regionGroup: 'global' },
  { number: 41, id: 'tagalog', label: 'Tagalog', nativeLabel: 'Tagalog', flag: '🇵🇭', apiCode: 'tl', speechLang: 'tl-PH', rtl: false, regionGroup: 'global' },
  { number: 42, id: 'russian', label: 'Russian', nativeLabel: 'Русский', flag: '🇷🇺', apiCode: 'ru', speechLang: 'ru-RU', rtl: false, regionGroup: 'global' },
  { number: 43, id: 'chinese', label: 'Chinese (Simplified)', nativeLabel: '简体中文', flag: '🇨🇳', apiCode: 'zh-CN', speechLang: 'zh-CN', rtl: false, regionGroup: 'global' },
  { number: 44, id: 'indonesian', label: 'Indonesian', nativeLabel: 'Bahasa Indonesia', flag: '🇮🇩', apiCode: 'id', speechLang: 'id-ID', rtl: false, regionGroup: 'global' },
  { number: 45, id: 'turkish', label: 'Turkish', nativeLabel: 'Türkçe', flag: '🇹🇷', apiCode: 'tr', speechLang: 'tr-TR', rtl: false, regionGroup: 'global' },
  { number: 46, id: 'vietnamese', label: 'Vietnamese', nativeLabel: 'Tiếng Việt', flag: '🇻🇳', apiCode: 'vi', speechLang: 'vi-VN', rtl: false, regionGroup: 'global' },
  { number: 47, id: 'dutch', label: 'Dutch', nativeLabel: 'Nederlands', flag: '🇳🇱', apiCode: 'nl', speechLang: 'nl-NL', rtl: false, regionGroup: 'global' },
  { number: 48, id: 'polish', label: 'Polish', nativeLabel: 'Polski', flag: '🇵🇱', apiCode: 'pl', speechLang: 'pl-PL', rtl: false, regionGroup: 'global' },
  { number: 49, id: 'persian', label: 'Persian', nativeLabel: 'فارسی', flag: '🇮🇷', apiCode: 'fa', speechLang: 'fa-IR', rtl: true, regionGroup: 'global' },

  // === 28 NEW GLOBAL LANGUAGES (Requested by User) ===
  { number: 50, id: 'sinhala', label: 'Sinhala', nativeLabel: 'සිංහල', flag: '🇱🇰', apiCode: 'si', speechLang: 'si-LK', rtl: false, regionGroup: 'global' },
  { number: 51, id: 'myanmar', label: 'Burmese (Myanmar)', nativeLabel: 'မြန်မာ', flag: '🇲🇲', apiCode: 'my', speechLang: 'my-MM', rtl: false, regionGroup: 'global' },
  { number: 52, id: 'khmer', label: 'Khmer', nativeLabel: 'ខ្មែរ', flag: '🇰🇭', apiCode: 'km', speechLang: 'km-KH', rtl: false, regionGroup: 'global' },
  { number: 53, id: 'lao', label: 'Lao', nativeLabel: 'ພາສາລາວ', flag: '🇱🇦', apiCode: 'lo', speechLang: 'lo-LA', rtl: false, regionGroup: 'global' },
  { number: 54, id: 'mongolian', label: 'Mongolian', nativeLabel: 'Монгол', flag: '🇲🇳', apiCode: 'mn', speechLang: 'mn-MN', rtl: false, regionGroup: 'global' },
  { number: 55, id: 'uzbek', label: 'Uzbek', nativeLabel: 'Oʻzbekcha', flag: '🇺🇿', apiCode: 'uz', speechLang: 'uz-UZ', rtl: false, regionGroup: 'global' },
  { number: 56, id: 'kazakh', label: 'Kazakh', nativeLabel: 'Қазақша', flag: '🇰🇿', apiCode: 'kk', speechLang: 'kk-KZ', rtl: false, regionGroup: 'global' },
  { number: 57, id: 'kyrgyz', label: 'Kyrgyz', nativeLabel: 'Кыргызча', flag: '🇰🇬', apiCode: 'ky', speechLang: 'ky-KG', rtl: false, regionGroup: 'global' },
  { number: 58, id: 'tajik', label: 'Tajik', nativeLabel: 'Тоҷикӣ', flag: '🇹🇯', apiCode: 'tg', speechLang: 'tg-TJ', rtl: false, regionGroup: 'global' },
  { number: 59, id: 'turkmen', label: 'Turkmen', nativeLabel: 'Türkmençe', flag: '🇹🇲', apiCode: 'tk', speechLang: 'tk-TM', rtl: false, regionGroup: 'global' },
  { number: 60, id: 'azerbaijani', label: 'Azerbaijani', nativeLabel: 'Azərbaycan', flag: '🇦🇿', apiCode: 'az', speechLang: 'az-AZ', rtl: false, regionGroup: 'global' },
  { number: 61, id: 'georgian', label: 'Georgian', nativeLabel: 'ქართული', flag: '🇬🇪', apiCode: 'ka', speechLang: 'ka-GE', rtl: false, regionGroup: 'global' },
  { number: 62, id: 'armenian', label: 'Armenian', nativeLabel: 'Հայերեն', flag: '🇦🇲', apiCode: 'hy', speechLang: 'hy-AM', rtl: false, regionGroup: 'global' },
  { number: 63, id: 'amharic', label: 'Amharic', nativeLabel: 'አማርኛ', flag: '🇪🇹', apiCode: 'am', speechLang: 'am-ET', rtl: false, regionGroup: 'global' },
  { number: 64, id: 'somali', label: 'Somali', nativeLabel: 'Soomaali', flag: '🇸🇴', apiCode: 'so', speechLang: 'so-SO', rtl: false, regionGroup: 'global' },
  { number: 65, id: 'swahili', label: 'Swahili', nativeLabel: 'Kiswahili', flag: '🇰🇪', apiCode: 'sw', speechLang: 'sw-KE', rtl: false, regionGroup: 'global' },
  { number: 66, id: 'yoruba', label: 'Yoruba', nativeLabel: 'Èdè Yorùbá', flag: '🇳🇬', apiCode: 'yo', speechLang: 'yo-NG', rtl: false, regionGroup: 'global' },
  { number: 67, id: 'igbo', label: 'Igbo', nativeLabel: 'Asụsụ Igbo', flag: '🇳🇬', apiCode: 'ig', speechLang: 'ig-NG', rtl: false, regionGroup: 'global' },
  { number: 68, id: 'hausa', label: 'Hausa', nativeLabel: 'Hausa', flag: '🇳🇬', apiCode: 'ha', speechLang: 'ha-NE', rtl: false, regionGroup: 'global' },
  { number: 69, id: 'zulu', label: 'Zulu', nativeLabel: 'isiZulu', flag: '🇿🇦', apiCode: 'zu', speechLang: 'zu-ZA', rtl: false, regionGroup: 'global' },
  { number: 70, id: 'pashto', label: 'Pashto', nativeLabel: 'پښتو', flag: '🇦🇫', apiCode: 'ps', speechLang: 'ps-AF', rtl: true, regionGroup: 'global' },
  { number: 71, id: 'kurdish', label: 'Kurdish', nativeLabel: 'Kurdî', flag: '🇮🇶', apiCode: 'ku', speechLang: 'ku-TR', rtl: true, regionGroup: 'global' },
  { number: 72, id: 'malay', label: 'Malay', nativeLabel: 'Bahasa Melayu', flag: '🇲🇾', apiCode: 'ms', speechLang: 'ms-MY', rtl: false, regionGroup: 'global' },
  { number: 73, id: 'javanese', label: 'Javanese', nativeLabel: 'Basa Jawa', flag: '🇮🇩', apiCode: 'jv', speechLang: 'jv-ID', rtl: false, regionGroup: 'global' },
  { number: 74, id: 'sundanese', label: 'Sundanese', nativeLabel: 'Basa Sunda', flag: '🇮🇩', apiCode: 'su', speechLang: 'su-ID', rtl: false, regionGroup: 'global' },
  { number: 75, id: 'cebuano', label: 'Cebuano', nativeLabel: 'Sinugboanon', flag: '🇵🇭', apiCode: 'ceb', speechLang: 'fil-PH', rtl: false, regionGroup: 'global' },
  { number: 76, id: 'hmong', label: 'Hmong', nativeLabel: 'Hmoob', flag: '🇱🇦', apiCode: 'hmn', speechLang: 'en-US', rtl: false, regionGroup: 'global' },
  { number: 77, id: 'samoan', label: 'Samoan', nativeLabel: 'Gagana Sāmoa', flag: '🇼🇸', apiCode: 'sm', speechLang: 'en-US', rtl: false, regionGroup: 'global' }
];

/**
 * Automatically detects user's preferred language from mobile / browser / device settings
 * Supports all 35 Languages (15 Indian + 20 Global) + Timezone heuristics.
 */
export function detectDeviceGlobalLanguage(): GlobalLanguageId {
  if (typeof window === 'undefined') return 'hinglish';

  try {
    // 1. URL Path check (e.g. /diwali-shayari/marathi/ or /marathi)
    const path = (window.location?.pathname || '').toLowerCase();
    for (const l of GLOBAL_LANGUAGES) {
      if (
        path.includes(`/${l.id}/`) ||
        path.endsWith(`/${l.id}`) ||
        path.includes(`/${l.apiCode.toLowerCase()}/`) ||
        path.endsWith(`/${l.apiCode.toLowerCase()}`)
      ) {
        return l.id;
      }
    }

    // 2. Query param check (e.g. ?lang=marathi or ?lang=mr)
    if (window.location?.search) {
      const searchParams = new URLSearchParams(window.location.search);
      const langParam = searchParams.get('lang')?.toLowerCase().trim();
      if (langParam) {
        const matched = GLOBAL_LANGUAGES.find(
          (l) => l.id === langParam || l.apiCode.toLowerCase() === langParam
        );
        if (matched) return matched.id;
      }
    }

    // 3. Browser / Mobile navigator.languages detection
    const candidates: string[] = [];
    if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
      candidates.push(...navigator.languages);
    }
    if (navigator.language) {
      candidates.push(navigator.language);
    }

    for (const raw of candidates) {
      if (!raw) continue;
      const lower = raw.toLowerCase().trim();

      // Priority 1: Indian Mobile Settings (English India / en-IN / Hindi / Hinglish) -> HINGLISH
      if (
        lower === 'en-in' ||
        lower.startsWith('en-in') ||
        lower === 'hi' ||
        lower.startsWith('hi-in') ||
        lower.startsWith('hi-latn') ||
        lower.includes('hinglish')
      ) {
        return 'hinglish';
      }

      // Other Indian & Subcontinent Languages
      if (lower.startsWith('ne')) return 'nepali';
      if (lower.startsWith('mr')) return 'marathi';
      if (lower.startsWith('ta')) return 'tamil';
      if (lower.startsWith('te')) return 'telugu';
      if (lower.startsWith('kn')) return 'kannada';
      if (lower.startsWith('ml')) return 'malayalam';
      if (lower.startsWith('gu')) return 'gujarati';
      if (lower.startsWith('bn')) return 'bengali';
      if (lower.startsWith('pa')) return 'punjabi';
      if (lower.startsWith('or')) return 'odia';
      if (lower.startsWith('as')) return 'assamese';
      if (lower.startsWith('ur')) return 'urdu';
      if (lower.startsWith('bho')) return 'bhojpuri';
      if (lower.startsWith('mai')) return 'maithili';
      if (lower.startsWith('doi')) return 'dogri';
      if (lower.startsWith('mni')) return 'manipuri';
      if (lower.startsWith('sat')) return 'santali';
      if (lower.startsWith('kok') || lower.startsWith('gom')) return 'konkani';
      if (lower.startsWith('sd')) return 'sindhi';
      if (lower.startsWith('ks')) return 'kashmiri';
      if (lower.startsWith('brx')) return 'bodo';
      if (lower.startsWith('raj')) return 'rajasthani';
      if (lower.startsWith('hne')) return 'chhattisgarhi';
      if (lower.startsWith('mag')) return 'magahi';
      if (lower.startsWith('awa')) return 'awadhi';
      if (lower.startsWith('tcy')) return 'tulu';
      if (lower.startsWith('bgc')) return 'haryanvi';

      // Global Languages
      if (lower.startsWith('si')) return 'sinhala';
      if (lower.startsWith('my')) return 'myanmar';
      if (lower.startsWith('km')) return 'khmer';
      if (lower.startsWith('lo')) return 'lao';
      if (lower.startsWith('mn')) return 'mongolian';
      if (lower.startsWith('uz')) return 'uzbek';
      if (lower.startsWith('kk')) return 'kazakh';
      if (lower.startsWith('ky')) return 'kyrgyz';
      if (lower.startsWith('tg')) return 'tajik';
      if (lower.startsWith('tk')) return 'turkmen';
      if (lower.startsWith('az')) return 'azerbaijani';
      if (lower.startsWith('ka')) return 'georgian';
      if (lower.startsWith('hy')) return 'armenian';
      if (lower.startsWith('am')) return 'amharic';
      if (lower.startsWith('so')) return 'somali';
      if (lower.startsWith('sw')) return 'swahili';
      if (lower.startsWith('yo')) return 'yoruba';
      if (lower.startsWith('ig')) return 'igbo';
      if (lower.startsWith('ha')) return 'hausa';
      if (lower.startsWith('zu')) return 'zulu';
      if (lower.startsWith('ps')) return 'pashto';
      if (lower.startsWith('ku')) return 'kurdish';
      if (lower.startsWith('ms')) return 'malay';
      if (lower.startsWith('jv')) return 'javanese';
      if (lower.startsWith('su')) return 'sundanese';
      if (lower.startsWith('ceb')) return 'cebuano';
      if (lower.startsWith('hmn')) return 'hmong';
      if (lower.startsWith('sm')) return 'samoan';

      if (lower === 'en-gb' || lower === 'en-au' || lower === 'en-nz' || lower === 'en-za') return 'english-uk';
      if (lower.startsWith('en')) {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
        if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz.includes('India')) {
          return 'hinglish';
        }
        return 'english';
      }
      if (lower.startsWith('es')) return 'spanish';
      if (lower.startsWith('pt')) return 'portuguese';
      if (lower.startsWith('fr')) return 'french';
      if (lower.startsWith('de')) return 'german';
      if (lower.startsWith('it')) return 'italian';
      if (lower.startsWith('ja')) return 'japanese';
      if (lower.startsWith('ko')) return 'korean';
      if (lower.startsWith('ar')) return 'arabic';
      if (lower.startsWith('th')) return 'thai';
      if (lower.startsWith('tl') || lower.startsWith('fil')) return 'tagalog';
      if (lower.startsWith('ru')) return 'russian';
      if (lower.startsWith('zh')) return 'chinese';
      if (lower.startsWith('id')) return 'indonesian';
      if (lower.startsWith('tr')) return 'turkish';
      if (lower.startsWith('vi')) return 'vietnamese';
      if (lower.startsWith('nl')) return 'dutch';
      if (lower.startsWith('pl')) return 'polish';
      if (lower.startsWith('fa')) return 'persian';
    }

    // 4. Regional TimeZone Heuristic
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    if (tz.includes('Kolkata') || tz.includes('Calcutta') || tz.includes('India')) return 'hinglish';
    if (tz.includes('Kathmandu')) return 'nepali';
    if (tz.includes('Colombo')) return 'sinhala';
    if (tz.includes('Yangon')) return 'myanmar';
    if (tz.includes('Phnom_Penh')) return 'khmer';
    if (tz.includes('Vientiane')) return 'lao';
    if (tz.includes('Ulaanbaatar')) return 'mongolian';
    if (tz.includes('Tashkent')) return 'uzbek';
    if (tz.includes('Almaty')) return 'kazakh';
    if (tz.includes('Bishkek')) return 'kyrgyz';
    if (tz.includes('Dushanbe')) return 'tajik';
    if (tz.includes('Ashgabat')) return 'turkmen';
    if (tz.includes('Baku')) return 'azerbaijani';
    if (tz.includes('Tbilisi')) return 'georgian';
    if (tz.includes('Yerevan')) return 'armenian';
    if (tz.includes('Addis_Ababa')) return 'amharic';
    if (tz.includes('Mogadishu')) return 'somali';
    if (tz.includes('Nairobi') || tz.includes('Dar_es_Salaam')) return 'swahili';
    if (tz.includes('Lagos')) return 'yoruba';
    if (tz.includes('Johannesburg')) return 'zulu';
    if (tz.includes('Kabul')) return 'pashto';
    if (tz.includes('Kuala_Lumpur')) return 'malay';
    if (tz.includes('Dubai') || tz.includes('Riyadh') || tz.includes('Qatar') || tz.includes('Kuwait') || tz.includes('Baghdad') || tz.includes('Muscat')) {
      return 'arabic';
    }
    if (tz.includes('Moscow') || tz.includes('Yekaterinburg') || tz.includes('Novosibirsk')) {
      return 'russian';
    }
    if (tz.includes('Paris') || tz.includes('Brussels') || tz.includes('Geneva')) {
      return 'french';
    }
    if (tz.includes('Berlin') || tz.includes('Vienna') || tz.includes('Zurich')) {
      return 'german';
    }
    if (tz.includes('Rome')) {
      return 'italian';
    }
    if (tz.includes('Madrid') || tz.includes('Buenos_Aires') || tz.includes('Mexico_City') || tz.includes('Bogota') || tz.includes('Lima') || tz.includes('Santiago')) {
      return 'spanish';
    }
    if (tz.includes('Tokyo')) {
      return 'japanese';
    }
    if (tz.includes('Seoul')) {
      return 'korean';
    }
    if (tz.includes('Shanghai') || tz.includes('Beijing') || tz.includes('Hong_Kong') || tz.includes('Taipei')) {
      return 'chinese';
    }
    if (tz.includes('Jakarta')) {
      return 'indonesian';
    }
    if (tz.includes('Istanbul')) {
      return 'turkish';
    }
    if (tz.includes('Bangkok')) {
      return 'thai';
    }
    if (tz.includes('Manila')) {
      return 'tagalog';
    }
    if (tz.includes('Tehran')) {
      return 'persian';
    }
    if (tz.includes('Amsterdam')) {
      return 'dutch';
    }
    if (tz.includes('Warsaw')) {
      return 'polish';
    }
    if (tz.includes('Lisbon') || tz.includes('Sao_Paulo') || tz.includes('Rio_de_Janeiro')) {
      return 'portuguese';
    }
    if (tz.includes('London')) {
      return 'english-uk';
    }
    if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles') || tz.includes('Toronto') || tz.includes('Vancouver')) {
      return 'english';
    }
  } catch {
    // fallback
  }

  // DEFAULT LANGUAGE: HINGLISH (as requested, majority of Indian mobile users use Hinglish)
  return 'hinglish';
}

export interface UiStrings {
  headerTitle: string;
  selectLanguageLabel: string;
  welcomeHeading: string;
  welcomeLine1: string;
  welcomeLine2: string;
  welcomeLine3: string;
  btnFestival: string;
  btnFeeling: string;
  btnSpecialDays: string;
  btnWriteShayari: string;
  btnZqMoments: string;
  btnHome: string;
  btnPasandida: string;
  searchPlaceholder: string;
  homeFestCardTitle: string;
  homeFestCardSub: string;
  homeFeelCardTitle: string;
  homeFeelCardSub: string;
  clickHere: string;
  home12MonthsTitle: string;
  viewAllMonths: string;
  homeMomentsDesc: string;
  openZqMoments: string;
  festivalIntroTitle: string;
  festivalIntroDesc: string;
  selectFestival: string;
  allFestivals: string;
  goToFeelings: string;
  feelingsIntroTitle: string;
  feelingsIntroDesc: string;
  selectFeelings: string;
  allFeelings: string;
  goToFestival: string;
  loadMoreShayari: string;
  specialIntroTitle: string;
  specialIntroDesc: string;
  selectMonth: string;
  all12MonthsBtn: string;
  specialSearchPlaceholder: string;
  writeIntroTitle: string;
  writeIntroDesc: string;
  momentsIntroTitle: string;
  momentsIntroDesc: string;
  copyBtn: string;
  copiedBtn: string;
  whatsappBtn: string;
  downloadBtn: string;
  translateBtn: string;
  shareBtn: string;
  stylesLabel: string;
  scrollStylesHint: string;
  noShayariFound: string;
  viewAllShayari: string;
  searchResultsHeading: string;
  closeSearchBtn: string;
  changeLanguageHeading: string;
}

const DEFAULT_UI: UiStrings = {
  headerTitle:
    'ZQ - DIL KI AWAAZ: ALL IN ONE SHAYARI COLLECTION, FEELINGS & FESTIVAL WISHES',
  selectLanguageLabel: 'SELECT LANGUAGE',
  welcomeHeading: 'ZQ FEELINGS me aapka dil se swagat hai!',
  welcomeLine1:
    'Har Mood Ke Liye, Har Festival Ke Liye - Yahan Apne Dil Ki Baat Likh Sakte Hain.',
  welcomeLine2:
    'Apne Moments Ko Khoobsurat Pictures Ke Jariye Share Kar Sakte Hain.',
  welcomeLine3:
    'Har Bhasha Mein, Dher Sare Stylish Fonts Ke Sath - Ek Click Mein Copy & Share Karo!',
  btnFestival: 'FESTIVAL SHAYARI',
  btnFeeling: 'FEELING SHAYARI',
  btnSpecialDays: '12 MONTHS SPECIAL DAYS',
  btnWriteShayari: 'APNI SHAYARI LIKHE',
  btnZqMoments: 'ZQ MOMENTS',
  btnHome: 'Home',
  btnPasandida: 'Pasandida',
  searchPlaceholder: 'Search - Apni Shayari Search Karein',
  homeFestCardTitle: 'Festival Wishes Shayari',
  homeFestCardSub: 'त्यौहार विशेस शायरी',
  homeFeelCardTitle: 'Feelings Shayari',
  homeFeelCardSub: 'फीलिंग्स शायरी',
  clickHere: 'यहाँ क्लिक करें',
  home12MonthsTitle: '12 Months Special Days (12 महीनों के खास दिन)',
  viewAllMonths: 'सभी महीने देखें',
  homeMomentsDesc:
    'Share your moments with 1–9 photos and 30 stylish fonts on our live global feed. Like, comment, follow creators, and copy stylish captions in one tap!',
  openZqMoments: 'Open ZQ Moments 💗',
  festivalIntroTitle: 'Festival Shayari - Diwali, Holi, Eid Wishes',
  festivalIntroDesc:
    'Yahan milegi har tyohar ke liye dil se likhi hui shayari - Diwali, Holi, Eid, New Year aur sabhi festivals ke liye best wishes aur shubhkamnayein.',
  selectFestival: 'त्यौहार चुनें (Select Festival)',
  allFestivals: 'सभी 27 त्यौहार',
  goToFeelings: 'फीलिंग्स शायरी पर जाएं 💗',
  feelingsIntroTitle: 'Feeling Shayari - Love, Sad, Attitude, Dosti',
  feelingsIntroDesc:
    'Apni har feeling ko shabd do. Pyar, Dard, Yaadein, Gussa ya Khushi - har ehsaas ke liye yahan ek perfect shayari hai.',
  selectFeelings: 'फीलिंग्स चुनें (Select Category)',
  allFeelings: 'सभी फीलिंग्स',
  goToFestival: 'त्यौहार शायरी पर जाएं 🎉',
  loadMoreShayari: 'और शायरियाँ दिखाएं',
  specialIntroTitle: '12 Months Special Days - Pure Saal Ke Special Din',
  specialIntroDesc:
    'Poore saal bhar duniya me manaye jane wale sabhi festivals aur special days ki shayari yahan milegi. January se December tak har important din ke liye best wishes aur status.',
  selectMonth: '12 महीने चुनें (Select Month: January – December)',
  all12MonthsBtn: 'पूरे 12 महीनों के सभी खास दिन एक साथ देखें',
  specialSearchPlaceholder: 'स्पेशल डे खोजें (Rose Day, Mother, सेना, किसान, योग...)',
  writeIntroTitle: 'Apni Shayari Likhe - Apne Dil Ki Baat Likhe',
  writeIntroDesc:
    'Ab aap bhi shayar ban sakte hain. Yahan apne dil ki baat likhiye aur ek click me apni shayari ki photo bana kar status par lagayein.',
  momentsIntroTitle: 'ZQ Moments - Shayari Photo Status',
  momentsIntroDesc:
    'Shabdon se zyada tasveerein bolti hain. Yahan 9-photo grid me dard aur mohabbat ke palon ko status photos me dekho.',
  copyBtn: 'कॉपी (Copy)',
  copiedBtn: 'कॉपी हो गया!',
  whatsappBtn: 'व्हाट्सएप',
  downloadBtn: 'डाउनलोड',
  translateBtn: 'TRANSLATE',
  shareBtn: 'SHARE',
  stylesLabel: '20 फ़ॉन्ट्स (20 Styles):',
  scrollStylesHint: 'स्क्रॉल करके स्टाइल चुनें →',
  noShayariFound: 'कोई शायरी नहीं मिली',
  viewAllShayari: 'सभी शायरियाँ देखें',
  searchResultsHeading: 'खोज परिणाम (Search Results)',
  closeSearchBtn: 'खोज बंद करें',
  changeLanguageHeading: 'भाषा बदलें (Language)'
};

export const UI_TRANSLATIONS: Partial<Record<GlobalLanguageId, UiStrings>> & { default: UiStrings } = {
  default: DEFAULT_UI,
  hindi: {
    ...DEFAULT_UI,
    headerTitle:
      'ZQ - दिल की आवाज़: ऑल इन वन शायरी कलेक्शन, फीलिंग्स और त्यौहार विशेस',
    selectLanguageLabel: 'भाषा चुनें (HINDI)',
    welcomeHeading: 'ZQ FEELINGS में आपका दिल से स्वागत है!',
    welcomeLine1:
      'हर मूड के लिए, हर त्यौहार के लिए - यहाँ अपने दिल की बात लिख सकते हैं।',
    welcomeLine2:
      'अपने मोमेंट्स को खूबसूरत तस्वीरों के ज़रिए शेयर कर सकते हैं।',
    welcomeLine3:
      'हर भाषा में, ढेर सारे स्टाइलिश फ़ॉन्ट्स के साथ - एक क्लिक में कॉपी और शेयर करो!',
    btnFestival: 'त्यौहार शायरी',
    btnFeeling: 'फीलिंग शायरी',
    btnSpecialDays: '12 महीनों के खास दिन',
    btnWriteShayari: 'अपनी शायरी लिखें',
    btnZqMoments: 'ZQ मोमेंट्स',
    btnHome: 'होम',
    btnPasandida: 'पसंदीदा',
    searchPlaceholder: 'खोजें - अपनी शायरी सर्च करें',
    festivalIntroTitle: 'त्यौहार शायरी - दिवाली, होली, ईद शुभकामनाएं',
    festivalIntroDesc:
      'यहाँ मिलेगी हर त्यौहार के लिए दिल से लिखी हुई शायरी - दिवाली, होली, ईद, न्यू ईयर और सभी त्यौहारों के लिए बेस्ट विशेस और शुभकामनाएं।',
    feelingsIntroTitle: 'फीलिंग शायरी - प्यार, दर्द, एटीट्यूड, दोस्ती',
    feelingsIntroDesc:
      'अपनी हर फीलिंग को शब्द दो। प्यार, दर्द, यादें, गुस्सा या खुशी - हर एहसास के लिए यहाँ एक परफेक्ट शायरी है।',
    specialIntroTitle: '12 महीनों के खास दिन - पूरे साल के स्पेशल दिन',
    specialIntroDesc:
      'पूरे साल भर दुनिया में मनाए जाने वाले सभी त्यौहारों और स्पेशल दिनों की शायरी यहाँ मिलेगी। जनवरी से दिसंबर तक हर खास दिन के लिए बेस्ट विशेस और स्टेटस।',
    writeIntroTitle: 'अपनी शायरी लिखें - अपने दिल की बात लिखें',
    writeIntroDesc:
      'अब आप भी शायर बन सकते हैं। यहाँ अपने दिल की बात लिखिए और एक क्लिक में अपनी शायरी की फोटो बना कर स्टेटस पर लगाएं।',
    momentsIntroTitle: 'ZQ मोमेंट्स - शायरी फोटो स्टेटस',
    momentsIntroDesc:
      'शब्दों से ज़्यादा तस्वीरें बोलती हैं। यहाँ 9-फोटो ग्रिड में दर्द और मोहब्बत के पलों को स्टेटस फोटोज़ में देखो।'
  },
  hinglish: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'SELECT LANGUAGE (HINGLISH)'
  },
  english: {
    headerTitle:
      'ZQ - DIL KI AWAAZ: ALL IN ONE SHAYARI COLLECTION, FEELINGS & FESTIVAL WISHES',
    selectLanguageLabel: 'SELECT LANGUAGE',
    welcomeHeading: 'A heartfelt welcome to ZQ FEELINGS!',
    welcomeLine1:
      "For Every Mood, For Every Festival - Express Your Heart's Feelings Here.",
    welcomeLine2: 'Share Your Moments Through Beautiful Pictures.',
    welcomeLine3:
      'In Every Language, With Lots of Stylish Fonts - Copy & Share in One Click!',
    btnFestival: 'FESTIVAL SHAYARI',
    btnFeeling: 'FEELING SHAYARI',
    btnSpecialDays: '12 MONTHS SPECIAL DAYS',
    btnWriteShayari: 'WRITE YOUR SHAYARI',
    btnZqMoments: 'ZQ MOMENTS',
    btnHome: 'Home',
    btnPasandida: 'Favorites',
    searchPlaceholder: 'Search - Find Your Shayari',
    homeFestCardTitle: 'Festival Wishes Shayari',
    homeFestCardSub: 'Heartfelt wishes for all 27 festivals',
    homeFeelCardTitle: 'Feelings Shayari',
    homeFeelCardSub: 'Love, Sad, Attitude & Emotions Poetry',
    clickHere: 'Click Here',
    home12MonthsTitle: '12 Months Special Days (All Year Celebrations)',
    viewAllMonths: 'View All Months',
    homeMomentsDesc:
      'Share your moments with 1–9 photos and 30 stylish fonts on our live global feed. Like, comment, follow creators, and copy stylish captions in one tap!',
    openZqMoments: 'Open ZQ Moments 💗',
    festivalIntroTitle: 'Festival Shayari - Diwali, Holi, Eid Wishes',
    festivalIntroDesc:
      'Find heartfelt poetry for every celebration - best wishes and greetings for Diwali, Holi, Eid, New Year, and all festivals.',
    selectFestival: 'Select Festival',
    allFestivals: 'All 27 Festivals',
    goToFeelings: 'Go to Feelings Shayari 💗',
    feelingsIntroTitle: 'Feeling Shayari - Love, Sad, Attitude, Friendship',
    feelingsIntroDesc:
      'Give words to every feeling. Love, pain, memories, anger, or joy - find the perfect shayari for every emotion.',
    selectFeelings: 'Select Category',
    allFeelings: 'All Feelings',
    goToFestival: 'Go to Festival Shayari 🎉',
    loadMoreShayari: 'Show More Shayaris',
    specialIntroTitle: '12 Months Special Days - All Year Special Days',
    specialIntroDesc:
      'Discover poetry for every festival and special day celebrated around the world from January to December.',
    selectMonth: 'Select Month (January – December)',
    all12MonthsBtn: 'View All Special Days Across 12 Months',
    specialSearchPlaceholder: 'Search special days (Rose Day, Mother, Army, Yoga...)',
    writeIntroTitle: 'Write Your Shayari - Express Your Heart',
    writeIntroDesc:
      'Become a poet today. Write your heartfelt lines here and create a stylish shayari status image in one click.',
    momentsIntroTitle: 'ZQ Moments - Shayari Photo Status',
    momentsIntroDesc:
      'Pictures speak louder than words. Explore moments of love and emotion in a 9-photo status grid.',
    copyBtn: 'Copy',
    copiedBtn: 'Copied!',
    whatsappBtn: 'WhatsApp',
    downloadBtn: 'Download',
    translateBtn: 'TRANSLATE',
    shareBtn: 'SHARE',
    stylesLabel: '20 Font Styles:',
    scrollStylesHint: 'Scroll to pick style →',
    noShayariFound: 'No Shayari Found',
    viewAllShayari: 'View All Shayaris',
    searchResultsHeading: 'Search Results',
    closeSearchBtn: 'Close Search',
    changeLanguageHeading: 'Change Language'
  },
  'english-uk': {
    headerTitle:
      'ZQ - DIL KI AWAAZ: ALL IN ONE SHAYARI COLLECTION, FEELINGS & FESTIVAL WISHES',
    selectLanguageLabel: 'SELECT LANGUAGE (UK)',
    welcomeHeading: 'A heartfelt welcome to ZQ FEELINGS!',
    welcomeLine1:
      "For Every Mood, For Every Festival - Express Your Heart's Feelings Here.",
    welcomeLine2: 'Share Your Moments Through Beautiful Pictures.',
    welcomeLine3:
      'In Every Language, With Lots of Stylish Fonts - Copy & Share in One Click!',
    btnFestival: 'FESTIVAL SHAYARI',
    btnFeeling: 'FEELING SHAYARI',
    btnSpecialDays: '12 MONTHS SPECIAL DAYS',
    btnWriteShayari: 'WRITE YOUR SHAYARI',
    btnZqMoments: 'ZQ MOMENTS',
    btnHome: 'Home',
    btnPasandida: 'Favourites',
    searchPlaceholder: 'Search - Find Your Shayari',
    homeFestCardTitle: 'Festival Wishes Shayari',
    homeFestCardSub: 'Heartfelt wishes for all 27 festivals',
    homeFeelCardTitle: 'Feelings Shayari',
    homeFeelCardSub: 'Love, Sad, Attitude & Emotions Poetry',
    clickHere: 'Click Here',
    home12MonthsTitle: '12 Months Special Days (All Year Celebrations)',
    viewAllMonths: 'View All Months',
    homeMomentsDesc:
      'Share your moments with 1–9 photos and 30 stylish fonts on our live global feed. Like, comment, follow creators, and copy stylish captions in one tap!',
    openZqMoments: 'Open ZQ Moments 💗',
    festivalIntroTitle: 'Festival Shayari - Diwali, Holi, Eid Wishes',
    festivalIntroDesc:
      'Find heartfelt poetry for every celebration - best wishes and greetings for Diwali, Holi, Eid, New Year, and all festivals.',
    selectFestival: 'Select Festival',
    allFestivals: 'All 27 Festivals',
    goToFeelings: 'Go to Feelings Shayari 💗',
    feelingsIntroTitle: 'Feeling Shayari - Love, Sad, Attitude, Friendship',
    feelingsIntroDesc:
      'Give words to every feeling. Love, pain, memories, anger, or joy - find the perfect shayari for every emotion.',
    selectFeelings: 'Select Category',
    allFeelings: 'All Feelings',
    goToFestival: 'Go to Festival Shayari 🎉',
    loadMoreShayari: 'Show More Shayaris',
    specialIntroTitle: '12 Months Special Days - All Year Special Days',
    specialIntroDesc:
      'Discover poetry for every festival and special day celebrated around the world from January to December.',
    selectMonth: 'Select Month (January – December)',
    all12MonthsBtn: 'View All Special Days Across 12 Months',
    specialSearchPlaceholder: 'Search special days (Rose Day, Mother, Army, Yoga...)',
    writeIntroTitle: 'Write Your Shayari - Express Your Heart',
    writeIntroDesc:
      'Become a poet today. Write your heartfelt lines here and create a stylish shayari status image in one click.',
    momentsIntroTitle: 'ZQ Moments - Shayari Photo Status',
    momentsIntroDesc:
      'Pictures speak louder than words. Explore moments of love and emotion in a 9-photo status grid.',
    copyBtn: 'Copy',
    copiedBtn: 'Copied!',
    whatsappBtn: 'WhatsApp',
    downloadBtn: 'Download',
    translateBtn: 'TRANSLATE',
    shareBtn: 'SHARE',
    stylesLabel: '20 Font Styles:',
    scrollStylesHint: 'Scroll to pick style →',
    noShayariFound: 'No Shayari Found',
    viewAllShayari: 'View All Shayaris',
    searchResultsHeading: 'Search Results',
    closeSearchBtn: 'Close Search',
    changeLanguageHeading: 'Change Language'
  },
  urdu: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - دل کی آواز: آل ان ون شاعری، اسٹیٹس اور تہوار مبارکباد',
    selectLanguageLabel: 'زبان منتخب کریں (URDU)',
    welcomeHeading: 'ZQ FEELINGS میں آپ کا دل سے استقبال ہے۔',
    welcomeLine1:
      'یہاں آپ کو ملے گی تہوار شاعری، جذباتی شاعری، پورے سال کے خاص دن، اپنی شاعری لکھنے کا ٹول اور ZQ Moments کے خوبصورت فوٹو اسٹیٹس۔',
    welcomeLine2: 'ہر احساس، ہر تہوار اور ہر یاد کے لیے بہترین شاعری — سب کچھ ایک ہی جگہ۔',
    welcomeLine3: 'اپنے دل کی آواز کو الفاظ اور تصویروں میں محسوس کیجیے۔',
    btnFestival: 'تہوار شاعری',
    btnFeeling: 'فیلنگ شاعری',
    btnSpecialDays: '12 مہینوں کے خاص دن',
    btnWriteShayari: 'اپنی شاعری لکھیں',
    btnZqMoments: 'ZQ مومنٹس',
    btnHome: 'ہوم',
    btnPasandida: 'پسندیدہ',
    searchPlaceholder: 'تلاش کریں - اپنی شاعری سرچ کریں',
    homeFestCardTitle: 'تہوار شاعری',
    homeFestCardSub: 'تمام تہواروں کے لیے خوبصورت مبارکباد',
    homeFeelCardTitle: 'جذباتی شاعری',
    homeFeelCardSub: 'محبت، درد، انداز اور دوستی شاعری',
    clickHere: 'یہاں کلک کریں',
    home12MonthsTitle: '12 مہینوں کے خاص دن',
    viewAllMonths: 'تمام مہینے دیکھیں',
    festivalIntroTitle: 'تہوار شاعری - دیوالی، ہولی، عید مبارکباد',
    festivalIntroDesc: 'ہر تہوار کے لیے دل سے لکھی گئی شاعری اور نیک تمنائیں یہاں پڑھیں۔',
    selectFestival: 'تہوار منتخب کریں',
    allFestivals: 'تمام 27 تہوار',
    goToFeelings: 'فیلنگ شاعری پر جائیں 💗',
    feelingsIntroTitle: 'فیلنگ شاعری - محبت، درد، انداز، دوستی',
    feelingsIntroDesc: 'اپنے ہر احساس کو الفاظ دیں — محبت، درد، یادیں یا خوشی ہر جذبے کے لیے شاعری۔',
    selectFeelings: 'کیٹیگری منتخب کریں',
    allFeelings: 'تمام جذبات',
    goToFestival: 'تہوار شاعری پر جائیں 🎉',
    loadMoreShayari: 'مزید شاعری دیکھیں',
    specialIntroTitle: '12 مہینوں کے خاص دن - پورے سال کے خاص مواقع',
    specialIntroDesc: 'جنوری سے دسمبر تک ہر اہم دن کے لیے بہترین شاعری اور اسٹیٹس۔',
    writeIntroTitle: 'اپنی شاعری لکھیں - دل کی بات لکھیں',
    writeIntroDesc: 'یہاں اپنے دل کی بات لکھیے اور ایک کلک میں شاعری فوٹو اسٹیٹس بنائیں۔',
    momentsIntroTitle: 'ZQ مومنٹس - شاعری فوٹو اسٹیٹس',
    momentsIntroDesc: 'الفاظ سے زیادہ تصویریں بولتی ہیں — محبت اور احساس کے لمحات دیکھیں۔',
    copyBtn: 'کاپی کریں',
    copiedBtn: 'کاپی ہو گیا!',
    whatsappBtn: 'واٹس ایپ',
    downloadBtn: 'ڈاؤن لوڈ',
    noShayariFound: 'کوئی شاعری نہیں ملی',
    viewAllShayari: 'تمام شاعری دیکھیں',
    searchResultsHeading: 'تلاش کے نتائج',
    closeSearchBtn: 'تلاش بند کریں'
  },
  punjabi: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - ਦਿਲ ਦੀ ਆਵਾਜ਼: ਆਲ ਇਨ ਵਨ ਸ਼ਾਇਰੀ, ਸਟੇਟਸ ਅਤੇ ਤਿਉਹਾਰ ਵਧਾਈਆਂ',
    selectLanguageLabel: 'ਭਾਸ਼ਾ ਚੁਣੋ (PUNJABI)',
    welcomeHeading: 'ZQ FEELINGS ਵਿੱਚ ਤੁਹਾਡਾ ਦਿਲੋਂ ਸਵਾਗਤ ਹੈ।',
    welcomeLine1: 'ਇੱਥੇ ਮਿਲੇਗੀ ਤਿਉਹਾਰ ਸ਼ਾਇਰੀ, ਫੀਲਿੰਗ ਸ਼ਾਇਰੀ, ਪੂਰੇ ਸਾਲ ਦੇ ਖਾਸ ਦਿਨ, ਆਪਣੀ ਸ਼ਾਇਰੀ ਲਿਖਣ ਦਾ ਟੂਲ ਅਤੇ ZQ Moments ਫੋਟੋ ਸਟੇਟਸ।',
    welcomeLine2: 'ਹਰ ਅਹਿਸਾਸ, ਹਰ ਤਿਉਹਾਰ ਅਤੇ ਹਰ ਯਾਦ ਲਈ ਇੱਕ ਪਰਫੈਕਟ ਸ਼ਾਇਰੀ - ਸਭ ਕੁਝ ਇੱਕੋ ਥਾਂ।',
    welcomeLine3: 'ਆਪਣੇ ਦਿਲ ਦੀ ਆਵਾਜ਼ ਨੂੰ ਸ਼ਬਦਾਂ ਅਤੇ ਤਸਵੀਰਾਂ ਵਿੱਚ ਮਹਿਸੂਸ ਕਰੋ।',
    btnFestival: 'ਤਿਉਹਾਰ ਸ਼ਾਇਰੀ',
    btnFeeling: 'ਫੀਲਿੰਗ ਸ਼ਾਇਰੀ',
    btnSpecialDays: '12 ਮਹੀਨਿਆਂ ਦੇ ਖਾਸ ਦਿਨ',
    btnWriteShayari: 'ਆਪਣੀ ਸ਼ਾਇਰੀ ਲਿਖੋ',
    btnZqMoments: 'ZQ ਮੋਮੈਂਟਸ',
    btnHome: 'ਹੋਮ',
    btnPasandida: 'ਪਸੰਦੀਦਾ',
    searchPlaceholder: 'ਖੋਜੋ - ਆਪਣੀ ਸ਼ਾਇਰੀ ਸਰਚ ਕਰੋ',
    clickHere: 'ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ',
    selectFestival: 'ਤਿਉਹਾਰ ਚੁਣੋ',
    selectFeelings: 'ਕੈਟੇਗਰੀ ਚੁਣੋ',
    copyBtn: 'ਕਾਪੀ (Copy)',
    copiedBtn: 'ਕਾਪੀ ਹੋ ਗਿਆ!',
    whatsappBtn: 'ਵਟਸਐਪ'
  },
  bengali: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - দিল কি আওয়াজ: অল ইন ওয়ান শায়রি, স্ট্যাটাস ও উৎসবের শুভেচ্ছা',
    selectLanguageLabel: 'ভাষা নির্বাচন করুন (BENGALI)',
    welcomeHeading: 'ZQ FEELINGS-এ আপনাকে আন্তরিক স্বাগতম।',
    welcomeLine1: 'এখানে পাবেন উৎসবের শায়রি, ফিলিং শায়রি, সারা বছরের বিশেষ দিন, নিজের শায়রি লেখার টুল এবং ZQ Moments ফটো স্ট্যাটাস।',
    welcomeLine2: 'প্রতিটি অনুভূতি, প্রতিটি উৎসব এবং প্রতিটি স্মৃতির জন্য নিখুঁত শায়রি - সব এক জায়গায়।',
    welcomeLine3: 'আপনার হৃদয়ের কণ্ঠস্বর শব্দ এবং ছবিতে অনুভব করুন।',
    btnFestival: 'উৎসবের শায়রি',
    btnFeeling: 'ফিলিং শায়রি',
    btnSpecialDays: '১২ মাসের বিশেষ দিন',
    btnWriteShayari: 'নিজের শায়রি লিখুন',
    btnZqMoments: 'ZQ মোমেন্টস',
    btnHome: 'হোম',
    btnPasandida: 'পছন্দের',
    searchPlaceholder: 'খুঁজুন - আপনার শায়রি সার্চ করুন',
    clickHere: 'এখানে ক্লিক করুন',
    selectFestival: 'উৎসব নির্বাচন করুন',
    selectFeelings: 'বিভাগ নির্বাচন করুন',
    copyBtn: 'কপি করুন',
    copiedBtn: 'কপি হয়েছে!',
    whatsappBtn: 'হোয়াটসঅ্যাপ'
  },
  gujarati: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - દિલ કી આવાઝ: ઓલ ઈન વન શાયરી, સ્ટેટસ અને તહેવાર શુભેચ્છાઓ',
    selectLanguageLabel: 'ભાષા પસંદ કરો (GUJARATI)',
    welcomeHeading: 'ZQ FEELINGS માં આપનું દિલથી સ્વાગત છે.',
    welcomeLine1: 'અહીં મળશે તહેવાર શાયરી, ફીલિંગ શાયરી, આખા વર્ષના ખાસ દિવસો, પોતાની શાયરી લખવાનું ટૂલ અને ZQ Moments ફોટો સ્ટેટસ.',
    welcomeLine2: 'દરેક લાગણી, દરેક તહેવાર અને દરેક યાદ માટે પરફેક્ટ શાયરી - બધું એક જ જગ્યાએ.',
    welcomeLine3: 'તમારા દિલનો અવાજ શબ્દો અને તસવીરોમાં અનુભવો.',
    btnFestival: 'તહેવાર શાયરી',
    btnFeeling: 'ફીલિંગ શાયરી',
    btnSpecialDays: '12 મહિનાના ખાસ દિવસો',
    btnWriteShayari: 'તમારી શાયરી લખો',
    btnZqMoments: 'ZQ મોમેન્ટ્સ',
    btnHome: 'હોમ',
    btnPasandida: 'પસંદગીના',
    searchPlaceholder: 'શોધો - તમારી શાયરી સર્ચ કરો',
    clickHere: 'અહીં ક્લિક કરો',
    selectFestival: 'તહેવાર પસંદ કરો',
    selectFeelings: 'કેટેગરી પસંદ કરો',
    copyBtn: 'કોપી કરો',
    copiedBtn: 'કોપી થઈ ગયું!',
    whatsappBtn: 'વોટ્સએપ'
  },
  marathi: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - दिल की आवाज: ऑल इन वन शायरी, स्टेटस आणि सणांच्या शुभेच्छा',
    selectLanguageLabel: 'भाषा निवडा (MARATHI)',
    welcomeHeading: 'ZQ FEELINGS मध्ये तुमचे मनापासून स्वागत आहे.',
    welcomeLine1: 'येथे तुम्हाला मिळेल सण शायरी, फीलिंग शायरी, संपूर्ण वर्षाचे विशेष दिवस, स्वतःची शायरी लिहिण्याचे साधन आणि ZQ Moments फोटो स्टेटस.',
    welcomeLine2: 'प्रत्येक भावना, प्रत्येक सण आणि प्रत्येक आठवणीसाठी एक परफेक्ट शायरी - सर्व काही एकाच ठिकाणी.',
    welcomeLine3: 'तुमच्या मनाचा आवाज शब्दांत आणि फोटोंमध्ये अनुभवा.',
    btnFestival: 'सण शायरी',
    btnFeeling: 'फीलिंग शायरी',
    btnSpecialDays: '12 महिन्यांचे खास दिवस',
    btnWriteShayari: 'आपली शायरी लिहा',
    btnZqMoments: 'ZQ मोमेंट्स',
    btnHome: 'होम',
    btnPasandida: 'आवडते',
    searchPlaceholder: 'शोधा - आपली शायरी सर्च करा',
    clickHere: 'येथे क्लिक करा',
    selectFestival: 'सण निवडा',
    selectFeelings: 'श्रेणी निवडा',
    copyBtn: 'कॉपी करा',
    copiedBtn: 'कॉपी झाले!',
    whatsappBtn: 'व्हॉट्सॲप'
  },
  tamil: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - இதயத்தின் குரல்: ஆல் இன் ஒன் ஷાયரி, ஸ்டேட்டஸ் & பண்டிகை வாழ்த்துக்கள்',
    selectLanguageLabel: 'மொழியைத் தேர்ந்தெடுக்கவும் (TAMIL)',
    welcomeHeading: 'ZQ FEELINGS-க்கு உங்களை மனதார வரவேற்கிறோம்.',
    welcomeLine1: 'இங்கே பண்டிகை ஷાયரி, உணர்வு ஷાયரி, 12 மாத சிறப்பு நாட்கள், சொந்த கவிதை எழுதும் கருவி மற்றும் ZQ Moments புகைப்பட ஸ்டேட்டஸ் கிடைக்கும்.',
    welcomeLine2: 'ஒவ்வொரு உணர்வுக்கும், ஒவ்வொரு பண்டிகைக்கும் சரியான கவிதை - அனைத்தும் ஒரே இடத்தில்.',
    welcomeLine3: 'உங்கள் இதயத்தின் குரலை வார்த்தைகளிலும் படங்களிலும் உணருங்கள்.',
    btnFestival: 'பண்டிகை ஷાયரி',
    btnFeeling: 'உணர்வு ஷાયரி',
    btnSpecialDays: '12 மாத சிறப்பு நாட்கள்',
    btnWriteShayari: 'உங்கள் கவிதை எழுதுங்கள்',
    btnZqMoments: 'ZQ மொமெண்ட்ஸ்',
    btnHome: 'முகப்பு',
    btnPasandida: 'பிடித்தவை',
    searchPlaceholder: 'தேடுக - உங்கள் கவிதையைத் தேடுங்கள்',
    clickHere: 'இங்கே கிளிக் செய்யவும்',
    selectFestival: 'பண்டிகையைத் தேர்ந்தெடுக்கவும்',
    selectFeelings: 'பிரிவைத் தேர்ந்தெடுக்கவும்',
    copyBtn: 'நகலெடு',
    copiedBtn: 'நகலெடுக்கப்பட்டது!',
    whatsappBtn: 'வாட்ஸ்அப்'
  },
  telugu: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - మనసు మాట: ఆల్ ఇన్ వన్ షాయరీ, స్టేటస్ & పండుగ శుభాకాంక్షలు',
    selectLanguageLabel: 'భాషను ఎంచుకోండి (TELUGU)',
    welcomeHeading: 'ZQ FEELINGS కు మీకు హృదయపూర్వక స్వాగతం.',
    welcomeLine1: 'ఇక్కడ పండుగ షాయరీ, ఫీలింగ్ షాయరీ, 12 నెలల ప్రత్యేక రోజులు, మీ సొంత షాయరీ రాసే టూల్ మరియు ZQ Moments ఫోటో స్టేటస్ లభిస్తాయి.',
    welcomeLine2: 'ప్రతి భావనకు, ప్రతి పండుగకు మరియు ప్రతి జ్ఞాపకానికి సరైన షాయరీ - అన్నీ ఒకే చోట.',
    welcomeLine3: 'మీ మనసులోని మాటను పదాలు మరియు చిత్రాలలో అనుభూతి చెందండి.',
    btnFestival: 'పండుగ షాయరీ',
    btnFeeling: 'ఫీలింగ్ షాయరీ',
    btnSpecialDays: '12 నెలల ప్రత్యేక రోజులు',
    btnWriteShayari: 'మీ షాయరీ రాయండి',
    btnZqMoments: 'ZQ మూమెంట్స్',
    btnHome: 'హోమ్',
    btnPasandida: 'ఇష్టమైనవి',
    searchPlaceholder: 'వెతకండి - మీ షాయరీని సెర్చ్ చేయండి',
    clickHere: 'ఇక్కడ క్లిక్ చేయండి',
    selectFestival: 'పండుగను ఎంచుకోండి',
    selectFeelings: 'వర్గాన్ని ఎంచుకోండి',
    copyBtn: 'కాపీ',
    copiedBtn: 'కాపీ అయింది!',
    whatsappBtn: 'వాట్సాప్'
  },
  malayalam: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - ഹൃദയത്തിന്റെ ശബ്ദം: ഓൾ ഇൻ വൺ ഷായരി, സ്റ്റാറ്റസ് & ഉത്സവ ആശംസകൾ',
    selectLanguageLabel: 'ഭാഷ തിരഞ്ഞെടുക്കുക (MALAYALAM)',
    welcomeHeading: 'ZQ FEELINGS-ലേക്ക് നിങ്ങൾക്ക് ഹൃദയം നിറഞ്ഞ സ്വാഗതം.',
    welcomeLine1: 'ഉത്സവ ഷായരി, ഫീലിംഗ് ഷായരി, 12 മാസത്തെ പ്രത്യേക ദിനങ്ങൾ, സ്വന്തം കവിത എഴുതാനുള്ള ടൂൾ, ZQ Moments ഫോട്ടോ സ്റ്റാറ്റസ് എന്നിവ ഇവിടെ ലഭിക്കും.',
    welcomeLine2: 'ഓരോ വികാരത്തിനും ഓരോ ആഘോഷത്തിനും അനുയോജ്യമായ ഷായരി - എല്ലാം ഒരിടത്ത്.',
    welcomeLine3: 'നിങ്ങളുടെ ഹൃദയത്തിന്റെ ശബ്ദം വാക്കുകളിലും ചിത്രങ്ങളിലും അനുഭവിക്കൂ.',
    btnFestival: 'ഉത്സവ ഷായരി',
    btnFeeling: 'ഫീലിംഗ് ഷായരി',
    btnSpecialDays: '12 മാസത്തെ പ്രത്യേക ദിനങ്ങൾ',
    btnWriteShayari: 'നിങ്ങളുടെ ഷായരി എഴുതുക',
    btnZqMoments: 'ZQ മൊമെന്റ്സ്',
    btnHome: 'ഹോം',
    btnPasandida: 'പ്രിയപ്പെട്ടവ',
    searchPlaceholder: 'തിരയുക - നിങ്ങളുടെ ഷായരി കണ്ടെത്തുക',
    clickHere: 'ഇവിടെ ക്ലിക്ക് ചെയ്യുക',
    selectFestival: 'ഉത്സവം തിരഞ്ഞെടുക്കുക',
    selectFeelings: 'വിഭാഗം തിരഞ്ഞെടുക്കുക',
    copyBtn: 'കോപ്പി',
    copiedBtn: 'കോപ്പി ചെയ്തു!',
    whatsappBtn: 'വാട്ട്‌സ്ആപ്പ്'
  },
  kannada: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - ಮನದ ಮಾತು: ಆಲ್ ಇನ್ ಒನ್ ಶಾಯರಿ, ಸ್ಟೇಟಸ್ ಮತ್ತು ಹಬ್ಬದ ಶುಭಾಶಯಗಳು',
    selectLanguageLabel: 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ (KANNADA)',
    welcomeHeading: 'ZQ FEELINGS ಗೆ ನಿಮಗೆ ಹೃತ್ಪೂರ್ವಕ ಸ್ವಾಗತ.',
    welcomeLine1: 'ಇಲ್ಲಿ ಹಬ್ಬದ ಶಾಯರಿ, ಭಾವನಾ ಶಾಯರಿ, 12 ತಿಂಗಳ ವಿಶೇಷ ದಿನಗಳು, ನಿಮ್ಮದೇ ಶಾಯರಿ ಬರೆಯುವ ಸಾಧನ ಮತ್ತು ZQ Moments ಫೋಟೋ ಸ್ಟೇಟಸ್ ಸಿಗುತ್ತದೆ.',
    welcomeLine2: 'ಪ್ರತಿ ಭಾವನೆ, ಪ್ರತಿ ಹಬ್ಬ ಮತ್ತು ಪ್ರತಿ ನೆನಪಿಗೆ ಪರಿಪೂರ್ಣ ಶಾಯರಿ - ಎಲ್ಲವೂ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.',
    welcomeLine3: 'ನಿಮ್ಮ ಹೃದಯದ ಧ್ವನಿಯನ್ನು ಪದಗಳು ಮತ್ತು ಚಿತ್ರಗಳಲ್ಲಿ ಅನುಭವಿಸಿ.',
    btnFestival: 'ಹಬ್ಬದ ಶಾಯರಿ',
    btnFeeling: 'ಫೀಲಿಂಗ್ ಶಾಯರಿ',
    btnSpecialDays: '12 ತಿಂಗಳ ವಿಶೇಷ ದಿನಗಳು',
    btnWriteShayari: 'ನಿಮ್ಮ ಶಾಯರಿ ಬರೆಯಿರಿ',
    btnZqMoments: 'ZQ ಮೊಮೆಂಟ್ಸ್',
    btnHome: 'ಮುಖಪುಟ',
    btnPasandida: 'ಮೆಚ್ಚಿನವು',
    searchPlaceholder: 'ಹುಡುಕಿ - ನಿಮ್ಮ ಶಾಯರಿ ಹುಡುಕಿ',
    clickHere: 'ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ',
    selectFestival: 'ಹಬ್ಬ ಆಯ್ಕೆಮಾಡಿ',
    selectFeelings: 'ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ',
    copyBtn: 'ಕಾಪಿ',
    copiedBtn: 'ಕಾಪಿ ಆಗಿದೆ!',
    whatsappBtn: 'ವಾಟ್ಸಾಪ್'
  },
  bhojpuri: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - दिल के आवाज: ऑल इन वन भोजपुरी शायरी, स्टेटस आ तिउहार के बधाई',
    selectLanguageLabel: 'भाषा चुनीं (BHOJPURI)',
    welcomeHeading: 'ZQ FEELINGS में रउआ सब के दिल से स्वागत बा।',
    welcomeLine1: 'इहाँ मिली तिउहार शायरी, फीलिंग शायरी, पूरा साल के खास दिन, आपन शायरी लिखे वाला टूल आ ZQ Moments के सुंदर फोटो स्टेटस।',
    welcomeLine2: 'हर एहसास, हर तिउहार आ हर याद खातिर एकदम परफेक्ट शायरी - सब कुछ एके जगह।',
    welcomeLine3: 'अपना दिल के आवाज के शब्दन आ तस्वीरन में महसूस करीं।',
    btnFestival: 'तिउहार शायरी',
    btnFeeling: 'फीलिंग शायरी',
    btnSpecialDays: '12 महीना के खास दिन',
    btnWriteShayari: 'आपन शायरी लिखीं',
    btnZqMoments: 'ZQ मोमेंट्स',
    btnHome: 'होम',
    btnPasandida: 'पसंदीदा',
    searchPlaceholder: 'खोजीं - आपन शायरी सर्च करीं',
    clickHere: 'इहाँ क्लिक करीं',
    selectFestival: 'तिउहार चुनीं',
    selectFeelings: 'कैटेगरी चुनीं',
    copyBtn: 'कॉपी करीं',
    copiedBtn: 'कॉपी हो गइल!',
    whatsappBtn: 'व्हाट्सएप'
  },
  haryanvi: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - दिल की आवाज: ऑल इन वन हरियाणवी शायरी, स्टेटस अर त्यौहार बधाई',
    selectLanguageLabel: 'बोली चुणो (HARYANVI)',
    welcomeHeading: 'ZQ FEELINGS म्ह थारा दिल तै घणा स्वागत सै।',
    welcomeLine1: 'उरै मिलैगी त्यौहार शायरी, फीलिंग शायरी, पूरे साल के खास दिन, आपणी खुद की शायरी लिखण का टूल अर ZQ Moments के बढ़िया फोटो स्टेटस।',
    welcomeLine2: 'हर जज्बात, हर त्यौहार अर हर याद खातर एक नंबर शायरी - सब किमे एक ए जगह।',
    welcomeLine3: 'आपणे दिल की आवाज नै शब्दां अर फोटूआं म्ह महसूस करो।',
    btnFestival: 'त्यौहार शायरी',
    btnFeeling: 'फीलिंग शायरी',
    btnSpecialDays: '12 म्हीन्यां के खास दिन',
    btnWriteShayari: 'आपणी शायरी लिखो',
    btnZqMoments: 'ZQ मोमेंट्स',
    btnHome: 'होम',
    btnPasandida: 'पसंदीदा',
    searchPlaceholder: 'ढूंढो - आपणी शायरी सर्च करो',
    clickHere: 'उरै क्लिक करो',
    selectFestival: 'त्यौहार चुणो',
    selectFeelings: 'कैटेगरी चुणो',
    copyBtn: 'कॉपी करो',
    copiedBtn: 'कॉपी होग्या!',
    whatsappBtn: 'व्हाट्सएप'
  },
  odia: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - ହୃଦୟର ସ୍ୱର: ଅଲ୍ ଇନ୍ ୱାନ୍ ଶାୟରୀ, ଷ୍ଟାଟସ୍ ଏବଂ ପର୍ବପର୍ବାଣୀ ଶୁଭେଚ୍ଛା',
    selectLanguageLabel: 'ଭାଷା ବାଛନ୍ତୁ (ODIA)',
    welcomeHeading: 'ZQ FEELINGS କୁ ଆପଣଙ୍କୁ ହୃଦୟରୁ ସ୍ୱାଗତ।',
    welcomeLine1: 'ଏଠାରେ ମିଳିବ ପର୍ବ ଶାୟରୀ, ଫିଲିଙ୍ଗ୍ ଶାୟରୀ, ୧୨ ମାସର ବିଶେଷ ଦିନ, ନିଜ ଶାୟରୀ ଲେଖିବା ଟୁଲ୍ ଏବଂ ZQ Moments ଫଟୋ ଷ୍ଟାଟସ୍।',
    welcomeLine2: 'ପ୍ରତ୍ୟେକ ଅନୁଭୂତି, ପ୍ରତ୍ୟେକ ପର୍ବ ଓ ପ୍ରତ୍ୟେକ ସ୍ମୃତି ପାଇଁ ସୁନ୍ଦର ଶାୟରୀ - ସବୁ ଗୋଟିଏ ସ୍ଥାନରେ।',
    welcomeLine3: 'ନିଜ ହୃଦୟର କଥାକୁ ଶବ୍ଦ ଓ ଛବିରେ ଅନୁଭବ କରନ୍ତୁ।',
    btnFestival: 'ପର୍ବ ଶାୟରୀ',
    btnFeeling: 'ଫିଲିଙ୍ଗ୍ ଶାୟରୀ',
    btnSpecialDays: '୧୨ ମାସର ବିଶେଷ ଦିନ',
    btnWriteShayari: 'ନିଜ ଶାୟରୀ ଲେଖନ୍ତୁ',
    btnZqMoments: 'ZQ ମୋମେଣ୍ଟସ୍',
    btnHome: 'ହୋମ୍',
    btnPasandida: 'ପସନ୍ଦ',
    searchPlaceholder: 'ଖୋଜନ୍ତୁ - ଆପଣଙ୍କ ଶାୟରୀ ସର୍ଚ୍ଚ କରନ୍ତୁ',
    clickHere: 'ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ',
    copyBtn: 'କପି କରନ୍ତୁ',
    copiedBtn: 'କପି ହେଲା!',
    whatsappBtn: 'ହ୍ୱାଟ୍সଆପ୍'
  },
  assamese: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - হৃদয়ৰ মাত: অল ইন ৱান শ্বায়ৰী, ষ্টেটাছ আৰু উৎসৱৰ শুভেচ্ছা',
    selectLanguageLabel: 'ভাষা বাছনি কৰক (ASSAMESE)',
    welcomeHeading: 'ZQ FEELINGS লৈ আপোনাক আন্তৰিক স্বাগতম।',
    welcomeLine1: 'ইয়াত পাব উৎসৱৰ শ্বায়ৰী, অনুভূতিৰ শ্বায়ৰী, ১২ মাহৰ বিশেষ দিন, নিজৰ শ্বায়ৰী লিখাৰ সঁজুলি আৰু ZQ Moments ফটো ষ্টেটাছ।',
    welcomeLine2: 'প্ৰতিটো অনুভূতি, প্ৰতিটো উৎসৱ আৰু প্ৰতিটো স্মৃতিৰ বাবে সুন্দৰ শ্বায়ৰী - সকলো একে ঠাইতে।',
    welcomeLine3: 'আপোনাৰ হৃদয়ৰ মাত শব্দ আৰু ছবিৰ মাজেৰে অনুভৱ কৰক।',
    btnFestival: 'উৎসৱৰ শ্বায়ৰী',
    btnFeeling: 'অনুভূতি শ্বায়ৰী',
    btnSpecialDays: '১২ মাহৰ বিশেষ দিন',
    btnWriteShayari: 'নিজৰ শ্বায়ৰী লিখক',
    btnZqMoments: 'ZQ মমেণ্টছ',
    btnHome: 'হোম',
    btnPasandida: 'পছন্দৰ',
    searchPlaceholder: 'বিচাৰক - আপোনাৰ শ্বায়ৰী সন্ধান কৰক',
    clickHere: 'ইয়াত ক্লিক কৰক',
    copyBtn: 'কপি কৰক',
    copiedBtn: 'কপি হ’ল!',
    whatsappBtn: 'হোৱাটছএপ'
  },
  arabic: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - صوت القلب: شعر وحالات وتهاني الأعياد في مكان واحد',
    selectLanguageLabel: 'اختر اللغة (ARABIC)',
    welcomeHeading: 'مرحباً بكم من القلب في ZQ FEELINGS.',
    welcomeLine1: 'ستجد هنا أشعار الأعياد، وأشعار المشاعر، والمناسبات الخاصة طوال العام، وأداة كتابة الشعر وحالات الصور في ZQ Moments.',
    welcomeLine2: 'قصيدة مثالية لكل شعور ولكل عيد ولكل ذكرى - كل شيء في مكان واحد.',
    welcomeLine3: 'اشعر بصوت قلبك من خلال الكلمات والصور.',
    btnFestival: 'أشعار الأعياد',
    btnFeeling: 'أشعار المشاعر',
    btnSpecialDays: 'مناسبات 12 شهراً',
    btnWriteShayari: 'اكتب شعرك',
    btnZqMoments: 'لحظات ZQ',
    btnHome: 'الرئيسية',
    btnPasandida: 'المفضلة',
    searchPlaceholder: 'ابحث عن قصيدتك أو حالتك...',
    clickHere: 'اضغط هنا',
    selectFestival: 'اختر المناسبة',
    selectFeelings: 'اختر الفئة',
    copyBtn: 'نسخ',
    copiedBtn: 'تم النسخ!',
    whatsappBtn: 'واتساب',
    downloadBtn: 'تحميل',
    noShayariFound: 'لم يتم العثور على نتائج',
    viewAllShayari: 'عرض الكل',
    searchResultsHeading: 'نتائج البحث',
    closeSearchBtn: 'إغلاق البحث'
  },
  spanish: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - Voz del Corazón: Poesía Shayari, Estados y Deseos Festivos',
    selectLanguageLabel: 'SELECCIONAR IDIOMA',
    welcomeHeading: 'Una cálida bienvenida de corazón a ZQ FEELINGS.',
    welcomeLine1: 'Aquí encontrarás Poesía de Festivales, Poesía de Sentimientos, Días Especiales de los 12 Meses, herramienta para escribir tu propio poema y estados con fotos en ZQ Moments.',
    welcomeLine2: 'Un poema perfecto para cada emoción, cada celebración y cada recuerdo, todo en un solo lugar.',
    welcomeLine3: 'Siente la voz de tu corazón en palabras e imágenes.',
    btnFestival: 'POESÍA DE FESTIVALES',
    btnFeeling: 'POESÍA DE SENTIMIENTOS',
    btnSpecialDays: 'DÍAS ESPECIALES 12 MESES',
    btnWriteShayari: 'ESCRIBE TU POEMA',
    btnZqMoments: 'ZQ MOMENTS',
    btnHome: 'Inicio',
    btnPasandida: 'Favoritos',
    searchPlaceholder: 'Buscar - Encuentra tu Shayari...',
    homeFestCardTitle: 'Deseos y Poesía Festiva',
    homeFestCardSub: 'Saludos especiales para 27 festivales',
    homeFeelCardTitle: 'Poesía de Sentimientos',
    homeFeelCardSub: 'Amor, Tristeza, Actitud y Amistad',
    clickHere: 'Haz clic aquí',
    home12MonthsTitle: 'Días Especiales de los 12 Meses',
    viewAllMonths: 'Ver todos los meses',
    festivalIntroTitle: 'Poesía Festiva - Deseos de Diwali, Holi, Eid y Año Nuevo',
    festivalIntroDesc: 'Encuentra versos escritos con el corazón y los mejores deseos para todas las fiestas.',
    selectFestival: 'Seleccionar Festival',
    allFestivals: 'Los 27 Festivales',
    goToFeelings: 'Ir a Sentimientos 💗',
    feelingsIntroTitle: 'Poesía de Sentimientos - Amor, Tristeza, Actitud, Amistad',
    feelingsIntroDesc: 'Ponle palabras a cada sentimiento: amor, nostalgia, alegría o fuerza.',
    selectFeelings: 'Seleccionar Categoría',
    allFeelings: 'Todos los Sentimientos',
    goToFestival: 'Ir a Festivales 🎉',
    loadMoreShayari: 'Mostrar más poemas',
    specialIntroTitle: 'Días Especiales de los 12 Meses - Todo el Año',
    specialIntroDesc: 'Versos y estados para cada día especial celebrado de enero a diciembre.',
    writeIntroTitle: 'Escribe Tu Poema - Expresa Tu Corazón',
    writeIntroDesc: 'Escribe tus propios versos y crea una tarjeta para tu estado en un clic.',
    momentsIntroTitle: 'ZQ Moments - Estados con Fotos',
    momentsIntroDesc: 'Explora momentos de amor y emoción en cuadrículas de hasta 9 fotos.',
    copyBtn: 'Copiar',
    copiedBtn: '¡Copiado!',
    whatsappBtn: 'WhatsApp',
    downloadBtn: 'Descargar',
    noShayariFound: 'No se encontraron poemas',
    viewAllShayari: 'Ver todos',
    searchResultsHeading: 'Resultados de búsqueda',
    closeSearchBtn: 'Cerrar búsqueda'
  },
  french: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - Voix du Cœur : Poésie Shayari, Statuts & Vœux de Fêtes',
    selectLanguageLabel: 'CHOISIR LA LANGUE',
    welcomeHeading: 'Bienvenue de tout cœur sur ZQ FEELINGS.',
    welcomeLine1: 'Retrouvez ici des poèmes de fêtes, des poèmes d’émotions, les journées spéciales des 12 mois, un outil d’écriture et les statuts photo ZQ Moments.',
    welcomeLine2: 'Un poème parfait pour chaque émotion, chaque fête et chaque souvenir — tout au même endroit.',
    welcomeLine3: 'Ressentez la voix de votre cœur à travers les mots et les images.',
    btnFestival: 'POÉSIE DE FÊTES',
    btnFeeling: 'POÉSIE D’ÉMOTIONS',
    btnSpecialDays: '12 MOIS JOURS SPÉCIAUX',
    btnWriteShayari: 'ÉCRIRE VOTRE POÈME',
    btnZqMoments: 'ZQ MOMENTS',
    btnHome: 'Accueil',
    btnPasandida: 'Favoris',
    searchPlaceholder: 'Rechercher - Trouvez votre Shayari...',
    clickHere: 'Cliquez ici',
    selectFestival: 'Choisir une fête',
    selectFeelings: 'Choisir une catégorie',
    festivalIntroTitle: 'Poésie de Fêtes - Vœux pour Diwali, Holi, Aïd & Nouvel An',
    festivalIntroDesc: 'Des vœux sincères et poétiques pour célébrer toutes les fêtes de l’année.',
    feelingsIntroTitle: 'Poésie d’Émotions - Amour, Tristesse, Attitude, Amitié',
    feelingsIntroDesc: 'Exprimez chaque sentiment avec le poème idéal.',
    specialIntroTitle: 'Journées Spéciales des 12 Mois',
    specialIntroDesc: 'Des poèmes et statuts pour chaque journée spéciale de janvier à décembre.',
    writeIntroTitle: 'Écrivez Votre Poème - Exprimez Votre Cœur',
    writeIntroDesc: 'Rédigez vos propres vers et créez une image de statut en un clic.',
    momentsIntroTitle: 'ZQ Moments - Statuts Photo',
    momentsIntroDesc: 'Découvrez des instants d’émotion et d’amour en grille photo.',
    copyBtn: 'Copier',
    copiedBtn: 'Copié !',
    whatsappBtn: 'WhatsApp',
    downloadBtn: 'Télécharger',
    noShayariFound: 'Aucun poème trouvé',
    viewAllShayari: 'Voir tout',
    searchResultsHeading: 'Résultats de recherche',
    closeSearchBtn: 'Fermer'
  },
  portuguese: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - Voz do Coração: Poesia Shayari, Status e Votos Festivos',
    selectLanguageLabel: 'SELECIONAR IDIOMA',
    welcomeHeading: 'Bem-vindo de coração ao ZQ FEELINGS.',
    welcomeLine1: 'Aqui você encontra Poesia Festiva, Poesia de Sentimentos, Dias Especiais dos 12 Meses, ferramenta para escrever seus versos e fotos de status no ZQ Moments.',
    welcomeLine2: 'Um poema perfeito para cada emoção, cada festa e cada lembrança — tudo em um só lugar.',
    welcomeLine3: 'Sinta a voz do seu coração em palavras e imagens.',
    btnFestival: 'POESIA FESTIVA',
    btnFeeling: 'POESIA DE SENTIMENTOS',
    btnSpecialDays: '12 MESES DIAS ESPECIAIS',
    btnWriteShayari: 'ESCREVA SEU POEMA',
    btnZqMoments: 'ZQ MOMENTS',
    btnHome: 'Início',
    btnPasandida: 'Favoritos',
    searchPlaceholder: 'Pesquisar - Encontre seu Shayari...',
    clickHere: 'Clique aqui',
    selectFestival: 'Selecionar Festival',
    selectFeelings: 'Selecionar Categoria',
    festivalIntroTitle: 'Poesia Festiva - Votos de Diwali, Holi, Eid e Ano Novo',
    festivalIntroDesc: 'Mensagens e poemas sinceros para todas as celebrações e festivais.',
    feelingsIntroTitle: 'Poesia de Sentimentos - Amor, Saudade, Atitude, Amizade',
    feelingsIntroDesc: 'Dê palavras a cada sentimento com versos únicos.',
    specialIntroTitle: 'Dias Especiais dos 12 Meses',
    specialIntroDesc: 'Poemas e status para todas as datas especiais de janeiro a dezembro.',
    writeIntroTitle: 'Escreva Seu Poema - Expresse Seu Coração',
    writeIntroDesc: 'Escreva seus versos e crie uma imagem de status em um clique.',
    momentsIntroTitle: 'ZQ Moments - Status de Fotos',
    momentsIntroDesc: 'Veja momentos de amor e emoção em grades de até 9 fotos.',
    copyBtn: 'Copiar',
    copiedBtn: 'Copiado!',
    whatsappBtn: 'WhatsApp',
    downloadBtn: 'Baixar',
    noShayariFound: 'Nenhum poema encontrado',
    viewAllShayari: 'Ver todos',
    searchResultsHeading: 'Resultados da pesquisa',
    closeSearchBtn: 'Fechar pesquisa'
  },
  indonesian: {
    ...DEFAULT_UI,
    headerTitle: 'ZQ - Suara Hati: Puisi Shayari, Status & Ucapan Hari Raya Lengkap',
    selectLanguageLabel: 'PILIH BAHASA',
    welcomeHeading: 'Selamat datang sepenuh hati di ZQ FEELINGS.',
    welcomeLine1: 'Temukan Shayari Hari Raya, Shayari Perasaan, Hari Spesial 12 Bulan, fitur menulis puisi sendiri, dan Status Foto indah di ZQ Moments.',
    welcomeLine2: 'Puisi sempurna untuk setiap perasaan, setiap perayaan, dan setiap kenangan — semuanya di satu tempat.',
    welcomeLine3: 'Rasakan suara hati Anda melalui kata-kata dan gambar.',
    btnFestival: 'SHAYARI HARI RAYA',
    btnFeeling: 'SHAYARI PERASAAN',
    btnSpecialDays: 'HARI SPESIAL 12 BULAN',
    btnWriteShayari: 'TULIS SHAYARI ANDA',
    btnZqMoments: 'ZQ MOMENTS',
    btnHome: 'Beranda',
    btnPasandida: 'Favorit',
    searchPlaceholder: 'Cari - Temukan Shayari Pilihan Anda...',
    clickHere: 'Klik di Sini',
    selectFestival: 'Pilih Hari Raya',
    selectFeelings: 'Pilih Kategori',
    festivalIntroTitle: 'Shayari Hari Raya - Ucapan Diwali, Holi, Idul Fitri & Tahun Baru',
    festivalIntroDesc: 'Kumpulan puisi tulus dan ucapan terbaik untuk setiap perayaan sepanjang tahun.',
    feelingsIntroTitle: 'Shayari Perasaan - Cinta, Sedih, Sikap, Persahabatan',
    feelingsIntroDesc: 'Ungkapkan setiap perasaan cinta, rindu, semangat, atau bahagia lewat kata-kata indah.',
    specialIntroTitle: 'Hari Spesial 12 Bulan - Sepanjang Tahun',
    specialIntroDesc: 'Ucapan dan status terbaik untuk setiap hari penting dari Januari hingga Desember.',
    writeIntroTitle: 'Tulis Shayari Anda - Ungkapkan Isi Hati',
    writeIntroDesc: 'Tulis kata-kata hati Anda di sini dan buat gambar status hanya dengan satu klik.',
    momentsIntroTitle: 'ZQ Moments - Status Foto Shayari',
    momentsIntroDesc: 'Gambar berbicara lebih banyak daripada kata-kata. Lihat momen penuh makna dalam grid 9 foto.',
    copyBtn: 'Salin',
    copiedBtn: 'Tersalin!',
    whatsappBtn: 'WhatsApp',
    downloadBtn: 'Unduh',
    noShayariFound: 'Shayari tidak ditemukan',
    viewAllShayari: 'Lihat Semua Shayari',
    searchResultsHeading: 'Hasil Pencarian',
    closeSearchBtn: 'Tutup Pencarian'
  },
  german: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'SPRACHE WÄHLEN (DEUTSCH)',
    welcomeHeading: 'Herzlich willkommen bei ZQ FEELINGS!',
    btnFestival: 'FESTTAGSGEDICHTE',
    btnFeeling: 'GEFÜHLSGEDICHTE',
    btnSpecialDays: '12 MONATE BESONDERE TAGE',
    btnWriteShayari: 'GEDICHT SCHREIBEN',
    btnHome: 'Startseite',
    btnPasandida: 'Favoriten',
    searchPlaceholder: 'Suchen - Shayari finden...',
    copyBtn: 'Kopieren',
    copiedBtn: 'Kopiert!',
    downloadBtn: 'Herunterladen',
    noShayariFound: 'Keine Ergebnisse gefunden',
    searchResultsHeading: 'Suchergebnisse',
    closeSearchBtn: 'Suche schließen'
  },
  italian: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'SELEZIONA LINGUA (ITALIANO)',
    welcomeHeading: 'Benvenuti di cuore su ZQ FEELINGS!',
    btnFestival: 'POESIE DELLE FESTE',
    btnFeeling: 'POESIE DEI SENTIMENTI',
    btnSpecialDays: '12 MESI GIORNI SPECIALI',
    btnWriteShayari: 'SCRIVI LA TUA POESIA',
    btnHome: 'Home',
    btnPasandida: 'Preferiti',
    searchPlaceholder: 'Cerca - Trova la tua poesia...',
    copyBtn: 'Copia',
    copiedBtn: 'Copiato!',
    downloadBtn: 'Scarica',
    noShayariFound: 'Nessuna poesia trovata',
    searchResultsHeading: 'Risultati di ricerca',
    closeSearchBtn: 'Chiudi ricerca'
  },
  japanese: {
    ...DEFAULT_UI,
    selectLanguageLabel: '言語を選択 (日本語)',
    welcomeHeading: 'ZQ FEELINGSへ心よりようこそ！',
    btnFestival: 'お祝いの詩',
    btnFeeling: '想いの詩',
    btnSpecialDays: '12ヶ月の特別な日',
    btnWriteShayari: '詩を書く',
    btnHome: 'ホーム',
    btnPasandida: 'お気に入り',
    searchPlaceholder: '検索 - 詩を探す...',
    copyBtn: 'コピー',
    copiedBtn: 'コピー完了！',
    downloadBtn: 'ダウンロード',
    noShayariFound: '詩が見つかりません',
    searchResultsHeading: '検索結果',
    closeSearchBtn: '閉じる'
  },
  korean: {
    ...DEFAULT_UI,
    selectLanguageLabel: '언어 선택 (한국어)',
    welcomeHeading: 'ZQ FEELINGS에 진심으로 환영합니다!',
    btnFestival: '축제 시 모음',
    btnFeeling: '감성 시 모음',
    btnSpecialDays: '12개월 특별한 날',
    btnWriteShayari: '나만의 시 쓰기',
    btnHome: '홈',
    btnPasandida: '즐겨찾기',
    searchPlaceholder: '검색 - 시 찾기...',
    copyBtn: '복사',
    copiedBtn: '복사됨!',
    downloadBtn: '다운로드',
    noShayariFound: '검색 결과가 없습니다',
    searchResultsHeading: '검색 결과',
    closeSearchBtn: '닫기'
  },
  thai: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'เลือกภาษา (ไทย)',
    welcomeHeading: 'ยินดีต้อนรับสู่ ZQ FEELINGS ด้วยความจริงใจ!',
    btnFestival: 'กลอนเทศกาล',
    btnFeeling: 'กลอนความรู้สึก',
    btnSpecialDays: 'วันพิเศษ 12 เดือน',
    btnWriteShayari: 'เขียนกลอนของคุณ',
    btnHome: 'หน้าแรก',
    btnPasandida: 'รายการโปรด',
    searchPlaceholder: 'ค้นหา - ค้นหากลอนของคุณ...',
    copyBtn: 'คัดลอก',
    copiedBtn: 'คัดลอกแล้ว!',
    downloadBtn: 'ดาวน์โหลด',
    noShayariFound: 'ไม่พบบทกลอน',
    searchResultsHeading: 'ผลการค้นหา',
    closeSearchBtn: 'ปิดการค้นหา'
  },
  tagalog: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'PUMILI NG WIKA (TAGALOG)',
    welcomeHeading: 'Taos-pusong pagbati sa ZQ FEELINGS!',
    btnFestival: 'TULA SA PAGDIRIWANG',
    btnFeeling: 'TULA NG DAMDAMIN',
    btnSpecialDays: '12 BUWAN ESPESYAL NA ARAW',
    btnWriteShayari: 'ISULAT ANG IYONG TULA',
    btnHome: 'Home',
    btnPasandida: 'Paborito',
    searchPlaceholder: 'Maghanap ng Shayari...',
    copyBtn: 'Kopyahin',
    copiedBtn: 'Nakopya na!',
    downloadBtn: 'I-download',
    noShayariFound: 'Walang nahanap na tula',
    searchResultsHeading: 'Resulta ng Paghahanap',
    closeSearchBtn: 'Isara'
  },
  russian: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'ВЫБЕРИТЕ ЯЗЫК (РУССКИЙ)',
    welcomeHeading: 'Сердечно добро пожаловать в ZQ FEELINGS!',
    btnFestival: 'ПРАЗДНИЧНЫЕ СТИХИ',
    btnFeeling: 'СТИХИ О ЧУВСТВАХ',
    btnSpecialDays: '12 МЕСЯЦЕВ ОСОБЫХ ДНЕЙ',
    btnWriteShayari: 'НАПИСАТЬ СТИХ',
    btnHome: 'Главная',
    btnPasandida: 'Избранное',
    searchPlaceholder: 'Поиск стихов...',
    copyBtn: 'Копировать',
    copiedBtn: 'Скопировано!',
    downloadBtn: 'Скачать',
    noShayariFound: 'Стихи не найдены',
    searchResultsHeading: 'Результаты поиска',
    closeSearchBtn: 'Закрыть'
  },
  chinese: {
    ...DEFAULT_UI,
    selectLanguageLabel: '选择语言 (简体中文)',
    welcomeHeading: '衷心欢迎来到 ZQ FEELINGS！',
    btnFestival: '节日祝福诗',
    btnFeeling: '情感诗集',
    btnSpecialDays: '12个月特别纪念日',
    btnWriteShayari: '创作诗歌',
    btnHome: '首页',
    btnPasandida: '收藏',
    searchPlaceholder: '搜索诗歌与祝福...',
    copyBtn: '复制',
    copiedBtn: '已复制！',
    downloadBtn: '下载',
    noShayariFound: '未找到相关诗歌',
    searchResultsHeading: '搜索结果',
    closeSearchBtn: '关闭搜索'
  },
  turkish: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'DİL SEÇİN (TÜRKÇE)',
    welcomeHeading: 'ZQ FEELINGS’e gönülden hoş geldiniz!',
    btnFestival: 'BAYRAM ŞİİRLERİ',
    btnFeeling: 'DUYGU ŞİİRLERİ',
    btnSpecialDays: '12 AY ÖZEL GÜNLER',
    btnWriteShayari: 'ŞİİRİNİ YAZ',
    btnHome: 'Ana Sayfa',
    btnPasandida: 'Favoriler',
    searchPlaceholder: 'Ara - Şiir bul...',
    copyBtn: 'Kopyala',
    copiedBtn: 'Kopyalandı!',
    downloadBtn: 'İndir',
    noShayariFound: 'Şiir bulunamadı',
    searchResultsHeading: 'Arama Sonuçları',
    closeSearchBtn: 'Kapat'
  },
  vietnamese: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'CHỌN NGÔN NGỮ (TIẾNG VIỆT)',
    welcomeHeading: 'Chào mừng nồng nhiệt đến với ZQ FEELINGS!',
    btnFestival: 'THƠ LỄ HỘI',
    btnFeeling: 'THƠ CẢM XÚC',
    btnSpecialDays: '12 THÁNG NGÀY ĐẶC BIỆT',
    btnWriteShayari: 'VIẾT THƠ CỦA BẠN',
    btnHome: 'Trang chủ',
    btnPasandida: 'Yêu thích',
    searchPlaceholder: 'Tìm kiếm bài thơ...',
    copyBtn: 'Sao chép',
    copiedBtn: 'Đã sao chép!',
    downloadBtn: 'Tải xuống',
    noShayariFound: 'Không tìm thấy bài thơ',
    searchResultsHeading: 'Kết quả tìm kiếm',
    closeSearchBtn: 'Đóng'
  },
  dutch: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'TAAL KIEZEN (NEDERLANDS)',
    welcomeHeading: 'Van harte welkom bij ZQ FEELINGS!',
    btnFestival: 'FEESTGEDICHTEN',
    btnFeeling: 'GEVOELSGEDICHTEN',
    btnSpecialDays: '12 MAANDEN SPECIALE DAGEN',
    btnWriteShayari: 'SCHRIJF JE GEDICHT',
    btnHome: 'Home',
    btnPasandida: 'Favorieten',
    searchPlaceholder: 'Zoeken - Vind jouw Shayari...',
    copyBtn: 'Kopiëren',
    copiedBtn: 'Gekopieerd!',
    downloadBtn: 'Downloaden',
    noShayariFound: 'Geen gedichten gevonden',
    searchResultsHeading: 'Zoekresultaten',
    closeSearchBtn: 'Sluiten'
  },
  polish: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'WYBIERZ JĘZYK (POLSKI)',
    welcomeHeading: 'Serdecznie witamy w ZQ FEELINGS!',
    btnFestival: 'WIERSZE ŚWIĄTECZNE',
    btnFeeling: 'WIERSZE O UCZUCIACH',
    btnSpecialDays: '12 MIESIĘCY WYJĄTKOWYCH DNI',
    btnWriteShayari: 'NAPISZ SWÓJ WIERSZ',
    btnHome: 'Strona główna',
    btnPasandida: 'Ulubione',
    searchPlaceholder: 'Szukaj wierszy...',
    copyBtn: 'Kopiuj',
    copiedBtn: 'Skopiowano!',
    downloadBtn: 'Pobierz',
    noShayariFound: 'Nie znaleziono wierszy',
    searchResultsHeading: 'Wyniki wyszukiwania',
    closeSearchBtn: 'Zamknij'
  },
  persian: {
    ...DEFAULT_UI,
    selectLanguageLabel: 'انتخاب زبان (فارسی)',
    welcomeHeading: 'به ZQ FEELINGS از صمیم قلب خوش آمدید!',
    btnFestival: 'اشعار جشن‌ها',
    btnFeeling: 'اشعار احساسی',
    btnSpecialDays: 'روزهای خاص ۱۲ ماه',
    btnWriteShayari: 'شعر خود را بنویسید',
    btnHome: 'خانه',
    btnPasandida: 'برگزیده‌ها',
    searchPlaceholder: 'جستجو - شعر خود را بیابید...',
    copyBtn: 'کپی',
    copiedBtn: 'کپی شد!',
    whatsappBtn: 'واتساپ',
    downloadBtn: 'دانلود',
    noShayariFound: 'شعری یافت نشد',
    searchResultsHeading: 'نتایج جستجو',
    closeSearchBtn: 'بستن جستجو'
  }
};

// ============================================================================
// AUTHENTIC RAJASTHANI & HARYANVI POETIC DIALECT CONVERTERS (0ms Instant)
// ============================================================================

const RAJASTHANI_REPLACEMENTS: Array<[RegExp, string]> = [
  [/मुझे/g, 'म्हनै'],
  [/मुझको/g, 'म्हनै'],
  [/तुझे/g, 'थनै'],
  [/तुझको/g, 'थनै'],
  [/तुम्हें/g, 'थनै'],
  [/तुम्हारा/g, 'थारो'],
  [/तुम्हारी/g, 'थारी'],
  [/तुम्हारे/g, 'थारा'],
  [/आपका/g, 'आपरौ'],
  [/आपकी/g, 'आपरी'],
  [/आपके/g, 'आपरा'],
  [/हमारा/g, 'म्हारो'],
  [/हमारी/g, 'म्हारी'],
  [/हमारे/g, 'म्हारा'],
  [/मेरा/g, 'म्हारो'],
  [/मेरी/g, 'म्हारी'],
  [/मेरे/g, 'म्हारा'],
  [/तेरा/g, 'थारो'],
  [/तेरी/g, 'थारी'],
  [/तेरे/g, 'थारा'],
  [/अपना/g, 'आपणो'],
  [/अपनी/g, 'आपणी'],
  [/अपने/g, 'आपणा'],
  [/दिल/g, 'हिवड़ो'],
  [/प्यार/g, 'प्रीत'],
  [/मोहब्बत/g, 'हेत'],
  [/यादें/g, 'ओळूं'],
  [/यादों/g, 'ओळूं'],
  [/नहीं/g, 'कोनी'],
  [/बहुत/g, 'घणो'],
  [/ज्यादा/g, 'घणो'],
  [/ज़्यादा/g, 'घणो'],
  [/यहाँ/g, 'अठै'],
  [/वहाँ/g, 'उठै'],
  [/कहाँ/g, 'कठै'],
  [/क्यों/g, 'क्यूं'],
  [/कैसे/g, 'कियां'],
  [/(^|\s)में(?=\s|[।,!?.]|$)/g, '$1मायने'],
  [/(^|\s)से(?=\s|[।,!?.]|$)/g, '$1सूं'],
  [/(^|\s)की(?=\s|[।,!?.]|$)/g, '$1री'],
  [/(^|\s)का(?=\s|[।,!?.]|$)/g, '$1रो'],
  [/(^|\s)के(?=\s|[।,!?.]|$)/g, '$1रा'],
  [/(^|\s)पर(?=\s|[।,!?.]|$)/g, '$1माथे'],
  [/(^|\s)भी(?=\s|[।,!?.]|$)/g, '$1बी'],
  [/(^|\s)हम(?=\s|[।,!?.]|$)/g, '$1म्हे'],
  [/(^|\s)तुम(?=\s|[।,!?.]|$)/g, '$1थे'],
  [/(^|\s)तू(?=\s|[।,!?.]|$)/g, '$1थूं'],
  [/(^|\s)था(?=\s|[।,!?.]|$)/g, '$1हतो'],
  [/(^|\s)थी(?=\s|[।,!?.]|$)/g, '$1हती'],
  [/(^|\s)थे(?=\s|[।,!?.]|$)/g, '$1हता'],
  [/(^|\s)है(?=\s|[।,!?.]|$)/g, '$1छै'],
  [/(^|\s)हैं(?=\s|[।,!?.]|$)/g, '$1छै']
];

const HARYANVI_REPLACEMENTS: Array<[RegExp, string]> = [
  [/मुझे/g, 'मन्नै'],
  [/मुझको/g, 'मन्नै'],
  [/तुझे/g, 'तन्नै'],
  [/तुझको/g, 'तन्नै'],
  [/तुम्हें/g, 'तन्नै'],
  [/हमें/g, 'हामनै'],
  [/उसे/g, 'उसनै'],
  [/उसको/g, 'उसनै'],
  [/तुम्हारा/g, 'थारा'],
  [/तुम्हारी/g, 'थारी'],
  [/तुम्हारे/g, 'थारे'],
  [/आपका/g, 'थारा'],
  [/आपकी/g, 'थारी'],
  [/आपके/g, 'थारे'],
  [/हमारा/g, 'म्हारा'],
  [/हमारी/g, 'म्हारी'],
  [/हमारे/g, 'म्हारे'],
  [/मेरा/g, 'म्हारा'],
  [/मेरी/g, 'म्हारी'],
  [/मेरे/g, 'म्हारे'],
  [/अपना/g, 'आपणा'],
  [/अपनी/g, 'आपणी'],
  [/अपने/g, 'आपणे'],
  [/नहीं/g, 'कोनी'],
  [/बहुत/g, 'घणा'],
  [/ज्यादा/g, 'घणा'],
  [/ज़्यादा/g, 'घणा'],
  [/यहाँ/g, 'उरै'],
  [/वहाँ/g, 'उड़ै'],
  [/कहाँ/g, 'कड़ै'],
  [/कैसे/g, 'क्यूकर'],
  [/दोस्त/g, 'यार'],
  [/(^|\s)में(?=\s|[।,!?.]|$)/g, '$1म्ह'],
  [/(^|\s)से(?=\s|[।,!?.]|$)/g, '$1तै'],
  [/(^|\s)को(?=\s|[।,!?.]|$)/g, '$1नै'],
  [/(^|\s)भी(?=\s|[।,!?.]|$)/g, '$1बी'],
  [/(^|\s)हम(?=\s|[।,!?.]|$)/g, '$1हाम'],
  [/(^|\s)तुम(?=\s|[।,!?.]|$)/g, '$1तम'],
  [/(^|\s)हूँ(?=\s|[।,!?.]|$)/g, '$1सूं'],
  [/(^|\s)हैं(?=\s|[।,!?.]|$)/g, '$1सैं'],
  [/(^|\s)है(?=\s|[।,!?.]|$)/g, '$1सै']
];

export function convertHindiToRajasthani(text: string): string {
  let out = text;
  for (const [pattern, replacement] of RAJASTHANI_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

export function convertHindiToHaryanvi(text: string): string {
  let out = text;
  for (const [pattern, replacement] of HARYANVI_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

// ============================================================================
// DYNAMIC BATCH TRANSLATION ENGINE + PERSISTENT CACHE (FOR ALL 22 LANGUAGES)
// ============================================================================

const memoryTranslationCache = new Map<string, string>();
const hydratedLangCaches = new Set<string>();
const pendingPersistTimers = new Map<string, number>();

function getStorageCacheKey(apiCode: string): string {
  return `zq_tr_cache_v1_${apiCode}`;
}

function ensureHydratedLanguageCache(apiCode: string): void {
  if (hydratedLangCaches.has(apiCode) || typeof window === 'undefined') return;
  hydratedLangCaches.add(apiCode);
  try {
    const raw = window.localStorage.getItem(getStorageCacheKey(apiCode));
    if (!raw) return;
    const parsed = JSON.parse(raw) as Record<string, string>;
    for (const [k, v] of Object.entries(parsed)) {
      if (typeof v === 'string') {
        memoryTranslationCache.set(`${apiCode}::${k}`, v);
      }
    }
  } catch {
    // ignore storage errors
  }
}

function schedulePersistLanguageCache(apiCode: string): void {
  if (typeof window === 'undefined') return;
  const existing = pendingPersistTimers.get(apiCode);
  if (existing !== undefined) {
    window.clearTimeout(existing);
  }
  const timer = window.setTimeout(() => {
    pendingPersistTimers.delete(apiCode);
    try {
      const prefix = `${apiCode}::`;
      const obj: Record<string, string> = {};
      let count = 0;
      for (const [fullKey, val] of memoryTranslationCache.entries()) {
        if (fullKey.startsWith(prefix)) {
          obj[fullKey.slice(prefix.length)] = val;
          count++;
          if (count >= 450) break;
        }
      }
      window.localStorage.setItem(getStorageCacheKey(apiCode), JSON.stringify(obj));
    } catch {
      // ignore quota exceeded
    }
  }, 600);
  pendingPersistTimers.set(apiCode, timer);
}

const DEVANAGARI_CONSONANTS: Record<string, string> = {
  क: 'k', ख: 'kh', ग: 'g', घ: 'gh', ङ: 'ng',
  च: 'ch', छ: 'chh', ज: 'j', झ: 'jh', ञ: 'ny',
  ट: 't', ठ: 'th', ड: 'd', ढ: 'dh', ण: 'n',
  त: 't', थ: 'th', द: 'd', ध: 'dh', न: 'n',
  प: 'p', फ: 'ph', ब: 'b', भ: 'bh', म: 'm',
  य: 'y', र: 'r', ल: 'l', व: 'v',
  श: 'sh', ष: 'sh', स: 's', ह: 'h',
  ळ: 'l', क़: 'q', ख़: 'kh', ग़: 'gh', ज़: 'z', ड़: 'r', ढ़: 'rh', फ़: 'f'
};

const DEVANAGARI_VOWELS: Record<string, string> = {
  अ: 'a', आ: 'aa', इ: 'i', ई: 'ee', उ: 'u', ऊ: 'oo',
  ऋ: 'ri', ए: 'e', ऐ: 'ai', ओ: 'o', औ: 'au', ऑ: 'o'
};

const DEVANAGARI_MATRAS: Record<string, string> = {
  'ा': 'a', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo',
  'ृ': 'ri', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ॉ': 'o'
};

const HINGLISH_WORD_OVERRIDES: Record<string, string> = {
  'प्यार': 'Pyar',
  'शायरी': 'Shayari',
  'शायरियाँ': 'Shayariyan',
  'मोहब्बत': 'Mohabbat',
  'इश्क़': 'Ishq',
  'इश्क': 'Ishq',
  'दर्द': 'Dard',
  'दिल': 'Dil',
  'ज़िंदगी': 'Zindagi',
  'जिंदगी': 'Zindagi',
  'दोस्ती': 'Dosti',
  'याद': 'Yaad',
  'यादें': 'Yaadein',
  'यादों': 'Yaadon',
  'खुशी': 'Khushi',
  'खुशियाँ': 'Khushiyan',
  'तन्हाई': 'Tanhai',
  'जुदाई': 'Judai',
  'किस्मत': 'Kismat',
  'त्यौहार': 'Tyohar',
  'दीपावली': 'Diwali',
  'दिवाली': 'Diwali',
  'होली': 'Holi',
  'मुस्कान': 'Muskaan',
  'आँखें': 'Aankhein',
  'आँखों': 'Aankhon',
  'है': 'hai',
  'हैं': 'hain',
  'हूँ': 'hoon',
  'था': 'tha',
  'थी': 'thi',
  'थे': 'the',
  'में': 'mein',
  'मैं': 'main',
  'नहीं': 'nahi',
  'और': 'aur',
  'के': 'ke',
  'की': 'ki',
  'का': 'ka',
  'को': 'ko',
  'से': 'se',
  'पर': 'par',
  'तेरा': 'tera',
  'तेरी': 'teri',
  'तेरे': 'tere',
  'मेरा': 'mera',
  'मेरी': 'meri',
  'मेरे': 'mere',
  'तुम': 'tum',
  'हम': 'hum'
};

export function convertHindiToHinglish(text: string): string {
  if (!/[\u0900-\u097F]/.test(text)) {
    return text;
  }

  return text
    .split(/(\s+|[।,!?.:;()"'—–-])/g)
    .map((token) => {
      if (!token || !/[\u0900-\u097F]/.test(token)) {
        if (token === '।') return '.';
        return token;
      }
      if (HINGLISH_WORD_OVERRIDES[token]) {
        return HINGLISH_WORD_OVERRIDES[token];
      }

      const normalized = token
        .replace(/क़/g, 'क\u093C')
        .normalize('NFC');
      const chars = Array.from(normalized);
      let out = '';

      for (let i = 0; i < chars.length; i++) {
        const ch = chars[i];
        const next = chars[i + 1] || '';

        if (ch === '\u093C') continue;
        const pair = next === '\u093C' ? ch + next : ch;
        if (pair.length === 2) i++;
        const after = chars[i + 1] || '';

        if (DEVANAGARI_VOWELS[pair]) {
          out += DEVANAGARI_VOWELS[pair];
        } else if (DEVANAGARI_CONSONANTS[pair]) {
          out += DEVANAGARI_CONSONANTS[pair];
          if (after === '्') {
            i++;
          } else if (DEVANAGARI_MATRAS[after]) {
            out += DEVANAGARI_MATRAS[after];
            i++;
          } else if (i < chars.length - 1) {
            out += 'a';
          }
        } else if (DEVANAGARI_MATRAS[pair]) {
          out += DEVANAGARI_MATRAS[pair];
        } else if (pair === 'ं' || pair === 'ँ') {
          out += 'n';
        } else if (pair === 'ः') {
          out += 'h';
        } else if (pair >= '०' && pair <= '९') {
          out += String(pair.charCodeAt(0) - 0x0966);
        } else if (pair !== '्') {
          out += pair;
        }
      }

      return out;
    })
    .join('');
}

function resolveUpstreamGtxCode(apiCode: string): string {
  if (apiCode === 'en-US' || apiCode === 'en-GB') return 'en';
  if (apiCode === 'bgc' || apiCode === 'hi-Latn' || apiCode === 'raj' || apiCode === 'hne' || apiCode === 'awa') return 'hi';
  if (apiCode === 'kok') return 'gom';
  if (apiCode === 'mni') return 'mni-Mtei';
  if (apiCode === 'mag') return 'bho';
  if (apiCode === 'tcy') return 'kn';
  if (apiCode === 'brx') return 'as';
  return apiCode;
}

export function getSyncTranslation(
  sourceHindiOrText: string,
  sourceEnglishFallback: string | undefined,
  langId: GlobalLanguageId
): string | null {
  const cleanSource = sourceHindiOrText.trim();
  if (!cleanSource) return sourceHindiOrText;

  if (langId === 'default' || langId === 'hinglish') {
    return convertHindiToHinglish(sourceHindiOrText);
  }
  if (langId === 'hindi') {
    return sourceHindiOrText;
  }
  if (langId === 'english' || langId === 'english-uk') {
    if (sourceEnglishFallback && sourceEnglishFallback.trim()) {
      return sourceEnglishFallback;
    }
  }
  if (langId === 'haryanvi') {
    return convertHindiToHaryanvi(sourceHindiOrText);
  }

  const langMeta = GLOBAL_LANGUAGES.find((l) => l.id === langId);
  if (!langMeta) return sourceHindiOrText;

  ensureHydratedLanguageCache(langMeta.apiCode);
  const cached = memoryTranslationCache.get(`${langMeta.apiCode}::${cleanSource}`);
  return cached ?? null;
}

interface PendingBatchEntry {
  resolvers: Array<(val: string) => void>;
}

const batchQueues = new Map<string, Map<string, PendingBatchEntry>>();
const batchTimers = new Map<string, number>();

async function fetchDirectClientGtx(text: string, apiCode: string): Promise<string> {
  const upstreamLang = resolveUpstreamGtxCode(apiCode);
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${encodeURIComponent(
    upstreamLang
  )}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Client GTX failed');
  const data = (await res.json()) as unknown;
  if (Array.isArray(data) && Array.isArray(data[0])) {
    return (data[0] as unknown[])
      .map((seg) => (Array.isArray(seg) && typeof seg[0] === 'string' ? seg[0] : ''))
      .join('');
  }
  return text;
}

const STATIC_ONLY_HOST_SUFFIXES = [
  '.pages.dev',
  '.netlify.app',
  '.github.io',
  '.web.app',
  '.firebaseapp.com'
];

let serverTranslateEndpointAvailable: boolean | null = null;

function shouldTryServerTranslateEndpoint(): boolean {
  if (serverTranslateEndpointAvailable !== null) {
    return serverTranslateEndpointAvailable;
  }
  if (typeof window !== 'undefined') {
    const host = (window.location?.hostname || '').toLowerCase();
    if (STATIC_ONLY_HOST_SUFFIXES.some((s) => host.endsWith(s))) {
      serverTranslateEndpointAvailable = false;
      return false;
    }
    try {
      if (window.sessionStorage.getItem('zq_static_translate_mode') === '1') {
        serverTranslateEndpointAvailable = false;
        return false;
      }
    } catch {
      // Ignore storage access errors in private browsing
    }
  }
  return true;
}

function markServerTranslateUnavailable(): void {
  serverTranslateEndpointAvailable = false;
  if (typeof window !== 'undefined') {
    try {
      window.sessionStorage.setItem('zq_static_translate_mode', '1');
    } catch {
      // Ignore storage access errors
    }
  }
}

async function flushTranslationQueue(apiCode: string): Promise<void> {
  batchTimers.delete(apiCode);
  const queueMap = batchQueues.get(apiCode);
  if (!queueMap || queueMap.size === 0) return;
  batchQueues.delete(apiCode);

  const entries = Array.from(queueMap.entries());
  const CHUNK_SIZE = 24;

  for (let i = 0; i < entries.length; i += CHUNK_SIZE) {
    const chunk = entries.slice(i, i + CHUNK_SIZE);
    const texts = chunk.map(([src]) => src);
    let translatedList: string[] | null = null;

    if (shouldTryServerTranslateEndpoint()) {
      try {
        const response = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            texts,
            targetLang: apiCode,
            sourceLang: 'auto'
          })
        });
        const contentType = response.headers.get('content-type') || '';
        if (response.ok && contentType.includes('application/json')) {
          const payload = (await response.json()) as { translations?: string[] };
          if (Array.isArray(payload.translations) && payload.translations.length === texts.length) {
            serverTranslateEndpointAvailable = true;
            translatedList = payload.translations;
          }
        } else if (
          response.status === 404 ||
          response.status === 405 ||
          !contentType.includes('application/json')
        ) {
          markServerTranslateUnavailable();
        }
      } catch {
        markServerTranslateUnavailable();
      }
    }

    if (!translatedList) {
      translatedList = await Promise.all(
        texts.map(async (txt) => {
          try {
            return await fetchDirectClientGtx(txt, apiCode);
          } catch {
            return txt;
          }
        })
      );
    }

    for (let idx = 0; idx < chunk.length; idx++) {
      const [src, entry] = chunk[idx];
      const resultText = translatedList[idx] || src;
      memoryTranslationCache.set(`${apiCode}::${src}`, resultText);
      for (const resolve of entry.resolvers) {
        resolve(resultText);
      }
    }
    schedulePersistLanguageCache(apiCode);
  }
}

export function requestDynamicTranslation(
  sourceText: string,
  langId: GlobalLanguageId,
  englishFallback?: string
): Promise<string> {
  const syncVal = getSyncTranslation(sourceText, englishFallback, langId);
  if (syncVal !== null) {
    return Promise.resolve(syncVal);
  }

  const cleanSource = sourceText.trim();
  const langMeta = GLOBAL_LANGUAGES.find((l) => l.id === langId);
  if (!langMeta || !cleanSource) {
    return Promise.resolve(sourceText);
  }

  const apiCode = langMeta.apiCode;
  let queueForLang = batchQueues.get(apiCode);
  if (!queueForLang) {
    queueForLang = new Map<string, PendingBatchEntry>();
    batchQueues.set(apiCode, queueForLang);
  }

  return new Promise<string>((resolve) => {
    const existing = queueForLang!.get(cleanSource);
    if (existing) {
      existing.resolvers.push(resolve);
    } else {
      queueForLang!.set(cleanSource, { resolvers: [resolve] });
    }

    if (!batchTimers.has(apiCode) && typeof window !== 'undefined') {
      const timerId = window.setTimeout(() => {
        void flushTranslationQueue(apiCode);
      }, 30);
      batchTimers.set(apiCode, timerId);
    }
  });
}
