import { Shayari } from '../types/shayari';
import { convertHindiToHinglish } from './globalTranslations';

// Global cache for quick slug lookups
const slugCache = new Map<string, string>();
const shayariBySlugMap = new Map<string, Shayari>();

/**
 * Converts a Shayari object into a 100% unique, SEO-friendly URL slug.
 * Example: "तेरी एक मुस्कान से" -> "teree-ek-muskaan-se-love-1"
 */
export function generateShayariSlug(shayari: Shayari): string {
  if (slugCache.has(shayari.id)) {
    return slugCache.get(shayari.id)!;
  }

  const rawTitle = (shayari.title || (shayari.linesHindi ? shayari.linesHindi[0] : shayari.lines[0]) || 'shayari').trim();
  const romanized = convertHindiToHinglish(rawTitle);
  const cleanTitleSlug = romanized
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

  const safeTitle = cleanTitleSlug || 'shayari';
  const cleanId = shayari.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const finalSlug = `${safeTitle}-${cleanId}`;

  slugCache.set(shayari.id, finalSlug);
  shayariBySlugMap.set(finalSlug, shayari);
  shayariBySlugMap.set(shayari.id.toLowerCase(), shayari);

  return finalSlug;
}

/**
 * Returns canonical web path for the shayari.
 * Example: "/shayari/teree-ek-muskaan-se-love-1"
 */
export function getShayariPath(shayari: Shayari): string {
  return `/shayari/${generateShayariSlug(shayari)}`;
}

/**
 * Finds a shayari by slug or id from the given pool.
 */
export function findShayariBySlug(slug: string, shayariPool: Shayari[]): Shayari | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().trim().replace(/^\/shayari\//, '').replace(/\/+$/, '');

  // 1. Check instant map cache
  if (shayariBySlugMap.has(cleanSlug)) {
    return shayariBySlugMap.get(cleanSlug);
  }

  // 2. Exact match against id
  const byId = shayariPool.find((s) => s.id.toLowerCase() === cleanSlug);
  if (byId) return byId;

  // 3. Match against generated slug
  for (const s of shayariPool) {
    const sSlug = generateShayariSlug(s);
    if (sSlug === cleanSlug) return s;
  }

  // 4. Fallback: match by id suffix (e.g. if slug is "tera-intezar-love-1", match "love-1")
  for (const s of shayariPool) {
    if (cleanSlug.endsWith(`-${s.id.toLowerCase()}`)) {
      return s;
    }
  }

  return undefined;
}

/**
 * Returns related shayaris from the same category.
 */
export function getRelatedShayaris(
  current: Shayari,
  shayariPool: Shayari[],
  limit = 6
): Shayari[] {
  const sameCategory = shayariPool.filter(
    (s) => s.id !== current.id && s.category === current.category
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  // If not enough in same category, supplement with same categoryType
  const sameType = shayariPool.filter(
    (s) => s.id !== current.id && s.category !== current.category && s.categoryType === current.categoryType
  );

  return [...sameCategory, ...sameType].slice(0, limit);
}
