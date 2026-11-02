import { Shayari } from '../../../types/shayari';
import { buildCategoryShayaris, RawPoemTuple } from './shayariBuilder';

const LOVE_NEW: readonly RawPoemTuple[] = [
  [
    'हवा के झोंकों में आज फिर तेरी खुशबू घुल गई है,\nसूनी पड़ी धड़कनों को जीने की नई वजह मिल गई है,\nजब से थामा है तूने प्यार से मेरा काँपता हाथ,\nमेरी अधूरी ज़िंदगी हर पल फूलों की तरह खिल गई है।',
    'Your fragrance has dissolved into the gentle breeze once again,\nMy quiet heartbeats have found a brand new reason to live,\nEver since you lovingly held my trembling hand in yours,\nMy incomplete life has blossomed like fresh flowers every moment.'
  ],
  [
    'चाँदनी भी शरमा जाए जब तू धीमे से मुस्कुराती है,\nमेरी हर बेचैन शाम तेरे क़दमों में ठहर जाती है,\nइश्क़ का ये कैसा जादू चला है मेरे सीधे दिल पर,\nआँखें बंद करूँ तो सिर्फ़ तेरी तस्वीर नज़र आती है।',
    'Even the moonlight blushes whenever you smile so softly,\nEvery restless evening of mine pauses gently at your feet,\nWhat sweet magic of love has captured my innocent heart,\nWhenever I close my eyes only your face appears before me.'
  ],
  [
    'काग़ज़ पर लिखूँ नाम तेरा तो अल्फ़ाज़ महकने लगते हैं,\nख़ामोश लबों के पीछे छुपे जज़्बात बहकने लगते हैं,\nतू पास बैठे बस दो पल प्यार भरी निगाहों से,\nमेरे आँगन के बुझे हुए चिराग़ फिर चमकने लगते हैं।',
    'When I write your name on paper the words begin to bloom,\nEmotions hidden behind silent lips start overflowing softly,\nJust sit beside me for two moments with loving eyes,\nAnd every dimmed lamp in my courtyard begins shining bright.'
  ],
  [
    'बारिश की पहली बूँद जैसे सूखी ज़मीन को चूम लेती है,\nतेरी एक आवाज़ मेरे सारे थके दर्द को झूम लेती है,\nदुनिया की भीड़ में मुझे किसी और की चाहत नहीं,\nमेरी रूह हर जनम में बस तेरा ही पता ढूँढ लेती है।',
    'Just as the first raindrop kisses the parched earth gently,\nOne sound of your voice sweeps away all my weary pain,\nIn the crowd of this world I desire nobody else at all,\nMy soul searches only for your address in every lifetime.'
  ],
  [
    'माथे की बिंदिया में तेरी मैंने अपना आसमान देखा है,\nतेरी सादगी भरी बातों में जन्नत का निशान देखा है,\nलोग ढूँढते फिरते हैं सुकून मंदिरों और महलों की राहों में,\nमैंने तो तेरी बाहों में अपना सारा जहान देखा है।',
    'In the bindi on your forehead I have seen my entire sky,\nIn your simple tender words I have glimpsed heaven itself,\nPeople wander searching for peace across temples and palaces,\nWhile I have beheld my whole universe inside your arms.'
  ],
  [
    'शाम ढले जब छत पर ठंडी पुरवाई गुनगुनाती है,\nचाय की हर चुस्की के साथ तेरी ही बात याद आती है,\nन जाने कौन सी डोर से बाँधा है रब ने हमें,\nतेरी ख़ुशी में ही मेरी हर दुआ मुकम्मल हो जाती है।',
    'When twilight falls and the cool breeze hums on the rooftop,\nWith every sip of warm tea memories of you return softly,\nWho knows with what sacred thread God has tied us together,\nIn your happiness alone every prayer of mine feels complete.'
  ],
  [
    'तेरे कंधे पर सिर रखकर सदियाँ गुज़ारने का जी चाहता है,\nअपनी हर छोटी-बड़ी ख़ुशी तुझ पर वारने का जी चाहता है,\nइश्क़ में जीत और हार का हिसाब कौन रखता है भला,\nबस तेरी एक मुस्कान पर ख़ुद को हारने का जी चाहता है।',
    'Resting my head on your shoulder I wish to spend centuries,\nI long to shower every small and great joy upon your life,\nWho ever keeps count of winning or losing in true romance,\nFor just one smile of yours I gladly wish to lose myself.'
  ],
  [
    'पलकों की छाँव में तुझे हर बुरी नज़र से छुपाकर रखूँ,\nअपने सीने की धड़कनों में तुझे गीत बनाकर रखूँ,\nवक़्त बदल जाए या बदल जाएँ इस मौसम के सारे रंग,\nमैं आख़िरी साँस तक तुझे अपना हमसफ़र बनाकर रखूँ।',
    'Beneath the shade of my eyelids I will shield you from harm,\nInside the beats of my chest I will keep you like a song,\nEven if time changes or every color of the season fades,\nUntil my final breath I will treasure you as my companion.'
  ],
  [
    'चुपके से आकर तूने मेरे ख़्वाबों का रंग बदल दिया,\nतन्हा चलते इस मुसाफ़िर के जीने का ढंग बदल दिया,\nपहले तो सिर्फ़ साँसें गिनकर कटते थे मेरे सारे दिन,\nतेरे इश्क़ ने मेरी ज़िंदगी का हर एक अंग बदल दिया।',
    'Stepping in quietly you transformed the colors of my dreams,\nYou changed the entire way this lonely traveler lives life,\nOnce my days passed merely counting breaths one after another,\nYour love renewed every single corner of my existence.'
  ],
  [
    'निगाहों से निगाहें मिलीं और अनकही कहानी बन गई,\nदो अजनबी दिलों की धड़कन एक दूजे की निशानी बन गई,\nन वादे किए हमने बड़े, न कसमें खाईं ज़माने के आगे,\nफिर भी हमारी सादगी भरी मोहब्बत मिसाल पुरानी बन गई।',
    'Our eyes met quietly and an unspoken love story began,\nThe heartbeat of two strangers became a token for each other,\nWe made no grand promises nor swore oaths before the world,\nYet our simple pure romance became a timeless legend.'
  ],
  [
    'हथेली की लकीरों में तेरा नाम कुछ यूँ उभर आया है,\nजैसे रेगिस्तान में सावन का ठंडा बादल उतर आया है,\nअब किसी और तमन्ना की गुंजाइश ही नहीं बाकी दिल में,\nतेरा साथ पाकर मेरा बिखरा हुआ नसीब सँवर आया है।',
    'Your name has appeared across the lines of my palm so clearly,\nLike a cool monsoon cloud descending over a dry desert,\nNow there is no room left in my heart for any other wish,\nFinding your company has graced and healed my scattered fate.'
  ],
  [
    'तेरी पायल की छनक से मेरे घर का सन्नाटा टूट जाता है,\nतेरे क़रीब आते ही मेरा सारा पुराना ग़म छूट जाता है,\nइतनी प्यारी है तेरी मासूम सी मोहब्बत ऐ मेरे हमदम,\nतुझे देखूँ तो रूठा हुआ रब भी मुझसे मान जाता है।',
    'The soft chime of your anklets breaks the silence of my home,\nThe moment you come close every old sorrow slips away,\nSo tender is your innocent romance O beloved companion,\nBeholding you makes even destiny smile kindly upon me.'
  ],
  [
    'सर्द रातों की ओस में लिपटा हुआ गुलाब लगती हो तुम,\nमेरी हर अधूरी ग़ज़ल का सबसे हसीन जवाब लगती हो तुम,\nपढ़ता हूँ तुम्हें रोज़ मगर कभी मन नहीं भरता मेरा,\nइश्क़ के पाक हरफ़ों से लिखी हुई किताब लगती हो तुम।',
    'You look like a fresh rose wrapped in winter night dew,\nYou feel like the loveliest answer to my unfinished ghazal,\nI read your heart every day yet my soul never tires,\nYou are a sacred book written in pure syllables of love.'
  ],
  [
    'बिना कहे ही तू मेरे दिल का हर हाल समझ लेता है,\nउलझे हुए लम्हों में भी मेरे जज़्बात सँभाल लेता है,\nऐसा हमराज़ मिलना इस दुनिया में किसी नेमत से कम नहीं,\nजो मेरी ख़ामोशी से भी मेरे सारे सवाल समझ लेता है।',
    'Without a word spoken you understand every state of my heart,\nEven in tangled moments you gently hold my emotions safe,\nFinding such a confidant in this world is a rare blessing,\nOne who reads all my questions straight from my silence.'
  ],
  [
    'तेरे नाम का धागा मैंने अपनी मन्नतों में बाँध लिया है,\nअपनी हर सुबह और शाम को तेरे हवाले सौंप दिया है,\nचाहे लाख इम्तिहान ले ले ये दुनिया हमारी वफ़ाओं के,\nमैंने रूह की गहराई से सिर्फ़ तुझसे ही इश्क़ किया है।',
    'I have tied a sacred thread of your name in my prayers,\nI have entrusted every morning and evening of mine to you,\nEven if this world tests our devotion a thousand times,\nFrom the depths of my soul I have loved only you.'
  ],
  [
    'जब तू ज़ुल्फ़ें सँवारकर आइने के सामने मुस्कुराती है,\nकमरे की हर एक चीज़ इश्क़ के नूर से नहा जाती है,\nकैसे बयाँ करूँ लफ़्ज़ों में तेरी सादगी का ये आलम,\nतेरी एक झलक ही मेरे पूरे दिन की थकान मिटाती है।',
    'When you brush your curls and smile softly before the mirror,\nEvery corner of the room bathes in the warm glow of love,\nHow could mere words ever capture the grace of your simplicity,\nJust one glimpse of you melts away all exhaustion of my day.'
  ],
  [
    'सफ़र लंबा हो कितना भी मगर तेरे संग आसान लगता है,\nतेरी हँसी गूँजे जहाँ वो कोना भी गुलिस्तान लगता है,\nकभी छोड़ना मत मेरा हाथ ज़माने की तेज़ आँधियों में,\nक्योंकि तेरे बिना ये भरा पूरा शहर भी वीरान लगता है।',
    'No matter how long the journey it feels effortless beside you,\nWherever your laughter echoes even a bare corner blooms,\nNever let go of my hand amidst the fierce storms of time,\nBecause without you even this crowded city feels deserted.'
  ],
  [
    'धूप में छाँव सा सुकून देता है तेरा ये मीठा साथ,\nदिल की तख़्ती पर अमिट छप गई है तेरी हर एक बात,\nन चाँद माँगा है रब से, न सितारों की कोई ख़्वाहिश है,\nबस तेरे हाथों में मेरा हाथ रहे हर दिन और रात।',
    'Your sweet companionship feels like cool shade under hot sun,\nEvery word of yours is etched forever on the tablet of my heart,\nI have not asked God for the moon or wished for bright stars,\nMay my hand simply rest inside yours every day and night.'
  ],
  [
    'तेरी आँखों के समंदर में डूब जाने को दिल करता है,\nदुनिया के सारे फ़िक्र-ओ-ग़म भूल जाने को दिल करता है,\nइतनी पाकीज़ा है तेरे इश्क़ की ये रेशमी गर्माहट,\nहर जनम तेरे ही आँगन का फूल कहलाने को दिल करता है।',
    'My heart longs to dive into the deep ocean of your eyes,\nLeaving behind every worry and sorrow of the busy world,\nSo pure is the silken warmth of your tender affection,\nIn every rebirth I wish to bloom inside your courtyard.'
  ],
  [
    'लफ़्ज़ कम पड़ जाते हैं जब तेरी वफ़ा का ज़िक्र आता है,\nमेरा हर टूटा हुआ सपना तेरे विश्वास से जुड़ जाता है,\nरब करे हमारी मोहब्बत पर कभी पतझड़ का साया न पड़े,\nतू साथ हो तो हर मौसम बसंत बनकर मुस्कुराता है।',
    'Words fall short whenever I speak of your faithful love,\nEvery broken dream of mine mends through your steady trust,\nMay the shadow of autumn never touch our sweet romance,\nWith you beside me every season smiles like springtime.'
  ],
  [
    'चोरी-चोरी तेरा मुझे देखना और देखकर नज़रें झुकाना,\nछोटी-छोटी बातों पर हँसना और हँसकर दिल चुराना,\nयही अदाएँ तो मुझे हर रोज़ तेरा दीवाना बनाती हैं,\nज़िंदगी भर यूँ ही मेरे दिल की महफ़िल सजाते जाना।',
    'The way you glance at me secretly and lower your eyes,\nLaughing over tiny moments and stealing my heart away,\nThese sweet gestures make me fall deeper for you daily,\nKeep adorning the gathering of my heart forever like this.'
  ],
  [
    'इश्क़ वो नहीं जो दुनिया को दिखाने के लिए किया जाए,\nइश्क़ तो वो है जो ख़ामोशी से रूह में जिया जाए,\nतेरे नाम से शुरू हो मेरी सुबह की पहली अरदास,\nऔर तेरे ही ख़याल में मेरी रात का जाम पिया जाए।',
    'True love is never meant for putting on a show before people,\nLove is lived quietly within the sacred chambers of the soul,\nMay my morning prayer always begin with your gentle name,\nAnd every night pass immersed in warm thoughts of you.'
  ]
];

