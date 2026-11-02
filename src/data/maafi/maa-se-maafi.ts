import { Shayari } from '../../types/shayari';

type MaafiTuple = [
  title: string,
  hindi: string,
  hinglish: string,
  english: string,
  tag: string,
  likes: number
];

const MAA_MAAFI_RAW: MaafiTuple[] = [
  [
    'माँ के आँचल में माफ़ी',
    'तेरे आँचल की ठंडी छाँव में ही मेरा सारा संसार है,\nमुझ नादान से भूल हुई माँ पर दिल में तेरा ही प्यार है।\nएक बार सिर पर हाथ फेर कर अपनी नाराज़गी भुला दे,\nतेरी खामोशी से सूना-सूना मेरा हर एक त्यौहार है।',
    'Tere aanchal ki thandi chhaanv mein hi mera saara sansaar hai,\nMujh naadan se bhool hui Maa par dil mein tera hi pyaar hai.\nEk baar sir par haath pher kar apni naraazgi bhula de,\nTeri khamoshi se soona-soona mera har ek tyohaar hai.',
    'Beneath the cool shade of your embrace rests my entire world,\nForgive this foolish mistake, Mom, my heart holds only love for you.\nPlace your gentle hand upon my head and melt your silence away,\nWithout your warm voice even every festival feels empty today.',
    'MaaSorry',
    412
  ],
  [
    'माँ का दुखा हुआ दिल',
    'अनजाने में कड़वे बोल निकल गए मेरी नासमझ ज़ुबान से,\nमाँ तेरी नम आँखें देखकर गिर गया हूँ अपनी ही पहचान से।\nनौ महीने कोख में रखकर जिसने मुझको जीना सिखलाया,\nमाफ़ कर दे माँ आज शर्मिंदा हूँ अपने हर अभिमान से।',
    'Anjaane mein kadwe bol nikal gaye meri naasamajh zubaan se,\nMaa teri nam aankhein dekhkar gir gaya hoon apni hi pehchan se.\nNau mahine kokh mein rakhkar jisne mujhko jeena sikhlaaya,\nMaaf kar de Maa aaj sharminda hoon apne har abhimaan se.',
    'Unkind words slipped unknowingly from my thoughtless tongue,\nSeeing tears in your eyes, Mom, broke my pride in an instant.\nYou carried me nine months and taught my steps how to walk,\nForgive me today as I bow ashamed of my foolish ego.',
    'EmotionalMaa',
    398
  ],
  [
    'रूठी माँ को मनाना',
    'भगवान भी रूठ जाए तो तेरी दुआ से मान जाता है,\nपर तू रूठ जाए माँ तो यह बच्चा कहाँ चैन पाता है।\nकान पकड़कर तेरे कदमों में बैठा है तेरा लाडला आज,\nतेरी एक प्यारी मुस्कान से ही घर में उजाला आता है।',
    'Bhagwan bhi rooth jaaye toh teri dua se maan jaata hai,\nPar tu rooth jaaye Maa toh yeh baccha kahan chain paata hai.\nKaan pakadkar tere kadmon mein baitha hai tera laadla aaj,\nTeri ek pyaari muskaan se hi ghar mein ujaala aata hai.',
    'Even when fate turns stern, a mother’s prayer softens the skies,\nYet when you turn upset, Mom, nowhere can your child find peace.\nHolding my ears at your feet sits your little one today,\nOnly your tender smile brings light back into our home.',
    'MananaMaa',
    389
  ],
  [
    'माँ की खामोशी का दर्द',
    'डाँट ले चाहे गुस्से में दो थप्पड़ भी लगा दे माँ,\nबस यूँ चुप रहकर मुझे इतनी बड़ी सज़ा मत सुना दे माँ।\nतेरी आवाज़ सुने बिना निवाला गले से उतरता नहीं,\nअपनी ममता की गोद में रखकर मेरी हर खता मिटा दे माँ।',
    'Daant le chaahe gusse mein do thappad bhi laga de Maa,\nBas yoon chup rehkar mujhe itni badi sazaa mat suna de Maa.\nTeri aawaaz sune bina niwala gale se utarta nahi,\nApni mamta ki godh mein rakhkar meri har khata mita de Maa.',
    'Scold me aloud or chide me all you wish, dear Mom,\nJust do not punish me with this heavy wall of silence.\nWithout hearing your voice, not a morsel passes my throat,\nCradle me in your lap of grace and erase my mistake.',
    'MaaKiKhamoshi',
    376
  ],
  [
    'माँ के चरणों में स्वर्ग',
    'सारी दुनिया घूम आया पर तेरे जैसा कोमल हृदय न पाया,\nगुस्से की धूप में भी तूने मुझ पर ममता का बादल छाया।\nआज अपनी हर गलती मानकर तेरे चरण छूता हूँ माँ,\nमाफ़ी की भिक्षा दे दे उस बच्चे को जिसे तूने गले लगाया।',
    'Saari duniya ghoom aaya par tere jaisa komal hriday na paaya,\nGusse ki dhoop mein bhi tune mujh par mamta ka baadal chhaaya.\nAaj apni har galti maankar tere charan chhoota hoon Maa,\nMaafi ki bhiksha de de us bacche ko jise tune gale lagaaya.',
    'I wandered the wide world yet never found a heart as gentle as yours,\nEven beneath hot anger you spread a cloud of tender care over me.\nConfessing every fault today, I bow and touch your feet, Mom,\nGrant forgiveness to the child you always held close.',
    'CharanSparsh',
    364
  ],
  [
    'माँ तुझसे ऊँची आवाज़',
    'जिसने उँगली पकड़कर बोलना सिखाया उसी से तेज़ बोल गया,\nक्रोध के एक पल में मैं जन्मों का अनमोल ऋण तौल गया।\nमुझे खुद से नफ़रत हो रही है अपनी इस नादानी पर माँ,\nक्षमा कर दे मुझे मेरा सारा घमंड आँसुओं में घुल गया।',
    'Jisne ungli pakadkar bolna sikhaaya usi se tez bol gaya,\nKrodh ke ek pal mein main janmon ka anmol rin taul gaya.\nMujhe khud se nafrat ho rahi hai apni is naadani par Maa,\nKshama kar de mujhe mera saara ghamand aansuon mein ghul gaya.',
    'I raised my voice at the very soul who taught me how to speak,\nIn one flash of temper I forgot a debt spanning lifetimes.\nRegret weighs heavy on me for such foolishness, dear Mom,\nForgive me as every trace of ego dissolves into tears.',
    'MotherForgiveness',
    358
  ],
  [
    'माँ के हाथ का निवाला',
    'रसोई में आज भी तूने मेरी पसंद का खाना बनाया होगा,\nनाराज़ होकर भी मेरे आने का रास्ता तो निहारा होगा।\nसॉरी माँ अब कभी तेरी आँखों में नमी नहीं आने दूँगा,\nअपने हाथ से एक निवाला खिला दे दिल को सहारा होगा।',
    'Rasoi mein aaj bhi tune meri pasand ka khaana banaaya hoga,\nNaraaz hokar bhi mere aane ka raasta toh nihaara hoga.\nSorry Maa ab kabhi teri aankhon mein nami nahi aane doonga,\nApne haath se ek niwala khila de dil ko sahaara hoga.',
    'Even today in the kitchen you must have cooked my favorite meal,\nEven while upset your eyes must have watched the door for me.\nSorry Mom, never again will I bring mist into your eyes,\nFeed me one bite from your hand so my heavy heart heals.',
    'MaaKaPyaar',
    351
  ],
  [
    'माँ की ममता की गहराई',
    'समंदर से भी गहरी है माँ तेरे सीने की प्यारी ममता,\nमेरी लाख गलतियों के आगे भी तेरा स्नेह नहीं थमता।\nजानता हूँ तेरा दिल दुखाकर मैंने बहुत बड़ा पाप किया,\nगले से लगा ले माँ तेरे बिना मेरा कोई दिन नहीं जमता।',
    'Samandar se bhi gehri hai Maa tere seene ki pyaari mamta,\nMeri laakh galtiyon ke aage bhi tera sneh nahi thamta.\nJaanta hoon tera dil dukhaakar maine bahut bada paap kiya,\nGale se laga le Maa tere bina mera koi din nahi jamta.',
    'Deeper than any ocean is the affection beating in your chest,\nEven past a hundred blunders of mine your love never stops.\nI know hurting your gentle heart was a grievous wrong,\nHold me close, Mom, for no day feels right without you.',
    'Mamta',
    344
  ],
  [
    'थकी हुई माँ से क्षमा',
    'दिन भर घर सँभालती रही और मैंने तेरी थकान न जानी,\nअपनी ज़िद में बहकर कर बैठा आज बड़ी भारी नादानी।\nमाँ तेरे त्यागमय जीवन के आगे मेरा सिर झुकता है,\nमाफ़ कर दे अपने बच्चे की यह नासमझ सी कहानी।',
    'Din bhar ghar sambhaalti rahi aur maine teri thakaan na jaani,\nApni zid mein behkar kar baitha aaj badi bhaari naadani.\nMaa tere tyaagmay jeevan ke aage mera sir jhukta hai,\nMaaf kar de apne bacche ki yeh naasamajh si kahaani.',
    'All day you cared for our home while I overlooked your fatigue,\nSwept away in stubbornness I acted so thoughtlessly today.\nBefore your life of silent sacrifice my head bows low, Mom,\nPlease pardon this immature mistake of your child.',
    'SorryMom',
    339
  ],
  [
    'माँ का उदास चेहरा',
    'तेरे चेहरे की उदासी देखकर मेरी रूह काँप जाती है,\nमाँ तेरी एक आह से मेरी सारी खुशियाँ रूठ जाती हैं।\nवादा करता हूँ कभी तेरा मान कम नहीं होने दूँगा,\nमाफ़ कर दे माँ तेरी दुआ से ही मेरी साँसें आती हैं।',
    'Tere chehre ki udaasi dekhkar meri rooh kaanp jaati hai,\nMaa teri ek aah se meri saari khushiyaan rooth jaati hain.\nWaada karta hoon kabhi tera maan kam nahi hone doonga,\nMaaf kar de Maa teri dua se hi meri saansein aati hain.',
    'Seeing sadness shadow your face makes my very soul tremble,\nOne sigh of hurt from you drives every joy far away from me.\nI promise never to let your honor falter again, dear Mom,\nForgive me, for my very breath thrives upon your blessings.',
    'MaaKiDua',
    332
  ],
  [
    'माँ मैं अभी बच्चा हूँ',
    'उम्र बढ़ गई कद बढ़ गया पर अक्ल से अभी कच्चा हूँ,\nदुनिया के लिए बड़ा सही माँ तेरे लिए तो बच्चा हूँ।\nबच्चों की खता तो माताएँ हँसकर माफ़ कर देती हैं,\nदिल में कोई मैल नहीं माँ पछतावे में बिल्कुल सच्चा हूँ।',
    'Umr badh gayi kad badh gaya par akl se abhi kaccha hoon,\nDuniya ke liye bada sahi Maa tere liye toh baccha hoon.\nBacchon ki khata toh maataayein hanskar maaf kar deti hain,\nDil mein koi mail nahi Maa pachtaave mein bilkul saccha hoon.',
    'Years and height have grown, yet in wisdom I am still naive,\nGrown-up to the world perhaps, but forever a child before you.\nMothers forgive their children’s stumbles with a gentle smile,\nThere is no malice in my heart, Mom, my remorse is sincere.',
    'BachaHoonMaa',
    327
  ],
  [
    'माँ को फ़ोन पर सॉरी',
    'काम की भागदौड़ में तेरा हाल पूछना भूल गया था,\nझूठी व्यस्तता के नशे में अपना मूल भूल गया था।\nफ़ोन उठा ले मेरी प्यारी माँ और जी भर के डाँट लगा,\nतेरी ममता की कीमत समझे बिना फ़िज़ूल झूल गया था।',
    'Kaam ki bhaagdaud mein tera haal poochna bhool gaya tha,\nJhoothi vyastata ke nashe mein apna mool bhool gaya tha.\nPhone utha le meri pyaari Maa aur jee bhar ke daant laga,\nTeri mamta ki keemat samjhe bina fizool jhool gaya tha.',
    'Caught in the rush of work I forgot to ask how you were doing,\nLost in hollow busyness I neglected my truest root.\nPick up the phone, sweet Mom, and scold me all you want,\nI drifted foolishly without cherishing your priceless love.',
    'CallMomSorry',
    321
  ],
  [
    'माँ की बिंदी और मुस्कान',
    'माथे की बिंदी और होठों की हँसी ही तेरा श्रृंगार है,\nमेरी गलती से जो फीकी पड़ी तो मेरा जीना बेकार है।\nचाय बनाकर लाया हूँ माँ एक घूँट पीकर मुस्कुरा दे,\nतेरे इस नादान बेटे को बस तेरी माफ़ी का इंतज़ार है।',
    'Maathe ki bindi aur hothon ki hansi hi tera shringaar hai,\nMeri galti se jo feeki padi toh mera jeena bekaar hai.\nChai banaakar laaya hoon Maa ek ghoont peekar muskura de,\nTere is naadan bete ko bas teri maafi ka intezaar hai.',
    'The bindi on your brow and warmth of your smile are your grace,\nIf my blunder dimmed that glow, everything feels worthless.\nI made a warm cup of tea for you, Mom—take a sip and smile,\nYour foolish child waits only for your kind forgiveness.',
    'ChaiAurMaafi',
    318
  ],
  [
    'माँ की रातों की नींद',
    'मेरी एक बीमारी पर जिसने जागकर अनगिनत रातें काटीं,\nखुद सूखी रोटी खाकर जिसने हमको सारी खुशियाँ बाँटीं।\nउसी माँ का दिल दुखाकर कैसे चैन से सो पाऊँगा मैं,\nमाफ़ कर दे माँ पश्चाताप ने मेरी सारी नींदें छाँटीं।',
    'Meri ek beemaari par jisne jaagkar anginat raatein kaatin,\nKhud sookhi roti khaakar jisne humko saari khushiyaan baantin.\nUsi Maa ka dil dukhaakar kaise chain se so paaoonga main,\nMaaf kar de Maa pashchaataap ne meri saari neendein chhaantin.',
    'Over one fever of mine you stayed awake through countless nights,\nKeeping plain bread for yourself, you gave us every joy.\nHow could I ever sleep in peace after hurting that same Mother?\nForgive me, Mom, remorse has stolen all rest from my eyes.',
    'MaaKaTyaag',
    314
  ],
  [
    'माँ से बहस का पछतावा',
    'तुझसे बहस करके जीतना असल में मेरी सबसे बड़ी हार है,\nतेरे तजुर्बे के आगे मेरी हर दलील बिल्कुल बेकार है।\nजो तूने कहा वही मेरे भले के लिए सबसे सच्चा था,\nमुझे माफ़ कर दे माँ तू ही मेरे जीवन का आधार है।',
    'Tujhse behas karke jeetna asal mein meri sabse badi haar hai,\nTere tajurbe ke aage meri har daleel bilkul bekaar hai.\nJo tune kaha wahi mere bhale ke liye sabse saccha tha,\nMujhe maaf kar de Maa tu hi mere jeevan ka aadhaar hai.',
    'Winning an argument against you is truly my greatest defeat,\nBeside your wisdom every clever excuse of mine falls empty.\nEverything you advised was meant purely for my own good,\nForgive me, Mom, you alone are the anchor of my life.',
    'Pachtawa',
    309
  ],
  [
    'माँ के आँसू पोंछने दे',
    'इन पावन आँखों में मेरी वजह से कभी पानी न आए,\nखुदा करे मेरी हर खुशी तेरे कदमों में लुट जाए।\nआज जो ठेस पहुँचाई है उसके लिए हाथ जोड़ता हूँ,\nमाँ अपने हाथ से मेरे सिर को छू ले ताकि चैन मिल जाए।',
    'In paawan aankhon mein meri wajah se kabhi paani na aaye,\nKhuda kare meri har khushi tere kadmon mein lut jaaye.\nAaj jo thes pahunchaayi hai uske liye haath jodta hoon,\nMaa apne haath se mere sir ko chhoo le taaki chain mil jaaye.',
    'May tears never touch your sacred eyes because of me again,\nMay every happiness of mine be laid gently at your feet.\nWith folded hands I apologize for the hurt I caused today,\nTouch my head once with your blessing hand so peace returns.',
    'MaaKeAansu',
    305
  ],
  [
    'माँ तू ही मेरी पहली गुरु',
    'अक्षर-अक्षर जीवन का तूने ही मुझे प्यार से पढ़ाया है,\nजब भी ठोकर खाकर गिरा तेरे ही हाथों ने उठाया है।\nआज भटक गया था थोड़ा अपनी नासमझी की राहों में,\nमाफ़ कर दे माँ तेरा बालक लौटकर तेरी शरण में आया है।',
    'Akshar-akshar jeevan ka tune hi mujhe pyaar se padhaaya hai,\nJab bhi thokar khaakar gira tere hi haathon ne uthaaya hai.\nAaj bhatak gaya tha thoda apni naasamjhi ki raahon mein,\nMaaf kar de Maa tera baalak lautkar teri sharan mein aaya hai.',
    'Every lesson of life you taught me with boundless patience,\nWhenever I stumbled and fell, your hands lifted me back up.\nToday I strayed briefly along paths of thoughtless folly,\nForgive me, Mom, your child has returned to your shelter.',
    'PehliGuru',
    301
  ],
  [
    'नाराज़ माँ से विनती',
    'घर की दीवारें भी उदास लगती हैं जब तू बात नहीं करती,\nसूरज तो निकलता है पर सुकून की प्रभात नहीं उतरती।\nमाँ अपनी नाराज़गी की गठरी को आज यहीं खोल दे ना,\nतेरी माफ़ी के बिना मेरे दिल की यह रात नहीं कटती।',
    'Ghar ki deewaarein bhi udaas lagti hain jab tu baat nahi karti,\nSooraj toh nikalta hai par sukoon ki prabhaat nahi utarti.\nMaa apni naraazgi ki gathri ko aaj yahin khol de na,\nTeri maafi ke bina mere dil ki yeh raat nahi kat-ti.',
    'Even the walls of home feel gloomy when you stop speaking,\nThe sun rises outside yet no peaceful morning enters within.\nUnbind this knot of displeasure today, my dearest Mom,\nWithout your pardon this dark night in my heart will not pass.',
    'Manana',
    296
  ],
  [
    'माँ का कोमल मन',
    'पत्थर भी पिघल जाते हैं पर मैं कितना कठोर बन गया,\nमाँ तेरी फिक्र को बोझ समझकर गुस्से के शोर में बह गया।\nअब समझ आया तेरी हर रोक-टोक में कितनी हिफ़ाज़त थी,\nसॉरी मेरी माँ तेरा बच्चा अपनी ही खता से दह गया।',
    'Patthar bhi pighal jaate hain par main kitna kathor ban gaya,\nMaa teri fikr ko bojh samajhkar gusse ke shor mein beh gaya.\nAb samajh aaya teri har rok-tok mein kitni hifaazat thi,\nSorry meri Maa tera baccha apni hi khata se deh gaya.',
    'Even stones soften yet how unfeeling I became in anger,\nMistaking your care for control, I spoke in reckless haste.\nNow I realize how much protection lived in every warning,\nSorry dearest Mom, my own mistake burns deep inside my heart.',
    'MaaKiFikr',
    292
  ],
  [
    'बेटी की माँ से माफ़ी',
    'तेरी परछाईं बनकर बड़ी हुई फिर भी तुझे दुखा बैठी,\nअपनी ही सहेली जैसी प्यारी माँ को आज रुला बैठी।\nगले लगा ले माँ तेरे सिवा दिल का हाल किसे सुनाऊँ,\nअपनी हर ज़िद तेरे चरणों में आज हमेशा को झुका बैठी।',
    'Teri parchhaayin bankar badi hui phir bhi tujhe dukha baithi,\nApni hi saheli jaisi pyaari Maa ko aaj rula baithi.\nGale laga le Maa tere siva dil ka haal kise sunaaoon,\nApni har zid tere charnon mein aaj hamesha ko jhuka baithi.',
    'Growing up as your very shadow, still I hurt your heart today,\nBringing tears to my sweet Mom who has always been my best friend.\nHold me close, Mom—who else could ever understand my heart?\nI lay every stubborn whim down at your feet forevermore.',
    'BetiKiMaafi',
    288
  ],
  [
    'माँ की थाली और दुलार',
    'गुस्से में खाना छोड़ दिया था मैंने और भूखी तू सोई माँ,\nमेरी नासमझ ज़िद के पीछे छुप-छुप कर कितना रोई माँ।\nमुझ सा पापी कौन होगा जिसने अपनी जननी को सताया,\nकान पकड़कर माफ़ी माँगूँ अपनी ममता फिर पिरोई माँ।',
    'Gusse mein khaana chhod diya tha maine aur bhookhi tu soyi Maa,\nMeri naasamajh zid ke peeche chhup-chhup kar kitna royi Maa.\nMujh sa paapi kaun hoga jisne apni janani ko sataaya,\nKaan pakadkar maafi maangoon apni mamta phir piroyi Maa.',
    'In anger I pushed away my plate while you slept hungry, Mom,\nBehind closed doors you wept quietly over my stubbornness.\nHow wrong I was to trouble the very soul who gave me life,\nHolding my ears I beg pardon—wrap me in your warmth again.',
    'JananiMaafi',
    284
  ],
  [
    'माँ तेरी दुआ मेरी ढाल',
    'हर बला से बचाती रही मुझे तेरी सुबह-शाम की प्रार्थना,\nऔर मैंने चंद पलों के क्रोध में भूली तेरी आराधना।\nमाँ मुझे फिर से अपना वही आज्ञाकारी बच्चा बना ले,\nसच्चे मन से माँगता हूँ आज तुझसे क्षमा की याचना।',
    'Har bala se bachaati rahi mujhe teri subah-shaam ki praarthana,\nAur maine chand palon ke krodh mein bhooli teri aaraadhana.\nMaa mujhe phir se apna wahi aagyaakaari baccha bana le,\nSacche mann se maangta hoon aaj tujhse kshama ki yaachana.',
    'Your morning and evening prayers shielded me from every harm,\nYet in moments of blind temper I forgot your devotion.\nTake me back as your loving, respectful child once more, Mom,\nFrom the bottom of my heart I plead for your forgiveness.',
    'KshamaMaa',
    279
  ],
  [
    'माँ के पल्लू की गाँठ',
    'अपने पल्लू की गाँठ में मेरी हर मनपसंद चीज़ बचाती रही,\nखुद पुराने कपड़ों में रहकर मुझको नए ख्वाब सजाती रही।\nमाँ मेरी कड़वी बातों को अपने बड़े दिल से भुला देना,\nतेरी ममता की लोरी ही मुझे हर तूफ़ान में सुलाती रही।',
    'Apne pallu ki gaanth mein meri har manpasand cheez bachaati rahi,\nKhud puraane kapdon mein rehkar mujhko naye khwaab sajaati rahi.\nMaa meri kadwi baaton ko apne bade dil se bhula dena,\nTeri mamta ki lori hi mujhe har toofaan mein sulaati rahi.',
    'Tucked in the corner of your sari you saved every treat for me,\nWearing worn clothes yourself while dressing my dreams anew.\nMom, forgive my harsh words out of the vastness of your heart,\nYour tender lullaby alone calmed me through every storm.',
    'MaaKaPallu',
    275
  ],
  [
    'रूठी मम्मी के नाम सॉरी',
    'मम्मी तेरी मीठी झिड़की भी अब संगीत सी प्यारी लगती है,\nजब से तू चुप हुई है पूरी दुनिया ही भारी लगती है।\nएक बार मेरे गाल खींचकर पागल कह दे पहले की तरह,\nतेरी माफ़ी से ही मेरी ज़िंदगी फिर से न्यारी लगती है।',
    'Mummy teri meethi jhidki bhi ab sangeet si pyaari lagti hai,\nJab se tu chup hui hai poori duniya hi bhaari lagti hai.\nEk baar mere gaal kheenchkar paagal keh de pehle ki tarah,\nTeri maafi se hi meri zindagi phir se nyaari lagti hai.',
    'Even your gentle scolding sounds sweet like music to me now,\nEver since you grew quiet the whole world feels unbearably heavy.\nPinch my cheek once and call me silly just like before, Mummy,\nYour forgiveness alone makes my life bright and whole again.',
    'SorryMummy',
    271
  ],
  [
    'माँ का आशीर्वाद लौटा दे',
    'न धन चाहिए न दौलत बस तेरा मुस्कुराता चेहरा चाहिए,\nमेरे सिर पर हमेशा तेरी दुआओं का पावन पहरा चाहिए।\nजो भूल हुई उसे नादान बच्चे की नासमझी समझकर बख्श दे,\nमाँ तेरे और मेरे रिश्ते का स्नेह और भी गहरा चाहिए।',
    'Na dhan chahiye na daulat bas tera muskuraata chehra chahiye,\nMere sir par hamesha teri duaaon ka paawan pehra chahiye.\nJo bhool hui use naadan bacche ki naasamjhi samajhkar bakhsh de,\nMaa tere aur mere rishte ka sneh aur bhi gehra chahiye.',
    'Neither wealth nor fortune I seek, only your smiling face,\nMay the sacred guard of your blessings forever rest over me.\nPardon what happened as the folly of an unknowing child, Mom,\nLet the bond of love between us grow deeper than ever.',
    'MaaAshirwad',
    268
  ]
];

export const MAA_SE_MAAFI_SHAYARIS: Shayari[] = MAA_MAAFI_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `maafi-maa-${index + 1}`,
    category: 'maa-se-maafi',
    subCategory: 'maa-se-maafi',
    categoryType: 'feelings',
    categoryName: 'Maa Se Maafi (माँ से माफ़ी)',
    categoryIcon: '🤱',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['MaaSeMaafi', 'SorryMom', 'MotherSorryShayari', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);
