import { Shayari } from '../../../types/shayari';
import { buildCategoryShayaris, RawPoemTuple } from './shayariBuilder';

// 15. Good Night Shayari (30 unique 25-40 word poems)
const GOOD_NIGHT_POEMS: readonly RawPoemTuple[] = [
  [
    'चाँद ने आसमान पर चाँदी की चादर बिछाई है,\nठंडी हवाओं ने मीठे सपनों की लोरी सुनाई है,\nदिन भर की सारी भागदौड़ अब सिरहाने रख दीजिए,\nशुभ रात्रि कहने आपको तारों की बारात आई है।',
    'Moonlight spreads a silver blanket overhead,\nCool night breezes hum gentle lullabies,\nSet aside every rush of the busy day now,\nStarlit skies arrive wishing peaceful sleep.'
  ],
  [
    'थक गई होंगी आँखें अब पलकों को आराम दीजिए,\nसुंदर ख़्वाबों के हाथों में आज की शाम दीजिए,\nकल फिर उगेगा उम्मीदों का नया सुनहरा सूरज,\nअभी मीठी नींद को सुकून भरा पैग़ाम दीजिए।',
    'Rest weary eyes gently beneath soft eyelids,\nHand tonight quiet hours over to sweet dreams,\nTomorrow golden sun will rise bright again,\nWelcome deep slumber wrapped in calm peace.'
  ],
  [
    'सितारों की झिलमिल में आपका हर ग़म खो जाए,\nमन की सारी उलझन रात की गोद में सो जाए,\nरब करे आपकी नींद इतनी शांत और गहरी रहे,\nकि सुबह उठते ही चेहरा तरोताज़ा हो जाए।',
    'May twinkling stars melt away subtle worries,\nRocking tangled thoughts gently to rest,\nMay your sleep remain peaceful and deep,\nWaking your face refreshed at daybreak.'
  ],
  [
    'दीये की मद्धम लौ और रात का प्यारा सन्नाटा,\nहर सच्चे रिश्ते ने दिल से स्नेह है बाँटा,\nगुड नाइट कहकर भेजते हैं दुआएँ आपके नाम,\nकभी न चुभे आपकी राहों में कोई काँटा।',
    'Soft lamp glow amidst serene midnight hush,\nLoving hearts share affection across miles,\nSending warm good night prayers your way,\nMay zero thorns ever touch your footsteps.'
  ],
  [
    'चाँदनी उतर आई है आपके आँगन की मुंडेर पर,\nमीठी निंदिया खड़ी है पलकों के ठीक घेर पर,\nसारी चिंताएँ ईश्वर के चरणों में सौंपकर सोइए,\nखुशियाँ मिलेंगी आपको कल सुबह सवेर पर।',
    'Moonbeams rest softly along your courtyard,\nGentle sleep waits right upon your lashes,\nEntrust every burden into divine care now,\nFresh joys await you early tomorrow morning.'
  ],
  [
    'अँधेरी रात भी कितनी सुहानी लगती है जब सुकून हो,\nमन के भीतर नेकी और सच्चाई का जुनून हो,\nसोने से पहले सबको दिल से माफ़ कर दिया करो,\nताकि सपनों की दुनिया में सिर्फ़ प्यार का क़ानून हो।',
    'Dark nights feel lovely when peace lives inside,\nGuided steadily by kindness and honesty,\nForgive everyone warmly before closing eyes,\nLetting love rule your quiet world of dreams.'
  ],
  [
    'रात की रानी महक उठी है बगीचे की क्यारियों में,\nपरियाँ उतर आई हैं ख़्वाबों की सवारियों में,\nबंद कर लो आँखें और खो जाओ मीठी निंदिया में,\nनया सवेरा इंतज़ार करेगा आपकी तैयारियों में।',
    'Night jasmine perfumes quiet garden corners,\nSweet dreams descend on silken wings above,\nClose your eyes drifting into calm slumber,\nBright dawn awaits your renewed strength.'
  ],
  [
    'सूरज ढल गया और परिंदे घोंसलों में लौट आए,\nशाम के साये धीरे-धीरे पूरे शहर पर छाए,\nअपनों को याद कर सोने का सुकून ही अलग है,\nशुभ रात्रि दोस्त रब आपके हर सपने सजाए।',
    'Sunset faded as birds returned safe to nests,\nSoft evening shadows draped across town,\nRemembering loved ones brings restful calm,\nGood night friend may grace adorn your dreams.'
  ],
  [
    'तकिये के नीचे रख दो आज की सारी परेशानियाँ,\nसपनों में लिखो कल की सबसे सुंदर कहानियाँ,\nरात बनी है टूटे हौसलों को फिर जोड़ने के लिए,\nताकि सुबह चमकें आपकी कामयाबी की निशानियाँ।',
    'Tuck today troubles quietly under your pillow,\nSketch lovely chapters inside tonight dreams,\nNight mends tired spirits back into wholeness,\nSo emblems of triumph shine bright at dawn.'
  ],
  [
    'हवा की सरसराहट कानों में धीरे से कह रही है,\nरात की नदी शांति की धारा में बह रही है,\nमोबाइल रख दो दूर और ओढ़ लो सुकून की चादर,\nमीठी नींद आपकी पलकों की राह देख रही है।',
    'Whispering breezes murmur softly past your window,\nRivers of night flow calm in silver stillness,\nSet screens aside under a blanket of peace,\nSweet sleep waits patiently upon your eyes.'
  ],
  [
    'आसमान के चाँद से हमने एक गुज़ारिश की है,\nआपके आँगन में सुकून की बारिश की है,\nसो जाइए बेफ़िक्र होकर अपनों की दुआओं के बीच,\nहमने आपकी मीठी नींद की सिफ़ारिश की है।',
    'Whispered a gentle request to the high moon,\nShowering serene calm across your household,\nSleep carefree surrounded by warm prayers,\nCommending your rest to quiet starlight.'
  ],
  [
    'दिन चाहे जैसा भी बीता हो रात मुस्कुराकर गुज़ारो,\nअपने थके हुए मन को प्यार से थोड़ा दुलारो,\nहर रात अंत नहीं बल्कि नई सुबह की तैयारी है,\nशुभ रात्रि कहकर सुनहरे कल के सपने सँवारो।',
    'However today went end tonight with a smile,\nComfort your tired mind with gentle kindness,\nNight prepares silently for tomorrow sunrise,\nGood night and weave golden dreams ahead.'
  ],
  [
    'जुगनुओं की चमक से रोशन रहे आपके सपनों की गली,\nखिलती रहे आपके आँगन में खुशियों की हर कली,\nसोने से पहले हमारी ये छोटी सी दुआ क़ुबूल हो,\nआपकी हर रात बीते शांत और हर सुबह हो भली।',
    'May fireflies brighten lanes inside your dreams,\nKeeping buds of happiness blooming at home,\nAccept this quiet bedtime blessing tonight,\nWishing serene nights and joyful mornings.'
  ],
  [
    'जब सारा शहर गहरी नींद के आगोश में सो जाता है,\nसच्चा दोस्त तब भी आपकी सलामती की दुआ माँगता है,\nगुड नाइट मेरे यार ख़याल रखना हमेशा अपना,\nतेरी ख़ुशी से ही मेरे दिल को चैन आता है।',
    'When the whole city drifts into deep slumber,\nA true friend still prays for your safety,\nGood night dear buddy take gentle care,\nYour well-being brings peace to my heart.'
  ],
  [
    'तारों से सजी छत और ठंडी पुरवाई का ये झोंका,\nहर रात देती है ख़ुद से गुफ़्तगू करने का मौक़ा,\nशुक्र मनाओ आज के मिले हर छोटे-बड़े सुख का,\nसुकून से सो जाओ छोड़कर दुनिया का हर धोखा।',
    'Starry skies above paired with cool night air,\nOffer quiet moments for honest reflection,\nGive thanks for every small blessing received,\nSleep peacefully far beyond worldly noise.'
  ],
  [
    'तेरे ख़याल से ही मेरी रात का आगाज़ होता है,\nसपनों में भी बस तुझसे मिलने का राज़ होता है,\nगुड नाइट मेरी जान सो जा मीठी निंदिया की छाँव में,\nमेरी हर दुआ का पहरा तेरे आस-पास होता है।',
    'Thoughts of you open my quiet evening hours,\nDreams hold secret meetings beside your smile,\nGood night sweetheart rest in gentle shade,\nMy prayers stand guard softly around you.'
  ],
  [
    'चाँद अधूरा होकर भी आसमान को रोशन करता है,\nवैसे ही संतोष अधूरे दिन को भी पूरा करता है,\nजो मिला आज उस पर मुस्कुराकर आँखें मूँद लो,\nईश्वर कल इससे भी सुंदर सवेरा रचना करता है।',
    'Even a crescent moon lights up wide skies,\nContentment completes an imperfect day too,\nClose your eyes smiling over today gifts,\nGrace prepares an even brighter dawn ahead.'
  ],
  [
    'सन्नाटे की चादर में लिपट गई है सारी कायनात,\nचलो अब ख़त्म करें दिन भर की हर उलझी बात,\nकल फिर मिलेंगे नई ऊर्जा और नई मुस्कान के संग,\nमुबारक हो आपको ये सुहानी और सुकून भरी रात।',
    'Creation wraps itself in calm velvet stillness,\nLet tangled thoughts of daytime rest now,\nTomorrow we meet again with fresh energy,\nWishing you a soothing peaceful night.'
  ],
  [
    'नींद वो नेमत है जो अमीर-ग़रीब नहीं देखती,\nसाफ़ दिल वालों की पलकों पर तुरंत आ बैठती,\nबेईमानी के मख़मली गद्दों पर करवटें बदलती हैं,\nऔर ईमानदारी चटाई पर भी सुख की रोटी सेंकती।',
    'Peaceful sleep favors neither wealth nor rank,\nLanding swiftly upon honest clear hearts,\nSilken beds toss restlessly under guilt,\nWhile integrity sleeps soundly anywhere.'
  ],
  [
    'धीमी-धीमी लोरी गाती है खिड़की से आती हवा,\nगहरी नींद होती है थके हुए जिस्म की सच्ची दवा,\nशुभ रात्रि आपको और आपके परिवार के हर सदस्य को,\nसदा बना रहे आपके घर में खुशियों का कारवाँ।',
    'Breezes through the window hum a soft song,\nDeep rest heals tired bodies better than tonic,\nGood night to you and everyone inside home,\nMay caravans of harmony dwell with you.'
  ],
  [
    'सितारों ने मिलकर आसमान पर लिखा है शुभ रात्रि,\nअच्छे सपनों की नाव पर बन जाओ आज के यात्री,\nकोई बुरा ख़याल पास न फटके आपकी निंदिया के,\nसवेरे तक सुरक्षित रहे आपके मन की हर थाती।',
    'Stars spell good night across velvet heavens,\nSail gently aboard boats of pleasant dreams,\nMay zero anxious thought disturb your rest,\nKeeping your inner peace safe till morning.'
  ],
  [
    'रात जितनी गहरी होती है तारे उतने चमकते हैं,\nशांत मन के आँगन में मीठे ख़्वाब महकते हैं,\nआँखें बंद करो और महसूस करो रब की रहमत को,\nजिनके भरोसे सारे जहान के पंछी चहकते हैं।',
    'Deeper the night brighter the stars sparkle,\nSweet dreams bloom inside calm courtyards,\nClose your eyes feeling quiet divine grace,\nSheltering every sleeping bird on earth.'
  ],
  [
    'वक़्त हो चला है अब ख़्वाबों की नगरी जाने का,\nदिन भर के बोझ से अपने कंधे हल्के कराने का,\nसो जाओ सुकून से कि कल एक शानदार दिन है,\nगुड नाइट दोस्त यही वक़्त है मुस्कुराने का।',
    'Time arrives to journey toward dreamland now,\nLightening tired shoulders of daytime weight,\nRest easy knowing tomorrow shines bright,\nGood night friend drift off with a smile.'
  ],
  [
    'चाँद की ठंडक आपकी आँखों में सुकून घोल दे,\nहर मीठा सपना क़िस्मत के नए दरवाज़े खोल दे,\nमीठी नींद में गुज़रे आपकी आज की ये प्यारी रात,\nऔर कल का सूरज खुशियों के हज़ार बोल दे।',
    'May cool moonlight pour comfort into your eyes,\nEach dream unlocking bright doors ahead,\nSpend tonight wrapped inside restful sleep,\nGreeting thousand joys under tomorrow sun.'
  ],
  [
    'बत्ती बुझाने से पहले मन का उजाला जलाए रखना,\nकल के लिए उम्मीद का छोटा दीया बचाए रखना,\nशुभ रात्रि कहते हैं हम आपको पूरे अपनेपन से,\nसपनों की महफ़िल में अपनी मुस्कान सजाए रखना।',
    'Dimming room lights keep inner hope glowing,\nSaving a warm spark ready for tomorrow,\nSending affectionate good night wishes now,\nWear your gentle smile through every dream.'
  ],
  [
    'नीले गगन के नीचे सो रहा है सारा जहाँ शांत,\nथम गई है सड़कों की दौड़ और शोरगुल नितांत,\nआप भी विश्राम कीजिए मीठे सपनों की छाँव तले,\nमिट जाए आपके मन से दिन भर की हर क्लांत।',
    'Beneath dark blue skies the world rests still,\nBustling streets quiet down completely now,\nTake gentle repose under peaceful dreams,\nMelting away every trace of fatigue.'
  ],
  [
    'यादों की चादर ओढ़कर जब रात सिरहाने बैठती है,\nअपनों की खैरियत की दुआ दिल से निकलती है,\nजहाँ भी रहो तुम हमेशा महफ़ूज़ और आबाद रहो,\nमेरी शुभ रात्रि बस यही स्नेह भरी बात कहती है।',
    'When night sits quietly beside fond memories,\nHeartfelt prayers rise for loved ones afar,\nWherever you rest stay safe and thriving,\nWarm affection speaks through this good night.'
  ],
  [
    'सपनों के बाज़ार में आज ख़ुशियों की ख़रीदारी हो,\nसुबह जागने पर चेहरे पर रौनक़ बड़ी प्यारी हो,\nगुड नाइट कहकर विदा लेते हैं आज के दिन से,\nकल की नई जीत के लिए आपकी पूरी तैयारी हो।',
    'May tonight dreams gather baskets of joy,\nLeaving bright radiance across waking eyes,\nBidding fond farewell to today hours now,\nRest well prepared for tomorrow victories.'
  ],
  [
    'रात का हर पहर आपके लिए अमन का पैग़ाम लाए,\nचाँदनी आपके घर के हर कोने को सहलाए,\nचैन की नींद सोइए बिना किसी शिकन या तनाव के,\nईश्वर आपके जीवन में सदा सुख के फूल खिलाए।',
    'May each watch of night bring gentle calm,\nMoonlight caressing every corner of home,\nSleep deeply free from worry or tension,\nBlossoms of grace gracing your life always.'
  ],
  [
    'आख़िरी मैसेज रात का आपके नाम लिख दिया है,\nसपनों में मिलने का छोटा सा पैग़ाम लिख दिया है,\nमीठी निंदिया आए आपको तारों की ठंडी छाँव में,\nदिल से आपको प्यार भरा शुभ रात्रि सलाम लिख दिया है।',
    'Writing tonight final message warmly for you,\nSending a quiet note toward sweet dreams,\nRest soundly under cool canopies of stars,\nHeartfelt good night greetings wrap you safe.'
  ]
];