const SAD_NEW: readonly RawPoemTuple[] = [
  [
    'हँसते हुए चेहरे के पीछे हमने समंदर छुपा रखा है,\nहर पूछने वाले को बस सब ठीक है बता रखा है,\nकोई पढ़ न ले आँखों में टूटे ख़्वाबों की तहरीरें,\nइसलिए अश्कों को पलकों की दहलीज़ पर सुला रखा है।',
    'Behind a smiling face I have hidden an entire ocean of grief,\nTelling everyone who asks that everything is perfectly fine,\nLest someone read the script of shattered dreams in my eyes,\nI have put my tears to sleep right upon the edge of my lashes.'
  ],
  [
    'जिनके लिए हमने अपनी सारी ख़ुशियाँ क़ुर्बान कर दीं,\nउन्हीं ने हमारी हँसती दुनिया पल भर में वीरान कर दी,\nगिला किससे करें जब अपने ही साये ने साथ छोड़ दिया,\nवक़्त ने मेरी वफ़ाओं की क़ीमत बेहद सस्ती जान कर दी।',
    'Those for whom I sacrificed every single joy of my life,\nTurned my smiling world into a barren wasteland in a moment,\nWhom can I blame when even my own shadow walked away,\nTime treated the price of my loyalty as worth nothing at all.'
  ],
  [
    'काँच की तरह बिखरे हैं अरमान मगर आवाज़ नहीं हुई,\nदर्द की इस लंबी रात की कोई नई आगाज़ नहीं हुई,\nलोग समझते रहे कि हम पत्थर दिल हो चुके हैं अब,\nउन्हें क्या ख़बर ज़ख़्म गहरे थे पर शिकायत आज नहीं हुई।',
    'My hopes shattered like glass without making a single sound,\nThis endless night of sorrow never found a gentle dawn,\nPeople kept assuming that my heart had turned into stone,\nLittle did they know how deep the wounds were beneath silence.'
  ],
  [
    'पुराने ख़तों की स्याही तो वक़्त के साथ धुँधली पड़ गई,\nमगर दिल पर लगी वो चोट आज और भी गहरी अड़ गई,\nसोचा था गुज़रते सालों के संग भर जाएँगे सारे घाव,\nकमबख़्त यादों की टीस हर सावन में दोगुनी बढ़ गई।',
    'The ink on old letters faded slowly with passing years,\nYet the bruise upon my heart grew deeper than ever before,\nI thought time would eventually heal every aching wound,\nInstead the sting of memory doubled with every rainy season.'
  ],
  [
    'भरी महफ़िल में भी अब अजीब सी घुटन महसूस होती है,\nमेरी रूह अंदर ही अंदर बिना आवाज़ के रोती है,\nबाहर से तो हर शख़्स मेरा हाल पूछकर गुज़र जाता है,\nपर ग़म की असली रात तो बंद कमरे में ही सोती है।',
    'Even in a crowded gathering a strange suffocation lingers,\nMy soul weeps silently inside without making a sound,\nFrom outside passersby casually ask how I am doing,\nWhile the real night of sorrow stays locked in my room.'
  ],
  [
    'कुछ रिश्ते अधूरे रहकर भी पूरी उम्र रुलाते रहते हैं,\nबुझ चुके चिराग़ों की राख से धुआँ उठाते रहते हैं,\nहम लाख कोशिश करें ज़िंदगी में आगे बढ़ जाने की,\nपीछे छूटे क़दमों के निशान बार-बार बुलाते रहते हैं।',
    'Some unfinished bonds make us weep across an entire lifetime,\nRaising quiet smoke from the ashes of extinguished lamps,\nNo matter how hard we try to move forward in life,\nFootprints left behind keep calling our heart back again.'
  ],
  [
    'आइना देखूँ तो ख़ुद अपनी ही पहचान अजनबी लगती है,\nसीने में चलती हर साँस जैसे उधार की ज़िंदगी लगती है,\nइतने इम्तिहान लिए हैं मेरे सब्र के इस ज़माने ने,\nअब तो खिलखिलाती धूप में भी शाम की नमी लगती है।',
    'Looking into the mirror even my own reflection feels foreign,\nEvery breath inside my chest feels like a borrowed life,\nThis world has tested my patience so relentlessly for years,\nThat even bright sunshine feels damp with evening sorrow.'
  ],
  [
    'दवा तो हकीम ने हर मर्ज़ की लिख दी काग़ज़ के पन्ने पर,\nमगर दिल के छालों का इलाज किसी बाज़ार में न मिला,\nहम मुस्कुराकर लौट आए अपने सूने मकाँ की तरफ़,\nजब अपना दर्द सुनने वाला कोई एक यार भी न मिला।',
    'The healer wrote remedies for illnesses on sheets of paper,\nYet no market held a cure for the blisters on my heart,\nWearing a quiet smile I walked back to my empty house,\nFinding not a single soul willing to hear my silent ache.'
  ],
  [
    'रात के सन्नाटे में तकिये ने मेरे हज़ार राज़ सुने हैं,\nटूटते सितारों ने मेरे अधूरे ख़्वाबों के साज़ सुने हैं,\nदिन के उजाले में तो हर कोई ख़ुशहाल देखता है मुझे,\nअँधेरों ने ही मेरे सिसकते दिल के अल्फ़ाज़ सुने हैं।',
    'In the stillness of night my pillow has heard a thousand secrets,\nFalling stars have listened to thebroken chords of my dreams,\nBy daylight everyone sees me looking composed and cheerful,\nOnly the darkness has heard the sobbing words of my heart.'
  ],
  [
    'वो एक शख़्स जो कभी मेरी हर छोटी बात पर मरता था,\nमेरी आँखों में नमी देखकर पूरे जहाँ से लड़ता था,\nआज गुज़रा क़रीब से तो उसने नज़रें तक न मिलाईं,\nवक़्त कैसे बदल देता है जिन्हें दिल अपना समझता था।',
    'The one who once cherished every tiny word I ever spoke,\nWho would fight the whole world seeing tears in my eyes,\nWalked past me today without even meeting my gaze once,\nHow cruelly time changes those whom the heart called its own.'
  ],
  [
    'सूखे पत्तों की तरह बिखर गए हैं हम हवाओं के ज़ोर से,\nअब कोई उम्मीद नहीं रही ज़िंदगी के किसी नए भोर से,\nथक चुके हैं झूठी तसल्लियों का बोझ कंधों पर उठाते हुए,\nदिल बस थोड़ा सा आराम चाहता है दुनिया के शोर से।',
    'Like dry autumn leaves I have scattered in fierce winds,\nHolding no expectation from any new dawn of life anymore,\nWeary of carrying the weight of hollow consolations daily,\nMy heart simply begs for quiet rest away from worldly noise.'
  ],
  [
    'दर्द जब हद से गुज़र जाए तो लब सिल ही जाते हैं,\nग़म के काँटे हर क़दम पर दामन से मिल ही जाते हैं,\nहमने तो चाहा था बस दो पल सुकून की छाँव में बैठना,\nपर नसीब के लिखे तूफ़ान हर मोड़ पर हिल ही जाते हैं।',
    'When sorrow crosses every limit our lips seal themselves shut,\nThorns of grief catch the hem of our garment at every step,\nAll I ever wished was to sit briefly under peaceful shade,\nYet storms written in fate rise anew around every corner.'
  ],
  [
    'कहने को तो पास मेरे आज भी हज़ारों लोगों की भीड़ है,\nमगर भीतर से टूटी हुई मेरी हर पुरानी उम्मीद है,\nकोई नहीं पूछता कि आँखों के नीचे ये उदासी क्यों है,\nयहाँ हर इंसान को बस अपने ही मतलब की ताकीद है।',
    'To the world I am still surrounded by thousands of faces,\nYet inside my chest every old hope lies quietly broken,\nNobody asks why shadows of sadness linger beneath my eyes,\nHere everyone cares only about fulfilling their own need.'
  ],
  [
    'मोमबत्ती की तरह जलकर हमने औरों के घर उजाले किए,\nअपने हिस्से के सारे सुख भी गैरों के हवाले किए,\nजब हमारी बारी आई अँधेरों से बाहर निकल आने की,\nलोगों ने दरवाज़े बंद कर लिए और नए ताले किए।',
    'Burning like a candle I lit up the homes of everyone else,\nHanding over even my own share of comfort to others gladly,\nYet when my turn came to step out of heavy darkness,\nPeople shut their doors tight and fastened heavy locks.'
  ],
  [
    'बड़ा अजीब आलम है इस उदास दिल की बस्ती का आजकल,\nन कोई आने की आहट है न किसी के जाने की हलचल,\nएक ख़ामोश सा कोहरा छाया रहता है हर एक एहसास पर,\nजैसे ठहर गया हो सीने के भीतर कोई भीगा हुआ पल।',
    'Strange is the state of this sorrowful heart neighborhood now,\nNeither footsteps arriving nor any stir of someone leaving,\nA silent fog hangs heavily across every tender emotion,\nAs though a tear-soaked moment froze forever inside my chest.'
  ],
  [
    'ज़िंदगी की किताब से ख़ुशी के पन्ने जाने कब फट गए,\nजिन पर सबसे ज़्यादा भरोसा था वही लोग पीछे हट गए,\nअब शिकायतों का बोझ लेकर किस चौखट पर जाएँ हम,\nजब अपने ही आँगन के हिस्से दीवारों में बँट गए।',
    'Pages of joy tore out from the book of life long ago,\nThose whom I trusted most stepped back when storms arrived,\nTo whose doorstep should I carry this burden of grief now,\nWhen our own courtyard was divided by cold brick walls.'
  ],
  [
    'न आँसू बहते हैं अब और न ही कोई फ़रियाद निकलती है,\nबस सीने की गहराई से एक ठंडी सी आह पिघलती है,\nइतना कुछ खो दिया है हमने इस सफ़र के मोड़ों पर,\nअब तो ख़ुशी भी पास आए तो दिल को खलती है।',
    'Neither tears fall anymore nor does any plea escape my lips,\nOnly a cold heavy sigh melts slowly from deep within,\nI have lost so much along the sharp turns of this road,\nThat even if joy approaches now my guarded heart trembles.'
  ],
  [
    'चाय ठंडी हो गई मेज़ पर रखे-रखे तेरी राह तकते हुए,\nशाम के साये ढल गए खिड़की के पास अकेले थकते हुए,\nतू तो मशगूल हो गया अपनी नई रौनक़ों के शहर में,\nऔर हम वहीं ठहरे रह गए पुराने ज़ख़्म ढकते हुए।',
    'The tea turned cold on the table while watching your path,\nEvening shadows lengthened as I grew tired by the window,\nYou became busy amidst the bright lights of your new world,\nWhile I remained frozen right there covering old wounds.'
  ],
  [
    'हर मुस्कुराता इंसान भीतर से आबाद हो ये ज़रूरी नहीं,\nहर ख़ामोश लब के पीछे कोई फ़रियाद न हो ये ज़रूरी नहीं,\nज़रा ग़ौर से पढ़ा करो अपने क़रीब रहने वालों की आँखें,\nहर टूटे हुए दिल की चीख़ बर्बाद हो ये ज़रूरी नहीं।',
    'Not every smiling soul is flourishing peacefully inside,\nNot every quiet lip is free from an unspoken cry of pain,\nRead carefully the eyes of those who live close beside you,\nSilent heartbreak often hides where laughter looks loudest.'
  ],
  [
    'हमने वफ़ा की ज़मीन पर भरोसे के जो बीज बोए थे,\nउन्हीं की फ़सल काटकर हम रातों को तन्हा रोए थे,\nकाश पहले ही समझ लेते इस बदलते ज़माने की फ़ितरत,\nतो यूँ पराये ख़्वाबों की ख़ातिर अपने चैन न खोए थे।',
    'The seeds of trust I planted faithfully on loyal ground,\nLeft me weeping alone through long nights at harvest time,\nHad I understood earlier the fickle nature of this world,\nI would never have traded my peace for borrowed dreams.'
  ],
  [
    'अधूरी बातों का बोझ दिल पर पत्थर सा रखा रहता है,\nबिना वजह ही मन आजकल उदास और थका रहता है,\nन किसी से मिलने की चाहत है न बात करने का मन,\nबस ख़ामोशी की चादर ओढ़े ये दिल अकेला पड़ा रहता है।',
    'The weight of unfinished words sits like stone on my chest,\nWithout clear reason my spirit feels weary and heavy lately,\nI have no desire to meet crowds or explain how I feel,\nWrapped in a sheet of silence my heart rests all alone.'
  ],
  [
    'ग़म ने तराशा है कुछ इस तरह मेरे नाज़ुक जज़्बातों को,\nअब डर नहीं लगता मुझे अमावस की काली रातों को,\nजब अपना ही मुक़द्दर रूठ कर बैठ जाए चौराहे पर,\nतो दोष क्या देना बेगानी दुनिया की कड़वी बातों को।',
    'Grief has carved my delicate emotions in such a quiet way,\nThat moonless dark nights no longer frighten my spirit,\nWhen one own destiny sits estranged at the crossroads,\nWhy blame bitter words spoken by a distant world.'
  ]
];

