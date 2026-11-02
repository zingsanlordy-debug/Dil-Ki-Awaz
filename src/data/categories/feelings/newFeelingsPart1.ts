import { Shayari } from '../../../types/shayari';
import { buildCategoryShayaris, RawPoemTuple } from './shayariBuilder';

// 9. Dosti / Yaari / Friendship Shayari (30 unique 25-40 word poems)
const DOSTI_POEMS: readonly RawPoemTuple[] = [
  [
    'दोस्ती के रिश्ते में कोई हिसाब नहीं होता,\nसच्चे यारों जैसा दूसरा ख़िताब नहीं होता,\nदौलत तो मिल जाती है बाज़ारों में हज़ार,\nपर यारी से बढ़कर कोई ख़्वाब नहीं होता।',
    'True friendship never keeps a ledger of favors,\nNo title shines brighter than loyal companions,\nWealth can be bought across countless markets,\nYet nothing equals the treasure of real friends.'
  ],
  [
    'चाय की टपरी पर गुज़री वो शामें सुहानी,\nहर घूँट में बसी है यारों की कहानी,\nवक़्त बदल गया और बदल गए शहर हमारे,\nपर दिल में ज़िंदा है वही दोस्ती पुरानी।',
    'Sweet evenings spent around humble roadside tea,\nEvery warm sip holds chapters of our youth,\nTime moved forward and cities changed around us,\nYet old friendship lives evergreen inside heart.'
  ],
  [
    'मुसीबत आए तो सबसे आगे खड़ा मिलता है,\nसच्चा दोस्त हर तूफ़ान से बड़ा मिलता है,\nख़ून का रिश्ता न होकर भी इतना अपनापन,\nनसीब वालों को ऐसा हीरा जड़ा मिलता है।',
    'Standing right in front whenever trouble arrives,\nA true friend rises taller than every storm,\nSharing deep kinship without ties of blood,\nOnly the fortunate find such rare diamonds.'
  ],
  [
    'बिना बताए चेहरा पढ़ लेते हैं मेरे यार,\nउदासी में हँसाने को रहते हमेशा तैयार,\nदुनिया भले छोड़ दे बुरे वक़्त में अकेला,\nयारों के कंधे पर टिकता सारा संसार।',
    'My friends read my face without single words,\nAlways ready to spark laughter in heavy hours,\nEven if society leaves me standing alone,\nMy world rests steady upon loyal shoulders.'
  ],
  [
    'स्कूल की बेंच पर लिखे नाम याद आते हैं,\nटिफ़िन बाँटकर खाए पकवान याद आते हैं,\nज़िंदगी की दौड़ में कितने दूर निकल आए,\nआज भी वो मासूम दोस्त जान याद आते हैं।',
    'Names carved on school benches return softly,\nShared lunchboxes echo across fond memories,\nThough life race carried us miles apart today,\nThose innocent friends remain dear as breath.'
  ],
  [
    'न रस्मों की बंदिश है न दिखावे की दीवार,\nबस साफ़ दिल से निभता दोस्ती का प्यार,\nएक फ़ोन पर आधी रात चला आए दौड़कर,\nलाखों में एक होता है ऐसा सच्चा यार।',
    'Bound neither by rituals nor walls of display,\nFriendship thrives purely on open honesty,\nRushing over at midnight on one phone call,\nOne in a million is such a companion.'
  ],
  [
    'जेब ख़ाली हो फिर भी नवाबी कम नहीं होती,\nयारों की महफ़िल में आँखें नम नहीं होतीं,\nहँसी-ठिठोली में उड़ जाता है हर बड़ा ग़म,\nसच्ची यारी किसी जन्नत से कम नहीं होती।',
    'Even empty pockets feel royal beside buddies,\nGatherings of friends leave zero room for tears,\nHeavy grief vanishes in carefree laughter,\nHonest camaraderie feels nothing short of heaven.'
  ],
  [
    'रूठ भी जाएँ कभी तो शाम तक मान जाते,\nएक दूजे की रग-रग से वाक़िफ़ पहचान जाते,\nदोस्ती वो पेड़ है जिसकी छाँव कभी न घटे,\nपतझड़ में भी इसके पत्ते मुस्कान लाते।',
    'Even after spats we reconcile before dusk,\nKnowing every pulse of each other spirit,\nFriendship is a tree whose shade never shrinks,\nBringing warm smiles even through dry autumn.'
  ],
  [
    'सफ़र चाहे कितना भी कठिन और लंबा रहे,\nबस बगल में मेरे जिगरी यार का कंधा रहे,\nरास्ते के सारे काँटे फूल बन जाते हैं,\nजब दोस्ती का जज़्बा सीने में ज़िंदा रहे।',
    'No matter how steep or long the journey ahead,\nLet my dearest friend walk close beside me,\nThorns along the road soften into blossoms,\nWhen the spirit of friendship burns alive.'
  ],
  [
    'तारीफ़ मुँह पर कम और टाँग खिंचाई ज़्यादा,\nफिर भी निभाते हैं मरते दम तक हर वादा,\nयही तो यारों की सबसे अनोखी अदा है,\nइनके बिना ज़िंदगी का हर पन्ना है सादा।',
    'Teasing playfully to your face every day,\nYet keeping promises faithfully till the end,\nSuch is the unmatched charm of true buddies,\nWithout them every page of life stays blank.'
  ],
  [
    'बारिश में भीगते हुए वो बेफ़िक्र ठहाके,\nसूनी सड़कों पर देर रात के लंबे नाके,\nकोई लौटा दे यारों संग बीते वो सुनहरे दिन,\nजहाँ ख़ुशियाँ मिलती थीं बिना किसी टांके।',
    'Carefree bursts of laughter under pouring rain,\nLate night talks across quiet neighborhood lanes,\nWish someone could return those golden days,\nWhere pure joy needed neither coin nor reason.'
  ],
  [
    'मतलबी ज़माने में बेमतलब सा रिश्ता है ये,\nरब का भेजा हुआ ज़मीन पर फ़रिश्ता है ये,\nहर राज़ महफ़ूज़ रहता है जिसके सीने में,\nज़िंदगी की किताब का ख़ूबसूरत किस्सा है ये।',
    'An unselfish bond inside a calculating world,\nLike a guardian angel sent down to earth,\nKeeping every secret safe within the chest,\nFriendship writes the finest chapter of life.'
  ],
  [
    'दूरी मीलों की सही पर दिल पास रहते हैं,\nमेरे यार मेरी दुआओं में ख़ास रहते हैं,\nमहीनों बात न हो फिर भी फ़र्क़ नहीं पड़ता,\nसच्चे दोस्त साँसों में एहसास रहते हैं।',
    'Miles apart in cities yet close inside heart,\nMy friends hold first place in daily prayers,\nMonths without talking never dim our warmth,\nTrue companions live quietly in every breath.'
  ],
  [
    'गिरने से पहले जो मज़बूती से हाथ थाम ले,\nमेरे हिस्से की हर बदनामी अपने नाम ले,\nखुदा सलामत रखे मेरे ऐसे जिगरी यारों को,\nजिनकी हँसी से मेरी उदास शाम आराम ले।',
    'Catching my hand firmly before I ever stumble,\nShielding my name bravely against harsh blame,\nMay God bless and protect my dearest friends,\nWhose laughter brings comfort to weary evenings.'
  ],
  [
    'दोस्ती इत्र जैसी होती है महकती रहती है,\nउम्र ढल जाए फिर भी जवाँ चहकती रहती है,\nचेहरे की झुर्रियों से यारी पुरानी नहीं पड़ती,\nये वो आग है जो सर्द रातों में दहकती रहती है।',
    'Friendship lingers like fine timeless perfume,\nStaying youthful long after years roll past,\nWrinkles never age the bond of true comrades,\nWarming cold winter nights like steady embers.'
  ],
  [
    'कामयाबी पर मेरी जो मुझसे ज़्यादा झूमे,\nमेरी हर जीत पर ख़ुशी से माथा चूमे,\nऐसे सच्चे यार क़िस्मत की लकीरों से मिलते,\nजिनके संग ज़िंदगी मस्ती की गलियों में घूमे।',
    'Dancing happier than me at every success,\nCelebrating my wins with unguarded pride,\nFortune alone gifts companions so genuine,\nTurning ordinary streets into lanes of joy.'
  ],
  [
    'न जात पूछी कभी हमने न औक़ात देखी,\nबस साफ़ नीयत और यारों की बात देखी,\nएक थाली में बाँटकर खाया है निवाला हमने,\nतभी तो दोस्ती में सदा रब की सौग़ात देखी।',
    'Never asking status wealth or background,\nLooking only at honest hearts and loyalty,\nSharing simple meals from the same plate,\nSeeing divine grace inside true brotherhood.'
  ],
  [
    'जब दिल टूटा तो यारों ने ही जोड़कर रखा,\nग़म के तूफ़ानों का रुख़ मोड़कर रखा,\nमोहब्बत ने भले तन्हा छोड़ दिया चौराहे पर,\nपर दोस्तों ने कभी मेरा हाथ न छोड़कर रखा।',
    'Friends pieced my broken heart back together,\nTurning fierce gales of sorrow away from me,\nEven where romance left me stranded alone,\nMy companions never loosened their warm grip.'
  ],
  [
    'कुछ रिश्ते ख़ुद-ब-ख़ुद रूह से जुड़ जाते हैं,\nअजनबी चेहरे भी जिगरी यार बन जाते हैं,\nएक बार बैठ जाएँ जो साथ चाय की मेज़ पर,\nफिर उम्र भर के लिए हमसफ़र बन जाते हैं।',
    'Some bonds connect effortlessly soul to soul,\nTurning unfamiliar faces into lifelong pals,\nSharing one warm table of conversation,\nThey walk beside us across every decade.'
  ],
  [
    'सुदामा और कृष्ण सी पावन मिसाल होती है,\nसच्ची यारी हर संकट में ढाल होती है,\nमहल हो या झोपड़ी दोस्ती फ़र्क़ नहीं करती,\nयार के क़दमों में ख़ुशी निहाल होती है।',
    'Sacred like the bond of Krishna and Sudama,\nTrue friendship stands as an unbreakable shield,\nPalace or cottage makes zero difference here,\nWelcoming a friend brings boundless delight.'
  ],
  [
    'उधार के पैसे और यारों के पुराने उलाहने,\nमिलने के लिए रोज़ ढूँढते अजब बहाने,\nकितनी सादगी थी उन गुज़रे हुए लम्हों में,\nआज भी याद कर मुस्कुराते हैं दीवाने।',
    'Playful debts and endless friendly teasing,\nInventing excuses daily just to hang out,\nSuch sweet simplicity filled those days,\nBringing warm smiles whenever remembered.'
  ],
  [
    'तस्वीरें पुरानी खोलूँ तो चेहरे चमक उठते हैं,\nसूने कमरे में पुराने क़हक़हे चहक उठते हैं,\nयारों के संग बिताया हर पल खरा सोना था,\nजिनके ज़िक्र भर से आज जज़्बात महक उठते हैं।',
    'Opening old albums makes familiar faces glow,\nEchoes of laughter fill my quiet room again,\nEvery hour spent with friends was pure gold,\nSimply naming them perfumes my thoughts today.'
  ],
  [
    'दुश्मनों की भीड़ से कभी डर नहीं लगा मुझे,\nक्योंकि यारों का क़ाफ़िला साथ चला मेरे,\nजिनके पीछे सच्चे दोस्तों की ताक़त खड़ी हो,\nउनके आगे बड़े-बड़े पहाड़ भी टला मेरे।',
    'Crowds of rivals never frightened my stride,\nWith a caravan of loyal buddies behind me,\nBacked by the strength of steadfast friends,\nEven towering mountains step out of the way.'
  ],
  [
    'दोस्ती में न कोई शर्त रखो न कोई सवाल,\nबस कठिन घड़ी में रखो एक दूजे का ख़याल,\nतारीफ़ करने वाले तो हज़ार मिलेंगे राहों में,\nजो ग़लती पर सही राह दिखाए वही यार कमाल।',
    'Place neither conditions nor doubts in friendship,\nSimply guard each other through rough hours,\nFlatterers appear by thousands along roads,\nA friend who guides honestly is priceless.'
  ],
  [
    'शाम की तफ़रीह और यारों की बेतुकी बातें,\nछत पर जागकर गुज़ारी वो गर्मियों की रातें,\nबैंक के लॉकर में भी ऐसी दौलत नहीं मिलती,\nजैसी दोस्ती ने दी हैं अनमोल सौग़ातें।',
    'Evening strolls filled with silly banter,\nSummer nights awake beneath starry roofs,\nNo bank vault holds wealth half as rich,\nAs priceless memories gifted by friendship.'
  ],
  [
    'हर मौसम में सदाबहार रहता है यारी का रंग,\nउम्र के हर मोड़ पर जमता दोस्तों का संग,\nज़िंदगी का सफ़र अधूरा है एक सच्चे यार बिना,\nवही भरता है बेरंग लम्हों में नई उमंग।',
    'Colors of friendship stay evergreen all year,\nShining bright around every bend of age,\nLife journey feels incomplete without a friend,\nFilling dull hours with fresh enthusiasm.'
  ],
  [
    'मेरी ख़ामोशी की वजह जो तुरंत भाँप जाता है,\nमेरी ख़ातिर जो हर मुश्किल नाप जाता है,\nरब से बस इतनी दुआ है मेरे यार के लिए,\nउसका हर सपना सच हो जो वो चाहता है।',
    'Sensing instantly the reason behind my quietness,\nMeasuring every hardship bravely for my sake,\nOne heartfelt prayer rises daily for my buddy,\nMay every dream he holds blossom into truth.'
  ],
  [
    'नए लोग मिले बहुत मगर तेरी जगह खाली रही,\nतेरी यारी की बात ही हमेशा निराली रही,\nशहर के हज़ारों चेहरों में ढूँढा तुझसा हमदम,\nपर मेरे दिल की महफ़िल तेरे नाम वाली रही।',
    'Many new faces crossed paths yet none replaced you,\nYour camaraderie stayed unmatched through time,\nAcross thousands in town I sought an equal,\nStill the throne of friendship carries your name.'
  ],
  [
    'लड़ते भी तुझसे हैं और मरते भी तुझी पर यार,\nतेरे बिना सुना लगता है खुशियों का त्योहार,\nयूँ ही कायम रहे अपनी ये अनमोल यारी सदा,\nहर जनम मिले मुझे तेरा ही सच्चा प्यार।',
    'Arguing playfully with you yet cherishing you most,\nEvery festival feels incomplete without your laugh,\nMay this precious bond endure forevermore,\nBlessing me with your friendship each lifetime.'
  ],
  [
    'हाथों की लकीरों में लिखा यारों का साथ है,\nतभी तो मेरे हर हौसले में इतनी बात है,\nदुनिया जीतना भी आसान लगता है मुझे आज,\nजब कंधे पर मेरे सच्चे दोस्त का हाथ है।',
    'Companionship of friends is etched on my palm,\nGiving fearless strength to every bold step,\nConquering the world feels effortless today,\nWith a true friend hand resting on my shoulder.'
  ]
];

