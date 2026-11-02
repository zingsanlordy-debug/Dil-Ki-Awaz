import { MaafiSubCategory, Shayari } from '../../types/shayari';
import { MAA_SE_MAAFI_SHAYARIS } from './maa-se-maafi';
import { PAPA_SE_MAAFI_SHAYARIS } from './papa-se-maafi';
import { BIWI_SE_MAAFI_SHAYARIS } from './biwi-se-maafi';
import { HUSBAND_SE_MAAFI_SHAYARIS } from './husband-se-maafi';

export interface MaafiSubCategoryMeta {
  id: MaafiSubCategory;
  name: string;
  englishTitle: string;
  hindiTitle: string;
  icon: string;
  count: number;
  slug: string;
  subtitle: string;
  accentGradient: string;
}

export const MAAFI_SUBCATEGORIES: readonly MaafiSubCategoryMeta[] = [
  {
    id: 'maa-se-maafi',
    name: 'Maa Se Maafi (माँ से माफ़ी)',
    englishTitle: 'Maa Se Maafi',
    hindiTitle: 'माँ से माफ़ी',
    icon: '🤱',
    count: 25,
    slug: '/feelings/maa-se-maafi-shayari',
    subtitle: 'नाराज़ माँ को मनाने और ममता के चरणों में क्षमा माँगने की भावुक शायरी',
    accentGradient: 'from-rose-600 via-pink-600 to-fuchsia-600'
  },
  {
    id: 'papa-se-maafi',
    name: 'Papa Se Maafi (पापा से माफ़ी)',
    englishTitle: 'Papa Se Maafi',
    hindiTitle: 'पापा से माफ़ी',
    icon: '👨‍👦',
    count: 25,
    slug: '/feelings/papa-se-maafi-shayari',
    subtitle: 'पापा से हुई गलती पर सम्मान और पश्चाताप से भरी दिल छू लेने वाली माफ़ी शायरी',
    accentGradient: 'from-indigo-700 via-blue-700 to-sky-700'
  },
  {
    id: 'biwi-se-maafi',
    name: 'Biwi Se Maafi (बीवी से माफ़ी)',
    englishTitle: 'Biwi Se Maafi',
    hindiTitle: 'बीवी से माफ़ी',
    icon: '🌹',
    count: 25,
    slug: '/feelings/biwi-se-maafi-shayari',
    subtitle: 'रूठी बीवी का गुस्सा पिघलाने और प्यार से मनाने वाली रोमांटिक सॉरी शायरी',
    accentGradient: 'from-pink-600 via-rose-500 to-red-500'
  },
  {
    id: 'husband-se-maafi',
    name: 'Husband Se Maafi (पति से माफ़ी)',
    englishTitle: 'Husband Se Maafi',
    hindiTitle: 'पति से माफ़ी',
    icon: '💞',
    count: 25,
    slug: '/feelings/husband-se-maafi-shayari',
    subtitle: 'नाराज़ पतिदेव को प्यार से मनाने और मुस्कान लौटाने वाली मीठी सॉरी शायरी',
    accentGradient: 'from-purple-600 via-violet-600 to-pink-600'
  }
] as const;

export const MAAFI_SPECIAL_SHAYARIS: Shayari[] = [
  ...MAA_SE_MAAFI_SHAYARIS,
  ...PAPA_SE_MAAFI_SHAYARIS,
  ...BIWI_SE_MAAFI_SHAYARIS,
  ...HUSBAND_SE_MAAFI_SHAYARIS
];

export {
  MAA_SE_MAAFI_SHAYARIS,
  PAPA_SE_MAAFI_SHAYARIS,
  BIWI_SE_MAAFI_SHAYARIS,
  HUSBAND_SE_MAAFI_SHAYARIS
};
