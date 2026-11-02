import { Shayari } from '../../types/shayari';

type ChristianRawTuple = [
  title: string,
  hindi: string,
  hinglish: string,
  english: string,
  tag: string,
  likes: number
];

const CHRISTIAN_RAW: ChristianRawTuple[] = [
  [
    'प्रभु यीशु जीवन की ज्योति',
    'जगत की ज्योति बनकर प्रभु यीशु जब हृदय में आते हैं,\nअंधकार के गहरे साये पल भर में छँट जाते हैं।\nजो उनके पीछे चलता है भटकन से बच जाता है,\nजीवन की सच्ची रोशनी में नया सवेरा पाता है।',
    'Jagat ki jyoti bankar Prabhu Yeshu jab hriday mein aate hain,\nAndhkar ke gehre saaye pal bhar mein chhat jaate hain.\nJo unke peeche chalta hai bhatkan se bach jaata hai,\nJeevan ki sacchi roshni mein naya sawera paata hai.',
    'When Lord Jesus enters the heart as Light of the world,\nDeep shadows of inner darkness scatter in a moment.\nWhoever walks faithfully behind Him escapes wandering,\nFinding a radiant morning in the light of true life.',
    'LightOfTheWorld',
    392
  ],
  [
    'अच्छा चरवाहा प्रभु यीशु',
    'यहोवा मेरा चरवाहा है मुझे किसी बात की घटी नहीं,\nहरी चराइयों में चराता कृपा कभी उसकी हटी नहीं।\nमृत्यु की अंधेरी तराई में भी मैं भय न खाऊँगा,\nप्रभु की सोटी और लाठी से सदा तसल्ली पाऊँगा।',
    'Yahowa mera charwaha hai mujhe kisi baat ki ghati nahi,\nHari charaiyon mein charata kripa kabhi uski hati nahi.\nMrityu ki andheri tarai mein bhi main bhay na khaaunga,\nPrabhu ki soti aur laathi se sada tasalli paaunga.',
    'The Lord is my Shepherd and nothing needful shall I lack,\nLeading me gently beside still waters and green pastures.\nEven walking through the darkest valley I fear no harm,\nComforted forever by His guiding rod and staff.',
    'GoodShepherd',
    418
  ],
  [
    'मार्ग सत्य और जीवन',
    'मार्ग, सत्य और जीवन मैं हूँ यीशु का यह पावन वचन,\nभटकी हुई हर आत्मा को देता पिता के घर का अमन।\nदुनिया के रास्ते उलझाएँ पर मसीह सीधा पथ दिखाते हैं,\nटूटे हुए विश्वास को फिर से अपने हाथ उठाते हैं।',
    'Marg, satya aur jeevan main hoon Yeshu ka yah paawan vachan,\nBhatki hui har aatma ko deta Pita ke ghar ka aman.\nDuniya ke raaste uljhayein par Masih seedha path dikhate hain,\nToote hue vishwas ko phir se apne haath uthate hain.',
    'I am the Way, the Truth, and the Life — speaks Christ,\nLeading every weary soul homeward into Father’s peace.\nWhere earthly roads confuse, Jesus shows the clear path,\nLifting bruised faith gently within His nail-scarred hands.',
    'WayTruthLife',
    386
  ],
  [
    'थके और बोझ से दबों को विश्राम',
    'हे सब परिश्रम करने वालों मेरे पास तुम चले आओ,\nभारी बोझ से दबे हृदयों मुझमें सच्चा विश्राम पाओ।\nप्रभु का जुआ सहज बड़ा है और उनका बोझ हल्का है,\nयीशु के कोमल चरणों में आँसू भी मोती झलका है।',
    'He sab parishram karne walon mere paas tum chale aao,\nBhaari bojh se dabe hridayon mujhmein saccha vishram paao.\nPrabhu ka jua sahaj bada hai aur unka bojh halka hai,\nYeshu ke komal charnon mein aansu bhi moti jhalka hai.',
    'Come unto Me, all who labor beneath heavy burdens,\nAnd find deep rest for your weary souls in Christ.\nGentle is the Savior’s yoke and light is His grace,\nAt Jesus’ feet every quiet tear turns into peace.',
    'RestInChrist',
    404
  ],
  [
    'तूफ़ान को शांत करने वाला',
    'गलील की उठती लहरों को एक डाँट से शांत किया,\nडगमगाती नाव में बैठे चेलों को निर्भय प्रांत दिया।\nआज भी जीवन के सागर में जब आँधी घेर के आती है,\nयीशु की एक मधुर आवाज़ तूफ़ान को थाम दिखाती है।',
    'Galeel ki uthti lehron ko ek daant se shaant kiya,\nDagmagati naav mein baithe chelon ko nirbhay praant diya.\nAaj bhi jeevan ke sagar mein jab aandhi gher ke aati hai,\nYeshu ki ek madhur aawaz toofan ko thaam dikhati hai.',
    'With a single word He calmed the raging Sea of Galilee,\nRestoring fearless calm inside the disciples’ tossed boat.\nEven today when tempests gather across life’s waters,\nOne whisper from Jesus stills the storm within.',
    'PeaceBeStill',
    375
  ],
  [
    'खोई भेड़ को ढूँढता प्रेम',
    'निन्यानवे को छोड़ गड़रिया एक खोई भेड़ को खोजे,\nकाँटों से निकाल कंधे पर रख घर में आनंद संजोए।\nमसीह का प्रेम किसी भूले को कभी अकेला छोड़ता नहीं,\nपछतावे के एक आँसू से मुँह अपना मोड़ता नहीं।',
    'Ninyanve ko chhod gadariya ek khoi bhed ko khoje,\nKaanton se nikal kandhe par rakh ghar mein anand sanjoye.\nMasih ka prem kisi bhoole ko kabhi akela chhodta nahi,\nPachtawe ke ek aansu se munh apna modta nahi.',
    'Leaving the ninety-nine behind to seek one wandering sheep,\nLifting it gently from thorns upon rejoicing shoulders.\nChrist’s love never abandons a soul that lost its way,\nTurning tenderly toward every contrite tear.',
    'LostSheep',
    358
  ],
  [
    'कूस का निस्वार्थ बलिदान',
    'काँटों का ताज पहन सिर पर हमारे अपराध उठा लिए,\nक्रूस की असह्य पीड़ा सहकर क्षमा के द्वार खुला दिए।\nहे पिता इन्हें क्षमा कर यह प्रार्थना लब पर जारी थी,\nकलवरी के उस बलिदान में करुणा सब पर भारी थी।',
    'Kaanton ka taaj pehan sir par hamare aparadh utha liye,\nKroos ki asahya peeda sehkar kshama ke dwar khula diye.\nHe Pita inhein kshama kar yah prarthna lab par jaari thi,\nKalvari ke us balidan mein karuna sab par bhaari thi.',
    'Wearing a crown of thorns, He bore our transgressions,\nEnduring the Cross to fling open gates of pardon.\nFather, forgive them — echoed softly from His lips,\nOn Calvary’s hill, boundless mercy triumphed over pain.',
    'CalvaryCross',
    437
  ],
  [
    'उसके कोड़े खाने से चंगाई',
    'हमारे ही अपराधों के कारण प्रभु ने घाव सहे तन पर,\nउसके कोड़े खाने से उतरी चंगाई टूटे जीवन पर।\nजो दंड हमारे सिर पर था मसीह ने खुद स्वीकार किया,\nलहू बहाकर क्रूस ऊपर पापी का उद्धार किया।',
    'Hamare hi aparadhon ke kaaran Prabhu ne ghaav sahe tan par,\nUske kode khaane se utri changai toote jeevan par.\nJo dand hamare sir par tha Masih ne khud sweekar kiya,\nLahoo bahakar kroos oopar paapi ka uddhar kiya.',
    'Wounded for our transgressions and bruised for our guilt,\nBy His stripes deep healing flows into broken lives.\nBearing upon Himself the weight we could never carry,\nRedeeming humanity through sacrificial love on the Cross.',
    'HealingGrace',
    399
  ],
  [
    'खाली क़ब्र और जीवित आशा',
    'पत्थर लुढ़क गया द्वार से क़ब्र उसे रोक न पाई,\nतीसरे दिन जी उठकर प्रभु ने मृत्यु पर जय दिखलाई।\nहमारा उद्धारकर्ता जीवित है यही विश्वास का आधार,\nपुनरुत्थान की सामर्थ से खिल उठा उम्मीदों का संसार।',
    'Patthar ludhak gaya dwar se qabr use rok na paayi,\nTeesre din jee uthkar Prabhu ne mrityu par jay dikhlai.\nHamara Uddharkarta jeevit hai yahi vishwas ka aadhar,\nPunarutthan ki samarth se khil utha ummeedon ka sansar.',
    'The stone rolled back as death could never hold the Lord,\nRising victorious on the third day in radiant power.\nOur Redeemer lives — the unshakable cornerstone of faith,\nFilling every believing heart with resurrection hope.',
    'RisenSavior',
    415
  ],
  [
    'द्वार पर खटखटाता मसीह',
    'देख मैं द्वार पर खड़ा हुआ प्रेम से खटखटाता हूँ,\nजो कोई हृदय का द्वार खोले उसके संग प्रीति निभाता हूँ।\nज़बरदस्ती नहीं करता प्रभु बस कोमल पुकार सुनाता है,\nनम्र दिलों के आँगन में स्वर्गीय भोज सजाता है।',
    'Dekh main dwar par khada hua prem se khatkhatata hoon,\nJo koi hriday ka dwar khole uske sang preeti nibhata hoon.\nZabardasti nahi karta Prabhu bas komal pukar sunata hai,\nNamra dilon ke aangan mein swargiya bhoj sajata hai.',
    'Behold, I stand at the door and knock in gentle love,\nEntering gladly wherever a welcoming heart opens wide.\nNever forcing entry, the Savior calls with tender grace,\nSharing heavenly fellowship inside humble souls.',
    'OpenHeart',
    352
  ],
  [
    'पवित्र बाइबल पाँवों का दीपक',
    'तेरा वचन मेरे पाँवों के लिए जलता हुआ दीपक है,\nअंधियारे मोड़ों पर प्रभु जी मेरे मार्ग का उजियाला है।\nआकाश और पृथ्वी टल जाएँ पर प्रभु की बात न टलेगी,\nबाइबल के हर एक वादे से आत्मा को शक्ति मिलेगी।',
    'Tera vachan mere paanvon ke liye jalta hua deepak hai,\nAndhiyare modon par Prabhu ji mere marg ka ujiyala hai.\nAakash aur prithvi tal jaayein par Prabhu ki baat na talegi,\nBible ke har ek waade se aatma ko shakti milegi.',
    'Your Word is a steady lamp unto my walking feet,\nAnd a clear light shining across every shadowed turn.\nHeaven and earth may pass, yet God’s Word stands firm,\nStrengthening the spirit through every Scripture promise.',
    'HolyBible',
    423
  ],
  [
    'केवल रोटी से नहीं वचन से जीवन',
    'केवल रोटी से ही मनुष्य का जीवन पूर्ण नहीं होता,\nपरमेश्वर के मुख के वचन से अंतर्मन निर्मल होता।\nसुबह सवेरे बाइबल खोलो स्वर्गीय मन्ना पाओगे,\nपरीक्षा की हर घड़ी में विजयी होकर आओगे।',
    'Kewal roti se hi manushya ka jeevan poorna nahi hota,\nParmeshwar ke mukh ke vachan se antarman nirmal hota.\nSubah sawere Bible kholo swargiya manna paaoge,\nPariksha ki har ghadi mein vijayi hokar aaoge.',
    'Humanity lives not by earthly bread alone each day,\nRather by every living word proceeding from God.\nOpen the Scriptures at dawn to gather heavenly manna,\nStanding victorious through every hour of testing.',
    'LivingWord',
    361
  ],
  [
    'भजन संहिता का दिलासा',
    'रोने की रात चाहे लंबी हो सवेरे आनंद आता है,\nभजन संहिता का मधुर गीत टूटे मन को सहलाता है।\nपरमेश्वर टूटे मन वालों के अत्यंत समीप रहता है,\nपिसे हुए हर हृदय के घावों पर मरहम रखता है।',
    'Rone ki raat chaahe lambi ho sawere anand aata hai,\nBhajan Sanhita ka madhur geet toote mann ko sehlata hai.\nParmeshwar toote mann walon ke atyant sameep rehta hai,\nPise hue har hriday ke ghaavon par marham rakhta hai.',
    'Weeping may tarry through the night, yet joy comes at dawn,\nSweet Psalms cradle the weary spirit in divine comfort.\nNear is the Lord always to every brokenhearted soul,\nBinding up wounded hearts with tender compassion.',
    'PsalmsComfort',
    388
  ],
  [
    'नीतिवचन की स्वर्गीय बुद्धि',
    'यहोवा का भय मानना ही सच्ची बुद्धि का आरंभ है,\nअपनी समझ का सहारा न ले यह अहंकार का दंभ है।\nसंपूर्ण मन से प्रभु पर भरोसा कर वह सीधा पथ बनाएगा,\nनीतिवचन का खरा ज्ञान जीवन को सुंदर सजाएगा।',
    'Yahowa ka bhay maanna hi sacchi buddhi ka aarambh hai,\nApni samajh ka sahara na le yah ahankar ka dambh hai.\nSampoorna mann se Prabhu par bharosa kar wah seedha path banayega,\nNitivachan ka khara gyan jeevan ko sundar sajayega.',
    'Reverence for the Lord marks the beginning of wisdom,\nLean not upon frail human understanding alone.\nTrust God wholeheartedly and He shall direct your steps,\nAdorning daily conduct with timeless discernment.',
    'ProverbsWisdom',
    347
  ],
  [
    'जीवित और प्रबल वचन',
    'परमेश्वर का वचन जीवित है और हर दुधारी से चोखा,\nमन की भावनाओं और विचारों को परखे बिना किसी धोखा।\nजब वचन हृदय की भूमि में गहरी जड़ पकड़ लेता है,\nतीस, साठ और सौ गुना आत्मिक फल उपजा देता है।',
    'Parmeshwar ka vachan jeevit hai aur har dudhari se chokha,\nMann ki bhavnaon aur vicharon ko parkhe bina kisi dhokha.\nJab vachan hriday ki bhoomi mein gehri jad pakad leta hai,\nTees, saath aur sau guna aatmik phal upja deta hai.',
    'Living and active is the Word of God within the soul,\nDiscerning inner motives with crystal spiritual truth.\nRooted deeply inside receptive soil of the heart,\nIt yields a harvest thirty, sixty, and a hundredfold.',
    'SeedOfWord',
    334
  ],
  [
    'पहाड़ी उपदेश के धन्य वचन',
    'धन्य हैं वे जो मन के दीन हैं स्वर्ग का राज्य उन्हीं का है,\nधन्य हैं वे जो दयावंत हैं दया का ताज उन्हीं का है।\nमेल कराने वाले जग में परमेश्वर के पुत्र कहलाएँगे,\nशुद्ध मन वाले निश्चय ही प्रभु का दर्शन पाएँगे।',
    'Dhanya hain ve jo mann ke deen hain swarg ka rajya unhin ka hai,\nDhanya hain ve jo dayawant hain daya ka taaj unhin ka hai.\nMel karane wale jag mein Parmeshwar ke putra kehlayenge,\nShuddh mann wale nishchay hi Prabhu ka darshan paayenge.',
    'Blessed are the poor in spirit, for theirs is heaven’s realm,\nBlessed are the merciful, for mercy shall embrace them.\nPeacemakers shall be honored as children of the Most High,\nAnd the pure in heart shall surely behold God.',
    'Beatitudes',
    409
  ],
  [
    'राई के दाने बराबर विश्वास',
    'राई के दाने जितना भी यदि अटल विश्वास जगा लोगे,\nबाधाओं के ऊँचे पर्वत को मार्ग से अपने हटा दोगे।\nसंदेह की लहरों को छोड़ नज़र यीशु पर टिकाए रख,\nअसंभव भी संभव होगा बस विश्वास की लौ जलाए रख।',
    'Raai ke daane jitna bhi yadi atal vishwas jaga loge,\nBadhaon ke oonche parvat ko marg se apne hata doge.\nSandeh ki lehron ko chhod nazar Yeshu par tikaye rakh,\nAsambhav bhi sambhav hoga bas vishwas ki lau jalaye rakh.',
    'Faith even as small as a mustard seed anchored in God,\nMoves towering mountains of obstacle out of the path.\nLift your eyes past restless waves unto Jesus alone,\nWhere human strength ends, faith sees miracles unfold.',
    'MustardSeedFaith',
    412
  ],
  [
    'अनदेखी वस्तुओं का निश्चय',
    'आशा की हुई वस्तुओं का निश्चय ही सच्चा विश्वास है,\nआँखों से जो अभी न दिखे फिर भी रूह को अहसास है।\nपरिस्थितियाँ विपरीत दिखें पर प्रतिज्ञा सच्ची है प्रभु की,\nविश्वास से चलने वालों की नाव कभी नहीं डूबी।',
    'Aasha ki hui vastuon ka nishchay hi saccha vishwas hai,\nAankhon se jo abhi na dikhe phir bhi rooh ko ehsas hai.\nParisthitiyan vipreet dikhein par pratigya sacchi hai Prabhu ki,\nVishwas se chalne walon ki naav kabhi nahi doobi.',
    'Faith is the assurance of blessings earnestly hoped for,\nPerceiving unseen promises clearly with spiritual eyes.\nEven when outward winds blow contrary to expectation,\nVessels steered by faith never sink beneath the waves.',
    'WalkByFaith',
    366
  ],
  [
    'मसीह में मैं सब कुछ कर सकता हूँ',
    'जो मुझे सामर्थ देता है उसमें सब कुछ कर सकता हूँ,\nकमी और बहुतायत दोनों में संतुष्ट हृदय रह सकता हूँ।\nमेरी शक्ति सीमित सही पर मेरे प्रभु की असीम है,\nमसीह के संग हर कठिन चढ़ाई बन जाती सुगम अजीम है।',
    'Jo mujhe samarth deta hai usmein sab kuch kar sakta hoon,\nKami aur bahutayat dono mein santusht hriday reh sakta hoon.\nMeri shakti seemit sahi par mere Prabhu ki aseem hai,\nMasih ke sang har kathin chadhai ban jaati sugam ajeem hai.',
    'I can do all things through Christ who strengthens me,\nAbiding content alike in humble need or abundance.\nFinite is my strength, yet boundless is my Savior’s power,\nWith Christ beside me, steep climbs turn passable.',
    'StrengthInChrist',
    431
  ],
  [
    'भय मत खा मैं तेरे संग हूँ',
    'मत डर क्योंकि मैं तेरे संग हूँ इधर-उधर मत ताक कभी,\nमैं तेरा परमेश्वर हूँ तुझे दृढ़ करूँगा थाम सभी।\nधर्म के दाहिने हाथ से प्रभु संभाल के रखेगा तुझको,\nयशायाह की यह अमर प्रतिज्ञा हिम्मत देती है मुझको।',
    'Mat dar kyonki main tere sang hoon idhar-udhar mat taak kabhi,\nMain tera Parmeshwar hoon tujhe dridh karunga thaam sabhi.\nDharm ke dahine haath se Prabhu sambhal ke rakhega tujhko,\nYashayah ki yah amar pratigya himmat deti hai mujhko.',
    'Fear not, for I am with you; be never dismayed,\nI am your God who strengthens and upholds your steps.\nSustained securely by His righteous right hand,\nIsaiah’s timeless promise breathes courage inside.',
    'FearNot',
    397
  ],
  [
    'आशा जो लज्जित नहीं करती',
    'प्रभु में रखी हुई आशा कभी लज्जित होने न देगी,\nपवित्र आत्मा के प्रेम से सूनी झोली भर देगी।\nधैर्य से बाट जोहने वाले उकाबों की नाईं उड़ेंगे,\nदौड़ेंगे और श्रमित न होंगे नित नई ऊर्जा से जुड़ेंगे।',
    'Prabhu mein rakhi hui aasha kabhi lajjit hone na degi,\nPavitra Aatma ke prem se sooni jholi bhar degi.\nDhairya se baat johne wale ukaabon ki naain udenge,\nDaudenge aur shramit na honge nit nayi oorja se judenge.',
    'Hope anchored in the Lord never puts the soul to shame,\nPouring divine love richly across every waiting heart.\nThose who wait upon the Lord mount up with eagles’ wings,\nRunning without weariness and walking without fainting.',
    'EaglesWings',
    384
  ],
  [
    'भलाई की योजनाएँ',
    'जो कल्पनाएँ प्रभु हमारे विषय में सदा रखता है,\nहानि की नहीं वे कुशल और उज्ज्वल भविष्य की कहता है।\nबंद दरवाज़ों के पीछे भी नया द्वार तैयार किया,\nपरमेश्वर के समय ने हर प्रार्थना का सत्कार किया।',
    'Jo kalpanayein Prabhu hamare vishay mein sada rakhta hai,\nHaani ki nahi ve kushal aur ujjwal bhavishya ki kehta hai.\nBand darwazon ke peeche bhi naya dwar taiyar kiya,\nParmeshwar ke samay ne har prarthna ka satkar kiya.',
    'God’s plans for His children are plans of peace and welfare,\nCrafting a hopeful future beyond present uncertainty.\nBehind every closed door He prepares a wiser way,\nHonoring faithful prayer in His perfect season.',
    'PlansOfHope',
    402
  ],
  [
    'आत्मा का मज़बूत लंगर',
    'मसीही आशा हमारी आत्मा का अटल और दृढ़ लंगर है,\nलहरें चाहे जितनी उछलें भीतर गहरा अमन का घर है।\nसंसार की आशाएँ टूटें पर स्वर्गीय आशा अमर रहे,\nयीशु के नाम के आश्रय में हर दिन निर्भय बसर रहे।',
    'Masihi aasha hamari aatma ka atal aur dridh langar hai,\nLehrein chaahe jitni uchhlein bheetar gehra aman ka ghar hai.\nSansar ki aashayein tootein par swargiya aasha amar rahe,\nYeshu ke naam ke aashray mein har din nirbhay basar rahe.',
    'Christian hope serves as a steadfast anchor for the soul,\nHolding firm inside deep peace while outer waves surge.\nEarthly expectations fade, yet heavenly hope endures,\nKeeping every day sheltered safely in Jesus’ name.',
    'SoulAnchor',
    343
  ],
  [
    'सब बातें मिलकर भलाई उत्पन्न करें',
    'प्रेम रखने वालों के लिए सब बातें मिलकर भलाई करें,\nआज के कड़वे अनुभव भी कल सुंदर गवाही बनें।\nकुम्हार के हाथों में मिट्टी को जब आकार नया मिलता है,\nथोड़ी तपन के बाद ही अनमोल पात्र खिलता है।',
    'Prem rakhne walon ke liye sab baatein milkar bhalai karein,\nAaj ke kadwe anubhav bhi kal sundar gawahi banein.\nKumhar ke haathon mein mitti ko jab aakar naya milta hai,\nThodi tapan ke baad hi anmol paatra khilta hai.',
    'All things work together for good to those who love God,\nTurning today’s hard trials into tomorrow’s testimony.\nShaped gently within the Master Potter’s loving hands,\nYielding clay emerges a vessel of noble purpose.',
    'MasterPotter',
    378
  ],
  [
    'परमेश्वर प्रेम है',
    'परमेश्वर स्वयं प्रेम है और प्रेम में भय नहीं रहता,\nसच्चा अगापे प्रेम कभी बदले की शर्त नहीं कहता।\nहम इसलिए प्रेम करते हैं क्योंकि पहले उसने प्रेम किया,\nजगत के उद्धार हेतु अपना इकलौता पुत्र दिया।',
    'Parmeshwar swayam prem hai aur prem mein bhay nahi rehta,\nSaccha Agape prem kabhi badle ki shart nahi kehta.\nHum isliye prem karte hain kyonki pehle usne prem kiya,\nJagat ke uddhar hetu apna iklauta Putra diya.',
    'God Himself is love, and perfect love casts out all fear,\nUnconditional Agape seeks nothing selfish in return.\nWe love because the Father first loved us completely,\nGiving His Beloved Son for the redemption of the world.',
    'GodIsLove',
    429
  ],
  [
    'प्रेम धीरजवंत और कृपालु है',
    'प्रेम धीरजवंत है कृपालु है प्रेम कभी डाह नहीं करता,\nअपनी बड़ाई नहीं हाँकता बुराई का हिसाब नहीं रखता।\nविश्वास, आशा और प्रेम ये तीनों सदा बने रहते हैं,\nपर इन तीनों में सबसे महान प्रेम को वचन कहते हैं।',
    'Prem dheerajwant hai kripalu hai prem kabhi daah nahi karta,\nApni badai nahi haankta burai ka hisab nahi rakhta.\nVishwas, aasha aur prem ye teeno sada bane rehte hain,\nPar in teeno mein sabse mahan prem ko vachan kehte hain.',
    'Love is patient and kind, keeping no record of wrongs,\nNever boastful nor envious, rejoicing always in truth.\nFaith, hope, and love abide forever side by side,\nYet greatest among these three stands enduring love.',
    'CorinthiansLove',
    416
  ],
  [
    'पड़ोसी से अपने समान प्रेम',
    'परमेश्वर से प्रेम करो और पड़ोसी को अपना मानो,\nहर दीन-दुखी की सेवा को प्रभु की ही सेवा जानो।\nजो अपने भाई से वैर रखे वह रब से प्रेम कैसे करे,\nदयालु सामरी बनकर घावों पर स्नेह का तेल भरे।',
    'Parmeshwar se prem karo aur padosi ko apna maano,\nHar deen-dukhi ki sewa ko Prabhu ki hi sewa jaano.\nJo apne bhai se vair rakhe wah Rab se prem kaise kare,\nDayalu Samari bankar ghaavon par sneh ka tel bhare.',
    'Love the Lord deeply and love your neighbor as yourself,\nServing Christ whenever kindness touches one in need.\nWalk gently like the Good Samaritan along life’s road,\nPouring healing oil of mercy upon wounded hearts.',
    'LoveYourNeighbor',
    356
  ],
  [
    'शत्रुओं के लिए भी आशीष',
    'सताने वालों के लिए भी मसीह ने दुआ करना सिखाया,\nबुराई को भलाई से जीतने का ऊँचा मार्ग दिखाया।\nशाप के बदले आशीष देना आसान नहीं दुनिया में,\nपर यीशु का स्वभाव झलकता इसी मधुर करुणा में।',
    'Satane walon ke liye bhi Masih ne dua karna sikhaya,\nBurai ko bhalai se jeetne ka ooncha marg dikhaya.\nShaap ke badle aashish dena aasan nahi duniya mein,\nPar Yeshu ka swabhav jhalakta isi madhur karuna mein.',
    'Christ taught us to pray even for those who oppose us,\nOvercoming bitterness through steadfast goodness.\nReturning blessing for harshness transcends human habit,\nReflecting the gentle likeness of our Savior’s heart.',
    'BlessAndForgive',
    364
  ],
  [
    'प्रार्थना की गुप्त कोठरी',
    'द्वार बंद कर गुप्त कोठरी में जब पिता से बात करोगे,\nदिखावे से दूर हृदय के सच्चे जज़्बात धरोगे।\nजो गुप्त में देखता है पिता वह प्रगट में प्रतिफल देगा,\nघुटनों पर लड़ी हर जंग में प्रभु स्वयं विजय भर देगा।',
    'Dwar band kar gupt kothri mein jab Pita se baat karoge,\nDikhawe se door hriday ke sacche jazbaat dharoge.\nJo gupt mein dekhta hai Pita wah pragat mein pratiphal dega,\nGhutnon par ladi har jang mein Prabhu swayam vijay bhar dega.',
    'Enter the quiet chamber and commune with your Father,\nPouring out honest prayers far from outward display.\nThe Father who sees in secret rewards openly in grace,\nGranting victory in battles fought humbly on one’s knees.',
    'SecretPrayer',
    393
  ],
  [
    'माँगो तो तुम्हें दिया जाएगा',
    'माँगो तो दिया जाएगा ढूँढो तो निश्चय तुम पाओगे,\nविश्वास से खटखटाओ तो खुला स्वर्ग द्वार पाओगे।\nसारी चिंता के बदले प्रार्थना और निवेदन चढ़ा दो,\nसमझ से परे परमेश्वर की शांति से हृदय सजा दो।',
    'Maango toh diya jaayega dhoondho toh nishchay tum paaoge,\nVishwas se khatkhatao toh khula swarg dwar paaoge.\nSaari chinta ke badle prarthna aur nivedan chadha do,\nSamajh se pare Parmeshwar ki shanti se hriday saja do.',
    'Ask and receive, seek sincerely and you shall find,\nKnock in trusting prayer and heaven’s door opens wide.\nTrade every anxious thought for thanksgiving and petition,\nAs peace beyond understanding guards heart and mind.',
    'AskSeekKnock',
    408
  ],
  [
    'हे हमारे स्वर्गीय पिता',
    'हे हमारे पिता तू जो स्वर्ग में है तेरा नाम पवित्र माना जाए,\nतेरी इच्छा जैसे स्वर्ग में वैसे पृथ्वी पर पूरी हो जाए।\nआज की दिन भर की रोटी हमें अनुग्रह से दे दाता,\nक्षमा कर अपराध हमारे जैसे हम भी क्षमा निभाता।',
    'He hamare Pita tu jo swarg mein hai tera naam pavitra maana jaaye,\nTeri iccha jaise swarg mein waise prithvi par poori ho jaaye.\nAaj ki din bhar ki roti hamein anugrah se de Daata,\nKshama kar aparadh hamare jaise hum bhi kshama nibhata.',
    'Our Father in heaven, hallowed forever be Your Name,\nMay Your kingdom come and Your will be done on earth.\nGrant us this day our daily bread in tender mercy,\nForgiving our debts as we forgive one another.',
    'LordsPrayer',
    442
  ],
  [
    'जहाँ दो या तीन इकट्ठे हों',
    'जहाँ दो या तीन यीशु के नाम पर एकत्र हो जाते हैं,\nप्रभु स्वयं उनके मध्य अपनी उपस्थिति दर्शाते हैं।\nएक मन होकर की गई प्रार्थना स्वर्ग के द्वार हिलाती है,\nबंदीगृह की ज़ंजीरें भी स्तुति से खुल जाती हैं।',
    'Jahan do ya teen Yeshu ke naam par ekatra ho jaate hain,\nPrabhu swayam unke madhya apni upasthiti darshate hain.\nEk mann hokar ki gayi prarthna swarg ke dwar hilati hai,\nBandigrih ki zanjeerein bhi stuti se khul jaati hain.',
    'Where two or three gather together in Jesus’ Name,\nThere stands the living Lord right in their midst.\nUnited prayer moves heaven and loosens heavy chains,\nJust as midnight praise shook prison doors wide open.',
    'UnitedPrayer',
    371
  ],
  [
    'निरंतर प्रार्थना और धन्यवाद',
    'निरंतर प्रार्थना में लगे रहो हर बात में धन्यवाद करो,\nकठिन घड़ी में भी स्तुति के गीतों से आँगन भरो।\nजब शब्द न मिलें बोलने को आत्मा स्वयं विनती करता है,\nहर मूक सिसकी का अर्थ हमारा स्वर्गीय पिता समझता है।',
    'Nirantar prarthna mein lage raho har baat mein dhanyavad karo,\nKathin ghadi mein bhi stuti ke geeton se aangan bharo.\nJab shabd na milein bolne ko Aatma swayam vinti karta hai,\nHar mook siski ka arth hamara swargiya Pita samajhta hai.',
    'Pray without ceasing and give thanks in every circumstance,\nFilling even testing hours with songs of grateful praise.\nWhen words fall short, the Spirit intercedes tenderly,\nTranslating every silent sigh before the Father.',
    'PrayUnceasingly',
    359
  ],
  [
    'अद्भुत अनुग्रह की महिमा',
    'अद्भुत अनुग्रह कितना मधुर जिसने मुझ भूले को बचाया,\nखोया हुआ था मिल गया मैं अंधी आँखों ने नूर पाया।\nमेरे कर्मों का मोल नहीं यह केवल प्रभु का वरदान है,\nअनुग्रह ही के द्वारा विश्वास से होता सदा कल्याण है।',
    'Adbhut anugrah kitna madhur jisne mujh bhoole ko bachaya,\nKhoya hua tha mil gaya main andhi aankhon ne noor paaya.\nMere karmon ka mol nahi yah kewal Prabhu ka vardan hai,\nAnugrah hi ke dwara vishwas se hota sada kalyan hai.',
    'Amazing grace, how sweet the sound that saved a soul,\nOnce lost in wandering, now found and given clear sight.\nSalvation rests not in boasting, rather in God’s pure gift,\nReceived by faith through boundless heavenly grace.',
    'AmazingGrace',
    438
  ],
  [
    'मेरा अनुग्रह तेरे लिए बहुत है',
    'मेरा अनुग्रह तेरे लिए बहुत है प्रभु ने प्रेम से कहा,\nक्योंकि मेरी सामर्थ निर्बलता में ही सिद्ध होती सदा।\nअपनी कमज़ोरी से मत घबरा प्रभु की शक्ति तुझ पर छाएगी,\nअनुग्रह की नदी सूखे मरुस्थल में भी राह बनाएगी।',
    'Mera anugrah tere liye bahut hai Prabhu ne prem se kaha,\nKyonki meri samarth nirbalta mein hi siddh hoti sada.\nApni kamzori se mat ghabra Prabhu ki shakti tujh par chhayegi,\nAnugrah ki nadi sookhe marusthal mein bhi raah banayegi.',
    'My grace is sufficient for you — speaks the Savior,\nFor Divine power shines fullest amid human weakness.\nFret not over frailty when Christ’s strength rests on you,\nCarving rivers of grace across parched desert ground.',
    'SufficientGrace',
    406
  ],
  [
    'प्रतिदिन नई करुणा',
    'यहोवा की महाकरुणा का अंत कभी नहीं होता है,\nहर भोर उसकी नई दया ओस की बूँद सी पिरोता है।\nबीते कल की भूलों को क्रूस के लहू ने धो डाला,\nमसीह में जो कोई है वह बन गया नई सृष्टि उजाला।',
    'Yahowa ki mahakaruna ka ant kabhi nahi hota hai,\nHar bhor uski nayi daya os ki boond si pirota hai.\nBeete kal ki bhoolon ko kroos ke lahoo ne dho daala,\nMasih mein jo koi hai wah ban gaya nayi srishti ujala.',
    'Steadfast mercies of the Lord never come to an end,\nFresh every morning like glistening drops of dawn dew.\nYesterday’s stains are washed clean through redeeming grace,\nMaking everyone in Christ a brand-new creation.',
    'NewEveryMorning',
    382
  ],
  [
    'सत्तर गुने सात बार क्षमा',
    'सात बार नहीं सत्तर गुने सात बार क्षमा करना सीखो,\nमन से कड़वाहट निकाल कर मसीह सा कोमल दिखो।\nक्षमा करने से क़ैदी नहीं खुद अपना दिल आज़ाद होता है,\nजहाँ क्षमा और अनुग्रह बसें वहीं स्वर्ग आबाद होता है।',
    'Saat baar nahi sattar gune saat baar kshama karna seekho,\nMann se kadwahat nikal kar Masih sa komal dikho.\nKshama karne se qaidi nahi khud apna dil aazad hota hai,\nJahan kshama aur anugrah basein wahin swarg aabad hota hai.',
    'Forgive not seven times only, rather seventy times seven,\nReleasing bitterness to mirror Christ’s gentle spirit.\nForgiveness sets free the heart that chooses mercy,\nBringing heaven’s peace into earthly relationships.',
    'ForgivingHeart',
    349
  ],
  [
    'अनुग्रह के सिंहासन के पास',
    'हियाव बाँध कर अनुग्रह के सिंहासन के निकट हम चलें,\nदया और समय पर सहायता पाने प्रभु की छाँव में पलें।\nदोष लगाने वाली आवाज़ों को यीशु ने शांत कर दिया,\nराजाओं के राजा ने हमें अपनी संतान का मान दिया।',
    'Hiyav baandh kar anugrah ke sinhasan ke nikat hum chalein,\nDaya aur samay par sahayata paane Prabhu ki chhaanv mein palein.\nDosh lagane wali aawazon ko Yeshu ne shaant kar diya,\nRajaon ke Raja ne hamein apni santan ka maan diya.',
    'Approach with confidence the throne of heavenly grace,\nReceiving mercy and timely help in every hour of need.\nEvery condemning whisper fades before the Redeemer,\nAs the King of Kings welcomes us home as children.',
    'ThroneOfGrace',
    368
  ],
  [
    'पवित्र आत्मा सहायक और शांतिदाता',
    'शांति मैं तुम्हें दिए जाता हूँ अपनी शांति तुम्हें देता हूँ,\nजैसा संसार देता है वैसा अधूरा दान नहीं देता हूँ।\nपवित्र आत्मा सहायक बनकर भीतर से राह सुझाता है,\nव्याकुल मन में प्रेम, आनंद और संयम के फल उगाता है।',
    'Shanti main tumhein diye jaata hoon apni shanti tumhein deta hoon,\nJaisa sansar deta hai waisa adhura daan nahi deta hoon.\nPavitra Aatma sahayak bankar bheetar se raah sujhata hai,\nVyakul mann mein prem, anand aur sanyam ke phal ugata hai.',
    'Peace I leave with you; My own peace I freely give,\nFar deeper than fleeting calm the world offers.\nThe Holy Spirit counsels gently from within the soul,\nGrowing fruits of love, joy, kindness, and self-control.',
    'FruitOfTheSpirit',
    394
  ],
  [
    'गिरजाघर की पावन संगति',
    'गिरजाघर की घंटियों संग जब आराधना के गीत उठें,\nभाईचारे और एकता में जुड़े हुए सब हाथ उठें।\nसंगति को न छोड़ना कभी आपस में प्रेम बढ़ाते रहो,\nएक-दूसरे का भार उठा मसीह की व्यवस्था निभाते रहो।',
    'Girjaghar ki ghantiyon sang jab aaradhna ke geet uthein,\nBhaichare aur ekta mein jude hue sab haath uthein.\nSangati ko na chhodna kabhi aapas mein prem badhate raho,\nEk-doosre ka bhaar utha Masih ki vyavastha nibhate raho.',
    'When hymns of worship rise inside the sanctuary walls,\nHearts unite warmly in fellowship and shared devotion.\nBear one another’s burdens in tender Christian care,\nFulfilling together the joyful law of Christ.',
    'ChurchFellowship',
    376
  ],
  [
    'आत्मा और सच्चाई से आराधना',
    'सच्चे आराधक आत्मा और सच्चाई से आराधना करते हैं,\nकेवल होंठों से नहीं पूरे टूटे हृदय से झुकते हैं।\nहालेलुयाह और होशन्ना से जब अंतर्मन गूँज उठता है,\nनिराशा का भारी लबादा स्तुति के वस्त्र में बदलता है।',
    'Sacche aaradhak aatma aur sacchai se aaradhna karte hain,\nKewal honthon se nahi poore toote hriday se jhukte hain.\nHallelujah aur Hosanna se jab antarman goonj uthta hai,\nNirasha ka bhaari labada stuti ke vastra mein badalta hai.',
    'True worshippers bow before the Father in spirit and truth,\nOffering sincere hearts rather than outward form alone.\nWhen Hallelujah rises warmly from within the soul,\nGarments of praise replace heaviness of spirit.',
    'WorshipInTruth',
    385
  ],
  [
    'पृथ्वी का नमक और उजियाला',
    'तुम पृथ्वी के नमक हो और ऊँचे पहाड़ पर बसा नगर,\nतुम्हारे भले कामों से चमके पिता की महिमा डगर-डगर।\nदीपक जला कर पैमाने नीचे कोई छुपा के रखता नहीं,\nमसीही चरित्र की सुगंध से अंधियारा कभी टिकता नहीं।',
    'Tum prithvi ke namak ho aur oonche pahad par basa nagar,\nTumhare bhale kaamon se chamke Pita ki mahima dagar-dagar.\nDeepak jala kar paimane neeche koi chhupa ke rakhta nahi,\nMasihi charitra ki sugandh se andhiyara kabhi tikta nahi.',
    'You are the salt of the earth and a city on a hill,\nLetting good deeds shine glory unto the Father above.\nNo lighted lamp is hidden beneath a basket in the dark,\nRadiate Christlike kindness wherever footsteps lead.',
    'SaltAndLight',
    362
  ],
  [
    'सच्ची दाख़लता और डालियाँ',
    'मैं सच्ची दाख़लता हूँ और तुम सब मेरी डालियाँ हो,\nमुझमें बने रहो तो जीवन में मीठे फल की थालियाँ हो।\nमसीह से अलग होकर डाली स्वयं कुछ कर नहीं सकती,\nप्रभु के प्रेम रस के बिना रूह कभी हरी रह नहीं सकती।',
    'Main sacchi daakhlata hoon aur tum sab meri daaliyan ho,\nMujhmein bane raho toh jeevan mein meethe phal ki thaaliyan ho.\nMasih se alag hokar daali swayam kuch kar nahi sakti,\nPrabhu ke prem ras ke bina rooh kabhi hari reh nahi sakti.',
    'I am the True Vine and you are the living branches,\nAbiding closely in Christ brings forth abundant fruit.\nApart from the Savior no branch sustains its own bloom,\nNourished forever by the sap of Divine love.',
    'TrueVine',
    373
  ],
  [
    'चट्टान पर बना हुआ घर',
    'जो यीशु के वचन सुनकर उन्हें आचरण में उतारता है,\nचट्टान पर नींव रखकर अपना घर बुद्धि से सँवारता है।\nबाढ़ आई और आँधी चली पर वह घर तनिक हिला नहीं,\nवचन की चट्टान सा पक्का आसरा कहीं और मिला नहीं।',
    'Jo Yeshu ke vachan sunkar unhein aacharan mein utarta hai,\nChattan par neev rakhkar apna ghar buddhi se sanwarta hai.\nBaadh aayi aur aandhi chali par wah ghar tanik hila nahi,\nVachan ki chattan sa pakka aasra kahin aur mila nahi.',
    'Whoever hears Christ’s words and puts them into practice,\nBuilds wisely upon solid rock rather than shifting sand.\nThough rain descends and fierce winds beat against the walls,\nUnmoved stands every life anchored in God’s Word.',
    'SolidRock',
    391
  ],
  [
    'परमेश्वर का पूरे कवच से सुसज्जित',
    'सत्य से कमर कस कर धार्मिकता की झिलम पहन चलो,\nविश्वास की ढाल थाम कर हर जलते तीर को सहन चलो।\nउद्धार का टोप और आत्मा की तलवार जो प्रभु वचन है,\nप्रार्थना में जागृत रहने वाले का सुरक्षित जीवन है।',
    'Satya se kamar kas kar dharmikta ki jhilam pehan chalo,\nVishwas ki dhaal thaam kar har jalte teer ko sahan chalo.\nUddhar ka top aur Aatma ki talwar jo Prabhu vachan hai,\nPrarthna mein jagrit rehne wale ka surakshit jeevan hai.',
    'Stand clothed in truth and the breastplate of righteousness,\nLifting the shield of faith against every fiery dart.\nCrowned with salvation and armed with the Spirit’s Word,\nStay watchful in prayer with steady spiritual courage.',
    'ArmorOfGod',
    367
  ],
  [
    'नम्रता और सेवा का तौलिया',
    'गुरु और प्रभु होकर भी यीशु ने चेलों के पाँव धोए,\nसेवा और नम्रता के मोती आचरण में अपने पिरोए।\nबड़ा वही कहलाएगा जो सबका सेवक बनना जाने,\nदूसरों को आदर देकर मसीह की कोमल रीति माने।',
    'Guru aur Prabhu hokar bhi Yeshu ne chelon ke paanv dhoye,\nSewa aur namrata ke moti aacharan mein apne piroye.\nBada wahi kehlayega jo sabka sewak banna jaane,\nDoosron ko aadar dekar Masih ki komal reeti maane.',
    'Though Lord and Teacher, Jesus knelt to wash dusty feet,\nTeaching servant-hearted humility through living example.\nTrue greatness blossoms in serving others with grace,\nHonoring every neighbor with Christlike gentleness.',
    'HumbleService',
    354
  ],
  [
    'चिंता मत करो पक्षियों को देखो',
    'आकाश के पक्षियों को देखो न बोते हैं न काटते हैं,\nस्वर्गीय पिता के हाथों से रोज़ अपना दाना पाते हैं।\nजंगली सोसनों से सुंदर जब प्रभु घास को पहनाता है,\nअपनी प्यारी संतानों की सुधि वह पल-पल निभाता है।',
    'Aakash ke pakshiyon ko dekho na bote hain na kaatte hain,\nSwargiya Pita ke haathon se roz apna daana paate hain.\nJangli sosanon se sundar jab Prabhu ghaas ko pehnata hai,\nApni pyari santanon ki sudhi wah pal-pal nibhata hai.',
    'Consider the birds of the air fed daily by the Father,\nAnd lilies of the field arrayed in effortless beauty.\nHow much more tenderly God cares for His dear children,\nReleasing anxious worry into trusting providence.',
    'ConsiderTheLilies',
    401
  ],
  [
    'परमप्रधान के छाए में ठिकाना',
    'जो परमप्रधान के छाए हुए स्थान में बैठा रहता है,\nसर्वशक्तिमान की शरण में निश्चिंत सदा वह रहता है।\nपरमेश्वर ही मेरा गढ़ और मेरा पक्का शरणस्थान है,\nउसके पंखों के तले सुरक्षित मेरा हर अरमान है।',
    'Jo Parampradhan ke chhaye hue sthan mein baitha rehta hai,\nSarvashaktiman ki sharan mein nishchint sada wah rehta hai.\nParmeshwar hi mera gadh aur mera pakka sharansthan hai,\nUske pankhon ke tale surakshit mera har arman hai.',
    'Dwelling in the secret shelter of the Most High,\nAbides peacefully beneath the shadow of the Almighty.\nThe Lord alone is my refuge and unshakable fortress,\nSafe under His wings through night and bright day.',
    'Psalm91Refuge',
    427
  ],
  [
    'आनंदित रहो प्रभु में सदा',
    'प्रभु में सदा आनंदित रहो मैं फिर कहता हूँ आनंद करो,\nअपनी कोमलता और भलाई सब मनुष्यों पर प्रगट करो।\nपरिस्थिति से नहीं मसीह की संगति से आनंद आता है,\nयहोवा का आनंद ही हमारी सच्ची सामर्थ बन जाता है।',
    'Prabhu mein sada anandit raho main phir kehta hoon anand karo,\nApni komalta aur bhalai sab manushyon par pragat karo.\nParisthiti se nahi Masih ki sangati se anand aata hai,\nYahowa ka anand hi hamari sacchi samarth ban jaata hai.',
    'Rejoice in the Lord always, and again let hearts rejoice,\nShowing gentle reasonableness toward everyone around.\nChristian joy springs deep from fellowship with Christ,\nFor the joy of the Lord remains our enduring strength.',
    'JoyOfTheLord',
    381
  ],
  [
    'जीवन के जल का सोता',
    'संसार के कुएँ का पानी पीकर प्यास फिर लौट आती है,\nपर यीशु के दिए जीवन जल से तृप्ति अमर मिल जाती है।\nभीतर से फूट निकलता है अनंत जीवन का निर्मल झरना,\nमसीह की करुणा पाकर छूट जाता भटकना-डरना।',
    'Sansar ke kuein ka paani peekar pyas phir laut aati hai,\nPar Yeshu ke diye jeevan jal se tripti amar mil jaati hai.\nBheetar se phoot nikalta hai anant jeevan ka nirmal jharna,\nMasih ki karuna paakar chhoot jaata bhatakna-darna.',
    'Drinking from earthly wells leaves thirst returning soon,\nYet Christ’s living water satisfies the soul forever.\nSpringing up inside as a fountain of eternal life,\nQuenching deep spiritual longing with pure grace.',
    'LivingWater',
    365
  ],
  [
    'हथेली पर खोदा हुआ नाम',
    'देख मैंने तेरा नाम अपनी हथेलियों पर खोद रखा है,\nकभी न भूलूँगा तुझको स्नेह की डोर से बाँध रखा है।\nचाहे दुनिया साथ छोड़ दे प्रभु कभी न त्यागेगा,\nतेरे हर सूने मोड़ पर मसीह का साया जागेगा।',
    'Dekh maine tera naam apni hatheliyon par khod rakha hai,\nKabhi na bhoolunga tujhko sneh ki dor se baandh rakha hai.\nChaahe duniya saath chhod de Prabhu kabhi na tyagega,\nTere har soone mod par Masih ka saaya jaagega.',
    'See, I have engraved your name upon the palms of My hands,\nNever forgetting nor forsaking a single beloved child.\nEven if earthly companions falter along the journey,\nChrist’s faithful presence watches over every turn.',
    'EngravedOnPalms',
    413
  ],
  [
    'मसीह के प्रेम से कौन अलग करे',
    'संकट या क्लेश या अकाल मसीह के प्रेम से क्या तोड़ेगा,\nन मृत्यु न जीवन हमें परमेश्वर के स्नेह से मोड़ेगा।\nजिसने हमारे लिए प्राण दिए वह हमारे पक्ष में खड़ा है,\nहम से प्रेम करने वाले के द्वारा हम जयवंत से बड़ा हैं।',
    'Sankat ya klesh ya akaal Masih ke prem se kya todega,\nNa mrityu na jeevan hamein Parmeshwar ke sneh se modega.\nJisne hamare liye praan diye wah hamare paksh mein khada hai,\nHum se prem karne wale ke dwara hum jaywant se bada hain.',
    'Neither trouble nor hardship can separate us from Christ,\nNor height nor depth divide us from the love of God.\nMore than conquerors we stand through Him who loved us,\nHeld eternally secure within our Savior’s embrace.',
    'MoreThanConquerors',
    422
  ],
  [
    'उड़ाऊ पुत्र की घर वापसी',
    'दूर देश में भटक गया पर पिता की आँखें राह तकें,\nदौड़ के गले लगा लिया जब बेटे के कदम लौट मुड़ें।\nपरमेश्वर के घर में पछताने वाले का उत्सव होता है,\nपिता की बाहों में आकर हर पुराना दर्द खोता है।',
    'Door desh mein bhatak gaya par Pita ki aankhein raah takein,\nDaud ke gale laga liya jab bete ke kadam laut mudein.\nParmeshwar ke ghar mein pachtane wale ka utsav hota hai,\nPita ki baahon mein aakar har purana dard khota hai.',
    'Though wandered far, the Father watched the road in love,\nRunning out to embrace the returning child with joy.\nHeaven rejoices warmly over every homecoming heart,\nMelting years of sorrow inside the Father’s arms.',
    'FathersEmbrace',
    389
  ],
  [
    'विश्वास की अच्छी कुश्ती',
    'विश्वास की अच्छी कुश्ती लड़ दौड़ अपनी पूरी करना है,\nयीशु की ओर ताकते हुए धीरज से आगे बढ़ना है।\nविश्वास के कर्ता और सिद्ध करने वाले पर दृष्टि रहे,\nधर्म का सुंदर मुकुट अंत में प्रभु के हाथों सजे।',
    'Vishwas ki acchi kushti lad daud apni poori karna hai,\nYeshu ki or taakte hue dheeraj se aage badhna hai.\nVishwas ke karta aur siddh karne wale par drishti rahe,\nDharm ka sundar mukut ant mein Prabhu ke haathon saje.',
    'Fight the good fight of faith and finish the race well,\nRunning with endurance while fixing eyes on Jesus.\nLooking unto the Author and Perfecter of our faith,\nAwaiting the crown of righteousness from His hands.',
    'RunTheRace',
    357
  ],
  [
    'भलाई करने में साहस न छोड़ें',
    'भलाई करने में हम कभी भी अपना हियाव न छोड़ें,\nसेवा और करुणा के पथ से अपने कदम कभी न मोड़ें।\nयदि हम ढीले न पड़ें तो ठीक समय पर कटनी काटेंगे,\nमसीह के प्रेम की रोटी भूखे हृदयों में बाँटेंगे।',
    'Bhalai karne mein hum kabhi bhi apna hiyav na chhodein,\nSewa aur karuna ke path se apne kadam kabhi na modein.\nYadi hum dheele na padein toh theek samay par katni kaatenge,\nMasih ke prem ki roti bhookhe hridayon mein baantenge.',
    'Let us never grow weary in doing quiet acts of good,\nWalking steadily down roads of mercy and service.\nIn due season we shall reap if our hearts faint not,\nSharing the bread of Christ’s kindness generously.',
    'NeverGrowWeary',
    346
  ],
  [
    'सब ज्ञान से परे मसीह का प्रेम',
    'विश्वास के द्वारा मसीह तुम्हारे हृदय में सदा वास करे,\nप्रेम में जड़ पकड़ कर जीवन स्वर्गीय सुगंध साँस भरे।\nउस प्रेम की चौड़ाई, लंबाई और गहराई अपरंपार है,\nप्रभु यीशु की करुणा ही मानव जीवन का आधार है।',
    'Vishwas ke dwara Masih tumhare hriday mein sada vaas kare,\nPrem mein jad pakad kar jeevan swargiya sugandh saans bhare.\nUs prem ki chaudai, lambai aur gehrai aparampaar hai,\nPrabhu Yeshu ki karuna hi manav jeevan ka aadhar hai.',
    'May Christ dwell richly in your hearts through living faith,\nRooted and grounded deep inside boundless love.\nVast beyond measure is the height and depth of grace,\nMaking Jesus’ mercy the firm foundation of life.',
    'BoundlessLove',
    395
  ],
  [
    'नया हृदय और नई आत्मा',
    'पत्थर का कठोर हृदय निकाल कोमल मांस का मन देगा,\nपरमेश्वर अपनी आत्मा रखकर भीतर से नूतन कर देगा।\nबाहरी सुधार से बढ़कर मसीह हृदय परिवर्तन करता है,\nटूटे बर्तन को फिर से गढ़ महिमा से अपनी भरता है।',
    'Patthar ka kathor hriday nikal komal maans ka mann dega,\nParmeshwar apni Aatma rakhkar bheetar se nootan kar dega.\nBahari sudhar se badhkar Masih hriday parivartan karta hai,\nToote bartan ko phir se gadh mahima se apni bharta hai.',
    'Removing hearts of stone to grant a tender heart within,\nGod places His Spirit inside to renew the inner life.\nDeeper than outward reform is Christ’s transforming touch,\nRefashioning broken vessels for sacred honor.',
    'NewHeart',
    372
  ],
  [
    'प्रभु भला है चखकर देखो',
    'परख कर देखो कि यहोवा कितना भला और दयालु है,\nक्या ही धन्य है वह जन जो उसकी शरण में कृपालु है।\nसंकट में पुकारा जब दीन ने प्रभु ने झुककर सुन लिया,\nभय के सारे जालों से छुड़ा आनंद का गीत बुन दिया।',
    'Parakh kar dekho ki Yahowa kitna bhala aur dayalu hai,\nKya hi dhanya hai wah jan jo uski sharan mein kripalu hai.\nSankat mein pukara jab deen ne Prabhu ne jhukkar sun liya,\nBhay ke saare jaalon se chhuda anand ka geet bun diya.',
    'Taste and see how gracious and good the Eternal Lord is,\nBlessed indeed is everyone taking refuge in Him.\nWhen the humble cried out, the Lord inclined His ear,\nDelivering from every fear into songs of gladness.',
    'TasteAndSee',
    384
  ],
  [
    'अल्फ़ा और ओमेगा प्रभु',
    'आदि और अंत मैं हूँ अल्फ़ा और ओमेगा सर्वशक्तिमान,\nजो था, जो है और जो आने वाला है वही प्रभु महान।\nसमय के हर पन्ने पर उसके अनुग्रह का हस्ताक्षर है,\nमसीह के हाथ में सुरक्षित हमारा आज और कल निरंतर है।',
    'Aadi aur ant main hoon Alpha aur Omega Sarvashaktiman,\nJo tha, jo hai aur jo aane wala hai wahi Prabhu mahan.\nSamay ke har panne par uske anugrah ka hastakshar hai,\nMasih ke haath mein surakshit hamara aaj aur kal nirantar hai.',
    'I am the Alpha and the Omega, Beginning and the End,\nWho was, and is, and evermore shall reign Almighty.\nAcross every page of time shines His signature of grace,\nHolding both our today and forever safely in hand.',
    'AlphaAndOmega',
    407
  ],
  [
    'आमीन और अनंत शांति की आशीष',
    'यहोवा तुझे आशीष दे और तेरी हर पल रक्षा करे,\nअपना मुख तुझ पर चमकाए और उत्तम शांति भरा करे।\nयीशु मसीह का अनुग्रह और पिता का प्रेम सदा संग रहे,\nपवित्र आत्मा की सहभागिता में जीवन पावन रंग रहे।',
    'Yahowa tujhe aashish de aur teri har pal raksha kare,\nApna mukh tujh par chamkaye aur uttam shanti bhara kare.\nYeshu Masih ka anugrah aur Pita ka prem sada sang rahe,\nPavitra Aatma ki sehbhagita mein jeevan paawan rang rahe.',
    'May the Lord bless you richly and keep you each day,\nShining His gracious countenance upon you with peace.\nMay the grace of Lord Jesus and the Father’s deep love,\nAbide with your spirit in sweet fellowship forever.',
    'Benediction',
    446
  ]
];

export const CHRISTIAN_FAITH_SHAYARIS: Shayari[] = CHRISTIAN_RAW.map(
  ([title, hindi, hinglish, english, tag, initialLikes], index) => {
    const linesHindi = hindi.split('\n');
    return {
      id: `christian-faith-${index + 1}`,
      category: 'christian-faith',
      categoryType: 'feelings',
      categoryName: 'Masih Faith (मसीह विश्वास)',
      categoryIcon: '✝️',
      title,
      lines: linesHindi,
      linesHindi,
      linesHinglish: hinglish.split('\n'),
      linesEnglish: english.split('\n'),
      tags: [tag, 'MasihFaith', 'JesusGrace'],
      author: 'ZQ-FEELINGS 💗',
      initialLikes
    };
  }
);
