import fs from 'fs';

// 25 New Unique, Meter-Compliant Shayaris (diwali-101 to diwali-125)
const NEW_25_SHAYARIS = [
  // 1. Family (7 Shayaris: diwali-101 to diwali-107) - [Family]
  {
    id: 'diwali-101',
    subCategory: 'Family',
    title: 'माँ का दुलार और दीवाली',
    lines: [
      'माँ के हाथों की मिठाई और ममता का संसार मिले,',
      'इस दीवाली घर के हर कोने में खुशियों का त्योहार खिले।'
    ],
    linesHinglish: [
      'Maa ke haathon ki mithai aur mamta ka sansaar mile,',
      'Is Diwali ghar ke har kone mein khushiyon ka tyohar khile.'
    ],
    linesEnglish: [
      'Sweet delicacies made by Mother and a world of endless love,',
      'May this Diwali bring pure joy blessed from the heavens above.'
    ],
    tags: ['Family', 'MaaKiMamta', 'DiwaliFamily']
  },
  {
    id: 'diwali-102',
    subCategory: 'Family',
    title: 'पिता का साया और हौसला',
    lines: [
      'पिता का साया सिर पर हो तो हर दिन दीवाली का उजाला है,',
      'उनके मजबूत कंधों ने ही हमारे सपनों को संभाला है।'
    ],
    linesHinglish: [
      'Pita ka saaya sir par ho to har din Diwali ka ujaala hai,',
      'Unke mazboot kandhon ne hi humare sapnon ko sambhaala hai.'
    ],
    linesEnglish: [
      "With Father's sheltering blessings, every day shines Diwali bright,",
      'His strong shoulders supported all our dreams to take their flight.'
    ],
    tags: ['Family', 'PitaKaAashirwad', 'DiwaliPapa']
  },
  {
    id: 'diwali-103',
    subCategory: 'Family',
    title: 'भाई की यारी और दीये की लौ',
    lines: [
      'भाई के संग पटाखे फोड़ना और हँसते-हँसते लड़ जाना,',
      'दीवाली का सबसे प्यारा सुख है अपनों का घर आना।'
    ],
    linesHinglish: [
      'Bhai ke sang pataakhe phodna aur hanste-hanste lad jaana,',
      'Diwali ka sabse pyara sukh hai apno ka ghar aana.'
    ],
    linesEnglish: [
      'Bursting sparklers with brother and teasing in youthful cheer,',
      'The sweetest joy of Diwali is having our loved ones near.'
    ],
    tags: ['Family', 'BhaiKiYaari', 'DiwaliBhai']
  },
  {
    id: 'diwali-104',
    subCategory: 'Family',
    title: 'बहन की रंगोली और मुस्कान',
    lines: [
      'आँगन में बहन की सजाई रंगोली सबसे खास लगे,',
      'उसकी खिलखिलाती हँसी से दीवाली का हर पल पावन लगे।'
    ],
    linesHinglish: [
      'Aangan mein behan ki sajaai rangoli sabse khaas lage,',
      'Uski khilkhilaati hansi se Diwali ka har pal paavan lage.'
    ],
    linesEnglish: [
      'The colorful rangoli drawn by sister makes our courtyard gleam,',
      'Her cheerful laughter turns each Diwali moment into a blessed dream.'
    ],
    tags: ['Family', 'BehanKiMuskaan', 'DiwaliRangoli']
  },
  {
    id: 'diwali-105',
    subCategory: 'Family',
    title: 'परिवार का संगम',
    lines: [
      'घर की चौखट पर जब सब अपने एक साथ मुस्कुराते हैं,',
      'मिट्टी के दीये भी तब तारों से ज्यादा जगमगाते हैं।'
    ],
    linesHinglish: [
      'Ghar ki chaukhat par jab sab apne ek saath muskuraate hain,',
      'Mitti ke deeye bhi tab taaron se zyada jagmagaate hain.'
    ],
    linesEnglish: [
      'When the whole family gathers together at our doorway with a smile,',
      'Even simple earthen clay lamps outshine stars across each mile.'
    ],
    tags: ['Family', 'Parivaar', 'EkSaath']
  },
  {
    id: 'diwali-106',
    subCategory: 'Family',
    title: 'घर का सुकून और बरकत',
    lines: [
      'बड़ों का आशीर्वाद मिले और छोटों का ढेर सारा प्यार,',
      'लक्ष्मी जी की कृपा से महके हमारा पूरा परिवार।'
    ],
    linesHinglish: [
      'Badon ka aashirwad mile aur chhoton ka dher saara pyaar,',
      'Lakshmi ji ki kripa se mahke humara poora parivaar.'
    ],
    linesEnglish: [
      'Blessings from elders and boundless love from the young and dear,',
      'May Goddess Lakshmi bless our entire family throughout the year.'
    ],
    tags: ['Family', 'Barkat', 'GharSansar']
  },
  {
    id: 'diwali-107',
    subCategory: 'Family',
    title: 'घर के आँगन की रोशनी',
    lines: [
      'दीयों की रोशनी से ज्यादा रोशन है अपनों का यह साथ,',
      'दीवाली पर सलामत रहे हमारे इस भरे-पूरे परिवार की बात।'
    ],
    linesHinglish: [
      'Deeyon ki roshni se zyada roshan hai apno ka yeh saath,',
      'Diwali par salaamat rahe humare is bhare-poore parivaar ki baat.'
    ],
    linesEnglish: [
      'Brighter than festive lamps is the warmth our family shares,',
      'May our blessed home remain forever surrounded by love and prayers.'
    ],
    tags: ['Family', 'Aangan', 'SadaKhushhali']
  },

  // 2. Friends (6 Shayaris: diwali-108 to diwali-113) - [Friends]
  {
    id: 'diwali-108',
    subCategory: 'Friends',
    title: 'यारों की महफ़िल और फुलझड़ी',
    lines: [
      'मिठाई का डिब्बा खाली करना और यारों की महफ़िल सजाना,',
      'दीवाली असली तभी बनती है जब दोस्तों का हो आना-जाना।'
    ],
    linesHinglish: [
      'Mithai ka dibba khaali karna aur yaaron ki mehfil sajaana,',
      'Diwali asli tabhi banti hai jab doston ka ho aana-jaana.'
    ],
    linesEnglish: [
      'Emptying sweet boxes together and raising a cheerful toast,',
      'Diwali turns truly magical when celebrating with friends we love most.'
    ],
    tags: ['Friends', 'YaaronKiMehfil', 'DiwaliDosti']
  },
  {
    id: 'diwali-109',
    subCategory: 'Friends',
    title: 'तू है तो दीवाली है',
    lines: [
      'पटाखे फूटे न फूटे तेरी यारी में ही सारा दम है,',
      'तू जो मुस्कुरा दे मेरे यार तो जिंदगी में उजाला ही हर दम है।'
    ],
    linesHinglish: [
      'Pataakhe phoote na phoote teri yaari mein hi saara dam hai,',
      'Tu jo muskura de mere yaar to zindagi mein ujaala hi har dam hai.'
    ],
    linesEnglish: [
      'With or without firecrackers, true friendship is our supreme spark,',
      'Your hearty laugh, my dear friend, leaves no corner in the dark.'
    ],
    tags: ['Friends', 'SacchaYaar', 'Masti']
  },
  {
    id: 'diwali-110',
    subCategory: 'Friends',
    title: 'बचपन की मस्ती और दीप',
    lines: [
      'गली के मोड़ पर वो दीये जलाना और छुपकर रॉकेट छोड़ना,',
      'दुआ है इस दीवाली कभी न छूटे दोस्तों से दिल का नाता जोड़ना।'
    ],
    linesHinglish: [
      'Gali ke mod par wo deeye jalaana aur chhupkar rocket chhodna,',
      'Dua hai is Diwali kabhi na chhoote doston se dil ka naata jodna.'
    ],
    linesEnglish: [
      'Lighting lamps on street corners and lighting rockets side by side,',
      'May our bond of childhood friendship forever remain our pride.'
    ],
    tags: ['Friends', 'BachpanKiYaari', 'Memories']
  },
  {
    id: 'diwali-111',
    subCategory: 'Friends',
    title: 'हँसी का पटाखा',
    lines: [
      'फुलझड़ी सी मुस्कान तेरी, रॉकेट सी तेरी उड़ान हो,',
      'दोस्त इस दीवाली तू जहां भी रहे, तू ही महफ़िल की शान हो।'
    ],
    linesHinglish: [
      'Phuljhadi si muskaan teri, rocket si teri udaan ho,',
      'Dost is Diwali tu jahan bhi rahe, tu hi mehfil ki shaan ho.'
    ],
    linesEnglish: [
      'A smile radiant like sparklers and soaring flights like a rocket so high,',
      "Wherever you go my friend, you light up everyone's sky."
    ],
    tags: ['Friends', 'MehfilKiShaan', 'DiwaliWishes']
  },
  {
    id: 'diwali-112',
    subCategory: 'Friends',
    title: 'दूर बैठे दोस्त को सलाम',
    lines: [
      'दूर हो शहर चाहे कितना भी, दिल से दिल का तार जुड़ा है,',
      'दोस्त तेरी सलामती के लिए दीवाली के हर दीये में दुआ है।'
    ],
    linesHinglish: [
      'Door ho shehar chahe kitna bhi, dil se dil ka taar juda hai,',
      'Dost teri salaamati ke liye Diwali ke har deeye mein dua hai.'
    ],
    linesEnglish: [
      'Miles may separate our towns, yet heartstrings closely intertwine,',
      'A prayer for your good health shines in every festive lamp of mine.'
    ],
    tags: ['Friends', 'DoorBaitheYaar', 'Dua']
  },
  {
    id: 'diwali-113',
    subCategory: 'Friends',
    title: 'यारी की अटूट चमक',
    lines: [
      'दीयों की कतारें बुझ सकती हैं मगर अपनी यारी का नूर नहीं,',
      'मुबारक हो दीवाली मेरे भाई, तू आँखों से भले दिल से दूर नहीं।'
    ],
    linesHinglish: [
      'Deeyon ki qataarein bujh sakti hain magar apni yaari ka noor nahi,',
      'Mubarak ho Diwali mere bhai, tu aankhon se bhale dil se door nahi.'
    ],
    linesEnglish: [
      'Lamps in festive rows may fade, but the light of our friendship stays,',
      'Happy Diwali my buddy, near in my heart in a thousand ways.'
    ],
    tags: ['Friends', 'AtootYaari', 'Noor']
  },

  // 3. Office / Boss / Colleague / Client (6 Shayaris: diwali-114 to diwali-119) - [Office]
  {
    id: 'diwali-114',
    subCategory: 'Office',
    title: 'नई ऊंचाइयां और टीम स्पिरिट',
    lines: [
      'सपनों के हर टारगेट को छू लें और छू लें सफलता का आसमान,',
      'दीपावली लाए हमारी पूरी टीम के लिए नई पहचान और सम्मान।'
    ],
    linesHinglish: [
      'Sapnon ke har target ko chhoo lein aur chhoo lein safalta ka aasmaan,',
      'Deepawali laaye humari poori team ke liye nayi pehchaan aur samman.'
    ],
    linesEnglish: [
      'May we conquer every milestone and reach the pinnacle of success,',
      'May Diwali bless our dedicated team with prosperity and progress.'
    ],
    tags: ['Office', 'TeamSuccess', 'TargetAchieved']
  },
  {
    id: 'diwali-115',
    subCategory: 'Office',
    title: 'मार्गदर्शन और सम्मान',
    lines: [
      'आपके कुशल नेतृत्व से रोशन हुआ हमारे काम का हर रास्ता,',
      'दीवाली के पावन अवसर पर आपको मिले सुख-समृद्धि का वास्ता।'
    ],
    linesHinglish: [
      'Aapke kushal netritva se roshan hua humare kaam ka har raasta,',
      'Diwali ke paavan avsar par aapko mile sukh-samriddhi ka vaasta.'
    ],
    linesEnglish: [
      'Under your inspiring guidance, every professional path turned bright,',
      'Wishing you an auspicious Diwali blessed with honor, health and light.'
    ],
    tags: ['Office', 'Leadership', 'RespectBoss']
  },
  {
    id: 'diwali-116',
    subCategory: 'Office',
    title: 'ऑफिस का साथ और सहयोग',
    lines: [
      'डेडलाइन की भागदौड़ में भी जो चेहरे पर मुस्कान सजाए,',
      'ऐसे प्यारे सहकर्मियों को दीवाली का पावन पर्व बहुत रास आए।'
    ],
    linesHinglish: [
      'Deadline ki bhaag-daud mein bhi jo chehre par muskaan sajaaye,',
      'Aise pyare sahkarmiyon ko Diwali ka paavan parv bahut raas aaye.'
    ],
    linesEnglish: [
      'To wonderful colleagues who bring smiles even through hectic deadlines,',
      'May this Diwali bring you fulfillment, promotion, and good times.'
    ],
    tags: ['Office', 'Colleagues', 'WorkFamily']
  },
  {
    id: 'diwali-117',
    subCategory: 'Office',
    title: 'साझेदारी और अटूट विश्वास',
    lines: [
      'हमारे इस भरोसेमंद रिश्ते में हमेशा बना रहे विश्वास का दीया,',
      'आपके सहयोग ने ही हमारे हर प्रोजेक्ट को नया आयाम दिया।'
    ],
    linesHinglish: [
      'Humare is bharosemand rishte mein hamesha bana rahe vishwas ka deeya,',
      'Aapke sahyog ne hi humare har project ko naya aayaam diya.'
    ],
    linesEnglish: [
      'May the lamp of mutual trust continue to illuminate our partnership,',
      'Wishing esteemed clients an abundant Diwali with our deepest gratitude.'
    ],
    tags: ['Office', 'ClientWishes', 'Partnership']
  },
  {
    id: 'diwali-118',
    subCategory: 'Office',
    title: 'तरक्की और नए अवसर',
    lines: [
      'मेहनत का दीपक जले और बरसे प्रमोशन व तरक्की का वरदान,',
      'यह दीवाली आपके करियर को दे एक नई और बुलंद उड़ान।'
    ],
    linesHinglish: [
      'Mehnat ka deepak jale aur barse promotion va tarakki ka vardaan,',
      'Yeh Diwali aapke career ko de ek nayi aur buland udaan.'
    ],
    linesEnglish: [
      'Kindle the lamp of dedication and reap rewards of flourishing growth,',
      'May this Diwali elevate your career and bring prosperity to both.'
    ],
    tags: ['Office', 'CareerGrowth', 'Promotion']
  },
  {
    id: 'diwali-119',
    subCategory: 'Office',
    title: 'कर्मक्षेत्र में खुशहाली',
    lines: [
      'सफलता के दीप जलें और गूंजे हर दिल में खुशियों की तान,',
      'दीपावली के इस शुभ अवसर पर बढ़े आपका कारोबार और सम्मान।'
    ],
    linesHinglish: [
      'Safalta ke deep jalein aur goonje har dil mein khushiyon ki taan,',
      'Deepawali ke is shubh avsar par badhe aapka kaarobaar aur sammaan.'
    ],
    linesEnglish: [
      'May lamps of triumph shine and songs of celebration softly ring,',
      'May this Diwali auspicious heights and corporate prestige bring.'
    ],
    tags: ['Office', 'BusinessSuccess', 'ShubhKaamna']
  },

  // 4. Rishtedaro (6 Shayaris: diwali-120 to diwali-125) - [Rishtedar]
  {
    id: 'diwali-120',
    subCategory: 'Rishtedar',
    title: 'चाचा-ताऊ का स्नेह',
    lines: [
      'चाचा-ताऊ का दुलार और परिवार का मान बना रहे,',
      'दीवाली के पावन उजाले से महकता आपका आशियाना रहे।'
    ],
    linesHinglish: [
      'Chacha-tau ka dulaar aur parivaar ka maan bana rahe,',
      'Diwali ke paavan ujaale se mahakta aapka aashiyana rahe.'
    ],
    linesEnglish: [
      'May the affection of uncles and family prestige ever endure,',
      'May Diwali sacred radiance keep your sweet home bright and pure.'
    ],
    tags: ['Rishtedar', 'ChachaTau', 'Sneh']
  },
  {
    id: 'diwali-121',
    subCategory: 'Rishtedar',
    title: 'ननिहाल की मिठास',
    lines: [
      'मामा-मामी का प्यारा आशीष और ननिहाल की वो मीठी याद,',
      'दीवाली लाए आपके आँगन में खुशियों की अनमोल सौगात।'
    ],
    linesHinglish: [
      'Mama-mami ka pyara aashish aur nanihaal ki wo meethi yaad,',
      'Diwali laaye aapke aangan mein khushiyon ki anmol saugaat.'
    ],
    linesEnglish: [
      'Cherished blessings of uncles and aunts with fond nostalgic memories,',
      'May Diwali fill your courtyard with joyous festive harmonies.'
    ],
    tags: ['Rishtedar', 'MamaMami', 'Nanihal']
  },
  {
    id: 'diwali-122',
    subCategory: 'Rishtedar',
    title: 'बुआ-फूफाजी का दुलार',
    lines: [
      'बुआ के हाथों का स्नेह और फूफाजी की वो प्यारी मुस्कान,',
      'दीपावली पर आपके घर में बरसे सुख, शांति और सम्मान।'
    ],
    linesHinglish: [
      'Bua ke haathon ka sneh aur phoophaji ki wo pyari muskaan,',
      'Deepawali par aapke ghar mein barse sukh, shaanti aur sammaan.'
    ],
    linesEnglish: [
      'Warm maternal aunt affection and uncle joyous smile so wide,',
      'May Diwali shower your home with serenity, peace, and pride.'
    ],
    tags: ['Rishtedar', 'BuaPhuphaji', 'Khushhali']
  },
  {
    id: 'diwali-123',
    subCategory: 'Rishtedar',
    title: 'पड़ोसियों संग दीवाली',
    lines: [
      'दीवारें भले अलग हों पर आँगन में एक ही दीया जलता है,',
      'पड़ोसियों का साथ हो तो हर त्यौहार दिल से सजता है।'
    ],
    linesHinglish: [
      'Deewaarein bhale alag hon par aangan mein ek hi deeya jalta hai,',
      'Padosiyon ka saath ho to har tyohar dil se sajta hai.'
    ],
    linesEnglish: [
      'Walls may divide our spaces, yet our shared courtyard catches light,',
      'Good neighbors make every Diwali glow friendly, warm and bright.'
    ],
    tags: ['Rishtedar', 'Padosi', 'Bhaichara']
  },
  {
    id: 'diwali-124',
    subCategory: 'Rishtedar',
    title: 'रिश्तों की गर्माहट',
    lines: [
      'रिश्तेदारी की मिठास कभी कम न हो, फासले सारे मिट जाएं,',
      'इस दीवाली सबके घरों में खुशहाली और प्यार के दीप जल जाएं।'
    ],
    linesHinglish: [
      'Rishtedaari ki mithaas kabhi kam na ho, faasle saare mit jaayein,',
      'Is Diwali sabke gharon mein khushhali aur pyaar ke deep jal jaayein.'
    ],
    linesEnglish: [
      'May the sweetness of kinship never wane and distances fall away,',
      'May lamps of harmony and pure love illuminate this festive day.'
    ],
    tags: ['Rishtedar', 'RishtonKiGarmi', 'Pyaar']
  },
  {
    id: 'diwali-125',
    subCategory: 'Rishtedar',
    title: 'सभी सगे-संबंधियों को प्रणाम',
    lines: [
      'हर सगे-संबंधी के घर में सुख-समृद्धि और आरोग्य का वास हो,',
      'दीपावली का यह महापर्व आप सभी के लिए सबसे खास हो।'
    ],
    linesHinglish: [
      'Har sage-sambandhi ke ghar mein sukh-samriddhi aur aarogya ka vaas ho,',
      'Deepawali ka yeh mahaparv aap sabhi ke liye sabse khaas ho.'
    ],
    linesEnglish: [
      'May health and boundless abundance grace all our relatives near and far,',
      'May this grand Diwali celebration be our brightest guiding star.'
    ],
    tags: ['Rishtedar', 'Khandaan', 'ShubhDeepawali']
  }
];

