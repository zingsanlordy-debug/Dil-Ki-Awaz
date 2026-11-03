import { FamilyRitualCategory } from '../../types/shayari';

export interface FamilyRitualCategoryMeta {
  id: FamilyRitualCategory;
  name: string;
  englishTitle: string;
  hindiTitle: string;
  icon: string;
  count: number;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  altPath: string;
  accentGradient: string;
}

export const FAMILY_RITUALS_MASTER = {
  id: 'family-rituals',
  name: 'Sanskar & Family Rituals (संस्कार)',
  englishTitle: 'Sanskar & Family Rituals',
  hindiTitle: 'संस्कार व पारिवारिक रस्में',
  totalCount: 250
} as const;

export const FAMILY_RITUALS_CATEGORIES: readonly FamilyRitualCategoryMeta[] = [
  {
    id: 'newborn-babies',
    name: 'Newborn Baby (नन्ही खुशी)',
    englishTitle: 'Newborn Baby',
    hindiTitle: 'नन्ही खुशी (बेटा व बेटी)',
    icon: '👶',
    count: 100,
    subtitle: 'Baby Boy (छोटा प्रिंस - 50) व Baby Girl (लक्ष्मी परी - 50) के आगमन की बधाई शायरी',
    seoTitle: 'Newborn Baby Boy & Girl Wishes Shayari | ZQ FEELINGS',
    seoDescription:
      '100+ Newborn Baby Boy & Baby Girl Wishes Shayari in Hindi (नन्हे राजकुमार और लक्ष्मी परी के जन्म की बधाई शायरी) with 20 stylish fonts.',
    path: '/newborn-babies-shayari/',
    altPath: '/family-rituals/newborn-babies-shayari',
    accentGradient: 'from-pink-500 via-rose-500 to-amber-500'
  },
  {
    id: 'godh-bharai',
    name: 'Godh Bharai (गोद भराई)',
    englishTitle: 'Godh Bharai',
    hindiTitle: 'गोद भराई संस्कार',
    icon: '🤰',
    count: 50,
    subtitle: 'Mom-to-Be, बेबी शावर और माँ बनने की पावन खुशी के लिए आशीर्वाद भरी शायरी',
    seoTitle: 'Godh Bharai & Baby Shower Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '50+ Godh Bharai & Baby Shower Shayari in Hindi (गोद भराई रस्म और माँ बनने की पावन बधाई शायरी) with 20 stylish fonts & WhatsApp share.',
    path: '/godh-bharai-shayari/',
    altPath: '/family-rituals/godh-bharai-shayari',
    accentGradient: 'from-emerald-600 via-teal-600 to-cyan-600'
  },
  {
    id: 'naamkaran-mundan',
    name: 'Naamkaran & Mundan',
    englishTitle: 'Naamkaran & Mundan',
    hindiTitle: 'नामकरण व मुंडन संस्कार',
    icon: '🪷',
    count: 50,
    subtitle: 'नन्हे शिशु के शुभ नामकरण और चूड़ाकरण मुंडन संस्कार की मंगल बधाई शायरी',
    seoTitle: 'Naamkaran & Mundan Sanskar Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '50+ Naamkaran & Mundan Sanskar Shayari in Hindi (शिशु नामकरण और मुंडन संस्कार की मंगल आशीर्वाद शायरी) with 20 stylish fonts & share.',
    path: '/naamkaran-mundan-shayari/',
    altPath: '/family-rituals/naamkaran-mundan-shayari',
    accentGradient: 'from-amber-600 via-orange-500 to-rose-500'
  },
  {
    id: 'grah-pravesh',
    name: 'Grah Pravesh (गृह प्रवेश)',
    englishTitle: 'Grah Pravesh',
    hindiTitle: 'गृह प्रवेश व नया घर',
    icon: '🏡',
    count: 50,
    subtitle: 'सपनों के नए आशियाने, कलश पूजन और शुभ गृह प्रवेश की हार्दिक बधाई शायरी',
    seoTitle: 'Grah Pravesh & New Home Shayari in Hindi | ZQ FEELINGS',
    seoDescription:
      '50+ Grah Pravesh & New Home Wishes Shayari in Hindi (नए घर के गृह प्रवेश और कलश पूजन की शुभकामना शायरी) with 20 stylish fonts & share.',
    path: '/grah-pravesh-shayari/',
    altPath: '/family-rituals/grah-pravesh-shayari',
    accentGradient: 'from-violet-600 via-purple-600 to-indigo-600'
  }
] as const;
