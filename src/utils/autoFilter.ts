import { BlockedLog } from '../types/shayari';
import blueprint from '../../firebase-blueprint.json';

const SHAYARI_TEXT_BOUNDS = blueprint.entities.ShayariDoc.properties.text;
export const AUTO_FILTER_MIN_CHARS = SHAYARI_TEXT_BOUNDS.minLength; // 10
export const AUTO_FILTER_MAX_CHARS = SHAYARI_TEXT_BOUNDS.maxLength; // 500
export const AUTO_FILTER_MIN_WORDS = 10; // Compulsory minimum 10 words
export const DUPLICATE_SIMILARITY_THRESHOLD = 0.8; // 80% similarity = Auto Reject
export const MAX_POSTS_PER_WINDOW = 3;
export const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

export const CLEAN_LANGUAGE_BLOCK_MESSAGE =
  'Gaali, ganda shabd, link ya phone number allowed nahi hai. Kripya saaf shabdon me likhein 🙏';
export const COPY_PASTE_SPAM_BLOCK_MESSAGE =
  'Copy-paste, spam, @handle ya kisi dusri website ka naam allowed nahi hai. Kripya 100% original likhein 🙏';
export const DUPLICATE_SHAYARI_BLOCK_MESSAGE =
  'Ye shayari pehle se maujood content se 80%+ milti-julti (Copy/Duplicate) hai. Kripya apni khud ki nayi original shayari likhein 🙏';

// 75+ Comprehensive Hindi (Devanagari) abusive & explicit words
export const HINDI_DEVANAGARI_ABUSE_WORDS: string[] = [
  'मादरचोद', 'मदरचोद', 'मादरजात', 'बहनचोद', 'बेहेनचोद', 'भेनचोद', 'बेनचोद', 'बाहनचोद',
  'भोसड़ीके', 'भोसडीके', 'भोसड़ी', 'भोसडी', 'भोसड़ा', 'भोसडा', 'भोसड़ीवाला', 'भोसडीवाला',
  'चूतिया', 'चूतिये', 'चुतिया', 'चुतिये', 'चूतियापा', 'चूतड़', 'चूत', 'चुदाई', 'चोदना', 'चोदू', 'चोद', 'चुदवा',
  'गांडू', 'गाण्डू', 'गांड', 'गाण्ड', 'गांडमरा', 'गांडूगिरी',
  'लंड', 'लण्ड', 'लौड़ा', 'लौड़े', 'लौडा', 'लौडे', 'लोड़ा', 'लोड़े', 'लवड़ा', 'लवड़े',
  'रंडी', 'रण्डी', 'रांड', 'राण्ड', 'रखैल', 'रंडीबाज़', 'रंडीखाना',
  'भड़वा', 'भड़वे', 'भडवा', 'भडवे', 'दल्ला', 'दल्ले', 'हिजड़ा',
  'हरामी', 'हरामखोर', 'हरामजादे', 'हरामज़ादे', 'हरामजादा', 'हरामज़ादा', 'हरामखोरी',
  'कमीना', 'कमीने', 'कमीनी', 'कुतिया', 'कुत्तेकीऔलाद', 'नालायक़',
  'झांट', 'झाँट', 'झाटू', 'टट्टे', 'टट्टा', 'चूची', 'मुठ्ठल', 'मुठ',
  'पोर्न', 'नंगी', 'नंगा', 'बलात्कार', 'सेक्सी', 'सेक्स'
];

