import { Shayari } from '../../types/shayari';
import { SANATAN_HINDU_SHAYARIS } from '../religious/sanatanHindu';
import { ISLAMIC_ALLAH_SHAYARIS } from '../religious/islamicAllah';
import { CHRISTIAN_FAITH_SHAYARIS } from '../religious/christianFaith';
import { SIKH_DHARM_SHAYARIS } from '../religious/sikhDharm';
import { RELIGIOUS_CATEGORIES, ReligiousCategoryMeta } from './religiousMeta';

export type { ReligiousCategoryMeta };
export { RELIGIOUS_CATEGORIES };

export const RELIGIOUS_SHAYARIS: Shayari[] = [
  ...SANATAN_HINDU_SHAYARIS,
  ...ISLAMIC_ALLAH_SHAYARIS,
  ...CHRISTIAN_FAITH_SHAYARIS,
  ...SIKH_DHARM_SHAYARIS
];

export {
  SANATAN_HINDU_SHAYARIS,
  ISLAMIC_ALLAH_SHAYARIS,
  CHRISTIAN_FAITH_SHAYARIS,
  SIKH_DHARM_SHAYARIS
};