// 16. 2 Line Shayari (30 unique 2-line poems, each strictly 25-40 words!)
const TWO_LINE_POEMS: readonly RawPoemTuple[] = [
  [
    'मोहब्बत की किताब में हमने सिर्फ़ तेरा ही पाक नाम लिखा है दिल की गहराई से,\nदुनिया की सारी दौलत भी फीकी लगती है मुझे तेरी एक सच्ची और प्यारी मुस्कान के आगे।',
    'Inside the sacred book of love I wrote only your pure name from deep within my heart,\nAll worldly treasures look pale beside one genuine tender smile shining across your face.'
  ],
  [
    'वक़्त बदल जाता है और बदल जाते हैं साथ चलने वाले हज़ारों मतलबी चेहरे इस शहर में,\nमगर जो रूह से उतर जाए सीने में उसकी याद आख़िरी साँस तक कभी पुरानी नहीं होती।',
    'Time shifts constantly along with thousands of calculating faces walking across this busy city,\nYet someone etched deeply into the soul stays evergreen inside memory till our final breath.'
  ],
  [
    'हमने ख़ामोशी से सह लिया ज़माने का हर तीखा वार अपने स्वाभिमान की हिफ़ाज़त के लिए,\nक्योंकि शेर कभी शोर मचाकर अपनी ताक़त का इश्तिहार बाज़ार की भीड़ में नहीं दिया करते।',
    'Quietly I absorbed every sharp blow of society while guarding my unshakable self-respect,\nBecause lions never advertise their strength loudly across crowded marketplace corners.'
  ],
  [
    'काग़ज़ की कश्ती लेकर भी हम पार कर लेंगे मुसीबतों का ये गहरा और तूफ़ानी समंदर आज,\nजब सिर पर माँ की सच्ची दुआओं का हाथ हो तो कोई लहर हमें डुबो नहीं सकती।',
    'Even aboard a humble paper boat I will cross this deep stormy ocean of trials today,\nWith mother sincere blessings resting upon my head no fierce wave can ever sink me.'
  ],
  [
    'तेरे बिना इस भरे पूरे शहर की सारी रौनक़ें भी मुझे बिल्कुल वीरान और अधूरी लगती हैं,\nतू पास बैठ जाए दो पल तो पतझड़ का सूखा मौसम भी खिलकर बसंत बन जाता है।',
    'Without your company every glittering light across this crowded town feels empty and incomplete,\nSit beside me briefly and even dry autumn transforms instantly into blooming springtime.'
  ],
  [
    'लोग पूछते हैं मुझसे कि इतनी चोट खाकर भी तुम हर रोज़ कैसे मुस्कुरा लेते हो यार,\nउन्हें क्या ख़बर कि आँसुओं को छुपाने के लिए हँसी से मज़बूत कोई दूसरा पर्दा नहीं होता।',
    'People wonder aloud how I manage to wear a warm smile daily after enduring deep bruises,\nLittle do they realize no curtain hides silent tears better than effortless laughter.'
  ],
  [
    'सच्चे दोस्त ज़िंदगी के सफ़र में किसी ठंडी छाँव वाले घने पीपल के पेड़ जैसे होते हैं,\nजो ख़ुद कड़ी धूप सहकर भी अपने यारों के सिर से हर मुसीबत की आँच दूर रखते हैं।',
    'True friends along life highway stand like wide banyan trees offering cool generous shade,\nBearing harsh sunlight themselves while shielding companions safe from burning trials.'
  ],
  [
    'ज़ुबान से कहे हुए लफ़्ज़ तो अक्सर हवा के झोंकों के साथ गुम हो जाते हैं भीड़ में,\nमगर आँखों की ख़ामोशी से जो बात दिल तक पहुँचे उसका असर पूरी उम्र बाक़ी रहता है।',
    'Spoken words often scatter away quickly into thin air amidst noisy everyday crowds,\nYet messages carried silently from eye to heart echo warmly across an entire lifetime.'
  ],
  [
    'अपनी मंज़िल का रास्ता ख़ुद अपने पसीने और फ़ौलादी हौसले के दम पर तराशना सीख ले राही,\nदूसरों के उधार लिए पंखों से भरी गई उड़ान कभी खुले आसमान की ऊँचाई नहीं छू पाती।',
    'Carve the trail toward your summit through honest sweat and iron determination traveler,\nFlights attempted on borrowed wings never reach the boundless heights of open skies.'
  ],
  [
    'रूठ जाने की अदा भी उसी पर जचती है जिसे हमारे मनाने का पूरा यक़ीन दिल में हो,\nबेगाने लोगों की महफ़िल में तो इंसान अपना दर्द भी मुस्कुराहट की तह में लपेटकर रखता है।',
    'Playful sulking suits only someone certain that loving hands will coax them right back,\nAmong indifferent crowds a person folds deep ache neatly beneath polite smiles.'
  ],
  [
    'चाय की गर्म प्याली और खिड़की से आती बारिश की ठंडी फुहार जब एक साथ मिल जाती है,\nतब बिना किसी बुलावे के भी तेरी पुरानी यादें दिल के दरवाज़े पर दस्तक देने आती हैं।',
    'Whenever steaming tea meets cool monsoon mist drifting softly past an open windowpane,\nUninvited fond memories of you arrive knocking gently upon the doorway of my heart.'
  ],
  [
    'आईने के सामने खड़े होकर जब भी मैंने अपने बीते हुए कल का पूरा हिसाब लगाया है,\nपाया कि जिन पर आँख मूँदकर भरोसा किया उन्हीं ने सबसे गहरा सबक ज़िंदगी का सिखाया है।',
    'Standing quietly before the mirror tallying every chapter of my past years honestly,\nThose whom I trusted blindly turned out to be teachers of life sharpest lessons.'
  ],
  [
    'हज़ारों तारों की भीड़ में भी जैसे पूनम का उजला चाँद अलग ही अपनी आभा बिखेरता है,\nवैसे ही अच्छे संस्कार और साफ़ किरदार वाला इंसान हर महफ़िल में अलग पहचान रखता है।',
    'Just as a full moon radiates distinct silver grace amidst thousands of night stars,\nNoble character paired with pure values sets a soul apart inside every gathering.'
  ],
  [
    'इंतज़ार की घड़ियाँ भले कितनी ही लंबी और कठिन क्यों न हो जाएँ हमारी इस राह में,\nअगर मोहब्बत सच्ची हो सीने में तो दूरियाँ भी रिश्तों की मिठास को कम नहीं कर पातीं।',
    'No matter how long or testing hours of waiting stretch along our Winding pathway,\nWhen affection beats true inside the chest wide miles never dull its sweetness.'
  ],
  [
    'मिट्टी के छोटे से दीये ने अमावस की घनी काली रात को यह कहकर चुनौती दे डाली है,\nकि जब तक बाती में तेल और सीने में हौसला बाक़ी है अँधेरा कभी जीत नहीं सकता।',
    'One humble clay lamp challenged moonless midnight darkness with fearless quiet glow,\nDeclaring night can never prevail while oil feeds the wick and courage burns bright.'
  ],
  [
    'न हम किसी की कामयाबी से जलते हैं और न किसी के आगे अपनी ख़ुद्दारी झुकाते हैं,\nरब ने जितना दिया है उसी में शुक्र मनाकर अपनी शर्तों पर बादशाहों सी ज़िंदगी बिताते हैं।',
    'Envy never touches us at another rise nor do we bend self-respect before anyone,\nGrateful for divine blessings we live royally upon honest principles every single day.'
  ],
  [
    'कुछ ज़ख़्म ऐसे भी होते हैं सीने में जिन पर किसी हकीम की कोई दवा असर नहीं करती,\nवो तो बस अपनों के दो मीठे और प्यार भरे बोल सुनते ही अपने आप भर जाते हैं।',
    'Certain hidden wounds inside the chest resist every medicine known to physicians,\nHealing effortlessly the moment loved ones speak two tender comforting words.'
  ],
  [
    'दौलत से आप मख़मली बिस्तर और आलीशान मकान तो बड़े आराम से ख़रीद सकते हैं शहर में,\nमगर चैन की गहरी नींद और दिल का सच्चा सुकून सिर्फ़ नेक कर्मों की कमाई से मिलता है।',
    'Money easily buys velvet beds and towering mansions across glittering city streets,\nYet restful sleep and genuine inner peace come solely from honest deeds.'
  ],
  [
    'बिछड़ते वक़्त उसने पलटकर एक बार भी मेरी भीगी हुई सूनी आँखों की तरफ़ नहीं देखा,\nशायद उसे डर था कि मेरे आँसू देखकर उसके जाने के झूठे इरादे कहीं पिघल न जाएँ।',
    'Leaving she refused to glance back even once toward my tear-filled quiet eyes,\nAfraid perhaps that witnessing my sorrow might melt her resolve to walk away.'
  ],
  [
    'पतझड़ के सूखे पत्तों का गिरना पेड़ की हार नहीं बल्कि नए बसंत के आने की आहट है,\nइसलिए ज़िंदगी के कठिन दौर में घबराने के बजाय नई कोंपलों के खिलने का सब्र रखो।',
    'Falling autumn leaves signal never defeat for trees only footsteps of coming spring,\nHold steady patience through rough seasons trusting fresh buds will bloom soon.'
  ],
  [
    'हमने तो अपनी सादगी में हर मिलने वाले हाथ को अपना सच्चा हमदर्द मान लिया था कल,\nमगर वक़्त की तेज़ धूप ने दिखा दिया कि अँधेरा आते ही परछाई भी साथ छोड़ देती है।',
    'In simple trust I once mistook every outstretched hand for a lifelong well-wisher,\nUntil harsh trials proved even shadows vanish quickly once darkness thickens.'
  ],
  [
    'तेरी हथेली पर रची हुई गहरी मेहंदी में जब मुझे अपने नाम का पहला अक्षर दिखा,\nयकीन मानो उस एक पल में मुझे सातों आसमान की सारी ख़ुशियाँ एक साथ मिल गईं।',
    'Spotting the initial of my name hidden inside deep henna upon your soft palm,\nBelieve me that single instant gifted me every joy across seven heavens.'
  ],
  [
    'शिकायतें तो वहाँ की जाती हैं जहाँ सामने वाले को आपके रूठने या रोने की परवाह हो,\nजहाँ जज़्बातों का मोल ही न बचे वहाँ मुस्कुराकर ख़ामोश हो जाना सबसे बड़ी समझदारी है।',
    'Complaints belong only where someone genuinely cares if you hurt or shed tears,\nWhere feelings lose value stepping back with a calm smile is highest wisdom.'
  ],
  [
    'पिता की पुरानी घिसी हुई चप्पल और माँ के आँचल की ठंडी छाँव कभी मत भूलना दोस्त,\nइन्हीं दो पावन स्तंभों के त्याग पर आज तुम्हारी कामयाबी की ऊँची इमारत खड़ी हुई है।',
    'Never forget father worn sandals or the cool shelter of mother loving sari,\nUpon their quiet sacrifices stands every brick of your proud success today.'
  ],
  [
    'समुद्र की लहरों से पूछो कि किनारे को छूकर बार-बार वापस लौट जाने का दर्द क्या है,\nकुछ अधूरी मोहब्बतें भी क़िस्मत में बिल्कुल ऐसी ही लिखी होती हैं जो मिलकर भी नहीं मिलतीं।',
    'Ask ocean waves how deeply it aches touching shore only to pull back again,\nSome unfinished romances share that fate meeting briefly without ever staying.'
  ],
  [
    'छोटी सी इस ज़िंदगी में नफ़रत और अहंकार का भारी पत्थर सीने पर ढोकर क्या ले जाओगे,\nचार दिन की मुलाक़ात है यहाँ सबसे मीठे बोल बोलो और यादों में खुशबू छोड़ जाओ।',
    'Why carry heavy boulders of pride and resentment across such a brief human span,\nSpeak kindly during our short visit leaving sweet fragrance inside memories.'
  ],
  [
    'जब सारे रास्ते बंद नज़र आएँ और उम्मीद की आख़िरी किरण भी धुँधली पड़ने लगे रात में,\nतब आँखें बंद कर अपने रब को पुकारना क्योंकि वो नामुमकिन को मुमकिन करना जानता है।',
    'When every road looks blocked and final glimmers of hope dim late at night,\nClose your eyes calling upon God who turns impossible paths wide open.'
  ],
  [
    'तेरी सादगी के आगे इस ज़माने के सारे महँगे श्रृंगार और बनावटी नज़ारे हार जाते हैं,\nमाथे की एक छोटी सी काली बिंदी ही मेरे सीधे दिल का चैन चुराने को काफ़ी है।',
    'Before your natural grace every costly ornament and artificial glamour fades away,\nOne tiny black bindi on your forehead steals the quiet peace of my heart.'
  ],
  [
    'ठोकरों ने गिराया तो बहुत बार मुझे सफ़र की पथरीली और अनजानी पगडंडियों के मोड़ पर,\nमगर हर बार धूल झाड़कर दोगुने जज़्बे से उठ खड़ा होना ही मेरी असली पहचान बन गया।',
    'Stony unfamiliar trails tripped my stride countless times around sharp turns,\nBrushing off dust to rise twice as determined became my truest signature.'
  ],
  [
    'मोहब्बत में वादे हज़ार करने से कहीं ज़्यादा ख़ूबसूरत है किसी का हाथ आख़िर तक थामे रखना,\nक्योंकि वफ़ा लफ़्ज़ों के शोर से नहीं बल्कि कठिन वक़्त में साथ खड़े रहने से साबित होती है।',
    'Holding someone hand faithfully till the end outshines making a thousand promises,\nLoyalty proves itself never through loud words only standing firm in storms.'
  ]
];

