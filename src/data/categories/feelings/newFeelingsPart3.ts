import { Shayari } from '../../../types/shayari';
import { buildCategoryShayaris, RawPoemTuple } from './shayariBuilder';

// 21. Birthday Shayari (30 unique 25-40 word poems)
const BIRTHDAY_FEELINGS_POEMS: readonly RawPoemTuple[] = [
  [
    'जन्मदिन की सुबह आपके आँगन में उजाला लाए,\nहर गुज़रता पल चेहरों पर नई मुस्कान सजाए,\nदिल की गहराइयों से निकलती है यही एक दुआ,\nरब आपकी ज़िंदगी को खुशियों का गुलिस्ताँ बनाए।',
    'May birthday dawn bring warm radiance into your courtyard,\nGracing every passing moment with bright smiles,\nRising sincerely from deep within our hearts today,\nMay grace turn your life into a blooming garden.'
  ],
  [
    'मोमबत्तियों की रोशनी से जगमगाए आपका हर सपना,\nहमेशा साथ रहे आपके हर सच्चा और प्यारा अपना,\nसालगिरह के इस पावन दिन पर मुबारकबाद क़ुबूल हो,\nकभी कम न हो आपके चेहरे का यूँ ही चमकना।',
    'May candlelight illuminate every cherished dream ahead,\nKeeping loving companions always close beside you,\nAccept warm birthday wishes on this special day,\nMay the glow upon your face never fade.'
  ],
  [
    'सूरज की पहली किरण आज आपका नाम गुनगुनाए,\nहवा का हर झोंका खुशबू की सौगात पहुँचाए,\nजन्मदिन मुबारक हो आपको हज़ारों दुआओं के संग,\nक़दम-क़दम पर कामयाबी आपका माथा चूमने आए।',
    'May morning first sunbeam hum your name gently,\nCarrying fragrant blessings on every passing breeze,\nHappy birthday wrapped in countless heartfelt prayers,\nMay triumph greet your footsteps at every turn.'
  ],
  [
    'तारीख़ वही है मगर इस साल रौनक कुछ ख़ास है,\nक्योंकि आपकी मुस्कुराहट हमारे दिल के बहुत पास है,\nजन्मदिन पर मांगी है रब से आपकी लंबी उमर,\nआपकी मौजूदगी से ही रिश्तों में मीठा एहसास है।',
    'Same calendar date returns wearing brighter charm today,\nBecause your laughter stays precious to our hearts,\nPraying sincerely for your long and healthy years,\nYour presence fills every bond with warmth.'
  ],
  [
    'फूलों ने कलियों से मिलकर आज महफ़िल सजाई है,\nसितारों ने आसमान से मीठी मुबारकबाद भिजवाई है,\nजन्मदिन का ये सुनहरा पल मुबारक हो मेरे अज़ीज़,\nआपकी सादगी ने सबके दिलों में जगह बनाई है।',
    'Blossoms and buds gather celebrating joyfully today,\nStarlit skies send sweet greetings down below,\nBlessed be this golden birthday moment dear friend,\nYour gentle grace wins every heart effortlessly.'
  ],
  [
    'हर साल से ज़्यादा हसीन आपका ये नया साल गुज़रे,\nकामयाबी के शिखर पर आपका हर एक ख़याल गुज़रे,\nजन्मदिन की ढेरों शुभकामनाएँ स्वीकार कीजिए दिल से,\nहँसी-ख़ुशी में आपका आने वाला हर फ़िलहाल गुज़रे।',
    'May this new year unfold lovelier than before,\nLifting every aspiration toward bright summits,\nReceive abundant birthday wishes from our hearts,\nMay joyful peace fill all your coming days.'
  ],
  [
    'केक की मिठास से भी मीठे आपके सारे रिश्ते रहें,\nआपकी हिफ़ाज़त में हमेशा नेक दुआओं के फ़रिश्ते रहें,\nजन्मदिन पर यही तमन्ना है हमारी आपके वास्ते,\nआपके सफ़र में सदा सुकून के उजले रास्ते रहें।',
    'May your bonds stay sweeter than celebration cake,\nGuarded gently by angels of sincere prayer,\nThis remains our dearest birthday wish for you,\nMay serene sunlit paths guide your journey.'
  ],
  [
    'आज के दिन ज़मीन पर एक प्यारा सितारा उतरा था,\nजिसकी नेक सीरत से हर रिश्ते का रंग निखरा था,\nजन्मदिन मुबारक हो आपको ज़िंदगी के हर मोड़ पर,\nसँवरता रहे हर वो ख़्वाब जो कभी बिखरा था।',
    'On this date a bright star graced our world,\nEnriching every relationship through noble warmth,\nHappy birthday across every turn of life ahead,\nMay every scattered dream blossom whole again.'
  ],
  [
    'नए साल की उम्र में नई उम्मीदों के पंख लगें,\nआपके हर नेक इरादे में कामयाबी के रंग लगें,\nजन्मदिन की शाम सजे अपनों की प्यारी महफ़िल से,\nऔर ख़ुशियों के काफ़िले हमेशा आपके संग लगें।',
    'May fresh wings of hope lift this new year,\nPainting noble intentions in vibrant success,\nMay birthday evening glow beside loved ones,\nKeeping caravans of joy walking with you.'
  ],
  [
    'तोहफ़े में क्या दें आपको जब दुआएँ अनमोल हैं,\nआपकी मीठी वाणी के आगे फ़ीके सारे बोल हैं,\nजन्मदिन मुबारक हो ऐ दिल के सबसे क़रीबी इंसान,\nहमारी ज़िंदगी में आपकी मौजूदगी का बड़ा मोल है।',
    'No wrapped gift matches priceless prayers today,\nGentle words pale beside your kind voice,\nHappy birthday to someone truly cherished,\nYour presence holds timeless value in life.'
  ],
  [
    'हवाओं में घुली है आज जश्न की प्यारी सी मिठास,\nहर चेहरा दिख रहा है आज मुस्कुराता हुआ ख़ास,\nजन्मदिन की लख-लख बधाइयाँ कबूल कीजिए हमारी,\nसदा बना रहे आपके भीतर हौसलों का विश्वास।',
    'Festive sweetness lingers softly in the air today,\nEvery face shines brighter wearing warm smiles,\nAccept countless joyful birthday congratulations,\nMay steady confidence always live within you.'
  ],
  [
    'उम्र का एक और सुनहरा पन्ना आज खुलने जा रहा है,\nतजुर्बों के मोतियों से नया सफ़र सजने जा रहा है,\nजन्मदिन मुबारक हो आपको पूरे परिवार की ओर से,\nख़ुशियों का मधुर तराना आपके आँगन बजने जा रहा है।',
    'Another golden page of life opens bright today,\nAdorning your path with pearls of wisdom,\nWarmest birthday wishes from all your loved ones,\nMelodies of happiness echo across your home.'
  ],
  [
    'चाँद से माँग ली चाँदनी और फूलों से माँगी महक,\nआपके जन्मदिन पर चिड़ियों से माँग ली मीठी चहक,\nईश्वर रखे आपको हर बुरी नज़र से कोसों दूर,\nआपकी हँसी से रोशन रहे घर-आँगन की हर दहक।',
    'Borrowed silver moonlight and fresh floral scent,\nGathered cheerful birdsong for your birthday dawn,\nMay providence shield you far from every harm,\nBrightening home hearths through your warm laughter.'
  ],
  [
    'न कोई ग़म पास आए न आँखों में नमी ठहरे,\nआपकी मुस्कान के आगे वक़्त की रफ़्तार भी ठहरे,\nजन्मदिन के इस ख़ूबसूरत अवसर पर दुआ है हमारी,\nआपके क़दमों तले कामयाबी की पुख़्ता ज़मीं ठहरे।',
    'May zero sorrow or tears touch your eyes,\nMaking hurried time pause before your smile,\nOn this lovely birthday occasion we pray,\nFirm ground of success rests beneath your feet.'
  ],
  [
    'गुब्बारों के रंगों जैसी रंगीन आपकी हर सुबह रहे,\nसच्चाई और नेकी की हमेशा आप पर निगाह रहे,\nजन्मदिन मुबारक हो मेरे सबसे अज़ीज़ हमसफ़र को,\nमंज़िलों तक पहुँचने वाली आसान आपकी राह रहे।',
    'May every morning shine colorful like festive balloons,\nWatched tenderly by truth and gentle goodness,\nHappy birthday to a deeply treasured companion,\nMay smooth roads carry you to every goal.'
  ],
  [
    'दिल की किताब में आपका नाम सबसे ऊपर लिखा है,\nआपसे ही हमने रिश्तों को सच्चा निभाना सीखा है,\nजन्मदिन पर भेजते हैं गुलदस्ता दुआओं से भरा,\nआपके बिना ख़ुशियों का हर मौसम बिल्कुल फ़ीका है।',
    'Your name rests first inside my heart pages,\nFrom you we learned true devotion in bonds,\nSending a bouquet woven from sincere prayers,\nWithout you every joyful season feels incomplete.'
  ],
  [
    'सूरज जैसी तेज़ चमक और समंदर सी गहराई मिले,\nआपको जीवन में सच्चे दोस्तों की परछाई मिले,\nजन्मदिन की हार्दिक बधाई हो आपको बारंबार,\nहर इम्तिहान में आपको शानदार विजय और बड़ाई मिले।',
    'Receive solar brilliance paired with ocean depth,\nBlessed always by shadows of loyal friends,\nHeartfelt birthday greetings again and again,\nMay honorable victory crown your every test.'
  ],
  [
    'मेहनत का फल मीठा मिले और सपनों को आकाश मिले,\nअँधेरी राहों में भी उम्मीदों का उजला प्रकाश मिले,\nजन्मदिन मुबारक हो आपको ढेर सारे स्नेह के साथ,\nज़िंदगी के हर पन्ने पर ख़ुशियों का इतिहास मिले।',
    'May honest effort bear fruit under open skies,\nLighting hopeful lamps along shadowy trails,\nHappy birthday wrapped in abundant affection,\nMay joyful chapters fill your life story.'
  ],
  [
    'साल में एक बार आता है ये सबसे प्यारा त्योहार,\nजब बरसता है आप पर सबकी दुआओं का दुलार,\nजन्मदिन की अनंत शुभकामनाएँ क़ुबूल करो मेरे यार,\nरब करे दिन दूना रात चौगुना बढ़े आपका सत्कार।',
    'Once a year arrives this cherished celebration,\nShowering loving blessings richly upon you,\nAccept endless birthday wishes my dear friend,\nMay respect and honor multiply around you.'
  ],
  [
    'हँसते रहो खिलखिलाते रहो सदा बहारों की तरह,\nअँधेरों में भी चमकते रहो रोशन सितारों की तरह,\nजन्मदिन पर यही तोहफ़ा भेजते हैं लफ़्ज़ों में पिरोकर,\nमहकती रहे आपकी शख़्सियत चंदन के नज़ारों की तरह।',
    'Keep smiling brightly like eternal spring blossoms,\nShining steady through night like guiding stars,\nSending this poetic gift on your birthday today,\nMay your character glow fragrant like sandalwood.'
  ],
  [
    'नया सवेरा नई उमंग लेकर आपकी दहलीज़ पर आया है,\nतितलियों ने रंगों से आपका प्यारा आँगन सजाया है,\nजन्मदिन की बधाई हो उस शख़्स को दिल की गहराई से,\nजिसने हर मुश्किल घड़ी में मुस्कुराना सिखाया है।',
    'Fresh dawn brings lively spirit to your doorstep,\nButterflies paint vibrant hues across your yard,\nHeartfelt birthday wishes to that special soul,\nWho taught everyone courage through gentle smiles.'
  ],
  [
    'ख़ुदा करे आपकी झोली में कभी कोई कमी न रहे,\nपलकों के कोनों पर उदासी की हल्की नमी न रहे,\nजन्मदिन मुबारक हो आपको आज और आने वाले कल में,\nआपकी कामयाबी की उड़ान किसी मंज़िल पर थमी न रहे।',
    'May divine grace leave zero lack in your life,\nBrushing every trace of mist from your lashes,\nHappy birthday today and through coming years,\nMay your soaring flight rise beyond horizons.'
  ],
  [
    'चमकती रहे आँखों में सपनों की सुनहरी सी ज्योति,\nपिरोता रहे वक़्त आपकी माला में खुशियों के मोती,\nजन्मदिन की मुबारकबाद देते हैं हाथ जोड़कर रब से,\nआप जैसी नेक रूह दुनिया में बहुत कम है होती।',
    'May golden dreamlight sparkle inside your eyes,\nStringing pearls of joy along passing time,\nOffering folded-hand prayers on your birthday,\nSouls as kindhearted as yours remain rare.'
  ],
  [
    'हर दुआ में आज सिर्फ़ आपकी सलामती का ज़िक्र है,\nहमें आपकी मुस्कान और आपकी सेहत की फ़िक्र है,\nजन्मदिन पर सलामत रहे आपका ये हँसता हुआ नूर,\nक्योंकि आपकी ख़ुशी में ही हमारी ख़ुशी का शुक्र है।',
    'Every prayer today whispers your well-being,\nCaring deeply for your health and laughter,\nMay radiant grace stay intact on your birthday,\nOur gratitude blooms seeing you truly happy.'
  ],
  [
    'बीते कल की कड़वाहट भूलकर आज का जश्न मनाइए,\nअपनों के संग बैठकर दिल खोलकर मुस्कुराइए,\nजन्मदिन लाया है ज़िंदगी में नई शुरुआत का पैग़ाम,\nहौसलों की कलम से अपना नया मुक़द्दर सजाइए।',
    'Leave yesterday worries behind and celebrate now,\nLaugh wholeheartedly beside cherished family,\nBirthday dawn brings word of fresh beginnings,\nWrite bright destiny ahead with courageous ink.'
  ],
  [
    'बारिश की बूँदों सी ताज़गी आपके स्वभाव में रहे,\nशालीनता और सादगी हमेशा आपके प्रभाव में रहे,\nजन्मदिन की बहुत-बहुत बधाई हो हमारे प्यारे सितारे को,\nन कभी ज़िंदगी किसी चीज़ के अभाव में रहे।',
    'May raindrop freshness dwell in your nature,\nKeeping humility and grace in your presence,\nWarmest birthday greetings to our shining star,\nMay life never know scarcity or want.'
  ],
  [
    'दिल से निकली दुआ कभी खाली वापस नहीं जाती,\nसच्चे इंसान की नेकी कभी ज़माने में नहीं भुलाई जाती,\nजन्मदिन मुबारक हो आपको हज़ारों बहारों के साथ,\nआपकी मुस्कान से ही महफ़िल में रौनक है आती।',
    'Sincere prayers from the heart never return empty,\nGenuine goodness is never forgotten by time,\nHappy birthday blessed with countless springs,\nYour warm smile lights up every gathering.'
  ],
  [
    'आसमान जितना ऊँचा आपका मान और सम्मान बढ़े,\nदिन-ब-दिन आपकी क़ाबिलियत की नई पहचान बढ़े,\nजन्मदिन के इस शुभ दिन पर ईश्वर से प्रार्थना है,\nहर क़दम पर आपके सपनों की ऊँची उड़ान बढ़े।',
    'May your honor rise vast like open heavens,\nGrowing recognition for your gifts daily,\nPraying earnestly on this auspicious birthday,\nMay your dreams soar higher every step.'
  ],
  [
    'मीठे लफ़्ज़ों की माला पिरोकर आपके नाम करते हैं,\nजन्मदिन की सुबह आपको दिल से सलाम करते हैं,\nखिलता रहे आपका जीवन कमल के सुंदर फूल जैसा,\nयही दुआ रब की बारगाह में सुबह-शाम करते हैं।',
    'Weaving sweet words into a garland for you,\nSaluting your birthday morning wholeheartedly,\nMay your life bloom pure like a lotus,\nWhispering this prayer morning and evening.'
  ],
  [
    'सितारों की महफ़िल सजी है आज आपके सम्मान में,\nख़ुशियों के पंछी उड़ रहे हैं खुले आसमान में,\nजन्मदिन मुबारक हो आपको ज़िंदगी की हर डगर पर,\nसदा मिठास घुली रहे आपकी प्यारी सी मुस्कान में।',
    'Constellations gather tonight honoring your spirit,\nBirds of joy glide across open skies,\nHappy birthday along every pathway of life,\nMay gentle sweetness forever grace your smile.'
  ]
];

