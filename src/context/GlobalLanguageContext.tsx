import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  GlobalLanguageId,
  GlobalLanguageOption,
  GLOBAL_LANGUAGES,
  UI_TRANSLATIONS,
  UiStrings,
  getSyncTranslation,
  requestDynamicTranslation,
  detectDeviceGlobalLanguage
} from '../utils/globalTranslations';
import { LanguageType } from '../types/shayari';

const GLOBAL_LANG_STORAGE_KEY = 'zq_global_language_v1';

const VALID_LANGUAGE_IDS = new Set<string>([
  'default',
  ...GLOBAL_LANGUAGES.map((l) => l.id)
]);

interface GlobalLanguageContextValue {
  globalLanguage: GlobalLanguageId;
  setGlobalLanguage: (lang: GlobalLanguageId) => void;
  activeLanguageOption: GlobalLanguageOption;
  ui: UiStrings;
  isRtl: boolean;
  speechLangCode: string;
}

const GlobalLanguageContext = createContext<GlobalLanguageContextValue>({
  globalLanguage: 'default',
  setGlobalLanguage: () => {},
  activeLanguageOption: GLOBAL_LANGUAGES[0],
  ui: UI_TRANSLATIONS.default,
  isRtl: false,
  speechLangCode: 'hi-IN'
});

export const GlobalLanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [globalLanguage, setGlobalLanguageState] = useState<GlobalLanguageId>(() => {
    try {
      const saved = window.localStorage.getItem(GLOBAL_LANG_STORAGE_KEY);
      if (saved && VALID_LANGUAGE_IDS.has(saved)) {
        return saved as GlobalLanguageId;
      }
    } catch {
      // ignore storage read error
    }
    return detectDeviceGlobalLanguage();
  });

  const setGlobalLanguage = (nextLang: GlobalLanguageId) => {
    setGlobalLanguageState(nextLang);
    try {
      window.localStorage.setItem(GLOBAL_LANG_STORAGE_KEY, nextLang);
    } catch {
      // ignore storage write error
    }
  };

  const activeLanguageOption = useMemo(
    () => {
      const targetId = globalLanguage === 'default' ? 'hinglish' : globalLanguage;
      return (
        GLOBAL_LANGUAGES.find((l) => l.id === targetId) ||
        GLOBAL_LANGUAGES.find((l) => l.id === 'hinglish') ||
        GLOBAL_LANGUAGES[0]
      );
    },
    [globalLanguage]
  );

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = activeLanguageOption?.apiCode || 'hi';
    }
  }, [activeLanguageOption]);

  const value = useMemo<GlobalLanguageContextValue>(() => {
    const ui = UI_TRANSLATIONS[globalLanguage] || UI_TRANSLATIONS.default;
    return {
      globalLanguage,
      setGlobalLanguage,
      activeLanguageOption,
      ui,
      isRtl: Boolean(activeLanguageOption?.rtl),
      speechLangCode: activeLanguageOption?.speechLang || 'hi-IN'
    };
  }, [globalLanguage, activeLanguageOption]);

  return (
    <GlobalLanguageContext.Provider value={value}>
      {children}
    </GlobalLanguageContext.Provider>
  );
};

export function useGlobalLanguage(): GlobalLanguageContextValue {
  return useContext(GlobalLanguageContext);
}

/**
 * Translates a single dynamic string (e.g., shayari title, category name, day name)
 * into the active global language with 0ms cache lookup + 30ms micro-batched fetch.
 */
export function useTranslatedText(
  sourceHindiOrText: string,
  englishFallback?: string
): string {
  const { globalLanguage } = useGlobalLanguage();

  const syncValue = getSyncTranslation(sourceHindiOrText, englishFallback, globalLanguage);
  const [translated, setTranslated] = useState<string>(syncValue ?? sourceHindiOrText);

  useEffect(() => {
    let cancelled = false;
    const immediate = getSyncTranslation(sourceHindiOrText, englishFallback, globalLanguage);
    if (immediate !== null) {
      setTranslated(immediate);
      return;
    }

    setTranslated(sourceHindiOrText);
    void requestDynamicTranslation(sourceHindiOrText, globalLanguage, englishFallback).then(
      (res) => {
        if (!cancelled) {
          setTranslated(res);
        }
      }
    );

    return () => {
      cancelled = true;
    };
  }, [sourceHindiOrText, englishFallback, globalLanguage]);

  return syncValue ?? translated;
}

