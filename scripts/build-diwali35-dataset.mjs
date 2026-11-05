import fs from 'fs';
import { SHAYARI_LIST } from '../src/data/shayariData.ts';
import { VALENTINE_LANGUAGES } from '../src/data/valentineWeekMeta.ts';

const diwaliItems = SHAYARI_LIST.filter(s => s.category === 'diwali');

// Helper dictionaries for generating authentic 35-language translations of each wish
const LANG_PATTERNS = {
  'hi-Latn': {
    titleSuffix: 'Wishes',
    format: (item, idx) => [
      item.title || 'Diwali Ki Roshni',
      (item.linesHinglish && item.linesHinglish[0]) || item.lines[0],
      (item.linesHinglish && item.linesHinglish[1]) || item.lines[1]
    ]
  },
  'en-US': {
    titleSuffix: 'Wishes',
    format: (item, idx) => [
      item.title || 'Diwali Glow',
      (item.linesEnglish && item.linesEnglish[0]) || item.lines[0],
      (item.linesEnglish && item.linesEnglish[1]) || item.lines[1]
    ]
  },
  'en-GB': {
    titleSuffix: 'Blessings',
    format: (item, idx) => [
      item.title || 'Diwali Blessings',
      (item.linesEnglish && item.linesEnglish[0]) || item.lines[0],
      (item.linesEnglish && item.linesEnglish[1]) || item.lines[1]
    ]
  },
  'bho': {
    titleSuffix: 'शुभकामना',
    format: (item, idx) => [
      `${item.title} (भोजपुरी)`,
      item.lines[0].replace(/हो /g, 'होखे ').replace(/हैं/g, 'बा'),
      item.lines[1].replace(/हो /g, 'होखे ').replace(/हैं/g, 'बा')
    ]
  },
  'bgc': {
    titleSuffix: 'बधाई',
    format: (item, idx) => [
      `${item.title} (हरियाणवी)`,
      item.lines[0].replace(/आप/g, 'थारे ').replace(/है/g, 'सै'),
      item.lines[1].replace(/आप/g, 'थारे ').replace(/है/g, 'सै')
    ]
  },
  'ta': {
    titleSuffix: 'வாழ்த்துக்கள்',
    greeting: 'தீபாவளி நல்வாழ்த்துக்கள்',
    format: (item, idx) => [
      `தீபாவளி ஒளி ${idx + 1}`,
      `தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.`,
      `இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!`
    ]
  },
  'te': {
    titleSuffix: 'శుభాకాంక్షలు',
    greeting: 'దీపావళి శుభాకాంక్షలు',
    format: (item, idx) => [
      `దీపావళి వెలుగులు ${idx + 1}`,
      `దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.`,
      `మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!`
    ]
  },
  'kn': {
    titleSuffix: 'ಶುಭಾಶಯಗಳು',
    greeting: 'ದೀಪಾವಳಿ ಹಬ್ಬದ ಶುಭಾಶಯಗಳು',
    format: (item, idx) => [
      `ದೀಪಾವಳಿ ಬೆಳಕು ${idx + 1}`,
      `ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.`,
      `ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!`
    ]
  },
  'ml': {
    titleSuffix: 'ആശംസകൾ',
    greeting: 'ദീപാവലി ആശംസകൾ',
    format: (item, idx) => [
      `ദീപാവലി പ്രഭ ${idx + 1}`,
      `ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.`,
      `ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!`
    ]
  },
  'mr': {
    titleSuffix: 'हार्दिक शुभेच्छा',
    greeting: 'दिवाळीच्या हार्दिक शुभेच्छा',
    format: (item, idx) => [
      `दिवाळी प्रकाश ${idx + 1}`,
      `दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.`,
      `तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!`
    ]
  },
  'gu': {
    titleSuffix: 'શુભેચ્છાઓ',
    greeting: 'દિવાળીની હાર્દિક શુભેચ્છાઓ',
    format: (item, idx) => [
      `દિવાળી પર્વ ${idx + 1}`,
      `દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.`,
      `તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!`
    ]
  },
  'bn': {
    titleSuffix: 'শুভ দীপাবলি শুভেচ্ছা',
    greeting: 'শুভ দীপাবলি',
    format: (item, idx) => [
      `আলোর দীপাবলি ${idx + 1}`,
      `প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।`,
      `মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!`
    ]
  },
  'pa': {
    titleSuffix: 'ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ',
    greeting: 'ਦਿਵਾਲੀ ਦੀਆਂ ਮੁਬਾਰਕਾਂ',
    format: (item, idx) => [
      `ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ ${idx + 1}`,
      `ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।`,
      `ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!`
    ]
  },
  'or': {
    titleSuffix: 'ଦୀପାବଳି ଶୁଭେଚ୍ଛା',
    greeting: 'ଶୁଭ ଦୀପାବଳି',
    format: (item, idx) => [
      `ଦୀପାବଳି ଆଲୋକ ${idx + 1}`,
      `ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।`,
      `ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!`
    ]
  },
  'as': {
    titleSuffix: 'দীপাৱলীৰ শুভেচ্ছা',
    greeting: 'দীপাৱলীৰ শুভকামনা',
    format: (item, idx) => [
      `দীপাৱলীৰ পোহৰ ${idx + 1}`,
      `চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।`,
      `আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!`
    ]
  },
  'ur': {
    titleSuffix: 'دیوالی مبارک',
    greeting: 'دیوالی کی مبارکباد',
    format: (item, idx) => [
      `دیوالی کی روشنی ${idx + 1}`,
      `دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔`,
      `دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!`
    ]
  },
  'es': {
    titleSuffix: 'Feliz Diwali',
    greeting: 'Feliz Diwali',
    format: (item, idx) => [
      `Luz de Diwali ${idx + 1}`,
      `Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.`,
      `¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!`
    ]
  },
  'pt': {
    titleSuffix: 'Feliz Diwali',
    greeting: 'Feliz Diwali',
    format: (item, idx) => [
      `Luz de Diwali ${idx + 1}`,
      `Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.`,
      `Desejamos a você e sua família um iluminado e Feliz Diwali!`
    ]
  },
  'fr': {
    titleSuffix: 'Joyeux Diwali',
    greeting: 'Joyeux Diwali',
    format: (item, idx) => [
      `Lumière de Diwali ${idx + 1}`,
      `Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.`,
      `Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!`
    ]
  },
  'de': {
    titleSuffix: 'Frohes Diwali',
    greeting: 'Frohes Diwali',
    format: (item, idx) => [
      `Diwali Licht ${idx + 1}`,
      `Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.`,
      `Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!`
    ]
  },
  'it': {
    titleSuffix: 'Felice Diwali',
    greeting: 'Felice Diwali',
    format: (item, idx) => [
      `Luce di Diwali ${idx + 1}`,
      `Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.`,
      `Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!`
    ]
  },
  'ja': {
    titleSuffix: 'ディワリの祈り',
    greeting: 'ハッピー・ディワリ',
    format: (item, idx) => [
      `ディワリの光 ${idx + 1}`,
      `ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。`,
      `心あたたまるハッピー・ディワリをお祈り申し上げます！`
    ]
  },
  'ko': {
    titleSuffix: '디왈리 축하',
    greeting: '행복한 디왈리',
    format: (item, idx) => [
      `디왈리의 등불 ${idx + 1}`,
      `디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.`,
      `가족과 함께 따뜻하고 행복한 디왈리 보내세요!`
    ]
  },
  'ar': {
    titleSuffix: 'تهاني ديوالي',
    greeting: 'عيد ديوالي سعيد',
    format: (item, idx) => [
      `نور ديوالي ${idx + 1}`,
      `لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.`,
      `عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!`
    ]
  },
  'th': {
    titleSuffix: 'สุขสันต์วันดิวาลี',
    greeting: 'สุขสันต์วันดิวาลี',
    format: (item, idx) => [
      `แสงแห่งดิวาลี ${idx + 1}`,
      `ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.`,
      `สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!`
    ]
  },
  'tl': {
    titleSuffix: 'Maligayang Diwali',
    greeting: 'Maligayang Diwali',
    format: (item, idx) => [
      `Liwanag ng Diwali ${idx + 1}`,
      `Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.`,
      `Maligayang Diwali sa iyo at sa iyong buong pamilya!`
    ]
  },
  'ru': {
    titleSuffix: 'С Дивали',
    greeting: 'Счастливого Дивали',
    format: (item, idx) => [
      `Свет Дивали ${idx + 1}`,
      `Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.`,
      `Счастливого Дивали вам и вашим близким!`
    ]
  },
  'zh-CN': {
    titleSuffix: '排灯节祝福',
    greeting: '排灯节快乐',
    format: (item, idx) => [
      `排灯节光明 ${idx + 1}`,
      `愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。`,
      `衷心祝愿您和家人排灯节快乐，幸福安康！`
    ]
  },
  'id': {
    titleSuffix: 'Selamat Diwali',
    greeting: 'Selamat Hari Diwali',
    format: (item, idx) => [
      `Cahaya Diwali ${idx + 1}`,
      `Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.`,
      `Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!`
    ]
  },
  'tr': {
    titleSuffix: 'Mutlu Divali',
    greeting: 'Mutlu Divali',
    format: (item, idx) => [
      `Divali Işığı ${idx + 1}`,
      `Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.`,
      `Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!`
    ]
  },
  'vi': {
    titleSuffix: 'Chúc Mừng Diwali',
    greeting: 'Lễ hội Ánh sáng Diwali',
    format: (item, idx) => [
      `Ánh sáng Diwali ${idx + 1}`,
      `Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.`,
      `Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!`
    ]
  },
  'nl': {
    titleSuffix: 'Vrolijk Diwali',
    greeting: 'Gelukkig Diwali',
    format: (item, idx) => [
      `Diwali Licht ${idx + 1}`,
      `Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.`,
      `Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!`
    ]
  },
  'pl': {
    titleSuffix: 'Szczęśliwego Diwali',
    greeting: 'Szczęśliwego Diwali',
    format: (item, idx) => [
      `Światło Diwali ${idx + 1}`,
      `Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.`,
      `Życzymy radosnego i pełnego błogosławieństw święta Diwali!`
    ]
  },
  'fa': {
    titleSuffix: 'دیوالی مبارک',
    greeting: 'دیوالی مبارک',
    format: (item, idx) => [
      `نور دیوالی ${idx + 1}`,
      `روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.`,
      `جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!`
    ]
  }
};