const ATTITUDE_NEW: readonly RawPoemTuple[] = [
  [
    'हम अपनी पहचान किसी की सिफ़ारिश से नहीं बनाते हैं,\nजहाँ क़दम रखते हैं वहाँ नया इतिहास लिख जाते हैं,\nशेर की चाल पर भला कुत्तों के भौंकने से क्या फ़र्क़,\nहम अपनी ख़ामोशी से ही विरोधियों के होश उड़ाते हैं।',
    'I never build my identity on recommendations from anyone,\nWherever I plant my feet I write a brand new chapter,\nWhat difference do barking packs make to a lion stride,\nMy calm silence alone is enough to shake every rival.'
  ],
  [
    'मिज़ाज में थोड़ी सख़्ती भी ज़रूरी है इस ज़माने में,\nवरना लोग पी जाते हैं समंदर भी मीठा समझने के बहाने में,\nहम झुकते सिर्फ़ वहाँ हैं जहाँ इज़्ज़त और संस्कार दिखें,\nकिसी के झूठे ग़ुरूर को सलाम करना नहीं हमारे घराने में।',
    'A touch of firmness in character is vital in this era,\nOr people swallow whole oceans mistaking kindness for weakness,\nI bow only where genuine respect and noble values shine,\nSaluting hollow arrogance has never been part of my lineage.'
  ],
  [
    'हमारी सादगी को हमारी कमज़ोरी समझने की भूल मत करना,\nआसमान की ऊँचाई देखकर ज़मीन से अपनी धूल मत करना,\nजब वक़्त हमारा बोलेगा तो शोर पूरे शहर में गूँजेगा,\nतब तक अपनी हद में रहो और बेवजह फ़िज़ूल मत करना।',
    'Never mistake my calm simplicity for any kind of weakness,\nKeep your feet grounded instead of throwing dust at the sky,\nWhen my moment speaks its echo will ring across the city,\nUntil then stay within bounds and spare the empty noise.'
  ],
  [
    'ताज पहनने के लिए हमें किसी सल्तनत की ज़रूरत नहीं,\nहमारे तेवर और हमारे उसूल ही हमारी असली हुकूमत हैं,\nलोग बदलते होंगे अपना रंग मौसम और फ़ायदे के हिसाब से,\nहम कल भी ख़ुद्दार थे और आज भी वही हमारी क़ीमत है।',
    'I need no borrowed throne in order to wear a royal crown,\nMy fearless principles and poise are my true sovereignty,\nOthers may change colors according to season and profit,\nI stood self-reliant yesterday and remain priceless today.'
  ],
  [
    'जलने वालों को और जलाना तो अब हमारी पुरानी आदत है,\nमेहनत के पसीने से लिखी हमने अपनी हर इबादत है,\nपीठ पीछे वही लोग बातें बनाते हैं हमारी शाम-ओ-सुबह,\nजिनकी हमारे सामने आँख मिलाकर खड़े होने की न हिम्मत है।',
    'Letting envious minds burn brighter has become second nature,\nEvery success of mine is written with honest sweat and grit,\nOnly those gossip behind my back from morning till night,\nWho lack the courage to stand before me eye to eye.'
  ],
  [
    'हम भीड़ का हिस्सा बनने के लिए इस दुनिया में नहीं आए,\nहमारे हौसलों ने हमेशा तूफ़ानों के ख़िलाफ़ परचम लहराए,\nरास्ता ख़ुद बनाते हैं हम चट्टानों का सीना चीरकर आगे,\nवो और होंगे जो थोड़ी सी मुश्किल देखकर घबरा जाएँ।',
    'I was not born into this world merely to blend into crowds,\nMy resolve has always raised banners straight against storms,\nI carve my own highway splitting solid rock ahead of me,\nLeaving fear to those who tremble at minor obstacles.'
  ],
  [
    'न किसी से होड़ है हमारी और न किसी से कोई जलन है,\nअपने ही हुनर को निखारने की बस रात-दिन लगन है,\nजो इज़्ज़त देगा उसे दोगुना मान लौटाएँगे सिर झुकाकर,\nऔर जो अकड़ दिखाएगा उसके लिए हमारा नाम ही दफ़न है।',
    'I compete with nobody out of spite nor harbor petty envy,\nDay and night my sole focus is sharpening my own craft,\nGive respect and I will return double honor wholeheartedly,\nShow arrogance and you become invisible to my world.'
  ],
  [
    'ज़ुबान कड़वी सही हमारी मगर दिल आईने सा साफ़ रखते हैं,\nकौन कब बदला था यहाँ हम हर चेहरे का हिसाब रखते हैं,\nमाफ़ करना जानते हैं पर भूलना हमारी फ़ितरत में नहीं,\nहम अपने उसूलों की अलग ही शाही किताब रखते हैं।',
    'My words may be blunt yet my heart stays clear as glass,\nI remember accurately when every masked face switched sides,\nI know how to forgive yet forgetting is not in my nature,\nI live by a sovereign code written in my own book.'
  ],
  [
    'वक़्त खराब हो सकता है मगर हमारा अंदाज़ कभी नहीं झुकता,\nतेज़ हवाओं के डर से उड़ता बाज़ कभी नहीं रुकता,\nसब्र रखो अभी तो हमने सिर्फ़ अपने पंख खोले हैं आसमाँ में,\nहमारी उड़ान का दायरा किसी की छोटी सोच से नहीं नपता।',
    'Times may turn rough yet my royal composure never bends,\nA soaring eagle never halts out of fear of fierce winds,\nWatch closely for I have only begun spreading my wings,\nThe reach of my flight cannot be measured by small minds.'
  ],
  [
    'मेरी ख़ामोशी को मेरी हार मानकर जश्न मत मनाओ अभी,\nसमुद्र जब शांत होता है तो गहराई और बढ़ जाती है,\nहम शतरंज के वो खिलाड़ी हैं जो चाल शोर मचाकर नहीं चलते,\nहमारी एक ही शह में पूरी बाज़ी पलटकर रह जाती है।',
    'Do not celebrate mistaking my quiet pause for defeat yet,\nWhen the ocean grows still its depth becomes deadlier,\nI play the board without making loud boasts before moving,\nOne decisive checkmate from me flips the entire game.'
  ],
  [
    'मशहूर होने का शौक़ नहीं हमें, बस पहचान दमदार होनी चाहिए,\nबात कम हो भले ज़ुबान से, मगर हर बात असरदार होनी चाहिए,\nचापलूसों की महफ़िल से बेहतर है अकेले शेर की तरह चलना,\nक्योंकि ज़िंदगी छोटी सही पर शान से गुलज़ार होनी चाहिए।',
    'I do not chase cheap fame, only an unshakable reputation,\nSpeak fewer words if needed yet make every syllable count,\nWalking alone like a lion beats sitting among flatterers,\nLife may be brief so live it with unmistakable dignity.'
  ],
  [
    'हथियार तो शौक़ के लिए रखे जाते हैं रियासतों में जनाब,\nख़ौफ़ पैदा करने के लिए तो बस निगाहों का तेवर काफ़ी है,\nहम से उलझने से पहले हमारा अतीत ज़रा पूछ लेना बाज़ार में,\nहमारे नाम की गूँज ही दुश्मनों की नींद उड़ाने को काफ़ी है।',
    'Weapons are merely ornaments kept inside royal courts friend,\nA fearless spark in the eyes is enough to command awe,\nBefore crossing paths with me ask around about my record,\nThe echo of my name alone keeps challengers wide awake.'
  ],
  [
    'अपनी शर्तों पर जीना सीखा है हमने किसी की मेहरबानी पर नहीं,\nहमारा रुतबा टिका है ख़ुद्दारी पर किसी झूठी कहानी पर नहीं,\nलाख कोशिश कर ले ज़माना हमारे क़दमों को पीछे खींचने की,\nहम वो आग हैं जो बुझती बारिशों के ठंडे पानी पर नहीं।',
    'I learned to live strictly on my own terms never on favors,\nMy stature stands on self-respect not fabricated tales,\nLet the world try all it wants to pull my stride back,\nI am a fire that cold rainstorms can never extinguish.'
  ],
  [
    'जो हमें नज़रअंदाज़ करे हम उसे पलटकर दोबारा नहीं देखते,\nग़ैरत बेचकर मिले जो दौलत हम ऐसे सहारे नहीं देखते,\nअपनी क़ीमत ख़ुद तय करो इस मतलबी बाज़ार की रौनक़ में,\nक्योंकि हीरे कभी कोयले की दुकानों के इशारे नहीं देखते।',
    'Whoever ignores me once never gets a second backward glance,\nI refuse wealth or comfort bought at the cost of pride,\nSet your own worth boldly inside this calculating market,\nFor diamonds never wait upon signals from coal merchants.'
  ],
  [
    'शांत चेहरे के पीछे हमने बारूद जैसा जज़्बा पाला है,\nहर ठोकर को अपने पैरों तले सीढ़ी बनाकर ढाला है,\nतुम क्या डराओगे हमें अँधेरी राहों के काँटों का नाम लेकर,\nहमने तो ख़ुद अपने हाथों से तक़दीर का सूरज निकाला है।',
    'Behind a calm expression burns unyielding determination,\nEvery stumble beneath my feet was forged into a ladder,\nHow could thorns on dark roads ever intimidate my spirit,\nWith my own two hands I raised the sun of my destiny.'
  ],
  [
    'हमारी बराबरी करने से पहले हमारे जितना तपना सीखो,\nकड़ी धूप में नंगे पाँव काँटों की राह पर चलना सीखो,\nसिर्फ़ महँगे लिबास पहन लेने से कोई नवाब नहीं बनता यहाँ,\nरगों में ख़ानदानी ख़ुद्दारी का लहू भी उबलना सीखो।',
    'Before trying to match my level learn to endure the fire,\nWalk barefoot across thorny trails beneath scorching sun,\nExpensive clothes alone never turned anyone into royalty,\nTrue nobility flows from fearless integrity in the blood.'
  ],
  [
    'जिनके इरादे फ़ौलादी हों वो मुक़द्दर का रोना नहीं रोते,\nआँधियों के डर से समंदर के जहाज़ लंगर नहीं खोते,\nहम अपनी मंज़िल को घुटनों पर लाकर ही दम लेते हैं यारों,\nजब तक जीत मुट्ठी में न हो हम सुकून की नींद नहीं सोते।',
    'Those with steel resolve never weep over shifting luck,\nShips built for deep oceans never panic when gales roar,\nI do not rest until the summit bows beneath my stride,\nSleep waits patiently until victory is locked in hand.'
  ],
  [
    'न हम किसी के गुलाम हैं और न किसी पर हुक्म चलाते हैं,\nबस अपने काम और अपने स्वाभिमान से इश्क़ निभाते हैं,\nकोई प्यार से मिले तो जान तक हाज़िर कर दें क़दमों में,\nऔर कोई आँख दिखाए तो उसे उसकी असल जगह दिखाते हैं।',
    'I am slave to nobody nor do I bully gentle souls around,\nMy devotion belongs solely to hard work and self-respect,\nApproach me with warmth and my whole heart is yours,\nRaise an arrogant brow and you will learn your place fast.'
  ],
  [
    'अकेले चलने का दम रखते हैं काफ़िलों के मोहताज नहीं हम,\nकल बदल जाए हवा के रुख़ से वो कमज़ोर आवाज़ नहीं हम,\nजो दिल में है वही साफ़ लफ़्ज़ों में चेहरे पर रखते हैं,\nदोहरे नक़ाब ओढ़कर मिलने वाले झूठे हमराज़ नहीं हम।',
    'I carry the strength to walk solo without needing entourages,\nMy voice never shifts direction merely to please changing winds,\nWhatever lives in my heart speaks plainly on my face,\nI never wear double masks to win fake applause.'
  ],
  [
    'औक़ात की बात वही करते हैं जिनकी सोच ज़मीन तक सीमित हो,\nहमारी नज़र वहाँ टिकती है जहाँ से नया आसमान शुरू हो,\nमिटाने वाले ख़ुद मिट गए हमारे निशान ढूँढते-ढूँढते,\nक्योंकि रब जिसका रखवाला हो उसका बाल भी बाँका न हो।',
    'Only small minds obsess endlessly over status and limits,\nMy vision begins right where the open horizon takes off,\nThose who tried erasing my name faded away themselves,\nWhen God guards your path not a single hair can be harmed.'
  ],
  [
    'शराफ़त की चादर ओढ़ी है हमने बुज़दिली का लिबास नहीं,\nहर किसी को मुँह लगाएँ इतना फ़ालतू वक़्त हमारे पास नहीं,\nअपनी दुनिया के बादशाह हैं हम अपनी मर्ज़ी से जीते हैं,\nहमें ज़माने के सर्टिफ़िकेट की रत्ती भर भी आस नहीं।',
    'I wear the cloak of grace never the garment of cowardice,\nI have zero spare time to entertain petty provocations,\nKing of my own world I live strictly by my inner compass,\nSeeking not an ounce of validation from noisy crowds.'
  ],
  [
    'ठुकराया था जिन्होंने मुझे कल मेरा सादा लिबास देखकर,\nआज वही कतार में खड़े हैं मेरी कामयाबी की प्यास देखकर,\nवक़्त का पहिया घूमता ज़रूर है बस हौसला ज़िंदा रखो,\nकल जो हँसते थे आज सलाम करते हैं मेरा ख़ास अंदाज़ देखकर।',
    'Those who looked down upon my simple clothes yesterday,\nNow stand waiting in line admiring my hard-earned rise,\nThe wheel of time always turns when grit stays unbroken,\nMockers of yesterday salute my unmistakable style today.'
  ]
];