// 10. Bewafa / Dhokha Shayari (30 unique 25-40 word poems)
const BEWAFA_POEMS: readonly RawPoemTuple[] = [
  [
    'कसमें वफ़ा की खाकर तूने ऐसा धोखा दिया,\nहँसते हुए इंसान को जीते-जी रुला दिया,\nहम तो तुझे ख़ुदा का रूप मान बैठे थे,\nतूने चंद फायदों में मेरा प्यार भुला दिया।',
    'Swearing oaths of loyalty you betrayed me deep,\nLeaving a cheerful soul weeping while alive,\nI revered you innocently like divine grace,\nYet you traded my love away for petty gain.'
  ],
  [
    'चेहरे पर मासूमियत और दिल में फ़रेब रखा,\nहर मीठी बात के पीछे ज़हर का सेब रखा,\nकितनी सफ़ाई से खेला तूने जज़्बातों से मेरे,\nमेरा ही घर जलाकर ख़ुद को बेऐब रखा।',
    'Wearing innocence outside with deceit inside,\nHiding bitter poison beneath sugared speech,\nHow smoothly you gambled with my emotions,\nBurning my home while claiming pure innocence.'
  ],
  [
    'गैरों के तीर से तो हम बच निकलते आसानी से,\nमगर ज़ख़्म मिला हमें अपनी ही कहानी से,\nजिस हाथ को थामा था डूबने से बचने को,\nउसी ने धकेल दिया गहरे तूफ़ानी पानी से।',
    'Arrows from strangers were easy enough to dodge,\nThe deepest wound came from my own story,\nThe very hand I grasped to escape drowning,\nPushed me straight into stormy dark waters.'
  ],
  [
    'बदलते मौसम का भी एक तय उसूल होता है,\nपर बेवफ़ा इंसान तो हर शर्त भूल होता है,\nकल तक जो मेरी साँसों की दुहाई देता था,\nआज उसके लिए मेरा नाम भी धूल होता है।',
    'Even shifting seasons follow a natural law,\nYet an unfaithful heart forgets every vow,\nWho yesterday swore by each breath I took,\nTreats my name today like worthless road dust.'
  ],
  [
    'आईना भी शरमा गया होगा तेरी अदाकारी पर,\nइतना झूठा रंग चढ़ाया तूने वफ़ादारी पर,\nहम सादगी में अपना सब कुछ लुटाते चले गए,\nऔर तू सौदे करता रहा हमारी ही लाचारी पर।',
    'Even mirrors must blush at your flawless acting,\nPainting thick illusions over hollow loyalty,\nIn simplicity I poured out all I possessed,\nWhile you bargained coldly upon my trust.'
  ],
  [
    'धोखा देकर अगर तुझे चैन की नींद आती है,\nतो समझ गया मैं वफ़ा किस भाव बिक जाती है,\nवक़्त की अदालत में हर हिसाब बराबर होगा,\nआह टूटे दिल की कभी खाली नहीं जाती है।',
    'If betrayal lets you sleep soundly at night,\nI see clearly how cheaply loyalty is sold,\nTime court settles every account eventually,\nSighs of a broken heart never vanish unheard.'
  ],
  [
    'काग़ज़ के फूलों से खुशबू की उम्मीद लगा बैठे,\nपत्थर की मूरत से अपना नसीब जगा बैठे,\nगलती तेरी कम और मेरी नादानी ज़्यादा थी,\nजो बेवफ़ा के क़दमों में अपनी रूह बिछा बैठे।',
    'Expecting sweet scent from artificial flowers,\nSeeking warm destiny before cold carved stone,\nMy naive trust erred more than your cruelty,\nLaying my whole soul beneath unfaithful feet.'
  ],
  [
    'मीठे लफ़्ज़ों का जाल बुनना कोई तुझसे सीखे,\nअपना काम निकलते ही तेवर हो गए तीखे,\nजिस शाख़ पर बैठकर तूने पनाह पाई थी कल,\nआज उसी पेड़ के पत्ते तुझे लगने लगे फीके।',
    'Weaving nets of honeyed words is your craft,\nTurning sharp once selfish needs were met,\nThe branch that sheltered you through storms,\nLooks dull to your eyes now in bright sun.'
  ],
  [
    'वफ़ा की किताब तुझे पढ़नी ही नहीं आई कभी,\nतेरी झूठी आँखों में सच्चाई नहीं आई कभी,\nहम अकेले ही निभाते रहे दोनों तरफ़ का रिश्ता,\nतेरे हिस्से से तो परछाई भी नहीं आई कभी।',
    'You never learned to read the book of loyalty,\nTruth never flickered inside your pretending eyes,\nSinglehandedly I carried both sides of love,\nNot even a shadow arrived from your share.'
  ],
  [
    'नया हमसफ़र मिलते ही पुराने वादे तोड़ दिए,\nबीच मझधार में मेरे सारे सहारे छोड़ दिए,\nजा ख़ुश रह अपनी उस चमकती नई महफ़िल में,\nहमने भी तेरी गली से अपने क़दम मोड़ लिए।',
    'Finding new company you snapped old promises,\nAbandoning every oar midstream in rough tide,\nGo celebrate inside your glittering new crowd,\nI too have turned my steps from your lane.'
  ],
  [
    'पीठ में खंजर भोंकने का हुनर कमाल था तेरा,\nऊपर से हाल पूछने का ढंग बेमिसाल था तेरा,\nदुश्मन भी एक बार वार कर सामने खड़ा रहता,\nपर हमदर्द बनकर लूटना अजब जाल था तेरा।',
    'Striking from behind was your practiced skill,\nAsking after my health with theatrical grace,\nEven an open foe stands visible after striking,\nPlundering disguised as healer was your trap.'
  ],
  [
    'झूठी क़समों से तूने भरोसे का क़त्ल किया,\nसीधे-सादे दिल के साथ बड़ा गंदा खेल किया,\nअब किसी की सच्ची बात पर भी यक़ीन नहीं होता,\nतेरे एक धोखे ने मुझे सबसे अकेला किया।',
    'False oaths murdered innocent trust outright,\nPlaying a cruel game with an honest heart,\nNow even sincere words struggle to win faith,\nOne betrayal isolated me from everyone.'
  ],
  [
    'तेरे जाने का ग़म नहीं तेरे बदलने का मलाल है,\nइतनी जल्दी कैसे भूल गया यही एक सवाल है,\nकल तक जो कहता था तेरे बिन मर जाऊँगा मैं,\nआज गैरों की बाहों में देखो कितना ख़ुशहाल है।',
    'Losing you hurts less than watching you turn,\nHow fast you forgot remains my sole question,\nClaiming yesterday you could not breathe apart,\nToday you beam happily in another embrace.'
  ],
  [
    'नक़ाब जब उतरा चेहरे से तो सूरत अजनबी निकली,\nमोहब्बत के नाम पर पूरी कहानी मतलबी निकली,\nअच्छा हुआ वक़्त रहते तेरी असलियत खुल गई,\nवरना मेरी सारी उम्र अँधेरे कुएँ में दबी निकली।',
    'When the mask slipped a stranger stared back,\nBehind romance lay pure calculated interest,\nThank goodness your truth surfaced in time,\nSaving my lifetime from a dark hollow well.'
  ],
  [
    'हमने चाँद समझा था तुझे वो तो जुगनू भी न था,\nतेरी आँखों में बिछड़ते वक़्त एक आँसू भी न था,\nकिस मिट्टी का बना था तेरा वो संगदिल सीना,\nजिसमें मेरे तड़पते जज़्बातों का क़ाबू भी न था।',
    'Mistaking you for moon you proved no firefly,\nNot a single tear moistened your parting gaze,\nFrom what cold clay was your chest fashioned,\nUntouched completely by my aching devotion.'
  ],
  [
    'धोखे की चोट इंसान को भीतर से जगा देती है,\nअंधे भरोसे की पट्टी आँखों से हटा देती है,\nशुक्रिया तेरा ऐ बेवफ़ा जो तूने ठोकर मारी,\nतेरी गद्दारी ही ज़िंदगी का सच सिखा देती है।',
    'Stings of betrayal awaken the spirit deep inside,\nLifting blindfolds of naive faith from eyes,\nThank you unfaithful soul for that harsh jolt,\nYour treachery taught wisdom books never could.'
  ],
  [
    'हर मुस्कुराते चेहरे पर अब शक होने लगा है,\nदिल का ज़ख़्म सूखने के बजाय पक होने लगा है,\nतूने इश्क़ के नाम को इतना बदनाम कर छोड़ा,\nकि साया भी अपना देखूँ तो डर होने लगा है।',
    'Every smiling face raises quiet doubt in me now,\nOld heart wounds ache instead of healing shut,\nYou tarnished the sacred name of love so bad,\nEven my own shadow makes me step cautiously.'
  ],
  [
    'मोम का घर लेकर हम आग की गली में गए थे,\nतेरे झूठे बुलावे पर अनजान डगर में गए थे,\nराख होना तो मुक़द्दर में लिखा ही था हमारे,\nजब बेवफ़ा के शहर में वफ़ा बेचने गए थे।',
    'Carrying a house of wax down a lane of fire,\nWalking blind trails behind your false call,\nTurning to ash was bound to be my fate,\nBringing pure loyalty to an unfaithful town.'
  ],
  [
    'शतरंज की बिसात बना दिया तूने मेरे प्यार को,\nमोहरा समझकर इस्तेमाल किया अपने ही यार को,\nजीत मुबारक हो तुझे तेरी इस चालाक बाज़ी की,\nहम दिल हारकर भी बचा ले गए अपने किरदार को।',
    'Turning my sincere love into a chessboard,\nUsing your devoted partner like a mere pawn,\nEnjoy the hollow trophy of your clever game,\nLosing heart I still kept my character clean.'
  ],
  [
    'ज़ुबान पर शहद और बगल में छुरी रखते हैं लोग,\nयहाँ वफ़ा करने वालों से दूरी रखते हैं लोग,\nतेरी बेवफ़ाई ने एक बड़ा सबक पढ़ा दिया मुझे,\nकि हर रिश्ते में अपनी एक मजबूरी रखते हैं लोग।',
    'Honey on lips with daggers tucked underneath,\nKeeping honest hearts conveniently at arm length,\nYour betrayal engraved one clear truth in mind,\nPeople invent excuses whenever loyalty costs.'
  ],
  [
    'खिलौना समझकर जब मन भरा तो तोड़ दिया तूने,\nआसुओं के समंदर में तन्हा छोड़ दिया तूने,\nकभी फ़ुरसत मिले तो अपने गिरेबान में झाँकना,\nकिस बेगुनाह दिल का आशियाना उजाड़ दिया तूने।',
    'Treating my heart like a toy tossed once bored,\nLeaving me stranded inside an ocean of tears,\nPause someday and look into your conscience,\nWhose innocent shelter your hands tore apart.'
  ],
  [
    'वादों की इमारत तेरी रेत की तरह ढह गई,\nसिर्फ़ झूठी तसल्लियों की कड़वाहट रह गई,\nअफ़सोस नहीं अब तेरे दूर चले जाने का मुझे,\nबस मेरी सच्ची मोहब्बत बेवजह सह गई।',
    'Your tower of promises crumbled like dry sand,\nLeaving behind bitter echoes of false comfort,\nNo regret lingers over your departure anymore,\nOnly sorrow that pure love suffered needlessly.'
  ],
  [
    'नज़रें चुराकर आज तू जिस गली से गुज़रता है,\nवहाँ तेरा ही दिया हुआ हर ज़ख़्म उभरता है,\nधोखा देने वाले कभी सुकून नहीं पाते जहाँ में,\nउनका अपना ही साया उनसे सवाल करता है।',
    'Slipping past down lanes averting your gaze,\nEvery scar dealt by your hand rises fresh,\nDeceivers rarely taste deep peace anywhere,\nQuestioned silently by their own dark shadow.'
  ],
  [
    'सोने की चमक देखकर तूने हीरा गँवा दिया,\nचंद लम्हों के सुख में सच्चा साथी भुला दिया,\nजब ढलेगी शाम और तन्हाई घेरेगी तुझे कल,\nतब याद आएगा किसने तुझे पलकों पर बिठा दिया।',
    'Chasing brief glitter you threw away diamond,\nTrading lifelong devotion for fleeting thrills,\nWhen dusk falls and loneliness surrounds you,\nYou will remember who cherished you most.'
  ],
  [
    'बहाने हज़ार ढूँढ लिए तूने बिछड़ जाने के,\nसारे रास्ते बंद कर दिए लौटकर आने के,\nजिस इंसान को ख़ुद से जाना हो उसे कौन रोके,\nझूठे इल्ज़ाम तो बस तरीक़े थे छूट जाने के।',
    'Inventing a thousand excuses just to walk out,\nShutting every bridge leading back toward us,\nNobody can hold back someone determined to go,\nFalse accusations were merely exit strategies.'
  ],
  [
    'इश्क़ के बाज़ार में तू बड़ा सयाना निकला,\nमेरा हर सच्चा आँसू तेरे लिए फ़साना निकला,\nहम दुआ माँगते रहे तेरी सलामती की मंदिरों में,\nऔर तेरा हर सजदा किसी और का ठिकाना निकला।',
    'Shrewd trader you proved in the market of love,\nTreating every honest tear of mine like fiction,\nWhile I prayed at temples for your well-being,\nYour devotion knelt secretly elsewhere.'
  ],
  [
    'दिल तोड़कर भी तेरे माथे पर शिकन तक नहीं,\nजैसे हमारे बीच कभी कोई लगन तक नहीं,\nइतनी बेदर्दी कहाँ से सीखी है तूने ऐ सनम,\nकि मरते हुए अरमानों पर कफ़न तक नहीं।',
    'Not a crease of guilt crosses your forehead,\nActing as though zero bond ever joined us,\nWhere did you learn such cold indifference,\nLeaving dying hopes without even a shroud.'
  ],
  [
    'चलो अच्छा किया जो अपना असली रंग दिखा दिया,\nवरना हम उम्र भर तुझे फ़रिश्ता समझते रहते,\nधोखे की ठोकर ने होश ठिकाने लगा दिए हमारे,\nवरना तेरे झूठे ख़्वाबों में बेवजह बहते रहते।',
    'Good thing you revealed your true colors early,\nOr I might have worshiped an illusion forever,\nBetrayal sharp jolt brought back clear sight,\nSaving me from drifting down false rivers.'
  ],
  [
    'वफ़ा की क़द्र बेवफ़ा के शहर में कौन जाने,\nजले हुए चराग़ों का दर्द हवा कौन माने,\nहमने अपनी तरफ़ से कोई कमी न रखी चाहत में,\nअब रब ही जाने तेरे झूठे दिल के बहाने।',
    'Who values loyalty inside an unfaithful town,\nWhat wind ever pitied lamps it blew dark,\nNot one flaw stained my side of devotion,\nGod alone sees through your hollow excuses.'
  ],
  [
    'मिटा दिया हमने भी तेरा नाम दिल की दीवार से,\nआज़ाद कर लिया ख़ुद को तेरे झूठे प्यार से,\nएक बार धोखा खाना नादानी कहलाती है दुनिया में,\nअब दोबारा न गुज़रेंगे तेरे फ़रेबी बाज़ार से।',
    'I wiped your name clean off my heart walls,\nSetting my spirit free from counterfeit love,\nBeing fooled once happens to trusting souls,\nNever again will I walk your street of deceit.'
  ]
];

