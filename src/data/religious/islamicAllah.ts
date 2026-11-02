import { Shayari } from '../../types/shayari';
import { ISLAMIC_RAW_PART_1, IslamicRawEntry } from './islamicAllahPart1';
import { ISLAMIC_RAW_PART_1B } from './islamicAllahPart1b';
import { ISLAMIC_RAW_PART_2A } from './islamicAllahPart2a';
import { ISLAMIC_RAW_PART_2B } from './islamicAllahPart2b';
import { ISLAMIC_RAW_PART_2C } from './islamicAllahPart2c';
import { ISLAMIC_RAW_PART_2D } from './islamicAllahPart2d';

const ALL_ISLAMIC_RAW: IslamicRawEntry[] = [
  ...ISLAMIC_RAW_PART_1,
  ...ISLAMIC_RAW_PART_1B,
  ...ISLAMIC_RAW_PART_2A,
  ...ISLAMIC_RAW_PART_2B,
  ...ISLAMIC_RAW_PART_2C,
  ...ISLAMIC_RAW_PART_2D
];

const sanitizeHinglishLine = (line: string): string =>
  line.replace('Teesre पहर', 'Teesre pehar').replace('dhar देना.', 'dhar dena.');

const sanitizeUrduLine = (line: string): string =>
  line.replace('مومن की روح', 'مومن کی روح');

export const ISLAMIC_ALLAH_SHAYARIS: Shayari[] = ALL_ISLAMIC_RAW.map(
  ([title, linesHindi, linesHinglish, linesEnglish, linesUrdu, tags, initialLikes], index) => ({
    id: `islamic-allah-${index + 1}`,
    category: 'islamic-allah',
    categoryType: 'feelings',
    categoryName: 'Islamic Allah (इस्लामिक अल्लाह)',
    categoryIcon: '☪️',
    title,
    lines: linesHindi,
    linesHindi,
    linesHinglish: linesHinglish.map(sanitizeHinglishLine),
    linesEnglish,
    linesUrdu: linesUrdu.map(sanitizeUrduLine),
    tags,
    author: 'ZQ-FEELINGS 💗',
    initialLikes
  })
);
