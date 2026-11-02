import { Shayari } from '../../../types/shayari';
import { buildCategoryShayaris, RawPoemTuple } from './shayariBuilder';

// 27. Yaadein Shayari (30 unique 25-40 word poems)
const YAADEIN_POEMS: readonly RawPoemTuple[] = [
  [
    'अलमारी के कोने से जब पुरानी डायरी निकल आई,\nगुज़रे हुए मौसम की हर बात सामने चल आई,\nधूल झाड़ी पन्नों से तो मुस्कुरा पड़े हम अचानक,\nसालों पुरानी यादों की खुशबू कमरे में ढल आई।',
    'Pulling an old diary from a quiet cupboard corner,\nBrought bygone seasons vividly before my eyes,\nBrushing soft dust off pages sparked warm laughter,\nFragrance of treasured memories filled the room.'
  ],
  [
    'वक़्त आगे बढ़ जाता है मगर यादें वहीं ठहरती हैं,\nसूनी दुपहरी में ठंडी छाँव बनकर बिखरती हैं,\nजितनी बार पलटकर देखो बीते दिनों की गलियाँ,\nउतनी बार रूह के भीतर नई तस्वीरें उभरती हैं।',
    'Time marches onward while memories stay anchored,\nSpreading cool shade across quiet afternoons,\nEvery glance backward down familiar lanes,\nPaints fresh portraits deep inside the soul.'
  ],
  [
    'कच्चे आँगन की मिट्टी जब बारिश में महकती थी,\nदादी की कहानियों से सारी शाम चहकती थी,\nवो सुनहरी यादें आज भी सीने में महफ़ूज़ हैं,\nजहाँ बेफ़िक्र बचपन की हर घड़ी दमकती थी।',
    'Earthen courtyards smelled sweet beneath first rain,\nGrandmother tales lit up every twilight hour,\nThose golden memories live safe inside my chest,\nWhere carefree childhood moments shone bright.'
  ],
  [
    'कुछ लम्हे गुज़र कर भी ज़िंदगी से जाते नहीं,\nनए नज़ारे पुराने दिनों का मज़ा लाते नहीं,\nयादों की तिजोरी में बंद हैं अनमोल खज़ाने,\nजिन्हें वक़्त के चोर कभी चुरा पाते नहीं।',
    'Certain moments never truly depart once lived,\nNew sights rarely match warmth of yesteryear,\nPriceless treasures rest locked inside memory,\nSafe beyond reach of passing time thieves.'
  ],
  [
    'पुराने गीत की धुन जब रेडियो पर बज उठती है,\nमन के परदे पर बीती महफ़िल सज उठती है,\nयादें बिन बुलाए मेहमान की तरह दस्तक देकर,\nआँखों के कोरों पर मोती सी सज उठती हैं।',
    'Whenever classic melodies drift across quiet air,\nBygone gatherings awaken behind closed eyes,\nMemories knock gently like unannounced guests,\nGlistening like soft pearls along eyelashes.'
  ],
  [
    'सूखे पत्तों की सरसराहट में पुरानी आवाज़ें हैं,\nबंद संदूक में रखे बीते कल के अंदाज़े हैं,\nयादें ही तो इंसान को जड़ों से जोड़े रखती हैं,\nजिनके खुलते ही दिल में हज़ारों दरवाज़े हैं।',
    'Rustling autumn leaves whisper familiar voices,\nWooden trunks shelter keepsakes of yesterday,\nMemories tether human hearts back to roots,\nOpening quiet doors deep inside reflection.'
  ],
  [
    'शाम की हल्की धूप जब दीवार पर ढलने लगती है,\nपुरानी मुलाक़ातों की रील आँखों में चलने लगती है,\nकुछ चेहरे ओझल हो गए ज़माने की भीड़ में कहीं,\nमगर उनकी याद आज भी चिराग़ सी जलने लगती है।',
    'As pale evening sunlight slants down walls,\nReels of past meetings play behind my gaze,\nDear faces vanished somewhere inside busy crowds,\nYet remembrance glows steady like oil lamps.'
  ],
  [
    'कॉलेज की कैंटीन और वो आख़िरी बेंच के ठहाके,\nयाद आते हैं आज भी वो बेपरवाह से इलाक़े,\nज़िंदगी ने सबको अलग-अलग शहरों में बाँट दिया,\nरह गए बस यादों के रंगीन से पताके।',
    'Canteen tea tables and back-bench laughter,\nCarefree corners still echo warm within,\nLife scattered everyone across distant cities,\nLeaving colorful banners of memory waving.'
  ],
  [
    'काग़ज़ की नाव बनाकर पानी में बहाया करते थे,\nछोटी-छोटी खुशियों से पूरा घर सजाया करते थे,\nयादों के झरोखे से आज फिर झाँका जब पीछे,\nकितने सच्चे थे वो दिन जो मुस्कुराया करते थे।',
    'Floating paper boats down monsoon streams,\nDecorating whole homes with tiny delights,\nPeering backward through windows of remembrance,\nHow honest shone days that smiled effortlessly.'
  ],
  [
    'तस्वीरों में क़ैद चेहरों की उम्र कभी बढ़ती नहीं,\nयादों की धूप पर वक़्त की बदली चढ़ती नहीं,\nजब भी तन्हा होता हूँ खोल लेता हूँ एल्बम पुराना,\nइससे प्यारी किताब दुनिया में कोई पढ़ती नहीं।',
    'Faces framed inside photographs never grow old,\nClouds of age cannot dim sunlight of memory,\nOpening faded albums during quiet evenings,\nReads sweeter than any book on earth.'
  ],
  [
    'गर्मियों की छुट्टियाँ और छत पर बिछती चारपाइयाँ,\nतारों को गिनते हुए बीतती वो मीठी तन्हाइयाँ,\nयाद बनकर आज भी रूह को ठंडक पहुँचाती हैं,\nनानी के घर की वो आचार और मलाईयाँ।',
    'Summer holidays and cots spread across rooftops,\nCounting bright stars through breezy nights,\nMemories still cool the spirit tenderly today,\nRecalling homemade pickles and family warmth.'
  ],
  [
    'हवा के झोंके कभी पुराने शहर की मिट्टी लाते हैं,\nभटके हुए मुसाफ़िर को घर का रास्ता दिखाते हैं,\nयादें कोई बोझ नहीं बल्कि रूह की ख़ुराक हैं,\nजिनके सहारे कठिन सफ़र हँसते कट जाते हैं।',
    'Passing winds carry scent of hometown soil,\nPointing wandering travelers gently back home,\nMemories nourish the spirit rather than burden,\nHelping rough journeys pass with quiet smiles.'
  ],
  [
    'एक पुराना रुमाल आज भी खुशबू समेटे बैठा है,\nबिछड़े हुए सावन की कहानी लपेटे बैठा है,\nछूते ही जाग उठते हैं सोए हुए जज़्बात सारे,\nयादों का समंदर किनारे समेटे बैठा है।',
    'A folded handkerchief still guards faint perfume,\nWrapping stories of monsoons shared long ago,\nOne gentle touch awakens sleeping emotions,\nOceans of remembrance rest calm onshore.'
  ],
  [
    'जिन रास्तों पर कभी नंगे पाँव दौड़ा करते थे,\nतितलियों के पीछे सारा काम छोड़ा करते थे,\nआज गाड़ी के शीशे से देखता हूँ उन पगडंडियों को,\nजहाँ हम यादों के अनगिनत फूल जोड़ा करते थे।',
    'Trails where barefoot steps once raced freely,\nDropping chores just to chase bright butterflies,\nWatching narrow footpaths past car windows now,\nWhere countless blossoms of memory were gathered.'
  ],
  [
    'यादें भी अजीब हैं हँसाती भी हैं और रुलाती भी,\nसोए हुए मन को आधी रात जगाती भी,\nमिटाना चाहो तो और गहरी लकीर खींच देती हैं,\nबिछड़े हुए पलों को सीने से लगाती भी।',
    'Memories work wonders bringing laughter then mist,\nWaking quiet hearts gently past midnight,\nTrying to erase them only deepens their trace,\nHolding departed moments close inside.'
  ],
  [
    'मिट्टी के कुल्हड़ वाली चाय जब होठों से लगती है,\nपुरानी चौपाल की महफ़िल फिर से सजती है,\nलोग बदल गए और बदल गए शहर के नक़्शे भी,\nबस यादों की घड़ी पुरानी रफ़्तार से बजती है।',
    'Sipping warm tea from clay cups awakens nostalgia,\nSetting old courtyard gatherings alive again,\nPeople changed alongside shifting city maps,\nOnly memory clock ticks at classic pace.'
  ],
  [
    'स्याही धुँधली पड़ गई मगर ख़त के जज़्बात ज़िंदा हैं,\nबीते बरसों के परिंदे दिल के आँगन में परिंदा हैं,\nयादों को सहेज कर रखना भी एक कला है दोस्त,\nजिनके पास यादें हैं वो कहाँ कभी शर्मिंदा हैं।',
    'Ink faded slightly yet letter warmth lives on,\nBirds of yesteryear still nest inside my heart,\nPreserving sweet memories remains fine art,\nRich is the soul keeping gratitude alive.'
  ],
  [
    'सावन का झूला और नीम की ठंडी घनी छाँव,\nआज भी सपनों में बुलाता है मेरा छोटा सा गाँव,\nकंक्रीट के जंगल में भले महल बना लिए हमने,\nयादों की पगडंडी पर आज भी भटकते हैं पाँव।',
    'Monsoon swings beneath shady neem branches,\nMy humble village still calls inside dreams,\nThough concrete towers surround modern life,\nFootsteps wander fondly down memory lanes.'
  ],
  [
    'कुछ लोगों से दोबारा मुलाक़ात मुमकिन नहीं होती,\nपर उनकी याद की चमक कभी मद्धम नहीं होती,\nएक मुस्कान छोड़ जाते हैं वो ज़िहन के पन्नों पर,\nजिसकी मिठास आख़िरी साँस तक कम नहीं होती।',
    'Certain souls we may never meet again here,\nYet brilliance of knowing them never dims,\nLeaving gentle smiles across pages of mind,\nWhose quiet sweetness lasts a lifetime.'
  ],
  [
    'सर्दियों की गुनगुनी धूप और मूँगफली के छिलके,\nछत की मुंडेर पर बैठना सारे घरवाले मिलके,\nकहाँ खो गईं वो सादगी से भरी हुई दोपहरियाँ,\nअब तो बस यादों में चमकते हैं वो पन्ने दिल के।',
    'Mild winter sunshine and roasted peanuts shared,\nWhole families gathered along sunny rooftops,\nWhere vanished those unhurried afternoons,\nShining brightly now across pages of memory.'
  ],
  [
    'यादों का कारवाँ जब दबे पाँव गुज़रता है रात में,\nबचपन और जवानी मिल जाते हैं एक ही बात में,\nशिकवा नहीं गुज़रते वक़्त की तेज़ रफ़्तार से हमें,\nहज़ारों हसीन पल जमा हैं हमारी सौगात में।',
    'When caravans of memory tiptoe past at night,\nYouth and childhood blend inside reflection,\nBearing zero grudge against swift-moving time,\nThousands of lovely moments remain our gift.'
  ],
  [
    'स्कूल की घंटी की आवाज़ आज भी कानों में गूँजती है,\nपुरानी किताबों की गंध मन के कोने सींचती है,\nवो बिना वजह की हँसी अब ख़रीदे नहीं मिलती कहीं,\nयादों की डोर आज भी हमें पीछे खींचती है।',
    'School bell chimes still echo faintly indoors,\nScent of paperbacks waters quiet nostalgia,\nUnprompted laughter cannot be purchased today,\nThreads of remembrance tug fondly backward.'
  ],
  [
    'हर मोड़ पर ज़िंदगी ने कुछ निशान छोड़े हैं,\nकुछ रिश्ते तोड़े हैं तो कुछ यादों से जोड़े हैं,\nजो छूट गया पीछे उसका अफ़सोस क्या करना यारो,\nअच्छी यादों के मोती भी तो हमने कम नहीं बटोरे हैं।',
    'Every turn along life road left distinct marks,\nParting certain ties while weaving memories,\nWhy mourn whatever stayed behind us friend,\nCountless bright pearls of remembrance remain.'
  ],
  [
    'दीवाली के मिट्टी वाले घरौंदे और फुलझड़ियों की चमक,\nत्योहारों से हफ़्तों पहले शुरू होती थी घर की दमक,\nयादें आज भी रोशन कर देती हैं सूने मन का कोना,\nजब तन्हा शामों में घुलती है बीते कल की महक।',
    'Clay festival lamps and sparkler glow at dusk,\nExcitement brightening homes weeks beforehand,\nMemories still illuminate quiet inner corners,\nWhen scent of bygone evenings drifts near.'
  ],
  [
    'चंद मुलाक़ातें उम्र भर का सरमाया बन जाती हैं,\nधूप के सफ़र में घने शजर का साया बन जाती हैं,\nइंसान चला जाता है अपनी मंज़िल की तलाश में दूर,\nपीछे बस उसकी मीठी यादें हमसाया बन जाती हैं।',
    'Brief meetings become lifelong inner wealth,\nCasting leafy shade across sun-baked roads,\nTravelers journey onward chasing distant goals,\nLeaving gentle memories behind as companions.'
  ],
  [
    'आँखें मूँद लो तो पूरा अतीत सामने मुस्कुराता है,\nहर बिछड़ा हुआ लम्हा गले मिलने चला आता है,\nयादों की यही ख़ूबसूरती है मेरे प्यारे दोस्त,\nयहाँ न टिकट लगता है न कोई पासपोर्ट दिखलाता है।',
    'Closing eyes brings yesterday smiling close,\nEvery departed moment steps forward warmly,\nSuch remains the quiet beauty of remembrance,\nRequiring neither ticket nor passport to visit.'
  ],
  [
    'दरख़्त की छाल पर उकेरे नाम धुँधले हो गए होंगे,\nहमारे लगाए छोटे पौधे अब बड़े पेड़ हो गए होंगे,\nकभी लौटकर देखेंगे उस पुरानी गली का मंज़र फिर,\nजहाँ हमारी यादों के परिंदे आज भी सो गए होंगे।',
    'Initials carved on bark must have softened now,\nSaplings we planted stand tall like trees,\nSomeday footsteps will revisit that quiet lane,\nWhere birds of memory still roost peacefully.'
  ],
  [
    'हँसते हुए चेहरों की याद कलेजे को ठंडक देती है,\nउदासी के मौसम में उम्मीदों की दस्तक देती है,\nसंभाल कर रखो अपने दिल में अच्छे पलों की पूँजी,\nयही दौलत आख़िर तक ज़िंदगी को रौनक देती है।',
    'Recalling cheerful faces cools an aching chest,\nKnocking softly with hope during grey seasons,\nGuard treasures of kind moments inside your heart,\nThat wealth brightens life till the end.'
  ],
  [
    'बारिश में भीगते हुए साइकिल चलाने का वो दौर,\nन कल की चिंता थी न दुनियादारी का कोई शोर,\nयादें जब छेड़ती हैं उन भीगी शामों के तराने,\nमन का मयूर नाच उठता है फिर उसी पुरानी ओर।',
    'Pedaling bicycles through pouring monsoon rain,\nUntouched by tomorrow worries or noisy haste,\nWhenever memory hums tunes of drenched evenings,\nInner joy dances back toward simpler days.'
  ],
  [
    'वक़्त की नदी में सिर्फ़ आज का पानी बहता है,\nबीता हुआ कल तो यादों के किनारे रहता है,\nजब भी जी घबराए ज़रा मुड़कर मुस्कुरा लिया करो,\nहर गुज़रा लम्हा तुमसे अपनापन ही कहता है।',
    'Current waters flow onward down time river,\nYesterday rests calmly along memory banks,\nWhenever anxious pause turning back warmly,\nEvery lived moment whispers gentle kinship.'
  ]
];