// 11. Breakup / Heartbreak Shayari (30 unique 25-40 word poems)
const BREAKUP_POEMS: readonly RawPoemTuple[] = [
  [
    'एक पल में टूट गया सालों से जोड़ा हुआ रिश्ता,\nअजनबी बन गया वो जो लगता था फ़रिश्ता,\nनंबर आज भी याद है उँगलियों को तेरा,\nपर कॉल करने का अब हक़ नहीं बचा।',
    'A bond built across years shattered in a moment,\nSomeone angelic turned overnight into stranger,\nMy fingers still know your number by heart,\nYet the right to call exists no longer.'
  ],
  [
    'आख़िरी मुलाक़ात में दोनों ख़ामोश खड़े रहे,\nपलकों के कोनों पर आँसू अड़े रहे,\nन तूने रोका मुझे न मैं ही मुड़कर रुका,\nबस टूटे दिल के टुकड़े ज़मीन पर पड़े रहे।',
    'During our final meeting both stood mute,\nHeavy tears trembled along quiet lashes,\nNeither did you stop me nor did I turn back,\nShards of heartbreak lay scattered between us.'
  ],
  [
    'चैट पुरानी पढ़कर आज फिर रात गुज़र गई,\nतेरी हँसती डीपी देखकर साँस ठहर गई,\nब्लॉक तो कर दिया हमने एक दूसरे को कब का,\nपर यादों की डोर सीने के आर-पार उतर गई।',
    'Reading old chats carried away another night,\nSeeing your smiling photo paused my breath,\nThough we blocked each other months ago,\nThreads of memory still pierce right through.'
  ],
  [
    'अधूरी रह गई कहानी जो साथ लिखी थी हमने,\nराख हो गईं वो कसमें जो साथ सीखी थीं हमने,\nबिछड़ना शायद दोनों के नसीब का फ़ैसला था,\nतभी मंज़िल से पहले राहें बदल लीं हमने।',
    'The story we wrote together stayed unfinished,\nVows we cherished turned quietly into ash,\nPerhaps parting was decreed in our destiny,\nTurning our paths apart right before arrival.'
  ],
  [
    'टूटा हुआ दिल आवाज़ नहीं करता रोते वक़्त,\nबस साँस भारी हो जाती है सोते वक़्त,\nकहने को तो मूव ऑन कर लिया है ज़माने में,\nपर आज भी दर्द उठता है तन्हा होते वक़्त।',
    'A broken heart makes zero sound while crying,\nOnly breathing grows heavy right before sleep,\nTo the world it looks like I moved onward,\nYet quiet ache returns whenever alone.'
  ],
  [
    'तेरे दिए तोहफ़े संदूक में बंद कर रखे हैं,\nज़ख़्म कुरेदने के सारे रास्ते मंद कर रखे हैं,\nनफ़रत तुझसे आज भी नहीं हो पाती ऐ हमदम,\nबस तुझसे मिलने के सिलसिले बंद कर रखे हैं।',
    'Gifts you gave sit locked inside an old trunk,\nClosing avenues that reopen tender wounds,\nEven today hatred refuses to touch my heart,\nOnly paths of meeting have been shut gently.'
  ],
  [
    'एक लफ़्ज़ अलविदा ने सारा जहाँ उजाड़ दिया,\nजीते-जागते इंसान का हर सपना मार दिया,\nकितनी आसानी से कह दिया कि हम साथ नहीं,\nइस एक जुमले ने ज़िंदगी का रंग उतार दिया।',
    'One whispered goodbye emptied my whole world,\nCrushing every dream inside a breathing soul,\nHow casually we said we are together no more,\nDraining every bright hue out of tomorrow.'
  ],
  [
    'जिन गानों को सुनकर कभी तुझे याद करते थे,\nआज उन्हीं धुनों से हम बचने की फ़रियाद करते हैं,\nहर मोड़ पर टकराती है तेरे साथ की निशानी,\nब्रेकअप के बाद कैसे ख़ुद को आबाद करते हैं।',
    'Songs we once shared lovingly every evening,\nAre melodies I dodge desperately right now,\nTokens of togetherness wait around corners,\nHow hard rebuilding feels after heartbreak.'
  ],
  [
    'हम दोनों हारे हैं इस अधूरे इश्क़ की जंग में,\nउदासी घुल गई है अब ज़िंदगी के हर रंग में,\nगलती किसकी थी अब इसका हिसाब क्या रखना,\nजब सफ़र ही ख़त्म हो गया आधे प्रसंग में।',
    'Both of us lost inside this unfinished love,\nMelancholy tinted every shade of daily life,\nWhy tally blame over who erred anymore,\nWhen the journey ended halfway through.'
  ],
  [
    'नाम तेरा सुनकर आज भी दिल धड़क उठता है,\nपुराना ज़ख़्म सीने में अचानक भड़क उठता है,\nसबके सामने तो मुस्कुराकर बात बदल देता हूँ,\nपर अकेले में आँख से आँसू छलक उठता है।',
    'Hearing your name still jolts my heartbeat,\nWaking old scars suddenly inside my chest,\nIn company I smile and change the topic,\nWhile solitary moments spill quiet tears.'
  ],
  [
    'हाथ छूटा तो लगा जैसे रूह बदन से निकल गई,\nपाँव के नीचे से सारी ज़मीन ही फिसल गई,\nसोचा था बुढ़ापे तक साथ निभाएँगे हँसते हुए,\nमगर हमारी मोहब्बत चार मौसम में ही ढल गई।',
    'When hands parted my spirit felt torn loose,\nSolid ground seemed to slip beneath my feet,\nDreaming once of growing old side by side,\nOur romance faded inside four short seasons.'
  ],
  [
    'तस्वीरें डिलीट कर दीं फ़ोन की गैलरी से सारी,\nमगर ज़ेहन से कैसे मिटाऊँ सूरत तुम्हारी,\nतकनीक ने हर चीज़ भुलाने का बटन तो बनाया,\nकाश दिल के मेमोरी कार्ड की भी होती तैयारी।',
    'Deleted every picture from my phone gallery,\nYet how do I erase your face from memory,\nTechnology built buttons to clear screens clean,\nIf only hearts carried a reset switch too.'
  ],
  [
    'बिछड़कर तुझसे अब किसी और से दिल नहीं लगता,\nसूखे पेड़ पर दोबारा वैसा फूल नहीं खिलता,\nलोग कहते हैं वक़्त हर घाव भर देता है धीरे,\nपर पहले प्यार जैसा एहसास फिर नहीं मिलता।',
    'Since losing you my heart connects nowhere,\nWithered branches rarely bloom quite the same,\nPeople insist time heals every deep wound,\nYet first love magic never returns twice.'
  ],
  [
    'न झगड़ा हुआ बड़ा कोई न कोई शोर मचाया,\nबस धीरे-धीरे बातों का सिलसिला घटाया,\nसबसे ज़्यादा दर्द वही जुदाई देती है दिल को,\nजहाँ बिना कहे ही रिश्ता ख़त्म कर दिखाया।',
    'Neither loud quarrels broke out nor drama,\nConversations simply shrank day after day,\nNothing hurts deeper than quiet drifting,\nWhere bonds dissolve without final closure.'
  ],
  [
    'तेरे शहर की हवा भी अब बेगानी सी लगती है,\nहमारी मोहब्बत गुज़रे कल की कहानी सी लगती है,\nकल तक जो एक दूजे के बिना साँस न लेते थे,\nआज उनकी चुप्पी सदियों पुरानी सी लगती है।',
    'Even winds from your town feel unfamiliar now,\nTurning our romance into yesterday legend,\nTwo souls who barely breathed apart once,\nCarry silence heavy as ancient centuries.'
  ],
  [
    'रोक लेता मुझे अगर थोड़ा सा भी प्यार बाकी था,\nमेरे दिल में तो तेरा ही इंतज़ार बाकी था,\nतूने दरवाज़ा बंद करने में बड़ी जल्दी दिखा दी,\nवरना सुलह का अभी एक आख़िरी द्वार बाकी था।',
    'Had an ounce of love remained you would stay,\nMy heart still waited quietly at your door,\nYou rushed too fast bolting the latch tight,\nClosing one last bridge toward healing.'
  ],
  [
    'कॉफ़ी की उस मेज़ पर अब एक ही कप आता है,\nसामने खाली कुर्सी देखकर गला भर आता है,\nआदतें बदलना इंसान के लिए सबसे मुश्किल काम है,\nहर छोटी बात पर बस तेरा ख़याल सताता है।',
    'Only one cup arrives at the cafe table now,\nFacing the empty chair tightens my throat,\nUnlearning shared habits is life hardest task,\nSmall everyday moments echo your absence.'
  ],
  [
    'दिल के टुकड़े समेटकर ख़ुद को फिर से जोड़ा है,\nउम्मीदों का हर काँच अपने हाथों से तोड़ा है,\nबुरा नहीं कहता मैं तुझे आज भी किसी महफ़िल में,\nक्योंकि कभी इसी दिल ने तुझे रब से जोड़ा है।',
    'Gathering broken shards I pieced myself upright,\nClearing away fragile expectations quietly,\nNever do I speak ill of you before crowds,\nHonoring what my heart once held sacred.'
  ],
  [
    'मोहब्बत मुकम्मल न हो तो अफ़साना बन जाती है,\nहँसती हुई ज़िंदगी ग़म का ठिकाना बन जाती है,\nकुछ लोग क़िस्मत में सिर्फ़ मिलने तक लिखे होते,\nउनकी जुदाई ही जीने का बहाना बन जाती है।',
    'Unfulfilled love turns into a poignant tale,\nMaking cheerful days a quiet house of ache,\nSome souls are written only to cross paths,\nLeaving memories behind as lifelong company.'
  ],
  [
    'रास्ते अलग हुए हैं मगर दुआएँ आज भी तेरे नाम,\nख़ुश रहे तू जहाँ भी बीते तेरी हर सुबह-शाम,\nसच्चा प्यार हासिल कर लेने का नाम नहीं होता,\nतेरी ख़ुशी में ही मुकम्मल है मेरा हर मुक़ाम।',
    'Our roads parted yet my prayers guard you,\nWishing peace across your mornings and nights,\nTrue love is never measured by possession,\nSeeing you thrive fulfills my quiet wish.'
  ],
  [
    'आधी रात को अचानक नींद खुल जाती है मेरी,\nतकिये पर भीगी हुई नमी मिल जाती है मेरी,\nदिमाग़ मान चुका है कि अब तू वापस नहीं आएगा,\nपर नादान धड़कन फिर भी तेरी राह तकती है मेरी।',
    'Sleep snaps open abruptly past midnight,\nDampness lingers quietly across my pillow,\nMind accepts fully that you will not return,\nWhile foolish heartbeats still watch the door.'
  ],
  [
    'काँच सा टूटा भरोसा फिर कभी जुड़ नहीं पाया,\nबिछड़ा हुआ पंछी शाख़ पर मुड़ नहीं पाया,\nहज़ार कोशिशें कीं हमने सब पहले जैसा करने की,\nपर टूटे पंखों से इश्क़ दोबारा उड़ नहीं पाया।',
    'Shattered glass of trust refused to mend smooth,\nThe parted bird never circled back home,\nDespite countless tries to restore yesterday,\nClipped wings could not lift romance aloft.'
  ],
  [
    'तेरे नाम का पासवर्ड आज बदल दिया मैंने,\nअपने दर्द को थोड़ा और सँभाल लिया मैंने,\nआसान नहीं था तुझे अपनी आदतों से निकालना,\nपर ख़ुद को बचाने को ये क़दम उठा लिया मैंने।',
    'Changed the password bearing your name today,\nSteadying my bruised spirit one inch further,\nReleasing you from daily habits hurt deeply,\nYet survival demanded this quiet brave step.'
  ],
  [
    'जब रिश्ता बोझ लगने लगे तो छोड़ देना बेहतर है,\nज़बरदस्ती बाँधने से रुख़ मोड़ लेना बेहतर है,\nइज्ज़त के साथ अलविदा कह दिया हमने एक दूजे को,\nरोज़-रोज़ घुटने से दिल तोड़ लेना बेहतर है।',
    'When bonds turn heavy letting go is kinder,\nParting beats forcing unwilling footsteps,\nWith mutual grace we whispered farewell,\nClean heartbreak heals better than daily strain.'
  ],
  [
    'सूनी उँगलियों में तेरी अँगूठी का निशान बाकी है,\nउजड़े हुए आशियाने में थोड़ा सा सामान बाकी है,\nकहानी ख़त्म हो चुकी है हमारी दुनिया की नज़र में,\nमगर सीने में अभी दर्द का तूफ़ान बाकी है।',
    'A pale ring mark lingers upon bare fingers,\nScattered keepsakes rest inside quiet rooms,\nTo onlookers our chapter closed completely,\nWhile silent tempests still stir deep within.'
  ],
  [
    'किसी तीसरे की वजह से नहीं हम वक़्त से हारे हैं,\nएक ही आसमान के दो टूटे हुए बेचारे तारे हैं,\nचाहत तो दोनों के दिलों में बराबर ज़िंदा थी यार,\nबस हालात की आँधियों ने मिटाए किनारे हैं।',
    'Defeated by harsh timing rather than rivals,\nTwo fallen stars cast across wide night skies,\nAffection burned equally inside both chests,\nCircumstance alone washed away our shore.'
  ],
  [
    'अब न कोई शिकवा तुझसे न कोई मुलाक़ात होगी,\nअपनी तन्हाई से ही अब हर अधूरी बात होगी,\nशुक्रिया उन चंद खूबसूरत लम्हों के लिए ऐ अजनबी,\nजिनकी याद से रोशन मेरी हर काली रात होगी।',
    'Neither complaints remain nor future meetings,\nSolitude will hear my unfinished thoughts now,\nThank you stranger for brief radiant hours,\nWhose glow will soften dark nights ahead.'
  ],
  [
    'हँसी गायब हो गई चेहरे से परिपक्वता आ गई,\nदिल टूटने के बाद जीवन में गंभीरता छा गई,\nप्यार ने सिखाया था हवाओं में बेफ़िक्र उड़ना,\nऔर ब्रेकअप ने ज़मीन पर चलना सिखा गई।',
    'Carefree laughter gave way to quiet maturity,\nHeartbreak draped calm gravity over youth,\nRomance taught my spirit how to float high,\nParting taught my feet how to walk firm ground.'
  ],
  [
    'कभी अचानक बाज़ार में जो नज़रें टकरा जाएँगी,\nधड़कनें एक पल को वहीं थमकर रह जाएँगी,\nमुस्कुराकर अजनबियों सा गुज़र जाना तुम भी पास से,\nपुरानी बातें छेड़ने से बस आँखें भर आएँगी।',
    'Should our eyes cross unexpectedly downtown,\nHeartbeats will freeze still for a second,\nWalk past gently wearing a polite nod,\nStirring old embers would only mist our eyes.'
  ],
  [
    'हर अंत के बाद एक नई शुरुआत लिखी होती है,\nअँधेरी जुदाई के आगे नई प्रभात लिखी होती है,\nटूटे दिल को सँभाल ले धीरे-धीरे ऐ मेरे दोस्त,\nख़ुद से मोहब्बत करने में असली बात लिखी होती है।',
    'Every ending carries seeds of a fresh start,\nBeyond dark parting waits a gentle sunrise,\nHold your bruised heart patiently dear friend,\nLearning self-love unlocks lasting peace.'
  ]
];

