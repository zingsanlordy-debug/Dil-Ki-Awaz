import { MonthId } from './types';

export interface MonthSummaryMeta {
  id: MonthId;
  monthNumber: number;
  nameHindi: string;
  nameEnglish: string;
  heroIcon: string;
}

export const MONTHS_META: readonly MonthSummaryMeta[] = [
  { id: 'january', monthNumber: 1, nameHindi: 'जनवरी', nameEnglish: 'January', heroIcon: '🌅' },
  { id: 'february', monthNumber: 2, nameHindi: 'फरवरी', nameEnglish: 'February', heroIcon: '🌹' },
  { id: 'march', monthNumber: 3, nameHindi: 'मार्च', nameEnglish: 'March', heroIcon: '👑' },
  { id: 'april', monthNumber: 4, nameHindi: 'अप्रैल', nameEnglish: 'April', heroIcon: '🌍' },
  { id: 'may', monthNumber: 5, nameHindi: 'मई', nameEnglish: 'May', heroIcon: '🤱' },
  { id: 'june', monthNumber: 6, nameHindi: 'जून', nameEnglish: 'June', heroIcon: '🌧️' },
  { id: 'july', monthNumber: 7, nameHindi: 'जुलाई', nameEnglish: 'July', heroIcon: '🩺' },
  { id: 'august', monthNumber: 8, nameHindi: 'अगस्त', nameEnglish: 'August', heroIcon: '🤝' },
  { id: 'september', monthNumber: 9, nameHindi: 'सितंबर', nameEnglish: 'September', heroIcon: '🎓' },
  { id: 'october', monthNumber: 10, nameHindi: 'अक्टूबर', nameEnglish: 'October', heroIcon: '✈️' },
  { id: 'november', monthNumber: 11, nameHindi: 'नवंबर', nameEnglish: 'November', heroIcon: '🎈' },
  { id: 'december', monthNumber: 12, nameHindi: 'दिसंबर', nameEnglish: 'December', heroIcon: '🌾' }
] as const;
