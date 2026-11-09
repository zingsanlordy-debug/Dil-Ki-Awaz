import React, { useState, useEffect, useMemo } from 'react';
import { Sparkles, Check, X, ArrowRight, Globe } from 'lucide-react';
import {
  GLOBAL_LANGUAGES,
  GlobalLanguageId,
  GlobalLanguageOption
} from '../utils/globalTranslations';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';

const INTRO_STORAGE_KEY = 'zq_intro_shown_v1';

// Strict bot check so Googlebot and Search Crawlers index raw HTML with zero delays
function isSearchBot(): boolean {
  if (typeof window === 'undefined') return true;
  const ua = (navigator.userAgent || '').toLowerCase();
  return /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|crawler|spider|lighthouse|headlesschrome/i.test(ua);
}

export const BindasIntroModal: React.FC = () => {
  const { globalLanguage, setGlobalLanguage } = useGlobalLanguage();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedLangId, setSelectedLangId] = useState<Exclude<GlobalLanguageId, 'default'>>('hinglish');
  const [countdown, setCountdown] = useState<number>(2);

  // Reorder languages to strictly put: Hinglish first, then Hindi, English, Urdu, then remaining 70+ languages
  const sortedIntroLanguages: GlobalLanguageOption[] = useMemo(() => {
    const priorityIds: Exclude<GlobalLanguageId, 'default'>[] = ['hinglish', 'hindi', 'english', 'urdu'];
    const priorityItems: GlobalLanguageOption[] = [];
    const remainingItems: GlobalLanguageOption[] = [];

    priorityIds.forEach((pid) => {
      const match = GLOBAL_LANGUAGES.find((l) => l.id === pid);
      if (match) priorityItems.push(match);
    });

    GLOBAL_LANGUAGES.forEach((l) => {
      if (!priorityIds.includes(l.id)) {
        remainingItems.push(l);
      }
    });

    return [...priorityItems, ...remainingItems];
  }, []);

  useEffect(() => {
    // 1. Googlebot / Crawler safety check: Never show to search bots
    if (isSearchBot()) {
      return;
    }

    // 2. Storage check: Only show once per session / user
    try {
      const sessionShown = sessionStorage.getItem(INTRO_STORAGE_KEY);
      const localShown = localStorage.getItem(INTRO_STORAGE_KEY);
      if (sessionShown === '1' || localShown === '1') {
        return;
      }
    } catch {
      // ignore storage access exception
    }

    // Initialize selected language from current detected global language
    if (globalLanguage && globalLanguage !== 'default') {
      setSelectedLangId(globalLanguage as Exclude<GlobalLanguageId, 'default'>);
    } else {
      setSelectedLangId('hinglish');
    }

    setIsVisible(true);
  }, [globalLanguage]);

  // 2-Second auto-timer
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          dismissModal('auto');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isVisible, selectedLangId]);

  const dismissModal = (action: 'enter' | 'skip' | 'close' | 'auto') => {
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, '1');
      localStorage.setItem(INTRO_STORAGE_KEY, '1');
    } catch {
      // ignore
    }

    if (action === 'enter' || action === 'auto') {
      setGlobalLanguage(selectedLangId);
    } else if (action === 'skip') {
      setGlobalLanguage('hinglish');
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to ZQ Feelings"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          dismissModal('close');
        }
      }}
      className="fixed inset-0 z-9999 flex items-center justify-center p-3 sm:p-5 bg-black/70 backdrop-blur-xs animate-fade-in overflow-y-auto cursor-pointer"
    >
      <div className="relative w-full max-w-2xl bg-white border-2 border-pink-300 rounded-3xl shadow-2xl overflow-hidden my-auto animate-scale-up cursor-default">
        {/* Top Dismiss Button */}
        <button
          onClick={() => dismissModal('close')}
          aria-label="Close intro"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ================================================================= */}
        {/* 1. TOP SECTION: LANGUAGE SELECTION (Hinglish -> Hindi -> English -> Urdu -> ...) */}
        {/* ================================================================= */}
        <div className="bg-slate-900 text-white px-4 pt-4 pb-3.5 border-b border-slate-800">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-pink-400" />
              <span className="text-[14px] sm:text-[15px] font-bold tracking-wide text-pink-200">
                🌐 CHOOSE YOUR LANGUAGE / अपनी भाषा चुनें
              </span>
            </div>
            <span className="text-xs bg-pink-500/30 text-pink-200 px-2.5 py-0.5 rounded-full font-semibold">
              Auto-Close in {countdown}s
            </span>
          </div>

          {/* Scrollable Language Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-pink-500">
            {sortedIntroLanguages.map((lang) => {
              const isSelected = selectedLangId === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLangId(lang.id)}
                  type="button"
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-white shadow-md scale-105'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span className="font-bold">{lang.nativeLabel}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* 2. MIDDLE SECTION: COLORFUL ANIMATED GRADIENT (Pink, Purple, Orange, Blue) */}
        {/* ================================================================= */}
        <div className="p-5 sm:p-7 bg-gradient-to-br from-[#ff3377] via-[#8338ec] via-40% via-[#ff6b35] to-[#2575fc] text-white relative overflow-hidden">
          {/* Subtle Ambient Light Orbs for smooth aesthetic animation */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none" />

          {/* Logo - "ZQ - Dil Ki Awaaz" in Big Stylish Font */}
          <div className="text-center mb-3.5 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-xs text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-2 border border-white/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>DIL SE NIKLI SHAYARI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-rozha drop-shadow-lg text-white">
              ZQ - Dil Ki Awaaz
            </h2>
          </div>

          {/* English Simple Description in short clean sentences */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/25 shadow-inner text-center relative z-10">
            <p className="text-sm sm:text-[15px] leading-relaxed font-medium text-white/95">
              <strong className="text-yellow-300 font-bold block sm:inline mb-1 sm:mb-0">India&apos;s No.1 Shayari Website.</strong>{' '}
              Read Love, Sad, Festival, Birthday, Attitude, Friendship Shayari.{' '}
              Choose Stylish Font, Copy in 1 Click, Share on WhatsApp, Instagram, Facebook.{' '}
              Write Your Own Shayari. Upload Photo in Moments. 100% Free.
            </p>
          </div>
        </div>

        {/* ================================================================= */}
        {/* 3. BOTTOM SECTION: 2 BUTTONS (ENTER & SKIP) */}
        {/* ================================================================= */}
        <div className="bg-white px-5 py-4 sm:py-5 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* SKIP BUTTON (Chhota - Direct Hinglish) */}
          <button
            onClick={() => dismissModal('skip')}
            type="button"
            className="w-full sm:w-auto order-2 sm:order-1 px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-center"
          >
            SKIP (Direct Hinglish)
          </button>

          {/* ENTER BUTTON (Bada, Colorful - Opens in Selected Language) */}
          <button
            onClick={() => dismissModal('enter')}
            type="button"
            className="w-full sm:w-auto order-1 sm:order-2 flex-1 sm:max-w-xs flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>ENTER</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