// 12. Yaad / Intezaar Shayari (30 unique 25-40 word poems)
const YAAD_INTEZAAR_POEMS: readonly RawPoemTuple[] = [
  [
    'शाम ढलते ही तेरी यादों का कारवाँ चला आता है,\nदिल फिर उसी पुराने मोड़ पर ठहर जाता है,\nआँखें बिछाए बैठा हूँ आज भी तेरी राहों में,\nहर आहट पर बस तेरे आने का गुमाँ आता है।',
    'As twilight falls a caravan of memories arrives,\nPausing my heart at that familiar old bend,\nWatching the lane endlessly for your return,\nEvery rustle stirs hope of your footsteps.'
  ],
  [
    'घड़ी की सुइयाँ चलती हैं पर वक़्त ठहरा लगता है,\nतेरे इंतज़ार का रंग हर दिन गहरा लगता है,\nकब आओगे तुम लौटकर मेरे सूने आँगन में सनम,\nतुम्हारे बिना हर मौसम पर उदासी का पहरा लगता है।',
    'Clock hands move yet hours feel frozen still,\nColors of waiting deepen with every sunset,\nWhen will you step back into my courtyard,\nWithout you melancholy guards each season.'
  ],
  [
    'हिचकियाँ आती हैं जब तो लगता है तूने पुकारा,\nडूबे हुए इस दिल को मिलता उम्मीद का सहारा,\nदूर कितना भी चला जाए तू निगाहों से मेरी,\nमेरी यादों के आसमान में चमकता तेरा सितारा।',
    'Sudden hiccups whisper that you remembered me,\nLifting my weary spirit with tender hope,\nNo matter how far beyond sight you travel,\nYour star shines constant across my thoughts.'
  ],
  [
    'हवा का झोंका भी तेरा पैग़ाम सुना जाता है,\nसूने मन के तारों को धीरे से हिला जाता है,\nइंतज़ार में भी एक मीठा सा नशा होता है यार,\nजो फासलों के बावजूद तुझे क़रीब ला जाता है।',
    'Every passing breeze whispers news of you,\nPlucking softly the strings of my quiet mind,\nWaiting holds a bittersweet enchantment too,\nBringing you close despite miles between us.'
  ],
  [
    'चौखट पर जलाया हुआ दीया रात भर जागता रहा,\nतेरी आमद की दुआ रब से अनवरत माँगता रहा,\nसुबह हो गई पर तेरे क़दमों की आहट न मिली,\nफिर भी नादान दिल उम्मीद के पीछे भागता रहा।',
    'A lamp on the doorstep burned awake all night,\nPraying tirelessly for your safe arrival,\nDawn broke without sound of your footsteps,\nYet my hopeful heart kept watching the road.'
  ],
  [
    'बारिश की बूँदें जब खिड़की के शीशे पर गिरती हैं,\nतेरे संग भीगी हुई सारी यादें फिर से घिरती हैं,\nकहाँ हो तुम और कैसे कट रहे हैं दिन तुम्हारे,\nयही सोचकर मेरी निगाहें बादलों में फिरती हैं।',
    'Raindrops tapping softly upon window glass,\nGather rain-soaked memories of us anew,\nWondering where you are and how days pass,\nMy gaze wanders searching drifting clouds.'
  ],
  [
    'फ़ोन की स्क्रीन को बेवजह बार-बार देखता हूँ,\nतेरे एक छोटे से मैसेज की राह सेकता हूँ,\nपता है मसरूफ़ होगा तू अपनी दुनिया के कामों में,\nफिर भी हर नोटिफ़िकेशन पर तेरा नाम देखता हूँ।',
    'Glancing repeatedly at my quiet phone screen,\nWarming hope around one short note from you,\nKnowing well how busy your schedule stays,\nEvery chime makes me wish for your name.'
  ],
  [
    'याद वो नहीं जो फ़ुरसत के पलों में आया करे,\nयाद वो है जो काम के बीच भी सताया करे,\nहमने चाहा बहुत कि थोड़ा कम सोचें तेरे बारे में,\nपर ये दिल हर साँस में तेरा नाम दोहराया करे।',
    'Real remembrance never waits for idle hours,\nStealing quietly into busy afternoons too,\nTry as I might to think of you a little less,\nEvery breath repeats your name effortlessly.'
  ],
  [
    'सूखे गुलाब की पत्तियाँ किताब में संभाल रखी हैं,\nतेरे इंतज़ार में हमने सदियाँ निकाल रखी हैं,\nतू जब भी लौटेगा मुझे वहीं खड़ा पाएगा हमेशा,\nमैंने तेरे नाम पर अपनी वफ़ाएँ उजाल रखी हैं।',
    'Pressed rose petals rest safe inside my book,\nAges have passed waiting faithfully for you,\nWhenever you return you will find me here,\nKeeping lamps of devotion lit in your name.'
  ],
  [
    'चाय की दूसरी प्याली आज भी तेरे नाम की बनती है,\nसूनी बालकनी में तेरी कमी हर रोज़ खलती है,\nजल्दी लौट आ कि अब सब्र का बाँध टूटने लगा,\nतेरी याद की आँच में मेरी हर शाम जलती है।',
    'A second cup of tea still brews for your sake,\nOur quiet balcony misses your laughter daily,\nReturn soon before patience wears completely,\nEvery dusk smolders softly missing your warmth.'
  ],
  [
    'रास्ते थक गए मगर मेरी निगाहें नहीं थकीं,\nतेरे आने की उम्मीदें सीने में रहीं पकीं,\nलोग कहते हैं पागलपन है यूँ किसी की राह तकना,\nउन्हें क्या पता सच्ची चाहत कभी नहीं झुकी।',
    'Roads grew tired yet my watching eyes stayed firm,\nHopes of reunion ripened steady within heart,\nOnlookers call endless waiting pure madness,\nUnaware that true devotion never surrenders.'
  ],
  [
    'चाँद से रोज़ तेरा हाल पूछ लिया करता हूँ,\nतारों की छाँव में तेरी यादें गिन लिया करता हूँ,\nएक ही आसमान के नीचे साँस ले रहे हैं हम दोनों,\nबस इसी तसल्ली से हर जुदाई सह लिया करता हूँ।',
    'Asking the silver moon nightly how you fare,\nCounting sweet memories beneath starlight,\nKnowing both of us breathe under one sky,\nGives quiet strength through long separation.'
  ],
  [
    'तेरी ख़ुशबू आज भी मेरी पुरानी शर्ट में बाक़ी है,\nतेरी हँसी की गूँज मेरे हर कमरे में साक़ी है,\nभूलना चाहूँ भी तो कैसे भुलाऊँ तुझे ऐ जान,\nमेरी हर आदत में तेरी ही निशानी झाँकी है।',
    'Your scent still clings softly to my old shirt,\nEchoes of your laugh linger across rooms,\nHow could I ever forget you beloved soul,\nWhen every habit reflects a trace of you.'
  ],
  [
    'पलकें झपकाने से भी डरता हूँ कहीं तू गुज़र न जाए,\nइंतज़ार का ये हसीन लम्हा कहीं बिखर न जाए,\nसदियों सी लंबी हो गई हैं तेरे बिन ये रातें,\nआजा कि सूने दिल का आँगन फिर से सँवर जाए।',
    'Afraid even to blink lest you pass unseen,\nProtecting fragile hopes of sweet reunion,\nNights stretch long as centuries without you,\nCome home and brighten my quiet courtyard.'
  ],
  [
    'लिखकर मिटा देता हूँ रोज़ तुझे भेजने वाले पैग़ाम,\nन जाने कैसी कशमकश में कटती है हर शाम,\nयाद बहुत आती है तेरी पर जताना छोड़ दिया,\nबस दुआओं में चुपके से ले लेता हूँ तेरा नाम।',
    'Typing messages to you then erasing them shyly,\nCaught in tender hesitation every evening,\nMissing you deeply without making demands,\nWhispering your name softly inside prayers.'
  ],
  [
    'जब ठंडी हवा छूकर गुज़रती है मेरे सूने गालों को,\nऐसा लगता है तूने सहलाया हो मेरे बिखरे बालों को,\nइंतज़ार ने इतना संवेदनशील बना दिया है दिल को,\nहर झोंके में ढूँढता हूँ तेरे अनकहे सवालों को।',
    'When cool breezes brush lightly past my cheek,\nIt feels like your fingers smoothing my hair,\nWaiting has tuned my heart so delicately,\nHearing unspoken whispers inside soft wind.'
  ],
  [
    'कैलेंडर की तारीख़ें बदलती रहीं एक के बाद एक,\nमगर तेरी याद का पन्ना वहीं अटका रहा नेक,\nवक़्त आगे बढ़ गया दुनिया की रफ़्तार के साथ,\nपर मेरा दिल आज भी करता है तेरा ही अभिषेक।',
    'Calendar pages turned steadily month by month,\nWhile memory paused faithfully on one chapter,\nThough the busy world raced far ahead today,\nMy heart still honors your cherished place.'
  ],
  [
    'आँखें बंद करते ही तेरा मुस्कुराता चेहरा दिखता है,\nमेरा हर ख़याल सिर्फ़ तेरे ही इर्द-गिर्द टिकता है,\nकैसे कह दूँ कि तू मेरे पास नहीं है इस घड़ी,\nजब मेरे हर पन्ने पर तेरी याद का अक्षर लिखता है।',
    'Closing my eyes brings your smiling face near,\nEvery thought circles gently around your grace,\nHow could I claim you are absent right now,\nWhen every page writes syllables of memory.'
  ],
  [
    'पतझड़ बाद जैसे बाग़ को बसंत की आस होती है,\nवैसे मेरी रूह को तेरे दीदार की प्यास होती है,\nइक नज़र देख लूँ तुझे तो बरसों की थकन उतरे,\nतेरे आने से ही मेरी हर घड़ी ख़ास होती है।',
    'As autumn gardens long eagerly for spring,\nMy soul thirsts quietly for one glimpse of you,\nSeeing you once melts years of weariness,\nYour arrival turns ordinary hours golden.'
  ],
  [
    'दरवाज़े की कुंडी जब भी हवा से खटक जाती है,\nधड़कन दौड़कर दहलीज़ के पास अटक जाती है,\nइतना गहरा है तेरे लौट आने का यक़ीन मुझमें,\nकि हर ख़ाली सड़क पर मेरी नज़र भटक जाती है।',
    'Whenever wind rattles the front door latch,\nMy heartbeat rushes straight to the threshold,\nSo unshakable stays my faith in your return,\nScanning empty streets down to the horizon.'
  ],
  [
    'तेरी यादें किसी मीठी लोरी सी सुलाती भी हैं,\nऔर आधी रात को जगाकर चुपके रुलाती भी हैं,\nबड़ा अनोखा रिश्ता है तेरे ख़यालों से मेरा,\nये तन्हाई में मेरा हौसला बढ़ाती भी हैं।',
    'Memories of you soothe me like soft lullabies,\nYet wake me past midnight with misty lashes,\nWondrous is my bond with thoughts of you,\nLending quiet courage through lonely nights.'
  ],
  [
    'सूरज ढलता है रोज़ मगर इंतज़ार नहीं ढलता,\nतेरे सिवा किसी और साँचे में दिल नहीं ढलता,\nचाहे जितनी देर लगा दे तू वापस आने में यार,\nसच्ची मोहब्बत का रास्ता कभी नहीं बदलता।',
    'Sunsets fade daily yet waiting never dims,\nRefusing to fit inside any other mold,\nTake whatever time destiny asks before coming,\nPaths of genuine devotion never veer aside.'
  ],
  [
    'कोयल की कूक में भी तेरी बोली सुनाई देती है,\nसावन की बदली में तेरी झलक दिखाई देती है,\nयाद जब हद से गुज़र जाए तो हर मंज़र में सनम,\nसिर्फ़ तेरी ही प्यारी तस्वीर उकेरी दिखाई देती है।',
    'Songbirds echo the sweetness of your voice,\nMonsoon clouds sketch outlines of your smile,\nWhen longing overflows its quiet banks love,\nEvery landscape reflects your gentle face.'
  ],
  [
    'गिन-गिन कर काटे हैं हमने जुदाई के सारे महीने,\nतेरी याद के मोती पिरोए हैं धड़कते सीने,\nएक दिन तो ख़त्म होगा ये लंबा फ़ासला हमारा,\nउसी उम्मीद के सहारे सीखे हैं ज़ख़्म सीने।',
    'Counting carefully each month spent apart,\nStringing pearls of memory inside my chest,\nSomeday this wide distance must surely close,\nThat bright hope taught me to mend ache.'
  ],
  [
    'तेरे बिना त्यौहार सूने और शामें भी उदास हैं,\nहज़ारों के बीच रहकर भी हम तन्हा ख़ास हैं,\nबस एक बार कह दे तुझे भी याद आती है,\nमेरे जीने के लिए तेरे यही बोल आस हैं।',
    'Festivals feel quiet and evenings pale apart,\nLonely even surrounded by bustling crowds,\nWhisper once that you miss me gently too,\nTwo tender words sustain my entire spirit.'
  ],
  [
    'ख़त के ज़माने होते तो कबूतर भी थक जाते आज,\nइतने पैग़ाम भेजता तुझे मेरे दिल के अल्फ़ाज़,\nअब तो बस ख़ामोश तरंगों से दुआ भेजता हूँ,\nशायद तेरी धड़कन सुन ले मेरे इंतज़ार का साज़।',
    'In days of letters carrier birds would tire,\nDelivering endless notes from my fond heart,\nNow silent waves carry warm prayers across,\nHoping your pulse hears my waiting melody.'
  ],
  [
    'हर गुज़रती ट्रेन में तेरा ही चेहरा तलाशती हैं आँखें,\nमिलन की घड़ी का सुंदर सपना तराशती हैं आँखें,\nपरदेस जाने वाले कभी तो अपने घर की सुध ले,\nतेरी एक झलक को तरसती और उपासती हैं आँखें।',
    'Searching passing trains eagerly for your face,\nCarving bright visions of joyful reunion,\nTraveler afar remember home gently someday,\nLonging eyes fast patiently for one glimpse.'
  ],
  [
    'यादों की संदूकची में तेरी हँसी सहेज रखी है,\nवक़्त की धूल से बचाकर हर बात तेज़ रखी है,\nजब भी मन घबराता है दुनिया की कड़वाहट से,\nतेरे ख़यालों की मिठास ज़ुबान पर रेज़ रखी है।',
    'Inside memory chest your laughter stays safe,\nGuarded bright against dust of passing years,\nWhenever worldly bitterness troubles my mind,\nSweet thoughts of you comfort my spirit.'
  ],
  [
    'इंतज़ार वो इम्तिहान है जिसमें सिर्फ़ सच्चे पास होते,\nजल्दबाज़ लोग तो आधे सफ़र में ही उदास होते,\nहमें यक़ीन है अपनी दुआओं और अपनी वफ़ा पर,\nतभी तो मीलों दूर रहकर भी हम तेरे पास होते।',
    'Waiting tests devotion where true hearts pass,\nImpatient travelers tire halfway down roads,\nTrusting steady prayers and faithful warmth,\nAcross wide miles my spirit walks beside you.'
  ],
  [
    'रात का आख़िरी ख़याल और सुबह की पहली बात हो,\nमेरी यादों में बसने वाली सबसे प्यारी सौग़ात हो,\nइंतज़ार चाहे उम्र भर का लिखा हो नसीब में,\nमेरी हर धड़कन में हमेशा मेरे साथ हो।',
    'Last thought of night and first word at dawn,\nPrecious gift dwelling warm inside memory,\nEven if waiting spans an entire lifetime,\nWith every heartbeat you remain right here.'
  ]
];

