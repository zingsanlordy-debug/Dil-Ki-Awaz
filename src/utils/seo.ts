import { AppRoute } from '../components/Header';
import {
  FESTIVAL_CATEGORIES,
  FEELINGS_CATEGORIES,
  FEELINGS_CATEGORY_MERGE_MAP,
  normalizeFeelingsCategoryId,
  RELIGIOUS_CATEGORIES,
  FAMILY_RITUALS_CATEGORIES,
  MAAFI_SUBCATEGORIES_META
} from '../data/categories/categoryMeta';
import { MONTHS_META } from '../zq-mansoon-special/monthsMeta';
import { MonthId } from '../zq-mansoon-special/types';
import { FamilyRitualCategory, ReligiousCategory, Shayari } from '../types/shayari';
import {
  VALENTINE_CATEGORIES,
  VALENTINE_LANGUAGE_MAP,
  VALENTINE_LANGUAGES,
  ValentineCategoryId,
  ValentineLangCode,
  buildValentineCleanPath,
  normalizeValentineLangParam
} from '../data/valentineWeekMeta';
import {
  HOLIDAY_35_META,
  STATIC35_ISO_PREFIX_BY_CODE,
  buildFeelingsCleanPath,
  buildHoliday35CleanPath,
  getFeelingsHindiBasePath,
  isHoliday35Category,
  parseStatic35LangToken
} from '../data/static35/static35Meta';
import { DIWALI_35_FAQS, DIWALI_35_SEO } from '../data/static35/diwali35Data';
import { getCategorySeoDetail } from '../data/categories/categorySeoContent';

