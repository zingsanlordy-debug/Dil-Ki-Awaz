import { GlobalShayariItem } from '../types/shayari';
import { ZqMomentComment, ZqMomentPost } from '../types/zqMoments';

/**
 * RULE 1: Compulsory Original Content Declaration (Exact Verbatim Copy)
 */
export const ORIGINAL_DECLARATION_TEXT =
  'Main ye declare karta/karti hu ki ye Content (Photo/Shayari) 100% Mera Apna Original Hai. Ye kisi dusri website, Google, Instagram ya kisi aur shayar ka copy nahi hai. Agar copy nikla to aap delete kar sakte ho.';

export const ORIGINAL_DECLARATION_CHECKBOX_LABEL =
  'Haan, ye mera khud ka original content hai';

/**
 * RULE 3: 3 Report = Auto Delete System (+ Admin 1 Report = Auto Delete)
 */
export const REPORT_REASON_DEFAULT = 'Chori Ka Hai / Ganda Hai / Copy Hai';

export const REPORT_REASON_OPTIONS = [
  'Chori Ka Hai / Ganda Hai / Copy Hai',
  'Chori Ka Hai',
  'Ganda Hai',
  'Copy Hai'
] as const;

export const MAX_REPORTS_BEFORE_AUTO_DELETE = 3;

/**
 * RULE 4: SEO Safe UGC Footer (Exact Verbatim Copy on Every Post)
 */
export const UGC_SEO_SAFE_FOOTER_TEXT =
  'Shared by Guest User - Original content by user. If copied, please report, auto-deleted after 3 reports. Contact: support@zqfeelings.com for DMCA';

function svgToDataUri(svgMarkup: string): string {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    svgMarkup.replace(/\s+/g, ' ').trim()
  )}`;
}

/**
 * 100% Original, Clean, Zero-Text, Zero-Watermark Atmospheric Scenic Visuals for ZQ Moment Seed Posts
 */
const ZINGSAN_SUNSET_SCENE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="38%" stop-color="#7c2d62"/>
      <stop offset="72%" stop-color="#ea580c"/>
      <stop offset="100%" stop-color="#fde047"/>
    </linearGradient>
    <radialGradient id="sunGlow1" cx="52%" cy="64%" r="32%">
      <stop offset="0%" stop-color="#fef9c3" stop-opacity="0.95"/>
      <stop offset="45%" stop-color="#fb923c" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#fb923c" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#sky1)"/>
  <circle cx="624" cy="512" r="260" fill="url(#sunGlow1)"/>
  <circle cx="624" cy="508" r="68" fill="#fef08a" opacity="0.95"/>
  <path d="M0 590 L190 470 L370 545 L580 430 L790 535 L1010 445 L1200 540 L1200 800 L0 800 Z" fill="#4c1d4b" opacity="0.72"/>
  <path d="M0 640 L240 535 L460 615 L710 510 L940 605 L1200 530 L1200 800 L0 800 Z" fill="#2b1233" opacity="0.88"/>
  <path d="M0 700 Q320 650 640 695 T1200 680 L1200 800 L0 800 Z" fill="#14091b"/>
</svg>
`);

const QUEEN_RAIN_BOKEH_SCENE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="rainBg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="55%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <radialGradient id="bokehAmber" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fde68a" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="bokehRose" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fda4af" stop-opacity="0.65"/>
      <stop offset="100%" stop-color="#e11d48" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#rainBg)"/>
  <circle cx="240" cy="290" r="130" fill="url(#bokehAmber)"/>
  <circle cx="510" cy="420" r="165" fill="url(#bokehRose)"/>
  <circle cx="840" cy="260" r="145" fill="url(#bokehAmber)"/>
  <circle cx="960" cy="490" r="120" fill="url(#bokehRose)"/>
  <circle cx="360" cy="560" r="95" fill="url(#bokehAmber)"/>
  <g stroke="#e2e8f0" stroke-opacity="0.28" stroke-width="2.5" stroke-linecap="round">
    <line x1="150" y1="60" x2="115" y2="195"/>
    <line x1="320" y1="110" x2="285" y2="255"/>
    <line x1="485" y1="45" x2="448" y2="190"/>
    <line x1="690" y1="95" x2="655" y2="245"/>
    <line x1="890" y1="70" x2="852" y2="215"/>
    <line x1="1065" y1="130" x2="1030" y2="275"/>
    <line x1="220" y1="390" x2="185" y2="540"/>
    <line x1="610" y1="360" x2="572" y2="515"/>
    <line x1="780" y1="430" x2="742" y2="585"/>
    <line x1="1010" y1="395" x2="972" y2="545"/>
  </g>
  <rect y="690" width="1200" height="110" fill="#090d16" opacity="0.82"/>
