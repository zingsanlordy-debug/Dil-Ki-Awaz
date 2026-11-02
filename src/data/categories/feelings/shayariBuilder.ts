import { Shayari, FeelingsCategory } from '../../../types/shayari';

export type RawPoemTuple = readonly [hindi: string, english: string];

export interface CategoryBuildConfig {
  category: FeelingsCategory | string;
  categoryName: string;
  categoryIcon: string;
  idPrefix: string;
  startIndex: number;
  tags: string[];
  twoLine?: boolean;
}

const HINGLISH_LEXICON: Record<string, string> = {
  'में': 'mein',
  'मैं': 'main',
  'हैं': 'hain',
  'है': 'hai',
  'हूँ': 'hoon',
  'हो': 'ho',
  'था': 'tha',
  'थी': 'thi',
  'थे': 'the',
  'थीं': 'thin',
  'नहीं': 'nahi',
  'ना': 'na',
  'न': 'na',
  'मत': 'mat',
  'भी': 'bhi',
  'ही': 'hi',
  'तो': 'toh',
  'को': 'ko',
  'का': 'ka',
  'की': 'ki',
  'के': 'ke',
  'से': 'se',
  'पर': 'par',
  'पे': 'pe',
  'तक': 'tak',
  'मेरा': 'mera',
  'मेरी': 'meri',
  'मेरे': 'mere',
  'तेरा': 'tera',
  'तेरी': 'teri',
  'तेरे': 'tere',
  'हमारा': 'hamara',
  'हमारी': 'hamari',
  'हमारे': 'hamare',
  'तुम्हारा': 'tumhara',
  'तुम्हारी': 'tumhari',
  'तुम्हारे': 'tumhare',
  'अपना': 'apna',
  'अपनी': 'apni',
  'अपने': 'apne',
  'अपनों': 'apnon',
  'उसका': 'uska',
  'उसकी': 'uski',
  'उसके': 'uske',
  'इसका': 'iska',
  'इसकी': 'iski',
  'इसके': 'iske',
  'यहाँ': 'yahan',
  'वहाँ': 'wahan',
  'कहाँ': 'kahan',
  'जहाँ': 'jahan',
  'दास्ताँ': 'dastaan',
  'आसमाँ': 'aasmaan',
  'आसमान': 'aasmaan',
  'कारवाँ': 'karwaan',
  'मेहरबाँ': 'meherbaan',
  'ज़ुबाँ': 'zubaan',
  'जुबाँ': 'zubaan',
  'ज़ुबान': 'zubaan',
  'इम्तिहाँ': 'imtihaan',
  'निशाँ': 'nishaan',
  'धुआँ': 'dhuaan',
  'समाँ': 'samaa',
  'मोहब्बत': 'mohabbat',
  'मोहब्बतें': 'mohabbatein',
  'इश्क़': 'ishq',
  'इश्क': 'ishq',
  'प्यार': 'pyar',
  'चाहत': 'chahat',
  'चाहतें': 'chahatein',
  'दिल': 'dil',
  'दिलों': 'dilon',
  'धड़कन': 'dhadkan',
  'धड़कनें': 'dhadkanein',
  'धड़कनों': 'dhadkanon',
  'रूह': 'rooh',
  'साँस': 'saans',
  'साँसें': 'saansein',
  'साँसों': 'saanson',
  'आँख': 'aankh',
  'आँखें': 'aankhein',
  'आँखों': 'aankhon',
  'आँसू': 'aansoo',
  'आँसुओं': 'aansuon',
  'अश्क': 'ashk',
  'अश्क़': 'ashq',
  'ज़िंदगी': 'zindagi',
  'जिंदगी': 'zindagi',
  'जीवन': 'jeevan',
  'ख़ुशी': 'khushi',
  'खुशी': 'khushi',
  'ख़ुशियाँ': 'khushiyan',
  'खुशियाँ': 'khushiyan',
  'ख़ुशियों': 'khushiyon',
  'खुशियों': 'khushiyon',
  'ग़म': 'gham',
  'गम': 'gham',
  'ग़मों': 'ghamon',
  'दर्द': 'dard',
  'ज़ख़्म': 'zakhm',
  'जख्म': 'zakhm',
  'ज़ख़्मों': 'zakhmon',
  'तन्हा': 'tanha',
  'तन्हाई': 'tanhai',
  'तन्हाइयों': 'tanhaiyon',
  'अकेला': 'akela',
  'अकेले': 'akele',
  'अकेलापन': 'akelapan',
  'जुदा': 'juda',
  'जुदाई': 'judai',
  'बेवफ़ा': 'bewafa',
  'बेवफा': 'bewafa',
  'बेवफ़ाई': 'bewafai',
  'वफ़ा': 'wafa',
  'वफा': 'wafa',
  'धोखा': 'dhokha',
  'फरेब': 'fareb',
  'फ़रेब': 'fareb',
  'याद': 'yaad',
  'यादें': 'yaadein',
  'यादों': 'yaadon',
  'इंतज़ार': 'intezaar',
  'इंतजार': 'intezaar',
  'ख़्वाब': 'khwab',
  'ख्वाब': 'khwab',
  'ख़्वाबों': 'khwabon',
  'ख्वाबों': 'khwabon',
  'सपना': 'sapna',
  'सपने': 'sapne',
  'सपनों': 'sapnon',
  'मुस्कान': 'muskaan',
  'मुस्कुराहट': 'muskurahat',
  'मुस्कुराना': 'muskurana',
  'हँसी': 'hansi',
  'हँसना': 'hansna',
  'चेहरा': 'chehra',
  'चेहरे': 'chehre',
  'निगाह': 'nigaah',
  'निगाहें': 'nigahein',
  'निगाहों': 'nigahon',
  'नज़र': 'nazar',
  'नज़रें': 'nazrein',
  'नज़रों': 'nazron',
  'पलकें': 'palkein',
  'पलकों': 'palkon',
  'लब': 'lab',
  'लबों': 'labon',
  'होंठ': 'honth',
  'होंठों': 'honthon',
  'बात': 'baat',
  'बातें': 'baatein',
  'बातों': 'baaton',
  'राह': 'raah',
  'राहें': 'raahein',
  'राहों': 'raahon',
  'मंज़िल': 'manzil',
  'मंज़िलें': 'manzilein',
  'सफ़र': 'safar',
  'सफर': 'safar',
  'रास्ता': 'rasta',
  'रास्ते': 'raste',
  'रास्तों': 'raston',
  'सुबह': 'subah',
  'शाम': 'shaam',
  'रात': 'raat',
  'रातें': 'raatein',
  'रातों': 'raaton',
  'सवेरा': 'savera',
  'सूरज': 'suraj',
  'किरण': 'kiran',
  'किरणें': 'kiranein',
  'चाँद': 'chaand',
  'चाँदनी': 'chandni',
  'सितारा': 'sitara',
  'सितारे': 'sitaare',
  'सितारों': 'sitaaron',
  'तारे': 'taare',
  'तारों': 'taaron',
  'बारिश': 'baarish',
  'बूँद': 'boond',
  'बूँदें': 'boondein',
  'हवा': 'hawa',
  'हवाएँ': 'hawayein',
  'हवाओं': 'hawaon',
  'फ़िज़ा': 'fiza',
  'मौसम': 'mausam',
  'दोस्त': 'dost',
  'दोस्तों': 'doston',
  'दोस्ती': 'dosti',
  'यार': 'yaar',
  'यारों': 'yaaron',
  'यारी': 'yaari',
  'माँ': 'maa',
  'पापा': 'papa',
  'पिता': 'pita',
  'वालिद': 'waalid',
  'भाई': 'bhai',
  'बहन': 'behen',
  'बहना': 'behna',
  'परिवार': 'parivaar',
  'घर': 'ghar',
  'आँगन': 'aangan',
  'दुआ': 'dua',
  'दुआएँ': 'duayein',
  'दुआओं': 'duaon',
  'नसीब': 'naseeb',
  'क़िस्मत': 'kismat',
  'किस्मत': 'kismat',
  'तक़दीर': 'taqdeer',
  'तकदीर': 'taqdeer',
  'भाग्य': 'bhagya',
  'मुक़द्दर': 'muqaddar',
  'वक्त': 'waqt',
  'वक़्त': 'waqt',
  'लम्हा': 'lamha',
  'लम्हे': 'lamhe',
  'लम्हों': 'lamhon',
  'पल': 'pal',
  'पलों': 'palon',
  'सुकून': 'sukoon',
  'चैन': 'chain',
  'ख़ामोश': 'khamosh',
  'खामोश': 'khamosh',
  'ख़ामोशी': 'khamoshi',
  'खामोशी': 'khamoshi',
  'ख़ामोशियाँ': 'khamoshiyan',
  'हौसला': 'hausla',
  'हौसले': 'hausle',
  'हिम्मत': 'himmat',
  'उड़ान': 'udaan',
  'उम्मीद': 'ummeed',
  'उम्मीदें': 'ummeedein',
  'भरोसा': 'bharosa',
  'यकीन': 'yakeen',
  'यक़ीन': 'yakeen',
  'ग़ुरूर': 'guroor',
  'गुरूर': 'guroor',
  'अकड़': 'akad',
  'तेवर': 'tevar',
  'अंदाज़': 'andaaz',
  'रुतबा': 'rutba',
  'शख़्सियत': 'shakhsiyat',
  'पहचान': 'pehchaan',
  'औक़ात': 'aukaat',
  'माफ़': 'maaf',
  'माफ़ी': 'maafi',
  'ख़ता': 'khata',
  'ग़लती': 'galti',
  'गलती': 'galti',
  'नाराज़': 'naraaz',
  'नाराज़गी': 'naraazgi',
  'रूठना': 'roothna',
  'रूठे': 'roothe',
  'मनाना': 'manana',
  'गुस्सा': 'gussa',
  'मतलबी': 'matlabi',
  'दुनिया': 'duniya',
  'ज़माना': 'zamana',
  'ज़माने': 'zamane',
  'लोग': 'log',
  'लोगों': 'logon',
  'जन्मदिन': 'janamdin',
  'मुबारक': 'mubarak',
  'तोहफ़ा': 'tohfa',
  'कोई': 'koi',
  'कुछ': 'kuch',
  'सब': 'sab',
  'सबको': 'sabko',
  'हर': 'har',
  'बस': 'bas',
  'अब': 'ab',
  'जब': 'jab',
  'तब': 'tab',
  'कब': 'kab',
  'कभी': 'kabhi',
  'सदा': 'sada',
  'हमेशा': 'hamesha',
  'फिर': 'phir',
  'बिन': 'bin',
  'बिना': 'bina',
  'संग': 'sang',
  'साथ': 'saath',
  'पास': 'paas',
  'दूर': 'door',
  'दूरी': 'doori',
  'दूरियाँ': 'dooriyan',
  'फ़ासला': 'faasla',
  'फ़ासले': 'faasle',
  'यूँ': 'yun',
  'क्यों': 'kyun',
  'कैसे': 'kaise',
  'जैसे': 'jaise',
  'वैसे': 'waise',
  'ऐसे': 'aise',
  'सिर्फ़': 'sirf',
  'सिर्फ': 'sirf',
  'ख़ुद': 'khud',
  'खुद': 'khud',
  'अक्सर': 'aksar',
  'शायद': 'shayad',
  'मगर': 'magar',
  'लेकिन': 'lekin',
  'और': 'aur',
  'या': 'ya',
  'कि': 'ki',
  'जो': 'jo',
  'वो': 'woh',
  'वह': 'woh',
  'ये': 'yeh',
  'यह': 'yeh',
  'इस': 'is',
  'उस': 'us',
  'इन': 'in',
  'उन': 'un',
  'हम': 'hum',
  'तुम': 'tum',
  'तू': 'tu',
  'आप': 'aap',
  'आपका': 'aapka',
  'आपकी': 'aapki',
  'आपके': 'aapke',
  'आपको': 'aapko',
  'मुझे': 'mujhe',
  'मुझसे': 'mujhse',
  'मुझको': 'mujhko',
  'तुझे': 'tujhe',
  'तुझसे': 'tujhse',
  'तुझको': 'tujhko',
  'तुमसे': 'tumse',
  'तुमको': 'tumko',
  'हमें': 'humein',
  'हमसे': 'humse',
  'तुम्हें': 'tumhein',
  'उसे': 'use',
  'उससे': 'usse',
  'जिसे': 'jise',
  'जिससे': 'jisse',
  'किसे': 'kise',
  'किसी': 'kisi',
  'रब': 'rab',
  'ख़ुदा': 'khuda',
  'खुदा': 'khuda',
  'ईश्वर': 'ishwar',
  'अल्लाह': 'allah',
  'जज़्बात': 'jazbaat',
  'जज़्बातों': 'jazbaaton',
  'एहसास': 'ehsaas',
  'कहानी': 'kahani',
  'किस्सा': 'kissa',
  'क़िस्सा': 'kissa',
  'किताब': 'kitaab',
  'पन्नों': 'pannon',
  'लफ़्ज़': 'lafz',
  'लफ़्ज़ों': 'lafzon',
  'अल्फ़ाज़': 'alfaaz',
  'शायरी': 'shayari',
  'ग़ज़ल': 'ghazal',
  'नग़मा': 'nagma',
  'आइना': 'aaina',
  'आईना': 'aaina',
  'तस्वीर': 'tasveer',
  'साया': 'saaya',
  'परछाई': 'parchhai',
  'आँचल': 'aanchal',
  'कंधा': 'kandha',
  'कंधे': 'kandhe',
  'हाथ': 'haath',
  'हाथों': 'haathon',
  'क़दम': 'kadam',
  'कदम': 'kadam',
  'क़दमों': 'kadmon',
  'चुटकुले': 'chutkule',
  'मज़ेदार': 'mazedaar',
  'हँसते': 'hanste',
  'शरारत': 'shararat',
  'चाय': 'chai',
  'समोसे': 'samose'
};