export interface ParsedSeoRoute {
  route: AppRoute;
  festivalCat?: string;
  feelingsCat?: string;
  valentineFocusCat?: ValentineCategoryId;
  valentineLang?: ValentineLangCode;
  staticLang?: ValentineLangCode;
  religiousCat?: ReligiousCategory;
  familyRitualCat?: FamilyRitualCategory;
  specialMonth?: MonthId | 'all';
  page?: number;
  shayariSlug?: string;
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface SeoBreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSeoMeta {
  title: string;
  description: string;
  canonicalPath: string;
  h1: string;
  section: string;
  keywords: string[];
  langCode?: string;
  valentineBasePath?: string;
  valentinePageSuffix?: string;
  hreflangPrefixSlug?: string;
  breadcrumbs: SeoBreadcrumbItem[];
  faqs?: SeoFaqItem[];
}

import { getActiveSiteOrigin, isFreeHostingPreviewHost } from './siteOrigin';

export const SITE_NAME_FULL = 'ZQ Feelings - Dil Ki Awaaz';
export const HOME_SEO_TITLE = 'Best New Shayari 2026 | ZQ Feelings - Dil Ki Awaaz';
export const HOME_SEO_DESCRIPTION =
  '5,900+ Best Shayari in Hindi & 77 Languages. Love, Sad, Attitude & Festival Shayari. 240+ Stylish Fonts, 1-Click Copy, WhatsApp Share & Photo Card Download.';

export function formatTopicSeoTitle(topic: string): string {
  const cleanTopic = topic.trim();
  if (!cleanTopic) return HOME_SEO_TITLE;
  return `${cleanTopic} Best New Shayari 2026 | ${SITE_NAME_FULL}`;
}

export function formatTopicSeoDescription(topic?: string): string {
  if (!topic || !topic.trim()) {
    return HOME_SEO_DESCRIPTION;
  }
  const cleanTopic = topic.trim();
  const fullCandidate = `Read ${cleanTopic} - Best New Shayari 2026 in Hindi, English and more. Latest Love, Sad, Attitude, Miss You Shayari only on ZQ Feelings - Dil Ki Awaaz.`;
  if (fullCandidate.length <= 160) {
    return fullCandidate;
  }
  const mediumCandidate = `Read ${cleanTopic} - Best New Shayari 2026 in Hindi, English and more. Latest Love, Sad, Attitude Shayari only on ZQ Feelings - Dil Ki Awaaz.`;
  if (mediumCandidate.length <= 160) {
    return mediumCandidate;
  }
  return `Read ${cleanTopic} - Best New Shayari 2026 in Hindi, English and more only on ZQ Feelings - Dil Ki Awaaz.`;
}

/**
 * Appends clean `/page/N` suffix for N >= 2 and normalizes N <= 1 back to base canonical path.
 */
export function buildPaginatedCleanPath(baseCanonicalPath: string, page?: number): string {
  if (!page || page <= 1) return baseCanonicalPath;
  if (baseCanonicalPath === '/') return `/page/${page}`;
  return `${baseCanonicalPath.replace(/\/+$/, '')}/page/${page}`;
}

const HINDI_ROUTE_ALIASES: Record<string, ParsedSeoRoute> = {
  'त्यौहार-शायरी': { route: 'festival', festivalCat: 'all' },
  'फीलिंग्स-शायरी': { route: 'feelings', feelingsCat: 'all' },
  'प्यार-शायरी': { route: 'feelings', feelingsCat: 'love' },
  'दर्द-शायरी': { route: 'feelings', feelingsCat: 'sad' },
  'याद-शायरी': { route: 'feelings', feelingsCat: 'yaad' },
  'किस्मत-शायरी': { route: 'feelings', feelingsCat: 'kismat' },
  'खुशी-शायरी': { route: 'feelings', feelingsCat: 'khushi' },
  'एटीट्यूड-शायरी': { route: 'feelings', feelingsCat: 'attitude' },
  'तन्हाई-शायरी': { route: 'feelings', feelingsCat: 'alone' },
  'मोटिवेशनल-शायरी': { route: 'feelings', feelingsCat: 'motivational' },
  'माफी-शायरी': { route: 'feelings', feelingsCat: 'sorry' },
  'दोस्ती-शायरी': { route: 'feelings', feelingsCat: 'dosti' },
  'बेवफा-शायरी': { route: 'feelings', feelingsCat: 'bewafa' },
  'ब्रेकअप-शायरी': { route: 'feelings', feelingsCat: 'breakup' },
  'ज़िंदगी-शायरी': { route: 'feelings', feelingsCat: 'motivational' },
  'मोहब्बत-शायरी': { route: 'feelings', feelingsCat: 'love' },
  'फनी-शायरी': { route: 'feelings', feelingsCat: 'funny' },
  'चुटकुले-शायरी': { route: 'feelings', feelingsCat: 'funny' },
  'शराबी-शायरी': { route: 'feelings', feelingsCat: 'sharabi' },
  'दीपावली-शायरी': { route: 'festival', festivalCat: 'diwali' },
  'होली-शायरी': { route: 'festival', festivalCat: 'holi' },
  'अपनी-शायरी-लिखें': { route: 'public-wall' },
  'पसंदीदा-शायरी': { route: 'favorites' },
  'ज़ेडक्यू-मोमेंट्स': { route: 'zq-moments' }
};

/**
 * Builds clean SEO-friendly URLs (zero ugly query parameters)
 */
export function buildCleanSeoUrl(
  route: AppRoute,
  subSlug?: string,
  valentineLang?: ValentineLangCode,
  page?: number
): string {
  let basePath = '/';
  switch (route) {
    case 'home':
      basePath = '/';
      break;

    case 'festival': {
      if (subSlug && isHoliday35Category(subSlug)) {
        return buildHoliday35CleanPath(subSlug, valentineLang || 'hi', page);
      }
      if (subSlug && subSlug !== 'all') {
        const exists = FESTIVAL_CATEGORIES.some((c) => c.id === subSlug);
        if (exists) {
          basePath = `/${subSlug}-shayari`;
          break;
        }
      }
      basePath = '/festival-shayari';
      break;
    }

    case 'feelings': {
      return buildFeelingsCleanPath(subSlug, valentineLang || 'hi', page, false);
    }

    case 'valentine-week': {
      let valCatId: ValentineCategoryId | undefined;
      if (subSlug && subSlug !== 'all') {
        const cleaned = subSlug.trim().toLowerCase().replace(/-shayari$/, '');
        const foundVal = VALENTINE_CATEGORIES.find((c) => c.id === cleaned);
        if (foundVal) valCatId = foundVal.id;
      }
      basePath = buildValentineCleanPath(valCatId, valentineLang, false);
      break;
    }

    case 'religious': {
      if (subSlug) {
        const found = RELIGIOUS_CATEGORIES.find((c) => c.id === subSlug);
        if (found) {
          basePath = found.path;
          break;
        }
      }
      basePath = '/religious/sanatan-hindu';
      break;
    }

    case 'family-rituals': {
      if (subSlug) {
        const found = FAMILY_RITUALS_CATEGORIES.find((c) => c.id === subSlug);
        if (found) {
          basePath = found.path;
          break;
        }
      }
      basePath = '/newborn-babies-shayari/';
      break;
    }

    case 'zq-mansoon-special': {
      if (subSlug && subSlug !== 'all') {
        const exists = MONTHS_META.some((m) => m.id === subSlug);
        if (exists) {
          basePath = `/${subSlug}-special-shayari`;
          break;
        }
      }
      basePath = '/12-months-special-days-shayari';
      break;
    }

    case 'zq-moments':
      return '/zq-moments';

    case 'public-wall':
      return '/apni-shayari-likhe';

    case 'favorites':
      return '/pasandida-shayari';

    case 'zq-official':
      return '/zq-feelings-shayari';

    case 'admin-zq':
      return '/admin-zq';

    case 'about':
      return '/about-us';

    case 'privacy':
      return '/privacy-policy';

    case 'terms':
      return '/terms-and-conditions';

    case 'disclaimer':
      return '/disclaimer';

    case 'contact':
      return '/contact-us';

    default:
      basePath = '/';
      break;
  }

  return buildPaginatedCleanPath(basePath, page);
}

/**
 * Parses browser pathname & hash into AppRoute + active category/month/language + optional page >= 2
 */
export function parseLocationToRoute(pathname: string, hash = ''): ParsedSeoRoute {
  let decodedPath = '/';
  try {
    decodedPath = decodeURIComponent(pathname).toLowerCase().replace(/\/+$/, '') || '/';
  } catch {
    decodedPath = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  }

  let extractedPage: number | undefined;
  const pageMatch = decodedPath.match(/^(.*?)\/page\/(\d+)$/);
  if (pageMatch) {
    decodedPath = pageMatch[1] || '/';
    const parsedNum = Number.parseInt(pageMatch[2], 10);
    if (Number.isFinite(parsedNum) && parsedNum >= 2) {
      extractedPage = parsedNum;
    }
  }

  const withPage = (base: ParsedSeoRoute): ParsedSeoRoute => {
    const paginatedRoutes = new Set<AppRoute>([
      'home',
      'festival',
      'feelings',
      'valentine-week',
      'religious',
      'family-rituals',
      'zq-mansoon-special'
    ]);
    if (
      extractedPage &&
      extractedPage >= 2 &&
      paginatedRoutes.has(base.route) &&
      !(base.route === 'valentine-week' && !base.valentineFocusCat)
    ) {
      return { ...base, page: extractedPage };
    }
    return base;
  };

  const cleanSlug = decodedPath.replace(/^\/+/, '');
  const cleanHash = hash.toLowerCase();

  // Direct Hindi slug support
  if (HINDI_ROUTE_ALIASES[cleanSlug]) {
    return withPage(HINDI_ROUTE_ALIASES[cleanSlug]);
  }

  // Legacy hash / file fallbacks
  if (cleanSlug === '' || cleanSlug === 'index.html') {
    if (cleanHash.includes('zq-moments')) return { route: 'zq-moments' };
    if (cleanHash.includes('admin-zq')) return { route: 'admin-zq' };
    if (cleanHash.includes('apni-shayari')) return { route: 'public-wall' };
    if (cleanHash.includes('favorite') || cleanHash.includes('pasandida')) return { route: 'favorites' };
    if (cleanHash.includes('zq-feelings') || cleanHash.includes('zq-official')) return { route: 'zq-official' };
    if (cleanHash.includes('zq-mansoon-special')) return { route: 'zq-mansoon-special', specialMonth: 'january' };
    if (cleanHash.includes('festival')) return { route: 'festival', festivalCat: 'diwali' };
    if (cleanHash.includes('feelings')) return { route: 'feelings', feelingsCat: 'love' };
    return withPage({ route: 'home' });
  }

  // Direct Shayari Slug Detail Route (/shayari/:slug)
  if (cleanSlug.startsWith('shayari/')) {
    const slug = cleanSlug.replace(/^shayari\//, '').replace(/\/+$/, '').trim();
    return { route: 'shayari-detail', shayariSlug: slug };
  }

  // Legal & Info pages
  if (cleanSlug === 'about-us' || cleanSlug === 'about') {
    return { route: 'about' };
  }
  if (cleanSlug === 'privacy-policy' || cleanSlug === 'privacy') {
    return { route: 'privacy' };
  }
  if (
    cleanSlug === 'terms-and-conditions' ||
    cleanSlug === 'terms-of-service' ||
    cleanSlug === 'terms'
  ) {
    return { route: 'terms' };
  }
  if (cleanSlug === 'disclaimer' || cleanSlug === 'copyright' || cleanSlug === 'dmca') {
    return { route: 'disclaimer' };
  }
  if (cleanSlug === 'contact-us' || cleanSlug === 'contact') {
    return { route: 'contact' };
  }

  // ZQ-MOMENTS 💗 global social feed route (/zq-moments)
  if (cleanSlug === 'zq-moments' || cleanSlug === 'moments') {
    return { route: 'zq-moments' };
  }

  // Admin ZQ route (/admin-zq)
  if (cleanSlug === 'admin-zq') {
    return { route: 'admin-zq' };
  }

  // Write Shayari & Favorites & Official routes
  if (
    cleanSlug === 'apni-shayari-likhe' ||
    cleanSlug === 'apni-shayari' ||
    cleanSlug === 'write-shayari'
  ) {
    return { route: 'public-wall' };
  }

  if (
    cleanSlug === 'pasandida-shayari' ||
    cleanSlug === 'pasandida' ||
    cleanSlug === 'favorites'
  ) {
    return { route: 'favorites' };
  }

  if (cleanSlug === 'zq-feelings-shayari' || cleanSlug === 'zq-official') {
    return { route: 'zq-official' };
  }

  // Valentine Week Hub (/valentine-week, /valentine-week/<lang>) + 15 Dedicated Pages (/valentine-week/<day>-shayari, /valentine-week/<day>-shayari/<lang>)
  if (
    cleanSlug === 'valentine-week' ||
    cleanSlug === 'valentine-week-special' ||
    cleanSlug === 'valentine-week-shayari' ||
    cleanSlug === 'valentine' ||
    cleanSlug === 'valentine-shayari' ||
    cleanSlug === 'feelings/valentine-week' ||
    cleanSlug === 'festival/valentine-week' ||
    cleanSlug === 'वैलेंटाइन-वीक-शायरी'
  ) {
    return { route: 'valentine-week' };
  }

  if (cleanSlug.startsWith('valentine-week/')) {
    const segments = cleanSlug.split('/').filter(Boolean); // ['valentine-week', seg1, seg2?]
    if (segments.length >= 2) {
      const seg1Stripped = segments[1].replace(/-shayari$/, '');
      const matchedValDay = VALENTINE_CATEGORIES.find((c) => c.id === seg1Stripped);
      if (matchedValDay) {
        const parsedLang = segments[2] ? normalizeValentineLangParam(segments[2]) : null;
        return withPage({
          route: 'valentine-week',
          valentineFocusCat: matchedValDay.id,
          ...(parsedLang ? { valentineLang: parsedLang } : {})
        });
      }
      const hubLang = normalizeValentineLangParam(segments[1]);
      if (hubLang) {
        return {
          route: 'valentine-week',
          valentineLang: hubLang
        };
      }
    }
  }

  for (const vCat of VALENTINE_CATEGORIES) {
    if (cleanSlug === vCat.id || cleanSlug === `${vCat.id}-shayari`) {
      return withPage({ route: 'valentine-week', valentineFocusCat: vCat.id });
    }
    if (cleanSlug === `${vCat.id}-shayari-2` || cleanSlug === `${vCat.id}-shayari-3`) {
      return { route: 'valentine-week', valentineFocusCat: vCat.id, page: 2 };
    }
  }

  // Main section hub slugs (keep 'all' so hub <title> stays 100% unique from subpages!)
  if (cleanSlug === 'festival-shayari' || cleanSlug === 'festival.html' || cleanSlug === 'festival') {
    return withPage({ route: 'festival', festivalCat: 'all' });
  }

  if (cleanSlug === 'feelings-shayari' || cleanSlug === 'feelings.html' || cleanSlug === 'feelings') {
    return withPage({ route: 'feelings', feelingsCat: 'all', staticLang: 'hi' });
  }

  // Feelings Hub in 35 languages: /feelings-shayari/<lang> (+ /page/N)
  if (cleanSlug.startsWith('feelings-shayari/')) {
    const langSeg = cleanSlug.slice('feelings-shayari/'.length).replace(/\/+$/, '');
    const parsedHubLang = parseStatic35LangToken(langSeg);
    if (parsedHubLang) {
      return withPage({ route: 'feelings', feelingsCat: 'all', staticLang: parsedHubLang });
    }
  }

  // Helper to resolve any Feelings / Maafi category token
  const resolveFeelingsCatToken = (rawSub: string): string | null => {
    const subPath = rawSub.replace(/^\/+|\/+$/g, '');
    const strippedSub = subPath.replace(/-shayari$/, '');

    const matchedMaafiSub = MAAFI_SUBCATEGORIES_META.find(
      (m) => m.id === strippedSub || m.id === subPath
    );
    if (matchedMaafiSub) return matchedMaafiSub.id;

    if (subPath === 'birthday-shayari' || strippedSub === 'birthday') {
      return 'birthday-feelings';
    }

    for (const feeling of FEELINGS_CATEGORIES) {
      const cleanFeelSlug = feeling.slug.replace(/^feelings\/+|^\/feelings\/+|\/+$/g, '');
      if (
        subPath === cleanFeelSlug ||
        subPath === `${feeling.id}-shayari` ||
        subPath === feeling.id
      ) {
        return feeling.id;
      }
    }

    const mappedLegacy = FEELINGS_CATEGORY_MERGE_MAP[strippedSub];
    if (mappedLegacy) return mappedLegacy;
    return null;
  };

  // Prefix-style 35-language routes:
  // /en/new-year-shayari, /hi/new-year-shayari, /en/christmas-shayari, /hi/christmas-shayari
  // plus friendly aliases like /en/feelings-shayari, /en/feelings/love-shayari, /en/love-shayari
  if (cleanSlug.includes('/')) {
    const pathSegs = cleanSlug.split('/').filter(Boolean);
    const maybePrefixLang = parseStatic35LangToken(pathSegs[0]);
    if (
      maybePrefixLang &&
      pathSegs[0] !== 'feelings' &&
      pathSegs[0] !== 'religious' &&
      pathSegs[0] !== 'family-rituals' &&
      pathSegs[0] !== 'valentine-week' &&
      pathSegs[0] !== 'maafi'
    ) {
      if (pathSegs.length === 2) {
        const s1 = pathSegs[1];
        if (s1 === 'new-year-shayari' || s1 === 'new-year') {
          return withPage({
            route: 'festival',
            festivalCat: 'new-year',
            staticLang: maybePrefixLang
          });
        }
        if (s1 === 'christmas-shayari' || s1 === 'christmas' || s1 === 'christmas-day-shayari') {
          return withPage({
            route: 'festival',
            festivalCat: 'christmas',
            staticLang: maybePrefixLang
          });
        }
        if (s1 === 'diwali-shayari' || s1 === 'diwali') {
          return withPage({
            route: 'festival',
            festivalCat: 'diwali',
            staticLang: maybePrefixLang
          });
        }
        if (s1 === 'feelings-shayari' || s1 === 'feelings') {
          return withPage({
            route: 'feelings',
            feelingsCat: 'all',
            staticLang: maybePrefixLang
          });
        }
        const directFeelCat = resolveFeelingsCatToken(s1);
        if (directFeelCat) {
          return withPage({
            route: 'feelings',
            feelingsCat: directFeelCat,
            staticLang: maybePrefixLang
          });
        }
      } else if (pathSegs.length === 3 && pathSegs[1] === 'feelings') {
        const prefFeelCat = resolveFeelingsCatToken(pathSegs[2]);
        if (prefFeelCat) {
          return withPage({
            route: 'feelings',
            feelingsCat: prefFeelCat,
            staticLang: maybePrefixLang
          });
        }
      }
    }

    // Also support suffix alias /new-year-shayari/<lang> & /christmas-shayari/<lang>
    if (pathSegs.length === 2) {
      const maybeSuffixLang = parseStatic35LangToken(pathSegs[1]);
      if (maybeSuffixLang) {
        if (pathSegs[0] === 'new-year-shayari' || pathSegs[0] === 'new-year') {
          return withPage({
            route: 'festival',
            festivalCat: 'new-year',
            staticLang: maybeSuffixLang
          });
        }
        if (pathSegs[0] === 'christmas-shayari' || pathSegs[0] === 'christmas') {
          return withPage({
            route: 'festival',
            festivalCat: 'christmas',
            staticLang: maybeSuffixLang
          });
        }
        if (pathSegs[0] === 'diwali-shayari' || pathSegs[0] === 'diwali') {
          return withPage({
            route: 'festival',
            festivalCat: 'diwali',
            staticLang: maybeSuffixLang
          });
        }
      }
    }
  }

  if (
    cleanSlug === '12-months-special-days-shayari' ||
    cleanSlug === 'special-days-shayari' ||
    cleanSlug.startsWith('zq-mansoon-special')
  ) {
    return withPage({ route: 'zq-mansoon-special', specialMonth: 'all' });
  }

  // Match /<month>-special-shayari
  for (const month of MONTHS_META) {
    if (cleanSlug === `${month.id}-special-shayari` || cleanSlug === `${month.id}-shayari`) {
      return withPage({ route: 'zq-mansoon-special', specialMonth: month.id });
    }
  }

  // Match /religious/<id> or /religious
  if (cleanSlug === 'religious' || cleanSlug === 'dharmik-shayari') {
    return withPage({ route: 'religious', religiousCat: 'sanatan-hindu' });
  }

  if (cleanSlug.startsWith('religious/')) {
    const relSub = cleanSlug.replace(/^religious\/+/, '').replace(/\/+$/, '').replace(/-shayari$/, '');
    const foundRel = RELIGIOUS_CATEGORIES.find((c) => c.id === relSub);
    if (foundRel) {
      return withPage({ route: 'religious', religiousCat: foundRel.id });
    }
    return withPage({ route: 'religious', religiousCat: 'sanatan-hindu' });
  }

  for (const rel of RELIGIOUS_CATEGORIES) {
    if (cleanSlug === rel.id || cleanSlug === `${rel.id}-shayari`) {
      return withPage({ route: 'religious', religiousCat: rel.id });
    }
  }

  // Match /family-rituals/<id> or /<ritual>-shayari/
  if (cleanSlug === 'family-rituals' || cleanSlug === 'sanskar-shayari') {
    return withPage({ route: 'family-rituals', familyRitualCat: 'newborn-babies' });
  }

  if (cleanSlug.startsWith('family-rituals/')) {
    const ritSub = cleanSlug
      .replace(/^family-rituals\/+/, '')
      .replace(/\/+$/, '')
      .replace(/-shayari$/, '');
    const foundRit = FAMILY_RITUALS_CATEGORIES.find((c) => c.id === ritSub);
    if (foundRit) {
      return withPage({ route: 'family-rituals', familyRitualCat: foundRit.id });
    }
    return withPage({ route: 'family-rituals', familyRitualCat: 'newborn-babies' });
  }

  for (const ritual of FAMILY_RITUALS_CATEGORIES) {
    if (cleanSlug === ritual.id || cleanSlug === `${ritual.id}-shayari`) {
      return withPage({ route: 'family-rituals', familyRitualCat: ritual.id });
    }
  }

  // Match /maafi/<id> or /maafi/<id>/<lang> or /<maafi-sub>-shayari
  if (cleanSlug.startsWith('maafi/')) {
    const segs = cleanSlug.split('/').filter(Boolean); // ['maafi', id, lang?]
    const maafiSub = (segs[1] || '').replace(/-shayari$/, '');
    const parsedLang = segs[2] ? parseStatic35LangToken(segs[2]) : 'hi';
    const foundMaafi = MAAFI_SUBCATEGORIES_META.find((m) => m.id === maafiSub);
    if (foundMaafi) {
      return withPage({
        route: 'feelings',
        feelingsCat: foundMaafi.id,
        staticLang: parsedLang || 'hi'
      });
    }
    return withPage({ route: 'feelings', feelingsCat: 'sorry', staticLang: parsedLang || 'hi' });
  }

  for (const maafiSub of MAAFI_SUBCATEGORIES_META) {
    if (cleanSlug === maafiSub.id || cleanSlug === `${maafiSub.id}-shayari`) {
      return withPage({ route: 'feelings', feelingsCat: maafiSub.id, staticLang: 'hi' });
    }
  }

  // Match /feelings/<slug>-shayari/ and /feelings/<slug>-shayari/<lang>
  if (cleanSlug.startsWith('feelings/')) {
    const feelSegs = cleanSlug.split('/').filter(Boolean); // ['feelings', seg1, seg2?]
    const subPath = feelSegs[1] || '';
    const strippedSub = subPath.replace(/-shayari$/, '');

    if (!feelSegs[2]) {
      const matchedReligious = RELIGIOUS_CATEGORIES.find((r) => r.id === strippedSub);
      if (matchedReligious) {
        return withPage({ route: 'religious', religiousCat: matchedReligious.id });
      }

      const matchedRitual = FAMILY_RITUALS_CATEGORIES.find((r) => r.id === strippedSub);
      if (matchedRitual) {
        return withPage({ route: 'family-rituals', familyRitualCat: matchedRitual.id });
      }
    }

    const resolvedFeelCat = resolveFeelingsCatToken(subPath);
    if (resolvedFeelCat) {
      const parsedLang = feelSegs[2] ? parseStatic35LangToken(feelSegs[2]) : 'hi';
      return withPage({
        route: 'feelings',
        feelingsCat: resolvedFeelCat,
        staticLang: parsedLang || 'hi'
      });
    }
  }

  // Match /<festival>-shayari
  for (const fest of FESTIVAL_CATEGORIES) {
    if (cleanSlug === `${fest.id}-shayari` || cleanSlug === fest.id) {
      return withPage({
        route: 'festival',
        festivalCat: fest.id,
        ...(isHoliday35Category(fest.id) ? { staticLang: 'hi' as const } : {})
      });
    }
  }

  // Match direct or legacy feelings slugs (e.g. /love-shayari or /love-shayari/tamil)
  for (const feeling of FEELINGS_CATEGORIES) {
    if (cleanSlug === `${feeling.id}-shayari` || cleanSlug === feeling.id) {
      return withPage({ route: 'feelings', feelingsCat: feeling.id, staticLang: 'hi' });
    }
    if (cleanSlug.startsWith(`${feeling.id}-shayari/`)) {
      const tailLang = parseStatic35LangToken(cleanSlug.slice(`${feeling.id}-shayari/`.length));
      if (tailLang) {
        return withPage({ route: 'feelings', feelingsCat: feeling.id, staticLang: tailLang });
      }
    }
  }

  const strippedLegacy = cleanSlug.replace(/-shayari$/, '');
  if (FEELINGS_CATEGORY_MERGE_MAP[strippedLegacy]) {
    return withPage({
      route: 'feelings',
      feelingsCat: FEELINGS_CATEGORY_MERGE_MAP[strippedLegacy],
      staticLang: 'hi'
    });
  }

  return withPage({ route: 'home' });
}

/**
 * Generates unique SEO Title (<=60 chars), Meta Description (<=155 chars), Canonical Path, BreadcrumbList & FAQs
 * across all 652 base URLs + 350 clean paginated /page/N URLs (1,002 total indexable URLs).
 */
export function getSeoMetadataForState(params: {
  route: AppRoute;
  festivalCat: string;
  feelingsCat: string;
  valentineCat?: ValentineCategoryId;
  valentineLang?: ValentineLangCode;
  staticLang?: ValentineLangCode;
  religiousCat?: ReligiousCategory;
  familyRitualCat?: FamilyRitualCategory;
  specialMonth: MonthId | 'all';
  page?: number;
  searchQuery?: string;
  shayariSlug?: string;
}): PageSeoMeta {
  const {
    route,
    festivalCat,
    feelingsCat,
    valentineCat,
    valentineLang,
    staticLang,
    specialMonth,
    searchQuery,
    shayariSlug
  } = params;

  const activePage = params.page && params.page >= 2 ? Math.floor(params.page) : 1;
  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.trim().slice(0, 22);
    const searchTopic = `${q} Shayari`;
    return {
      title: formatTopicSeoTitle(searchTopic),
      description: formatTopicSeoDescription(searchTopic),
      canonicalPath: '/',
      h1: `${q} Hindi Shayari Search Results`,
      section: 'Hindi Shayari Search',
      keywords: [q, 'Best New Shayari 2026', 'Shayari Search', 'ZQ Feelings', 'Dil Ki Awaaz'],
      breadcrumbs: [{ name: 'Home', path: '/' }]
    };
  }

  // Shayari Detail Route (/shayari/:slug)
  if (route === 'shayari-detail') {
    const slug = shayariSlug || '';
    const cleanWords = slug
      .replace(/-[a-z0-9]+-[0-9]+$/i, '')
      .replace(/-/g, ' ')
      .trim();
    const displayTitle = cleanWords
      ? cleanWords.charAt(0).toUpperCase() + cleanWords.slice(1)
      : 'Shayari';
    return {
      title: `${displayTitle} Shayari | ZQ FEELINGS - Dil Ki Awaaz`,
      description: `Padhiye aur share kijiye best "${displayTitle}" Shayari WhatsApp, Instagram aur Facebook ke liye. 100% Free stylish font copy option ZQ FEELINGS par.`,
      canonicalPath: `/shayari/${slug}`,
      h1: `${displayTitle} Shayari — ZQ FEELINGS`,
      section: 'Shayari Detail',
      keywords: [displayTitle, 'Hindi Shayari', 'Love Shayari', 'ZQ Feelings', 'Dil Ki Awaaz'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: `${displayTitle} Shayari`, path: `/shayari/${slug}` }
      ]
    };
  }

