import { ALL_CATEGORIES_FOR_POSTING, normalizeFeelingsCategoryId } from '../data/categories/categoryMeta';

export interface CategoryGradientTheme {
  emoji: string;
  accentLeft: string;
  accentRight: string;
  name: string;
  hindiName: string;
  gradientClass: string;
}

const SAD_CATEGORIES = new Set([
  'sad',
  'yaad',
  'breakup',
  'bewafa',
  'alone',
  'sad-love',
  'miss-you',
  'emotional',
  'sharabi'
]);

const ATTITUDE_CATEGORIES = new Set([
  'attitude',
  'boys',
  'matlabi-duniya'
]);

const NIGHT_SACRED_CATEGORIES = new Set([
  'good-night',
  'khwab',
  'kismat',
  'eid',
  'bakrid',
  'eid-milad',
  'janmashtami',
  'mahashivratri'
]);

const JOYFUL_CATEGORIES = new Set([
  'funny',
  'khushi',
  'dosti',
  'birthday',
  'birthday-feelings',
  'new-year',
  'holi',
  'girls',
  '2-line'
]);

const NATURE_PATRIOTIC_CATEGORIES = new Set([
  'independence-day',
  'republic-day',
  'gandhi-jayanti',
  'onam',
  'zindagi',
  'christmas'
]);

const SUNRISE_MOTIVATIONAL_CATEGORIES = new Set([
  'motivational',
  'good-morning',
  'chhath-puja',
  'lohri',
  'makar-sankranti',
  'baisakhi',
  'pongal'
]);

export function getCategoryGradientTheme(
  category: string,
  fallbackType: string = 'feelings'
): CategoryGradientTheme {
  const normalizedId = normalizeFeelingsCategoryId(category);
  const found = ALL_CATEGORIES_FOR_POSTING.find((item) => item.id === normalizedId);

  if (!found) {
    if (fallbackType === 'festival') {
      return {
        emoji: '🎉',
        accentLeft: '🪔',
        accentRight: '✨',
        name: 'All Festival Wishes Shayari',
        hindiName: 'सभी त्यौहार विशेस शायरी',
        gradientClass:
          'bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 border-amber-300'
      };
    }

    return {
      emoji: '💗',
      accentLeft: '✨',
      accentRight: '🌸',
      name: 'All Feelings Shayari',
      hindiName: 'सभी फीलिंग्स शायरी',
      gradientClass:
        'bg-gradient-to-br from-rose-600 via-pink-600 to-red-800 border-pink-300'
    };
  }

  let gradientClass =
    found.type === 'festival'
      ? 'bg-gradient-to-br from-orange-600 via-red-700 to-amber-700 border-amber-300'
      : 'bg-gradient-to-br from-rose-600 via-pink-600 to-red-800 border-pink-300';
  let accentLeft = found.type === 'festival' ? '✨' : '🌸';
  let accentRight = found.type === 'festival' ? '🪔' : '💞';

  if (SAD_CATEGORIES.has(found.id)) {
    gradientClass =
      'bg-gradient-to-br from-slate-800 via-rose-900 to-slate-900 border-rose-300/70';
    accentLeft = '🌧️';
    accentRight = '🥀';
  } else if (ATTITUDE_CATEGORIES.has(found.id)) {
    gradientClass =
      'bg-gradient-to-br from-red-800 via-rose-800 to-zinc-900 border-red-300';
    accentLeft = '🔥';
    accentRight = '⚡';
  } else if (NIGHT_SACRED_CATEGORIES.has(found.id)) {
    gradientClass =
      'bg-gradient-to-br from-indigo-900 via-slate-800 to-emerald-900 border-amber-300/70';
    accentLeft = '🌙';
    accentRight = '✨';
  } else if (JOYFUL_CATEGORIES.has(found.id)) {
    gradientClass =
      'bg-gradient-to-br from-amber-500 via-pink-600 to-rose-600 border-amber-200';
    accentLeft = '🎉';
    accentRight = '🌟';
  } else if (NATURE_PATRIOTIC_CATEGORIES.has(found.id)) {
    gradientClass =
      'bg-gradient-to-br from-emerald-700 via-teal-700 to-amber-700 border-emerald-300';
    accentLeft = '🌿';
    accentRight = '✨';
  } else if (SUNRISE_MOTIVATIONAL_CATEGORIES.has(found.id)) {
    gradientClass =
      'bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 border-amber-300';
    accentLeft = '🌅';
    accentRight = '🔥';
  } else if (found.id === 'sanatan-hindu') {
    gradientClass =
      'bg-gradient-to-br from-orange-600 via-amber-600 to-red-700 border-amber-300';
    accentLeft = '🕉️';
    accentRight = '🪔';
  } else if (found.id === 'islamic-allah') {
    gradientClass =
      'bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 border-emerald-300/80';
    accentLeft = '☪️';
    accentRight = '✨';
  } else if (found.id === 'christian-faith') {
    gradientClass =
      'bg-gradient-to-br from-indigo-800 via-blue-800 to-violet-900 border-indigo-300/80';
    accentLeft = '✝️';
    accentRight = '🕊️';
  } else if (found.id === 'sikh-dharm') {
    gradientClass =
      'bg-gradient-to-br from-amber-600 via-orange-600 to-indigo-900 border-amber-300';
    accentLeft = '☬';
    accentRight = '✨';
  } else if (found.id === 'newborn-babies') {
    gradientClass =
      'bg-gradient-to-br from-pink-500 via-rose-500 to-amber-500 border-pink-200';
    accentLeft = '👶';
    accentRight = '👧';
  } else if (found.id === 'godh-bharai') {
    gradientClass =
      'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 border-emerald-200';
    accentLeft = '🤰';
    accentRight = '🌸';
  } else if (found.id === 'naamkaran-mundan') {
    gradientClass =
      'bg-gradient-to-br from-amber-600 via-orange-500 to-rose-600 border-amber-200';
    accentLeft = '🪷';
    accentRight = '🪔';
  } else if (found.id === 'grah-pravesh') {
    gradientClass =
      'bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 border-violet-200';
    accentLeft = '🏡';
    accentRight = '🪔';
  } else if (found.id === 'papa-se-maafi') {
    gradientClass =
      'bg-gradient-to-br from-indigo-800 via-blue-700 to-slate-800 border-blue-200';
    accentLeft = '👨‍👦';
    accentRight = '🙏';
  } else if (found.id === 'husband-se-maafi') {
    gradientClass =
      'bg-gradient-to-br from-purple-700 via-violet-600 to-pink-600 border-purple-200';
    accentLeft = '💞';
    accentRight = '🙏';
  }

  return {
    emoji: found.icon,
    accentLeft,
    accentRight,
    name: found.name,
    hindiName: found.hindiName,
    gradientClass
  };
}