const CONSONANTS: Record<string, string> = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ng',
  'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ञ': 'ny',
  'ट': 't', 'ठ': 'th', 'ड': 'd', 'ढ': 'dh', 'ण': 'n',
  'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm',
  'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'ळ': 'l',
  'श': 'sh', 'ष': 'sh', 'स': 's', 'ह': 'h',
  'क़': 'q', 'ख़': 'kh', 'ग़': 'gh', 'ज़': 'z', 'फ़': 'f', 'ड़': 'd', 'ढ़': 'dh'
};

const INDEPENDENT_VOWELS: Record<string, string> = {
  'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo',
  'ऋ': 'ri', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au', 'ऑ': 'o'
};

const MATRAS: Record<string, string> = {
  'ा': 'a', 'ि': 'i', 'ी': 'i', 'ु': 'u', 'ू': 'oo',
  'ृ': 'ri', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ॉ': 'o'
};

function transliterateDevanagariWord(rawWord: string): string {
  // Separate leading/trailing punctuation
  const match = rawWord.match(/^([^\p{L}\p{M}0-9०-९]*)([\p{L}\p{M}0-9०-९-]+)([^\p{L}\p{M}0-9०-९]*)$/u);
  if (!match) return rawWord;

  const [, leadPunct, core, trailPunct] = match;
  const cleanPunct = trailPunct.replace(/।/g, '.');

  if (core.includes('-')) {
    const parts = core.split('-').map((p) => transliterateDevanagariWord(p));
    return `${leadPunct}${parts.join('-')}${cleanPunct}`;
  }

  if (HINGLISH_LEXICON[core]) {
    return `${leadPunct}${HINGLISH_LEXICON[core]}${cleanPunct}`;
  }

  // Normalize nukta combinations into composed pairs if split
  const chars: string[] = [];
  for (let i = 0; i < core.length; i++) {
    const ch = core[i];
    const next = core[i + 1];
    if (next === '़') {
      chars.push(ch + next);
      i++;
    } else {
      chars.push(ch);
    }
  }

  let out = '';
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    const next = chars[i + 1];

    if (ch >= '०' && ch <= '९') {
      out += String(ch.charCodeAt(0) - '०'.charCodeAt(0));
      continue;
    }

    if (INDEPENDENT_VOWELS[ch] !== undefined) {
      out += INDEPENDENT_VOWELS[ch];
      continue;
    }

    if (ch === 'ं' || ch === 'ँ') {
      out += 'n';
      continue;
    }

    if (ch === 'ः') {
      out += 'h';
      continue;
    }

    if (ch === '्') {
      continue;
    }

    if (MATRAS[ch] !== undefined) {
      out += MATRAS[ch];
      continue;
    }

    if (CONSONANTS[ch] !== undefined) {
      const base = CONSONANTS[ch];
      if (next === '्') {
        out += base;
        i++; // consume virama
      } else if (next !== undefined && MATRAS[next] !== undefined) {
        // Use 'aa' internally if followed by another consonant, 'a' at word end
        const matra = next === 'ा' && i + 2 < chars.length ? 'aa' : MATRAS[next];
        out += base + matra;
        i++; // consume matra
      } else if (i === chars.length - 1) {
        // Word-final inherent schwa deletion (e.g. कमल -> kamal, नयन -> nayan)
        out += base;
      } else {
        out += base + 'a';
      }
      continue;
    }

    out += ch;
  }

  // Clean common suffix patterns (e.g., eं -> ein, oं -> on)
  out = out
    .replace(/en$/i, 'ein')
    .replace(/aan$/i, 'aan');

  return `${leadPunct}${out}${cleanPunct}`;
}