const ALONE_NEW: readonly RawPoemTuple[] = [
  [
    'सूनी छत पर बैठकर घंटों तारों से बातें करता हूँ,\nभीड़ भरी इस दुनिया से अब कोसों दूर गुज़रता हूँ,\nजब से देखा है अपनों के चेहरों पर मतलब का रंग,\nसच्चे दिल से कहता हूँ अब तन्हाई से इश्क़ करता हूँ।',
    'Sitting on the quiet rooftop I talk with stars for hours,\nWalking miles away from the noise of this crowded world,\nEver since I saw selfish colors on faces I once called mine,\nHonestly I have fallen in love with peaceful solitude.'
  ],
  [
    'अकेलापन शुरू में डराता ज़रूर है मगर मज़बूत बना देता है,\nकौन अपना है और कौन पराया ये फ़र्क़ समझा देता है,\nअब किसी के रूठने या छूटने का ख़ौफ़ नहीं रहा दिल में,\nसन्नाटा इंसान को ख़ुद अपने आप से मिलवा देता है।',
    'Solitude frightens at first yet forges unbreakable strength,\nTeaching clearly who truly cares and who was pretending,\nNo longer afraid of anyone leaving or growing distant,\nSilence introduces a soul back to its own truest self.'
  ],
  [
    'शाम का ढलता सूरज और कमरे की ये खामोश दीवारें,\nअब यही दोनों मिलकर मेरे टूटे दिल का हाल सँवारें,\nपुकारने को तो हज़ारों नाम दर्ज हैं फ़ोन की डायरी में,\nपर समझ न आए उदासी में किस एक अपने को पुकारें।',
    'The setting evening sun and these silent bedroom walls,\nAre the only companions tending gently to my tired heart,\nHundreds of names sit saved inside my phone directory,\nYet in sorrow I find not one soul I can truly call.'
  ],
  [
    'जुदाई के बाद से शहर की रौनक़ें भी बेरंग लगती हैं,\nखुशियों की सारी महफ़िलें मेरे दर्द से तंग लगती हैं,\nतू गया तो अपने साथ मेरी हँसी की चाबी भी ले गया,\nअब तो साँसें भी सीने के भीतर एक लंबी जंग लगती हैं।',
    'Since our parting even the city lights look pale and dull,\nFestive gatherings feel foreign to my quiet inner ache,\nWalking away you took the key to my laughter with you,\nNow every breath inside my chest feels like a long battle.'
  ],
  [
    'कोई साथ न दे सफ़र में तो अपने साये से दोस्ती कर लो,\nअँधेरी रातों की ख़ामोशी से अपनी झोली में रोशनी भर लो,\nलोग तो मौसम के पंछी हैं उड़ जाएँगे पतझड़ आते ही,\nतन्हा जीने का हुनर सीखकर अपनी ज़िंदगी को ख़ुशी कर लो।',
    'When nobody walks beside you befriend your own shadow,\nGather quiet light from the stillness of dark nights,\nPeople are seasonal birds who fly off when autumn arrives,\nMaster the art of standing solo and reclaim your peace.'
  ],
  [
    'खिड़की पर गिरती बारिश और हाथ में ठंडी चाय का प्याला,\nमेरे अकेलेपन ने ही हर बुरे वक़्त में मुझे सँभाला,\nझूठे रिश्तों की भीड़ से कहीं बेहतर है ये सच्ची तन्हाई,\nजहाँ न कोई फ़रेब है और न झूठी उम्मीदों का उजाला।',
    'Raindrops tapping the windowpane beside a cup of tea,\nMy solitude alone held me steady through harsh seasons,\nFar better than a crowd of hollow bonds is honest quiet,\nWhere neither deceit exists nor false glimmers of hope.'
  ],
  [
    'बिछड़ने वाले तुझे ख़बर भी नहीं हम किस हाल में जीते हैं,\nतेरी यादों के फटे पन्नों को रोज़ अश्कों से सीते हैं,\nमेले में खोए हुए किसी मासूम बच्चे सा हो गया है दिल,\nसबके बीच खड़े होकर भी हम घूँट तन्हाई के पीते हैं।',
    'O departed love you have no idea how I survive each day,\nStitching torn pages of your memory nightly with tears,\nMy heart wanders like a lost child inside a noisy fair,\nStanding amidst everyone yet drinking deep loneliness.'
  ],
  [
    'रास्ते वही हैं पुराने मगर हमसफ़र का निशान मिट गया,\nदो क़दम साथ चलने का वो सुनहरा अरमान मिट गया,\nअब अकेले ही नापते हैं मीलों लंबी वीरान पगडंडियाँ,\nजब से हमारे सिर से तेरी मोहब्बत का आसमान हट गया।',
    'The roads remain the same yet every trace of you vanished,\nThat golden wish of walking together faded into mist,\nNow I measure miles of deserted trails completely alone,\nEver since the shelter of your love lifted above me.'
  ],
  [
    'ख़ामोश कमरे में घड़ी की टिक-टिक भी शोर मचाती है,\nहर गुज़रती घड़ी तेरे न होने का एहसास दिलाती है,\nसोने की कोशिश करूँ भी तो करवटों में कटती है रात,\nजुदाई की ये टीस रूह के पोर-पोर तक सताती है।',
    'In a silent room even the ticking clock sounds deafening,\nEvery passing second reminds me sharply of your absence,\nThough I try to sleep the night passes tossing restlessly,\nThis ache of separation pierces every fiber of my soul.'
  ],
  [
    'अब किसी से शिकायत करने का भी मन नहीं करता मेरा,\nहर शख़्स यहाँ अपने ही झूठे आईने में सँवरता मेरा,\nतन्हा बैठकर समंदर की लहरों को निहार लेता हूँ घंटों,\nकम से कम ये पानी तो मेरा राज़ किसी से नहीं कहता।',
    'I no longer feel the urge to complain before anyone,\nWhen everyone stays busy admiring illusions of their own,\nFor hours I sit alone watching ocean waves roll ashore,\nAt least these waters never betray my secrets to crowds.'
  ],
  [
    'कुछ दूरियाँ क़दमों से नहीं दिलों के बदलने से बनती हैं,\nतन्हाइयाँ अक्सर भरी महफ़िलों के ढलने से बनती हैं,\nहम तो आज भी वहीं खड़े हैं जहाँ तूने अलविदा कहा था,\nमगर जुदाई की लकीरें नसीब के छ्लने से बनती हैं।',
    'True distances grow not from miles but shifting hearts,\nDeep solitude begins right after loud gatherings fade,\nI still stand on the exact spot where you whispered goodbye,\nLines of separation were drawn by destiny quiet trickery.'
  ],
  [
    'न कोई ख़त आता है अब न दरवाज़े पर दस्तक होती है,\nमेरी हर शाम बस पुरानी तस्वीरों के संग रोती है,\nकितना अजीब लगता है उस शहर में अजनबी बनकर रहना,\nजहाँ की हर गली में कभी हमारी ही कहानी सोती थी।',
    'Neither letters arrive anymore nor knocks upon my door,\nEvery evening of mine weeps beside faded photographs,\nHow strange it feels living like a stranger in the town,\nWhose lanes once echoed with chapters of our story.'
  ],
  [
    'अकेलेपन की भी एक अपनी अलग ही मीठी ज़ुबान होती है,\nयहाँ न किसी से उम्मीद होती है न झूठी आन-बान होती है,\nजब दुनिया के सारे रिश्ते थका देते हैं नाज़ुक मन को,\nतब ख़ामोशी की गोद ही सबसे सुकून भरी मकान होती है।',
    'Solitude speaks a gentle comforting language of its own,\nFree from burdensome expectations and hollow pretenses,\nWhen worldly ties exhaust the delicate corners of mind,\nThe lap of quietness becomes the safest home of all.'
  ],
  [
    'सूनी राहों पर चलते हुए अपने ही क़दमों की आहट सुनता हूँ,\nटूटे हुए तारों की छाँव में अधूरे सपने बुनता हूँ,\nकोई हमदर्द न मिला जो बिना स्वार्थ हाथ थाम सके,\nइसलिए अब हर मोड़ पर सिर्फ़ तन्हाई का रास्ता चुनता हूँ।',
    'Walking lonely lanes I listen to the echo of my footsteps,\nWeaving unfinished dreams under the glow of falling stars,\nFinding no companion willing to hold my hand unselfishly,\nAt every crossroad now I choose the quiet path alone.'
  ],
  [
    'चाँद भी आसमान में देखो कितना तन्हा सफ़र करता है,\nफिर भी अपनी चाँदनी से सारी धरती का आँगन भरता है,\nअकेले रह जाना ज़िंदगी में कोई अभिशाप नहीं मेरे दोस्त,\nअकेला इंसान ही अंधेरों में ख़ुद की रोशनी बनकर उभरता है।',
    'Look how alone the moon travels across the vast night sky,\nYet fills the courtyard of earth with silver radiance,\nBeing left alone in life is never a curse dear friend,\nA solitary soul rises as its own lantern in darkness.'
  ],
  [
    'जिन गलियों में कभी तेरे संग घंटों बेफ़िक्र घूमा करते थे,\nहर पेड़ की छाँव में बैठकर मीठे ख़्वाब चूमा करते थे,\nआज उन रास्तों से गुज़रूँ तो सन्नाटा काटने को दौड़ता है,\nजुदाई के कोहरे में वो सारे हसीन मंज़र गुम हो गए।',
    'Lanes where we once wandered carefree together for hours,\nSharing sweet dreams beneath the cool shade of old trees,\nToday bite with haunting silence whenever I walk past,\nAll those lovely scenes vanished into the mist of parting.'
  ],
  [
    'किसी की आदत लग जाना भी कितना बड़ा इम्तिहान होता है,\nउसके जाते ही गुलज़ार सा दिल पल में श्मशान होता है,\nलाख समझाओ नादान मन को कि सब वक़्त का खेल है,\nफिर भी तन्हा रातों में हर कोना परेशान होता है।',
    'Growing deeply used to someone becomes life hardest test,\nOnce they leave a blooming heart turns desolate overnight,\nNo matter how much you tell the mind that time moves on,\nEvery silent night leaves each corner aching restlessly.'
  ],
  [
    'हमने ख़ुद को समेट लिया है जैसे शाम समेटे धूप को,\nअब किसी को नहीं दिखाते अपने ज़ख़्मी दिल के रूप को,\nतन्हाई की चादर में कम से कम झूठी हमदर्दी तो नहीं,\nयहाँ ख़ामोशी से सह लेते हैं क़िस्मत की हर चूक को।',
    'I folded myself inward just as dusk gathers fading sunlight,\nShowing nobody the wounded face of my quiet heart anymore,\nInside the wrap of solitude there is no fake sympathy,\nBearing silently every misstep written into destiny.'
  ],
  [
    'रेलगाड़ी की सीटी गूँजती है जब आधी रात के सन्नाटे में,\nतेरे बिछड़ने का वो आख़िरी मंज़र चुभता है काँटे में,\nहाथ हिलाकर तू तो ओझल हो गया धुएँ के बादलों में,\nऔर मेरी पूरी उम्र अटक गई उसी सूने प्लेटफ़ॉर्म के घाटे में।',
    'When a distant train whistle echoes through midnight calm,\nThe final scene of your departure pierces like a thorn,\nWaving once you disappeared behind clouds of white steam,\nLeaving my years stranded on that empty station platform.'
  ],
  [
    'लोग पूछते हैं अक्सर कि तुम इतने गुमसुम क्यों रहते हो,\nसबके साथ होकर भी अपनी ही दुनिया में क्यों बहते हो,\nकैसे समझाऊँ उन्हें कि अंदर एक पूरा शहर उजड़ा पड़ा है,\nजिसकी वीरान गलियों का दर्द तुम तन्हा ही सहते हो।',
    'People often ask why I stay so quiet and withdrawn lately,\nDrifting inside a world of my own even amidst company,\nHow do I explain that an entire city lies ruined within,\nWhose empty streets I walk alone bearing silent grief.'
  ],
  [
    'पतझड़ के दरख़्त सा खड़ा हूँ न छाँव रही न पत्ते रहे,\nजिन परिंदों को आशियाना दिया वही मौसम बदलते उड़ गए,\nअब तो हवाओं से भी कोई गिला करने का जी नहीं चाहता,\nजब अपने ही साये शाम ढलते ही अँधेरों में मुड़ गए।',
    'Standing like an autumn tree stripped of leaves and shade,\nBirds I sheltered flew off the moment seasons changed,\nI have no heart left even to complain against the wind,\nWhen my own shadow turned away as soon as twilight fell.'
  ],
  [
    'सन्नाटे की आवाज़ सुनना हर किसी के बस की बात नहीं,\nतन्हा रहकर मुस्कुराना कोई मामूली सी सौग़ात नहीं,\nहमने जुदाई के हर आँसू को मोती बनाकर पिरो लिया है,\nअब किसी बेगाने कंधे की इस दिल को कोई भी प्यास नहीं।',
    'Listening to the voice of stillness is not meant for all,\nSmiling gently in solitude is no ordinary achievement,\nI strung every tear of parting into pearls of resilience,\nMy heart thirsts no longer for any borrowed shoulder.'
  ]
];