</svg>
`);

const MEDI_STARLIT_RIVER_SCENE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="55%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="lake" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090d1f"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="540" fill="url(#nightSky)"/>
  <rect y="535" width="1200" height="265" fill="url(#lake)"/>
  <g fill="#f8fafc" opacity="0.85">
    <circle cx="140" cy="110" r="2.2"/><circle cx="290" cy="75" r="1.8"/><circle cx="430" cy="145" r="2.5"/>
    <circle cx="590" cy="85" r="1.9"/><circle cx="745" cy="130" r="2.4"/><circle cx="980" cy="95" r="2.1"/>
    <circle cx="1090" cy="175" r="1.7"/><circle cx="215" cy="230" r="1.6"/><circle cx="515" cy="220" r="2.0"/>
    <circle cx="850" cy="210" r="1.8"/>
  </g>
  <circle cx="820" cy="195" r="52" fill="#fef3c7"/>
  <circle cx="842" cy="180" r="46" fill="#090f24"/>
  <path d="M0 540 L210 420 L420 510 L650 395 L890 495 L1200 415 L1200 540 Z" fill="#0b1120"/>
  <g fill="#fef3c7" opacity="0.32">
    <ellipse cx="815" cy="585" rx="46" ry="5"/>
    <ellipse cx="815" cy="612" rx="34" ry="4"/>
    <ellipse cx="815" cy="640" rx="24" ry="3.5"/>
    <ellipse cx="815" cy="668" rx="15" ry="3"/>
  </g>
</svg>
`);

const PRINCESS_BLOSSOM_DAWN_SCENE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="dawnBlush" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#831843"/>
      <stop offset="45%" stop-color="#db2777"/>
      <stop offset="80%" stop-color="#fda4af"/>
      <stop offset="100%" stop-color="#fff1f2"/>
    </linearGradient>
    <radialGradient id="dawnSun" cx="50%" cy="72%" r="36%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="55%" stop-color="#fecdd3" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#fecdd3" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#dawnBlush)"/>
  <circle cx="600" cy="575" r="300" fill="url(#dawnSun)"/>
  <path d="M0 620 Q300 545 600 595 T1200 570 L1200 800 L0 800 Z" fill="#9d174d" opacity="0.55"/>
  <path d="M0 685 Q340 625 680 675 T1200 655 L1200 800 L0 800 Z" fill="#500724" opacity="0.85"/>
  <g fill="#ffe4e6" opacity="0.78">
    <circle cx="190" cy="180" r="9"/><circle cx="235" cy="215" r="6"/><circle cx="310" cy="155" r="8"/>
    <circle cx="920" cy="165" r="10"/><circle cx="975" cy="205" r="7"/><circle cx="1040" cy="145" r="8"/>
  </g>
</svg>
`);

const RUSTAM_AMBER_HORIZON_SCENE = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="amberSky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="45%" stop-color="#78350f"/>
      <stop offset="82%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fcd34d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="530" fill="url(#amberSky)"/>
  <circle cx="600" cy="485" r="64" fill="#fef3c7" opacity="0.92"/>
  <path d="M0 530 L175 455 L390 505 L600 440 L820 505 L1035 450 L1200 530 Z" fill="#451a03"/>
  <rect y="530" width="1200" height="270" fill="#1c1917"/>
  <polygon points="565,530 635,530 890,800 310,800" fill="#292524"/>
  <line x1="600" y1="542" x2="600" y2="795" stroke="#f59e0b" stroke-width="6" stroke-dasharray="28 24"/>
</svg>
`);

