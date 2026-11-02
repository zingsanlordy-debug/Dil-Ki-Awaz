import { Shayari } from '../../types/shayari';

type MaafiTuple = [
  title: string,
  hindi: string,
  hinglish: string,
  english: string,
  tag: string,
  likes: number
];

const HUSBAND_MAAFI_RAW: MaafiTuple[] = [
  [
    'नाराज़ पति को प्यार से मनाना',
    'मेरे सरताज आपकी खामोशी से मेरा चैन खो जाता है,\nजब आप नज़रें चुराते हैं तो यह दिल उदास हो जाता है।\nमुझसे हुई नादानी को अपने बड़े दिल से माफ़ कर दीजिए,\nआपकी एक प्यारी मुस्कान से ही मेरा दिन बन जाता है।',
    'Mere sartaaj aapki khamoshi se mera chain kho jaata hai,\nJab aap nazrein churaate hain toh yeh dil udaas ho jaata hai.\nMujhse hui naadani ko apne bade dil se maaf kar dijiye,\nAapki ek pyaari muskaan se hi mera din ban jaata hai.',
    'My beloved husband, your silence steals away all my peace,\nWhen you avert your gaze, a quiet sorrow fills my heart.\nForgive my silly mistake out of the kindness of your soul,\nA single warm smile from you brightens my entire day.',
    'SorryHusband',
    419
  ],
  [
    'रूठे पतिदेव से मीठी सॉरी',
    'थोड़ी ज़िद्दी हूँ थोड़ी पगली हूँ पर सिर्फ आपकी दीवानी हूँ,\nआपके ही नाम से सजती हुई मोहब्बत की कहानी हूँ।\nगुस्सा छोड़ दीजिए मेरे प्यारे पतिदेव और गले लगा लीजिए,\nबिना सोचे बोल गई थी आज दिल से पछतानी हूँ।',
    'Thodi ziddi hoon thodi pagli hoon par sirf aapki deewani hoon,\nAapke hi naam se sajti hui mohabbat ki kahaani hoon.\nGussa chhod dijiye mere pyaare patidev aur gale laga lijiye,\nBina soche bol gayi thi aaj dil se pachtaani hoon.',
    'A little stubborn and playful perhaps, yet devoted wholly to you,\nMy entire love story shines purely through your cherished name.\nLet go of your displeasure, dear husband, and hold me close,\nI spoke without thinking and truly regret it from my heart.',
    'PatidevSorry',
    409
  ],
  [
    'पति की थकान न समझने की भूल',
    'दिन भर हमारे कल की खातिर आप कितनी मेहनत करते हैं,\nहर ज़िम्मेदारी का बोझ हँसते-हँसते अपने सीने पर धरते हैं।\nमैं ही नासमझ थी जो बेवजह की शिकायत कर बैठी आपसे,\nसॉरी जान आप ही तो मेरे जीवन में खुशियाँ भरते हैं।',
    'Din bhar hamaare kal ki khaatir aap kitni mehnat karte hain,\nHar zimmedaari ka bojh hanste-hanste apne seene par dharte hain.\nMain hi naasamajh thi jo bewajah ki shikaayat kar baithi aapse,\nSorry jaan aap hi toh mere jeevan mein khushiyaan bharte hain.',
    'All day long you work tirelessly to build our bright tomorrow,\nCarrying every responsibility with a steady smile on your face.\nFoolish was I to complain needlessly without seeing your strain,\nSorry darling—you are the one who fills my life with joy.',
    'CaringWifeApology',
    398
  ],
  [
    'मनपसंद खाने के साथ सॉरी',
    'आज रसोई में आपके पसंद का हर पकवान सजाया है,\nहर निवाले में अपने प्यार और माफ़ी का स्वाद मिलाया है।\nरूठे हुए पिया जी अब तो गुस्से का परदा हटा दीजिए,\nआपकी बीवी ने कान पकड़कर आपको प्यार से बुलाया है।',
    'Aaj rasoi mein aapke pasand ka har pakwaan sajaaya hai,\nHar niwale mein apne pyaar aur maafi ka swaad milaaya hai.\nRoothe huye piya ji ab toh gusse ka parda hata dijiye,\nAapki biwi ne kaan pakadkar aapko pyaar se bulaaya hai.',
    'Tonight in the kitchen I cooked every favorite dish of yours,\nBlending tender affection and heartfelt apology into each bite.\nCome set aside your frown now, my displeased beloved,\nHolding her ears, your wife calls you warmly to the table.',
    'PiyaKoManana',
    391
  ],
  [
    'पति का गुस्सा पिघलाने वाली शायरी',
    'आप डाँट भी लें तो भी मुझे आपका हर अंदाज़ प्यारा है,\nक्योंकि इस दुनिया में मेरे लिए बस आपका ही सहारा है।\nपर यूँ चुप रहकर मुझे परायों सा एहसास मत कराइए,\nसॉरी मेरे हमसफ़र मेरा तो हर लम्हा सिर्फ तुम्हारा है।',
    'Aap daant bhi lein toh bhi mujhe aapka har andaaz pyaara hai,\nKyonki is duniya mein mere liye bas aapka hi sahaara hai.\nPar yoon chup rehkar mujhe paraayon sa ehsaas mat karaaiye,\nSorry mere humsafar mera toh har lamha sirf tumhaara hai.',
    'Even when you scold me gently, every manner of yours stays dear,\nBecause in this whole world you alone are my truest pillar.\nJust do not stay silent and make me feel distant from you,\nSorry my life partner—every moment of mine belongs to you.',
    'NarazPati',
    383
  ],
  [
    'मांग के सिंदूर की कसम',
    'मेरे माथे की बिंदिया और सिंदूर की लाली आप से है,\nमेरी हर सुबह की रौनक और हर दिवाली आप से है।\nजाने-अनजाने अगर मेरी बात ने आपका मन दुखाया हो,\nतो माफ़ कर दें प्रियतम मेरी हर खुशहाली आप से है।',
    'Mere maathe ki bindiya aur sindoor ki laali aap se hai,\nMeri har subah ki raunak aur har Diwali aap se hai.\nJaane-anjaane agar meri baat ne aapka mann dukhaaya ho,\nToh maaf kar dein priyatam meri har khushhaali aap se hai.',
    'The bindi on my brow and vermilion grace shine because of you,\nEvery bright morning and festive glow in life comes from you.\nIf any careless remark of mine wounded your gentle heart,\nForgive me, sweetheart—all my happiness rests in your love.',
    'SindoorPromise',
    376
  ],
  [
    'शाम को घर लौटते पति से माफ़ी',
    'सुबह तकरार करके आपको उदास मन से ऑफिस भेज दिया,\nतब से हर घड़ी पछतावे ने मेरे दिल को घेर लिया।\nदरवाज़े पर खड़ी हूँ आपकी राह तकते सुबह से ही जान,\nसॉरी मेरे पतिदेव अपनी पगली को फिर से अपना मान।',
    'Subah takraar karke aapko udaas mann se office bhej diya,\nTab se har ghadi pachtaave ne mere dil ko gher liya.\nDarwaaze par khadi hoon aapki raah takte subah se hi jaan,\nSorry mere patidev apni pagli ko phir se apna maan.',
    'After our morning spat you left for work with a heavy heart,\nEver since that hour deep regret has lingered in my chest.\nWaiting by the doorway watching eagerly for your return,\nSorry my dear husband—hold your silly wife close again.',
    'EveningApology',
    368
  ],
  [
    'हक़ से रूठते हो हक़ से मान जाओ',
    'मेरा हक सिर्फ आप पर है तभी तो नखरे दिखाती हूँ,\nकभी गुस्सा कर बैठती हूँ तो कभी प्यार जताती हूँ।\nआज नखरे थोड़े ज़्यादा हो गए इसके लिए दिल से सॉरी,\nआपकी बाँहों में आकर ही तो मैं सुकून पाती हूँ।',
    'Mera haq sirf aap par hai tabhi toh nakhre dikhaati hoon,\nKabhi gussa kar baithti hoon toh kabhi pyaar jataati hoon.\nAaj nakhre thode zyaada ho gaye iske liye dil se sorry,\nAapki baanhon mein aakar hi toh main sukoon paati hoon.',
    'Only over you do I hold such playful right to fuss,\nSometimes flaring in silly moods, always loving you deep inside.\nToday my tantrum went too far and I am truly sorry,\nOnly inside your warm embrace does my heart find peace.',
    'CuteWifeToHusband',
    362
  ],
  [
    'पति के सम्मान में झुका सिर',
    'आपने हमेशा मेरी हर छोटी-बड़ी ख्वाहिश का मान रखा,\nखुद से भी पहले मेरी खुशी और मुस्कान का ध्यान रखा।\nमुझसे जो तीखे बोल निकले उनके लिए शर्मिंदा हूँ मैं,\nमेरे दिल के मंदिर में मैंने आपको भगवान सा स्थान रखा।',
    'Aapne hamesha meri har chhoti-badi khwaahish ka maan rakha,\nKhud se bhi pehle meri khushi aur muskaan ka dhyaan rakha.\nMujhse jo teekhe bol nikle unke liye sharminda hoon main,\nMere dil ke mandir mein maine aapko Bhagwan sa sthaan rakha.',
    'Every small and big wish of mine you always honored with care,\nPutting my comfort and smile ahead of your own desires.\nAshamed am I of the sharp words that slipped from me today,\nWithin the temple of my heart you hold the highest place.',
    'HusbandRespect',
    355
  ],
  [
    'कड़क चाय और प्यारी मुस्कान',
    'आपके हाथ में गरमा-गरम इलायची वाली चाय थमाती हूँ,\nआँखों ही आँखों में आज सौ बार सॉरी कह जाती हूँ।\nएक घूँट पीकर अपने चेहरे की सख्ती पिघला दो जानम,\nतुम्हारे बिना मैं एक पल भी कहाँ चैन पाती हूँ।',
    'Aapke haath mein garma-garam elaichi waali chai thamaati hoon,\nAankhon hi aankhon mein aaj sau baar sorry keh jaati hoon.\nEk ghoont peekar apne chehre ki sakhti pighla do jaanam,\nTumhaare bina main ek pal bhi kahan chain paati hoon.',
    'Placing a steaming cup of cardamom tea into your hands,\nThrough quiet eyes I whisper sorry a hundred tender times.\nTake one warm sip and let that stern expression melt away,\nNot a single moment feels peaceful when you are displeased.',
    'ChaiForHusband',
    348
  ],
  [
    'मेरी ताकत मेरे हमसफ़र',
    'दुनिया की हर भीड़ में आपका हाथ पकड़कर निडर चलती हूँ,\nआपकी स्नेह भरी छाँव में ही हर रोज़ संवरती हूँ।\nगलतफहमी की धूल को आज अपने प्यार से साफ़ कर दो,\nसॉरी मेरे हबी मैं आपसे बेइंतहा मोहब्बत करती हूँ।',
    'Duniya ki har bheed mein aapka haath pakadkar nidar chalti hoon,\nAapki sneh bhari chhaanv mein hi har roz sanwarti hoon.\nGalatfehmi ki dhool ko aaj apne pyaar se saaf kar do,\nSorry mere hubby main aapse beinteha mohabbat karti hoon.',
    'Holding your steady hand I walk fearlessly through every crowd,\nBeneath your affectionate care my spirit blossoms each day.\nBrush away the dust of misunderstanding with your love tonight,\nSorry dear hubby—I love you beyond all measure.',
    'SorryHubby',
    341
  ],
  [
    'नाराज़ पिया को मैसेज',
    'फ़ोन की स्क्रीन बार-बार देख रही हूँ आपके जवाब के लिए,\nतरस गई हैं मेरी कानें आपके प्यार भरे खिताब के लिए।\nएक कॉल कर लो मेरे रूठे सनम अब साँस अटक रही है,\nमाफ़ी माँगती हूँ सुबह के उस बेमतलब हिसाब के लिए।',
    'Phone ki screen baar-baar dekh rahi hoon aapke jawaab ke liye,\nTaras gayi hain meri kaanein aapke pyaar bhare khitaab ke liye.\nEk call kar lo mere roothe sanam ab saans atak rahi hai,\nMaafi maangti hoon subah ke us bematlab hisaab ke liye.',
    'Glancing at my phone screen again and again for your reply,\nMy ears long to hear you call my name fondly once more.\nCall me back, my upset love—my heart waits breathlessly,\nForgive me for this morning’s pointless argument.',
    'MessageSorryHusband',
    335
  ],
  [
    'झगड़े के बाद का सूनापन',
    'कमरे में आप भी हो और मैं भी हूँ फिर भी कितनी दूरी है,\nबिना आपसे बात किए मेरी हर साँस कितनी अधूरी है।\nमैं खुद चलकर आपके पास आई हूँ सारा गुमान छोड़कर,\nपति जी मान जाओ ना हमारी सुलह बेहद ज़रूरी है।',
    'Kamre mein aap bhi ho aur main bhi hoon phir bhi kitni doori hai,\nBina aapse baat kiye meri har saans kitni adhoori hai.\nMain khud chalkar aapke paas aayi hoon saara gumaan chhodkar,\nPati ji maan jaao na hamaari sulah behad zaroori hai.',
    'Both of us sit in the same room yet miles of silence stand between,\nWithout speaking to you every breath feels strangely hollow.\nSetting aside all pride I step over close to your side,\nRelent now, dear husband—peace between us means everything.',
    'SulahShayari',
    329
  ],
  [
    'शक और गुस्से की माफ़ी',
    'बेवजह के गुस्से में आपके सच्चे प्यार पर सवाल कर गई,\nअपनी ही बसाई खुशियों में आज खुद बवाल कर गई।\nमुझे माफ़ कर दो मेरे हमदम मुझसे बड़ी भूल हुई है,\nआपकी वफ़ादारी ने तो हर इम्तिहान में कमाल कर गई।',
    'Bewajah ke gusse mein aapke sacche pyaar par sawaal kar gayi,\nApni hi basaayi khushiyon mein aaj khud bawaal kar gayi.\nMujhe maaf kar do mere humdam mujhse badi bhool hui hai,\nAapki wafaadaari ne toh har imtihaan mein kamaal kar gayi.',
    'In needless frustration I questioned your devoted affection,\nStirring a storm right inside the happiness we built together.\nForgive me, my companion—it was truly a foolish blunder,\nYour steadfast loyalty has shone pure through every test.',
    'TrustHusbandSorry',
    323
  ],
  [
    'पति की एक मुस्कान का मोल',
    'जब आप मुस्कुराते हो तो घर का हर कोना खिल उठता है,\nजब आप उदास होते हो तो मेरा ही कलेजा दुखता है।\nचलो आज की कड़वी घड़ी को एक प्यारी झप्पी से मिटा दें,\nआपके कदमों के पास आकर मेरा हर शिकवा रुकता है।',
    'Jab aap muskuraate ho toh ghar ka har kona khil uthta hai,\nJab aap udaas hote ho toh mera hi kaleja dukhta hai.\nChalo aaj ki kadwi ghadi ko ek pyaari jhappi se mita dein,\nAapke kadmon ke paas aakar mera har shikwa rukta hai.',
    'Whenever you smile every corner of our house lights up,\nWhenever sorrow touches your brow my own heart aches.\nLet one warm hug erase the bitterness of this hour,\nBeside you every complaint of mine melts quietly away.',
    'HugHusbandSorry',
    318
  ],
  [
    'रूठे सजन से मनुहार',
    'पायल की छम-छम भी आज आपसे ही सिफारिश करती है,\nमेरी भीगी पलकें आपकी माफ़ी की गुज़ारिश करती हैं।\nअपने सीने से लगाकर कह दो कि अब कोई गिला नहीं,\nआपकी मोहब्बत ही मेरे सूखे मन पर बारिश करती है।',
    'Paayal ki chham-chham bhi aaj aapse hi sifaarish karti hai,\nMeri bheegi palkein aapki maafi ki guzaarish karti hain.\nApne seene se lagaakar keh do ki ab koi gila nahi,\nAapki mohabbat hi mere sookhe mann par baarish karti hai.',
    'Even the soft chime of my anklets pleads gently with you today,\nWhile misty eyelashes ask quietly for your kind pardon.\nHold me against your chest and say no grievance remains,\nYour love alone rains serenity upon my restless heart.',
    'ManuhaarPati',
    312
  ],
  [
    'हमसफ़र की धैर्यशीलता को सलाम',
    'मेरे सौ नखरे झेलकर भी आप कभी तीखा नहीं बोलते,\nगुस्से में भी रिश्तों की मर्यादा का तराज़ू नहीं डोलते।\nइतने सुलझे हुए पति का दिल दुखाकर बहुत शर्मिंदा हूँ,\nआप तो अपने प्यार में कभी कोई हिसाब नहीं तौलते।',
    'Mere sau nakhre jhelkar bhi aap kabhi teekha nahi bolte,\nGusse mein bhi rishton ki maryaada ka taraazu nahi dolte.\nItne suljhe huye pati ka dil dukhaakar bahut sharminda hoon,\nAap toh apne pyaar mein kabhi koi hisaab nahi taulte.',
    'Enduring a hundred moods of mine, still you never speak harshly,\nEven in upset you guard the dignity of our bond with grace.\nDeeply remorseful am I for hurting so patient a husband,\nFor you have always loved me without keeping score.',
    'PatientHusband',
    306
  ],
  [
    'पिया जी अब बात भी करो',
    'अखबार के पीछे चेहरा छुपाकर कब तक यूँ सताओगे,\nअपनी ही पगली बीवी से कब तक यूँ नज़रें बचाओगे।\nगलती मान ली है मैंने अब हँस भी दो मेरे राजा जी,\nवरना आज रात बिना मनाए आप भी कहाँ सो पाओगे।',
    'Akhbaar ke peeche chehra chhupaakar kab tak yoon sataaoge,\nApni hi pagli biwi se kab tak yoon nazrein bachaaoge.\nGalti maan li hai maine ab hans bhi do mere raaja ji,\nWarna aaj raat bina manaaye aap bhi kahan so paaoge.',
    'How long will you hide behind the newspaper to tease me?\nHow long can you keep turning your eyes from your loving wife?\nI have owned my mistake completely—now smile, my king,\nFor neither of us can sleep peacefully while upset tonight.',
    'PlayfulHusbandSorry',
    301
  ],
  [
    'सच्चे जीवनसाथी से माफ़ी',
    'सुख में साथ हँसना आसान है पर दुख में आपने संभाला है,\nमेरी हर कमज़ोरी को अपनी मज़बूत बाँहों में ढाला है।\nआज अपनी नासमझ ज़िद के लिए तहे-दिल से क्षमा माँगूँ,\nमेरे जीवन के हर अँधेरे का आप ही उजाला हैं।',
    'Sukh mein saath hansna aasaan hai par dukh mein aapne sambhaala hai,\nMeri har kamzori ko apni mazboot baanhon mein dhaala hai.\nAaj apni naasamajh zid ke liye tahe-dil se kshama maangoon,\nMere jeevan ke har andhere ka aap hi ujaala hain.',
    'Laughing together in ease is simple, yet in trials you held me steady,\nSheltering every vulnerability of mine in strong, caring arms.\nWholeheartedly I ask forgiveness for my stubborn mood today,\nYou are the guiding light across every shadow in my life.',
    'JeevansaathiSorry',
    295
  ],
  [
    'पति के परिवार और मान की कद्र',
    'आपके अपनों का आदर ही मेरे संस्कारों की पहचान है,\nअगर अनजाने में कोई चूक हुई तो माँगती क्षमादान है।\nमेरे प्रियतम आपका मान बढ़ाना ही मेरा पहला धर्म है,\nआपकी मुस्कान में ही बसती मेरी पूरी जान है।',
    'Aapke apnon ka aadar hi mere sanskaaron ki pehchan hai,\nAgar anjaane mein koi chook hui toh maangti kshamaadaan hai.\nMere priyatam aapka maan badhaana hi mera pehla dharm hai,\nAapki muskaan mein hi basti meri poori jaan hai.',
    'Honoring your loved ones reflects the truest grace of my values,\nIf any unintended lapse occurred, sincerely I ask pardon.\nUplifting your honor, dearest husband, is my foremost joy,\nWithin your gentle smile lives my very heartbeat.',
    'SanskariSorry',
    290
  ],
  [
    'गुस्से की बदली छाँट दो',
    'सावन की बदली भी बरसकर आसमान साफ़ कर जाती है,\nसच्ची मोहब्बत भी अपनों की नादानी माफ़ कर जाती है।\nअब इस सन्नाटे को तोड़कर मेरा नाम पुकारो प्रियवर,\nआपकी आवाज़ ही मेरे दिल में सुकून भर जाती है।',
    'Saawan ki badli bhi baraskar aasmaan saaf kar jaati hai,\nSacchi mohabbat bhi apnon ki naadani maaf kar jaati hai.\nAb is sannaate ko todkar mera naam pukaaro priyavar,\nAapki aawaaz hi mere dil mein sukoon bhar jaati hai.',
    'Even monsoon clouds pour down and leave the sky crystal clear,\nTrue love likewise forgives the stumbles of one’s own.\nBreak this quiet hush now and call my name fondly, darling,\nHearing your voice fills my heart with instant calm.',
    'PriyavarSorry',
    284
  ],
  [
    'छोटी सी तकरार का अंत',
    'पति-पत्नी में छोटी तकरार तो नमक बराबर होती है,\nपर बात बंद हो जाए तो रात भर आँख रोती है।\nचलो हाथ मिलाओ और फिर से मेरे दोस्त बन जाओ जान,\nहमारी जोड़ी तो प्यार के मोती हर रोज़ पिरोती है।',
    'Pati-patni mein chhoti takraar toh namak baraabar hoti hai,\nPar baat band ho jaaye toh raat bhar aankh roti hai.\nChalo haath milaao aur phir se mere dost ban jaao jaan,\nHamaari jodi toh pyaar ke moti har roz piroti hai.',
    'Little spats between spouses are mere seasoning in life,\nYet when talking stops, tears linger quietly through the night.\nTake my hand and be my best friend once again, my love,\nTogether we string pearls of affection into every day.',
    'BestFriendHusband',
    279
  ],
  [
    'आपके बिना घर सूना',
    'गुस्से में जब आप बिना कुछ कहे बालकनी में खड़े होते हो,\nसच कहूँ उस पल मेरे दिल में हज़ार काँटे चुभे होते हैं।\nपीछे से आकर आपका हाथ थाम रही हूँ सॉरी कहकर,\nहम दोनों के ख्वाब तो एक ही डोर से बँधे होते हैं।',
    'Gusse mein jab aap bina kuch kahe balcony mein khade hote ho,\nSach kahoon us pal mere dil mein hazaar kaante chubhe hote hain.\nPeeche se aakar aapka haath thaam rahi hoon sorry kehkar,\nHum donon ke khwaab toh ek hi dor se bandhe hote hain.',
    'When you stand silently on the balcony lost in quiet upset,\nTruly a thousand tiny aches pierce my heart in that moment.\nStepping beside you I hold your hand and whisper I am sorry,\nFor both our dreams are woven forever on a single thread.',
    'EmotionalHusbandSorry',
    274
  ],
  [
    'मेरे हमराज़ को सॉरी',
    'जिससे हर राज़ कहती हूँ उसी से आज उलझ बैठी,\nप्यार की सीधी डोर को नाहक ही उलझा बैठी।\nअपनी समझदारी से इस गाँठ को सुलझा लो मेरे पिया,\nमैं अपनी गलती मानकर आपके पास आ बैठी।',
    'Jisse har raaz kehti hoon usi se aaj ulajh baithi,\nPyaar ki seedhi dor ko naahak hi uljha baithi.\nApni samajhdaari se is gaanth ko suljha lo mere piya,\nMain apni galti maankar aapke paas aa baithi.',
    'With the confidant who knows every secret of mine I tangled today,\nKnotting the smooth thread of our love over nothing at all.\nUntangle this knot gently with your warm wisdom, beloved,\nOwning my fault completely, I sit close beside you now.',
    'HumraazPati',
    270
  ],
  [
    'हर जन्म में आप ही पति मिलें',
    'रूठना-मनाना तो चलता रहेगा पर साथ कभी न छूटेगा,\nहमारे भरोसे का यह पावन धागा कभी न टूटेगा।\nमाफ़ कर दो मेरे प्राणनाथ आज की इस कड़वी घड़ी को,\nहर जन्म में मेरा दिल सिर्फ आपका ही प्यार लूटेगा।',
    'Roothna-manaana toh chalta rahega par saath kabhi na chhootega,\nHamaare bharose ka yeh paawan dhaaga kabhi na tootega.\nMaaf kar do mere praannaath aaj ki is kadwi ghadi ko,\nHar janam mein mera dil sirf aapka hi pyaar lootega.',
    'Little spats and sweet makeups will pass, yet our bond never fades,\nNever shall the sacred thread of our trust come undone.\nForgive this brief bitter moment today, my dearest soulmate,\nAcross every lifetime my heart chooses only your love.',
    'PraannaathSorry',
    266
  ]
];

export const HUSBAND_SE_MAAFI_SHAYARIS: Shayari[] = HUSBAND_MAAFI_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `maafi-husband-${index + 1}`,
    category: 'husband-se-maafi',
    subCategory: 'husband-se-maafi',
    categoryType: 'feelings',
    categoryName: 'Husband Se Maafi (पति से माफ़ी)',
    categoryIcon: '💞',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['HusbandSeMaafi', 'SorryHusband', 'PatiMananaShayari', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);