const MOTIVATIONAL_NEW: readonly RawPoemTuple[] = [
  [
    'ठोकर खाकर गिरना तो हर बड़े सफ़र की पहली निशानी है,\nजो गिरकर दोबारा उठ खड़ा हो उसी की अमर कहानी है,\nअँधेरा चाहे कितना भी घना क्यों न हो आज की रात का,\nतेरे पसीने की चमक से ही कल नई सुबह लानी है।',
    'Stumbling along the road is the first sign of a grand quest,\nImmortal stories belong to those who rise after falling,\nNo matter how thick the darkness of tonight may appear,\nThe shine of your honest sweat will bring tomorrow dawn.'
  ],
  [
    'मंज़िलें उन्हीं को मिलती हैं जिनके सपनों में जान होती है,\nसिर्फ़ पंखों से कुछ नहीं होता हौसलों से उड़ान होती है,\nमुश्किलों के पहाड़ देखकर कभी क़दम पीछे मत हटाना दोस्त,\nक्योंकि तराशे जाने के बाद ही पत्थर की भगवान सी शान होती है।',
    'Summits greet those whose dreams pulse with fierce life,\nWings alone mean little for true flight rises from courage,\nNever step back seeing mountains of hardship ahead friend,\nOnly after enduring the chisel does stone command reverence.'
  ],
  [
    'हालात का रोना छोड़कर अपने कर्म पर पूरा विश्वास रख,\nहर नाकामी के बाद जीतने की और भी गहरी प्यास रख,\nज़माना आज भले तंज कसे तेरी छोटी सी शुरुआत पर,\nकल यही दुनिया ताली बजाएगी बस मेहनत अपने पास रख।',
    'Stop mourning tough circumstances and trust your effort,\nKeep an even deeper thirst for triumph after every setback,\nThough people mock your humble beginnings right now,\nTomorrow the same crowd will applaud your perseverance.'
  ],
  [
    'सूरज सा चमकना है अगर तो पहले सूरज सा जलना सीख,\nकाँटों भरी पगडंडियों पर भी मुस्कुराते हुए चलना सीख,\nआसान रास्तों पर चलकर कोई इतिहास नहीं रचता यहाँ,\nतूफ़ानों के रुख़ मोड़कर अपनी तक़दीर ख़ुद बदलना सीख।',
    'If you wish to shine like the sun learn first to burn bright,\nWalk smiling even across narrow trails lined with thorns,\nNobody writes history strolling lazily down easy lanes,\nBend the direction of storms and reshape your own fate.'
  ],
  [
    'हार तब नहीं होती जब तुम मैदान में लड़ते हुए गिर जाओ,\nहार तब होती है जब तुम मन के भीतर से डर जाओ,\nएक और कोशिश कर के देख शायद मंज़िल बस दो क़दम दूर हो,\nअपने अटूट इरादों के रंग से ज़िंदगी का कोरा पन्ना भर जाओ।',
    'Defeat never happens when you fall fighting in the arena,\nDefeat happens only when fear conquers your spirit inside,\nTry one more time for the goal may stand two steps away,\nFill the blank page of life with unbreakable determination.'
  ],
  [
    'नदी जब पहाड़ों से निकलती है तो रास्ता किसी से नहीं पूछती,\nचट्टानों से टकराकर भी उसकी रफ़्तार कभी नहीं टूटती,\nतुम भी अपने लक्ष्य के प्रति वैसा ही जुनून जगाओ दिल में,\nजहाँ मेहनत सच्ची हो वहाँ क़िस्मत भी साथ कभी नहीं छूटती।',
    'When a river springs from mountains it asks nobody the way,\nCrashing through boulders its momentum never breaks down,\nAwaken that same unstoppable devotion toward your goal,\nWhere effort is sincere even fortune refuses to leave you.'
  ],
  [
    'आज की जागती रातें ही तेरे कल का उजाला लिखेंगी,\nतेरी खामोश कोशिशें ही कामयाबी का नया हवाला लिखेंगी,\nथकान लगे जब पाँव में तो माँ-बाप के सपने याद कर लेना,\nउनकी दुआएँ हर मुश्किल से तुझे हिफ़ाज़त से निकालेंगी।',
    'Sleepless nights of toil today write your bright tomorrow,\nYour quiet persistence builds a brand new story of triumph,\nWhenever exhaustion weighs your feet recall your parents,\nTheir blessings will carry you safely past every hurdle.'
  ],
  [
    'पतंग को भी पता है कि आख़िर में कचरे में जाना होता है,\nमगर उससे पहले उसे पूरे आसमान को छूकर दिखाना होता है,\nज़िंदगी कितनी लंबी है इससे ज़्यादा मायने ये रखता है,\nकि तुम्हें अपने हुनर से दुनिया में कैसा नाम कमाना होता है।',
    'Even a paper kite knows its journey must eventually end,\nYet before falling it rises boldly to touch the high sky,\nHow long life lasts matters far less than how bravely,\nYou carve an unforgettable legacy through honest skill.'
  ],
  [
    'कोहरे से घबराकर कभी सफ़र अधूरा मत छोड़ देना राही,\nजैसे-जैसे आगे बढ़ोगे रास्ता ख़ुद-ब-ख़ुद साफ़ दिखेगा,\nसब्र का फल कड़वे इंतज़ार के बाद ही सबसे मीठा होता है,\nतेरा हर बहाया पसीना एक दिन मोतियों के भाव बिकेगा।',
    'Never abandon your journey fearing thick morning fog,\nWith each step forward the road ahead clears by itself,\nPatience yields its sweetest fruit after hard endurance,\nEvery drop of sweat shed today turns into pearls tomorrow.'
  ],
  [
    'ज़िंदगी हर रोज़ एक नया इम्तिहान लेकर सामने खड़ी होती है,\nमगर याद रखना हर बड़ी जीत बड़ी चुनौती से ही जुड़ी होती है,\nजो डरकर किनारे पर बैठे रहे उन्हें सिर्फ़ झाग मिला समंदर का,\nमोती तो वही लाए जिनकी छलाँग गहरे पानी में पड़ी होती है।',
    'Life stands before us daily holding a fresh new test,\nRemember every grand victory is tied to a steep challenge,\nThose sitting timidly ashore collect only foamy waves,\nPearls belong to divers who leap into deep waters.'
  ],
  [
    'अपने बीते कल के अफ़सोस में अपना आज बर्बाद मत कर,\nजो चला गया हाथ से अब उसकी बेवजह फ़रियाद मत कर,\nअभी तेरे हाथ में कलम भी है और ज़िंदगी के पन्ने भी बाकी,\nउठ और नई उम्मीद से अपनी जीत का शंखनाद कर।',
    'Do not waste today mourning regrets from yesterday,\nStop pleading over chances that already slipped away,\nThe pen still rests in your hand with fresh pages ahead,\nRise with renewed hope and sound the call of triumph.'
  ],
  [
    'लोहा जितना तपता है भट्टी में उतनी ही ताक़त पाता है,\nसोना जितनी आग सहे उतना ही खरा निखर कर आता है,\nअगर आज तेरी ज़िंदगी में संघर्षों की तेज़ आँच जल रही है,\nतो समझ ले रब तुझे किसी बहुत बड़े मुक़ाम के काबिल बनाता है।',
    'The hotter iron burns in the forge the stronger it grows,\nThe fiercer fire gold endures the purer its luster shines,\nIf intense trials blaze across your life right now,\nKnow God is shaping you for an extraordinary destiny.'
  ],
  [
    'लोगों की बातों को दिल पर नहीं अपने क़दमों के नीचे रखो,\nअपनी मंज़िल का नक़्शा हमेशा खुली आँखों के पीछे रखो,\nयहाँ हर कोई तुम्हें गिराने की सलाह मुफ़्त में दे जाएगा,\nतुम बस ख़ुद पर भरोसा और सीने में हौसला ऊँचे रखो।',
    'Place idle criticism beneath your shoes never inside heart,\nKeep the blueprint of your vision sharp behind open eyes,\nPlenty of voices offer free reasons why you might fail,\nHold unshakable faith in yourself and keep courage high.'
  ],
  [
    'छोटी-छोटी आदतें ही इंसान को शिखर तक पहुँचाती हैं,\nबूंद-बूंद मिलकर ही सूखे तालाब को सागर बनाती हैं,\nएक दिन में चमत्कार ढूँढने वाले अक्सर थककर बैठ जाते हैं,\nलगातार चलने वाली चींटियाँ ही पहाड़ों को भी झुकाती हैं।',
    'Small daily habits carry a person steadily to the peak,\nDrop by drop tiny streams fill dry basins into oceans,\nSeekers of overnight miracles tire out and quit early,\nRelentless steps conquer even the tallest mountain.'
  ],
  [
    'जब सारे दरवाज़े बंद नज़र आएँ तो ख़ुद एक खिड़की खोलो,\nनिराशा के सन्नाटे में उम्मीद के मीठे अल्फ़ाज़ बोलो,\nदुनिया का कोई भी ताला बिना चाबी के कभी नहीं बनता,\nअपनी हिम्मत की चाबी से हर मुश्किल की गिरह को खोलो।',
    'When every door seems shut carve open a window yourself,\nSpeak words of bright hope amidst bleak quiet despair,\nNo lock in this universe is ever forged without a key,\nUse the key of courage to untie every stubborn knot.'
  ],
  [
    'अकेले ही शुरू करना पड़ता है हर बड़े बदलाव का कारवाँ,\nकामयाबी मिल जाए तो पीछे जुड़ जाता है सारा जहाँ,\nइसलिए इस बात की फ़िक्र छोड़ दे कि कौन तेरे साथ खड़ा है,\nतेरा दृढ़ संकल्प ही तेरा सबसे मज़बूत और सच्चा आसमाँ।',
    'Every great transformation begins as a solitary march,\nOnce success dawns the whole world lines up behind you,\nStop worrying today about who stands beside your struggle,\nYour iron resolve alone is your strongest canopy.'
  ],
  [
    'टूटी हुई पेंसिल से भी हम सुंदर चित्र बना सकते हैं,\nहारे हुए लम्हों से भी जीत के दीप जला सकते हैं,\nमायूस होकर बैठ जाना तो ज़िंदादिली की तौहीन है दोस्त,\nजब तक साँस चल रही है हम हर बाज़ी पलटा सकते हैं।',
    'Even a broken pencil can sketch a breathtaking picture,\nEven moments of loss can spark lamps of new victory,\nSitting in despair insults the gift of a breathing spirit,\nAs long as breath flows any game can still be turned.'
  ],
  [
    'ज़ख़्मों को अपनी कमज़ोरी नहीं अपनी ढाल बनाना सीख ले,\nहर आँसू को पोंछकर आँखों में मशाल जलाना सीख ले,\nज़िंदगी तुझे बार-बार परखेगी अलग-अलग इम्तिहानों के मोड़ पर,\nतू हर संकट के सीने पर मुस्कुराकर क़दम बढ़ाना सीख ले।',
    'Turn old scars into armor rather than signs of frailty,\nWipe away tears and light blazing torches in your eyes,\nLife will test your mettle around countless sharp bends,\nLearn to step forward smiling straight across adversity.'
  ],
  [
    'रात भर का अँधेरा भी एक छोटे से दीये से हार जाता है,\nसच्ची लगन वाला मुसाफ़िर हर भँवर के पार जाता है,\nकभी कम मत आँकना अपनी भीतर छुपी हुई अनंत शक्ति को,\nएक छोटा सा बीज ही धरती चीरकर विशाल वृक्ष आकार पाता है।',
    'Even an entire night of darkness yields to one small lamp,\nA devoted traveler crosses safely past every whirlpool,\nNever underestimate the boundless strength sleeping within,\nOne tiny seed splits hard earth to rise as a mighty tree.'
  ],
  [
    'सपने वो लिखो जो तुम्हें सुबह बिस्तर से जगाकर उठा दें,\nआलस और बहानेबाज़ी की हर पुरानी जंजीर को तुड़ा दें,\nवक्त किसी का इंतज़ार नहीं करता घड़ी की सुइयाँ भागती हैं,\nआज का किया परिश्रम ही तुम्हें कल सम्मान का ताज पहना दे।',
    'Write dreams bold enough to wake you before sunrise,\nShattering every rusty chain of excuse and hesitation,\nTime waits for nobody as clock hands race relentlessly,\nHard work invested today crowns your brow with honor.'
  ],
  [
    'काग़ज़ की कश्ती भी पार लग जाती है जब इरादा पक्का हो,\nतूफ़ान भी रास्ता छोड़ देते हैं जब दिल का हौसला सच्चा हो,\nनतीजे की चिंता छोड़कर बस अपना सर्वश्रेष्ठ देते चलो आज,\nरब कभी मेहनत व्यर्थ नहीं जाने देता जिसका मन अच्छा हो।',
    'Even a paper boat reaches shore backed by firm resolve,\nTempests step aside before a courageous honest heart,\nRelease anxiety over outcomes and give your finest effort,\nSincere labor paired with goodwill never goes unrewarded.'
  ],
  [
    'हर पतझड़ के बाद दरख़्तों पर नई कोंपलें ज़रूर आती हैं,\nसब्र रखने वालों के आँगन में ख़ुशियाँ लौटकर मुस्कुराती हैं,\nबस हिम्मत का दामन कभी हाथ से फिसलने मत देना मेरे यार,\nकठिन घड़ियाँ इंसान को तोड़ने नहीं निखारने को आती हैं।',
    'After every dry autumn fresh green buds return to trees,\nJoy smiles back into courtyards that guard quiet patience,\nNever let the hem of courage slip loose from your grip,\nHard hours arrive not to break you but to polish you.'
  ]
];