// 28. Khwab / Sapne Shayari (30 unique 25-40 word poems)
const KHWAB_POEMS: readonly RawPoemTuple[] = [
  [
    'आँखों में जो ख़्वाब पलते हैं उन्हें मरने मत देना,\nहालात की आँधियों से हौसला डरने मत देना,\nआज भले छोटा दिखे तुम्हारी मेहनत का ये बीज,\nकल आसमान छू लेगा बस इरादा बिखरने मत देना।',
    'Never let dreams growing inside your eyes fade,\nKeep courage steady against fierce winds,\nThough effort looks small like a humble seed,\nUnbroken resolve will lift branches skyward.'
  ],
  [
    'नींद में देखे सपने तो सुबह टूट जाया करते हैं,\nजागती आँखों के ख़्वाब इतिहास बनाया करते हैं,\nपंख खोलकर उड़ान भरो अपनी क़ाबिलियत के दम पर,\nमेहनतकश परिंदे ही नया आसमान पाया करते हैं।',
    'Sleeping visions dissolve quietly at daybreak,\nWaking dreams shape lasting history ahead,\nSpread confident wings powered by honest skill,\nDiligent birds discover wider horizons.'
  ],
  [
    'एक छोटा सा ख़्वाब सिरहाने रखकर सोया करता हूँ,\nउम्मीद के मोती हर रोज़ पसीने से पिरोया करता हूँ,\nताने मारने वालों को जवाब मेरा वक़्त ख़ुद देगा,\nमैं चुपचाप बंजर ज़मीन में फ़सल बोया करता हूँ।',
    'Tucking a quiet dream beside my pillow nightly,\nStringing pearls of hope through honest sweat,\nTime itself will answer doubters eventually,\nWhile sowing patient seeds across dry soil.'
  ],
  [
    'ख़्वाबों की क़ीमत अक्सर रातों की नींद होती है,\nकामयाबी के पीछे अनगिनत इम्तिहानों की भीड़ होती है,\nचमक देखकर रश्क करने वाले ये कहाँ जानते हैं,\nतपने के बाद ही सोने में असली उम्मीद होती है।',
    'Great dreams often cost hours of restful sleep,\nCountless silent tests stand behind triumph,\nAdmirers envying shine seldom realize fully,\nGold earns radiance only through fierce fire.'
  ],
  [
    'सपने बड़े देखो तो संघर्ष भी बड़ा करना पड़ेगा,\nतूफ़ानों के सामने सीना तानकर अड़ा रहना पड़ेगा,\nआसान रास्तों पर चलकर मंज़िलें ख़ास नहीं मिलतीं,\nअपने ख़्वाब की ख़ातिर ख़ुद से भी लड़ना पड़ेगा।',
    'Bold dreams demand equally bold perseverance,\nStanding tall squarely before roaring tempests,\nEasy footpaths rarely reach remarkable peaks,\nConquering inner doubt unlocks high summits.'
  ],
  [
    'पलकों की दहलीज़ पर एक सुनहरा सपना सजाया है,\nगिरकर संभलने का हुनर ठोकरों ने सिखाया है,\nअभी सफ़र लंबा है मगर थककर बैठना मंज़ूर नहीं,\nक्योंकि ख़्वाबों ने ही तो मुझे जीना सिखाया है।',
    'Gracing quiet eyelashes with a golden vision,\nStumbles taught the craft of rising steadier,\nMiles remain ahead yet quitting stays unthinkable,\nDreams breathe vital purpose into living.'
  ],
  [
    'काग़ज़ के पंख नहीं फ़ौलाद के इरादे लेकर उड़ो,\nटूटे हुए ख़्वाबों को फिर नई उम्मीद से जोड़ो,\nअँधेरा चाहे जितना घना हो रात की चौखट पर,\nसूरज बनने की ज़िद कभी बीच राह मत छोड़ो।',
    'Soar on steel resolve rather than paper wings,\nMend fractured visions with renewed hope,\nHowever thick midnight shadows gather outside,\nNever abandon determination to shine like dawn.'
  ],
  [
    'कुछ ख़्वाब अधूरे रह गए तो अफ़सोस मत करना,\nराख से फिर उठकर नया आशियाना तैयार करना,\nज़िंदगी एक ही मौक़े पर ख़त्म नहीं होती दोस्त,\nहर नई सुबह अपने सपनों से दोगुना प्यार करना।',
    'Mourn lightly if certain early dreams fell short,\nRise from ashes building stronger shelter,\nLife never concludes after one single attempt,\nGreet each morning loving your vision deeper.'
  ],
  [
    'ख़्वाबों की दुनिया में सरहदों की दीवार नहीं होती,\nहौसला ज़िंदा हो तो कभी मुकम्मल हार नहीं होती,\nचलते रहो क़दम-दर-क़दम अपनी मंज़िल की जानिब,\nबिना चप्पू चलाए कोई भी नैया पार नहीं होती।',
    'Worlds of imagination know zero border walls,\nLiving courage never suffers final defeat,\nStep steadily forward toward chosen horizons,\nNo boat crosses rivers without rowing.'
  ],
  [
    'माँ की आँखों में जो सपना मेरे लिए चमकता है,\nवही मेरे थके हुए क़दमों में ताक़त भरता है,\nख़ुद के लिए तो इंसान समझौता कर भी ले शायद,\nअपनों के ख़्वाब पूरे करने को वो रोज़ निखरता है।',
    'Dreams shining warmly inside mother eyes,\nPour fresh strength into weary footsteps,\nFor oneself compromise might tempt occasionally,\nFulfilling family hopes refines daily grit.'
  ],
  [
    'चाँद को छूने की तमन्ना दिल में जगाए रखिए,\nज़मीन पर पाँव और नज़र आसमान पर टिकाए रखिए,\nख़्वाब वही सच होते हैं जिनमें ईमानदारी घुली हो,\nमेहनत का दीया हर हाल में जलाए रखिए।',
    'Keep desire to reach moonbeams alive within,\nFeet grounded firmly while eyes scan heaven,\nDreams woven with integrity turn real,\nGuard your lamp of diligence through wind.'
  ],
  [
    'सपनों का कोई मज़हब या कोई ओहदा नहीं होता,\nजुनून के बाज़ार में सस्ता कोई सौदा नहीं होता,\nछोटी झोपड़ी से निकलकर भी तारे तोड़े हैं लोगों ने,\nहुनर किसी महल की तिजोरी का बंदा नहीं होता।',
    'Dreams ask neither pedigree nor high rank,\nPassion accepts zero half-hearted bargains,\nHumble cottages have raised star-reaching minds,\nTalent belongs to effort rather than palaces.'
  ],
  [
    'रात की तन्हाई में ख़्वाब मुझसे बातें करते हैं,\nमेरे कोरे पन्नों में उम्मीद के रंग भरते हैं,\nदुनिया कहती है मुमकिन नहीं ये ऊँची मंज़िलें पाना,\nऔर मेरे सपने हर नामुमकिन से लड़ते हैं।',
    'Quiet midnight visions converse gently with me,\nFilling blank pages with vibrant colors,\nSkeptics declare lofty goals unreachable,\nWhile brave dreams challenge impossibility daily.'
  ],
  [
    'एक ख़्वाब देखा था कि अपना भी मुक़ाम होगा,\nमेहनत के पन्नों पर रोशन अपना भी नाम होगा,\nधीमी ही सही पर चाल हमारी रुकी नहीं अब तक,\nयक़ीन है एक दिन जीत का सेहरा अपने नाम होगा।',
    'Once dreamed quietly of earning worthy standing,\nInscribing our name brightly across hard work,\nSlow perhaps yet steady remain our strides,\nTrusting victory garlands will crown perseverance.'
  ],
  [
    'सपनों की कश्ती को डर के किनारे मत बाँधो,\nखुले समंदर की लहरों से थोड़ा लड़ना जानो,\nडूबने के ख़ौफ़ से जो साहिल पर बैठे रहते हैं,\nउन्हें मोती कभी नहीं मिलते ये सच मानो।',
    'Never tether dream boats safely ashore in fear,\nLearn navigating bravely across open waves,\nThose sitting timidly along dry beaches,\nNever gather pearls resting deep below.'
  ],
  [
    'ख़्वाब वो नहीं जो तकिये के सहारे आते हैं,\nख़्वाब वो हैं जो आलस की चादर हटाते हैं,\nजब लक्ष्य साफ़ दिखता हो आँखों के ठीक सामने,\nतब काँटे भी राहों के फूल नज़र आते हैं।',
    'Real dreams rarely arrive leaning on pillows,\nTrue visions cast off blankets of comfort,\nOnce clear purpose stands sharply ahead,\nEven roadside thorns resemble stepping blossoms.'
  ],
  [
    'टूट गया एक सपना तो दूसरा बुनना सीख लिया,\nकाँटों की झाड़ियों से भी गुलाब चुनना सीख लिया,\nख़्वाबों ने ही तो ज़िंदा रखा है भीतर की आग को,\nहमने शोर के बीच अपने दिल को सुनना सीख लिया।',
    'When one vision cracked another was woven,\nPlucking bright roses amid thorny brush,\nDreams keep inner fire glowing warm,\nListening inwardly past surrounding noise.'
  ],
  [
    'आसमान कितना भी ऊँचा हो परों से बड़ा नहीं,\nकोई भी पहाड़ इंसान के इरादों से कड़ा नहीं,\nअपने सपनों की हिफ़ाज़त ख़ुद करनी पड़ती है दोस्त,\nतेरी लड़ाई में तेरे सिवा कोई दूसरा खड़ा नहीं।',
    'No sky stretches wider than determined wings,\nNo mountain stands harder than human will,\nGuard cherished visions personally my friend,\nNobody else fights your defining battle.'
  ],
  [
    'रंगीन ख़्वाबों को हक़ीक़त की ज़मीन चाहिए,\nसिर्फ़ बातों से नहीं पसीने से यक़ीन चाहिए,\nउठो और लिख दो अपनी कहानी अपने ही हाथों से,\nसपने सच करने को बस जज़्बा बेहतरीन चाहिए।',
    'Colorful visions require solid ground of action,\nEarned through honest sweat rather than talk,\nRise and pen your chapter firsthand,\nRelentless spirit turns dreams tangible.'
  ],
  [
    'मेरी आँखों में आज भी वही पुराना सपना बसता है,\nसुकून से भरा एक छोटा सा आशियाना बसता है,\nदौलत के पहाड़ नहीं माँगे मैंने कभी रब से,\nबस अपनों की हँसी से सजा ज़माना बसता है।',
    'That gentle dream still lives behind my eyes,\nPicturing a peaceful home filled with warmth,\nNever praying for mountains of cold gold,\nSeeking simply loved ones smiling together.'
  ],
  [
    'जब तक साँस चलती है सपनों की उम्र बाक़ी है,\nहर ढलती शाम के पीछे नई सहर बाक़ी है,\nमत कहो कि अब देर हो गई कुछ नया करने में,\nहुनर के तरकश में अभी तीर का असर बाक़ी है।',
    'While breath flows dreams never expire,\nBehind fading dusk waits fresh daybreak,\nNever claim time ran out to begin anew,\nQuivers of skill still hold sharp arrows.'
  ],
  [
    'ख़्वाबों के परिंदों को पिंजरे में क़ैद मत करना,\nलोगों के डर से अपने अरमान शहीद मत करना,\nतुम्हारी ज़िंदगी की किताब तुम्हारी ही अमानत है,\nदूसरों की कलम से अपना मुस्तक़बिल रसीद मत करना।',
    'Never cage winged dreams behind iron bars,\nRefuse sacrificing hopes to public opinion,\nYour life book remains your sacred trust,\nNever hand its pen over to others.'
  ],
  [
    'धूप में तपकर ही ख़्वाबों के साँचे ढलते हैं,\nआराम के साये में बड़े इरादे कहाँ पलते हैं,\nजिनकी आँखों में मंज़िल की सच्ची भूख होती है,\nवो काँटों भरी राहों पर भी मुस्कुराते चलते हैं।',
    'Molds of ambition temper under midday sun,\nGreat resolves seldom grow inside comfort,\nEyes carrying genuine hunger for purpose,\nWalk smiling even across rugged paths.'
  ],
  [
    'एक ख़्वाब मोहब्बत का भी पलकों में छुपा रखा है,\nतेरे संग जीवन बिताने का दीया जला रखा है,\nसारी दुनिया की कामयाबी एक तरफ़ रख दूँ मैं,\nमैंने अपने हर सपने में तेरा नाम लिखा रखा है।',
    'One tender dream of love rests behind lashes,\nKeeping a quiet lamp lit for life together,\nEvery worldly triumph pales beside this,\nHaving written your name across every vision.'
  ],
  [
    'सपने तभी मुस्कुराते हैं जब कोशिशें सच्ची हों,\nनींव पक्की रखो भले शुरुआती दीवारें कच्ची हों,\nवक़्त लेता है बरगद ज़मीन में गहरे उतरने को,\nसब्र रखो अगर मंज़िलें तुम्हारी सबसे अच्छी हों।',
    'Dreams smile brightest when effort stays honest,\nLay firm foundations beneath humble starts,\nBanyan roots take seasons growing deep,\nKeep patience while building worthy heights.'
  ],
  [
    'रात भर जागकर जिन्होंने अपने ख़्वाब तराशे हैं,\nसुबह के सूरज ने उन्हीं के चेहरे तलाशे हैं,\nकिस्मत के भरोसे बैठने वालों को बस मलाल मिला,\nमेहनत करने वालों ने हर दौर में पासे पलटे हैं।',
    'Minds sculpting visions through wakeful nights,\nAre greeted first by morning golden sun,\nPassive waiters inherit only quiet regret,\nDiligent hands turn fortune tables round.'
  ],
  [
    'ख़्वाबों की उड़ान में थोड़ी नादानी भी ज़रूरी है,\nहर चीज़ हिसाब से सोचो तो कहानी अधूरी है,\nभरोसा रखो अपने पंखों की छुपी हुई ताक़त पर,\nज़मीन और फलक के बीच बस हौसले की दूरी है।',
    'Bold dreams need a touch of fearless wonder,\nOvercalculating everything leaves tales half-written,\nTrust hidden strength resting inside your wings,\nOnly courage separates earth from sky.'
  ],
  [
    'चलो फिर से उन अधूरे सपनों में जान डालते हैं,\nमायूसी की धूल झाड़कर नया अरमान पालते हैं,\nकल जो नहीं हो सका उसकी शिकायत छोड़ो अब,\nआज की मेहनत से आने वाला कल संभालते हैं।',
    'Let us breathe life into unfinished dreams,\nBrushing off grey dust of disappointment,\nRelease complaints over yesterday shortfalls,\nShaping tomorrow brightly through present grit.'
  ],
  [
    'सपनों के शहर में उम्मीद की गलियाँ रोशन रखो,\nदिल के भीतर सीखने का बचपन आजीवन रखो,\nबदल जाएगी तक़दीर भी तुम्हारी ज़िद के आगे,\nबस अपने लक्ष्य के प्रति अटूट समर्पण रखो।',
    'Keep alleys of hope lit inside dream cities,\nPreserve curious wonder throughout every age,\nEven stubborn fate yields before persistence,\nHold unwavering devotion toward your goal.'
  ],
  [
    'हर बड़ा मुक़ाम पहले एक छोटा सा ख़्वाब था,\nकिसी की सूनी आँखों में तैरता महताब था,\nयकीन की मिट्टी और पसीने का पानी मिला जब,\nवही सपना खिलकर ज़माने में लाजवाब गुलाब था।',
    'Every grand achievement began as one small dream,\nFloating softly like moonlight in quiet eyes,\nWatered with honest sweat upon soil of belief,\nBlooming eventually into a timeless rose.'
  ]
];