  // Legal & Info Routes
  if (route === 'about') {
    return {
      title: formatTopicSeoTitle('About Us'),
      description: formatTopicSeoDescription('About Us'),
      canonicalPath: '/about-us',
      h1: 'About Us — ZQ FEELINGS (दिल की आवाज़)',
      section: 'About ZQ FEELINGS',
      keywords: ['About ZQ Feelings', 'Dil Ki Awaaz', 'Best New Shayari 2026'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' }
      ]
    };
  }

  if (route === 'privacy') {
    return {
      title: formatTopicSeoTitle('Privacy Policy'),
      description: formatTopicSeoDescription('Privacy Policy'),
      canonicalPath: '/privacy-policy',
      h1: 'Privacy Policy (गोपनीयता नीति)',
      section: 'Privacy Policy',
      keywords: ['Privacy Policy', 'ZQ Feelings Privacy', 'Dil Ki Awaaz'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy-policy' }
      ]
    };
  }

  if (route === 'terms') {
    return {
      title: formatTopicSeoTitle('Terms & Conditions'),
      description: formatTopicSeoDescription('Terms & Conditions'),
      canonicalPath: '/terms-and-conditions',
      h1: 'Terms & Conditions (नियम व शर्तें)',
      section: 'Terms & Conditions',
      keywords: ['Terms and Conditions', 'ZQ Feelings Terms', 'Dil Ki Awaaz'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' }
      ]
    };
  }

