import { RELIGIOUS_CATEGORIES } from './religiousMeta';
import { FAMILY_RITUALS_CATEGORIES, FAMILY_RITUALS_MASTER } from './familyRitualsMeta';
import { MaafiSubCategory } from '../../types/shayari';

export const MAAFI_SUBCATEGORIES_META: ReadonlyArray<{
  id: MaafiSubCategory;
  name: string;
  englishTitle: string;
  hindiTitle: string;
  icon: string;
  count: number;
  slug: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
}> = [
  {
    id: 'maa-se-maafi',
    name: 'Maa Se Maafi (माँ से माफ़ी)',
    englishTitle: 'Maa Se Maafi',
    hindiTitle: 'माँ से माफ़ी',
    icon: '🤱',
    count: 25,
    slug: '/feelings/maa-se-maafi-shayari',
    subtitle: 'नाराज़ माँ को मनाने और ममता के चरणों में क्षमा माँगने की भावुक शायरी',
    seoTitle: 'Maa Se Maafi (माँ से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Emotional Maa Se Maafi Shayari in Hindi (नाराज़ माँ को मनाने की भावुक माफ़ी शायरी) — 25 heartfelt apology poems in 35 languages & stylish fonts.'
  },
  {
    id: 'papa-se-maafi',
    name: 'Papa Se Maafi (पापा से माफ़ी)',
    englishTitle: 'Papa Se Maafi',
    hindiTitle: 'पापा से माफ़ी',
    icon: '👨‍👦',
    count: 25,
    slug: '/feelings/papa-se-maafi-shayari',
    subtitle: 'पापा से हुई गलती पर सम्मान और पश्चाताप से भरी दिल छू लेने वाली माफ़ी शायरी',
    seoTitle: 'Papa Se Maafi (पापा से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Respectful Papa Se Maafi Shayari in Hindi (पापा से हुई गलती पर क्षमा माँगने की शायरी) — 25 sincere apology lines in 35 languages & stylish fonts.'
  },
  {
    id: 'biwi-se-maafi',
    name: 'Biwi Se Maafi (बीवी से माफ़ी)',
    englishTitle: 'Biwi Se Maafi',
    hindiTitle: 'बीवी से माफ़ी',
    icon: '🌹',
    count: 25,
    slug: '/feelings/biwi-se-maafi-shayari',
    subtitle: 'रूठी बीवी का गुस्सा पिघलाने और प्यार से मनाने वाली रोमांटिक सॉरी शायरी',
    seoTitle: 'Biwi Se Maafi (बीवी से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Romantic Biwi Se Maafi Shayari in Hindi (रूठी पत्नी का गुस्सा पिघलाने वाली सॉरी शायरी) — 25 sweet wife apology wishes in 35 languages.'
  },
  {
    id: 'husband-se-maafi',
    name: 'Husband Se Maafi (पति से माफ़ी)',
    englishTitle: 'Husband Se Maafi',
    hindiTitle: 'पति से माफ़ी',
    icon: '💞',
    count: 25,
    slug: '/feelings/husband-se-maafi-shayari',
    subtitle: 'नाराज़ पतिदेव को प्यार से मनाने और मुस्कान लौटाने वाली मीठी सॉरी शायरी',
    seoTitle: 'Husband Se Maafi (पति से माफ़ी) Shayari | ZQ FEELINGS',
    seoDescription:
      'Sweet Husband Se Maafi Shayari in Hindi (नाराज़ पति को प्यार से मनाने वाली सॉरी शायरी) — 25 loving apology status lines in 35 languages.'
  }
];

