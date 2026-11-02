import { Shayari } from '../../../types/shayari';
import { EXPANDED_OLD_8_FEELINGS } from './expandedOld8';
import { NEW_FEELINGS_PART_1 } from './newFeelingsPart1';
import { NEW_FEELINGS_PART_2 } from './newFeelingsPart2';
import { NEW_FEELINGS_PART_3 } from './newFeelingsPart3';
import { NEW_FEELINGS_PART_4 } from './newFeelingsPart4';
import { NEW_FEELINGS_PART_5 } from './newFeelingsPart5';
import { SHARABI_SHAYARIS } from './sharabiShayari';

export {
  buildCategoryShayaris,
  hindiLineToHinglish,
  type RawPoemTuple,
  type CategoryBuildConfig
} from './shayariBuilder';

export {
  EXPANDED_OLD_8_FEELINGS,
  NEW_FEELINGS_PART_1,
  NEW_FEELINGS_PART_2,
  NEW_FEELINGS_PART_3,
  NEW_FEELINGS_PART_4,
  NEW_FEELINGS_PART_5,
  SHARABI_SHAYARIS
};

// Combined export of all expanded + new Feelings categories (including Sharabi & Funny Shayari)
export const ALL_NEW_AND_EXPANDED_FEELINGS: Shayari[] = [
  ...EXPANDED_OLD_8_FEELINGS,
  ...NEW_FEELINGS_PART_1,
  ...NEW_FEELINGS_PART_2,
  ...NEW_FEELINGS_PART_3,
  ...NEW_FEELINGS_PART_4,
  ...NEW_FEELINGS_PART_5,
  ...SHARABI_SHAYARIS
];
