import { Shayari } from '../../../types/shayari';
import { buildCategoryShayaris, RawPoemTuple } from './shayariBuilder';

// 33. Intezaar / Wait Shayari (30 unique 25-40 word poems)
const INTEZAAR_POEMS: readonly RawPoemTuple[] = [
  [
    'चौखट पर जलाए रखा है उम्मीद का दीया हमने,\nहर गुज़रती आहट पर तेरा नाम लिया हमने,\nवक़्त की सुइयाँ थक कर भले धीमी पड़ गईं,\nमगर तेरा इंतज़ार कम नहीं किया हमने।',
    'Keeping a hopeful lamp lit along our threshold,\nWhispering your name at every passing footstep,\nClock hands grew weary slowing down gently,\nYet faithful waiting never wavered inside.'
  ],
  [
    'सूनी सड़क के मोड़ पर निगाहें टिकी रहती हैं,\nहवाओं से तेरे लौटने की ख़बरें बिकी रहती हैं,\nइंतज़ार का हर एक पल सदियों बराबर लगता है,\nफिर भी पलकों पर मिलने की आस लिखी रहती है।',
    'Eyes stay fixed toward the quiet road bend,\nAsking passing winds for word of return,\nEvery waiting minute stretches long like centuries,\nStill hope of meeting rests upon lashes.'
  ],
  [
    'चाय ठंडी हो गई मेज़ पर रखे-रखे आज फिर,\nशाम पिघल गई अँधेरे में ढले-ढले आज फिर,\nतुमने कहा था लौट आओगे ढलते सूरज के साथ,\nहम बैठे रहे ख़यालों में जले-जले आज फिर।',
    'Tea cooled untouched across the wooden table,\nTwilight melted softly into deep evening shade,\nYou promised returning alongside setting sunbeams,\nLeaving quiet thoughts lingering past dusk.'
  ],
  [
    'सब्र की इंतहा क्या होती है इंतज़ार से पूछो,\nसूखे सावन का दर्द प्यासे दयार से पूछो,\nगिन-गिन कर काटे हैं हमने जुदाई के महीने सारे,\nमिलन की कीमत इस बेक़रार प्यार से पूछो।',
    'Ask patient waiting what endurance truly means,\nAsk thirsty meadows about delayed monsoon rain,\nCounting long months across solitary calendars,\nRestless affection knows reunion priceless worth.'
  ],
  [
    'दरवाज़े की कुंडी जब हवा से भी खड़कती है,\nसीने के भीतर मेरी धड़कन अचानक भड़कती है,\nलगता है जैसे तुम आ गए सफ़र ख़त्म करके अपना,\nइंतज़ार में पागल निगाह बाहर लपकती है।',
    'Whenever wind rattles the front door latch,\nHeartbeats leap eagerly inside my chest,\nImagining your journey finally brought you home,\nHopeful eyes rush quickly toward the gate.'
  ],
  [
    'कैलेंडर के पन्ने बदल गए पर तारीख़ नहीं आई,\nजिस सुबह तेरा दीदार हो वो नज़दीक नहीं आई,\nइंतज़ार की घड़ियाँ लंबी होती जा रही हैं रोज़,\nबेक़रार दिल को संभालने की तरकीब नहीं आई।',
    'Calendar pages turned without bringing our date,\nDawn promising your sight still tarries afar,\nHours of waiting lengthen day after day,\nNo easy trick calms an expectant heart.'
  ],
  [
    'पत्थर बन गई हैं आँखें रास्ता देखते-देखते तेरा,\nसफ़ेद पड़ने लगा है अब सब्र का सवेरा मेरा,\nएक बार ख़बर भिजवा दो अपनी आमद की सनम,\nउजड़ने से बचा लो मेरे अरमानों का बसेरा मेरा।',
    'Eyes feel sculpted waiting along your road,\nPatience pales softly beneath morning light,\nSend single word announcing your arrival soon,\nKeeping nested hopes sheltered indoors.'
  ],
  [
    'रेलवे स्टेशन की बेंच पर बैठा वो ख़ामोश इंतज़ार,\nहर आती गाड़ी में ढूँढता अपना बिछड़ा यार,\nभीड़ उतर कर चली जाती है अपने-अपने घरों को,\nअकेला लौटता है फिर उम्मीद समेटे बार-बार।',
    'Sitting quietly upon station wooden benches,\nScanning arriving carriages for one dear face,\nCrowds disperse happily toward warm homes,\nWalking back solo holding tomorrow hope.'
  ],
  [
    'मौसम ने कितने ही लिबास बदल डाले बाग़ों में,\nपर तेरा इंतज़ार जस का तस है चिराग़ों में,\nपतझड़ आया और बसंत भी मुस्कुरा कर गुज़र गया,\nहम आज भी खड़े हैं उसी मोड़ के सुराग़ों में।',
    'Gardens changed seasonal attire many times,\nWhile lamp flames guard unchanging vigil,\nAutumn passed and bright spring rolled onward,\nStill standing faithfully where paths parted.'
  ],
  [
    'फ़ोन की हर घंटी पर तेरा ही गुमान होता है,\nइंतज़ार में जागता मेरा सारा जहान होता है,\nदेर हो जाए भले तुझे दुनिया के उलझनों में,\nमेरा दिल आज भी तेरा ही मेहमान होता है।',
    'Every phone chime sparks thoughts of you,\nKeeping my quiet world awake expectantly,\nEven delayed amid busy worldly tangles,\nMy heart remains devotedly yours.'
  ],
  [
    'इंतज़ार भी इश्क़ की सबसे पाक इबादत होती है,\nबिना देखे किसी को चाहने की आदत होती है,\nज़माना कहता है पागलपन छोड़ कर आगे बढ़ जाओ,\nउन्हें क्या पता सब्र में कितनी शराफ़त होती है।',
    'Waiting stands among love purest devotions,\nCherishing someone unseen across long miles,\nOthers urge moving rapidly past patience,\nUnaware what nobility lives inside constancy.'
  ],
  [
    'खिड़की के पास रखी कुर्सी आज भी ख़ाली है,\nतेरे नाम की पौध आँगन में हमने पाली है,\nलौट आओ कि फूल खिलने को बेताब बैठे हैं,\nतेरे इंतज़ार में सूनी हर एक डाली है।',
    'The chair beside our window waits unoccupied,\nTending garden saplings planted in your name,\nReturn soon while eager buds await bloom,\nEvery quiet branch longs for your step.'
  ],
  [
    'घड़ी की टिक-टिक जैसे हथौड़े सी बजती है रात में,\nनींद रूठ कर बैठ जाती है इंतज़ार की बात में,\nतारे गिनते-गिनते सहर का उजाला फैल जाता है,\nबस तेरी कमी खलती है हर सौगात में।',
    'Clock ticks echo loud across midnight rooms,\nSleep steps aside yielding space to longing,\nCounting bright stars until pale dawn breaks,\nMissing solely your presence beside me.'
  ],
  [
    'चिट्ठियों का ज़माना गया मगर इंतज़ार वही है,\nऑनलाइन दिखने पर धड़कन की रफ़्तार वही है,\nटाइप होकर मिटते लफ़्ज़ों को तकते रहते हैं हम,\nदिल के भीतर मिलने की पुकार वही है।',
    'Handwritten letters passed yet waiting remains,\nHeartbeats quicken seeing your status glow,\nWatching typed bubbles appear then vanish,\nSame timeless yearning calls quietly inside.'
  ],
  [
    'शबरी जैसा सब्र हो तो राम ख़ुद चलकर आते हैं,\nसच्चे इंतज़ार के फल हमेशा मीठे कहलाते हैं,\nभले देर लगे मुक़द्दर के बंद दरवाज़े खुलने में,\nवफ़ा रखने वाले आख़िर मंज़िल पा जाते हैं।',
    'Steadfast devotion draws grace homeward eventually,\nFruits of sincere patience ripen sweetest,\nThough locked doors of timing open slowly,\nFaithful hearts welcome fulfillment at last.'
  ],
  [
    'हवा के रुख़ से तेरी खुशबू का पता पूछते हैं,\nबादलों से तेरे शहर का रास्ता पूछते हैं,\nकब ख़त्म होगा ये लंबा वनवास हमारी चाहत का,\nहर रोज़ खुदा से यही वास्ता पूछते हैं।',
    'Asking shifting breezes where your fragrance drifts,\nInquiring down cloud lanes toward your city,\nWhen ends this long exile of affection,\nWhispering that gentle plea daily upward.'
  ],
  [
    'दो पल की मुलाक़ात के लिए बरसों का इंतज़ार मंजूर,\nतेरी एक मुस्कान के आगे सारा दर्द काफ़ूर,\nबस वादा निभा देना किसी शाम अचानक आकर,\nभर देना मेरी सूनी आँखों में खुशियों का नूर।',
    'Years of waiting feel worthy for brief meeting,\nOne warm smile dissolves accumulated ache,\nHonor our promise arriving some quiet dusk,\nFilling tired eyes with radiant joy.'
  ],
  [
    'सूखे दरिया को जैसे पहली बारिश की आस रहे,\nबिल्कुल वैसी ही मेरे दिल को तेरी प्यास रहे,\nक़दम थकने नहीं देता तेरे आने का भरोसा मुझे,\nचाहे सफ़र में कितनी भी गहरी उदास रहे।',
    'Like parched riverbeds awaiting monsoon clouds,\nMy heart holds quiet thirst seeing you,\nTrust in your return keeps footsteps steady,\nAcross every wistful stretch of road.'
  ],
  [
    'तेरे लिए वक़्त को वहीं रोक कर रखा है मैंने,\nदिल का कमरा आज भी सहेज कर रखा है मैंने,\nजब भी फुर्सत मिले दुनिया के मेले से आ जाना,\nइंतज़ार का हर लम्हा पिरो कर रखा है मैंने।',
    'Holding time paused gently right where we stood,\nKeeping my heart room tidied for you,\nWhenever worldly bustle spares a quiet hour,\nEvery strung moment of waiting welcomes you.'
  ],
  [
    'शाम के परिंदे भी अपने घोंसलों में लौट आए,\nमेरे आँगन में मगर तेरे क़दम अब तक न आए,\nकितनी दफ़ा सजाई महफ़िल तेरे इस्तक़बाल में हमने,\nहर बार चिराग़ों ने अँधेरे से धोखे खाए।',
    'Evening birds returned safely to warm nests,\nYet awaited footsteps stayed absent indoors,\nPreparing welcome lamps time after time,\nWatching wicks flicker softly against night.'
  ],
  [
    'इंतज़ार का मीठा दर्द सिर्फ़ प्रेमी पहचानता है,\nजो दूर रहकर भी अपने यार को जानता है,\nदूरी मिटा नहीं सकती सच्ची लगन की गहराई को,\nसच्चा दिल आख़िरी साँस तक राह छानता है।',
    'Only devoted hearts understand bittersweet waiting,\nKnowing beloved souls across wide distance,\nMiles never shallow genuine attachment,\nFaithful eyes watch roads tirelessly.'
  ],
  [
    'सर्दियों की कोहरे भरी सुबह में तेरा रास्ता तकना,\nउँगलियों से शीशे की भाप पर तेरा नाम लिखना,\nछोटी-छोटी उम्मीदों में ज़िंदा है इंतज़ार मेरा,\nकभी तो धुंध के पार तेरा चेहरा दिखना।',
    'Watching misty winter lanes each early dawn,\nTracing your initials across fogged glass,\nSmall tender hopes sustain quiet vigil,\nTrusting your silhouette emerges past haze.'
  ],
  [
    'न शिकायत है तुझसे न तेरी मजबूरियों से गिला,\nजो भी इंतज़ार मेरे हिस्से आया मैंने हँसकर झेला,\nबस इतना यक़ीन बनाए रखना मेरी वफ़ाओं पर,\nकि तेरे बिना भी मैंने तेरा ही साथ पाला।',
    'Holding zero complaint against your duties,\nBearing allotted waiting with calm grace,\nKeep simple faith inside my loyalty,\nHonoring our bond even miles apart.'
  ],
  [
    'चाँद भी पूरी रात जागकर सहर का इंतज़ार करता है,\nहर सच्चा आशिक़ वक़्त की मार सहता है,\nमिलने की घड़ी जब आती है सब्र के इम्तिहान बाद,\nतब अश्कों का समंदर भी ख़ुशी से बहता है।',
    'Even moonlight stays awake awaiting sunrise,\nDevoted hearts endure tests of long hours,\nWhen reunion arrives past patient trial,\nJoyful tears wash away every ache.'
  ],
  [
    'रास्ते के पेड़ भी अब मेरा हाल पहचानते हैं,\nकिसके इंतज़ार में खड़ा हूँ सब जानते हैं,\nछाँव सरका देते हैं मेरे सिर के ऊपर धीरे से,\nमेरी बेज़ुबान वफ़ा का वो भी मान ठानते हैं।',
    'Roadside trees recognize my quiet vigil now,\nKnowing well whose return holds me here,\nShifting leafy shade gently overhead,\nHonoring silent loyalty without words.'
  ],
  [
    'उम्र गुज़र जाए भले पलकें बिछाए हुए राहों में,\nफ़र्क़ नहीं आएगा कभी मेरी सच्ची पनाहों में,\nइंतज़ार ख़त्म होगा जिस रोज़ तेरी एक झलक से,\nजन्नत उतर आएगी उसी पल मेरी निगाहों में।',
    'Though years pass laying welcome along roads,\nSincere shelter inside never diminishes,\nThe day one glimpse ends long waiting,\nParadise will dawn bright before my eyes.'
  ],
  [
    'हथेली पर ठोड़ी टिकाए बालकनी में बैठे रहना,\nहर गुज़रते अजनबी में तेरा ही साया कहना,\nइंतज़ार ने शायर बना दिया इस सीधे इंसान को,\nसीख लिया ख़ामोशी में यादों के संग बहना।',
    'Resting chin on palm along quiet balconies,\nCatching hints of you down busy streets,\nWaiting turned a simple heart poetic,\nFlowing gently alongside silent remembrance.'
  ],
  [
    'देर से आओ मगर आने का यक़ीन ज़िंदा रखो,\nमेरे सूने आँगन में उम्मीद का परिंदा रखो,\nइंतज़ार की थकन उतर जाएगी एक पल में सारी,\nबस मुलाक़ात का वो लम्हा थोड़ा चुनिंदा रखो।',
    'Arrive late if needed yet keep promise alive,\nLet birds of hope circle my courtyard,\nWeariness of waiting melts within seconds,\nWhen cherished reunion finally unfolds.'
  ],
  [
    'सूरज डूबा और तारे निकल आए आसमान के तले,\nएक और दिन बीत गया तेरे इंतज़ार के हवाले,\nकल फिर नई उम्मीद बांधकर बैठूँगा दहलीज़ पर,\nशायद कल की हवा तुझे मेरे शहर ले चले।',
    'Sun sank low while stars lit overhead,\nAnother day passed entrusted to waiting,\nTomorrow fresh hope sits along thresholds,\nPerhaps morning winds guide you homeward.'
  ],
  [
    'इंतज़ार की डोरी बड़ी नाज़ुक मगर पक्की होती है,\nभरोसे की नींव पर हर उम्मीद टिकी होती है,\nजब दो दिल जुड़े हों सच्ची रूहानी चाहत से,\nमिलन की तारीख़ मुक़द्दर में ज़रूर लिखी होती है।',
    'Threads of waiting look delicate yet hold firm,\nEvery quiet hope stands anchored on trust,\nWhen two hearts connect soul to soul,\nReunion dates rest assured in destiny.'
  ]
];

