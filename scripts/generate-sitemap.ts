import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  FEELINGS_CATEGORIES,
  FESTIVAL_CATEGORIES,
  MAAFI_SUBCATEGORIES_META
} from '../src/data/categories/categoryMeta';
import {
  FAMILY_RITUALS_CATEGORIES,
  FAMILY_RITUALS_SHAYARIS,
  MAAFI_SPECIAL_SHAYARIS,
  RELIGIOUS_CATEGORIES,
  RELIGIOUS_SHAYARIS,
  SHAYARI_LIST
} from '../src/data/shayariData';
import { VALENTINE_CATEGORIES, VALENTINE_LANGUAGES } from '../src/data/valentineWeekMeta';
import { VALENTINE_SHAYARIS_AS_STANDARD } from '../src/data/valentineWeekBase';
import {
  buildFeelingsCleanPath,
  buildHoliday35CleanPath,
  isHoliday35Category
} from '../src/data/static35/static35Meta';
import { MONTHS_META } from '../src/zq-mansoon-special/monthsMeta';
import { ALL_FLAT_SPECIAL_SHAYARIS } from '../src/zq-mansoon-special/data';
import { computeShayariPageRanges } from '../src/utils/pagination';
import {
  buildPaginatedCleanPath,
  getSeoMetadataForState,
  parseLocationToRoute
} from '../src/utils/seo';
import {
  DEFAULT_PRODUCTION_ORIGIN,
  normalizeCustomOrigin,
  resolveServerSeoMeta
} from './seo-prerender-engine.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const publicSitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

const SITE_ORIGIN =
  normalizeCustomOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  DEFAULT_PRODUCTION_ORIGIN;

const LASTMOD_DATE = '2026-11-02';

interface SitemapEntry {
  path: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
}

const entries: SitemapEntry[] = [];
const seenPaths = new Set<string>();

function addRoute(
  routePath: string,
  changefreq: SitemapEntry['changefreq'],
  priority: string
): void {
  if (!routePath.startsWith('/')) {
    throw new Error(`Invalid route path (must start with /): ${routePath}`);
  }
  if (seenPaths.has(routePath)) return;
  seenPaths.add(routePath);
  entries.push({ path: routePath, changefreq, priority });
}

// 1. Homepage + Paginated Trending Feed (40 editorial shayaris -> 2 pages)
const homePages = computeShayariPageRanges(40).length;
for (let pg = 1; pg <= homePages; pg++) {
  addRoute(buildPaginatedCleanPath('/', pg), 'daily', pg === 1 ? '1.0' : '0.75');
}

// 2. Main Section Hubs
addRoute('/festival-shayari', 'weekly', '0.90');
addRoute('/12-months-special-days-shayari', 'weekly', '0.90');

// 3. All 27 Festival Categories (25 Hindi Festivals + New Year & Christmas in 35 Languages)
for (const fest of FESTIVAL_CATEGORIES) {
  const festItems = SHAYARI_LIST.filter(
    (s) => s.categoryType === 'festival' && s.category === fest.id
  );
  const totalPages = computeShayariPageRanges(festItems.length).length;

  if (isHoliday35Category(fest.id)) {
    for (const lang of VALENTINE_LANGUAGES) {
      const basePrio = lang.code === 'hi' || lang.code === 'en-US' ? '0.88' : '0.80';
      for (let pg = 1; pg <= totalPages; pg++) {
        addRoute(
          buildHoliday35CleanPath(fest.id, lang.code, pg),
          'weekly',
          pg === 1 ? basePrio : '0.70'
        );
      }
    }
  } else {
    for (let pg = 1; pg <= totalPages; pg++) {
      addRoute(
        buildPaginatedCleanPath(`/${fest.id}-shayari`, pg),
        'weekly',
        pg === 1 ? '0.85' : '0.72'
      );
    }
  }
}

// 4. Feelings Hub across all 35 Languages (plus hub pages 1..8)
for (const lang of VALENTINE_LANGUAGES) {
  const hubBasePrio = lang.code === 'hi' ? '0.92' : lang.code === 'en-US' ? '0.88' : '0.82';
  for (let pg = 1; pg <= 8; pg++) {
    addRoute(
      buildFeelingsCleanPath('all', lang.code, pg, false),
      'weekly',
      pg === 1 ? hubBasePrio : '0.70'
    );
  }
}