// 29. Naseeb / Kismat Shayari (30 unique 25-40 word poems)
const NASEEB_POEMS: readonly RawPoemTuple[] = [
  [
    'हाथों की लकीरों में लिखा सब कुछ साफ़ नहीं होता,\nनसीब के फ़ैसलों में हमेशा इंसाफ़ नहीं होता,\nकुछ चीज़ें बहुत क़रीब आकर भी छूट जाती हैं,\nतक़दीर का खेल किसी के ख़िलाफ़ या माफ़ नहीं होता।',
    'Palm lines seldom reveal destiny clearly,\nFate verdicts rarely feel neatly balanced,\nPrecious things slip away right within reach,\nFortune follows mysteries beyond human plea.'
  ],
  [
    'जो नसीब में लिखा है वो चलकर ख़ुद आएगा,\nजो तेरा नहीं उसे लाख रोक वो चला जाएगा,\nसब्र कर ऐ दिल मुक़द्दर के इन अजीब रंगों पर,\nरब जो भी करेगा आख़िर में बेहतर ही दिखाएगा।',
    'Whatever belongs to destiny walks toward you,\nWhat was never yours slips past tight grasp,\nStay patient heart amid strange turns of fate,\nProvidence weaves wiser outcomes eventually.'
  ],
  [
    'क़िस्मत की किताब का पन्ना जब अचानक पलटता है,\nराजा रंक बनता है और भटका राही संभलता है,\nन इतराना कभी अच्छे वक़्त की मेहरबानियों पर,\nसूरज कितना भी चमके शाम को ज़रूर ढलता है।',
    'When pages of fortune flip without warning,\nCrowns humble while lost travelers find ground,\nNever boast loudly during prosperous seasons,\nEven brightest suns bow gently at dusk.'
  ],
  [
    'लकीरें तो हमारे हाथ में भी पूरी थीं ऐ दोस्त,\nन जाने फिर क्यों ख़्वाहिशें सारी अधूरी थीं ऐ दोस्त,\nदोष किसको दें अपने इस अजीब से नसीब का,\nहर ख़ुशी के आगे खड़ी कोई मजबूरी थी ऐ दोस्त।',
    'Lines etched across my palms looked complete,\nYet cherished wishes stayed strangely half-met,\nWhom could anyone blame for curious fate,\nDuty stood blocking nearly every joy.'
  ],
  [
    'कभी बिन माँगे मोती मिल जाते हैं राहों में,\nकभी उम्र गुज़र जाती है बस ठंडी आहों में,\nनसीब का गणित आज तक कोई समझ नहीं पाया,\nयहाँ चाँद भी छुप जाता है अमावस की पनाहों में।',
    'Sometimes pearls appear unasked along footpaths,\nSometimes decades pass inside quiet sighs,\nNobody ever solved arithmetic of destiny,\nEven bright moons vanish on moonless nights.'
  ],
  [
    'तक़दीर लिखने वाले ने भी क्या ख़ूब खेल रचाया,\nजिसे टूटकर चाहा उसी को पराये घर सजाया,\nशिकवा करें तो किस मुँह से करें उस मालिक से,\nशायद हमारे नसीब में बस सब्र करना ही आया।',
    'How mysterious the script written by destiny,\nPlacing our dearest love inside another world,\nHow could humble lips question heaven design,\nPatience alone remained allotted to our share.'
  ],
  [
    'नसीब से ज़्यादा और वक़्त से पहले कुछ नहीं मिलता,\nबिना मौसम के बाग़ों में कोई फूल नहीं खिलता,\nअपनी तरफ़ से नेक कर्म करते चलो बेफ़िक्र होकर,\nरब के दरबार में मेहनत का पत्ता यूँ नहीं हिलता।',
    'Nothing arrives before season or beyond share,\nNo garden blossom opens ahead of spring,\nKeep planting good deeds calmly each day,\nDivine scales weigh every honest effort.'
  ],
  [
    'किसी को चाँदी की थाली मिली पैदा होते ही यहाँ,\nकिसी ने भूख से लड़कर अपना नाम कमाया यहाँ,\nक़िस्मत अलग थी दोनों की मगर हौसला एक सा,\nपसीने की स्याही ने भी मुक़द्दर नया लिखाया यहाँ।',
    'Some inherit silver platters right at birth,\nOthers battle hardship earning worthy names,\nThough starting fortunes differed sharply apart,\nHonest sweat penned fresh destiny regardless.'
  ],
  [
    'अजीब इत्तिफ़ाक़ होते हैं नसीब की गलियों में अक्सर,\nअनजान अजनबी बन जाते हैं रूह के हमसफ़र,\nऔर जिनसे जन्मों का वादा किया हो साथ चलने का,\nवही छूट जाते हैं किसी अनजाने से मोड़ पर।',
    'Curious coincidences unfold down alleys of fate,\nComplete strangers turn into kindred companions,\nWhile souls promised across lifetimes together,\nPart unexpectedly around quiet bends.'
  ],
  [
    'हमने क़िस्मत से ज़्यादा दुआओं पर यक़ीन रखा है,\nकड़वे घूँट पीकर भी लहजा नमकीन नहीं मीठा रखा है,\nबदल जाते हैं नसीब भी सच्ची इबादत के असर से,\nइसी उम्मीद ने हमारे दिल को हसीन रखा है।',
    'Trusting sincere prayer deeper than rigid fate,\nKeeping gentle speech despite bitter trials,\nHeartfelt devotion softens sternest destiny,\nThat quiet hope preserves inner grace.'
  ],
  [
    'हथेली घिस गई लकीरों को संवारते-संवारते हमारी,\nउम्र बीत गई रूठे नसीब को पुकारते-पुकारते हमारी,\nजब छोड़ दी ज़िद हमने हर चीज़ हासिल करने की,\nतब जाकर सुकून उतरा दहलीज़ पर निहारते हमारी।',
    'Palms grew worn trying to reshape fate lines,\nYears slipped away calling reluctant fortune,\nOnce frantic grasping yielded to acceptance,\nQuiet peace stepped across our threshold.'
  ],
  [
    'नसीब का लिखा मिटा नहीं सकता कोई ज़ोर से,\nकिश्तियाँ डूब जाती हैं कभी बिल्कुल ही छोर से,\nऔर जिसे बचाना चाहे ऊपर वाले की रहमत दोस्त,\nवो सही-सलामत निकल आता है तूफ़ानी दौर से।',
    'Sheer force alone cannot erase written fate,\nBoats occasionally founder steps from harbor,\nYet whomever divine mercy chooses to shield,\nWalks safely home through fierce tempests.'
  ],
  [
    'तेरा मिलना मेरे नसीब की सबसे हसीन घड़ी थी,\nवरना ज़िंदगी तो उदासी के मोड़ पर खड़ी थी,\nशुक्र अदा करता हूँ अपनी तक़दीर का हर रोज़ मैं,\nजिसकी बदौलत मेरी झोली में तेरी मोहब्बत पड़ी थी।',
    'Meeting you crowned my fortune finest hour,\nRescuing quiet days standing near melancholy,\nThanking kind destiny gratefully every dawn,\nFor placing your gentle love into my life.'
  ],
  [
    'कभी-कभी कुछ खोना भी नसीब की भलाई होती है,\nहर टूटी उम्मीद के पीछे नई रौशनाई होती है,\nउस वक़्त तो रो पड़ता है नादान दिल बहुत ज़्यादा,\nबाद में समझ आता है रब ने जान बचाई होती है।',
    'Losing something sometimes hides quiet blessing,\nFresh light waits behind shattered expectations,\nNaive hearts weep bitterly in the moment,\nRealizing later how mercy protected us.'
  ],
  [
    'क़िस्मत को कोसने से कभी ताले नहीं खुलते,\nबैठे-बिठाए आसमान से सोने के फूल नहीं धुलते,\nनसीब भी उन्हीं का साथ देता है ज़िंदगी में दोस्त,\nजो काँटों पर चलकर भी अपना हौसला नहीं भूलते।',
    'Blaming fate never unlocks closed doors,\nIdle hands gather zero golden blossoms,\nFortune favors steady travelers my friend,\nWho keep courage alive across sharp thorns.'
  ],
  [
    'दो क़दम की दूरी पर था मगर नसीब में न था,\nदिल के सबसे पास होकर भी क़रीब में न था,\nअधूरी दास्ताँ लिखकर छोड़ दी मुक़द्दर ने हमारी,\nशायद सुकून का हर्फ़ मेरी तरतीब में न था।',
    'Standing two steps away yet denied by fate,\nClosest inside heart though distant in life,\nDestiny left our chapter half-composed,\nPerhaps easy calm lay outside my script.'
  ],
  [
    'जब नसीब रूठ जाए तो साया भी साथ छोड़ता है,\nहर करीबी इंसान धीरे-धीरे मुँह मोड़ता है,\nमगर हिम्मत मत हारना उस अँधेरी घड़ी में कभी,\nईश्वर टूटने के बाद ही बेहतर साँचे में जोड़ता है।',
    'When fortune frowns even shadows step back,\nFamiliar faces turn gradually away,\nNever surrender heart inside dark hours,\nHeaven reshapes broken clay stronger.'
  ],
  [
    'किसी के नसीब से कभी जलन मत रखना दिल में,\nसबको अपना हिस्सा मिलता है इस महफ़िल में,\nअपनी थाली की सूखी रोटी भी अमृत लगती है,\nजब शुक्रगुज़ारी बसी हो इंसान की मंज़िल में।',
    'Harbor zero envy toward another share,\nEveryone receives allotted portions along life,\nHumble bread tastes sweet like nectar,\nWhen gratitude seasons the peaceful heart.'
  ],
  [
    'तक़दीर के पन्नों पर स्याही ऊपर वाले की चलती है,\nइंसान की हर तदबीर कभी-कभी छोटी पड़ती है,\nफिर भी उम्मीद का दामन थामे रखना ज़रूरी है,\nक्योंकि दुआ से पत्थर की लकीर भी बदलती है।',
    'Heaven ink writes across pages of destiny,\nClever human plans fall short occasionally,\nHold fast still onto robes of hope,\nSincere prayers soften lines carved in stone.'
  ],
  [
    'बड़ा अजीब सौदा किया क़िस्मत ने हमारे साथ,\nसारी दुनिया दे दी मगर छीन लिया तेरा हाथ,\nअब इन रौनकों का मैं भला क्या करूँगा बता,\nजब नसीब में ही नहीं रही तेरे संग मुलाक़ात।',
    'Fate struck a bittersweet bargain with me,\nGranting worldly comfort while parting our hands,\nWhat good remain bright lights around me,\nWhen destiny holds back meeting you again.'
  ],
  [
    'ज्योतिषी ने हाथ देखकर कहा राजयोग लिखा है,\nमैंने मुस्कुराकर पूछा सुकून किस कोने दिखा है,\nदौलत तो नसीब से मिल भी जाएगी एक दिन मुझे,\nपर बिछड़े अपनों को मिलाने वाला कौन सा लेखा है।',
    'Palm readers promised grand prosperity ahead,\nSmiling softly I asked where peace lay written,\nWealth may arrive eventually through fortune,\nWhich line reunites hearts parted along time.'
  ],
  [
    'नसीब अपना-अपना और कर्म अपनी-अपनी पहचान है,\nकोई महलों में बेचैन तो कोई कुटिया में धनवान है,\nसच्ची अमीरी बैंक के खातों में नहीं होती यारो,\nजिसके हिस्से सुकून की नींद आई वही भाग्यवान है।',
    'Fortunes vary while deeds shape true worth,\nSome pace palaces restless while huts sleep calm,\nReal wealth never lives inside bank ledgers,\nBlessed is whoever rests peacefully nightly.'
  ],
  [
    'हमने अपने नसीब से अब लड़ना बंद कर दिया,\nजो मिला उसी में खुशियों का रंग भर दिया,\nशिकायतों का बोझ उतार फेंका कंधों से जब से,\nज़िंदगी ने हर छोटा लम्हा जन्नत सा कर दिया।',
    'Making gentle peace beside allotted fortune,\nColoring whatever arrived with quiet joy,\nSetting heavy bundles of complaint down,\nTurned simple daily moments heavenly.'
  ],
  [
    'क़िस्मत की चाबी कभी सब्र के गुच्छे में होती है,\nअसली मिठास इंतज़ार के बाद पके गुच्छे में होती है,\nजल्दबाज़ी में मायूस होकर मत लौटना दरवाज़े से,\nरब की देरी में भी भलाई हमेशा सच्चे में होती है।',
    'Patience often holds the final key of fate,\nRipest sweetness follows unhurried waiting,\nNever walk away hastily in discouragement,\nDivine delays shelter unseen kindness.'
  ],
  [
    'तारे भी टूटकर गिरते हैं अपनी क़िस्मत के आगे,\nसूरज को भी ग्रहण लगता है वक़्त के धागे,\nफिर हम इंसान किस गुमान में जीते हैं बताओ,\nयहाँ सब चलते हैं अपने-अपने नसीब के पीछे-आगे।',
    'Even bright stars fall bowing before destiny,\nEclipses veil midday suns briefly too,\nWhy carry hollow pride inside mortal chests,\nEveryone walks beneath mysterious turns of time.'
  ],
  [
    'कुछ रिश्ते नसीब में सिर्फ़ सबक देने आते हैं,\nनींद से जगाकर हक़ीक़त का आईना दिखाते हैं,\nशुक्रिया अदा करो उनका भी आगे बढ़ जाने से पहले,\nक्योंकि ठोकरों के बाद ही पाँव संभल पाते हैं।',
    'Certain ties enter life purely teaching wisdom,\nWaking sleepy trust before honest mirrors,\nThank lessons calmly prior to stepping onward,\nStumbles teach steadier balance down roads.'
  ],
  [
    'मुक़द्दर का सिकंदर वही जो हारकर भी मुस्कुराए,\nटूटे हुए साज़ से भी मीठा सरगम बजाए,\nलकीरें बदल जाती हैं उस इंसान के जज़्बे से,\nजो आँधियों के बीच भी उम्मीद का दीप जलाए।',
    'True masters of fortune smile past setbacks,\nCoaxing gentle music from weathered strings,\nPalm lines bend before resilient spirits,\nWho shield small lamps amid howling winds.'
  ],
  [
    'न जाने किस मोड़ पर नसीब क्या गुल खिलाएगा,\nकौन सा अजनबी कल अपना हमदर्द बन जाएगा,\nसफ़र का आनंद लो बिना कल के डर में डूबे,\nतक़दीर का हर पन्ना वक़्त आने पर खुल जाएगा।',
    'Who knows what blossoms wait around next bend,\nWhich stranger becomes tomorrow dear friend,\nSavor present miles free of anxious dread,\nEvery page of fate unfolds right on cue.'
  ],
  [
    'अधूरा चाँद भी पूनम की उम्मीद ज़िंदा रखता है,\nनसीब का मारा भी हौसलों को परिंदा रखता है,\nआज वक़्त सख़्त है तो कल नरम भी होगा ज़रूर,\nसब्र रखने वाला ही आख़िर में जीत चुनिंदा रखता है।',
    'Crescent moons keep full-moon promise alive,\nWeathered souls still let hopeful birds soar,\nHarsh seasons inevitably soften into spring,\nPatient hearts claim lasting triumph finally.'
  ],
  [
    'लिखने वाले ने तेरी क़िस्मत में उजाला लिखा होगा,\nहर कठिन इम्तिहान के बाद उजियाला लिखा होगा,\nभरोसा रख उस कलाकार की अनदेखी कारीगरी पर,\nतेरे टूटे दिल के लिए भी कोई संभाला लिखा होगा।',
    'Providence surely penned brightness ahead for you,\nPlacing warm dawn past steep examinations,\nTrust unseen artistry guiding your path,\nGentle healing awaits every bruised heart.'
  ]
];

