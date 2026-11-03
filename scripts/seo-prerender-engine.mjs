// Zero-dependency Universal SEO Metadata & Static HTML Pre-Render Engine
// Configured for https://dil-ki-awaaz.vercel.app (and custom domains if attached later).
// Shared by Express SSR (`server.ts`) and Static Post-Build Pre-Renderer (`scripts/postbuild-seo.mjs`).

export const SITE_BRAND = 'ZQ FEELINGS';
export const DEFAULT_PRODUCTION_ORIGIN = 'https://dil-ki-awaaz.vercel.app';

export function isPreviewHostname(hostname) {
  if (!hostname || typeof hostname !== 'string') return false;
  const clean = hostname.trim().split(':')[0].toLowerCase();
  if (!clean || clean === 'dil-ki-awaaz.vercel.app') return false;
  if (clean.endsWith('.vercel.app') && (clean.includes('-git-') || clean.endsWith('-projects.vercel.app'))) {
    return true;
  }
  if (clean.endsWith('.netlify.app') && clean.startsWith('deploy-preview-')) {
    return true;
  }
  return false;
}

export function normalizeCustomOrigin(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const trimmed = raw.trim().replace(/\/+$/, '');
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
    const cleanHost = parsed.hostname.toLowerCase().replace(/^www\./, '');
    if (
      !cleanHost ||
      cleanHost === 'localhost' ||
      cleanHost === '127.0.0.1' ||
      cleanHost.endsWith('.run.app') ||
      isPreviewHostname(cleanHost)
    ) {
      return null;
    }
    return `https://${cleanHost}`;
  } catch {
    return null;
  }
}

function clampSeoTitle(primary, fallbackShort, ultraShort) {
  if (primary.length <= 60) return primary;
  if (fallbackShort.length <= 60) return fallbackShort;
  return (ultraShort || fallbackShort).slice(0, 60);
}

function buildPaginatedCleanPath(baseCanonicalPath, page) {
  if (!page || page <= 1) return baseCanonicalPath;
  if (baseCanonicalPath === '/') return `/page/${page}`;
  return `${baseCanonicalPath.replace(/\/+$/, '')}/page/${page}`;
}

