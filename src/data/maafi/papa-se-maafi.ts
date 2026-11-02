import { Shayari } from '../../types/shayari';

type MaafiTuple = [
  title: string,
  hindi: string,
  hinglish: string,
  english: string,
  tag: string,
  likes: number
];

const PAPA_MAAFI_RAW: MaafiTuple[] = [
  [
    'पापा के कंधों का सम्मान',
    'जिन मज़बूत कंधों पर बैठकर मैंने यह सारा जहाँ देखा,\nआज उन्हीं पापा की आँखों में अपनी गलती का धुआँ देखा।\nसिर झुकाकर माफ़ी माँगता हूँ पापा अपनी हर नादानी की,\nआपकी चुप्पी में भी मैंने अपने कल का आसमाँ देखा।',
    'Jin mazboot kandhon par baithkar maine yeh saara jahaan dekha,\nAaj unhin Papa ki aankhon mein apni galti ka dhuaan dekha.\nSir jhukaakar maafi maangta hoon Papa apni har naadani ki,\nAapki chuppi mein bhi maine apne kal ka aasmaan dekha.',
    'Sitting upon those strong shoulders I once saw the whole wide world,\nToday in my father’s eyes I saw the shadow of my own mistake.\nWith bowed head I ask forgiveness, Papa, for my foolishness,\nEven in your quiet gaze I see shelter for all my tomorrows.',
    'PapaSorry',
    408
  ],
  [
    'पिता का मौन अनुशासन',
    'पापा आपकी सख्ती के पीछे छुपा प्यार आज समझ आया है,\nठोकर लगी जब राहों में तब आपका हर संस्कार काम आया है।\nमुझसे जो भूल हुई उसे अपना बच्चा समझकर माफ़ कीजिए,\nआपका यह बेटा अपनी गलती पर दिल से पछताया है।',
    'Papa aapki sakhti ke peeche chhupa pyaar aaj samajh aaya hai,\nThokar lagi jab raahon mein tab aapka har sanskaar kaam aaya hai.\nMujhse jo bhool hui use apna baccha samajhkar maaf kijiye,\nAapka yeh beta apni galti par dil se pachtaaya hai.',
    'Today I finally understand the love hidden behind your firmness,\nWhen life made me stumble, every value you taught held me upright.\nForgive my mistake as that of your own child, dear Papa,\nYour son repents from the very bottom of his heart.',
    'FatherRespect',
    395
  ],
  [
    'पापा की पगड़ी और मान',
    'आपके नाम से ही समाज में मेरी पहचान और शान है,\nपापा आपका स्वाभिमान ही मेरे जीवन की असली जान है।\nवादा है अब कोई कदम आपकी मर्यादा के खिलाफ न उठेगा,\nमुझे क्षमा कर दें पापा आप ही मेरा पहला भगवान हैं।',
    'Aapke naam se hi samaaj mein meri pehchan aur shaan hai,\nPapa aapka swabhimaan hi mere jeevan ki asli jaan hai.\nWaada hai ab koi kadam aapki maryaada ke khilaaf na uthega,\nMujhe kshama kar dein Papa aap hi mera pehla Bhagwan hain.',
    'Through your respected name alone I hold dignity in the world,\nYour honor, Papa, is the very heartbeat of my life.\nI promise never again to take a step against your values,\nForgive me, Father—to me you are divinity on earth.',
    'PapaKaMaan',
    386
  ],
  [
    'पापा के फटे जूते और त्याग',
    'खुद घिसे जूते पहनकर आपने मुझे हर नई चीज़ दिलाई,\nधूप में तपकर भी हमारे हिस्से सिर्फ ठंडी छाँव भिजवाई।\nऐसे त्यागी पिता का दिल दुखाकर मैं चैन कैसे पाऊँगा,\nमाफ़ कर दो पापा मेरी आँखें शर्मिंदगी से भर आईं।',
    'Khud ghise joote pehankar aapne mujhe har nayi cheez dilaayi,\nDhoop mein tapkar bhi hamaare hisse sirf thandi chhaanv bhijwaayi.\nAise tyaagi pita ka dil dukhaakar main chain kaise paaoonga,\nMaaf kar do Papa meri aankhein sharmindagi se bhar aayin.',
    'Wearing worn shoes yourself, you bought me everything brand new,\nBurning in harsh sunlight, you sent only cool shade our way.\nHow could I find peace after hurting so selfless a father?\nForgive me, Papa—my eyes overflow with deep remorse.',
    'PitaKaTyaag',
    378
  ],
  [
    'पापा से ऊँची आवाज़ की भूल',
    'जोश में आकर आपसे बहस कर बैठा यह मेरा पागलपन था,\nआपके तजुर्बे के सामने कहाँ टिकने वाला मेरा बचपन था।\nहाथ जोड़कर आपके चरणों में अपनी गलती स्वीकारता हूँ,\nपापा आपकी डाँट में ही मेरे भविष्य का खरा दर्पण था।',
    'Josh mein aakar aapse behas kar baitha yeh mera paagalpan tha,\nAapke tajurbe ke saamne kahan tikne waala mera bachpan tha.\nHaath jodkar aapke charnon mein apni galti sweekaarta hoon,\nPapa aapki daant mein hi mere bhavishya ka khara darpan tha.',
    'Arguing with you in reckless impulse was sheer folly on my part,\nHow could my youth ever match the depth of your life experience?\nWith folded hands at your feet I confess my fault today,\nEven your stern guidance held the truest mirror for my future.',
    'SorryPapa',
    369
  ],
  [
    'पापा की खामोश उदासी',
    'माँ तो रोकर अपना दर्द कह देती है पर आप चुप हो जाते हो,\nभीतर ही भीतर घुटकर भी घर का हौसला बढ़ाते हो।\nपापा आपकी यह खामोश उदासी मेरा कलेजा चीर रही है,\nएक बार गले लगाकर कह दो कि आज भी मुझे चाहते हो।',
    'Maa toh rokar apna dard keh deti hai par aap chup ho jaate ho,\nBheetar hi bheetar ghutkar bhi ghar ka hausla badhaate ho.\nPapa aapki yeh khamosh udaasi mera kaleja cheer rahi hai,\nEk baar gale lagaakar keh do ki aaj bhi mujhe chaahte ho.',
    'Mom expresses her pain in tears, yet you retreat into silence,\nCarrying hurt quietly inside while keeping the household strong.\nPapa, this silent sorrow of yours pierces straight through my heart,\nEmbrace me once and tell me I am still dear to you.',
    'KhamoshPita',
    361
  ],
  [
    'पापा का भरोसा फिर जीतना है',
    'पैसा खो जाए तो मेहनत से इंसान फिर कमा लेता है,\nपर पिता का टूटा भरोसा रातों की नींद चुरा लेता है।\nपापा मुझे सुधरने का बस एक आखिरी मौका और दीजिए,\nआपका आशीर्वाद ही गिरते हुए बच्चे को बचा लेता है।',
    'Paisa kho jaaye toh mehnat se insaan phir kama leta hai,\nPar pita ka toota bharosa raaton ki neend chura leta hai.\nPapa mujhe sudharne ka bas ek aakhiri mauka aur dijiye,\nAapka ashirwad hi girte huye bacche ko bacha leta hai.',
    'Lost money can always be earned back through honest toil,\nYet breaking a father’s trust steals every night of sleep.\nGrant me just one chance to make things right again, Papa,\nYour blessing alone saves a stumbling child from falling.',
    'PapaKaBharosa',
    354
  ],
  [
    'बेटी की पापा से माफ़ी',
    'आपकी लाडली गुड़िया से आज अनजाने में भूल हो गई,\nपापा आपकी मुस्कान छीनकर मेरी हर खुशी धूल हो गई।\nसिर पर हाथ रखकर अपने सीने से लगा लीजिए पापा,\nआपकी नाराज़गी मेरे नन्हे दिल में चुभता शूल हो गई।',
    'Aapki laadli gudiya se aaj anjaane mein bhool ho gayi,\nPapa aapki muskaan chheenkar meri har khushi dhool ho gayi.\nSir par haath rakhkar apne seene se laga lijiye Papa,\nAapki naraazgi mere nanhe dil mein chubhta shool ho gayi.',
    'Your beloved little daughter made an unintended mistake today,\nStealing away your smile turned every joy of mine to dust.\nPlace your hand on my head and hold me close again, Papa,\nYour displeasure aches like a sharp thorn inside my heart.',
    'PapaKiBeti',
    348
  ],
  [
    'पापा की उँगली का सहारा',
    'बचपन में मेले की भीड़ में आपकी उँगली थामे चलता था,\nआप साथ होते थे तो बड़े से बड़ा डर भी टलता था।\nआज अपनी नासमझी से आपका हाथ छोड़कर भटक गया हूँ,\nमाफ़ कर दो पापा आपके बिना कदम-कदम पर फिसलता था।',
    'Bachpan mein mele ki bheed mein aapki ungli thaame chalta tha,\nAap saath hote the toh bade se bada dar bhi talta tha.\nAaj apni naasamjhi se aapka haath chhodkar bhatak gaya hoon,\nMaaf kar do Papa aapke bina kadam-kadam par phisalta tha.',
    'In childhood crowds I walked safely holding tightly to your finger,\nWith you beside me even the greatest fear melted away.\nLetting go of your guidance in foolishness left me lost today,\nForgive me, Papa—without you my steps falter at every turn.',
    'UngliKaSahara',
    341
  ],
  [
    'पापा की मेहनत का कर्ज़',
    'पसीने की हर बूँद से आपने हमारे सपनों का महल सींचा,\nहमारी खुशी की खातिर अपनी हर ज़रूरत से हाथ खींचा।\nमैं नादान था जो आपकी नसीहत का मोल समझ न पाया,\nपापा क्षमा कर दें आज शर्म से मेरा माथा है नीचा।',
    'Paseene ki har boond se aapne hamaare sapnon ka mahal seencha,\nHamaari khushi ki khaatir apni har zaroorat se haath kheencha.\nMain naadan tha jo aapki naseehat ka mol samajh na paaya,\nPapa kshama kar dein aaj sharm se mera maatha hai neecha.',
    'With every drop of sweat you nurtured the palace of our dreams,\nPulling back from your own needs just to secure our joy.\nFoolish was I not to treasure the worth of your counsel,\nForgive me, Papa—today my brow bows low in humble regret.',
    'PapaKiMehnat',
    335
  ],
  [
    'पापा मुझे डाँट लो आज',
    'आपकी चुप्पी से ज़्यादा भयानक कोई भी सज़ा नहीं होती,\nजब पापा नाराज़ हों तो ज़िंदगी में कोई रज़ा नहीं होती।\nजी भर के डाँट लीजिए पर यूँ मुँह मोड़कर मत बैठिए,\nआपकी स्नेहिल नज़र के बिना घर की फ़िज़ा नहीं होती।',
    'Aapki chuppi se zyaada bhayaanak koi bhi sazaa nahi hoti,\nJab Papa naraaz hon toh zindagi mein koi razaa nahi hoti.\nJee bhar ke daant lijiye par yoon munh modkar mat baithiye,\nAapki snehil nazar ke bina ghar ki fizaa nahi hoti.',
    'No punishment hurts deeper than your heavy silence, Papa,\nWhen a father is displeased, all warmth drains out of life.\nScold me sternly if you wish, only do not turn your face away,\nWithout your caring glance our home loses its very soul.',
    'PapaKiDaant',
    329
  ],
  [
    'बरगद की छाँव जैसे पिता',
    'तपती दोपहरी में आँगन के घने बरगद की छाँव हो आप,\nडगमगाती कश्ती को किनारे पहुँचाने वाली नाव हो आप।\nनादानी में टहनी को चोट पहुँचा बैठा हूँ मेरे पापा,\nमुझ नासमझ को क्षमा कर देने वाला विशाल भाव हो आप।',
    'Tapti dopahri mein aangan ke ghane bargad ki chhaanv ho aap,\nDagmagaati kashti ko kinaare pahunchaane waali naav ho aap.\nNaadani mein tehni ko chot pahuncha baitha hoon mere Papa,\nMujh naasamajh ko kshama kar dene waala vishaal bhaav ho aap.',
    'Like a mighty banyan shading our courtyard in scorching noon,\nYou are the steady boat guiding our tossed vessel ashore.\nIn carelessness I bruised that sheltering branch, dear Papa,\nYet vast enough is your heart to pardon an erring child.',
    'BargadChhaanv',
    323
  ],
  [
    'पापा की उम्मीदें न टूटें',
    'मेरी कामयाबी के ख्वाब आपने अपनी आँखों में पाले हैं,\nमेरे रास्ते के काँटे आपने अपने हाथों से निकाले हैं।\nअपनी एक भूल से आपकी उम्मीदों को ठेस पहुँचा दी मैंने,\nसॉरी पापा अब मेरे इरादे फिर से नेक और उजाले हैं।',
    'Meri kaamyaabi ke khwaab aapne apni aankhon mein paale hain,\nMere raaste ke kaante aapne apne haathon se nikaale hain.\nApni ek bhool se aapki ummeedon ko thes pahuncha di maine,\nSorry Papa ab mere iraade phir se nek aur ujaale hain.',
    'Dreams of my success you cherished tenderly within your eyes,\nClearing thorns off my path with your own weathered hands.\nOne blunder of mine wounded those hopeful expectations,\nSorry Papa—from today my resolve shines honest and bright.',
    'PapaKiUmmeed',
    317
  ],
  [
    'पापा के चरणों में प्रणाम',
    'गलती मानने से कद कभी छोटा नहीं होता आपने सिखाया था,\nसच्चाई की राह पर निडर होकर चलना आपने बताया था।\nआज आपके सिखाए संस्कार से ही अपनी भूल मानता हूँ,\nमाफ़ कीजिए पापा भटकाव का बादल मन पर छाया था।',
    'Galti maanne se kad kabhi chhota nahi hota aapne sikhaaya tha,\nSacchaayi ki raah par nidar hokar chalna aapne bataaya tha.\nAaj aapke sikhaaye sanskaar se hi apni bhool maanta hoon,\nMaaf kijiye Papa bhatkaav ka baadal mann par chhaaya tha.',
    'Admitting a mistake never diminishes one’s stature, you taught me,\nWalking fearlessly in truth was the lesson you instilled.\nGuided by those very values I own up to my fault today,\nForgive me, Papa—a brief cloud of confusion dimmed my mind.',
    'PitaSanskar',
    312
  ],
  [
    'पापा की चश्मे वाली नज़र',
    'चश्मे के पीछे से जब आपने उदास आँखों से मुझे निहारा,\nउसी पल टूट गया पापा मेरी झूठी ज़िद का गुब्बारा।\nअब कभी आपको नीचा नहीं देखना पड़ेगा मेरी वजह से,\nमाफ़ कर दो पापा आप ही हो मेरे जीवन का ध्रुवतारा।',
    'Chashme ke peeche se jab aapne udaas aankhon se mujhe nihaara,\nUsi pal toot gaya Papa meri jhoothi zid ka gubbaara.\nAb kabhi aapko neecha nahi dekhna padega meri wajah se,\nMaaf kar do Papa aap hi ho mere jeevan ka dhruvtaara.',
    'When you looked at me sadly from behind your reading glasses,\nIn that instant the hollow bubble of my stubbornness burst.\nNever again shall your head bow down because of my actions,\nForgive me, Papa—you remain the guiding pole star of my life.',
    'DhruvtaaraPapa',
    308
  ],
  [
    'दरवाज़े पर खड़ा बेटा',
    'कमरे के दरवाज़े पर सहमा सा खड़ा हूँ हिम्मत जुटाकर,\nपापा आपसे सॉरी कहने आया हूँ अपनी आँखें झुकाकर।\nबचपन की तरह आज फिर कान पकड़कर उठक-बैठक लगा लूँ,\nबस एक बार मुस्कुरा दो पापा सारी नाराज़गी मिटाकर।',
    'Kamre ke darwaaze par sehma sa khada hoon himmat jutaakar,\nPapa aapse sorry kehne aaya hoon apni aankhein jhukaakar.\nBachpan ki tarah aaj phir kaan pakadkar uthak-baithak laga loon,\nBas ek baar muskura do Papa saari naraazgi mitaakar.',
    'Standing hesitantly by your doorway gathering quiet courage,\nI come with lowered eyes to say I am truly sorry, Papa.\nJust like childhood days I hold my ears asking forgiveness,\nSmile just once, Father, and wipe your displeasure away.',
    'SorryDad',
    303
  ],
  [
    'पापा आपकी सीख अनमोल',
    'दुनिया ने तो मेरी गलती पर सिर्फ तमाशा बनाया है,\nपर आपने डाँटकर भी मुझे गिरने से हमेशा बचाया है।\nनासमझ था जो आपके कड़वे सच को अपना दुश्मन समझा,\nमाफ़ कर दो पापा आज सच का उजाला समझ में आया है।',
    'Duniya ne toh meri galti par sirf tamaasha banaaya hai,\nPar aapne daantkar bhi mujhe girne se hamesha bachaaya hai.\nNaasamajh tha jo aapke kadwe sach ko apna dushman samjha,\nMaaf kar do Papa aaj sach ka ujaala samajh mein aaya hai.',
    'The outside world only mocked whenever I made a misstep,\nWhile you scolded me solely to shield me from falling deeper.\nHow naive I was to mistake your honest truth for harshness,\nForgive me, Papa—today the light of your wisdom shines clear.',
    'AnmolSeekh',
    299
  ],
  [
    'घर के मुखिया से क्षमा',
    'घर की हर ईंट में पापा आपके संयम की कहानी छुपी है,\nहमारी हर ख्वाहिश के पीछे आपकी क़ुर्बानी छुपी है।\nआज आपकी बात काटकर मैंने खुद अपने पैरों पर कुल्हाड़ी मारी,\nक्षमा करें पिताजी मेरे आँसुओं में मेरी ग्लानि छुपी है।',
    'Ghar ki har eent mein Papa aapke sanyam ki kahaani chhupi hai,\nHamaari har khwaahish ke peeche aapki qurbaani chhupi hai.\nAaj aapki baat kaatkar maine khud apne pairon par kulhaadi maari,\nKshama karein Pitaji mere aansuon mein meri glaani chhupi hai.',
    'Every brick of our home holds the story of your quiet endurance,\nBehind every fulfilled wish of ours rests your sacrifice.\nInterrupting your counsel today only harmed my own good,\nPardon me, Father—true remorse speaks within these tears.',
    'PitajiKshama',
    294
  ],
  [
    'पापा संग शाम की चाय',
    'शाम की चाय आपकी खामोशी के बिना कितनी अधूरी लगती है,\nएक ही छत के नीचे रहकर भी मीलों की दूरी लगती है।\nपापा इस फासले को अपनी एक मुस्कान से खत्म कर दो,\nआपकी माफ़ी मेरे जीने के लिए सबसे ज़रूरी लगती है।',
    'Shaam ki chai aapki khamoshi ke bina kitni adhoori lagti hai,\nEk hi chhat ke neeche rehkar bhi meelon ki doori lagti hai.\nPapa is faasle ko apni ek muskaan se khatm kar do,\nAapki maafi mere jeene ke liye sabse zaroori lagti hai.',
    'Evening tea feels painfully incomplete beneath this quietness,\nLiving under the same roof yet feeling miles apart hurts deeply.\nBridge this distance with a single forgiving smile, dear Papa,\nYour pardon means more to me than anything else in life.',
    'ShaamKiChai',
    290
  ],
  [
    'पिता के साये की क़ीमत',
    'जब तक सिर पर पिता का साया है हर मुश्किल आसान होती है,\nपापा आपकी एक शाबाशी से हौसलों में उड़ान होती है।\nगलती सुधारकर फिर से आपका गौरव बनूँगा यह वचन है,\nमाफ़ कर दो पापा आपसे ही मेरी हर पहचान होती है।',
    'Jab tak sir par pita ka saaya hai har mushkil aasaan hoti hai,\nPapa aapki ek shaabaashi se hauslon mein udaan hoti hai.\nGalti sudhaarkar phir se aapka gaurav banoonga yeh vachan hai,\nMaaf kar do Papa aapse hi meri har pehchan hoti hai.',
    'So long as a father’s shelter rests overhead, trials feel light,\nA single word of praise from you gives wings to my courage.\nCorrecting my fault, I vow to make you proud once more,\nForgive me, Papa—every part of who I am begins with you.',
    'PitaKaSaaya',
    285
  ],
  [
    'पापा का टूटा दिल जोड़ना है',
    'लाख मंदिर घूम लूँ पर घर में अगर पिता उदास बैठे हों,\nतो कैसे स्वीकार होगी पूजा जब अपने ही निराश बैठे हों।\nपापा आपके चरण धोकर आज अपनी भूल का प्रायश्चित करूँ,\nमेरे भगवान तो मेरे घर के आँगन के पास बैठे हैं।',
    'Laakh mandir ghoom loon par ghar mein agar pita udaas baithe hon,\nToh kaise sweekaar hogi pooja jab apne hi niraash baithe hon.\nPapa aapke charan dhokar aaj apni bhool ka praayashchit karoon,\nMere Bhagwan toh mere ghar ke aangan ke paas baithe hain.',
    'Visiting a thousand shrines means little if one’s father sits hurt,\nHow could any prayer rise while the pillar of home feels let down?\nAt your feet today I seek to mend every mistake I made,\nFor my truest temple dwells right here in your presence, Papa.',
    'PitaBhakti',
    281
  ],
  [
    'फ़ोन पर पापा को सॉरी',
    'शहर की दौड़ में आपके सवालों पर चिढ़ गया था मैं पापा,\nआप तो खैरियत पूछ रहे थे और बेवजह भिड़ गया था मैं पापा।\nफ़ोन रखते ही सीने में बहुत गहरा बोझ उतर आया है,\nसॉरी पापा अपनी ही नासमझी में गिर गया था मैं पापा।',
    'Shehar ki daud mein aapke sawaalon par chidh gaya tha main Papa,\nAap toh khairiyat pooch rahe the aur bewajah bhid gaya tha main Papa.\nPhone rakhte hi seene mein bahut gehra bojh utar aaya hai,\nSorry Papa apni hi naasamjhi mein gir gaya tha main Papa.',
    'Caught in city stress I grew impatient at your caring questions,\nYou were only checking on my wellbeing when I spoke sharply.\nThe moment the call ended, a heavy ache settled in my chest,\nSorry Papa—I stumbled badly in my own thoughtless haste.',
    'PhoneSorryPapa',
    277
  ],
  [
    'पापा का बड़ा दिल',
    'नारियल सा बाहर से सख्त पर भीतर अमृत सा मीठा मन है,\nपापा आपके अनुशासन से ही संवरा हमारा हर जीवन है।\nबच्चों के सौ अपराध भी पिता क्षमा कर देते हैं स्नेह से,\nआपके चरणों में मेरे अहंकार का आज पूर्ण समर्पण है।',
    'Naariyal sa baahar se sakht par bheetar amrit sa meetha mann hai,\nPapa aapke anushaasan se hi sanwra hamaara har jeevan hai.\nBacchon ke sau apraadh bhi pita kshama kar dete hain sneh se,\nAapke charnon mein mere ahankaar ka aaj poorn samarpan hai.',
    'Firm on the outside like a coconut yet sweet and tender within,\nYour steady discipline shaped every good habit in our lives.\nFathers graciously pardon even a hundred stumbles of their young,\nAt your feet today I surrender every trace of pride.',
    'BadaDilPapa',
    273
  ],
  [
    'पापा फिर से गले लगा लो',
    'बड़े होते-होते जाने कब आपसे गले मिलना कम हो गया,\nसंकोच की दीवार में दिल का सारा जज़्बात नम हो गया।\nआज सारी झिझक तोड़कर आपके सीने से लगना चाहता हूँ,\nमाफ़ कर दो पापा अपनी गलती से यह मन बहुत ग़म हो गया।',
    'Bade hote-hote jaane kab aapse gale milna kam ho gaya,\nSankoch ki deewaar mein dil ka saara jazbaat nam ho gaya.\nAaj saari jhijhak todkar aapke seene se lagna chaahta hoon,\nMaaf kar do Papa apni galti se yeh mann bahut gham ho gaya.',
    'Growing older, somehow hugs between us became all too rare,\nBehind quiet hesitation unspoken emotions gathered mist.\nBreaking past all reserve today, I just want to hug you tight,\nForgive me, Papa—my heart weighs heavy over my mistake.',
    'HugPapaSorry',
    269
  ],
  [
    'पापा के आशीर्वाद की छतरी',
    'बारिश हो या आँधी आपके साये ने कभी भीगने नहीं दिया,\nहालात कितने भी कठिन रहे आपने हमें टूटने नहीं दिया।\nमुझसे हुई इस चूक को क्षमा कर फिर वही स्नेह बरसाएँ,\nपापा आपके सिवा इस दुनिया में किसी ने इतना नहीं दिया।',
    'Baarish ho ya aandhi aapke saaye ne kabhi bheegne nahi diya,\nHaalaat kitne bhi kathin rahe aapne humein tootne nahi diya.\nMujhse hui is chook ko kshama kar phir wahi sneh barsaayein,\nPapa aapke siva is duniya mein kisi ne itna nahi diya.',
    'Through rain or storm your shelter never let hardship soak us,\nNo matter how tough times grew, you never let our spirits break.\nPardon this lapse of mine and shower your warmth once again,\nNobody in this world has ever given us as much as you, Papa.',
    'PapaBlessings',
    265
  ]
];

export const PAPA_SE_MAAFI_SHAYARIS: Shayari[] = PAPA_MAAFI_RAW.map(
  ([title, hindi, hinglish, english, tag, likes], index) => ({
    id: `maafi-papa-${index + 1}`,
    category: 'papa-se-maafi',
    subCategory: 'papa-se-maafi',
    categoryType: 'feelings',
    categoryName: 'Papa Se Maafi (पापा से माफ़ी)',
    categoryIcon: '👨‍👦',
    title,
    lines: hindi.split('\n'),
    linesHindi: hindi.split('\n'),
    linesHinglish: hinglish.split('\n'),
    linesEnglish: english.split('\n'),
    tags: ['PapaSeMaafi', 'SorryPapa', 'FatherSorryShayari', tag],
    author: 'ZQ-FEELINGS 💗',
    initialLikes: likes,
    commentsCount: 0,
    comments: []
  })
);
