import { Shayari } from '../types/shayari';
import { FESTIVALS_PART_1 } from './categories/festivalsPart1';
import { FESTIVALS_PART_2 } from './categories/festivalsPart2';
import { FESTIVALS_PART_3 } from './categories/festivalsPart3';
import { FEELINGS_ALL } from './categories/feelingsAll';
import {
  EXPANDED_OLD_8_FEELINGS,
  NEW_FEELINGS_PART_1,
  NEW_FEELINGS_PART_2,
  NEW_FEELINGS_PART_3,
  NEW_FEELINGS_PART_4,
  NEW_FEELINGS_PART_5,
  SHARABI_SHAYARIS
} from './categories/feelings';
import { ZQ_OFFICIAL_DEFAULTS } from './categories/zqOfficialDefaults';
import { RELIGIOUS_CATEGORIES, RELIGIOUS_SHAYARIS } from './categories/index';
import { MAAFI_SUBCATEGORIES, MAAFI_SPECIAL_SHAYARIS } from './maafi/index';
import {
  FAMILY_RITUALS_CATEGORIES,
  FAMILY_RITUALS_MASTER,
  FAMILY_RITUALS_SHAYARIS
} from './familyRituals/index';
import {
  FESTIVAL_CATEGORIES,
  FEELINGS_CATEGORIES,
  FEELINGS_CATEGORY_MERGE_MAP,
  normalizeFeelingsCategoryId,
  ALL_CATEGORIES,
  ALL_CATEGORIES_FOR_POSTING
} from './categories/categoryMeta';
import type { FeelingsCategoryMeta } from './categories/categoryMeta';

export {
  FESTIVAL_CATEGORIES,
  FEELINGS_CATEGORIES,
  FEELINGS_CATEGORY_MERGE_MAP,
  normalizeFeelingsCategoryId,
  ALL_CATEGORIES,
  ALL_CATEGORIES_FOR_POSTING,
  ZQ_OFFICIAL_DEFAULTS,
  RELIGIOUS_CATEGORIES,
  RELIGIOUS_SHAYARIS,
  MAAFI_SUBCATEGORIES,
  MAAFI_SPECIAL_SHAYARIS,
  FAMILY_RITUALS_CATEGORIES,
  FAMILY_RITUALS_MASTER,
  FAMILY_RITUALS_SHAYARIS
};
export type { FeelingsCategoryMeta };

const FEELINGS_META_BY_ID = new Map<string, FeelingsCategoryMeta>(
  FEELINGS_CATEGORIES.map((cat) => [cat.id, cat])
);

/**
 * Moves all shayaris from old duplicate categories into their final merged category
 * and removes ONLY exact duplicate shayari text (keeping 100% of unique shayaris).
 */
function mergeAndDeduplicateFeelingsShayaris(rawItems: Shayari[]): Shayari[] {
  const seenExactText = new Set<string>();
  const mergedResult: Shayari[] = [];

  for (const item of rawItems) {
    const exactTextKey = (item.linesHindi && item.linesHindi.length > 0 ? item.linesHindi : item.lines)
      .join('\n')
      .replace(/\s+/g, ' ')
      .trim();

    if (seenExactText.has(exactTextKey)) {
      continue;
    }
    seenExactText.add(exactTextKey);

    const targetId = normalizeFeelingsCategoryId(item.category);
    const meta = FEELINGS_META_BY_ID.get(targetId);

    if (meta) {
      mergedResult.push({
        ...item,
        category: meta.id,
        categoryName: `${meta.name} (${meta.hindiName})`,
        categoryIcon: meta.icon
      });
    } else {
      mergedResult.push(item);
    }
  }

  return mergedResult;
}

const MERGED_FEELINGS_SHAYARIS: Shayari[] = mergeAndDeduplicateFeelingsShayaris([
  ...FEELINGS_ALL,
  ...EXPANDED_OLD_8_FEELINGS,
  ...NEW_FEELINGS_PART_1,
  ...NEW_FEELINGS_PART_2,
  ...NEW_FEELINGS_PART_3,
  ...NEW_FEELINGS_PART_4,
  ...NEW_FEELINGS_PART_5,
  ...SHARABI_SHAYARIS
]);

export const SHAYARI_LIST: Shayari[] = [
  ...FESTIVALS_PART_1,
  ...FESTIVALS_PART_2,
  ...FESTIVALS_PART_3,
  ...MERGED_FEELINGS_SHAYARIS,
  ...MAAFI_SPECIAL_SHAYARIS,
  ...RELIGIOUS_SHAYARIS,
  ...FAMILY_RITUALS_SHAYARIS
];