// 5. All 28 Feelings Categories across all 35 Languages + Dynamic Pagination
for (const feeling of FEELINGS_CATEGORIES) {
  const feelItems = SHAYARI_LIST.filter((s) => s.category === feeling.id);
  const totalPages = computeShayariPageRanges(feelItems.length).length;

  for (const lang of VALENTINE_LANGUAGES) {
    const basePrio = lang.code === 'hi' ? '0.88' : lang.code === 'en-US' ? '0.84' : '0.78';
    for (let pg = 1; pg <= totalPages; pg++) {
      addRoute(
        buildFeelingsCleanPath(feeling.id, lang.code, pg, false),
        'weekly',
        pg === 1 ? basePrio : '0.70'
      );
    }
  }
}

// 6. All 4 Maafi Sub-Categories across all 35 Languages + Dynamic Pagination
for (const maafi of MAAFI_SUBCATEGORIES_META) {
  const maafiItems = MAAFI_SPECIAL_SHAYARIS.filter((s) => s.category === maafi.id);
  const totalPages = computeShayariPageRanges(maafiItems.length).length;

  for (const lang of VALENTINE_LANGUAGES) {
    const basePrio = lang.code === 'hi' ? '0.85' : '0.78';
    for (let pg = 1; pg <= totalPages; pg++) {
      addRoute(
        buildFeelingsCleanPath(maafi.id, lang.code, pg, false),
        'weekly',
        pg === 1 ? basePrio : '0.68'
      );
    }
  }
}

// 7. Valentine Week Hub across all 35 Languages
for (const lang of VALENTINE_LANGUAGES) {
  const hubPath = lang.code === 'hi' ? '/valentine-week' : `/valentine-week/${lang.slug}`;
  addRoute(hubPath, 'weekly', lang.code === 'hi' ? '0.92' : '0.82');
}

// 8. All 15 Valentine Week Days across all 35 Languages + Dynamic Pagination
for (const vDay of VALENTINE_CATEGORIES) {
  const dayItems = VALENTINE_SHAYARIS_AS_STANDARD.filter((s) =>
    s.id.startsWith(`vw-${vDay.id}-`)
  );
  const totalPages = computeShayariPageRanges(dayItems.length).length;
  const baseDayPath = `/valentine-week/${vDay.id}-shayari`;

  for (const lang of VALENTINE_LANGUAGES) {
    const langPath = lang.code === 'hi' ? baseDayPath : `${baseDayPath}/${lang.slug}`;
    const basePrio = lang.code === 'hi' ? '0.88' : lang.code === 'en-US' ? '0.84' : '0.78';
    for (let pg = 1; pg <= totalPages; pg++) {
      addRoute(
        buildPaginatedCleanPath(langPath, pg),
        'weekly',
        pg === 1 ? basePrio : '0.70'
      );
    }
  }
}

// 9. All 4 Religious Categories + Dynamic Pagination
for (const rel of RELIGIOUS_CATEGORIES) {
  const relItems = RELIGIOUS_SHAYARIS.filter((s) => s.category === rel.id);
  const totalPages = computeShayariPageRanges(relItems.length).length;
  for (let pg = 1; pg <= totalPages; pg++) {
    addRoute(
      buildPaginatedCleanPath(rel.path, pg),
      'weekly',
      pg === 1 ? '0.85' : '0.70'
    );
  }
}

// 10. All 4 Family Rituals (Sanskar) Categories + Dynamic Pagination
for (const ritual of FAMILY_RITUALS_CATEGORIES) {
  const ritItems = FAMILY_RITUALS_SHAYARIS.filter((s) => s.category === ritual.id);
  const totalPages = computeShayariPageRanges(ritItems.length).length;
  for (let pg = 1; pg <= totalPages; pg++) {
    addRoute(
      buildPaginatedCleanPath(ritual.path, pg),
      'weekly',
      pg === 1 ? '0.85' : '0.70'
    );
  }
}

// 11. All 12 Months Special Days Categories + Dynamic Pagination
for (const month of MONTHS_META) {
  const monthItems = ALL_FLAT_SPECIAL_SHAYARIS.filter((s) => s.monthId === month.id);
  const totalPages = computeShayariPageRanges(monthItems.length).length;
  for (let pg = 1; pg <= totalPages; pg++) {
    addRoute(
      buildPaginatedCleanPath(`/${month.id}-special-shayari`, pg),
      'weekly',
      pg === 1 ? '0.85' : '0.70'
    );
  }
}

// 12. Community & Core Feature Pages (excluding /admin-zq which is disallowed/noindex)
addRoute('/zq-moments', 'daily', '0.85');
addRoute('/apni-shayari-likhe', 'daily', '0.85');
addRoute('/pasandida-shayari', 'weekly', '0.80');
addRoute('/zq-feelings-shayari', 'weekly', '0.85');