// 13. Khushi / Happy Shayari (30 unique 25-40 word poems)
const KHUSHI_POEMS: readonly RawPoemTuple[] = [
  [
    'छोटी-छोटी बातों में जो बड़ी ख़ुशी ढूँढ लेता है,\nवही इंसान ज़िंदगी का असली मज़ा लूट लेता है,\nमहलों की ज़रूरत नहीं दिल को आबाद रखने के लिए,\nसुकून तो सादगी की छाँव में भी फूट लेता है।',
    'Whoever discovers big joy inside small moments,\nTastes the truest nectar life has to offer,\nPalaces are unneeded to keep hearts thriving,\nContentment blooms brightly under simple shade.'
  ],
  [
    'खिलखिलाकर हँस दो तो आधी मुश्किलें भाग जाती हैं,\nउदास पड़ी किस्मत की लकीरें भी जाग जाती हैं,\nख़ुश रहना कोई महँगी चीज़ नहीं इस दुनिया में दोस्त,\nबस नज़रिए की धूप से दिल की कलियाँ राग गाती हैं।',
    'Laughing heartily chases half our troubles away,\nWaking sleepy lines of fortune into action,\nHappiness costs nothing in this wide world,\nWarmth of perspective makes inner buds sing.'
  ],
  [
    'आज हवाओं में अजब मीठी ताज़गी घुली हुई है,\nहर बंद दरवाज़े आगे नई राह खुली हुई है,\nशुक्र अदा करो रब का हर साँस के साथ,\nजिसकी रहमत से ज़िंदगी की धूल धुली हुई है।',
    'Sweet freshness floats across gentle winds today,\nOpening bright paths past every closed door,\nGive grateful thanks with every single breath,\nGrace washes clean the dust of yesterday.'
  ],
  [
    'बाँटने से इकलौती चीज़ जो दुनिया में दोगुनी होती है,\nवो आपके चेहरे की सच्ची मुस्कान और ख़ुशी होती है,\nकिसी उदास इंसान के लबों पर हँसी लाकर तो देखो,\nउस दुआ से रूह के भीतर कितनी रोशनी होती है।',
    'The one treasure on earth that doubles shared,\nIs genuine joy shining across your warm smile,\nBring laughter back to someone weary lips,\nWatch inner light flood your whole spirit.'
  ],
  [
    'न कल की फ़िक्र सताए अब न गुज़रे कल का मलाल,\nआज के इस हसीन पल को जी लो बनकर खुशहाल,\nज़िंदगी आइसक्रीम सी है पिघलने से पहले चख लो,\nहर दिन उत्सव बन जाएगा रखो अपने मन का ख़याल।',
    'Free from tomorrow worry or yesterday regret,\nEmbrace this lovely hour with cheerful grace,\nSavor life sweetness before moments melt fast,\nCaring for inner peace turns days festive.'
  ],
  [
    'जब मन शांत हो तो हर नज़ारा ख़ूबसूरत लगता है,\nबारिश का पानी भी चाँदी का शरबत लगता है,\nख़ुशी बाहर की तिजोरियों में कभी बंद नहीं मिलती,\nसंतुष्ट हृदय ही सुख का सबसे बड़ा पर्वत लगता है।',
    'A peaceful mind makes every view breathtaking,\nTurning falling raindrops into silver nectar,\nHappiness never hides locked inside vaults,\nContented hearts stand rich beyond measure.'
  ],
  [
    'बच्चों सी बेफ़िक्र हँसी फिर से अपने लबों पर सजाओ,\nकाग़ज़ की नाव बनाकर बारिश के पानी में बहाओ,\nउम्र तो सिर्फ़ गिनती का एक छोटा सा अंक है यारों,\nदिल को हमेशा जवाँ और ख़ुशमिज़ाज बनाए जाओ।',
    'Adorn your lips again with childlike laughter,\nFloat paper boats across fresh rain puddles,\nAge is merely a number written on calendars,\nKeep your heart forever joyful and young.'
  ],
  [
    'अपनों का साथ हो और आँगन में गुनगुनी धूप खिली,\nअदरक वाली चाय संग मीठी बातों की लड़ी मिली,\nइससे बड़ी अमीरी क्या होगी ज़िंदगी में भला,\nजहाँ हर चेहरे पर सुकून और ख़ुशी की कली खिली।',
    'Surrounded by family under warm winter sun,\nSharing ginger tea with endless fond stories,\nWhat greater wealth exists anywhere on earth,\nThan peaceful smiles blooming on loved faces.'
  ],
  [
    'ग़म के बादल कभी आसमान पर हमेशा नहीं टिकते हैं,\nधैर्य रखने वालों के घर उजाले ज़रूर दिखते हैं,\nआज खुशियों की बहार ने दस्तक दी है मेरे द्वार,\nचलो शुक्राने के गीत दिल की कलम से लिखते हैं।',
    'Clouds of sorrow never camp forever overhead,\nPatient homes always welcome returning light,\nSpringtime of joy knocks gently at my door,\nLet grateful songs flow warmly from within.'
  ],
  [
    'मन के रेडियो पर आज सुरीले नग़मे बज रहे हैं,\nआँखों के आँगन में सतरंगी सपने सज रहे हैं,\nजब अपने कर्म साफ़ हों और नीयत में सच्चाई हो,\nतब बिना किसी वजह भी दिल के घुँघरू बज रहे हैं।',
    'Sweet melodies play across my inner radio,\nRainbow dreams decorate my bright horizon,\nWhen actions stay clean and intentions pure,\nBells of delight chime naturally inside.'
  ],
  [
    'तितलियों के रंग चुराकर अपनी दुनिया रंगीन बना लो,\nहर सुबह को ज़िंदगी का सबसे हसीन दिन मान लो,\nशिकायतों की गठरी सिर से उतारकर फेंक दो दूर,\nऔर ख़ुश रहने की प्यारी आदत आज से ठान लो।',
    'Borrow butterfly hues to paint your world bright,\nGreet every morning as life finest gift,\nToss heavy bundles of complaint aside today,\nChoosing joyful gratitude as daily habit.'
  ],
  [
    'जब मनचाही दुआ क़ुबूल हो जाती है आसमान से,\nअलग ही नूर झलकता है इंसान की मुस्कान से,\nसब्र के पेड़ पर आज मीठे फल लगे हैं देखो,\nख़ुशी छलक रही है घर के हर मकान से।',
    'When cherished prayers receive heaven blessing,\nRadiant light glows across a grateful smile,\nSweet fruit ripens upon the tree of patience,\nJoy overflows through every corner of home.'
  ],
  [
    'नाचने को जी चाहे जब सावन की पहली फुहार पड़े,\nमिट्टी की सोंधी खुशबू से दिल के तार छिड़े,\nक़ुदरत ने बिखेरे हैं चारों तरफ़ ख़ुशी के ख़ज़ाने,\nबस खुली आँखों से निहारने वाला क़द्रदान मिले।',
    'The spirit dances under first monsoon showers,\nPetrichor strums gentle chords inside heart,\nNature scatters treasures of delight everywhere,\nWaiting simply for appreciative open eyes.'
  ],
  [
    'दूसरों की तरक़्क़ी देखकर जो दिल से ताली बजाता है,\nरब उसके अपने आँगन में हज़ार खुशियाँ बरसाता है,\nईर्ष्या का धुआँ साफ़ रखो अपने कोमल मन के मंदिर से,\nसाफ़ हृदय में ही आनंद का कमल खिल पाता है।',
    'Clapping sincerely for others honest progress,\nInvites a thousand blessings into your home,\nClear away smoke of envy from inner temples,\nPure hearts let lotuses of bliss blossom.'
  ],
  [
    'सुकून की नींद और सुबह चेहरे पर रौनक़ रहे,\nज़िंदगी की बगिया में सदा उम्मीदों की महक रहे,\nन किसी से बैर मन में न कोई उधार बाकी,\nऐसी सरल और ख़ुशहाल अपनी हर चहक रहे।',
    'Peaceful sleep followed by fresh morning glow,\nFragrance of hope filling life quiet garden,\nHolding zero malice or unpaid debt anywhere,\nSuch simple harmony keeps the spirit singing.'
  ],
  [
    'हँसता हुआ चेहरा आपकी सबसे सुंदर पहचान होता है,\nउदासी से भरा इंसान तो जीते-जी परेशान होता है,\nथोड़ा संगीत सुनो, थोड़ा गुनगुनाओ और खुलकर जियो,\nख़ुशमिज़ाज दिलों पर ख़ुद ईश्वर मेहरबान होता है।',
    'A cheerful countenance is your loveliest badge,\nGloom weighs down living hours unnecessarily,\nPlay sweet music hum softly and live open,\nGrace smiles fondly upon lighthearted souls.'
  ],
  [
    'आज दिल बेवजह ही परिंदों की तरह उड़ना चाहता है,\nनीले आसमान की हर उजली बदली से जुड़ना चाहता है,\nबरसों बाद मिला है मन को ऐसा मीठा सा चैन यारों,\nहर गुज़रता पल बस उत्सव बनकर मुड़ना चाहता है।',
    'Today my heart wants to soar free like birds,\nTouching bright white clouds across blue skies,\nDeep serenity visits my spirit so sweetly,\nTurning every passing minute into celebration.'
  ],
  [
    'माँ के चेहरे की मुस्कान देखकर दिन बन जाता है,\nपापा के आशीर्वाद से हर संकट छिन जाता है,\nअसली ख़ुशी बाज़ार के महँगे मॉल में नहीं बिकती,\nपरिवार के संग बैठकर खाने में स्वर्ग मिल जाता है।',
    'Seeing mother warm smile brightens the whole day,\nFather gentle blessing sweeps worries away,\nReal happiness is never sold in luxury malls,\nSharing meals with family tastes like heaven.'
  ],
  [
    'फूलों से सीखो काँटों के बीच भी खिलखिलाते रहना,\nनदी से सीखो पत्थरों के बीच गीत गुनगुनाते रहना,\nपरिस्थितियाँ तो आती-जाती रहेंगी मौसम की तरह,\nतुम हर हाल में अपनी ख़ुशी का दीया जलाते रहना।',
    'Learn from flowers how to bloom amidst thorns,\nLearn from rivers humming past rocky bends,\nCircumstances shift constantly like weather,\nKeep your inner lamp of joy burning steady.'
  ],
  [
    'कोई अच्छी ख़बर जब अचानक दरवाज़ा खटखटाती है,\nथकी हुई आँखों में बिजली सी चमक लौट आती है,\nसारी मेहनत सफल लगती है उस एक सुनहरे पल में,\nजब ख़ुशी के आँसुओं से पलक भीग जाती है।',
    'When good news knocks unexpectedly at the door,\nBright sparkle returns instantly to tired eyes,\nEvery ounce of toil feels worthwhile right then,\nAs tears of pure joy glisten on eyelashes.'
  ],
  [
    'ज़िंदगी एक ख़ूबसूरत तोहफ़ा है इसे खुलकर मनाओ,\nहर छोटे लम्हे को यादगार तस्वीर बनाकर सजाओ,\nकौन जाने कल वक़्त किस मोड़ पर ले जाए हमको,\nआज जो पास है उसी में सौ खुशियाँ बसाओ।',
    'Life is a precious gift meant to be celebrated,\nFrame small everyday moments into fond memories,\nWho knows where tomorrow road may bend next,\nFind a hundred joys in blessings already near.'
  ],
  [
    'जब जेब से ज़्यादा इंसान का दिल अमीर होता है,\nउसके क़दमों में खुशियों का हर ज़ख़ीर होता है,\nथोड़ा दे दो किसी ज़रूरतमंद को बिना नाम बताए,\nउस मुस्कान का सुकून सबसे बेनज़ीर होता है।',
    'When a heart grows richer than any wallet,\nTreasures of happiness gather naturally around,\nHelp someone quietly without seeking credit,\nNo peace compares to sparking another smile.'
  ],
  [
    'सतरंगी इंद्रधनुष निकल आया है बारिश थमने के बाद,\nरौनक़ लौट आई है ज़िंदगी में ग़म छँटने के बाद,\nयही क़ुदरत का नियम है हर रात के पीछे उजाला है,\nख़ुशी और भी मीठी लगती है थोड़ा तपने के बाद।',
    'Vibrant rainbows arch high once rain clears,\nRadiance returns warmly after sorrow fades,\nNature promises dawn behind every dark night,\nJoy tastes sweeter still after patient trials.'
  ],
  [
    'अपने पसंदीदा गीत पर कमरा बंद कर थोड़ा झूम लो,\nख़ुद की पीठ थपथपाओ और अपनी उपलब्धियाँ चूम लो,\nतुमने बहुत बहादुरी से पार किए हैं कठिन रास्ते,\nअब ख़ुश रहने का हक़ पूरे हक़ से घूम लो।',
    'Sway carefree indoors to your favorite song,\nPat your own shoulder honoring how far you came,\nBravely you crossed rocky stretches of road,\nClaim your full right to happiness today.'
  ],
  [
    'मीठी वाणी बोलो कि सुनने वाले का मन खिल जाए,\nतुम्हारी मौजूदगी से महफ़िल को नई रौनक़ मिल जाए,\nख़ुशी किसी एक इंसान की जागीर नहीं होती यारों,\nजहाँ प्यार और आदर हो वहाँ ख़ुद-ब-ख़ुद मिल जाए।',
    'Speak kindly so listeners blossom with warmth,\nLet your presence brighten every gathering,\nHappiness belongs exclusively to nobody friend,\nWhere love and respect live joy arrives free.'
  ],
  [
    'नीले गगन के तले खुली हवा में गहरी साँस भरो,\nचिंताओं का बोझ उतारकर अपने मन को हल्का करो,\nकितनी सुंदर है ये धरती और कितने प्यारे हैं लोग,\nहर सुबह मुस्कुराकर नई खुशियों का स्वागत करो।',
    'Breathe deeply beneath wide blue open skies,\nSet down heavy worries and lighten your spirit,\nHow lovely this earth is with warmhearted souls,\nWelcome fresh joys smiling every single dawn.'
  ],
  [
    'चमकती आँखें और खिलता चेहरा किसी श्रृंगार से कम नहीं,\nजिस दिल में संतोष हो वहाँ कोई भी ग़म नहीं,\nलाख दौलत कमा ले इंसान अगर मन उदास रहे,\nतो सच्ची ख़ुशी के आगे सोने में भी दम नहीं।',
    'Sparkling eyes outshine expensive ornaments,\nWhere contentment lives sorrow finds no foothold,\nEven mountains of gold ring hollow inside,\nBeside the priceless glow of inner peace.'
  ],
  [
    'पुराने यार मिल गए आज अचानक चौराहे की मोड़ पर,\nहँसी के फव्वारे छूट पड़े सारी चिंताएँ छोड़कर,\nकुछ पल ऐसे होते हैं जो महीनों की ऊर्जा दे जाते,\nदिल को तरोताज़ा कर देते हैं खुशियाँ जोड़कर।',
    'Bumping into old friends down a street corner,\nFountains of laughter burst past daily stress,\nCertain brief hours recharge whole months ahead,\nRefreshing the spirit with unguarded delight.'
  ],
  [
    'दुआ है मेरी कि आपके आँगन में सदा बसंत रहे,\nआपकी खुशियों का सिलसिला यूँ ही अनंत रहे,\nकभी कोई उदासी आपकी दहलीज़ तक न पहुँच पाए,\nहर दिन आपका दीवाली सा उज्ज्वल और जीवंत रहे।',
    'May eternal spring grace your home courtyard,\nKeeping streams of happiness flowing endless,\nMay shadow of gloom never reach your doorstep,\nMaking every day radiant like festive lamps.'
  ],
  [
    'ख़ुश रहने का फ़ैसला जब इंसान ख़ुद कर लेता है,\nतब बाहरी तूफ़ान उसका कुछ बिगाड़ नहीं पाता है,\nभीतर की शांति ही सबसे बड़ी जीत है जीवन की,\nयही मंत्र हर साधारण दिन को ख़ास बनाता है।',
    'Once a soul chooses happiness deliberately,\nOutside storms lose power to shake inner calm,\nPeace within remains life greatest triumph,\nTurning ordinary days into golden celebrations.'
  ]
];

