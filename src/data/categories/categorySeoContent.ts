export interface CategorySeoDetail {
  id: string;
  categoryName: string;
  hindiName: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  introText: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedCategoryIds: string[];
}

export const CATEGORY_SEO_DETAILS: Record<string, CategorySeoDetail> = {
  emotional: {
    id: 'emotional',
    categoryName: 'Emotional Shayari',
    hindiName: 'इमोशनल शायरी',
    seoTitle: 'Best Emotional Shayari in Hindi 2026 - Dil Ki Awaz | ZQ Feelings',
    metaDescription: 'Read Best Emotional Shayari in Hindi (इमोशनल शायरी) 2026. Heart touching jazbaati shayari in 35 languages, 20 stylish fonts on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Emotional Shayari in Hindi 2026 - दिल को छू लेने वाली इमोशनल शायरी',
    introText: 'यहाँ पढ़िए Best Emotional Shayari in Hindi का सबसे बेहतरीन और नया संग्रह। अगर आप अपने दिल के जज़्बात बयां करने के लिए Emotional Shayari ढूँढ रहे हैं, तो ZQ Feelings की यह Emotional Shayari in Hindi सीधे दिल को छू लेगी। 1-क्लिक में कॉपी और व्हाट्सएप पर शेयर करें।',
    faqs: [
      {
        question: 'Emotional Shayari kya hai?',
        answer: 'Emotional Shayari दिल की गहरी भावनाओं, जज़्बातों और दर्द को खूबसूरत अल्फाज़ों में बयां करने वाली शायरी होती है। यह उन पलों में दिल को सुकून देती है जब इंसान अपनी बात खुलकर नहीं कह पाता।'
      },
      {
        question: 'Best Emotional Shayari in Hindi kaun si hai?',
        answer: 'ZQ Feelings पर उपलब्ध Emotional Shayari collection में "कभी-कभी खामोशी भी बहुत कुछ कह जाती है" और "दिल के जज़्बात लफ़्ज़ों में सिमट नहीं पाते" जैसी टॉप रेटेड ओरिजिनल 2-लाइन और 4-लाइन शायरियाँ सबसे लोकप्रिय हैं।'
      },
      {
        question: 'Kya Emotional Shayari ko 35 bhashaon aur 20 fonts me copy kar sakte hain?',
        answer: 'जी हाँ, ZQ Feelings पर हर एक Emotional Shayari को हिंदी, इंग्लिश, हिंग्लिश सहित 35 वैश्विक भाषाओं में और 20 स्टाइलिश फ़ॉन्ट्स में एक क्लिक में कॉपी और व्हाट्सएप/इंस्टाग्राम पर शेयर किया जा सकता है।'
      }
    ],
    relatedCategoryIds: ['sad', 'heart-touching', 'alone', 'yaad', 'love']
  },

  sad: {
    id: 'sad',
    categoryName: 'Sad Shayari',
    hindiName: 'दर्द भरी शायरी',
    seoTitle: 'Best Sad Shayari in Hindi 2026 - Dard Bhari Shayari | ZQ Feelings',
    metaDescription: 'Read Best Sad Shayari in Hindi (दर्द भरी सैड शायरी) 2026. Heartbreak, aansoo & gham shayari in 35 languages, 20 stylish fonts on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Sad Shayari in Hindi 2026 - दर्द भरी सैड शायरी कलेक्शन',
    introText: 'यहाँ पढ़िए Best Sad Shayari in Hindi का सबसे दर्द भरा और भावुक संग्रह। टूटे दिल और उदास पलों के लिए यह Sad Shayari आपके एहसासों को सच्ची आवाज़ देती है। ZQ Feelings की इस Sad Shayari in Hindi को आसानी से कॉपी और शेयर करें।',
    faqs: [
      {
        question: 'Sad Shayari kiske liye hoti hai?',
        answer: 'Sad Shayari उन लोगों के लिए होती है जो दिल टूटने, जुदाई, अकेलेपन या अपनों की बेरुखी का दर्द महसूस कर रहे होते हैं। यह दिल का बोझ हल्का करने का बेहतरीन ज़रिया है।'
      },
      {
        question: 'Best Sad Shayari in Hindi kaise dhoondhein?',
        answer: 'ZQ Feelings - Dil Ki Awaaz पर दर्द भरी शायरी की 25+ मौलिक और चुनिंदा शायरियाँ उपलब्ध हैं जो बिना किसी मिलावट के सीधे दिल के दर्द को बयां करती हैं।'
      },
      {
        question: 'Kya Sad Shayari ko stylish fonts me download kar sakte hain?',
        answer: 'हाँ, आप हर शायरी को 20 अलग-अलग स्टाइलिश फ़ॉन्ट्स में देख सकते हैं और कार्ड इमेज के रूप में डाउनलोड करके इंस्टाग्राम स्टोरी या व्हाट्सएप स्टेटस पर लगा सकते हैं।'
      }
    ],
    relatedCategoryIds: ['emotional', 'alone', 'breakup', 'bewafa', 'yaad']
  },

  love: {
    id: 'love',
    categoryName: 'Love Shayari',
    hindiName: 'प्यार भरी शायरी',
    seoTitle: 'Best Love Shayari in Hindi 2026 - Romantic Mohabbat Shayari | ZQ Feelings',
    metaDescription: 'Read Best Love Shayari in Hindi (प्यार और मोहब्बत शायरी) 2026. True romantic love shayari for girlfriend & boyfriend in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Love Shayari in Hindi 2026 - सच्चे प्यार और मोहब्बत की शायरी',
    introText: 'यहाँ पढ़िए Best Love Shayari in Hindi का सबसे खूबसूरत और रोमांटिक संग्रह। अपने प्यार, महबूब और जीवनसाथी को अपनी मोहब्बत का इज़हार करने के लिए यह Love Shayari सबसे खास है। ZQ Feelings की इस Love Shayari in Hindi से अपने रिश्ते में मिठास घोलें।',
    faqs: [
      {
        question: 'Love Shayari se mohabbat ka izhaar kaise karein?',
        answer: 'Love Shayari की 2-4 मीठी पंक्तियाँ आपके दिल की बात आपके पार्टनर तक बिना झिझक पहुँचा देती हैं। आप यहाँ से एक क्लिक में कॉपी करके व्हाट्सएप मैसेज या इंस्टाग्राम पर भेज सकते हैं।'
      },
      {
        question: 'Best Love Shayari in Hindi kaun si hai?',
        answer: 'ZQ Feelings की "तेरी आँखों में जो सुकून है, वो दुनिया की किसी दौलत में नहीं" जैसी रोमांटिक शायरियाँ सबसे ज्यादा पसंद की जाती हैं।'
      },
      {
        question: 'Kya ye Love Shayari girlfriend/boyfriend dono ke liye hai?',
        answer: 'जी हाँ, यहाँ गर्लफ्रेंड, बॉयफ्रेंड, पति, पत्नी और हर प्रेमी जोड़े के लिए रोमांटिक, मासूम और सच्चे प्यार वाली शायरियाँ मौजूद हैं।'
      }
    ],
    relatedCategoryIds: ['romantic', 'heart-touching', 'emotional', 'yaad', 'dosti']
  },

  attitude: {
    id: 'attitude',
    categoryName: 'Attitude Shayari',
    hindiName: 'एटीट्यूड शायरी',
    seoTitle: 'Best Attitude Shayari in Hindi 2026 - Royal Tevar Status | ZQ Feelings',
    metaDescription: 'Read Best Attitude Shayari in Hindi (एटीट्यूड और तेवर शायरी) 2026. Royal style akad shayari for boys & girls in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Attitude Shayari in Hindi 2026 - रॉयल तेवर और अकड़ शायरी',
    introText: 'यहाँ पढ़िए Best Attitude Shayari in Hindi का सबसे दमदार और रॉयल संग्रह। अपने दुश्मनों को अपनी औकात और खुद का तेवर दिखाने के लिए यह Attitude Shayari सबसे बेहतरीन है। ZQ Feelings की इस Attitude Shayari in Hindi से अपने स्टेटस को दबंग बनाएं।',
    faqs: [
      {
        question: 'Attitude Shayari WhatsApp status par kaise lagayein?',
        answer: 'यहाँ दिए गए Copy बटन पर टैप करें और सीधे अपने व्हाट्सएप या इंस्टाग्राम बायो/स्टेटस में पेस्ट करें। 20 स्टाइलिश फ़ॉन्ट्स में यह शायरी और भी शानदार दिखती है।'
      },
      {
        question: 'Best Attitude Shayari in Hindi boys aur girls dono ke liye hai?',
        answer: 'जी बिल्कुल, यहाँ लड़कों के रॉयल तेवर और लड़कियों के स्वाभिमान व किलर लुक के लिए अलग-अलग ज़बरदस्त एटीट्यूड शायरियाँ उपलब्ध हैं।'
      },
      {
        question: 'Kya Attitude Shayari copy karna free hai?',
        answer: 'हाँ, ZQ Feelings पर सारी शायरियाँ 100% फ्री हैं और एक क्लिक में कॉपी या शेयर की जा सकती हैं।'
      }
    ],
    relatedCategoryIds: ['motivational', 'boys', 'girls', 'dosti', 'alone']
  },

  'miss-you': {
    id: 'miss-you',
    categoryName: 'Miss You Shayari',
    hindiName: 'मिस यू शायरी',
    seoTitle: 'Best Miss You Shayari in Hindi 2026 - Teri Yaad Shayari | ZQ Feelings',
    metaDescription: 'Read Best Miss You Shayari in Hindi (मिस यू और तेरी कमी शायरी) 2026. Heart touching intezaar poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Miss You Shayari in Hindi 2026 - मिस यू और तेरी याद शायरी',
    introText: 'यहाँ पढ़िए Best Miss You Shayari in Hindi का सबसे भावुक और सच्चा संग्रह। जब अपनों की याद बेइंतहा सताए और दिल सिर्फ उन्हीं को पुकारे, तो यह Miss You Shayari आपके दिल की बात कहती है। ZQ Feelings की इस Miss You Shayari in Hindi को अपने खास इंसान को भेजें।',
    faqs: [
      {
        question: 'Miss You Shayari kiske liye bheji ja sakti hai?',
        answer: 'Miss You Shayari आप अपने लवर, दोस्त, माता-पिता या किसी भी ऐसे अज़ीज़ को भेज सकते हैं जिनकी कमी आपको हर पल खल रही हो।'
      },
      {
        question: 'Best Miss You Shayari in Hindi kaun si hai?',
        answer: 'ZQ Feelings की "तेरी यादें हर पल साथ रहती हैं, बस एक तेरा दीदार नहीं होता" जैसी दिल छूने वाली पंक्तियाँ सबसे ज्यादा लोकप्रिय हैं।'
      },
      {
        question: 'Kya ye shayari English aur Hinglish me bhi milti hai?',
        answer: 'हाँ, ऊपर दिए गए भाषा बार से आप इंग्लिश, हिंग्लिश या 33 अन्य भाषाओं में यह मिस यू शायरी तुरंत पढ़ सकते हैं।'
      }
    ],
    relatedCategoryIds: ['yaad', 'alone', 'emotional', 'love', 'sad']
  },

  alone: {
    id: 'alone',
    categoryName: 'Alone Shayari',
    hindiName: 'तन्हाई शायरी',
    seoTitle: 'Best Alone Shayari in Hindi 2026 - Tanhai & Judai Shayari | ZQ Feelings',
    metaDescription: 'Read Best Alone Shayari in Hindi (तन्हाई और अकेलापन शायरी) 2026. Deep quiet night poetry in 35 languages, 20 stylish fonts on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Alone Shayari in Hindi 2026 - तन्हाई और अकेलेपन की शायरी',
    introText: 'यहाँ पढ़िए Best Alone Shayari in Hindi का सबसे शांत और गहराई से भरा संग्रह। भीड़ में भी जब खुद को अकेला महसूस करें, तो यह Alone Shayari आपके जज़्बातों को हमसफ़र बना लेती है। ZQ Feelings की इस Alone Shayari in Hindi को पढ़ें और सुकून पाएं।',
    faqs: [
      {
        question: 'Alone Shayari kab padhni chahiye?',
        answer: 'जब दिल उदास हो, रात की तन्हाई सता रही हो या खुद से बातें करने का मन हो, तब तन्हाई शायरी दिल के घावों को सहलाती है।'
      },
      {
        question: 'Best Alone Shayari in Hindi ki pehchan kya hai?',
        answer: 'सच्ची अलोन शायरी में बनावट नहीं होती, वह इंसान के अकेलेपन और खामोशियों को सच्ची आवाज़ देती है।'
      },
      {
        question: 'Kya Alone Shayari ko copy karke audio sun sakte hain?',
        answer: 'जी हाँ, ZQ Feelings पर आप हर शायरी का ऑडियो सुन सकते हैं और उसे तुरंत कॉपी भी कर सकते हैं।'
      }
    ],
    relatedCategoryIds: ['sad', 'emotional', 'yaad', 'miss-you', 'breakup']
  },

  motivational: {
    id: 'motivational',
    categoryName: 'Motivational Shayari',
    hindiName: 'मोटिवेशनल शायरी',
    seoTitle: 'Best Motivational Shayari in Hindi 2026 - Hausla Success Shayari | ZQ Feelings',
    metaDescription: 'Read Best Motivational Shayari in Hindi (हौसला और सफलता शायरी) 2026. Inspiring hard work status in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Motivational Shayari in Hindi 2026 - हौसला और सफलता की शायरी',
    introText: 'यहाँ पढ़िए Best Motivational Shayari in Hindi का सबसे ऊर्जावान और प्रेरणादायक संग्रह। जब जिंदगी में मुश्किलें आएं और हौसला टूटने लगे, तो यह Motivational Shayari आपको फिर से उठ खड़ा होने की ताकत देगी। ZQ Feelings की इस Motivational Shayari in Hindi को जरूर पढ़ें।',
    faqs: [
      {
        question: 'Motivational Shayari kiske liye faydemand hai?',
        answer: 'यह विद्यार्थियों, युवाओं, उद्यमियों और संघर्ष कर रहे हर व्यक्ति के मन में सकारात्मक ऊर्जा और जीतने का जुनून भर देती है।'
      },
      {
        question: 'Best Motivational Shayari in Hindi kaun si hai?',
        answer: 'ZQ Feelings की "मंजिलें उन्हीं को मिलती हैं जिनके सपनों में जान होती है, पंखों से कुछ नहीं होता हौसलों से उड़ान होती है" जैसी पंक्तियाँ सबसे ज्यादा प्रेरित करती हैं।'
      },
      {
        question: 'Kya ye Motivational Shayari daily status ke liye achhi hai?',
        answer: 'हाँ, सुबह-सुबह व्हाट्सएप स्टेटस या इंस्टाग्राम रील में यह शायरी लगाने से आपके साथ-साथ आपके दोस्तों को भी सकारात्मक ऊर्जा मिलती है।'
      }
    ],
    relatedCategoryIds: ['attitude', 'kismat', 'khushi', '2-line', 'dosti']
  },

  dosti: {
    id: 'dosti',
    categoryName: 'Dosti Shayari',
    hindiName: 'दोस्ती शायरी',
    seoTitle: 'Best Dosti Shayari in Hindi 2026 - Friendship Yaari Shayari | ZQ Feelings',
    metaDescription: 'Read Best Dosti Shayari in Hindi (सच्ची दोस्ती और यारी शायरी) 2026. Heartwarming friend status in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Dosti Shayari in Hindi 2026 - सच्ची दोस्ती और यारी की शायरी',
    introText: 'यहाँ पढ़िए Best Dosti Shayari in Hindi का सबसे सच्चा और प्यारा संग्रह। जिगरी यारों और पक्के दोस्तों के नाम समर्पित यह Dosti Shayari आपकी दोस्ती को और भी मजबूत बनाएगी। ZQ Feelings की इस Dosti Shayari in Hindi को अपने सच्चे दोस्त के साथ शेयर करें।',
    faqs: [
      {
        question: 'Dosti Shayari doston ko kab bhejni chahiye?',
        answer: 'दोस्ती में किसी खास दिन की ज़रूरत नहीं होती। जब भी अपने दोस्त की याद आए या उसे शुक्रिया कहना हो, आप यह शायरी भेज सकते हैं।'
      },
      {
        question: 'Best Dosti Shayari in Hindi kaun si hai?',
        answer: '"दोस्ती वो नहीं जो जान देती है, दोस्ती वो भी नहीं जो मुस्कान देती है, सच्ची दोस्ती तो वो है जो पानी में गिरा आंसू भी पहचान लेती है" ZQ Feelings की सबसे लोकप्रिय दोस्ती शायरी है।'
      },
      {
        question: 'Kya ise dosti ke group me share kar sakte hain?',
        answer: 'जी हाँ, नीचे दिए गए WhatsApp बटन पर क्लिक करके आप सीधे अपने फ्रेंड्स ग्रुप में शेयर कर सकते हैं।'
      }
    ],
    relatedCategoryIds: ['funny', 'love', 'motivational', 'family', 'attitude']
  },

  'good-morning': {
    id: 'good-morning',
    categoryName: 'Good Morning Shayari',
    hindiName: 'गुड मॉर्निंग शायरी',
    seoTitle: 'Best Good Morning Shayari in Hindi 2026 - Suprabhat Wishes | ZQ Feelings',
    metaDescription: 'Read Best Good Morning Shayari in Hindi (सुप्रभात शायरी) 2026. Fresh morning positive wishes in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Good Morning Shayari in Hindi 2026 - सुप्रभात और नई सुबह की शायरी',
    introText: 'यहाँ पढ़िए Best Good Morning Shayari in Hindi का सबसे ताज़ा और सकारात्मक संग्रह। अपने दिन की शुरुआत मीठी दुआओं और मुस्कान के साथ करने के लिए यह Good Morning Shayari सबसे उत्तम है। ZQ Feelings की इस Good Morning Shayari in Hindi से अपनों की सुबह रोशन करें।',
    faqs: [
      {
        question: 'Good Morning Shayari subah bhejne ka kya fayda hai?',
        answer: 'एक खूबसूरत सुप्रभात शायरी अपनों के चेहरे पर मुस्कान लाती है और उनके पूरे दिन को सकारात्मक और ऊर्जावान बना देती है।'
      },
      {
        question: 'Best Good Morning Shayari in Hindi me kya likha hota hai?',
        answer: 'इसमें सूरज की पहली किरण, ईश्वर की वंदना, सुख-समृद्धि की दुआ और खुशहाल जिंदगी की कामना होती है।'
      },
      {
        question: 'Kya ise 20 stylish fonts me share kar sakte hain?',
        answer: 'हाँ, ZQ Feelings पर आप हर गुड मॉर्निंग शायरी का फॉन्ट बदलकर आकर्षक स्टाइल में व्हाट्सएप पर भेज सकते हैं।'
      }
    ],
    relatedCategoryIds: ['good-night', 'motivational', 'khushi', 'love', 'dosti']
  },

  'good-night': {
    id: 'good-night',
    categoryName: 'Good Night Shayari',
    hindiName: 'गुड नाइट शायरी',
    seoTitle: 'Best Good Night Shayari in Hindi 2026 - Shubh Ratri Shayari | ZQ Feelings',
    metaDescription: 'Read Best Good Night Shayari in Hindi (शुभ रात्रि शायरी) 2026. Sweet dream night wishes in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Good Night Shayari in Hindi 2026 - शुभ रात्रि और मीठे सपनों की शायरी',
    introText: 'यहाँ पढ़िए Best Good Night Shayari in Hindi का सबसे सुकून भरा और प्यारा संग्रह। रात के शांत पहर में अपनों को मीठे सपनों और सुकून भरी नींद की दुआ देने के लिए यह Good Night Shayari सबसे खास है। ZQ Feelings की इस Good Night Shayari in Hindi को सोने से पहले जरूर भेजें।',
    faqs: [
      {
        question: 'Good Night Shayari kisse share karein?',
        answer: 'यह आप अपने पार्टनर, परिवार और दोस्तों को रात को सोने से पहले भेजकर उन्हें अपने दिल के करीब होने का एहसास करा सकते हैं।'
      },
      {
        question: 'Best Good Night Shayari in Hindi kaun si hai?',
        answer: 'चाँद-तारों की छांव और मीठे सपनों की दुआओं से सजी ZQ Feelings की शुभ रात्रि शायरियाँ हर किसी के दिल को सुकून देती हैं।'
      },
      {
        question: 'Kya isme audio sunne ka option hai?',
        answer: 'हाँ, आप हर गुड नाइट शायरी को आवाज़ में भी सुन सकते हैं और कार्ड इमेज के साथ डाउनलोड भी कर सकते हैं।'
      }
    ],
    relatedCategoryIds: ['good-morning', 'love', 'alone', 'yaad', 'heart-touching']
  },

  'heart-touching': {
    id: 'heart-touching',
    categoryName: 'Heart Touching Shayari',
    hindiName: 'हार्ट टचिंग शायरी',
    seoTitle: 'Best Heart Touching Shayari in Hindi 2026 - Dil Chhoo Lene Wali | ZQ Feelings',
    metaDescription: 'Read Best Heart Touching Shayari in Hindi (दिल छू लेने वाली शायरी) 2026. Soulful poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Heart Touching Shayari in Hindi 2026 - दिल छू लेने वाली शायरी',
    introText: 'यहाँ पढ़िए Best Heart Touching Shayari in Hindi का सबसे गहरा और रूहानी संग्रह। ऐसे अल्फ़ाज़ जो सीधे दिल में उतर जाएं और आँखों में नमी या लबों पर मुस्कान ला दें, वही Heart Touching Shayari है। ZQ Feelings की इस Heart Touching Shayari in Hindi को महसूस करें।',
    faqs: [
      {
        question: 'Heart Touching Shayari ki khasiyat kya hai?',
        answer: 'यह शायरी बनावटी नहीं होती, बल्कि सीधे दिल के सबसे नाज़ुक जज़्बातों से निकलती है और हर सुनने वाले को अपनी ही दास्तां लगती है।'
      },
      {
        question: 'Best Heart Touching Shayari in Hindi kahan milegi?',
        answer: 'ZQ Feelings - Dil Ki Awaaz पर 100% ओरिजिनल और दिल को छू लेने वाली शायरियों का सबसे बड़ा संग्रह उपलब्ध है।'
      },
      {
        question: 'Kya ye shayari copy karke status me laga sakte hain?',
        answer: 'जी हाँ, एक क्लिक में कॉपी करके आप इसे अपने व्हाट्सएप स्टेटस या इंस्टाग्राम स्टोरी में लगा सकते हैं।'
      }
    ],
    relatedCategoryIds: ['emotional', 'love', 'sad', 'yaad', '2-line']
  },

  '2-line': {
    id: '2-line',
    categoryName: '2 Line Shayari',
    hindiName: 'दो लाइन शायरी',
    seoTitle: 'Best 2 Line Shayari in Hindi 2026 - Short Deep Status | ZQ Feelings',
    metaDescription: 'Read Best 2 Line Shayari in Hindi (दो लाइन की बेहतरीन शायरी) 2026. Short, punchy & deep status in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best 2 Line Shayari in Hindi 2026 - दो लाइन की गहरी शायरी',
    introText: 'यहाँ पढ़िए Best 2 Line Shayari in Hindi का सबसे असरदार और संक्षिप्त संग्रह। कम लफ़्ज़ों में पूरी दास्तां कह देने का हुनर सिर्फ 2 Line Shayari में होता है। सोशल मीडिया स्टेटस और बायो के लिए ZQ Feelings की यह 2 Line Shayari in Hindi सबसे सटीक है।',
    faqs: [
      {
        question: '2 Line Shayari status ke liye kyu best hai?',
        answer: 'यह पढ़ने में आसान, याद रखने में सरल और एक नज़र में दिल पर गहरा असर छोड़ने वाली होती है, इसलिए स्टेटस के लिए परफेक्ट है।'
      },
      {
        question: 'Best 2 Line Shayari in Hindi me kin vishayon par hai?',
        answer: 'यहाँ प्यार, दर्द, एटीट्यूड, जिंदगी और खामोशी पर आधारित चुनिंदा दो लाइन शायरियाँ दी गई हैं।'
      },
      {
        question: 'Kya ise 20 alag-alag fonts me dekh sakte hain?',
        answer: 'हाँ, फ़ॉन्ट बटन दबाकर आप तुरंत 20 अलग-अलग स्टाइल्स में इसे बदल सकते हैं।'
      }
    ],
    relatedCategoryIds: ['attitude', 'motivational', 'heart-touching', 'love', 'sad']
  },

  yaad: {
    id: 'yaad',
    categoryName: 'Yaad Shayari',
    hindiName: 'याद शायरी',
    seoTitle: 'Best Yaad Shayari in Hindi 2026 - Yaadein & Intezaar | ZQ Feelings',
    metaDescription: 'Read Best Yaad Shayari in Hindi (याद और इंतज़ार शायरी) 2026. Touching memories poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Yaad Shayari in Hindi 2026 - याद और इंतज़ार की शायरी',
    introText: 'यहाँ पढ़िए Best Yaad Shayari in Hindi का सबसे मीठा और भावुक संग्रह। बीती यादें और अपनों का इंतज़ार जब दिल को बेचैन करे, तो यह Yaad Shayari आपके एहसासों को अल्फाज़ देती है। ZQ Feelings की इस Yaad Shayari in Hindi को अपने अज़ीज़ के साथ शेयर करें।',
    faqs: [
      {
        question: 'Yaad Shayari kis ehsaas ko bayaan karti hai?',
        answer: 'यह पुरानी यादों, जुदाई के पलों और अपनों के इंतज़ार की बेकरारी को खूबसूरती से बयां करती है।'
      },
      {
        question: 'Best Yaad Shayari in Hindi kaun si hai?',
        answer: '"तेरी यादों से फुर्सत मिले तो दुनिया देखें, तू तो ख्यालों में भी साथ चलती है" ZQ Feelings की लोकप्रिय याद शायरी है।'
      },
      {
        question: 'Kya ye shayari copy karna aasan hai?',
        answer: 'हाँ, सिर्फ कॉपी बटन पर टैप करें और तुरंत किसी को भी भेजें।'
      }
    ],
    relatedCategoryIds: ['miss-you', 'alone', 'love', 'sad', 'emotional']
  },

  kismat: {
    id: 'kismat',
    categoryName: 'Kismat Shayari',
    hindiName: 'किस्मत शायरी',
    seoTitle: 'Best Kismat Shayari in Hindi 2026 - Naseeb & Taqdeer | ZQ Feelings',
    metaDescription: 'Read Best Kismat Shayari in Hindi (किस्मत और नसीब शायरी) 2026. Destiny & fate poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Kismat Shayari in Hindi 2026 - किस्मत और नसीब की शायरी',
    introText: 'यहाँ पढ़िए Best Kismat Shayari in Hindi का सबसे गहरा और यथार्थवादी संग्रह। किस्मत के खेल, नसीब के फैसले और तकदीर की आज़माइश को बयां करती यह Kismat Shayari सीधे दिल पर असर करती है। ZQ Feelings की इस Kismat Shayari in Hindi को पढ़ें।',
    faqs: [
      {
        question: 'Kismat Shayari me kya khasiyat hai?',
        answer: 'यह तकदीर, मेहनत और जिंदगी के उतार-चढ़ाव की हकीकत को बिना किसी दिखावे के बयां करती है।'
      },
      {
        question: 'Best Kismat Shayari in Hindi kaun si hai?',
        answer: 'ZQ Feelings की किस्मत और नसीब पर लिखी गई शायरियाँ इंसान को संघर्ष करने और सब्र रखने की प्रेरणा देती हैं।'
      },
      {
        question: 'Kya ise doosri bhashaon me bhi padh sakte hain?',
        answer: 'जी हाँ, 35 भाषाओं के प्री-ट्रांसलेटेड डेटा में आप इसे अपनी पसंदीदा भाषा में पढ़ सकते हैं।'
      }
    ],
    relatedCategoryIds: ['motivational', 'sad', 'emotional', '2-line', 'alone']
  },

  khushi: {
    id: 'khushi',
    categoryName: 'Khushi Shayari',
    hindiName: 'खुशी शायरी',
    seoTitle: 'Best Khushi Shayari in Hindi 2026 - Smile & Muskaan Wishes | ZQ Feelings',
    metaDescription: 'Read Best Khushi Shayari in Hindi (खुशी और मुस्कान शायरी) 2026. Joyful happiness poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Khushi Shayari in Hindi 2026 - खुशी और मुस्कान की शायरी',
    introText: 'यहाँ पढ़िए Best Khushi Shayari in Hindi का सबसे खुशमिज़ाज और सकारात्मक संग्रह। जिंदगी के हर पल में खुशी ढूँढने और अपनों के चेहरे पर मुस्कान लाने के लिए यह Khushi Shayari सबसे खूबसूरत है। ZQ Feelings की इस Khushi Shayari in Hindi से खुशियाँ बाँटें।',
    faqs: [
      {
        question: 'Khushi Shayari kyu share karni chahiye?',
        answer: 'खुशी बाँटने से दोगुनी होती है। एक प्यारी मुस्कान शायरी किसी के भी उदास दिन को खुशहाल बना सकती है।'
      },
      {
        question: 'Best Khushi Shayari in Hindi kaun si hai?',
        answer: '"मुस्कुराना जिंदगी की सबसे खूबसूरत आदत है, जो हर दर्द को मिटा देती है" जैसी शायरियाँ यहाँ उपलब्ध हैं।'
      },
      {
        question: 'Kya ise stylish font me download kar sakte hain?',
        answer: 'हाँ, 20 स्टाइलिश फ़ॉन्ट्स और सुंदर बैकग्राउंड कार्ड के साथ डाउनलोड कर सकते हैं।'
      }
    ],
    relatedCategoryIds: ['motivational', 'good-morning', 'dosti', 'love', 'funny']
  },

  sorry: {
    id: 'sorry',
    categoryName: 'Sorry Shayari',
    hindiName: 'माफी शायरी',
    seoTitle: 'Best Sorry Shayari in Hindi 2026 - Maafi & Roothna Manana | ZQ Feelings',
    metaDescription: 'Read Best Sorry Shayari in Hindi (माफी और सॉरी शायरी) 2026. Heartfelt apology poetry for loved ones in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Sorry Shayari in Hindi 2026 - दिल से माफी और रूठना-मनाना शायरी',
    introText: 'यहाँ पढ़िए Best Sorry Shayari in Hindi का सबसे सच्चा और पश्चाताप से भरा संग्रह। जब गलती हो जाए और दिल से माफी माँगनी हो, तो यह Sorry Shayari रूठे हुए अपनों का गुस्सा पिघला देती है। ZQ Feelings की इस Sorry Shayari in Hindi से अपनों को मनाएं।',
    faqs: [
      {
        question: 'Sorry Shayari se roothe hue ko kaise manayein?',
        answer: 'सच्चे दिल से भेजी गई 2 लाइन की माफी शायरी किसी का भी दिल पिघला सकती है और रिश्ते को टूटने से बचा लेती है।'
      },
      {
        question: 'Best Sorry Shayari in Hindi kiske liye uplabdh hai?',
        answer: 'माँ, पापा, बीवी, पति, दोस्त और लवर - सभी के लिए अलग-अलग विशिष्ट माफ़ी शायरियाँ उपलब्ध हैं।'
      },
      {
        question: 'Kya ye shayari copy karke turant WhatsApp par bhej sakte hain?',
        answer: 'जी हाँ, एक क्लिक में कॉपी और व्हाट्सएप डायरेक्ट शेयर बटन उपलब्ध है।'
      }
    ],
    relatedCategoryIds: ['love', 'emotional', 'heart-touching', 'dosti', 'family']
  },

  bewafa: {
    id: 'bewafa',
    categoryName: 'Bewafa Shayari',
    hindiName: 'बेवफ़ा शायरी',
    seoTitle: 'Best Bewafa Shayari in Hindi 2026 - Dhokha & Broken Trust | ZQ Feelings',
    metaDescription: 'Read Best Bewafa Shayari in Hindi (बेवफ़ा और धोखा शायरी) 2026. Painful betrayal poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Bewafa Shayari in Hindi 2026 - बेवफ़ाई और टूटे भरोसे की शायरी',
    introText: 'यहाँ पढ़िए Best Bewafa Shayari in Hindi का सबसे गहरा और दर्द भरा संग्रह। जब प्यार में धोखा मिले और अपना ही बेवफा निकल जाए, तो यह Bewafa Shayari दिल के दर्द को अल्फाज़ देती है। ZQ Feelings की इस Bewafa Shayari in Hindi को पढ़ें।',
    faqs: [
      {
        question: 'Bewafa Shayari kyu padhi jaati hai?',
        answer: 'धोखे और बेवफाई के दर्द से जूझ रहे लोगों के लिए यह शायरी अपने दर्द को निकालने और दिल हल्का करने का साधन बनती है।'
      },
      {
        question: 'Best Bewafa Shayari in Hindi ki pehchan kya hai?',
        answer: 'यह झूठे वादों और टूटे हुए यकीन के कड़वे सच को सीधे शब्दों में सामने रखती है।'
      },
      {
        question: 'Kya ise audio me sun sakte hain?',
        answer: 'हाँ, हर शायरी के साथ टेक्स्ट-टू-स्पीच ऑडियो प्लेयर उपलब्ध है।'
      }
    ],
    relatedCategoryIds: ['sad', 'breakup', 'alone', 'emotional', 'matlabi-duniya']
  },

  breakup: {
    id: 'breakup',
    categoryName: 'Breakup Shayari',
    hindiName: 'ब्रेकअप शायरी',
    seoTitle: 'Best Breakup Shayari in Hindi 2026 - Heartbreak Judai Status | ZQ Feelings',
    metaDescription: 'Read Best Breakup Shayari in Hindi (ब्रेकअप शायरी) 2026. Heartbreak & separation poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Breakup Shayari in Hindi 2026 - ब्रेकअप और जुदाई की शायरी',
    introText: 'यहाँ पढ़िए Best Breakup Shayari in Hindi का सबसे असरदार और भावुक संग्रह। रिश्ते के अंत और जुदाई के गम में यह Breakup Shayari आपके टूटे दिल के हर जज़्बात को आवाज़ देती है। ZQ Feelings की इस Breakup Shayari in Hindi से खुद को संभालें।',
    faqs: [
      {
        question: 'Breakup Shayari kab kaam aati hai?',
        answer: 'जब रिश्ता टूट जाए और दिल भारी हो, तब ब्रेकअप शायरी इंसान को अकेलापन दूर करने और आगे बढ़ने का हौसला देती है।'
      },
      {
        question: 'Best Breakup Shayari in Hindi kaun si hai?',
        answer: 'ZQ Feelings की "रास्ते जुदा हुए तो क्या, यादें तो हमेशा साथ रहेंगी" जैसी पंक्तियाँ सबसे ज्यादा पसंद की जाती हैं।'
      },
      {
        question: 'Kya ise stylish fonts me status par laga sakte hain?',
        answer: 'हाँ, 20 स्टाइलिश फ़ॉन्ट्स में इसे कस्टमाइज़ करके स्टेटस लगाया जा सकता है।'
      }
    ],
    relatedCategoryIds: ['sad', 'bewafa', 'alone', 'emotional', 'yaad']
  },

  family: {
    id: 'family',
    categoryName: 'Family Shayari',
    hindiName: 'परिवार शायरी',
    seoTitle: 'Best Family Shayari in Hindi 2026 - Parivar & Ghar Status | ZQ Feelings',
    metaDescription: 'Read Best Family Shayari in Hindi (परिवार और माँ-पापा शायरी) 2026. Warm home poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Family Shayari in Hindi 2026 - परिवार और माँ-बाप के प्यार की शायरी',
    introText: 'यहाँ पढ़िए Best Family Shayari in Hindi का सबसे प्यारा और अपनापन भरा संग्रह। माँ-पापा और पूरे परिवार के प्यार और त्याग को समर्पित यह Family Shayari हर घर में खुशियाँ भर देगी। ZQ Feelings की इस Family Shayari in Hindi को अपने पारिवारिक ग्रुप में शेयर करें।',
    faqs: [
      {
        question: 'Family Shayari kiske liye hoti hai?',
        answer: 'यह माता-पिता, भाई-बहन और पूरे संयुक्त परिवार के प्रेम, संस्कार और एकता को बयां करने वाली शायरी है।'
      },
      {
        question: 'Best Family Shayari in Hindi kaun si hai?',
        answer: '"जिस घर में माँ-बाप की दुआएं होती हैं, वहाँ कभी गम के बादल नहीं छाते" ZQ Feelings की लोकप्रिय पारिवारिक शायरी है।'
      },
      {
        question: 'Kya ise WhatsApp family group me bhej sakte hain?',
        answer: 'जी हाँ, एक क्लिक में कॉपी करके आप सीधे अपने परिवार के ग्रुप में शेयर कर सकते हैं।'
      }
    ],
    relatedCategoryIds: ['bhai-behen', 'dosti', 'love', 'motivational', 'khushi']
  },

  funny: {
    id: 'funny',
    categoryName: 'Funny Shayari',
    hindiName: 'फनी शायरी',
    seoTitle: 'Best Funny Shayari in Hindi 2026 - Jokes & Comedy Shayari | ZQ Feelings',
    metaDescription: 'Read Best Funny Shayari in Hindi (मज़ेदार फनी शायरी) 2026. Hilarious jokes and laughter poetry in 35 languages on ZQ Feelings - Dil Ki Awaaz.',
    h1: 'Best Funny Shayari in Hindi 2026 - मज़ेदार फनी और चुटकुले शायरी',
    introText: 'यहाँ पढ़िए Best Funny Shayari in Hindi का सबसे मज़ेदार और हंसी से लोटपोट करने वाला संग्रह। उदास चेहरे पर तुरंत ठहाका लाने के लिए यह Funny Shayari सबसे लाजवाब है। ZQ Feelings की इस Funny Shayari in Hindi को दोस्तों के साथ शेयर करें और हँसते रहें।',
    faqs: [
      {
        question: 'Funny Shayari kyu padhni chahiye?',
        answer: 'हंसी सेहत के लिए सबसे अच्छी दवा है। यह दिन भर की थकान और तनाव को एक पल में मिटा देती है।'
      },
      {
        question: 'Best Funny Shayari in Hindi kin topics par hai?',
        answer: 'यहाँ पढ़ाई, परीक्षा, शादी, दोस्ती और रोजमर्रा की जिंदगी पर आधारित हास्यप्रद शायरियाँ दी गई हैं।'
      },
      {
        question: 'Kya ise friends group me share kar sakte hain?',
        answer: 'हाँ, WhatsApp और Telegram पर एक क्लिक में डायरेक्ट शेयरिंग उपलब्ध है।'
      }
    ],
    relatedCategoryIds: ['dosti', 'khushi', 'attitude', 'boys', 'girls']
  }
};

export function getCategorySeoDetail(categoryId?: string): CategorySeoDetail | null {
  if (!categoryId) return null;
  const cleanId = categoryId.toLowerCase().trim().replace(/-shayari$/, '');
  return CATEGORY_SEO_DETAILS[cleanId] || null;
}