export const FESTIVAL_CATEGORIES = [
  {
    id: 'diwali',
    name: 'Diwali',
    hindiName: 'दीपावली',
    icon: '🪔',
    seoTitle: 'Happy Diwali Shayari in Hindi (दीपावली शायरी) | ZQ Feelings',
    seoDescription:
      'Read 25+ Happy Diwali Shayari in Hindi (दीपावली की हार्दिक शुभकामनाएं) — Diyas, Laxmi Puja & Deepawali wishes with stylish fonts & WhatsApp share.'
  },
  {
    id: 'bhai-dooj',
    name: 'Bhai Dooj',
    hindiName: 'भाई दूज',
    icon: '🌺',
    seoTitle: 'Bhai Dooj Shayari in Hindi (भाई दूज शायरी) | ZQ Feelings',
    seoDescription:
      'Heartfelt Bhai Dooj Shayari in Hindi (भाई दूज शुभकामनाएं) celebrating brother-sister tilak bond with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'chhath-puja',
    name: 'Chhath Puja',
    hindiName: 'छठ पूजा',
    icon: '🌅',
    seoTitle: 'Chhath Puja Shayari in Hindi (छठ पूजा शायरी) | ZQ Feelings',
    seoDescription:
      'Devotional Chhath Puja Shayari in Hindi (जय छठी मैया और सूर्य अर्घ्य शायरी) — 25 auspicious Bihari & Purvanchal Chhath wishes to copy & share.'
  },
  {
    id: 'birthday',
    name: 'Birthday',
    hindiName: 'जन्मदिन',
    icon: '🎂',
    seoTitle: 'Happy Birthday Wishes Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Best Happy Birthday Wishes Shayari in Hindi (जन्मदिन मुबारक शायरी) for friend, brother, sister & lover with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'holi',
    name: 'Holi',
    hindiName: 'होली',
    icon: '🎨',
    seoTitle: 'Happy Holi Shayari in Hindi (होली शायरी) | ZQ Feelings',
    seoDescription:
      'Colorful Happy Holi Shayari in Hindi (रंगों और गुलाल भरी होली शायरी) — festive Bura Na Mano Holi Hai wishes with stylish fonts & WhatsApp share.'
  },
  {
    id: 'eid',
    name: 'Eid',
    hindiName: 'ईद मुबारक',
    icon: '🌙',
    seoTitle: 'Eid Mubarak Shayari in Hindi (ईद मुबारक शायरी) | ZQ Feelings',
    seoDescription:
      'Warm Eid-ul-Fitr & Chand Raat Eid Mubarak Shayari in Hindi & Urdu (ईद मुबारक शायरी) — sweet Eidi, dua & peace wishes to copy & share.'
  },
  {
    id: 'bakrid',
    name: 'Bakrid (Eid al-Adha)',
    hindiName: 'बकरीद',
    icon: '🕌',
    seoTitle: 'Bakrid Mubarak Shayari in Hindi (बकरीद शायरी) | ZQ Feelings',
    seoDescription:
      'Blessed Bakrid & Eid al-Adha Mubarak Shayari in Hindi (बकरीद और कुर्बानी दुआ शायरी) — 25 heartfelt wishes with stylish fonts & WhatsApp share.'
  },
  {
    id: 'new-year',
    name: 'New Year',
    hindiName: 'नया साल',
    icon: '🎉',
    seoTitle: 'New Year Shayari 2026 in Hindi (नया साल) | ZQ Feelings',
    seoDescription:
      'Best New Year Shayari in Hindi (नया साल शायरी • 1 January) — 25 original wishes in 35 languages, 20 stylish fonts & share.'
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    hindiName: 'गणेश चतुर्थी',
    icon: '🐘',
    seoTitle: 'Ganesh Chaturthi Shayari in Hindi (गणपति शायरी) | ZQ Feelings',
    seoDescription:
      'Auspicious Ganesh Chaturthi Shayari in Hindi (गणपति बप्पा मोरया शायरी) — Vinayaka Chaturthi bhakti wishes in 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'gandhi-jayanti',
    name: 'Gandhi Jayanti',
    hindiName: 'गांधी जयंती',
    icon: '🕊️',
    seoTitle: 'Gandhi Jayanti Shayari in Hindi (गांधी जयंती) | ZQ Feelings',
    seoDescription:
      'Inspiring 2 October Gandhi Jayanti Shayari in Hindi (महात्मा गांधी अहिंसा और सत्य शायरी) — patriotic Bapu tribute quotes to copy & share.'
  },
  {
    id: 'independence-day',
    name: '15 August Independence Day',
    hindiName: 'स्वतंत्रता दिवस',
    icon: '🇮🇳',
    seoTitle: '15 August Independence Day Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Patriotic 15 August Independence Day Shayari in Hindi (स्वतंत्रता दिवस देशभक्ति और तिरंगा शायरी) — proud Jai Hind status & wishes to share.'
  },
  {
    id: 'republic-day',
    name: '26 January Republic Day',
    hindiName: 'गणतंत्र दिवस',
    icon: '🎖️',
    seoTitle: '26 January Republic Day Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Proud 26 January Republic Day Shayari in Hindi (गणतंत्र दिवस और संविधान शायरी) — Vande Mataram & Tiranga deshbhakti wishes for WhatsApp.'
  },
  {
    id: 'rakshabandhan',
    name: 'Rakshabandhan',
    hindiName: 'रक्षाबंधन',
    icon: '🧵',
    seoTitle: 'Rakshabandhan Shayari in Hindi (रक्षाबंधन) | ZQ Feelings',
    seoDescription:
      'Loving Rakshabandhan & Rakhi Shayari in Hindi (रक्षाबंधन भाई-बहन के कच्चे धागों की शायरी) — 25 sweet wishes with stylish fonts & share.'
  },
  {
    id: 'janmashtami',
    name: 'Janmashtami',
    hindiName: 'जन्माष्टमी',
    icon: '🦚',
    seoTitle: 'Krishna Janmashtami Shayari in Hindi (जन्माष्टमी) | ZQ',
    seoDescription:
      'Devotional Shree Krishna Janmashtami Shayari in Hindi (राधा-कृष्ण और कान्हा जन्माष्टमी शायरी) — 25 divine bhakti wishes to copy & share.'
  },
  {
    id: 'navratri',
    name: 'Navratri / Durga Puja',
    hindiName: 'नवरात्रि',
    icon: '🔱',
    seoTitle: 'Happy Navratri & Durga Puja Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Divine Navratri & Durga Puja Shayari in Hindi (जय माता दी नवरात्रि और माँ दुर्गा भक्ति शायरी) — 25 shakti wishes with 20 stylish fonts.'
  },
  {
    id: 'dussehra',
    name: 'Dussehra',
    hindiName: 'दशहरा',
    icon: '🏹',
    seoTitle: 'Happy Dussehra Shayari in Hindi (दशहरा शायरी) | ZQ Feelings',
    seoDescription:
      'Victorious Happy Dussehra & Vijayadashami Shayari in Hindi (बुराई पर अच्छाई की जीत दशहरा शायरी) — Shri Ram wishes with stylish fonts & share.'
  },
  {
    id: 'christmas',
    name: 'Christmas',
    hindiName: 'क्रिसमस',
    icon: '🎄',
    seoTitle: 'Christmas Day Shayari in Hindi (क्रिसमस) | ZQ Feelings',
    seoDescription:
      'Best Christmas Day Shayari in Hindi (क्रिसमस डे शायरी • 25 December) — 25 original wishes in 35 languages, 20 stylish fonts & share.'
  },
  {
    id: 'lohri',
    name: 'Lohri',
    hindiName: 'लोहड़ी',
    icon: '🔥',
    seoTitle: 'Happy Lohri Shayari in Hindi (लोहड़ी शायरी) | ZQ Feelings',
    seoDescription:
      'Warm Happy Lohri Shayari in Hindi (लोहड़ी की लख-लख बधाइयाँ, रेवड़ी और मूंगफली शायरी) — festive winter bonfire wishes to copy & share.'
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti',
    hindiName: 'मकर संक्रांति',
    icon: '🪁',
    seoTitle: 'Makar Sankranti Shayari in Hindi (मकर संक्रांति) | ZQ',
    seoDescription:
      'Sweet Til-Gud Makar Sankranti & Uttarayan Shayari in Hindi (तिल-गुड़ और पतंग मकर संक्रांति शायरी) — 25 harvest wishes for WhatsApp share.'
  },
  {
    id: 'karva-chauth',
    name: 'Karva Chauth',
    hindiName: 'करवा चौथ',
    icon: '🌕',
    seoTitle: 'Karva Chauth Shayari in Hindi (करवा चौथ शायरी) | ZQ Feelings',
    seoDescription:
      'Romantic Karva Chauth Shayari in Hindi (करवा चौथ चाँद और अखंड सुहाग शायरी) for husband & wife with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'eid-milad',
    name: 'Eid Milad un Nabi',
    hindiName: 'ईद मिलाद',
    icon: '✨',
    seoTitle: 'Eid Milad un Nabi Shayari in Hindi (ईद मिलाद) | ZQ Feelings',
    seoDescription:
      'Peaceful Eid Milad-un-Nabi Mubarak Shayari in Hindi & Urdu (जश्न-ए-ईद मिलाद-उन-नबी दुआ और नूर शायरी) — 25 spiritual wishes to copy & share.'
  },
  {
    id: 'mahashivratri',
    name: 'Mahashivratri',
    hindiName: 'महाशिवरात्रि',
    icon: '🕉️',
    seoTitle: 'Mahashivratri Shayari in Hindi (महाशिवरात्रि) | ZQ Feelings',
    seoDescription:
      'Divine Har Har Mahadev & Mahashivratri Shayari in Hindi (भोलेनाथ और महादेव शिवरात्रि भक्ति शायरी) — 25 Bholenath status lines to share.'
  },
  {
    id: 'ram-navami',
    name: 'Ram Navami',
    hindiName: 'राम नवमी',
    icon: '🚩',
    seoTitle: 'Ram Navami Shayari in Hindi (राम नवमी शायरी) | ZQ Feelings',
    seoDescription:
      'Sacred Jai Shri Ram & Ram Navami Shayari in Hindi (मर्यादा पुरुषोत्तम श्री राम नवमी भक्ति शायरी) — 25 auspicious wishes in stylish fonts.'
  },
  {
    id: 'onam',
    name: 'Onam',
    hindiName: 'ओणम',
    icon: '🛶',
    seoTitle: 'Happy Onam Wishes Shayari in Hindi (ओणम शायरी) | ZQ Feelings',
    seoDescription:
      'Joyful Happy Onam Shayari in Hindi (ओणम पर्व, पूक्कलम और खुशहाली की शुभकामनाएं) — 25 Kerala harvest festival wishes to copy & share.'
  },
  {
    id: 'pongal',
    name: 'Pongal',
    hindiName: 'पोंगल',
    icon: '🌾',
    seoTitle: 'Happy Pongal Shayari in Hindi (पोंगल शायरी) | ZQ Feelings',
    seoDescription:
      'Auspicious Happy Pongal Shayari in Hindi (पोंगल पर्व, सूर्य वंदना और समृद्धि की शायरी) — 25 harvest celebration wishes for WhatsApp share.'
  },
  {
    id: 'baisakhi',
    name: 'Baisakhi',
    hindiName: 'बैसाखी',
    icon: '🥁',
    seoTitle: 'Happy Baisakhi Shayari in Hindi (बैसाखी शायरी) | ZQ Feelings',
    seoDescription:
      'Vibrant Happy Baisakhi Shayari in Hindi (बैसाखी की लख-लख बधाइयाँ, भंगड़ा और नई फसल शायरी) — 25 festive wishes with 20 stylish fonts.'
  },
  {
    id: 'guru-nanak-jayanti',
    name: 'Guru Nanak Jayanti',
    hindiName: 'गुरु नानक जयंती',
    icon: 'ੴ',
    seoTitle: 'Guru Nanak Jayanti Gurpurab Shayari in Hindi | ZQ Feelings',
    seoDescription:
      'Sacred Guru Nanak Jayanti & Gurpurab Shayari in Hindi (धन गुरु नानक देव जी प्रकाश पर्व और गुरबाणी शायरी) — 25 peaceful wishes to share.'
  }
] as const;