  if (route === 'disclaimer') {
    return {
      title: formatTopicSeoTitle('Disclaimer'),
      description: formatTopicSeoDescription('Disclaimer'),
      canonicalPath: '/disclaimer',
      h1: 'Disclaimer & Copyright Policy (अस्वीकरण)',
      section: 'Disclaimer',
      keywords: ['Disclaimer', 'Copyright Policy', 'ZQ Feelings'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Disclaimer', path: '/disclaimer' }
      ]
    };
  }

  if (route === 'contact') {
    return {
      title: formatTopicSeoTitle('Contact Us'),
      description: formatTopicSeoDescription('Contact Us'),
      canonicalPath: '/contact-us',
      h1: 'Contact Us (संपर्क करें)',
      section: 'Contact Us',
      keywords: ['Contact ZQ Feelings', 'Dil Ki Awaaz Support'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact-us' }
      ]
    };
  }

  if (route === 'festival') {
    // Special 35-Language Static Pre-Translated Holiday Categories: New Year (1 Jan) & Christmas (25 Dec)
    if (isHoliday35Category(festivalCat)) {
      const holMeta = HOLIDAY_35_META[festivalCat];
      const langMeta =
        VALENTINE_LANGUAGE_MAP.get(staticLang || 'hi') || VALENTINE_LANGUAGES[0];
      const hasCustomLang = langMeta.code !== 'hi';
      const canonicalPath = buildHoliday35CleanPath(festivalCat, langMeta.code, activePage);
      const hindiBasePath = buildHoliday35CleanPath(festivalCat, 'hi', 1);
      const langBasePath = buildHoliday35CleanPath(festivalCat, langMeta.code, 1);
      const pageSuffix = activePage >= 2 ? `/page/${activePage}` : undefined;

      if (festivalCat === 'diwali') {
        const dSeo = DIWALI_35_SEO[langMeta.code] || DIWALI_35_SEO['hi'];
        const title =
          activePage >= 2
            ? `${dSeo.title.replace(/\s*\|\s*ZQ Feelings.*$/, '')} - Page ${activePage} | ZQ Feelings`
            : dSeo.title;
        const description =
          activePage >= 2 ? `${dSeo.description} (Page ${activePage})` : dSeo.description;
        const h1 = activePage >= 2 ? `${dSeo.h1} - Page ${activePage}` : dSeo.h1;
        const faqs = (DIWALI_35_FAQS[langMeta.code] || DIWALI_35_FAQS['hi']).map((f) => ({
          question: f.question,
          answer: f.answer
        }));

        return {
          title,
          description,
          canonicalPath,
          hreflangPrefixSlug: 'diwali-shayari',
          valentinePageSuffix: pageSuffix,
          langCode: langMeta.hreflang,
          h1,
          section: '125 Diwali Week Wishes, Shayari & Messages',
          keywords: [
            '125 Best Diwali Wishes 2026',
            'Happy Diwali in Hindi',
            'Dhanteras Wishes',
            'Choti Diwali',
            'Lakshmi Puja Shayari',
            'Govardhan Puja',
            'Bhai Dooj Wishes',
            'ZQ Feelings'
          ],
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Festival Shayari', path: '/festival-shayari' },
            { name: 'Diwali Wishes 2026', path: hindiBasePath },
            ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
            ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
          ],
          faqs
        };
      }

      const holBaseTopic = hasCustomLang
        ? `${holMeta.name} Shayari in ${langMeta.englishName}`
        : `${holMeta.name} Shayari`;
      const holTopic = activePage >= 2 ? `${holBaseTopic} - Page ${activePage}` : holBaseTopic;
      const title = formatTopicSeoTitle(holTopic);
      const description = formatTopicSeoDescription(holTopic);

      return {
        title,
        description,
        canonicalPath,
        hreflangPrefixSlug: `${festivalCat}-shayari`,
        valentinePageSuffix: pageSuffix,
        langCode: langMeta.hreflang,
        h1: `${holMeta.name} Shayari (${holMeta.dateLabel})`,
        section: `${holMeta.name} Shayari`,
        keywords: [
          `${holMeta.name} Shayari`,
          `${holMeta.name} Shayari in ${langMeta.englishName}`,
          `${holMeta.hindiName} शायरी`,
          'Best New Shayari 2026',
          'ZQ Feelings'
        ],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Festival Shayari', path: '/festival-shayari' },
          { name: `${holMeta.name} Shayari`, path: hindiBasePath },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ],
        faqs: [
          {
            question: `क्या ${holMeta.name} Shayari (${holMeta.dateLabel}) सभी 35 भाषाओं में उपलब्ध है?`,
            answer: `जी हाँ, ZQ Feelings पर ${holMeta.name} (${holMeta.dateLabel}) की सभी 25 मौलिक शायरियाँ 15 भारतीय और 20 वैश्विक भाषाओं (कुल 35 प्री-ट्रांसलेटेड भाषाओं) में क्लीन SEO URL, 20 स्टाइलिश फ़ॉन्ट्स और WhatsApp शेयर के साथ उपलब्ध हैं।`
          }
        ]
      };
    }

    const activeFest =
      festivalCat && festivalCat !== 'all'
        ? FESTIVAL_CATEGORIES.find((f) => f.id === festivalCat)
        : undefined;
    if (activeFest) {
      const basePath = `/${activeFest.id}-shayari`;
      const canonicalPath = buildPaginatedCleanPath(basePath, activePage);
      const festTopic =
        activePage >= 2
          ? `${activeFest.name} Shayari - Page ${activePage}`
          : `${activeFest.name} Shayari`;
      return {
        title: formatTopicSeoTitle(festTopic),
        description: formatTopicSeoDescription(festTopic),
        canonicalPath,
        h1: `${activeFest.name} Shayari in Hindi (${activeFest.hindiName} विशेस शायरी)`,
        section: `${activeFest.name} Festival Wishes Shayari`,
        keywords: [
          `${activeFest.name} Shayari`,
          `${activeFest.hindiName} शायरी`,
          'Best New Shayari 2026',
          'ZQ Feelings',
          'Dil Ki Awaaz'
        ],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Festival Shayari', path: '/festival-shayari' },
          { name: `${activeFest.name} Shayari`, path: basePath },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    }

    const baseHubPath = '/festival-shayari';
    const canonicalHubPath = buildPaginatedCleanPath(baseHubPath, activePage);
    const festHubTopic =
      activePage >= 2 ? `Festival Shayari - Page ${activePage}` : 'Festival Shayari';
    return {
      title: formatTopicSeoTitle(festHubTopic),
      description: formatTopicSeoDescription(festHubTopic),
      canonicalPath: canonicalHubPath,
      h1: 'Festival Shayari - Diwali, Holi, Eid Wishes',
      section: 'Festival Wishes Shayari',
      keywords: ['Festival Shayari', 'त्यौहार शायरी', 'Diwali Shayari', 'Holi Shayari', 'ZQ Feelings'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Festival Shayari', path: baseHubPath },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
      ]
    };
  }

  if (route === 'feelings') {
    const langMeta =
      VALENTINE_LANGUAGE_MAP.get(staticLang || 'hi') || VALENTINE_LANGUAGES[0];
    const hasCustomLang = langMeta.code !== 'hi';
    const pageSuffix = activePage >= 2 ? `/page/${activePage}` : undefined;

    const activeMaafiSub = MAAFI_SUBCATEGORIES_META.find((m) => m.id === feelingsCat);
    if (activeMaafiSub) {
      const hindiBase = activeMaafiSub.slug;
      const langBasePath = buildFeelingsCleanPath(activeMaafiSub.id, langMeta.code, 1, false);
      const canonicalPath = buildFeelingsCleanPath(
        activeMaafiSub.id,
        langMeta.code,
        activePage,
        false
      );

      const maafiBaseTopic = hasCustomLang
        ? `${activeMaafiSub.englishTitle} Shayari in ${langMeta.englishName}`
        : `${activeMaafiSub.englishTitle} Shayari`;
      const maafiTopic =
        activePage >= 2 ? `${maafiBaseTopic} - Page ${activePage}` : maafiBaseTopic;
      const title = formatTopicSeoTitle(maafiTopic);
      const description = formatTopicSeoDescription(maafiTopic);

      return {
        title,
        description,
        canonicalPath,
        valentineBasePath: hindiBase,
        valentinePageSuffix: pageSuffix,
        langCode: langMeta.hreflang,
        h1: `${activeMaafiSub.name} Shayari`,
        section: activeMaafiSub.englishTitle,
        keywords: [
          `${activeMaafiSub.englishTitle} Shayari`,
          `${activeMaafiSub.englishTitle} Shayari in ${langMeta.englishName}`,
          activeMaafiSub.hindiTitle,
          'Sorry Shayari',
          'Best New Shayari 2026',
          'ZQ Feelings'
        ],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Feelings Shayari', path: '/feelings-shayari' },
          { name: `${activeMaafiSub.englishTitle} Shayari`, path: hindiBase },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    }

    if (feelingsCat && feelingsCat !== 'all') {
      const normalizedFeelId = normalizeFeelingsCategoryId(feelingsCat);
      const activeFeel = FEELINGS_CATEGORIES.find((f) => f.id === normalizedFeelId);
      if (activeFeel) {
        const hindiBase = getFeelingsHindiBasePath(activeFeel.id);
        const langBasePath = buildFeelingsCleanPath(activeFeel.id, langMeta.code, 1, false);
        const canonicalPath = buildFeelingsCleanPath(
          activeFeel.id,
          langMeta.code,
          activePage,
          false
        );
        const catDetail = getCategorySeoDetail(activeFeel.id);
        const feelDisplayName =
          activeFeel.id === 'birthday-feelings' ? 'Birthday Feelings Shayari' : activeFeel.name;

        let title = '';
        let description = '';
        let h1 = '';
        let faqs = catDetail?.faqs;

        if (hasCustomLang) {
          const feelBaseTopic = `${feelDisplayName} in ${langMeta.englishName}`;
          const feelTopic = activePage >= 2 ? `${feelBaseTopic} - Page ${activePage}` : feelBaseTopic;
          title = formatTopicSeoTitle(feelTopic);
          description = formatTopicSeoDescription(feelTopic);
          h1 = `${feelDisplayName} in ${langMeta.englishName}`;
        } else if (catDetail) {
          title = activePage >= 2 ? `${catDetail.seoTitle.replace(/\s*\|\s*ZQ Feelings.*$/, '')} - Page ${activePage} | ZQ Feelings` : catDetail.seoTitle;
          description = activePage >= 2 ? `${catDetail.metaDescription} (Page ${activePage})` : catDetail.metaDescription;
          h1 = activePage >= 2 ? `${catDetail.h1} - Page ${activePage}` : catDetail.h1;
        } else {
          const feelTopic = activePage >= 2 ? `${feelDisplayName} - Page ${activePage}` : feelDisplayName;
          title = formatTopicSeoTitle(feelTopic);
          description = formatTopicSeoDescription(feelTopic);
          h1 = `${activeFeel.name} (${activeFeel.hindiName})`;
        }

        if (!faqs || faqs.length === 0) {
          faqs = [
            {
              question: `क्या ${activeFeel.name} (${activeFeel.hindiName}) सभी 35 भाषाओं में उपलब्ध है?`,
              answer: `जी हाँ, ZQ Feelings पर ${activeFeel.name} की सभी मौलिक शायरियाँ 15 भारतीय और 20 वैश्विक भाषाओं (कुल 35 प्री-ट्रांसलेटेड भाषाओं) में क्लीन URL, 20 स्टाइलिश फ़ॉन्ट्स और WhatsApp शेयर के साथ उपलब्ध हैं।`
            }
          ];
        }

        return {
          title,
          description,
          canonicalPath,
          valentineBasePath: hindiBase,
          valentinePageSuffix: pageSuffix,
          langCode: langMeta.hreflang,
          h1,
          section: activeFeel.name,
          keywords: [
            activeFeel.name,
            `Best ${activeFeel.name} in Hindi`,
            `${activeFeel.name} 2026`,
            activeFeel.hindiName,
            'Best New Shayari 2026',
            'ZQ Feelings',
            'Dil Ki Awaaz'
          ],
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Feelings Shayari', path: '/feelings-shayari' },
            { name: activeFeel.name, path: hindiBase },
            ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
            ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
          ],
          faqs
        };
      }
    }

    const baseHubPath = '/feelings-shayari';
    const langHubBasePath = buildFeelingsCleanPath('all', langMeta.code, 1, false);
    const canonicalHubPath = buildFeelingsCleanPath('all', langMeta.code, activePage, false);
    const feelHubBaseTopic = hasCustomLang
      ? `Feelings Shayari in ${langMeta.englishName}`
      : 'Feelings Shayari';
    const feelHubTopic =
      activePage >= 2 ? `${feelHubBaseTopic} - Page ${activePage}` : feelHubBaseTopic;
    return {
      title: formatTopicSeoTitle(feelHubTopic),
      description: formatTopicSeoDescription(feelHubTopic),
      canonicalPath: canonicalHubPath,
      valentineBasePath: baseHubPath,
      valentinePageSuffix: pageSuffix,
      langCode: langMeta.hreflang,
      h1: 'Feeling Shayari - Love, Sad, Attitude, Dosti',
      section: 'Feelings Shayari',
      keywords: [
        'Feelings Shayari',
        `Feelings Shayari in ${langMeta.englishName}`,
        'Love Shayari',
        'Sad Shayari',
        'Best New Shayari 2026',
        'ZQ Feelings'
      ],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Feelings Shayari', path: baseHubPath },
        ...(hasCustomLang ? [{ name: langMeta.englishName, path: langHubBasePath }] : []),
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
      ]
    };
  }

  if (route === 'valentine-week') {
    const activeValCat = valentineCat
      ? VALENTINE_CATEGORIES.find((c) => c.id === valentineCat)
      : undefined;
    const langMeta = valentineLang ? VALENTINE_LANGUAGE_MAP.get(valentineLang) : undefined;
    const hasCustomLang = !!(langMeta && langMeta.code !== 'hi');

    if (activeValCat) {
      const basePath = `/valentine-week/${activeValCat.id}-shayari`;
      const langBasePath = hasCustomLang ? `${basePath}/${langMeta!.slug}` : basePath;
      const canonicalPath = buildPaginatedCleanPath(langBasePath, activePage);
      const valentinePageSuffix = activePage >= 2 ? `/page/${activePage}` : undefined;

      const valDayBaseTopic = hasCustomLang
        ? `${activeValCat.shortName} Shayari in ${langMeta!.englishName}`
        : `${activeValCat.shortName} Shayari`;
      const valDayTopic =
        activePage >= 2 ? `${valDayBaseTopic} - Page ${activePage}` : valDayBaseTopic;
      const titleText = formatTopicSeoTitle(valDayTopic);
      const descriptionText = formatTopicSeoDescription(valDayTopic);

      return {
        title: titleText,
        description: descriptionText,
        canonicalPath,
        valentineBasePath: basePath,
        valentinePageSuffix,
        langCode: langMeta?.hreflang || 'hi',
        h1: `${activeValCat.shortName} Shayari`,
        section: `${activeValCat.shortName} Shayari`,
        keywords: [
          `${activeValCat.shortName} Shayari`,
          `Best ${activeValCat.shortName} Shayari 2026`,
          activeValCat.hindiName,
          `${activeValCat.dateLabel} Shayari`,
          'Valentine Week Special',
          'ZQ Feelings'
        ],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Valentine Week Special', path: '/valentine-week' },
          { name: `${activeValCat.shortName} Shayari`, path: basePath },
          ...(hasCustomLang ? [{ name: langMeta!.englishName, path: langBasePath }] : []),
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ],
        faqs: [
          {
            question: `${activeValCat.shortName} कब मनाया जाता है?`,
            answer: `${activeValCat.shortName} हर साल ${activeValCat.dateLabel} को मनाया जाता है। ZQ Feelings पर आपको ${activeValCat.shortName} की 40 मौलिक शायरियाँ 35 भाषाओं और 20 स्टाइलिश फ़ॉन्ट्स मिलती हैं।`
          },
          {
            question: `क्या मैं ${activeValCat.shortName} Shayari को 35 भाषाओं में पढ़ और शेयर कर सकता हूँ?`,
            answer: `जी हाँ, सभी 40 ${activeValCat.shortName} शायरियाँ 15 भारतीय और 20 वैश्विक भाषाओं (कुल 35 प्री-ट्रांसलेटेड भाषाओं) में क्लीन URL, कॉपी, फोटो कार्ड डाउनलोड, WhatsApp और Facebook शेयर के साथ उपलब्ध हैं।`
          }
        ]
      };
    }

    const baseHubPath = '/valentine-week';
    const canonicalHubPath = hasCustomLang ? `${baseHubPath}/${langMeta!.slug}` : baseHubPath;
    const valHubTopic = hasCustomLang
      ? `Valentine Week Shayari in ${langMeta!.englishName}`
      : 'Valentine Week Shayari';
    return {
      title: formatTopicSeoTitle(valHubTopic),
      description: formatTopicSeoDescription(valHubTopic),
      canonicalPath: canonicalHubPath,
      valentineBasePath: baseHubPath,
      langCode: langMeta?.hreflang || 'hi',
      h1: 'Valentine Week Special - 7 Feb to 21 Feb - 15 Days - 600 Shayari',
      section: 'Valentine Week Special Shayari',
      keywords: [
        'Valentine Week Special',
        'Rose Day Shayari',
        'Propose Day Shayari',
        'Best New Shayari 2026',
        'ZQ Feelings'
      ],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Valentine Week Special', path: baseHubPath },
        ...(hasCustomLang ? [{ name: langMeta!.englishName, path: canonicalHubPath }] : [])
      ],
      faqs: [
        {
          question: 'Valentine Week में 7 Feb से 21 Feb तक कौन-कौन से 15 दिन आते हैं?',
          answer:
            '7 Feb Rose Day, 8 Feb Propose Day, 9 Feb Chocolate Day, 10 Feb Teddy Day, 11 Feb Promise Day, 12 Feb Hug Day, 13 Feb Kiss Day, 14 Feb Valentine Day और 15 से 21 Feb तक Slap, Kick, Perfume, Flirting, Confession, Missing व Breakup Day।'
        },
        {
          question: 'ZQ Feelings पर Valentine Week की कुल कितनी मौलिक शायरियाँ हैं?',
          answer:
            'यहाँ 15 दिनों के लिए 40-40 यानी कुल 600 सौ-प्रतिशत ओरिजिनल शायरियाँ 35 भाषाओं, 20 स्टाइलिश फ़ॉन्ट्स, फोटो कार्ड डाउनलोड और WhatsApp/Facebook शेयर के साथ उपलब्ध हैं।'
        }
      ]
    };
  }

  if (route === 'religious') {
    const activeRel =
      RELIGIOUS_CATEGORIES.find((r) => r.id === params.religiousCat) || RELIGIOUS_CATEGORIES[0];
    const canonicalPath = buildPaginatedCleanPath(activeRel.path, activePage);
    const relTopic =
      activePage >= 2
        ? `${activeRel.englishTitle} Shayari - Page ${activePage}`
        : `${activeRel.englishTitle} Shayari`;
    return {
      title: formatTopicSeoTitle(relTopic),
      description: formatTopicSeoDescription(relTopic),
      canonicalPath,
      h1: `${activeRel.name} Shayari`,
      section: activeRel.englishTitle,
      keywords: [
        `${activeRel.englishTitle} Shayari`,
        activeRel.hindiTitle,
        'Dharmik Shayari',
        'Best New Shayari 2026',
        'ZQ Feelings'
      ],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: `${activeRel.englishTitle} Shayari`, path: activeRel.path },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
      ]
    };
  }

  if (route === 'family-rituals') {
    const activeRitual =
      FAMILY_RITUALS_CATEGORIES.find((r) => r.id === params.familyRitualCat) ||
      FAMILY_RITUALS_CATEGORIES[0];
    const canonicalPath = buildPaginatedCleanPath(activeRitual.path, activePage);
    const ritualTopic =
      activePage >= 2
        ? `${activeRitual.englishTitle} Shayari - Page ${activePage}`
        : `${activeRitual.englishTitle} Shayari`;
    return {
      title: formatTopicSeoTitle(ritualTopic),
      description: formatTopicSeoDescription(ritualTopic),
      canonicalPath,
      h1: `${activeRitual.name} Shayari`,
      section: activeRitual.englishTitle,
      keywords: [
        `${activeRitual.englishTitle} Shayari`,
        activeRitual.hindiTitle,
        'Sanskar Shayari',
        'Best New Shayari 2026',
        'ZQ Feelings'
      ],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: `${activeRitual.englishTitle} Shayari`, path: activeRitual.path },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
      ]
    };
  }

  if (route === 'zq-mansoon-special') {
    const activeMonth =
      specialMonth !== 'all' ? MONTHS_META.find((m) => m.id === specialMonth) : undefined;
    if (activeMonth) {
      const basePath = `/${activeMonth.id}-special-shayari`;
      const canonicalPath = buildPaginatedCleanPath(basePath, activePage);
      const monthTopic =
        activePage >= 2
          ? `${activeMonth.nameEnglish} Special Days Shayari - Page ${activePage}`
          : `${activeMonth.nameEnglish} Special Days Shayari`;
      return {
        title: formatTopicSeoTitle(monthTopic),
        description: formatTopicSeoDescription(monthTopic),
        canonicalPath,
        h1: `${activeMonth.nameEnglish} Special Days Shayari in Hindi (${activeMonth.nameHindi} के खास दिन)`,
        section: '12 Months Special Days Shayari',
        keywords: [
          `${activeMonth.nameEnglish} Shayari`,
          `${activeMonth.nameHindi} शायरी`,
          'Special Days Shayari',
          'Best New Shayari 2026',
          'ZQ Feelings'
        ],
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: '12 Months Special', path: '/12-months-special-days-shayari' },
          { name: `${activeMonth.nameEnglish} Shayari`, path: basePath },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    }

    const baseHubPath = '/12-months-special-days-shayari';
    const canonicalHubPath = buildPaginatedCleanPath(baseHubPath, activePage);
    const monthsHubTopic =
      activePage >= 2
        ? `12 Months Special Days Shayari - Page ${activePage}`
        : '12 Months Special Days Shayari';
    return {
      title: formatTopicSeoTitle(monthsHubTopic),
      description: formatTopicSeoDescription(monthsHubTopic),
      canonicalPath: canonicalHubPath,
      h1: '12 Months Special Days - Pure Saal Ke Special Din',
      section: '12 Months Special Days Shayari',
      keywords: ['Special Days Shayari', '12 Months Shayari', 'Best New Shayari 2026', 'ZQ Feelings'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: '12 Months Special Days', path: baseHubPath },
        ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
      ]
    };
  }

  if (route === 'zq-moments') {
    const momentsTopic = 'ZQ Moments Shayari Photo Status';
    return {
      title: formatTopicSeoTitle(momentsTopic),
      description: formatTopicSeoDescription(momentsTopic),
      canonicalPath: '/zq-moments',
      h1: 'ZQ Moments - Shayari Photo Status',
      section: 'ZQ-MOMENTS Social Feed',
      keywords: ['ZQ Moments', 'Shayari Photo Status', 'Best New Shayari 2026', 'ZQ Feelings', 'Dil Ki Awaaz'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'ZQ Moments', path: '/zq-moments' }
      ],
      faqs: [
        {
          question: 'ZQ Moments पर किस प्रकार की फोटो और स्टेटस पोस्ट किए जा सकते हैं?',
          answer:
            'ZQ Moments पर केवल 100% ओरिजिनल फोटो और मोमेंट्स पोस्ट होते हैं। लोगो, वॉटरमार्क, दूसरी वेबसाइट के टेक्स्ट, धुंधली (Blurry) या अश्लील इमेज को Smart Auto-Filter तुरंत रिजेक्ट कर देता है।'
        },
        {
          question: 'यदि कोई कॉपी कंटेंट पोस्ट करे तो उसे कैसे हटाया जाता है?',
          answer:
            'हर पोस्ट पर Report बटन उपलब्ध है। 3 रिपोर्ट मिलते ही पोस्ट अपने-आप तुरंत डिलीट हो जाती है, और DMCA शिकायत के लिए support@zqfeelings.com पर संपर्क किया जा सकता है।'
        }
      ]
    };
  }

  if (route === 'public-wall') {
    const writeTopic = 'Apni Shayari Likhe';
    return {
      title: formatTopicSeoTitle(writeTopic),
      description: formatTopicSeoDescription(writeTopic),
      canonicalPath: '/apni-shayari-likhe',
      h1: 'Apni Shayari Likhe - Apne Dil Ki Baat Likhe',
      section: 'User Hindi Poetry',
      keywords: ['Apni Shayari Likhe', 'Write Hindi Shayari', 'Best New Shayari 2026', 'ZQ Feelings'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Apni Shayari Likhe', path: '/apni-shayari-likhe' }
      ],
      faqs: [
        {
          question: 'Apni Shayari Likhen में शायरी पोस्ट करने के क्या नियम हैं?',
          answer:
            'शायरी कम से कम 10 शब्दों की और 100% आपकी अपनी मौलिक होनी चाहिए। 80% समानता (Duplicate), कॉपी-पेस्ट, स्पैम, लिंक या गाली वाली पोस्ट को Smart Auto-Filter तुरंत रोक देता है।'
        },
        {
          question: 'कॉपी या गलत शायरी की रिपोर्ट कैसे करें?',
          answer:
            'हर यूज़र पोस्ट के नीचे Report बटन और DMCA संपर्क (support@zqfeelings.com) दिया गया है। 3 रिपोर्ट आते ही पोस्ट तुरंत ऑटो-डिलीट हो जाती है।'
        }
      ]
    };
  }

  if (route === 'favorites') {
    const favTopic = 'Pasandida Saved Shayari';
    return {
      title: formatTopicSeoTitle(favTopic),
      description: formatTopicSeoDescription(favTopic),
      canonicalPath: '/pasandida-shayari',
      h1: 'आपकी पसंदीदा शायरियाँ (Pasandida Hindi Shayari)',
      section: 'Saved Hindi Poetry',
      keywords: ['Pasandida Shayari', 'Saved Shayari', 'Best New Shayari 2026', 'ZQ Feelings'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Pasandida Shayari', path: '/pasandida-shayari' }
      ]
    };
  }

  if (route === 'zq-official') {
    const officialTopic = 'ZQ Official Shayari';
    return {
      title: formatTopicSeoTitle(officialTopic),
      description: formatTopicSeoDescription(officialTopic),
      canonicalPath: '/zq-feelings-shayari',
      h1: 'ZQ FEELINGS 👑 Official Verified Hindi Shayari',
      section: 'Official Verified Hindi Shayari',
      keywords: ['ZQ Feelings Official', 'Best New Shayari 2026', 'Dil Ki Awaaz', 'Hindi Status'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'ZQ Official Shayari', path: '/zq-feelings-shayari' }
      ]
    };
  }

  if (route === 'admin-zq') {
    const adminTopic = 'ZQ Admin Moderation';
    return {
      title: formatTopicSeoTitle(adminTopic),
      description: formatTopicSeoDescription(adminTopic),
      canonicalPath: '/admin-zq',
      h1: 'ZQ Admin Panel (/admin-zq)',
      section: 'Admin Moderation',
      keywords: ['ZQ Feelings Admin'],
      breadcrumbs: [
        { name: 'Home', path: '/' },
        { name: 'Admin', path: '/admin-zq' }
      ]
    };
  }

  // Default: Home ('/' and '/page/N')
  const homeCanonical = buildPaginatedCleanPath('/', activePage);
  const homePageTopic = activePage >= 2 ? `Page ${activePage}` : '';
  return {
    title: activePage >= 2 ? formatTopicSeoTitle(homePageTopic) : HOME_SEO_TITLE,
    description:
      activePage >= 2 ? formatTopicSeoDescription(homePageTopic) : HOME_SEO_DESCRIPTION,
    canonicalPath: homeCanonical,
    h1: 'All in One Shayari Collection - Love, Sad, Festival, Diwali, Holi, Sanatan Hindu, Islamic Muslim & Hindi Urdu English Special Shayari | ZQ-FEELINGS - Dil Ki Awaaz',
    section: 'Hindi Shayari & Poetry',
    keywords: [
      'Best New Shayari 2026',
      'Love Shayari',
      'Sad Shayari',
      'Attitude Shayari',
      'Miss You Shayari',
      'Diwali Shayari',
      'Valentine Shayari',
      'Hindi Shayari',
      'English Shayari',
      'ZQ Feelings',
      'Dil Ki Awaaz'
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: homeCanonical }] : [])
    ],
    faqs: [
      {
        question: 'ZQ Feelings - Dil Ki Awaaz पर कुल कितनी शायरियाँ और श्रेणियाँ उपलब्ध हैं?',
        answer:
          'ZQ Feelings - Dil Ki Awaaz पर 5,870+ सौ-प्रतिशत मौलिक शायरियाँ हैं, जिनमें 32 Feelings श्रेणियाँ, 27 भारतीय त्यौहार, 15 दिनों का Valentine Week Special (35 भाषाओं में), 4 धार्मिक श्रेणियाँ, 4 संस्कार रस्में और 12 महीनों के खास दिन शामिल हैं।'
      },
      {
        question: 'क्या यहाँ से शायरी 20 स्टाइलिश फ़ॉन्ट्स और फोटो कार्ड के रूप में शेयर कर सकते हैं?',
        answer:
          'जी हाँ, हर शायरी कार्ड पर 20 स्टाइलिश यूनिकोड फ़ॉन्ट्स, एक-क्लिक कॉपी, फोटो कार्ड डाउनलोड, ऑडियो सुनने का बटन और सीधा WhatsApp व Facebook शेयर बटन दिया गया है।'
      }
    ]
  };
}

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let tag = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonicalLink(url: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function upsertAlternateLangLink(hreflang: string, url: string, isValentineExtra = false) {
  let link = document.head.querySelector(
    `link[rel="alternate"][hreflang="${hreflang}"]`
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    document.head.appendChild(link);
  }
  if (isValentineExtra) {
    link.setAttribute('data-vw-hreflang', 'true');
  } else {
    link.removeAttribute('data-vw-hreflang');
  }
  link.setAttribute('href', url);
}

/**
 * Updates document <head> Title, Meta Description, OpenGraph, Twitter Cards, Canonical URL,
 * clean path-based hreflang tags (all 35 languages + x-default on Valentine routes), and Schema.org JSON-LD.
 */
export function syncDocumentSeo(meta: PageSeoMeta, samplePoems: Shayari[]) {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;

  const activeDocLang = meta.langCode || 'hi';
  document.documentElement.lang = activeDocLang;

  const siteOrigin = getActiveSiteOrigin();
  const defaultOgImage = `${siteOrigin}/og-image.jpg`;
  const canonicalUrl = `${siteOrigin}${meta.canonicalPath}`;
  const ogImageAlt = meta.title;

  document.title = meta.title;

  upsertMetaTag('name', 'application-name', SITE_NAME_FULL);
  upsertMetaTag('name', 'apple-mobile-web-app-title', SITE_NAME_FULL);
  upsertMetaTag('name', 'description', meta.description);
  upsertMetaTag('name', 'keywords', meta.keywords.join(', '));
  upsertMetaTag('name', 'language', activeDocLang);
  upsertMetaTag(
    'name',
    'robots',
    meta.canonicalPath === '/admin-zq' || isFreeHostingPreviewHost()
      ? 'noindex, nofollow'
      : 'index, follow'
  );

  upsertMetaTag('property', 'og:locale', 'hi_IN');
  upsertMetaTag('property', 'og:type', meta.canonicalPath === '/' ? 'website' : 'article');
  upsertMetaTag('property', 'og:title', meta.title);
  upsertMetaTag('property', 'og:description', meta.description);
  upsertMetaTag('property', 'og:url', canonicalUrl);
  upsertMetaTag('property', 'og:site_name', SITE_NAME_FULL);
  upsertMetaTag('property', 'og:image', defaultOgImage);
  upsertMetaTag('property', 'og:image:width', '1200');
  upsertMetaTag('property', 'og:image:height', '630');
  upsertMetaTag('property', 'og:image:alt', ogImageAlt);

  upsertMetaTag('name', 'twitter:card', 'summary_large_image');
  upsertMetaTag('name', 'twitter:title', meta.title);
  upsertMetaTag('name', 'twitter:description', meta.description);
  upsertMetaTag('name', 'twitter:image', defaultOgImage);
  upsertMetaTag('name', 'twitter:image:alt', ogImageAlt);

  upsertCanonicalLink(canonicalUrl);

  const pageSuffix = meta.valentinePageSuffix || '';
  if (meta.hreflangPrefixSlug) {
    for (const lang of VALENTINE_LANGUAGES) {
      const isDiwaliHindi = meta.hreflangPrefixSlug === 'diwali-shayari' && lang.code === 'hi';
      const iso = STATIC35_ISO_PREFIX_BY_CODE[lang.code] || 'hi';
      const cleanAltUrl = isDiwaliHindi
        ? `${siteOrigin}/diwali-shayari${pageSuffix}`
        : `${siteOrigin}/${iso}/${meta.hreflangPrefixSlug}${pageSuffix}`;
      upsertAlternateLangLink(lang.hreflang, cleanAltUrl, lang.hreflang !== 'hi');
    }
    const xDefaultUrl =
      meta.hreflangPrefixSlug === 'diwali-shayari'
        ? `${siteOrigin}/diwali-shayari${pageSuffix}`
        : `${siteOrigin}/hi/${meta.hreflangPrefixSlug}${pageSuffix}`;
    upsertAlternateLangLink('x-default', xDefaultUrl, false);
  } else if (meta.valentineBasePath) {
    const trimmedBase = meta.valentineBasePath.replace(/\/+$/, '');
    const hindiAltUrl = pageSuffix
      ? `${siteOrigin}${trimmedBase}${pageSuffix}`
      : `${siteOrigin}${meta.valentineBasePath}`;
    for (const lang of VALENTINE_LANGUAGES) {
      const cleanAltUrl =
        lang.code === 'hi'
          ? hindiAltUrl
          : `${siteOrigin}${trimmedBase}/${lang.slug}${pageSuffix}`;
      upsertAlternateLangLink(lang.hreflang, cleanAltUrl, lang.hreflang !== 'hi');
    }
    upsertAlternateLangLink('x-default', hindiAltUrl, false);
  } else {
    document.head
      .querySelectorAll('link[rel="alternate"][data-vw-hreflang="true"]')
      .forEach((node) => node.remove());
    upsertAlternateLangLink('hi', canonicalUrl, false);
    upsertAlternateLangLink('x-default', canonicalUrl, false);
  }

  // Ensure standalone WebSite JSON-LD schema has exact site name "ZQ Feelings - Dil Ki Awaaz"
  let websiteScriptEl = document.getElementById(
    'website-schema-jsonld'
  ) as HTMLScriptElement | null;
  if (!websiteScriptEl) {
    websiteScriptEl = document.createElement('script');
    websiteScriptEl.id = 'website-schema-jsonld';
    websiteScriptEl.type = 'application/ld+json';
    document.head.appendChild(websiteScriptEl);
  }
  websiteScriptEl.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteOrigin}/#website`,
    name: SITE_NAME_FULL,
    alternateName: ['ZQ Feelings', 'Dil Ki Awaaz'],
    url: `${siteOrigin}/`,
    inLanguage: 'hi'
  });

  // Build Schema.org BreadcrumbList + CollectionPage + Article + Poem + FAQPage structured data
  const poetryEntities = samplePoems.slice(0, 8).map((poem, index) => ({
    '@type': 'Poem',
    additionalType: 'https://schema.org/Poem',
    position: index + 1,
    name: poem.title,
    headline: poem.title,
    genre: ['Shayari', 'Poetry', meta.section],
    inLanguage: activeDocLang,
    text: (poem.lines || poem.linesHindi).join('\n'),
    author: {
      '@type': 'Person',
      name: poem.author || SITE_NAME_FULL
    },
    keywords: poem.tags?.join(', ') || meta.keywords.join(', ')
  }));

  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: meta.breadcrumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: crumb.name,
      item: `${siteOrigin}${crumb.path}`
    }))
  };

  const graphNodes: Record<string, unknown>[] = [
    breadcrumbSchema,
    {
      '@type': 'CollectionPage',
      '@id': `${canonicalUrl}#collection`,
      url: canonicalUrl,
      name: meta.title,
      headline: meta.h1,
      description: meta.description,
      inLanguage: activeDocLang,
      isPartOf: { '@id': `${siteOrigin}/#website` },
      breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
    },
    {
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      },
      headline: meta.h1,
      name: meta.title,
      description: meta.description,
      image: defaultOgImage,
      articleSection: meta.section,
      inLanguage: activeDocLang,
      keywords: meta.keywords.join(', '),
      author: {
        '@type': 'Organization',
        name: SITE_NAME_FULL,
        url: `${siteOrigin}/`
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME_FULL
      },
      ...(poetryEntities.length > 0 ? { hasPart: poetryEntities } : {})
    }
  ];

  if (meta.faqs && meta.faqs.length > 0) {
    graphNodes.push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: meta.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': graphNodes
  };

  let scriptEl = document.getElementById('dynamic-seo-jsonld') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'dynamic-seo-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }
  scriptEl.textContent = JSON.stringify(structuredData);
}