// 30. Matlabi Duniya Shayari (30 unique 25-40 word poems)
const MATLABI_DUNIYA_POEMS: readonly RawPoemTuple[] = [
  [
    'काम निकलते ही पहचान भूल जाते हैं लोग यहाँ,\nजरूरत के हिसाब से रिश्ते निभाते हैं लोग यहाँ,\nचेहरे पर शहद और दिल में ज़हर छुपाए फिरते हैं,\nमतलब की इस दुनिया में कितने नक़ाब लगाते हैं लोग यहाँ।',
    'Once favors finish people forget your name swiftly,\nMeasuring relationships strictly by utility,\nWearing honeyed smiles over guarded malice,\nCountless masks parade across this selfish world.'
  ],
  [
    'जब तक जेब गर्म है तब तक सलाम मिलते हैं,\nखाली हाथ होते ही सारे रिश्ते विराम मिलते हैं,\nमतलबी ज़माने का बस यही एक सीधा वसूल देखा,\nफायदा जहाँ दिखे वहीं झुकते तमाम मिलते हैं।',
    'Warm pockets attract eager greetings daily,\nEmpty hands watch crowds vanish overnight,\nOne plain rule governs calculating streets,\nBows follow wherever personal gain gleams.'
  ],
  [
    'मीठे बोल सुनकर तुरंत अपना मत मान लेना किसी को,\nपहले वक़्त की कसौटी पर थोड़ा जान लेना किसी को,\nयहाँ हमदर्दी के लिफ़ाफ़े में सौदेबाज़ी चलती है,\nपरखकर ही अपने दिल का मकान देना किसी को।',
    'Never mistake sweet flattery for loyalty quickly,\nTest intentions gently across changing seasons,\nBargains hide tucked inside envelopes of sympathy,\nVerify character before opening your heart.'
  ],
  [
    'पेड़ जब तक फल देता है लोग साये में बैठते हैं,\nसूखते ही टहनियाँ कुल्हाड़ी से काटकर फेंकते हैं,\nबिल्कुल वैसी ही फ़ितरत है मतलबी इंसानों की दोस्त,\nकाम ख़त्म होते ही अजनबी की तरह देखते हैं।',
    'People gather gladly beneath fruit-bearing trees,\nReaching for axes once branches turn bare,\nOpportunistic hearts mirror that exact habit,\nStaring like strangers after needs conclude.'
  ],
  [
    'कितनी अजीब हो गई है आजकल के शहर की हवा,\nज़ख़्म देने वाला ही पूछता है मिली क्या दवा,\nदिखावे की हमदर्दी से भरी पड़ी हैं महफ़िलें सारी,\nसच्चे जज़्बात का अब कोई मिलता नहीं गवाह।',
    'Strange winds blow across modern towns lately,\nThose dealing wounds ask politely for remedies,\nGatherings overflow with performative concern,\nLeaving genuine sincerity without witness.'
  ],
  [
    'ख़ैरियत पूछने में भी अब लोगों का मक़सद छुपा होता है,\nबिना मतलब के यहाँ कौन किसका सगा होता है,\nसालों बाद अगर अचानक किसी का फ़ोन आ जाए,\nसमझ लेना कोई अटका हुआ काम जगा होता है।',
    'Hidden agendas lurk behind casual greetings,\nRarely does anyone stand kin without motive,\nWhen silent phones ring after long years,\nExpect some pending favor seeking help.'
  ],
  [
    'हम सादगी में सबको अपने जैसा साफ़ समझ बैठे,\nगिरगिट से बदलते चेहरों को इंसाफ़ समझ बैठे,\nठोकर लगी तब उतरा आँखों से भोलेपन का पर्दा,\nहम मतलबी सौदागरों को दिल के शफ़्फ़ाफ़ समझ बैठे।',
    'Innocent trust assumed everyone shared pure intent,\nMistaking shifting chameleons for honest friends,\nHard stumbles finally lifted naive veils,\nHaving misread shrewd traders as sincere souls.'
  ],
  [
    'रोशनी में तो साये भी क़दम से क़दम मिलाते हैं,\nअँधेरा घिरते ही सबसे पहले वही छोड़ जाते हैं,\nमतलबी यारों से तन्हाई हज़ार दर्जे बेहतर है यारो,\nअकेलेपन में कम से कम धोखे तो नहीं आते हैं।',
    'Shadows march faithfully beside sunlit steps,\nVanishing first whenever darkness descends,\nSolitude beats fair-weather company tenfold,\nQuiet rooms never stab backs unexpectedly.'
  ],
  [
    'तारीफ़ों के पुल बाँधने वालों से थोड़ा बचकर रहना,\nमक्खन लगाने वालों की बातों में कभी मत बहना,\nमतलबी दुनिया पहले सिर पर बिठाकर नचाती है,\nफिर मतलब पूरा होते ही गिरा देती है सहना।',
    'Stay cautious around excessive praise builders,\nRefuse drifting away upon slick flattery,\nSelf-serving crowds lift people onto pedestals,\nDropping them coldly once usefulness fades.'
  ],
  [
    'अच्छे इंसान का इस बाज़ार में कोई मोल नहीं रहा,\nझूठे दिखावे के आगे सच्चाई का बोल नहीं रहा,\nजो जितना बड़ा अदाकार है उतना ही कामयाब यहाँ,\nसीधे-सादे दिलों का अब कोई टोल नहीं रहा।',
    'Quiet goodness fetches little inside noisy markets,\nFlashy pretense drowns plain spoken truth,\nPolished actors climb fastest across stages,\nLeaving simple honesty standing alone.'
  ],
  [
    'इस्तेमाल होने के बाद कचरे सा फेंक देते हैं लोग,\nअपने स्वार्थ की आग में रिश्ते सेंक लेते हैं लोग,\nउम्मीद मत रखना किसी से बदले में वफ़ादारी की,\nयहाँ आँसुओं में भी अपना मुनाफ़ा देख लेते हैं लोग।',
    'People discard helpers once tasks complete,\nWarming selfish hands over burning bridges,\nExpect little loyalty back from opportunists,\nWho calculate profit even amid tears.'
  ],
  [
    'चेहरे के ऊपर चेहरा लगाए घूमता है हर इंसान,\nकिस पर भरोसा करें अब मुश्किल हुई पहचान,\nदुश्मन तो फिर भी सामने से वार करता है दोस्त,\nयहाँ मीठे अपने ही निकाल लेते हैं चुपके से जान।',
    'Masks layered upon masks walk busy streets,\nDiscerning trustworthy hearts grows harder daily,\nOpen rivals strike plainly from ahead,\nFalse friends wound quietly behind smiles.'
  ],
  [
    'जब आप काम आना बंद कर देते हैं किसी के,\nतब आपके अंदर हज़ारों ऐब दिखने लगते हैं,\nकल तक जो फरिश्ता कहते थे आपकी दरियादिली को,\nवही लोग आपके ख़िलाफ़ अफ़वाहें लिखने लगते हैं।',
    'The moment you stop serving others convenience,\nSudden flaws appear everywhere in your name,\nVoices praising generosity warmly yesterday,\nBegin whispering unfair rumors tomorrow.'
  ],
  [
    'मतलबी दुनिया ने हमें ख़ामोश रहना सिखा दिया,\nसबकी असलियत जानकर भी हँसकर सहना सिखा दिया,\nअब शिकायत नहीं करते किसी के बदल जाने पर हम,\nतजुर्बों ने अपने ही दायरे में बहना सिखा दिया।',
    'Worldly selfishness taught dignified quietness,\nSmiling calmly even seeing hidden motives,\nNo longer complaining when attitudes shift,\nExperience taught peaceful self-reliance.'
  ],
  [
    'दौलत के तराज़ू में तौले जाते हैं जज़्बात यहाँ,\nओहदा देखकर तय होती है अदब से मुलाक़ात यहाँ,\nगरीब का सच भी मज़ाक बनकर उड़ जाता है हवा में,\nऔर अमीर के झूठ को भी मिलती है वाह-वाह यहाँ।',
    'Feelings get weighed upon scales of wealth,\nTitles dictate how politely people greet,\nHumble truth gets brushed aside lightly,\nWhile gilded falsehoods win loud applause.'
  ],
  [
    'शतरंज के मोहरों से ज़्यादा चालें इंसान चलते हैं,\nमौसम से तेज़ यहाँ लोगों के रंग बदलते हैं,\nबचाकर रखिए अपनी शराफ़त को इस भीड़ से ज़रा,\nमतलबी गलियों में सीधे पेड़ सबसे पहले कटते हैं।',
    'People plot sharper moves than chessboards hold,\nChanging colors faster than shifting weather,\nGuard gentle integrity carefully amid crowds,\nStraightest trees face axes earliest.'
  ],
  [
    'दीये में जब तक तेल है लोग उजाले को पूजते हैं,\nबुझ जाने के बाद कोने में रखकर भूलते हैं,\nयही रीत रही है हमेशा से इस मतलबी ज़माने की,\nचढ़ते सूरज को ही सब झुक-झुककर कूबूलते हैं।',
    'While oil burns people worship bright lamps,\nTucking cold clay forgotten into corners,\nSuch remains timeless custom across society,\nBowing eagerly only toward rising suns.'
  ],
  [
    'हमने नेकी की थी और दरिया में डाल भी दी,\nलोगों ने हमारी शराफ़त की ग़लत मिसाल ही दी,\nसोचा था वक़्त पड़ने पर कोई तो साथ खड़ा होगा,\nमतलबी भीड़ ने मुसीबत में नज़र ही टाल दी।',
    'Offering kindness freely without keeping score,\nOthers mistook gentleness for easy weakness,\nHoping someone might stand near during storm,\nFair-weather crowds simply looked elsewhere.'
  ],
  [
    'जरूरत के वक़्त गधे को भी बाप बना लेते हैं,\nकाम बनते ही पहचानने से साफ़ मुकर जाते हैं,\nऐसी मतलबी यारी से दूर से ही राम-राम भली,\nजो मुफ़्त की दावत खाकर पत्तल में छेद कर जाते हैं।',
    'Desperate need makes flatterers bow anywhere,\nDenying acquaintance flatly once rescued,\nGreet calculating company strictly from afar,\nWho bite generous hands after dining.'
  ],
  [
    'अख़बार सी हो गई है अहमियत इंसानों की आजकल,\nसुबह ख़ास होते हैं और शाम को रद्दी बन जाते हैं,\nमतलब की इस मंडी में जज़्बात मत बेचना कभी,\nसच्चे हीरे यहाँ कौड़ियों के भाव छन जाते हैं।',
    'Human value gets treated like morning papers,\nPrized at dawn then tossed aside by dusk,\nNever auction tender feelings in cold markets,\nTrue diamonds get misjudged among pebbles.'
  ],
  [
    'रोने बैठोगे तो तमाशा देखने सारा शहर आएगा,\nआँसू पोंछने वाला एक भी हाथ नज़र न आएगा,\nमतलबी दुनिया को अपने ज़ख़्म कभी मत दिखाना दोस्त,\nयहाँ हर कोई अपनी जेब में नमक ही लाएगा।',
    'Weep publicly and whole towns gather watching,\nRarely lifting one hand to dry tears,\nNever display raw wounds before onlookers,\nMost pockets carry ready grains of salt.'
  ],
  [
    'कुछ लोग रिश्ते नहीं बस सीढ़ियाँ बनाया करते हैं,\nऊपर पहुँचते ही नीचे वालों को भुलाया करते हैं,\nवक़्त जब वापस ज़मीन पर लाता है उनके गुरूर को,\nतब अकेले बैठकर अपने किए पर पछताया करते हैं।',
    'Some build ladders rather than honest bonds,\nForgetting helpers immediately upon climbing,\nWhen time humbles arrogant pride downward,\nLonely regret greets their reflection.'
  ],
  [
    'मतलबी लोगों की एक पहचान बहुत सीधी होती है,\nउनकी हर बात में सिर्फ़ अपनी ही सिद्धि होती है,\nतुम्हारे दुख पर दो मिनट का अफ़सोस जताकर वो,\nअपनी फ़रमाइशों की लंबी फेहरिस्त रख देते हैं।',
    'Self-absorbed souls reveal one unmistakable trait,\nEvery conversation circles back to personal need,\nOffering two brief seconds of polite sympathy,\nBefore unrolling long lists of requests.'
  ],
  [
    'आईना भी शर्मिंदा हो जाए ऐसे किरदार देखे हैं,\nदोस्ती की आड़ में छुपे हुए व्यापार देखे हैं,\nअब अकेले चाय पीना ज़्यादा सुकून देता है मुझे,\nमैंने महफ़िलों में बहुत मतलबी यार देखे हैं।',
    'Witnessing characters capable of shaming mirrors,\nCommercial deals disguised beneath friendship,\nSipping tea solo brings deeper peace today,\nHaving seen calculating smiles crowd tables.'
  ],
  [
    'दिल बड़ा रखो मगर दिमाग़ की आँखें खुली रखो,\nमतलबी ज़माने में थोड़ी सी समझदारी घुली रखो,\nहर हाथ मिलाने वाला तुम्हारा शुभचिंतक नहीं होता,\nअपनी भलाई की चाबी हमेशा अपने पास धुली रखो।',
    'Keep a generous heart alongside alert wisdom,\nBlend discernment calmly through daily dealings,\nNot every warm handshake wishes your good,\nHold guardianship over your own peace.'
  ],
  [
    'फूल बेचने वालों के हाथ में तो ख़ुशबू रह जाती है,\nमतलबी लोगों के हिस्से बस तन्हाई रह जाती है,\nआज भले जीत लें वो चालाकी से सारी बाज़ियाँ,\nआख़िर में इंसानियत की ही सच्ची कमाई रह जाती है।',
    'Flower sellers retain sweet scent upon palms,\nSchemers inherit hollow solitude eventually,\nClever tricks may win short-term games,\nOnly genuine humanity endures at last.'
  ],
  [
    'सुकून मिलता है अब बेज़ुबान परिंदों को दाना डालकर,\nइंसानों को देखा है हमने बहुत करीब से पालकर,\nपरिंदे पेट भरकर दुआ तो दे जाते हैं उड़ते वक़्त,\nइंसान भूल जाता है अपना मतलब निकालकर।',
    'Feeding courtyard birds brings honest serenity,\nHaving learned painful lessons trusting users,\nWinged guests chirp gratitude flying skyward,\nSelfish hearts forget once favors clear.'
  ],
  [
    'भीड़ से अलग चलना हमने अपनी मर्ज़ी से चुना है,\nमतलबी रिश्तों के शोर को बहुत क़रीब से सुना है,\nदो-चार सच्चे लोग काफ़ी हैं पूरी ज़िंदगी के लिए,\nहमने दिखावे के काफ़िलों से किनारा बुना है।',
    'Walking apart from crowds became deliberate choice,\nHaving heard hollow noise up close,\nTwo loyal souls suffice across a lifetime,\nStepping calmly clear of fake parades.'
  ],
  [
    'नकाब उतरते देखे हैं मैंने वक़्त की हल्की बारिश में,\nखोट देखा है लोगों की मीठी-मीठी गुज़ारिश में,\nअब रब के सिवा किसी से कोई उम्मीद नहीं रखते,\nधोखा ही मिला है दुनियादारी की हर आज़माइश में।',
    'Light rain of hardship washed painted masks clean,\nExposing guile beneath sugary requests,\nPlacing expectation solely upon heaven now,\nWorldly tests revealed too much pretense.'
  ],
  [
    'मतलबी दुनिया है तो क्या तुम अपनी नेकी मत छोड़ना,\nदूसरों के अंधेरे देखकर अपना दीया मत फोड़ना,\nहिफाज़त करो ख़ुद की मगर दिल पत्थर मत बनाना,\nसच्चाई के रास्ते से अपना नाता कभी मत तोड़ना।',
    'Despite worldly selfishness keep goodness intact,\nNever smash your lamp over others darkness,\nProtect boundaries without turning stone cold,\nStay anchored faithfully beside integrity.'
  ]
];