// 13. Legal & Trust Pages
addRoute('/about-us', 'monthly', '0.60');
addRoute('/privacy-policy', 'monthly', '0.50');
addRoute('/terms-and-conditions', 'monthly', '0.50');
addRoute('/disclaimer', 'monthly', '0.50');
addRoute('/contact-us', 'monthly', '0.60');

// ============================================================================
// FULL SEO AUDIT ASSERTIONS (Uniqueness, Length, Canonical Parity & Indexability)
// ============================================================================
const titleOwner = new Map<string, string>();
const descOwner = new Map<string, string>();
const auditErrors: string[] = [];

for (const entry of entries) {
  const serverMeta = resolveServerSeoMeta(entry.path);
  const parsedRoute = parseLocationToRoute(entry.path, '');
  const clientMeta = getSeoMetadataForState({
    route: parsedRoute.route,
    festivalCat: parsedRoute.festivalCat || 'all',
    feelingsCat: parsedRoute.feelingsCat || 'all',
    valentineCat: parsedRoute.valentineFocusCat,
    valentineLang: parsedRoute.valentineLang,
    staticLang: parsedRoute.staticLang,
    religiousCat: parsedRoute.religiousCat,
    familyRitualCat: parsedRoute.familyRitualCat,
    specialMonth: parsedRoute.specialMonth || 'all',
    page: parsedRoute.page
  });

  if (serverMeta.robots !== 'index, follow') {
    auditErrors.push(`Non-indexable URL in sitemap: ${entry.path} (${serverMeta.robots})`);
  }
  if (serverMeta.canonicalPath !== entry.path) {
    auditErrors.push(
      `Server canonical mismatch for ${entry.path}: got ${serverMeta.canonicalPath}`
    );
  }
  if (clientMeta.canonicalPath !== entry.path) {
    auditErrors.push(
      `Client canonical mismatch for ${entry.path}: got ${clientMeta.canonicalPath}`
    );
  }
  if (serverMeta.title !== clientMeta.title) {
    auditErrors.push(
      `Title SSR/Client mismatch on ${entry.path}:\n  SSR:    ${serverMeta.title}\n  Client: ${clientMeta.title}`
    );
  }
  if (serverMeta.description !== clientMeta.description) {
    auditErrors.push(
      `Description SSR/Client mismatch on ${entry.path}:\n  SSR:    ${serverMeta.description}\n  Client: ${clientMeta.description}`
    );
  }
  if (serverMeta.title.length > 60) {
    auditErrors.push(
      `Title exceeds 60 chars (${serverMeta.title.length}) on ${entry.path}: "${serverMeta.title}"`
    );
  }
  if (serverMeta.description.length > 160) {
    auditErrors.push(
      `Description exceeds 160 chars (${serverMeta.description.length}) on ${entry.path}: "${serverMeta.description}"`
    );
  }

  const prevTitleOwner = titleOwner.get(serverMeta.title);
  if (prevTitleOwner) {
    auditErrors.push(
      `Duplicate <title> "${serverMeta.title}" shared by ${prevTitleOwner} and ${entry.path}`
    );
  } else {
    titleOwner.set(serverMeta.title, entry.path);
  }

  const prevDescOwner = descOwner.get(serverMeta.description);
  if (prevDescOwner) {
    auditErrors.push(
      `Duplicate <meta description> shared by ${prevDescOwner} and ${entry.path}: "${serverMeta.description}"`
    );
  } else {
    descOwner.set(serverMeta.description, entry.path);
  }
}

if (auditErrors.length > 0) {
  console.error(`[generate-sitemap] SEO Audit Failed with ${auditErrors.length} issue(s):`);
  for (const err of auditErrors.slice(0, 25)) {
    console.error(' -', err);
  }
  process.exit(1);
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const xmlLines: string[] = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

for (const item of entries) {
  xmlLines.push('  <url>');
  xmlLines.push(`    <loc>${escapeXml(`${SITE_ORIGIN}${item.path}`)}</loc>`);
  xmlLines.push(`    <lastmod>${LASTMOD_DATE}</lastmod>`);
  xmlLines.push(`    <changefreq>${item.changefreq}</changefreq>`);
  xmlLines.push(`    <priority>${item.priority}</priority>`);
  xmlLines.push('  </url>');
}

xmlLines.push('</urlset>');
xmlLines.push('');

fs.writeFileSync(publicSitemapPath, xmlLines.join('\n'), 'utf8');

console.log(
  `[generate-sitemap] Generated ${entries.length} verified canonical URLs in public/sitemap.xml for ${SITE_ORIGIN} (100% unique Titles <=60 chars & Descriptions <=160 chars).`
);
