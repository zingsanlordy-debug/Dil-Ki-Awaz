import React from 'react';
import { useGlobalLanguage, useTranslatedText } from '../context/GlobalLanguageContext';

interface PageSeoIntroProps {
  title: string;
  description: string;
}

export const PageSeoIntro: React.FC<PageSeoIntroProps> = ({ title, description }) => {
  const { isRtl } = useGlobalLanguage();
  const translatedTitle = useTranslatedText(title);
  const translatedDesc = useTranslatedText(description);

  return (
    <section
      aria-label={translatedTitle}
      dir={isRtl ? 'rtl' : 'ltr'}
      className="max-w-4xl mx-auto text-center space-y-2"
    >
      <h1 className="font-rozha text-[20px] sm:text-[24px] font-bold text-[#991B1B] leading-snug">
        {translatedTitle}
      </h1>
      <div className="bg-[#fff8f9] border border-[#ffe4e8] rounded-xl px-4 py-2.5 shadow-2xs">
        <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed">
          {translatedDesc}
        </p>
      </div>
    </section>
  );
};