// 31. Pyar Bhari Shayari (30 unique 25-40 word poems)
const PYAR_BHARI_POEMS: readonly RawPoemTuple[] = [
  [
    'मीठी सी तकरार और उससे भी मीठा तेरा मनाना,\nछोटी-छोटी बातों पर मुझ पर अपना हक़ जताना,\nप्यार भरी तेरी यही आदतें दिल जीत लेती हैं,\nतेरे संग जन्नत सा लगता है ये सारा ज़माना।',
    'Playful banter followed by tender coaxing,\nClaiming sweet belonging over tiny moments,\nYour affectionate ways win my heart daily,\nTurning ordinary days heavenly beside you.'
  ],
  [
    'चाय में शक्कर कम हो तो भी चल जाता है,\nजब सामने बैठकर तेरा मुस्कुराता चेहरा खिल जाता है,\nप्यार की मिठास घुल जाती है हर घूँट के अंदर,\nतुझे देखते ही दिल को चैन मिल जाता है।',
    'Even unsweetened tea tastes wonderfully rich,\nSitting across from your radiant smile,\nAffection dissolves warmth into every sip,\nBeholding you calms my spirit instantly.'
  ],
  [
    'तेरा हाथ पकड़कर चलना सबसे महफ़ूज़ लगता है,\nतेरी बातों का हर लफ़्ज़ दिल में महफ़ूज़ रहता है,\nन चाहिए मुझे दुनिया के झूठे ताम-झाम कभी,\nतेरा सच्चा प्यार ही मेरा सबसे बड़ा तख़्त है।',
    'Walking hand in hand feels completely safe,\nEvery gentle word stays treasured inside,\nWorldly grandeur holds zero allure for me,\nYour honest love remains my finest crown.'
  ],
  [
    'घर पहुँचकर एक मैसेज कर देना ये फ़िक्र तुम्हारी,\nहर दुआ में सबसे पहले शामिल रहती ज़िक्र तुम्हारी,\nप्यार भरे इन छोटे लम्हों से ही रिश्ता खिलता है,\nमेरी ज़िंदगी को सुंदर बनाती है परवाह तुम्हारी।',
    'Texting safely upon reaching home shows care,\nKeeping my well-being first inside prayers,\nThoughtful gestures make affection blossom bright,\nYour gentle concern beautifies every day.'
  ],
  [
    'सुबह उठते ही सबसे पहले तेरा ख़याल आता है,\nतेरी हँसी से मेरा हर बिगड़ा काम बन जाता है,\nइतना प्यार भरा है रब ने तेरे कोमल दिल में,\nपत्थर भी तेरी सोहबत में मोम बन पिघल जाता है।',
    'Waking dawn brings your thought first of all,\nYour cheerful laugh smooths tangled days,\nSo much warmth lives inside your kind heart,\nEven cold stone softens near your grace.'
  ],
  [
    'तेरी आँखों में जब अपने लिए इज़्ज़त देखता हूँ,\nमैं ज़मीन पर ही खुदा की नेमत देखता हूँ,\nप्यार सिर्फ़ आकर्षण नहीं सम्मान का दूसरा नाम है,\nतुझमें मैं अपने हर कल की बरकत देखता हूँ।',
    'Seeing quiet respect shining inside your eyes,\nReveals heavenly blessing right upon earth,\nTrue love wears honor as its truest name,\nFinding lasting grace across our tomorrows.'
  ],
  [
    'बिना कहे जब तुम मन की उलझन भाँप लेते हो,\nप्यार से सिर सहलाकर सारा दुख नाप लेते हो,\nउस पल लगता है सारी कायनात मिल गई मुझे,\nजब अपनी मुस्कान से मेरे आँसू ढाँप लेते हो।',
    'Sensing unspoken worries without single words,\nResting warm palms gently soothing distress,\nWhole universes seem gathered inside that pause,\nWhen tender smiles shelter quiet tears.'
  ],
  [
    'दो पल की गुफ़्तगू तेरे संग सुकून भर देती है,\nबेरंग शाम को गुलाल जैसा रंग कर देती है,\nप्यार भरी आवाज़ तेरी जैसे कोयल की मीठी तान,\nसूने मन के आँगन में बहार भर देती है।',
    'Brief conversations beside you restore deep calm,\nPainting pale evenings in roseate hues,\nYour affectionate voice rings sweet like songbirds,\nBringing spring warmth into quiet courtyards.'
  ],
  [
    'लड़ते भी तुझसे हैं और मरते भी सिर्फ़ तुझ पर हैं,\nसारे शिकवे-गिले आकर रुकते तेरी एक नज़र पर हैं,\nप्यार का ये खट्टा-मीठा रिश्ता सदा यूँ ही सलामत रहे,\nहमारी खुशियों के निशान तेरे ही घर-दर पर हैं।',
    'Playful squabbles melt straight into devotion,\nEvery minor grievance fades meeting your gaze,\nMay sweet-and-tender harmony stay evergreen,\nTracing all our joys homeward to you.'
  ],
  [
    'तेरे नाम से ही चेहरे पर हल्की लाली आ जाती है,\nप्यार की मीठी हवा दिल की डाली हिला जाती है,\nछुपाऊँ कैसे ज़माने से अपनी इस पाक चाहत को,\nतेरी मौजूदगी मेरी हर बात में नज़र आ जाती है।',
    'Simply hearing your name brings soft blush,\nGentle breezes of affection stir heart branches,\nHow could pure devotion stay hidden long,\nYour warmth shines plainly through every word.'
  ],
  [
    'तितली के पंखों सा कोमल तेरा ये मीठा व्यवहार है,\nमेरी छोटी सी दुनिया का तू ही सारा संसार है,\nन माप सकेगा कोई गहराई हमारे इस बंधन की,\nजितना समंदर में पानी है उतना तुझसे प्यार है।',
    'Soft as butterfly wings feels your kindness,\nAnchoring the whole center of my world,\nNobody could plumb depth of this bond,\nVast as ocean waters runs my affection.'
  ],
  [
    'भीड़ में जब धीरे से मेरी कलाई थाम लेते हो तुम,\nबिना शोर मचाए मुझे अपना मान लेते हो तुम,\nप्यार भरा वो भरोसा रूह तक उतर जाता है मेरे,\nजब दुनिया के आगे मेरा साथ तान लेते हो तुम।',
    'Quietly clasping my wrist walking busy streets,\nClaiming gentle kinship without loud display,\nTrust like yours sinks peacefully soul-deep,\nStanding steadfast beside me before everyone.'
  ],
  [
    'तेरे हाथ का बना सादा खाना भी पकवान लगता है,\nतेरे पास बैठकर हर मुश्किल काम आसान लगता है,\nप्यार जब सच्चा हो तो झोपड़ी भी महल बराबर है,\nजहाँ तू मुस्कुरा दे वही कोना गुलिस्तान लगता है।',
    'Simple meals cooked warmly taste royal together,\nHard tasks lighten sitting near your side,\nSincere affection turns humble rooms grand,\nWherever you smile blossoms into garden.'
  ],
  [
    'आँखों में काजल और माथे पर छोटी सी बिंदी तेरी,\nदिल चुरा लेती है वो मासूम सी हँसी हिंदी तेरी,\nप्यार भरे लफ़्ज़ों में क्या बखान करूँ तेरी सादगी का,\nरब सलामत रखे हमेशा ये प्यारी सी ज़िंदगानी तेरी।',
    'Soft kohl paired with a tiny forehead bindi,\nInnocent laughter steals my heart effortlessly,\nHow gently simplicity graces your every way,\nMay heaven bless your radiant life always.'
  ],
  [
    'वक़्त निकालकर मेरा हाल पूछ लेना ही काफ़ी है,\nतेरी बातों की वो सच्ची मिठास बिल्कुल साफ़ी है,\nमहँगे हीरे-मोती की चाहत कभी रखी ही नहीं हमने,\nतेरा प्यार भरा साथ ही ज़िंदगी की तिलाफ़ी है।',
    'Pausing busy hours asking how I am suffices,\nPure honesty warms every syllable you speak,\nSparkling gems never tempted this heart,\nYour loving company fulfills life richly.'
  ],
  [
    'तेरे संग खामोशी भी संगीत की तरह सुनाई देती है,\nहर उलझन तेरे मशवरे से तुरंत रिहाई लेती है,\nप्यार वही जो इंसान को बेहतर इंसान बना दे दोस्त,\nतेरी सोहबत मेरे किरदार को रोज़ ऊँचाई देती है।',
    'Even quietness beside you hums like music,\nKnots untangle calmly through your counsel,\nTrue love inspires souls toward finer grace,\nYour companionship elevates me every day.'
  ],
  [
    'बारिश में भीगते हुए गरम पकौड़ों संग तेरी बातें,\nचाँदनी में टहलते हुए वो सुहानी सी मुलाक़ातें,\nप्यार के छोटे-छोटे मोती पिरोए हैं हमने साथ मिलकर,\nरोशन रहें हमेशा हमारी ये खुशहाल सी रातें।',
    'Monsoon snacks shared amid warm conversation,\nMoonlit strolls weaving unhurried closeness,\nStringing small pearls of affection together,\nMay serene joy brighten all our nights.'
  ],
  [
    'जब मैं थककर हारने लगता हूँ दुनिया की दौड़ में,\nतुम हौसला बनकर खड़े मिलते हो हर मोड़ में,\nप्यार भरा तेरा ये विश्वास ही मेरी असली ताक़त है,\nजिसके दम पर जीत जाता हूँ मैं हर होड़ में।',
    'Whenever worldly races tire my spirit down,\nYour steady encouragement greets every turn,\nLoving belief from you fuels true strength,\nCarrying me victoriously past steep hurdles.'
  ],
  [
    'तेरी ख़ुशी के लिए सौ बार हार जाना मंज़ूर है,\nतेरी मुस्कान से ही मेरे चेहरे पर ये नूर है,\nप्यार में जीत-हार का हिसाब कौन रखता है भला,\nतुझे हँसता देखकर मेरा हर दुख कोसों दूर है।',
    'Yielding gladly a hundred times for your joy,\nYour bright smile lights radiance across mine,\nWho keeps petty scoreboards inside true love,\nSeeing you happy banishes sorrow afar.'
  ],
  [
    'एक तेरा नाम ही दिल की धड़कन संभाल लेता है,\nउदासी के भँवर से मुझे बाहर निकाल लेता है,\nप्यार भरी तेरी दुआओं का कवच साथ चलता है मेरे,\nजो आने वाली हर मुसीबत को पहले ही टाल लेता है।',
    'Your name alone steadies anxious heartbeats,\nLifting quiet spirits clear of gloomy eddies,\nShields of your loving prayer walk beside me,\nTurning approaching troubles harmlessly aside.'
  ],
  [
    'रूठूँ अगर कभी तो बस गले से लगा लिया करो,\nदो मीठे बोल कहकर अपना प्यार जता दिया करो,\nज़्यादा कुछ नहीं माँगता ये नादान सा दिल तुझसे,\nबस कभी-कभी माथा चूमकर अपना बता दिया करो।',
    'Should I ever pout pull me close warmly,\nWhisper two gentle words restoring smiles,\nLittle else does this simple heart desire,\nJust tender reassurance calling me yours.'
  ],
  [
    'फूलों की क्यारी सी महकती रहे हमारी ये जोड़ी,\nकभी कम न हो विश्वास की ये रेशमी सी डोरी,\nप्यार से सींचा है हमने हर लम्हा इस रिश्ते का,\nनज़र न लगे ज़माने की रहे सदा खुशहाली कोरी।',
    'May our bond stay fragrant like flowerbeds,\nKeeping silken threads of trust unbroken,\nNurturing every shared moment with tenderness,\nProtected always inside pure happiness.'
  ],
  [
    'तेरी आवाज़ सुनते ही सारा तनाव घुल जाता है,\nमन के बंद झरोखों से झोंका खुल जाता है,\nकितना सुकून रखा है रब ने तेरे अपनेपन में,\nतुझसे बात करके इंसान हर ग़म भूल जाता है।',
    'Hearing your voice melts daily tension away,\nOpening cool breezes through shuttered thoughts,\nHeaven tucked deep peace inside your warmth,\nTalking together dissolves lingering sorrow.'
  ],
  [
    'सफ़र चाहे जितना लंबा हो तेरे संग छोटा लगता है,\nतेरे आगे दुनिया का हर आकर्षण खोटा लगता है,\nप्यार भरी तेरी सादगी पर सौ बार दिल वार दूँ,\nतेरा साथ ही मेरी क़िस्मत का खरा नोटा लगता है।',
    'Long journeys feel delightfully brief beside you,\nWorldly distractions pale near your presence,\nDedicating my heart gladly to your simplicity,\nYour companionship remains life truest treasure.'
  ],
  [
    'हाथों से खाना खिलाने का वो प्यार भरा अंदाज़ तेरा,\nमेरी हर छोटी पसंद का ख़याल रखने का राज़ तेरा,\nरब करे सलामत रहे हमारे बीच की ये मासूमियत,\nमेरे दिल के आँगन में गूँजता रहे सदा साज़ तेरा।',
    'Feeding warm bites tenderly with your hand,\nRemembering tiny preferences thoughtfully always,\nMay gentle innocence stay blessed between us,\nLetting sweet harmony echo indoors forever.'
  ],
  [
    'न शर्त कोई रखी हमने न कोई वादा माँगा है,\nबस तेरी आँखों में प्यार थोड़ा ज़्यादा माँगा है,\nउम्र की शाम तक साथ बैठकर चाय पिएँ हम दोनों,\nरब से इतना सा ही जीवन सीधा-सादा माँगा है।',
    'Setting zero conditions nor demanding grand vows,\nWishing simply warm affection inside your eyes,\nSharing evening tea peacefully into old age,\nPraying only for such honest togetherness.'
  ],
  [
    'तेरी हँसी की खनक घर की प्यारी घंटी है,\nतेरे होने से ही हर खुशी यहाँ मनती है,\nप्यार के रंगों से रंगी तूने मेरी दुनिया,\nतेरे संग ही ज़िंदगी की मुकम्मल तस्वीर बनती है।',
    'Your ringing laughter chimes sweetest indoors,\nEvery celebration shines brighter having you near,\nColoring blank canvases richly with affection,\nCompleting the portrait of life beside me.'
  ],
  [
    'जब तुम प्यार से मेरा नाम बिगाड़ कर बुलाते हो,\nसच्ची कहता हूँ उस वक़्त और ज़्यादा पास आते हो,\nतकल्लुफ़ की दीवारें गिर जाती हैं पल भर के अंदर,\nजब तुम बच्चों सी मासूम शरारत दिखाते हो।',
    'Teasing nicknames spoken warmly draw us closer,\nMelting formal walls down within seconds,\nPlayful innocence lights bright sparkler joy,\nDeepening tender fondness inside my chest.'
  ],
  [
    'हर जन्म में मुझे बस तेरा ही साथ नसीब हो,\nसुख हो या दुख तू हमेशा मेरे क़रीब हो,\nप्यार भरी इस कहानी का कभी अंत न लिखे खुदा,\nहमारी मोहब्बत ज़माने भर में सबसे अजीब व ख़ूब हो।',
    'May every lifetime grant companionship beside you,\nStaying close across sunshine and rain alike,\nMay heaven write zero end to our story,\nKeeping pure devotion timelessly radiant.'
  ],
  [
    'दिल की तिजोरी में तेरे प्यार के सिक्के खनकते हैं,\nमेरी आँखों के तारे तेरे नाम से ही चमकते हैं,\nशुक्रिया ज़िंदगी में आकर इतना अपनापन लुटाने को,\nतेरी मोहब्बत के साये में मेरे हर ख़्वाब महकते हैं।',
    'Coins of your affection chime inside my heart,\nStars behind my eyes sparkle at your name,\nThank you for pouring warmth into my days,\nBeneath your love every dream blooms fragrant.'
  ]
];

