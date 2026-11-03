export const COPY_BRAND_FOOTER = '💗 ZQ FEELINGS - Dil Ki Awaaz 💗';
export const COPY_MORE_SHAYARI_LINE = 'More Shayari: https://dil-ki-awaz.vercel.app';

const CATEGORY_HASHTAG_MAP: Record<string, readonly [string, string]> = {
  // Feelings Categories
  love: ['LoveShayari', 'Mohabbat'],
  sad: ['SadShayari', 'DardShayari'],
  attitude: ['AttitudeShayari', 'RoyalAttitude'],
  alone: ['AloneShayari', 'TanhaiShayari'],
  motivational: ['MotivationalShayari', 'HauslaShayari'],
  sorry: ['SorryShayari', 'MaafiShayari'],
  maafi: ['MaafiShayari', 'SorryShayari'],
  boys: ['BoysShayari', 'LadkoKeLiye'],
  boy: ['BoysShayari', 'LadkoKeLiye'],
  girls: ['GirlsShayari', 'GirlsPride'],
  girl: ['GirlsShayari', 'GirlsPride'],
  dosti: ['DostiShayari', 'SachiYaari'],
  bewafa: ['BewafaShayari', 'Dhokha'],
  breakup: ['BreakupShayari', 'Heartbreak'],
  yaad: ['YaadShayari', 'TeriKami'],
  'miss-you': ['MissYouShayari', 'TeriKami'],
  khushi: ['KhushiShayari', 'Muskurahat'],
  'good-morning': ['GoodMorningShayari', 'Suprabhat'],
  'good-night': ['GoodNightShayari', 'ShubhRatri'],
  '2-line': ['2LineShayari', 'ShortShayari'],
  family: ['FamilyShayari', 'MaaPapa'],
  'bhai-behen': ['BhaiBehenShayari', 'SiblingLove'],
  'birthday-feelings': ['BirthdayShayari', 'JanamdinMubarak'],
  'heart-touching': ['HeartTouchingShayari', 'DilChhooLeneWali'],
  emotional: ['EmotionalShayari', 'RoohKiAwaaz'],
  'sad-love': ['SadLoveShayari', 'AdhuraPyar'],
  khwab: ['KhwabShayari', 'AdhureSapne'],
  kismat: ['KismatShayari', 'NaseebShayari'],
  'matlabi-duniya': ['MatlabiDuniya', 'ZamanaShayari'],
  funny: ['FunnyShayari', 'ComedyShayari'],
  sharabi: ['SharabiShayari', 'Maikhana'],

  // Maafi Subcategories
  'maa-se-maafi': ['MaaSeMaafi', 'SorryMom'],
  'papa-se-maafi': ['PapaSeMaafi', 'SorryPapa'],
  'biwi-se-maafi': ['BiwiSeMaafi', 'SorryWife'],
  'husband-se-maafi': ['HusbandSeMaafi', 'SorryHusband'],

  // Festival Categories
  festival: ['FestivalShayari', 'TyoharWishes'],
  diwali: ['DiwaliShayari', 'HappyDiwali'],
  'bhai-dooj': ['BhaiDoojShayari', 'BhaiBehan'],
  'chhath-puja': ['ChhathPuja', 'ChhathiMaiya'],
  birthday: ['BirthdayShayari', 'JanamdinMubarak'],
  holi: ['HoliShayari', 'Rangotsav'],
  eid: ['EidShayari', 'EidMubarak'],
  bakrid: ['BakridMubarak', 'EidAlAdha'],
  'new-year': ['NewYearShayari', 'HappyNewYear'],
  'ganesh-chaturthi': ['GaneshChaturthi', 'GanpatiBappa'],
  'gandhi-jayanti': ['GandhiJayanti', 'MahatmaGandhi'],
  'independence-day': ['IndependenceDay', '15August'],
  'republic-day': ['RepublicDay', '26January'],
  rakshabandhan: ['Rakshabandhan', 'BhaiBehan'],
  janmashtami: ['Janmashtami', 'KrishnaJanmotsav'],
  navratri: ['NavratriShayari', 'MaaDurga'],
  dussehra: ['Dussehra', 'Vijayadashami'],
  christmas: ['ChristmasShayari', 'MerryChristmas'],
  lohri: ['LohriShayari', 'HappyLohri'],
  'makar-sankranti': ['MakarSankranti', 'TilGud'],
  'karva-chauth': ['KarvaChauth', 'KarwaChauth'],
  'eid-milad': ['EidMilad', 'MiladUnNabi'],
  mahashivratri: ['Mahashivratri', 'HarHarMahadev'],
  'ram-navami': ['RamNavami', 'JaiShriRam'],
  onam: ['OnamWishes', 'HappyOnam'],
  pongal: ['PongalWishes', 'HappyPongal'],
  baisakhi: ['BaisakhiWishes', 'Vaisakhi'],
  'guru-nanak-jayanti': ['GuruNanakJayanti', 'PrakashParv'],

  // Valentine Week Categories
  'rose-day': ['RoseDayShayari', 'HappyRoseDay'],
  'propose-day': ['ProposeDayShayari', 'IzhaarEMohabbat'],
  'chocolate-day': ['ChocolateDayShayari', 'SweetLove'],
  'teddy-day': ['TeddyDayShayari', 'HappyTeddyDay'],
  'promise-day': ['PromiseDayShayari', 'WadaShayari'],
  'hug-day': ['HugDayShayari', 'JadooKiJhappi'],
  'kiss-day': ['KissDayShayari', 'RomanticKiss'],
  'valentine-day': ['ValentineDayShayari', 'HappyValentinesDay'],
  'slap-day': ['SlapDayShayari', 'AntiValentine'],
  'kick-day': ['KickDayShayari', 'MoveOnShayari'],
  'perfume-day': ['PerfumeDayShayari', 'KhushbooShayari'],
  'flirt-day': ['FlirtDayShayari', 'FlirtyShayari'],
  'confession-day': ['ConfessionDayShayari', 'DilKiBaat'],
  'missing-day': ['MissingDayShayari', 'TeriKami'],
  'breakup-day': ['BreakupDayShayari', 'MoveOnShayari'],

  // Religious Categories
  'sanatan-hindu': ['SanatanDharma', 'BhaktiShayari'],
  'islamic-allah': ['IslamicShayari', 'ZikrEIlahi'],
  'christian-faith': ['MasihShayari', 'JesusGrace'],
  'sikh-dharm': ['SikhDharm', 'Waheguru'],

  // Family Rituals Categories
  'newborn-babies': ['NewbornBabyWishes', 'ChhotaMehmaan'],
  'godh-bharai': ['GodhBharai', 'BabyShowerWishes'],
  'naamkaran-mundan': ['NaamkaranSanskar', 'SanskarWishes'],
  'grah-pravesh': ['GrahPravesh', 'NayeGharKiBadhai'],

  // 12 Months Special Categories
  january: ['JanuarySpecial', 'SpecialDayShayari'],
  february: ['FebruarySpecial', 'SpecialDayShayari'],
  march: ['MarchSpecial', 'SpecialDayShayari'],
  april: ['AprilSpecial', 'SpecialDayShayari'],
  may: ['MaySpecial', 'SpecialDayShayari'],
  june: ['JuneSpecial', 'SpecialDayShayari'],
  july: ['JulySpecial', 'SpecialDayShayari'],
  august: ['AugustSpecial', 'SpecialDayShayari'],
  september: ['SeptemberSpecial', 'SpecialDayShayari'],
  october: ['OctoberSpecial', 'SpecialDayShayari'],
  november: ['NovemberSpecial', 'SpecialDayShayari'],
  december: ['DecemberSpecial', 'SpecialDayShayari']
};

