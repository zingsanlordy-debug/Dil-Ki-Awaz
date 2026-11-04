import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, ShieldCheck, Copy, Check, X } from 'lucide-react';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';
import { LegalTabId } from './LegalPage';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateFestival: (cat?: string) => void;
  onNavigateFeelings: (cat?: string) => void;
  onNavigateValentine?: () => void;
  onNavigateReligious?: () => void;
  onNavigateFamilyRituals?: () => void;
  onNavigateZqMoments?: () => void;
  onNavigateMansoonSpecial?: () => void;
  onNavigateWriteShayari?: () => void;
  onNavigateFavorites?: () => void;
  onNavigateLegal?: (tab: LegalTabId) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateFestival,
  onNavigateFeelings,
  onNavigateValentine,
  onNavigateReligious,
  onNavigateFamilyRituals,
  onNavigateZqMoments,
  onNavigateMansoonSpecial,
  onNavigateWriteShayari,
  onNavigateFavorites,
  onNavigateLegal
}) => {
  const { ui, isRtl } = useGlobalLanguage();
  const aboutDesc = useTranslatedText(
    'ZQ FEELINGS - दिल की आवाज़ हिंदी शायरी, स्टेटस, त्यौहार विशेस, फीलिंग्स शायरी और 12 महीनों के खास दिनों की शुभकामनाओं का एक साफ़-सुथरा मंच है, जहाँ आप अपनी शायरी भी लिख और सहेज सकते हैं।',
    'ZQ FEELINGS - Dil Ki Awaaz is a clean home for Shayari, Status, Festival Wishes, Feelings Poetry, and 12 Months Special Days greetings where you can also write and save your own poetry.'
  );
  const contactHint = useTranslatedText(
    'सुझाव, सहयोग या किसी भी प्रश्न के लिए हमसे संपर्क करें:',
    'Contact us for feedback, collaboration, or any inquiries:'
  );
  const privacyHint = useTranslatedText(
    'आपकी पसंदीदा और लिखी गई शायरी आपके डिवाइस के ब्राउज़र में सुरक्षित रहती है।',
    'Your favorite and written shayaris remain safely saved in your browser.'
  );

  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const contactEmail = 'support@zqfeelings.com';

  useEffect(() => {
    if (!privacyOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPrivacyOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [privacyOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, action: () => void) => {
    e.preventDefault();
    action();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <>
      <footer
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative z-20 w-full mt-16 bg-slate-950 text-slate-300 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-9 lg:gap-10">
            {/* Column 1: About */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="/"
                onClick={(e) => handleNavClick(e, onNavigateHome)}
                className="inline-block text-[24px] sm:text-[26px] font-bold tracking-tight text-white hover:text-[#f472b6] transition-colors leading-snug"
              >
                <span className="zq-feelings-logo text-[#f472b6]">ZQ FEELINGS</span>{' '}
                <span>- Dil Ki Awaaz</span>
              </a>
              <p className="text-[15px] sm:text-[16px] font-semibold text-[#f472b6]">
                Best New Shayari 2026 / 2027 - Dil Ki Awaaz
              </p>
              <h2 className="text-[26px] font-bold text-white leading-snug">
                About
              </h2>
              <p className="text-[18px] leading-[1.8] text-slate-300 font-normal">
                {aboutDesc}
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-[26px] font-bold text-white leading-snug">
                Quick Links
              </h2>
              <nav
                aria-label="Footer Quick Links"
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-[18px]"
              >
                <a
                  href="/"
                  onClick={(e) => handleNavClick(e, onNavigateHome)}
                  className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                >
                  {ui.btnHome}
                </a>
                <a
                  href="/festival-shayari"
                  onClick={(e) => handleNavClick(e, () => onNavigateFestival('all'))}
                  className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                >
                  {ui.btnFestival}
                </a>
                <a
                  href="/feelings-shayari"
                  onClick={(e) => handleNavClick(e, () => onNavigateFeelings('all'))}
                  className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                >
                  {ui.btnFeeling}
                </a>
                {onNavigateMansoonSpecial && (
                  <a
                    href="/12-months-special-days-shayari"
                    onClick={(e) => handleNavClick(e, onNavigateMansoonSpecial)}
                    className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                  >
                    {ui.btnSpecialDays}
                  </a>
                )}
                {onNavigateWriteShayari && (
                  <a
                    href="/apni-shayari-likhe"
                    onClick={(e) => handleNavClick(e, onNavigateWriteShayari)}
                    className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                  >
                    {ui.btnWriteShayari}
                  </a>
                )}
                {onNavigateZqMoments && (
                  <a
                    href="/zq-moments"
                    onClick={(e) => handleNavClick(e, onNavigateZqMoments)}
                    className="text-[#f472b6] hover:text-rose-300 transition-colors cursor-pointer font-bold"
                  >
                    {ui.btnZqMoments} 💗
                  </a>
                )}
                {onNavigateValentine && (
                  <a
                    href="/valentine-week"
                    onClick={(e) => handleNavClick(e, onNavigateValentine)}
                    className="text-rose-400 hover:text-rose-300 transition-colors cursor-pointer font-bold"
                  >
                    Valentine Week 🌹
                  </a>
                )}
                {onNavigateReligious && (
                  <a
                    href="/religious/sanatan-hindu"
                    onClick={(e) => handleNavClick(e, onNavigateReligious)}
                    className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                  >
                    Religious Shayari
                  </a>
                )}
                {onNavigateFamilyRituals && (
                  <a
                    href="/newborn-babies-shayari/"
                    onClick={(e) => handleNavClick(e, onNavigateFamilyRituals)}
                    className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                  >
                    Sanskar Shayari
                  </a>
                )}
                <a
                  href="/feelings/love-shayari/"
                  onClick={(e) => handleNavClick(e, () => onNavigateFeelings('love'))}
                  className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                >
                  Love Shayari
                </a>
                <a
                  href="/feelings/sad-shayari/"
                  onClick={(e) => handleNavClick(e, () => onNavigateFeelings('sad'))}
                  className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                >
                  Sad Shayari
                </a>
                <a
                  href="/diwali-shayari"
                  onClick={(e) => handleNavClick(e, () => onNavigateFestival('diwali'))}
                  className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                >
                  Diwali Shayari
                </a>
                {onNavigateFavorites && (
                  <a
                    href="/pasandida-shayari"
                    onClick={(e) => handleNavClick(e, onNavigateFavorites)}
                    className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer font-medium"
                  >
                    {ui.btnPasandida}
                  </a>
                )}
              </nav>
            </div>

            {/* Column 3: Contact & Privacy Policy */}
            <div className="lg:col-span-4 space-y-5">
              <div className="space-y-3">
                <h2 className="text-[26px] font-bold text-white leading-snug">
                  Contact
                </h2>
                <p className="text-[16px] text-slate-400">
                  {contactHint}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-xl bg-slate-900 border border-slate-800 p-3.5">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-2 text-[17px] font-medium text-slate-100 hover:text-[#f472b6] transition-colors break-all"
                  >
                    <Mail className="w-5 h-5 text-[#f472b6] shrink-0" />
                    <span>{contactEmail}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-[18px] font-bold text-slate-200 transition-colors cursor-pointer shrink-0"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>{ui.copiedBtn}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>{ui.copyBtn}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="pt-1 space-y-2.5">
                <h2 className="text-[26px] font-bold text-white leading-snug">
                  Legal &amp; Support
                </h2>
                <p className="text-[16px] leading-relaxed text-slate-400">
                  {privacyHint}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-[16px] font-bold">
                  <a
                    href="/privacy-policy"
                    onClick={(e) =>
                      onNavigateLegal
                        ? handleNavClick(e, () => onNavigateLegal('privacy'))
                        : (e.preventDefault(), setPrivacyOpen(true))
                    }
                    className="inline-flex items-center gap-1.5 text-[#f472b6] hover:text-rose-300 transition-colors cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4 shrink-0" />
                    <span>Privacy Policy</span>
                  </a>
                  {onNavigateLegal && (
                    <>
                      <a
                        href="/terms-and-conditions"
                        onClick={(e) => handleNavClick(e, () => onNavigateLegal('terms'))}
                        className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
                      >
                        Terms &amp; Conditions
                      </a>
                      <a
                        href="/disclaimer"
                        onClick={(e) => handleNavClick(e, () => onNavigateLegal('disclaimer'))}
                        className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
                      >
                        Disclaimer
                      </a>
                      <a
                        href="/about-us"
                        onClick={(e) => handleNavClick(e, () => onNavigateLegal('about'))}
                        className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
                      >
                        About Us
                      </a>
                      <a
                        href="/contact-us"
                        onClick={(e) => handleNavClick(e, () => onNavigateLegal('contact'))}
                        className="text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
                      >
                        Contact Us
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-800/90 bg-slate-950/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[16px] text-slate-400">
            <div className="text-center sm:text-left space-y-1">
              <p>
                © 2026 <span className="zq-feelings-logo text-slate-200">ZQ FEELINGS</span> - Dil Ki Awaaz. All Rights Reserved.
              </p>
              <p className="text-[14px] text-slate-400 font-medium">
                Best New Shayari 2026 / 2027 - Dil Ki Awaaz
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/about-us"
                onClick={(e) =>
                  onNavigateLegal && handleNavClick(e, () => onNavigateLegal('about'))
                }
                className="font-bold text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                href="/privacy-policy"
                onClick={(e) =>
                  onNavigateLegal
                    ? handleNavClick(e, () => onNavigateLegal('privacy'))
                    : (e.preventDefault(), setPrivacyOpen(true))
                }
                className="font-bold text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a
                href="/terms-and-conditions"
                onClick={(e) =>
                  onNavigateLegal && handleNavClick(e, () => onNavigateLegal('terms'))
                }
                className="font-bold text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
              >
                Terms
              </a>
              <a
                href="/disclaimer"
                onClick={(e) =>
                  onNavigateLegal && handleNavClick(e, () => onNavigateLegal('disclaimer'))
                }
                className="font-bold text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
              >
                Disclaimer
              </a>
              <a
                href="/contact-us"
                onClick={(e) =>
                  onNavigateLegal && handleNavClick(e, () => onNavigateLegal('contact'))
                }
                className="font-bold text-slate-300 hover:text-[#f472b6] transition-colors cursor-pointer"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:bg-[#d94f70] hover:border-[#d94f70] hover:text-white transition-all cursor-pointer text-[16px] font-bold"
              >
                <span>Top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-xs p-4"
          onClick={() => setPrivacyOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-policy-title"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h2
                  id="privacy-policy-title"
                  className="text-[26px] font-bold text-white leading-snug"
                >
                  Privacy Policy · गोपनीयता नीति
                </h2>
                <p className="text-[15px] text-slate-400 mt-1">
                  Effective Year: 2026 · <span className="zq-feelings-logo text-slate-200">ZQ FEELINGS</span> - Dil Ki Awaaz
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                aria-label="Close Privacy Policy"
                className="p-2.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-5 text-[18px] leading-[1.8] text-slate-300">
              <section className="space-y-1.5">
                <h3 className="text-[22px] font-bold text-white">
                  1. Overview (परिचय)
                </h3>
                <p>
                  <span className="zq-feelings-logo text-white">ZQ FEELINGS</span> - Dil Ki Awaaz values your privacy. You can browse, read, copy, translate, and share Hindi Shayari, Status, Festival Wishes, Feelings Shayari, and 12 Months Special Days poetry without creating an account or submitting personal credentials.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-[22px] font-bold text-white">
                  2. Local Storage &amp; Saved Shayari (लोकल स्टोरेज)
                </h3>
                <p>
                  When you like a shayari or write your own poetry in the &ldquo;अपनी शायरी लिखें&rdquo; section, your entries are stored locally in your browser&rsquo;s Local Storage so they remain available in your Pasandida (Favorites) list. You can remove saved items anytime directly from the website.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-[22px] font-bold text-white">
                  3. Content Safety (सुरक्षित सामग्री)
                </h3>
                <p>
                  To maintain a respectful community experience, user-written entries pass through an automated language and link filter that prevents abusive words and spam URLs.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-[22px] font-bold text-white">
                  4. Cookies, Google AdSense &amp; Third-Party Sharing
                </h3>
                <p>
                  We do not sell or trade personal information. Third-party vendors, including Google AdSense, may use cookies (such as the DoubleClick DART cookie) to serve relevant ads based on visits to this and other websites. Users may opt out of personalized advertising anytime by visiting{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f472b6] hover:underline font-medium"
                  >
                    Google Ads Settings
                  </a>
                  . Clicking &ldquo;WhatsApp Share&rdquo; only opens WhatsApp with your selected shayari text when initiated by you.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-[22px] font-bold text-white">
                  5. Contact Us (संपर्क करें)
                </h3>
                <p>
                  For any privacy questions, copyright inquiries, or feedback, contact us at{' '}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-[#f472b6] hover:underline font-medium"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-6 py-2.5 rounded-xl bg-[#d94f70] hover:bg-[#c23d5e] text-white text-[18px] font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
