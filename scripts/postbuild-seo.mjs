import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  DEFAULT_PRODUCTION_ORIGIN,
  SSR_FEELINGS,
  SSR_FESTIVALS,
  SSR_MAAFI_SUBS,
  SSR_MONTHS,
  SSR_RELIGIOUS,
  SSR_RITUALS,
  SSR_VALENTINE_DAYS,
  SSR_VALENTINE_LANGS,
  normalizeCustomOrigin,
  renderSsrMetaHtml
} from './seo-prerender-engine.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  process.exit(0);
}

const configuredOrigin =
  normalizeCustomOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  DEFAULT_PRODUCTION_ORIGIN;

const baseTemplate = fs.readFileSync(indexHtmlPath, 'utf8');

// Rewrite root dist/index.html, dist/robots.txt, and dist/sitemap.xml if a custom domain (e.g. zqfeelings.in) is configured
const rootHtml = renderSsrMetaHtml(baseTemplate, '/', configuredOrigin, false);
fs.writeFileSync(indexHtmlPath, rootHtml, 'utf8');

// Also write dist/404.html so static hosts like GitHub Pages / Cloudflare / Firebase never serve unstyled browser 404s
fs.writeFileSync(path.join(distDir, '404.html'), rootHtml, 'utf8');

if (configuredOrigin !== DEFAULT_PRODUCTION_ORIGIN) {
  const robotsDist = path.join(distDir, 'robots.txt');
  if (fs.existsSync(robotsDist)) {
    const robotsTxt = fs
      .readFileSync(robotsDist, 'utf8')
      .replaceAll(DEFAULT_PRODUCTION_ORIGIN, configuredOrigin);
    fs.writeFileSync(robotsDist, robotsTxt, 'utf8');
  }

  const sitemapDist = path.join(distDir, 'sitemap.xml');
  if (fs.existsSync(sitemapDist)) {
    const sitemapXml = fs
      .readFileSync(sitemapDist, 'utf8')
      .replaceAll(DEFAULT_PRODUCTION_ORIGIN, configuredOrigin);
    fs.writeFileSync(sitemapDist, sitemapXml, 'utf8');
  }
}

// Pre-render the 135+ core SEO landing pages by default (<0.1s, lightweight dist upload on Vercel/Netlify).
// Set FULL_STATIC_PRERENDER=true (or run npm run build:static) to pre-render all 4,900+ sitemap URLs.
const isFullStaticCloudDeploy = Boolean(
  process.env.FULL_STATIC_PRERENDER === 'true' ||
    process.env.FULL_STATIC_PRERENDER === '1'
);

const routesToPrerender = new Set();

if (isFullStaticCloudDeploy) {
  const sitemapPath = path.join(distDir, 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    const locRegex = /<loc>https?:\/\/[^/<]+(\/[^<]*)<\/loc>/gi;
    let match;
    while ((match = locRegex.exec(xml)) !== null) {
      const routePath = (match[1] || '/').trim();
      if (routePath && routePath !== '/') {
        routesToPrerender.add(routePath);
      }
    }
  }
}

// Always guarantee core SEO landing pages exist as static <route>/index.html in dist/
const coreRoutes = [
  '/festival-shayari',
  '/feelings-shayari',
  '/valentine-week',
  '/12-months-special-days-shayari',
  '/zq-moments',
  '/apni-shayari-likhe',
  '/pasandida-shayari',
  '/zq-feelings-shayari',
  '/about-us',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
  '/contact-us',
  '/hi/new-year-shayari',
  '/en/new-year-shayari',
  '/hi/christmas-shayari',
  '/en/christmas-shayari',
  ...SSR_FESTIVALS.map((f) => `/${f.id}-shayari`),
  ...SSR_VALENTINE_DAYS.map((d) => `/valentine-week/${d.id}-shayari`),
  ...SSR_VALENTINE_DAYS.map((d) => `/valentine-week/${d.id}-shayari/english`),
  ...SSR_FEELINGS.map((f) => f.slug),
  ...SSR_FEELINGS.map((f) => `/${f.id}-shayari`),
  ...SSR_MAAFI_SUBS.map((m) => m.slug),
  ...SSR_MAAFI_SUBS.map((m) => `/${m.id}-shayari`),
  ...SSR_RELIGIOUS.map((r) => r.path),
  ...SSR_RELIGIOUS.map((r) => `/${r.id}-shayari`),
  ...SSR_RITUALS.map((r) => r.path),
  ...SSR_RITUALS.map((r) => `/${r.id}-shayari`),
  ...SSR_MONTHS.map((m) => `/${m.id}-special-shayari`),
  '/religious',
  '/dharmik-shayari',
  '/family-rituals',
  '/sanskar-shayari',
  '/admin-zq'
];

for (const route of coreRoutes) {
  routesToPrerender.add(route);
}

// Guarantee all 35 languages x 5 pages of Diwali are pre-rendered into static HTML
for (const lang of SSR_VALENTINE_LANGS) {
  for (let pg = 1; pg <= 5; pg++) {
    const isHindi = lang.code === 'hi';
    const basePath = isHindi ? '/diwali-shayari' : `/${lang.isoPrefix}/diwali-shayari`;
    const fullPath = pg === 1 ? basePath : `${basePath}/page/${pg}`;
    routesToPrerender.add(fullPath);
  }
}

let generatedCount = 0;
for (const rawRoute of routesToPrerender) {
  const cleanRel = rawRoute.replace(/^\/+|\/+$/g, '');
  if (!cleanRel || cleanRel.includes('..') || path.extname(cleanRel)) {
    continue;
  }
  const targetDir = path.join(distDir, cleanRel);
  const targetFile = path.join(targetDir, 'index.html');
  fs.mkdirSync(targetDir, { recursive: true });
  const html = renderSsrMetaHtml(baseTemplate, `/${cleanRel}`, configuredOrigin, false);
  fs.writeFileSync(targetFile, html, 'utf8');
  generatedCount++;
}

console.log(
  `[postbuild-seo] Pre-rendered ${generatedCount} static SEO HTML routes for origin ${configuredOrigin} (${
    isFullStaticCloudDeploy ? 'full-sitemap mode' : 'core-static + SSR mode'
  }).`
);
