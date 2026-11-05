import React from 'react';
import { ExternalLink, Sparkles, Tag, Flame, Crown } from 'lucide-react';

// ============================================================================
// FLIPKART OFFER AUTO-LINK SYSTEM
// Change this single URL here to automatically update all 6 festive offer cards!
// ============================================================================
export const FLIPKART_OFFER_LINK = 'https://fktr.in/2yL50mr';

interface OfferCardData {
  id: string;
  title: string;
  discount: string;
  priceStart: string;
  icon: string;
  isHighlighted?: boolean;
}

const DIWALI_OFFER_CARDS: OfferCardData[] = [
  {
    id: 'mobile',
    title: 'Mobile Offer',
    discount: 'Upto 40% Off',
    priceStart: '₹9,999 se shuru',
    icon: '📱'
  },
  {
    id: 'ethnic-wear',
    title: 'Saree & Kurta',
    discount: 'Upto 50% Off',
    priceStart: '₹1,499 se shuru',
    icon: '🥻'
  },
  {
    id: 'gift-hamper',
    title: 'Gift Hamper',
    discount: 'Upto 30% Off',
    priceStart: '₹1,399 se shuru',
    icon: '🎁'
  },
  {
    id: 'gadgets',
    title: 'Gadget Offer',
    discount: 'Upto 60% Off',
    priceStart: '₹1,999 se shuru',
    icon: '🎧'
  },
  {
    id: 'lights-decor',
    title: 'Lights & Decor',
    discount: 'Upto 85% Off',
    priceStart: '₹799 se shuru',
    icon: '🪔',
    isHighlighted: true
  },
  {
    id: 'fashion',
    title: 'Fashion Offer',
    discount: 'Upto 55% Off',
    priceStart: '₹1,099 se shuru',
    icon: '👗'
  }
];

export const DiwaliOfferBox: React.FC = () => {
  return (
    <section
      aria-label="Diwali Special Flipkart Offers"
      className="my-10 p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#fff5f7] via-[#fffdf9] to-white border-2 border-[#ffd6df] shadow-md relative overflow-hidden"
    >
      {/* Decorative festive corner aura */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-rose-400/20 rounded-full blur-2xl pointer-events-none" />

      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-7 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-extrabold text-[12px] sm:text-[13px] uppercase tracking-wider shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-200" />
          <span>Flipkart Special Festive Deals 2026</span>
          <Flame className="w-3.5 h-3.5 text-amber-200" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-rozha">
          Diwali Best Deals - Hamari Pasand
        </h2>

        <p className="text-base sm:text-lg font-extrabold text-[#d94f70]">
          BIG BANG DIWALI SALE LIVE • Upto 85% Off - Flipkart Par
        </p>

        <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-xl mx-auto">
          Disclosure: Is link se kharidne par hame thoda sa commission milta hai, aapka price same rahega.
        </p>

        <div className="pt-2">
          <a
            href={FLIPKART_OFFER_LINK}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center justify-center min-h-[50px] px-8 py-3.5 rounded-2xl bg-[#2874f0] hover:bg-[#1a5bc7] text-white font-black text-[16px] sm:text-[17px] shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:scale-105 active:scale-95"
          >
            Flipkart par Diwali Deal Dekhein (Sponsored)
          </a>
        </div>
      </div>

      {/* 6 Realistic Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5 sm:gap-6 relative z-10">
        {DIWALI_OFFER_CARDS.map((card) => {
          const isHighlighted = card.isHighlighted;

          return (
            <a
              key={card.id}
              href={FLIPKART_OFFER_LINK}
              target="_blank"
              rel="sponsored nofollow noopener"
              aria-label={`${card.title} - ${card.discount} - Flipkart Par Dekho`}
              className={`group flex flex-col justify-between p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer text-left relative ${
                isHighlighted
                  ? 'bg-gradient-to-b from-amber-50 via-white to-amber-50/40 border-2 border-amber-400 shadow-lg hover:shadow-xl hover:border-amber-500 transform hover:-translate-y-1 sm:scale-[1.02]'
                  : 'bg-white border-2 border-[#ffe4e8] shadow-2xs hover:shadow-md hover:border-[#d94f70] transform hover:-translate-y-0.5'
              }`}
            >
              {/* Golden Highlight Tag for Card 5 */}
              {isHighlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-[12px] uppercase tracking-wide shadow-md border border-amber-200 flex items-center gap-1.5 whitespace-nowrap">
                  <Crown className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
                  <span>BEST OFFER - 85% OFF</span>
                </div>
              )}

              <div>
                {/* Top Tags Bar */}
                <div className="flex items-center justify-between gap-2 mb-3 pt-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600 text-white font-black text-[11px] sm:text-[12px] uppercase tracking-wide shadow-2xs">
                    <Tag className="w-3 h-3" />
                    Limited Time Offer
                  </span>
                  <span className="text-2xl select-none">{card.icon}</span>
                </div>

                {/* Offer Details */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#d94f70] transition-colors">
                  {card.title}
                </h3>

                <div className="mt-2 space-y-1">
                  <p
                    className={`text-2xl sm:text-3xl font-black ${
                      isHighlighted ? 'text-amber-600' : 'text-[#d94f70]'
                    }`}
                  >
                    {card.discount}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-700">
                    {card.priceStart}
                  </p>
                </div>
              </div>

              {/* Action Button & Disclaimer */}
              <div className="mt-5 pt-3 border-t border-slate-100/90 space-y-2">
                <div
                  className={`w-full min-h-[46px] px-4 py-2.5 rounded-xl font-extrabold text-[15px] flex items-center justify-center gap-2 transition-all shadow-xs ${
                    isHighlighted
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white group-hover:brightness-105'
                      : 'bg-[#2874f0] text-white group-hover:bg-[#1a5bc7]'
                  }`}
                >
                  <span>Flipkart Par Dekho</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </div>

                <p className="text-[11px] text-center text-slate-600 font-medium">
                  Price Flipkart par check karein
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