// 14. Good Morning Shayari (30 unique 25-40 word poems)
const GOOD_MORNING_POEMS: readonly RawPoemTuple[] = [
  [
    'सूरज की पहली किरण ने आपकी खिड़की खटखटाई है,\nठंडी हवाओं ने फूलों की ताज़ा खुशबू भिजवाई है,\nमुस्कुराकर खोलिए आँखें और स्वागत कीजिए नए दिन का,\nसुप्रभात कहने को मेरी ये प्यारी शायरी आई है।',
    'First sunbeams knock gently upon your window,\nCool breezes deliver fresh floral fragrance,\nOpen your eyes smiling to greet a brand new day,\nWarm morning wishes arrive with this verse.'
  ],
  [
    'ओस की बूँदें पत्तों पर मोतियों सी चमक रही हैं,\nचिड़ियों की मीठी चहचहाहट हर डाल पर महक रही है,\nबीती रात की सारी थकान उतार फेंकिए मन से आज,\nनई उम्मीदों के संग खूबसूरत सुबह दमक रही है।',
    'Dewdrops glisten like pearls on green leaves,\nSweet birdcalls echo from every garden branch,\nShake off last night weariness from your mind,\nA radiant morning shines bright with new hope.'
  ],
  [
    'गर्मागर्म चाय की प्याली और आपका प्यारा सा ख़याल,\nरब करे आपका आज का पूरा दिन रहे बेमिसाल,\nहर काम में मिले सफलता और चेहरे पर रहे रौनक़,\nगुड मॉर्निंग कहकर पूछते हैं हम अपनों का हाल।',
    'Steaming morning tea paired with fond thoughts,\nMay God make your entire day extraordinary,\nBringing smooth success and cheerful radiance,\nGood morning wishes ask warmly how you fare.'
  ],
  [
    'हर नया सवेरा ज़िंदगी का एक कोरा पन्ना लाता है,\nमेहनत और मुस्कान से इसे सजाना हमें सिखाता है,\nउठो और अपने सपनों की तरफ़ एक कदम और बढ़ाओ,\nजागने वालों के क़दमों में ही मुक़द्दर झुक जाता है।',
    'Every sunrise brings a clean page of life,\nInviting effort and smiles to paint it bright,\nRise and take one bold step toward your dream,\nFortune bows gladly before awakened spirits.'
  ],
  [
    'मंदिर की घंटियों और सुबह की पावन आरती के संग,\nआपकी ज़िंदगी में घुल जाएँ सुख और शांति के रंग,\nईश्वर की कृपा बनी रहे आपके पूरे परिवार पर सदा,\nइसी मंगल कामना से शुरू हो आज की नई उमंग।',
    'With temple bells and sacred dawn prayers,\nMay colors of peace blend into your household,\nMay divine grace shelter your whole family,\nStarting today journey with joyful energy.'
  ],
  [
    'रात का अँधेरा छँट गया और उजाला मुस्कुराने लगा,\nनीला आसमान सुनहरी धूप की चादर बिछाने लगा,\nदिल में रखिए अच्छे विचार और होंठों पर मीठे बोल,\nसुप्रभात का ये पैग़ाम आपकी ख़ुशियाँ बढ़ाने लगा।',
    'Night shadows parted as daylight began smiling,\nBlue skies spread carpets of golden sunshine,\nHold noble thoughts and gentle speech today,\nMay this morning greeting multiply your joy.'
  ],
  [
    'ताज़ी हवा का झोंका आपके सारे ग़म उड़ा ले जाए,\nआज का सवेरा आपकी झोली में हज़ार खुशियाँ लाए,\nजिस मंज़िल की तलाश में निकलें आपके बढ़ते क़दम,\nहर रास्ता ख़ुद आगे बढ़कर आपको मंज़िल मिलाए।',
    'May fresh morning breezes sweep worries away,\nFilling your lap with countless quiet blessings,\nToward whatever summit your footsteps set out,\nMay every road guide you smoothly home.'
  ],
  [
    'फूल खिलते हैं सुबह बिना किसी शोर या दिखावे के,\nसूरज बाँटता है रोशनी बिना किसी झूठे दावे के,\nप्रकृति से सीखकर चलो आज कुछ अच्छा कर दिखाएँ,\nसुप्रभात मेरे दोस्त सच्चे दिल के नेक इरादे के।',
    'Flowers bloom at dawn without noise or show,\nSunlight shares warmth freely with everyone,\nLearning from nature let us do good today,\nGood morning dear friend with pure goodwill.'
  ],
  [
    'आपकी एक मुस्कान से घर का कोना-कोना खिल उठे,\nचाय की मिठास से हर रिश्ते का दिल मिल उठे,\nशुभ प्रभात हो आपको और आपके सभी प्यारे अपनों को,\nआज आपकी हर अधूरी तमन्ना मंज़िल से मिल उठे।',
    'May your bright smile light up every room,\nSweetening bonds over warm morning tea,\nBlessed dawn to you and all whom you love,\nMay cherished wishes meet fulfillment today.'
  ],
  [
    'कल जो हुआ उसे भूलकर आज की ताज़गी को गले लगाओ,\nअपने भीतर छुपे हुए आत्मविश्वास के दीप जलाओ,\nसवेरा कह रहा है कि अभी बहुत कुछ पाना बाकी है,\nमुस्कुराते हुए ज़िंदगी के इस नए सफ़र पर आओ।',
    'Release yesterday and embrace fresh morning air,\nKindle bright lamps of confidence inside heart,\nSunrise whispers how much beauty awaits ahead,\nStep smiling onto today promising pathway.'
  ],
  [
    'कोयल की मीठी तान ने बाग़ों का सन्नाटा तोड़ा है,\nसूरज ने धरती से फिर नया सुनहरा नाता जोड़ा है,\nउठ जाइए कि आपके इंतज़ार में ख़ुशियाँ खड़ी हैं बाहर,\nरब ने आपकी तक़दीर को सफलता की तरफ़ मोड़ा है।',
    'Sweet cuckoo songs wake quiet garden groves,\nSunlight renews its golden bond with earth,\nRise warmly for blessings wait outside your door,\nGrace steers your path toward bright success.'
  ],
  [
    'सुबह-सुबह जब अपनों का प्यारा संदेश मिल जाता है,\nमन का मुरझाया हुआ हर फूल तुरंत खिल जाता है,\nयाद रखिए आप हमारी दुआओं में हमेशा शामिल रहते हैं,\nआपकी ख़ुशी देखकर ही हमारा हर दिन खिल जाता है।',
    'Receiving warm greetings from loved ones early,\nMakes tired spirits blossom instantaneously,\nKnow you remain treasured inside daily prayers,\nYour happiness brightens our entire day.'
  ],
  [
    'हल्की-हल्की ठंडक और उगते सूरज की लालिमा न्यारी,\nमुबारक हो आपको ये सुहानी और शांत सुबह प्यारी,\nसेहत, सुकून और तरक़्क़ी क़दम चूमे आपके हर पल,\nबस यही छोटी सी दुआ है सुबह-सवेरे हमारी।',
    'Crisp gentle breeze beneath crimson sunrise,\nWishing you a serene and lovely morning,\nMay health peace and progress walk beside you,\nCarrying our heartfelt dawn blessing today.'
  ],
  [
    'अच्छी सोच के साथ की गई एक छोटी सी शुरुआत,\nबदल देती है इंसान के पूरे दिन के सारे हालात,\nनकारात्मक बातों को दहलीज़ के बाहर ही छोड़ आइए,\nप्रेम और उत्साह से मनाइए आज का पावन प्रभात।',
    'One small beginning rooted in positive thought,\nTransforms the rhythm of an entire day,\nLeave heavy doubts outside your doorstep now,\nGreet sacred dawn with enthusiasm and warmth.'
  ],
  [
    'साँसों का चलना ही ईश्वर की सबसे बड़ी मेहरबानी है,\nहर नई सुबह आपके लिए एक नई अमर कहानी है,\nआभार मानिए उन सबका जो आपके जीवन में साथ हैं,\nसुप्रभात के संग खुशियों की यही रीत निभानी है।',
    'Waking with steady breath is heaven finest gift,\nEach new morning opens an unwritten story,\nCherish gratefully everyone walking beside you,\nSharing warm wishes in morning harmony.'
  ],
  [
    'सूरज की किरणों में घुला हुआ सोने सा उजाला देखो,\nप्रकृति ने सजाया है कैसा अद्भुत मतवाला देखो,\nआलस की चादर हटाकर खुली हवा से दोस्ती कर लो,\nहर सुबह बनती है मेहनतकश इंसान की रखवाला देखो।',
    'Behold golden radiance woven through sunbeams,\nNature paints a breathtaking canvas overhead,\nFold away blankets of sleep and breathe fresh,\nMorning stands ally to diligent dreamers.'
  ],
  [
    'न किसी से शिकायत रखिए आज न किसी से बैर,\nसुबह की पहली दुआ में माँगिए सबकी ही ख़ैर,\nजितना साफ़ रखेंगे आप अपने मन के इस आँगन को,\nउतनी ही सुखद होगी ज़िंदगी के बगीचे की सैर।',
    'Hold zero grudge or complaint against anyone,\nPraying at daybreak for universal well-being,\nThe cleaner you keep the courtyard of mind,\nThe sweeter your walk through life garden.'
  ],
  [
    'तुलसी के चौरे पर जलता दीया और सुबह की शांति,\nमिटा दे आपके मन से हर प्रकार की उलझन-भ्रांति,\nऊर्जा से भरपूर रहे आपका आज का हर एक कदम,\nगुड मॉर्निंग के संग बढ़े आपके चेहरे की कांति।',
    'A morning lamp glowing peacefully near basil,\nClears confusion and restlessness from mind,\nMay vibrant energy power every step today,\nAdding bright luster to your smiling face.'
  ],
  [
    'सपने वो पूरे होते हैं जिनके लिए सुबह जागा जाए,\nलक्ष्य की राह पर बिना थके उत्साह से भागा जाए,\nचाय की चुस्की लेकर अपने इरादे फिर मज़बूत कर लो,\nआज का सवेरा आपकी जीत का नया परचम लहराए।',
    'Dreams come true when we wake early for them,\nMoving steadily down paths of clear purpose,\nSip warm tea and renew firm determination,\nMay today morning raise banners of triumph.'
  ],
  [
    'फूलों की वादियों से हमने खुशबू चुनकर भेजी है,\nसूरज की किरणों से सुनहरी रौनक़ बुनकर भेजी है,\nक़ुबूल कीजिए हमारा ये दिल से लिखा सुप्रभात नमन,\nजिसमें आपकी सलामती की हर दुआ गिनकर भेजी है।',
    'Gathering fragrance from blooming valleys afar,\nWeaving golden threads from morning sunbeams,\nAccept this heartfelt greeting sent warmly,\nWrapped with counted prayers for your safety.'
  ],
  [
    'धूप का टुकड़ा आँगन में उतरकर मुस्कुराने लगा है,\nहर पंछी अपने घोंसले से उड़ान भरने लगा है,\nआप भी मुस्कुराहट का गहना पहनकर निकल पड़िए आज,\nसफलता का आसमान आपको प्यार से बुलाने लगा है।',
    'Patches of sunlight smile across the courtyard,\nBirds lift wing cheerfully from cozy nests,\nWear your finest smile stepping outdoors today,\nOpen skies of achievement call your name.'
  ],
  [
    'सुबह की ताज़ी हवा दवा से भी बढ़कर असर करती है,\nथके हुए तन और उदास मन में नई जान भरती है,\nथोड़ा टहलिए, थोड़ा मुस्कुराइए और शुक्र मनाइए यारों,\nयही सरल दिनचर्या जीवन में सुख के रंग भरती है।',
    'Crisp dawn air heals deeper than medicine,\nBreathing vitality into tired body and mind,\nTake a gentle walk smile wide and give thanks,\nSimple morning habits color life with bliss.'
  ],
  [
    'रिश्तों की डोर सुबह की एक याद से मज़बूत होती है,\nदो मीठे बोल कह देने से दूरियाँ काफ़ूर होती हैं,\nइसलिए सबसे पहले आपको गुड मॉर्निंग भेजा है हमने,\nक्योंकि आपकी दोस्ती हमारे दिल का सच्चा नूर होती है।',
    'Threads of kinship strengthen with dawn thought,\nTwo affectionate words melt miles away fast,\nSending good morning first to you today friend,\nBecause your bond shines bright inside heart.'
  ],
  [
    'अँधेरा कभी रुकता नहीं चाहे रात कितनी लंबी हो,\nउम्मीद की किरण जीतती है चाहे राह कितनी तंगी हो,\nइसी विश्वास के साथ आज का नया दिन शुरू कीजिए,\nआपके हर प्रयास के साथ कामयाबी की संगी हो।',
    'Darkness never stays however long night felt,\nRays of hope prevail through narrowest paths,\nBegin today anchored in unshakable confidence,\nMay success accompany every honest effort.'
  ],
  [
    'सुबह का पहला विचार आपकी पूरी ऊर्जा तय करता है,\nजो मुस्कुराकर उठता है उसका हर काम सँवरता है,\nईश्वर करे आज आपको कोई बहुत प्यारी ख़ुशख़बरी मिले,\nशुभ प्रभात हमारा आपके उज्ज्वल दिन की कामना करता है।',
    'Your first morning thought shapes daily energy,\nRising with a smile smooths every task ahead,\nMay joyful news greet your ears before noon,\nWishing you a bright prosperous morning.'
  ],
  [
    'बादलों की ओट से झाँकता सूरज सलाम कह रहा,\nबहता निर्मल झरना आगे बढ़ने का नाम कह रहा,\nरुकना मत छोटे पत्थर से ठोकर खाकर राह में,\nआज सवेरा तुम्हें विजेता का मुक़ाम कह रहा।',
    'Peeking past clouds the sun sends greetings,\nFlowing clear streams urge steady motion ahead,\nNever halt over small pebbles along roads,\nDawn salutes the champion rising in you.'
  ],
  [
    'मेरी सुबह तब मुकम्मल होती है जब तेरा ज़िक्र हो,\nचाय की भाप में भी बस तेरी सलामती की फ़िक्र हो,\nख़ुश रहो तुम हमेशा फूलों की तरह खिलते हुए सदा,\nगुड मॉर्निंग मेरी जान तेरा हर लम्हा बेफ़िक्र हो।',
    'My morning feels complete mentioning your name,\nSteam of warm tea carries care for your peace,\nStay blooming happily like garden blossoms,\nGood morning sweetheart live carefree today.'
  ],
  [
    'शांति, संतोष और स्नेह से महकता रहे आपका घर-द्वार,\nहर सुबह लेकर आए आपके जीवन में खुशियों का उपहार,\nमन में न रहे कोई बोझ और चेहरे पर रहे उजाला,\nदिल की गहराइयों से आपको सुप्रभात और ढेर सारा प्यार।',
    'May peace contentment and warmth fill your home,\nEach sunrise bringing fresh gifts of delight,\nFree from heavy burdens with radiant spirit,\nSending heartfelt morning love your way.'
  ],
  [
    'पंछियों के परों पर लिखकर भेजा है सुबह का सलाम,\nसूरज की लाली ने किया है उजाला आपके ही नाम,\nहँसते-खिलखिलाते गुज़रे आपका आज का हर एक घंटा,\nशुभ सवेरा हो आपका और सुकून भरी रहे हर शाम।',
    'Morning greetings ride softly on bird wings,\nCrimson dawn dedicates warm light to you,\nMay cheerful laughter fill every hour today,\nLeading gently toward a peaceful evening.'
  ],
  [
    'नया दिन, नई ताक़त और नए सपनों की उजली उड़ान,\nमेहनत के रंगों से रंग दो आज अपना खुला आसमान,\nरब का हाथ रहे आपके सिर पर हर कदम की राह में,\nगुड मॉर्निंग दोस्त बढ़े जग में आपका मान-सम्मान।',
    'New day fresh strength and bright flight ahead,\nPaint open skies with colors of honest effort,\nMay divine blessing shelter each step you take,\nGood morning friend rise higher in honor.'
  ]
];

