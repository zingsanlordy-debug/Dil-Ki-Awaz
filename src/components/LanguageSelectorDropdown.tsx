import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, Check, RotateCcw, Search, X } from 'lucide-react';
import { GLOBAL_LANGUAGES, GlobalLanguageId } from '../utils/globalTranslations';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';

export const LanguageSelectorDropdown: React.FC = () => {
  const { setGlobalLanguage, activeLanguageOption } = useGlobalLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Focus search input on open
    const focusTimer = setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);

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
      clearTimeout(focusTimer);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (langId: GlobalLanguageId) => {
    setGlobalLanguage(langId);
    setIsOpen(false);
    setSearchQuery('');
  };

  // Filtered lists
  const query = searchQuery.trim().toLowerCase();
  const filteredIndian = useMemo(() => {
    const list = GLOBAL_LANGUAGES.filter((l) => l.regionGroup === 'indian');
    if (!query) return list;
    return list.filter(
      (l) =>
        l.label.toLowerCase().includes(query) ||
        l.nativeLabel.toLowerCase().includes(query) ||
        String(l.number) === query
    );
  }, [query]);

  const filteredGlobal = useMemo(() => {
    const list = GLOBAL_LANGUAGES.filter((l) => l.regionGroup === 'global');
    if (!query) return list;
    return list.filter(
      (l) =>
        l.label.toLowerCase().includes(query) ||
        l.nativeLabel.toLowerCase().includes(query) ||
        String(l.number) === query
    );
  }, [query]);

  // Display label on the main prominent button
  const displayLabel = useMemo(() => {
    if (!activeLanguageOption) return 'Hinglish';
    if (activeLanguageOption.id === 'hinglish') return 'Hinglish';
    if (activeLanguageOption.id === 'hindi') return 'हिन्दी (Hindi)';
    if (activeLanguageOption.id === 'english') return 'English (USA)';
    if (activeLanguageOption.id === 'english-uk') return 'English (UK)';
    return `${activeLanguageOption.nativeLabel} (${activeLanguageOption.label})`;
  }, [activeLanguageOption]);

  return (
    <div ref={containerRef} className="relative inline-block z-40">
      {/* 1 SINGLE PROMINENT HEADER LANGUAGE BUTTON (🌐 SELECT LANGUAGE - Language Name) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select Website Language: currently ${displayLabel}`}
        title={`Change Language (77+ Languages Available) - Current: ${displayLabel}`}
        className={`group min-h-[38px] sm:min-h-[42px] inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-2xl border-2 transition-all cursor-pointer select-none shadow-xs ${
          isOpen
            ? 'bg-[#fff0f3] border-[#d94f70] shadow-sm ring-2 ring-[#d94f70]/20'
            : 'bg-white hover:bg-[#fff0f3] border-[#ffd6df] hover:border-[#d94f70]'
        }`}
      >
        <span className="text-base sm:text-lg leading-none shrink-0" aria-hidden="true">
          🌐
        </span>

        <span className="font-outfit text-[12px] sm:text-[14px] font-black tracking-wider text-[#991B1B] uppercase shrink-0">
          SELECT LANGUAGE
        </span>

        <span className="text-slate-400 font-bold hidden sm:inline shrink-0" aria-hidden="true">
          -
        </span>

        {activeLanguageOption && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xl bg-[#991B1B] text-white text-[11px] sm:text-[12px] font-bold shadow-2xs shrink-0 max-w-[130px] sm:max-w-none truncate">
            <span aria-hidden="true">{activeLanguageOption.flag}</span>
            <span className="truncate">{displayLabel}</span>
          </span>
        )}

        <ChevronDown
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#991B1B] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 sm:hidden backdrop-blur-xs"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Dropdown Panel with 77+ Languages (29 Indian + 48 Global) */}
      {isOpen && (
        <div
          role="listbox"
          aria-label="Select Website Language (77+ Languages: Indian & Global)"
          className="fixed inset-x-2 top-[60px] sm:inset-x-auto sm:absolute sm:top-full sm:left-0 sm:mt-2 w-auto sm:w-[720px] max-w-[96vw] max-h-[85vh] sm:max-h-[600px] rounded-3xl bg-white border-2 border-[#ffe4e8] shadow-2xl p-3.5 sm:p-5 z-50 flex flex-col overflow-hidden"
        >
          {/* Header Bar + Reset */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#ffe4e8] shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌐</span>
              <div>
                <h3 className="font-outfit text-[14px] sm:text-[16px] font-black tracking-wide text-[#991B1B] uppercase">
                  77+ Languages (77+ भाषाएँ)
                </h3>
                <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold">
                  1 Click = पूरी वेबसाइट, सभी शायरी एक ही भाषा में (Auto-Detect Active)
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleSelect('default')}
              title="Reset to Mobile/Browser Auto Detect"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffe4e8] text-[12px] font-bold text-slate-700 hover:text-[#991B1B] cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Auto / Reset</span>
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="pt-3 pb-2 shrink-0">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 77+ languages... (Nepali, Marathi, Maithili, Sindhi, French, Arabic)"
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#fff8f9] border border-[#ffd6df] focus:border-[#d94f70] focus:bg-white focus:outline-none text-[13px] font-bold text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 p-1 rounded-full text-slate-400 hover:text-[#d94f70]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Language Grid (Scrollable) */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-4 overscroll-contain">
            {/* Indian & Subcontinent Languages (29 Languages) */}
            {filteredIndian.length > 0 && (
              <div>
                <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#991B1B] mb-2 px-1 flex items-center gap-1.5">
                  <span>🇮🇳</span>
                  <span>29 Indian & Regional Languages (भारतीय एवं क्षेत्रीय भाषाएँ)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filteredIndian.map((lang) => {
                    const isSelected = activeLanguageOption.id === lang.id;
                    return (
                      <button
                        key={lang.id}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelect(lang.id)}
                        className={`flex items-center justify-between gap-2 px-2.5 sm:px-3 py-2 rounded-xl text-left transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#991B1B] text-white border-[#7F1D1D] shadow-sm'
                            : 'bg-[#fff8f9] hover:bg-[#fff0f3] text-slate-900 border-[#ffe4e8] hover:border-[#B91C1C]/50'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-base sm:text-lg shrink-0 leading-none">{lang.flag}</span>
                          <div className="min-w-0">
                            <div
                              className={`text-[12px] sm:text-[13px] font-extrabold leading-tight truncate ${
                                isSelected ? 'text-white' : 'text-slate-900'
                              }`}
                            >
                              {lang.label} - {lang.nativeLabel}
                            </div>
                            <div
                              className={`text-[10px] sm:text-[11px] font-semibold leading-tight truncate mt-0.5 ${
                                isSelected ? 'text-rose-100' : 'text-slate-500'
                              }`}
                            >
                              #{lang.number} • {lang.nativeLabel}
                            </div>
                          </div>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Global Languages (48 Languages) */}
            {filteredGlobal.length > 0 && (
              <div className="pt-2 border-t border-[#ffe4e8]">
                <div className="text-[12px] font-extrabold uppercase tracking-wider text-[#991B1B] mb-2 px-1 flex items-center gap-1.5">
                  <span>🌍</span>
                  <span>48 Global Languages (विश्व की प्रमुख भाषाएँ)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filteredGlobal.map((lang) => {
                    const isSelected = activeLanguageOption.id === lang.id;
                    return (
                      <button
                        key={lang.id}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelect(lang.id)}
                        className={`flex items-center justify-between gap-2 px-2.5 sm:px-3 py-2 rounded-xl text-left transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#991B1B] text-white border-[#7F1D1D] shadow-sm'
                            : 'bg-[#fff8f9] hover:bg-[#fff0f3] text-slate-900 border-[#ffe4e8] hover:border-[#B91C1C]/50'
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="text-base sm:text-lg shrink-0 leading-none">{lang.flag}</span>
                          <div className="min-w-0">
                            <div
                              className={`text-[12px] sm:text-[13px] font-extrabold leading-tight truncate ${
                                isSelected ? 'text-white' : 'text-slate-900'
                              }`}
                            >
                              {lang.label} - {lang.nativeLabel}
                            </div>
                            <div
                              className={`text-[10px] sm:text-[11px] font-semibold leading-tight truncate mt-0.5 ${
                                isSelected ? 'text-rose-100' : 'text-slate-500'
                              }`}
                            >
                              #{lang.number} • {lang.nativeLabel}
                            </div>
                          </div>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredIndian.length === 0 && filteredGlobal.length === 0 && (
              <div className="py-8 text-center text-slate-500 font-bold text-[14px]">
                No language found matching "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