// 17. Gussa / Narazgi Shayari (30 unique 25-40 word poems)
const GUSSA_POEMS: readonly RawPoemTuple[] = [
  [
    'गुस्सा हम उन्हीं पर करते जिन पर हक़ समझते हैं,\nगैरों की बातों पर बस मुस्कुराकर आगे बढ़ते हैं,\nमेरी नाराज़गी में भी तेरी गहरी फ़िक्र छुपी है,\nवरना बेमतलब उलझना हम भला कब पसंद करते हैं।',
    'Anger surfaces only where the heart feels genuine belonging,\nBefore strangers we simply nod politely and walk onward,\nEven inside my displeasure hides boundless care for you,\nOtherwise arguing needlessly was never part of my nature.'
  ],
  [
    'बात-बात पर तेरा मुँह फुला लेना अजब कमाल करता है,\nअच्छा-ख़ासा सुलझा दिन मेरा एकदम बेहाल करता है,\nगुस्सा थूक दे अब और देख मेरी तरफ़ प्यार से,\nतेरा ये अबोलापन मेरे सीने में सौ सवाल करता है।',
    'Pouting over tiny moments works a strange spell on me,\nTurning a calm afternoon restless within seconds,\nLet go of your frown now and glance warmly my way,\nYour quiet standoff stirs a hundred anxious questions.'
  ],
  [
    'हम चुप हैं आज मगर दर्द कम नहीं हुआ,\nतेरा बदला लहजा मेरे स्वाभिमान को गवारा नहीं हुआ,\nनाराज़गी हद पार करे तो ख़ामोशी बन जाती है,\nलाख मनाने पर भी दिल पहले सा नहीं हुआ।',
    'My silence today never means your harshness left zero sting,\nYour cold tone crossed lines my self-respect holds dear,\nWhen hurt passes limits displeasure turns into stillness,\nMaking hearts slow to soften back into yesterday.'
  ],
  [
    'माथे की शिकन देखकर समझ जाता हूँ मौसम का हाल,\nनाहक छोटी बातों पर चढ़ा लेती हो गुस्से का मलाल,\nमुस्कुरा दो कि गुस्से में भी बड़ी प्यारी लगती हो,\nमगर तुम्हारी चुप्पी कर देती है जज़्बातों को निढाल।',
    'One crease across your brow forecasts the emotional weather,\nWhy gather clouds of annoyance over tiny misunderstandings,\nSmile gently for even upset your face looks endearing,\nThough silent distance leaves my spirit drained.'
  ],
  [
    'हर बार मैं ही झुकूँ ये भी मुनासिब नहीं होता,\nएकतरफ़ा समझौतों से मोहब्बत का घर आबाद नहीं होता,\nमेरी नाराज़गी जायज़ है थोड़ा समझने की कोशिश कर,\nबिना वजह शांत समंदर में ऐसा तूफ़ान नहीं होता।',
    'Expecting me alone to bend every time feels unfair,\nOne-sided compromises rarely keep affection thriving,\nUnderstand honestly why my heart feels upset today,\nCalm oceans never rise stormy without real cause.'
  ],
  [
    'गुस्से के पल में इंसान कड़वे लफ़्ज़ बोल जाता है,\nबरसों के मीठे रिश्तों में ज़हर घोल जाता है,\nठहरकर सोचना सीखो जब मन का पारा चढ़ने लगे,\nसंयम ही नाज़ुक डोर की गाँठ खोल जाता है।',
    'Two heated minutes blurt bitter words out carelessly,\nPouring poison across sweet bonds built over years,\nPause thoughtfully whenever temper begins climbing,\nPatience unties delicate knots without snapping threads.'
  ],
  [
    'रूठे हो मुझसे पर वजह साफ़ लफ़्ज़ों में बता दो,\nजो ग़लतफ़हमी जमी है सीने में आज मिटा दो,\nयूँ अनदेखा करके गुज़र जाना बहुत तकलीफ़ देता है,\nचाहे जी भर डाँट लो पर ख़ामोशी हटा दो।',
    'Tell me plainly in clear words why you grew upset,\nClearing away whatever misunderstanding settled inside,\nWalking past pretending not to see hurts deeply,\nScold me openly rather than keeping cold silence.'
  ],
  [
    'नाराज़ हूँ तुझसे तेरी झूठी तसल्लियों के अंदाज़ पर,\nवक़्त पर काम न आने वाले खोखले अल्फ़ाज़ पर,\nज़रूरत थी साथ की तब तूने बहाने हज़ार गढ़े,\nअब किस हक़ से मरहम लगाता है पुराने राज़ पर।',
    'Disappointed deeply by your habit of hollow assurances,\nEmpty promises vanishing whenever support mattered,\nWhen I needed company you crafted endless excuses,\nBy what right do you offer late comfort today.'
  ],
  [
    'गुस्सा सिर-आँखों पर बस छोड़ जाने की बात न कर,\nछोटी तकरार में प्यार को बर्बाद रात न कर,\nलड़ ले जितना चाहे पूरा हक़ तुझे दिया है,\nपरायों सा व्यवहार कर दिल पर आघात न कर।',
    'Even your temper is welcome just never speak of leaving,\nDo not let minor spats wreck years of warm devotion,\nArgue freely knowing your place stays secure with me,\nOnly never wound my heart acting distant like strangers.'
  ],
  [
    'उम्मीद टूटती है अपनों से तब नाराज़गी जनम लेती है,\nराह चलते मुसाफ़िर से भला किसकी शिकायत होती है,\nजितना गहरा प्यार होगा उतनी तीखी तकरार भी दिखेगी,\nबेरुख़ी से बेहतर अपनों की ये मीठी अदावत होती है।',
    'Broken expectations from loved ones spark genuine hurt,\nNobody feels disappointed by strangers passing roads,\nDeep affection naturally brings passionate disagreements,\nHonest friction beats cold indifference any day.'
  ],
  [
    'आग बबूला होकर भी तू भला दुआ में माँगता है,\nऊपर गुस्सा दिखाकर अंदर मेरी सलामती झाँकता है,\nजानता हूँ तेरे इस झूठे सख़्त चेहरे का राज़,\nनाराज़गी से ज़्यादा तेरा प्यार दिल को बाँधता है।',
    'Fuming outside you still pray quietly for my welfare,\nChecking carefully if I ate well beneath stern looks,\nI see clearly behind your pretended tough expression,\nWarm care underneath binds me closer than ever.'
  ],
  [
    'हद तक अच्छी लगती है रिश्तों में रूठने की रीत,\nज़्यादा खिंचे बात तो कड़वे पड़ते मन के गीत,\nअभिमान की दीवार गिराकर फिर साथ बैठें आज,\nअपनों से हार जाने में छुपी है असली जीत।',
    'Sulking charms a bond only up to a gentle measure,\nStretched too far silence sours melodies inside heart,\nLet us pull down walls of pride sitting close today,\nLosing softly to loved ones wins lasting harmony.'
  ],
  [
    'फ़ोन काट देना और मैसेज देखकर जवाब न देना तेरा,\nमेरे सीधे सब्र का कैसा सख़्त इम्तिहान लेना तेरा,\nनाराज़गी है तो सामने बैठकर आँखों में डालकर कह,\nयूँ मुँह मोड़ना कितना मुश्किल करता है रहना मेरा।',
    'Hanging up calls and leaving messages unanswered,\nTests every ounce of patience inside my chest,\nIf upset sit across from me speaking eye to eye,\nTurning away makes every passing hour heavy.'
  ],
  [
    'सच में नाराज़ होते तो बहस बिल्कुल बंद करते,\nसफ़ाई देने और सुनने के दरवाज़े मंद करते,\nजब तक शिकायत है समझ लो रिश्ता ज़िंदा है,\nख़ामोश हुए जिस दिन सारे नाते छंद करते।',
    'True displeasure ends every argument completely,\nClosing quiet doors on explanations and debate,\nAs long as complaints flow know the bond lives on,\nTotal silence signals that care finally walked out.'
  ],
  [
    'तेरी तीखी बातों ने आज दिल का कोना छील दिया,\nबिना मेरी बात सुने तूने मुझे ग़लत मान लिया,\nइंसाफ़ की उम्मीद तुझसे थी पूरी दुनिया से ज़्यादा,\nउसी भरोसे के टूटने ने आँखों को गीला किया।',
    'Sharp words scraped a tender corner of my heart today,\nJudging me guilty before hearing my side fairly,\nFrom you above everyone I expected gentle trust,\nWatching that faith falter dampened my lashes.'
  ],
  [
    'गुस्सा हवा के झोंके सा आता और गुज़र जाता है,\nसमझदार इंसान तूफ़ान में भी अपना आँगन बचाता है,\nक्रोध की आँच में अपने अनमोल रिश्ते मत जलाना,\nराख हो जाने के बाद पछतावा ही हाथ आता है।',
    'Anger rushes in like a sudden gust then passes quickly,\nWise souls shelter home gardens steady through squalls,\nNever burn precious ties inside flashes of temper,\nOnce turned to ash only hollow regret remains.'
  ],
  [
    'नाक पर रहता है गुस्सा तेरे हर छोटी बात पर,\nफिर भी जाँ निसार है तेरे मासूम जज़्बात पर,\nलड़ती रह मुझसे यूँ ही पूरे अधिकार के साथ,\nहर बार मना लूँगा तुझे चाय की मुलाक़ात पर।',
    'Temper perches playfully right on the tip of your nose,\nYet my heart adores every honest emotion of yours,\nQuarrel freely claiming full right over my time,\nWarm tea and smiles will win you back each evening.'
  ],
  [
    'बोलचाल बंद है मगर नज़रें अब भी ढूँढती हैं तुझे,\nगुस्से की आड़ में धड़कनें हर पल पूछती हैं तुझे,\nकितना मुश्किल है अपने सबसे प्यारे शख़्स से रूठना,\nजहाँ ज़ुबान सख़्त हो पर रूह पूजती है तुझे।',
    'Not on speaking terms yet our eyes still search crowds,\nBehind stern faces heartbeats ask quietly after you,\nHow hard staying upset with one dearest person feels,\nWhen lips act firm while the soul cherishes deep.'
  ],
  [
    'मेरे सब्र को बेबसी मत समझ लेना बात बनाने वाले,\nरिश्ते बचाने की ख़ातिर अक्सर कड़वे घूँट पीते हैं,\nजिस दिन आत्मसम्मान की आख़िरी लकीर कोई लाँघ गया,\nबिना शोर किए उस गली का पता भूलते हैं।',
    'Never mistake calm patience for weakness careless speaker,\nSwallowing bitter drops solely to preserve old ties,\nCross the final boundary of dignity just once,\nAnd I erase that lane quietly without looking back.'
  ],
  [
    'थोड़ी नाराज़गी नमक बराबर रिश्तों का स्वाद बढ़ाती है,\nमनाने की कोशिश में मोहब्बत और गहरी हो जाती है,\nध्यान रहे बात कभी दिल तोड़ने तक न पहुँचे,\nप्यार भरी तकरार दो दिलों को क़रीब लाती है।',
    'A pinch of playful pouting seasons close affection,\nSweetening love deeper during tender reconciliation,\nSimply guard care so words never bruise the spirit,\nFond banter draws two devoted hearts even closer.'
  ],
  [
    'चेहरा लाल हो जाता जब तू गुस्से में भवें तानता है,\nअगले ही पल मेरी हँसी देखकर ख़ुद भी मानता है,\nखट्टी-मीठी नोकझोंक से गुलज़ार है अपना प्यारा रिश्ता,\nजो रूठने और मनाने का सुंदर हुनर जानता है।',
    'Cheeks flush crimson whenever you knit stern brows,\nMelting into laughter the second you catch my grin,\nBittersweet playful sparks keep our bond vibrant,\nKnowing effortlessly both sulking and sweet peace.'
  ],
  [
    'आज शब्द तीखे थे मेरे पर नीयत बुरी नहीं थी,\nसही रास्ता दिखाने के सिवा कोई मजबूरी नहीं थी,\nमाँ-बाप या सच्चे दोस्त का गुस्सा आशीर्वाद होता है,\nजिसकी कड़वाहट में भी तेरी भलाई अधूरी नहीं थी।',
    'Words sounded firm today yet zero ill will lived within,\nGuiding you safely forward was my sole intention,\nHonest sternness from loved ones shields like armor,\nCarrying pure care beneath brief bitter medicine.'
  ],
  [
    'नाराज़ होकर बैठने से मसले कभी हल नहीं होते हैं,\nबंद दरवाज़ों के पीछे उजले सवेरे कल नहीं होते हैं,\nआओ बैठकर सुलझा लें हर उलझी हुई गिरह को,\nसंवाद से बड़े पहाड़ भी अचल नहीं होते हैं।',
    'Sitting apart in silence solves zero misunderstandings,\nBright mornings rarely enter locked shuttered rooms,\nCome sit together untangling every knotted thread,\nOpen conversation moves even stubborn mountains.'
  ],
  [
    'तेरी बेरुख़ी ने मेरे भीतर का उत्साह बुझा दिया,\nप्यार से सजाया था जो हर सपना सुला दिया,\nगुस्सा होता तो सिर झुकाकर सौ बार मना लेता,\nतेरी इस ठंडी उपेक्षा ने अंदर तक रुला दिया।',
    'Cold indifference dimmed every bright spark within me,\nPutting tender hopes I arranged quietly to sleep,\nPlain anger I would gladly soothe a hundred times,\nCalculated neglect cuts deeper than loud storms.'
  ],
  [
    'मत आज़मा इतना कि मेरा भरोसा ही तुझसे उठ जाए,\nमत खींच डोर इतनी कि नाज़ुक रिश्ता ही टूट जाए,\nनाराज़गी अपनी जगह सही पर मर्यादा का ध्यान रखना,\nकहीं गुस्से की आग में बरसों का साथ ही छूट जाए।',
    'Do not push patience until foundational trust cracks,\nPulling delicate threads hard enough to snap apart,\nExpress hurt fairly while honoring mutual respect,\nLest fleeting fire consume years of companionship.'
  ],
  [
    'शाम की ठंडी हवा में सारा गुस्सा बहा दे आज,\nदिल पर जमी पुरानी धूल को हटा दे आज,\nछोटी है ज़िंदगी इसमें क्या बैर पालकर रखना,\nप्यारी मुस्कान से फिर अपनापन जगा दे आज।',
    'Let cool evening breezes carry lingering anger away,\nBrushing old dust gently off the mirror of heart,\nLife passes far too fast to nurse heavy grudges,\nRekindle familiar warmth today with one kind smile.'
  ],
  [
    'तेरे रूठने पर आसमान के तारे फीके पड़ जाते हैं,\nमेरे ज़रूरी काम भी अधूरे बीच में अड़ जाते हैं,\nमान जा अब और ख़त्म कर सख़्त नाराज़गी अपनी,\nतेरी एक हँसी से टूटे हौसले बढ़ जाते हैं।',
    'Even night stars look dim whenever you stay upset,\nLeaving every daily task half-finished in my hands,\nRelent gently now ending this heavy quietness,\nOne laugh from you restores all my courage.'
  ],
  [
    'क्रोध इंसान की बुद्धि पर कोहरे सा पर्दा डालता है,\nहँसते आँगन को पल भर में उछाल देता है,\nजो पी जाता गुस्से का घूँट मुस्कुराकर वक़्त पर,\nवही समझदार शख़्स हर रिश्ते को संभाल लेता है।',
    'Rage drapes thick fog across clear human judgment,\nShaking peaceful courtyards within careless seconds,\nWhoever swallows hot temper calmly at the right hour,\nProtects cherished relationships safe through storms.'
  ],
  [
    'हक़ है मुझ पर इसलिए तेरा गुस्सा मीठा लगता,\nकिसी और का तीखा बोलना एक पल नहीं फबता,\nबस इतनी शर्त है हमारी इस प्यारी मोहब्बत की,\nरूठना चाहे सुबह पर शाम साथ चाय पर जमता।',
    'Because you belong to my heart even scolding charms,\nSharp tones from anyone else never earn patience,\nOne sweet rule governs our lifelong companionship,\nQuarrel at noon yet share warm tea before dusk.'
  ],
  [
    'चलो गुस्से की गठरी आज नदी में बहा आते हैं,\nबीती कड़वी बातों पर फूलों की चादर बिछाते हैं,\nन तुम बुरे दिल के न हम पराये तुम्हारे,\nहाथ मिलाकर रिश्ते में नई जान जगा आते हैं।',
    'Let us set bundles of resentment adrift downstream,\nSpreading fresh blossoms over yesterday harshness,\nNeither is your heart unkind nor am I a stranger,\nClasping hands anew breathes joy back into us.'
  ]
];