const BASE_SEED_TIME_MS = 1761782400000; // Fixed deterministic baseline so SSR/CSR match cleanly

/**
 * RULE 5A: 5 Initial Original Posts in ZQ Moment
 * Authors: ZINGSAN, QUEEN, MEDI, PRINCESS, RUSTAM (Strictly 20-30 words each, 100% original human touch)
 */
export const INITIAL_ZQ_MOMENT_SEEDS: ZqMomentPost[] = [
  {
    id: 'seed_zqm_zingsan_01',
    userId: 'seed_guest_zingsan',
    posterName: 'ZINGSAN',
    caption:
      'Shaam ki thandi hawa jab chhat par aati hai, bina kahe teri har chhoti baat yaad dilati hai.\nKuch rishte shor nahi karte, bas dil me thehar jaate hain.',
    fontStyle: 'normal',
    images: [ZINGSAN_SUNSET_SCENE],
    likeCount: 24,
    commentCount: 2,
    timestampMillis: BASE_SEED_TIME_MS - 15 * 60 * 1000,
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_zqm_queen_02',
    userId: 'seed_guest_queen',
    posterName: 'QUEEN',
    caption:
      'Khirki par girti baarish ki boondein aur haath me garam chai ka pyaala,\nkabhi kabhi khud ke saath bitaya hua ek shant pal poori duniya se khoobsurat lagta hai.',
    fontStyle: 'serif-italic',
    images: [QUEEN_RAIN_BOKEH_SCENE],
    likeCount: 19,
    commentCount: 1,
    timestampMillis: BASE_SEED_TIME_MS - 48 * 60 * 1000,
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_zqm_medi_03',
    userId: 'seed_guest_medi',
    posterName: 'MEDI',
    caption:
      'Raat ke sannate me jab shehar sota hai, tab adhure khwabon ka hisaab shuru hota hai.\nDin bhar muskurane wale chehre aksar khamoshi me chupke se bheeg jaate hain.',
    fontStyle: 'poetic-tiro',
    images: [MEDI_STARLIT_RIVER_SCENE],
    likeCount: 31,
    commentCount: 1,
    timestampMillis: BASE_SEED_TIME_MS - 2 * 60 * 60 * 1000,
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_zqm_princess_04',
    userId: 'seed_guest_princess',
    posterName: 'PRINCESS',
    caption:
      'Mujhe mehenge tohfon ki kabhi khwahish nahi rahi,\nbas koi aisa ho jo meri thakan meri aawaaz se pehchan le aur kahe fikar mat kar main saath hu.',
    fontStyle: 'handwritten',
    images: [PRINCESS_BLOSSOM_DAWN_SCENE],
    likeCount: 27,
    commentCount: 1,
    timestampMillis: BASE_SEED_TIME_MS - 4 * 60 * 60 * 1000,
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_zqm_rustam_05',
    userId: 'seed_guest_rustam',
    posterName: 'RUSTAM',
    caption:
      'Safar lamba tha aur raaste anjaan mile, par har thokar ne pehle se zyada mazboot banaya.\nWaqt badalta zaroor hai, bas apne hausle ki lau jalaye rakhna.',
    fontStyle: 'royal',
    images: [RUSTAM_AMBER_HORIZON_SCENE],
    likeCount: 22,
    commentCount: 1,
    timestampMillis: BASE_SEED_TIME_MS - 6 * 60 * 60 * 1000,
    reportCount: 0,
    isSeedPost: true
  }
];

