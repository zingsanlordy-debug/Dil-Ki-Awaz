import { Shayari } from '../../types/shayari';
import { GODH_BHARAI_PART_1 } from './godhBharaiPart1';
import { GODH_BHARAI_PART_2 } from './godhBharaiPart2';

const ALL_GODH_BHARAI_RAW = [...GODH_BHARAI_PART_1, ...GODH_BHARAI_PART_2];

export const GODH_BHARAI_SHAYARIS: Shayari[] = ALL_GODH_BHARAI_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `ritual-godh-bharai-${index + 1}`,
    category: 'godh-bharai',
    subCategory: 'godh-bharai',
    categoryType: 'family-rituals',
    categoryName: 'Godh Bharai (गोद भराई)',
    categoryIcon: '🤰',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['GodhBharai', 'BabyShower', 'MomToBe', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);