// Read existing diwaliExpanded.ts
import { DIWALI_EXPANDED } from '../src/data/categories/diwaliExpanded.ts';

const existing26to100 = DIWALI_EXPANDED;

const full100Expanded = [
  ...existing26to100,
  ...NEW_25_SHAYARIS.map((s, idx) => ({
    ...s,
    linesHindi: s.lines,
    category: 'diwali',
    categoryType: 'festival',
    categoryName: 'दीपावली',
    categoryIcon: '🪔',
    author: 'ZQ-FEELINGS 👑 Official',
    isOfficial: true,
    initialLikes: 1850 + idx * 15,
    commentsCount: 1,
    comments: [
      {
        id: `c-${s.id}-1`,
        userName: 'ZQ Feelings Official',
        text: 'शुभ दीपावली! 2026 की सबसे बेहतरीन व मौलिक विशेस 🪔✨',
        date: '25 Oct 2026',
        likes: 5
      }
    ]
  }))
];

const codeDiwaliExpanded = `import { Shayari } from '../../types/shayari';

export const DIWALI_EXPANDED: Shayari[] = ${JSON.stringify(full100Expanded, null, 2)};
`;

fs.writeFileSync('src/data/categories/diwaliExpanded.ts', codeDiwaliExpanded, 'utf8');
console.log('Successfully updated src/data/categories/diwaliExpanded.ts with', full100Expanded.length, 'shayaris (diwali-26 to diwali-125).');
