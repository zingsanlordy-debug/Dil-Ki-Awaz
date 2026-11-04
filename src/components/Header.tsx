import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Menu, Moon, Search, Sun, X } from 'lucide-react';
import { LanguageSelectorDropdown } from './LanguageSelectorDropdown';
import { useGlobalLanguage } from '../context/GlobalLanguageContext';

export type AppRoute =
  | 'home'
  | 'festival'
  | 'feelings'
  | 'valentine-week'
  | 'religious'
  | 'family-rituals'
  | 'zq-moments'
  | 'zq-mansoon-special'
  | 'zq-official'
  | 'public-wall'
  | 'favorites'
  | 'admin-zq'
  | 'privacy'
  | 'terms'
  | 'disclaimer'
  | 'about'
  | 'contact';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  searchQuery?: string;
  onSearchChange?: (q: string) => void;
  favoritesCount?: number;
}

export const EXACT_HOME_SEO_TITLE =
  'All in One Shayari Collection - Love, Sad, Festival, Diwali, Holi, Sanatan Hindu, Islamic Muslim & Hindi Urdu English Special Shayari | ZQ-FEELINGS - Dil Ki Awaaz';

export const EXACT_HOME_SEO_DESCRIPTION =
  'Yahan aapko milenge aapki feelings ke hisab se, aapke mood ke hisab se bahut sari shayariyan ka collection. Har tyoharon ke liye, har celebration ke liye, 12 months special aur sanskar rituals ke liye best shayari. Yahan aap apne dil ki baat ko shayari me likh sakte hain, apni shayariyon ke collection ko apna moment banakar daal sakte hain. Har bhasha me 20 stylish fonts ke sath ek click me copy aur share kar sakte hain.';

