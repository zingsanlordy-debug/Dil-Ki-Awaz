import { Shayari } from '../../types/shayari';
import { ValentineLangCode } from '../valentineWeekMeta';
import {
  STATIC35_CATEGORY_HEADINGS,
  STATIC35_INLINE_TITLES
} from './static35TitlesBase';

export type Static35EntryTuple = readonly [string, ...string[]];
export type Static35LangMap = Record<string, Static35EntryTuple>;

const loadedLanguageMaps = new Map<ValentineLangCode, Static35LangMap>();
const inflightPackPromises = new Map<string, Promise<void>>();

const BASE_INLINE_LANGS = new Set<ValentineLangCode>(['hi', 'hi-Latn', 'en-US']);
const DIALECT_LANGS = new Set<ValentineLangCode>(['bho', 'bgc', 'en-GB']);
const INDIC_1_LANGS = new Set<ValentineLangCode>(['ta', 'te', 'kn', 'ml', 'mr']);
const INDIC_2_LANGS = new Set<ValentineLangCode>(['gu', 'bn', 'pa', 'or', 'as', 'ur']);
const GLOBAL_1_LANGS = new Set<ValentineLangCode>(['es', 'pt', 'fr', 'de', 'it', 'nl', 'pl']);
const GLOBAL_2_LANGS = new Set<ValentineLangCode>(['ja', 'ko', 'zh-CN', 'th', 'vi', 'id', 'tl']);
const GLOBAL_3_LANGS = new Set<ValentineLangCode>(['ar', 'fa', 'tr', 'ru']);

function registerPackData(
  packRecord: Record<string, Record<string, Static35EntryTuple>>
): void {
  for (const [langKey, entries] of Object.entries(packRecord)) {
    loadedLanguageMaps.set(langKey as ValentineLangCode, entries);
  }
}

/**
 * Loads the pre-translated static bundle for `lang` from local code-split chunks.
 * Makes ZERO external API or machine-translation calls at runtime.
 */
export async function ensureStatic35LanguageLoaded(lang: ValentineLangCode): Promise<void> {
  if (BASE_INLINE_LANGS.has(lang) || loadedLanguageMaps.has(lang)) {
    return;
  }

  let packKey = '';
  let loader: (() => Promise<void>) | null = null;

  if (DIALECT_LANGS.has(lang)) {
    packKey = 'dialect';
    loader = async () => {
      const mod = await import('./static35Dialect');
      registerPackData(mod.STATIC35_PACK_DIALECT);
    };
  } else if (INDIC_1_LANGS.has(lang)) {
    packKey = 'indic1';
    loader = async () => {
      const mod = await import('./static35Indic1');
      registerPackData(mod.STATIC35_PACK_INDIC_1);
    };
  } else if (INDIC_2_LANGS.has(lang)) {
    packKey = 'indic2';
    loader = async () => {
      const mod = await import('./static35Indic2');
      registerPackData(mod.STATIC35_PACK_INDIC_2);
    };
  } else if (GLOBAL_1_LANGS.has(lang)) {
    packKey = 'global1';
    loader = async () => {
      const mod = await import('./static35Global1');
      registerPackData(mod.STATIC35_PACK_GLOBAL_1);
    };
  } else if (GLOBAL_2_LANGS.has(lang)) {
    packKey = 'global2';
    loader = async () => {
      const mod = await import('./static35Global2');
      registerPackData(mod.STATIC35_PACK_GLOBAL_2);
    };
  } else if (GLOBAL_3_LANGS.has(lang)) {
    packKey = 'global3';
    loader = async () => {
      const mod = await import('./static35Global3');
      registerPackData(mod.STATIC35_PACK_GLOBAL_3);
    };
  }

  if (!loader) return;

  const existingPromise = inflightPackPromises.get(packKey);
  if (existingPromise) {
    await existingPromise;
    return;
  }

  const promise = loader().finally(() => {
    inflightPackPromises.delete(packKey);
  });
  inflightPackPromises.set(packKey, promise);
  await promise;
}

export function isStatic35LanguageReady(lang: ValentineLangCode): boolean {
  return BASE_INLINE_LANGS.has(lang) || loadedLanguageMaps.has(lang);
}

/**
 * Synchronously resolves ONLY the selected language's pre-translated poetry lines.
 * Zero live API calls.
 */
export function getStatic35ShayariLines(
  shayari: Shayari,
  lang: ValentineLangCode
): readonly string[] {
  const hiLines =
    shayari.linesHindi && shayari.linesHindi.length > 0 ? shayari.linesHindi : shayari.lines;
  const enLines =
    shayari.linesEnglish && shayari.linesEnglish.length > 0 ? shayari.linesEnglish : hiLines;
  const hinglishLines =
    shayari.linesHinglish && shayari.linesHinglish.length > 0 ? shayari.linesHinglish : hiLines;

  switch (lang) {
    case 'hi':
      return hiLines;
    case 'hi-Latn':
      return hinglishLines;
    case 'en-US':
      return enLines;
    default: {
      const pack = loadedLanguageMaps.get(lang);
      const tuple = pack?.[shayari.id];
      if (tuple && tuple.length > 1) {
        return tuple.slice(1);
      }
      return lang.startsWith('en') ? enLines : hiLines;
    }
  }
}

/**
 * Synchronously resolves ONLY the selected language's pre-translated shayari title.
 * Zero live API calls.
 */
export function getStatic35ShayariTitle(
  shayari: Shayari,
  lang: ValentineLangCode
): string {
  if (lang === 'hi') {
    return shayari.title;
  }
  const inlinePair = STATIC35_INLINE_TITLES[shayari.id];
  if (lang === 'en-US') {
    return inlinePair?.[0] || shayari.title;
  }
  if (lang === 'hi-Latn') {
    return inlinePair?.[1] || shayari.title;
  }
  const pack = loadedLanguageMaps.get(lang);
  const tuple = pack?.[shayari.id];
  if (tuple && tuple[0]) {
    return tuple[0];
  }
  return lang.startsWith('en') ? inlinePair?.[0] || shayari.title : shayari.title;
}

/**
 * Synchronously resolves pre-translated category/page heading in any of the 35 languages.
 */
export function getStatic35CategoryHeading(
  catKey: string,
  lang: ValentineLangCode,
  fallback: string
): string {
  const langMap = STATIC35_CATEGORY_HEADINGS[lang];
  if (langMap && langMap[catKey]) {
    return langMap[catKey];
  }
  return fallback;
}
