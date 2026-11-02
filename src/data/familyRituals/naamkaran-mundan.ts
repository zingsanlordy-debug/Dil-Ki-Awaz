import { Shayari } from '../../types/shayari';
import { NAAMKARAN_RAW } from './naamkaranPart';
import { MUNDAN_RAW } from './mundanPart';

export const NAAMKARAN_SHAYARIS: Shayari[] = NAAMKARAN_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `ritual-naamkaran-${index + 1}`,
    category: 'naamkaran-mundan',
    subCategory: 'naamkaran',
    categoryType: 'family-rituals',
    categoryName: 'Naamkaran Sanskar (नामकरण संस्कार)',
    categoryIcon: '🪷',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['Naamkaran', 'NamingCeremony', 'SanskarWishes', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);

export const MUNDAN_SHAYARIS: Shayari[] = MUNDAN_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `ritual-mundan-${index + 1}`,
    category: 'naamkaran-mundan',
    subCategory: 'mundan',
    categoryType: 'family-rituals',
    categoryName: 'Mundan Sanskar (मुंडन संस्कार)',
    categoryIcon: '🪔',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['MundanSanskar', 'Chudakaran', 'SanskarWishes', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);

export const NAAMKARAN_MUNDAN_SHAYARIS: Shayari[] = [
  ...NAAMKARAN_SHAYARIS,
  ...MUNDAN_SHAYARIS
];