// 32. Dard Bhari Shayari (30 unique 25-40 word poems)
const DARD_BHARI_POEMS: readonly RawPoemTuple[] = [
  [
    'सीने में दफ़न दर्द को लफ़्ज़ों में ढालना मुश्किल है,\nबिखरे हुए काँच से ख़्वाबों को संभालना मुश्किल है,\nपूछते हैं लोग क्यों मुस्कुराते कम हो आजकल तुम,\nकैसे बताऊँ दिल से पुरानी फाँस निकालना मुश्किल है।',
    'Translating buried heartache into words proves hard,\nGathering shattered glass dreams cuts tender palms,\nPeople ask why smiles visit less lately,\nHow hard pulling deep splinters from within.'
  ],
  [
    'रात जितनी गहरी होती है दर्द उतना ही जागता है,\nसुकून का परिंदा मेरी छत से दूर भागता है,\nचुपचाप करवटें बदलते गुज़र जाती हैं सदियाँ जैसे,\nहर अँधेरा कोना मुझसे मेरे आँसुओं का हिसाब माँगता है।',
    'Deeper midnight grows sharper awakens silent ache,\nPeaceful birds fly far past my quiet roof,\nTurning restless hours stretch long like ages,\nEvery dark corner counts unspoken tears.'
  ],
  [
    'ज़ख़्म दिखते नहीं जिस्म पर मगर रूह छिल गई,\nवफ़ा की क़ीमत हमें दर्द बनकर मिल गई,\nहँसने की कोशिश करूँ तो होंठ काँप जाते हैं,\nजैसे ख़ुशी की हर कली खिलने से पहले सिल गई।',
    'No surface bruise shows though spirit aches raw,\nLoyalty returned dressed quietly inside sorrow,\nLips tremble slightly attempting polite smiles,\nBuds of joy closed before opening.'
  ],
  [
    'कुछ दर्द वक़्त संग कम नहीं पक जाते हैं,\nरोते-रोते जब आँखों के चश्मे थक जाते हैं,\nतब इंसान मूरत बनकर बैठ जाता है कोने में,\nजब सारे अपने धीरे-धीरे छोड़कर चले जाते हैं।',
    'Certain pains deepen rather than fade along years,\nWhen exhausted eyes run dry of tears,\nTurning quiet souls still inside dim rooms,\nAfter familiar hands drift slowly away.'
  ],
  [
    'हमने दर्द को अब अपना हमनवा बना लिया है,\nआह को अपनी ग़ज़ल की मधुर हवा बना लिया है,\nवैद्य भी लौट गए नब्ज़ देखकर खाली हाथ मेरी,\nक्योंकि हमने मर्ज़ को ही अपनी दवा बना लिया है।',
    'Making quiet sorrow a familiar companion now,\nWeaving soft sighs into verses of ghazal,\nHealers stepped back reading my steady pulse,\nOnce heartache itself became quiet remedy.'
  ],
  [
    'काँच टूटे तो आवाज़ दूर तक सुनाई देती है यहाँ,\nदिल टूटे तो सन्नाटे में भी सिसकी दब जाती है,\nदर्द भरी इस दास्ताँ का कोई पन्ना मत खोलो यारो,\nहर सतर पढ़ते ही भरी महफ़िल उदास हो जाती है।',
    'Shattering glass rings loudly down hallways,\nBreaking hearts muffle sobs inside silence,\nLeave pages of this sorrowful tale closed,\nEvery line dims lively rooms wistfully.'
  ],
  [
    'आँखों के नीचे पड़े घेरे कहानी बयाँ कर देते हैं,\nछुपाए हुए राज़ ज़माने पर अयाँ कर देते हैं,\nलाख कहो कि सब ठीक चल रहा है ज़िंदगी में,\nदर्द के धुएँ चेहरे का नूर धुआँ कर देते हैं।',
    'Dark circles beneath tired eyes tell stories,\nRevealing hidden burdens kept silently inside,\nClaiming everything runs fine fools nobody long,\nSmoke of sorrow dims natural radiance.'
  ],
  [
    'नमक की मंडी में जाकर ज़ख़्म दिखाने की भूल की,\nहमने काँटों की टहनी से उम्मीद फूल की भूल की,\nदर्द मिला इतना कि झोली छोटी पड़ गई हमारी,\nहमने बेदिल लोगों से वफ़ा क़ुबूल की भूल की।',
    'Showing tender wounds inside salt markets erred,\nExpecting soft blooms off thorny boughs hurt,\nSorrow overflowed humble hands completely,\nHaving trusted unfeeling hearts too deeply.'
  ],
  [
    'साँस लेना भी कभी-कभी भारी बोझ सा लगता है,\nजब अपना ही साया रोज़ नया सोग सा लगता है,\nकिससे कहें और कौन सुनेगा इस बेरहम दौर में,\nहर गहरा रिश्ता अब एक मीठे रोग सा लगता है।',
    'Drawing simple breath feels heavy occasionally,\nWhen familiar shadows carry quiet grief,\nWho listens patiently amid hurried times,\nDeep attachments ache like tender maladies.'
  ],
  [
    'हँसी के पीछे छुपा दर्द सिर्फ़ आईना पहचानता है,\nकमरे की चारदीवारी ही मेरा असली हाल जानता है,\nबाहर तो मैं सबका हौसला बढ़ाता फिरता हूँ रोज़,\nअंदर टूटा हुआ शायर बस तन्हाई ही मानता है।',
    'Only bedroom mirrors recognize pain behind smiles,\nFour silent walls witness honest exhaustion,\nOutside I encourage everyone warmly daily,\nIndoors a bruised poet sits quietly.'
  ],
  [
    'बारिश की बूँदें जब खिड़की के शीशे पर फिसलती हैं,\nसीने की दबी हुई चीखें अश्कों में पिघलती हैं,\nदर्द का मौसम कभी बदलता ही नहीं मेरे शहर में,\nयहाँ हर शाम उदासी की चादर ओढ़कर निकलती है।',
    'Raindrops sliding slowly down window glass,\nMelt muffled aches quietly into tears,\nSeasons of longing linger across my town,\nDusk arrives wrapped inside grey shawls.'
  ],
  [
    'तीर कमान से निकला था और अपने हाथ में कमान थी,\nदर्द से ज़्यादा इस बात पर मेरी रूह हैरान थी,\nग़ैर मारते तो हँसकर सह भी लेता सीने पर वार,\nज़ख़्म देने वाली सूरत मेरी अपनी ही जान थी।',
    'Seeing familiar hands holding the bow stunned me,\nShocked deeper than the piercing arrow itself,\nBlows from strangers could pass endured,\nWounds dealt by cherished ones cut deepest.'
  ],
  [
    'कलम उठाई तो काग़ज़ पर आँसू पहले गिर पड़े,\nस्याही फैल गई और दर्द के हर्फ़ बिखर पड़े,\nलिखना चाहता था मैं भी खुशियों के सुंदर गीत कभी,\nमगर तजुर्बों के काँटे हर मिसरे में उतर पड़े।',
    'Lifting my pen dropped tears onto paper first,\nBlurring dark ink across scattered syllables,\nWishing once to compose cheerful songs,\nThorns of lived ache entered every verse.'
  ],
  [
    'सूखे कुएँ में आवाज़ लगाओ तो अपनी ही गूँज आती है,\nदर्द भरी ज़िंदगी में तन्हाई ही साथ निभाती है,\nथक गया हूँ उम्मीदों के झूठे दीये जलाते-जलाते,\nहवा हर बार आकर मेरी ही लौ बुझा जाती है।',
    'Calling down dry wells returns lone echoes,\nSolitude walks faithfully beside aching lives,\nTired of relighting fragile lamps of hope,\nGusts extinguish my small flame repeatedly.'
  ],
  [
    'चेहरे पर शिकन तक नहीं आने दी हमने कभी,\nपलकों की दहलीज़ पार न जाने दी नमी कभी,\nभीतर ही भीतर घुटकर राख हो गया सारा जंगल,\nबाहर दुनिया को धुएँ की भनक न जाने दी कभी।',
    'Allowing zero furrow across calm brows,\nHolding mist firmly behind quiet eyelids,\nInner forests smoldered silently into ash,\nLetting zero smoke alert passersby outside.'
  ],
  [
    'दर्द की हद गुज़र जाए तो इंसान चुप रहता है,\nन गिला करता है न किसी आगे रो पाता है,\nबस शून्य आँखों से तकता रहता है आसमान को,\nजब भरोसे का आख़िरी तिनका भी खो जाता है।',
    'Passing beyond pain threshold quiets speech,\nStopping complaints alongside falling tears,\nGazing silently upward toward vast skies,\nOnce final straws of trust drift away.'
  ],
  [
    'हर शाम मेरे दरवाज़े पर उदासी दस्तक देती है,\nभूली-बिसरी चोटों को फिर से हरा कर देती है,\nसोता हूँ इस उम्मीद में कि सुबह कुछ हल्का लगेगा,\nनींद खुलते ही हक़ीक़त फिर वही सज़ा दे देती है।',
    'Melancholy knocks softly each evening hour,\nReopening old bruises healed halfway,\nSleeping hopeful dawn brings lighter air,\nWaking returns familiar weight unchanged.'
  ],
  [
    'किसी ने खिलौना समझा तो किसी ने वक़्त गुज़ारी की,\nहमारी सच्ची भावनाओं से सबने अदाकारी की,\nदर्द इस बात का नहीं कि हम अकेले रह गए आज,\nमलाल ये है कि हमने ग़लत लोगों से यारी की।',
    'Treated carelessly like pastime along roads,\nSincere feelings met polished acting back,\nBeing alone hurts less today honestly,\nThan regretting trust placed unwisely.'
  ],
  [
    'सर्द रातों में कोहरे की तरह दर्द लिपट जाता है,\nयादों का काफ़िला सीने के बीचों-बीच अटक जाता है,\nआग जलाकर हाथ तो गर्म कर लेते हैं लोग यहाँ,\nठिठुरते हुए दिल को भला कौन सेंक पाता है।',
    'Heartache wraps close like thick winter fog,\nCaravans of memory pause mid-chest,\nBonfires warm cold palms easily enough,\nWhat flame thaws a shivering heart.'
  ],
  [
    'मोहब्बत की गलियों से जब भी जनाज़ा गुज़रा अरमानों का,\nतमाशा ही देखा खिड़कियों से शहर के अनजानों का,\nदर्द बाँटने कोई नहीं उतरता अपनी ऊँची छतों से,\nसबको शौक़ है बस दूर से क़िस्सा सुनने दीवानों का।',
    'When broken hopes passed quietly down lanes,\nDistant windows watched idly from above,\nFew descend tall roofs sharing real ache,\nPreferring dramatic tales from safe distance.'
  ],
  [
    'सूनी आँखों में चुभते हैं अब टूटे ख़्वाबों के टुकड़े,\nकिसको सुनाएँ बैठकर अपने नसीब के दुखड़े,\nख़ामोश लबों पर ताला डाल लिया है हमने हमेशा को,\nक्योंकि हमदर्द भी आजकल ताने मारते हैं तगड़े।',
    'Fragments of broken dreams sting tired eyes,\nTo whom could quiet grief speak safely,\nLocking gentle lips inside lasting silence,\nSince false comforters turn sharp-tongued.'
  ],
  [
    'दिल के मरीज़ को अब हवा भी चुभने लगी है,\nअपनो की बेरुख़ी साँसों में गड़ने लगी है,\nजितना समेटता हूँ ख़ुद को बिखरने से बचाने को,\nउदासी की बेल उतनी ही तेज़ी से बढ़ने लगी है।',
    'Even soft breezes sting a bruised chest,\nCold indifference presses heavy upon breath,\nGathering scattered pieces carefully inward,\nVines of melancholy still climb quietly.'
  ],
  [
    'एक चीख़ जो गले के भीतर ही कहीं दबकर मर गई,\nमेरी सारी चंचलता उसी एक हादसे में ठहर गई,\nलोग पूछते हैं इतने संजीदा क्यों रहते हो तुम,\nउन्हें क्या पता मेरे ऊपर से कैसी आँधी गुज़र गई।',
    'One silent cry faded deep inside my throat,\nFreezing youthful playfulness right in place,\nPeople wonder why solemn calm lingers,\nUnaware how fierce a storm swept past.'
  ],
  [
    'चंद पलों की ख़ुशी देकर उम्र भर का रोना दे गए,\nफ़ूलों का वादा करके काँटों का बिछौना दे गए,\nदर्द की दौलत से मालामाल कर दिया तुमने हमें,\nजाते-जाते तन्हाई का ये सूना कोना दे गए।',
    'Trading brief joy for years of quiet ache,\nPromising blossoms while leaving sharp thorns,\nEnriching empty hands with heavy sorrow,\nParting footsteps left solitary corners.'
  ],
  [
    'राख कुरेदोगे तो आज भी तपन महसूस होगी तुम्हें,\nमेरी ख़ामोश ग़ज़लों में जलन महसूस होगी तुम्हें,\nशौक़ से नहीं लिखता कोई दर्द भरे अल्फ़ाज़ यहाँ,\nपढ़ोगे गौर से तो मेरी घुटन महसूस होगी तुम्हें।',
    'Stirring quiet ash reveals lingering warmth,\nSilent verses carry unmistakable ache,\nNobody pens sorrowful lines merely for sport,\nReading closely senses breathless weight.'
  ],
  [
    'दवा भी असर छोड़ देती है जब घाव मन पर लगे,\nसारी रौनकें फ़ीकी पड़ जाती हैं जब आँगन सूना लगे,\nदर्द का रिश्ता साँसों की डोर से बंधा है ऐसे,\nजैसे पतझड़ का मौसम किसी हरे उपवन पर लगे।',
    'Medicine falters when bruises mark the spirit,\nFestive lights dim across empty courtyards,\nSorrow clings closely alongside quiet breath,\nLike sudden autumn touching green groves.'
  ],
  [
    'हमने अपने हिस्से के आँसू भी छुपाकर पिए हैं,\nफटे हुए दामन के टुकड़े सब्र के धागे से सिए हैं,\nज़िंदगी से अब कोई बड़ी शिकायत बाकी नहीं रही,\nदर्द के साये में भी हमने फ़र्ज़ पूरे किए हैं।',
    'Swallowing allotted tears away from sight,\nMendings torn hems with threads of patience,\nHolding zero bitter complaint toward life,\nFulfilling every duty despite quiet pain.'
  ],
  [
    'तस्वीर जल गई मगर धुआँ आँखों में ठहरा रहा,\nबिछड़ने वाले का अक्स निगाहों में गहरा रहा,\nदर्द कम होने का नाम ही नहीं लेता किसी सूरत,\nहर गुज़रते साल यादों का पहरा और कड़ा रहा।',
    'Burnt portraits still leave sting inside eyes,\nDeparted reflections linger deep within sight,\nHeartache refuses easing through passing months,\nMemory guards stand stricter every year.'
  ],
  [
    'काग़ज़ भी भीग जाता है जब दिल का हाल लिखता हूँ,\nहर टूटे भरोसे का अनकहा सवाल लिखता हूँ,\nलोग वाह-वाह करके आगे बढ़ जाते हैं महफ़िल में,\nमैं अपनी रूह पर गुज़रा हुआ मलाल लिखता हूँ।',
    'Paper dampens whenever honest ache writes out,\nVoicing unspoken questions of broken trust,\nListeners applaud verses then stroll onward,\nWhile ink records bruises upon my soul.'
  ],
  [
    'अंधेरी रात के बाद सवेरा तो सबके लिए आता है,\nपर दिल के अँधेरे को कौन सा सूरज मिटा पाता है,\nदर्द के साथ जीने का सलीक़ा सीख लिया हमने अब,\nक्योंकि हर ज़ख़्म हमें थोड़ा और मज़बूत बनाता है।',
    'Daybreak greets every dark sky eventually,\nYet inner shadows outlast midday sun,\nLearning graceful poise alongside quiet ache,\nTurns weathered scars into resilient strength.'
  ]
];