export const NEW_FEELINGS_PART_1: Shayari[] = [
  ...buildCategoryShayaris(
    {
      category: 'dosti',
      categoryName: 'Dosti / Yaari / Friendship Shayari',
      categoryIcon: '🤝',
      idPrefix: 'dosti',
      startIndex: 1,
      tags: ['DostiShayari', 'Yaari', 'Friendship']
    },
    DOSTI_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'bewafa',
      categoryName: 'Bewafa / Dhokha Shayari',
      categoryIcon: '🥀',
      idPrefix: 'bewafa',
      startIndex: 1,
      tags: ['BewafaShayari', 'Dhokha', 'SadStatus']
    },
    BEWAFA_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'breakup',
      categoryName: 'Breakup / Heartbreak Shayari',
      categoryIcon: '💔',
      idPrefix: 'breakup',
      startIndex: 1,
      tags: ['BreakupShayari', 'Heartbreak', 'BrokenHeart']
    },
    BREAKUP_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'yaad-intezaar',
      categoryName: 'Yaad / Intezaar Shayari',
      categoryIcon: '⏳',
      idPrefix: 'yaad-intezaar',
      startIndex: 1,
      tags: ['YaadShayari', 'Intezaar', 'MissingYou']
    },
    YAAD_INTEZAAR_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'khushi',
      categoryName: 'Khushi / Happy Shayari',
      categoryIcon: '😊',
      idPrefix: 'khushi',
      startIndex: 1,
      tags: ['KhushiShayari', 'HappyStatus', 'Positivity']
    },
    KHUSHI_POEMS
  ),
  ...buildCategoryShayaris(
    {
      category: 'good-morning',
      categoryName: 'Good Morning Shayari',
      categoryIcon: '🌅',
      idPrefix: 'good-morning',
      startIndex: 1,
      tags: ['GoodMorning', 'Suprabhat', 'MorningWishes']
    },
    GOOD_MORNING_POEMS
  )
];