// 18. Family / Maa Papa Shayari (30 unique 25-40 word poems)
const FAMILY_POEMS: readonly RawPoemTuple[] = [
  [
    'माँ के आँचल में जन्नत और पिता साये में मान है,\nमाता-पिता के चरणों में बसता चारों धाम महान है,\nदुनिया की दौलत दोबारा कमाई जा सकती है यारों,\nपरिवार के बिना इंसान भरी भीड़ में वीरान है।',
    'Heaven rests in mother lap and honor under father shade,\nAll sacred shrines dwell right at parents feet,\nWorldly wealth can always be earned back again,\nWithout family a soul stands lonely amidst crowds.'
  ],
  [
    'ख़ुद गीले में सोकर माँ ने हमेशा सूखे में सुलाया है,\nअपने हिस्से का निवाला देकर मेरा बचपन सजाया है,\nभगवान को हर घर में पहुँचना मुमकिन न था शायद,\nइसलिए उसने धरती पर माँ का पावन रूप बनाया है।',
    'Sleeping on dampness herself mother kept me dry,\nFeeding me her own morsel to brighten childhood,\nUnable to dwell physically inside every household,\nGod shaped pure divinity into a mother form.'
  ],
  [
    'पिता वो मज़बूत छत हैं जो हर धूप-बारिश सहते हैं,\nअंदर से मोम जैसे पर बाहर से चट्टान रहते हैं,\nउँगली पकड़कर जिन्होंने दुनिया के मेले में चलना सिखाया,\nउनके पसीने के क़र्ज़ को हम कैसे चुका सकते हैं।',
    'Father stands like a roof braving sun and storm,\nTender inside as wax yet steady as solid rock,\nHolding our finger through life crowded fairgrounds,\nHow could anyone ever repay his quiet sweat.'
  ],
  [
    'परिवार की एकता में सबसे बड़ी ताक़त छुपी होती है,\nजहाँ प्रेम हो सूखी रोटी भी मीठी लगती है,\nदीवारों और महँगे फ़र्नीचर से सिर्फ़ मकान बनते हैं,\nजहाँ अपनों की हँसी गूँजे वही घर कहलाता है।',
    'Greatest strength lives inside family unity,\nWhere affection dwells plain bread tastes sweet,\nWalls and fine furniture build mere houses,\nShared laughter of loved ones creates true home.'
  ],
  [
    'माँ की थपकियों के आगे नींद की गोलियाँ बेकार हैं,\nपिता के हौसले के आगे दुनिया की मुश्किलें लाचार हैं,\nचाहे कितने भी बड़े अफ़सर बन जाओ तुम शहर जाकर,\nमाँ-पापा के लिए तो आज भी वही नन्हे राजकुमार हैं।',
    'Mother gentle pats outshine every sleeping pill,\nFather steady encouragement humbles steep hurdles,\nNo matter how high your rank rises in cities,\nTo parents you remain their cherished child.'
  ],
  [
    'परदेस की कमाई से जेब भर जाती है नोटों से,\nपर दिल तरसता माँ के हाथ के गर्म परांठों से,\nशाम ढलते जब घर के आँगन की याद सताती,\nआँखें भर आती हैं परिवार के पुराने किस्सों से।',
    'Distant city jobs fill wallets with crisp notes,\nWhile hearts ache for mother hot flatbreads,\nWhen evening dusk stirs courtyard memories,\nEyes mist fondly recalling family stories.'
  ],
  [
    'फटी हुई जेब में भी पिता ने मेरे शौक़ पूरे किए,\nमेरी नई किताबों के लिए अपने पुराने जूते सिए,\nबिना जतलाए जो अपनी पूरी जवानी बच्चों पर वार दे,\nऐसे त्यागमय पिता के क़दमों में हज़ार सजदे किए।',
    'Even with worn pockets father fulfilled my wishes,\nMending old shoes so I carried fresh textbooks,\nPouring his prime years quietly into our growth,\nA thousand bows belong beneath father feet.'
  ],
  [
    'माँ आवाज़ की कंपन से ही बुख़ार भाँप लेती है,\nफ़ोन पर मेरी सारी छुपी उदासी नाप लेती है,\nदुनिया का कोई डॉक्टर इतना सटीक इलाज न जानता,\nजितनी राहत माँ की दुआ पल में दे देती है।',
    'Mother detects fever simply hearing my voice,\nMeasuring hidden sadness instantly over phone,\nNo physician matches her intuitive healing,\nOne whispered blessing brings immediate relief.'
  ],
  [
    'जिस घर में बड़े-बुज़ुर्गों का आदर सुबह-शाम होता है,\nवहाँ ख़ुशहाली और बरकत का स्थायी मुक़ाम होता है,\nपेड़ की जड़ें सींचते रहो तो फल अपने आप लगेंगे,\nमाँ-बाप की सेवा से ही जग में ऊँचा नाम होता है।',
    'Homes honoring elders warmly morning and dusk,\nBecome permanent dwellings of grace and peace,\nWater deep roots and branches bear fruit naturally,\nServing parents elevates every name in honor.'
  ],
  [
    'थाली में सबसे आख़िर में खाने बैठती है माँ,\nसबका पेट भरे इसी सुख में जीती है माँ,\nकभी छुट्टी न लेती अपने निस्वार्थ स्नेह से,\nघर की हर ईंट ममता के धागे सीती माँ।',
    'Sitting down last to eat at the family table,\nMother finds joy watching everyone well fed,\nNever taking a single holiday from selfless care,\nStitching every wall together with warm love.'
  ],
  [
    'कंधे पर बिठाकर पिता ने मुझे खुद से ऊँचा दिखाया,\nठोकर लगी जब राह में तो हौसला देकर उठाया,\nसख़्त लहजे के पीछे छुपा था समंदर जितना दुलार,\nये गहरा सच मुझे ख़ुद ज़िम्मेदार बनकर समझ आया।',
    'Lifting me onto his shoulders to see farther,\nSteadying my stride each time I stumbled,\nBehind firm words hid oceans of tender care,\nA truth understood deeply once duties arrived.'
  ],
  [
    'सब साथ बैठकर जब आँगन में चाय पीते हैं,\nएक ही पल में सौ सालों की ख़ुशी जीते हैं,\nनज़रों से दूर मत होने देना परिवार का साथ,\nक्योंकि अपने ही हर दुःख को प्यार से सीते हैं।',
    'Gathering together for evening tea outdoors,\nLives a century of happiness inside one hour,\nNever let family bonds drift out of sight,\nLoved ones stitch torn sorrows gently shut.'
  ],
  [
    'माँ के माथे की बिंदिया और पापा की साफ़ पगड़ी,\nयही दोनों मेरी ज़िंदगी की दौलत हैं सबसे तगड़ी,\nरब से बस इतनी इल्तिजा है मेरी हर सुबह की दुआ में,\nसलामत रहे मेरे आँगन की ये पावन फुलवाड़ी सगड़ी।',
    'Mother bright bindi and father proud turban,\nStand as the richest treasures of my life,\nEvery dawn prayer asks heaven one sole grace,\nKeep this sacred garden of home thriving.'
  ],
  [
    'बाहर की दुनिया जब ताने देकर हौसला तोड़ती है,\nपरिवार की झप्पी टूटी हिम्मत फिर जोड़ती है,\nजहाँ हार के बाद भी प्यार कम न हो,\nघर की दहलीज़ हर तूफ़ान का रुख़ मोड़ती है।',
    'When harsh crowds bruise confidence outside,\nOne family embrace rebuilds broken courage,\nWhere love stays unchanged even after defeat,\nThat doorstep turns every storm aside.'
  ],
  [
    'झुर्रियाँ पड़ गईं उनके हाथों में मेरा कल सँवारते हुए,\nसफ़ेद हो गए बाल मेरी राहें निहारते हुए,\nअब मेरी बारी है उनकी लाठी और मुस्कान बनने की,\nउम्र गुज़ार दूँगा माँ-पापा की नज़र उतारते हुए।',
    'Wrinkles etched their hands shaping my future,\nSilver touched hair watching my long roads,\nNow comes my turn to stand as their support,\nCherishing mother and father lifelong.'
  ],
  [
    'त्यौहार की असली चमक तो परिवार के बीच ही आती है,\nअकेले कमरे में तो दीवाली भी सूनी गुज़र जाती है,\nमिठाइयों का स्वाद दोगुना हो जाता है उस आँगन में,\nजहाँ माँ परोसती है और पूरी टोली खिलखिलाती है।',
    'Festivals glow brightest surrounded by family,\nAlone in rooms even lamps feel quiet,\nSweets taste twice as rich inside courtyards,\nWhere mother serves amidst ringing laughter.'
  ],
  [
    'पिता की जेब खाली हो फिर भी ना नहीं कहते,\nअपने सिर का बोझ बच्चों के सामने नहीं कहते,\nचुपचाप ढाल बनकर खड़े रहते हर संकट के आगे,\nउनके होने से ही हमारे सिर खुले आसमान रहते।',
    'Even empty-handed father rarely says no,\nNever speaking aloud the weight he carries,\nStanding quietly as shield before hardship,\nHis presence keeps skies secure overhead.'
  ],
  [
    'माँ के चरणों की धूल माथे का शुभ तिलक है,\nउसकी निस्वार्थ दुआओं में ख़ुद ईश्वर की झलक है,\nलाख मंदिर घूम लो चाहे तीर्थों में डुबकी लगाओ,\nमाँ मुस्कुरा दे घर में तो उतरता फ़लक है।',
    'Dust from mother feet graces any forehead,\nSelfless prayers reflect divine light pure,\nVisit distant shrines or sacred rivers afar,\nWhen mother smiles heaven descends home.'
  ],
  [
    'थोड़ी नोकझोंक हो पर दिल हमेशा जुड़े रहते हैं,\nपरिवार के लोग मुसीबत में चट्टान से अड़े रहते,\nगैरों की चिकनी बातों में अपनों को मत खोना,\nबुरे वक़्त में अपने ही दरवाज़े खड़े रहते हैं।',
    'Small spats pass while hearts stay knotted tight,\nFamily members stand firm like rock in crisis,\nNever trade kindred away for smooth flattery,\nIn dark hours family alone waits outside.'
  ],
  [
    'बचपन की वो गोद और पिता के कंधे की ऊँची सवारी,\nयाद आती है आज भी वो निश्छल दुनिया हमारी,\nकितने खुशकिस्मत हैं वो जिनके सिर पर दोनों का हाथ है,\nमाँ-पापा की मुस्कान से ही सजती बगिया सारी।',
    'Childhood laps and rides atop father shoulders,\nEcho fondly from innocent golden mornings,\nBlessed indeed are heads sheltered by both,\nParents smiles keep life garden blooming.'
  ],
  [
    'घर लौटते ही पहला सवाल माँ कहाँ है ज़ुबान पर आता,\nचाहे घर में सब हों पर माँ बिन सूनापन सताता,\nएक औरत नहीं वो पूरे घर की धड़कती हुई रूह है,\nजिसके स्नेह से हर बेजान कोना भी मुस्कुराता।',
    'Stepping indoors first words ask where is maa,\nEven full rooms feel empty missing her face,\nShe beats as the living soul of home,\nWarming every corner with tender grace.'
  ],
  [
    'पापा ने सिखाया स्वाभिमान से सिर उठाकर आगे चलना,\nमाँ ने सिखाया विनम्र रहकर हर साँचे में ढलना,\nदोनों की दी हुई शिक्षा मेरी सबसे बड़ी पूँजी है,\nजिसके उजाले में मुमकिन हुआ अंधेरों से निकलना।',
    'Father taught walking tall in honest dignity,\nMother taught gentle grace through humility,\nLessons from both form my greatest capital,\nLighting pathways clear past dark valleys.'
  ],
  [
    'पैसों का पेड़ न होता फिर भी पिता ख्वाहिश पूरी करते,\nसादा जीवन जीकर बच्चों के सपनों में रंग भरते,\nगले लगाकर शुक्रिया कह देना अपने पापा को आज,\nजो तुम्हारी एक मुस्कान के लिए दुनिया से लड़ते।',
    'Without money trees father meets every wish,\nLiving simply while painting children dreams,\nEmbrace your dad warmly thanking him today,\nFighting harsh worlds just to see you smile.'
  ],
  [
    'माँ की रोटी में अमृत सा स्वाद घुला है,\nमहँगे होटलों में वैसा ज़ायका कहाँ मिला है,\nपेट ही नहीं पूरी आत्मा तृप्त हो जाती है,\nजब माँ प्यार से एक निवाला और खिलाती है।',
    'Nectar lives inside bread rolled by mother hand,\nUnmatched by five-star kitchens anywhere,\nBoth stomach and spirit feel deeply nourished,\nHearing her urge lovingly one bite more.'
  ],
  [
    'संयुक्त परिवार की रौनक़ किसी उत्सव से कम नहीं होती,\nजहाँ सब मिलकर बाँट लें वहाँ आँख नम नहीं होती,\nछोटी सी ख़ुशी चौगुनी और बड़ा दुख आधा रह जाता,\nअपनों की छत के नीचे कभी हिम्मत कम नहीं होती।',
    'Gathered families shine like daily festivals,\nShared burdens leave zero tear uncomforted,\nJoys multiply fourfold while grief halves fast,\nCourage stays strong beneath shared roofs.'
  ],
  [
    'वक़्त निकालकर बैठ जाया करो अपने बूढ़े माँ-बाप के पास,\nउन्हें तुम्हारी दौलत नहीं बस तुम्हारे वक़्त की है आस,\nजिन उँगलियों ने तुम्हें चलना सिखाया था कभी बचपन में,\nआज उन्हें थाम लेना ही सबसे बड़ा धर्म और विश्वास।',
    'Carve quiet time sitting beside aging parents,\nThey crave your company far above your money,\nHands that steadied your infant steps once,\nDeserve warm support with grateful devotion.'
  ],
  [
    'दहलीज़ पर खड़ी माँ जब तिलक लगाकर विदा करती है,\nअनजाने संकटों से हमारी ढाल बनकर रक्षा करती है,\nउसकी प्रार्थनाओं का कवच इतना अभेद्य होता है यारों,\nकि बड़ी से बड़ी बला भी रास्ता बदलकर गुज़रती है।',
    'Applying forehead tilak at the front doorstep,\nMother prayers form an unbreakable shield,\nSo potent stands her protective blessing,\nEvery looming trouble turns quietly aside.'
  ],
  [
    'पिता की डाँट में भविष्य सँवारने का सोना छुपा था,\nकच्ची उम्र में जो बेवजह का बंधन लगा था,\nआज ख़ुद दुनिया के बाज़ार में पाँव रखा हमने,\nतब जाना पिता का हर नियम कितना खरा था।',
    'Gold of guidance hid inside father firm scolding,\nMistaken in youth for unnecessary restraint,\nStepping into tough markets ourselves today,\nProved how wise every rule truly stood.'
  ],
  [
    'परिवार वो नाव है जो गहरे भँवर से पार लगाती है,\nहर थके मुसाफ़िर को सुकून का किनारा दिखाती है,\nकितनी भी ऊँची उड़ान भर ले परिंदा खुले गगन में,\nशाम ढले उसे अपने घोंसले की ही याद बुलाती है।',
    'Family sails us safely past deep whirlpools,\nOffering peaceful shores to weary travelers,\nNo matter how high birds soar across skies,\nSunset always calls wings home to nest.'
  ],
  [
    'ईश्वर से बढ़कर नाम नहीं माँ-पापा सा धाम नहीं,\nपरिवार की मुस्कान से प्यारा दूसरा कोई काम नहीं,\nजुड़े रहें दिल सदा स्नेह और सम्मान की डोर से,\nजहाँ अपने साथ हों वहाँ सुख का विराम नहीं।',
    'No shrine rises higher than loving parents,\nNothing outshines keeping home faces smiling,\nMay threads of respect bind hearts forever,\nWhere family stands together joy never ends.'
  ]
];