// 34. Judai / Separation Shayari (30 unique 25-40 word poems)
const JUDAI_POEMS: readonly RawPoemTuple[] = [
  [
    'बिछड़ते वक़्त उसने पलटकर देखा तो था एक बार,\nआँखों में छुपा हुआ समंदर छलका तो था एक बार,\nजुदाई दोनों के नसीब में बराबर का दर्द लिख गई,\nकदम बढ़ाते हुए उसका दिल भी धड़का तो था एक बार।',
    'Parting footsteps paused glancing backward once,\nHidden oceans glistened briefly inside eyes,\nSeparation wrote equal ache across both fates,\nWalking away shook two hearts together.'
  ],
  [
    'दो रास्ते अलग हुए और मंज़िलें बँट गईं हमारी,\nहँसती-खेलती सी दुनिया पल में सिमट गई हमारी,\nजुदाई का ऐसा पतझड़ उतरा हरे-भरे गुलशन पर,\nखुशियों की हर टहनी जड़ से ही कट गई हमारी।',
    'Two roads diverged splitting shared horizons,\nShrinking cheerful worlds inside moments,\nAutumn of parting swept across green gardens,\nLeaving joyful branches bare overnight.'
  ],
  [
    'हाथ छूटा था मजबूरी में मोहब्बत कम नहीं हुई,\nजुदाई की आग में भी नफ़रत जनम नहीं हुई,\nआज भी तेरा नाम सुनकर अदब से झुकती हैं पलकें,\nमेरे दिल से तेरी इज़्ज़त कभी ख़त्म नहीं हुई।',
    'Hands parted through circumstance not fading love,\nFire of separation never bred bitterness,\nHearing your name still bows lashes respectfully,\nHonor held for you remains eternal.'
  ],
  [
    'कितना कठिन होता है किसी अपने को अलविदा कहना,\nएक ही आसमान तले अजनबी बनकर ज़िंदा रहना,\nजुदाई जिस्म की होती तो शायद झेल लेते हम,\nरूह से रूह का खिंचना बहुत मुश्किल है सहना।',
    'Speaking final farewells tests human strength,\nLiving like strangers beneath one shared sky,\nPhysical distance alone might pass endured,\nWrenching kindred spirits apart cuts deep.'
  ],
  [
    'सूख गए वो फूल जो कभी साथ मिलकर लगाए थे,\nउड़ गए वो परिंदे जो आँगन में बुलाए थे,\nजुदाई की आंधी ने सारा मंज़र वीरान कर डाला,\nबुझ गए वो चिराग़ जो उम्मीदों से जलाए थे।',
    'Flowers planted together withered along paths,\nCourtyard birds scattered across pale skies,\nGales of separation left rooms desolate,\nDimming hopeful lamps lit long ago.'
  ],
  [
    'आधा हिस्सा मेरा तेरे साथ ही चला गया उस रोज़,\nबाक़ी बचे आधे पर उदासी का पड़ गया बोझ,\nजुदाई के बाद इंसान पूरा कहाँ बचता है दोस्त,\nबस साँसों की गिनती निभाता है हर एक रोज़।',
    'Half my spirit walked away beside you then,\nLeaving heavy quiet across what remained,\nRarely does anyone feel whole past parting,\nSimply fulfilling daily counts of breath.'
  ],
  [
    'मीलों का फ़ासला आ गया दो धड़कते दिलों के बीच,\nवक्त ने खींच दी सरहद हमारे क़ाफ़िलों के बीच,\nजुदाई ने छीन ली शामों की वो मीठी गुफ़्तगू,\nख़ामोशी पसर गई अब हमारे सिलसिलों के बीच।',
    'Wide miles settled between two beating hearts,\nTime drew borders across shared caravans,\nSeparation silenced warm evening conversations,\nSpreading stillness where laughter once lived.'
  ],
  [
    'पुल के दोनों किनारों की तरह हम दूर खड़े हैं,\nएक ही नदी देखते हैं पर नसीब कड़े हैं,\nजुदाई का ये आलम कब तक चलेगा खुदा जाने,\nपाँव में रस्मों और रिवाजों के ताले पड़े हैं।',
    'Standing apart like opposite riverbanks,\nWatching shared waters under stern fate,\nHeaven alone knows how long distance lasts,\nBound quietly behind worldly customs.'
  ],
  [
    'तेरे जाने के बाद घर की दीवारें काटने दौड़ती हैं,\nसूनी घड़ियाँ तन्हाई को मेरे संग बाँटने दौड़ती हैं,\nजुदाई का ज़हर धीरे-धीरे रगों में उतरता है ऐसे,\nहर ख़ुशी दरवाज़े से ही उल्टे पाँव लौटती है।',
    'Empty walls press inward since your departure,\nQuiet clocks divide solitude across hours,\nAche of separation seeps slowly inside,\nTurning bright joys timid at thresholds.'
  ],
  [
    'न झगड़ा हुआ कोई न किसी ने बुरा भला कहा,\nबस हालात बदले और रिश्ता जुदाई में बहा,\nऐसी ख़ामोश बिछड़न का घाव सबसे गहरा होता है,\nजहाँ कहने को दिल में बहुत कुछ बाक़ी रहा।',
    'Zero harsh words or angry quarrels occurred,\nShifting tides simply drifted paths apart,\nSilent separations leave deepest marks inside,\nWhere countless tender truths stayed unsaid.'
  ],
  [
    'रेल की पटरी सी क़िस्मत पाई है हमारे प्यार ने,\nसाथ तो चले मगर मिलने न दिया संसार ने,\nजुदाई का ये सफ़र समानांतर चलता ही रहेगा,\nबाँध रखा है हमें फ़ासलों के इस व्यापार ने।',
    'Parallel rails mirror our quiet destiny,\nRunning close yet kept apart always,\nJourneying side by side across distance,\nSeparated gently by worldly lines.'
  ],
  [
    'आख़िरी बार जब उसने मुड़कर हाथ हिलाया था,\nकलेजा मुँह को आ गया पर चेहरा मुस्कुराया था,\nरोक लेते अश्क तो शायद वो ठहर जाता वहीं,\nउसकी तरक्की की ख़ातिर हमने दर्द छुपाया था।',
    'When parting hands waved one final time,\nMy chest tightened behind brave smiles,\nShowing tears might have held footsteps back,\nHiding ache gladly so dreams could soar.'
  ],
  [
    'जुदाई की रातों में चाँद भी उदास नज़र आता है,\nतारों का झुरमुट भी जैसे रोता हुआ गाता है,\nबिछड़ने वाले तो सो जाते होंगे थककर सफ़र में,\nपीछे छूटने वाला ही करवटों में जाग पाता है।',
    'Even moonlight looks wistful across parted nights,\nClusters of stars hum subdued melodies,\nTravelers eventually rest weary from roads,\nThose left behind count wakeful hours.'
  ],
  [
    'एक शहर छोड़ना आसान है इंसान छोड़ना कठिन,\nयादों के जंगल से अपना दामन मोड़ना कठिन,\nजुदाई के बाद नया घर तो बसा लेते हैं लोग,\nपर टूटे हुए मन का पुराना धागा जोड़ना कठिन।',
    'Leaving cities proves easier than leaving souls,\nUntangling hems from memory forests hurts,\nPeople furnish new houses past farewells,\nRejoining snapped inner threads takes years.'
  ],
  [
    'हवा भी उदास बहती है जब दो प्रेमी बिछड़ते हैं,\nआसमान के परिंदे भी सहम कर नीचे उतरते हैं,\nजुदाई कोई साधारण हादसा नहीं होती ज़िंदगी में,\nजीते-जागते इंसान अंदर से पत्ते से झड़ते हैं।',
    'Winds blow somber when devoted hearts part,\nSkyward birds settle quietly along eaves,\nSeparation never passes lightly through life,\nLiving spirits shed warmth like dry leaves.'
  ],
  [
    'तेरे हिस्से की चाय आज भी ज़्यादा बन जाती है,\nआदत पुरानी है कहाँ इतनी जल्दी छूट पाती है,\nजुदाई को महीने गुज़र गए हिसाब की गिनती में,\nपर रसोई की ख़ुशबू आज भी तुझे बुलाती है।',
    'Extra cups of tea brew almost by habit,\nFamiliar routines fade slowly past farewell,\nMonths have rolled across neat calendars,\nYet kitchen warmth still expects your step.'
  ],
  [
    'बिछड़ कर तुझसे हमने महफ़िलों से नाता तोड़ लिया,\nहँसी-मज़ाक वाली गलियों से रुख़ मोड़ लिया,\nजुदाई ने संजीदगी की चादर ओढ़ा दी कंधों पर,\nहमने ख़ामोशी से ही अब गहरा रिश्ता जोड़ लिया।',
    'Stepping away from lively crowds since parting,\nTurning softly past lanes of easy banter,\nSeparation draped quiet poise over shoulders,\nBefriending calm silence along solitary days.'
  ],
  [
    'क़िस्मत ने मिलाया क्यों जब अलग ही करना था,\nख़्वाबों के महल में जब अँधेरा ही भरना था,\nजुदाई का ये सवाल हर रात आसमान से पूछता हूँ,\nहँसाया ही क्यों जब आख़िर में यूँ बिखरना था।',
    'Why cross paths only to pull apart later,\nBuilding dream castles destined for shadow,\nAsking night skies that timeless question,\nWhy bloom joy right before scattering.'
  ],
  [
    'सूने प्लेटफ़ॉर्म पर छूटे रुमाल सी हालत है,\nन कोई अपना रहा पास न कोई शिकायत है,\nजुदाई के कोहरे में धुँधला गया चेहरा तेरा,\nबस यादों की परछाई ही अब मेरी अमानत है।',
    'Like a lone handkerchief left along platforms,\nCarrying zero grievance amid empty air,\nMist of separation softened your outline,\nLeaving gentle memory my sole keepsake.'
  ],
  [
    'जुदा होकर भी हम रूह से कभी जुदा न हुए,\nफ़ासलों के बावजूद बेगानों में शुमार न हुए,\nजिस्म की दूरियाँ क्या मिटाएँगी सच्चे नेह को,\nहम तेरे थे और तेरे बाद किसी के न हुए।',
    'Parted outwardly yet kindred inside spirit,\nDistance never turned devotion unfamiliar,\nPhysical miles cannot erase honest warmth,\nRemaining faithful long past farewell.'
  ],
  [
    'दरख़्त से टूटा पत्ता फिर डाली पर नहीं लगता,\nबिछड़ा हुआ सावन दोबारा आँगन नहीं सजता,\nजुदाई की हक़ीक़त जितनी जल्दी स्वीकार कर लो,\nउतना कम सीने में उम्मीद का काँटा चुभता।',
    'Fallen leaves never reattach atop branches,\nPassed monsoons seldom revisit identical skies,\nAccepting separation gently calms inner storms,\nEasing sharp thorns of vain wishing.'
  ],
  [
    'तेरी आवाज़ सुने बरसों की सदियाँ बीत गईं,\nतनहाई की सारी बाज़ियाँ मुझसे जीत गईं,\nजुदाई के सन्नाटे में कान तरसते हैं आज भी,\nजिन बातों में हमारी सबसे प्यारी रीत गईं।',
    'Long seasons passed without hearing your voice,\nSolitude claimed quiet rounds effortlessly,\nEars still miss warm cadence amid hush,\nRecalling conversations cherished long ago.'
  ],
  [
    'नदी की दो धाराएँ चट्टान से टकरा कर बँट गईं,\nसाथ बहने की सारी कसमें वहीं पर कट गईं,\nजुदाई का दोष न तुझ पर है न मुझ पर सनम,\nहालात की तेज़ लहरें हमारे बीच सिमट गईं।',
    'River currents split striking rugged boulders,\nDividing shared flow down separate valleys,\nNeither heart carries blame for parting,\nSwift tides of circumstance stepped between.'
  ],
  [
    'अलविदा का लफ़्ज़ ज़ुबान पर लाना मौत बराबर था,\nक़दम पीछे हटाना मेरे लिए कयामत बराबर था,\nजुदाई की उस घड़ी ने उम्र दस साल बढ़ा दी मेरी,\nतेरे बिना लौटना ख़ाली हाथ फ़क़ीर बराबर था।',
    'Speaking goodbye weighed heavy beyond words,\nStepping backward shook my entire world,\nThat parting hour aged quiet youth swiftly,\nReturning home empty-handed through dusk.'
  ],
  [
    'आज भी किसी मोड़ पर तेरी ख़ुशबू गुज़र जाती है,\nजुदाई की जमी हुई बर्फ़ पल में पिघल जाती है,\nसंभालता हूँ बड़ी मुश्किल से उमड़ते जज़्बातों को,\nजब तेरे नाम से मिलती कोई आवाज़ टकराती है।',
    'Catching familiar scent around city corners,\nMelts frozen layers of parting instantly,\nSteadying rising emotion takes quiet effort,\nWhenever someone speaks your shared name.'
  ],
  [
    'बिछड़ने का ग़म हमने ग़ज़लों में पिरो डाला है,\nहर आँसू काग़ज़ के दामन में भिगो डाला है,\nजुदाई ने छीना हमसफ़र तो हुनर दे गई बदले में,\nदर्द ने हमारे हर लफ़्ज़ में असर बो डाला है।',
    'Weaving sorrow of parting into quiet verses,\nLetting honest tears sink across paper,\nSeparation took company while gifting poetry,\nPlanting resonant depth inside every line.'
  ],
  [
    'तस्वीर के दो टुकड़े फिर जोड़े भी तो दरार दिखी,\nजुदाई के बाद मुलाक़ात में भी दीवार दिखी,\nवक़्त बदल देता है रिश्तों की पुरानी गर्माहट,\nनज़रों में चाहत कम और झिझक हज़ार दिखी।',
    'Mended photographs still show faint seams,\nPost-parting meetings feel subtle walls,\nTime cools familiar ease imperceptibly,\nLeaving polite hesitation inside glances.'
  ],
  [
    'दुआ है जहाँ भी रहो खुशियों के साये में रहो,\nजुदाई का दर्द सिर्फ़ मेरे ही सरमाये में रहो,\nतुम्हें कभी एहसास न हो मेरी तन्हा रातों का,\nतुम हमेशा बहारों के खिले हमसाये में रहो।',
    'May sheltering joy follow wherever you live,\nKeeping weight of separation solely mine,\nMay lonely nights never touch your doorstep,\nDwelling always beside blooming spring.'
  ],
  [
    'पतझड़ के बाद पेड़ फिर से हरे हो जाते हैं,\nपर जुदाई के मारे दिल कहाँ भरे हो पाते हैं,\nएक ख़ाली जगह हमेशा खटकती है सीने के अंदर,\nजब अपने ही हाथ अपनों से परे हो जाते हैं।',
    'Trees leaf green again following dry autumn,\nParted hearts mend far more slowly,\nOne quiet hollow lingers beneath ribs,\nOnce cherished hands slip beyond reach.'
  ],
  [
    'जुदाई अंत नहीं पाकीज़ा मोहब्बत की पहचान है,\nराधा-कृष्ण सा अमर हर सच्चे प्रेम का मान है,\nपास न रहकर भी जो रूह में बसा रहे उम्र भर,\nवही बिछड़न इश्क़ की सबसे ऊँची उड़ान है।',
    'Separation never ends transcendent devotion,\nEternal love shines past earthly distance,\nRemaining soul-close across whole lifetimes,\nLifts selfless affection beyond horizons.'
  ]
];

