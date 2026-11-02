import React, { useState } from 'react';
import { ArrowLeft, Check, Copy, FileText, Heart, Info, Mail, Scale, ShieldCheck } from 'lucide-react';

export type LegalTabId = 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact';

interface LegalPageProps {
  activeTab: LegalTabId;
  onSelectTab: (tab: LegalTabId) => void;
  onNavigateHome: () => void;
}

const CONTACT_EMAIL = 'support@zqfeelings.com';
const SECONDARY_CONTACT_EMAIL = 'zingsanlordy@gmail.com';

const LEGAL_TABS: ReadonlyArray<{
  id: LegalTabId;
  label: string;
  hindiLabel: string;
  href: string;
}> = [
  { id: 'about', label: 'About Us', hindiLabel: 'हमारे बारे में', href: '/about-us' },
  { id: 'privacy', label: 'Privacy Policy', hindiLabel: 'गोपनीयता नीति', href: '/privacy-policy' },
  {
    id: 'terms',
    label: 'Terms & Conditions',
    hindiLabel: 'नियम व शर्तें',
    href: '/terms-and-conditions'
  },
  { id: 'disclaimer', label: 'Disclaimer', hindiLabel: 'अस्वीकरण', href: '/disclaimer' },
  { id: 'contact', label: 'Contact Us', hindiLabel: 'संपर्क करें', href: '/contact-us' }
];

