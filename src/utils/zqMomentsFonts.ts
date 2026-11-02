import { MomentFontDefinition, MomentFontStyleId } from '../types/zqMoments';

export const MAX_MOMENT_CAPTION_WORDS = 500;

const PLAIN_ASCII_CHARS = Array.from(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
);

interface UnicodeAlphabetMap {
  lettersAndDigits?: string[];
  lettersOnly?: string[];
  combineUnderline?: boolean;
  sparkleWrap?: boolean;
}

const UNICODE_ALPHABETS: Partial<Record<MomentFontStyleId, UnicodeAlphabetMap>> = {
  bold: {
    lettersAndDigits: Array.from(
      '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
    )
  },
  italic: {
    lettersOnly: Array.from(
      '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧'
    )
  },
  'bold-italic': {
    lettersOnly: Array.from(
      '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛'
    )
  },
  cursive: {
    lettersOnly: Array.from(
      '𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏'
    )
  },
  'bold-cursive': {
    lettersOnly: Array.from(
      '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃'
    )
  },
  typewriter: {
    lettersAndDigits: Array.from(
      '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
    )
  },
  serif: {
    lettersAndDigits: Array.from(
      '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
    )
  },
  'serif-italic': {
    lettersOnly: Array.from(
      '𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧'
    )
  },
  'serif-bold-italic': {
    lettersOnly: Array.from(
      '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛'
    )
  },
  gothic: {
    lettersOnly: Array.from(
      '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷'
    )
  },
  'bold-gothic': {
    lettersOnly: Array.from(
      '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟'
    )
  },
  bubble: {
    lettersAndDigits: [
      ...Array.from('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ'),
      '⓪',
      '①',
      '②',
      '③',
      '④',
      '⑤',
      '⑥',
      '⑦',
      '⑧',
      '⑨'
    ]
  },
  'dark-bubble': {
    lettersOnly: Array.from(
      '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩'
    )
  },
  fancy: {
    lettersAndDigits: Array.from(
      '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞󠁮𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡'.replace(
        '󠁮',
        '𝕟'
      )
    )
  },
  square: {
    lettersOnly: Array.from(
      '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉'
    )
  },
  'dark-square': {
    lettersOnly: Array.from(
      '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉'
    )
  },
  'small-caps': {
    lettersOnly: Array.from(
      'ABCDEFGHIJKLMNOPQRSTUVWXYZᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ'
    )
  },
  wide: {
    lettersAndDigits: Array.from(
      'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９'
    )
  },
  'sans-bold': {
    lettersAndDigits: Array.from(
      '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
    )
  },
  'sans-italic': {
    lettersOnly: Array.from(
      '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻'
    )
  },
  'sans-bold-italic': {
    lettersOnly: Array.from(
      '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯'
    )
  },
  underline: {
    combineUnderline: true
  },
  sparkle: {
    lettersOnly: Array.from(
      '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃'
    ),
    sparkleWrap: true
  }
};

// Build reverse map from any styled glyph back to ASCII so font switching is 100% clean & reversible
const REVERSE_GLYPH_MAP = new Map<string, string>();
for (const config of Object.values(UNICODE_ALPHABETS)) {
  if (!config) continue;
  const list = config.lettersAndDigits || config.lettersOnly;
  if (!list) continue;
  for (let i = 0; i < list.length && i < PLAIN_ASCII_CHARS.length; i++) {
    const glyph = list[i];
    const plain = PLAIN_ASCII_CHARS[i];
    if (glyph !== plain && !REVERSE_GLYPH_MAP.has(glyph)) {
      REVERSE_GLYPH_MAP.set(glyph, plain);
    }
  }
}

const ASCII_INDEX_MAP = new Map<string, number>();
PLAIN_ASCII_CHARS.forEach((ch, idx) => {
  ASCII_INDEX_MAP.set(ch, idx);
});