// 35. Mohabbat Shayari (30 unique 25-40 word poems)
const MOHABBAT_POEMS: readonly RawPoemTuple[] = [
  [
    'मोहब्बत रूह की इबादत है जिस्म की प्यास नहीं,\nजहाँ स्वार्थ छुपा हो वहाँ सच्चा अहसास नहीं,\nबिना माँगे सब कुछ लुटा देने का नाम इश्क़ है,\nसौदेबाज़ी करने वालों को मोहब्बत रास नहीं।',
    'True mohabbat worships spirit beyond desire,\nSelfishness never shelters honest devotion,\nGiving wholeheartedly without asking return,\nBargaining minds never grasp sacred love.'
  ],
  [
    'जब किसी की सादगी दिल में घर कर जाती है,\nमोहब्बत धीरे-धीरे रगों में उतर कर जाती है,\nन हुस्न की शर्त होती है न दौलत का पैमाना,\nसच्ची चाहत ज़िंदगी को संवार कर जाती है।',
    'When gentle simplicity settles inside the heart,\nAffection flows quietly through every vein,\nDemanding neither glamour nor worldly wealth,\nSincere devotion refines life beautifully.'
  ],
  [
    'मोहब्बत में झुक जाना हार नहीं बड़प्पन होता है,\nअहंकार छोड़ देने से ही रिश्ता पावन होता है,\nजहाँ मैं और तुम मिटकर सिर्फ़ हम रह जाएँ,\nवहीं प्रेम का सबसे सुंदर मधुबन होता है।',
    'Yielding gently inside love shows grace,\nSetting ego aside sanctifies companionship,\nWhere separate pride melts into togetherness,\nSacred gardens of devotion blossom bright.'
  ],
  [
    'एक नज़र में शुरू होकर उम्र भर जो साथ चले,\nधूप-छाँव के हर मौसम में हाथ थामे हाथ चले,\nमोहब्बत वही मुकम्मल कहलाती है ज़माने भर में,\nजिसमें झुर्रियाँ पड़ने तक वही पहली बात चले।',
    'Beginning inside one glance lasting lifetimes,\nHolding hands steady across sun and shade,\nComplete devotion shines rarest on earth,\nKeeping first warmth alive into silver years.'
  ],
  [
    'मोहब्बत का दीपक आँधियों में भी जलता रहता है,\nविश्वास के तेल से हर संकट टलता रहता है,\nदुनिया लाख दीवारें खड़ी करे मिलने की राहों में,\nसच्चा प्रेम चट्टानों से भी झरना सा निकलता रहता है।',
    'Lamps of devotion burn steady amid gales,\nFueled by trust turning trials aside,\nThough tall barriers rise across pathways,\nTrue love springs clear past solid rock.'
  ],
  [
    'तुझे बदलकर चाहूँ तो वो मोहब्बत कैसी होगी,\nशर्तों में बाँधूँ तुझे तो इबादत कैसी होगी,\nतुम जैसे हो अपनी ख़ूबियों और कमियों के साथ,\nउसी रूप में स्वीकारना ही सच्ची उल्फ़त होगी।',
    'Demanding change before loving misses truth,\nBinding conditions dims pure reverence,\nAccepting your graces alongside imperfections,\nDefines honest devotion without disguise.'
  ],
  [
    'मोहब्बत लफ़्ज़ों की मोहताज कभी रही ही नहीं,\nख़ामोश निगाहों से बड़ी गवाही कहीं ही नहीं,\nदो दिल जब एक ही लय पर धड़कना सीख लेते हैं,\nफिर दूरी की कोई दीवार बाक़ी रही ही नहीं।',
    'Deep affection never depended upon speeches,\nSilent gazes witness clearer than words,\nOnce two hearts beat inside shared rhythm,\nNo wall of distance divides them.'
  ],
  [
    'सूफ़ियाना रंग है मेरी मोहब्बत का तेरे नाम पर,\nसजदा करता है दिल तेरी वफ़ा के मुक़ाम पर,\nन पाने की ज़िद है न खोने का कोई ख़ौफ़ मुझे,\nमैं तो राज़ी हूँ तेरी ख़ुशी के हर अंजाम पर।',
    'Mystic devotion colors affection in your name,\nMy heart bows honoring your quiet grace,\nFree from grasping fear or anxious claim,\nContent wherever happiness blesses your path.'
  ],
  [
    'मोहब्बत सिखाती है पराये दर्द को अपना समझना,\nकिसी उदास चेहरे की ख़ातिर दुआ में मचलना,\nजिस दिल में प्रेम का चश्मा फूट पड़ता है दोस्त,\nउसे आ जाता है काँटों पर भी फूल सा चलना।',
    'Love teaches feeling another ache warmly,\nLifting earnest prayers for quiet faces,\nWhere springs of tenderness awaken inside,\nFootsteps tread gently even past thorns.'
  ],
  [
    'किताबों में पढ़ा था मोहब्बत का फ़लसफ़ा हमने,\nतुझसे मिलकर जी लिया हर वो लम्हा हमने,\nअक्षर-अक्षर सच निकला तेरे पावन साथ के अंदर,\nपा लिया तुझमें ही अपना सारा जहाँ हमने।',
    'Philosophy of love once lived inside books,\nMeeting you brought every page alive,\nTruth shone clear within your noble company,\nDiscovering whole worlds inside your warmth.'
  ],
  [
    'मोहब्बत आज़ादी देती है पिंजरा नहीं बनाती,\nपंखों को खुला आसमान देकर उड़ना है सिखाती,\nजहाँ शक और पाबंदियों के ताले लटके हों यारो,\nवहाँ घुटकर मर जाती है मोहब्बत नहीं मुस्कुराती।',
    'Genuine love grants wings rather than cages,\nEncouraging open flight across wide skies,\nWhere padlocks of suspicion hang heavy,\nAffection suffocates instead of blooming.'
  ],
  [
    'चंदन की तरह घिसकर खुशबू लुटाती है मोहब्बत,\nरूठे हुए पत्थर को भी पिघलाती है मोहब्बत,\nनफ़रत के बाज़ारों में बस एक ही इलाज कारगर है,\nटूटे हुए इंसानों को फिर गले लगाती है मोहब्बत।',
    'Like sandalwood love yields quiet fragrance,\nSoftening hardened stone through patience,\nAmid noisy markets of division today,\nCompassionate warmth mends fractured hearts.'
  ],
  [
    'तेरे नाम से रोशन है मेरे दिल की हर गली,\nतेरी मोहब्बत की छाँव में मेरी हर ख़ुशी पली,\nज़माने की दौलत रख ले दुनिया अपने पास सारी,\nमेरे लिए काफ़ी है तेरी वफ़ा की एक कली।',
    'Every lane inside my heart glows through you,\nSheltered gently beneath your steady care,\nLet society keep glittering hoards of gold,\nOne bud of loyalty suffices richly.'
  ],
  [
    'मोहब्बत सब्र मांगती है जल्दबाज़ी का काम नहीं,\nचंद दिनों के आकर्षण का ये सस्ता नाम नहीं,\nतपना पड़ता है बरसों वफ़ा की भट्टी में ख़ामोश,\nहर किसी के बस का ये ऊँचा मुक़ाम नहीं।',
    'Enduring love asks patience beyond haste,\nNever confused with fleeting infatuation,\nRefined quietly across years of constancy,\nHigh devotion rewards steadfast spirits.'
  ],
  [
    'जब दुआ में ख़ुद से पहले उसका नाम निकल आए,\nसमझ लेना मोहब्बत रूह की गहराई तक चल आए,\nफिर न दुनिया की परवाह रहती है न अंजाम का डर,\nजब इश्क़ में इंसान पूरी तरह संभल आए।',
    'When another name rises first inside prayer,\nKnow devotion has reached soul depth,\nWorldly worry fades alongside fear,\nAnchored peacefully inside honest love.'
  ],
  [
    'मोहब्बत की ज़ुबान हर देश में एक जैसी होती है,\nआँखों की चमक और धड़कन की लय वैसी होती है,\nन अनुवाद की ज़रूरत पड़ती है सच्चे जज़्बातों को,\nएहसास की खुशबू हवाओं संग बहती होती है।',
    'Love speaks one universal language everywhere,\nShining identical inside eyes and pulse,\nSincere feeling needs zero translation,\nDrifting fragrant across open breezes.'
  ],
  [
    'तेरी इज़्ज़त को अपनी इज़्ज़त मानकर संभाला है,\nमोहब्बत के हर उसूल को ईमान से पाला है,\nबाज़ारू आशिक़ी के इस शोर भरे ज़माने में,\nहमने रूहानी इश्क़ का पाक दीया उजाला है।',
    'Guarding your dignity sacred as my own,\nUpholding principles of love faithfully,\nAmid shallow noise of passing trends,\nKeeping pure lamps of devotion bright.'
  ],
  [
    'मोहब्बत में हिसाब-किताब की कॉपी नहीं रखते,\nकिसने ज़्यादा किया इसका तराज़ू नहीं तकते,\nसमर्पण जहाँ दोनों तरफ़ से बेहिसाब बहता हो,\nवहीं रिश्ते सदियों तक हरे-भरे हैं दिखते।',
    'True love keeps zero ledgers of score,\nRefusing scales measuring who gave more,\nWhere mutual care flows uncounted daily,\nRelationships flourish green across decades.'
  ],
  [
    'दरिया सी रवानी है मेरी मोहब्बत में तेरे लिए,\nपहाड़ सी मज़बूती है हर वादे में तेरे लिए,\nबदल जाएँ भले चारों दिशाएँ वक़्त के फेर से,\nध्रुवतारे सा अटल है मेरा प्यार तेरे लिए।',
    'Flowing steady like rivers toward your heart,\nGrounded firm as mountains inside promises,\nEven should compass winds shift around,\nConstant as pole stars shines devotion.'
  ],
  [
    'मोहब्बत को ख़ूबसूरत चेहरे नहीं सच्चे दिल चाहिए,\nतूफ़ान में साथ खड़े रहने वाले साहिल चाहिए,\nसज-धज कर तो हर कोई अच्छा दिख लेता है यहाँ,\nबिखरे हाल में भी अपनाने वाला क़ाबिल चाहिए।',
    'Real love seeks honest hearts over glamour,\nSteadfast shores standing calm amid storms,\nAnyone admires polished perfection easily,\nRare souls embrace weathered vulnerability.'
  ],
  [
    'तेरी एक आहट से खिल उठता है मन का उपवन,\nतेरी मोहब्बत से महकता है मेरा सादा जीवन,\nरब का शुक्र है जिसने तुझे हमसफ़र चुना मेरा,\nतेरे संग पावन हो गया साँसों का हर बंधन।',
    'Your approaching step brightens inner groves,\nFragrance of love blesses humble days,\nGrateful heaven chose your hand beside mine,\nSanctifying every breath shared together.'
  ],
  [
    'मोहब्बत वो आईना है जिसमें ख़ुदा नज़र आता है,\nदिल का मैल धुलकर इंसान निखर जाता है,\nनफ़रत बोने वालों ने क्या पाया इतिहास उठाकर देखो,\nमोहब्बत बाँटने वाला ही अमर कहलाता है।',
    'Love holds mirrors reflecting divine grace,\nWashing hearts clean toward noble light,\nHistory forgets merchants of bitterness,\nImmortalizing souls generous with warmth.'
  ],
  [
    'न सोने के महल माँगे न सितारों का हार माँगा,\nमैंने तुझसे बस इज़्ज़त भरा सच्चा प्यार माँगा,\nमोहब्बत की दौलत से अमीर रहे आँगन हमारा,\nहर सुबह बस तेरी मुस्कान का दीदार माँगा।',
    'Asking neither golden halls nor starry crowns,\nSeeking solely respectful honest affection,\nRich remains our courtyard through warmth,\nWishing simply morning glimpses of your smile.'
  ],
  [
    'मोहब्बत जब मुकम्मल हो तो घर मंदिर बन जाता है,\nहर छोटा सा पल त्योहार के अंदर ढल जाता है,\nथकान उतर जाती है दरवाज़े के बाहर ही सारी,\nजब अपना हमसफ़र मुस्कुरा कर गले मिल जाता है।',
    'Fulfilled love turns simple homes sacred,\nTransforming ordinary hours into festival,\nWeariness drops right outside front doors,\nMet warmly by a companion embrace.'
  ],
  [
    'काग़ज़ पर लिख दूँ तो ग़ज़ल बन जाती है मोहब्बत,\nआँखों में उतर आए तो कँवल बन जाती है मोहब्बत,\nसंभाल कर रखो इस नाज़ुक तोहफ़े को सीने में,\nसच्चे इंसानों की सबसे बड़ी अक्ल व बल है मोहब्बत।',
    'Written across paper devotion turns lyric,\nShining inside eyes it blooms lotus-pure,\nTreasure this delicate gift beneath ribs,\nGentle love remains humanity truest strength.'
  ],
  [
    'तेरी ख़ामोशी भी सुन लेता है मोहब्बत वाला दिल,\nबिना पते के ढूँढ लेता है तेरी मंज़िल,\nरूह के तार जब जुड़ जाते हैं ऊपर वाले के हुक्म से,\nकोई फ़ासला फिर बना नहीं पाता मुश्किल।',
    'Loving hearts hear even unspoken quietness,\nFinding kindred paths without street signs,\nOnce heaven links soul strings together,\nNo distance proves insurmountable.'
  ],
  [
    'मोहब्बत में रूठना भी है और प्यार से मनाना भी,\nएक-दूसरे की ख़ामियों को हँसकर छुपाना भी,\nपरफेक्ट कोई नहीं होता इस ज़मीन के ऊपर दोस्त,\nखूबसूरत है दो अधूरे लोगों का साथ निभाना भी।',
    'Affection holds gentle pouts alongside coaxing,\nSheltering human flaws warmly together,\nNobody walks flawless across earth friend,\nBeauty lives inside imperfect loyalty.'
  ],
  [
    'बारिश की पहली बूँद सी पावन है मोहब्बत तेरी,\nतपते सहरा में बदली सावन है मोहब्बत तेरी,\nजी भर कर भीग जाने दे अपनी चाहत के रंग में,\nमेरे जन्मों के पुण्य का आँगन है मोहब्बत तेरी।',
    'Pure as first raindrops feels your love,\nCooling desert heat like monsoon clouds,\nLet your tender hues drench my spirit,\nBlessing lifetimes inside one courtyard.'
  ],
  [
    'मोहब्बत कभी बूढ़ी नहीं होती वक़्त के गुज़रने से,\nऔर गहरी हो जाती है साथ धूप में चलने से,\nकाँपते हाथों से भी जब कोई पानी का गिलास दे,\nअसली इश्क़ चमकता है उसी परवाह के पलने से।',
    'True love never ages across passing decades,\nDeepening steadily walking sunbeams together,\nOffering water gently with trembling hands,\nReveals timeless devotion shining clearest.'
  ],
  [
    'दिल की आख़िरी धड़कन तक मोहब्बत निभाएँगे हम,\nवफ़ा की पाक मिसाल ज़माने को दिखाएँगे हम,\nमिट्टी में मिल जाए भले ये फ़ानी जिस्म एक दिन,\nख़ुशबू बनकर तेरी राहों में बिछ जाएँगे हम।',
    'Honoring devotion faithful till final heartbeat,\nSetting quiet examples of steadfast care,\nEven after mortal frames return to earth,\nLingering like fragrance along your path.'
  ]
];