// 22. Miss You Shayari (30 unique 25-40 word poems)
const MISS_YOU_POEMS: readonly RawPoemTuple[] = [
  [
    'कमरे की ख़ामोशी में तेरी आवाज़ ढूँढता रहता हूँ,\nअधूरी बातों में छुपा हुआ कोई राज़ ढूँढता रहता हूँ,\nतुम पास नहीं हो फिर भी हर तरफ़ महसूस होते हो,\nहर गुज़रते पल में तेरा ही अंदाज़ ढूँढता रहता हूँ।',
    'In room silence I keep searching for your voice,\nLooking for hidden warmth inside unfinished talks,\nThough far away your presence surrounds me still,\nEvery passing moment seeks your familiar grace.'
  ],
  [
    'चाय की भाप में तेरा अक्स दिखता है,\nदिल का हर पन्ना तेरा ही नाम लिखता है,\nकितना मिस करते हैं तुम्हें लफ़्ज़ कैसे बताएँ,\nतेरे बिना भरा शहर भी सूना दिखता है।',
    'Rising tea steam sketches your gentle reflection,\nEvery heart page still writes your name softly,\nWords fail to measure how deeply I miss you,\nWithout you even crowded streets feel empty.'
  ],
  [
    'हवा जब खिड़की के पर्दों को धीरे से हिलाती है,\nकसम से उस पल तेरी कमी बहुत ज़्यादा सताती है,\nसोचता हूँ फ़ोन उठाकर अभी हाल पूछ लूँ तुम्हारा,\nमगर फ़ासलों की मजबूरी क़दम पीछे खींच लाती है।',
    'Whenever evening breeze stirs the window curtains,\nYour absence aches sharper inside my chest,\nI reach out wishing to hear how you are,\nYet quiet distance pulls my hand back.'
  ],
  [
    'तस्वीर से बातें करते-करते रात आधी गुज़र गई,\nआँखों की नमी तकिये के कोने में चुपचाप उतर गई,\nकब आओगे तुम लौटकर इन सूनी राहों पर बताओ,\nतेरे इंतज़ार में मेरी हर एक शाम ठहर गई।',
    'Midnight passed whispering softly to your photograph,\nSilent tears sank into the corner of my pillow,\nTell me when you will walk back homeward,\nEvery evening stands frozen awaiting your return.'
  ],
  [
    'भीड़ में चलते हुए अचानक तेरा नाम सुनाई देता है,\nमुड़कर देखूँ तो सिर्फ़ ख़ाली रास्ता दिखाई देता है,\nइस क़दर बस गए हो तुम मेरी आदतों के भीतर,\nतेरी याद का क़ैदी दिल कहाँ रिहाई लेता है।',
    'Walking through crowds I suddenly hear your name,\nTurning around reveals only an empty lane,\nSo deeply woven are you inside my habits,\nMy captive heart refuses release from missing you.'
  ],
  [
    'तेरे बिना हँसी भी होठों पर उधार सी लगती है,\nमौसम की हर बहार भी बेक़रार सी लगती है,\nएक बार मिल जाओ तो साँसों को थोड़ा चैन आए,\nवरना ज़िंदगी रोज़ एक लंबे इंतज़ार सी लगती है।',
    'Without you even laughter feels borrowed on lips,\nSpring blossoms seem restless across the garden,\nMeet me once so breathless longing finds calm,\nOtherwise days stretch like endless waiting.'
  ],
  [
    'मोबाइल की स्क्रीन को बेवजह बार-बार देखता हूँ,\nपुराने मैसेज पढ़कर तेरा प्यार बार-बार देखता हूँ,\nदिल मानता ही नहीं कि तुम इतनी दूर चले गए,\nहर आहट पर दरवाज़े के उस पार देखता हूँ।',
    'I check my silent phone screen without reason,\nRereading old messages warm with your affection,\nMy heart cannot accept how far you traveled,\nGlancing past the doorway at every footstep.'
  ],
  [
    'शाम ढलते ही सीने में एक अजीब सी कसक उठती है,\nतेरी पुरानी बातों की मीठी सी महक उठती है,\nकैसे समझाऊँ इस नादान दिल को तेरी गैरमौजूदगी,\nजब हर धड़कन में सिर्फ़ तेरी ही चहक उठती है।',
    'At dusk a quiet ache stirs inside my chest,\nCarrying sweet fragrance of conversations we shared,\nHow can I explain your absence to my heart,\nWhen every heartbeat echoes your lively warmth.'
  ],
  [
    'कुछ लोग दूर होकर भी रूह के पास रहते हैं,\nहर साँस में मीठा सा एहसास रहते हैं,\nतुम्हें याद करने को बहाने की ज़रूरत नहीं,\nतेरे बिना हम भरी महफ़िल में उदास रहते हैं।',
    'Some souls stay close despite miles between,\nBreathing softly like warmth inside every breath,\nMissing you never requires an excuse at all,\nWithout you bright gatherings still feel wistful.'
  ],
  [
    'आसमान के चाँद से रोज़ तेरा हाल पूछा करते हैं,\nनींद से पहले तेरे ख़यालों का जाल बुना करते हैं,\nबहुत याद आते हो तुम जब कोई अपना नहीं होता,\nतन्हा बैठकर तेरी हँसी की गूँज सुना करते हैं।',
    'Nightly I ask the silver moon how you fare,\nWeaving quiet thoughts of you before sleep,\nI miss you deeply in solitary hours,\nListening inwardly to echoes of your laughter.'
  ],
  [
    'तेरी ख़ुशबू आज भी मेरी पुरानी शर्ट में बाक़ी है,\nअधूरी मुलाक़ात की कसक आज भी दिल में बाक़ी है,\nवक़्त तो गुज़र रहा है घड़ी की सुइयों के सहारे,\nमगर तुझे सामने देखने की तलब आज भी बाक़ी है।',
    'Your familiar scent lingers on my old shirt,\nUnfinished meetings still tug gently inside,\nClock hands keep marching steadily ahead,\nYet longing to see you remains unchanged.'
  ],
  [
    'जब भी बारिश की पहली बूँद हथेली पर गिरती है,\nमेरी हर सोच तेरी यादों की गली में फिरती है,\nकाश उड़कर आ जाता मैं अभी तेरे शहर की ओर,\nतेरी कमी में पलकें रोज़ मोतियों सी झरती हैं।',
    'Whenever first raindrops touch my open palm,\nMy thoughts wander straight down your street,\nWish I could fly across to your city now,\nMissing you makes quiet tears fall like pearls.'
  ],
  [
    'हज़ारों चेहरे दिखते हैं रोज़ सफ़र के रास्तों में,\nपर तेरी जैसी सादगी नहीं मिलती किसी की बातों में,\nबहुत मिस करता है ये दिल तेरा वो हक़ जताना,\nऔर बेफ़िक्र होकर जागना उन लंबी मुलाक़ातों में।',
    'Thousands of faces pass along daily roads,\nNone hold the gentle honesty of your words,\nMy heart misses your tender claim over me,\nAnd carefree nights spent talking endlessly.'
  ],
  [
    'तेरे जाने बाद वक़्त कहीं रुक सा गया है,\nख़ुशियों का आसमान नीचे झुक सा गया है,\nलौट आओ अब सब्र होता नहीं दिल से,\nतेरे बिना मुस्कुराने का हुनर छुप सा गया है।',
    'Since you left time feels paused mid-stride,\nSkies of joy bend heavy and low overhead,\nCome back soon for patience wears thin now,\nEven the art of smiling hides without you.'
  ],
  [
    'हर गाने के बोल में आजकल तेरी ही कहानी लगती है,\nसूनी खिड़की से आती हवा भी तेरी ज़ुबानी लगती है,\nइतना आसान नहीं होता किसी अपने से दूर रहना,\nतेरी कमी में हर नई चीज़ भी बेगानी लगती है।',
    'Every song lyric mirrors our story lately,\nBreezes through empty windows speak your tone,\nLiving apart from someone dear never comes easy,\nMissing you makes everything new feel unfamiliar.'
  ],
  [
    'आँखें बंद करूँ तो तेरा मुस्कुराता चेहरा सामने आता है,\nआँखें खोलूँ तो कमरा ख़ाली देखकर दिल घबराता है,\nये फ़ासलों का इम्तिहान आख़िर कब ख़त्म होगा बता,\nहर गुज़रता दिन तेरी याद का बोझ बढ़ाता है।',
    'Closing my eyes brings your smiling face near,\nOpening them to an empty room shakes my heart,\nTell me when this test of distance ends,\nEach passing day deepens the weight of longing.'
  ],
  [
    'वो छोटी-छोटी बातों पर तेरा रूठना बहुत याद आता है,\nफिर एक मुस्कान से मान जाना बहुत याद आता है,\nज़िंदगी चल तो रही है अपने रोज़ के कामों में,\nपर फुरसत मिलते ही तेरा साथ बहुत याद आता है।',
    'I miss how you pouted over tiny things,\nThen melted quickly into a warm forgiving smile,\nDaily routines keep life moving along outside,\nYet quiet pauses ache fiercely for your company.'
  ],
  [
    'सर्द हवाओं में तेरी गर्म हथेली का स्पर्श ढूँढता हूँ,\nउदासी के पन्नों में तेरी हँसी का हर्ष ढूँढता हूँ,\nतुम नहीं जानते कितनी ख़ामोशी से पुकारता हूँ तुम्हें,\nहर दुआ में बस तुझसे मिलने का उत्कर्ष ढूँढता हूँ।',
    'In chilly winds I miss your warm handclasp,\nSeeking bright laughter across wistful pages,\nYou scarcely know how silently I call you,\nEvery prayer asks simply to meet again.'
  ],
  [
    'तेरे शहर जाने वाली हर ट्रेन देखता हूँ,\nदिल के भीतर उठते मीठे दर्द को देखता हूँ,\nकभी संदेश आएगा तेरे आने की ख़ुशख़बरी लेकर,\nइसी उम्मीद में सूने घर का आँगन देखता हूँ।',
    'I watch trains departing toward your distant town,\nFeeling a tender ache stir deep within,\nHoping word arrives announcing your return soon,\nGazing patiently across our quiet courtyard.'
  ],
  [
    'लफ़्ज़ कम पड़ते हैं जब तेरी कमी बयान करता हूँ,\nचुपचाप तारों से तेरी पहचान करता हूँ,\nआई मिस यू कहना तो छोटा सा जुमला है,\nमैं हर साँस तेरी याद पर क़ुर्बान करता हूँ।',
    'Words fall short describing how much you are missed,\nQuietly pointing you out among night stars,\nSaying I miss you feels far too small,\nEvery breath belongs wholly to your memory.'
  ],
  [
    'रात की तन्हाई में तेरा नाम हथेली पर लिखता हूँ,\nज़माने के सामने हँसता हूँ पर अंदर से सिसकता हूँ,\nकमी तेरी कोई दूसरा पूरा कर ही नहीं सकता कभी,\nतेरे बिना मैं टूटे पत्तों की तरह बिखरता हूँ।',
    'In midnight solitude I trace your name on my palm,\nSmiling outwardly while aching softly inside,\nNo one else could ever fill your place,\nWithout you I scatter like autumn leaves.'
  ],
  [
    'सुबह की पहली किरण के साथ तेरा ख़याल जागता है,\nमेरा मन हर रोज़ तेरी ही सलामती माँगता है,\nदूर रहकर भी तुम इस दिल की धड़कन बने हुए हो,\nतेरी यादों का कारवाँ मेरे पीछे-पीछे भागता है।',
    'With morning first light thoughts of you awaken,\nPraying daily for your peace and safety,\nAcross miles you remain my steady heartbeat,\nCaravans of memory follow wherever I walk.'
  ],
  [
    'कभी हिचकी आए तो समझ लेना हम याद कर रहे हैं,\nतस्वीर को देखकर तुझसे ही फ़रियाद कर रहे हैं,\nसूनी पड़ी है ज़िंदगी की हर महफ़िल तेरे बग़ैर,\nहम तन्हाई में बैठकर तेरे लम्हे आबाद कर रहे हैं।',
    'If sudden hiccups come know I remember you,\nPleading gently while gazing at your picture,\nEvery gathering of life feels bare without you,\nKeeping our shared moments alive in solitude.'
  ],
  [
    'रास्ते वही हैं मंज़िलें वही हैं बस तेरा हाथ नहीं,\nकहने को हज़ारों लोग हैं पर कोई मेरे साथ नहीं,\nमिस करता हूँ वो बेपरवाह हँसी जो तेरे संग थी,\nअब तो बातों में पहले जैसी कोई मीठी बात नहीं।',
    'Same roads remain yet your hand is missing,\nSurrounded by crowds while feeling alone inside,\nI miss that carefree laughter shared with you,\nConversations lack their old sweetness now.'
  ],
  [
    'दिल की डायरी में सूखे गुलाब की तरह महकते हो,\nमेरी सूनी आँखों में उम्मीद के दीये से चमकते हो,\nजब भी तन्हाई घेर लेती है चारों तरफ़ से मुझको,\nतुम याद बनकर मेरी पलकों के नीचे दमकते हो।',
    'Like a pressed rose inside my diary you linger,\nGlowing like hopeful lamps behind quiet eyes,\nWhenever solitude closes around me softly,\nYour memory shimmers warm beneath my lashes.'
  ],
  [
    'वक़्त की रेत हाथों से फ़िसलती चली जा रही है,\nतेरी कमी हर रोज़ थोड़ा और रुलाती जा रही है,\nजल्दी मिलो कि अब साँसों का हिसाब भारी लगता है,\nतेरे इंतज़ार में मेरी हर ख़ुशी मुरझाती जा रही है।',
    'Sands of time slip quietly between my fingers,\nYour absence brings deeper tears each passing day,\nMeet me soon before waiting grows heavier,\nEvery small joy wilts longing for your return.'
  ],
  [
    'न दिन को चैन मिलता न रातों नींद आती है,\nतेरी झलक पाने को रूह तड़प जाती है,\nकहते नहीं किसी से अपने दिल का हाल हम,\nमगर तेरी कमी चेहरे से साफ़ पढ़ी जाती है।',
    'Rest eludes daylight and sleep avoids night,\nMy soul yearns simply to catch one glimpse,\nThough I tell nobody how deeply I ache,\nMissing you reads plainly across my face.'
  ],
  [
    'हवा के हाथ भेजा है पैग़ाम ज़रा महसूस करना,\nमेरी ख़ामोश पुकार को अपने दिल में क़ुबूल करना,\nबहुत याद आते हो तुम हर गुज़रते लम्हे के साथ,\nमुलाक़ात की घड़ी को अब और मत फ़िज़ूल करना।',
    'Feel the gentle message sent upon the wind,\nReceive my silent call deep within your heart,\nYou are missed more with every passing hour,\nDelay our long-awaited meeting no further.'
  ],
  [
    'तेरे बग़ैर सावन की फुहारें भी अधूरी लगती हैं,\nमीलों की ये दूरियाँ अब बेहद मजबूरी लगती हैं,\nबस एक बार गले लगकर सारा हाल कह लेने दो,\nवरना ज़िंदगी की सारी खुशियाँ भी कमज़ोर लगती हैं।',
    'Monsoon showers feel incomplete without you near,\nMiles between us weigh heavy with helplessness,\nLet one warm embrace speak everything unsaid,\nOtherwise every worldly joy feels fragile.'
  ],
  [
    'याद करना साँसों की ज़रूरत बन गई है,\nतेरी सादगी दिल की प्यारी सूरत बन गई है,\nकहाँ ढूँढूँ तुम्हें अनजानी गलियों के शोर में,\nतेरी कमी मेरी तन्हाई की मूरत बन गई है।',
    'Remembering you became vital as breathing itself,\nYour simplicity lives sculpted inside my heart,\nWhere can I find you amid noisy streets,\nMissing you shapes every quiet hour I keep.'
  ]
];

