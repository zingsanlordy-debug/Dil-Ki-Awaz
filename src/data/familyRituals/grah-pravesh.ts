import { Shayari } from '../../types/shayari';
import { GRAH_PRAVESH_PART_1 } from './grahPraveshPart1';
import { GRAH_PRAVESH_PART_2 } from './grahPraveshPart2';

const ALL_GRAH_PRAVESH_RAW = [...GRAH_PRAVESH_PART_1, ...GRAH_PRAVESH_PART_2];

export const GRAH_PRAVESH_SHAYARIS: Shayari[] = ALL_GRAH_PRAVESH_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `ritual-grah-pravesh-${index + 1}`,
    category: 'grah-pravesh',
    subCategory: 'grah-pravesh',
    categoryType: 'family-rituals',
    categoryName: 'Grah Pravesh (गृह प्रवेश)',
    categoryIcon: '🏡',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['GrahPravesh', 'NewHomeWishes', 'NayeGharKiBadhai', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);
