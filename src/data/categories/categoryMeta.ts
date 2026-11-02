import { RELIGIOUS_CATEGORIES } from './religiousMeta';
import { FAMILY_RITUALS_CATEGORIES, FAMILY_RITUALS_MASTER } from './familyRitualsMeta';
import { MaafiSubCategory } from '../../types/shayari';

export const MAAFI_SUBCATEGORIES_META: ReadonlyArray<{
  id: MaafiSubCategory;
  name: string;
  englishTitle: string;
  hindiTitle: string;
  icon: string;
  count: number;
  slug: string;
  subtitle: string;
}> = [
  {
    id: 'maa-se-maafi',
    name: 'Maa Se Maafi (माँ से माफ़ी)',
    englishTitle: 'Maa Se Maafi',
    hindiTitle: 'माँ से माफ़ी',
    icon: '🤱',
    count: 25,
    slug: '/feelings/maa-se-maafi-shayari',
    subtitle: 'नाराज़ माँ को मनाने और ममता के चरणों में क्षमा माँगने की भावुक शायरी'
  },
  {
    id: 'papa-se-maafi',
    name: 'Papa Se Maafi (पापा से माफ़ी)',
    englishTitle: 'Papa Se Maafi',
    hindiTitle: 'पापा से माफ़ी',
    icon: '👨‍👦',
    count: 25,
    slug: '/feelings/papa-se-maafi-shayari',
    subtitle: 'पापा से हुई गलती पर सम्मान और पश्चाताप से भरी दिल छू लेने वाली माफ़ी शायरी'
  },
  {
    id: 'biwi-se-maafi',
    name: 'Biwi Se Maafi (बीवी से माफ़ी)',
    englishTitle: 'Biwi Se Maafi',
    hindiTitle: 'बीवी से माफ़ी',
    icon: '🌹',
    count: 25,
    slug: '/feelings/biwi-se-maafi-shayari',
    subtitle: 'रूठी बीवी का गुस्सा पिघलाने और प्यार से मनाने वाली रोमांटिक सॉरी शायरी'
  },
  {
    id: 'husband-se-maafi',
    name: 'Husband Se Maafi (पति से माफ़ी)',
    englishTitle: 'Husband Se Maafi',
    hindiTitle: 'पति से माफ़ी',
    icon: '💞',
    count: 25,
    slug: '/feelings/husband-se-maafi-shayari',
    subtitle: 'नाराज़ पतिदेव को प्यार से मनाने और मुस्कान लौटाने वाली मीठी सॉरी शायरी'
  }
];

export const FESTIVAL_CATEGORIES = [
  { id: 'diwali', name: 'Diwali', hindiName: 'दीपावली', icon: '🪔' },
  { id: 'bhai-dooj', name: 'Bhai Dooj', hindiName: 'भाई दूज', icon: '🌺' },
  { id: 'chhath-puja', name: 'Chhath Puja', hindiName: 'छठ पूजा', icon: '🌅' },
  { id: 'birthday', name: 'Birthday', hindiName: 'जन्मदिन', icon: '🎂' },
  { id: 'holi', name: 'Holi', hindiName: 'होली', icon: '🎨' },
  { id: 'eid', name: 'Eid', hindiName: 'ईद मुबारक', icon: '🌙' },
  { id: 'bakrid', name: 'Bakrid (Eid al-Adha)', hindiName: 'बकरीद', icon: '🕌' },
  { id: 'new-year', name: 'New Year', hindiName: 'नया साल', icon: '🎉' },
  { id: 'ganesh-chaturthi', name: 'Ganesh Chaturthi', hindiName: 'गणेश चतुर्थी', icon: '🐘' },
  { id: 'gandhi-jayanti', name: 'Gandhi Jayanti', hindiName: 'गांधी जयंती', icon: '🕊️' },
  { id: 'independence-day', name: '15 August Independence Day', hindiName: 'स्वतंत्रता दिवस', icon: '🇮🇳' },
  { id: 'republic-day', name: '26 January Republic Day', hindiName: 'गणतंत्र दिवस', icon: '🎖️' },
  { id: 'rakshabandhan', name: 'Rakshabandhan', hindiName: 'रक्षाबंधन', icon: '🧵' },
  { id: 'janmashtami', name: 'Janmashtami', hindiName: 'जन्माष्टमी', icon: '🦚' },
  { id: 'navratri', name: 'Navratri / Durga Puja', hindiName: 'नवरात्रि', icon: '🔱' },
  { id: 'dussehra', name: 'Dussehra', hindiName: 'दशहरा', icon: '🏹' },
  { id: 'christmas', name: 'Christmas', hindiName: 'क्रिसमस', icon: '🎄' },
  { id: 'lohri', name: 'Lohri', hindiName: 'लोहड़ी', icon: '🔥' },
  { id: 'makar-sankranti', name: 'Makar Sankranti', hindiName: 'मकर संक्रांति', icon: '🪁' },
  { id: 'karva-chauth', name: 'Karva Chauth', hindiName: 'करवा चौथ', icon: '🌕' },
  { id: 'eid-milad', name: 'Eid Milad un Nabi', hindiName: 'ईद मिलाद', icon: '✨' },
  { id: 'mahashivratri', name: 'Mahashivratri', hindiName: 'महाशिवरात्रि', icon: '🕉️' },
  { id: 'ram-navami', name: 'Ram Navami', hindiName: 'राम नवमी', icon: '🚩' },
  { id: 'onam', name: 'Onam', hindiName: 'ओणम', icon: '🛶' },
  { id: 'pongal', name: 'Pongal', hindiName: 'पोंगल', icon: '🌾' },
  { id: 'baisakhi', name: 'Baisakhi', hindiName: 'बैसाखी', icon: '🥁' },
  { id: 'guru-nanak-jayanti', name: 'Guru Nanak Jayanti', hindiName: 'गुरु नानक जयंती', icon: 'ੴ' }
] as const;

