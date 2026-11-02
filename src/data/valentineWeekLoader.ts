import {
  ValentineBaseShayari,
  ValentineLangCode
} from './valentineWeekMeta';

export type StaticLangMap = Record<string, readonly [string, string]>;

const loadedLanguageMaps = new Map<ValentineLangCode, StaticLangMap>();
const inflightPackPromises = new Map<string, Promise<void>>();

const BASE_INLINE_LANGS = new Set<ValentineLangCode>([
  'hi',
  'hi-Latn',
  'en-US',
  'en-GB',
  'bho',
  'bgc'
]);

const INDIC_1_LANGS = new Set<ValentineLangCode>(['ta', 'te', 'kn', 'ml', 'mr']);
const INDIC_2_LANGS = new Set<ValentineLangCode>(['gu', 'bn', 'pa', 'or', 'as', 'ur']);
const GLOBAL_1_LANGS = new Set<ValentineLangCode>(['es', 'pt', 'fr', 'de', 'it', 'nl', 'pl']);
const GLOBAL_2_LANGS = new Set<ValentineLangCode>(['ja', 'ko', 'zh-CN', 'th', 'vi', 'id', 'tl']);
const GLOBAL_3_LANGS = new Set<ValentineLangCode>(['ar', 'fa', 'tr', 'ru']);

function registerPackData(
  packRecord: Record<string, Record<string, readonly [string, string]>>
): void {
  for (const [langKey, entries] of Object.entries(packRecord)) {
    loadedLanguageMaps.set(langKey as ValentineLangCode, entries);
  }
}

/**
 * Loads the pre-translated static bundle for `lang` from local code-split chunks.
 * Makes ZERO external API or machine-translation calls at runtime.
 */
export async function ensureValentineLanguageLoaded(lang: ValentineLangCode): Promise<void> {
  if (BASE_INLINE_LANGS.has(lang) || loadedLanguageMaps.has(lang)) {
    return;
  }

  let packKey = '';
  let loader: (() => Promise<void>) | null = null;

  if (INDIC_1_LANGS.has(lang)) {
    packKey = 'indic1';
    loader = async () => {
      const mod = await import('./valentineWeekIndic1');
      registerPackData(mod.VALENTINE_PACK_INDIC_1);
    };
  } else if (INDIC_2_LANGS.has(lang)) {
    packKey = 'indic2';
    loader = async () => {
      const mod = await import('./valentineWeekIndic2');
      registerPackData(mod.VALENTINE_PACK_INDIC_2);
    };
  } else if (GLOBAL_1_LANGS.has(lang)) {
    packKey = 'global1';
    loader = async () => {
      const mod = await import('./valentineWeekGlobal1');
      registerPackData(mod.VALENTINE_PACK_GLOBAL_1);
    };
  } else if (GLOBAL_2_LANGS.has(lang)) {
    packKey = 'global2';
    loader = async () => {
      const mod = await import('./valentineWeekGlobal2');
      registerPackData(mod.VALENTINE_PACK_GLOBAL_2);
    };
  } else if (GLOBAL_3_LANGS.has(lang)) {
    packKey = 'global3';
    loader = async () => {
      const mod = await import('./valentineWeekGlobal3');
      registerPackData(mod.VALENTINE_PACK_GLOBAL_3);
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

export function isValentineLanguageReady(lang: ValentineLangCode): boolean {
  return BASE_INLINE_LANGS.has(lang) || loadedLanguageMaps.has(lang);
}

/**
 * Synchronously resolves ONLY the selected language's couplet lines for a Valentine shayari.
 */
export function getValentineShayariLines(
  item: ValentineBaseShayari,
  lang: ValentineLangCode
): readonly string[] {
  switch (lang) {
    case 'hi':
      return item.hi;
    case 'hi-Latn':
      return item['hi-Latn'];
    case 'en-US':
      return item['en-US'];
    case 'en-GB':
      return item['en-GB'];
    case 'bho':
      return item.bho;
    case 'bgc':
      return item.bgc;
    default: {
      const pack = loadedLanguageMaps.get(lang);
      const found = pack?.[item.id];
      if (found && found.length > 0) {
        return found;
      }
      return lang.startsWith('en') ? item['en-US'] : item.hi;
    }
  }
}
