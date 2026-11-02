import { LanguageType, Shayari } from '../types/shayari';

export const LANGUAGE_TAG_LABELS: Record<LanguageType, string> = {
  hindi: 'Hindi',
  hinglish: 'Hinglish',
  english: 'English',
  urdu: 'Urdu'
};

/**
 * Unambiguous Romanized Hindi / Urdu / Hinglish words that do NOT collide
 * with standard English vocabulary.
 */
const STRONG_HINGLISH_WORDS = new Set<string>([
  // Pronouns, auxiliaries & connectors
  'hai',
  'hain',
  'hoon',
  'hun',
  'hu',
  'tha',
  'thi',
  'hota',
  'hoti',
  'hote',
  'hoga',
  'hogi',
  'honge',
  'raha',
  'rahi',
  'rahe',
  'gaya',
  'gayi',
  'gaye',
  'liya',
  'diya',
  'kiya',
  'kya',
  'kyun',
  'kyu',
  'kyunki',
  'kuch',
  'koi',
  'sab',
  'sabhi',
  'har',
  'ek',
  'tu',
  'tum',
  'tumhe',
  'tumhein',
  'tumhara',
  'tumhari',
  'tumhare',
  'tumse',
  'tujhe',
  'tujhse',
  'tujhko',
  'tera',
  'teri',
  'tere',
  'mera',
  'meri',
  'mujhe',
  'mujhse',
  'mujhko',
  'hamara',
  'hamari',
  'hamare',
  'humse',
  'apna',
  'apni',
  'apne',
  'apno',
  'uska',
  'uski',
  'uske',
  'unka',
  'unki',
  'unke',
  'iska',
  'iski',
  'iske',
  'jiska',
  'jiski',
  'jiske',
  'yeh',
  'woh',
  'wo',
  'jo',
  'kahan',
  'jahan',
  'wahan',
  'yahan',
  'kaise',
  'kaisa',
  'kaisi',
  'kabhi',
  'abhi',
  'phir',
  'fir',
  'bhi',
  'nahi',
  'nahin',
  'nhi',
  'naa',
  'aur',
  'magar',
  'lekin',
  'agar',
  'chahe',
  'jab',
  'tab',
  'tak',
  'sath',
  'saath',
  'bina',
  'bagair',
  'liye',
  'isliye',
  // Postpositions
  'mein',
  'se',
  'ko',
  'ka',
  'ki',
  'ke',
  'pe',
  'ne',
  'wala',
  'wali',
  'wale',
  // Shayari & emotions vocabulary
  'dil',
  'pyar',
  'pyaar',
  'mohabbat',
  'ishq',
  'dard',
  'gham',
  'gam',
  'aansu',
  'ansoo',
  'yaad',
  'yaadein',
  'yaadon',
  'zindagi',
  'jindagi',
  'khushi',
  'khushiyan',
  'muskurahat',
  'hansi',
  'sapna',
  'sapne',
  'khwab',
  'khwaab',
  'raat',
  'shaam',
  'subah',
  'waqt',
  'zamana',
  'duniya',
  'khuda',
  'rab',
  'bhagwan',
  'dua',
  'duayein',
  'sajda',
  'ibadat',
  'bewafa',
  'bewafai',
  'wafa',
  'tanhai',
  'tanha',
  'akela',
  'akele',
  'akelapan',
  'khamoshi',
  'khamosh',
  'lafz',
  'alfaaz',
  'alfaz',
  'shayari',
  'ghazal',
  'gazal',
  'dost',
  'dosti',
  'yaar',
  'yaari',
  'sanam',
  'jaan',
  'jaana',
  'jaanu',
  'mehboob',
  'aashiq',
  'ashiq',
  'aashiqui',
  'deewana',
  'diwana',
  'pagal',
  'nazar',
  'nazrein',
  'aankh',
  'aankhein',
  'aankhon',
  'chehra',
  'baat',
  'baatein',
  'baaton',
  'mulaqat',
  'mulakat',
  'judai',
  'intezar',
  'intezaar',
  'maafi',
  'maaf',
  'galti',
  'hausla',
  'manzil',
  'raasta',
  'rasta',
  'safar',
  'kamyabi',
  'mehnat',
  'taqdeer',
  'kismat',
  'naseeb',
  'tevar',
  'akad',
  'shaan',
  'aukaat',
  'badshah',
  'nawabi',
  'ladka',
  'ladki',
  'mubarak',
  'diwali',
  'holi',
  'rakhi',
  'tyohar',
  'badhai',
  'shubhkamnaye',
  'namaste',
  'pranam',
  'salaam',
  'shukriya',
  'alvida',
  // Common Hindi verbs & adjectives in Roman script
  'rehta',
  'rehti',
  'rehte',
  'rehna',
  'karta',
  'karti',
  'karte',
  'karna',
  'karo',
  'kehta',
  'kehti',
  'kehte',
  'kehna',
  'chahta',
  'chahti',
  'chahte',
  'lagta',
  'lagti',
  'lagte',
  'milta',
  'milti',
  'milte',
  'milna',
  'milega',
  'milegi',
  'jaata',
  'jata',
  'jati',
  'jate',
  'jaana',
  'aata',
  'aati',
  'aate',
  'aana',
  'dekhna',
  'dekho',
  'dekh',
  'sochna',
  'socho',
  'soch',
  'samajh',
  'bhool',
  'chhod',
  'rona',
  'hasna',
  'jeena',
  'jeete',
  'marna',
  'sakta',
  'sakti',
  'sakte',
  'chahiye',
  'khoya',
  'khoyi',
  'seekh',
  'badalta',
  'badalti',
  'badalte',
  'bahut',
  'bohot',
  'zyada',
  'thoda',
  'achha',
  'acha',
  'bura',
  'sacha',
  'saccha',
  'jhootha',
  'pyara',
  'pyari',
  'suhana',
  'haseen',
  'khubsurat',
  'khoobsurat',
  'hamesha',
  'zaroor',
  'bilkul',
  'shayad',
  'sirf',
  'bas',
  'itna',
  'utna',
  'kitna',
  'zara'
]);

