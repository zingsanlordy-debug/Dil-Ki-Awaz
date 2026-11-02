import { Shayari } from '../../types/shayari';
import { SANATAN_RAW_PART_1, SanatanRawEntry } from './sanatanHinduPart1';
import { SANATAN_RAW_PART_2 } from './sanatanHinduPart2';

const ALL_SANATAN_RAW: SanatanRawEntry[] = [
  ...SANATAN_RAW_PART_1,
  ...SANATAN_RAW_PART_2
];

export const SANATAN_HINDU_SHAYARIS: Shayari[] = ALL_SANATAN_RAW.map(
  ([title, linesHindi, linesHinglish, linesEnglish, tags, initialLikes], index) => ({
    id: `sanatan-hindu-${index + 1}`,
    category: 'sanatan-hindu',
    categoryType: 'feelings',
    categoryName: 'Sanatan Hindu (सनातन हिंदू)',
    categoryIcon: '🕉️',
    title,
    lines: linesHindi,
    linesHindi,
    linesHinglish,
    linesEnglish,
    tags,
    author: 'ZQ-FEELINGS 💗',
    initialLikes
  })
);