const MAAFI_NEW: readonly RawPoemTuple[] = [
  [
    'अनजाने में अगर मेरे लफ़्ज़ों से तेरा कोमल दिल दुखा हो,\nगुस्से के किसी पल में मुझसे कोई कड़वा जुमला कहा हो,\nहाथ जोड़कर माँगता हूँ माफ़ी अपने उस नादान लम्हे की,\nमत रूठ मुझसे यूँ कि तेरे बिना मेरा हर दिन सज़ा हो।',
    'If my careless words unintentionally hurt your tender heart,\nOr a bitter phrase slipped out in a fleeting moment of anger,\nWith folded hands I ask forgiveness for my foolish mistake,\nPlease do not stay upset for every day without you feels harsh.'
  ],
  [
    'रूठना तेरा हक़ है मगर यूँ बात करना तो बंद मत कर,\nअपनी ख़ामोशी की दीवार से मेरी साँसों को छंद मत कर,\nमान लिया सौ ख़ताएँ हुई हैं मुझसे नासमझी के आलम में,\nएक बार गले लगा ले और मेरी खुशियों को मंद मत कर।',
    'You have every right to sulk yet please do not stop speaking,\nDo not wall off my very breath behind heavy silence,\nI admit a hundred faults happened out of pure thoughtlessness,\nEmbrace me once and bring warmth back into my world.'
  ],
  [
    'कान पकड़कर खड़ा हूँ तेरे सामने अब तो मुस्कुरा दे यार,\nअपने इस पागल से दोस्त की छोटी सी ग़लती भुला दे यार,\nतेरी नाराज़गी से पूरा दिन बेरंग और उदास गुज़रता है,\nबस एक प्यारी सी मुस्कान से सारे गिले-शिकवे मिटा दे यार।',
    'Holding my ears in apology I stand hoping you will smile,\nPlease forget this small blunder of your devoted friend,\nYour displeasure leaves my entire day colorless and heavy,\nErase every grievance today with one sweet forgiving grin.'
  ],
  [
    'रिश्तों में कभी-कभी अनबन की धूल जम जाया करती है,\nमगर सच्ची मोहब्बत हर ग़लती को माफ़ कर दिखाया करती है,\nमैं झुकता हूँ तेरे आगे क्योंकि मुझे तुझसे ज़्यादा अज़ीज़ कुछ नहीं,\nअकड़ से नहीं झुक जाने से ही चाहत बचाया करती है।',
    'Sometimes dust of misunderstanding settles over close bonds,\nYet genuine love shines brightest through kind forgiveness,\nI bow gladly before you because nothing matters more than us,\nHumility rather than pride keeps affection alive forever.'
  ],
  [
    'मेरी आँखों में देख ले तुझे अपने किए का पछतावा दिखेगा,\nहर आँसू में सिर्फ़ तुझे मनाने का सच्चा दावा दिखेगा,\nइंसान हूँ फ़रिश्ता नहीं इसलिए भूल हो गई मुझसे आज,\nमाफ़ कर दे मुझे वरना ये दिल रात भर तन्हा जगेगा।',
    'Look into my eyes and see honest remorse for what happened,\nEvery tear carries a sincere promise to make things right,\nBeing human rather than angel I stumbled unknowingly today,\nForgive me now or my heart will ache sleeplessly tonight.'
  ],
  [
    'तेरे रूठ जाने से घर की दीवारें भी उदास हो जाती हैं,\nचाय की मिठास और मौसम की बहारें भी ख़ास खो जाती हैं,\nचलो ख़त्म करें ये अबोलापन और फिर से पहले जैसे मिलें,\nमाफ़ी के दो मीठे बोल से दूरियाँ पास हो जाती हैं।',
    'When you turn upset even the walls of home feel gloomy,\nSweetness fades from warm tea and spring loses its charm,\nLet us end this quiet standoff and laugh together again,\nTwo gentle words of sorry bring distant hearts right back.'
  ],
  [
    'ग़लती मेरी थी ये बात मैं पूरे दिल से स्वीकार करता हूँ,\nअपनी हर नादानी से ज़्यादा मैं तुझसे सच्चा प्यार करता हूँ,\nचाहे जितनी सज़ा दे ले मुझे अपने गुस्से से ऐ हमदम,\nबस ख़ामोश मत रह कि तेरी आवाज़ का इंतज़ार करता हूँ।',
    'The fault was mine and I accept it with my whole heart,\nLoving you far deeper than any foolish error of mine,\nScold me all you wish in anger O cherished companion,\nOnly break this silence for I long to hear your voice.'
  ],
  [
    'अहम को बीच में लाकर हम अपने हसीन रिश्ते क्यों गँवाएँ,\nछोटी सी बात का बतंगड़ बनाकर क्यों अपने दिल जलाएँ,\nलो मैंने पहले कह दिया सॉरी अपना सिर तेरे आगे झुकाकर,\nआओ फिर से हाथ थामें और मुस्कुराकर नया सवेरा मनाएँ।',
    'Why let ego step between us and ruin a precious bond,\nWhy burn our own peace turning small sparks into fires,\nLook I say sorry first bowing my head warmly to you,\nCome hold my hand again and welcome a bright morning.'
  ],
  [
    'तू डाँट ले मुझे जी भरकर या शिकायतों की बौछार कर दे,\nमगर यूँ अजनबियों की तरह नज़रें फेरकर वार मत कर दे,\nतेरी एक माफ़ी मेरे सीने से मन भर बोझ उतार देगी,\nमेरे पछतावे की अर्ज़ी पर बस अपनी मुस्कान से प्यार कर दे।',
    'Scold me to your heart content or shower complaints on me,\nJust do not wound me by turning away like a stranger,\nOne word of pardon lifts mountains of guilt off my chest,\nSeal my humble plea today with your forgiving warmth.'
  ],
  [
    'जुबान फिसल गई थी मेरी पर दिल में कोई खोट नहीं था,\nतुझे चोट पहुँचाने का मेरा दूर-दूर तक कोई सोच नहीं था,\nअपने ही आँगन के फूल को भला कोई मुरझाते देख सकता है,\nमुझे माफ़ कर दे कि तेरे सिवा मेरा कोई ओट नहीं था।',
    'My tongue slipped carelessly yet zero malice lived within,\nHurting you was never remotely in my thoughts at all,\nWho could bear watching the finest flower of home wilt,\nForgive me love for you remain my sole shelter.'
  ],
  [
    'नाराज़ निगाहों से जब भी तू मुझे देखकर मुँह मोड़ लेती है,\nमेरी हर धड़कन वहीं ठिठक कर मेरा ही साथ छोड़ देती है,\nमान जा न मेरी जान अब और कितना इम्तिहान लेगी मेरा,\nतेरी ख़ामोशी मेरे भीतर तक सारे हौसले तोड़ देती है।',
    'Whenever you glance with upset eyes and turn away softly,\nEvery beat inside my chest freezes in sudden dismay,\nPlease relent sweetheart how much longer will you test me,\nYour quiet distance shatters every ounce of my poise.'
  ],
  [
    'माफ़ करने वाला हमेशा रिश्ते में सबसे बड़ा कहलाता है,\nक्योंकि वो नफ़रत से ऊपर उठकर मोहब्बत का दीप जलाता है,\nमैं शर्मिंदा हूँ अपनी भूल पर और वादा करता हूँ आज से,\nदोबारा कोई आँसू मेरी वजह से तेरी पलक न भिगाता है।',
    'The one who forgives always stands tallest in any bond,\nLighting lamps of affection high above fleeting hurt,\nAshamed of my lapse I promise sincerely from today,\nNever again shall my actions dampen your eyelashes.'
  ],
  [
    'रूठे हुए यार को मनाने का भी अपना अलग ही दस्तूर है,\nजिससे सबसे ज़्यादा प्यार हो उसी के नख़रे उठाना मंज़ूर है,\nलो गुलाब का फूल लाया हूँ अपनी हर ख़ता के बदले में,\nमान जाओ अब वरना इस दिल का चैन मिलना बड़ा दूर है।',
    'Coaxing an upset beloved carries a tender charm of its own,\nGladly pampering the one who means everything to heart,\nHere I bring a fresh rose in exchange for my blunder,\nPlease smile now or peace will stay miles out of reach.'
  ],
  [
    'कहा-सुनी तो हर अपने रिश्ते के आँगन में होती रहती है,\nइसी नोक-झोंक के बीच तो चाहत की डोर मज़बूत रहती है,\nदिल पर मत ले मेरी कल की कही हुई उन बेवकूफ़ बातों को,\nमेरी हर दुआ आज भी सिर्फ़ तेरी सलामती को कहती है।',
    'Little quarrels visit the courtyard of every close bond,\nThrough gentle banter threads of affection grow stronger,\nDo not hold yesterday foolish words heavy against your heart,\nEvery prayer of mine still wishes purely for your joy.'
  ],
  [
    'अगर मेरे झुकने से हमारे बीच की कड़वाहट पिघल जाती है,\nतो मुझे सौ बार झुकने में भी रत्ती भर शर्म नहीं आती है,\nतू जीत जा हर बहस में और मैं ख़ुशी-ख़ुशी हार जाऊँ सदा,\nक्योंकि तुझे खोकर मिली हुई जीत भी बेकार कहलाती है।',
    'If bowing my pride melts away bitterness between us two,\nI feel zero hesitation bowing a hundred times gladly,\nWin every argument while I happily surrender each round,\nFor any victory that costs your smile is utter loss.'
  ],
  [
    'सॉरी कहने में देरी हो गई मुझसे इसका भी मुझे मलाल है,\nजब से तू रूठा है मेरे दिल का हर लम्हा बेहद बेहाल है,\nपुरानी बातें मिट्टी में दबाकर चलो फिर से गले मिल लें,\nतेरी दोस्ती के बिना मेरी ज़िंदगी का हर रंग कंगाल है।',
    'I regret even the delay it took me to say I am sorry,\nEvery hour since you grew upset has felt miserable,\nLet us bury yesterday dust and embrace warmly once again,\nWithout your friendship every color of life looks poor.'
  ],
  [
    'तेरे गुस्से में भी मुझे तेरे अपनेपन की फ़िक्र नज़र आती है,\nइसीलिए तो मेरी रूह हर बार तेरी ही चौखट पर आती है,\nमाफ़ कर दे अपने इस नादान हमसफ़र की अनजानी ख़ता को,\nतेरे बिना ये शाम बड़ी वीरान और उदास गुज़र जाती है।',
    'Even inside your anger I sense deep care for our bond,\nDrawing my soul back repeatedly to your gentle threshold,\nPardon the unintended slip of your devoted companion,\nWithout your warmth this evening passes bleak and hollow.'
  ],
  [
    'लफ़्ज़ वापस तो नहीं लिए जा सकते जो कमान से निकल गए,\nमगर पछतावे के आँसुओं में मेरे सारे ग़ुरूर पिघल गए,\nएक मौक़ा और दे दे मुझे अपनी सच्ची चाहत साबित करने का,\nतेरे रूठने के बाद से मेरे दिन-रात के चैन बदल गए।',
    'Words once loosed like arrows can never be pulled back,\nYet tears of sincere regret have melted all my pride,\nGrant me one chance more to prove how deeply I care,\nSince you turned quiet my days and nights lost peace.'
  ],
  [
    'न तू ग़लत था पूरा और न मैं पूरी तरह सही था कल,\nबस ग़लतफ़हमियों के धुएँ ने बिगाड़ दिया वो प्यारा सा पल,\nचलो दोनों मिलकर साफ़ कर लें दिल के इस धुँधले आईने को,\nताकि हमारे प्यार की राह में कोई काँटा न रहे आजकल।',
    'Neither were you wholly wrong nor was I right yesterday,\nSmoke of misunderstanding clouded a sweet moment between us,\nLet us wipe clean the misty mirror of our hearts together,\nLeaving zero thorns along the path of our affection.'
  ],
  [
    'तेरी चुप्पी किसी तीर से ज़्यादा तेज़ सीने में चुभती है,\nहर घड़ी दिल में बस तुझे मना लेने की आरज़ू उगती है,\nबोल दे कुछ भी भला-बुरा पर यूँ ख़ामोश मत बैठा कर,\nतेरी मीठी आवाज़ से ही तो मेरी दुनिया में रौनक़ सजती है।',
    'Your silence pierces my chest sharper than any arrow,\nEvery minute awakens a deeper wish to win back your smile,\nSay whatever is on your mind just do not sit mute,\nYour warm voice alone lights up my entire household.'
  ],
  [
    'प्यार जहाँ गहरा होता है वहाँ थोड़ा रूठना भी लाज़मी है,\nपर रूठकर दूर चले जाना ये तो मोहब्बत में नाइंसाफ़ी है,\nवापस लौट आ अपनी उसी प्यारी सी मुस्कान के साथ ऐ सनम,\nमेरी सौ ग़लतियों पर तेरी एक नज़र की माफ़ी ही काफ़ी है।',
    'Where love runs deep occasional sulking comes naturally,\nYet drifting far apart feels unfair to true devotion,\nCome back wearing that familiar radiant smile my love,\nOne forgiving glance from you heals a hundred mistakes.'
  ],
  [
    'दिल के कोरे काग़ज़ पर मैंने हज़ार बार सॉरी लिख दिया है,\nअपनी हर खुशी का रास्ता तेरी रज़ामंदी से जोड़ लिया है,\nअब मुस्कुरा कर देख ले मेरी तरफ़ एक बार प्यार से,\nमैंने आइंदा तुझे कभी न सताने का पक्का प्रण किया है।',
    'Across the blank page of my heart I wrote sorry endlessly,\nTying every road of happiness to your gentle approval,\nGlance toward me once now with a soft forgiving smile,\nI vow wholeheartedly never to trouble your heart again.'
  ]
];