export const DEFAULT_SEED_MOMENT_COMMENTS: Record<string, ZqMomentComment[]> = {
  seed_zqm_zingsan_01: [
    {
      id: 'seed_cmt_z1',
      momentId: 'seed_zqm_zingsan_01',
      userId: 'seed_guest_queen',
      authorName: 'QUEEN',
      text: 'Dil ko chhoo gayi ye baat, sach me khamosh rishte sabse gehre hote hain.',
      timestampMillis: BASE_SEED_TIME_MS - 10 * 60 * 1000
    },
    {
      id: 'seed_cmt_z2',
      momentId: 'seed_zqm_zingsan_01',
      userId: 'seed_guest_sukoon',
      authorName: 'SUKOON',
      text: 'Shaam aur yaadon ka ehsaas bahut khoobsurat likha hai.',
      timestampMillis: BASE_SEED_TIME_MS - 6 * 60 * 1000
    }
  ],
  seed_zqm_queen_02: [
    {
      id: 'seed_cmt_q1',
      momentId: 'seed_zqm_queen_02',
      userId: 'seed_guest_princess',
      authorName: 'PRINCESS',
      text: 'Baarish aur chai wala sukoon sach me lajawab hota hai!',
      timestampMillis: BASE_SEED_TIME_MS - 30 * 60 * 1000
    }
  ],
  seed_zqm_medi_03: [
    {
      id: 'seed_cmt_m1',
      momentId: 'seed_zqm_medi_03',
      userId: 'seed_guest_kismat',
      authorName: 'KISMAT',
      text: 'Har lafz bilkul sach lagta hai, bahut gehri line.',
      timestampMillis: BASE_SEED_TIME_MS - 90 * 60 * 1000
    }
  ],
  seed_zqm_princess_04: [
    {
      id: 'seed_cmt_p1',
      momentId: 'seed_zqm_princess_04',
      userId: 'seed_guest_gloriun',
      authorName: 'GLORIUN',
      text: 'Aawaaz se thakan pehchan lena hi asli parwah hai.',
      timestampMillis: BASE_SEED_TIME_MS - 180 * 60 * 1000
    }
  ],
  seed_zqm_rustam_05: [
    {
      id: 'seed_cmt_r1',
      momentId: 'seed_zqm_rustam_05',
      userId: 'seed_guest_westarn',
      authorName: 'WESTARN',
      text: 'Hausla badhane wali shandaar baat bhai!',
      timestampMillis: BASE_SEED_TIME_MS - 300 * 60 * 1000
    }
  ]
};

/**
 * RULE 5B: 5 Initial Original Posts in Apni Shayari Likhen
 * Authors: GLORIUN, WESTARN, KISMAT, SUKOON, MASOOM (Strictly 20-30 words each, 2-line Love/Sad Shayari)
 */
