import { Shayari } from '../../../types/shayari';

interface RawSharabiEntry {
  title: string;
  hindi: string[];
  hinglish: string[];
  english: string[];
}

const RAW_SHARABI_ENTRIES: readonly RawSharabiEntry[] = [
  {
    title: 'पैमाने में तेरी याद का अक्स',
    hindi: [
      'छलका जो जाम हाथ से तो महफ़िल संभल गई,',
      'कमबख़्त तेरी याद भी पैमाने में ढल गई।',
      'साक़ी ने पूछा आज इतना ख़ामोश क्यों है तू,',
      'मैं मुस्कुरा दिया और शाम चुपचाप ढल गई।'
    ],
    hinglish: [
      'Chhalka jo jaam haath se toh mehfil sambhal gayi,',
      'Kambakht teri yaad bhi paimane mein dhal gayi.',
      'Saaqi ne poochha aaj itna khamosh kyun hai tu,',
      'Main muskura diya aur shaam chupchaap dhal gayi.'
    ],
    english: [
      'When the goblet spilled from my hand, the gathering steadied itself,',
      'Even your stubborn memory melted right into my glass.',
      'The cupbearer asked why I sat in such deep silence tonight,',
      'I simply smiled, and the evening quietly faded away.'
    ]
  },
  {
    title: 'मयख़ाने का पता और दिल का दर्द',
    hindi: [
      'दवा काम आई न दुआओं से आराम मिला,',
      'थक कर जो बैठे तो हाथ में एक जाम मिला।',
      'बदनाम कर दिया शहर भर ने हमें शराबी कहकर,',
      'मगर सच पूछो तो मयख़ाने में ही सच्चा सलाम मिला।'
    ],
    hinglish: [
      'Dawa kaam aayi na duaon se aaraam mila,',
      'Thak kar jo baithe toh haath mein ek jaam mila.',
      'Badnaam kar diya shehar bhar ne humein sharabi kehkar,',
      'Magar sach poochho toh maikhane mein hi sachcha salaam mila.'
    ],
    english: [
      'Neither medicine healed me nor did prayers bring relief,',
      'When I sat down exhausted, a quiet glass found my hand.',
      'The whole town defamed me by calling me a drinker,',
      'Yet truthfully, only the tavern greeted my wounded heart honestly.'
    ]
  },
  {
    title: 'बोतल में नहीं तेरी आँखों में नशा',
    hindi: [
      'इल्ज़ाम शराब पर लगाना तो महज़ एक बहाना है,',
      'असली नशा तो तेरी सादगी भरी निगाहों का पुराना है।'
    ],
    hinglish: [
      'Ilzaam sharaab par lagana toh mahaz ek bahana hai,',
      'Asli nasha toh teri saadgi bhari nigahon ka purana hai.'
    ],
    english: [
      'Blaming the wine is merely a gentle excuse,',
      'The real intoxication has always lived in your innocent eyes.'
    ]
  },
  {
    title: 'साक़ी और अधूरी दास्तान',
    hindi: [
      'हर घूँट के साथ एक पुराना ज़ख़्म सो जाता है,',
      'तन्हाई का आलम भी नशे में अपना हो जाता है।',
      'मत गिन मेरे प्याले ऐ साक़ी आज की रात,',
      'होश में रहूँ तो दिल फिर उसी के लिए रो जाता है।'
    ],
    hinglish: [
      'Har ghoont ke saath ek purana zakhm so jaata hai,',
      'Tanhai ka aalam bhi nashe mein apna ho jaata hai.',
      'Mat gin mere pyaale ae saaqi aaj ki raat,',
      'Hosh mein rahoon toh dil phir usi ke liye ro jaata hai.'
    ],
    english: [
      'With every sip, an old wound drifts to sleep,',
      'Even this solitude begins to feel like a dear friend.',
      'Do not count my cups tonight, O cupbearer,',
      'For if I stay sober, my heart weeps for them all over again.'
    ]
  },
  {
    title: 'काँच का गिलास और टूटे ख़्वाब',
    hindi: [
      'काँच के गिलास और मेरे दिल में बस इतना सा फ़र्क़ रहा,',
      'वो गिर कर टूटा महफ़िल में, ये चुपके से भीतर दरक रहा।'
    ],
    hinglish: [
      'Kaanch ke gilaas aur mere dil mein bas itna sa farq raha,',
      'Woh gir kar toota mehfil mein, yeh chupke se bheetar darak raha.'
    ],
    english: [
      'Only one small difference remained between the glass and my heart,',
      'The glass shattered aloud upon falling, while my heart cracked silently within.'
    ]
  },
  {
    title: 'मेज़ के कोने वाली तन्हा कुर्सी',
    hindi: [
      'कोने की मेज़ पर आज भी दो प्याले मँगवाता हूँ,',
      'एक ख़ुद पीता हूँ और एक तेरी याद के नाम रख जाता हूँ।',
      'लोग समझते हैं मुझे लत लग गई है मयख़ाने की,',
      'उन्हें क्या ख़बर मैं यहाँ तुझसे गुफ़्तगू करने आता हूँ।'
    ],
    hinglish: [
      'Kone ki mez par aaj bhi do pyaale mangwata hoon,',
      'Ek khud peeta hoon aur ek teri yaad ke naam rakh jaata hoon.',
      'Log samajhte hain mujhe lat lag gayi hai maikhane ki,',
      'Unhein kya khabar main yahan tujhse guftagoo karne aata hoon.'
    ],
    english: [
      'At the corner table, I still order two glasses every evening,',
      'One I drink myself, and one I leave untouched in your memory.',
      'People assume I have grown addicted to the tavern,',
      'Little do they know I come here just to converse with your shadow.'
    ]
  },
  {
    title: 'कड़वी शराब और मीठे झूठ',
    hindi: [
      'कड़वी ज़रूर है मगर कभी धोखा नहीं देती,',
      'ये शराब दुनिया के मीठे झूठों से कहीं ज़्यादा सच्ची निकली।'
    ],
    hinglish: [
      'Kadwi zaroor hai magar kabhi dhokha nahi deti,',
      'Yeh sharaab duniya ke meethe jhoothon se kahin zyada sachchi nikli.'
    ],
    english: [
      'It tastes bitter indeed, yet it never betrays,',
      'This wine turned out far truer than the sweet lies of the world.'
    ]
  },
  {
    title: 'लड़खड़ाते क़दम और संभला किरदार',
    hindi: [
      'क़दम लड़खड़ाए हैं मेरे मगर किरदार आज भी साफ़ है,',
      'जिसने दिल दुखाया हमारा उसे भी हर जाम पर माफ़ है।',
      'शराबी कह लो चाहे दीवाना कह लो इस ज़माने में,',
      'हमारे सीने में नफ़रत नहीं बस वफ़ा का इंसाफ़ है।'
    ],
    hinglish: [
      'Kadam ladkhadaye hain mere magar kirdaar aaj bhi saaf hai,',
      'Jisne dil dukhaya hamara use bhi har jaam par maaf hai.',
      'Sharabi keh lo chahe deewana keh lo is zamane mein,',
      'Hamare seene mein nafrat nahi bas wafa ka insaaf hai.'
    ],
    english: [
      'My footsteps may falter tonight, yet my character remains pure,',
      'Even the one who broke my heart is forgiven over every toast.',
      'Call me a drinker or call me a hopeless romantic in this world,',
      'My chest holds no hatred, only the quiet grace of loyalty.'
    ]
  },
  {
    title: 'बर्फ़ के टुकड़े सा पिघलता सब्र',
    hindi: [
      'गिलास में पड़े बर्फ़ के टुकड़े की तरह मेरा सब्र पिघलता रहा,',
      'रात जितनी गहरी हुई तेरा नाम उतना ही लबों पे मचलता रहा।'
    ],
    hinglish: [
      'Gilaas mein pade barf ke tukde ki tarah mera sabr pighalta raha,',
      'Raat jitni gehri hui tera naam utna hi labon pe machalta raha.'
    ],
    english: [
      'My patience melted away like an ice cube resting in a glass,',
      'The deeper the night grew, the more restlessly your name stirred on my lips.'
    ]
  },
  {
    title: 'महफ़िल के चिराग़ और सूना दिल',
    hindi: [
      'जगमगाते चिराग़ों के बीच भी अंधेरा सा लगता है,',
      'बिना तेरे हर जश्न अधूरा सा सवेरा लगता है।',
      'भर दे साक़ी एक और जाम कि रात अभी बाक़ी है,',
      'मुझे हर अजनबी चेहरे पर उसी का डेरा लगता है।'
    ],
    hinglish: [
      'Jagmagate chiragon ke beech bhi andhera sa lagta hai,',
      'Bina tere har jashn adhoora sa savera lagta hai.',
      'Bhar de saaqi ek aur jaam ki raat abhi baaqi hai,',
      'Mujhe har ajnabi chehre par usi ka dera lagta hai.'
    ],
    english: [
      'Even amidst glowing lamps, a quiet darkness surrounds me,',
      'Without you, every celebration feels like an unfinished dawn.',
      'Pour one more cup, O cupbearer, for the night is still long,',
      'In every stranger’s face, my eyes still search for yours.'
    ]
  },
  {
    title: 'शौक़ से नहीं ग़म भुलाने को',
    hindi: [
      'शौक़ से कौन थामता है भला जाम अपनी जवानी में,',
      'कुछ अधूरे पन्ने रह गए थे मेरी मोहब्बत की कहानी में।'
    ],
    hinglish: [
      'Shauq se kaun thaamta hai bhala jaam apni jawani mein,',
      'Kuch adhoore panne reh gaye the meri mohabbat ki kahani mein.'
    ],
    english: [
      'Who willingly holds a goblet in the prime of youth for pleasure,',
      'A few pages were simply left unfinished in my story of love.'
    ]
  },
  {
    title: 'साक़ी का सवाल और अश्कों का हिसाब',
    hindi: [
      'प्याले में शराब कम थी और आँसुओं का पानी ज़्यादा था,',
      'आज भूल जाने का तुझे पक्का इरादा था।',
      'मगर पहली ही चुस्की में तेरी मुस्कान याद आ गई,',
      'कमबख़्त दिल का रिश्ता नशे से भी कहीं ज़्यादा सादा था।'
    ],
    hinglish: [
      'Pyaale mein sharaab kam thi aur aansuon ka paani zyada tha,',
      'Aaj bhool jaane ka tujhe pakka irada tha.',
      'Magar pehli hi chuski mein teri muskaan yaad aa gayi,',
      'Kambakht dil ka rishta nashe se bhi kahin zyada saada tha.'
    ],
    english: [
      'There was less wine in my cup tonight and more salt of my tears,',
      'I had resolved with all my heart to finally forget you.',
      'Yet with the very first sip, your gentle smile returned to me,',
      'Alas, the bond of my heart proved stronger than any intoxication.'
    ]
  },
  {
    title: 'तौबा और बरसात की शाम',
    hindi: [
      'लाख तौबा की थी हमने कि अब मयख़ाने की गली न जाएँगे,',
      'फिर बदली छाई आसमान पर और क़दम ख़ुद-ब-ख़ुद बहक आए।'
    ],
    hinglish: [
      'Laakh tauba ki thi humne ki ab maikhane ki gali na jaayenge,',
      'Phir badli chhayi aasmaan par aur kadam khud-ba-khud behak aaye.'
    ],
    english: [
      'A thousand times I vowed never to walk down the tavern lane again,',
      'Then rainclouds gathered overhead, and my feet wandered back on their own.'
    ]
  },
  {
    title: 'ख़ाली बोतलें और अनकहे राज़',
    hindi: [
      'कमरे में रखी ख़ाली बोतलें मेरे सब राज़ जानती हैं,',
      'मैं हँसता हूँ दुनिया के आगे, ये मेरी सिसकियाँ पहचानती हैं।',
      'न कोई शिकवा करती हैं न कोई सवाल पूछती हैं,',
      'रात भर जाग कर मेरे संग मेरी तन्हाई छानती हैं।'
    ],
    hinglish: [
      'Kamre mein rakhi khaali botlein mere sab raaz jaanti hain,',
      'Main hansta hoon duniya ke aage, yeh meri siskiyan pehchaanti hain.',
      'Na koi shikwa karti hain na koi sawaal poochhti hain,',
      'Raat bhar jaag kar mere sang meri tanhai chhaanti hain.'
    ],
    english: [
      'The empty bottles resting in my room know all my hidden secrets,',
      'While I smile before the world, they recognize my quiet sobs.',
      'They neither complain nor ask a single piercing question,',
      'Staying awake beside me all night, they share my loneliness.'
    ]
  },
  {
    title: 'नसीहत करने वालों से एक बात',
    hindi: [
      'हमें शराब छोड़ने की नसीहत बड़े अदब से देते हैं लोग,',
      'कभी हमारे हिस्से का दर्द जी कर देखो तो पैमाना समझ आएगा।'
    ],
    hinglish: [
      'Humein sharaab chhodne ki naseehat bade adab se dete hain log,',
      'Kabhi hamare hisse ka dard jee kar dekho toh paimana samajh aayega.'
    ],
    english: [
      'People politely advise me to give up the goblet forever,',
      'Live even a day of my silent ache, and you will understand the cup.'
    ]
  },
  {
    title: 'यारों की महफ़िल और सुर्ख़ जाम',
    hindi: [
      'चार पुराने यार बैठें तो ग़म भी हल्का हो जाता है,',
      'सुर्ख़ जाम की छनक में गुज़रा ज़माना लौट आता है।',
      'ना दौलत की फ़िक्र रहती है ना दुनियादारी का बोझ,',
      'दोस्ती के नशे में हर टूटा दिल मुस्कुराता है।'
    ],
    hinglish: [
      'Chaar purane yaar baithein toh gham bhi halka ho jaata hai,',
      'Surkh jaam ki chhanak mein guzra zamana laut aata hai.',
      'Na daulat ki fikr rehti hai na duniyadari ka bojh,',
      'Dosti ke nashe mein har toota dil muskurata hai.'
    ],
    english: [
      'When four old friends sit together, even heavy sorrow turns light,',
      'In the clink of crimson glasses, bygone days come alive again.',
      'Neither worries of wealth remain nor the burden of worldly cares,',
      'In the warmth of friendship, every mendable heart smiles once more.'
    ]
  },
  {
    title: 'आधी रात और साक़ी की मेहरबानी',
    hindi: [
      'आधी रात ढले जब सारा शहर गहरी नींद सोता है,',
      'तब किसी शराबी की आँखों से एक सच्चा इश्क़ रोता है।'
    ],
    hinglish: [
      'Aadhi raat dhale jab saara shehar gehri neend sota hai,',
      'Tab kisi sharabi ki aankhon se ek sachcha ishq rota hai.'
    ],
    english: [
      'Past midnight when the entire city sleeps in deep peace,',
      'True love quietly weeps from the eyes of a lonely drinker.'
    ]
  },
  {
    title: 'होश वालों को क्या ख़बर',
    hindi: [
      'होश वालों ने तो हर क़दम पर हिसाब रखा,',
      'हमने बेख़ुदी में भी मोहब्बत को बेहिसाब रखा।',
      'वो परखते रहे हमारी हैसियत ज़माने की नज़र से,',
      'हमने हर जाम के बाद भी उनका नाम लाजवाब रखा।'
    ],
    hinglish: [
      'Hosh walon ne toh har kadam par hisaab rakha,',
      'Humne bekhudi mein bhi mohabbat ko behisaab rakha.',
      'Woh parakhte rahe hamari haisiyat zamane ki nazar se,',
      'Humne har jaam ke baad bhi unka naam lajawaab rakha.'
    ],
    english: [
      'Those who stayed sober kept cold calculations at every step,',
      'While even in a haze, I loved without measure or limit.',
      'They judged my worth through the shallow eyes of the world,',
      'Yet after every cup, I kept their name sacred on my lips.'
    ]
  },
  {
    title: 'चंद बूँदें और सुकून की तलाश',
    hindi: [
      'चंद बूँदों में कहाँ इतनी ताक़त कि तुझे मिटा दे दिल से,',
      'ये तो बस रात गुज़ारने का एक मामूली सा सहारा है।'
    ],
    hinglish: [
      'Chand boondon mein kahan itni taaqat ki tujhe mita de dil se,',
      'Yeh toh bas raat guzaarne ka ek mamooli sa sahara hai.'
    ],
    english: [
      'How could a few drops ever hold the strength to erase you from my heart,',
      'They are merely a modest shelter to help me survive the night.'
    ]
  },
  {
    title: 'मयख़ाने के दरवाज़े पर लिखी इबारत',
    hindi: [
      'मयख़ाने के दरवाज़े पर किसी ने सच ही लिखा था यारो,',
      'यहाँ टूटे हुए दिल आते हैं, टूटे हुए वादे नहीं।',
      'पीने वाले तो खुल कर अपने आँसू दिखा देते हैं,',
      'चेहरे पर नक़ाब ओढ़े यहाँ कोई इरादे नहीं।'
    ],
    hinglish: [
      'Maikhane ke darwaze par kisi ne sach hi likha tha yaaro,',
      'Yahan toote hue dil aate hain, toote hue waade nahi.',
      'Peene wale toh khul kar apne aansoo dikha dete hain,',
      'Chehre par naqaab odhe yahan koi iraade nahi.'
    ],
    english: [
      'Someone wrote the purest truth upon the tavern door, my friends,',
      'Only broken hearts enter here, never broken promises.',
      'Those who drink let their tears fall without pretense,',
      'Nobody wears a deceitful mask over their intentions here.'
    ]
  },
  {
    title: 'तेरी गली से मयख़ाने तक का सफ़र',
    hindi: [
      'तेरी गली छूटी तो मयख़ाने का रास्ता अपनाने लगे,',
      'जो बात तुझसे न कह सके वो पैमानों को सुनाने लगे।'
    ],
    hinglish: [
      'Teri gali chhooti toh maikhane ka rasta apnane lage,',
      'Jo baat tujhse na keh sake woh paimanon ko sunane lage.'
    ],
    english: [
      'Once your lane was left behind, my feet learned the way to the tavern,',
      'All the words I could never tell you, I began whispering to my glass.'
    ]
  },
  {
    title: 'शाम का ढलता सूरज और पहला घूँट',
    hindi: [
      'ढलते सूरज के साथ जब यादों का कारवाँ उतरता है,',
      'तब सूने हाथ में ख़ुद ही एक जाम निखरता है।',
      'कोई शौक़िया शराबी नहीं था मैं इस शहर में,',
      'कमबख़्त अकेलापन इंसान को अंदर तक बिखेरता है।'
    ],
    hinglish: [
      'Dhalte suraj ke saath jab yaadon ka karwaan utarta hai,',
      'Tab soone haath mein khud hi ek jaam nikharta hai.',
      'Koi shauqiya sharabi nahi tha main is shehar mein,',
      'Kambakht akelapan insaan ko andar tak bikherta hai.'
    ],
    english: [
      'When the caravan of memories descends with the setting sun,',
      'A quiet goblet naturally finds its place in an empty hand.',
      'I was never a casual drinker in this bustling city,',
      'It is relentless solitude that scatters a person from within.'
    ]
  },
  {
    title: 'नशा उतरने का डर',
    hindi: [
      'पीने से नहीं डरता मैं, बस नशा उतरने से घबराता हूँ,',
      'क्योंकि होश आते ही मैं फिर तन्हा रह जाता हूँ।'
    ],
    hinglish: [
      'Peene se nahi darta main, bas nasha utarne se ghabrata hoon,',
      'Kyunki hosh aate hi main phir tanha reh jaata hoon.'
    ],
    english: [
      'I never fear the drink; I only dread the moment the haze fades,',
      'Because the instant sobriety returns, I am left all alone again.'
    ]
  },
  {
    title: 'आख़िरी जाम और सुबह की अज़ान सी ख़ामोशी',
    hindi: [
      'आख़िरी जाम उठा कर मैंने तेरी ख़ुशी की दुआ माँगी,',
      'अपने हिस्से में तन्हा रात और तेरे हिस्से में सुबह माँगी।',
      'शराबी होकर भी इश्क़ का अदब नहीं भूला हूँ मैं,',
      'हर घूँट में तेरी सलामती की ठंडी हवा माँगी।'
    ],
    hinglish: [
      'Aakhiri jaam utha kar maine teri khushi ki dua maangi,',
      'Apne hisse mein tanha raat aur tere hisse mein subah maangi.',
      'Sharabi hokar bhi ishq ka adab nahi bhoola hoon main,',
      'Har ghoont mein teri salamati ki thandi hawa maangi.'
    ],
    english: [
      'Raising the final glass of the night, I prayed only for your joy,',
      'Asking for lonely nights in my share, and bright mornings in yours.',
      'Even as a drinker, I have never forgotten the grace of love,',
      'In every sip, I wished a gentle breeze of peace upon your life.'
    ]
  },
  {
    title: 'ज़िंदगी का जाम और ख़ुद्दारी',
    hindi: [
      'ग़मों को घोल कर पी गए मगर किसी के आगे हाथ न फैलाया,',
      'मेरी शराबी आँखों ने भी हमेशा ख़ुद्दारी का परचम लहराया।'
    ],
    hinglish: [
      'Ghamon ko ghol kar pee gaye magar kisi ke aage haath na phailaya,',
      'Meri sharabi aankhon ne bhi hamesha khuddari ka parcham lehraya.'
    ],
    english: [
      'I dissolved my sorrows into my cup, yet never begged before anyone,',
      'Even my intoxicated eyes always held high the banner of self-respect.'
    ]
  }
];

