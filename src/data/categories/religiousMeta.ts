import { LanguageType, ReligiousCategory } from '../../types/shayari';

export interface ReligiousCategoryMeta {
  id: ReligiousCategory;
  name: string;
  englishTitle: string;
  hindiTitle: string;
  icon: string;
  count: number;
  path: string;
  feelingsSlug: string;
  subtitle: string;
  accentGradient: string;
  borderAccent: string;
  badgeColor: string;
  languages: LanguageType[];
}

export const RELIGIOUS_CATEGORIES: ReligiousCategoryMeta[] = [
  {
    id: 'sanatan-hindu',
    name: 'Sanatan Hindu (सनातन हिंदू)',
    englishTitle: 'Sanatan Hindu',
    hindiTitle: 'सनातन हिंदू',
    icon: '🕉️',
    count: 100,
    path: '/religious/sanatan-hindu',
    feelingsSlug: '/feelings/sanatan-hindu-shayari/',
    subtitle: 'वेद, पुराण, श्रीमद्भगवद्गीता, रामायण, उपनिषद, कर्म, मोक्ष और भक्ति',
    accentGradient: 'from-orange-500 via-amber-500 to-red-600',
    borderAccent: 'border-orange-300 hover:border-orange-500',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    languages: ['hindi', 'hinglish', 'english']
  },
  {
    id: 'islamic-allah',
    name: 'Islamic Allah (इस्लामिक अल्लाह)',
    englishTitle: 'Islamic Allah',
    hindiTitle: 'इस्लामिक अल्लाह',
    icon: '☪️',
    count: 100,
    path: '/religious/islamic-allah',
    feelingsSlug: '/feelings/islamic-allah-shayari/',
    subtitle: 'अल्लाह, दुआ, नमाज़, क़ुरआन, जुम्मा मुबारक, ईमान, सब्र, शुक्राना और नूर',
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    borderAccent: 'border-emerald-300 hover:border-emerald-500',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    languages: ['hindi', 'hinglish', 'english', 'urdu']
  },
  {
    id: 'christian-faith',
    name: 'Masih Faith (मसीह विश्वास)',
    englishTitle: 'Masih Faith',
    hindiTitle: 'मसीह विश्वास',
    icon: '✝️',
    count: 60,
    path: '/religious/christian-faith',
    feelingsSlug: '/feelings/christian-faith-shayari/',
    subtitle: 'प्रभु यीशु, पवित्र बाइबल, प्रार्थना, क्रूस, अनुग्रह, विश्वास और आशा',
    accentGradient: 'from-indigo-600 via-blue-600 to-violet-700',
    borderAccent: 'border-indigo-300 hover:border-indigo-500',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    languages: ['hindi', 'hinglish', 'english']
  },
  {
    id: 'sikh-dharm',
    name: 'Sikh Dharm (सिख धर्म)',
    englishTitle: 'Sikh Dharm',
    hindiTitle: 'सिख धर्म',
    icon: '☬',
    count: 50,
    path: '/religious/sikh-dharm',
    feelingsSlug: '/feelings/sikh-dharm-shayari/',
    subtitle: 'वाहेगुरु, गुरु नानक देव जी, गुरु ग्रंथ साहिब, गुरबाणी, खालसा, सेवा और लंगर',
    accentGradient: 'from-amber-500 via-yellow-500 to-orange-600',
    borderAccent: 'border-amber-300 hover:border-amber-500',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    languages: ['hindi', 'hinglish', 'english']
  }
];