function escapeHtml(raw) {
  return String(raw)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export const SSR_VALENTINE_LANGS = [
  { code: 'hi', hreflang: 'hi', slug: 'hindi', isoPrefix: 'hi', englishName: 'Hindi', nativeLabel: 'हिंदी' },
  { code: 'hi-Latn', hreflang: 'hi-Latn', slug: 'hinglish', isoPrefix: 'hi-latn', englishName: 'Hinglish', nativeLabel: 'Hinglish' },
  { code: 'ta', hreflang: 'ta', slug: 'tamil', isoPrefix: 'ta', englishName: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'te', hreflang: 'te', slug: 'telugu', isoPrefix: 'te', englishName: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'kn', hreflang: 'kn', slug: 'kannada', isoPrefix: 'kn', englishName: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'ml', hreflang: 'ml', slug: 'malayalam', isoPrefix: 'ml', englishName: 'Malayalam', nativeLabel: 'മലയാളം' },
  { code: 'mr', hreflang: 'mr', slug: 'marathi', isoPrefix: 'mr', englishName: 'Marathi', nativeLabel: 'मराठी' },
  { code: 'gu', hreflang: 'gu', slug: 'gujarati', isoPrefix: 'gu', englishName: 'Gujarati', nativeLabel: 'ગુજરાતી' },
  { code: 'bn', hreflang: 'bn', slug: 'bengali', isoPrefix: 'bn', englishName: 'Bengali', nativeLabel: 'বাংলা' },
  { code: 'pa', hreflang: 'pa', slug: 'punjabi', isoPrefix: 'pa', englishName: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
  { code: 'or', hreflang: 'or', slug: 'odia', isoPrefix: 'or', englishName: 'Odia', nativeLabel: 'ଓଡ଼ିଆ' },
  { code: 'as', hreflang: 'as', slug: 'assamese', isoPrefix: 'as', englishName: 'Assamese', nativeLabel: 'অসমীয়া' },
  { code: 'ur', hreflang: 'ur', slug: 'urdu', isoPrefix: 'ur', englishName: 'Urdu', nativeLabel: 'اردو' },
  { code: 'bho', hreflang: 'bho', slug: 'bhojpuri', isoPrefix: 'bho', englishName: 'Bhojpuri', nativeLabel: 'भोजपुरी' },
  { code: 'bgc', hreflang: 'bgc', slug: 'haryanvi', isoPrefix: 'bgc', englishName: 'Haryanvi', nativeLabel: 'हरियाणवी' },
  { code: 'en-US', hreflang: 'en-US', slug: 'english', isoPrefix: 'en', englishName: 'English (USA)', nativeLabel: 'English' },
  { code: 'en-GB', hreflang: 'en-GB', slug: 'english-uk', isoPrefix: 'en-gb', englishName: 'English (UK)', nativeLabel: 'English (UK)' },
  { code: 'es', hreflang: 'es', slug: 'spanish', isoPrefix: 'es', englishName: 'Spanish', nativeLabel: 'Español' },
  { code: 'pt', hreflang: 'pt', slug: 'portuguese', isoPrefix: 'pt', englishName: 'Portuguese', nativeLabel: 'Português' },
  { code: 'fr', hreflang: 'fr', slug: 'french', isoPrefix: 'fr', englishName: 'French', nativeLabel: 'Français' },
  { code: 'de', hreflang: 'de', slug: 'german', isoPrefix: 'de', englishName: 'German', nativeLabel: 'Deutsch' },
  { code: 'it', hreflang: 'it', slug: 'italian', isoPrefix: 'it', englishName: 'Italian', nativeLabel: 'Italiano' },
  { code: 'ja', hreflang: 'ja', slug: 'japanese', isoPrefix: 'ja', englishName: 'Japanese', nativeLabel: '日本語' },
  { code: 'ko', hreflang: 'ko', slug: 'korean', isoPrefix: 'ko', englishName: 'Korean', nativeLabel: '한국어' },
  { code: 'ar', hreflang: 'ar', slug: 'arabic', isoPrefix: 'ar', englishName: 'Arabic', nativeLabel: 'العربية' },
  { code: 'th', hreflang: 'th', slug: 'thai', isoPrefix: 'th', englishName: 'Thai', nativeLabel: 'ไทย' },
  { code: 'tl', hreflang: 'tl', slug: 'tagalog', isoPrefix: 'tl', englishName: 'Tagalog', nativeLabel: 'Tagalog' },
  { code: 'ru', hreflang: 'ru', slug: 'russian', isoPrefix: 'ru', englishName: 'Russian', nativeLabel: 'Русский' },
  { code: 'zh-CN', hreflang: 'zh-CN', slug: 'chinese', isoPrefix: 'zh-cn', englishName: 'Chinese (Simplified)', nativeLabel: '简体中文' },
  { code: 'id', hreflang: 'id', slug: 'indonesian', isoPrefix: 'id', englishName: 'Indonesian', nativeLabel: 'Bahasa Indonesia' },
  { code: 'tr', hreflang: 'tr', slug: 'turkish', isoPrefix: 'tr', englishName: 'Turkish', nativeLabel: 'Türkçe' },
  { code: 'vi', hreflang: 'vi', slug: 'vietnamese', isoPrefix: 'vi', englishName: 'Vietnamese', nativeLabel: 'Tiếng Việt' },
  { code: 'nl', hreflang: 'nl', slug: 'dutch', isoPrefix: 'nl', englishName: 'Dutch', nativeLabel: 'Nederlands' },
  { code: 'pl', hreflang: 'pl', slug: 'polish', isoPrefix: 'pl', englishName: 'Polish', nativeLabel: 'Polski' },
  { code: 'fa', hreflang: 'fa', slug: 'persian', isoPrefix: 'fa', englishName: 'Persian', nativeLabel: 'فارسی' }
];

const SSR_VALENTINE_LANG_ALIASES = {};
for (const l of SSR_VALENTINE_LANGS) {
  SSR_VALENTINE_LANG_ALIASES[l.slug] = l.code;
  SSR_VALENTINE_LANG_ALIASES[l.isoPrefix] = l.code;
  SSR_VALENTINE_LANG_ALIASES[l.code.toLowerCase()] = l.code;
}
SSR_VALENTINE_LANG_ALIASES['en'] = 'en-US';
SSR_VALENTINE_LANG_ALIASES['english-usa'] = 'en-US';
SSR_VALENTINE_LANG_ALIASES['en-uk'] = 'en-GB';
SSR_VALENTINE_LANG_ALIASES['fil'] = 'tl';
SSR_VALENTINE_LANG_ALIASES['zh'] = 'zh-CN';
SSR_VALENTINE_LANG_ALIASES['in'] = 'id';

const SSR_HOLIDAY_35 = {
  'new-year': { id: 'new-year', name: 'New Year', shortName: 'New Year', hindiName: 'नया साल', dateLabel: '1 January' },
  christmas: { id: 'christmas', name: 'Christmas Day', shortName: 'Christmas', hindiName: 'क्रिसमस डे', dateLabel: '25 December' }
};

export const SSR_VALENTINE_DAYS = [
  { id: 'rose-day', shortName: 'Rose Day', hindiName: 'रोज़ डे शायरी', dateLabel: '7 Feb' },
  { id: 'propose-day', shortName: 'Propose Day', hindiName: 'प्रपोज़ डे शायरी', dateLabel: '8 Feb' },
  { id: 'chocolate-day', shortName: 'Chocolate Day', hindiName: 'चॉकलेट डे शायरी', dateLabel: '9 Feb' },
  { id: 'teddy-day', shortName: 'Teddy Day', hindiName: 'टेडी डे शायरी', dateLabel: '10 Feb' },
  { id: 'promise-day', shortName: 'Promise Day', hindiName: 'प्रॉमिस डे शायरी', dateLabel: '11 Feb' },
  { id: 'hug-day', shortName: 'Hug Day', hindiName: 'हग डे शायरी', dateLabel: '12 Feb' },
  { id: 'kiss-day', shortName: 'Kiss Day', hindiName: 'किस डे शायरी', dateLabel: '13 Feb' },
  { id: 'valentine-day', shortName: 'Valentine Day', hindiName: 'वैलेंटाइन डे शायरी', dateLabel: '14 Feb' },
  { id: 'slap-day', shortName: 'Slap Day', hindiName: 'स्लैप डे शायरी', dateLabel: '15 Feb' },
  { id: 'kick-day', shortName: 'Kick Day', hindiName: 'किक डे शायरी', dateLabel: '16 Feb' },
  { id: 'perfume-day', shortName: 'Perfume Day', hindiName: 'परफ्यूम डे शायरी', dateLabel: '17 Feb' },
  { id: 'flirting-day', shortName: 'Flirting Day', hindiName: 'फ्लर्टिंग डे शायरी', dateLabel: '18 Feb' },
  { id: 'confession-day', shortName: 'Confession Day', hindiName: 'कन्फेशन डे शायरी', dateLabel: '19 Feb' },
  { id: 'missing-day', shortName: 'Missing Day', hindiName: 'मिसिंग डे शायरी', dateLabel: '20 Feb' },
  { id: 'breakup-day', shortName: 'Breakup Day', hindiName: 'ब्रेकअप डे शायरी', dateLabel: '21 Feb' }
];

export const SSR_FESTIVALS = [
  {
    id: 'diwali',
    name: 'Diwali',
    hindiName: 'दीपावली',
    seoTitle: 'Happy Diwali Shayari in Hindi (दीपावली शायरी) | ZQ Feelings',
    seoDescription:
      'Read 25+ Happy Diwali Shayari in Hindi (दीपावली की हार्दिक शुभकामनाएं) — Diyas, Laxmi Puja & Deepawali wishes with stylish fonts & WhatsApp share.'
  },
  {
    id: 'bhai-dooj',
    name: 'Bhai Dooj',
    hindiName: 'भाई दूज',
    seoTitle: 'Bhai Dooj Shayari in Hindi (भाई दूज शायरी) | ZQ Feelings',
    seoDescription:
      'Heartfelt Bhai Dooj Shayari in Hindi (भाई दूज शुभकामनाएं) celebrating brother-sister tilak bond with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'chhath-puja',
    name: 'Chhath Puja',
    hindiName: 'छठ पूजा',
    seoTitle: 'Chhath Puja Shayari in Hindi (छठ पूजा शायरी) | ZQ Feelings',
    seoDescription:
      'Devotional Chhath Puja Shayari in Hindi (जय छठी मैया और सूर्य अर्घ्य शायरी) — 25 auspicious Bihari & Purvanchal Chhath wishes to copy & share.'
  },
  {
    id: 'birthday',
    name: 'Birthday',
    hindiName: 'जन्मदिन',
    seoTitle: 'Happy Birthday Wishes Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Best Happy Birthday Wishes Shayari in Hindi (जन्मदिन मुबारक शायरी) for friend, brother, sister & lover with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'holi',
    name: 'Holi',
    hindiName: 'होली',
    seoTitle: 'Happy Holi Shayari in Hindi (होली शायरी) | ZQ Feelings',
    seoDescription:
      'Colorful Happy Holi Shayari in Hindi (रंगों और गुलाल भरी होली शायरी) — festive Bura Na Mano Holi Hai wishes with stylish fonts & WhatsApp share.'
  },
  {
    id: 'eid',
    name: 'Eid',
    hindiName: 'ईद मुबारक',
    seoTitle: 'Eid Mubarak Shayari in Hindi (ईद मुबारक शायरी) | ZQ Feelings',
    seoDescription:
      'Warm Eid-ul-Fitr & Chand Raat Eid Mubarak Shayari in Hindi & Urdu (ईद मुबारक शायरी) — sweet Eidi, dua & peace wishes to copy & share.'
  },
  {
    id: 'bakrid',
    name: 'Bakrid (Eid al-Adha)',
    hindiName: 'बकरीद',
    seoTitle: 'Bakrid Mubarak Shayari in Hindi (बकरीद शायरी) | ZQ Feelings',
    seoDescription:
      'Blessed Bakrid & Eid al-Adha Mubarak Shayari in Hindi (बकरीद और कुर्बानी दुआ शायरी) — 25 heartfelt wishes with stylish fonts & WhatsApp share.'
  },
  {
    id: 'new-year',
    name: 'New Year',
    hindiName: 'नया साल',
    seoTitle: 'New Year Shayari 2026 in Hindi (नया साल) | ZQ Feelings',
    seoDescription:
      'Best New Year Shayari in Hindi (नया साल शायरी • 1 January) — 25 original wishes in 35 languages, 20 stylish fonts & share.'
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    hindiName: 'गणेश चतुर्थी',
    seoTitle: 'Ganesh Chaturthi Shayari in Hindi (गणपति शायरी) | ZQ Feelings',
    seoDescription:
      'Auspicious Ganesh Chaturthi Shayari in Hindi (गणपति बप्पा मोरया शायरी) — Vinayaka Chaturthi bhakti wishes in 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'gandhi-jayanti',
    name: 'Gandhi Jayanti',
    hindiName: 'गांधी जयंती',
    seoTitle: 'Gandhi Jayanti Shayari in Hindi (गांधी जयंती) | ZQ Feelings',
    seoDescription:
      'Inspiring 2 October Gandhi Jayanti Shayari in Hindi (महात्मा गांधी अहिंसा और सत्य शायरी) — patriotic Bapu tribute quotes to copy & share.'
  },
  {
    id: 'independence-day',
    name: '15 August Independence Day',
    hindiName: 'स्वतंत्रता दिवस',
    seoTitle: '15 August Independence Day Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Patriotic 15 August Independence Day Shayari in Hindi (स्वतंत्रता दिवस देशभक्ति और तिरंगा शायरी) — proud Jai Hind status & wishes to share.'
  },
  {
    id: 'republic-day',
    name: '26 January Republic Day',
    hindiName: 'गणतंत्र दिवस',
    seoTitle: '26 January Republic Day Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Proud 26 January Republic Day Shayari in Hindi (गणतंत्र दिवस और संविधान शायरी) — Vande Mataram & Tiranga deshbhakti wishes for WhatsApp.'
  },
  {
    id: 'rakshabandhan',
    name: 'Rakshabandhan',
    hindiName: 'रक्षाबंधन',
    seoTitle: 'Rakshabandhan Shayari in Hindi (रक्षाबंधन) | ZQ Feelings',
    seoDescription:
      'Loving Rakshabandhan & Rakhi Shayari in Hindi (रक्षाबंधन भाई-बहन के कच्चे धागों की शायरी) — 25 sweet wishes with stylish fonts & share.'
  },
  {
    id: 'janmashtami',
    name: 'Janmashtami',
    hindiName: 'जन्माष्टमी',
    seoTitle: 'Krishna Janmashtami Shayari in Hindi (जन्माष्टमी) | ZQ',
    seoDescription:
      'Devotional Shree Krishna Janmashtami Shayari in Hindi (राधा-कृष्ण और कान्हा जन्माष्टमी शायरी) — 25 divine bhakti wishes to copy & share.'
  },
  {
    id: 'navratri',
    name: 'Navratri / Durga Puja',
    hindiName: 'नवरात्रि',
    seoTitle: 'Happy Navratri & Durga Puja Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Divine Navratri & Durga Puja Shayari in Hindi (जय माता दी नवरात्रि और माँ दुर्गा भक्ति शायरी) — 25 shakti wishes with 20 stylish fonts.'
  },
  {
    id: 'dussehra',
    name: 'Dussehra',
    hindiName: 'दशहरा',
    seoTitle: 'Happy Dussehra Shayari in Hindi (दशहरा शायरी) | ZQ Feelings',
    seoDescription:
      'Victorious Happy Dussehra & Vijayadashami Shayari in Hindi (बुराई पर अच्छाई की जीत दशहरा शायरी) — Shri Ram wishes with stylish fonts & share.'
  },
  {
    id: 'christmas',
    name: 'Christmas',
    hindiName: 'क्रिसमस',
    seoTitle: 'Christmas Day Shayari in Hindi (क्रिसमस) | ZQ Feelings',
    seoDescription:
      'Best Christmas Day Shayari in Hindi (क्रिसमस डे शायरी • 25 December) — 25 original wishes in 35 languages, 20 stylish fonts & share.'
  },
  {
    id: 'lohri',
    name: 'Lohri',
    hindiName: 'लोहड़ी',
    seoTitle: 'Happy Lohri Shayari in Hindi (लोहड़ी शायरी) | ZQ Feelings',
    seoDescription:
      'Warm Happy Lohri Shayari in Hindi (लोहड़ी की लख-लख बधाइयाँ, रेवड़ी और मूंगफली शायरी) — festive winter bonfire wishes to copy & share.'
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti',
    hindiName: 'मकर संक्रांति',
    seoTitle: 'Makar Sankranti Shayari in Hindi (मकर संक्रांति) | ZQ',
    seoDescription:
      'Sweet Til-Gud Makar Sankranti & Uttarayan Shayari in Hindi (तिल-गुड़ और पतंग मकर संक्रांति शायरी) — 25 harvest wishes for WhatsApp share.'
  },
  {
    id: 'karva-chauth',
    name: 'Karva Chauth',
    hindiName: 'करवा चौथ',
    seoTitle: 'Karva Chauth Shayari in Hindi (करवा चौथ शायरी) | ZQ Feelings',
    seoDescription:
      'Romantic Karva Chauth Shayari in Hindi (करवा चौथ चाँद और अखंड सुहाग शायरी) for husband & wife with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'eid-milad',
    name: 'Eid Milad un Nabi',
    hindiName: 'ईद मिलाद',
    seoTitle: 'Eid Milad un Nabi Shayari in Hindi (ईद मिलाद) | ZQ Feelings',
    seoDescription:
      'Peaceful Eid Milad-un-Nabi Mubarak Shayari in Hindi & Urdu (जश्न-ए-ईद मिलाद-उन-नबी दुआ और नूर शायरी) — 25 spiritual wishes to copy & share.'
  },
  {
    id: 'mahashivratri',
    name: 'Mahashivratri',
    hindiName: 'महाशिवरात्रि',
    seoTitle: 'Mahashivratri Shayari in Hindi (महाशिवरात्रि) | ZQ Feelings',
    seoDescription:
      'Divine Har Har Mahadev & Mahashivratri Shayari in Hindi (भोलेनाथ और महादेव शिवरात्रि भक्ति शायरी) — 25 Bholenath status lines to share.'
  },
  {
    id: 'ram-navami',
    name: 'Ram Navami',
    hindiName: 'राम नवमी',
    seoTitle: 'Ram Navami Shayari in Hindi (राम नवमी शायरी) | ZQ Feelings',
    seoDescription:
      'Sacred Jai Shri Ram & Ram Navami Shayari in Hindi (मर्यादा पुरुषोत्तम श्री राम नवमी भक्ति शायरी) — 25 auspicious wishes in stylish fonts.'
  },
  {
    id: 'onam',
    name: 'Onam',
    hindiName: 'ओणम',
    seoTitle: 'Happy Onam Wishes Shayari in Hindi (ओणम शायरी) | ZQ Feelings',
    seoDescription:
      'Joyful Happy Onam Shayari in Hindi (ओणम पर्व, पूक्कलम और खुशहाली की शुभकामनाएं) — 25 Kerala harvest festival wishes to copy & share.'
  },
  {
    id: 'pongal',
    name: 'Pongal',
    hindiName: 'पोंगल',
    seoTitle: 'Happy Pongal Shayari in Hindi (पोंगल शायरी) | ZQ Feelings',
    seoDescription:
      'Auspicious Happy Pongal Shayari in Hindi (पोंगल पर्व, सूर्य वंदना और समृद्धि की शायरी) — 25 harvest celebration wishes for WhatsApp share.'
  },
  {
    id: 'baisakhi',
    name: 'Baisakhi',
    hindiName: 'बैसाखी',
    seoTitle: 'Happy Baisakhi Shayari in Hindi (बैसाखी शायरी) | ZQ Feelings',
    seoDescription:
      'Vibrant Happy Baisakhi Shayari in Hindi (बैसाखी की लख-लख बधाइयाँ, भंगड़ा और नई फसल शायरी) — 25 festive wishes with 20 stylish fonts.'
  },
  {
    id: 'guru-nanak-jayanti',
    name: 'Guru Nanak Jayanti',
    hindiName: 'गुरु नानक जयंती',
    seoTitle: 'Guru Nanak Jayanti Gurpurab Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Sacred Guru Nanak Jayanti & Gurpurab Shayari in Hindi (धन गुरु नानक देव जी प्रकाश पर्व और गुरबाणी शायरी) — 25 peaceful wishes to share.'
  }
];

export const SSR_FEELINGS = [
  { id: 'love', name: 'Love Shayari', hindiName: 'प्यार शायरी', slug: '/feelings/love-shayari/', seoDescription: 'Best Love, Romantic, Ishq & Mohabbat Shayari in Hindi (प्यार और मोहब्बत शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.' },
  { id: 'sad', name: 'Sad Shayari', hindiName: 'दर्द शायरी', slug: '/feelings/sad-shayari/', seoDescription: 'Heart-touching Sad, Dard & Gham Bhari Shayari in Hindi (सैड और दर्द भरी शायरी). Express deep emotions with 20 stylish fonts & WhatsApp share.' },
  { id: 'yaad', name: 'Yaad Shayari', hindiName: 'याद शायरी', slug: '/feelings/yaad-shayari/', seoDescription: 'Soulful Yaad, Yaadein & Intezaar Shayari in Hindi (याद और इंतज़ार शायरी) — heartfelt status lines with 20 stylish fonts & WhatsApp share.' },
  { id: 'kismat', name: 'Kismat Shayari', hindiName: 'किस्मत शायरी', slug: '/feelings/kismat-shayari/', seoDescription: 'Deep Kismat, Naseeb, Taqdeer & Bhagya Shayari in Hindi (किस्मत और नसीब शायरी). Copy unique destiny status lines in 20 stylish fonts.' },
  { id: 'khushi', name: 'Khushi Shayari', hindiName: 'खुशी शायरी', slug: '/feelings/khushi-shayari/', seoDescription: 'Joyful Khushi, Happy, Muskaan & Smile Shayari in Hindi (खुशी और मुस्कान शायरी). Spread positivity in 35 languages & 20 stylish fonts.' },
  { id: 'alone', name: 'Alone Shayari', hindiName: 'तन्हाई शायरी', slug: '/feelings/alone-shayari/', seoDescription: 'Emotional Alone, Tanhai & Judai Shayari in Hindi (तन्हाई और अकेलापन शायरी) — deep night poetry with 20 stylish fonts & WhatsApp share.' },
  { id: 'motivational', name: 'Motivational Shayari', hindiName: 'मोटिवेशनल शायरी', slug: '/feelings/motivational-shayari/', seoDescription: 'Powerful Motivational, Zindagi & Hausla Shayari in Hindi (मोटिवेशनल और हौसला शायरी) — inspiring success lines to copy & share.' },
  { id: 'sorry', name: 'Sorry Shayari', hindiName: 'माफी शायरी', slug: '/feelings/sorry-shayari/', seoDescription: 'Sweet Sorry, Maafi & Roothna-Manana Shayari in Hindi (माफी और रूठना-मनाना शायरी) to win back loved ones with stylish fonts & share.' },
  { id: 'attitude', name: 'Attitude Shayari', hindiName: 'एटीट्यूड शायरी', slug: '/feelings/attitude-shayari/', seoDescription: 'Bold Attitude, Style, Royal Tevar & Akad Shayari in Hindi (एटीट्यूड और तेवर शायरी) for WhatsApp & Instagram status — ZQ Feelings.' },
  { id: 'boys', name: 'Boys Shayari', hindiName: 'लड़कों की शायरी', slug: '/feelings/boys-shayari/', seoDescription: 'Best Boys Shayari & Ladko Ke Liye Shayari in Hindi (लड़कों के लिए स्वैग, जज़्बात और रॉयल शायरी) with 20 stylish fonts & share.' },
  { id: 'girls', name: 'Girls Shayari', hindiName: 'लड़कियों की शायरी', slug: '/feelings/girls-shayari/', seoDescription: 'Stylish Girls Shayari & Ladkiyon Ke Liye Shayari in Hindi (लड़कियों के लिए क्यूट और रॉयल शायरी) with 20 stylish fonts & share.' },
  { id: 'dosti', name: 'Dosti Shayari', hindiName: 'दोस्ती शायरी', slug: '/feelings/dosti-shayari/', seoDescription: 'Heartwarming Dosti, Yaari & True Friendship Shayari in Hindi (सच्ची दोस्ती और यारी शायरी) for best friends — copy & WhatsApp share.' },
  { id: 'bewafa', name: 'Bewafa Shayari', hindiName: 'बेवफ़ा शायरी', slug: '/feelings/bewafa-shayari/', seoDescription: 'Deep Bewafa, Dhokha & Broken Trust Shayari in Hindi (बेवफ़ा और धोखा शायरी) with 20 stylish fonts, copy & instant WhatsApp share.' },
  { id: 'breakup', name: 'Breakup Shayari', hindiName: 'ब्रेकअप शायरी', slug: '/feelings/breakup-shayari/', seoDescription: 'Emotional Breakup & Heartbreak Shayari in Hindi (ब्रेकअप और टूटे दिल की शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.' },
  { id: 'good-morning', name: 'Good Morning Shayari', hindiName: 'गुड मॉर्निंग शायरी', slug: '/feelings/good-morning-shayari/', seoDescription: 'Fresh Good Morning & Suprabhat Wishes Shayari in Hindi (सुप्रभात और गुड मॉर्निंग शायरी) with 20 stylish fonts & WhatsApp share.' },
  { id: 'good-night', name: 'Good Night Shayari', hindiName: 'गुड नाइट शायरी', slug: '/feelings/good-night-shayari/', seoDescription: 'Peaceful Good Night & Shubh Ratri Wishes Shayari in Hindi (शुभ रात्रि और गुड नाइट शायरी) with 20 stylish fonts & WhatsApp share.' },
  { id: '2-line', name: '2 Line Shayari', hindiName: 'दो लाइन शायरी', slug: '/feelings/2-line-shayari/', seoDescription: 'Short & deep 2 Line Shayari & Do Line Status in Hindi (दो लाइन की बेहतरीन शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
  { id: 'family', name: 'Family Shayari', hindiName: 'परिवार शायरी', slug: '/feelings/family-shayari/', seoDescription: 'Warm Family, Maa Papa & Ghar Parivar Shayari in Hindi (परिवार और माँ-पापा शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
  { id: 'bhai-behen', name: 'Bhai Behen Shayari', hindiName: 'भाई बहन शायरी', slug: '/feelings/bhai-behen-shayari/', seoDescription: 'Loving Bhai Behen, Brother & Sister Shayari in Hindi (भाई-बहन के प्यार की शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
  { id: 'birthday-feelings', name: 'Birthday Shayari', hindiName: 'जन्मदिन शायरी', slug: '/feelings/birthday-shayari/', seoDescription: 'Heartfelt Birthday Wishes & Janmdin Mubarak Shayari in Hindi (जन्मदिन मुबारक फीलिंग्स शायरी) with 20 stylish fonts & WhatsApp share.' },
  { id: 'miss-you', name: 'Miss You Shayari', hindiName: 'मिस यू शायरी', slug: '/feelings/miss-you-shayari/', seoDescription: 'Touching Miss You & Teri Kami Shayari in Hindi (मिस यू और तेरी कमी शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.' },
  { id: 'heart-touching', name: 'Heart Touching Shayari', hindiName: 'हार्ट टचिंग शायरी', slug: '/feelings/heart-touching-shayari/', seoDescription: 'Deep Heart Touching & Dil Chhoo Lene Wali Shayari in Hindi (दिल छू लेने वाली शायरी) with 20 stylish fonts & WhatsApp share.' },
  { id: 'emotional', name: 'Emotional Shayari', hindiName: 'इमोशनल शायरी', slug: '/feelings/emotional-shayari/', seoDescription: 'Soulful Emotional & Jazbaati Shayari in Hindi (जज़्बाती और इमोशनल शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.' },
  { id: 'sad-love', name: 'Sad Love Shayari', hindiName: 'सैड लव शायरी', slug: '/feelings/sad-love-shayari/', seoDescription: 'Poignant Sad Love & Adhura Pyar Shayari in Hindi (अधूरा प्यार और सैड लव शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
  { id: 'khwab', name: 'Khwab Shayari', hindiName: 'ख़्वाब शायरी', slug: '/feelings/khwab-shayari/', seoDescription: 'Dreamy Khwab & Sapne Shayari in Hindi (ख़्वाब और सपनों की शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.' },
  { id: 'matlabi-duniya', name: 'Matlabi Duniya Shayari', hindiName: 'मतलबी दुनिया शायरी', slug: '/feelings/matlabi-duniya-shayari/', seoDescription: 'Real-life Matlabi Duniya & Matlabi Log Shayari in Hindi (मतलबी दुनिया और मतलबी लोग शायरी) with 20 stylish fonts & WhatsApp share.' },
  { id: 'funny', name: 'Funny Shayari', hindiName: 'फनी शायरी', slug: '/feelings/funny-shayari/', seoDescription: 'Hilarious Funny, Jokes, Comedy & Chutkule Shayari in Hindi (मज़ेदार फनी जोक्स और चुटकुले शायरी) with 20 stylish fonts & share.' },
  { id: 'sharabi', name: 'Sharabi Shayari', hindiName: 'शराबी शायरी', slug: '/feelings/sharabi-shayari/', seoDescription: 'Soulful Sharabi, Maikhana, Jaam & Mehfil Shayari in Hindi (शराबी और मयख़ाना शायरी) with 20 stylish fonts, copy & WhatsApp share.' }
];

const SSR_FEELINGS_MERGE_MAP = {
  love: 'love',
  'romantic-love': 'love',
  'pyar-bhari': 'love',
  mohabbat: 'love',
  sad: 'sad',
  'dard-bhari': 'sad',
  yaad: 'yaad',
  'yaad-intezaar': 'yaad',
  intezaar: 'yaad',
  yaadein: 'yaad',
  kismat: 'kismat',
  naseeb: 'kismat',
  'kismat-bhagya': 'kismat',
  khushi: 'khushi',
  smile: 'khushi',
  alone: 'alone',
  judai: 'alone',
  motivational: 'motivational',
  zindagi: 'motivational',
  sorry: 'sorry',
  maafi: 'sorry',
  gussa: 'sorry',
  attitude: 'attitude',
  boy: 'boys',
  boys: 'boys',
  girl: 'girls',
  girls: 'girls',
  dosti: 'dosti',
  bewafa: 'bewafa',
  breakup: 'breakup',
  'good-morning': 'good-morning',
  'good-night': 'good-night',
  'two-line': '2-line',
  '2-line': '2-line',
  family: 'family',
  'bhai-behen': 'bhai-behen',
  'birthday-feelings': 'birthday-feelings',
  'miss-you': 'miss-you',
  'heart-touching': 'heart-touching',
  emotional: 'emotional',
  'sad-love': 'sad-love',
  khwab: 'khwab',
  'matlabi-duniya': 'matlabi-duniya',
  funny: 'funny',
  sharabi: 'sharabi',
  maikhana: 'sharabi'
};

export const SSR_MAAFI_SUBS = [
  {
    id: 'maa-se-maafi',
    name: 'Maa Se Maafi (माँ से माफ़ी)',
    englishTitle: 'Maa Se Maafi',
    count: 25,
    slug: '/feelings/maa-se-maafi-shayari',
    seoTitle: 'Maa Se Maafi (माँ से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Emotional Maa Se Maafi Shayari in Hindi (नाराज़ माँ को मनाने की भावुक माफ़ी शायरी) — 25 heartfelt apology poems in 35 languages & stylish fonts.'
  },
  {
    id: 'papa-se-maafi',
    name: 'Papa Se Maafi (पापा से माफ़ी)',
    englishTitle: 'Papa Se Maafi',
    count: 25,
    slug: '/feelings/papa-se-maafi-shayari',
    seoTitle: 'Papa Se Maafi (पापा से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Respectful Papa Se Maafi Shayari in Hindi (पापा से हुई गलती पर क्षमा माँगने की शायरी) — 25 sincere apology lines in 35 languages & stylish fonts.'
  },
  {
    id: 'biwi-se-maafi',
    name: 'Biwi Se Maafi (बीवी से माफ़ी)',
    englishTitle: 'Biwi Se Maafi',
    count: 25,
    slug: '/feelings/biwi-se-maafi-shayari',
    seoTitle: 'Biwi Se Maafi (बीवी से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Romantic Biwi Se Maafi Shayari in Hindi (रूठी पत्नी का गुस्सा पिघलाने वाली सॉरी शायरी) — 25 sweet wife apology wishes in 35 languages.'
  },
  {
    id: 'husband-se-maafi',
    name: 'Husband Se Maafi (पति से माफ़ी)',
    englishTitle: 'Husband Se Maafi',
    count: 25,
    slug: '/feelings/husband-se-maafi-shayari',
    seoTitle: 'Husband Se Maafi (पति से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Sweet Husband Se Maafi Shayari in Hindi (नाराज़ पति को प्यार से मनाने वाली सॉरी शायरी) — 25 loving apology status lines in 35 languages.'
  }
];

export const SSR_RELIGIOUS = [
  {
    id: 'sanatan-hindu',
    name: 'Sanatan Hindu (सनातन हिंदू)',
    englishTitle: 'Sanatan Hindu',
    count: 100,
    path: '/religious/sanatan-hindu',
    seoTitle: 'Sanatan Hindu Dharmik Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '100+ Sanatan Hindu Dharmik Shayari in Hindi (सनातन धर्म, गीता, वेद, महादेव व श्री राम भक्ति शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'islamic-allah',
    name: 'Islamic Allah (इस्लामिक अल्लाह)',
    englishTitle: 'Islamic Allah',
    count: 100,
    path: '/religious/islamic-allah',
    seoTitle: 'Islamic Allah & Dua Shayari in Hindi & Urdu | ZQ FEELINGS',
    seoDescription:
      '100+ Islamic Allah & Dua Shayari in Hindi & Urdu (अल्लाह, नमाज़, क़ुरआन, सब्र, जुम्मा मुबारक और ईमान शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'christian-faith',
    name: 'Masih Faith (मसीह विश्वास)',
    englishTitle: 'Masih Faith',
    count: 60,
    path: '/religious/christian-faith',
    seoTitle: 'Masih Faith & Prabhu Yeshu Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '60+ Masih Faith & Prabhu Yeshu Shayari in Hindi (प्रभु यीशु मसीह, बाइबल वचन, प्रार्थना और अनुग्रह शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'sikh-dharm',
    name: 'Sikh Dharm (सिख धर्म)',
    englishTitle: 'Sikh Dharm',
    count: 50,
    path: '/religious/sikh-dharm',
    seoTitle: 'Sikh Dharm & Waheguru Gurbani Shayari in Hindi | ZQ',
    seoDescription:
      '50+ Sikh Dharm & Waheguru Gurbani Shayari in Hindi (वाहेगुरु, गुरु ग्रंथ साहिब, खालसा, सेवा और सिमरन शायरी) with 20 stylish fonts & share.'
  }
];

export const SSR_RITUALS = [
  {
    id: 'newborn-babies',
    name: 'Newborn Baby (नन्ही खुशी)',
    englishTitle: 'Newborn Baby',
    count: 100,
    path: '/newborn-babies-shayari/',
    seoTitle: 'Newborn Baby Boy & Girl Wishes Shayari | ZQ FEELINGS',
    seoDescription:
      '100+ Newborn Baby Boy & Baby Girl Wishes Shayari in Hindi (नन्हे राजकुमार और लक्ष्मी परी के जन्म की बधाई शायरी) with 20 stylish fonts.'
  },
  {
    id: 'godh-bharai',
    name: 'Godh Bharai (गोद भराई)',
    englishTitle: 'Godh Bharai',
    count: 50,
    path: '/godh-bharai-shayari/',
    seoTitle: 'Godh Bharai & Baby Shower Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '50+ Godh Bharai & Baby Shower Shayari in Hindi (गोद भराई रस्म और माँ बनने की पावन बधाई शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'naamkaran-mundan',
    name: 'Naamkaran & Mundan',
    englishTitle: 'Naamkaran & Mundan',
    count: 50,
    path: '/naamkaran-mundan-shayari/',
    seoTitle: 'Naamkaran & Mundan Sanskar Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '50+ Naamkaran & Mundan Sanskar Shayari in Hindi (शिशु नामकरण और मुंडन संस्कार की मंगल आशीर्वाद शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'grah-pravesh',
    name: 'Grah Pravesh (गृह प्रवेश)',
    englishTitle: 'Grah Pravesh',
    count: 50,
    path: '/grah-pravesh-shayari/',
    seoTitle: 'Grah Pravesh & New Home Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '50+ Grah Pravesh & New Home Wishes Shayari in Hindi (नए घर के गृह प्रवेश और कलश पूजन की शुभकामना शायरी) with 20 stylish fonts & share.'
  }
];

export const SSR_MONTHS = [
  {
    id: 'january',
    nameEnglish: 'January',
    nameHindi: 'जनवरी',
    seoTitle: 'January Special Days Shayari (जनवरी शायरी) | ZQ FEELINGS',
    seoDescription:
      'January Special Days Shayari in Hindi (जनवरी शायरी) — 200 wishes for New Year, Lohri, Youth Day, Army Day & Republic Day on ZQ Feelings.'
  },
  {
    id: 'february',
    nameEnglish: 'February',
    nameHindi: 'फरवरी',
    seoTitle: 'February Special Days Shayari (फरवरी शायरी) | ZQ FEELINGS',
    seoDescription:
      'February Special Days Shayari in Hindi (फरवरी शायरी) — 200 wishes for Basant Panchami, Rose Day, Valentine Week & Science Day on ZQ Feelings.'
  },
  {
    id: 'march',
    nameEnglish: 'March',
    nameHindi: 'मार्च',
    seoTitle: 'March Special Days Shayari (मार्च शायरी) | ZQ FEELINGS',
    seoDescription:
      "March Special Days Shayari in Hindi (मार्च शायरी) — 200 wishes for Women's Day, Holi, Shaheed Diwas & World Poetry Day on ZQ Feelings."
  },
  {
    id: 'april',
    nameEnglish: 'April',
    nameHindi: 'अप्रैल',
    seoTitle: 'April Special Days Shayari (अप्रैल शायरी) | ZQ FEELINGS',
    seoDescription:
      'April Special Days Shayari in Hindi (अप्रैल शायरी) — 200 wishes for Ram Navami, Hanuman Jayanti, Ambedkar Jayanti & Earth Day on ZQ Feelings.'
  },
  {
    id: 'may',
    nameEnglish: 'May',
    nameHindi: 'मई',
    seoTitle: 'May Special Days Shayari (मई शायरी) | ZQ FEELINGS',
    seoDescription:
      "May Special Days Shayari in Hindi (मई शायरी) — 200 wishes for Mother's Day, Labour Day, Buddha Purnima & Family Day on ZQ Feelings."
  },
  {
    id: 'june',
    nameEnglish: 'June',
    nameHindi: 'जून',
    seoTitle: 'June Special Days Shayari (जून शायरी) | ZQ FEELINGS',
    seoDescription:
      "June Special Days Shayari in Hindi (जून शायरी) — 200 wishes for Father's Day, Environment Day, International Yoga Day & Music Day."
  },
  {
    id: 'july',
    nameEnglish: 'July',
    nameHindi: 'जुलाई',
    seoTitle: 'July Special Days Shayari (जुलाई शायरी) | ZQ FEELINGS',
    seoDescription:
      "July Special Days Shayari in Hindi (जुलाई शायरी) — 200 wishes for Doctor's Day, Guru Purnima, Sawan Somwar & Kargil Vijay Diwas."
  },
  {
    id: 'august',
    nameEnglish: 'August',
    nameHindi: 'अगस्त',
    seoTitle: 'August Special Days Shayari (अगस्त शायरी) | ZQ FEELINGS',
    seoDescription:
      'August Special Days Shayari in Hindi (अगस्त शायरी) — 200 wishes for Friendship Day, Rakshabandhan, 15 August & Krishna Janmashtami.'
  },
  {
    id: 'september',
    nameEnglish: 'September',
    nameHindi: 'सितंबर',
    seoTitle: 'September Special Days Shayari (सितंबर शायरी) | ZQ',
    seoDescription:
      "September Special Days Shayari in Hindi (सितंबर शायरी) — 200 wishes for Teacher's Day, Hindi Diwas, Engineer's Day & Ganeshotsav."
  },
  {
    id: 'october',
    nameEnglish: 'October',
    nameHindi: 'अक्टूबर',
    seoTitle: 'October Special Days Shayari (अक्टूबर शायरी) | ZQ',
    seoDescription:
      'October Special Days Shayari in Hindi (अक्टूबर शायरी) — 200 wishes for Gandhi Jayanti, Navratri, Dussehra, Karva Chauth & Ekta Diwas.'
  },
  {
    id: 'november',
    nameEnglish: 'November',
    nameHindi: 'नवंबर',
    seoTitle: 'November Special Days Shayari (नवंबर शायरी) | ZQ FEELINGS',
    seoDescription:
      "November Special Days Shayari in Hindi (नवंबर शायरी) — 200 wishes for Diwali, Bhai Dooj, Chhath Puja, Children's Day & Gurpurab."
  },
  {
    id: 'december',
    nameEnglish: 'December',
    nameHindi: 'दिसंबर',
    seoTitle: 'December Special Days Shayari (दिसंबर शायरी) | ZQ FEELINGS',
    seoDescription:
      'December Special Days Shayari in Hindi (दिसंबर शायरी) — 200 wishes for Navy Day, Geeta Jayanti, Kisan Diwas, Christmas & Year-End.'
  }
];

const SSR_HINDI_ROUTE_ALIASES = {
  'त्यौहार-शायरी': '/festival-shayari',
  'फीलिंग्स-शायरी': '/feelings-shayari',
  'प्यार-शायरी': '/feelings/love-shayari/',
  'दर्द-शायरी': '/feelings/sad-shayari/',
  'याद-शायरी': '/feelings/yaad-shayari/',
  'किस्मत-शायरी': '/feelings/kismat-shayari/',
  'खुशी-शायरी': '/feelings/khushi-shayari/',
  'एटीट्यूड-शायरी': '/feelings/attitude-shayari/',
  'तन्हाई-शायरी': '/feelings/alone-shayari/',
  'मोटिवेशनल-शायरी': '/feelings/motivational-shayari/',
  'माफी-शायरी': '/feelings/sorry-shayari/',
  'दोस्ती-शायरी': '/feelings/dosti-shayari/',
  'बेवफा-शायरी': '/feelings/bewafa-shayari/',
  'ब्रेकअप-शायरी': '/feelings/breakup-shayari/',
  'ज़िंदगी-शायरी': '/feelings/motivational-shayari/',
  'मोहब्बत-शायरी': '/feelings/love-shayari/',
  'फनी-शायरी': '/feelings/funny-shayari/',
  'चुटकुले-शायरी': '/feelings/funny-shayari/',
  'शराबी-शायरी': '/feelings/sharabi-shayari/',
  'दीपावली-शायरी': '/diwali-shayari',
  'होली-शायरी': '/holi-shayari',
  'अपनी-शायरी-लिखें': '/apni-shayari-likhe',
  'पसंदीदा-शायरी': '/pasandida-shayari',
  'ज़ेडक्यू-मोमेंट्स': '/zq-moments'
};

function resolveValentineLang(raw) {
  if (!raw) return undefined;
  const cleaned = String(raw).trim().toLowerCase().replace(/^\/+|\/+$/g, '');
  if (!cleaned) return undefined;
  const code = SSR_VALENTINE_LANG_ALIASES[cleaned];
  if (!code) return undefined;
  return SSR_VALENTINE_LANGS.find((l) => l.code === code);
}

export function resolveServerSeoMeta(rawPathname) {
  let decodedPath = '/';
  try {
    decodedPath = decodeURIComponent(rawPathname).toLowerCase().replace(/\/+$/, '') || '/';
  } catch {
    decodedPath = String(rawPathname || '/').toLowerCase().replace(/\/+$/, '') || '/';
  }

  let activePage = 1;
  const pageMatch = decodedPath.match(/^(.*?)\/page\/(\d+)$/);
  if (pageMatch) {
    decodedPath = pageMatch[1] || '/';
    const parsedNum = Number.parseInt(pageMatch[2], 10);
    if (Number.isFinite(parsedNum) && parsedNum >= 2) {
      activePage = parsedNum;
    }
  }

  const rangeStart = (activePage - 1) * 20 + 1;
  const rangeEnd = activePage * 20;

  const buildHomeSeo = (pg) => {
    const homeCanonical = buildPaginatedCleanPath('/', pg);
    const rStart = (pg - 1) * 20 + 1;
    const rEnd = pg * 20;
    return {
      title:
        pg >= 2
          ? clampSeoTitle(
              `Best Shayari - Page ${pg} (Love, Sad, Diwali) | ZQ Feelings`,
              `Best Shayari - Page ${pg} | ZQ Feelings`
            )
          : 'Best Shayari - Love, Sad, Diwali, Valentine | ZQ Feelings',
      description:
        pg >= 2
          ? `Best Shayari Page ${pg} (Shayari ${rStart}–${rEnd}) — Read trending Love, Sad, Diwali & Valentine Shayari in Hindi, English & Urdu on ZQ Feelings.`
          : 'Best Love, Sad, Diwali, Valentine and more festival & celebration Shayari in Hindi, English & Urdu for Boy & Girl - ZQ Feelings.',
      canonicalPath: homeCanonical,
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        ...(pg >= 2 ? [{ name: `Page ${pg}`, path: homeCanonical }] : [])
      ]
    };
  };

  const cleanSlug = decodedPath.replace(/^\/+/, '');

  if (SSR_HINDI_ROUTE_ALIASES[cleanSlug]) {
    const aliasTarget =
      activePage >= 2
        ? buildPaginatedCleanPath(SSR_HINDI_ROUTE_ALIASES[cleanSlug], activePage)
        : SSR_HINDI_ROUTE_ALIASES[cleanSlug];
    return resolveServerSeoMeta(aliasTarget);
  }

  if (cleanSlug === '' || cleanSlug === 'index.html') {
    return buildHomeSeo(activePage);
  }

  if (cleanSlug === 'about-us' || cleanSlug === 'about') {
    return {
      title: `About Us – Dil Ki Awaaz | ${SITE_BRAND}`,
      description:
        'About ZQ FEELINGS - Dil Ki Awaaz: 100% original Hindi, Hinglish, Urdu & 35-language Shayari for Feelings, Festivals, Valentine & Sanskar.',
      canonicalPath: '/about-us',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' }
      ]
    };
  }
  if (cleanSlug === 'privacy-policy' || cleanSlug === 'privacy') {
    return {
      title: `Privacy Policy (गोपनीयता नीति) | ${SITE_BRAND}`,
      description:
        'Read the Privacy Policy of ZQ FEELINGS - Dil Ki Awaaz. Browse, copy, translate in 35 languages & save favorite Shayari with full privacy.',
      canonicalPath: '/privacy-policy',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' }
      ]
    };
  }
  if (
    cleanSlug === 'terms-and-conditions' ||
    cleanSlug === 'terms-of-service' ||
    cleanSlug === 'terms'
  ) {
    return {
      title: `Terms & Conditions (नियम व शर्तें) | ${SITE_BRAND}`,
      description:
        'Terms & Conditions for reading, personal WhatsApp/Facebook sharing, and posting user poetry on ZQ FEELINGS - Dil Ki Awaaz.',
      canonicalPath: '/terms-and-conditions',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' }
      ]
    };
  }
  if (cleanSlug === 'disclaimer' || cleanSlug === 'copyright' || cleanSlug === 'dmca') {
    return {
      title: `Disclaimer & Copyright Policy | ${SITE_BRAND}`,
      description:
        '100% Original Content & Copyright Disclaimer of ZQ FEELINGS - Dil Ki Awaaz. Respectful poetry across faiths, festivals & traditions.',
      canonicalPath: '/disclaimer',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Disclaimer', path: '/disclaimer' }
      ]
    };
  }
  if (cleanSlug === 'contact-us' || cleanSlug === 'contact') {
    return {
      title: `Contact Us (संपर्क करें) | ${SITE_BRAND}`,
      description:
        'Contact ZQ FEELINGS - Dil Ki Awaaz support team for feedback, suggestions, collaborations, or poetry inquiries.',
      canonicalPath: '/contact-us',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact-us' }
      ]
    };
  }

  if (cleanSlug === 'zq-moments' || cleanSlug === 'moments') {
    return {
      title: `ZQ-MOMENTS 💗 – Shayari Photo Status | ${SITE_BRAND}`,
      description:
        'Share 100% original Shayari Photo Status on ZQ-MOMENTS 💗 — Auto-Filter protected, 30 stylish fonts, likes, comments & 3-report safety.',
      canonicalPath: '/zq-moments',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'ZQ Moments', path: '/zq-moments' }
      ]
    };
  }
  if (cleanSlug === 'admin-zq') {
    return {
      title: `ZQ Admin Moderation | ${SITE_BRAND}`,
      description:
        'Admin moderation console for Global Auto-Approved Shayaris on ZQ FEELINGS - Dil Ki Awaaz.',
      canonicalPath: '/admin-zq',
      langCode: 'hi',
      robots: 'noindex, nofollow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Admin', path: '/admin-zq' }
      ]
    };
  }
  if (
    cleanSlug === 'apni-shayari-likhe' ||
    cleanSlug === 'apni-shayari' ||
    cleanSlug === 'write-shayari'
  ) {
    return {
      title: `Apni Shayari Likhe (अपनी शायरी लिखें) | ${SITE_BRAND}`,
      description:
        'Write & publish 100% original Love & Sad Shayari on ZQ Feelings — Auto-Filter verified, instant LIVE feed, 20 stylish fonts & WhatsApp share.',
      canonicalPath: '/apni-shayari-likhe',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Apni Shayari Likhe', path: '/apni-shayari-likhe' }
      ]
    };
  }
  if (
    cleanSlug === 'pasandida-shayari' ||
    cleanSlug === 'pasandida' ||
    cleanSlug === 'favorites'
  ) {
    return {
      title: `Pasandida Shayari – Saved Hindi Shayari | ${SITE_BRAND}`,
      description:
        'View, copy, and share your saved favorite (Pasandida) Hindi Shayari, Festival Wishes & custom poetry anytime on ZQ FEELINGS.',
      canonicalPath: '/pasandida-shayari',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Pasandida Shayari', path: '/pasandida-shayari' }
      ]
    };
  }
  if (cleanSlug === 'zq-feelings-shayari' || cleanSlug === 'zq-official') {
    return {
      title: `ZQ Official Verified Hindi Shayari | ${SITE_BRAND}`,
      description:
        'Read verified official Hindi, Hinglish & English Shayari curated by ZQ FEELINGS - Dil Ki Awaaz across Love, Sad, Attitude & Festivals.',
      canonicalPath: '/zq-feelings-shayari',
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'ZQ Official Shayari', path: '/zq-feelings-shayari' }
      ]
    };
  }

  const buildValentineMeta = (dayMeta, langMeta, pg = activePage) => {
    const hasCustomLang = !!(langMeta && langMeta.code !== 'hi');
    const rStart = (pg - 1) * 20 + 1;
    const rEnd = pg * 20;

    if (dayMeta) {
      const basePath = `/valentine-week/${dayMeta.id}-shayari`;
      const langBasePath = hasCustomLang ? `${basePath}/${langMeta.slug}` : basePath;
      const canonicalPath = buildPaginatedCleanPath(langBasePath, pg);
      const valentinePageSuffix = pg >= 2 ? `/page/${pg}` : undefined;

      const title =
        pg >= 2
          ? hasCustomLang
            ? clampSeoTitle(
                `${dayMeta.shortName} Shayari in ${langMeta.englishName} – Page ${pg} | ZQ`,
                `${dayMeta.shortName} (${langMeta.englishName}) – Page ${pg} | ZQ`,
                `${dayMeta.shortName} (${langMeta.slug}) – Page ${pg} | ZQ`
              )
            : clampSeoTitle(
                `${dayMeta.shortName} Shayari 2026 – Page ${pg} | ZQ Feelings`,
                `${dayMeta.shortName} Shayari – Page ${pg} | ZQ Feelings`
              )
          : hasCustomLang
            ? clampSeoTitle(
                `${dayMeta.shortName} Shayari in ${langMeta.englishName} | ZQ Feelings`,
                `${dayMeta.shortName} Shayari (${langMeta.englishName}) | ZQ`,
                `${dayMeta.shortName} (${langMeta.slug}) | ZQ Feelings`
              )
            : clampSeoTitle(
                `40+ Best ${dayMeta.shortName} Shayari 2026 | ZQ Feelings`,
                `${dayMeta.shortName} Shayari 2026 | ZQ Feelings`
              );

      const description =
        pg >= 2
          ? hasCustomLang
            ? `${dayMeta.shortName} Shayari in ${langMeta.englishName} (${langMeta.nativeLabel}) – Page ${pg} (Shayari ${rStart}–${rEnd}): ${dayMeta.dateLabel} wishes on ZQ Feelings.`
            : `${dayMeta.shortName} Shayari 2026 (${dayMeta.dateLabel}) – Page ${pg} (Shayari ${rStart}–${rEnd}): ${dayMeta.hindiName} with 20 stylish fonts & share.`
          : hasCustomLang
            ? `Read 40+ Best ${dayMeta.shortName} Shayari 2026 (${dayMeta.dateLabel}) in ${langMeta.englishName} (${langMeta.nativeLabel}) with 20 stylish fonts & WhatsApp share.`
            : `Read 40+ Best ${dayMeta.shortName} Shayari 2026 (${dayMeta.dateLabel} • ${dayMeta.hindiName}) in Hindi with 20 stylish fonts, copy & WhatsApp share.`;

      return {
        title,
        description,
        canonicalPath,
        valentineBasePath: basePath,
        valentinePageSuffix,
        langCode: langMeta?.hreflang || 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Valentine Week Special', path: '/valentine-week' },
          { name: `${dayMeta.shortName} Shayari`, path: basePath },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
          ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
        ]
      };
    }

    const baseHubPath = '/valentine-week';
    const canonicalHubPath = hasCustomLang ? `${baseHubPath}/${langMeta.slug}` : baseHubPath;
    return {
      title: hasCustomLang
        ? clampSeoTitle(
            `Valentine Week Shayari in ${langMeta.englishName} | ZQ Feelings`,
            `Valentine Shayari (${langMeta.englishName}) | ZQ`,
            `Valentine (${langMeta.slug}) | ZQ Feelings`
          )
        : 'Valentine Week Shayari (7–21 Feb) – 600+ | ZQ Feelings',
      description: hasCustomLang
        ? `Valentine Week Shayari in ${langMeta.englishName} (${langMeta.nativeLabel}) — 600 unique poems across 15 days (7–21 Feb) with 20 stylish fonts.`
        : 'Valentine Week Special (7–21 Feb) — Read 600 original Shayari across all 15 days from Rose Day to Breakup Day in Hindi & 35 languages on ZQ Feelings.',
      canonicalPath: canonicalHubPath,
      valentineBasePath: baseHubPath,
      langCode: langMeta?.hreflang || 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Valentine Week Special', path: baseHubPath },
        ...(hasCustomLang ? [{ name: langMeta.englishName, path: canonicalHubPath }] : [])
      ]
    };
  };

  if (
    cleanSlug === 'valentine-week' ||
    cleanSlug === 'valentine-week-special' ||
    cleanSlug === 'valentine-week-shayari' ||
    cleanSlug === 'valentine' ||
    cleanSlug === 'valentine-shayari' ||
    cleanSlug === 'feelings/valentine-week' ||
    cleanSlug === 'festival/valentine-week' ||
    cleanSlug === 'वैलेंटाइन-वीक-शायरी'
  ) {
    return buildValentineMeta(undefined, undefined, 1);
  }

  if (cleanSlug.startsWith('valentine-week/')) {
    const segments = cleanSlug.split('/').filter(Boolean);
    if (segments.length >= 2) {
      const seg1Stripped = segments[1].replace(/-shayari$/, '');
      const matchedDay = SSR_VALENTINE_DAYS.find((d) => d.id === seg1Stripped);
      if (matchedDay) {
        const parsedLang = segments[2] ? resolveValentineLang(segments[2]) : undefined;
        return buildValentineMeta(matchedDay, parsedLang, activePage);
      }
      const hubLang = resolveValentineLang(segments[1]);
      if (hubLang) {
        return buildValentineMeta(undefined, hubLang, 1);
      }
    }
    return buildValentineMeta(undefined, undefined, 1);
  }

  for (const vDay of SSR_VALENTINE_DAYS) {
    if (cleanSlug === vDay.id || cleanSlug === `${vDay.id}-shayari`) {
      return buildValentineMeta(vDay, undefined, activePage);
    }
    if (cleanSlug === `${vDay.id}-shayari-2` || cleanSlug === `${vDay.id}-shayari-3`) {
      return buildValentineMeta(vDay, undefined, 2);
    }
  }

  if (cleanSlug === 'festival-shayari' || cleanSlug === 'festival.html' || cleanSlug === 'festival') {
    const baseHubPath = '/festival-shayari';
    const canonicalHubPath = buildPaginatedCleanPath(baseHubPath, activePage);
    return {
      title:
        activePage >= 2
          ? clampSeoTitle(
              `Festival Shayari in Hindi – Page ${activePage} | ZQ Feelings`,
              `Festival Shayari – Page ${activePage} | ZQ Feelings`
            )
          : `Festival Shayari in Hindi – Diwali, Holi | ${SITE_BRAND}`,
      description:
        activePage >= 2
          ? `Festival Shayari in Hindi – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): Diwali, Holi, Eid & Navratri wishes on ZQ Feelings.`
          : 'Explore 27 Indian Festival Shayari in Hindi — Diwali, Holi, Eid, Rakshabandhan, Navratri & Chhath Puja 2-4 line wishes to copy & share.',
      canonicalPath: canonicalHubPath,
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Festival Shayari', path: baseHubPath },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
      ]
    };
  }

  const buildSsrFeelingsPath = (hindiBase, langMeta, pg = activePage) => {
    const trimmed = hindiBase.replace(/\/+$/, '');
    const hasCustom = !!(langMeta && langMeta.code !== 'hi');
    const langBase = hasCustom ? `${trimmed}/${langMeta.slug}` : hindiBase;
    if (pg >= 2) {
      return `${langBase.replace(/\/+$/, '')}/page/${pg}`;
    }
    return langBase;
  };

  const buildFeelingsHubMeta = (langMeta = SSR_VALENTINE_LANGS[0], pg = activePage) => {
    const hasCustomLang = langMeta.code !== 'hi';
    const baseHubPath = '/feelings-shayari';
    const langHubBasePath = buildSsrFeelingsPath(baseHubPath, langMeta, 1);
    const canonicalHubPath = buildSsrFeelingsPath(baseHubPath, langMeta, pg);
    const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
    const rStart = (pg - 1) * 20 + 1;
    const rEnd = pg * 20;

    return {
      title:
        pg >= 2
          ? hasCustomLang
            ? clampSeoTitle(
                `Feelings Shayari in ${langMeta.englishName} – Page ${pg} | ZQ`,
                `Feelings Shayari (${langMeta.englishName}) P${pg} | ZQ`
              )
            : clampSeoTitle(
                `Feelings Shayari – Page ${pg} (Love & Sad) | ZQ Feelings`,
                `Feelings Shayari – Page ${pg} | ZQ Feelings`
              )
          : hasCustomLang
            ? clampSeoTitle(
                `Feelings Shayari in ${langMeta.englishName} – Love & Sad | ZQ`,
                `Feelings Shayari in ${langMeta.englishName} | ZQ Feelings`,
                `Feelings Shayari (${langMeta.englishName}) | ZQ`
              )
            : `Feelings Shayari in Hindi – Love & Sad | ${SITE_BRAND}`,
      description:
        pg >= 2
          ? hasCustomLang
            ? `Feelings Shayari in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): Love, Sad, Attitude & Dosti poetry on ZQ Feelings.`
            : `Feelings Shayari in Hindi – Page ${pg} (Shayari ${rStart}–${rEnd}): Love, Sad, Yaad, Attitude, Dosti & Emotional status on ZQ Feelings.`
          : hasCustomLang
            ? `Read 1,631+ Feelings Shayari in ${langMeta.englishName} (${langMeta.nativeLabel}) — Love, Sad, Yaad, Attitude, Dosti & Sorry poetry on ZQ Feelings.`
            : 'Read 1,631+ unique Feelings Shayari in Hindi & 35 languages — Love, Sad, Yaad, Alone, Motivational, Sorry, Attitude, Dosti & Funny Shayari.',
      canonicalPath: canonicalHubPath,
      valentineBasePath: baseHubPath,
      valentinePageSuffix: pageSuffix,
      langCode: langMeta.hreflang,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Feelings Shayari', path: baseHubPath },
        ...(hasCustomLang ? [{ name: langMeta.englishName, path: langHubBasePath }] : []),
        ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalHubPath }] : [])
      ]
    };
  };

  const buildMaafiMeta = (m, langMeta = SSR_VALENTINE_LANGS[0], pg = activePage) => {
    const hasCustomLang = langMeta.code !== 'hi';
    const hindiBase = m.slug;
    const langBasePath = buildSsrFeelingsPath(hindiBase, langMeta, 1);
    const canonicalPath = buildSsrFeelingsPath(hindiBase, langMeta, pg);
    const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
    const rStart = (pg - 1) * 20 + 1;
    const rEnd = pg * 20;

    return {
      title:
        pg >= 2
          ? hasCustomLang
            ? clampSeoTitle(
                `${m.englishTitle} Shayari (${langMeta.englishName}) – Page ${pg} | ZQ`,
                `${m.englishTitle} (${langMeta.englishName}) – Page ${pg} | ZQ`,
                `${m.englishTitle} (${langMeta.slug}) P${pg} | ZQ`
              )
            : clampSeoTitle(
                `${m.englishTitle} Shayari – Page ${pg} | ZQ Feelings`,
                `${m.englishTitle} – Page ${pg} | ZQ`
              )
          : hasCustomLang
            ? clampSeoTitle(
                `${m.englishTitle} Shayari in ${langMeta.englishName} | ZQ Feelings`,
                `${m.englishTitle} Shayari (${langMeta.englishName}) | ZQ`,
                `${m.englishTitle} (${langMeta.slug}) | ZQ`
              )
            : clampSeoTitle(
                m.seoTitle,
                `${m.englishTitle} Shayari | ${SITE_BRAND}`
              ),
      description:
        pg >= 2
          ? hasCustomLang
            ? `${m.englishTitle} Shayari in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): heartfelt apology status on ZQ Feelings.`
            : `${m.name} Shayari – Page ${pg} (Shayari ${rStart}–${rEnd}): heartfelt apology status on ZQ Feelings.`
          : hasCustomLang
            ? `Read ${m.count} heartfelt ${m.englishTitle} Shayari in ${langMeta.englishName} (${langMeta.nativeLabel}) — emotional apology poetry with 20 stylish fonts & share.`
            : m.seoDescription,
      canonicalPath,
      valentineBasePath: hindiBase,
      valentinePageSuffix: pageSuffix,
      langCode: langMeta.hreflang,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Feelings Shayari', path: '/feelings-shayari' },
        { name: `${m.englishTitle} Shayari`, path: hindiBase },
        ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
        ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
      ]
    };
  };

  const buildFeelingMeta = (f, langMeta = SSR_VALENTINE_LANGS[0], pg = activePage) => {
    const hasCustomLang = langMeta.code !== 'hi';
    const hindiBase = f.slug;
    const langBasePath = buildSsrFeelingsPath(hindiBase, langMeta, 1);
    const canonicalPath = buildSsrFeelingsPath(hindiBase, langMeta, pg);
    const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
    const rStart = (pg - 1) * 20 + 1;
    const rEnd = pg * 20;
    const feelDisplayName = f.id === 'birthday-feelings' ? 'Birthday Feelings Shayari' : f.name;
    const feelShortRoot = feelDisplayName.replace(/\s+Shayari$/i, '');

    return {
      title:
        pg >= 2
          ? hasCustomLang
            ? clampSeoTitle(
                `${feelDisplayName} in ${langMeta.englishName} – Page ${pg} | ZQ`,
                `${feelShortRoot} Shayari (${langMeta.englishName}) P${pg} | ZQ`,
                `${feelShortRoot} (${langMeta.slug}) P${pg} | ZQ`
              )
            : clampSeoTitle(
                `${feelDisplayName} – Page ${pg} | ZQ Feelings`,
                `${feelDisplayName} P${pg} | ZQ Feelings`
              )
          : hasCustomLang
            ? clampSeoTitle(
                `${feelDisplayName} in ${langMeta.englishName} | ZQ Feelings`,
                `${feelDisplayName} (${langMeta.englishName}) | ZQ`,
                `${feelShortRoot} (${langMeta.slug}) | ZQ Feelings`
              )
            : clampSeoTitle(
                `${feelDisplayName} (${f.hindiName}) | ${SITE_BRAND}`,
                `${feelDisplayName} in Hindi | ${SITE_BRAND}`
              ),
      description:
        pg >= 2
          ? hasCustomLang
            ? `${feelDisplayName} in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): pre-translated status with 20 stylish fonts & share.`
            : `${f.name} (${f.hindiName}) – Page ${pg} (Shayari ${rStart}–${rEnd}): Hindi, Hinglish & English status with 20 stylish fonts.`
          : hasCustomLang
            ? `Read Best ${feelDisplayName} in ${langMeta.englishName} (${langMeta.nativeLabel}) — original emotional poetry with 20 stylish fonts & WhatsApp share.`
            : f.seoDescription,
      canonicalPath,
      valentineBasePath: hindiBase,
      valentinePageSuffix: pageSuffix,
      langCode: langMeta.hreflang,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Feelings Shayari', path: '/feelings-shayari' },
        { name: f.name, path: hindiBase },
        ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
        ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
      ]
    };
  };

  const buildHoliday35Meta = (holidayId, langMeta = SSR_VALENTINE_LANGS[0], pg = activePage) => {
    const holMeta = SSR_HOLIDAY_35[holidayId];
    const hasCustomLang = langMeta.code !== 'hi';
    const hindiBasePath = `/hi/${holidayId}-shayari`;
    const langBasePath = `/${langMeta.isoPrefix}/${holidayId}-shayari`;
    const canonicalPath = pg >= 2 ? `${langBasePath}/page/${pg}` : langBasePath;
    const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
    const rStart = (pg - 1) * 20 + 1;
    const rEnd = pg * 20;

    const title =
      pg >= 2
        ? clampSeoTitle(
            `${holMeta.shortName} Shayari (${langMeta.englishName}) – Page ${pg} | ZQ`,
            `${holMeta.shortName} (${langMeta.englishName}) P${pg} | ZQ`
          )
        : hasCustomLang
          ? holidayId === 'new-year'
            ? clampSeoTitle(
                `New Year Shayari in ${langMeta.englishName} (1 Jan) | ZQ Feelings`,
                `New Year Shayari in ${langMeta.englishName} | ZQ Feelings`,
                `New Year Shayari (${langMeta.englishName}) | ZQ`
              )
            : clampSeoTitle(
                `Christmas Shayari in ${langMeta.englishName} (25 Dec) | ZQ`,
                `Christmas Day Shayari (${langMeta.englishName}) | ZQ`,
                `Christmas (${langMeta.englishName}) | ZQ`
              )
          : holidayId === 'new-year'
            ? 'New Year Shayari 2026 in Hindi (नया साल) | ZQ Feelings'
            : 'Christmas Day Shayari in Hindi (क्रिसमस) | ZQ Feelings';

    const description =
      pg >= 2
        ? `${holMeta.name} Shayari in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): ${holMeta.dateLabel} wishes with 20 stylish fonts & share.`
        : hasCustomLang
          ? `Best ${holMeta.name} Shayari in ${langMeta.englishName} (${langMeta.nativeLabel} • ${holMeta.dateLabel}) — 25 original wishes with 20 stylish fonts & WhatsApp share.`
          : `Best ${holMeta.name} Shayari in Hindi (${holMeta.hindiName} शायरी • ${holMeta.dateLabel}) — 25 original wishes in 35 languages, 20 stylish fonts & share.`;

    return {
      title,
      description,
      canonicalPath,
      hreflangPrefixSlug: `${holidayId}-shayari`,
      valentinePageSuffix: pageSuffix,
      langCode: langMeta.hreflang,
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Festival Shayari', path: '/festival-shayari' },
        { name: `${holMeta.name} Shayari`, path: hindiBasePath },
        ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
        ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
      ]
    };
  };

  const resolveSsrFeelingsToken = (rawSub) => {
    const subPath = String(rawSub || '').replace(/^\/+|\/+$/g, '');
    const strippedSub = subPath.replace(/-shayari$/, '');

    const matchedMaafi = SSR_MAAFI_SUBS.find((m) => m.id === strippedSub || m.id === subPath);
    if (matchedMaafi) return { kind: 'maafi', meta: matchedMaafi };

    if (subPath === 'birthday-shayari' || strippedSub === 'birthday') {
      const bdayFeel = SSR_FEELINGS.find((f) => f.id === 'birthday-feelings');
      if (bdayFeel) return { kind: 'feeling', meta: bdayFeel };
    }

    for (const feeling of SSR_FEELINGS) {
      const cleanFeelSlug = feeling.slug.replace(/^\/feelings\/+|\/+$/g, '');
      if (
        subPath === cleanFeelSlug ||
        subPath === `${feeling.id}-shayari` ||
        subPath === feeling.id
      ) {
        return { kind: 'feeling', meta: feeling };
      }
    }

    const mappedId = SSR_FEELINGS_MERGE_MAP[strippedSub];
    if (mappedId) {
      const foundMapped = SSR_FEELINGS.find((f) => f.id === mappedId);
      if (foundMapped) return { kind: 'feeling', meta: foundMapped };
    }
    return null;
  };

  if (cleanSlug === 'feelings-shayari' || cleanSlug === 'feelings.html' || cleanSlug === 'feelings') {
    return buildFeelingsHubMeta(SSR_VALENTINE_LANGS[0], activePage);
  }

  if (cleanSlug.startsWith('feelings-shayari/')) {
    const hubLang = resolveValentineLang(cleanSlug.slice('feelings-shayari/'.length));
    if (hubLang) {
      return buildFeelingsHubMeta(hubLang, activePage);
    }
  }

  if (cleanSlug.includes('/')) {
    const pathSegs = cleanSlug.split('/').filter(Boolean);
    const maybePrefixLang = resolveValentineLang(pathSegs[0]);
    if (
      maybePrefixLang &&
      pathSegs[0] !== 'feelings' &&
      pathSegs[0] !== 'religious' &&
      pathSegs[0] !== 'family-rituals' &&
      pathSegs[0] !== 'valentine-week' &&
      pathSegs[0] !== 'maafi'
    ) {
      if (pathSegs.length === 2) {
        const s1 = pathSegs[1];
        if (s1 === 'new-year-shayari' || s1 === 'new-year') {
          return buildHoliday35Meta('new-year', maybePrefixLang, activePage);
        }
        if (s1 === 'christmas-shayari' || s1 === 'christmas' || s1 === 'christmas-day-shayari') {
          return buildHoliday35Meta('christmas', maybePrefixLang, activePage);
        }
        if (s1 === 'feelings-shayari' || s1 === 'feelings') {
          return buildFeelingsHubMeta(maybePrefixLang, activePage);
        }
        const directFeel = resolveSsrFeelingsToken(s1);
        if (directFeel) {
          return directFeel.kind === 'maafi'
            ? buildMaafiMeta(directFeel.meta, maybePrefixLang, activePage)
            : buildFeelingMeta(directFeel.meta, maybePrefixLang, activePage);
        }
      } else if (pathSegs.length === 3 && pathSegs[1] === 'feelings') {
        const prefFeel = resolveSsrFeelingsToken(pathSegs[2]);
        if (prefFeel) {
          return prefFeel.kind === 'maafi'
            ? buildMaafiMeta(prefFeel.meta, maybePrefixLang, activePage)
            : buildFeelingMeta(prefFeel.meta, maybePrefixLang, activePage);
        }
      }
    }

    if (pathSegs.length === 2) {
      const maybeSuffixLang = resolveValentineLang(pathSegs[1]);
      if (maybeSuffixLang) {
        if (pathSegs[0] === 'new-year-shayari' || pathSegs[0] === 'new-year') {
          return buildHoliday35Meta('new-year', maybeSuffixLang, activePage);
        }
        if (pathSegs[0] === 'christmas-shayari' || pathSegs[0] === 'christmas') {
          return buildHoliday35Meta('christmas', maybeSuffixLang, activePage);
        }
      }
    }
  }

  if (
    cleanSlug === '12-months-special-days-shayari' ||
    cleanSlug === 'special-days-shayari' ||
    cleanSlug.startsWith('zq-mansoon-special')
  ) {
    const baseHubPath = '/12-months-special-days-shayari';
    const canonicalHubPath = buildPaginatedCleanPath(baseHubPath, activePage);
    return {
      title:
        activePage >= 2
          ? clampSeoTitle(
              `12 Months Special Shayari – Page ${activePage} | ZQ Feelings`,
              `Special Days – Page ${activePage} | ZQ Feelings`
            )
          : `12 Months Special Days Shayari in Hindi | ${SITE_BRAND}`,
      description:
        activePage >= 2
          ? `12 Months Special Days Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): Jan–Dec wishes in Hindi on ZQ Feelings.`
          : 'Complete Jan–Dec 12 Months Special Days Shayari in Hindi with 20 stylish fonts, 35 languages, one-click copy & WhatsApp share.',
      canonicalPath: canonicalHubPath,
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: '12 Months Special Days', path: baseHubPath },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
      ]
    };
  }

  for (const month of SSR_MONTHS) {
    if (cleanSlug === `${month.id}-special-shayari` || cleanSlug === `${month.id}-shayari`) {
      const basePath = `/${month.id}-special-shayari`;
      const canonicalPath = buildPaginatedCleanPath(basePath, activePage);
      return {
        title:
          activePage >= 2
            ? clampSeoTitle(
                `${month.nameEnglish} Special Shayari – Page ${activePage} | ZQ Feelings`,
                `${month.nameEnglish} Shayari – Page ${activePage} | ZQ`
              )
            : clampSeoTitle(
                month.seoTitle,
                `${month.nameEnglish} Shayari | ${SITE_BRAND}`
              ),
        description:
          activePage >= 2
            ? `${month.nameEnglish} (${month.nameHindi}) Special Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): world & national days wishes on ZQ Feelings.`
            : month.seoDescription,
        canonicalPath,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: '12 Months Special', path: '/12-months-special-days-shayari' },
          { name: `${month.nameEnglish} Shayari`, path: basePath },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    }
  }

  const buildReligiousMeta = (rel) => {
    const canonicalPath = buildPaginatedCleanPath(rel.path, activePage);
    return {
      title:
        activePage >= 2
          ? clampSeoTitle(
              `${rel.englishTitle} Shayari – Page ${activePage} | ZQ Feelings`,
              `${rel.englishTitle} – Page ${activePage} | ZQ`
            )
          : clampSeoTitle(
              rel.seoTitle,
              `${rel.englishTitle} Shayari | ${SITE_BRAND}`
            ),
      description:
        activePage >= 2
          ? `${rel.name} Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd} of ${rel.count}): spiritual quotes & poetry in 20 stylish fonts on ZQ Feelings.`
          : rel.seoDescription,
      canonicalPath,
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: `${rel.englishTitle} Shayari`, path: rel.path },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
      ]
    };
  };

  if (cleanSlug === 'religious' || cleanSlug === 'dharmik-shayari') {
    return buildReligiousMeta(SSR_RELIGIOUS[0]);
  }
  if (cleanSlug.startsWith('religious/')) {
    const relSub = cleanSlug.replace(/^religious\/+/, '').replace(/\/+$/, '').replace(/-shayari$/, '');
    const foundRel = SSR_RELIGIOUS.find((c) => c.id === relSub) || SSR_RELIGIOUS[0];
    return buildReligiousMeta(foundRel);
  }
  for (const rel of SSR_RELIGIOUS) {
    if (cleanSlug === rel.id || cleanSlug === `${rel.id}-shayari`) {
      return buildReligiousMeta(rel);
    }
  }

  const buildRitualMeta = (rit) => {
    const canonicalPath = buildPaginatedCleanPath(rit.path, activePage);
    return {
      title:
        activePage >= 2
          ? clampSeoTitle(
              `${rit.englishTitle} Shayari – Page ${activePage} | ZQ Feelings`,
              `${rit.englishTitle} – Page ${activePage} | ZQ`
            )
          : clampSeoTitle(
              rit.seoTitle,
              `${rit.englishTitle} Shayari | ${SITE_BRAND}`
            ),
      description:
        activePage >= 2
          ? `${rit.name} Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd} of ${rit.count}): auspicious family sanskar wishes with stylish fonts.`
          : rit.seoDescription,
      canonicalPath,
      langCode: 'hi',
      robots: 'index, follow',
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: `${rit.englishTitle} Shayari`, path: rit.path },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
      ]
    };
  };

  if (cleanSlug === 'family-rituals' || cleanSlug === 'sanskar-shayari') {
    return buildRitualMeta(SSR_RITUALS[0]);
  }
  if (cleanSlug.startsWith('family-rituals/')) {
    const ritSub = cleanSlug
      .replace(/^family-rituals\/+/, '')
      .replace(/\/+$/, '')
      .replace(/-shayari$/, '');
    const foundRit = SSR_RITUALS.find((c) => c.id === ritSub) || SSR_RITUALS[0];
    return buildRitualMeta(foundRit);
  }
  for (const rit of SSR_RITUALS) {
    if (cleanSlug === rit.id || cleanSlug === `${rit.id}-shayari`) {
      return buildRitualMeta(rit);
    }
  }

  if (cleanSlug.startsWith('maafi/')) {
    const segs = cleanSlug.split('/').filter(Boolean);
    const maafiSub = (segs[1] || '').replace(/-shayari$/, '');
    const parsedLang = (segs[2] ? resolveValentineLang(segs[2]) : undefined) || SSR_VALENTINE_LANGS[0];
    const foundMaafi = SSR_MAAFI_SUBS.find((m) => m.id === maafiSub);
    if (foundMaafi) return buildMaafiMeta(foundMaafi, parsedLang, activePage);
    return buildFeelingMeta(SSR_FEELINGS.find((f) => f.id === 'sorry'), parsedLang, activePage);
  }

  for (const maafiSub of SSR_MAAFI_SUBS) {
    if (cleanSlug === maafiSub.id || cleanSlug === `${maafiSub.id}-shayari`) {
      return buildMaafiMeta(maafiSub, SSR_VALENTINE_LANGS[0], activePage);
    }
  }

  if (cleanSlug.startsWith('feelings/')) {
    const feelSegs = cleanSlug.split('/').filter(Boolean);
    const subPath = feelSegs[1] || '';
    const strippedSub = subPath.replace(/-shayari$/, '');

    if (!feelSegs[2]) {
      const matchedRel = SSR_RELIGIOUS.find((r) => r.id === strippedSub);
      if (matchedRel) return buildReligiousMeta(matchedRel);

      const matchedRit = SSR_RITUALS.find((r) => r.id === strippedSub);
      if (matchedRit) return buildRitualMeta(matchedRit);
    }

    const resolvedFeel = resolveSsrFeelingsToken(subPath);
    if (resolvedFeel) {
      const parsedLang =
        (feelSegs[2] ? resolveValentineLang(feelSegs[2]) : undefined) || SSR_VALENTINE_LANGS[0];
      return resolvedFeel.kind === 'maafi'
        ? buildMaafiMeta(resolvedFeel.meta, parsedLang, activePage)
        : buildFeelingMeta(resolvedFeel.meta, parsedLang, activePage);
    }
  }

  for (const fest of SSR_FESTIVALS) {
    if (cleanSlug === `${fest.id}-shayari` || cleanSlug === fest.id) {
      if (fest.id === 'new-year' || fest.id === 'christmas') {
        return buildHoliday35Meta(fest.id, SSR_VALENTINE_LANGS[0], activePage);
      }
      const basePath = `/${fest.id}-shayari`;
      const canonicalPath = buildPaginatedCleanPath(basePath, activePage);
      return {
        title:
          activePage >= 2
            ? clampSeoTitle(
                `${fest.name} Festival Shayari – Page ${activePage} | ZQ`,
                `${fest.name} – Page ${activePage} | ZQ Feelings`,
                `${fest.id} – P${activePage} | ZQ Feelings`
              )
            : clampSeoTitle(
                fest.seoTitle,
                `${fest.name} Shayari in Hindi | ${SITE_BRAND}`,
                `${fest.name} Shayari | ${SITE_BRAND}`
              ),
        description:
          activePage >= 2
            ? `${fest.name} Shayari (${fest.hindiName}) – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): unique festival wishes with stylish fonts & share.`
            : fest.seoDescription,
        canonicalPath,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Festival Shayari', path: '/festival-shayari' },
          { name: `${fest.name} Shayari`, path: basePath },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    }
  }

  for (const feeling of SSR_FEELINGS) {
    if (cleanSlug === `${feeling.id}-shayari` || cleanSlug === feeling.id) {
      return buildFeelingMeta(feeling, SSR_VALENTINE_LANGS[0], activePage);
    }
    if (cleanSlug.startsWith(`${feeling.id}-shayari/`)) {
      const tailLang = resolveValentineLang(cleanSlug.slice(`${feeling.id}-shayari/`.length));
      if (tailLang) {
        return buildFeelingMeta(feeling, tailLang, activePage);
      }
    }
  }

  const strippedLegacy = cleanSlug.replace(/-shayari$/, '');
  if (SSR_FEELINGS_MERGE_MAP[strippedLegacy]) {
    const foundMapped = SSR_FEELINGS.find((f) => f.id === SSR_FEELINGS_MERGE_MAP[strippedLegacy]);
    if (foundMapped) return buildFeelingMeta(foundMapped, SSR_VALENTINE_LANGS[0], activePage);
  }

  return buildHomeSeo(activePage);
}