// 23. Heart Touching Shayari (30 unique 25-40 word poems)
const HEART_TOUCHING_POEMS: readonly RawPoemTuple[] = [
  [
    'चेहरे की हँसी देखकर दिल का हाल मत आँकना,\nमुस्कुराने वालों ने गहरे दर्द छुपाए होते हैं,\nजो सबकी ख़ातिर हर मोड़ मज़बूत खड़े दिखते हैं,\nतन्हाई में उन्हीं ने तकिये सबसे ज़्यादा भिगाए होते हैं।',
    'Never judge someone heart merely by surface laughter,\nBrightest smiles often shelter the deepest wounds,\nThose standing strong for everyone at every turn,\nSoak their pillows silently during lonely nights.'
  ],
  [
    'रिश्ते पैसों या तोहफ़ों के मोहताज नहीं होते,\nसच्चे दिल बस दो मीठे बोल के भूखे होते हैं,\nजहाँ कद्र न हो जज़्बातों की ख़ामोश रहना बेहतर,\nबेरुख़ी के मौसम में हरे पेड़ भी सूखे होते हैं।',
    'True bonds never depend upon wealth or gifts,\nSincere hearts hunger only for gentle respect,\nWhere feelings go unvalued silence speaks best,\nCold indifference withers even flourishing trees.'
  ],
  [
    'इंसान की असल पहचान उसके बुरे वक़्त में होती है,\nअच्छे दिनों में तो पराये भी हाथ मिलाने आते हैं,\nजो तूफ़ानों के बीच भी कंधे पर हाथ रखे रहे,\nवही चंद लोग ज़िंदगी भर अपने कहलाए जाते हैं।',
    'Hard times reveal who truly stands beside you,\nProsperous days bring even strangers to shake hands,\nWhoever rests a steady palm through fierce storms,\nEarns the rare title of family for life.'
  ],
  [
    'काग़ज़ के फूलों से कभी ख़ुशबू की उम्मीद मत रखना,\nबनावटी लोगों से दिल के गहरे राज़ मत कहना,\nज़माना नमक लिए फिरता है आस्तीन में छुपाकर यहाँ,\nअपने ज़ख़्मों को कोशिश करके ख़ुद ही सहना।',
    'Expect zero fragrance from artificial paper blooms,\nGuard tender secrets away from insincere faces,\nPeople carry hidden salt tucked inside sleeves,\nTend your quiet wounds with dignified strength.'
  ],
  [
    'जब इंसान अंदर से टूट जाता है तो बहस नहीं करता,\nबस मुस्कुराकर हर इल्ज़ाम अपने सिर ले लेता है,\nख़ामोशी उसकी कमज़ोरी नहीं बल्कि सब्र की इंतहा है,\nवो अपना सारा हिसाब वक़्त के हाथों दे देता है।',
    'A deeply broken soul stops arguing altogether,\nAccepting unfair blame with a quiet smile,\nSilence reflects profound patience rather than weakness,\nLeaving final justice gently in time hands.'
  ],
  [
    'वक़्त सब सिखा देता है किताबों की ज़रूरत नहीं पड़ती,\nठोकरें इंसान को उम्र से पहले समझदार बना देती हैं,\nजिन पर हम आँख मूँदकर भरोसा कर बैठते हैं अक्सर,\nउन्हीं की बदली निगाहें जीने का सलीक़ा सिखा देती हैं।',
    'Life teaches lessons no textbook could contain,\nStumbles mature the spirit well before age,\nThose trusted blindly with closed eyes once,\nTeach sober wisdom when their gaze turns cold.'
  ],
  [
    'किसी का दिल दुखाकर सुकून की नींद मत माँगना,\nआह रूह से निकलती है तो अर्श हिला देती है,\nबोए कर्म ही लौटकर एक दिन सामने आते हैं,\nकुदरत नेकी और बदी का पूरा सिला देती है।',
    'Never seek peaceful sleep after hurting innocent hearts,\nSighs rising from wounded souls reach heaven,\nSeeds we plant inevitably return to harvest,\nNature repays every kindness and wrong fairly.'
  ],
  [
    'मासूमियत आज के दौर का गुनाह बन गई है,\nसाफ़ दिल रखना ख़ुद के लिए सज़ा बन गई है,\nलोग इस्तेमाल करके भूल जाते हैं खिलौने सा,\nयहाँ वफ़ादारी ही दर्द मिलने की वजह बन गई है।',
    'Innocence feels treated like a flaw nowadays,\nKeeping an honest heart invites careless hurt,\nPeople discard sincere souls like worn toys,\nLoyalty itself becomes why pain arrives.'
  ],
  [
    'ज़िंदगी में कुछ सफ़र अकेले ही तय करने पड़ते हैं,\nहर मोड़ पर हमदर्द मिले ये ज़रूरी तो नहीं होता,\nआँसू पोंछना अपने हाथों से सीख लो मेरे दोस्त,\nक्योंकि हर सुनने वाला दिल से मजबूरी तो नहीं समझता।',
    'Certain stretches of life must be walked solo,\nSympathy will not greet you at every bend,\nLearn to wipe falling tears with your own hand,\nNot every listener truly understands silent struggle.'
  ],
  [
    'अल्फ़ाज़ के तीर जब अपनों की कमान से निकलते हैं,\nतो ज़ख़्म जिस्म पर नहीं सीधा रूह पर लगते हैं,\nदवाइयों से ठीक हो जाते हैं पत्थर के दिए घाव,\nमगर कड़वे बोल उम्र भर सीने में सुलगते हैं।',
    'When sharp words fly from bows of loved ones,\nThey pierce the spirit deeper than flesh,\nMedicine heals bruises left by heavy stones,\nYet bitter remarks smolder across lifetimes.'
  ],
  [
    'थोड़ी सी जगह दे दो किसी थके हुए मुसाफ़िर को,\nहर मुस्कुराता चेहरा अंदर से खुशहाल नहीं होता,\nज़रा प्यार से पूछ लो किसी उदास बैठे शख़्स का हाल,\nनेकी बाँटने से कभी किसी का नुकसान नहीं होता।',
    'Offer gentle kindness to a weary fellow traveler,\nNot every smiling face feels whole inside,\nAsk softly how a quiet person is holding up,\nSharing compassion never diminishes anyone.'
  ],
  [
    'बचपन की अमीरी अब बड़े होकर कहाँ मिलती है,\nजब काग़ज़ की कश्ती में दुनिया सफ़र करती थी,\nअब जेब में पैसे हैं पर सुकून खो गया,\nतब टूटी पेंसिल ही सबसे बड़ी फ़िक्र होती थी।',
    'Where did childhood boundless wealth disappear,\nWhen paper boats sailed puddles carefree,\nPockets hold money now while peace slips away,\nBack when broken pencils were our biggest worry.'
  ],
  [
    'हमने रिश्तों को बचाने में ख़ुद को इतना झुकाया है,\nकि लोगों ने हमारे स्वाभिमान को ही मज़ाक समझा,\nकदर वहीं तक करो जहाँ सामने वाला भी एहसास रखे,\nबेमोल समर्पण को ज़माने ने हमेशा ख़ाक समझा।',
    'Bending endlessly just to preserve fragile ties,\nMade others mistake humility for lack of worth,\nPour care where mutual respect still breathes,\nBlind sacrifice gets trampled into dust.'
  ],
  [
    'अधूरी ख्वाहिशों का बोझ लिए हर कोई चल रहा,\nकोई सपनों ख़ातिर तो कोई अपनों ख़ातिर जल रहा,\nबाहर से कितना आसान दिखता है सबका जीवन,\nभीतर कितने तूफ़ानों को इंसान अकेला संभाल रहा।',
    'Everyone carries quiet weight of unfulfilled wishes,\nBurning silently for dreams or family duties,\nHow effortless another life appears from afar,\nWhile taming unseen tempests completely alone.'
  ],
  [
    'अगर कोई बिना कहे तुम्हारी ख़ामोशी पढ़ लेता है,\nतो यक़ीन मानो उससे क़ीमती तोहफ़ा कोई नहीं है,\nबोलने पर तो पूरी दुनिया हमदर्दी जताने लगती है,\nबिन बोले समझने वाला हज़ारों में एक ही कहीं है।',
    'If someone reads your silence without explanation,\nTreasure them above every worldly possession,\nAnyone can offer sympathy once pain is spoken,\nUnderstanding unspoken ache remains pricelessly rare.'
  ],
  [
    'घर की ज़िम्मेदारियाँ जब कम उम्र में कंधे दबाती हैं,\nतब शौक़ की सारी किताबें अलमारी में बंद हो जाती हैं,\nख़ुद की ख्वाहिशें मारकर जो परिवार की हँसी चुनते हैं,\nउनकी क़ुर्बानियाँ अक्सर इतिहास में गुम हो जाती हैं।',
    'When household burdens press young shoulders early,\nBooks of personal desire lock quietly away,\nTrading private wishes for family smiles daily,\nSuch quiet sacrifices rarely make headlines.'
  ],
  [
    'धूल जमी थी आईने पर हम चेहरा साफ़ करते रहे,\nगलती दूसरों के नज़रिये में थी हम ख़ुद लड़ते रहे,\nजिस दिन समझ आया सबको खुश रखना नामुमकिन है,\nतब से अपनी सादगी संग आगे बढ़ते रहे।',
    'Dust lay on the mirror while we scrubbed our face,\nFault lived in others lens while we blamed ourselves,\nRealizing nobody can please the entire world,\nFreed us to walk forward in peaceful simplicity.'
  ],
  [
    'कभी-कभी रो लेना भी सेहत के लिए ज़रूरी है,\nहर वक़्त मज़बूत दिखना भी भारी मजबूरी है,\nबादल बरस कर ही हल्के होते हैं आसमान में,\nदिल का ग़ुबार निकले तो उजाला नज़र आता है।',
    'Letting tears fall heals the weary spirit sometimes,\nWearing constant armor turns heavy inside,\nEven dark clouds lighten only after raining,\nReleasing pent-up sorrow clears inner skies.'
  ],
  [
    'माटी का पुतला है इंसान फिर किस बात का घमंड करे,\nसाँस की डोरी टूटते ही सारा रुतबा यहीं रह जाएगा,\nजितना बाँट सको मोहब्बत और दुआएँ बाँट लो आज ही,\nवरना ख़ाली हाथ आया था और ख़ाली हाथ जाएगा।',
    'Shaped from humble clay why boast in pride,\nStatus stays behind once fragile breath departs,\nShare warmth and blessings generously while here,\nEmpty-handed we arrived and so we leave.'
  ],
  [
    'जो लोग छोटी-छोटी बातों पर भी शुक्र अदा करते हैं,\nरब उनके दिलों में सुकून का समंदर उतार देता है,\nशिकायतों से भरी झोली कभी पूरी नहीं होती दोस्त,\nसंतोष ही ज़िंदगी के हर सफ़र को निखार देता है।',
    'Hearts grateful even for small daily mercies,\nReceive oceans of serenity from above,\nBaskets of complaint never feel satisfied friend,\nContentment beautifies every mile of life.'
  ],
  [
    'रिश्ता वही टिकता है जहाँ दोनों तरफ़ कोशिश हो,\nएक हाथ से ताली कब तक बजाई जा सकती है,\nअगर सामने वाला जाने का मन बना चुका हो,\nमिन्नतों की दीवार से राह नहीं रुकाई जा सकती।',
    'Bonds endure only when effort flows both ways,\nOne lone hand cannot clap forever alone,\nOnce someone decides inwardly to walk away,\nNo wall of pleading can hold them back.'
  ],
  [
    'किसी की मजबूरी का मज़ाक मत उड़ाना ज़िंदगी में,\nवक़्त का पहिया घूमते देर नहीं लगती यहाँ,\nआज जो ताज तुम्हारे सिर चमक रहा नाज़ से,\nकल वही किस्मत किसी और दहलीज़ सजती यहाँ।',
    'Never mock someone helplessness along the road,\nFortune wheel turns swifter than imagined,\nToday proud crown shining bright may shift,\nGracing another doorstep tomorrow morning.'
  ],
  [
    'अकेले बैठकर कभी ख़ुद से भी मुलाक़ात किया करो,\nदुनिया की भीड़ से हटकर अपने दिल की बात किया करो,\nसारी उम्र दूसरों को मनाने में गुज़र जाती है अक्सर,\nकभी अपने रूठे हुए मन पर भी बरसात किया करो।',
    'Sit quietly sometimes and meet your own soul,\nStep back from crowds to hear your heart,\nYears slip away soothing everyone around us,\nShower gentle care upon your tired spirit too.'
  ],
  [
    'सच्चे इंसान को हमेशा ग़लत साबित करना आसान होता है,\nक्योंकि वो चालाकी के दाँव-पेंच खेलना नहीं जानता,\nवो हार जाता है अपनों की ख़ुशी की ख़ातिर जानबूझकर,\nमगर ज़माना उसकी शराफ़त की क़ीमत नहीं पहचानता।',
    'Honest souls are easily painted wrong by schemers,\nBecause they refuse to play deceitful games,\nLosing willingly just to keep loved ones happy,\nThough society seldom recognizes quiet nobility.'
  ],
  [
    'पुराने ख़त और सूखे फूल आज भी संभाल कर रखे हैं,\nहमने जज़्बात तिजोरी के सिक्कों से अलग रखे हैं,\nबदलती दुनिया में भले सौदेबाज़ी आम हो गई हो,\nपर हमने अपने उसूल आज भी बेदाग़ कर रखे हैं।',
    'Old letters and pressed blooms stay safely kept,\nCherishing feelings far above silver coins,\nThough transactional habits rule modern streets,\nOur quiet principles remain spotless within.'
  ],
  [
    'ज़ुबान मीठी होना सूरत सुंदर होने से बड़ा है,\nक्योंकि रूप ढल जाता है पर व्यवहार याद रहता है,\nमरने बाद भी लोग उसी को दुआओं में रखते हैं,\nजिसका किरदार मुसीबत में नेक और आबाद रहता है।',
    'Gentle speech outshines outward beauty always,\nYouthful charm fades while kindness endures,\nPeople remember in prayer long afterward,\nCharacter standing noble through every trial.'
  ],
  [
    'कुछ दर्द ऐसे होते हैं जिनका कोई गवाह नहीं होता,\nबस दिल जानता है और ऊपर वाला ख़ुदा जानता है,\nहँसकर टाल देते हैं जब कोई पूछता है उदासी की वजह,\nक्योंकि तमाशा बनने से बेहतर चुप रहना जानता है।',
    'Certain sorrows carry zero earthly witness,\nKnown solely to the heart and heaven above,\nWe brush off questions wearing polite smiles,\nPreferring dignified silence over public spectacle.'
  ],
  [
    'उम्मीदें जितनी कम रखोगे ज़िंदगी उतनी ही आसान होगी,\nदूसरों के सहारे चलोगे तो हर क़दम पर थकान होगी,\nअपनी खुशियों की चाबी अपनी ही जेब में संभालो दोस्त,\nतभी तुम्हारे चेहरे पर हमेशा सच्ची मुस्कान होगी।',
    'Fewer expectations make living remarkably lighter,\nLeaning constantly on others breeds exhaustion,\nKeep the key to happiness inside your pocket,\nLetting authentic peace brighten your face.'
  ],
  [
    'नादान थे तो ज़िंदगी के हर पल का मज़ा लेते थे,\nसमझदार हुए तो मुस्कुराने में भी हिसाब करने लगे,\nकाश कोई लौटा दे वो बेफ़िक्र काग़ज़ की कश्तियाँ,\nजहाँ बिना शर्त हम हर अजनबी से प्यार करने लगे।',
    'In innocent youth we savored every simple moment,\nGrown-up caution measures even spontaneous laughter,\nWish someone returned those carefree paper boats,\nWhen hearts trusted warmly without conditions.'
  ],
  [
    'दिल छू लेती है एक सच्ची हमदर्दी की निगाह,\nवरना नसीहतें देने वाले हर गली में मिलते हैं,\nबन सको तो किसी अँधेरे में छोटा दीया बनो,\nउजाले बाँटने से ही रूह के कमल खिलते हैं।',
    'One genuine look of empathy touches the soul,\nWhile unasked advice fills every street corner,\nBecome a humble lamp inside someone darkness,\nSharing light awakens lotus peace within.'
  ]
];

