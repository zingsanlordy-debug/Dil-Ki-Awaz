import { FontOption, FontStyleId } from '../types/shayari';

export const FONT_OPTIONS: FontOption[] = [
  { id: 'normal', name: 'Normal', displayName: 'Normal (साधारण)', fontClass: 'font-poppins font-normal', description: 'Clean Standard' },
  { id: 'bold', name: 'Bold', displayName: '𝐁𝐨𝐥𝐝 (बोल्ड)', fontClass: 'font-poppins font-bold', description: 'Bold Strong' },
  { id: 'italic', name: 'Italic', displayName: '𝘐𝘵𝘢𝘭𝘪𝘤 (इटैलिक)', fontClass: 'font-serif italic font-medium', description: 'Slanted Cursive' },
  { id: 'bold-italic', name: 'Bold Italic', displayName: '𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘', fontClass: 'font-serif italic font-black', description: 'Heavy Slanted' },
  { id: 'fancy-cursive', name: 'Fancy Cursive', displayName: '𝓕𝓪𝓷𝓬𝔂 𝓒𝓾𝓻𝓼𝓲𝓿𝓮', fontClass: 'font-caveat font-bold', description: 'Romantic Flow' },
  { id: 'signature', name: 'Signature', displayName: '𝒮𝒾𝑔𝓃𝒶𝓉𝓊𝓇𝑒', fontClass: 'font-caveat font-semibold', description: 'Personal Script' },
  { id: 'heart', name: 'Heart', displayName: 'S💗i💗g', fontClass: 'font-poppins font-medium', description: 'Cupid Hearts' },
  { id: 'old-english', name: 'Old English', displayName: '𝔒𝔩𝔡 𝔈𝔫𝔤', fontClass: 'font-rozha font-bold', description: 'Royal Gothic' },
  { id: 'glitch', name: 'Glitch', displayName: 'G̵l̵i̵t̵c̵h̵', fontClass: 'font-mono font-medium', description: 'Cyberpunk Glitch' },
  { id: 'boxed', name: 'Boxed', displayName: '🅂🅱🅾🅇', fontClass: 'font-mono font-bold', description: 'Enclosed Box' },
  { id: 'symbols', name: 'Symbols', displayName: '꧁༺ 𝓣𝓮𝔁𝓽 ༻꧂', fontClass: 'font-kalam font-bold', description: 'Royal Ornamental' },
  { id: 'strike', name: 'Strike', displayName: 'S̶t̶r̶i̶k̶e̶', fontClass: 'line-through decoration-[#d94f70] decoration-2 font-poppins', description: 'Strikethrough' },
  { id: 'sparkle', name: 'Sparkle', displayName: '✨ Sparkle ✨', fontClass: 'font-poppins font-semibold', description: 'Star Glitter' },
  { id: 'love-border', name: 'Love Border', displayName: '💞 Love 💞', fontClass: 'font-caveat font-bold', description: 'Heart Frame' },
  { id: 'neon', name: 'Neon', displayName: '🔥 Neon 🔥', fontClass: 'font-poppins font-black', description: 'Glowing Ember' },
  { id: 'typewriter', name: 'Typewriter', displayName: '𝚃𝚢𝚙𝚎𝚠𝚛𝚒𝚝𝚎𝚛', fontClass: 'font-mono', description: 'Vintage Monospace' },
  { id: 'upper-small', name: 'Upper Small', displayName: 'ᴜᴘᴘᴇʀ ꜱᴍᴀʟʟ', fontClass: 'tracking-wider font-sans', description: 'Petite Capitals' },
  { id: 'circle', name: 'Circle', displayName: 'Ⓒⓘⓡⓒⓛⓔ', fontClass: 'font-mono', description: 'Encircled Letters' },
  { id: 'double', name: 'Double', displayName: '𝔻𝕠𝕦𝕓𝕝𝕖-𝕊𝕥𝕣𝕦𝕔𝕜', fontClass: 'font-serif font-bold', description: 'Mathematical Outline' },
  { id: 'classic-serif', name: 'Classic Serif', displayName: 'रौझा (Yatra/Rozha)', fontClass: 'font-yatra font-bold', description: 'Devanagari Classic' }
];

// Mapping tables for text transformations
const SCRIPT_MAP: Record<string, string> = {
  a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: '𝑒', f: '𝒻', g: '𝑔', h: '𝒽', i: '𝒾', j: '𝒿', k: '𝓀', l: '𝓁', m: '𝓂',
  n: '𝓃', o: '𝑜', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉', u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏',
  A: '𝒜', B: '𝐵', C: '𝒞', D: '𝒟', E: '𝐸', F: '𝐹', G: '𝒢', H: '𝐻', I: '𝐼', J: '𝒥', K: '𝒦', L: '𝐿', M: '𝑀',
  N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: '𝑅', S: '𝒮', T: '𝒯', U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵'
};

const BOLD_SCRIPT_MAP: Record<string, string> = {
  a: '𝓪', b: '𝓫', c: '𝓬', d: '𝓭', e: '𝓮', f: '𝓯', g: '𝓰', h: '𝓱', i: '𝓲', j: '𝓳', k: '𝓴', l: '𝓵', m: '𝓶',
  n: '𝓷', o: '𝓸', p: '𝓹', q: '𝓺', r: '𝓻', s: '𝓼', t: '𝓽', u: '𝓾', v: '𝓿', w: '𝔀', x: '𝔁', y: '𝔂', z: '𝔃',
  A: '𝓐', B: '𝓑', C: '𝓒', D: '𝓓', E: '𝓔', F: '𝓕', G: '𝓖', H: '𝓗', I: '𝓘', J: '𝓙', K: '𝓚', L: '𝓛', M: '𝓜',
  N: '𝓝', O: '𝓞', P: '𝓟', Q: '𝓠', R: '𝓡', S: '𝓢', T: '𝓣', U: '𝓤', V: '𝓥', W: '𝓦', X: '𝓧', Y: '𝓨', Z: '𝓩'
};

