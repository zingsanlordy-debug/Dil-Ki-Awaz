import { Filter } from 'bad-words';
import { stripStylishUnicode } from './zqMomentsFonts';
import {
  COPY_PASTE_SPAM_BLOCK_MESSAGE,
  DUPLICATE_SIMILARITY_THRESHOLD,
  countMeaningfulWords,
  hasBadWordsOrLinks,
  hasCopyPasteOrSpamPatterns,
  isDuplicateBySimilarity
} from './autoFilter';

export const ZQ_LINK_BLOCK_MESSAGE = 'Link ya website URL share karna mana hai 🙏';
export const ZQ_CONTACT_BLOCK_MESSAGE = 'Phone number ya Email share karna mana hai 🙏';
export const ZQ_PROFANITY_BLOCK_MESSAGE =
  'Gaali ya ganda shabd allowed nahi hai. Kripya saaf shabdon me likhein 🙏';
export const ZQ_DUPLICATE_CAPTION_MESSAGE =
  'Ye caption pehle se maujood post se 80%+ milta-julta (Copy/Duplicate) hai. Kripya apna original caption likhein 🙏';

export type ZqMomentBlockReason =
  | 'link'
  | 'email'
  | 'phone'
  | 'profanity'
  | 'spam'
  | 'duplicate';

export interface ZqMomentFilterResult {
  allowed: boolean;
  reason?: ZqMomentBlockReason;
  message?: string;
}

const profanityFilter = new Filter();

const EXPLICIT_LINK_REGEX = /\bhttps?:\/\/|\bhttps?\b|\bwww\.|\bwww\b|\bt\.me\b/i;

const DOMAIN_LINK_REGEX =
  /(?:^|[\s(/])(?:\.(?:com|in)\b|[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|in|org|net|co|io|me|xyz|online|site|link|ly|be)\b)/i;

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i;

const CONSECUTIVE_DIGITS_PHONE_REGEX = /\d{10,}/;

const FORMATTED_PHONE_CANDIDATE_REGEX = /(?:\+?\d[\d\s().-]{8,22}\d)/g;

const DEVANAGARI_DIGITS_MAP: Record<string, string> = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9'
};

/**
 * Converts ZQ-MOMENTS stylish Unicode glyphs, Devanagari digits, and fullwidth punctuation
 * into plain Unicode/ASCII equivalents so styled text cannot bypass the smart filter.
 */
function normalizeForFilter(input: string): string {
  if (!input) return '';
  const plain = stripStylishUnicode(input);
  return plain
    .replace(/[०-९]/g, (digit) => DEVANAGARI_DIGITS_MAP[digit] ?? digit)
    .replace(/[．。]/g, '.')
    .replace(/＠/g, '@')
    .replace(/／/g, '/')
    .replace(/：/g, ':');
}

function hasPhoneNumber(normalizedText: string): boolean {
  if (CONSECUTIVE_DIGITS_PHONE_REGEX.test(normalizedText)) {
    return true;
  }

  const candidates = normalizedText.match(FORMATTED_PHONE_CANDIDATE_REGEX);
  if (!candidates) return false;

  for (const candidate of candidates) {
    const digitsOnly = candidate.replace(/\D/g, '');
    if (digitsOnly.length >= 10 && digitsOnly.length <= 15) {
      return true;
    }
  }

  return false;
}

function hasProfanity(normalizedText: string): boolean {
  const trimmed = normalizedText.trim();
  if (!trimmed) return false;
  if (hasBadWordsOrLinks(trimmed)) return true;
  try {
    return profanityFilter.isProfane(trimmed);
  } catch {
    return false;
  }
}

/**
 * Validates a single text string for ZQ-MOMENTS:
 * 1. Links (http, https, www, .com, .in, t.me, etc.) -> Auto Reject
 * 2. Emails & Phone Numbers -> Auto Reject
 * 3. Copy-paste attributions (@handles, copied from, flood spam) -> Auto Reject
 * 4. Profanity (210+ Hindi/Hinglish/English bad words + bad-words) -> Auto Reject
 */
export function validateZqMomentText(rawText: string): ZqMomentFilterResult {
  if (!rawText || !rawText.trim()) {
    return { allowed: true };
  }

  const normalized = normalizeForFilter(rawText);

  if (EXPLICIT_LINK_REGEX.test(normalized)) {
    return {
      allowed: false,
      reason: 'link',
      message: ZQ_LINK_BLOCK_MESSAGE
    };
  }

  if (EMAIL_REGEX.test(normalized)) {
    return {
      allowed: false,
      reason: 'email',
      message: ZQ_CONTACT_BLOCK_MESSAGE
    };
  }

  if (DOMAIN_LINK_REGEX.test(normalized)) {
    return {
      allowed: false,
      reason: 'link',
      message: ZQ_LINK_BLOCK_MESSAGE
    };
  }

  if (hasPhoneNumber(normalized)) {
    return {
      allowed: false,
      reason: 'phone',
      message: ZQ_CONTACT_BLOCK_MESSAGE
    };
  }

  if (hasCopyPasteOrSpamPatterns(normalized)) {
    return {
      allowed: false,
      reason: 'spam',
      message: COPY_PASTE_SPAM_BLOCK_MESSAGE
    };
  }

  if (hasProfanity(normalized)) {
    return {
      allowed: false,
      reason: 'profanity',
      message: ZQ_PROFANITY_BLOCK_MESSAGE
    };
  }

  return { allowed: true };
}

/**
 * Validates poster/commenter name, caption/comment text, and optional >= 80% duplicate check.
 */
export function validateZqMomentSubmission(
  text: string,
  authorName?: string,
  existingCaptions: readonly string[] = []
): ZqMomentFilterResult {
  if (authorName) {
    const nameCheck = validateZqMomentText(authorName);
    if (!nameCheck.allowed) {
      return nameCheck;
    }
  }

  const textCheck = validateZqMomentText(text);
  if (!textCheck.allowed) {
    return textCheck;
  }

  const plainCaption = normalizeForFilter(text).trim();
  if (
    plainCaption &&
    countMeaningfulWords(plainCaption) >= 6 &&
    existingCaptions.length > 0 &&
    isDuplicateBySimilarity(
      plainCaption,
      existingCaptions.map((c) => normalizeForFilter(c)),
      DUPLICATE_SIMILARITY_THRESHOLD
    )
  ) {
    return {
      allowed: false,
      reason: 'duplicate',
      message: ZQ_DUPLICATE_CAPTION_MESSAGE
    };
  }

  return { allowed: true };
}