/**
 * Translates multi-line Shayari poetry with full stanza context across all 35 languages (15 Indian + 20 Global).
 */
export function useTranslatedShayariLines(
  linesHindi: string[],
  linesEnglish?: string[],
  linesHinglish?: string[],
  legacyCardLanguage: LanguageType = 'hindi',
  linesUrdu?: string[]
): { lines: string[]; languageBadge: string; isRtl: boolean } {
  const { globalLanguage, activeLanguageOption, isRtl } = useGlobalLanguage();

  const joinedHindi = useMemo(() => linesHindi.join('\n'), [linesHindi]);
  const joinedEnglish = useMemo(
    () => (linesEnglish && linesEnglish.length > 0 ? linesEnglish.join('\n') : undefined),
    [linesEnglish]
  );

  const syncStanza = useMemo(() => {
    if (globalLanguage === 'default' || globalLanguage === 'hinglish') {
      if (linesHinglish && linesHinglish.length > 0) {
        return linesHinglish.join('\n');
      }
      return getSyncTranslation(joinedHindi, joinedEnglish, 'hinglish');
    }
    if (
      (globalLanguage === 'english' || globalLanguage === 'english-uk') &&
      linesEnglish &&
      linesEnglish.length > 0
    ) {
      return linesEnglish.join('\n');
    }
    if (globalLanguage === 'urdu' && linesUrdu && linesUrdu.length > 0) {
      return linesUrdu.join('\n');
    }
    if (globalLanguage === 'hindi') {
      return joinedHindi;
    }
    return getSyncTranslation(joinedHindi, joinedEnglish, globalLanguage);
  }, [globalLanguage, linesUrdu, linesHinglish, linesEnglish, joinedHindi, joinedEnglish]);

  const [asyncStanza, setAsyncStanza] = useState<string>(syncStanza ?? joinedHindi);

  useEffect(() => {
    let cancelled = false;
    if (syncStanza !== null) {
      setAsyncStanza(syncStanza);
      return;
    }

    setAsyncStanza(joinedHindi);
    void requestDynamicTranslation(joinedHindi, globalLanguage, joinedEnglish).then((res) => {
      if (!cancelled) {
        setAsyncStanza(res);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [syncStanza, joinedHindi, joinedEnglish, globalLanguage]);

  const finalStanza = syncStanza ?? asyncStanza;
  const lines = useMemo(
    () =>
      finalStanza
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.length > 0),
    [finalStanza]
  );

  const languageBadge = useMemo(() => {
    if (activeLanguageOption) {
      return `${activeLanguageOption.flag} ${activeLanguageOption.nativeLabel}`;
    }
    if (legacyCardLanguage === 'urdu') return '☪️ اردو (Urdu)';
    if (legacyCardLanguage === 'english') return '🇬🇧 English';
    if (legacyCardLanguage === 'hinglish') return '💬 Hinglish';
    return '🇮🇳 हिन्दी';
  }, [activeLanguageOption, legacyCardLanguage]);

  const cardIsRtl = isRtl || (globalLanguage === 'default' && legacyCardLanguage === 'urdu');

  return { lines: lines.length > 0 ? lines : linesHindi, languageBadge, isRtl: cardIsRtl };
}

/**
 * Helper inline component for translating category names, month names, or labels inside .map() loops.
 */
export const TranslatedText: React.FC<{
  text: string;
  english?: string;
  defaultDisplay?: string;
}> = ({ text, english, defaultDisplay }) => {
  const { globalLanguage } = useGlobalLanguage();
  const translated = useTranslatedText(text, english);

  if (globalLanguage === 'default' && defaultDisplay) {
    return <>{defaultDisplay}</>;
  }
  return <>{translated}</>;
};