export function hindiLineToHinglish(line: string): string {
  const words = line.trim().split(/\s+/).map(transliterateDevanagariWord);
  if (words.length === 0) return '';
  const joined = words.join(' ');
  return joined.replace(/^([^a-zA-Z]*)([a-z])/, (_, p1, p2) => `${p1}${p2.toUpperCase()}`);
}

const READER_NAMES = [
  'आरव शर्मा', 'प्रिया वर्मा', 'रोहित राजपूत', 'अंजलि सिंह',
  'कबीर मेहरा', 'नेहा गुप्ता', 'आदित्य मिश्रा', 'साक्षी तिवारी',
  'विवेक यादव', 'काव्या जोशी', 'राहुल चौहान', 'पूजा अग्रवाल',
  'अमन सक्सेना', 'दिव्या पांडे', 'हर्षित श्रीवास्तव', 'निधि रावत'
];

const READER_PRAISE = [
  'दिल की गहराइयों को छू लेने वाली बेहद खूबसूरत शायरी! 💖',
  'एक-एक लफ़्ज़ में सच्चा एहसास झलकता है, लाजवाब! ✨',
  'सीधा रूह तक उतर गई ये शायरी, बहुत ही शानदार! 🌸',
  'स्टेटस पर लगाने के लिए एकदम परफेक्ट पंक्तियाँ! 💗',
  'जितनी बार पढ़ो उतना ही सुकून मिलता है, बेहतरीन! 🙏',
  'ज़िंदगी और जज़्बातों की बिल्कुल सच्ची तस्वीर! 🌟',
  'बहुत ही प्यारे अल्फ़ाज़, पढ़कर दिल खुश हो गया! 😊',
  'दिल की बात कहने का इससे सुंदर अंदाज़ नहीं हो सकता! 🌹'
];