const BOY_NEW: readonly RawPoemTuple[] = [
  [
    'ज़िम्मेदारियों का बोझ कम उम्र में ही कंधों पर उठा लेता है,\nलड़का है जनाब अपने सारे आँसू हँसी के पीछे छुपा लेता है,\nघर वालों की ख़्वाहिशें पूरी करने की दौड़ में दिन-रात जलकर,\nवो अपने ख़ुद के शौक़ जेब के किसी कोने में सुला लेता है।',
    'Shouldering heavy family duties squarely at a young age,\nA boy hides all his quiet tears behind an easy laugh,\nBurning day and night to fulfill the wishes of loved ones,\nHe tucks his own personal dreams quietly inside his pocket.'
  ],
  [
    'न कभी दर्द दिखाता है चेहरे पर न थकान का ज़िक्र करता है,\nख़ुद टूटे जूते पहनकर भी पूरे परिवार की फ़िक्र करता है,\nलोग कहते हैं लड़कों के सीने में जज़्बात कम हुआ करते हैं,\nकोई पूछे उस तकिये से जिस पर वो रात को चुपके रोता है।',
    'Never showing pain on his face or mentioning exhaustion,\nEven in worn shoes he worries first for his whole home,\nPeople claim boys carry fewer tender emotions inside,\nAsk the pillow that catches his silent tears late at night.'
  ],
  [
    'ख़ाली जेब लेकर जब वो अनजान शहर की सड़कों पर निकलता है,\nहज़ार ठोकरें खाकर भी अपने स्वाभिमान के बल पर सँभलता है,\nमाँ की उम्मीद और पिता का भरोसा टूटने नहीं देता कभी,\nएक साधारण सा लड़का यूँ ही तपकर असली हीरा बनता है।',
    'Stepping onto unfamiliar city streets with empty pockets,\nThrough countless stumbles he steadies himself with grit,\nRefusing ever to let down mother hope or father trust,\nAn ordinary boy tempers himself quietly into pure diamond.'
  ],
  [
    'बचपन की बेफ़िक्री जाने कब नौकरी की तलाश में खो जाती है,\nत्योहारों पर घर जाने की ख़ुशी भी छुट्टियों की मोहताज हो जाती है,\nलड़के की ज़िंदगी बाहर से जितनी आज़ाद नज़र आती है सबको,\nभीतर से वो उतनी ही फ़र्ज़ की ज़ंजीरों में बँधी सो जाती है।',
    'Carefree childhood slips away chasing steady employment,\nEven festive trips home wait upon approved leave days,\nAs free as a young man life appears from the outside,\nInside it stays anchored firmly to unspoken duties.'
  ],
  [
    'जब प्यार करता है सच्चे दिल से तो पूरी कायनात वार देता है,\nऔर जब यारी निभाता है तो दोस्ती पर अपनी जान निसार देता है,\nसख़्त दिखता है बाहर से नारियल की तरह हर स्वाभिमानी लड़का,\nमगर जो समझ ले उसके मन को उसे उम्र भर दुलार देता है।',
    'When he loves sincerely he pours out his whole universe,\nWhen standing by friends he stakes his very life loyally,\nTough on the outside like a coconut shell in demeanor,\nTo whoever understands his heart he gives lifelong warmth.'
  ],
  [
    'महीने की तनख़्वाह आते ही वो सबके हिसाब चुकाने लगता है,\nबहन की राखी और माँ की साड़ी के सपने सजाने लगता है,\nख़ुद के लिए एक नई क़मीज़ ख़रीदना हर बार टाल देता है,\nफिर भी शाम को घर लौटकर सबके संग मुस्कुराने लगता है।',
    'The day salary arrives he settles bills for everyone first,\nPlanning gifts for sister festival and mother new saree,\nPostponing buying a fresh shirt for himself once again,\nYet returning home each evening wearing a bright smile.'
  ],
  [
    'चुपचाप सुन लेता है ज़माने के ताने जब तक कामयाब न हो,\nसह लेता है कड़ी धूप ताकि घर के आँगन में आफ़ताब न हो,\nलड़का होना सिर्फ़ आज़ादी से घूमने का नाम नहीं मेरे दोस्त,\nये वो तपस्या है जिसका किसी किताब में लिखा हिसाब न हो।',
    'Quietly absorbing worldly taunts until success arrives,\nEnduring harsh sun so cool shade covers his home courtyard,\nBeing a boy means far more than wandering around freely,\nIt is silent penance unrecorded in any ledger book.'
  ],
  [
    'दिल टूट जाए फिर भी अगले दिन दफ़्तर वक़्त पर जाता है,\nटूटे हुए ख़्वाबों के ऊपर शांत चेहरे का नक़ाब लगाता है,\nकोई नहीं पूछता उससे कि बेटा तेरे मन के भीतर क्या चल रहा,\nबस हर कोई उससे मज़बूत बने रहने की उम्मीद लगाता है।',
    'Even after heartbreak he reports to work right on time,\nWearing a composed expression over shattered inner hopes,\nRarely does anyone ask gently what weighs on his mind,\nEveryone simply expects him to remain strong forever.'
  ],
  [
    'सादगी में भी एक अलग ही शाही अंदाज़ रखता है वो लड़का,\nदौलत से ज़्यादा अपने किरदार पर नाज़ रखता है वो लड़का,\nझूठे दिखावे की इस चमक-दमक भरी आधुनिक भीड़ से अलग,\nबुज़ुर्गों के संस्कारों का सिर पर ताज रखता है वो लड़का।',
    'Carrying regal grace even in simple everyday attire,\nHe takes pride in character far above material wealth,\nApart from flashy crowds chasing hollow modern display,\nHe wears ancestral values proudly like a crown.'
  ],
  [
    'रोने पर जिसे बचपन से ही लड़के नहीं रोते सिखाया गया,\nहर गहरे दर्द को सीने के तहख़ाने में दफ़न कराया गया,\nकोई तो गले लगाकर कहे उससे भी कि थोड़ा थक ले आज,\nजिसके मज़बूत कंधों पर पूरे घर का भविष्य टिकाया गया।',
    'Taught since childhood that boys must never shed tears,\nTrained to lock deep sorrow inside hidden chambers,\nMay someone hug him warmly and let him rest awhile,\nWhose steady shoulders carry the future of his home.'
  ],
  [
    'दो पहिया गाड़ी और दो सच्चे यार ही उसकी असली दौलत हैं,\nमाँ के हाथ का खाना और पिता की शाबाशी उसकी जन्नत हैं,\nज़्यादा बड़ी शिकायतें नहीं करता वो अपनी तक़दीर से कभी,\nअपनों के चेहरों पर मुस्कान रहे बस यही उसकी मन्नत है।',
    'A humble bike and two loyal friends form his real treasure,\nMother home-cooked meal and father nod feel like heaven,\nHe rarely complains against whatever destiny deals out,\nSeeing loved ones smile remains his deepest prayer.'
  ],
  [
    'कमरे की चारदीवारी में वो अपने भविष्य की जंग लड़ता है,\nकिताबों के पन्नों में जागकर अपनी किस्मत की लकीरें गढ़ता है,\nअसफलता की ठोकरें भी उसके हौसले को हिला नहीं पातीं,\nक्योंकि उसके पीछे बूढ़े पिता की उम्मीदों का सूरज चढ़ता है।',
    'Within four small room walls he fights for tomorrow,\nStaying awake over books carving lines of his own fate,\nEven stumbles of setback cannot shake his quiet resolve,\nFueled by the rising hope in his aging father eyes.'
  ],
  [
    'नख़रे नहीं दिखाता कभी बस ख़ामोशी से साथ निभाना जानता है,\nरूठ जाए कोई अपना तो सौ तरह से उसे मनाना जानता है,\nलड़कों की मोहब्बत में शोर कम और गहराई ज़्यादा होती है,\nवो जिसे अपना मान ले उसे आख़िरी साँस तक बचाना जानता है।',
    'Never throwing tantrums he stands loyally without fuss,\nCoaxing upset loved ones gently in a hundred sweet ways,\nA young man affection makes little noise yet runs deep,\nGuarding whoever he calls his own till his final breath.'
  ],
  [
    'परदेस की सूनी कोठरी में ख़ुद अपने हाथों से रोटी पकाता है,\nघर फ़ोन करे तो माँ से पेट भर खाने का झूठ बताता है,\nत्योहार की रौनक़ खिड़की से देखकर आँखें पोंछ लेता है वो,\nपरिवार की तरक़्क़ी के लिए अपना सुख चुपचाप लुटाता है।',
    'Cooking simple meals alone inside a distant rented room,\nTelling his mother over phone that he ate plentifully,\nWiping misty eyes watching festive lights from a window,\nHe trades personal comfort quietly for family progress.'
  ],
  [
    'अकड़ नहीं है उसमें बस अपनी ख़ुद्दारी से समझौता नहीं करता,\nग़लत बात के आगे वो किसी ताक़तवर से भी कभी नहीं डरता,\nसीधा है इतना कि प्यार के दो बोल पर दिल हार बैठे अपना,\nऔर स्वाभिमान पर आए तो तूफ़ानों के आगे भी नहीं हटता।',
    'Not arrogant at all he simply refuses to sell his pride,\nNever flinching before power when standing up for truth,\nGentle enough to melt over two kind affectionate words,\nUnmovable before tempests whenever honor is challenged.'
  ],
  [
    'पिता के कंधे के बराबर आते ही वो घर का स्तंभ बन जाता है,\nछोटे भाई-बहनों की हर ज़रूरत का वो पहला आरंभ बन जाता है,\nख़ुद धूप में तपकर अपनों के सिर पर ठंडी छाँव फैलाता है,\nएक ज़िम्मेदार लड़का वक़्त से पहले ही बड़ा समझदार कहलाता है।',
    'Growing tall beside his father he becomes a pillar of home,\nStanding first behind every need of younger siblings,\nBraving hot sun himself to spread cool shade over family,\nA dutiful son matures into wisdom well ahead of years.'
  ],
  [
    'चेहरे पर हल्की दाढ़ी और आँखों में बड़े सपनों की चमक लिए,\nनिकल पड़ता है हर सुबह वो मंज़िल की अनजानी सड़क लिए,\nथक कर चूर हो जाता है शाम ढलते-ढलते इस भागदौड़ में,\nफिर भी मुस्कुरा देता है अपनों के प्यार की मीठी महक लिए।',
    'With light stubble and bright dreams shining in his eyes,\nHe steps out each morning onto demanding city roads,\nWorn out completely by dusk from endless daily hustle,\nHe still smiles warmly remembering love waiting home.'
  ],
  [
    'बेटे भी घर की रौनक़ होते हैं भले विदा होकर नहीं जाते,\nवो अपने ही घर में रहकर अपने बचपन से विदा हो जाते,\nखिलौने छूट जाते हैं और काँधों पर फ़र्ज़ का बस्ता आ जाता,\nवो बिना शोर मचाए हर रिश्ते की मर्यादा उम्र भर निभाते।',
    'Sons too brighten homes though they do not leave in marriage,\nLiving under the same roof they bid farewell to boyhood,\nToys give way early to satchels of lifelong obligation,\nHonoring every bond quietly without asking applause.'
  ],
  [
    'जब जेब में पैसे कम हों तब उसे दुनिया का असली चेहरा दिखता है,\nकौन सच्चा हमदर्द है और कौन मतलब के भाव बिकता है,\nउन्हीं कड़वे तजुर्बों की भट्टी में पककर वो फ़ौलाद बनता है,\nफिर उसकी कामयाबी का किस्सा हर चौराहे पर लिखता है।',
    'Empty pockets reveal to him the unfiltered face of society,\nShowing clearly who stands loyal and who chases convenience,\nForged inside the furnace of bitter lessons he turns steel,\nUntil his triumph echoes proudly across every square.'
  ],
  [
    'उसकी चुप्पी में भी हज़ारों अनकहे सवाल छुपे रहते हैं,\nसुलझे हुए दिखने वाले लड़के भीतर से कई दर्द सहे रहते हैं,\nज़रा प्यार से पूछ लिया करो कभी अपने घर के बेटों का हाल,\nवो भी इंसान हैं बस मर्दानगी की शर्त में चुप रहे रहते हैं।',
    'Thousands of unspoken questions hide inside his quietness,\nComposed looking young men carry silent weights within,\nAsk tenderly sometimes how the sons of your household feel,\nHuman at heart they stay mute beneath stoic expectations.'
  ],
  [
    'अपने दम पर मुक़ाम बनाने की ज़िद उसके लहू में दौड़ती है,\nहर मुश्किल दीवार उसके पक्के इरादों के आगे सिर मोड़ती है,\nन शॉर्टकट की तलाश है उसे न किसी के एहसान की चाहत,\nउसकी ईमानदार मेहनत ही किस्मत के बंद ताले तोड़ती है।',
    'Drive to build his own standing courses through his veins,\nStubborn walls give way before his relentless willpower,\nSeeking neither shortcuts nor unearned favors from anyone,\nHis honest labor breaks open locked doors of destiny.'
  ],
  [
    'सादगी, संस्कार और स्वाभिमान जिस लड़के का गहना होता है,\nउसके साथ हर रिश्ते का सफ़र बेहद सुकून भरा रहना होता है,\nदिखावे की दुनिया में वो अपने वादों का पक्का इंसान है,\nउसकी एक ज़ुबान ही भरोसे का सबसे मज़बूत गहना होता है।',
    'When simplicity values and honor adorn a young man spirit,\nEvery bond shared beside him feels steady and peaceful,\nIn an age of pretense he stands faithful to every word,\nHis spoken promise shines brighter than finest gold.'
  ]
];

