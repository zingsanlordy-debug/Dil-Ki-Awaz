import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, RotateCcw } from 'lucide-react';
import { GLOBAL_LANGUAGES, GlobalLanguageId } from '../utils/globalTranslations';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';

export const LanguageSelectorDropdown: React.FC = () => {
  const { globalLanguage, setGlobalLanguage, activeLanguageOption } = useGlobalLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (langId: GlobalLanguageId) => {
    setGlobalLanguage(langId);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative z-40 flex flex-col items-center justify-center">
      {/* Main Centered "🌐 SELECT LANGUAGE" Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="group min-h-[52px] inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-2xl bg-white hover:bg-[#fff0f3] border-2 border-[#B91C1C]/30 hover:border-[#B91C1C] shadow-md hover:shadow-lg transition-all cursor-pointer select-none"
      >
        <span className="text-xl leading-none" aria-hidden="true">
          🌐
        </span>
        <span className="font-outfit text-[15px] sm:text-[16px] font-extrabold tracking-wider text-[#991B1B] uppercase">
          SELECT LANGUAGE
        </span>
        {activeLanguageOption && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#991B1B] text-white text-[13px] sm:text-[14px] font-bold shadow-2xs">
            <span>{activeLanguageOption.flag}</span>
            <span>{activeLanguageOption.label}</span>
          </span>
        )}
        <ChevronDown
          className={`w-5 h-5 text-[#991B1B] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Stylish 35-Language Dropdown Menu (15 Indian + 20 Global) */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select Website Language (35 Languages - 15 Indian + 20 Global)"
          className="absolute top-full mt-2.5 w-[94vw] max-w-3xl rounded-3xl bg-white border-2 border-[#ffe4e8] shadow-2xl p-4 sm:p-5 z-50"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#ffe4e8]">
            <div className="flex items-center gap-2">
              <span className="text-lg">🌐</span>
              <span className="font-outfit text-[15px] font-extrabold tracking-wide text-[#991B1B] uppercase">
                35 Languages (15 Indian + 20 Global) · भाषा चुनें
              </span>
            </div>

            {globalLanguage !== 'default' && (
              <button
                type="button"
                onClick={() => handleSelect('default')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffe4e8] text-[13px] font-bold text-slate-700 hover:text-[#991B1B] cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Default</span>
              </button>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto pr-1 space-y-4">
            {/* 15 Indian Languages */}
            <div>
              <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#991B1B] mb-2 px-1">
                🇮🇳 15 Indian Languages (भारतीय भाषाएँ)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {GLOBAL_LANGUAGES.filter((l) => l.regionGroup === 'indian').map((lang) => {
                  const isSelected = globalLanguage === lang.id;
                  return (
                    <button
                      key={lang.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(lang.id)}
                      className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#991B1B] text-white border-[#7F1D1D] shadow-sm'
                          : 'bg-[#fff8f9] hover:bg-[#fff0f3] text-slate-900 border-[#ffe4e8] hover:border-[#B91C1C]/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl shrink-0 leading-none">{lang.flag}</span>
                        <div className="min-w-0">
                          <div
                            className={`text-[14px] font-extrabold leading-tight truncate ${
                              isSelected ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {lang.number}. {lang.label}
                          </div>
                          <div
                            className={`text-[12px] font-semibold leading-tight truncate mt-0.5 ${
                              isSelected ? 'text-rose-100' : 'text-slate-500'
                            }`}
                          >
                            {lang.nativeLabel}
                          </div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 20 Global Languages */}
            <div className="pt-2 border-t border-[#ffe4e8]">
              <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#991B1B] mb-2 px-1">
                🌍 20 Global Languages (विश्व भाषाएँ)
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {GLOBAL_LANGUAGES.filter((l) => l.regionGroup === 'global').map((lang) => {
                  const isSelected = globalLanguage === lang.id;
                  return (
                    <button
                      key={lang.id}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(lang.id)}
                      className={`flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-2xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#991B1B] text-white border-[#7F1D1D] shadow-sm'
                          : 'bg-[#fff8f9] hover:bg-[#fff0f3] text-slate-900 border-[#ffe4e8] hover:border-[#B91C1C]/50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xl shrink-0 leading-none">{lang.flag}</span>
                        <div className="min-w-0">
                          <div
                            className={`text-[14px] font-extrabold leading-tight truncate ${
                              isSelected ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {lang.number}. {lang.label}
                          </div>
                          <div
                            className={`text-[12px] font-semibold leading-tight truncate mt-0.5 ${
                              isSelected ? 'text-rose-100' : 'text-slate-500'
                            }`}
                          >
                            {lang.nativeLabel}
                          </div>
                        </div>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