// 36. Smile Shayari (30 unique 25-40 word poems)
const SMILE_POEMS: readonly RawPoemTuple[] = [
  [
    'हल्की सी मुस्कान चेहरे का सबसे सुंदर गहना है,\nमुश्किल घड़ी में भी हँसकर आगे बढ़ते रहना है,\nएक छोटी सी स्माइल कितने दिलों का बोझ घटा दे,\nउदासी छोड़कर खुशमिज़ाज बनकर ज़िंदा रहना है।',
    'A gentle smile adorns faces loveliest of all,\nStepping calmly forward past testing hours,\nOne warm grin lightens heavy hearts nearby,\nLiving cheerfully lifts spirits everywhere.'
  ],
  [
    'जब तुम मुस्कुराते हो तो मौसम गुलाबी हो जाता है,\nउलझा हुआ हर सवाल पल में जवाबी हो जाता है,\nसंभाल कर रखा करो अपने होठों की इस हँसी को,\nतुम्हें हँसता देखकर हमारा दिन नवाबी हो जाता है।',
    'Your bright smile paints grey weather rosy,\nUntangling puzzling worries within moments,\nGuard that cheerful grace upon your lips,\nSeeing you happy makes days royal.'
  ],
  [
    'पैसा नहीं लगता मुस्कुरा कर किसी से मिलने में,\nजैसे वक़्त नहीं लगता धूप से कली खिलने में,\nबाँट दिया करो मुस्कान राह चलते उदास चेहरों को,\nबड़ा सुकून मिलता है दिलों की दरारें सिलने में।',
    'Sharing warm smiles costs zero coin at all,\nOpening hearts swiftly like sunlit buds,\nOffer cheerful kindness along quiet streets,\nMending weary moods brings deep peace.'
  ],
  [
    'तस्वीर तब अच्छी आती है जब मुस्कान सच्ची हो,\nदिल में सादगी रहे और नीयत बिल्कुल अच्छी हो,\nफ़िल्टर से तो सिर्फ़ चेहरे का रंग निखरता है दोस्त,\nअसली चमक वो है जो बच्चों सी हँसी कच्ची हो।',
    'Portraits shine brightest through honest smiles,\nBacked by pure intent and inner warmth,\nCamera filters polish mere surface hues,\nChildlike laughter radiates timeless glow.'
  ],
  [
    'हज़ारों ग़म छुपा कर भी जो मुस्कुराना जानते हैं,\nवही लोग ज़िंदगी को सही मायने में पहचानते हैं,\nरोने से तकलीफ़ें दोगुनी हो जाती हैं अक्सर यहाँ,\nस्माइल रखने वाले तूफ़ानों में भी राह छानते हैं।',
    'Smiling calmly despite carrying quiet burdens,\nShows mastery over life shifting tides,\nConstant weeping doubles perceived distress,\nCheerful poise navigates fierce storms.'
  ],
  [
    'तेरी एक मुस्कान पर सारा गुस्सा पिघल जाता है,\nरूठा हुआ मन तुरंत अपनी ज़िद बदल जाता है,\nक्या जादू छुपा है तेरे गालों के डिंपल में बता,\nअच्छा-ख़ासा सख़्त इंसान भी मचल जाता है।',
    'One flash of your smile melts irritation,\nSoftening stubborn moods almost instantly,\nSuch charm rests inside cheerful dimples,\nWinning over even guarded hearts.'
  ],
  [
    'सुबह उठकर आईने को एक प्यारी स्माइल दिया करो,\nख़ुद की पीठ थपथपा कर नया दिन जिया करो,\nदुनिया तो कमियाँ निकालने को तैयार बैठी है रोज़,\nतुम अपनी मुस्कान से हर ताने को सिया करो।',
    'Greet morning mirrors wearing a warm smile,\nEncourage yourself kindly starting each day,\nCritics stand ready pointing out flaws,\nAnswer negativity calmly through bright grace.'
  ],
  [
    'फूल खिलते हैं डाली पर मुस्कान खिलती है होठों पर,\nमरहम सा काम करती है ये गहरी चोटों पर,\nकभी कम मत पड़ने देना चेहरे की इस रौनक को,\nहँसता इंसान राज करता है सबके दिलों के वोटों पर।',
    'Blossoms grace branches as smiles grace lips,\nApplying gentle balm across tired bruises,\nNever let cheerful radiance dim indoors,\nWarmhearted smiles win universal goodwill.'
  ],
  [
    'मुस्कुराहट वो भाषा है जिसे गूंगा भी बोल लेता है,\nबहरा भी देखकर उसका मीठा अर्थ तौल लेता है,\nन किसी शब्दकोश की ज़रूरत पड़ती है इसके लिए,\nएक सच्ची स्माइल बंद दरवाज़े खोल देता है।',
    'Smiles speak clearly without needing sound,\nUnderstood warmly across every human heart,\nRequiring zero dictionary along pathways,\nGenuine cheer unlocks guarded doors.'
  ],
  [
    'चेहरे पर मुस्कान रखो तो दुश्मन भी हैरान रहता है,\nसोचता है किस मिट्टी का बना ये इंसान रहता है,\nशिकन माथे पर लाकर कमज़ोरी क्यों दिखाना अपनी,\nहँसमुख मिज़ाज हर साज़िश पर भारी मान रहता है।',
    'Steady smiles leave ill-wishers perplexed,\nWondering whence springs unshakable calm,\nWhy wear anxious frowns advertising strain,\nCheerful composure outshines petty schemes.'
  ],
  [
    'बच्चे की निश्छल मुस्कान में साक्षात भगवान बसते हैं,\nजहाँ न कपट होता है न मतलब के फंदे कसते हैं,\nसीख लो थोड़ा उन नन्हे फ़रिश्तों से जीने का हुनर,\nजो गिरकर चोट लगने के बाद भी तुरंत हँसते हैं।',
    'Divine grace shines inside infant smiles,\nUntouched by guile or selfish calculation,\nLearn gentle resilience watching little ones,\nLaughing brightly moments after stumbling.'
  ],
  [
    'तेरी मुस्कान जैसे बादलों के पार निकली धूप हो,\nसादगी में लिपटा हुआ सबसे सलोना रूप हो,\nनज़र उतार लिया करो अपनी कभी-कभी शाम ढले,\nक्योंकि तेरी हँसी पर फ़िदा हर कोई ख़ूब हो।',
    'Your smile breaks warm like sun past clouds,\nRadiating effortless beauty wrapped in grace,\nKeep safe that bright sparkle at twilight,\nEnchanting every heart fortunate to see.'
  ],
  [
    'थके हुए घर लौटो और माँ मुस्कुरा कर दरवाज़ा खोले,\nसारी दुनिया की दौलत उस एक पल के आगे डोले,\nअपनों की स्माइल ही तो मेहनत का असली इनाम है,\nजिसके आगे फीके पड़ जाते हैं सोने के तोले।',
    'Returning tired to mother welcoming smile,\nOutweighs chests of worldly treasure easily,\nFamily laughter crowns honest daily labor,\nShining richer than measured gold.'
  ],
  [
    'थोड़ा मुस्कुरा दीजिए ज़िंदगी छोटी सी कहानी है,\nकल किसने देखा है आज की घड़ी सुहानी है,\nमाथे की लकीरें खींचने से हल नहीं निकलते यारो,\nहँसते हुए चलना ही समझदारों की निशानी है।',
    'Smile gently since life unfolds briefly,\nTomorrow hides unseen while today glows,\nFurrowed brows rarely solve tangled knots,\nWalking cheerfully marks true wisdom.'
  ],
  [
    'तेरी आँखों से शुरू होकर जो होंठों तक आती है,\nवो धीमी सी मुस्कान मेरे होश उड़ा ले जाती है,\nकहने को तो हज़ारों हसीन नज़ारे देखे हैं मैंने,\nपर तेरी स्माइल सबसे ऊपर मुक़ाम पाती है।',
    'Starting inside bright eyes reaching soft lips,\nThat quiet smile captivates me completely,\nAmong countless lovely sights witnessed afar,\nYour gentle laughter holds highest place.'
  ],
  [
    'मुस्कान की एक किरण अँधेरे कमरे को भर देती है,\nटूटे हुए हौसले में नई ऊर्जा का स्वर देती है,\nजब कुछ समझ न आए हालात के चक्रव्यूह में,\nतब शांत मुस्कुराहट भी आधा डर हर लेती है।',
    'One ray of smiling warmth brightens rooms,\nBreathing fresh heart into tired resolve,\nWhenever complex mazes cloud clear sight,\nCalm smiles dissolve half our fear.'
  ],
  [
    'हँसते चेहरों के साथ हर कोई बैठना पसंद करता है,\nउदास सायों से तो परिंदा भी दूर उड़ता है,\nबनाए रखो अपने मिज़ाज में थोड़ी सी मिठास सदा,\nमुस्कान से ही इंसान इंसान के क़रीब जुड़ता है।',
    'People gather gladly around cheerful spirits,\nWhile gloomy moods scatter company away,\nKeep gentle sweetness alive inside manners,\nWarm smiles bridge hearts effortlessly.'
  ],
  [
    'चाँदनी भी फीकी लगे जब तू खिलखिला कर हँस दे,\nसूखे बाग़ों में जैसे सावन अचानक बरस दे,\nदुआ है मेरी कभी मुरझाने न पाए ये मुस्कान तेरी,\nरब तेरे हिस्से में ख़ुशियों के सारे बरस दे।',
    'Moonbeams pale beside your joyful laughter,\nRefreshing dry gardens like sudden rain,\nPraying your bright smile never wilts,\nBlessed richly across coming years.'
  ],
  [
    'झूठी शान से कहीं बेहतर एक सच्ची मुस्कान है,\nअदब और स्नेह से मुस्कुराना नेक इंसान की पहचान है,\nअकड़ कर चलने से कद बड़ा नहीं होता किसी का,\nहँसकर झुकने वाले का ही जग में सम्मान है।',
    'Sincere smiles outshine hollow arrogance,\nPolite warmth reveals noble character,\nStiff pride never elevates human stature,\nGracious humility earns lasting respect.'
  ],
  [
    'कैमरे के लिए नहीं अपने दिल के लिए मुस्कुराओ,\nदिखावे की भीड़ छोड़ खुद की ख़ुशी जगाओ,\nजब भीतर का आँगन संतोष से महकने लगता है,\nतब चेहरे पर असली स्माइल का नूर सजाओ।',
    'Smile genuinely for inner joy beyond cameras,\nWaking quiet peace past public show,\nOnce contentment perfumes your heart courtyard,\nNatural radiance lights your face.'
  ],
  [
    'एक अजनबी की मुस्कान भी सफ़र आसान कर देती है,\nइंसानियत अभी ज़िंदा है इसका प्रमाण भर देती है,\nकंजूसी मत करो कभी होठों की इस नेमत में दोस्त,\nछोटी सी हँसी रूठे माहौल में जान भर देती है।',
    'Even stranger kind smiles lighten travel,\nProving human warmth still breathes strong,\nNever ration generosity upon your lips,\nBrief cheer revives tense rooms.'
  ],
  [
    'बारिश के बाद जैसे इंद्रधनुष आसमान सजाता है,\nआँसुओं के बाद मुस्कुराना और भी निखर आता है,\nजिसने दुख सहकर भी अपनी स्माइल बचाए रखी,\nवही ज़िंदगी का सबसे सुंदर कलाकार कहलाता है।',
    'Like rainbows arching bright past rainstorms,\nSmiles following tears glow doubly pure,\nPreserving gentle cheer despite hardship,\nMarks finest artistry in living.'
  ],
  [
    'तेरी स्माइल मेरी सारी थकान चुटकियों में मिटा दे,\nबिगड़े हुए मूड को पल भर में हँसा दे,\nकिसी दवाई की ज़रूरत नहीं पड़ती इस दिल को,\nबस तू सामने बैठकर थोड़ा सा मुस्कुरा दे।',
    'Your smile erases exhaustion within moments,\nLifting heavy moods straight into laughter,\nNo tonic matches sitting across from you,\nWatching gentle joy brighten your eyes.'
  ],
  [
    'मुस्कान संक्रामक होती है एक से दूसरे तक जाती है,\nचुपके से सबके चेहरों पर उजाला फैलाती है,\nशुरुआत तुम कर दो आज किसी को हँसकर देखकर,\nनेकी की ये लहर लौटकर तुम्हारे ही पास आती है।',
    'Warm smiles ripple naturally person to person,\nSpreading quiet brightness down streets,\nBegin today greeting someone kindly,\nWaves of goodwill circle back home.'
  ],
  [
    'रूठे यार को मनाने का सबसे सस्ता उपाय स्माइल है,\nबिगड़ी बात बनाने की सबसे पक्की फ़ाइल स्माइल है,\nबहस जीतकर भी अक्सर रिश्ते हार जाते हैं लोग,\nदिल जीतने वाली सबसे प्यारी स्टाइल स्माइल है।',
    'Warm smiles mend sulking friendships fastest,\nSmoothing misunderstandings better than debate,\nWinning arguments often loses affection,\nGentle cheer wins hearts gracefully.'
  ],
  [
    'नक़ली दुनिया में अपनी असली मुस्कान ज़िंदा रखो,\nभीतर के बच्चे को हमेशा आज़ाद परिंदा रखो,\nउम्र तो बस गिनती है काग़ज़ों के हिसाब की यारो,\nहँसमुख चेहरा रखकर हर दौर को शर्मिंदा रखो।',
    'Keep authentic smiles alive amid artificiality,\nLet playful wonder soar free within,\nAge merely counts numbers across paper,\nCheerful spirits stay timelessly young.'
  ],
  [
    'जब लफ़्ज़ साथ छोड़ दें तब मुस्कान काम आती है,\nअनकहे आभार की सबसे मीठी तान सुनाती है,\nशुक्रिया कहने का इससे सुंदर तरीक़ा नहीं कोई,\nजो सीधा सामने वाले की रूह तक उतर जाती है।',
    'When words fall short smiles speak clearly,\nHumming sweet notes of unspoken thanks,\nNo finer gesture expresses gratitude,\nReaching straight into another heart.'
  ],
  [
    'हर सुबह तेरे चेहरे पर ताज़ा मुस्कान खिली रहे,\nग़म की हवा तेरे आँगन से कोसों दूर टली रहे,\nमेरी हर दुआ का हासिल बस इतनी सी ख्वाहिश है,\nतेरी हँसी में हमेशा खुशियों की मिश्री घुली रहे।',
    'May fresh smiles bloom across every morning,\nKeeping sorrowful winds far past your door,\nAll my prayers gather inside one wish,\nSweetening your laughter lifelong.'
  ],
  [
    'शांत समंदर सी गहरी होती है संतोषी की मुस्कान,\nन पाने का उतावलापन न खोने का गुमान,\nजिसने रब की रज़ा में राज़ी रहना सीख लिया,\nउसके चेहरे से कभी हटती नहीं प्यारी सी मुस्कान।',
    'Contented smiles run calm like deep oceans,\nFree from frantic greed or boastful pride,\nResting peacefully inside divine grace,\nKeeps serene light steady overhead.'
  ],
  [
    'स्माइल प्लीज़ कहकर ज़िंदगी रोज़ फ़ोटो खींचती है,\nअच्छे पलों की यादें हमारे मन में सींचती है,\nउदास बैठकर क्यों खराब करना आज का सुंदर फ्रेम,\nमुस्कुराहट ही खुशहाल कल को अपनी ओर खींचती है।',
    'Life snaps daily portraits asking warm smiles,\nWatering fond memories inside reflection,\nWhy dim today frame sitting downcast,\nCheerful poise draws brighter tomorrows.'
  ]
];