function isBannedOrGenericHashtag(cleanTag: string): boolean {
  const lower = cleanTag.toLowerCase();
  if (!lower || lower.length < 2) return true;
  if (
    lower.includes('zq') ||
    lower.includes('dilkiawaaz') ||
    lower.includes('dilkiawaz') ||
    lower.includes('official') ||
    lower === 'viralshayari' ||
    lower === 'hindishayari' ||
    lower === 'shayari'
  ) {
    return true;
  }
  // Exclude generic *Status filler tags like #YaadStatus, #SadStatus, #HappyStatus
  if (lower.endsWith('status')) {
    return true;
  }
  return false;
}

function sanitizeHashtagToken(raw: string): string {
  return raw
    .trim()
    .replace(/^#+/, '')
    .replace(/[^a-zA-Z0-9\u0900-\u097F_]/g, '');
}

export function resolveTwoCategoryHashtags(
  category?: string,
  rawTags?: readonly string[]
): [string, string] {
  const selected: string[] = [];
  const seenLower = new Set<string>();

  const tryPush = (candidate: string) => {
    if (selected.length >= 2) return;
    const token = sanitizeHashtagToken(candidate);
    if (!token || isBannedOrGenericHashtag(token)) return;
    const lower = token.toLowerCase();
    if (seenLower.has(lower)) return;
    seenLower.add(lower);
    selected.push(`#${token}`);
  };

  if (rawTags && rawTags.length > 0) {
    for (const tag of rawTags) {
      tryPush(tag);
      if (selected.length >= 2) break;
    }
  }

  const normalizedCat = (category || '')
    .trim()
    .toLowerCase()
    .replace(/-shayari$/, '');

  const mappedPair = CATEGORY_HASHTAG_MAP[normalizedCat];
  if (mappedPair && selected.length < 2) {
    for (const fallbackTag of mappedPair) {
      tryPush(fallbackTag);
      if (selected.length >= 2) break;
    }
  }

  if (selected.length < 2 && normalizedCat) {
    const pascalCat = normalizedCat
      .split(/[^a-zA-Z0-9]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
    if (pascalCat) {
      tryPush(`${pascalCat}Shayari`);
    }
  }

  const ultimateFallbacks = ['ShayariLovers', 'DilSeShayari'];
  for (const fb of ultimateFallbacks) {
    if (selected.length >= 2) break;
    tryPush(fb);
  }

  return [selected[0] || '#ShayariLovers', selected[1] || '#DilSeShayari'];
}

function stripBrandFromTitle(rawTitle?: string): string {
  if (!rawTitle) return '';
  return rawTitle
    .replace(/🌸/g, '')
    .replace(/^(?:zq\s*(?:feelings|स्पेशल|special)?\s*[:\-–—|•]?\s*)+/gi, '')
    .replace(/\b(?:zq\s*feelings|dil\s*ki\s*awa+z|दिल\s*की\s*आवाज़)\b/gi, '')
    .replace(/^[\s:\-–—|~]+|[\s:\-–—|~]+$/g, '')
    .trim();
}

export interface FormatShayariCopyParams {
  title?: string;
  lines: readonly string[];
  category?: string;
  tags?: readonly string[];
}

export function formatShayariCopyText({
  title,
  lines,
  category,
  tags
}: FormatShayariCopyParams): string {
  const cleanTitle = stripBrandFromTitle(title);

  const cleanLines = lines
    .map((line) => line.trim())
    .filter(
      (line) =>
        line.length > 0 &&
        !/zq\s*feelings/i.test(line) &&
        !/dil\s*ki\s*awa+z/i.test(line) &&
        !/more\s*shayari\s*:/i.test(line)
    );

  const firstLineHasBlossom = cleanLines.length > 0 && cleanLines[0].includes('🌸');
  const shayariSection =
    cleanTitle && !firstLineHasBlossom
      ? `🌸 ${cleanTitle} 🌸\n\n${cleanLines.join('\n')}`
      : cleanLines.join('\n');

  const [tag1, tag2] = resolveTwoCategoryHashtags(category, tags);

  return `${shayariSection}\n\n${tag1} ${tag2}\n\n${COPY_BRAND_FOOTER}\n${COPY_MORE_SHAYARI_LINE}`;
}