const OLD_ENGLISH_MAP: Record<string, string> = {
  a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪',
  n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷',
  A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: 'ℌ', I: 'ℑ', J: '𝔍', K: '𝔎', L: '𝔏', M: '𝔐',
  N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗', U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ'
};

const SMALL_CAPS_MAP: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ', h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ',
  n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 'ꜱ', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
};

const BOXED_MAP: Record<string, string> = {
  a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼',
  n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
  A: '🅰', B: '🅱', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷', I: '🅸', J: '🅹', K: '🅺', L: '🅻', M: '🅼',
  N: '🅽', O: '🅾', P: '🅿', Q: '🆀', R: '🆁', S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇', Y: '🆈', Z: '🆉'
};

const CIRCLE_MAP: Record<string, string> = {
  a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ', j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ',
  n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ', s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
  A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ', J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ',
  N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ', S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ'
};

const DOUBLE_MAP: Record<string, string> = {
  a: '𝕒', b: '𝕓', c: '𝕔', d: '𝕕', e: '𝕖', f: '𝕗', g: '𝕘', h: '𝕙', i: '𝕚', j: '𝕛', k: '𝕜', l: '𝕝', m: '𝕞',
  n: '𝕟', o: '𝕠', p: '𝕡', q: '𝕢', r: '𝕣', s: '𝕤', t: '𝕥', u: '𝕦', v: '𝕧', w: '𝕨', x: '𝕩', y: '𝕪', z: '𝕫',
  A: '𝔸', B: '𝔹', C: 'ℂ', D: '𝔻', E: '𝔼', F: '𝔽', G: '𝔾', H: 'ℍ', I: '𝕀', J: '𝕁', K: '𝕂', L: '𝕃', M: '𝕄',
  N: 'ℕ', O: '𝕆', P: 'ℙ', Q: 'ℚ', R: 'ℝ', S: '𝕊', T: '𝕋', U: '𝕌', V: '𝕍', W: '𝕎', X: '𝕏', Y: '𝕐', Z: 'ℤ'
};

const TYPEWRITER_MAP: Record<string, string> = {
  a: '𝚊', b: '𝚋', c: '𝚌', d: '𝚍', e: '𝚎', f: '𝚏', g: '𝚐', h: '𝚑', i: '𝚒', j: '𝚓', k: '𝚔', l: '𝚕', m: '𝚖',
  n: '𝚗', o: '𝚘', p: '𝚙', q: '𝚚', r: '𝚛', s: '𝚜', t: '𝚝', u: '𝚞', v: '𝚟', w: '𝚠', x: '𝚡', y: '𝚢', z: '𝚣',
  A: '𝙰', B: '𝙱', C: '𝙲', D: '𝙳', E: '𝙴', F: '𝙵', G: '𝙶', H: '𝙷', I: '𝙸', J: '𝙹', K: '𝙺', L: '𝙻', M: '𝙼',
  N: '𝙽', O: '𝙾', P: '𝙿', Q: '𝚀', R: '𝚁', S: '𝚂', T: '𝚃', U: '𝚄', V: '𝚅', W: '𝚆', X: '𝚇', Y: '𝚈', Z: '𝚉'
};

// Transform individual line based on 20 font options
export function transformShayariLine(line: string, fontId: FontStyleId): string {
  switch (fontId) {
    case 'signature':
      return line.split('').map((ch) => SCRIPT_MAP[ch] || ch).join('');
    case 'fancy-cursive':
      return line.split('').map((ch) => BOLD_SCRIPT_MAP[ch] || ch).join('');
    case 'old-english':
      return line.split('').map((ch) => OLD_ENGLISH_MAP[ch] || ch).join('');
    case 'upper-small':
      return line.split('').map((ch) => SMALL_CAPS_MAP[ch.toLowerCase()] || ch).join('');
    case 'boxed':
      return line.split('').map((ch) => BOXED_MAP[ch] || ch).join('');
    case 'circle':
      return line.split('').map((ch) => CIRCLE_MAP[ch] || ch).join('');
    case 'double':
      return line.split('').map((ch) => DOUBLE_MAP[ch] || ch).join('');
    case 'typewriter':
      return line.split('').map((ch) => TYPEWRITER_MAP[ch] || ch).join('');
    case 'heart':
      return line.split(' ').join(' 💗 ');
    case 'glitch':
      return line.split('').map((ch, i) => (ch === ' ' ? ' ' : i % 2 === 0 ? `${ch}\u0335` : `${ch}\u0337`)).join('');
    case 'strike':
      return line.split('').map((ch) => (ch === ' ' ? ' ' : `${ch}\u0336`)).join('');
    case 'symbols':
      return `꧁༺ ${line} ༻꧂`;
    case 'sparkle':
      return `✨ ${line} ✨`;
    case 'love-border':
      return `💞 ${line} 💞`;
    case 'neon':
      return `🔥 ${line} 🔥`;
    default:
      return line;
  }
}