// 37. Kismat / Bhagya Shayari (30 unique 25-40 word poems)
const KISMAT_BHAGYA_POEMS: readonly RawPoemTuple[] = [
  [
    'भाग्य के दरवाज़े कर्म की चाबी से ही खुलते हैं,\nपसीने की बूँदों से ही बुरे दिन धुलते हैं,\nहाथ पर हाथ धरकर किस्मत को मत कोसो दोस्त,\nचलने वालों के क़दमों में ही रास्ते मिलते हैं।',
    'Doors of bhagya open through keys of action,\nHonest sweat washes hard seasons clean,\nNever sit idle blaming reluctant fortune,\nStepping forward reveals waiting roads.'
  ],
  [
    'किस्मत ने जो छीना उससे बेहतर लौटाएगी एक दिन,\nआज की कठिन परीक्षा कल रंग लाएगी एक दिन,\nअँधेरी सुरंग के उस पार सूरज खड़ा है तेरा,\nतेरी धैर्य भरी साधना भाग्य जगाएगी एक दिन।',
    'Fortune restores finer gifts past early loss,\nToday steep trial ripens into tomorrow reward,\nBright sunlight waits beyond dark tunnels,\nPatient perseverance awakens sleeping luck.'
  ],
  [
    'भाग्य का लिखा कोई मिटा नहीं सकता ये सच है,\nपर पुरुषार्थ से नया अध्याय लिखा जा सकता है,\nपत्थर में भी रास्ता बना लेती है बहती नदी,\nअटल संकल्प से हर संकट जीता जा सकता है।',
    'Written destiny holds undeniable weight indeed,\nYet determined effort pens fresh chapters,\nFlowing streams carve paths through solid stone,\nUnwavering resolve overcomes stern hurdles.'
  ],
  [
    'कभी किस्मत परखती है इंसान के भीतर का सब्र,\nहर देरी का मतलब नहीं होता उम्मीद की क़ब्र,\nसोना भी कुंदन बनता है आग की तपन झेलकर,\nचमकने से पहले सहना पड़ता है हथौड़ों का ज़ब्र।',
    'Fortune tests inner patience across seasons,\nDelays never mean burial of bright hope,\nGold refines pure enduring furnace heat,\nShining crowns follow testing strikes.'
  ],
  [
    'भाग्यवान वो नहीं जिसके पास सोने के भंडार हैं,\nभाग्यवान वो है जिसके पास सच्चे परिवार हैं,\nसुकून की रोटी और अपनों का निस्वार्थ दुलार मिले,\nवही किस्मत के सबसे अनमोल उपहार हैं।',
    'True fortune outshines vaults of cold gold,\nLiving richly surrounded by loving family,\nPeaceful bread shared beside selfless care,\nCrowns destiny finest earthly blessing.'
  ],
  [
    'किस्मत की हवा जब उल्टी दिशा में बहने लगे,\nपतंग की तरह इंसान दोगुनी ऊँचाई गहने लगे,\nविपरीत हालात ही असली उड़ान की परीक्षा लेते हैं,\nजहाँ कमज़ोर टूटे और साहसी शिखर पर रहने लगे।',
    'When winds of fortune blow squarely against,\nKites climb higher leaning into resistance,\nHeadwinds test genuine strength of wing,\nLifting resilient spirits toward high peaks.'
  ],
  [
    'माथे की लकीरों से ज़्यादा बाज़ुओं पर विश्वास रखो,\nभाग्य बदलने का अपने भीतर प्रबल अभ्यास रखो,\nईश्वर भी उसी रथ की डोर संभालता है रण में,\nजिस योद्धा के तरकश में कर्म का प्रयास रखो।',
    'Trust capable arms deeper than brow lines,\nPractice steady diligence shaping tomorrow,\nProvidence guides chariots along battlefields,\nWhere warriors draw arrows of honest effort.'
  ],
  [
    'अजब संयोग रचती है भाग्य की अदृश्य लेखनी यहाँ,\nअनजानी राहों पर मिल जाती है जीवन संगिनी यहाँ,\nसोचा कुछ और होता है इंसान ने अपने मन में,\nकिस्मत परोस देती है उससे सुंदर कहानी यहाँ।',
    'Unseen pens of destiny weave wondrous turns,\nIntroducing kindred companions down quiet lanes,\nMinds sketch modest plans indoors quietly,\nWhile grace unfolds lovelier tales ahead.'
  ],
  [
    'किस्मत रूठी हो तो भी मुस्कान मत खोना अपनी,\nकाँटों के बीच भी उम्मीद की फ़सल बोना अपनी,\nचक्र घूमता है समय का बिना किसी भेदभाव के,\nअमावस के बाद पूनम तय है ये बात पिरोना अपनी।',
    'Keep warm smiles even when luck tarries,\nSow hopeful seeds amid prickly brush,\nWheels of time turn impartially onward,\nFull moons inevitably follow dark nights.'
  ],
  [
    'भाग्य के भरोसे नाव छोड़ने वाले भँवर में फँसते हैं,\nपतवार थामने वाले तूफ़ान में भी रस्ते कसते हैं,\nकिस्मत साथ देती है सिर्फ़ पचास फ़ीसदी सफ़र में,\nबाक़ी पचास में इंसान के अपने हौसले बसते हैं।',
    'Drifting boats left passive spin in eddies,\nHands gripping oars steer past tempests,\nLuck walks halfway along journeys perhaps,\nCourageous grit completes remaining miles.'
  ],
  [
    'किसी के भाग्य में राजमहल तो किसी को संघर्ष मिला,\nहर प्राणी को अपने कर्मों का ही स्पर्श मिला,\nतुलना मत करो अपनी यात्रा की दूसरों की चमक से,\nतुम्हारे हिस्से भी रब का कोई ख़ास उत्कर्ष मिला।',
    'Some inherit ease while others forge grit,\nEvery journey carries distinct lessons,\nAvoid comparing footsteps against distant shine,\nUnique purpose awaits your quiet path.'
  ],
  [
    'जब भाग्य चमकता है तो मिट्टी भी सोना बनती है,\nसूखी डाली पर भी कोयल मधुर राग बुनती है,\nबस नेक नीयत और साफ़ दिल बनाए रखना अपना,\nकुदरत हर अच्छे इंसान की पुकार ज़रूर सुनती है।',
    'When fortune brightens humble clay gleams gold,\nSongbirds hum sweetly atop greening boughs,\nPreserve honest intent alongside pure heart,\nNature answers sincere goodness faithfully.'
  ],
  [
    'किस्मत ने कई बार गिराया मुझे ज़मीन की धूल में,\nहर बार सीख छुपी मिली मुझे अपनी ही भूल में,\nआज जो मज़बूती दिखती है मेरे खड़े होने के ढंग में,\nवो तराशी गई है दुर्भाग्य के कठोर स्कूल में।',
    'Fortune knocked footsteps down into dust,\nTeaching vital wisdom inside early missteps,\nSteady poise anchoring my stance today,\nGraduated strong from schools of trial.'
  ],
  [
    'सौभाग्य का सूरज आलस के आँगन में नहीं उगता,\nबिना तपे लोहा कभी मनचाहे आकार में नहीं झुकता,\nअपना भाग्य विधाता इंसान स्वयं भी होता है दोस्त,\nजिसका क़दम रुकावटें देखकर राह में नहीं रुकता।',
    'Suns of good fortune skip lazy courtyards,\nCold iron bends only inside glowing forge,\nPeople co-author destiny through perseverance,\nRefusing halts before roadside boulders.'
  ],
  [
    'माँ-बाप का आशीर्वाद सबसे बड़ा सौभाग्य कवच है,\nइसके आगे हर ग्रह-नक्षत्र का डर बेअसर सच है,\nकिस्मत की टेढ़ी रेखाएँ भी सीधी हो जाती हैं,\nजहाँ बुजुर्गों के चरणों में झुकता मस्तक स्वच्छ है।',
    'Parental blessings form strongest armor of luck,\nOutshining anxious fears over planetary charts,\nCrooked lines straighten remarkably smoothly,\nWhere humble respect honors elders.'
  ],
  [
    'कभी एक पल में बदल जाता है वर्षों का अंधकार,\nभाग्य खोल देता है अचानक खुशियों के सौ द्वार,\nनिराश होकर मत फेंकना अपने हाथ के औज़ार कभी,\nक्या पता अगली ही चोट से फूट पड़े जलधार।',
    'Years of shadow lift inside single moments,\nFortune flings open unexpected doors of joy,\nNever drop honest tools in discouragement,\nNext steady strike may release clear springs.'
  ],
  [
    'किस्मत और मेहनत दो पहिये हैं जीवन गाड़ी के,\nदोनों के संतुलन से कटते हैं सफ़र पहाड़ी के,\nसिर्फ़ भाग्य जपने से मंज़िल क़रीब नहीं आती यारो,\nपाँव चलाने पड़ते हैं काँटों भरी झाड़ी के।',
    'Luck and labor roll like twin chariot wheels,\nBalancing mountain climbs steadily upward,\nChanting fortune alone moves zero miles,\nFeet must stride past thorny thickets.'
  ],
  [
    'भाग्य में जो नहीं मिला उसका शोक मनाना छोड़ दो,\nजो मिला है उसकी क़दर करके ख़ुद को जोड़ लो,\nअसंतोष में राजा भी दरिद्र समान जीता है यहाँ,\nकृतज्ञता से अपने साधारण भाग्य को मोड़ लो।',
    'Release mourning over whatever stayed ungiven,\nTreasure blessings resting inside open palms,\nRestless kings feel poor despite palaces,\nGratitude enriches humble fortunes brightly.'
  ],
  [
    'बंद मुट्ठी लेकर आया था हर जीव इस धरती पर,\nअपना भाग्य खोला सबने अपनी-अपनी करनी पर,\nअच्छे बीज बोओगे तो मीठी छाँव ज़रूर मिलेगी,\nभरोसा रखो कर्मों की सनातन और सच्ची कथनी पर।',
    'Closed fists accompanied every birth onshore,\nUnfolding destiny through chosen daily deeds,\nPlanting wholesome seeds grows shady trees,\nTrust timeless laws of honest harvest.'
  ],
  [
    'किस्मत के खेल भी कितने निराले होते हैं देखो,\nकोयले की खान में ही हीरे के उजाले होते हैं देखो,\nकठिन परिस्थितियों को अपना दुर्भाग्य मत समझना,\nअंधकार के गर्भ में ही सवेरे पाले होते हैं देखो।',
    'Marvel how wondrously fortune arranges life,\nTucking bright diamonds deep inside coal seams,\nNever misread harsh surroundings as curse,\nRadiant dawns gestate inside dark night.'
  ],
  [
    'भाग्य की देवी साहसी मन का वरण करती है सदा,\nकायर की दहलीज़ से लौट जाती है ख़ुशी अदा,\nउठो और चुनौती स्वीकार करो सामने खड़े वक़्त की,\nमेहनत के पसीने पर किस्मत ख़ुद होती है फ़िदा।',
    'Good fortune favors courageous spirits consistently,\nStepping past thresholds ruled by timidity,\nRise boldly meeting present challenges head-on,\nDestiny admires brows glistening with effort.'
  ],
  [
    'न जाने किस नेक कर्म का फल बनकर तुम मिले,\nमेरे सूने भाग्य में बहारों के सुंदर फूल खिले,\nकिस्मत से अब कोई शिकायत बाकी नहीं रही मुझे,\nतेरे आने से मिट गए ज़िंदगी के सारे गिले।',
    'What past kindness blossomed bringing you near,\nBlooming spring flowers across quiet fortune,\nZero complaint remains toward destiny today,\nYour arrival dissolved old grievances clean.'
  ],
  [
    'काग़ज़ की कश्ती भी पार लग जाती है जब भाग्य जागे,\nबड़ी-बड़ी नौकाएँ भी डूब जाती हैं घमंड के आगे,\nविनम्रता से स्वीकार करो समय के हर उतार-चढ़ाव को,\nरब के हाथ में हैं सबकी किस्मतों के धागे।',
    'Paper boats cross safely when grace assists,\nProud galleons founder boasting over waves,\nGreet rising and ebbing tides with humility,\nHeaven holds threads of every destiny.'
  ],
  [
    'दुर्भाग्य के बादल कभी स्थायी घर नहीं बनाते,\nगरज-बरस कर आख़िर नीला आकाश ही दिखाते,\nधैर्य की छतरी ताने रखो थोड़ी देर और मित्र,\nअच्छे दिन आने से पहले थोड़ा धैर्य आज़माते।',
    'Clouds of misfortune never camp permanently,\nClearing eventually toward wide blue skies,\nHold umbrellas of patience steady friend,\nBright seasons test calm before arriving.'
  ],
  [
    'भाग्य का रोना रोने से तक़दीर नहीं संवरती है,\nसकारात्मक सोच से ही सोई किस्मत निखरती है,\nअँधेरे को कोसने के बदले एक छोटा दीप जलाओ,\nउसी लौ से दुर्भाग्य की कालिख बिखरती है।',
    'Lamenting bad luck never polishes tomorrow,\nConstructive thought awakens dormant promise,\nLight one humble lamp rather than curse night,\nSmall flames scatter surrounding gloom.'
  ],
  [
    'हमने अपनी किस्मत को ईमानदारी के साँचे में ढाला,\nशॉर्टकट छोड़ स्वाभिमान का कठिन रास्ता पाला,\nदेर से ही सही पर जो सुकून नसीब हुआ आज,\nउसने हमारे साधारण भाग्य को गौरवशाली कर डाला।',
    'Shaping our fortune inside molds of honesty,\nChoosing dignified effort over easy shortcuts,\nDelayed perhaps yet deep peace arrived,\nCrowning simple lives with quiet honor.'
  ],
  [
    'दान और करुणा से सोया हुआ भाग्य भी जाग उठता है,\nकिसी बेसहारे की दुआ से संकट दूर भाग उठता है,\nसिर्फ़ अपने लिए जीना भी कोई जीना है भला,\nपरोपकार से किस्मत में सौभाग्य का राग उठता है।',
    'Generosity and kindness awaken sleeping grace,\nBlessings from helped souls scatter trouble,\nLiving solely inward shrinks human spirit,\nService tunes fortune toward harmony.'
  ],
  [
    'किस्मत के पन्नों पर कभी पूर्णविराम मत लगाना,\nहर असफलता के बाद दोगुने उत्साह से आना,\nजब तक साँसों की पूँजी शेष है तुम्हारे पास,\nतब तक मुमकिन है अपना स्वर्णिम भाग्य बनाना।',
    'Never place full stops across pages of fate,\nReturn past setbacks carrying renewed vigor,\nLong as capital of breath remains yours,\nGolden chapters stay well within reach.'
  ],
  [
    'तारों की चाल नहीं अपने कदमों की चाल सुधारो,\nआलस त्याग कर अपने सोए हुए हुनर को पुकारो,\nभाग्य स्वयं आकर तिलक करेगा तुम्हारे माथे पर,\nबस निश्चय की छेनी से अपना व्यक्तित्व निखारो।',
    'Refine your daily stride over reading stars,\nShake off inertia calling hidden craft forth,\nFortune itself will crown steady brows,\nSculpting character patiently through resolve.'
  ],
  [
    'सूरज सा चमके भाग्य आपका यही मंगल कामना है,\nहर शुभ संकल्प सिद्धि पाए यही दिल की भावना है,\nकिस्मत और कर्म का सुंदर संगम रहे जीवन में,\nसुख-शांति से भरा रहे आपका हर आशियाना है।',
    'May your fortune shine bright like morning sun,\nFulfilling noble aims through steady grace,\nBlending honest deed alongside kind destiny,\nBlessing your household with lasting peace.'
  ]
];