// 19. Bhai Behen Shayari (30 unique 25-40 word poems)
const BHAI_BEHEN_POEMS: readonly RawPoemTuple[] = [
  [
    'टीवी के रिमोट पर झगड़ना और पल में मान जाना,\nएक दूजे की शिकायत माँ से लगाकर मुस्कुराना,\nभाई-बहन का रिश्ता दुनिया में सबसे अनमोल होता है,\nजहाँ तकरार में भी छुपा रहता है प्यार का ख़ज़ाना।',
    'Fighting over remotes then laughing right back,\nTattling playfully to mom with mischievous grins,\nSibling bonds shine priceless across earth,\nHiding treasures of love inside teasing.'
  ],
  [
    'कलाई पर बँधा रेशम का धागा सिर्फ़ एक डोर नहीं,\nबहन की दुआओं जैसा रक्षा कवच कहीं और नहीं,\nभाई चाहे कितना भी चिढ़ा ले अपनी प्यारी बहना को,\nउसके आँसू देख ले तो भाई का दिल कमज़ोर सही।',
    'Silken rakhi threads mean far more than cord,\nNo armor matches a sister heartfelt prayers,\nHowever much a brother teases her daily,\nOne tear in her eye melts him instantly.'
  ],
  [
    'बड़ा भाई पिता समान साया बनकर साथ निभाता है,\nछोटी बहन को हथेली के फूल सा लाड़ लड़ाता है,\nमुश्किल घड़ी में पूरी दुनिया के आगे ढाल बन जाए,\nभाई के रहते बहन को कोई डर नहीं सताता है।',
    'An elder brother shelters like a second father,\nPampering his little sister like rare blossoms,\nStanding tall as shield against every trouble,\nBeside him fear never touches her path.'
  ],
  [
    'बड़ी बहन में हमेशा दूसरी माँ की झलक मिलती है,\nभाई की छोटी कामयाबी पर भी वो ख़ूब खिलती है,\nजेबख़र्च बचाकर जो चुपके से भाई की मदद कर दे,\nबहन के स्नेह से ही घर की बगिया महकती है।',
    'An elder sister reflects a second mother warmth,\nBeaming proudly at every small win of ours,\nSlipping saved pocket money quietly into hand,\nHer affection keeps home gardens fragrant.'
  ],
  [
    'बचपन की शरारतों के सबसे पक्के राज़दार होते हैं,\nभाई और बहन एक दूजे के पहले सच्चे यार होते हैं,\nवक़्त के साथ भले अपने-अपने कामों में व्यस्त हो जाएँ,\nपर दिल के कोने में वही पुराने अधिकार होते हैं।',
    'Trusted keepers of childhood mischief secrets,\nBrothers and sisters start as lifelong friends,\nThough adulthood fills calendars with duties,\nChildhood closeness holds eternal claim.'
  ],
  [
    'जब बहन विदा होकर ससुराल की गाड़ी में बैठती है,\nसख़्त दिखने वाले भाई की आँख छलक पड़ती है,\nसूना हो जाता कमरा जहाँ रोज़ नोकझोंक चलती थी,\nबहन के बिना आँगन की रौनक़ ठहर जाती है।',
    'When a bride departs home after wedding vows,\nEven her stoic brother wipes brimming tears,\nQuiet falls across rooms once loud with banter,\nMissing the sparkle she brought everywhere.'
  ],
  [
    'भाई की कलाई सूनी न रहे बहन मीलों आती है,\nमाथे पर तिलक सजाकर लंबी उम्र की दुआ गाती,\nन दौलत माँगती वो न महँगे तोहफ़ों की आस,\nमायके में भाई का स्नेह पाकर निहाल हो जाती।',
    'Crossing long miles so his wrist stays blessed,\nApplying bright tilak praying for long life,\nSeeking neither gold nor extravagant gifts,\nWarm brotherly welcome fills her heart.'
  ],
  [
    'मेरी हर गलती पर पहले ख़ूब डराती है मेरी बहना,\nफिर पापा की डाँट से ख़ुद ही बचाती है मेरी बहना,\nलड़ना तो हमारा जन्मसिद्ध अधिकार है हर दिन का,\nपर मेरे बिना एक निवाला न खाती है मेरी बहना।',
    'Threatening playfully whenever I mess things up,\nThen shielding me swiftly from father scolding,\nDaily squabbles remain our favorite pastime,\nYet she never dines peacefully until I eat.'
  ],
  [
    'छोटा भाई जब कंधे के बराबर लंबा हो जाता है,\nबहन के सिर का गौरव दोगुना ऊँचा हो जाता है,\nकल तक जिसकी उँगली पकड़कर स्कूल छोड़ने जाती थी,\nआज वही भाई बहन का मज़बूत सहारा कहलाता है।',
    'Watching her younger brother grow tall beside her,\nDoubles gentle pride inside a sister heart,\nOnce led by hand down neighborhood lanes,\nToday he stands steady as her strong pillar.'
  ],
  [
    'मिठाई के आख़िरी टुकड़े पर आज भी जंग छिड़ जाती,\nपुरानी एल्बम खोलें तो बचपन की यादें भिड़ जातीं,\nरब करे भाई-बहन का ये खट्टा-मीठा पावन बंधन,\nसदा रहे सलामत और हर बुरी नज़र उतर जाती।',
    'Playful battles over the last sweet piece,\nOld photo albums waking childhood giggles,\nMay heaven guard this sweet sibling bond,\nKeeping evil eyes far from their laughter.'
  ],
  [
    'बहन की हँसी से घर में लक्ष्मी का वास है,\nभाई के हौसले से हर सपना साकार ख़ास है,\nएक ही डाली के दो सुंदर फूल भाई-बहन हैं,\nजिनके मिलन से पूरे परिवार में उजास रहता है।',
    'A sister laughter invites grace indoors,\nA brother support brings bold dreams alive,\nTwo bright blossoms sharing one family branch,\nLighting the whole household with harmony.'
  ],
  [
    'ससुराल से बहन जब कुछ दिन मायके रहने आती है,\nभाई के चेहरे पर बचपन वाली रौनक़ लौटती है,\nदेर रात तक आँगन में चलती पुरानी कहानियाँ हैं,\nचंद दिनों की छुट्टी साल भर ख़ुशी दे जाती।',
    'Whenever a married sister visits home awhile,\nBoyhood cheer returns instantly to brother eyes,\nLate night courtyard stories echo fondly,\nGiving warmth enough to last whole years.'
  ],
  [
    'दुनिया के सामने जो भाई शेर जैसा रौब रखता है,\nअपनी छोटी बहन के आगे खुशी से हार मानता है,\nउसकी एक फ़रमाइश पूरी करने को शहर छान मारे,\nबहन की मुस्कान में ही वो अपनी जीत जानता है।',
    'Fierce as a lion before outside challenges,\nGladly surrendering to his little sister whim,\nSearching whole markets for what she wished,\nCounting her bright grin his finest prize.'
  ],
  [
    'बिना कहे भाई की उदासी पढ़ लेती हैं बहनें,\nअपने स्नेह के धागे से हर ज़ख़्म भर देती हैं बहनें,\nख़ुशकिस्मत हैं वो भाई जिनके पास एक प्यारी बहन है,\nक्योंकि माँ के बाद सबसे सच्चा प्यार देती हैं बहनें।',
    'Sisters read silent worry on brother faces,\nMending hidden hurts with gentle affection,\nFortunate indeed is every man with a sister,\nReceiving purest care second only to mother.'
  ],
  [
    'चॉकलेट छुपाकर रखना और फिर आधा बाँटकर खाना,\nएक दूजे के अजीब से नाम रखकर दिन भर चिढ़ाना,\nउम्र बढ़ गई हमारी पर आदतें आज भी वैसी हैं,\nभाई-बहन के प्यार का यही तो सबसे मीठा तराना।',
    'Hiding chocolates then splitting halves fairly,\nInventing funny nicknames all afternoon long,\nYears matured us yet fond habits remain,\nSinging the sweetest melody of sibling love.'
  ],
  [
    'भाई चाहे दूर परदेस में नौकरी करने चला जाए,\nबहन की दुआ हर सुबह उसके माथे को सहलाए,\nवीडियो कॉल पर भी वही पुरानी नोकझोंक चलती है,\nमीलों की दूरी भी इस रिश्ते का रंग न घटाए।',
    'Even when career takes a brother miles away,\nSister morning prayers bless his distant path,\nVideo calls spark the same playful teasing,\nDistance never dims colors of kinship.'
  ],
  [
    'जब कभी ज़िंदगी की राह में अकेलापन डराने लगे,\nभाई का एक फ़ोन ही सारा डर भगाने लगे,\nमैं हूँ न तेरे साथ बस इतना सुन लेना काफ़ी है,\nबहन के टूटे हौसले में नया पंख लगाने लगे।',
    'Whenever lonely stretches intimidate the heart,\nOne phone call from brother chases fear off,\nHearing I stand right beside you suffices,\nGiving fresh wings back to tired courage.'
  ],
  [
    'एक ही आँगन की मिट्टी में खेलकर बड़े हुए हम,\nमाँ की डाँट में भी एक दूजे के पीछे खड़े हुए हम,\nदुनिया का कोई रिश्ता इस पवित्र डोर सा नहीं,\nजहाँ निस्वार्थ प्रेम के मोती जड़े हुए हम।',
    'Growing up playing across the same courtyard,\nHiding behind each other during mom scolding,\nNo earthly bond equals this pure connection,\nStrung seamlessly with pearls of loyalty.'
  ],
  [
    'बहन के हाथ की चाय में भी अलग मिठास होती है,\nभाई की हर बेतुकी बात उसके लिए ख़ास होती है,\nथोड़ा नख़रा दिखाएगी पहले काम करने से पहले,\nपर भाई की ख़ुशी हमेशा उसके दिल के पास होती है।',
    'Tea brewed by sister carries special sweetness,\nEvery silly joke of brother wins her ear,\nPretending reluctance before doing small favors,\nWhile holding his happiness closest inside.'
  ],
  [
    'राखी और भाई-दूज तो बस साल के दो त्यौहार हैं,\nभाई-बहन के लिए तो हर दिन स्नेह के उपहार हैं,\nलड़ते-झगड़ते भी जो एक दूजे की जान में बसें,\nऐसे पावन रिश्ते धरती पर ईश्वर के चमत्कार हैं।',
    'Rakhi and Bhai Dooj mark two calendar dates,\nSibling affection celebrates every single day,\nQuarrelsome outside yet devoted to the core,\nSuch bonds shine as miracles on earth.'
  ],
  [
    'मेरी पॉकेट मनी पर पहला हक़ मेरी बहना का रहा,\nउसकी दुआओं से मेरा हर कठिन रास्ता आसान रहा,\nकितना भी कमा लूँ आज अपनी मेहनत से शहर में,\nबहन को तोहफ़ा देने का सुख सबसे महान रहा।',
    'First claim on my allowance belonged to her,\nHer blessings smoothed every tough road ahead,\nNo matter how much income I earn today,\nGifting my sister brings unmatched joy.'
  ],
  [
    'भाई की शादी में सबसे ज़्यादा नाचती है बहन,\nभाभी के आने पर घर को फूलों सा सजाती है बहन,\nअपनी जगह बँटने का रत्ती भर मलाल नहीं करती,\nबस भाई का संसार ख़ुशहाल देख मुस्कुराती है बहन।',
    'Dancing happiest throughout her brother wedding,\nDecorating rooms warmly welcoming his bride,\nNever feeling diminished sharing home space,\nBeaming purely to see his household thrive.'
  ],
  [
    'जब पापा गुस्सा हों तो बहन वकील बन जाती है,\nभाई की सिफ़ारिश में मीठी दलील बन जाती है,\nऔर जब बहन को चाहिए हो कोई नई ड्रेस बाज़ार से,\nतब भाई की जेब ख़ुशी-ख़ुशी झील बन जाती है।',
    'When dad frowns sister steps up as lawyer,\nPleading sweet arguments on brother behalf,\nWhenever she spots a pretty dress downtown,\nBrother wallet opens gladly without pause.'
  ],
  [
    'दो भाइयों का कंधा मिले तो रावण भी हार जाता है,\nऔर बहन का आशीर्वाद हो तो मुक़द्दर संवर जाता है,\nअपने सगे रिश्तों में कभी दरार मत आने देना,\nक्योंकि भाई-बहन के संग ही जीवन निखर जाता है।',
    'United brothers humble the mightiest foes,\nBlessed by a sister destiny shines bright,\nNever allow cracks between kindred hearts,\nTogether siblings make life truly radiant.'
  ],
  [
    'रूठी हुई बहन को चॉकलेट देकर मनाने के दिन,\nछत पर पतंग उड़ाते हुए मांझा थमाने के दिन,\nवक़्त की रफ़्तार चाहे कितनी भी आगे निकल जाए,\nदिल में महफ़ूज़ हैं बचपन के वो सुहाने दिन।',
    'Peace offerings of chocolate when she sulked,\nHolding kite spools together on windy roofs,\nHowever fast decades race forward today,\nThose golden childhood afternoons live safe.'
  ],
  [
    'तेरी सलामती की मन्नत हर मंदिर माँगती हूँ भाई,\nतेरी तरक़्क़ी में अपनी असली ख़ुशी आँकती हूँ भाई,\nकिसी भी मोड़ पर ले जाए ज़िंदगी हम दोनों को,\nहर जनम तेरी बहन बनने का वरदान माँगती भाई।',
    'At every shrine I pray for your safety brother,\nMeasuring my joy through your rising steps,\nWherever life pathways lead both of us,\nEach rebirth I wish to be your sister.'
  ],
  [
    'बहन पर कोई उँगली उठाए ये भाई सह नहीं सकता,\nउसके सम्मान के आगे वो चुपचाप रह नहीं सकता,\nभले घर में दिन भर उसे बंदरिया कहकर चिढ़ा ले,\nपर बाहर कोई एक शब्द भी ग़लत कह नहीं सकता।',
    'No brother tolerates a slight against his sister,\nStanding fiercely tall defending her honor,\nThough teasing her endlessly indoors himself,\nOutside nobody dares speak one harsh word.'
  ],
  [
    'हँसी, ठिठोली, दुलार और बेपनाह भरोसे का संगम,\nभाई-बहन के रिश्ते से सुहाना नहीं कोई मौसम,\nथोड़ी शरारत और ढेर सारी परवाह से बुनी डोरी,\nरखती है जीवन के हर पन्ने को खुशियों से नम।',
    'Laughter teasing warmth and unshakable trust,\nNo season rivals sibling companionship,\nWoven from mischief and protective care,\nKeeping pages of life bright with joy.'
  ],
  [
    'मायके की दहलीज़ भाई के नाम से गुलज़ार रहती है,\nबहन के दिल में हर ईंट से प्रीत रहती है,\nमाँ-बाप के बाद भाई ही मायके की पहचान है,\nजिसके होने से बहन को सदा हिम्मत अपार रहती।',
    'Childhood thresholds stay warm through brothers,\nEvery brick of home lives dear inside sisters,\nAfter parents a brother anchors maternal ties,\nGiving her lifelong confidence and shelter.'
  ],
  [
    'न नज़र लगे कभी हमारे इस पवित्र और प्यारे साथ को,\nरब सलामत रखे भाई-बहन के हर कोमल जज़्बात को,\nलड़ते रहें हम यूँ ही और प्यार भी दोगुना बढ़ता रहे,\nसूरज-चाँद सा अमर रखे ईश्वर हमारी इस बात को।',
    'May zero shadow touch our cherished bond,\nHeaven protecting tender sibling affection,\nPlayful spats doubling warmth year by year,\nEnduring bright as sun and silver moon.'
  ]
];