export const INITIAL_APNI_SHAYARI_SEEDS: GlobalShayariItem[] = [
  {
    id: 'seed_sh_gloriun_01',
    userId: 'seed_guest_gloriun',
    createdAtMillis: BASE_SEED_TIME_MS - 20 * 60 * 1000,
    status: 'approved',
    rawText:
      'तेरे नाम से शुरू होती है अब मेरी हर सुबह की दुआ,\nभीड़ से भरी इस दुनिया में बस एक तेरा साथ ही अपना लगा।',
    moodEmoji: '❤️',
    category: 'love',
    categoryType: 'feelings',
    categoryName: '❤️ Love',
    categoryIcon: '❤️',
    title: 'GLORIUN की Love शायरी ❤️',
    lines: [
      'तेरे नाम से शुरू होती है अब मेरी हर सुबह की दुआ,',
      'भीड़ से भरी इस दुनिया में बस एक तेरा साथ ही अपना लगा। ❤️'
    ],
    linesHindi: [
      'तेरे नाम से शुरू होती है अब मेरी हर सुबह की दुआ,',
      'भीड़ से भरी इस दुनिया में बस एक तेरा साथ ही अपना लगा। ❤️'
    ],
    linesHinglish: [
      'Tere naam se shuru hoti hai ab meri har subah ki dua,',
      'Bheed se bhari is duniya me bas ek tera saath hi apna laga. ❤️'
    ],
    linesEnglish: [
      'Every morning prayer of mine now begins softly with your name,',
      'In this crowded world, only your companionship ever felt truly mine. ❤️'
    ],
    language: 'hindi',
    tags: ['Love', 'Hindi', 'GLORIUN', 'OriginalUserShayari'],
    author: 'GLORIUN',
    initialLikes: 29,
    commentsCount: 0,
    comments: [],
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_sh_westarn_02',
    userId: 'seed_guest_westarn',
    createdAtMillis: BASE_SEED_TIME_MS - 55 * 60 * 1000,
    status: 'approved',
    rawText:
      'हमने तो हर मोड़ पर सिर्फ़ वफ़ा निभाने की कोशिश की थी,\nपर किस्मत देखो वही लोग अजनबी बन गए जिन्हें हमने अपनी दुनिया माना था।',
    moodEmoji: '🥺',
    category: 'sad',
    categoryType: 'feelings',
    categoryName: '💔 Sad',
    categoryIcon: '🥺',
    title: 'WESTARN की Sad शायरी 🥺',
    lines: [
      'हमने तो हर मोड़ पर सिर्फ़ वफ़ा निभाने की कोशिश की थी,',
      'पर किस्मत देखो वही लोग अजनबी बन गए जिन्हें हमने अपनी दुनिया माना था। 🥺'
    ],
    linesHindi: [
      'हमने तो हर मोड़ पर सिर्फ़ वफ़ा निभाने की कोशिश की थी,',
      'पर किस्मत देखो वही लोग अजनबी बन गए जिन्हें हमने अपनी दुनिया माना था। 🥺'
    ],
    linesHinglish: [
      'Humne toh har mod par sirf wafa nibhane ki koshish ki thi,',
      'Par kismat dekho wahi log ajnabi ban gaye jinhein humne apni duniya maana tha. 🥺'
    ],
    linesEnglish: [
      'At every turn of life I only tried to stay loyal and true,',
      'Yet fate turned the very people I called my whole world into strangers. 🥺'
    ],
    language: 'hindi',
    tags: ['Sad', 'Hindi', 'WESTARN', 'OriginalUserShayari'],
    author: 'WESTARN',
    initialLikes: 24,
    commentsCount: 0,
    comments: [],
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_sh_kismat_03',
    userId: 'seed_guest_kismat',
    createdAtMillis: BASE_SEED_TIME_MS - 2.5 * 60 * 60 * 1000,
    status: 'approved',
    rawText:
      'Haathon ki lakeeron me shayad tera naam adhura reh gaya tha,\nWarna itni shiddat se chahne ke baad koi kisi se yun juda nahi hota.',
    moodEmoji: '🌙',
    category: 'sad',
    categoryType: 'feelings',
    categoryName: '💔 Sad',
    categoryIcon: '🌙',
    title: 'KISMAT ki Sad Shayari 🌙',
    lines: [
      'Haathon ki lakeeron me shayad tera naam adhura reh gaya tha,',
      'Warna itni shiddat se chahne ke baad koi kisi se yun juda nahi hota. 🌙'
    ],
    linesHindi: [
      'हाथों की लकीरों में शायद तेरा नाम अधूरा रह गया था,',
      'वरना इतनी शिद्दत से चाहने के बाद कोई किसी से यूँ जुदा नहीं होता। 🌙'
    ],
    linesHinglish: [
      'Haathon ki lakeeron me shayad tera naam adhura reh gaya tha,',
      'Warna itni shiddat se chahne ke baad koi kisi se yun juda nahi hota. 🌙'
    ],
    linesEnglish: [
      'Perhaps your name remained unfinished in the lines of my palms,',
      'Otherwise after loving so deeply, two souls would never drift apart like this. 🌙'
    ],
    language: 'hinglish',
    tags: ['Sad', 'Hinglish', 'KISMAT', 'OriginalUserShayari'],
    author: 'KISMAT',
    initialLikes: 34,
    commentsCount: 0,
    comments: [],
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_sh_sukoon_04',
    userId: 'seed_guest_sukoon',
    createdAtMillis: BASE_SEED_TIME_MS - 4.5 * 60 * 60 * 1000,
    status: 'approved',
    rawText:
      'दिन भर की सारी थकान बस तेरी एक मुस्कान देखकर उतर जाती है,\nतू पास बैठे तो लगता है जैसे ज़िंदगी को असली मंज़िल मिल गई।',
    moodEmoji: '🌹',
    category: 'love',
    categoryType: 'feelings',
    categoryName: '❤️ Love',
    categoryIcon: '🌹',
    title: 'SUKOON की Love शायरी 🌹',
    lines: [
      'दिन भर की सारी थकान बस तेरी एक मुस्कान देखकर उतर जाती है,',
      'तू पास बैठे तो लगता है जैसे ज़िंदगी को असली मंज़िल मिल गई। 🌹'
    ],
    linesHindi: [
      'दिन भर की सारी थकान बस तेरी एक मुस्कान देखकर उतर जाती है,',
      'तू पास बैठे तो लगता है जैसे ज़िंदगी को असली मंज़िल मिल गई। 🌹'
    ],
    linesHinglish: [
      'Din bhar ki saari thakan bas teri ek muskaan dekhkar utar jaati hai,',
      'Tu paas baithe toh lagta hai jaise zindagi ko asli manzil mil gayi. 🌹'
    ],
    linesEnglish: [
      'All the exhaustion of the entire day melts away at just one smile of yours,',
      'When you sit beside me, it feels as if life has found its true home. 🌹'
    ],
    language: 'hindi',
    tags: ['Love', 'Hindi', 'SUKOON', 'OriginalUserShayari'],
    author: 'SUKOON',
    initialLikes: 38,
    commentsCount: 0,
    comments: [],
    reportCount: 0,
    isSeedPost: true
  },
  {
    id: 'seed_sh_masoom_05',
    userId: 'seed_guest_masoom',
    createdAtMillis: BASE_SEED_TIME_MS - 7 * 60 * 60 * 1000,
    status: 'approved',
    rawText:
      'शिकायत तुझसे नहीं बस अपने इस मासूम दिल से है मुझे आज,\nजो तेरे झूठे वादों को भी हर बार सच मानकर इंतज़ार करता रहा।',
    moodEmoji: '🥺',
    category: 'sad',
    categoryType: 'feelings',
    categoryName: '💔 Sad',
    categoryIcon: '🥺',
    title: 'MASOOM की Sad शायरी 🥺',
    lines: [
      'शिकायत तुझसे नहीं बस अपने इस मासूम दिल से है मुझे आज,',
      'जो तेरे झूठे वादों को भी हर बार सच मानकर इंतज़ार करता रहा। 🥺'
    ],
    linesHindi: [
      'शिकायत तुझसे नहीं बस अपने इस मासूम दिल से है मुझे आज,',
      'जो तेरे झूठे वादों को भी हर बार सच मानकर इंतज़ार करता रहा। 🥺'
    ],
    linesHinglish: [
      'Shikayat tujhse nahi bas apne is masoom dil se hai mujhe aaj,',
      'Jo tere jhoothe waadon ko bhi har baar sach maankar intezaar karta raha. 🥺'
    ],
    linesEnglish: [
      'My complaint today is not with you, only with this innocent heart of mine,',
      'Which kept believing even your false promises and waiting faithfully every single time. 🥺'
    ],
    language: 'hindi',
    tags: ['Sad', 'Hindi', 'MASOOM', 'OriginalUserShayari'],
    author: 'MASOOM',
    initialLikes: 26,
    commentsCount: 0,
    comments: [],
    reportCount: 0,
    isSeedPost: true
  }
];