// 38. Funny / Jokes / Prank / Comedy / Chutkule Shayari (60 unique 25-40 word poems)
const FUNNY_POEMS: readonly RawPoemTuple[] = [
  [
    'सोमवार सुबह कसम खाई कि आज से डाइटिंग पक्की है,\nशाम ढलते ही गरम समोसों ने मेरी नीयत परखी है,\nचटनी देखते ही सारे फिटनेस नियम हवा में उड़ गए,\nपेट बोला भाई कसरत कल करेंगे आज दावत अच्छी है।',
    'Swore solemnly Monday morning that strict dieting begins today,\nBy evening steaming hot samosas tested my willpower hard,\nOne glance at tangy chutney blew every fitness rule away,\nMy stomach whispered gym waits tomorrow feast well tonight.'
  ],
  [
    'सुबह पाँच बजे उठने को चार अलार्म लगाए मैंने,\nनींद में ही चारों स्नूज़ कर सुलाए मैंने,\nदस बजे जब सूरज सीधा चेहरे पर चमकने लगा,\nबड़े सपनों के सारे वादे कल पर भगाए मैंने।',
    'Set four loud alarms determined to rise at five sharp,\nHalf asleep my thumb snoozed every single one to rest,\nWhen ten o clock sunshine beamed straight across my face,\nI figured grand ambitions look much better starting tomorrow.'
  ],
  [
    'दोस्त ने पाँच सौ रुपये उधार माँगे बड़ी मासूमियत दिखाकर,\nकहा कल सुबह ही लौटा दूँगा तेरी कसम खाकर,\nछह महीने बीत गए अब वो गली बदलकर निकलता है,\nपैसे माँगो तो नेटवर्क गायब होने का नाटक रचाता है।',
    'My friend borrowed five hundred rupees looking super innocent,\nPromising faithfully to pay back first thing next morning,\nSix months later he sneaks around taking alternate lanes,\nMention money and his phone signal mysteriously vanishes.'
  ],
  [
    'परीक्षा हॉल में पर्चा देखकर दिमाग़ एकदम शून्य हो गया,\nछत के पंखे की पंखुड़ियाँ गिनना मेरा पुण्य हो गया,\nआगे वाला भी मेरी ही शीट में झाँककर मुस्कुराया,\nदोनों नादानों का भविष्य एक साथ ही धन्य हो गया।',
    'Seeing the exam paper turned my brain completely blank,\nCounting ceiling fan blades became my main occupation,\nThe student ahead peeked hopefully back toward my sheet,\nTwo clueless legends sharing zero answers smiled together.'
  ],
  [
    'नए साल के जोश में साल भर की जिम फ़ीस भरी,\nपहले दिन डंबल उठाकर दर्पण में दस सेल्फ़ी करी,\nदूसरे दिन बदन दर्द ने ऐसा बिस्तर से चिपकाया यार,\nअब जिम के रास्ते से भी मेरी गाड़ी डरकर गुज़री।',
    'Paid an annual gym membership riding New Year excitement,\nSnapped ten mirror selfies lifting dumbbells on day one,\nDay two muscle soreness glued me flat onto my mattress,\nNow even driving past that gym street scares my scooter.'
  ],
  [
    'रिश्तेदार घर आते ही पूछते बेटा आगे क्या इरादा है,\nपढ़ाई पूरी हुई या अभी सोने का विचार ज़्यादा है,\nसारे बिस्कुट खाकर मुफ़्त की नसीहतें दे जाते हैं,\nजैसे मेरे भविष्य की चिंता से वज़न आधा है।',
    'Relatives walk indoors asking immediately about future plans,\nWondering if studies ended or afternoon naps still rule,\nFinishing every tea biscuit they hand out free lectures,\nActing like worrying over my career keeps them awake.'
  ],
  [
    'मोबाइल की बैटरी जब एक प्रतिशत पर लाल चमकती है,\nइंसान की रफ़्तार चीते से भी ज़्यादा तेज़ भागती है,\nचार्जर ढूँढने में सोफ़े के कुशन ऐसे उछलते हैं मानो,\nसाँसें हमारी नहीं उस छोटे डिब्बे में ही बसती हैं।',
    'When phone battery flashes crimson down at one percent,\nHuman sprinting speed suddenly beats Olympic cheetahs,\nSofa cushions fly everywhere hunting the white charger,\nAs though our own heartbeat depended on that socket.'
  ],
  [
    'सिरदर्द हो या दिल दुखे गरम चाय असली इलाज है,\nअदरक इलायची की खुशबू से सुधरता हर मिज़ाज है,\nडॉक्टर भी हैरान हैं हमारा देसी नुस्खा देखकर,\nतीन कप चाय पर टिका हमारा सारा कामकाज है।',
    'Whether headache strikes or mood dips tea cures everything,\nGinger and cardamom aroma resets our temper instantly,\nEven doctors marvel watching our household remedy work,\nThree steaming cups power every single task we finish.'
  ],
  [
    'यार फ़ोन पर बोला दो मिनट में चौराहे पहुँच रहा,\nअसल में अभी तौलिया लपेटकर बाथरूम ही ढूँढ रहा,\nदेसी दोस्तों के दो मिनट का गणित आइंस्टीन भी हारा,\nआधे घंटे बाद आकर कहता ट्रैफ़िक ने रोक रखा।',
    'On call my buddy swore reaching the corner in two minutes,\nIn reality he was still hunting his towel near bathroom,\nEven Einstein failed decoding Indian friend two-minute math,\nArriving forty minutes late blaming imaginary traffic jams.'
  ],
  [
    'शादी की दावत में प्लेट पर कुतुब मीनार सजाया उसने,\nपनीर, गुलाबजामुन और रायता एक ही कोने मिलाया उसने,\nमुफ़्त के खाने में पेट की गुंजाइश दोगुनी बढ़ जाती है,\nलिफ़ाफ़े के सौ रुपये का पूरा हिसाब वसूला उसने।',
    'At wedding buffets he stacked his plate tall like a tower,\nMixing paneer curry gulab jamun and raita in one corner,\nFree banquets magically double human stomach capacity,\nRecovering full value for his hundred-rupee gift envelope.'
  ],
  [
    'माँ की उड़ती चप्पल का निशाना मिसाइल से सटीक है,\nकोने में छुप जाओ फिर भी लगना एकदम ठीक है,\nबचपन के सारे शरारती भूत पल में उतर जाते,\nमाँ की आँखों के आगे हर पहलवान फीका है।',
    'Mom flying slipper locks targets sharper than radar missiles,\nEven ducking behind doors rarely saves mischievous kids,\nChildhood pranks evaporate within half a split second,\nBefore mother stern glare the toughest wrestler behaves.'
  ],
  [
    'ऑनलाइन फोटो में कुर्ता राजकुमार जैसा चमक रहा था,\nपार्सल खुला तो पोछा बनने को कपड़ा लटक रहा था,\nसस्ते डिस्काउंट के लालच ने फिर मज़ेदार धोखा दिया,\nपहनकर निकला तो मोहल्ले का कुत्ता भी भड़क रहा था।',
    'Online catalog photos showed a royal designer tunic,\nUnboxed at home the fabric looked ready for floor mopping,\nFlash sale bargains tricked my hopeful wallet once again,\nStepping outside even street puppies barked in confusion.'
  ],
  [
    'गोवा जाने का प्लान हमारे ग्रुप में पाँच साल पुराना है,\nहर महीने बजट बनता और आख़िर में कैंसिल कराना है,\nएक के पापा नहीं मानते दूसरे की छुट्टी अटक जाती,\nशायद बुढ़ापे में लाठी लेकर ही समंदर नहाना है।',
    'Our friend group Goa trip plan just turned five years old,\nBudgets get drafted monthly before someone backs out fast,\nOne dad refuses permission while another loses leave days,\nLooks like we will visit beaches holding walking sticks.'
  ],
  [
    'नाई से कहा भाई बस थोड़े कोने सँवार देना,\nउसने कैंची चलाकर सिर का नक़्शा उतार देना,\nशीशे में शक्ल देखकर मन ही मन रोना आया,\nफिर भी मुस्कुराकर पैसे गिनते बढ़िया पुकार देना।',
    'Asked the barber politely to trim just tiny side edges,\nHis scissors enthusiastically cleared half my hairline,\nStaring into the mirror my soul quietly weeps inside,\nYet I nod smilingly pay cash and mumble looks great.'
  ],
  [
    'पहली तारीख़ को तनख़्वाह मेहमान बनकर खाते में आती है,\nतीसरी तारीख़ तक बिल चुकाकर चुपचाप विदा हो जाती है,\nबाक़ी के सत्ताईस दिन जेब में सिर्फ़ रसीदें बजती हैं,\nमहीने के अंत में खिचड़ी भी शाही बिरयानी भाती है।',
    'Salary visits my bank account briefly on the first morning,\nBy the third afternoon bills escort every rupee right out,\nFor twenty-seven days only paper receipts rustle inside,\nMaking plain khichdi taste royal during month-end week.'
  ],
  [
    'डॉक्टर की लिखावट तो ख़ुद ब्रह्मा जी भी पढ़ न पाएँ,\nकेवल मेडिकल स्टोर वाले भैया उसका रहस्य सुलझाएँ,\nआड़ी-तिरछी लकीर देखकर तुरंत सही गोली निकाल देते,\nलगता है दोनों ने गुप्त भाषा के स्कूल साथ चलाए।',
    'Nobody on earth decodes a doctor scribbled prescription,\nExcept the neighborhood chemist squinting two seconds,\nReading wavy squiggles he pulls out exact tablets fast,\nClearly both graduated from the same secret code academy.'
  ],
  [
    'मोहल्ले की आंटी किसी जासूसी कैमरे से कम नहीं होतीं,\nकौन कब आया गया इनकी नज़रें कभी नम नहीं होतीं,\nबालकनी में कपड़े सुखाते पूरे गली की ख़बर रखतीं,\nइनके अख़बार में अफ़वाहें कभी ख़त्म नहीं होतीं।',
    'Neighborhood aunties outperform high-tech security cameras,\nLogging every arrival and departure without blinking once,\nPretending to dry laundry on balconies they track whole lanes,\nBroadcasting breaking street updates faster than news.'
  ],
  [
    'बारिश होते ही दिल ने गरमा-गरम पकौड़ों की फ़रमाइश की,\nजेब टटोली तो सिर्फ़ दो सिक्कों ने नुमाइश की,\nसादे पानी के साथ पुराने मुरमुरे चबाकर मौसम मनाया,\nकंगाली में भी हमने शाही नवाबों सी आज़माइश की।',
    'Monsoon raindrops instantly sparked cravings for hot fritters,\nChecking pockets revealed two lonely coins clinking softly,\nCrunching plain puffed rice by the window I enjoyed rain,\nKeeping royal composure intact despite a broke wallet.'
  ],
  [
    'साहब के आते ही कंप्यूटर पर उँगलियाँ तेज़ चलती हैं,\nमाथे पर काम के बोझ की झूठी शिकन ढलती है,\nजैसे ही केबिन में लौटकर वो दरवाज़ा बंद करें,\nतुरंत चाय की टपरी वाली पंचायत फिर पलती है।',
    'Fingers type furiously the second boss footsteps approach,\nBrows knit deeply faking intense spreadsheet concentration,\nOnce cabin doors click shut behind his departing back,\nOur secret tea-stall gossip parliament resumes session.'
  ],
  [
    'सर्दियों की सुबह रजाई छोड़ना जंग जीतने से कठिन काम है,\nरजाई के अंदर जन्नत और बाहर बर्फीला कोहराम है,\nनहाने के नाम पर बस ठंडे पानी को प्रणाम कर लिया,\nपरफ़्यूम छिड़ककर दफ़्तर जाना सर्दियों का आम काम है।',
    'Leaving warm winter quilts feels harder than winning wars,\nCozy heaven stays tucked inside while Arctic winds blow,\nGreeting cold water buckets respectfully from safe distance,\nExtra perfume spray handles morning freshness admirably.'
  ],
  [
    'ऑटोकॉरेक्ट ने शरीफ़ इंसान की इज़्ज़त मिट्टी में मिला दी,\nलिखना कुछ चाहा और संदेश में अजीब कहानी बना दी,\nभेजने के बाद जब अपना ही लिखा दोबारा पढ़ा हमने,\nमाफ़ी माँगने में आधे घंटे की सारी समझदारी गँवा दी।',
    'Keyboard autocorrect sabotages polite people mercilessly,\nSwapping normal words into wildly hilarious nonsense,\nReading my sent message five seconds too late horrified,\nSpent half an hour typing frantic apologies afterward.'
  ],
  [
    'दोस्त की तस्वीर खींचो तो हर कोण से नायक बनाएँ,\nहमारी बारी आए तो बंद आँख वाला भूत दिखाएँ,\nपचास तस्वीरों में एक भी लगाने लायक़ नहीं मिलती,\nऊपर से हँसकर कहें जैसा चेहरा वैसा ही पाएँ।',
    'Clicking my friend pictures I crouch low like pro directors,\nWhen he snaps mine blinking eyes turn me into comedy,\nOut of fifty shots zero qualify for profile display,\nThen he grins blaming the camera less than my face.'
  ],
  [
    'इतवार का दिन पलक झपकते हवा सा गुज़र जाता है,\nदोपहर की नींद खुलते ही सोमवार का डर सताता है,\nबाक़ी छह दिन कछुए की धीमी चाल रेंगते रहते,\nजाने छुट्टी की घड़ी में कौन रॉकेट लगाता है।',
    'Sunday vanishes faster than a blink of sleepy eyelids,\nWaking from afternoon naps brings Monday dread already,\nWeekdays crawl forward slower than a tired tortoise,\nWho secretly straps rocket engines onto Sunday clocks.'
  ],
  [
    'रिश्तेदार के घर जाते ही पहले वाई-फ़ाई पासवर्ड पूछते हैं,\nनमस्ते बाद में करते पहले मोबाइल का सिग्नल ढूँढते हैं,\nमेहमाननवाज़ी में समोसा मिले न मिले कोई ग़म नहीं यार,\nतेज़ इंटरनेट मिल जाए तो पूरे दिन वहीं झूमते हैं।',
    'Visiting cousins our first question hunts Wi-Fi passwords,\nGreetings wait politely until four signal bars connect,\nSkip snacks if needed nobody minds an empty plate,\nHigh-speed internet keeps guests smiling all afternoon.'
  ],
  [
    'पैकेट पर लिखा दो मिनट में मैगी बन जाती है,\nप्याज़ काटने और उबालने में पंद्रह मिनट खाती है,\nइतना मीठा झूठ आज तक किसी प्रेमी ने न बोला,\nफिर भी आधी रात की भूख यही मिटाती है।',
    'Noodle packets boldly promise dinner ready in two minutes,\nBoiling water and chopping onions easily take fifteen,\nNo poet ever wrote sweeter fiction on yellow wrappers,\nYet midnight hunger forgives every extra minute gladly.'
  ],
  [
    'दोस्त को आवाज़ बदलकर कस्टमर केयर बनकर फ़ोन लगाया,\nआपकी लॉटरी लगी है कहकर पाँच मिनट ख़ूब नचाया,\nजब उसने मिठाई बाँटने का शोर पूरे घर में मचाया,\nतब हँसते-हँसते हमने अपना असली नाम उसे बताया।',
    'Disguised my voice calling my buddy as bank customer care,\nAnnouncing he won a bumper jackpot prize this morning,\nRight as he started celebrating loudly across his house,\nI burst out laughing revealing the harmless prank.'
  ],
  [
    'रात के दो बजे मच्छर कान के पास शास्त्रीय संगीत गाते,\nबत्ती जलाओ तो जादूगर की तरह पर्दों में छुप जाते,\nचादर ओढ़ो तो गर्मी लगे और खोलो तो हमला बोलें,\nछोटे से जीव बड़े-बड़े सूरमाओं की नींद उड़ा जाते।',
    'At two AM mosquitoes perform classical concerts by ears,\nSwitch lights on and they vanish like master magicians,\nPull blankets up to roast or uncover to face bites,\nTiny wings defeat mighty sleepers night after night.'
  ],
  [
    'गुल्लक ख़रीदी थी कि साल भर में लखपति बन जाएँगे,\nदस दिन बाद ही पिन डालकर सिक्के बाहर गिराएँगे,\nबचत करने का जज़्बा बस चाट की ठेली तक टिकता है,\nगोलगप्पे देखते ही सारे आर्थिक नियम पिघल जाएँगे।',
    'Bought a clay piggy bank planning to turn millionaire,\nTen days later a hairpin fished coins back out quietly,\nFinancial discipline survives only till street food carts,\nCrispy golgappas melt every savings resolution flat.'
  ],
  [
    'सामने से ख़ास इंसान गुज़रे तो चाल बिगड़ जाती है,\nसपाट सड़क पर भी बिना पत्थर ठोकर लग जाती है,\nसजीला दिखने के चक्कर में चेहरा अजीब बन जाता,\nधड़कन से ज़्यादा दोस्तों की हँसी बढ़ जाती है।',
    'When someone special walks past we forget normal walking,\nStumbling heroically across completely flat sidewalks,\nTrying hard to act cool creates hilarious expressions,\nGiving watching friends comedy material for six months.'
  ],
  [
    'पापा का भाषण मोबाइल की डाँट से शुरू होता है,\nघूम-फिरकर उनके पुराने संघर्षों पर खड़ा होता है,\nकहते हैं हम नदी तैरकर रोज़ विद्यालय जाते थे,\nलगता है उस ज़माने में पुल नहीं होता है।',
    'Dad lecture begins with screen time then travels decades,\nLanding squarely inside legendary tales of his schoolboy grit,\nClaiming he crossed rivers daily carrying heavy books,\nApparently bridges were invented right after he graduated.'
  ],
  [
    'वज़न घटाने के लिए कड़वी ग्रीन-टी का डिब्बा मँगवाया,\nसाथ में मलाई वाले चार मीठे बिस्कुट भी डुबोकर खाया,\nसंतुलन बनाने की ऐसी अद्भुत कला सिर्फ़ हम जानते हैं,\nतभी तो तराज़ू के काँटे ने सौ के पार दिखाया।',
    'Ordered herbal green tea determined to trim waistlines,\nDunking four rich cream biscuits into every healthy cup,\nNobody masters calorie balancing quite like our logic,\nExplaining why bathroom scales refuse to budge downward.'
  ],
  [
    'जब दफ़्तर की जल्दी हो तभी हर सिग्नल लाल मिलता है,\nआगे खड़ा ऑटो वाला भी बीच सड़क सवाल करता है,\nआराम से निकलो जिस दिन सारी सड़कें ख़ाली मिलेंगी,\nवक़्त और ट्रैफ़िक दोनों मिलकर रोज़ बवाल करता है।',
    'Running late turns every traffic light stubbornly red,\nWhile autos ahead stall leisurely debating directions,\nStep out unhurried and highways stretch wide open,\nClocks and signals clearly coordinate daily pranks.'
  ],
  [
    'दोस्त पहले कहता है भाई आज बिल्कुल भूख नहीं है,\nटिफ़िन खुलते ही सबसे बड़ा पराँठा उसी ने छीना है,\nचखने के नाम पर पूरी सब्ज़ी सफ़ाचट कर जाता वो,\nसच्ची दोस्ती में भुक्खड़पन का यही तो नगीना है।',
    'My friend claims zero appetite right before lunch break,\nOpen the tiffin box and the biggest paratha disappears,\nJust tasting one bite somehow empties the whole bowl,\nTrue friendship runs shamelessly on shared lunchboxes.'
  ],
  [
    'दुकान के शीशे में हर कपड़ा सितारों सा जमता है,\nघर आकर देखो तो वही कुर्ता ढीला झोला लगता है,\nदुकानदार की चमकीली बत्तियों में अजब जादू छुपा रहता,\nपैसे कटने के बाद असली रंग पता चलता है।',
    'Showroom mirrors make every outfit look movie-star sharp,\nAt home the exact shirt hangs loose like a potato sack,\nShopkeepers install magical flattering spotlights indoors,\nTruth dawns peacefully right after the receipt prints.'
  ],
  [
    'सीधे सुलझाकर रखे इयरफ़ोन जेब में ख़ुद गाँठ बाँध लेते,\nसुलझाने बैठो तो आधा सफ़र बस इसी में काट लेते,\nविज्ञान ने चाँद पर रॉकेट तो आसानी से पहुँचा दिया,\nपर जेब के भीतर तारों की कुश्ती न भाँप लेते।',
    'Neatly coiled earphones tie sailor knots inside pockets,\nUntangling wires eats half our morning bus commute,\nScience landed rovers smoothly across distant Mars,\nYet pocket cable wrestling remains an unsolved mystery.'
  ],
  [
    'शैंपू की बोतल ख़त्म हो जाए तो पानी भरकर हिलाते हैं,\nतीन हफ़्ते और झाग निकालकर देसी जुगाड़ चलाते हैं,\nटूथपेस्ट को भी बेलन से दबाकर आख़िरी बूँद निचोड़ लें,\nमध्यम वर्ग के घर में बचत के रत्न मुस्कुराते हैं।',
    'Empty shampoo bottles get refilled with water and shaken,\nStretching bubbly washes proudly across two extra weeks,\nToothpaste tubes flatten thin under kitchen rolling pins,\nMiddle-class ingenuity wastes not one precious drop.'
  ],
  [
    'छोटा भाई टीवी का रिमोट छुपाकर उसी पर बैठ जाता है,\nपूरे घर से ढुँढवाकर भोला सा चेहरा बनाता है,\nकार्टून देखने की ज़िद में समाचार भी बंद करवा दे,\nपकड़े जाने पर माँ के पीछे जाकर छुप जाता है।',
    'Little brother hides the TV remote right beneath himself,\nWatching everyone search cushions wearing angelic innocence,\nSwitching evening news straight back to loud cartoons,\nCaught red-handed he sprints behind mother apron.'
  ],
  [
    'दो पन्ने पढ़कर हम दो घंटे पासिंग नंबर जोड़ते हैं,\nकठिन अध्यायों को यह तो नहीं आएगा कहकर छोड़ते हैं,\nपरीक्षा में वही छोड़ा हुआ सवाल सबसे पहले चमकता है,\nतब क़लम चबाकर अपनी ही किस्मत से सिर फोड़ते हैं।',
    'After reading two pages we calculate passing marks for hours,\nSkipping tough chapters declaring confidently those never come,\nExam morning greets us with that exact skipped question first,\nLeaving us chewing pens admiring our terrible predictions.'
  ],
  [
    'दाँत का वैद्य मुँह में औज़ार डालकर हाल पूछता है,\nघर में सब कैसे हैं कहकर नया सवाल पूछता है,\nबेचारा मरीज़ आ-ऊ के सिवा वहाँ क्या बोल पाए,\nफिर भी साहब समझकर मुस्कुराते बड़ा कमाल सूझता है।',
    'Dentists park four metal tools inside your open mouth,\nThen casually ask detailed questions about family news,\nAll anyone can reply sounds like muffled vowels,\nAmazingly the doctor nods understanding every syllable.'
  ],
  [
    'पाँच सौ की कुर्ती का दाम डेढ़ सौ लगाकर चलीं,\nदुकानदार के पसीने छूटे जब मैडम मोलभाव पर अड़ीं,\nआख़िर बेचारा हाथ जोड़कर बोला बहन ख़ुशी से ले जाओ,\nबाज़ार की गणित देसी महिलाओं के आगे झुक पड़ी।',
    'Quoted five hundred she calmly countered with one-fifty,\nWalking three steps away until the shopkeeper surrendered,\nHanding over the bag he marveled at her bargaining craft,\nWall Street negotiators could learn plenty in local bazaars.'
  ],
  [
    'मेहमान जाते वक़्त हाथ में सौ का नोट थमाते हैं,\nमाँ आँखें दिखाकर मना करने का इशारा समझाती हैं,\nमन में लड्डू फूटते पर होंठ नहीं बोलते हैं,\nदरवाज़ा बंद होते ही माँ तुरंत रखवाती हैं।',
    'Departing guests press crisp hundred-rupee notes into palms,\nWhile mom shoots laser glares ordering polite refusal,\nInside our heart celebrates though lips murmur no need,\nAnd five seconds after doors shut mom confiscates it safe.'
  ],
  [
    'दोपहर भर घोड़े बेचकर सोने के बाद आँख खुलती है,\nशाम को अंगड़ाई लेकर कहते बड़ी थकान लगती है,\nआलस के खेलों में स्वर्ण पदक पक्का हमारा होता,\nबिस्तर से रसोई जाना भी लंबी यात्रा लगती है।',
    'Waking up groggy after sleeping four solid afternoon hours,\nStretching wide we sigh about how exhausting today felt,\nIf laziness joined Olympics gold medals belong to us,\nEven walking from bed to fridge feels like trekking.'
  ],
  [
    'गोलगप्पे खाने के बाद सूखी पापड़ी माँगना जन्मसिद्ध अधिकार है,\nभैया एक प्याज़ डालकर दे दो यही मीठी मनुहार है,\nबीस रुपये में पूरे ठेले का स्वाद चखने की चाहत,\nबिना सूखी पूरी मिले पूरा आनंद ही बेकार है।',
    'Demanding one free crispy papdi crowns every chaat visit,\nStuffed with extra onions and masala at zero charge,\nTwenty rupees buys royal gourmet negotiations street-side,\nWithout that bonus bite no panipuri round feels complete.'
  ],
  [
    'पासवर्ड भूलकर जब नया पासवर्ड बनाने की कोशिश करी,\nकंप्यूटर बोला पुराना पासवर्ड दोबारा लिखने की मनाही खड़ी,\nअरे भाई याद ही होता तो बदलने की मेहनत क्यों करते,\nतकनीक की इस पहेली ने हमारी अक्ल ही हर ली।',
    'Forgot my login password so clicked reset patiently,\nScreen warned new password cannot match your old password,\nDear computer had I known it why reset at all,\nModern tech riddles test human sanity before breakfast.'
  ],
  [
    'जिस दिन मेहनत से रगड़कर सफ़ेद जूते और गाड़ी धोते हैं,\nबादल भी उसी दोपहर कीचड़ बरसाने को तैयार होते हैं,\nमहीने भर सूखा पड़ा रहेगा शहर के हर कोने में,\nहमारे साबुन लगाते ही इंद्रदेव ख़ुशी से रोते हैं।',
    'Scrub white sneakers sparkling clean or wash your bike,\nRainclouds gather within minutes plotting muddy puddles,\nSkies stay bone dry across thirty dusty calendar days,\nWaiting specifically for our soap bucket before pouring.'
  ],
  [
    'जो दोस्त बचपन से आज तक अकेला घूम रहा है,\nवही सबको मोहब्बत के गहरे नियम सिखा रहा है,\nप्रशिक्षक कभी मैदान में ख़ुद नहीं उतरता कहकर हँसे,\nमुफ़्त के ज्ञान से भले रिश्ते हिला रहा है।',
    'The friend single since kindergarten acts love guru daily,\nDispensing dramatic relationship tips to everyone around,\nCoaches never play on field themselves he grins proudly,\nNearly wrecking two peaceful couples with expert advice.'
  ],
  [
    'फ़्रीज़र में आइसक्रीम का डिब्बा देखकर मन मचल उठा था,\nढक्कन खोला तो अंदर हरी मटर का पहाड़ छुपा था,\nदेसी घरों का ये सबसे बड़ा और मीठा प्रैंक होता है,\nसोनपापड़ी के डिब्बे में सुई-धागे का खज़ाना रुका था।',
    'Spotting a vanilla ice-cream tub inside freezer sparked joy,\nPopping the lid revealed frozen green peas staring back,\nClassic Indian kitchen pranks humble sweet teeth daily,\nRight beside sweet boxes guarding sewing needles and buttons.'
  ],
  [
    'जन्मदिन पर दोस्तों ने दस परतों में बड़ा डिब्बा लपेटा,\nखोलते-खोलते काग़ज़ का ढेर कमरे के कोने में समेटा,\nआख़िरी डिब्बी से एक रुपये वाली संतरे की टॉफ़ी निकली,\nऐसे कंजूस यारों को रब ने फुरसत में ही लपेटा।',
    'Friends handed over a giant birthday box wrapped ten layers,\nTearing gift paper filled half my bedroom floor high,\nInside the final tiny box sat one orange candy,\nHeaven clearly sculpted stingy best friends for comedy.'
  ],
  [
    'स्नानघर में गाकर हम ख़ुद को महान गायक समझते हैं,\nबाहर सुनाओ तो घरवाले दोनों कान ढककर हँसते हैं,\nफव्वारे की गूँज कितना मीठा भ्रम जगा देती है,\nअसली सुर सुनते ही छत से कौवे उड़ते हैं।',
    'Bathroom acoustics convince us we sing like playback legends,\nTry one verse in the living room and family covers ears,\nEchoing tiles flatter off-key vocals with sweet illusion,\nEven rooftop crows fly away hearing our unplugged solo.'
  ],
  [
    'सर्दियों की पुरानी जैकेट में सौ का मुड़ा नोट मिल गया,\nबिना मेहनत जैसे कुबेर का गुप्त ख़ज़ाना खिल गया,\nअपनी ही रखकर भूली दौलत पर ऐसी ख़ुशी छाई यार,\nशाम की समोसा पार्टी का पूरा इंतज़ाम सिल गया।',
    'Found a crumpled hundred-rupee note inside last winter coat,\nFeeling instantly richer than discovering sunken treasure,\nForgetting my own cash last January paid sweet dividends,\nFunding an immediate evening samosa celebration.'
  ],
  [
    'रात को जोश में तय किया सुबह चार बजे पढ़ना है,\nकिताबें सिरहाने रखकर इतिहास नया गढ़ना है,\nसुबह दस बजे चिड़ियों ने आकर जब खिड़की खटखटाई,\nबोला कल से पक्का पढ़ेंगे आज थोड़ा आराम करना है।',
    'Midnight motivation pledged waking at four AM to study,\nStacking heavy textbooks neatly right beside my pillow,\nAt ten AM chirping sparrows tapped loudly on glass,\nConvincing me fresh starts work better next Monday.'
  ],
  [
    'वीडियो देखकर सोचा आज रसोई में शाही पकवान बनाएँगे,\nनमक और मिर्च का अंदाज़ा लगाकर सबको चौंकाएँगे,\nधुआँ उठा जब कड़ाही से तो पड़ोसी भी भागकर आए,\nजली हुई रोटी छुपाकर बाहर से खाना मँगवाएँगे।',
    'Watched one short cooking reel planning gourmet miracles,\nTossing spices flamboyantly like television masterchefs,\nSmoke billowed thick enough to summon curious neighbors,\nQuietly hiding burnt toast we ordered takeout dinner.'
  ],
  [
    'दोस्त से परीक्षा के नोट्स माँगे तो धुँधली फोटो भेजी,\nआधी उल्टी और आधी कटी लिखावट जैसी जलेबी टेढ़ी,\nपढ़ने से ज़्यादा सिर घुमाने की कसरत हो गई हमारी,\nऐसे मददगार मित्र से भली तो कोरी किताबें मेरी।',
    'Asked a classmate for lecture notes before tomorrow test,\nReceived blurry sideways photos resembling twisted jalebis,\nRotating my neck ninety degrees gave instant cramp,\nBlank textbooks honestly explained topics clearer.'
  ],
  [
    'रात को बिस्तर पर ब्रह्मांड के गहरे रहस्य सोचते हैं,\nसुबह रसोई में जाकर क्यों आए थे यही खोजते हैं,\nफ़्रिज का दरवाज़ा खोलकर दो मिनट शून्य निहारते रहे,\nअपनी ही याददाश्त पर हँसकर वापस सोफ़े लौटते हैं।',
    'At midnight our brain ponders mysteries of galaxies,\nNext afternoon we stand inside kitchens forgetting why,\nStaring blankly into open refrigerators for two minutes,\nChuckling at our memory we wander back to sofas.'
  ],
  [
    'दर्ज़ी का कल पक्का मिल जाएगा कभी कल नहीं आता,\nत्यौहार की सुबह तक वो बटन ही टाँकता मिल पाता,\nनाप तो ऐसा लेता जैसे अंतरिक्ष का सूट सी रहा,\nपहनो तो एक बाजू लंबी और गला तंग रह जाता।',
    'Tailor promises of ready tomorrow stretch across weeks,\nStill sewing buttons furiously on festival morning,\nMeasuring twenty angles like NASA spacesuit engineers,\nDelivering one sleeve longer and collars comically tight.'
  ],
  [
    'गली का कुत्ता देखकर दोस्त बोला डरो मत सीधा है,\nकुत्ता थोड़ा गुर्राया तो दोस्त सबसे पहले भागा है,\nदूसरों को बहादुरी का ज्ञान बाँटना बड़ा आसान भाई,\nभौंकने की एक आवाज़ पर सारा साहस फ़ीका है।',
    'Relax he never bites said my friend near a street dog,\nOne low growl sent my brave advisor climbing gates first,\nPreaching courage costs nothing from ten paces away,\nSingle barks turn neighborhood heroes into sprinters.'
  ],
  [
    'गर्मियों में कूलर में पानी कौन भरेगा इसी पर महाभारत है,\nबड़े भाई का हुक्म चलाना बचपन की पुरानी आदत है,\nहवा सबको ठंडी चाहिए पर बाल्टी उठाते कमर दुखती,\nघर के इस रोज़ाना नाटक में भरपूर हास्य शरारत है।',
    'Summer afternoons spark epic debates over refilling coolers,\nElder siblings delegate bucket duty with royal authority,\nEveryone claims front seat breeze while dodging tap trips,\nTurning hot afternoons into daily household comedy.'
  ],
  [
    'सामने वाले की बात तीन बार पूछकर भी समझ न आई,\nचौथी बार झेंप मिटाने को ज़ोर की झूठी हँसी लगाई,\nपता चला वो बेचारा अपने नुकसान की कहानी सुना रहा,\nहमारी बेवक्त दाँत निपोरने ने अजब मुसीबत बुलाई।',
    'Missed catching what someone said three times straight,\nFourth time I nodded laughing politely to save face,\nTurned out he was describing losing his wallet downtown,\nMaking my cheerful grin extraordinarily awkward.'
  ],
  [
    'नई कॉपी के पहले पन्ने पर मोतियों सी लिखावट सजाते हैं,\nदसवें पन्ने तक आते-आते डॉक्टरों के रिश्तेदार बन जाते हैं,\nआख़िरी पन्ने पर सिर्फ़ काटा-पीटी और चित्रकारी मिलती है,\nविद्यार्थी जीवन के ये रंग याद कर आज मुस्कुराते हैं।',
    'Page one of new notebooks shines like royal calligraphy,\nBy page ten handwriting turns into frantic scribbles,\nBack pages host tic-tac-toe grids and cartoon doodles,\nSweet school-day habits still make us laugh aloud.'
  ],
  [
    'फ़ोन देखकर मुस्कुरा दो तो पूरा घर शक करता है,\nसबको लगता हमारे लाडले का कहीं चक्कर चलता है,\nकैसे समझाएँ उन्हें कि हम मज़ेदार चुटकुले पढ़ रहे,\nअकेले बेचारे पर भी झूठा इल्ज़ाम मढ़ता है।',
    'Chuckle once looking at your phone and family raises brows,\nConvinced instantly some secret romance just blossomed,\nTry explaining calmly it was only a funny meme video,\nNobody believes innocent comedy grins anymore.'
  ]
];