// 135+ Romanized Hindi (Hinglish) & English bad words (checked per whole token + leet-normalized token)
// Combining HINDI_DEVANAGARI_ABUSE_WORDS + EXACT_BAD_TOKENS_LIST = 210+ distinct bad words!
export const EXACT_BAD_TOKENS_LIST: string[] = [
  // Romanized Hindi / Hinglish abuse words (75+)
  'madarchod', 'madarchodh', 'maderchod', 'madarchot', 'madarjaat',
  'bhenchod', 'behenchod', 'benchod', 'bahenchod', 'behanchod', 'bhenchodd', 'bhenke', 'bhenkelode',
  'bhosdike', 'bhosdi', 'bhosadi', 'bhosda', 'bhosada', 'bhosdiwala', 'bhosdiwale', 'bhosdk',
  'chutiya', 'chutiye', 'chutya', 'chutiapa', 'chutiyapa', 'choot', 'chut', 'chutad',
  'gandu', 'gaandu', 'gaand', 'gand', 'gandmara', 'gaandfat',
  'harami', 'haramkhor', 'haramzada', 'haramzade', 'haramzadi', 'haramjada',
  'kamina', 'kameena', 'kaminey', 'kamine', 'kamini', 'kuttiya', 'kutiya',
  'randi', 'raand', 'rund', 'rakhail', 'randibaaz', 'randikhana', 'chinaal', 'chinal',
  'lavda', 'lavde', 'lauda', 'laude', 'lund', 'loda', 'lode', 'lawda', 'lawde', 'lodha',
  'bhadwa', 'bhadva', 'bhadwe', 'bhadve', 'dalla', 'dalle',
  'chudai', 'chodna', 'choda', 'chodu', 'chudwa', 'chod',
  'jhaat', 'jhat', 'jhatu', 'jhaatu', 'tatte', 'tatta', 'chuchi', 'mutthal', 'muth',
  'suar', 'kutta', 'saala', 'saali', 'hijra', 'chakka',
  'bc', 'mc', 'bsdk', 'mkc', 'bkl', 'tmkc', 'mcbc', 'gnd', 'lnd',

  // English profanity, slurs & explicit words (65+)
  'fuck', 'fucking', 'fucker', 'fucked', 'fucks', 'fck', 'fuk', 'fuq', 'phuck',
  'motherfucker', 'motherfucking', 'mf', 'mofo',
  'bitch', 'bitches', 'bitchy', 'sonofabitch', 'bastard', 'bastards',
  'asshole', 'assholes', 'arsehole', 'arse', 'ass', 'jackass', 'dumbass',
  'dick', 'dicks', 'dickhead', 'cock', 'cocks', 'cocksucker',
  'pussy', 'pussies', 'cunt', 'cunts', 'twat', 'prick', 'wanker', 'bollocks',
  'whore', 'whores', 'slut', 'sluts', 'skank', 'prostitute', 'hooker', 'pimp',
  'blowjob', 'handjob', 'rimjob', 'deepthroat', 'cum', 'cumshot', 'jizz',
  'nude', 'nudes', 'naked', 'stripper',
  'porn', 'porno', 'pornography', 'xxx', 'hentai', 'onlyfans', 'xvideos', 'pornhub', 'xnxx',
  'sex', 'sexy', 'sext', 'vagina', 'penis', 'anal', 'dildo', 'vibrator',
  'masturbate', 'masturbation', 'orgasm', 'erection', 'boob', 'boobs', 'boobies', 'tits', 'titties', 'nipple', 'nipples',
  'milf', 'horny', 'rape', 'rapist', 'pedophile', 'incest',
  'shit', 'shitty', 'bullshit', 'wtf', 'stfu', 'gtfo', 'nigga', 'nigger', 'faggot', 'retard'
];

export const BANNED_WORDS: string[] = [
  ...HINDI_DEVANAGARI_ABUSE_WORDS,
  ...EXACT_BAD_TOKENS_LIST
];

const EXACT_BAD_TOKENS = new Set<string>(EXACT_BAD_TOKENS_LIST);

const STRONG_BAD_SUBSTRINGS: string[] = [
  'madarchod', 'maderchod', 'madarchot', 'bhenchod', 'behenchod', 'benchod', 'bahenchod',
  'bhosdike', 'bhosdi', 'bhosda', 'chutiya', 'chutiye', 'chutya', 'chutiyapa',
  'haramkhor', 'haramzada', 'randibaaz', 'randikhana', 'chudai', 'bhadwa', 'bhadva',
  'motherfucker', 'fucker', 'fucking', 'fuck', 'asshole', 'dickhead', 'cocksucker',
  'blowjob', 'handjob', 'pornography', 'pornhub', 'xvideos', 'onlyfans', 'masturbat'
];

const STRONG_DEVANAGARI_SLURS: string[] = [
  'मादरचोद', 'मदरचोद', 'बहनचोद', 'बेहेनचोद', 'भेनचोद', 'भोसड़ी', 'भोसडी', 'भोसड़ा',
  'चूतिया', 'चूतिये', 'चुतिया', 'चुदाई', 'हरामखोर', 'हरामजादे', 'हरामज़ादे', 'गांडू', 'गाण्डू', 'रंडीबाज़'
];