// 24. Emotional Shayari (30 unique 25-40 word poems)
const EMOTIONAL_POEMS: readonly RawPoemTuple[] = [
  [
    'गले में अटकते हैं लफ़्ज़ जब दिल भर आता है,\nअपना साया तब अजनबी जैसा नज़र आता है,\nरोकना चाहता हूँ पलकों के बाँध पूरी ताक़त से,\nमगर एक पुराना ख़याल सब्र बहा ले जाता है।',
    'Words catch tight inside a heavy throat,\nEven one shadow feels unfamiliar nearby,\nTrying hard to hold trembling eyelids steady,\nOne sudden memory washes patience away.'
  ],
  [
    'कुछ आँसू आँखों से नहीं सीधा दिल पर गिरते हैं,\nहम अँधेरे कमरों में अपनी ही ख़ुशियाँ ढूँढते फिरते हैं,\nकिसी ने पूछा भी नहीं क्यों इतने ख़ामोश हो आजकल,\nसब अपने-अपने मतलब की कहानियाँ बुनते फिरते हैं।',
    'Unseen tears fall inward straight upon the heart,\nSearching quiet rooms for lost fragments of joy,\nNobody paused asking why silence grew deep,\nBusy spinning tales suited to themselves.'
  ],
  [
    'माँ के हाथ की रोटी जब परदेस में याद आती है,\nभरी थाली के सामने भी भूख अचानक मर जाती है,\nकमाने निकले थे घर की खुशियों के वास्ते शहर में,\nयहाँ तन्हा कमरे की छत रात भर रुलाती है।',
    'Remembering mother warm bread far away,\nSteals appetite right beside a full plate,\nLeaving home to earn comfort for family,\nLonely city ceilings witness quiet midnight tears.'
  ],
  [
    'कितना अजीब मोड़ ले लेती है ज़िंदगी कभी-कभी,\nजिनके बिना साँस न चले वही अजनबी हो जाते हैं,\nएक ही छत के नीचे रहकर भी मीलों की दूरी हो,\nजब जज़्बात ही मर जाएँ तो रिश्ते कब बच पाते हैं।',
    'Life takes poignant turns without warning,\nSouls once inseparable drift into strangers,\nMiles widen even beneath a shared roof,\nWhen warmth fades fragile bonds slip away.'
  ],
  [
    'पिता की घिसी हुई चप्पल ने मुझे महँगे जूते दिलाए,\nउन्हीं के झुके कंधों ने मेरे सारे सपने उठाए,\nआज जब कामयाब होकर पीछे मुड़कर देखता हूँ मैं,\nउनकी झुर्रियों में मेरे बचपन के कर्ज नज़र आए।',
    'Father worn sandals bought my polished shoes,\nHis bent shoulders lifted every dream I held,\nLooking back today from hard-won success,\nEvery wrinkle reflects tender debts of love.'
  ],
  [
    'विदाई की दहलीज़ पर जब बेटी का क़दम रुकता है,\nचट्टान से मज़बूत बाप का सर भी तब झुकता है,\nआँगन की चिड़िया जब पराये देश उड़ने लगती है,\nघर का हर कोना उस शाम फूट-फूटकर दुखता है।',
    'When a bride pauses softly at home threshold,\nEven a rock-steady father bows weeping,\nAs courtyard songbird flies toward new skies,\nEvery corner of home aches quietly.'
  ],
  [
    'हमने कभी किसी से शिकायत का एक हर्फ़ नहीं कहा,\nजो भी दर्द मिला उसे अपनी क़िस्मत मानकर सहा,\nफिर भी लोगों को लगता है हमें फ़र्क़ नहीं पड़ता,\nकाश कोई देखता हमारे सीने में कितना तूफ़ान रहा।',
    'Never uttering one syllable of complaint aloud,\nAccepting silent ache patiently as destiny,\nStill others assume nothing ever hurts us,\nIf only someone glimpsed storms held inside.'
  ],
  [
    'टूटते तारे से सबने अपनी-अपनी मुरादें माँग लीं,\nपर किसी ने उस तारे के टूटने का दर्द नहीं सोचा,\nबिल्कुल वैसे ही लोग हमारे काम तो आ जाते हैं,\nमगर हमारे बिखरने का सबब किसी ने नहीं खोजा।',
    'Everyone wished eagerly upon a falling star,\nNone pondered the ache of its breaking,\nPeople gladly gather warmth we give away,\nSeldom asking why our spirit fractured.'
  ],
  [
    'बड़े होने की क़ीमत हमने बचपन खोकर चुकाई है,\nसुकून बेचकर हमने दुनियादारी की समझ कमाई है,\nअब न कोई मनाने आता है न हम खुलकर रोते हैं,\nज़िम्मेदारियों की चादर ओढ़कर हर चोट छुपाई है।',
    'Adulthood cost us our carefree childhood years,\nTrading simple peace for worldly caution,\nNobody coaxes now nor do we weep openly,\nHiding bruises beneath blankets of duty.'
  ],
  [
    'जब अपना ही कोई भरी महफ़िल में नज़रअंदाज़ करे,\nउस वक़्त ज़मीन फट जाए ऐसा दिल चाहता है,\nग़ैरों की नफ़रत तो इंसान हँसकर झेल लेता है,\nअपनों का बदला लहजा जीते-जी मार जाता है।',
    'Being ignored publicly by someone cherished,\nMakes the heart wish earth would part,\nHostility from strangers passes easily enough,\nColdness from loved ones cuts deeply within.'
  ],
  [
    'पुराने घर के ताले पर जब ज़ंग लगी देखी मैंने,\nबचपन की किलकारियाँ जैसे सिसकती हुई सुनीं मैंने,\nदीवारों से झड़ता चूना पूछ रहा था उदास होकर,\nकहाँ गए वो लोग जिनकी ख़ुशियाँ कभी बुनीं मैंने।',
    'Seeing rust crusted over our ancestral lock,\nEchoes of childhood laughter sounded wistful,\nPeeling plaster seemed to whisper softly,\nAsking where went the family it sheltered.'
  ],
  [
    'कभी-कभी मन करता है किसी शांत कोने में बैठ जाऊँ,\nबिना कुछ बोले किसी अपने के कंधे पर सर टिकाऊँ,\nबहुत थक गया हूँ सबको मज़बूत दिखने के नाटक से,\nएक बार तो अपने भीतर का डर खुलकर बता पाऊँ।',
    'Sometimes I long for a quiet corner,\nResting my tired head on trusted shoulders,\nExhausted from pretending constant strength,\nWishing once to voice hidden fears safely.'
  ],
  [
    'आख़िरी मुलाक़ात थी ये उस वक़्त मालूम नहीं था,\nवरना थोड़ा और रुककर तुझे जी भर देख लेते,\nज़िंदगी इतनी जल्दी पन्ना पलट देगी सोचा न था,\nजाते हुए तेरे हाथ को थोड़ी देर और थाम लेते।',
    'Had we known that meeting was our final one,\nWe would have lingered gazing longer,\nNever imagining life would turn pages abruptly,\nHolding your parting hand a while more.'
  ],
  [
    'सफ़र में छूट गए कुछ ऐसे अज़ीज़ चेहरे पीछे,\nजिनकी आवाज़ आज भी कानों में मिश्री घोलती है,\nतस्वीरों पर हाथ फेरकर दिल को तसल्ली दे लेते हैं,\nजब सूने कमरे की तन्हाई सन्नाटे में बोलती है।',
    'Precious faces stayed behind along time road,\nVoices still dissolving sweetness in memory,\nTracing quiet fingers across old photographs,\nWhen empty room silence speaks aloud.'
  ],
  [
    'रोटी की तलाश ने गाँव की चौपालें सूनी कर दीं,\nत्योहारों पर भी अब घर की देहरी उदास रहती है,\nबूढ़ी आँखें सड़क की तरफ़ टकटकी लगाए बैठती हैं,\nशहर गए बेटों की बस एक झलक की प्यास रहती है।',
    'Earning bread emptied lively village courtyards,\nLeaving home thresholds quiet during festivals,\nAging eyes watch the dusty road patiently,\nThirsting simply for children returning home.'
  ],
  [
    'हमने हर रिश्ते में अपना सौ फ़ीसदी सच डाला था,\nकाँटों के बीच भी उम्मीदों का गुलाब पाला था,\nकसूर बस इतना रहा कि हम चालाक बन नहीं पाए,\nजिसको भी सहारा दिया उसी ने हाथ से निकाला था।',
    'Pouring wholehearted truth into every bond,\nNurturing hopeful roses amid sharp thorns,\nOur sole fault was lacking worldly cunning,\nHands we steadied slipped carelessly away.'
  ],
  [
    'ख़ामोश लबों के पीछे हज़ारों चीखें दफ़न होती हैं,\nहर शांत दिखने वाली नदी अंदर से गहरी होती है,\nकिसी के सब्र का इम्तिहान इस हद तक मत लेना,\nक्योंकि टूटे हुए दिल की दुआ भी कहर होती है।',
    'Behind quiet lips countless cries lie buried,\nStill rivers run deepest beneath calm surfaces,\nNever push gentle patience beyond endurance,\nSighs of broken hearts carry solemn weight.'
  ],
  [
    'वो स्कूल का बस्ता और दोस्तों संग टिफ़िन बाँटना,\nबिना मतलब के हँसना और टीचर का प्यार से डाँटना,\nलौटकर नहीं आता वो सुनहरा दौर चाहे लाख चाहो,\nअब तो बस रह गया है तन्हाई में वक़्त काटना।',
    'Schoolbags and sharing lunchboxes beside pals,\nCarefree giggles and gentle teacher scoldings,\nGolden days never return despite deep wishing,\nLeaving grown hearts counting solitary hours.'
  ],
  [
    'अस्पताल की बेंच पर बैठा इंसान ही सच जानता है,\nदौलत और शोहरत को उस पल बेकार मानता है,\nजब अपनों की साँसों के लिए दुआ में हाथ उठते हैं,\nतब इंसान रब की रहमत की असल क़ीमत पहचानता है।',
    'Waiting anxiously upon hospital benches teaches truth,\nWealth and fame shrink meaningless instantly,\nLifting trembling hands praying for loved breath,\nReveals how priceless divine mercy truly is.'
  ],
  [
    'दिल के कोने में कुछ ज़ख़्म हरे रहते हैं,\nवक़्त गुज़रने से उन पर धूल जम जाती है,\nज़रा बात छेड़ दे कोई पुराने दिनों की,\nपलक झपकते आँखों में पूरी नदी उतर आती है।',
    'Certain inner wounds remain tender through years,\nTime merely settles soft dust above them,\nOne casual mention of bygone days,\nBrings quiet rivers rushing behind lashes.'
  ],
  [
    'जिस दिन हमने अपने हक़ के लिए बोलना शुरू किया,\nउसी दिन से हम अपनों की नज़र में बुरे बन गए,\nचुपचाप सहते रहे जब तक सबकी मनमानियाँ यहाँ,\nतब तक ही हम सबके लिए बहुत अच्छे बने रहे।',
    'The day we spoke gently for self-respect,\nPeople suddenly labeled us difficult,\nLong as we endured unfairness silently,\nEveryone praised how agreeable we were.'
  ],
  [
    'माँ की अलमारी में आज भी मेरे बचपन के खिलौने हैं,\nउसके आँचल में छुपे सुकून के मख़मली बिछौने हैं,\nदुनिया जीतकर भी उसके क़दमों में बच्चा बन जाता हूँ,\nक्योंकि बाक़ी सारे रिश्ते उस ममता के आगे बौने हैं।',
    'Mother cupboard still guards my childhood toys,\nHer scarf holds velvet comfort unmatched,\nConquering worlds I remain small beside her,\nEvery earthly bond stands humble before hers.'
  ],
  [
    'वक़्त ने छीने वो कंधे जिन पर सर रख रोते थे,\nजिनकी बातों के साये में बेफ़िक्र सोते थे,\nअब ख़ुद गिरना पड़ता है और ख़ुद संभलना भी,\nबहुत याद आते हैं फ़रिश्ते जो अपने होते थे।',
    'Time took shoulders where tears once rested,\nVoices beneath whose shelter we slept safe,\nFalling and rising alone has become habit,\nDeeply missing angels who called us theirs.'
  ],
  [
    'कभी जेब ख़ाली थी तो दोस्तों संग चाय शाही थी,\nआज बैंक भरा पर साथ बैठने वाला कोई नहीं,\nतरक्की की दौड़ में इतने आगे निकल आए यारो,\nपीछे मुड़कर देखा तो अपनी परछाई खोई कहीं।',
    'Empty pockets once made roadside tea royal,\nFull accounts today lack companions beside us,\nRacing ahead chasing ambition relentlessly,\nLooking back shows how much warmth slipped away.'
  ],
  [
    'हर मुस्कुराती तस्वीर के पीछे एक अनकही कहानी है,\nकुछ खोने का मलाल है और कुछ बची निशानी है,\nज़िंदगी को क़रीब से देखो तो समझ आता है दोस्त,\nयहाँ हर शख़्स की आँखों में थोड़ा-थोड़ा पानी है।',
    'Behind smiling portraits rests an untold story,\nQuiet grief of loss beside cherished keepsakes,\nLook closely at human lives my friend,\nEvery eye carries hidden drops of sorrow.'
  ],
  [
    'जब घर का बड़ा बेटा अपनी तकलीफ़ छुपाना सीख ले,\nफटी जेब रखकर भी सबके तोहफ़े लाना सीख ले,\nसमझ लेना बचपन उसी मोड़ पर रुख़सत हो गया उसका,\nजब वो आँसू निगलकर ज़िम्मेदारी निभाना सीख ले।',
    'When an elder child hides personal pain quietly,\nBringing gifts home despite worn pockets,\nKnow youth departed quietly at that bend,\nSwallowing tears to honor family duty.'
  ],
  [
    'अलविदा कहते वक़्त जो हाथ देर तक हवा में हिलते हैं,\nन जाने फिर ज़िंदगी के किस मोड़ पर दोबारा मिलते हैं,\nरेल की सीटी के साथ जब प्लेटफ़ॉर्म पीछे छूटता है,\nदो धड़कते दिल अपने-अपने आँसुओं में पिघलते हैं।',
    'Hands waving long goodbyes across platforms,\nUncertain when roads may cross again,\nAs train whistles pull stations out of sight,\nTwo beating hearts melt into silent tears.'
  ],
  [
    'हमने अपनी ख़ामोशी में बहुत कुछ समेट रखा है,\nटूटे ख़्वाबों को उम्मीद के धागे में लपेट रखा है,\nबिखरने की इजाज़त नहीं देते हालात हमें कभी,\nइसलिए चेहरे पर हँसी का नक़ाब समेट रखा है।',
    'So much stays folded gently inside silence,\nBroken dreams wrapped in threads of hope,\nCircumstances rarely permit falling apart,\nSo calm smiles guard everything within.'
  ],
  [
    'किसी के जाने से दुनिया का कारोबार नहीं रुकता,\nसूरज रोज़ निकलता है और बाज़ार नहीं रुकता,\nबस उस एक घर का आँगन हमेशा को सूना हो जाता है,\nजहाँ किसी अपने की आवाज़ का इंतज़ार नहीं रुकता।',
    'Worldly routines never halt when someone leaves,\nSunrises return and busy markets hum on,\nOnly one quiet courtyard turns forever still,\nWaiting endlessly for a beloved voice.'
  ],
  [
    'जज़्बाती होना ऐब नहीं बल्कि ज़िंदा दिली है,\nपत्थर सीनों में कहाँ फूलों की कली खिली है,\nरो लेने दो अगर किसी बात पर आँख भरे,\nसंवेदना ही इंसान को कुदरत से देन मिली है।',
    'Feeling deeply is never a flaw in character,\nBlossoms never sprout inside hearts of stone,\nLet honest tears glisten without shame,\nCompassion remains nature finest gift to humanity.'
  ]
];