/* ============================================================================
 * Local Persistence Helpers for Seed Post Reports, Deletions, Likes & Comments
 * ========================================================================== */

const SEED_REPORTS_KEY = 'zq_seed_reports_v1';
const SEED_DELETED_KEY = 'zq_seed_deleted_ids_v1';
const SEED_MOMENT_LIKE_DELTA_KEY = 'zq_seed_moment_like_deltas_v1';
const SEED_MOMENT_COMMENTS_KEY = 'zq_seed_moment_comments_v1';

function readNumberRecord(key: string): Record<string, number> {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeNumberRecord(key: string, map: Record<string, number>): void {
  try {
    localStorage.setItem(key, JSON.stringify(map));
  } catch {
    // ignore
  }
}

export function getDeletedSeedIds(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(SEED_DELETED_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function markSeedPostDeleted(seedId: string): void {
  try {
    const current = getDeletedSeedIds();
    current[seedId] = true;
    localStorage.setItem(SEED_DELETED_KEY, JSON.stringify(current));
  } catch {
    // ignore
  }
}

export function getSeedReportCounts(): Record<string, number> {
  return readNumberRecord(SEED_REPORTS_KEY);
}

/**
 * Increments report count on a seed post.
 * - Normal user: 3 reports (even by the same person) -> Instant Auto Delete!
 * - Admin: 1 report -> Instant Auto Delete!
 */
export function reportSeedCommunityPost(
  seedId: string,
  isAdminCaller: boolean
): { deleted: boolean; reportCount: number } {
  const counts = getSeedReportCounts();
  const prev = counts[seedId] || 0;
  const nextCount = isAdminCaller ? MAX_REPORTS_BEFORE_AUTO_DELETE : prev + 1;

  if (nextCount >= MAX_REPORTS_BEFORE_AUTO_DELETE) {
    delete counts[seedId];
    writeNumberRecord(SEED_REPORTS_KEY, counts);
    markSeedPostDeleted(seedId);
    return { deleted: true, reportCount: nextCount };
  }

  counts[seedId] = nextCount;
  writeNumberRecord(SEED_REPORTS_KEY, counts);
  return { deleted: false, reportCount: nextCount };
}

export function getSeedMomentLikeDeltas(): Record<string, number> {
  return readNumberRecord(SEED_MOMENT_LIKE_DELTA_KEY);
}

export function adjustSeedMomentLikeDelta(seedId: string, delta: 1 | -1): number {
  const map = getSeedMomentLikeDeltas();
  const next = (map[seedId] || 0) + delta;
  map[seedId] = next;
  writeNumberRecord(SEED_MOMENT_LIKE_DELTA_KEY, map);
  return next;
}

export function getSeedMomentComments(seedId: string): ZqMomentComment[] {
  const defaults = DEFAULT_SEED_MOMENT_COMMENTS[seedId] || [];
  try {
    const raw = localStorage.getItem(SEED_MOMENT_COMMENTS_KEY);
    const parsed: Record<string, ZqMomentComment[]> = raw ? JSON.parse(raw) : {};
    const extra = Array.isArray(parsed[seedId]) ? parsed[seedId] : [];
    return [...defaults, ...extra];
  } catch {
    return defaults;
  }
}

export function appendSeedMomentComment(
  seedId: string,
  userId: string,
  authorName: string,
  text: string
): ZqMomentComment {
  const created: ZqMomentComment = {
    id: `scmt_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
    momentId: seedId,
    userId,
    authorName,
    text,
    timestampMillis: Date.now()
  };

  try {
    const raw = localStorage.getItem(SEED_MOMENT_COMMENTS_KEY);
    const parsed: Record<string, ZqMomentComment[]> = raw ? JSON.parse(raw) : {};
    const existing = Array.isArray(parsed[seedId]) ? parsed[seedId] : [];
    parsed[seedId] = [...existing, created];
    localStorage.setItem(SEED_MOMENT_COMMENTS_KEY, JSON.stringify(parsed));
  } catch {
    // ignore
  }

  return created;
}