export function renderSsrMetaHtml(
  baseHtml,
  rawPathname,
  siteOrigin = DEFAULT_PRODUCTION_ORIGIN,
  forceNoIndex = false
) {
  const meta = resolveServerSeoMeta(rawPathname);
  const canonicalUrl = `${siteOrigin}${meta.canonicalPath}`;
  const ogImageUrl = `${siteOrigin}/og-image.jpg`;
  const safeTitle = escapeHtml(meta.title);
  const safeDesc = escapeHtml(meta.description);
  const safeLang = escapeHtml(meta.langCode);
  const safeRobots = escapeHtml(forceNoIndex ? 'noindex, nofollow' : meta.robots);
  const ogType = meta.canonicalPath === '/' ? 'website' : 'article';
  const safeImageAlt =
    meta.canonicalPath === '/'
      ? safeTitle
      : escapeHtml(`${meta.title} • ZQ FEELINGS - Dil Ki Awaaz`);

  const pageSuffix = meta.valentinePageSuffix || '';
  const hreflangTags = meta.hreflangPrefixSlug
    ? [
        ...SSR_VALENTINE_LANGS.map((lang) => {
          const hrefUrl = `${siteOrigin}/${lang.isoPrefix}/${meta.hreflangPrefixSlug}${pageSuffix}`;
          return `    <link rel="alternate" hreflang="${lang.hreflang}" href="${hrefUrl}" />`;
        }),
        `    <link rel="alternate" hreflang="x-default" href="${siteOrigin}/hi/${meta.hreflangPrefixSlug}${pageSuffix}" />`
      ].join('\n')
    : meta.valentineBasePath
      ? (() => {
          const trimmedBase = meta.valentineBasePath.replace(/\/+$/, '');
          const hindiHrefUrl = pageSuffix
            ? `${siteOrigin}${trimmedBase}${pageSuffix}`
            : `${siteOrigin}${meta.valentineBasePath}`;
          return [
            ...SSR_VALENTINE_LANGS.map((lang) => {
              const hrefUrl =
                lang.hreflang === 'hi'
                  ? hindiHrefUrl
                  : `${siteOrigin}${trimmedBase}/${lang.slug}${pageSuffix}`;
              return `    <link rel="alternate" hreflang="${lang.hreflang}" href="${hrefUrl}" />`;
            }),
            `    <link rel="alternate" hreflang="x-default" href="${hindiHrefUrl}" />`
          ].join('\n');
        })()
      : [
          `    <link rel="alternate" hreflang="hi" href="${canonicalUrl}" />`,
          `    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`
        ].join('\n');

  const ssrJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        url: `${siteOrigin}/`,
        name: 'Best Shayari - Love, Sad, Diwali, Valentine | ZQ Feelings',
        alternateName: 'ZQ FEELINGS - Dil Ki Awaaz',
        description:
          'Best Love, Sad, Diwali, Valentine and more festival & celebration Shayari in Hindi, English & Urdu for Boy & Girl - ZQ Feelings.',
        inLanguage: 'hi'
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: meta.breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: `${siteOrigin}${crumb.path}`
        }))
      },
      {
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}#collection`,
        url: canonicalUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: meta.langCode,
        isPartOf: { '@id': `${siteOrigin}/#website` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        headline: meta.title,
        description: meta.description,
        image: ogImageUrl,
        inLanguage: meta.langCode,
        author: {
          '@type': 'Organization',
          name: 'ZQ FEELINGS - Dil Ki Awaaz',
          url: `${siteOrigin}/`
        },
        publisher: {
          '@type': 'Organization',
          name: 'ZQ FEELINGS - Dil Ki Awaaz'
        }
      }
    ]
  });

  return baseHtml
    .replace(/<html\s+lang="[^"]*"/i, `<html lang="${safeLang}"`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${ogImageUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${ogImageUrl}" />`
    )
    .replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="robots" content="${safeRobots}" />`
    )
    .replace(
      /<meta\s+name="language"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="language" content="${safeLang}" />`
    )
    .replace(
      /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:type" content="${ogType}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:image:alt" content="${safeImageAlt}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+name="twitter:image:alt"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image:alt" content="${safeImageAlt}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    )
    .replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="[^"]*"\s*\/?>\s*/gi, '')
    .replace(
      /<script\s+id="dynamic-seo-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="dynamic-seo-jsonld" type="application/ld+json">${ssrJsonLd}</script>`
    )
    .replace('</head>', `${hreflangTags}\n  </head>`);
}
