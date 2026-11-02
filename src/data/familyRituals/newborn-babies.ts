import { Shayari } from '../../types/shayari';
import { NEWBORN_BOY_PART_1 } from './newbornBoyPart1';
import { NEWBORN_BOY_PART_2 } from './newbornBoyPart2';
import { NEWBORN_GIRL_PART_1 } from './newbornGirlPart1';
import { NEWBORN_GIRL_PART_2 } from './newbornGirlPart2';

const ALL_BOY_RAW = [...NEWBORN_BOY_PART_1, ...NEWBORN_BOY_PART_2];
const ALL_GIRL_RAW = [...NEWBORN_GIRL_PART_1, ...NEWBORN_GIRL_PART_2];

export const NEWBORN_BOY_SHAYARIS: Shayari[] = ALL_BOY_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `ritual-baby-boy-${index + 1}`,
    category: 'newborn-babies',
    subCategory: 'baby-boy',
    categoryType: 'family-rituals',
    categoryName: 'Baby Boy Aaya Hai (छोटा प्रिंस आया है)',
    categoryIcon: '👶',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['NewbornBaby', 'BabyBoy', 'ChhotaPrince', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);

export const NEWBORN_GIRL_SHAYARIS: Shayari[] = ALL_GIRL_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `ritual-baby-girl-${index + 1}`,
    category: 'newborn-babies',
    subCategory: 'baby-girl',
    categoryType: 'family-rituals',
    categoryName: 'Baby Girl Aayi Hai (नन्ही परी आई है)',
    categoryIcon: '👧',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['NewbornBaby', 'BabyGirl', 'LakshmiAayi', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);

export const NEWBORN_BABIES_SHAYARIS: Shayari[] = [
  ...NEWBORN_BOY_SHAYARIS,
  ...NEWBORN_GIRL_SHAYARIS
];