export const LegalPage: React.FC<LegalPageProps> = ({
  activeTab,
  onSelectTab,
  onNavigateHome
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-10 space-y-7 bg-white">
      {/* Top Back to Home + Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#ffe4e8] pb-4">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigateHome();
          }}
          className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#fff0f3] hover:bg-[#d94f70] text-[#991B1B] hover:text-white border border-[#fecdd3] text-[15px] font-extrabold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>

        <nav aria-label="Legal & Info Pages" className="flex flex-wrap items-center gap-2">
          {LEGAL_TABS.map((t) => {
            const isCurrent = t.id === activeTab;
            return (
              <a
                key={t.id}
                href={t.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(t.id);
                }}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-[13px] sm:text-[14px] font-extrabold border transition-colors cursor-pointer inline-flex items-center ${
                  isCurrent
                    ? 'bg-[#d94f70] text-white border-[#d94f70]'
                    : 'bg-[#fff8f9] text-slate-800 border-[#ffe4e8] hover:border-[#d94f70] hover:text-[#d94f70]'
                }`}
              >
                {t.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* ABOUT US */}
      {activeTab === 'about' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-5">
          <div className="flex items-center gap-3">
            <Info className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              About Us — ZQ FEELINGS (दिल की आवाज़)
            </h1>
          </div>

          <div className="space-y-4 text-[17px] leading-[1.85] text-slate-800">
            <p>
              <strong>ZQ FEELINGS - Dil Ki Awaaz</strong> एक 100% मौलिक (Original) और दिल से लिखा गया
              ऑल-इन-वन शायरी मंच है, जहाँ आपको हर भावना (Love, Sad, Yaad, Attitude, Dosti, Maafi),
              27 भारतीय त्यौहारों, 15 दिनों के Valentine Week Special (7 Feb – 21 Feb), धार्मिक
              आस्था (Sanatan Hindu, Islamic, Masih Faith, Sikh Dharm), संस्कार रस्मों (Newborn Baby,
              Godh Bharai, Naamkaran &amp; Mundan, Grah Pravesh) और पूरे 12 महीनों के खास दिनों के
              लिए बेहतरीन शायरियाँ मिलती हैं।
            </p>
            <p>
              हमारी हर शायरी मानवीय संवेदना, परिवार के अपनत्व और साफ़-सुथरी भाषा के साथ तैयार की गई
              है। आप किसी भी शायरी को <strong>20 स्टाइलिश फ़ॉन्ट्स</strong> में बदलकर एक क्लिक में कॉपी
              कर सकते हैं, फोटो कार्ड डाउनलोड कर सकते हैं, या सीधे WhatsApp और Facebook पर शेयर कर
              सकते हैं।
            </p>
            <p>
              इसके साथ ही <strong>“Apni Shayari Likhe”</strong> और <strong>“ZQ Moments 💗”</strong> के
              ज़रिए पाठक अपनी खुद की रचनाएँ और स्टेटस मोमेंट्स भी सुरक्षित रूप से साझा कर सकते हैं।
            </p>
          </div>
        </article>
      )}

      {/* PRIVACY POLICY */}
      {activeTab === 'privacy' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              Privacy Policy (गोपनीयता नीति)
            </h1>
          </div>

          <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
            <section className="space-y-1.5">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                1. No Mandatory Sign-Up (बिना अकाउंट सुरक्षित ब्राउज़िंग)
              </h2>
              <p>
                ZQ FEELINGS - Dil Ki Awaaz पर आप बिना किसी लॉगिन, पासवर्ड या व्यक्तिगत जानकारी दिए
                सभी शायरियाँ पढ़ सकते हैं, 35 भाषाओं में बदल सकते हैं, कॉपी कर सकते हैं और फोटो
                कार्ड डाउनलोड कर सकते हैं।
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                2. Browser Local Storage &amp; Favorites (लोकल स्टोरेज)
              </h2>
              <p>
                जब आप किसी शायरी को पसंदीदा (Favorites) में सेव करते हैं या फ़ॉन्ट साइज़/भाषा चुनते
                हैं, तो वह सेटिंग आपके अपने ब्राउज़र के Local Storage में सुरक्षित रहती है। आप इसे कभी
                भी हटा सकते हैं।
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                3. Community Safety &amp; Auto-Moderation (सुरक्षित सामग्री)
              </h2>
              <p>
                “Apni Shayari Likhe” और “ZQ Moments” में पोस्ट की जाने वाली रचनाएँ ऑटोमैटिक भाषा और
                स्पैम फ़िल्टर से गुज़रती हैं ताकि वेबसाइट हर उम्र और परिवार के लिए सम्मानजनक बनी रहे।
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                4. Cookies, Google AdSense &amp; DoubleClick DART Cookie Policy
              </h2>
              <p>
                हम किसी भी उपयोगकर्ता का निजी डेटा किसी तीसरे पक्ष को बेचते या साझा नहीं करते। वेबसाइट के
                निःशुल्क संचालन और रखरखाव हेतु तृतीय-पक्ष विज्ञापनदाता (जैसे{' '}
                <strong>Google AdSense</strong>) विज्ञापन दिखाने के लिए मानक कुकीज़ (Cookies) व
                वेब बीकन का उपयोग कर सकते हैं।
              </p>
              <p>
                Google एक तृतीय-पक्ष विक्रेता (Third-Party Vendor) के रूप में{' '}
                <strong>DoubleClick DART Cookie</strong> का उपयोग करता है ताकि उपयोगकर्ताओं को इस
                वेबसाइट और इंटरनेट की अन्य वेबसाइटों पर उनकी विज़िट के आधार पर प्रासंगिक विज्ञापन
                दिखाए जा सकें। उपयोगकर्ता कभी भी{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-extrabold text-[#991B1B] underline"
                >
                  Google Ads Settings (adssettings.google.com)
                </a>{' '}
                पर जाकर व्यक्तिगत विज्ञापनों (Personalized Advertising) और DART कुकी के उपयोग को बंद
                (Opt-Out) कर सकते हैं।
              </p>
            </section>
          </div>
        </article>
      )}

      {/* TERMS & CONDITIONS */}
      {activeTab === 'terms' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              Terms &amp; Conditions (नियम व शर्तें)
            </h1>
          </div>

          <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
            <section className="space-y-1.5">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                1. Personal Sharing Allowed (व्यक्तिगत शेयरिंग की अनुमति)
              </h2>
              <p>
                आप ZQ FEELINGS पर उपलब्ध शायरियों को अपने दोस्तों व परिवार के साथ WhatsApp, Facebook,
                Instagram Status और शुभकामना संदेशों में निःशुल्क कॉपी व शेयर कर सकते हैं।
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                2. Prohibition of Bulk Scraping (बल्क कॉपी निषेध)
              </h2>
              <p>
                वेबसाइट के संपूर्ण डेटाबेस या सैकड़ों शायरियों को बॉट्स/स्क्रैपिंग द्वारा कॉपी करके किसी
                अन्य व्यावसायिक वेबसाइट या ऐप पर बिना अनुमति पुनः प्रकाशित करना वर्जित है।
              </p>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-[20px] font-extrabold text-slate-900">
                3. User Submissions, Auto-Filter &amp; 3-Report Auto-Delete (पाठकों की रचनाएँ)
              </h2>
              <p>
                “Apni Shayari Likhe” या “ZQ Moments” में पोस्ट करते समय अनिवार्य रूप से Original
                Content Declaration स्वीकार करना होता है। लोगो, वॉटरमार्क, धुंधली फोटो, लिंक, 10
                शब्द से कम, गाली या 80%+ कॉपी कंटेंट को हमारा ऑटो-फ़िल्टर लाइव होने से पहले ही रोक
                देता है। किसी भी गेस्ट पोस्ट पर <strong>3 Report</strong> आते ही वह पोस्ट तुरंत
                Auto-Delete हो जाती है।
              </p>
            </section>
          </div>
        </article>
      )}

      {/* DISCLAIMER & COPYRIGHT */}
      {activeTab === 'disclaimer' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <Scale className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              Disclaimer, UGC Safe Harbor &amp; DMCA Policy (अस्वीकरण)
            </h1>
          </div>

          <div className="space-y-5 text-[17px] leading-[1.85] text-slate-800">
            <p>
              <strong>100% Original Content Commitment:</strong> ZQ FEELINGS - Dil Ki Awaaz पर
              प्रकाशित सभी मुख्य श्रेणियों की शायरियाँ मौलिक रूप से तैयार की गई हैं और किसी भी प्रसिद्ध
              शायर या अन्य वेबसाइट से कॉपी नहीं की गई हैं। वेबसाइट पर प्रयुक्त सभी फ़ॉन्ट्स Open Font
              License (Google Fonts / Unicode) के अंतर्गत मुक्त हैं।
            </p>
            <p>
              <strong>Guest User Content &amp; DMCA Takedown:</strong> “ZQ Moments” और “Apni Shayari
              Likhe” में दिखने वाली पोस्ट अतिथि उपयोगकर्ताओं (Guest Users) द्वारा मौलिक घोषणा के साथ
              साझा की जाती हैं। यदि कोई सामग्री कॉपी पाई जाती है, तो पोस्ट पर दिए गए{' '}
              <strong>Report</strong> बटन से रिपोर्ट करें (3 रिपोर्ट पर तुरंत Auto-Delete) या
              आधिकारिक DMCA हटाने हेतु हमें{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-extrabold text-[#991B1B] underline"
              >
                {CONTACT_EMAIL}
              </a>{' '}
              पर ईमेल करें।
            </p>
            <p>
              हम सभी धर्मों (सनातन हिन्दू, इस्लाम, मसीही विश्वास, सिख धर्म), संस्कृतियों और पारिवारिक
              परंपराओं का समान आदर करते हैं। यदि किसी भी सामग्री के संबंध में आपका कोई सुझाव या
              प्रश्न हो, तो कृपया हमसे ईमेल पर संपर्क करें—हम 24–48 घंटों में समीक्षा करेंगे।
            </p>
          </div>
        </article>
      )}

      {/* CONTACT US */}
      {activeTab === 'contact' && (
        <article className="rounded-3xl bg-[#fff8f9] border-2 border-[#ffe4e8] p-6 sm:p-9 space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="w-7 h-7 text-[#d94f70] shrink-0" />
            <h1 className="font-rozha text-[28px] sm:text-[34px] font-bold text-[#991B1B]">
              Contact Us (संपर्क करें)
            </h1>
          </div>

          <p className="text-[17px] leading-[1.85] text-slate-800">
            किसी भी सुझाव, फीडबैक, सहयोग (Collaboration) या सहायता के लिए आप सीधे हमारे आधिकारिक ईमेल
            पते पर संपर्क कर सकते हैं:
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white border-2 border-[#ffd6df] p-5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 text-[18px] sm:text-[20px] font-extrabold text-[#991B1B] hover:text-[#d94f70] break-all"
            >
              <Mail className="w-5 h-5 text-[#d94f70] shrink-0" />
              <span>{CONTACT_EMAIL}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="min-h-[46px] px-5 py-2.5 rounded-xl bg-[#d94f70] hover:bg-[#b83b59] text-white text-[15px] font-extrabold inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[15px] text-slate-600 font-medium">
            अतिरिक्त संपादकीय संपर्क (Editorial Support):{' '}
            <a
              href={`mailto:${SECONDARY_CONTACT_EMAIL}`}
              className="font-bold text-[#991B1B] hover:text-[#d94f70]"
            >
              {SECONDARY_CONTACT_EMAIL}
            </a>
          </p>

          <div className="pt-2 flex items-center gap-2 text-[15px] font-bold text-[#d94f70]">
            <Heart className="w-4 h-4 fill-[#d94f70]" />
            <span>ZQ FEELINGS - Dil Ki Awaaz Support &amp; DMCA Team</span>
          </div>
        </article>
      )}
    </div>
  );
};