export const ZQ_MOMENT_STYLISH_FONTS: MomentFontDefinition[] = [
  { id: 'normal', label: 'Normal', previewChip: 'Normal', cssClass: 'font-poppins font-normal' },
  { id: 'bold', label: 'Bold', previewChip: '𝐁𝐨𝐥𝐝', cssClass: 'font-poppins font-bold' },
  { id: 'italic', label: 'Italic', previewChip: '𝘐𝘵𝘢𝘭𝘪𝘤', cssClass: 'font-poppins italic' },
  {
    id: 'bold-italic',
    label: 'Bold Italic',
    previewChip: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄',
    cssClass: 'font-poppins font-bold italic'
  },
  { id: 'cursive', label: 'Cursive', previewChip: '𝒞𝓊𝓇𝓈𝒾𝓋ℯ', cssClass: 'font-caveat text-[22px]' },
  {
    id: 'bold-cursive',
    label: 'Bold Cursive',
    previewChip: '𝓑𝓸𝓵𝓭 𝓒𝓾𝓻𝓼𝓲𝓿𝓮',
    cssClass: 'font-kalam font-bold'
  },
  {
    id: 'typewriter',
    label: 'Typewriter',
    previewChip: '𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛',
    cssClass: 'font-mono tracking-tight'
  },
  { id: 'serif', label: 'Serif', previewChip: '𝐒𝐞𝐫𝐢𝐟', cssClass: 'font-noto font-semibold' },
  {
    id: 'serif-italic',
    label: 'Serif Italic',
    previewChip: '𝑆𝑒𝑟𝑖𝑓 𝐼𝑡𝑎𝑙𝑖𝑐',
    cssClass: 'font-tiro italic'
  },
  {
    id: 'serif-bold-italic',
    label: 'Serif Bold',
    previewChip: '𝑺𝒆𝒓𝒊𝒇 𝑩𝒐𝒍𝒅',
    cssClass: 'font-noto font-extrabold italic'
  },
  { id: 'gothic', label: 'Gothic', previewChip: '𝔊𝔬𝔱𝔥𝔦𝔠', cssClass: 'font-poppins' },
  {
    id: 'bold-gothic',
    label: 'Bold Gothic',
    previewChip: '𝕭𝖔𝖑𝖉 𝕲𝖔𝖙𝖍𝖎𝖈',
    cssClass: 'font-poppins font-semibold'
  },
  { id: 'bubble', label: 'Bubble', previewChip: 'Ⓑⓤⓑⓑⓛⓔ', cssClass: 'font-poppins' },
  {
    id: 'dark-bubble',
    label: 'Dark Bubble',
    previewChip: '🅑🅤🅑🅑🅛🅔',
    cssClass: 'font-poppins'
  },
  { id: 'fancy', label: 'Fancy', previewChip: '𝔽𝕒𝕟𝕔𝕪', cssClass: 'font-poppins' },
  { id: 'square', label: 'Square', previewChip: '🅂🅀🅄🄰🅁🄴', cssClass: 'font-poppins' },
  {
    id: 'dark-square',
    label: 'Dark Square',
    previewChip: '🆂🆀🆄🅰🆁🅴',
    cssClass: 'font-poppins'
  },
  {
    id: 'small-caps',
    label: 'Small Caps',
    previewChip: 'ꜱᴍᴀʟʟ ᴄᴀᴘꜱ',
    cssClass: 'font-poppins tracking-wide'
  },
  { id: 'wide', label: 'Wide', previewChip: 'Ｗｉｄｅ', cssClass: 'font-poppins' },
  {
    id: 'sans-bold',
    label: 'Modern Bold',
    previewChip: '𝗦𝗮𝗻𝘀 𝗕𝗼𝗹𝗱',
    cssClass: 'font-poppins font-bold'
  },
  {
    id: 'sans-italic',
    label: 'Modern Italic',
    previewChip: '𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤',
    cssClass: 'font-poppins italic'
  },
  {
    id: 'sans-bold-italic',
    label: 'Modern BI',
    previewChip: '𝙎𝙖𝙣𝙨 𝘽𝙄',
    cssClass: 'font-poppins font-bold italic'
  },
  {
    id: 'royal',
    label: 'Royal',
    previewChip: 'ROYAL',
    cssClass: 'font-cinzel font-bold tracking-wider'
  },
  {
    id: 'handwritten',
    label: 'Handwritten',
    previewChip: 'Handwritten',
    cssClass: 'font-kalam'
  },
  {
    id: 'rozha',
    label: 'Classic Shayari',
    previewChip: 'शायरी Classic',
    cssClass: 'font-rozha'
  },
  {
    id: 'yatra',
    label: 'Festive Yatra',
    previewChip: 'उत्सव Yatra',
    cssClass: 'font-yatra'
  },
  {
    id: 'poetic-tiro',
    label: 'Poetic Tiro',
    previewChip: 'काव्य Poetic',
    cssClass: 'font-tiro'
  },
  {
    id: 'underline',
    label: 'Underline',
    previewChip: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲',
    cssClass: 'font-poppins underline decoration-[#d94f70]/60 underline-offset-4'
  },
  {
    id: 'sparkle',
    label: 'Sparkle Fancy',
    previewChip: '✧ 𝓕𝓪𝓷𝓬𝔂 ✧',
    cssClass: 'font-kalam font-bold'
  },
  {
    id: 'airy-spaced',
    label: 'Airy Spaced',
    previewChip: 'A I R Y',
    cssClass: 'font-poppins tracking-[0.14em]'
  }
];

