export type MonthId =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';

export interface SpecialShayariItem {
  id: string;
  linesHindi: string[];
  linesHinglish: string[];
  linesEnglish: string[];
  likes: number;
}

export interface SpecialDayInfo {
  id: string;
  monthId: MonthId;
  dateLabel: string;
  nameEnglish: string;
  nameHindi: string;
  icon: string;
  significance: string;
  shayaris: SpecialShayariItem[];
}

export interface MonthCollection {
  id: MonthId;
  monthNumber: number;
  nameEnglish: string;
  nameHindi: string;
  seasonTag: string;
  accentFrom: string;
  accentTo: string;
  heroIcon: string;
  taglineHindi: string;
  days: SpecialDayInfo[];
}