/**
 * Secondary Roman-Hindi words that occasionally appear as rare English words
 * (e.g. "main", "mere", "din", "mat", "par"). Require >= 2 weak matches if 0 strong matches.
 */
const WEAK_HINGLISH_WORDS = new Set<string>([
  'main',
  'maine',
  'mere',
  'hum',
  'par',
  'mat',
  'din',
  'pal',
  'kar',
  'ye',
  'ab',
  'na',
  'lo'
]);

const DEVANAGARI_REGEX = /[\u0900-\u097F]/;
const PERSO_ARABIC_REGEX = /[\u0600-\u06FF]/;

/**
 * Detects whether a shayari string is written in Hindi, Urdu, Hinglish, or English.
 */
export function detectShayariLanguage(
  text: string,
  fallback: LanguageType = 'hindi'
): LanguageType {
  if (!text || !text.trim()) {
    return fallback;
  }

  // 1. Any Perso-Arabic script characters -> Urdu
  if (PERSO_ARABIC_REGEX.test(text)) {
    return 'urdu';
  }

  // 2. Any Devanagari script characters -> Hindi
  if (DEVANAGARI_REGEX.test(text)) {
    return 'hindi';
  }

  // 2. Extract Latin alphabetic words
  const words = text.toLowerCase().match(/[a-z]+/g);
  if (!words || words.length === 0) {
    return fallback;
  }

  let strongMatches = 0;
  let weakMatches = 0;

  for (const word of words) {
    if (STRONG_HINGLISH_WORDS.has(word)) {
      strongMatches += 1;
      if (strongMatches >= 1) {
        return 'hinglish';
      }
    } else if (WEAK_HINGLISH_WORDS.has(word)) {
      weakMatches += 1;
    }
  }

  if (weakMatches >= 2) {
    return 'hinglish';
  }

  return 'english';
}

/**
 * Resolves the accurate display language for a Shayari card based on the actual rendered lines.
 */
export function resolveShayariLanguage(
  shayari: Shayari,
  rawLines: string[],
  activeLanguage: LanguageType
): LanguageType {
  if (shayari.language) {
    return shayari.language;
  }

  return detectShayariLanguage(rawLines.join('\n'), activeLanguage);
}