export function getMomentFontDefinition(fontId: string): MomentFontDefinition {
  return (
    ZQ_MOMENT_STYLISH_FONTS.find((f) => f.id === fontId) || ZQ_MOMENT_STYLISH_FONTS[0]
  );
}

/**
 * Strips Unicode stylish transformations back to clean plain text
 * so switching across all 30 stylish fonts never corrupts characters.
 */
export function stripStylishUnicode(input: string): string {
  if (!input) return '';
  let unwrapped = input;
  if (unwrapped.startsWith('✧ ') && unwrapped.endsWith(' ✧') && unwrapped.length >= 4) {
    unwrapped = unwrapped.slice(2, -2);
  }
  const out: string[] = [];
  for (const ch of unwrapped) {
    if (ch === '\u0332') continue;
    const mapped = REVERSE_GLYPH_MAP.get(ch);
    out.push(mapped !== undefined ? mapped : ch);
  }
  return out.join('');
}

/**
 * Transforms plain text into the selected stylish font (both for live textarea preview and post saving/copying).
 * If forLiveInput is true, avoids outer wrapper tokens so cursor selection stays 1-to-1 while typing.
 */
export function applyStylishUnicode(
  plainText: string,
  fontId: MomentFontStyleId,
  forLiveInput = false
): string {
  if (!plainText) return '';
  const config = UNICODE_ALPHABETS[fontId];
  if (!config) return plainText;

  if (config.combineUnderline) {
    const out: string[] = [];
    for (const ch of plainText) {
      if (/\s/.test(ch)) {
        out.push(ch);
      } else {
        out.push(`${ch}\u0332`);
      }
    }
    return out.join('');
  }

  const table = config.lettersAndDigits || config.lettersOnly;
  let result = plainText;
  if (table) {
    const out: string[] = [];
    for (const ch of plainText) {
      const idx = ASCII_INDEX_MAP.get(ch);
      if (idx !== undefined && idx < table.length) {
        out.push(table[idx]);
      } else {
        out.push(ch);
      }
    }
    result = out.join('');
  }

  if (config.sparkleWrap && !forLiveInput && result.trim().length > 0) {
    return `✧ ${result} ✧`;
  }

  return result;
}

/**
 * Counts words accurately across English, Hinglish, Hindi Devanagari, and Unicode stylish fonts.
 */
export function countCaptionWords(text: string): number {
  const cleaned = text.replace(/^✧\s+|\s+✧$/g, '').trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

/**
 * Truncates text cleanly to at most maxWords while preserving whitespace and line breaks.
 */
export function clampToMaxWords(
  text: string,
  maxWords = MAX_MOMENT_CAPTION_WORDS
): { text: string; wordCount: number; wasClamped: boolean } {
  const trimmed = text.trim();
  if (!trimmed) {
    return { text, wordCount: 0, wasClamped: false };
  }

  const tokens = text.split(/(\s+)/);
  let wordsSeen = 0;
  const kept: string[] = [];
  let clamped = false;

  for (const tok of tokens) {
    if (!tok) continue;
    if (/^\s+$/.test(tok)) {
      if (wordsSeen < maxWords) {
        kept.push(tok);
      }
    } else {
      if (wordsSeen < maxWords) {
        kept.push(tok);
        wordsSeen += 1;
      } else {
        clamped = true;
        break;
      }
    }
  }

  return {
    text: clamped ? kept.join('').trimEnd() : text,
    wordCount: wordsSeen,
    wasClamped: clamped
  };
}