// Masked profanity patterns (e.g. f*ck, f**k, b*tch, ch*tiya, m*darchod, b*dk)
const MASKED_PROFANITY_REGEX = /\b(?:f+[\W_]*u*[\W_]*c+[\W_]*k+|f+\*+k+|b+\*+t+c+h+|s+h+\*+t+|c+h+\*+t+i*y*a*|m+\*+d+a*r*c*h*o*d*|b+h+\*+n+c*h*o*d*|b+s+\*+d*k*)\b/i;

// URL & Link detection (blocks http/https, www, shortened links, and domain names)
const STRICT_LINK_REGEX = /(?:https?:\/\/|ftp:\/\/|www\.)\S+|\b(?:bit\.ly|t\.me|wa\.me|youtu\.be|tinyurl\.com|goo\.gl|instagram\.com|facebook\.com|telegram\.me)\b\S*|\b[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.(?:com|in|net|org|io|me|co|xyz|info|biz|online|site|shop|store|app|dev|tech|link|click|club|live|tv|cc|tk|blogspot|wordpress)\b/i;

// Phone number detection (10-16 digits ASCII or Devanagari)
const ASCII_OR_HINDI_PHONE_REGEX = /(?:\+?\d[\d\s\-().]{8,16}\d)|(?:[०-९][\s\-().०-९]{8,16}[०-९])/;

// Email detection
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

// Copy-paste / scraped attribution / social spam markers
const COPY_PASTE_ATTRIBUTION_REGEX =
  /(?:\bcopied\s+from\b|\bforwarded\s+as\s+received\b|\bforwarded\s+message\b|\bsource\s*:|\bcredit\s*:|\bread\s+more\s+at\b|\bvisit\s+our\b|\bfollow\s+me\b|\bfollow\s+on\s+insta|\bdm\s+for\s+(?:paid|promo|collab)\b|\bpaid\s+promo\b|\bjoin\s+(?:my\s+)?(?:telegram|whatsapp)\b|@[a-z0-9_.]{3,}|©|™)/i;

// Character flood spam (e.g. "aaaaaaaa", "........", "!!!!!!!!")
const REPEATED_CHAR_SPAM_REGEX = /(.)\1{6,}/u;

const POST_TIMESTAMPS_KEY = 'zq_user_post_timestamps';
const BLOCKED_LOGS_KEY = 'zq_blocked_logs';

export function getBlockedLogs(): BlockedLog[] {
  try {
    const raw = localStorage.getItem(BLOCKED_LOGS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearBlockedLogs(): void {
  try {
    localStorage.removeItem(BLOCKED_LOGS_KEY);
  } catch {
    // ignore
  }
}

export function saveBlockedLog(
  userNameOrObj: string | Omit<BlockedLog, 'id' | 'date'>,
  text?: string,
  reason?: string
) {
  try {
    const logs = getBlockedLogs();
    let newLog: BlockedLog;
    if (typeof userNameOrObj === 'string') {
      newLog = {
        id: `block-${Date.now()}`,
        userName: userNameOrObj,
        text: text || '',
        reason: reason || 'अवांछित सामग्री',
        date: new Date().toLocaleString('hi-IN', { timeZone: 'Asia/Kolkata' })
      };
    } else {
      newLog = {
        ...userNameOrObj,
        id: `block-${Date.now()}`,
        date: new Date().toLocaleString('hi-IN', { timeZone: 'Asia/Kolkata' })
      };
    }
    logs.unshift(newLog);
    localStorage.setItem(BLOCKED_LOGS_KEY, JSON.stringify(logs.slice(0, 50)));
  } catch {
    // ignore
  }
}

export function normalizeText(str: string): string {
  return str
    .toLowerCase()
    .replace(/[0-9]/g, (ch) => {
      if (ch === '0') return 'o';
      if (ch === '1') return 'i';
      if (ch === '3') return 'e';
      if (ch === '4') return 'a';
      if (ch === '5') return 's';
      if (ch === '8') return 'b';
      return ch;
    })
    .replace(/[@]/g, 'a')
    .replace(/[$]/g, 's')
    .replace(/[\s.*\-_~!#%^&()+=\[\]{};:'"\\|<>,?/]+/g, '');
}

function normalizeAsciiToken(token: string): string {
  return token
    .toLowerCase()
    .replace(/0/g, 'o')
    .replace(/1/g, 'i')
    .replace(/3/g, 'e')
    .replace(/4/g, 'a')
    .replace(/5/g, 's')
    .replace(/@/g, 'a')
    .replace(/\$/g, 's')
    .replace(/[^a-z]/g, '');
}

/**
 * Extracts genuine words across Devanagari, Latin, Urdu, and other scripts,
 * ignoring standalone emojis or punctuation.
 */
export function extractMeaningfulWords(input: string): string[] {
  if (!input) return [];
  const matches = input.toLowerCase().match(/[\p{L}\p{M}\p{N}]+/gu);
  return matches ? matches.filter((w) => w.trim().length > 0) : [];
}

export function countMeaningfulWords(input: string): number {
  return extractMeaningfulWords(input).length;
}

/**
 * Checks for copy-paste attributions (@handles, "copied from", "credit:"),
 * character flood spam, or repetitive single-word spam.
 */
export function hasCopyPasteOrSpamPatterns(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  if (COPY_PASTE_ATTRIBUTION_REGEX.test(trimmed)) {
    return true;
  }

  if (REPEATED_CHAR_SPAM_REGEX.test(trimmed)) {
    return true;
  }

  const words = extractMeaningfulWords(trimmed);
  if (words.length >= 8) {
    const uniqueWords = new Set(words);
    if (uniqueWords.size < Math.ceil(words.length * 0.38)) {
      return true;
    }
  }

  return false;
}

function buildCharTrigrams(str: string): Map<string, number> {
  const map = new Map<string, number>();
  const chars = Array.from(str);
  if (chars.length < 3) {
    if (chars.length > 0) {
      map.set(str, 1);
    }
    return map;
  }
  for (let i = 0; i <= chars.length - 3; i++) {
    const gram = chars[i] + chars[i + 1] + chars[i + 2];
    map.set(gram, (map.get(gram) || 0) + 1);
  }
  return map;
}

function multisetDice(mapA: Map<string, number>, mapB: Map<string, number>): number {
  if (mapA.size === 0 || mapB.size === 0) return 0;
  let totalA = 0;
  let totalB = 0;
  let intersection = 0;

  for (const [k, countA] of mapA) {
    totalA += countA;
    const countB = mapB.get(k) || 0;
    if (countB > 0) {
      intersection += Math.min(countA, countB);
    }
  }
  for (const countB of mapB.values()) {
    totalB += countB;
  }

  if (totalA + totalB === 0) return 0;
  return (2 * intersection) / (totalA + totalB);
}

/**
 * Computes normalized similarity [0..1] between two texts using the max of
 * word-level multiset Sørensen–Dice and character 3-gram Sørensen–Dice.
 * Catches >= 80% copied/paraphrased shayaris across Hindi, Hinglish, and English.
 */
export function computeTextSimilarity(textA: string, textB: string): number {
  const wordsA = extractMeaningfulWords(textA);
  const wordsB = extractMeaningfulWords(textB);
  if (wordsA.length === 0 || wordsB.length === 0) return 0;

  const joinedA = wordsA.join(' ');
  const joinedB = wordsB.join(' ');
  if (joinedA === joinedB) return 1;

  const minLen = Math.min(joinedA.length, joinedB.length);
  const maxLen = Math.max(joinedA.length, joinedB.length);
  if (minLen >= 24 && (joinedA.includes(joinedB) || joinedB.includes(joinedA))) {
    const containmentRatio = minLen / maxLen;
    if (containmentRatio >= 0.8) {
      return containmentRatio;
    }
  }

  const wordBagA = new Map<string, number>();
  for (const w of wordsA) wordBagA.set(w, (wordBagA.get(w) || 0) + 1);
  const wordBagB = new Map<string, number>();
  for (const w of wordsB) wordBagB.set(w, (wordBagB.get(w) || 0) + 1);

  const wordSim = multisetDice(wordBagA, wordBagB);
  if (wordSim >= 0.85) return wordSim;

  const triSim = multisetDice(buildCharTrigrams(joinedA), buildCharTrigrams(joinedB));
  return Math.max(wordSim, triSim);
}

export function isDuplicateBySimilarity(
  candidateText: string,
  existingTexts: readonly string[],
  threshold = DUPLICATE_SIMILARITY_THRESHOLD
): boolean {
  if (!candidateText.trim() || existingTexts.length === 0) return false;
  for (let i = 0; i < existingTexts.length; i++) {
    const existing = existingTexts[i];
    if (!existing) continue;
    if (computeTextSimilarity(candidateText, existing) >= threshold) {
      return true;
    }
  }
  return false;
}

function containsPhoneNumber(value: string): boolean {
  if (ASCII_OR_HINDI_PHONE_REGEX.test(value)) {
    const asciiDigits = value.replace(/\D/g, '');
    if (asciiDigits.length >= 10) return true;
    const hindiDigits = value.replace(/[^०-९]/g, '');
    if (hindiDigits.length >= 10) return true;
  }
  const totalDigitsInLine = value
    .split('\n')
    .some(
      (line) =>
        line.replace(/\D/g, '').length >= 10 || line.replace(/[^०-९]/g, '').length >= 10
    );
  return totalDigitsInLine;
}

function hasBadContentInSingleField(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  // 1. Links / URLs / Emails
  if (STRICT_LINK_REGEX.test(trimmed) || EMAIL_REGEX.test(trimmed)) {
    return true;
  }

  // 2. Phone numbers (10+ digits, formatted or unformatted)
  if (containsPhoneNumber(trimmed)) {
    return true;
  }

  // 3. Masked profanity (f*ck, ch*tiya, etc.)
  if (MASKED_PROFANITY_REGEX.test(trimmed)) {
    return true;
  }

  // 4. Token-level Hindi Devanagari + Hinglish + English bad word check
  const rawTokens = trimmed
    .toLowerCase()
    .split(/[\s,.;:!?'"()[\]{}<>|/\\।॥\-_*~`^+=]+/)
    .filter(Boolean);

  for (const token of rawTokens) {
    if (HINDI_DEVANAGARI_ABUSE_WORDS.includes(token)) {
      return true;
    }
    if (EXACT_BAD_TOKENS.has(token)) {
      return true;
    }
    const normalizedToken = normalizeAsciiToken(token);
    if (normalizedToken && EXACT_BAD_TOKENS.has(normalizedToken)) {
      return true;
    }
    for (const strong of STRONG_BAD_SUBSTRINGS) {
      if (normalizedToken.includes(strong)) {
        return true;
      }
    }
  }

  // 5. Compound Devanagari slur substring check
  for (const slur of STRONG_DEVANAGARI_SLURS) {
    if (trimmed.includes(slur)) {
      return true;
    }
  }

  // 6. Collapsed ASCII check for spaced-out obfuscations like "f u c k" or "m.a.d.a.r.c.h.o.d"
  const collapsedAscii = normalizeAsciiToken(trimmed);
  for (const strong of STRONG_BAD_SUBSTRINGS) {
    if (collapsedAscii.includes(strong)) {
      return true;
    }
  }

  return false;
}

export function hasBadWordsOrLinks(shayariText: string, userName = ''): boolean {
  return hasBadContentInSingleField(shayariText) || hasBadContentInSingleField(userName);
}

export function hasExceededPostRateLimit(): boolean {
  try {
    const raw = localStorage.getItem(POST_TIMESTAMPS_KEY);
    const timestamps: number[] = raw ? JSON.parse(raw) : [];
    const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
    const recent = timestamps.filter((t) => typeof t === 'number' && t > cutoff);
    return recent.length >= MAX_POSTS_PER_WINDOW;
  } catch {
    return false;
  }
}

export function recordSuccessfulPost(): void {
  try {
    const raw = localStorage.getItem(POST_TIMESTAMPS_KEY);
    const timestamps: number[] = raw ? JSON.parse(raw) : [];
    const now = Date.now();
    const cutoff = now - RATE_LIMIT_WINDOW_MS;
    const recent = timestamps.filter((t) => typeof t === 'number' && t > cutoff);
    recent.push(now);
    localStorage.setItem(POST_TIMESTAMPS_KEY, JSON.stringify(recent));
  } catch {
    // ignore
  }
}

export interface AutoApproveValidationResult {
  allowed: boolean;
  code?:
    | 'EMPTY'
    | 'BAD_CONTENT'
    | 'SPAM_OR_COPY_PASTE'
    | 'TOO_FEW_WORDS'
    | 'TOO_SHORT'
    | 'TOO_LONG'
    | 'DUPLICATE'
    | 'RATE_LIMIT';
  message?: string;
}

/**
 * Smart Auto-Filter Before LIVE for Apni Shayari Likhen:
 * - Gaali (210+ Hindi/Hinglish/English bad words), Links/URLs, Emails, Phone numbers = Auto Reject
 * - Copy-paste attributions (@handles, copied from, spam repetition) = Auto Reject
 * - Fewer than 10 words (< 10 shabd) = Auto Reject
 * - Duplicate (>= 80% similar to existing global/seed/site shayaris) = Auto Reject
 * - Clean original shayari = Auto LIVE!
 */
export function validateAutoApproveShayari(
  shayariText: string,
  authorName = '',
  existingShayariTexts: readonly string[] = []
): AutoApproveValidationResult {
  const cleanText = shayariText.trim();
  const cleanAuthor = authorName.trim();

  if (!cleanText) {
    return {
      allowed: false,
      code: 'EMPTY',
      message: 'Kripya post karne se pehle apni original shayari likhein 🙏'
    };
  }

  // 1. Instant Bad Words / Links / Phone Number / Email Block
  if (hasBadWordsOrLinks(cleanText, cleanAuthor)) {
    return {
      allowed: false,
      code: 'BAD_CONTENT',
      message: CLEAN_LANGUAGE_BLOCK_MESSAGE
    };
  }

  // 2. Copy-paste markers, @handles, character flood, or repetitive word spam
  if (hasCopyPasteOrSpamPatterns(cleanText) || hasCopyPasteOrSpamPatterns(cleanAuthor)) {
    return {
      allowed: false,
      code: 'SPAM_OR_COPY_PASTE',
      message: COPY_PASTE_SPAM_BLOCK_MESSAGE
    };
  }

  // 3. Compulsory Minimum 10 Words Check ("10 shabd se kam = Auto Reject")
  const wordCount = countMeaningfulWords(cleanText);
  if (wordCount < AUTO_FILTER_MIN_WORDS) {
    return {
      allowed: false,
      code: 'TOO_FEW_WORDS',
      message: `10 shabd se kam wali shayari Auto-Reject ho jaati hai (Abhi ${wordCount} shabd hain). Kripya kam se kam ${AUTO_FILTER_MIN_WORDS} shabdon me apni poori original shayari likhein 🙏`
    };
  }

  // 4. Character Length Check (10 - 500 chars, synced with Firestore Rules .size() code points)
  const codePointLength = Array.from(cleanText).length;
  if (codePointLength < AUTO_FILTER_MIN_CHARS) {
    return {
      allowed: false,
      code: 'TOO_SHORT',
      message: `Shayari kam se kam ${AUTO_FILTER_MIN_CHARS} aksharon aur ${AUTO_FILTER_MIN_WORDS} shabdon ki honi chahiye.`
    };
  }

  if (codePointLength > AUTO_FILTER_MAX_CHARS || cleanText.length > AUTO_FILTER_MAX_CHARS) {
    return {
      allowed: false,
      code: 'TOO_LONG',
      message: `Shayari adhiktam ${AUTO_FILTER_MAX_CHARS} aksharon tak hi likhein (10-500 chars).`
    };
  }

  // 5. Duplicate Check (>= 80% similarity = Auto Reject)
  if (
    existingShayariTexts.length > 0 &&
    isDuplicateBySimilarity(cleanText, existingShayariTexts, DUPLICATE_SIMILARITY_THRESHOLD)
  ) {
    return {
      allowed: false,
      code: 'DUPLICATE',
      message: DUPLICATE_SHAYARI_BLOCK_MESSAGE
    };
  }

  // 6. Rate Limit Check (Max 3 posts per 10 minutes)
  if (hasExceededPostRateLimit()) {
    return {
      allowed: false,
      code: 'RATE_LIMIT',
      message:
        'Aap 10 minute me adhiktam 3 shayari hi post kar sakte hain. Kripya thodi der baad likhein 🙏'
    };
  }

  return { allowed: true };
}

export interface CleanCheckResult {
  isClean: boolean;
  reason?: string;
}

export function checkIsClean(text: string, userName?: string): CleanCheckResult {
  const result = validateAutoApproveShayari(text, userName || '');
  if (!result.allowed) {
    return {
      isClean: false,
      reason: result.message || CLEAN_LANGUAGE_BLOCK_MESSAGE
    };
  }
  return { isClean: true };
}

/**
 * Formats a timestamp (ms) into a friendly relative "time ago" string.
 */
export function formatTimeAgo(timestampMs: number, nowMs = Date.now()): string {
  const diffSeconds = Math.max(0, Math.floor((nowMs - timestampMs) / 1000));
  if (diffSeconds < 45) return 'Just now';
  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} min ago`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hr ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 30) return `${diffDays} days ago`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return '1 month ago';
  if (diffMonths < 12) return `${diffMonths} months ago`;
  const diffYears = Math.floor(diffDays / 365);
  return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
}