const SHARABI_READER_NAMES = [
  'कबीर मेहरा',
  'रोहित राजपूत',
  'आदित्य मिश्रा',
  'विवेक यादव',
  'राहुल चौहान',
  'अमन सक्सेना',
  'हर्षित श्रीवास्तव',
  'आरव शर्मा'
];

export const SHARABI_SHAYARIS: Shayari[] = RAW_SHARABI_ENTRIES.map((entry, idx) => {
  const num = idx + 1;
  const id = `sharabi-${num}`;
  const isOfficial = idx === 0;
  return {
    id,
    category: 'sharabi',
    categoryType: 'feelings',
    categoryName: 'Sharabi Shayari (शराबी शायरी)',
    categoryIcon: '🍷',
    title: entry.title,
    lines: entry.hindi,
    linesHindi: entry.hindi,
    linesHinglish: entry.hinglish,
    linesEnglish: entry.english,
    tags: ['SharabiShayari', 'Maikhana', 'Jaam', 'Mehfil', 'DilKiAwaaz', 'ZQFeelings'],
    author: isOfficial
      ? 'ZQ-FEELINGS 👑 Official'
      : idx % 2 === 1
        ? 'ZQ-FEELINGS 💗'
        : 'दिल की आवाज़ (ZQ)',
    isOfficial,
    initialLikes: 1120 + ((num * 79 + idx * 53) % 1350),
    commentsCount: 1,
    comments: [
      {
        id: `c-${id}-1`,
        userName: SHARABI_READER_NAMES[idx % SHARABI_READER_NAMES.length],
        text: 'महफ़िल और जज़्बातों से भरी लाजवाब शराबी शायरी! 🍷✨',
        date: '29 Oct 2026',
        likes: 5 + (num % 12)
      }
    ]
  };
});