// 20. Zindagi / Life Shayari (30 unique 25-40 word poems)
const ZINDAGI_POEMS: readonly RawPoemTuple[] = [
  [
    'ज़िंदगी एक किताब है हर रोज़ नया पन्ना खुलता है,\nकभी मीठी धूप तो कभी घना बादल मिलता है,\nहर अध्याय को मुस्कुराकर पढ़ना सीख लो मुसाफ़िर,\nक्योंकि सुख और दुख दोनों से ही इंसान ढलता है।',
    'Life opens a brand new page every morning,\nBringing warm sunshine beside passing clouds,\nRead each chapter calmly with an open smile,\nBoth joy and sorrow sculpt human wisdom.'
  ],
  [
    'कभी हँसाती है बेवजह तो कभी चुपके रुला जाती है,\nज़िंदगी बिना ट्यूशन के ही बड़े सबक सिखा जाती है,\nडिग्रियाँ तो सिर्फ़ काग़ज़ पर नाम सजाने के काम आईं,\nअसली समझ तो ठोकर खाकर ही रास्ते में आती है।',
    'Sparking sudden laughter then quiet tears,\nLife teaches deep truths without classrooms,\nDegrees decorate paper certificates neatly,\nReal understanding wakes along rocky roads.'
  ],
  [
    'सफ़र छोटा है ज़िंदगी का मगर ख्वाहिशें बेहिसाब हैं,\nआधी उम्र गुज़र गई और अधूरे कई ख़्वाब हैं,\nजितना पास है आज उसी को जी लो पूरे सुकून से,\nक्योंकि कल के पन्ने तो रब के हाथ की किताब हैं।',
    'Short is our earthly journey yet wishes endless,\nHalf our years pass chasing distant horizons,\nSavor wholeheartedly blessings already present,\nTomorrow pages rest safely in divine hands.'
  ],
  [
    'रेलगाड़ी सी भागती है ज़िंदगी हर स्टेशन बदलता है,\nकोई चढ़ता है साथ में तो कोई आगे निकलता है,\nहर सहयात्री मंज़िल तक साथ रहे ये ज़रूरी नहीं,\nजो जितना साथ निभा गया उसी से दिल बहलता है।',
    'Life runs like a train changing stations fast,\nSome board beside us while others step off,\nNot every fellow traveler stays till terminus,\nCherish warmly whatever miles were shared.'
  ],
  [
    'धूप और छाँव का संगम ज़िंदगी की असली रीत है,\nमुश्किल के आगे डटे रहना सबसे बड़ी जीत है,\nमनचाहा मिल जाए सब कुछ बिना किसी संघर्ष के,\nतो समझो बेसुरा हो जाएगा जीवन का गीत है।',
    'Sunlight woven with shade forms life true rhythm,\nStanding steady through trials wins real glory,\nIf every wish arrived without honest struggle,\nLife melody would lose its richest depth.'
  ],
  [
    'उम्र के साथ जाना कि शांति दौलत से बड़ी है,\nअसली ख़ुशी बाज़ार नहीं घर के आँगन खड़ी है,\nभागते रहे परछाइयों के पीछे आधी जवानी तक हम,\nजबकि सुकून की चाबी हमारे संतोष में जड़ी है।',
    'Years taught gently that peace outweighs gold,\nReal joy stands waiting inside home courtyards,\nHalf youth raced chasing fleeting shadows,\nWhile keys to calm rested in contentment.'
  ],
  [
    'ज़िंदगी को इतना गंभीर भी मत बनाओ कि हँसना भूल जाओ,\nकल को सँवारने के चक्कर में आज में बसना भूल जाओ,\nथोड़ी नादानी भी ज़िंदा रखो अपने समझदार दिल में,\nवरना ज़िम्मेदारियों के बोझ में खुलकर जीना भूल जाओ।',
    'Never turn life so stern that laughter fades,\nMissing today beauty while planning tomorrow,\nKeep a spark of playfulness alive inside,\nEven while carrying adult responsibilities.'
  ],
  [
    'हर इंसान यहाँ अपनी एक अनकही लड़ाई लड़ रहा है,\nमुस्कुराता चेहरा लेकर कठिन सीढ़ियाँ चढ़ रहा है,\nइसलिए सबसे थोड़ा नरमी और प्यार से पेश आया करो,\nकौन जाने किसके भीतर कितना गहरा दर्द बढ़ रहा है।',
    'Everyone around us fights an unseen battle,\nClimbing steep stairs behind polite smiles,\nTreat every passerby with gentle kindness,\nNever knowing what silent weight they bear.'
  ],
  [
    'चाय में गिरे बिस्कुट ने भी जीवन का सार समझाया,\nहद से ज़्यादा डूबने पर हर कोई टूटकर बिखर आया,\nलगाव रखो सबसे मगर ख़ुद का वजूद भी बचाए रखो,\nसंतुलन ही ज़िंदगी की नाव को किनारे तक लाया।',
    'Even a biscuit dipped too long in hot tea,\nShows how losing balance makes things crumble,\nCare warmly while preserving inner steadiness,\nEquilibrium steers life boat safely ashore.'
  ],
  [
    'वक़्त की नदी में कोई दुबारा वही पानी नहीं छूता,\nगुज़रा हुआ लम्हा लौटकर कभी पीछे नहीं मुड़ता,\nमाफ़ कर दो और आगे बढ़ो दिल का बोझ हल्का करके,\nक्योंकि नफ़रत की गाँठ से सुकून कभी नहीं जुड़ता।',
    'Nobody touches the same river water twice,\nPassed moments never circle back around,\nForgive freely lightening your chest today,\nKnots of bitterness never yield serenity.'
  ],
  [
    'किरदार ऐसा रखो कि जाने के बाद याद आओ,\nफूलों की तरह जिस गली गुज़रो खुशबू छोड़ जाओ,\nपद और पैसा यहीं ज़मीन पर रह जाना है,\nइंसानियत की कमाई को ज़िंदगी का ताज बनाओ।',
    'Shape character noble enough to outlive years,\nLeaving sweet fragrance down lanes you walk,\nTitles and coins stay behind upon this earth,\nHuman kindness crowns a life immortally.'
  ],
  [
    'कभी शतरंज सी उलझी कभी साँप-सीढ़ी का खेल है,\nज़िंदगी उम्मीद और सब्र के बीच अद्भुत मेल है,\nनिराश मत होना अगर पासा आज उल्टा पड़ गया,\nमेहनत जारी रख रब के यहाँ देर न अंधेर।',
    'Tangled like chess one day and ladders next,\nLife blends bright hope with steady patience,\nNever despair when dice roll rough briefly,\nDivine justice rewards effort right on cue.'
  ],
  [
    'बचपन में बड़े होने की कितनी जल्दी थी हमें,\nबस्ते के बोझ से आज़ाद होने की मस्ती थी,\nकमाने निकले तो जाना बचपन ही असली बादशाहत थी,\nकाग़ज़ की नाव में पूरी दुनिया सस्ती थी हमें।',
    'In childhood we wished eagerly to grow tall,\nDreaming of freedom past school satchels,\nAdult hustle revealed boyhood was true royalty,\nWhere paper boats bought boundless worlds.'
  ],
  [
    'ज़िंदगी किसी के रुकने से कभी ठहरती नहीं मेरे यार,\nपतझड़ के बाद फिर सजता है डाली पर हरा श्रृंगार,\nजो छूट गया पीछे उसे दुआ देकर विदा करना सीख,\nऔर जो सामने खड़ा है उसका कर खुले दिल स्वीकार।',
    'Life never halts completely when chapters close,\nGreen leaves dress bare branches past autumn,\nBless warmly whatever stayed behind yesterday,\nWelcoming openhearted what stands present.'
  ],
  [
    'साँसों की डोर कब टूट जाए किसी को ख़बर नहीं होती,\nअहंकार में डूबे इंसान की कभी क़द्र नहीं होती,\nविनम्रता से झुककर मिलो हर छोटे-बड़े इंसान से यहाँ,\nक्योंकि झुकी हुई डाली ही फलों से भरी सफ़र होती।',
    'None can predict when fragile breath concludes,\nArrogance earns zero lasting reverence here,\nGreet both humble and great with gentle poise,\nFruit-laden branches bow naturally low.'
  ],
  [
    'कुछ सवालों के जवाब वक़्त पर छोड़ देना ही अच्छा है,\nहर गुत्थी तुरंत सुलझाने का हठ थोड़ा कच्चा है,\nधैर्य रखो धीरे-धीरे कोहरा अपने आप छँट जाएगा,\nज़िंदगी के रंगमंच पर रब का लिखा नाटक सच्चा है।',
    'Leave certain questions patiently unto time,\nForcing instant answers strains inner calm,\nMist lifts naturally as morning advances,\nTrusting grace directing life grand stage.'
  ],
  [
    'लोग क्या कहेंगे अगर यही सोचकर क़दम रोक लोगे तुम,\nतो अपने ही सपनों का गला ख़ुद घोंट दोगे तुम,\nज़िंदगी तुम्हारी है इसे अपने उसूलों के रंग में जियो,\nदुनिया तो सूरज में भी दाग़ ढूँढने से नहीं चूकती।',
    'Halting your stride fearing idle public talk,\nSilences dreams meant uniquely for your hands,\nLive authentically painted in honest values,\nCritics find spots even across bright sun.'
  ],
  [
    'जेब में सिक्के कम थे तब रिश्ते सच्चे थे,\nकच्चे मकानों के आँगन में दिल कितने अच्छे थे,\nतरक़्क़ी की ऊँची दीवारों ने अब दूरियाँ बढ़ा दीं,\nसादगी के उस दौर में हम सुखी बच्चे थे।',
    'Fewer coins in pockets meant truer kinship,\nMud-walled courtyards sheltered generous hearts,\nHigh modern walls widened human distance,\nSimpler days held our richest happiness.'
  ],
  [
    'हर सुबह नया जन्म है हर रात विश्राम है,\nइसी आने-जाने के चक्र का ज़िंदगी प्यारा नाम है,\nन अतीत की क़ैद रहो न भविष्य से डरो,\nवर्तमान के पल में ईश्वर का असली धाम है।',
    'Every dawn brings rebirth each night repose,\nBetween the two flows graceful human life,\nStep free from past cages and future fear,\nPresent awareness houses sacred peace.'
  ],
  [
    'काँटों पर चलकर ही फूलों की क़ीमत समझ आती है,\nभूख की तपन ही सूखी रोटी में मिठास जगाती है,\nज़िंदगी के कड़वे अनुभवों से कभी नफ़रत मत करना,\nयही तपन इंसान को भीतर से खरा सोना बनाती है।',
    'Thorns teach deep appreciation for soft blooms,\nHonest hunger makes plain bread taste rich,\nNever resent rough seasons along your road,\nFire refines raw ore into purest gold.'
  ],
  [
    'हम सोचते बहुत ज़्यादा हैं और जीते बहुत कम हैं,\nइसीलिए बेवजह की चिंताओं से आजकल आँखें नम हैं,\nथोड़ा क़ुदरत के पास बैठो परिंदों की उड़ान निहारो,\nज़िंदगी बहुत सरल है बस हमारे ही बुने भ्रम हैं।',
    'Overthinking steals hours meant for living,\nClouding clear eyes with invented worries,\nSit beside nature watching effortless wings,\nLife stays simple beyond our mental webs.'
  ],
  [
    'अच्छा वक़्त गुरूर सिखाता है और बुरा वक़्त तजुर्बा देता,\nदोनों ही मौसम इंसान को मुकम्मल आकार बना देता,\nन सुख में इतराना कभी और न दुख में घबराना यार,\nसमभाव से चलने वाला ही जीवन की बाज़ी जीत लेता।',
    'Good times test humility tough times gift grit,\nBoth seasons shape balanced character inside,\nNeither boast in plenty nor panic in lean,\nSteady equanimity wins the journey clean.'
  ],
  [
    'ज़िंदगी की असली दौलत सेहत और मन का चैन है,\nजिसके पास दोनों हैं उसकी सुखद हर रैन है,\nसोने के महल काँटों से लगते बीमार तन को,\nनिरोगी काया और साफ़ दिल सबसे सुंदर नैन है।',
    'Health paired with peace forms life real wealth,\nBlessing every waking hour and quiet night,\nGolden halls feel thorny to an ailing frame,\nVitality and clean heart shine brightest.'
  ],
  [
    'रास्ते में मिले हर शख़्स का कोई मक़सद था,\nकोई प्यार दे गया कोई सबक सिखाने आया था,\nअफ़सोस किसी मुलाक़ात का मत रखना अपने सीने में,\nहर पन्ना ज़िंदगी की कहानी पूरा करने आया था।',
    'Every soul crossing our path carried purpose,\nSome gifted warmth while others taught caution,\nRegret zero chapter along your biography,\nEach verse helped complete who you became.'
  ],
  [
    'बाँसुरी में भी जब तक छेद नहीं होते सुर नहीं निकलते,\nबिना संघर्ष की छेनी के महान व्यक्तित्व नहीं ढलते,\nज़िंदगी जब परखे तुम्हें कठिन परिस्थितियों की आँच में,\nमुस्कुरा देना क्योंकि हीरे कोयले की खान में ही पलते।',
    'Flutes sing sweetly only after carving holes,\nGreatness takes shape beneath struggle chisel,\nWhen life tests your spirit inside hot pressure,\nSmile knowing diamonds form deep underground.'
  ],
  [
    'उधार की ख़ुशियों से बेहतर सादगी का संतोष है,\nदिखावे की दौड़ में शामिल होना केवल बेहोश है,\nजितनी चादर हो उतने में स्वर्ग रचा जाता है,\nअगर मन में शुक्राना और मेहनत में जोश है।',
    'Simple contentment beats borrowed luxury fast,\nChasing status races drains peaceful spirit,\nEven modest means build heaven indoors,\nBacked by gratitude and joyful diligence.'
  ],
  [
    'ज़िंदगी कोई गणित का सवाल नहीं जिसे सिर्फ़ हल करें,\nये तो एक सुंदर संगीत है जिसे महसूस हर पल करें,\nथोड़ा बेसुरा भी बज जाए कभी तो घबराना कैसा यारों,\nलय पकड़कर फिर से नए उत्साह की कल-कल करें।',
    'Life is music to feel rather than cold math,\nSavoring melodies across unfolding days,\nIf a note slips off-key briefly never fret,\nCatch the rhythm again flowing smoothly on.'
  ],
  [
    'शाम की ढलती धूप सिखाती है ठहराव की सुंदरता,\nभागमभाग के बीच ज़रूरी है थोड़ी सी आत्म-निर्भरता,\nख़ुद के साथ भी रोज़ दस मिनट अकेले बैठा करो दोस्त,\nताकि ज़िंदगी के शोर में खो न जाए तुम्हारी सरलता।',
    'Softening sunset light teaches graceful pause,\nQuiet grounding amidst relentless schedules,\nSpend ten calm minutes daily with yourself,\nGuarding inner simplicity from outer noise.'
  ],
  [
    'जो बीत गया सो बीत गया अब आगे की तस्वीर बनाओ,\nअपने नेक कर्मों से अपनी ख़ूबसूरत तक़दीर बनाओ,\nज़िंदगी बार-बार नहीं मिलती इस धरती के आँगन में,\nहर दिन को प्रेम और परोपकार की जागीर बनाओ।',
    'Let bygone chapters rest painting forward bright,\nShaping noble destiny through kind actions,\nHuman birth graces this courtyard once,\nDedicate each day to love and goodwill.'
  ],
  [
    'हँसकर स्वागत करो ज़िंदगी के हर बदलते हुए रंग का,\nआनंद लो हर मौसम की धूप, बारिश और पतंग का,\nजब आख़िरी पन्ना आए जीवन की इस प्यारी पुस्तक का,\nचेहरे पर संतोष रहे एक शानदार जिए हुए संग का।',
    'Welcome smiling every shifting hue of life,\nEnjoying sunshine rainstorms and high kites,\nWhen the final page of our story arrives,\nMay deep satisfaction crown a life well lived.'
  ]
];

