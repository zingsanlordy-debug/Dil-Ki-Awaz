import { JANUARY_COLLECTION } from './january';
import { FEBRUARY_COLLECTION } from './february';
import { MARCH_COLLECTION } from './march';
import { APRIL_COLLECTION } from './april';
import { MAY_COLLECTION } from './may';
import { JUNE_COLLECTION } from './june';
import { JULY_COLLECTION } from './july';
import { AUGUST_COLLECTION } from './august';
import { SEPTEMBER_COLLECTION } from './september';
import { OCTOBER_COLLECTION } from './october';
import { NOVEMBER_COLLECTION } from './november';
import { DECEMBER_COLLECTION } from './december';
import { MonthCollection, SpecialDayInfo } from '../types';
import { Shayari } from '../../types/shayari';

export {
  JANUARY_COLLECTION,
  FEBRUARY_COLLECTION,
  MARCH_COLLECTION,
  APRIL_COLLECTION,
  MAY_COLLECTION,
  JUNE_COLLECTION,
  JULY_COLLECTION,
  AUGUST_COLLECTION,
  SEPTEMBER_COLLECTION,
  OCTOBER_COLLECTION,
  NOVEMBER_COLLECTION,
  DECEMBER_COLLECTION
};

export const ALL_12_MONTHS: MonthCollection[] = [
  JANUARY_COLLECTION,
  FEBRUARY_COLLECTION,
  MARCH_COLLECTION,
  APRIL_COLLECTION,
  MAY_COLLECTION,
  JUNE_COLLECTION,
  JULY_COLLECTION,
  AUGUST_COLLECTION,
  SEPTEMBER_COLLECTION,
  OCTOBER_COLLECTION,
  NOVEMBER_COLLECTION,
  DECEMBER_COLLECTION
];

export const ALL_SPECIAL_DAYS: SpecialDayInfo[] = ALL_12_MONTHS.flatMap((m) => m.days);

export interface FlatSpecialShayari {
  shayari: Shayari;
  monthId: MonthCollection['id'];
  monthNumber: number;
  monthNameHindi: string;
  monthNameEnglish: string;
  dayId: string;
  dateLabel: string;
  dayNameHindi: string;
  dayNameEnglish: string;
  significance: string;
  icon: string;
}

export const ALL_FLAT_SPECIAL_SHAYARIS: FlatSpecialShayari[] = ALL_12_MONTHS.flatMap((month) =>
  month.days.flatMap((day, dayIndex) =>
    day.shayaris.map((item, sIdx) => {
      const shayariObj: Shayari = {
        id: item.id,
        category: day.id,
        categoryType: 'zq-official',
        categoryName: `${day.dateLabel} • ${day.nameEnglish}`,
        categoryIcon: day.icon,
        title: `${day.nameHindi} (${day.nameEnglish}) #${sIdx + 1}`,
        lines: item.linesHindi,
        linesHindi: item.linesHindi,
        linesHinglish: item.linesHinglish,
        linesEnglish: item.linesEnglish,
        tags: [
          month.nameEnglish,
          day.nameEnglish.replace(/[^a-zA-Z0-9]/g, ''),
          'SpecialDaysShayari',
          'ZQMansoonSpecial'
        ],
        author: 'ZQ-FEELINGS 💗',
        initialLikes: item.likes + dayIndex,
        commentsCount: 0,
        comments: []
      };

      return {
        shayari: shayariObj,
        monthId: month.id,
        monthNumber: month.monthNumber,
        monthNameHindi: month.nameHindi,
        monthNameEnglish: month.nameEnglish,
        dayId: day.id,
        dateLabel: day.dateLabel,
        dayNameHindi: day.nameHindi,
        dayNameEnglish: day.nameEnglish,
        significance: day.significance,
        icon: day.icon
      };
    })
  )
);

export const ALL_SPECIAL_SHAYARI_AS_SHAYARI: Shayari[] = ALL_FLAT_SPECIAL_SHAYARIS.map(
  (entry) => entry.shayari
);