export const NEW_FEELINGS_PART_4: Shayari[] = [
  ...buildCategoryShayaris(
    {
      category: 'yaadein',
      categoryName: 'Yaadein Shayari',
      categoryIcon: '🍂',
      idPrefix: 'yaadein',
      startIndex: 1,
      tags: ['YaadeinShayari', 'PuraniYaadein', 'NostalgiaHindi']
    },
    YAADEIN_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'khwab',
      categoryName: 'Khwab / Sapne Shayari',
      categoryIcon: '🌠',
      idPrefix: 'khwab',
      startIndex: 1,
      tags: ['KhwabShayari', 'SapneStatus', 'DreamsHindi']
    },
    KHWAB_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'naseeb',
      categoryName: 'Naseeb / Kismat Shayari',
      categoryIcon: '🔮',
      idPrefix: 'naseeb',
      startIndex: 1,
      tags: ['NaseebShayari', 'TaqdeerStatus', 'KismatHindi']
    },
    NASEEB_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'matlabi-duniya',
      categoryName: 'Matlabi Duniya Shayari',
      categoryIcon: '🎭',
      idPrefix: 'matlabi-duniya',
      startIndex: 1,
      tags: ['MatlabiDuniya', 'FakePeopleStatus', 'ZamanaShayari']
    },
    MATLABI_DUNIYA_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'pyar-bhari',
      categoryName: 'Pyar Bhari Shayari',
      categoryIcon: '💞',
      idPrefix: 'pyar-bhari',
      startIndex: 1,
      tags: ['PyarBhariShayari', 'SweetLoveHindi', 'CaringStatus']
    },
    PYAR_BHARI_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'dard-bhari',
      categoryName: 'Dard Bhari Shayari',
      categoryIcon: '🥀',
      idPrefix: 'dard-bhari',
      startIndex: 1,
      tags: ['DardBhariShayari', 'DeepPainHindi', 'ZakhmStatus']
    },
    DARD_BHARI_POEMS
  )
];
