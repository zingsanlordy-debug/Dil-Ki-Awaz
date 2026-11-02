import { Shayari } from '../../types/shayari';

type MaafiTuple = [
  title: string,
  hindi: string,
  hinglish: string,
  english: string,
  tag: string,
  likes: number
];

const BIWI_MAAFI_RAW: MaafiTuple[] = [
  [
    'रूठी बीवी को प्यार भरी माफ़ी',
    'तुम्हारे बिना यह पूरा घर सूना और बेरंग सा लगता है,\nजब तुम मुँह फुलाकर बैठो तो दिल में अजीब सा दर्द जगता है।\nकान पकड़कर सॉरी कहता हूँ मेरी प्यारी हमसफ़र मान जाओ,\nतुम्हारी एक हँसी से ही मेरी ज़िंदगी का गुलशन महकता है।',
    'Tumhaare bina yeh poora ghar soona aur berang sa lagta hai,\nJab tum munh phulaakar baitho toh dil mein ajeeb sa dard jagta hai.\nKaan pakadkar sorry kehta hoon meri pyaari humsafar maan jaao,\nTumhaari ek hansi se hi meri zindagi ka gulshan mehekta hai.',
    'Without your warmth our entire home feels silent and colorless,\nWhen you sit pouting in upset, a quiet ache stirs in my chest.\nHolding my ears I say sorry—please forgive me, sweet partner,\nOne smile from you makes the whole garden of my life bloom.',
    'SorryWife',
    424
  ],
  [
    'बीवी का गुस्सा और मोहब्बत',
    'तुम्हारे गुस्से में भी छुपा हुआ मुझ पर गहरा अधिकार है,\nतभी तो तुम्हारी नाराज़गी में भी दिखता सच्चा प्यार है।\nमेरी नादान भूल को अब हँसकर माफ़ भी कर दो अर्धांगिनी,\nतुम्हारे पति को बस तुम्हारी मीठी मुस्कान का इंतज़ार है।',
    'Tumhaare gusse mein bhi chhupa hua mujh par gehra adhikaar hai,\nTabhi toh tumhaari naraazgi mein bhi dikhta saccha pyaar hai.\nMeri naadan bhool ko ab hanskar maaf bhi kar do ardhaangini,\nTumhaare pati ko bas tumhaari meethi muskaan ka intezaar hai.',
    'Even inside your anger hides a tender claim over my heart,\nThat is why true affection shines even through your displeasure.\nLaugh away my silly mistake and pardon me now, my soulmate,\nYour husband waits eagerly for your sweet smile to return.',
    'BiwiKaGussa',
    415
  ],
  [
    'गजरा और चाय से मनाना',
    'हाथों में मोगरे का गजरा और अदरक वाली चाय लाया हूँ,\nअपनी रूठी हुई रानी को मनाने दिल झुकाकर आया हूँ।\nगुस्सा थूक दो मेरी जान अब और न यूँ सताओ मुझे,\nतुम्हारी खामोशी से आज बहुत घबराया हुआ आया हूँ।',
    'Haathon mein mogre ka gajra aur adrak waali chai laaya hoon,\nApni roothi hui raani ko manaane dil jhukaakar aaya hoon.\nGussa thook do meri jaan ab aur na yoon sataao mujhe,\nTumhaari khamoshi se aaj bahut ghabraaya hua aaya hoon.',
    'Bringing fragrant jasmine blooms and hot ginger tea in my hands,\nI come with a humble heart to win back my upset queen.\nLet go of your anger, darling, and tease me with silence no more,\nThis quietness of yours has left my heart completely restless.',
    'RuthiBiwi',
    406
  ],
  [
    'अर्धांगिनी से दिल की क्षमा',
    'अपना मायका छोड़कर तुमने मेरा हर सुख-दुख अपनाया है,\nऔर मैंने नासमझी में आज तुम्हारा कोमल मन दुखाया है।\nसच्चे दिल से माफ़ी माँगता हूँ मेरी जीवनसंगिनी तुमसे,\nतुमने ही तो इस मकान को प्यार का सुंदर घर बनाया है।',
    'Apna maayka chhodkar tumne mera har sukh-dukh apnaaya hai,\nAur maine naasamjhi mein aaj tumhaara komal mann dukhaaya hai.\nSacche dil se maafi maangta hoon meri jeevansangini tumse,\nTumne hi toh is makaan ko pyaar ka sundar ghar banaaya hai.',
    'Leaving your childhood home behind, you embraced all my joys and trials,\nYet in thoughtless haste today I hurt your gentle heart.\nFrom the depths of my soul I apologize to you, my life partner,\nYou alone turned four walls into a warm home filled with love.',
    'Jeevansangini',
    397
  ],
  [
    'तारीख भूलने की प्यारी माफ़ी',
    'काम के उलझन में खास दिन की याद थोड़ी देर से आई,\nतभी तो मेरी प्यारी बीवी की आँखों में नाराज़गी छाई।\nपर दिल की हर धड़कन में हर पल सिर्फ तुम्हारा नाम है,\nमाफ़ कर दो जान आज तुम्हारी पसंद की मिठाई है मँगाई।',
    'Kaam ke uljhan mein khaas din ki yaad thodi der se aayi,\nTabhi toh meri pyaari biwi ki aankhon mein naraazgi chhaayi.\nPar dil ki har dhadkan mein har pal sirf tumhaara naam hai,\nMaaf kar do jaan aaj tumhaari pasand ki mithaai hai mangaayi.',
    'Lost in work’s tangles I remembered our special moment a bit late,\nBringing a cloud of upset into my lovely wife’s bright eyes.\nYet every heartbeat of mine whispers only your name each moment,\nForgive me, sweetheart—I brought your favorite sweets today.',
    'RomanticSorryWife',
    389
  ],
  [
    'चूड़ियों की खनक रुक गई',
    'जब तुम गुस्से में चुपचाप कमरे के कोने में बैठ जाती हो,\nचूड़ियों की खनक थमते ही मेरी धड़कनें सहम जाती हैं।\nएक सॉरी पर पिघल जाया करो मेरी प्यारी हमनवाज़,\nतुम्हारे रूठने से घर की सारी रौनकें ही थम जाती हैं।',
    'Jab tum gusse mein chupchaap kamre ke kone mein baith jaati ho,\nChoodiyon ki khanak thamte hi meri dhadkanein seham jaati hain.\nEk sorry par pighal jaaya karo meri pyaari humnawaaz,\nTumhaare roothne se ghar ki saari raunakein hi tham jaati hain.',
    'When you sit quietly in the corner of the room out of upset,\nAs the chime of your bangles pauses, my heart skips in worry.\nMelt softly at my heartfelt sorry, my dearest companion,\nWhen you turn displeased, every sparkle leaves our home.',
    'ChoodiyonKiKhanak',
    382
  ],
  [
    'बीवी की नोक-झोंक और प्यार',
    'झगड़े में जीतकर भी मैं तुझसे हमेशा हार जाता हूँ,\nतेरे उदास चेहरे पर अपनी सारी खुशियाँ वार जाता हूँ।\nमान भी जा मेरी प्यारी बीवी अब और इम्तिहान मत ले,\nसॉरी कहकर तेरी ज़ुल्फ़ों की लटें प्यार से सँवार जाता हूँ।',
    'Jhagde mein jeetkar bhi main tujhse hamesha haar jaata hoon,\nTere udaas chehre par apni saari khushiyaan waar jaata hoon.\nMaan bhi ja meri pyaari biwi ab aur imtihaan mat le,\nSorry kehkar teri zulfon ki latein pyaar se sanwaar jaata hoon.',
    'Even winning a silly quarrel feels like defeat if you look sad,\nGladly would I trade every triumph just to see you smile.\nRelent now, my lovely wife, and test my heart no longer,\nWhispering sorry, I gently tuck a stray curl behind your ear.',
    'BiwiManana',
    375
  ],
  [
    'सात फेरों का प्यारा वादा',
    'सात फेरों में वादा किया था कभी आँसू न आने दूँगा,\nपर आज अपनी ज़ुबान की भूल से तुम्हें उदास कर बैठा।\nमुझे माफ़ कर दो मेरी पत्नी मैं वादा फिर दोहराता हूँ,\nतुम्हारी इज़्ज़त और खुशी ही मैंने सबसे खास कर रखा।',
    'Saat pheron mein waada kiya tha kabhi aansu na aane doonga,\nPar aaj apni zubaan ki bhool se tumhein udaas kar baitha.\nMujhe maaf kar do meri patni main waada phir dohraata hoon,\nTumhaari izzat aur khushi hi maine sabse khaas kar rakha.',
    'Around the sacred vows I promised never to bring you tears,\nYet a careless slip of words today left your heart heavy.\nForgive me, dear wife, as I renew that sacred promise now,\nYour dignity and joy remain foremost in my life forever.',
    'SaatPherePromise',
    368
  ],
  [
    'रसोई की खामोशी तोड़ दो',
    'बर्तनों की खटपट से समझ गया आज रानी जी खफ़ा हैं,\nहमसे अनजाने में हुई कोई नादान सी खता है।\nचलो आज खाना मैं बनाता हूँ तुम आराम से बैठो ज़रा,\nतुम्हें हँसाना ही तो मेरे इश्क़ की सबसे हसीन अदा है।',
    'Bartanon ki khatpat se samajh gaya aaj raani ji khafa hain,\nHumse anjaane mein hui koi naadan si khata hai.\nChalo aaj khaana main banaata hoon tum aaraam se baitho zara,\nTumhein hansaana hi toh mere ishq ki sabse haseen ada hai.',
    'From the clatter in the kitchen I can tell my queen is upset,\nSurely some thoughtless mistake of mine caused this frown.\nSit back and rest tonight while I cook dinner for us both,\nBringing laughter back to your lips is my favorite act of love.',
    'CuteWifeSorry',
    361
  ],
  [
    'गुस्से में भी हसीन लगती हो',
    'गुस्से से जब तुम्हारी नाक का कोना लाल हो जाता है,\nसच कहूँ मेरा आशिक़ दिल और भी बेहाल हो जाता है।\nफिर भी रूठी मत रहो मेरी जान अब मुस्कुरा भी दो,\nतुम्हारे बात न करने से एक पल एक साल हो जाता है।',
    'Gusse se jab tumhaari naak ka kona laal ho jaata hai,\nSach kahoon mera aashiq dil aur bhi behaal ho jaata hai.\nPhir bhi roothi mat raho meri jaan ab muskura bhi do,\nTumhaare baat na karne se ek pal ek saal ho jaata hai.',
    'Even when adorable anger turns the tip of your nose rosy,\nTruthfully my smitten heart falls in love all over again.\nStill do not stay upset, darling—flash me a gentle smile,\nOne silent minute without your voice stretches like a year.',
    'FlirtyWifeSorry',
    355
  ],
  [
    'वक्त न दे पाने की माफ़ी',
    'दफ़्तर के बोझ में तुम्हारे लिए वक्त कम निकाल पाया,\nतुम सज-संवर कर इंतज़ार करती रहीं और मैं देर से आया।\nसॉरी मेरी प्यारी बीवी कल की पूरी शाम सिर्फ तुम्हारी है,\nतुम्हारे साथ से ही मेरे हर मुकाम ने उजाला पाया।',
    'Daftar ke bojh mein tumhaare liye waqt kam nikaal paaya,\nTum saj-sanwar kar intezaar karti rahin aur main der se aaya.\nSorry meri pyaari biwi kal ki poori shaam sirf tumhaari hai,\nTumhaare saath se hi mere har mukaam ne ujaala paaya.',
    'Buried under office work I spared too little time for you,\nYou waited dressed so gracefully while I walked in late.\nSorry my sweet wife—tomorrow evening belongs solely to you,\nOnly through your steady support has my journey shone bright.',
    'BusyHusbandSorry',
    349
  ],
  [
    'माथे को चूमकर सॉरी',
    'लफ़्ज़ों से न मानो तो माथा चूमकर माफ़ी माँग लेता हूँ,\nतुम्हारी आँखों की शिकायतें बिना कहे भाँप लेता हूँ।\nमेरी हमसफ़र तुम मेरे घर की लक्ष्मी और सुकून हो,\nअपनी हर गलती की ज़िम्मेदारी आज अपने नाम लेता हूँ।',
    'Lafzon se na maano toh maatha choomkar maafi maang leta hoon,\nTumhaari aankhon ki shikaayatein bina kahe bhaanp leta hoon.\nMeri humsafar tum mere ghar ki Lakshmi aur sukoon ho,\nApni har galti ki zimmedaari aaj apne naam leta hoon.',
    'If words fall short, let a kiss on your forehead ask pardon,\nEvery unspoken complaint in your eyes my heart already reads.\nMy companion, you are the grace and serenity of our home,\nWholeheartedly I own up to my mistake before you today.',
    'ForeheadKissSorry',
    343
  ],
  [
    'बीवी की डाँट भी मीठी',
    'तुम हक से लड़ लिया करो पर यूँ अजनबी मत बनो कभी,\nतुम्हारे मीठे तानों से ही तो सजती है मेरी ज़िंदगी सभी।\nगलती मेरी थी सौ बार मानता हूँ मेरी प्यारी श्रीमती जी,\nबस एक बार प्यार से देख लो तो लौट आए खुशी अभी।',
    'Tum haq se lad liya karo par yoon ajnabi mat bano kabhi,\nTumhaare meethe taanon se hi toh sajti hai meri zindagi sabhi.\nGalti meri thi sau baar maanta hoon meri pyaari shrimati ji,\nBas ek baar pyaar se dekh lo toh laut aaye khushi abhi.',
    'Quarrel with full right over me, just never act distant,\nEven your playful teasing adds color to my everyday life.\nA hundred times over I admit the fault was mine, dear wife,\nLook at me fondly once and happiness rushes right back in.',
    'ShrimatiSorry',
    337
  ],
  [
    'बिना तेरे खाना अधूरा',
    'तुम रूठ कर बिना खाए सो जाओ यह मुझे गवारा नहीं,\nतुम्हारे सिवा इस दुनिया में मेरा कोई भी सहारा नहीं।\nउठो साथ बैठकर एक ही थाली में आज निवाला बाँट लें,\nसॉरी मेरी जान अब कभी दिल दुखाने का इरादा नहीं।',
    'Tum rooth kar bina khaaye so jaao yeh mujhe gawaara nahi,\nTumhaare siva is duniya mein mera koi bhi sahaara nahi.\nUtho saath baithkar ek hi thaali mein aaj niwala baant lein,\nSorry meri jaan ab kabhi dil dukhaane ka iraada nahi.',
    'Seeing you go to sleep hungry in upset breaks my heart,\nBeside you there is no closer anchor for me in this world.\nCome sit together and share a warm meal from one plate,\nSorry my love—never again do I wish to hurt your feelings.',
    'CaringHusbandSorry',
    331
  ],
  [
    'मेरी दुनिया मेरी पत्नी',
    'लोग कहते हैं सॉरी कहने से मर्द छोटा हो जाता है,\nमैं कहता हूँ बीवी की खुशी से रिश्ता मोटा हो जाता है।\nतुम्हारे सामने झुकने में मुझे हमेशा गर्व महसूस होता है,\nमाफ़ कर दो प्रिये तुम्हारे बिना हर सपना खोटा हो जाता है।',
    'Log kehte hain sorry kehne se mard chhota ho jaata hai,\nMain kehta hoon biwi ki khushi se rishta mota ho jaata hai.\nTumhaare saamne jhukne mein mujhe hamesha garv mehsoos hota hai,\nMaaf kar do priye tumhaare bina har sapna khota ho jaata hai.',
    'People claim saying sorry makes a man seem smaller,\nI say cherishing one’s wife makes a marriage far stronger.\nYielding before your love fills me only with quiet pride,\nForgive me, darling—without you every dream rings hollow.',
    'HusbandPrideSorry',
    326
  ],
  [
    'पत्नी के आँसू सबसे महँगे',
    'हीरे-मोती से भी कीमती है मेरी बीवी की एक मुस्कान,\nमेरी कड़वी बात ने आज ले ली उस मासूम हँसी की जान।\nखुद को कभी माफ़ न कर पाऊँगा अगर तुम यूँ उदास रहीं,\nगले लग जाओ हमसफ़र तुम से ही है मेरी हर पहचान।',
    'Heere-moti se bhi keemti hai meri biwi ki ek muskaan,\nMeri kadwi baat ne aaj le li us maasoom hansi ki jaan.\nKhud ko kabhi maaf na kar paaoonga agar tum yoon udaas rahin,\nGale lag jaao humsafar tum se hi hai meri har pehchan.',
    'More precious than diamonds is a single smile on my wife’s face,\nYet my careless remark dimmed that innocent radiance today.\nNever could I forgive myself if sorrow lingered in your eyes,\nCome into my arms, partner—my life finds meaning in you.',
    'WifeTearsSorry',
    320
  ],
  [
    'व्हाट्सएप पर बीवी को सॉरी',
    'ऑफिस में बैठा हूँ पर ध्यान घर पर तुम्हारे चेहरे पर है,\nसुबह की छोटी सी अनबन का बोझ मेरे दिल पर गहरा है।\nमैसेज पढ़कर एक प्यारा सा दिल भेज दो मेरी जानम,\nघर लौटते ही तुम्हारे लिए सरप्राइज़ का तोहफ़ा ठहरा है।',
    'Office mein baitha hoon par dhyaan ghar par tumhaare chehre par hai,\nSubah ki chhoti si anban ka bojh mere dil par gehra hai.\nMessage padhkar ek pyaara sa dil bhej do meri jaanam,\nGhar laut-te hi tumhaare liye surprise ka tohfa thehra hai.',
    'Sitting at my desk yet my thoughts linger on your face at home,\nThis morning’s little spat weighs heavily upon my chest.\nRead this note and send back one sweet heart, my darling,\nA lovely surprise awaits you the moment I walk home tonight.',
    'WhatsAppWifeSorry',
    315
  ],
  [
    'बीवी की थकान और त्याग',
    'सुबह से रात तक सबकी पसंद का ख्याल रखती हो तुम,\nथक कर भी चेहरे पर सदा मुस्कान संभाल रखती हो तुम।\nमैं ही पगला था जो तुम्हारी मेहनत की कद्र भूल गया,\nमाफ़ कर दो रानी रिश्तों में अद्भुत कमाल रखती हो तुम।',
    'Subah se raat tak sabki pasand ka khyaal rakhti ho tum,\nThak kar bhi chehre par sada muskaan sambhaal rakhti ho tum.\nMain hi pagla tha jo tumhaari mehnat ki kadr bhool gaya,\nMaaf kar do raani rishton mein adbhut kamaal rakhti ho tum.',
    'From dawn till night you tend thoughtfully to everyone’s needs,\nEven when tired you keep a graceful smile upon your face.\nFoolish was I to overlook the quiet wonder of your care,\nForgive me, queen—your devotion holds our family together.',
    'RespectWifeSorry',
    310
  ],
  [
    'रूठी हमसफ़र से गुज़ारिश',
    'चाँद भी बादलों से बाहर आ गया अब तुम भी परदा हटाओ,\nगुस्से की इस ठंडी दीवार को अपने प्यार से गिराओ।\nहाथ पकड़कर लॉन्ग ड्राइव पर ले चलूँगा आज तुम्हें,\nबस एक बार पहले की तरह खिलखिलाकर मुस्कुराओ।',
    'Chaand bhi baadalon se baahar aa gaya ab tum bhi parda hataao,\nGusse ki is thandi deewaar ko apne pyaar se giraao.\nHaath pakadkar long drive par le chaloonga aaj tumhein,\nBas ek baar pehle ki tarah khilkhilaakar muskuraao.',
    'Even the moon has stepped out from behind the clouds tonight,\nLet your warmth melt down this chilly wall of displeasure.\nHold my hand and let me take you out for a quiet drive,\nJust laugh brightly once more the way you always do.',
    'LongDriveManana',
    304
  ],
  [
    'मेरी धड़कन मेरी शरीक-ए-हयात',
    'तुम्हारे बिना मेरी हर दुआ और हर ख्वाब अधूरा है,\nतुम साथ मुस्कुराती हो तभी मेरा जहाँ पूरा है।\nजाने-अनजाने जो दिल दुखाया उसकी तहे-दिल से माफ़ी,\nमेरा इश्क़ आज भी तुम्हारे नाम का ही कस्तूरा है।',
    'Tumhaare bina meri har dua aur har khwaab adhoora hai,\nTum saath muskuraati ho tabhi mera jahaan poora hai.\nJaane-anjaane jo dil dukhaaya uski tahe-dil se maafi,\nMera ishq aaj bhi tumhaare naam ka hi kastoora hai.',
    'Without you every prayer and dream of mine remains incomplete,\nOnly when you smile beside me does my world feel whole.\nFrom the depths of my heart I apologize for causing hurt,\nMy love still breathes the sweet fragrance of your name.',
    'SharikEHayat',
    298
  ],
  [
    'बीवी की चुप्पी से डर लगता है',
    'तुम्हारा बोलना झगड़ना सब दिल को बहुत भाता है,\nपर जब तुम खामोश हो जाओ तो सीना बैठ सा जाता है।\nसॉरी मेरी प्यारी पत्नी अब अपनी मीठी आवाज़ सुना दो,\nतुम्हारे बिना इस घर का कोना-कोना मुझे काटने आता है।',
    'Tumhaara bolna jhagadna sab dil ko bahut bhaata hai,\nPar jab tum khamosh ho jaao toh seena baith sa jaata hai.\nSorry meri pyaari patni ab apni meethi aawaaz suna do,\nTumhaare bina is ghar ka kona-kona mujhe kaatne aata hai.',
    'Your lively chatter and playful banter brighten all my days,\nYet when you turn silent my heart sinks in quiet dread.\nSorry my beloved wife—let me hear your sweet voice again,\nWithout your laughter every corner of home feels lonely.',
    'WifeSilenceSorry',
    293
  ],
  [
    'प्यार की शर्त में हार मंज़ूर',
    'चलो मान लिया सारी गलती शुरू से आखिर तक मेरी थी,\nतुम बिल्कुल सही थीं जान बस समझने में मुझसे देरी थी।\nअब तो अपने पिया को अपनी बाँहों की पनाह दे दो,\nतुम्हारी नाराज़गी ने मेरी सारी खुशियों को घेरी थी।',
    'Chalo maan liya saari galti shuru se aakhir tak meri thi,\nTum bilkul sahi thin jaan bas samajhne mein mujhse deri thi.\nAb toh apne piya ko apni baanhon ki panaah de do,\nTumhaari naraazgi ne meri saari khushiyon ko gheri thi.',
    'All right, I admit every bit of the fault was mine alone,\nYou were right all along while I was just slow to see.\nWelcome your husband back into your warm embrace now,\nYour displeasure had cast a shadow over all my joy.',
    'SweetApologyWife',
    287
  ],
  [
    'मेहंदी वाले हाथों की कसम',
    'जिन हाथों में मेरे नाम की गहरी मेहंदी रचाती हो,\nउन्हीं हाथों से आज आँसू पोंछकर मुझे कितना रुलाती हो।\nसॉरी मेरी रानी अब कभी शिकायत का मौका नहीं दूँगा,\nतुम ही तो मेरे हर ग़म में ढाल बनकर आती हो।',
    'Jin haathon mein mere naam ki gehri mehendi rachaati ho,\nUnhin haathon se aaj aansu ponchhkar mujhe kitna rulaati ho.\nSorry meri raani ab kabhi shikaayat ka mauka nahi doonga,\nTum hi toh mere har gham mein dhaal bankar aati ho.',
    'Those hands you adorn in deep henna bearing my name,\nSeeing them wipe away tears today breaks my own heart.\nSorry my queen—never again will I give cause for sorrow,\nYou have always stood beside me as my tender shield.',
    'MehendiWifeSorry',
    282
  ],
  [
    'गुस्सा छोड़ो आइसक्रीम खाएँ',
    'रात की ठंडी हवा में चलो आइसक्रीम खाने चलते हैं,\nआज के सारे गिले-शिकवे हँसी में भुलाने चलते हैं।\nमेरी प्यारी बीवी तुम्हारा मुँह फुलाना अब बस भी करो,\nअपने इस रिश्ते को और भी हसीन बनाने चलते हैं।',
    'Raat ki thandi hawa mein chalo ice-cream khaane chalte hain,\nAaj ke saare gile-shikwe hansi mein bhulaane chalte hain.\nMeri pyaari biwi tumhaara munh phulaana ab bas bhi karo,\nApne is rishte ko aur bhi haseen banaane chalte hain.',
    'Out into the cool evening breeze let us go share ice cream,\nMelting every little grievance away in warm laughter.\nDrop that cute pout now, my darling wife, and take my hand,\nLet us make our bond sweeter than it has ever been.',
    'CuteMananaWife',
    276
  ],
  [
    'जनम-जनम की साथी से क्षमा',
    'एक जनम नहीं सात जनम तक तुम्हारा ही साथ माँगता हूँ,\nहर मोड़ पर अपने हाथों में तुम्हारा ही हाथ माँगता हूँ।\nआज की कड़वाहट को प्यार की मिठास से मिटा दो प्रिये,\nअपनी बीवी से क्षमा का प्यारा सा सौगात माँगता हूँ।',
    'Ek janam nahi saat janam tak tumhaara hi saath maangta hoon,\nHar mod par apne haathon mein tumhaara hi haath maangta hoon.\nAaj ki kadwaahat ko pyaar ki mithaas se mita do priye,\nApni biwi se kshama ka pyaara sa saugaat maangta hoon.',
    'Not for one lifetime alone, for seven lives I seek your side,\nAt every turn of fate it is your hand I wish to hold.\nDissolve today’s bitterness in the sweetness of our love,\nFrom my beloved wife I ask the precious gift of forgiveness.',
    'SaatJanamWife',
    272
  ]
];

export const BIWI_SE_MAAFI_SHAYARIS: Shayari[] = BIWI_MAAFI_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `maafi-biwi-${index + 1}`,
    category: 'biwi-se-maafi',
    subCategory: 'biwi-se-maafi',
    categoryType: 'feelings',
    categoryName: 'Biwi Se Maafi (बीवी से माफ़ी)',
    categoryIcon: '🌹',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['BiwiSeMaafi', 'SorryWife', 'WifeMananaShayari', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);