// 25. Romantic Love Shayari (30 unique 25-40 word poems)
const ROMANTIC_LOVE_POEMS: readonly RawPoemTuple[] = [
  [
    'चाँदनी रात में तेरा हाथ अपने हाथों में थामना,\nबिन बोले आँखों ही आँखों में दिल की बात जानना,\nइश्क़ का इससे हसीन कोई लम्हा हो नहीं सकता,\nतेरी पलकों की छाँव में अपनी पूरी दुनिया मानना।',
    'Holding your gentle hand beneath silver moonlight,\nReading unspoken affection inside your eyes,\nNo moment of romance feels lovelier than this,\nFinding my whole universe beneath your lashes.'
  ],
  [
    'तेरी ज़ुल्फ़ों की छाँव में शाम ढलते देखना चाहता हूँ,\nतेरे कदमों के संग हर मौसम बदलते देखना चाहता हूँ,\nमोहब्बत सिर्फ़ लफ़्ज़ों का इज़हार नहीं है मेरे लिए,\nमैं तेरे साथ उम्र भर चलते देखना चाहता हूँ।',
    'Watching dusk settle softly near your tresses,\nWalking beside you through changing seasons,\nRomance reaches far beyond spoken promises,\nWishing simply to journey lifelong with you.'
  ],
  [
    'जब तुम पास आकर धीरे से मेरा नाम पुकारते हो,\nमेरी बेतरतीब सी दुनिया को पल में सँवारते हो,\nदिल की धड़कन अचानक रफ़्तार बदल लेती है अपनी,\nजब तुम मुस्कुराकर मेरी आँखों में निहारते हो।',
    'When you lean close whispering my name softly,\nMy scattered world falls gently into harmony,\nHeartbeats quicken into sweet rhythm instantly,\nWhenever your smiling gaze meets mine.'
  ],
  [
    'गुलाब की पंखुड़ियों सा नाज़ुक तेरा ये एहसास है,\nहज़ारों की महफ़िल में भी मुझे सिर्फ़ तेरी तलाश है,\nछू लिया जब से तेरी मोहब्बत ने मेरी रूह को,\nहर साधारण सा दिन भी अब लगता बेहद ख़ास है।',
    'Delicate as rose petals feels your affection,\nAmid crowded rooms my eyes seek only you,\nSince your tender love touched my spirit,\nEvery ordinary day glows remarkably special.'
  ],
  [
    'बारिश की रिमझिम और एक छाते के नीचे हम दोनों,\nहवाओं की शरारत में भीगते हुए हमारे मन दोनों,\nवक़्त वहीं ठहर जाए बस यही इल्तिजा है रब से,\nताकि एक-दूसरे की धड़कनें जी भरकर सुन लें दोनों।',
    'Soft rain falling over one shared umbrella,\nPlayful breezes drenching two happy hearts,\nPraying time pauses right at this turn,\nListening closely to each other heartbeats.'
  ],
  [
    'तेरे माथे पर प्यार से एक छोटा सा बोसा देना,\nसारी थकान तेरी बाहों के घेरे में खो देना,\nरोमांस का मतलब महँगे तोहफ़े नहीं होता जानम,\nबस तेरे सुख-दुख में हमेशा तेरा हो लेना।',
    'Pressing a tender kiss upon your forehead,\nMelting daily weariness inside your embrace,\nTrue romance never asks for lavish gifts,\nBelonging faithfully together through joy and storm.'
  ],
  [
    'कॉफ़ी के दो कप और खिड़की के बाहर गिरती फुहार,\nतेरी मीठी बातों में घुलता हुआ बेपनाह सा प्यार,\nसदियों सा सुकून दे जाती है तेरी एक छोटी मुलाक़ात,\nमेरा दिल करता है तुझसे रोज़ नया इकरार।',
    'Two warm coffee mugs beside rain-streaked glass,\nBoundless tenderness woven through your conversation,\nOne brief meeting grants centuries of calm,\nInspiring fresh devotion inside me daily.'
  ],
  [
    'तेरी उँगलियों में अपनी उँगलियाँ उलझाकर चलना है,\nशाम के ढलते सूरज संग तेरे रंग में ढलना है,\nलोग ढूँढते होंगे जन्नत आसमानों के उस पार कहीं,\nमुझे तो बस तेरी बाँहों के आशियाने में पलना है।',
    'Interlacing our fingers along quiet evening walks,\nBlending softly into twilight golden glow,\nOthers search distant skies looking for paradise,\nMine rests peacefully inside your warm arms.'
  ],
  [
    'काजल तेरी आँखों का जब हल्का सा मुस्कुराता है,\nअच्छे-भले होशमंद दिल को दीवाना कर जाता है,\nछुपाया करो थोड़ा इस सादगी भरे हुस्न को अपने,\nचाँद भी तुझे देखकर बादलों में शरमा जाता है।',
    'When kohl-lined eyes crinkle into soft laughter,\nEven steady hearts lose composure happily,\nVeil your graceful simplicity just a little,\nEven the moon blushes behind passing clouds.'
  ],
  [
    'तेरे कंधे सर रखते ही सारी चिंता मिट जाती है,\nउदासी की हर बदली पलक झपकते छँट जाती है,\nक्या जादू रखा है रब ने तेरी मोहब्बत में,\nतेरे संग लंबी रात भी झट कट जाती है।',
    'Resting my head on your shoulder erases worry,\nDark clouds of doubt scatter within seconds,\nSuch quiet magic lives inside your affection,\nLong nights slip past swiftly beside you.'
  ],
  [
    'चुपके से आकर तेरा मेरी आँखें पीछे से मूँद लेना,\nफिर हँसकर पूछना बताओ कौन आया है पहचान लेना,\nइन छोटी-छोटी अदाओं पर ही तो दिल हार बैठे हैं,\nअब हमारी हर सुबह और हर शाम अपने नाम कर लेना।',
    'Tiptoeing behind to cover my eyes playfully,\nLaughing softly as I guess your touch,\nLittle endearing moments stole my heart away,\nClaim every dawn and twilight as ours.'
  ],
  [
    'इत्र की ज़रूरत क्या जब तेरी ख़ुशबू साँसों में बसी है,\nफूलों की ज़रूरत क्या जब तेरे होंठों पर हँसी है,\nसजाकर रखा है तुझे पलकों के रेशमी झरोखे में,\nमेरी पूरी कायनात तेरी एक निगाह में फँसी है।',
    'No perfume compares with fragrance in my breath,\nNo blossom rivals laughter upon your lips,\nFramed tenderly behind silken eyelashes always,\nMy universe rests captivated inside your glance.'
  ],
  [
    'जब तुम शरमाकर नज़रें नीचे झुका लेती हो अपनी,\nमेरे दिल की गली में हज़ारों कलियाँ खिल उठती हैं,\nबिन बोले भी इतना कुछ कह जाती है तेरी ख़ामोशी,\nजैसे सहरा की तपती रेत को बूँदें मिल उठती हैं।',
    'Whenever shyness lowers your gentle gaze downward,\nCountless buds blossom along my heart lane,\nYour quietness speaks volumes without uttering sound,\nLike cool raindrops blessing desert sand.'
  ],
  [
    'आओ लिख दें आसमान पर अपने इश्क़ की दास्ताँ आज,\nसितारों को बना लें अपनी वफ़ाओं का राज़दाँ आज,\nन कोई फ़ासला रहे हमारे दरमियान किसी बात का,\nदो जिस्म मगर एक रूह बन जाएँ हम यहाँ आज।',
    'Let us write our love story across night skies,\nMaking bright stars keepers of our vows,\nLeaving zero distance between our thoughts tonight,\nTwo souls breathing together in gentle harmony.'
  ],
  [
    'तेरे नाम की मेहँदी जब हथेली पर रंग लाती है,\nहर लकीर मेरी क़िस्मत पर इतराती नज़र आती है,\nमाँगा था जिसे हर सजदे में आँखें मूँदकर मैंने,\nतुम में वो सारी दुआ मुकम्मल नज़र आती है।',
    'When henna bearing your name deepens rich red,\nEvery palm line glows proud of destiny,\nPrayed for sincerely behind closed eyes always,\nEvery whispered blessing stands fulfilled in you.'
  ],
  [
    'सर्दियों की धूप जैसी मीठी तेरी ये सोहबत है,\nबिना किसी शर्त के की गई पाकीज़ा मोहब्बत है,\nन सूरत पर मरे थे हम न दौलत की ख्वाहिश थी,\nहमें तो बस तेरी साफ़ रूह से गहरी उल्फ़त है।',
    'Warm as winter sunshine feels your companionship,\nPure affection offered free of any condition,\nNeither fleeting glamour nor wealth drew me,\nYour honest spirit won my deepest devotion.'
  ],
  [
    'कानों के झुमके जब तेरे गालों को चूमने लगते हैं,\nहवाओं के झोंके भी मस्ती में झूमने लगते हैं,\nतारीफ़ करूँ कैसे लफ़्ज़ों में तेरे इस नूर की बता,\nआईने भी तुझे देखकर ख़ुशी से घूमने लगते हैं।',
    'When delicate earrings brush softly against cheeks,\nEven passing breezes sway enchanted nearby,\nHow could mere words capture such radiance,\nMirrors themselves brighten reflecting your grace.'
  ],
  [
    'आधी रात को छत पर बैठकर चाँद का दीदार करना,\nऔर चाँद से ज़्यादा तुझसे छुपा-छुपा प्यार करना,\nये इश्क़ की बारीकियाँ सिर्फ़ आशिक़ ही समझते हैं,\nएक मुस्कान की ख़ातिर घंटों तेरा इंतज़ार करना।',
    'Sitting rooftop at midnight watching moonlight glow,\nLoving you deeper than silver skies above,\nSubtle nuances of romance lovers understand well,\nWaiting hours gladly just for one smile.'
  ],
  [
    'तेरी धड़कन की लय पर मेरी साँसों का सरगम बजे,\nतेरे क़दमों की आहट से मेरे दिल का आँगन सजे,\nबना लो मुझे हमेशा के लिए अपना हमनवा जानम,\nकोई भी मौसम आए बस तेरा साथ मेरे संग फबे।',
    'My breaths hum gently to your heartbeat rhythm,\nYour approaching footsteps adorn my heart courtyard,\nKeep me forever close as your soulmate,\nThrough every changing season we belong together.'
  ],
  [
    'नज़रों से नज़रें मिलीं और इकरार हो गया चुपचाप,\nदिल का सारा कारोबार तेरे नाम हो गया चुपचाप,\nसोचा था संभलकर चलेंगे इश्क़ की नाज़ुक राहों पर,\nपर तेरी सादगी से बेइंतहा प्यार हो गया चुपचाप।',
    'Eyes met once sealing an unspoken promise,\nHanding over my whole heart quietly to you,\nPlanning caution along love delicate pathways,\nYour simplicity swept me into boundless affection.'
  ],
  [
    'तेरे बिन अधूरी है मेरी ग़ज़ल का हर एक मिसरा,\nतू ही पहला ख़याल मेरा और तू ही आख़िरी ज़िक्रा,\nसजा लो मुझे अपनी बाहों के महफ़ूज़ आशियाने में,\nजहाँ मिट जाए ज़माने भर की हर एक फ़िक्रा।',
    'Every verse of my ghazal feels incomplete alone,\nYou remain my waking thought and evening prayer,\nHold me close inside your sheltered embrace,\nWhere worldly anxieties melt quietly away.'
  ],
  [
    'हथेली पर तेरा नाम लिखकर चूम लेने की आदत है,\nतेरी हर छोटी ख़ुशी में झूम लेने की आदत है,\nपागल कहे ज़माना तो शौक़ से कहता रहे मुझको,\nमुझे तेरी मोहब्बत में डूब जाने की आदत है।',
    'Tracing your name gently across my palm,\nRejoicing wholeheartedly inside your smallest joys,\nLet the world call such devotion madness,\nLosing myself inside your love feels natural.'
  ],
  [
    'शाम की सुर्खी जब तेरे चेहरे पर आ ठहरती है,\nमेरी बेताब नज़र तुझ पर से कहाँ फिर हटती है,\nरब ने बड़ी फ़ुरसत से तराशा है तेरे किरदार को,\nतुझसे मिलकर ज़िंदगी रोज़ थोड़ा और निखरती है।',
    'When crimson sunset rests softly across your face,\nMy captivated gaze refuses to look elsewhere,\nHeaven sculpted your gentle soul with patience,\nKnowing you refines my life every day.'
  ],
  [
    'एक तेरा साथ हो और लंबा सा ख़ामोश रास्ता हो,\nदुनिया के शोर से दूर बस हम दोनों का वास्ता हो,\nन घड़ी की टिक-टिक हो न लौटने की कोई जल्दी,\nहर मोड़ पर बस मोहब्बत का नया सिलसिला हो।',
    'Just your company down a quiet winding road,\nFar beyond city noise belonging solely together,\nNo ticking clocks rushing our footsteps homeward,\nDiscovering tender affection around every bend.'
  ],
  [
    'तुम हँसते हो तो लगता है बहारों ने दस्तक दी है,\nसूने वीराने में जैसे फूलों ने रौनक दी है,\nसंभाल कर रखूँगा तुझे सीने की धड़कनों के बीच,\nरब ने तुझे भेजकर मेरी दुआओं को चमक दी है।',
    'Your laughter sounds like spring knocking gently,\nBlooming bright color across quiet meadows,\nGuarding you safely inside steady heartbeats,\nHeaven answered my prayers sending your grace.'
  ],
  [
    'तेरी बातों में जो अपनापन है वो कहीं और नहीं,\nतेरी बाहों सा सुकून दुनिया के किसी छोर नहीं,\nबाँध लिया है रूह का धागा तेरे संग पक्का हमने,\nइश्क़ की इस पतंग की अब किसी और हाथ डोर नहीं।',
    'Warmth inside your words exists nowhere else,\nNo corner on earth matches your peaceful embrace,\nSoul threads stay tied securely with yours,\nNo other hand holds the string of my heart.'
  ],
  [
    'चलो बुढ़ापे तक यूँ ही एक-दूसरे का हाथ थामे रहें,\nचाँदी से बालों में भी जवानी सा इश्क़ थामे रहें,\nबदल जाएँ मौसम और गुज़र जाएँ भले कितनी सदियाँ,\nहम पहली मुलाक़ात वाला वही पागलपन थामे रहें।',
    'Let us hold hands faithfully into silver hair,\nKeeping youthful tenderness warm across decades,\nThough seasons shift and years roll onward,\nCherishing the sweet wonder of first meeting.'
  ],
  [
    'मेरी हर सुबह तेरी मुस्कुराहट के दीदार से शुरू हो,\nमेरी हर रात तेरी मीठी लोरी से शुरू हो,\nइससे ज़्यादा क्या माँगूँ छोटी सी ज़िंदगी में,\nमेरा हर पन्ना तेरे नाम के इज़हार से शुरू हो।',
    'May every morning begin beholding your warm smile,\nMay quiet nights drift inside your gentle voice,\nNothing greater could I ask from this life,\nStarting every chapter professing love for you.'
  ],
  [
    'तेरी निगाहों में डूबकर ख़ुद को भूल जाने का जी करे,\nअपनी सारी साँसें तेरे क़दमों में बिछाने का जी करे,\nइतनी पाकीज़ा है तेरी चाहत की ये मीठी रोशनी,\nहर जनम तुझे ही अपना हमसफ़र बनाने का जी करे।',
    'Losing myself happily inside your deep gaze,\nDedicating every breath gently along your path,\nSo pure shines the light of your devotion,\nWishing you as my companion across lifetimes.'
  ],
  [
    'दो दिलों के बीच जब भरोसे का पुल बन जाता है,\nतो साधारण सा रिश्ता भी इबादत में बदल जाता है,\nशुक्रिया तेरा मेरी बेरंग दुनिया में इंद्रधनुष भरने को,\nतेरा साथ पाकर हर मुश्किल सफ़र संभल जाता है।',
    'Once trust builds a bridge between two hearts,\nSimple companionship transforms into sacred grace,\nThank you for painting rainbows across my sky,\nWalking beside you steadies every rough road.'
  ]
];