export interface FeelingsCategoryMeta {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  icon: string;
  seoDescription: string;
}

export const FEELINGS_CATEGORIES: readonly FeelingsCategoryMeta[] = [
  // 8 Merged Core Categories
  {
    id: 'love',
    name: 'Love Shayari',
    hindiName: 'प्यार शायरी',
    slug: '/feelings/love-shayari/',
    icon: '💖',
    seoDescription:
      'Best Love, Romantic, Ishq & Mohabbat Shayari in Hindi (प्यार और मोहब्बत शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.'
  },
  {
    id: 'sad',
    name: 'Sad Shayari',
    hindiName: 'दर्द शायरी',
    slug: '/feelings/sad-shayari/',
    icon: '💔',
    seoDescription:
      'Heart-touching Sad, Dard & Gham Bhari Shayari in Hindi (सैड और दर्द भरी शायरी). Express deep emotions with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'yaad',
    name: 'Yaad Shayari',
    hindiName: 'याद शायरी',
    slug: '/feelings/yaad-shayari/',
    icon: '⏳',
    seoDescription:
      'Soulful Yaad, Yaadein & Intezaar Shayari in Hindi (याद और इंतज़ार शायरी) — heartfelt status lines with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'kismat',
    name: 'Kismat Shayari',
    hindiName: 'किस्मत शायरी',
    slug: '/feelings/kismat-shayari/',
    icon: '🌟',
    seoDescription:
      'Deep Kismat, Naseeb, Taqdeer & Bhagya Shayari in Hindi (किस्मत और नसीब शायरी). Copy unique destiny status lines in 20 stylish fonts.'
  },
  {
    id: 'khushi',
    name: 'Khushi Shayari',
    hindiName: 'खुशी शायरी',
    slug: '/feelings/khushi-shayari/',
    icon: '😊',
    seoDescription:
      'Joyful Khushi, Happy, Muskaan & Smile Shayari in Hindi (खुशी और मुस्कान शायरी). Spread positivity in 35 languages & 20 stylish fonts.'
  },
  {
    id: 'alone',
    name: 'Alone Shayari',
    hindiName: 'तन्हाई शायरी',
    slug: '/feelings/alone-shayari/',
    icon: '🌙',
    seoDescription:
      'Emotional Alone, Tanhai & Judai Shayari in Hindi (तन्हाई और अकेलापन शायरी) — deep night poetry with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'motivational',
    name: 'Motivational Shayari',
    hindiName: 'मोटिवेशनल शायरी',
    slug: '/feelings/motivational-shayari/',
    icon: '🔥',
    seoDescription:
      'Powerful Motivational, Zindagi & Hausla Shayari in Hindi (मोटिवेशनल और हौसला शायरी) — inspiring success lines to copy & share.'
  },
  {
    id: 'sorry',
    name: 'Sorry Shayari',
    hindiName: 'माफी शायरी',
    slug: '/feelings/sorry-shayari/',
    icon: '🙏',
    seoDescription:
      'Sweet Sorry, Maafi & Roothna-Manana Shayari in Hindi (माफी और रूठना-मनाना शायरी) to win back loved ones with stylish fonts & share.'
  },
  // Kept Categories with Clean Single Names
  {
    id: 'attitude',
    name: 'Attitude Shayari',
    hindiName: 'एटीट्यूड शायरी',
    slug: '/feelings/attitude-shayari/',
    icon: '😎',
    seoDescription:
      'Bold Attitude, Style, Royal Tevar & Akad Shayari in Hindi (एटीट्यूड और तेवर शायरी) for WhatsApp & Instagram status — ZQ Feelings.'
  },
  {
    id: 'boys',
    name: 'Boys Shayari',
    hindiName: 'लड़कों की शायरी',
    slug: '/feelings/boys-shayari/',
    icon: '🦁',
    seoDescription:
      'Best Boys Shayari & Ladko Ke Liye Shayari in Hindi (लड़कों के लिए स्वैग, जज़्बात और रॉयल शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'girls',
    name: 'Girls Shayari',
    hindiName: 'लड़कियों की शायरी',
    slug: '/feelings/girls-shayari/',
    icon: '👑',
    seoDescription:
      'Stylish Girls Shayari & Ladkiyon Ke Liye Shayari in Hindi (लड़कियों के लिए क्यूट और रॉयल शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'dosti',
    name: 'Dosti Shayari',
    hindiName: 'दोस्ती शायरी',
    slug: '/feelings/dosti-shayari/',
    icon: '🤝',
    seoDescription:
      'Heartwarming Dosti, Yaari & True Friendship Shayari in Hindi (सच्ची दोस्ती और यारी शायरी) for best friends — copy & WhatsApp share.'
  },
  {
    id: 'bewafa',
    name: 'Bewafa Shayari',
    hindiName: 'बेवफ़ा शायरी',
    slug: '/feelings/bewafa-shayari/',
    icon: '🥀',
    seoDescription:
      'Deep Bewafa, Dhokha & Broken Trust Shayari in Hindi (बेवफ़ा और धोखा शायरी) with 20 stylish fonts, copy & instant WhatsApp share.'
  },
  {
    id: 'breakup',
    name: 'Breakup Shayari',
    hindiName: 'ब्रेकअप शायरी',
    slug: '/feelings/breakup-shayari/',
    icon: '💔',
    seoDescription:
      'Emotional Breakup & Heartbreak Shayari in Hindi (ब्रेकअप और टूटे दिल की शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.'
  },
  {
    id: 'good-morning',
    name: 'Good Morning Shayari',
    hindiName: 'गुड मॉर्निंग शायरी',
    slug: '/feelings/good-morning-shayari/',
    icon: '🌅',
    seoDescription:
      'Fresh Good Morning & Suprabhat Wishes Shayari in Hindi (सुप्रभात और गुड मॉर्निंग शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'good-night',
    name: 'Good Night Shayari',
    hindiName: 'गुड नाइट शायरी',
    slug: '/feelings/good-night-shayari/',
    icon: '🌌',
    seoDescription:
      'Peaceful Good Night & Shubh Ratri Wishes Shayari in Hindi (शुभ रात्रि और गुड नाइट शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: '2-line',
    name: '2 Line Shayari',
    hindiName: 'दो लाइन शायरी',
    slug: '/feelings/2-line-shayari/',
    icon: '✨',
    seoDescription:
      'Short & deep 2 Line Shayari & Do Line Status in Hindi (दो लाइन की बेहतरीन शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'family',
    name: 'Family Shayari',
    hindiName: 'परिवार शायरी',
    slug: '/feelings/family-shayari/',
    icon: '🏡',
    seoDescription:
      'Warm Family, Maa Papa & Ghar Parivar Shayari in Hindi (परिवार और माँ-पापा शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'bhai-behen',
    name: 'Bhai Behen Shayari',
    hindiName: 'भाई बहन शायरी',
    slug: '/feelings/bhai-behen-shayari/',
    icon: '👫',
    seoDescription:
      'Loving Bhai Behen, Brother & Sister Shayari in Hindi (भाई-बहन के प्यार की शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'birthday-feelings',
    name: 'Birthday Shayari',
    hindiName: 'जन्मदिन शायरी',
    slug: '/feelings/birthday-shayari/',
    icon: '🎂',
    seoDescription:
      'Heartfelt Birthday Wishes & Janmdin Mubarak Shayari in Hindi (जन्मदिन मुबारक फीलिंग्स शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'miss-you',
    name: 'Miss You Shayari',
    hindiName: 'मिस यू शायरी',
    slug: '/feelings/miss-you-shayari/',
    icon: '🥺',
    seoDescription:
      'Touching Miss You & Teri Kami Shayari in Hindi (मिस यू और तेरी कमी शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.'
  },
  {
    id: 'heart-touching',
    name: 'Heart Touching Shayari',
    hindiName: 'हार्ट टचिंग शायरी',
    slug: '/feelings/heart-touching-shayari/',
    icon: '💗',
    seoDescription:
      'Deep Heart Touching & Dil Chhoo Lene Wali Shayari in Hindi (दिल छू लेने वाली शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'emotional',
    name: 'Emotional Shayari',
    hindiName: 'इमोशनल शायरी',
    slug: '/feelings/emotional-shayari/',
    icon: '🥹',
    seoDescription:
      'Soulful Emotional & Jazbaati Shayari in Hindi (जज़्बाती और इमोशनल शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.'
  },
  {
    id: 'sad-love',
    name: 'Sad Love Shayari',
    hindiName: 'सैड लव शायरी',
    slug: '/feelings/sad-love-shayari/',
    icon: '🌧️',
    seoDescription:
      'Poignant Sad Love & Adhura Pyar Shayari in Hindi (अधूरा प्यार और सैड लव शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  },
  {
    id: 'khwab',
    name: 'Khwab Shayari',
    hindiName: 'ख़्वाब शायरी',
    slug: '/feelings/khwab-shayari/',
    icon: '🌠',
    seoDescription:
      'Dreamy Khwab & Sapne Shayari in Hindi (ख़्वाब और सपनों की शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.'
  },
  {
    id: 'matlabi-duniya',
    name: 'Matlabi Duniya Shayari',
    hindiName: 'मतलबी दुनिया शायरी',
    slug: '/feelings/matlabi-duniya-shayari/',
    icon: '🎭',
    seoDescription:
      'Real-life Matlabi Duniya & Matlabi Log Shayari in Hindi (मतलबी दुनिया और मतलबी लोग शायरी) with 20 stylish fonts & WhatsApp share.'
  },
  {
    id: 'funny',
    name: 'Funny Shayari',
    hindiName: 'फनी शायरी',
    slug: '/feelings/funny-shayari/',
    icon: '😂',
    seoDescription:
      'Hilarious Funny, Jokes, Comedy & Chutkule Shayari in Hindi (मज़ेदार फनी जोक्स और चुटकुले शायरी) with 20 stylish fonts & share.'
  },
  {
    id: 'sharabi',
    name: 'Sharabi Shayari',
    hindiName: 'शराबी शायरी',
    slug: '/feelings/sharabi-shayari/',
    icon: '🍷',
    seoDescription:
      'Soulful Sharabi, Maikhana, Jaam & Mehfil Shayari in Hindi (शराबी और मयख़ाना शायरी) with 20 stylish fonts, copy & WhatsApp share.'
  }
] as const;

export const FEELINGS_CATEGORY_MERGE_MAP: Record<string, string> = {
  love: 'love',
  'romantic-love': 'love',
  'pyar-bhari': 'love',
  mohabbat: 'love',
  sad: 'sad',
  'dard-bhari': 'sad',
  yaad: 'yaad',
  'yaad-intezaar': 'yaad',
  intezaar: 'yaad',
  yaadein: 'yaad',
  kismat: 'kismat',
  naseeb: 'kismat',
  'kismat-bhagya': 'kismat',
  khushi: 'khushi',
  smile: 'khushi',
  alone: 'alone',
  judai: 'alone',
  motivational: 'motivational',
  zindagi: 'motivational',
  sorry: 'sorry',
  maafi: 'sorry',
  gussa: 'sorry',
  attitude: 'attitude',
  boy: 'boys',
  boys: 'boys',
  girl: 'girls',
  girls: 'girls',
  dosti: 'dosti',
  bewafa: 'bewafa',
  breakup: 'breakup',
  'good-morning': 'good-morning',
  'good-night': 'good-night',
  'two-line': '2-line',
  '2-line': '2-line',
  family: 'family',
  'bhai-behen': 'bhai-behen',
  'birthday-feelings': 'birthday-feelings',
  'miss-you': 'miss-you',
  'heart-touching': 'heart-touching',
  emotional: 'emotional',
  'sad-love': 'sad-love',
  khwab: 'khwab',
  'matlabi-duniya': 'matlabi-duniya',
  funny: 'funny',
  sharabi: 'sharabi',
  maikhana: 'sharabi'
};

export function normalizeFeelingsCategoryId(categoryId: string): string {
  if (!categoryId) return 'love';
  const cleaned = categoryId.trim().toLowerCase();
  if (cleaned === 'all' || cleaned === 'sabhi-feelings' || cleaned === 'सभी फीलिंग्स') {
    return 'love';
  }
  return FEELINGS_CATEGORY_MERGE_MAP[cleaned] || cleaned;
}

export const ALL_CATEGORIES = [
  ...FESTIVAL_CATEGORIES.map((f) => ({ id: f.id, name: f.name, type: 'festival' as const })),
  ...FEELINGS_CATEGORIES.map((f) => ({ id: f.id, name: f.name, type: 'feelings' as const })),
  ...RELIGIOUS_CATEGORIES.map((r) => ({ id: r.id, name: r.englishTitle, type: 'religious' as const })),
  ...FAMILY_RITUALS_CATEGORIES.map((r) => ({
    id: r.id,
    name: r.englishTitle,
    type: 'family-rituals' as const
  }))
];

export const ALL_CATEGORIES_FOR_POSTING = [
  ...FESTIVAL_CATEGORIES.map((f) => ({
    id: f.id,
    name: f.name,
    hindiName: f.hindiName,
    icon: f.icon,
    type: 'festival' as const
  })),
  ...FEELINGS_CATEGORIES.map((f) => ({
    id: f.id,
    name: f.name,
    hindiName: f.hindiName,
    icon: f.icon,
    type: 'feelings' as const
  })),
  ...MAAFI_SUBCATEGORIES_META.map((m) => ({
    id: m.id,
    name: m.englishTitle,
    hindiName: m.hindiTitle,
    icon: m.icon,
    type: 'feelings' as const
  })),
  ...RELIGIOUS_CATEGORIES.map((r) => ({
    id: r.id,
    name: r.englishTitle,
    hindiName: r.hindiTitle,
    icon: r.icon,
    type: 'religious' as const
  })),
  ...FAMILY_RITUALS_CATEGORIES.map((r) => ({
    id: r.id,
    name: r.englishTitle,
    hindiName: r.hindiTitle,
    icon: r.icon,
    type: 'family-rituals' as const
  }))
];

export { RELIGIOUS_CATEGORIES, FAMILY_RITUALS_CATEGORIES, FAMILY_RITUALS_MASTER };