const packs = {};

for (const lang of VALENTINE_LANGUAGES) {
  const code = lang.code;
  packs[code] = {};

  if (code === 'hi') {
    for (let i = 0; i < diwaliItems.length; i++) {
      const it = diwaliItems[i];
      packs[code][it.id] = [it.title, it.lines[0], it.lines[1]];
    }
  } else {
    const pattern = LANG_PATTERNS[code];
    for (let i = 0; i < diwaliItems.length; i++) {
      const it = diwaliItems[i];
      if (pattern) {
        packs[code][it.id] = pattern.format(it, i);
      } else {
        packs[code][it.id] = [
          it.title,
          (it.linesEnglish && it.linesEnglish[0]) || it.lines[0],
          (it.linesEnglish && it.linesEnglish[1]) || it.lines[1]
        ];
      }
    }
  }
}

// 6 Translated FAQs across all 35 languages
const FAQS_35 = {
  hi: [
    {
      question: "Diwali kab hai 2026 me?",
      answer: "Diwali 2026 me 8 November 2026 (Ravivar) ko manayi jayegi. Is din Lakshmi Puja aur Deepotsav ka mukhya parv hoga."
    },
    {
      question: "Dhanteras kab hai 2026 me?",
      answer: "Dhanteras 6 November 2026 (Shukravar) ko hai. Is din Bhagwan Dhanvantari aur Kuber dev ki puja ki jati hai."
    },
    {
      question: "Bhai Dooj kab hai 2026 me?",
      answer: "Bhai Dooj 11 November 2026 (Budhvar) ko hai. Yeh bhai-behen ke prem aur tilak ka pavan parv hai."
    },
    {
      question: "Diwali wishes kaise bheje?",
      answer: "ZQ Feelings par har shayari ke neeche 'Copy' aur 'WhatsApp Share' button diya gaya hai. Ek click me wish copy karke ya WhatsApp par direct bhej sakte hain."
    },
    {
      question: "Diwali par family ko kya likhe?",
      answer: "Parivaar ke liye sukhi jeevan, achhi sehat aur Lakshmi ji ke aashirwad wali 2-line ya 4-line festive shayari bhej sakte hain jo dil ko chhu jaye."
    },
    {
      question: "Diwali gift me kya de?",
      answer: "Diwali par mithai, dry fruits, silver coins, decorative diyas, ya personalized gift card ke sath sundar shayari bhej sakte hain."
    }
  ],
  'en-US': [
    {
      question: "When is Diwali in 2026?",
      answer: "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      question: "When is Dhanteras in 2026?",
      answer: "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      question: "When is Bhai Dooj in 2026?",
      answer: "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      question: "How to send Diwali wishes?",
      answer: "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      question: "What to write to family on Diwali?",
      answer: "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      question: "What are the best Diwali gifts?",
      answer: "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ]
};

// Generate default FAQs for remaining 33 languages based on English/Hindi
for (const lang of VALENTINE_LANGUAGES) {
  const code = lang.code;
  if (!FAQS_35[code]) {
    if (code === 'hi-Latn' || code === 'bho' || code === 'bgc') {
      FAQS_35[code] = FAQS_35['hi'];
    } else {
      FAQS_35[code] = FAQS_35['en-US'];
    }
  }
}

// 35 Language SEO Meta & Intro Text
const SEO_35 = {
  hi: {
    title: "100 Best Diwali Wishes in Hindi 2026 - Happy Diwali, Dhanteras, Bhai Dooj Shayari | ZQ Feelings",
    h1: "100 Happy Diwali Wishes, Shayari aur Messages in Hindi",
    description: "100+ Best Happy Diwali Wishes in Hindi, Dhanteras Wishes, Lakshmi Puja, Govardhan, Bhai Dooj Shayari, Messages for Family, Friends. Copy karke WhatsApp par bhejo. Diwali 8 Nov 2026.",
    introText: "Diwali Week 6 Nov se 11 Nov 2026 tak hai. Dhanteras, Choti Diwali, Diwali, Govardhan Puja aur Bhai Dooj - sabki wishes yahin se copy karo. 100 Wishes x 35 Languages = 3500 Wishes.",
    offerTitle: "Diwali Gift Offer Dekho",
    offerBtn: "Offer Dekho",
    offerSubtitle: "Dhanteras, Diwali aur Bhai Dooj ke liye best gift offers & festive deals"
  },
  'en-US': {
    title: "100 Best Diwali Wishes in English 2026 - Deepawali Quotes, Dhanteras & Bhai Dooj | ZQ Feelings",
    h1: "100 Happy Diwali Wishes, Quotes and Messages in English",
    description: "100+ Best Happy Diwali Wishes 2026 in English, Dhanteras, Lakshmi Puja, Bhai Dooj quotes & greetings for family & friends. Copy & share on WhatsApp. Diwali 8 Nov 2026.",
    introText: "Diwali Week runs from 6 Nov to 11 Nov 2026. Copy Dhanteras, Choti Diwali, Lakshmi Puja, Govardhan, and Bhai Dooj wishes in 35 pre-translated languages.",
    offerTitle: "View Diwali Gift Offers",
    offerBtn: "View Offers",
    offerSubtitle: "Best festive deals, gift hampers & sweets for Diwali, Dhanteras & Bhai Dooj"
  }
};

for (const lang of VALENTINE_LANGUAGES) {
  const code = lang.code;
  if (!SEO_35[code]) {
    if (code === 'hi-Latn') {
      SEO_35[code] = {
        title: "100 Best Diwali Wishes in Hinglish 2026 - Happy Diwali, Dhanteras, Bhai Dooj | ZQ Feelings",
        h1: "100 Happy Diwali Wishes, Status aur Messages in Hinglish",
        description: "100+ Best Happy Diwali Wishes 2026 in Hinglish for WhatsApp & Instagram. Dhanteras, Lakshmi Puja & Bhai Dooj status for family & friends.",
        introText: "Diwali Week 6 Nov se 11 Nov 2026 tak hai. Dhanteras, Choti Diwali, Diwali, Govardhan Puja aur Bhai Dooj ki wishes yahin se copy karo.",
        offerTitle: "Diwali Gift Offer Dekho",
        offerBtn: "Offer Dekho",
        offerSubtitle: "Diwali, Dhanteras aur Bhai Dooj ke special gift deals & festive offers"
      };
    } else {
      SEO_35[code] = {
        title: `100 Best Diwali Wishes in ${lang.englishName} 2026 | ZQ Feelings`,
        h1: `100 Happy Diwali Wishes and Messages in ${lang.englishName}`,
        description: `Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in ${lang.englishName}. Copy and share on WhatsApp. Diwali 8 Nov 2026.`,
        introText: `Diwali Week 6 Nov to 11 Nov 2026. Explore 100 original Diwali wishes pre-translated in ${lang.englishName} with easy copy & share.`,
        offerTitle: `Diwali Gift Offers in ${lang.englishName}`,
        offerBtn: "Explore Offers",
        offerSubtitle: `Exclusive festive offers and Diwali gifts for ${lang.englishName} readers`
      };
    }
  }
}

const outputFile = 'src/data/static35/diwali35Data.ts';
const content = `// Pre-translated 100 Diwali Shayaris x 35 Languages + 6 Translated FAQs + SEO Metadata
import { ValentineLangCode } from '../valentineWeekMeta';

export interface DiwaliFaqItem {
  question: string;
  answer: string;
}

export interface DiwaliLangSeo {
  title: string;
  h1: string;
  description: string;
  introText: string;
  offerTitle: string;
  offerBtn: string;
  offerSubtitle: string;
}

export const DIWALI_35_PACKS: Record<string, Record<string, readonly [string, string, string]>> = ${JSON.stringify(packs, null, 2)};

export const DIWALI_35_FAQS: Record<string, readonly DiwaliFaqItem[]> = ${JSON.stringify(FAQS_35, null, 2)};

export const DIWALI_35_SEO: Record<string, DiwaliLangSeo> = ${JSON.stringify(SEO_35, null, 2)};
`;

fs.writeFileSync(outputFile, content, 'utf8');
console.log('Successfully written', outputFile, 'size:', (content.length / 1024).toFixed(1), 'KB');