// 26. Sad Love Shayari (30 unique 25-40 word poems)
const SAD_LOVE_POEMS: readonly RawPoemTuple[] = [
  [
    'मोहब्बत आज भी उतनी ही है बस अब जताते नहीं,\nतेरे नाम पर बहते आँसू किसी को दिखाते नहीं,\nतू ख़ुश रहे अपनी नई दुनिया की रौनकों के बीच,\nइसीलिए हम अपनी तन्हाई का शोर मचाते नहीं।',
    'Love remains unchanged though unspoken now,\nHiding falling tears whenever your name surfaces,\nMay happiness surround your chosen new world,\nKeeping my quiet solitude completely silent.'
  ],
  [
    'अधूरी रह गई कहानी हमारी मगर किरदार सच्चे थे,\nज़माने की चालाकियों के आगे हम दिल के बच्चे थे,\nबिछड़ना लिखा था शायद मुक़द्दर की लकीरों में ही,\nवरना इरादे तो आखिरी साँस तक निभाने के पक्के थे।',
    'Our story stayed unfinished though hearts were true,\nInnocent souls facing a calculating world,\nParting lay written across stubborn fate lines,\nThough vows intended lifelong devotion together.'
  ],
  [
    'इश्क़ ने हमें हँसना सिखाया और रोना भी सिखा दिया,\nपाकर सब कुछ एक पल में खोना भी सिखा दिया,\nशिकायत करें भी तो किससे करें अपने नसीब की,\nतेरी मोहब्बत ने काँटों के बिस्तर पर सोना सिखा दिया।',
    'Love taught bright laughter then silent weeping,\nHolding everything close before losing it swiftly,\nTo whom could we complain about cruel fate,\nYour memory taught rest upon beds of thorns.'
  ],
  [
    'तुमसे बिछड़कर हमने किसी और से दिल नहीं लगाया,\nतेरी जगह किसी दूसरे चेहरे को कभी नहीं बिठाया,\nलोग कहते हैं वक़्त हर गहरे घाव को भर देता है,\nपर तेरा दिया ज़ख़्म आज तक हमसे नहीं भुलाया।',
    'After parting no other soul entered my heart,\nLeaving your cherished place untouched forever,\nPeople claim passing time mends deep wounds,\nYet ache from losing you lingers unhealed.'
  ],
  [
    'एक तरफ़ा ही सही मगर मेरा इश्क़ बेदाग़ रहा,\nतेरी बेरुख़ी के अँधेरे में भी जलता चिराग़ रहा,\nतूने पलटकर देखा तक नहीं मेरी वफ़ा की तरफ़,\nऔर मेरे सीने में उम्र भर तेरा ही अनुराग रहा।',
    'Even unreturned my devotion stayed spotless,\nBurning steady despite cold shadows of distance,\nNever once did you glance back toward loyalty,\nWhile lifelong affection beat quietly within me.'
  ],
  [
    'हसरत ही रह गई तुझे अपना बनाकर रखने की,\nसर्द शामों में तेरे संग बैठकर चहकने की,\nक़िस्मत ने छीन लिया हाथों से तेरा प्यारा हाथ,\nसज़ा मिली है हमें बेपनाह मोहब्बत करने की।',
    'Calling you mine remained an unfulfilled wish,\nSharing warm laughter across winter evenings,\nDestiny slipped your hand away from mine,\nLeaving boundless love carrying silent sorrow.'
  ],
  [
    'जिन गलियों में कभी तेरे संग क़दम मिलाकर चलते थे,\nआज उन रास्तों से गुज़रते हुए भी पाँव जलते हैं,\nयादें लिपट जाती हैं साये की तरह हर मोड़ पर,\nअधूरे प्यार के क़िस्से बड़ी मुश्किल से संभलते हैं।',
    'Lanes where footsteps once matched happily,\nNow burn beneath solitary shoes walking past,\nMemories cling like shadows around every corner,\nUnfinished love stories weigh heavy inside.'
  ],
  [
    'तेरी ख़ुशी की ख़ातिर हमने ख़ुद को पीछे हटा लिया,\nअपने ही हाथों से अपने ख़्वाबों का घर मिटा लिया,\nरोया बहुत था दिल उस रात बंद कमरे के भीतर,\nजिस दिन हमने तुझे रक़ीब की दुल्हन बना देख लिया।',
    'Stepping aside quietly just for your happiness,\nErasing dream castles built inside my heart,\nWeeping long behind locked doors that night,\nWatching destiny dress your life elsewhere.'
  ],
  [
    'प्यार कम नहीं हुआ बस मुलाक़ातों का हक़ छिन गया,\nहँसता-खेलता सा मेरा आँगन उदासी में गिन गया,\nदुआ आज भी निकलती है लबों से तेरी सलामती की,\nभले ही मेरा नाम तेरी ज़िंदगी से बिन गया।',
    'Affection never shrank though right to meet vanished,\nTurning cheerful courtyards quiet with sorrow,\nPrayers still rise daily wishing you safe,\nEven after my name faded from your world.'
  ],
  [
    'कहने को तो हम आज़ाद हैं तेरी क़ैद से अब यहाँ,\nमगर रूह आज भी भटकती है तेरी याद के दरमियाँ,\nमोहब्बत का रोग ऐसा लगा कि दवा काम न आई,\nहर धड़कन सुनाती है अब दर्द भरी दास्ताँ।',
    'Outwardly free from old ties today,\nMy spirit still wanders corridors of memory,\nLove left an ache beyond earthly medicine,\nEvery heartbeat narrates a tender elegy.'
  ],
  [
    'हमने चाहा था तुम्हें पूजा की पावन आरती की तरह,\nतुमने छोड़ दिया हमें सूखे पत्ते की भारती की तरह,\nन कोई गिला किया हमने न कोई इल्ज़ाम लगाया,\nबस समेट ली अपनी मोहब्बत टूटी थाती की तरह।',
    'Cherishing you purely like temple prayer lamps,\nLeft behind drifting like dry autumn leaves,\nUttering zero blame or bitter accusation,\nGathering broken devotion quietly inside.'
  ],
  [
    'बारिश में भीगते हुए अब आँसू छुपाना आसान लगता है,\nतेरे बिना ये भरा-पूरा घर भी श्मशान लगता है,\nकितने नाज़ से सजाए थे हमने साथ जीने के सपने,\nआज हर सपना टूटे काँच का सामान लगता है।',
    'Walking through rain hides falling tears easily,\nWithout you familiar rooms feel hollow,\nDreams of growing old together once shone bright,\nLying scattered like fragile glass tonight.'
  ],
  [
    'न तुम ग़लत थे न हमारी चाहत में कोई खोट था,\nबस वक़्त और हालात का हमारे रिश्ते पर चोट था,\nबिछड़ गए दो सच्चे दिल मजबूरियों की दीवारों से,\nअधूरा इश्क़ भी रूह पर कितना गहरा एक नोट था।',
    'Neither were you wrong nor was devotion flawed,\nCircumstance struck hard against fragile timing,\nWalls of compulsion parted two sincere hearts,\nLeaving unfinished love etched deep within.'
  ],
  [
    'तेरे नाम से शुरू हुई किताब अधूरी बंद पड़ी है,\nपलकों की मुंडेर पर आज भी उदासी चंद खड़ी है,\nपढ़ने की हिम्मत नहीं होती वो पुराने ख़त तेरे,\nहर सतर में हमारे टूटे ख़्वाबों की गंध भरी है।',
    'Pages begun in your name rest closed halfway,\nLingering mist still stands along quiet lashes,\nCourage fails whenever opening old letters,\nEvery line breathes scent of shattered dreams.'
  ],
  [
    'मुस्कुराकर मिल लेते हैं अगर राह में दिख जाते हो,\nदिल का हाल छुपा लेते हैं जब नज़रें मिलाते हो,\nअजनबी बनकर गुज़र जाना कितना मुश्किल होता है,\nजिस शख़्स को तुम आज भी अपनी जान बताते हो।',
    'Meeting accidentally brings polite brief smiles,\nMasking inner tremors when eyes cross briefly,\nPassing like strangers hurts beyond measure,\nBeside someone still dearer than breath.'
  ],
  [
    'चाँद अधूरा हो तो भी आसमान छोड़ता नहीं है,\nमगर इंसान ज़रा सी कमी पर रिश्ता तोड़ता है,\nहमने तेरे हर ऐब को मोहब्बत से गले लगाया,\nफिर भी तेरे दिल ने हमारा साथ जोड़ा नहीं।',
    'Skies never abandon even a crescent moon,\nYet human hearts snap ties over tiny flaws,\nEmbracing all your imperfections with tenderness,\nStill failed to keep your hand in mine.'
  ],
  [
    'राख के ढेर में जैसे चिंगारी दबी रह जाती है,\nसीने में वैसे अधूरे प्यार की नमी रह जाती है,\nसारी दुनिया मिल जाए किस्मत की मेहरबानी से,\nपर पहले इश्क़ की ताउम्र कमी रह जाती है।',
    'Like warm embers glowing beneath quiet ash,\nUnfinished love lingers soft inside the chest,\nEven if fortune grants every worldly prize,\nFirst devotion leaves an irreplaceable space.'
  ],
  [
    'तुझे भुलाने की हर कोशिश में तुझे और याद किया,\nहमने अपने ही हाथों अपना सुकून बर्बाद किया,\nइश्क़ की अदालत में दलीलें कहाँ चलती हैं दोस्त,\nजिसने दिल तोड़ा उसी के हक़ में फ़रियाद किया।',
    'Trying to forget only deepened remembrance,\nUnraveling inner calm with my own hands,\nLogic holds zero sway inside love court,\nPraying still for the one who broke me.'
  ],
  [
    'कभी साँसों से क़रीब थे आज सदियों से दूर हो गए,\nहालात के हाथों हम दोनों कितने मजबूर हो गए,\nन मिल सके ज़मीन पर तो कोई बात नहीं ऐ सनम,\nअधूरी मोहब्बत के क़िस्से ही तो मशहूर हो गए।',
    'Closer than breath once yet distant today,\nBound helplessly beneath shifting circumstances,\nEven parted upon earth take gentle heart,\nImmortal tales often belong to unfinished love.'
  ],
  [
    'तेरी सलामती की दुआ माँगकर आमीन कह देते हैं,\nअश्कों को आँखों के भीतर ही कहीं रहने देते हैं,\nप्यार का मतलब सिर्फ़ हासिल करना नहीं होता यारो,\nकभी-कभी छोड़ देने को भी सच्ची मोहब्बत कहते हैं।',
    'Whispering amen after praying for your peace,\nHolding quiet tears safely behind eyelids,\nTrue love never insists purely on possession,\nLetting go tenderly proves devotion too.'
  ],
  [
    'सूनी कलाई पर तेरे वादों के निशान आज भी हैं,\nमेरे तन्हा दिल में तेरी यादों के मेहमान हैं,\nतू भले बस गया किसी और गुलशन की छाँव में,\nमेरे वीराने में तेरी वफ़ा के गुलिस्तान हैं।',
    'Echoes of old promises linger quietly still,\nFootsteps of memory visit my solitary heart,\nThough another garden shelters your days now,\nWilderness within me blooms around your name.'
  ],
  [
    'दर्द तब ज़्यादा होता है जब प्यार दोनों तरफ़ हो,\nमगर समाज की रस्मों का पहरा चारों तरफ़ हो,\nदेखते रह जाते हैं बेबस निगाहों से बिछड़ते हुए,\nजब मुक़द्दर का फ़ैसला जज़्बातों के ख़िलाफ़ हो।',
    'Sorrow cuts sharpest when love lives mutual,\nBlocked on all four sides by rigid worldly walls,\nWatching helplessly while paths pull apart,\nWhen stern destiny rules against tender hearts.'
  ],
  [
    'शाम का ढलता सूरज रोज़ तेरी याद दिला जाता है,\nसीने के सूखे ज़ख़्मों को फिर से हिला जाता है,\nकैसे कह दूँ कि मुझे अब तुझसे मोहब्बत नहीं रही,\nतेरा ज़िक्र आज भी मेरी धड़कन बढ़ा जाता है।',
    'Setting sunbeams awaken thoughts of you nightly,\nStirring quiet scars resting beneath my ribs,\nHow could I claim affection faded away,\nHearing your name still quickens my pulse.'
  ],
  [
    'एक ख़ामोश समझौता कर लिया है हमने तन्हाई से,\nअब डर नहीं लगता इश्क़ की गहरी रुसवाई से,\nजितना टूटना था टूट चुके तेरे जाने के बाद हम,\nअब बस निभा रहे हैं रिश्ता तेरी परछाई से।',
    'Signing a silent truce beside solitude now,\nUnfraid of whispers following broken romance,\nShattered completely the evening you walked away,\nKeeping quiet company only with memory.'
  ],
  [
    'वो अधूरी मुलाक़ात आज भी आँखों में ठहरी हुई है,\nचोट दिखती नहीं ऊपर से मगर बहुत गहरी हुई है,\nहँसकर बात कर लेता हूँ सबके साथ महफ़िल में,\nपर भीतर से मेरी रूह सदियों से बहरी हुई है।',
    'That unfinished farewell stays frozen inside eyes,\nInvisible wounds run deeper than surface skin,\nConversing cheerfully amid lively gatherings,\nWhile inner stillness stays numb since parting.'
  ],
  [
    'तेरे बिन सावन भी पतझड़ का लिबास पहनकर आता है,\nहर ख़ुशी का गीत मुझे मातम सा सुनाई आता है,\nइतना गहरा रंग चढ़ा था तेरे इश्क़ का मुझ पर,\nधोते-धोते उम्र बीती पर कहाँ उतर पाता है।',
    'Without you monsoon arrives dressed like autumn,\nFestive melodies echo wistful across the dusk,\nDyed so deeply inside colors of loving you,\nYears wash past unable to fade its hue.'
  ],
  [
    'काश उस मोड़ पर हमने तुझे रोक लिया होता ज़ोर से,\nतो आज ज़िंदगी न गुज़रती उदासी के इस दौर से,\nअना की छोटी सी दीवार ने दो आशिक़ जुदा कर दिए,\nअब दोनों तन्हा रोते हैं अलग-अलग छोर से।',
    'Wish I had held you back at that crossroads,\nSparing life this long season of melancholy,\nOne thin wall of pride separated two hearts,\nWeeping quietly now on opposite shores.'
  ],
  [
    'मोहब्बत की कश्ती किनारे के क़रीब आकर डूब गई,\nहमारी हँसी को न जाने किसकी बुरी नज़र लग गई,\nबचाकर लाए थे जिसे दुनिया के हर तूफ़ान से हम,\nवही चाहत अपनों की ज़िद के आगे हारकर दब गई।',
    'Our boat of love sank right near harbor,\nStruck unexpectedly by cold winds of fate,\nSheltered carefully through fierce outer storms,\nOnly to bow before stubborn family walls.'
  ],
  [
    'हर रात तकिये से तेरी ख़ैरियत की बात होती है,\nबिन बादल आँखों से दर्द की बरसात होती है,\nकह देना हवाओं से मेरा हाल न पूछें आकर,\nअधूरे इश्क़ वालों की ऐसी ही रात होती है।',
    'Whispering prayers for your peace into pillows,\nCloudless eyes pour quiet rain after midnight,\nTell passing winds never to ask my state,\nUnfinished love leaves nights shaped like this.'
  ],
  [
    'मिटा न सका वक़्त तेरी यादों की धुँधली लकीरें,\nपड़ी हैं पाँव में आज भी तेरी वफ़ा की जंजीरें,\nजी रहे हैं बस एक अधूरे ख़्वाब का सहारा लेकर,\nसीने से लगाए फिरते हैं वो पुरानी तस्वीरों की जागीरें।',
    'Time could never erase faint lines of memory,\nGentle chains of loyalty still hold my steps,\nLiving onward leaning upon an unfinished dream,\nGuarding faded photographs like priceless treasure.'
  ]
];