const GIRL_NEW: readonly RawPoemTuple[] = [
  [
    'दो घरों की रौनक़ अपने नाज़ुक कंधों पर सँभालती है लड़की,\nहर दुख को अपनी प्यारी सी मुस्कान में ढालती है लड़की,\nबाबुल का आँगन छोड़कर पराये घर को अपना मंदिर बना ले,\nइतनी बड़ी क़ुर्बानी हँसते-हँसते निकालती है लड़की।',
    'Carrying the grace of two homes upon delicate shoulders,\nA girl transforms quiet sorrow into a comforting smile,\nLeaving her father courtyard she turns a new house sacred,\nOffering immense sacrifice gently with effortless poise.'
  ],
  [
    'सिर्फ़ पायल की छनक नहीं अब हौसलों की ऊँची उड़ान है वो,\nमाँ की ममता का साया और पिता के सिर का अभिमान है वो,\nकमज़ोर समझने की भूल मत करना आज की इस स्वाभिमानी बेटी को,\nअपने सपनों के दम पर रचती नया खुला आसमान है वो।',
    'More than chiming anklets she is a flight of bold courage,\nA reflection of mother warmth and her father proud crown,\nNever mistake today self-reliant daughter for fragile,\nOn the strength of her dreams she paints a new horizon.'
  ],
  [
    'कभी बेटी, कभी बहन, कभी पत्नी तो कभी माँ बन जाती है,\nजिस आँगन में क़दम रखे वहाँ खुशियों की बहार लाती है,\nईश्वर ने अपनी सबसे सुंदर नेमत को लड़की का रूप दिया,\nजो रूखे से मकान को भी प्यार से स्वर्ग बना दिखाती है।',
    'Daughter sister partner and mother across life chapters,\nWherever she steps seasons of warmth bloom naturally,\nGod shaped His finest blessing into a woman spirit,\nTurning bare brick walls into a loving sanctuary.'
  ],
  [
    'आँखों में काजल और सीने में फ़ौलादी जज़्बात रखती है,\nवो नाज़ुक दिखती है मगर तूफ़ानों से लड़ने की बात रखती है,\nज़माने की पाबंदियों ने जब भी उसके पंख कतरने चाहे,\nउसने अपनी क़ाबिलियत से सितारों तक अपनी ज़ात रखती है।',
    'Kohl in her eyes paired with iron resolve in her chest,\nGraceful outside yet ready to face fierce headwinds,\nWhenever narrow rules tried clipping her bright wings,\nHer merit carried her name straight up among stars.'
  ],
  [
    'थोड़ी सी पगली, थोड़ी भावुक, पर दिल की बिल्कुल साफ़ होती है,\nहर लड़की अपने परिवार के आँगन की मीठी आवाज़ होती है,\nजिस घर में बेटियों की हँसी सुबह-शाम गूँजा करती है यारों,\nउस घर पर साक्षात लक्ष्मी और सरस्वती की मेहर ख़ास होती है।',
    'Playful tenderhearted and crystal pure inside her soul,\nEvery daughter is the sweet melody of her family courtyard,\nHomes echoing morning and night with daughters laughter,\nStay blessed abundantly with wisdom grace and fortune.'
  ],
  [
    'अपने हिस्से की ख़ुशी भी भाइयों की झोली में डाल देती है,\nपापा के माथे की शिकन देखकर अपनी हर ज़िद टाल देती है,\nकहने को तो परायी अमानत कहती है दुनिया बेटियों को हमेशा,\nपर संकट आए तो मायके की ख़ातिर अपनी जान निकाल देती है।',
    'Pouring her own share of joy gladly into sibling hands,\nDropping every personal wish noticing father tired brow,\nThough custom calls daughters guests bound elsewhere,\nIn hardship she stands fiercely guarding her childhood home.'
  ],
  [
    'सजना-सँवरना उसका शौक़ सही पर स्वाभिमान उसका श्रृंगार है,\nझुककर रिश्ते निभाती है पर अन्याय के आगे वो तलवार है,\nउसकी ख़ामोशी को कभी उसकी बेबसी मत समझ लेना दुनिया वालो,\nनारी में जितना कोमल फूल है उतनी ही धधकती अंगार है।',
    'Graceful attire delights her yet dignity is her true jewel,\nGentle in nurturing bonds yet sharp as steel before wrong,\nNever misread her calm patience as helplessness world,\nWithin her blooms softest petal alongside blazing fire.'
  ],
  [
    'विदाई के वक़्त जब वो दहलीज़ पर रुककर पीछे निहारती है,\nबचपन की हर गुड़िया और आँगन की तुलसी उसे पुकारती है,\nनए रिश्तों को अपनाने के लिए अपना पूरा नाम तक बदल ले,\nइतना गहरा समर्पण सिर्फ़ एक लड़की ही ज़िंदगी में उतारती है।',
    'Pausing at the threshold looking back during farewell,\nChildhood memories and courtyard basil call softly to her,\nEven adopting a new surname to embrace another family,\nOnly a woman weaves such boundless devotion into life.'
  ],
  [
    'किताबों से दोस्ती कर वो अपने पैरों पर खड़ा होना जानती है,\nदुनिया के हर मंच पर अब वो अपना परचम लहराना जानती है,\nउसे सिर्फ़ चूल्हे-चौके की हदों में बाँधकर मत देखो अब,\nवो चाँद से लेकर आसमाँ की हर ऊँचाई को छू आना जानती है।',
    'Befriending books she stands firmly upon her own two feet,\nRaising banners of excellence across every global stage,\nNever confine her vision inside outdated narrow walls,\nFrom earth to moon she knows how to reach every peak.'
  ],
  [
    'छोटी-छोटी बातों पर मुस्कुरा देना उसकी सबसे प्यारी अदा है,\nबिना स्वार्थ सबकी परवाह करना उसकी रूह की पावन सदा है,\nजब वो रूठती है तो पूरे घर में अजीब सा सन्नाटा छा जाता,\nक्योंकि उसकी चहकती आवाज़ से ही हर कोना ख़ुशनुमा सदा है।',
    'Smiling warmly at tiny joys is her most endearing charm,\nCaring selflessly for everyone echoes naturally from her,\nWhen she grows quiet an entire household feels still,\nHer cheerful voice keeps every room vibrant and alive.'
  ],
  [
    'झुमकों की शौक़ीन वो लड़की अपने उसूलों की बड़ी पक्की है,\nझूठे फरेब से कोसों दूर उसकी हर एक बात बिल्कुल सच्ची है,\nदौलत की चमक देखकर वो कभी अपना स्वाभिमान नहीं झुकाती,\nअच्छे संस्कारों में ढली वो अपने माता-पिता की शान अच्छी है।',
    'Fond of silver jhumkas yet rock solid in her principles,\nMiles away from deceit every word she speaks rings true,\nGlitter of wealth never tempts her to bend self-respect,\nRooted in noble upbringing she shines as family pride.'
  ],
  [
    'दर्द सहकर भी चेहरे पर शिकन न आने दे वो नारी की जात है,\nरसोई से लेकर दफ़्तर तक हर ज़िम्मेदारी उसके साथ है,\nकभी थक भी जाए तो एक कप चाय पीकर फिर मुस्कुरा देती,\nउसके जज़्बे के आगे तो बड़ी से बड़ी मुश्किल भी मात है।',
    'Bearing quiet ache without creasing her brow in complaint,\nBalancing home warmth and career stride effortlessly,\nEven tired she sips warm tea and smiles right back again,\nBefore her resilience the toughest obstacles bow down.'
  ],
  [
    'तितली की तरह रंगीन सपने अपनी आँखों में बसाए रखती है,\nहर कड़वी बात को भी मीठी समझदारी से भुलाए रखती है,\nजिस इंसान के नसीब में एक समझदार लड़की का सच्चा साथ हो,\nउसकी ज़िंदगी में रब ख़ुद ख़ुशियों के दीप जलाए रखती है।',
    'Holding colorful butterfly dreams bright inside her eyes,\nMelting harsh moments away with graceful understanding,\nWhoever is blessed with the companionship of a wise woman,\nWalks through life lit constantly by lamps of harmony.'
  ],
  [
    'न किसी से कमतर है वो और न किसी पर बोझ बनकर रहती है,\nअपने हुनर की नाव से वो हर उल्टी धारा में बहती है,\nज़माना लाख उँगलियाँ उठाए उसके आगे बढ़ते क़दमों पर आज,\nवो अपनी मेहनत के नतीजों से हर आलोचक को जवाब कहती है।',
    'Second to nobody and never a burden upon any shoulder,\nSteering the boat of talent bravely against strong tides,\nLet critics point fingers at her forward march today,\nHer achievements answer every doubt louder than speech.'
  ],
  [
    'माथे पर छोटी सी बिंदी जब वो सादगी से सजाकर निकलती है,\nबड़ी-बड़ी परियों की ख़ूबसूरती भी उसके आगे फीकी लगती है,\nअसली हुस्न चेहरे के रंग में नहीं दिल की शराफ़त में बसता,\nऔर यही शराफ़त उसकी हर एक मुस्कान से झलकती है।',
    'Stepping out adorned simply with a tiny forehead bindi,\nEven fairy-tale beauty pales beside her natural grace,\nTrue loveliness dwells not in complexion but pure heart,\nShining unmistakably through each gentle smile of hers.'
  ],
  [
    'अपनी सहेलियों की जान और अपने घर की सबसे दुलारी है वो,\nथोड़ी ज़िद्दी सही मगर जज़्बातों से बेहद प्यारी है वो,\nकोई प्यार से दो बोल कहे तो उम्र भर एहसान मानती है,\nदिल जीतने के हुनर में सबसे आगे हमारी राजकुमारी है वो।',
    'Soul of her friend circle and darling of her household,\nPlayfully stubborn at times yet overflowing with warmth,\nSpeak two kind words and she remembers for a lifetime,\nIn winning hearts effortlessly this princess leads all.'
  ],
  [
    'आँसुओं को पोंछकर जब वो अपने लक्ष्य की राह पकड़ लेती है,\nतक़दीर भी झुककर उसके हौसलों का हाथ जकड़ लेती है,\nहर बेटी को बस थोड़ा सा विश्वास और खुला आकाश दे दो,\nफिर देखो कैसे वो पूरे कुल का नाम रोशन कर देती है।',
    'Wiping tears away once she locks eyes upon her purpose,\nEven destiny steps forward to clasp her determined hand,\nGive every daughter steady trust and an open sky above,\nWatch how brightly she illuminates her entire lineage.'
  ],
  [
    'मेहंदी रचे हाथों में भी कलम की ताक़त थामना जानती है,\nपरंपरा और आधुनिकता दोनों का सुंदर मान रखना जानती है,\nअपनी जड़ों से जुड़कर भी जो आसमान की ऊँचाइयाँ नाप ले,\nआज की हर स्वाभिमानी लड़की वही नई पहचान बनाना जानती है।',
    'Henna-adorned hands holding the power of the pen firmly,\nHonoring timeless tradition alongside modern aspiration,\nRooted deeply in heritage while measuring boundless skies,\nToday proud woman crafts her own radiant identity.'
  ],
  [
    'कभी बारिश में भीगकर बच्चे की तरह खिलखिलाकर हँसती है,\nतो कभी संकट की घड़ी में पूरे परिवार की ढाल बनती है,\nएक लड़की के भीतर रब ने कितने अद्भुत रंग भरे हैं देखो,\nवो कोमल भी है और वक़्त पड़ने पर चट्टान सी तनती है।',
    'Laughing carefree like a child beneath monsoon showers,\nStanding tall like a shield whenever crisis touches home,\nBehold how many wondrous hues God wove into her spirit,\nGentle as mist yet firm as granite when duty calls.'
  ],
  [
    'अपनी ख़्वाहिशों की पोटली अक्सर अलमारी में बंद रख देती है,\nसबके चेहरों की मुस्कान को अपनी पसंद से ऊपर रख देती है,\nकोई समझे या न समझे उसके अनकहे त्यागमय जज़्बातों को,\nवो बिना जताए हर रिश्ते में अपनी रूह की सुगंध रख देती है।',
    'Tucking bundles of personal wishes quietly inside cupboards,\nPlacing everyone else happiness high above her own taste,\nWhether noticed or unspoken her quiet sacrifices endure,\nLeaving a lasting fragrance of care in every relationship.'
  ],
  [
    'इज़्ज़त और भरोसे के सिवा वो मोहब्बत में कुछ नहीं माँगती,\nहीरे-मोती की दौलत को वो सच्चे प्यार के आगे नहीं आँकती,\nबस थोड़ा सा वक़्त और दो मीठे बोल दे दो उसे दिल से,\nवो तुम्हारी हर उदासी को अपनी दुआओं से बाहर झाँकती।',
    'Asking nothing in love beyond respect and honest trust,\nWeighing diamonds worth little beside sincere affection,\nOffer her genuine time and two warm words from heart,\nHer prayers sweep away every shadow of your sorrow.'
  ],
  [
    'जिस आँगन में बेटी का जन्म उत्सव की तरह मनाया जाता है,\nवहाँ ख़ुद ईश्वर का आशीर्वाद फूलों की तरह बरसाया जाता है,\nबेटियाँ बोझ नहीं बल्कि ज़िंदगी की सबसे पावन कविता होती हैं,\nजिनके होने से ही इंसानियत का हर रिश्ता सजाया जाता है।',
    'Where a daughter birth is celebrated like a grand festival,\nDivine blessings rain gently like blossoms on that home,\nDaughters are never burdens they are life purest poetry,\nThrough their presence every human bond finds beauty.'
  ]
];

export const EXPANDED_OLD_8_FEELINGS: Shayari[] = [
  ...buildCategoryShayaris(
    {
      category: 'love',
      categoryName: 'Love / Romantic / Ishq Shayari',
      categoryIcon: '💖',
      idPrefix: 'love',
      startIndex: 51,
      tags: ['Love', 'RomanticShayari', 'IshqShayari']
    },
    LOVE_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'sad',
      categoryName: 'Sad / Dard / Gham Shayari',
      categoryIcon: '💔',
      idPrefix: 'sad',
      startIndex: 51,
      tags: ['Sad', 'DardShayari', 'GhamShayari']
    },
    SAD_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'attitude',
      categoryName: 'Attitude / Style / Akad Shayari',
      categoryIcon: '😎',
      idPrefix: 'attitude',
      startIndex: 51,
      tags: ['Attitude', 'StyleShayari', 'AkadShayari']
    },
    ATTITUDE_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'alone',
      categoryName: 'Alone / Tanhai / Judai Shayari',
      categoryIcon: '🌙',
      idPrefix: 'alone',
      startIndex: 51,
      tags: ['Alone', 'TanhaiShayari', 'JudaiShayari']
    },
    ALONE_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'motivational',
      categoryName: 'Motivational / Zindagi / Hausla Shayari',
      categoryIcon: '🔥',
      idPrefix: 'motivational',
      startIndex: 51,
      tags: ['Motivational', 'HauslaShayari', 'ZindagiShayari']
    },
    MOTIVATIONAL_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'maafi',
      categoryName: 'Maafi / Sorry / Roothna Shayari',
      categoryIcon: '🙏',
      idPrefix: 'maafi',
      startIndex: 51,
      tags: ['Maafi', 'SorryShayari', 'RoothnaShayari']
    },
    MAAFI_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'boy',
      categoryName: 'Boy / Ladko Ke Liye Shayari',
      categoryIcon: '🦁',
      idPrefix: 'boy',
      startIndex: 51,
      tags: ['BoyShayari', 'BoysLife', 'LadkoKeLiye']
    },
    BOY_NEW
  ),
  ...buildCategoryShayaris(
    {
      category: 'girl',
      categoryName: 'Girl / Ladkiyon Ke Liye Shayari',
      categoryIcon: '👑',
      idPrefix: 'girl',
      startIndex: 51,
      tags: ['GirlShayari', 'GirlsPride', 'LadkiyonKeLiye']
    },
    GIRL_NEW
  )
];
