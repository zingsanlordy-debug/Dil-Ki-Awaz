import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, Globe } from 'lucide-react';
import {
  VALENTINE_EXTRA_23_LIST,
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  VALENTINE_PRIMARY_12_LIST,
  ValentineLangCode
} from '../data/valentineWeekMeta';

interface Static35TopLanguageSelectorProps {
  activeLang: ValentineLangCode;
  isLoadingLang?: boolean;
  buildHref: (lang: ValentineLangCode) => string;
  onSelectLanguage: (lang: ValentineLangCode) => void;
}

export const Static35TopLanguageSelector: React.FC<Static35TopLanguageSelectorProps> = ({
  activeLang,
  isLoadingLang = false,
  buildHref,
  onSelectLanguage
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeMeta = VALENTINE_LANGUAGE_MAP.get(activeLang) || VALENTINE_LANGUAGES[0];

  const indianLangs = useMemo(
    () => VALENTINE_LANGUAGES.filter((l) => l.regionGroup === 'indian'),
    []
  );
  const globalLangs = useMemo(
    () => VALENTINE_LANGUAGES.filter((l) => l.regionGroup === 'global'),
    []
  );

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => setDrawerOpen((prev) => !prev)}
          className="min-h-[42px] px-4 py-2 rounded-2xl bg-[#fff0f3] hover:bg-[#ffe4e8] text-[#991B1B] border border-[#fecdd3] font-extrabold text-[14px] sm:text-[15px] inline-flex items-center gap-2 shadow-2xs cursor-pointer transition-colors"
        >
          <Globe className="w-4 h-4 text-[#e11d48]" />
          <span>35 Languages: {activeMeta.nativeLabel}</span>
          {drawerOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {isLoadingLang && (
          <span className="text-[13px] font-bold text-[#e11d48] animate-pulse">
            Loading language...
          </span>
        )}
      </div>

      {drawerOpen && (
        <div className="mt-3 rounded-2xl bg-white text-slate-900 p-4 sm:p-5 text-left border-2 border-[#fecdd3] shadow-lg space-y-4">
          <div className="space-y-2">
            <p className="text-[13px] font-extrabold uppercase tracking-wider text-[#9f1239]">
              15 Indian Languages (Pre-Translated Static SEO)
            </p>
            <div className="flex flex-wrap gap-2">
              {indianLangs.map((lang) => (
                <a
                  key={lang.code}
                  href={buildHref(lang.code)}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectLanguage(lang.code);
                    setDrawerOpen(false);
                  }}
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold border cursor-pointer transition-colors inline-flex items-center ${
                    activeLang === lang.code
                      ? 'bg-[#c81e45] text-white border-[#c81e45]'
                      : 'bg-[#fff8f9] text-slate-800 border-[#fecdd3] hover:border-[#c81e45]'
                  }`}
                >
                  {lang.nativeLabel}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-[#ffe4e8]">
            <p className="text-[13px] font-extrabold uppercase tracking-wider text-[#9f1239]">
              20 Global Languages (Pre-Translated Static SEO)
            </p>
            <div className="flex flex-wrap gap-2">
              {globalLangs.map((lang) => (
                <a
                  key={lang.code}
                  href={buildHref(lang.code)}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectLanguage(lang.code);
                    setDrawerOpen(false);
                  }}
                  className={`min-h-[38px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold border cursor-pointer transition-colors inline-flex items-center ${
                    activeLang === lang.code
                      ? 'bg-[#c81e45] text-white border-[#c81e45]'
                      : 'bg-[#fff8f9] text-slate-800 border-[#fecdd3] hover:border-[#c81e45]'
                  }`}
                >
                  {lang.nativeLabel}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface Static35BottomLanguageBarProps {
  sectionLabel: string;
  activeLang: ValentineLangCode;
  isLoadingLang?: boolean;
  buildHref: (lang: ValentineLangCode) => string;
  onSelectLanguage: (lang: ValentineLangCode) => void;
}

export const Static35BottomLanguageBar: React.FC<Static35BottomLanguageBarProps> = ({
  sectionLabel,
  activeLang,
  isLoadingLang = false,
  buildHref,
  onSelectLanguage
}) => {
  const [showMore23, setShowMore23] = useState(false);

  const extraIndian = useMemo(
    () => VALENTINE_EXTRA_23_LIST.filter((l) => l.regionGroup === 'indian'),
    []
  );
  const extraGlobal = useMemo(
    () => VALENTINE_EXTRA_23_LIST.filter((l) => l.regionGroup === 'global'),
    []
  );

  return (
    <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#fff0f3] via-[#fff5f7] to-[#fff0f3] border-2 border-[#fecdd3] p-4 sm:p-5 space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[15px] sm:text-[16px] font-extrabold text-[#881337] flex items-center gap-2">
          <span aria-hidden="true" className="text-lg">
            🌐
          </span>
          <span>Read {sectionLabel} in 35 languages:</span>
        </p>
        {isLoadingLang && (
          <span className="text-[13px] font-bold text-[#e11d48] animate-pulse">
            Loading language...
          </span>
        )}
      </div>

      {/* Primary 12 Native Language Links + "+ 23 More" */}
      <div className="flex flex-wrap items-center gap-2">
        {VALENTINE_PRIMARY_12_LIST.map((lang) => {
          const isSelected = activeLang === lang.code;
          return (
            <a
              key={lang.code}
              href={buildHref(lang.code)}
              onClick={(e) => {
                e.preventDefault();
                onSelectLanguage(lang.code);
              }}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold border transition-all cursor-pointer inline-flex items-center ${
                isSelected
                  ? 'bg-[#c81e45] text-white border-[#c81e45] shadow-2xs'
                  : 'bg-white text-slate-800 border-[#fda4af] hover:border-[#c81e45] hover:text-[#c81e45]'
              }`}
            >
              {lang.nativeLabel}
            </a>
          );
        })}

        <button
          type="button"
          onClick={() => setShowMore23((prev) => !prev)}
          className="min-h-[40px] px-3.5 py-1.5 rounded-xl text-[14px] font-extrabold bg-[#991B1B] hover:bg-[#7f1d1d] text-white border border-[#991B1B] inline-flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>{showMore23 ? 'Hide 23 Languages' : '+ 23 More'}</span>
          {showMore23 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expandable Remaining 23 Languages (Indian + Global) */}
      {showMore23 && (
        <div className="pt-3 border-t border-[#fecdd3] space-y-3">
          <div className="space-y-1.5">
            <span className="block text-[12px] font-extrabold uppercase tracking-wider text-[#9f1239]">
              More Indian Languages
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {extraIndian.map((lang) => {
                const isSelected = activeLang === lang.code;
                return (
                  <a
                    key={lang.code}
                    href={buildHref(lang.code)}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectLanguage(lang.code);
                    }}
                    className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-bold border transition-all cursor-pointer inline-flex items-center ${
                      isSelected
                        ? 'bg-[#c81e45] text-white border-[#c81e45]'
                        : 'bg-white text-slate-800 border-[#fecdd3] hover:border-[#c81e45] hover:text-[#c81e45]'
                    }`}
                  >
                    {lang.nativeLabel}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="block text-[12px] font-extrabold uppercase tracking-wider text-[#9f1239]">
              More Global Languages
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {extraGlobal.map((lang) => {
                const isSelected = activeLang === lang.code;
                return (
                  <a
                    key={lang.code}
                    href={buildHref(lang.code)}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectLanguage(lang.code);
                    }}
                    className={`min-h-[38px] px-3 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-bold border transition-all cursor-pointer inline-flex items-center ${
                      isSelected
                        ? 'bg-[#c81e45] text-white border-[#c81e45]'
                        : 'bg-white text-slate-800 border-[#fecdd3] hover:border-[#c81e45] hover:text-[#c81e45]'
                    }`}
                  >
                    {lang.nativeLabel}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