export const NEW_FEELINGS_PART_3: Shayari[] = [
  ...buildCategoryShayaris(
    {
      category: 'birthday-feelings',
      categoryName: 'Birthday Shayari',
      categoryIcon: '🎂',
      idPrefix: 'birthday-feelings',
      startIndex: 1,
      tags: ['BirthdayShayari', 'JanamdinMubarak', 'HappyBirthdayHindi']
    },
    BIRTHDAY_FEELINGS_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'miss-you',
      categoryName: 'Miss You Shayari',
      categoryIcon: '🥺',
      idPrefix: 'miss-you',
      startIndex: 1,
      tags: ['MissYouShayari', 'TeriKami', 'YaadStatus']
    },
    MISS_YOU_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'heart-touching',
      categoryName: 'Heart Touching Shayari',
      categoryIcon: '💗',
      idPrefix: 'heart-touching',
      startIndex: 1,
      tags: ['HeartTouchingShayari', 'DilChhooLeneWali', 'DeepHindiQuotes']
    },
    HEART_TOUCHING_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'emotional',
      categoryName: 'Emotional Shayari',
      categoryIcon: '🥹',
      idPrefix: 'emotional',
      startIndex: 1,
      tags: ['EmotionalShayari', 'JazbaatiStatus', 'RoohKiAwaaz']
    },
    EMOTIONAL_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'romantic-love',
      categoryName: 'Romantic Love Shayari',
      categoryIcon: '🌹',
      idPrefix: 'romantic-love',
      startIndex: 1,
      tags: ['RomanticLoveShayari', 'IshqMohabbat', 'PyarStatus']
    },
    ROMANTIC_LOVE_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'sad-love',
      categoryName: 'Sad Love Shayari',
      categoryIcon: '🌧️',
      idPrefix: 'sad-love',
      startIndex: 1,
      tags: ['SadLoveShayari', 'AdhuraPyar', 'BrokenLoveHindi']
    },
    SAD_LOVE_POEMS
  )
];