export const NEW_FEELINGS_PART_5: Shayari[] = [
  ...buildCategoryShayaris(
    {
      category: 'intezaar',
      categoryName: 'Intezaar / Wait Shayari',
      categoryIcon: '🕰️',
      idPrefix: 'intezaar',
      startIndex: 1,
      tags: ['IntezaarShayari', 'WaitStatusHindi', 'TeriRaah']
    },
    INTEZAAR_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'judai',
      categoryName: 'Judai / Separation Shayari',
      categoryIcon: '🍂',
      idPrefix: 'judai',
      startIndex: 1,
      tags: ['JudaiShayari', 'SeparationStatus', 'Bichhadna']
    },
    JUDAI_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'mohabbat',
      categoryName: 'Mohabbat Shayari',
      categoryIcon: '❤️‍🔥',
      idPrefix: 'mohabbat',
      startIndex: 1,
      tags: ['MohabbatShayari', 'SacchiMohabbat', 'TrueLoveHindi']
    },
    MOHABBAT_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'smile',
      categoryName: 'Smile Shayari',
      categoryIcon: '😄',
      idPrefix: 'smile',
      startIndex: 1,
      tags: ['SmileShayari', 'MuskaanStatus', 'KeepSmilingHindi']
    },
    SMILE_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'kismat-bhagya',
      categoryName: 'Kismat / Bhagya Shayari',
      categoryIcon: '🌟',
      idPrefix: 'kismat-bhagya',
      startIndex: 1,
      tags: ['KismatBhagya', 'BhagyaShayari', 'DestinyQuotesHindi']
    },
    KISMAT_BHAGYA_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'funny',
      categoryName: 'Funny / Jokes / Prank / Comedy / Chutkule Shayari',
      categoryIcon: '😂',
      idPrefix: 'funny',
      startIndex: 1,
      tags: ['FunnyShayari', 'ComedyJokes', 'ChutkuleHindi', 'PrankShayari']
    },
    FUNNY_POEMS
  )
];