const MENU_NAV_ITEMS: ReadonlyArray<{
  route: AppRoute;
  href: string;
  label: string;
}> = [
  { route: 'home', href: '/', label: '🏠 Home (मुख्य पृष्ठ)' },
  { route: 'feelings', href: '/feelings-shayari', label: '💗 Feelings Shayari' },
  { route: 'festival', href: '/festival-shayari', label: '🎉 Festival Shayari' },
  { route: 'valentine-week', href: '/valentine-week', label: '🌹 Valentine Week (7–21 Feb)' },
  { route: 'religious', href: '/religious/sanatan-hindu', label: '🙏 Religious Shayari' },
  { route: 'family-rituals', href: '/newborn-babies-shayari/', label: '👶 Sanskar & Family Rituals' },
  { route: 'zq-mansoon-special', href: '/12-months-special-days-shayari', label: '📅 12 Months Special' },
  { route: 'public-wall', href: '/apni-shayari-likhe', label: '✍️ Apni Shayari Likhe' },
  { route: 'zq-moments', href: '/zq-moments', label: '📸 ZQ Moments' },
  { route: 'favorites', href: '/pasandida-shayari', label: '❤️ Pasandida (Saved)' },
  { route: 'about', href: '/about-us', label: 'ℹ️ About Us' },
  { route: 'privacy', href: '/privacy-policy', label: '🛡️ Privacy Policy' },
  { route: 'terms', href: '/terms-and-conditions', label: '📄 Terms & Conditions' },
  { route: 'contact', href: '/contact-us', label: '✉️ Contact Us' }
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  searchQuery = '',
  onSearchChange,
  favoritesCount = 0
}) => {
  const { globalLanguage, setGlobalLanguage, ui, isRtl } = useGlobalLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('zq_dark_mode') === 'dark';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    try {
      localStorage.setItem('zq_dark_mode', isDarkMode ? 'dark' : 'light');
    } catch {
      // ignore storage errors
    }
  }, [isDarkMode]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, route: AppRoute) => {
    e.preventDefault();
    setMenuOpen(false);
    onNavigate(route);
  };

  const isHindiActive = globalLanguage === 'default' || globalLanguage === 'hindi';
  const isEnglishActive = globalLanguage === 'english';

  return (
    <header className="relative z-30 w-full border-b border-[#ffe4e8] bg-white">
      {/* TOP NAVIGATION BAR: LOGO + SEARCH BAR + FAVORITES + MENU BUTTON */}
      <div className="border-b border-[#fff0f3] bg-white/95">
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3"
        >
          {/* Left: Back to Home (on subpages) + Clickable ZQ FEELINGS Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            {currentRoute !== 'home' && (
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="min-h-[42px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#d94f70] hover:text-white border border-[#ffe4e8] text-[14px] sm:text-[15px] font-extrabold transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{ui.btnHome}</span>
              </a>
            )}

            <a
              href="/"
              onClick={(e) => handleLinkClick(e, 'home')}
              aria-label="ZQ FEELINGS - Dil Ki Awaaz | Best New Shayari 2026"
              className="inline-flex items-center gap-2.5 select-none cursor-pointer group"
            >
              <span className="w-9 h-9 rounded-full btn-glossy-pink border border-[#ffe4e8] flex items-center justify-center text-white shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
                <Heart className="w-4 h-4 fill-white text-white" />
              </span>
              <span className="flex flex-col">
                <span className="zq-feelings-logo text-[20px] sm:text-[24px] font-black text-[#d94f70] leading-tight">
                  ZQ FEELINGS
                </span>
                <span className="text-[11px] sm:text-[12px] font-bold text-[#d94f70] leading-tight">
                  Dil Ki Awaaz | Best New Shayari 2026
                </span>
              </span>
            </a>
          </div>

          {/* Center: Live Global Search Bar */}
          {onSearchChange && (
            <div className="order-3 sm:order-2 w-full sm:flex-1 sm:max-w-md">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-[#d94f70] absolute left-3.5 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="शायरी खोजें... (Love, Sad, Rose Day, Diwali)"
                  aria-label="Search Shayari"
                  className="w-full min-h-[42px] pl-10 pr-9 py-2 rounded-2xl bg-[#fff8f9] border border-[#ffd6df] focus:border-[#d94f70] focus:bg-white focus:outline-none text-[14px] sm:text-[15px] font-semibold text-slate-900 placeholder:text-slate-400 transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 p-1 rounded-full text-slate-400 hover:text-[#d94f70] hover:bg-[#fff0f3] cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Right: Favorites + Dark Mode + Subpage Language Switcher + Menu Toggle Button */}
          <div className="order-2 sm:order-3 flex items-center gap-1.5 sm:gap-2">
            <a
              href="/pasandida-shayari"
              onClick={(e) => handleLinkClick(e, 'favorites')}
              title="Pasandida Shayari (Saved)"
              className="min-h-[42px] inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-2xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffe4e8] text-[#d94f70] text-[14px] font-extrabold transition-colors cursor-pointer tabular-nums"
            >
              <Heart className="w-4 h-4 fill-[#d94f70] text-[#d94f70]" />
              <span>{favoritesCount}</span>
            </a>

            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              className="min-h-[42px] min-w-[42px] inline-flex items-center justify-center p-2 rounded-2xl bg-[#fff8f9] hover:bg-[#fff0f3] border border-[#ffe4e8] text-[#d94f70] transition-colors cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {currentRoute !== 'home' && (
              <div className="hidden lg:flex items-center gap-2">
                <div className="inline-flex items-center rounded-2xl border border-[#ffe4e8] bg-[#fff8f9] p-1">
                  <button
                    type="button"
                    onClick={() => setGlobalLanguage('hindi')}
                    className={`px-3 py-1 rounded-xl text-[13px] font-extrabold transition-colors cursor-pointer ${
                      isHindiActive
                        ? 'bg-[#d94f70] text-white shadow-2xs'
                        : 'text-slate-700 hover:text-[#d94f70]'
                    }`}
                  >
                    Hindi
                  </button>
                  <span className="text-slate-300 font-bold px-0.5 select-none">|</span>
                  <button
                    type="button"
                    onClick={() => setGlobalLanguage('english')}
                    className={`px-3 py-1 rounded-xl text-[13px] font-extrabold transition-colors cursor-pointer ${
                      isEnglishActive
                        ? 'bg-[#d94f70] text-white shadow-2xs'
                        : 'text-slate-700 hover:text-[#d94f70]'
                    }`}
                  >
                    English
                  </button>
                </div>
                <LanguageSelectorDropdown />
              </div>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label="Toggle Navigation Menu"
              className={`min-h-[42px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border text-[14px] font-extrabold transition-colors cursor-pointer ${
                menuOpen
                  ? 'bg-[#d94f70] text-white border-[#d94f70]'
                  : 'bg-[#fff8f9] text-slate-800 border-[#ffd6df] hover:border-[#d94f70] hover:text-[#d94f70]'
              }`}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>Menu</span>
            </button>
          </div>
        </div>

        {/* Subpage Compact Language Row on Mobile/Tablet */}
        {currentRoute !== 'home' && (
          <div className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-3 flex flex-wrap items-center justify-between gap-2">
            <div className="inline-flex items-center rounded-2xl border border-[#ffe4e8] bg-[#fff8f9] p-1">
              <button
                type="button"
                onClick={() => setGlobalLanguage('hindi')}
                className={`px-3 py-1 rounded-xl text-[13px] font-extrabold transition-colors cursor-pointer ${
                  isHindiActive
                    ? 'bg-[#d94f70] text-white shadow-2xs'
                    : 'text-slate-700 hover:text-[#d94f70]'
                }`}
              >
                Hindi
              </button>
              <span className="text-slate-300 font-bold px-1 select-none">|</span>
              <button
                type="button"
                onClick={() => setGlobalLanguage('english')}
                className={`px-3 py-1 rounded-xl text-[13px] font-extrabold transition-colors cursor-pointer ${
                  isEnglishActive
                    ? 'bg-[#d94f70] text-white shadow-2xs'
                    : 'text-slate-700 hover:text-[#d94f70]'
                }`}
              >
                English
              </button>
            </div>
            <LanguageSelectorDropdown />
          </div>
        )}

        {/* Expandable Quick Navigation Menu Drawer */}
        {menuOpen && (
          <nav
            aria-label="Main Website Menu"
            className="border-t border-[#ffe4e8] bg-[#fff8f9] px-4 sm:px-6 lg:px-8 py-4 shadow-md"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {MENU_NAV_ITEMS.map((item) => {
                const active = currentRoute === item.route;
                return (
                  <a
                    key={item.route}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.route)}
                    className={`min-h-[42px] px-3.5 py-2 rounded-xl border text-[14px] font-extrabold flex items-center transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#d94f70] text-white border-[#d94f70]'
                        : 'bg-white text-slate-800 border-[#ffd6df] hover:border-[#d94f70] hover:text-[#d94f70]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>

      {/* HOMEPAGE LOCKED HERO: 1. EXACT SEO TITLE -> 2. EXACT DESCRIPTION -> 3. LANGUAGE SELECTOR */}
      {currentRoute === 'home' && (
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="relative z-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 sm:pt-7 sm:pb-7 space-y-5"
        >
          {/* 1. VERY TOP — EXACT SEO TITLE */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-[20px] sm:text-[26px] md:text-[30px] font-extrabold tracking-tight text-[#991B1B] leading-[1.4]">
              {EXACT_HOME_SEO_TITLE}
            </h1>
          </div>

          {/* 2. JUST BELOW TITLE — EXACT DESCRIPTION */}
          <div className="max-w-5xl mx-auto bg-[#fff8f9] border-2 border-[#ffd6df] rounded-2xl px-5 sm:px-8 py-5 text-center shadow-2xs">
            <p className="text-[16px] sm:text-[18px] font-medium text-slate-900 leading-[1.8]">
              {EXACT_HOME_SEO_DESCRIPTION}
            </p>
          </div>

          {/* 3. JUST BELOW DESCRIPTION — LANGUAGE SELECTOR (Hindi | English + 22-Language Dropdown kept as-is) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <div className="inline-flex items-center rounded-2xl border-2 border-[#ffd6df] bg-[#fff8f9] p-1.5 shadow-2xs">
              <button
                type="button"
                onClick={() => setGlobalLanguage('hindi')}
                className={`min-h-[42px] px-4 py-1.5 rounded-xl text-[15px] sm:text-[16px] font-extrabold transition-all cursor-pointer ${
                  isHindiActive
                    ? 'bg-[#d94f70] text-white shadow-xs'
                    : 'text-slate-800 hover:text-[#d94f70]'
                }`}
              >
                🇮🇳 Hindi
              </button>
              <span className="text-slate-300 font-extrabold px-1.5 select-none">|</span>
              <button
                type="button"
                onClick={() => setGlobalLanguage('english')}
                className={`min-h-[42px] px-4 py-1.5 rounded-xl text-[15px] sm:text-[16px] font-extrabold transition-all cursor-pointer ${
                  isEnglishActive
                    ? 'bg-[#d94f70] text-white shadow-xs'
                    : 'text-slate-800 hover:text-[#d94f70]'
                }`}
              >
                🇬🇧 English
              </button>
            </div>

            <LanguageSelectorDropdown />
          </div>
        </div>
      )}
    </header>
  );
};