const FUNNY_READER_PRAISE = [
  'पढ़कर हँसी ही नहीं रुक रही, एकदम मज़ेदार चुटकुला शायरी! 😂',
  'बिल्कुल सच लिखा है भाई, दोस्तों के ग्रुप में भेजने लायक! 🤣',
  'हर लाइन पर ज़ोरदार मुस्कान आ गई, सुपर कॉमेडी शायरी! 😄',
  'स्टेटस पर लगाते ही सब हँस पड़े, लाजवाब प्रैंक अंदाज़! 😆'
];

function extractTitleFromHindi(firstLine: string): string {
  const cleaned = firstLine
    .replace(/[।,!?;:"'“”‘’—–-]+/g, ' ')
    .trim();
  const words = cleaned.split(/\s+/).slice(0, 4);
  return words.join(' ');
}

export function buildCategoryShayaris(
  config: CategoryBuildConfig,
  poems: readonly RawPoemTuple[]
): Shayari[] {
  return poems.map(([hindiBlock, englishBlock], idx) => {
    const num = config.startIndex + idx;
    const id = `${config.idPrefix}-${num}`;
    const linesHindi = hindiBlock
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const linesEnglish = englishBlock
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    const linesHinglish = linesHindi.map(hindiLineToHinglish);

    const isOfficial = idx === 0;
    const author = isOfficial
      ? 'ZQ-FEELINGS 👑 Official'
      : idx % 2 === 1
      ? 'ZQ-FEELINGS 💗'
      : 'दिल की आवाज़ (ZQ)';

    const commentAuthor = READER_NAMES[(num + idx * 3) % READER_NAMES.length];
    const praisePool = config.category === 'funny' ? FUNNY_READER_PRAISE : READER_PRAISE;
    const commentText = `${praisePool[(num + idx * 5) % praisePool.length]} ${config.categoryIcon}`;

    return {
      id,
      category: config.category,
      categoryType: 'feelings',
      categoryName: config.categoryName,
      categoryIcon: config.categoryIcon,
      title: extractTitleFromHindi(linesHindi[0] || config.categoryName),
      lines: linesHindi,
      linesHindi,
      linesHinglish,
      linesEnglish,
      tags: [...config.tags, 'DilKiAwaaz', 'ZQFeelings'],
      author,
      isOfficial,
      initialLikes: 950 + ((num * 83 + idx * 47) % 1450),
      commentsCount: 1,
      comments: [
        {
          id: `c-${id}-1`,
          userName: commentAuthor,
          text: commentText,
          date: '26 Oct 2026',
          likes: 3 + ((num + idx) % 14)
        }
      ]
    };
  });
}