export const NEW_FEELINGS_PART_2: Shayari[] = [
  ...buildCategoryShayaris(
    {
      category: 'good-night',
      categoryName: 'Good Night Shayari',
      categoryIcon: '🌌',
      idPrefix: 'good-night',
      startIndex: 1,
      tags: ['GoodNight', 'ShubhRatri', 'SweetDreams']
    },
    GOOD_NIGHT_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'two-line',
      categoryName: '2 Line Shayari',
      categoryIcon: '✨',
      idPrefix: 'two-line',
      startIndex: 1,
      tags: ['2LineShayari', 'DoLineStatus', 'ShortShayari'],
      twoLine: true
    },
    TWO_LINE_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'gussa',
      categoryName: 'Gussa / Narazgi Shayari',
      categoryIcon: '😠',
      idPrefix: 'gussa',
      startIndex: 1,
      tags: ['GussaShayari', 'Narazgi', 'RoothnaStatus']
    },
    GUSSA_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'family',
      categoryName: 'Family / Maa Papa Shayari',
      categoryIcon: '🏡',
      idPrefix: 'family',
      startIndex: 1,
      tags: ['FamilyShayari', 'MaaPapa', 'ParentsLove']
    },
    FAMILY_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'bhai-behen',
      categoryName: 'Bhai Behen Shayari',
      categoryIcon: '👫',
      idPrefix: 'bhai-behen',
      startIndex: 1,
      tags: ['BhaiBehen', 'SisterBrotherLove', 'SiblingBond']
    },
    BHAI_BEHEN_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'zindagi',
      categoryName: 'Zindagi / Life Shayari',
      categoryIcon: '🌿',
      idPrefix: 'zindagi',
      startIndex: 1,
      tags: ['ZindagiShayari', 'LifeQuotesHindi', 'Jeevan']
    },
    ZINDAGI_POEMS
  )
];
