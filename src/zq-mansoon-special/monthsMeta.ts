import { MonthId } from './types';

export interface MonthSummaryMeta {
  id: MonthId;
  monthNumber: number;
  nameHindi: string;
  nameEnglish: string;
  heroIcon: string;
  seoTitle: string;
  seoDescription: string;
}

export const MONTHS_META: readonly MonthSummaryMeta[] = [
  {
    id: 'january',
    monthNumber: 1,
    nameHindi: 'जनवरी',
    nameEnglish: 'January',
    heroIcon: '🌅',
    seoTitle: 'January Special Days Shayari (जनवरी शायरी) | ZQ FEELINGS',
    seoDescription:
      'January Special Days Shayari in Hindi (जनवरी शायरी) — 200 wishes for New Year, Lohri, Youth Day, Army Day & Republic Day on ZQ Feelings.'
  },
  {
    id: 'february',
    monthNumber: 2,
    nameHindi: 'फरवरी',
    nameEnglish: 'February',
    heroIcon: '🌹',
    seoTitle: 'February Special Days Shayari (फरवरी शायरी) | ZQ FEELINGS',
    seoDescription:
      'February Special Days Shayari in Hindi (फरवरी शायरी) — 200 wishes for Basant Panchami, Rose Day, Valentine Week & Science Day on ZQ Feelings.'
  },
  {
    id: 'march',
    monthNumber: 3,
    nameHindi: 'मार्च',
    nameEnglish: 'March',
    heroIcon: '👑',
    seoTitle: 'March Special Days Shayari (मार्च शायरी) | ZQ FEELINGS',
    seoDescription:
      "March Special Days Shayari in Hindi (मार्च शायरी) — 200 wishes for Women's Day, Holi, Shaheed Diwas & World Poetry Day on ZQ Feelings."
  },
  {
    id: 'april',
    monthNumber: 4,
    nameHindi: 'अप्रैल',
    nameEnglish: 'April',
    heroIcon: '🌍',
    seoTitle: 'April Special Days Shayari (अप्रैल शायरी) | ZQ FEELINGS',
    seoDescription:
      'April Special Days Shayari in Hindi (अप्रैल शायरी) — 200 wishes for Ram Navami, Hanuman Jayanti, Ambedkar Jayanti & Earth Day on ZQ Feelings.'
  },
  {
    id: 'may',
    monthNumber: 5,
    nameHindi: 'मई',
    nameEnglish: 'May',
    heroIcon: '🤱',
    seoTitle: 'May Special Days Shayari (मई शायरी) | ZQ FEELINGS',
    seoDescription:
      "May Special Days Shayari in Hindi (मई शायरी) — 200 wishes for Mother's Day, Labour Day, Buddha Purnima & Family Day on ZQ Feelings."
  },
  {
    id: 'june',
    monthNumber: 6,
    nameHindi: 'जून',
    nameEnglish: 'June',
    heroIcon: '🌧️',
    seoTitle: 'June Special Days Shayari (जून शायरी) | ZQ FEELINGS',
    seoDescription:
      "June Special Days Shayari in Hindi (जून शायरी) — 200 wishes for Father's Day, Environment Day, International Yoga Day & Music Day."
  },
  {
    id: 'july',
    monthNumber: 7,
    nameHindi: 'जुलाई',
    nameEnglish: 'July',
    heroIcon: '🩺',
    seoTitle: 'July Special Days Shayari (जुलाई शायरी) | ZQ FEELINGS',
    seoDescription:
      "July Special Days Shayari in Hindi (जुलाई शायरी) — 200 wishes for Doctor's Day, Guru Purnima, Sawan Somwar & Kargil Vijay Diwas."
  },
  {
    id: 'august',
    monthNumber: 8,
    nameHindi: 'अगस्त',
    nameEnglish: 'August',
    heroIcon: '🤝',
    seoTitle: 'August Special Days Shayari (अगस्त शायरी) | ZQ FEELINGS',
    seoDescription:
      'August Special Days Shayari in Hindi (अगस्त शायरी) — 200 wishes for Friendship Day, Rakshabandhan, 15 August & Krishna Janmashtami.'
  },
  {
    id: 'september',
    monthNumber: 9,
    nameHindi: 'सितंबर',
    nameEnglish: 'September',
    heroIcon: '🎓',
    seoTitle: 'September Special Days Shayari (सितंबर शायरी) | ZQ',
    seoDescription:
      "September Special Days Shayari in Hindi (सितंबर शायरी) — 200 wishes for Teacher's Day, Hindi Diwas, Engineer's Day & Ganeshotsav."
  },
  {
    id: 'october',
    monthNumber: 10,
    nameHindi: 'अक्टूबर',
    nameEnglish: 'October',
    heroIcon: '✈️',
    seoTitle: 'October Special Days Shayari (अक्टूबर शायरी) | ZQ',
    seoDescription:
      'October Special Days Shayari in Hindi (अक्टूबर शायरी) — 200 wishes for Gandhi Jayanti, Navratri, Dussehra, Karva Chauth & Ekta Diwas.'
  },
  {
    id: 'november',
    monthNumber: 11,
    nameHindi: 'नवंबर',
    nameEnglish: 'November',
    heroIcon: '🎈',
    seoTitle: 'November Special Days Shayari (नवंबर शायरी) | ZQ FEELINGS',
    seoDescription:
      "November Special Days Shayari in Hindi (नवंबर शायरी) — 200 wishes for Diwali, Bhai Dooj, Chhath Puja, Children's Day & Gurpurab."
  },
  {
    id: 'december',
    monthNumber: 12,
    nameHindi: 'दिसंबर',
    nameEnglish: 'December',
    heroIcon: '🌾',
    seoTitle: 'December Special Days Shayari (दिसंबर शायरी) | ZQ FEELINGS',
    seoDescription:
      'December Special Days Shayari in Hindi (दिसंबर शायरी) — 200 wishes for Navy Day, Geeta Jayanti, Kisan Diwas, Christmas & Year-End.'
  }
] as const;