export interface FeelingsCategoryMeta {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  icon: string;
  seoDescription: string;
}

export const FEELINGS_CATEGORIES: readonly FeelingsCategoryMeta[] = [
  // 8 Merged Core Categories
  {
    id: 'love',
    name: 'Love Shayari',
    hindiName: 'प्यार शायरी',
    slug: '/feelings/love-shayari/',
    icon: '💖',
    seoDescription:
      'Best Love, Romantic, Ishq & Mohabbat Shayari in Hindi (प्यार और मोहब्बत शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.'
  },
  {
    id: 'sad',
    name: 'Sad Shayari',
    hindiName: 'दर्द शायरी',
    slug: '/feelings/sad-shayari/',
    icon: '💔',
    seoDescription:
      'Heart-touching Sad, Dard & Gham Bhari Shayari in Hindi (सैड और दर्द भरी शायरी). Express deep emotions with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'yaad',
    name: 'Yaad Shayari',
    hindiName: 'याद शायरी',
    slug: '/feelings/yaad-shayari/',
    icon: '⏳',
    seoDescription:
      'Soulful Yaad, Yaadein & Intezaar Shayari in Hindi (याद और इंतज़ार शायरी) — heartfelt status lines with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'kismat',
    name: 'Kismat Shayari',
    hindiName: 'किस्मत शायरी',
    slug: '/feelings/kismat-shayari/',
    icon: '🌟',
    seoDescription:
      'Deep Kismat, Naseeb, Taqdeer & Bhagya Shayari in Hindi (किस्मत और नसीब शायरी). Copy unique destiny status lines in 20 stylish fonts.'
  },
  {
    id: 'khushi',
    name: 'Khushi Shayari',
    hindiName: 'खुशी शायरी',
    slug: '/feelings/khushi-shayari/',
    icon: '😊',
    seoDescription:
      'Joyful Khushi, Happy, Muskaan & Smile Shayari in Hindi (खुशी और मुस्कान शायरी). Spread positivity in 35 languages & 20 stylish fonts.'
  },
  {
    id: 'alone',
    name: 'Alone Shayari',
    hindiName: 'तन्हाई शायरी',
    slug: '/feelings/alone-shayari/',
    icon: '🌙',
    seoDescription:
      'Emotional Alone, Tanhai & Judai Shayari in Hindi (तन्हाई और अकेलापन शायरी) — deep night poetry with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'motivational',
    name: 'Motivational Shayari',
    hindiName: 'मोटिवेशनल शायरी',
    slug: '/feelings/motivational-shayari/',
    icon: '🔥',
    seoDescription:
      'Powerful Motivational, Zindagi & Hausla Shayari in Hindi (मोटिवेशनल और हौसला शायरी) — inspiring success lines to copy & share.'
  },
  {
    id: 'sorry',
    name: 'Sorry Shayari',
    hindiName: 'माफी शायरी',
    slug: '/feelings/sorry-shayari/',
    icon: '🙏',
    seoDescription:
      'Sweet Sorry, Maafi & Roothna-Manana Shayari in Hindi (माफी और रूठना-मनाना शायरी) to win back loved ones with stylish fonts & share.'
  },
  // Kept Categories with Clean Single Names
  {
    id: 'attitude',
    name: 'Attitude Shayari',
    hindiName: 'एटीट्यूड शायरी',
    slug: '/feelings/attitude-shayari/',
    icon: '😎',
    seoDescription:
      'Bold Attitude, Style, Royal Tevar & Akad Shayari in Hindi (एटीट्यूड और तेवर शायरी) for WhatsApp & Instagram status — ZQ Feelings.'
  },
  {
    id: 'boys',
    name: 'Boys Shayari',
    hindiName: 'लड़कों की शायरी',
    slug: '/feelings/boys-shayari/',
    icon: '🦁',
    seoDescription:
      'Best Boys Shayari & Ladko Ke Liye Shayari in Hindi (लड़कों के लिए स्वैग, जज़्बात और रॉयल शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'girls',
    name: 'Girls Shayari',
    hindiName: 'लड़कियों की शायरी',
    slug: '/feelings/girls-shayari/',
    icon: '👑',
    seoDescription:
      'Stylish Girls Shayari & Ladkiyon Ke Liye Shayari in Hindi (लड़कियों के लिए क्यूट और रॉयल शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'dosti',
    name: 'Dosti Shayari',
    hindiName: 'दोस्ती शायरी',
    slug: '/feelings/dosti-shayari/',
    icon: '🤝',
    seoDescription:
      'Heartwarming Dosti, Yaari & True Friendship Shayari in Hindi (सच्ची दोस्ती और यारी शायरी) for best friends — copy & WhatsApp share.'
  },
  {
    id: 'bewafa',
    name: 'Bewafa Shayari',
    hindiName: 'बेवफ़ा शायरी',
    slug: '/feelings/bewafa-shayari/',
    icon: '🥀',
    seoDescription:
      'Deep Bewafa, Dhokha & Broken Trust Shayari in Hindi (बेवफ़ा और धोखा शायरी) with 20 stylish fonts, copy & instant WhatsApp share.'
  },
  {
    id: 'breakup',
    name: 'Breakup Shayari',
    hindiName: 'ब्रेकअप शायरी',
    slug: '/feelings/breakup-shayari/',
    icon: '💔',
    seoDescription:
      'Emotional Breakup & Heartbreak Shayari in Hindi (ब्रेकअप और टूटे दिल की शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.'
  },
  {
    id: 'good-morning',
    name: 'Good Morning Shayari',
    hindiName: 'गुड मॉर्निंग शायरी',
    slug: '/feelings/good-morning-shayari/',
    icon: '🌅',
    seoDescription:
      'Fresh Good Morning & Suprabhat Wishes Shayari in Hindi (सुप्रभात और गुड मॉर्निंग शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'good-night',
    name: 'Good Night Shayari',
    hindiName: 'गुड नाइट शायरी',
    slug: '/feelings/good-night-shayari/',
    icon: '🌌',
    seoDescription:
      'Peaceful Good Night & Shubh Ratri Wishes Shayari in Hindi (शुभ रात्रि और गुड नाइट शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: '2-line',
    name: '2 Line Shayari',
    hindiName: 'दो लाइन शायरी',
    slug: '/feelings/2-line-shayari/',
    icon: '✨',
    seoDescription:
      'Short & deep 2 Line Shayari & Do Line Status in Hindi (दो लाइन की बेहतरीन शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'family',
    name: 'Family Shayari',
    hindiName: 'परिवार शायरी',
    slug: '/feelings/family-shayari/',
    icon: '🏡',
    seoDescription:
      'Warm Family, Maa Papa & Ghar Parivar Shayari in Hindi (परिवार और माँ-पापा शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'bhai-behen',
    name: 'Bhai Behen Shayari',
    hindiName: 'भाई बहन शायरी',
    slug: '/feelings/bhai-behen-shayari/',
    icon: '👫',
    seoDescription:
      'Loving Bhai Behen, Brother & Sister Shayari in Hindi (भाई-बहन के प्यार की शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'birthday-feelings',
    name: 'Birthday Shayari',
    hindiName: 'जन्मदिन शायरी',
    slug: '/feelings/birthday-shayari/',
    icon: '🎂',
    seoDescription:
      'Heartfelt Birthday Wishes & Janmdin Mubarak Shayari in Hindi (जन्मदिन मुबारक फीलिंग्स शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'miss-you',
    name: 'Miss You Shayari',
    hindiName: 'मिस यू शायरी',
    slug: '/feelings/miss-you-shayari/',
    icon: '🥺',
    seoDescription:
      'Touching Miss You & Teri Kami Shayari in Hindi (मिस यू और तेरी कमी शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.'
  },
  {
    id: 'heart-touching',
    name: 'Heart Touching Shayari',
    hindiName: 'हार्ट टचिंग शायरी',
    slug: '/feelings/heart-touching-shayari/',
    icon: '💗',
    seoDescription:
      'Deep Heart Touching & Dil Chhoo Lene Wali Shayari in Hindi (दिल छू लेने वाली शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'emotional',
    name: 'Emotional Shayari',
    hindiName: 'इमोशनल शायरी',
    slug: '/feelings/emotional-shayari/',
    icon: '🥹',
    seoDescription:
      'Soulful Emotional & Jazbaati Shayari in Hindi (जज़्बाती और इमोशनल शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.'
  },
  {
    id: 'sad-love',
    name: 'Sad Love Shayari',
    hindiName: 'सैड लव शायरी',
    slug: '/feelings/sad-love-shayari/',
    icon: '🌧️',
    seoDescription:
      'Poignant Sad Love & Adhura Pyar Shayari in Hindi (अधूरा प्यार और सैड लव शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'khwab',
    name: 'Khwab Shayari',
    hindiName: 'ख़्वाब शायरी',
    slug: '/feelings/khwab-shayari/',
    icon: '🌠',
    seoDescription:
      'Dreamy Khwab & Sapne Shayari in Hindi (ख़्वाब और सपनों की शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.'
  },
  {
    id: 'matlabi-duniya',
    name: 'Matlabi Duniya Shayari',
    hindiName: 'मतलबी दुनिया शायरी',
    slug: '/feelings/matlabi-duniya-shayari/',
    icon: '🎭',
    seoDescription:
      'Real-life Matlabi Duniya & Matlabi Log Shayari in Hindi (मतलबी दुनिया और मतलबी लोग शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'funny',
    name: 'Funny Shayari',
    hindiName: 'फनी शायरी',
    slug: '/feelings/funny-shayari/',
    icon: '😂',
    seoDescription:
      'Hilarious Funny, Jokes, Comedy & Chutkule Shayari in Hindi (मज़ेदार फनी जोक्स और चुटकुले शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'sharabi',
    name: 'Sharabi Shayari',
    hindiName: 'शराबी शायरी',
    slug: '/feelings/sharabi-shayari/',
    icon: '🍷',
    seoDescription:
      'Soulful Sharabi, Maikhana, Jaam & Mehfil Shayari in Hindi (शराबी और मयख़ाना शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  }
] as const;

export const FEELINGS_CATEGORY_MERGE_MAP: Record<string, string> = {
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

export function normalizeFeelingsCategoryId(categoryId: string): string {
  if (!categoryId) return 'love';
  const cleaned = categoryId.trim().toLowerCase();
  if (cleaned === 'all' || cleaned === 'sabhi-feelings' || cleaned === 'सभी फीलिंग्स') {
    return 'love';
  }
  return FEELINGS_CATEGORY_MERGE_MAP[cleaned] || cleaned;
}

export const ALL_CATEGORIES = [
  ...FESTIVAL_CATEGORIES.map((f) => ({ id: f.id, name: f.name, type: 'festival' as const })),
  ...FEELINGS_CATEGORIES.map((f) => ({ id: f.id, name: f.name, type: 'feelings' as const })),
  ...RELIGIOUS_CATEGORIES.map((r) => ({ id: r.id, name: r.englishTitle, type: 'religious' as const })),
  ...FAMILY_RITUALS_CATEGORIES.map((r) => ({
    id: r.id,
    name: r.englishTitle,
    type: 'family-rituals' as const
  }))
];

export const ALL_CATEGORIES_FOR_POSTING = [
  ...FESTIVAL_CATEGORIES.map((f) => ({
    id: f.id,
    name: f.name,
    hindiName: f.hindiName,
    icon: f.icon,
    type: 'festival' as const
  })),
  ...FEELINGS_CATEGORIES.map((f) => ({
    id: f.id,
    name: f.name,
    hindiName: f.hindiName,
    icon: f.icon,
    type: 'feelings' as const
  })),
  ...MAAFI_SUBCATEGORIES_META.map((m) => ({
    id: m.id,
    name: m.englishTitle,
    hindiName: m.hindiTitle,
    icon: m.icon,
    type: 'feelings' as const
  })),
  ...RELIGIOUS_CATEGORIES.map((r) => ({
    id: r.id,
    name: r.englishTitle,
    hindiName: r.hindiTitle,
    icon: r.icon,
    type: 'religious' as const
  })),
  ...FAMILY_RITUALS_CATEGORIES.map((r) => ({
    id: r.id,
    name: r.englishTitle,
    hindiName: r.hindiTitle,
    icon: r.icon,
    type: 'family-rituals' as const
  }))
];

export { RELIGIOUS_CATEGORIES, FAMILY_RITUALS_CATEGORIES, FAMILY_RITUALS_MASTER };
