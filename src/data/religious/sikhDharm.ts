import { Shayari } from '../../types/shayari';

type SikhRawTuple = [
  title: string,
  hindi: string,
  hinglish: string,
  english: string,
  tag: string,
  likes: number
];

const SIKH_RAW: SikhRawTuple[] = [
  [
    'वाहेगुरु का सिमरन',
    'साँस-साँस में बसता रहे वाहेगुरु का प्यारा नाम,\nसिमरन की ठंडी छाँव में कट जाए हर मुश्किल काम।\nअकाल पुरख की ओट में मन को मिलता सच्चा चैन,\nगुरबाणी के चानण से उजले हो जाते दिन-रैन।',
    'Saans-saans mein basta rahe Waheguru ka pyara naam,\nSimran ki thandi chhaanv mein kat jaaye har mushkil kaam.\nAkal Purakh ki aas mein mann ko milta saccha chain,\nGurbani ke chanan se ujle ho jaate din-rain.',
    'May Waheguru’s beloved Name dwell within every breath,\nUnder Simran’s cool shade every heavy task grows light.\nAnchored in the Timeless One, the restless mind finds peace,\nAs Gurbani’s radiance brightens both day and night.',
    'Simran',
    384
  ],
  [
    'तेरा भाणा मीठा लागे',
    'सुख आए तो शुक्र करूँ दुख में भी न डोले मन,\nतेरा भाणा मीठा लागे अर्पित तुझको सारा जीवन।\nहुक्म रजाई चलना ही सिख जीवन की पहचान है,\nवाहेगुरु की मेहर बिना अधूरा हर अरमान है।',
    'Sukh aaye toh shukr karun dukh mein bhi na dole mann,\nTera bhana meetha laage arpit tujhko saara jeevan.\nHukam razai chalna hi Sikh jeevan ki pehchan hai,\nWaheguru ki meher bina adhura har arman hai.',
    'Grateful in joy and steady in trial remains the heart,\nSweet is Your Divine Will, unto You all life belongs.\nWalking in harmony with Hukam defines the Sikh way,\nIncomplete is every wish without Waheguru’s grace.',
    'Hukam',
    362
  ],
  [
    'अमृत वेला और नाम रंग',
    'अमृत वेला जाग कर जो जपता सतनाम की डोर,\nउसके अंतस में खिल उठती रूहानी खुशियों की भोर।\nदुनिया के सब रंग फीके जब चढ़े नाम का गाढ़ा रंग,\nअकाल पुरख स्वयं चलते अपने प्यारे सेवक के संग।',
    'Amrit vela jaag kar jo japta Satnam ki dor,\nUske antas mein khil uthti roohani khushiyon ki bhor.\nDuniya ke sab rang feeke jab chadhe Naam ka gaadha rang,\nAkal Purakh swayam chalte apne pyare sewak ke sang.',
    'Rising in the ambrosial dawn to meditate upon Satnam,\nAwakens a serene morning of joy deep within the soul.\nWorldly hues fade beside the deep dye of the Divine Name,\nThe Eternal Lord walks ever beside His devoted servant.',
    'AmritVela',
    349
  ],
  [
    'निरभौ और निरवैर जीवन',
    'निरभौ होकर सच पे चलना निरवैर रख अपना चित्त,\nवैर-भाव से दूर रहे जो वाहेगुरु का सच्चा मित्त।\nना किसी को भय देना है ना किसी से डरना कभी,\nगुरु की शिक्षा सिखलाती है प्रेम से जीना सभी।',
    'Nirbhau hokar sach pe chalna nirvair rakh apna chitt,\nVair-bhaav se door rahe jo Waheguru ka saccha mitt.\nNa kisi ko bhay dena hai na kisi se darna kabhi,\nGuru ki shiksha sikhlaati hai prem se jeena sabhi.',
    'Walk fearlessly in truth while keeping the heart free of malice,\nFar from enmity lives every true friend of Waheguru.\nNeither intimidating anyone nor bowing down in fear,\nThe Guru’s wisdom teaches living in love toward all.',
    'NirbhauNirvair',
    371
  ],
  [
    'चरण कमल की ओट',
    'माया के तूफ़ानों में बस तेरे चरण कमल की आड़,\nराई को पर्वत कर दे तू और रेत बना दे पहाड़।\nमेरी कोई सियानप नहीं दाता सब तेरी ही दात,\nवाहेगुरु जी थामे रखना सदा हमारे दोनों हाथ।',
    'Maya ke toofanon mein bas tere charan kamal ki aad,\nRaai ko parvat kar de tu aur ret bana de pahad.\nMeri koi siyanap nahi Daata sab teri hi daat,\nWaheguru ji thaame rakhna sada hamare dono haath.',
    'Amid storms of illusion, Your lotus feet remain my shelter,\nTurning a mustard seed into a peak at Your gentle glance.\nNo cleverness is mine, O Giver, every gift flows from You,\nBeloved Waheguru, hold our hands forever in grace.',
    'CharanKamal',
    338
  ],
  [
    'हौमै छोड़ विनम्रता',
    'हौमै का जब परदा छँटता तब दिखता रब का द्वार,\nनीवाँ होकर जो चलता है पाता सतगुरु का प्यार।\nबूँद समंदर बन जाती जब खुद को मिटा देती है,\nविनम्र हृदय में ही सतनाम की ज्योति जगा देती है।',
    'Haumai ka jab parda chhatta tab dikhta Rab ka dwar,\nNeevan hokar jo chalta hai paata Satguru ka pyar.\nBoond samandar ban jaati jab khud ko mita deti hai,\nVinamra hriday mein hi Satnam ki jyoti jaga deti hai.',
    'When the veil of ego lifts, the Divine doorway appears,\nWalking in gentle humility wins the True Guru’s love.\nA drop becomes the ocean once separate pride dissolves,\nWithin a humble heart shines the lamp of Satnam.',
    'Humility',
    327
  ],
  [
    'सब में एक ही जोत',
    'अव्वल अल्लाह नूर उपाया कुदरत के सब बंदे,\nएक ही नूर से उपजा जग फिर क्यों नफ़रत के फंदे।\nऊँच-नीच की दीवारें तोड़ गले सबको लगाओ,\nहर इंसान के भीतर बसते वाहेगुरु को पाओ।',
    'Awwal Allah noor upaya qudrat ke sab bande,\nEk hi noor se upja jag phir kyon nafrat ke phande.\nOonch-neech ki deewarein tod gale sabko lagao,\nHar insaan ke bheetar baste Waheguru ko paao.',
    'From One Divine Light sprang all children of creation,\nBorn of a single radiance, why harbor division at all?\nBreak walls of rank apart and embrace humanity warmly,\nBeholding Waheguru’s presence within every living soul.',
    'EkJot',
    395
  ],
  [
    'सच्चा पासपोर्ट सतनाम',
    'धन-दौलत और ऊँचे रुतबे यहीं धरे रह जाएँगे,\nअंत समय में केवल जपे शबद ही साथ निभाएँगे।\nवाहेगुरु के नाम का धन जो पल-पल जोड़ता जाए,\nलोक-परलोक दोनों में उसका मुख उजला हो जाए।',
    'Dhan-daulat aur oonche rutbe yahin dhare reh jaayenge,\nAnt samay mein kewal jape shabad hi saath nibhayenge.\nWaheguru ke Naam ka dhan jo pal-pal jodta jaaye,\nLok-parlok dono mein uska mukh ujla ho jaaye.',
    'Worldly riches and lofty titles stay behind on earth,\nAt journey’s end only cherished Shabad walks beside you.\nWhoever gathers moment by moment the wealth of Naam,\nStands radiant in honor across this world and beyond.',
    'SatnamDhan',
    331
  ],
  [
    'गुरु नानक देव जी की रबाब',
    'रबाब की मीठी तान छेड़ भाई मरदाना जब गाते थे,\nबाबा नानक प्रेम बाणी से भटके हृदय जगाते थे।\nना कोई हिंदू ना मुसलमान मानवता का पाठ पढ़ाया,\nसच्चे धर्म का निर्मल झरना धरती पर बहाया।',
    'Rabab ki meethi taan chhed Bhai Mardana jab gaate the,\nBaba Nanak prem baani se bhatke hriday jagate the.\nNa koi Hindu na Musalman manavta ka paath padhaya,\nSacche dharm ka nirmal jharna dharti par bahaya.',
    'As Bhai Mardana’s rabab echoed with sacred melody,\nBaba Nanak awakened wandering hearts through hymns of love.\nTeaching pure humanity beyond rigid outward labels,\nHe set flowing a crystal stream of righteous living.',
    'GuruNanakDevJi',
    408
  ],
  [
    'हक़ हलाल की कीरत',
    'हक़-हलाल की कीरत में ही बसती रब की असीस,\nनेक कमाई के आगे झुकते सदा फ़रिश्तों के सीस।\nमेहनत कर और बाँट के छक ये बाबा नानक की रीत,\nसादा जीवन उच्च विचार में ही जीवन की जीत।',
    'Haq-halal ki kirat mein hi basti Rab ki asees,\nNek kamai ke aage jhukte sada farishton ke sees.\nMehnat kar aur baant ke chhak ye Baba Nanak ki reet,\nSaada jeevan ucch vichar mein hi jeevan ki jeet.',
    'Within honest labor abides the blessing of the Lord,\nEarned with integrity, simple bread carries sacred grace.\nWork sincerely and share freely — Baba Nanak’s noble path,\nTrue victory blossoms in simple life and lofty thought.',
    'KiratKaro',
    356
  ],
  [
    'मन जीते जग जीत',
    'शस्त्रों से दुनिया जीती पर मन को जीत न पाया कोई,\nगुरु नानक के शबद बिना अंतर की मैल न धोया कोई।\nइच्छाओं के घोड़ों पर जो संयम की लगाम धरे,\nमन जीते जग जीत वही भवसागर पार तरे।',
    'Shastron se duniya jeeti par mann ko jeet na paaya koi,\nGuru Nanak ke shabad bina antar ki mail na dhoya koi.\nIcchaon ke ghodon par jo sanyam ki lagaam dhare,\nMann jeete jag jeet wahi bhavsagar paar tare.',
    'Conquering lands avails little until one conquers the mind,\nOnly the Guru’s Shabad washes clean the inner self.\nGuiding restless desires with steady spiritual restraint,\nConquering the mind conquers the whole wide world.',
    'ManJeeteJagJeet',
    392
  ],
  [
    'बाबा नानक की उदासियाँ और प्रेम',
    'काँटों भरी राहों पर चलकर प्रेम के बीज बिखेरे,\nअंधविश्वास के भ्रम मिटाकर लाए ज्ञान सवेरे।\nजहाँ पड़े गुरु नानक के पग पावन तीर्थ बन गए,\nपत्थर जैसे कठोर हृदय भी करुणा से छन गए।',
    'Kaanton bhari raahon par chalkar prem ke beej bikhere,\nAndhvishwas ke bhram mitakar laaye gyan sawere.\nJahan pade Guru Nanak ke pag paawan teerth ban gaye,\nPatthar jaise kathor hriday bhi karuna se chhan gaye.',
    'Walking thorny trails afar to sow seeds of harmony,\nDispelling empty ritual with the dawn of living wisdom.\nEvery land touched by Guru Nanak’s footsteps grew sacred,\nSoftening stony hearts with boundless compassion.',
    'BabaNanakPrem',
    344
  ],
  [
    'सच आचार सबसे ऊँचा',
    'सच तो सबसे ऊँचा है पर उससे ऊँचा सच आचार,\nकेवल बातों से नहीं सधता रूहानियत का सार।\nकथनी और करनी जब बंदे की एक समान हो जाए,\nतब सतगुरु की नदरि से जीवन सफल कहाए।',
    'Sach toh sabse ooncha hai par usse ooncha sach aachar,\nKewal baaton se nahi sadhta roohaniyat ka saar.\nKathni aur karni jab bande ki ek saman ho jaaye,\nTab Satguru ki nadar se jeevan safal kahaye.',
    'Truth is highest of all, yet higher still is truthful living,\nMere words alone cannot unlock spirituality’s core.\nWhen speech and daily conduct unite in pure integrity,\nThe True Guru’s gracious glance crowns life with meaning.',
    'SachAachar',
    367
  ],
  [
    'संतोख रूपी रत्न',
    'तृष्णा की आग न बुझती चाहे जुड़ जाएँ सौ भंडार,\nसंतोख बिना अधूरा रहता सोने का भी संसार।\nवाहेगुरु जो बख़्शे उसमें राज़ी रहना सीख लिया,\nगुरु की मति से हमने अमृत का प्याला पी लिया।',
    'Trishna ki aag na bujhti chaahe jud jaayein sau bhandar,\nSantokh bina adhura rehta sone ka bhi sansar.\nWaheguru jo bakhshe usmein raazi rehna seekh liya,\nGuru ki mati se hamne amrit ka pyala pee liya.',
    'Greed’s fire never cools even amid a hundred storehouses,\nWithout contentment, a world of gold still feels empty.\nLearning serene joy in whatever Waheguru bestows,\nThrough the Guru’s counsel we taste immortal peace.',
    'Santokh',
    319
  ],
  [
    'रबाबी की तान और इलाही बाणी',
    'धुर की बाणी आई जब जग की चिंता सारी मिटी,\nअज्ञान के गहरे बादल से फूटी आशा की चिट्ठी।\nनानक नाम जहाज़ है जो श्रद्धा से चढ़ जाए,\nभवसागर की लहरों से हँसता-गाता पार हो जाए।',
    'Dhur ki baani aayi jab jag ki chinta saari miti,\nAgyan ke gehre baadal se phooti aasha ki chitthi.\nNanak Naam jahaz hai jo shraddha se chadh jaaye,\nBhavsagar ki lehron se hansta-gaata paar ho jaaye.',
    'When the Primal Word descended, worldly anxieties dissolved,\nPiercing clouds of ignorance with a beam of living hope.\nDivine Naam is the vessel for every faithful traveler,\nCarrying souls joyfully across life’s turbulent sea.',
    'DhurKiBani',
    378
  ],
  [
    'पवन गुरु पानी पिता',
    'पवन को गुरु माना हमने पानी पिता समान है,\nधरती माता सबका पालन करती कितनी महान है।\nप्रकृति में भी वाहेगुरु का दर्शन सिख धर्म कराए,\nकण-कण का आदर करना गुरबाणी हमें सिखाए।',
    'Pawan ko Guru maana hamne paani pita saman hai,\nDharti maata sabka paalan karti kitni mahan hai.\nPrakriti mein bhi Waheguru ka darshan Sikh dharm karaye,\nKan-kan ka aadar karna Gurbani hamein sikhaye.',
    'Air is revered as teacher, water honored as father,\nAnd sacred Earth cherished as the great nurturing mother.\nSikh wisdom beholds Waheguru’s grace throughout nature,\nTeaching deep respect for every element of creation.',
    'PawanGuru',
    386
  ],
  [
    'श्री गुरु ग्रंथ साहिब जी का नूर',
    'हाज़िर-नाज़िर जागती जोत श्री गुरु ग्रंथ साहिब महान,\nजिनके हर एक अंग में बसता अकाल पुरख का ज्ञान।\nमाथा टेक पालकी आगे जब मन झुक जाता है,\nभटकन छूट जाती सारी और सीधा पथ मिल जाता है।',
    'Haazir-naazir jaagti jot Sri Guru Granth Sahib mahan,\nJinke har ek ang mein basta Akal Purakh ka gyan.\nMaatha tek palki aage jab mann jhuk jaata hai,\nBhatkan chhoot jaati saari aur seedha path mil jaata hai.',
    'Ever-present living light is Sri Guru Granth Sahib Ji,\nWithin every sacred page breathes wisdom of the Eternal.\nBowing forehead humbly before the revered throne,\nEnds inner wandering and reveals the righteous road.',
    'GuruGranthSahib',
    424
  ],
  [
    'शबद ही हमारा सतगुरु',
    'देह नहीं अब शबद गुरु है युगों-युगों का सहारा,\nअंधकार में भटके जग को शबद ही ध्रुव तारा।\nभक्तों और गुरुओं की बाणी एक ही माला में पिरोई,\nसाँझीवालता की ऐसी मिसाल दूजी जग में ना कोई।',
    'Deh nahi ab Shabad Guru hai yugon-yugon ka sahara,\nAndhkar mein bhatke jag ko Shabad hi dhruv taara.\nBhakton aur Guruon ki baani ek hi maala mein piroi,\nSaanjhiwalta ki aisi misaal dooji jag mein na koi.',
    'The Eternal Word is our Guru across every unfolding age,\nShining like a steadfast pole star through darkest nights.\nStringing hymns of Gurus and saints on one sacred thread,\nNo finer emblem of universal harmony graces the earth.',
    'ShabadGuru',
    397
  ],
  [
    'सुखमनी साहिब की शीतलता',
    'सुखमनी सुख अमृत प्रभ नामू जब कानों में घुलता है,\nतपते हुए अंतःकरण में चंदन सा रस खुलता है।\nचौबीस अष्टपदियों में समाया मानसिक शांति का सार,\nगुरबाणी के सिमरन से महके जीवन का घर-द्वार।',
    'Sukhmani sukh amrit Prabh naamu jab kaanon mein ghulta hai,\nTapte hue antahkaran mein chandan sa ras khulta hai.\nChaubees ashtpadiyon mein samaya mansik shanti ka saar,\nGurbani ke simran se mehke jeevan ka ghar-dwar.',
    'When Sukhmani’s ambrosial verses enter listening ears,\nCool sandalwood calm spreads through an anxious heart.\nWithin its sacred cantos rests the essence of deep peace,\nFilling home and spirit with fragrance of remembrance.',
    'SukhmaniSahib',
    373
  ],
  [
    'आनंद साहिब का उल्लास',
    'आनंद भया मेरी माए सतगुरु मैं पाया की धुन,\nरूह नाच उठे भीतर जब गुरबाणी को ध्यान से सुन।\nबाहरी शोर में खुशी नहीं आनंद तो भीतर बसता है,\nगुरु के शबद से जुड़ा हृदय हर हाल में हँसता है।',
    'Anand bhaya meri maaye Satguru main paaya ki dhun,\nRooh naach uthe bheetar jab Gurbani ko dhyan se sun.\nBahari shor mein khushi nahi anand toh bheetar basta hai,\nGuru ke shabad se juda hriday har haal mein hansta hai.',
    'Bliss awakens upon finding the True Guru’s melody,\nListening attentively makes the inner spirit rejoice.\nTrue bliss dwells inward rather than in outer clamor,\nA heart united with Shabad smiles through every season.',
    'AnandSahib',
    341
  ],
  [
    'रहरास साहिब की संध्या',
    'दिन भर की थकन उतरे जब संध्या में रहरास पढ़ें,\nवाहेगुरु के शुक्राने में हाथ दोनों अपने जुड़ें।\nसाँझ ढले गुरुद्वारे में जब कीर्तन की स्वर लहरी बहे,\nहर थका मुसाफ़िर आकर रूहानी विश्राम लहे।',
    'Din bhar ki thakan utre jab sandhya mein Rehras padhein,\nWaheguru ke shukrane mein haath dono apne judein.\nSaanjh dhale Gurudware mein jab kirtan ki swar lehri bahe,\nHar thaka musafir aakar roohani vishram lahe.',
    'Daylong weariness melts away during evening Rehras prayer,\nAs folded hands rise quietly in gratitude to Waheguru.\nWhen twilight kirtan flows softly through the Gurdwara,\nEvery weary traveler finds gentle spiritual rest.',
    'RehrasSahib',
    354
  ],
  [
    'कीर्तन सोहिला और निश्चिंत विश्राम',
    'सोने से पहले सोहिला साहिब का पावन पाठ करें,\nभय-चिंता सब वाहेगुरु के चरणों में रख धरें।\nरक्षक बनकर स्वयं अकाल पुरख पहरा देता है,\nश्रद्धावान सेवक को निर्भय मीठी नींद सुलाता है।',
    'Sone se pehle Sohila Sahib ka paawan paath karein,\nBhay-chinta sab Waheguru ke charnon mein rakh dharein.\nRakshak bankar swayam Akal Purakh pehra deta hai,\nShraddhavan sewak ko nirbhay meethi neend sulata hai.',
    'Recite sacred Kirtan Sohila before closing your eyes,\nPlacing every worry gently at Waheguru’s feet.\nThe Timeless Protector watches lovingly over the night,\nCradling the faithful heart in fearless slumber.',
    'KirtanSohila',
    335
  ],
  [
    'हुक्मनामा आज का मार्गदर्शन',
    'उलझन में जब राह न सूझे गुरु के दर पर जाओ,\nपावन हुक्मनामा सुनकर मन की शंका मिटाओ।\nऐसा लगता जैसे सतगुरु ने खुद हमसे बात करी,\nएक ही पंक्ति ने जीवन में नई रोशनी आन भरी।',
    'Uljhan mein jab raah na soojhe Guru ke dar par jaao,\nPaawan Hukamnama sunkar mann ki shanka mitao.\nAisa lagta jaise Satguru ne khud hamse baat kari,\nEk hi pankti ne jeevan mein nayi roshni aan bhari.',
    'Whenever crossroads cloud the mind, visit the Guru’s door,\nReceive the sacred Hukamnama and let confusion clear.\nIt feels as though the True Guru spoke directly to your heart,\nOne luminous verse filling life with fresh direction.',
    'Hukamnama',
    389
  ],
  [
    'रागी सिंहों का इलाही कीर्तन',
    'हरिमंदिर की फ़िज़ाओं में जब तानपूरा और तबला बजे,\nरागी सिंहों के कंठों से गुरबाणी का अमृत सजे।\nसरोवर की लहरों पर तैरता स्वर्णिम नूर निराला है,\nकीर्तन सुनकर पाषाण हृदय भी मोम बनने वाला है।',
    'Harmandir ki fizaon mein jab tanpura aur tabla baje,\nRaagi Singhon ke kanthon se Gurbani ka amrit saje.\nSarovar ke lehron par tairta swarnim noor nirala hai,\nKirtan sunkar pashan hriday bhi mom banne wala hai.',
    'When strings and rhythm echo across the sacred court,\nAmbrosial Gurbani pours forth in devotional kirtan.\nGolden reflections shimmer gently across tranquil waters,\nMelting even the hardest heart into quiet reverence.',
    'GurbaniKirtan',
    412
  ],
  [
    'वाहेगुरु जी का खालसा वाहेगुरु जी की फ़तेह',
    'वाहेगुरु जी का खालसा वाहेगुरु जी की फ़तेह बुलाएँ,\nहर जीत का सेहरा केवल अपने रब के शीश सजाएँ।\nखालसा अकाल पुरख की फ़ौज अन्याय से टकराती है,\nदीन-दुखियों की रक्षा में सर तक वार के आती है।',
    'Waheguru ji ka Khalsa Waheguru ji ki fateh bulayein,\nHar jeet ka sehra kewal apne Rab ke sheesh sajayein.\nKhalsa Akal Purakh ki fauj anyay se takrati hai,\nDeen-dukhiyon ki raksha mein sar tak waar ke aati hai.',
    'Hail Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh,\nAscribing every triumph solely unto the Almighty Lord.\nThe Khalsa stands bravely against tyranny and wrong,\nShielding the vulnerable with selfless courage.',
    'KhalsaPanth',
    439
  ],
  [
    'केसरी निशान साहिब की शान',
    'नीले अंबर में लहराता केसरी निशान साहिब प्यारा,\nदूर से ही दिखलाता है भूले भटकों को सहारा।\nत्याग, बलिदान और सेवा का यह पावन परचम है,\nजहाँ झुले निशान साहिब वहाँ मिटता हर एक ग़म है।',
    'Neele ambar mein lehrata kesari Nishan Sahib pyara,\nDoor se hi dikhlata hai bhoole bhatkon ko sahara.\nTyag, balidan aur sewa ka yah paawan parcham hai,\nJahan jhule Nishan Sahib wahan mitta har ek gham hai.',
    'High against blue skies waves the saffron Nishan Sahib,\nSignaling sanctuary from afar to every traveler.\nAn emblem of sacrifice, courage, and openhearted service,\nBeneath this sacred banner sorrow gives way to strength.',
    'NishanSahib',
    398
  ],
  [
    'संत-सिपाही का आदर्श',
    'हाथों में सिमरन की माला और धर्म रक्षार्थ कृपाण,\nदशम पिता ने गढ़ा खालसा संत-सिपाही की पहचान।\nभीतर से कोमल करुणामय बाहर से चट्टान अडिग,\nअधर्म के आगे कभी न झुकता सच्चे सिख का डिग।',
    'Haathon mein simran ki maala aur dharm raksharth kirpan,\nDasham Pita ne gadha Khalsa sant-sipahi ki pehchan.\nBheetar se komal karunamay bahar se chattan adig,\nAdharm ke aage kabhi na jhukta sacche Sikh ka dig.',
    'Prayer beads of remembrance paired with the sword of defense,\nThe Tenth Guru shaped the noble ideal of Saint-Soldier.\nTender with compassion inward yet firm as granite outside,\nUnbowed forever before oppression or injustice.',
    'SantSipahi',
    385
  ],
  [
    'हिंद दी चादर का बलिदान',
    'तिलक-जंजू की आज़ादी ख़ातिर जिन्होंने शीश दिया,\nगुरु तेग बहादुर साहिब ने अमर बलिदान किया।\nअपने धर्म संग औरों की आस्था का मान बचाया,\nचाँदनी चौक की धरती पर शौर्य का सूरज उगाया।',
    'Tilak-janjoo ki aazadi khatir jinhone sheesh diya,\nGuru Tegh Bahadur Sahib ne amar balidan kiya.\nApne dharm sang auron ki aastha ka maan bachaya,\nChandni Chowk ki dharti par shaurya ka sooraj ugaya.',
    'Giving his sacred head to defend freedom of conscience,\nGuru Tegh Bahadur Ji offered an immortal sacrifice.\nProtecting another’s right to worship alongside one’s own,\nRaising an eternal sun of courage for humanity.',
    'GuruTeghBahadurJi',
    431
  ],
  [
    'चार साहिबज़ादों की शहादत',
    'नन्हीं उम्र में दीवारों में चुन जाना स्वीकार किया,\nचमकौर की गढ़ी में वीरों ने धर्म पे जीवन वार दिया।\nसरबंसदानी के लालों की गाथा रोंगटे खड़े करे,\nसाहिबज़ादों के साहस को कोटि-कोटि प्रणाम मेरे।',
    'Nanhi umr mein deewaron mein chun jaana sweekar kiya,\nChamkaur ki gadhi mein veeron ne dharm pe jeevan waar diya.\nSarbansdani ke laalon ki gaatha rongte khade kare,\nSahibzadon ke saahas ko koti-koti pranam mere.',
    'Standing fearless even while bricked alive in tender youth,\nAnd braving uneven odds on Chamkaur’s sacred ground.\nThe saga of the Four Sahibzade stirs every noble heart,\nCountless salutations to their unmatched valor and faith.',
    'ChaarSahibzade',
    447
  ],
  [
    'शहीदों के सरताज पंचम पातशाह',
    'तपती तवी पर बैठ के भी मुख से निकला तेरा भाणा,\nगुरु अर्जन देव जी ने सिखलाया शांत चित्त रह जाना।\nक्रोध की ज्वाला को जिन्होंने शीतल सब्र से जीता,\nउनकी पावन कुर्बानी से धर्म का उपवन सींचा।',
    'Tapti tawi par baith ke bhi mukh se nikla tera bhana,\nGuru Arjan Dev Ji ne sikhlaaya shaant chitt reh jaana.\nKrodh ki jwala ko jinhone sheetal sabr se jeeta,\nUnki paawan qurbani se dharm ka upvan seencha.',
    'Seated upon scorching iron yet whispering Sweet is Your Will,\nGuru Arjan Dev Ji embodied supreme spiritual serenity.\nOvercoming tyranny’s blaze through tranquil endurance,\nWatering the garden of righteousness with noble sacrifice.',
    'GuruArjanDevJi',
    405
  ],
  [
    'देग तेग फ़तेह का मूल',
    'देग चले तो कोई भूखा पेट न सोने पाए कहीं,\nतेग उठे तो निर्बल पर कोई ज़ुल्म न होने पाए कहीं।\nदया और पराक्रम का ये संगम खालसा पंथ महान,\nमानवता की ढाल बने रहना ही सिखी की शान।',
    'Deg chale toh koi bhookha pet na sone paaye kahin,\nTegh uthe toh nirbal par koi zulm na hone paaye kahin.\nDaya aur parakram ka ye sangam Khalsa panth mahan,\nManavta ki dhaal bane rehna hi Sikhi ki shaan.',
    'May the cauldron serve so none ever sleep in hunger,\nAnd strength rise only to shield the weak from harm.\nCharity united with valor defines the glorious Khalsa,\nStanding as humanity’s steadfast protector always.',
    'DegTeghFateh',
    376
  ],
  [
    'दशमेश पिता का हौसला',
    'चिड़ियों से मैं बाज़ तुड़ाऊँ सवा लाख से एक लड़ाऊँ,\nगुरु गोबिंद सिंह जी के वचनों से सोया पौरुष जगाऊँ।\nहार मान लेना सिख के शब्दकोश में लिखा नहीं,\nअकाल पुरख के सिंह का माथा अन्याय आगे झुका नहीं।',
    'Chidiyon se main baaz tudaun sawa laakh se ek ladaun,\nGuru Gobind Singh Ji ke vachanon se soya paurush jagaun.\nHaar maan lena Sikh ke shabdkosh mein likha nahi,\nAkal Purakh ke Singh ka maatha anyay aage jhuka nahi.',
    'Empowering humble sparrows to soar beyond fierce hawks,\nGuru Gobind Singh Ji’s words awaken fearless resolve.\nDefeat finds no dwelling inside a devoted Sikh’s spirit,\nNever bowing the brow before tyranny anywhere.',
    'DashmeshPita',
    428
  ],
  [
    'जोड़ेयाँ दी निश्काम सेवा',
    'सिर पर दस्तार सजा कर भी संगत के जोड़े साफ़ करें,\nअहंकार की धूल झाड़ कर मन का दर्पण साफ़ करें।\nगुरु घर की छोटी सी सेवा भी राज-पाट से प्यारी है,\nनिश्काम भाव से झुक जाने में ही सच्ची सरदारी है।',
    'Sir par dastar saja kar bhi sangat ke jode saaf karein,\nAhankar ki dhool jhaad kar mann ka darpan saaf karein.\nGuru ghar ki chhoti si sewa bhi raaj-paat se pyari hai,\nNishkam bhaav se jhuk jaane mein hi sacchi sardari hai.',
    'Polishing the congregation’s shoes with humble devotion,\nBrushes dust of pride off the mirror of the mind.\nHumble service at the Guru’s door outshines royal thrones,\nTrue nobility blooms in selfless bowing to serve.',
    'JodeDiSeva',
    391
  ],
  [
    'गुरु का लंगर और समानता',
    'राजा हो या रंक यहाँ सब एक ही पंगत में बैठें,\nगुरु के लंगर में मिट जातीं जाति-पाँति की सब ऐंठें।\nप्रेम और सतनाम से गूँधी रोटी अमृत बन जाती है,\nचौबीसों घंटे गुरु की रसोई सबकी क्षुधा मिटाती है।',
    'Raja ho ya rank yahan sab ek hi pangat mein baithein,\nGuru ke langar mein mit jaatin jaati-paanti ki sab aithein.\nPrem aur Satnam se goondhi roti amrit ban jaati hai,\nChaubeeson ghante Guru ki rasoi sabki kshudha mitati hai.',
    'Monarch and laborer sit side by side in one shared row,\nInside the Guru’s Langar every barrier of status melts.\nBread kneaded with Satnam and love tastes like nectar,\nWelcoming every hungry traveler at all hours.',
    'GuruKaLangar',
    416
  ],
  [
    'कड़ाह प्रसाद की मिठास',
    'आटा, घी और मीठे संग जब जपुजी का पाठ मिले,\nदोनों हाथ पसार अदब से कड़ाह प्रसाद की दात मिले।\nथोड़ा हो या ज़्यादा सबको एक बराबर बँटता है,\nगुरु की रहमत का ये मीठा शगुन कलेजा ठंडा करता है।',
    'Aata, ghee aur meethe sang jab Japji ka paath mile,\nDono haath pasar adab se Karah Parshad ki daat mile.\nThoda ho ya zyada sabko ek barabar bantta hai,\nGuru ki rehmat ka ye meetha shagun kaleja thanda karta hai.',
    'Prepared amid sacred verses of prayer and devotion,\nKarah Parshad is received humbly with cupped hands.\nShared equally among all without distinction of rank,\nWarming the soul with the sweetness of Guru’s grace.',
    'KarahParshad',
    368
  ],
  [
    'वंड छको की पावन रीत',
    'अकेले खाने से बढ़ता नहीं बाँटने से बरकत आती है,\nवंड छको की सीख दिलों में करुणा का दीप जलाती है।\nदसवंध निकाल के दीन-दुखी के काम सदा जो आता है,\nवाहेगुरु के ख़ज़ाने से उसका घर भरा रह जाता है।',
    'Akele khaane se badhta nahi baantne se barkat aati hai,\nVand Chhako ki seekh dilon mein karuna ka deep jalati hai.\nDaswandh nikal ke deen-dukhi ke kaam sada jo aata hai,\nWaheguru ke khazane se uska ghar bhara reh jaata hai.',
    'Blessings multiply not in hoarding, rather in sharing,\nVand Chhako kindles lamps of empathy across society.\nDedicating Daswandh generously toward those in need,\nKeeps one’s household replenished from Divine stores.',
    'VandChhako',
    352
  ],
  [
    'कार सेवा का उत्साह',
    'सिर पर टोकरी वाहेगुरु जपते कार सेवा में जुटे हाथ,\nबच्चे, बूढ़े, माताएँ सब एक धुन में चलते साथ।\nबिना मज़दूरी बिना दिखावे केवल प्रेम का नाता है,\nसेवा के पसीने से गुरु घर का आँगन जगमगाता है।',
    'Sir par tokri Waheguru japte kar sewa mein jute haath,\nBacche, boodhe, maatayein sab ek dhun mein chalte saath.\nBina mazdoori bina dikhawe kewal prem ka naata hai,\nSewa ke paseene se Guru ghar ka aangan jagmagata hai.',
    'Hands united in Kar Seva while lips chant Waheguru,\nElders and youth alike serving together in one spirit.\nSeeking neither wage nor praise, bound purely by love,\nHonest sweat polishes every stone of the sacred court.',
    'KarSeva',
    346
  ],
  [
    'अमृत सरोवर की पावन शांति',
    'चारों दिशाओं में खुले द्वार यह हरिमंदिर का आँगन है,\nसब धर्मों का स्वागत करता निर्मल पावन दर्पण है।\nसरोवर के शीतल जल संग जब शबद हृदय को छू जाए,\nजन्मों-जन्मों की व्याकुलता पल भर में शांत हो जाए।',
    'Chaaron dishaon mein khule dwar yah Harmandir ka aangan hai,\nSab dharmon ka swagat karta nirmal paawan darpan hai.\nSarovar ke sheetal jal sang jab shabad hriday ko chhoo jaaye,\nJanmon-janmon ki vyakulta pal bhar mein shaant ho jaaye.',
    'Four open doorways face all directions at Harmandir Sahib,\nWelcoming every seeker across humanity without barrier.\nWhere tranquil waters reflect hymns of eternal peace,\nRestlessness of ages dissolves inside a single moment.',
    'HarmandirSahib',
    421
  ],
  [
    'संगत के चरणों की धूल',
    'साध संगत की चरण धूलि मस्तक पर जो लगाता है,\nबुरे विचारों से छूट सहज निर्मल जीवन पाता है।\nजैसे चंदन पास बैठ नीम भी महकने लगता है,\nसत्संगत में आकर सूखा मन भी चहकने लगता है।',
    'Sadh sangat ki charan dhooli mastak par jo lagata hai,\nBure vicharon se chhoot sahaj nirmal jeevan paata hai.\nJaise chandan paas baith neem bhi mehakne lagta hai,\nSatsangat mein aakar sookha mann bhi chehakne lagta hai.',
    'Honoring the humble company of noble spiritual seekers,\nGently frees the mind from negativity into clear living.\nJust as trees near sandalwood absorb its sweet fragrance,\nA weary heart blossoms anew amid holy fellowship.',
    'SadhSangat',
    334
  ],
  [
    'भाई कन्हैया जी की सेवा दृष्टि',
    'रणभूमि में भी शत्रु-मित्र का भेद जिन्होंने बिसराया,\nहर घायल मुख में वाहेगुरु का ही नूर नज़र आया।\nमरहम और जल पिला के भाई कन्हैया अमर हुए,\nसेवा के सर्वोच्च शिखर पर करुणा के हस्ताक्षर हुए।',
    'Ranbhoomi mein bhi shatru-mitra ka bhed jinhone bisraya,\nHar ghayal mukh mein Waheguru ka hi noor nazar aaya.\nMarham aur jal pila ke Bhai Kanhaiya amar hue,\nSewa ke sarvocch shikhar par karuna ke hastakshar hue.',
    'Even on the battlefield seeing neither foe nor stranger,\nBeholding Waheguru’s face within every wounded soul.\nOffering water and salve, Bhai Kanhaiya Ji shone immortal,\nInscribing compassion upon the summit of human service.',
    'BhaiKanhaiyaJi',
    387
  ],
  [
    'तन मन धन सब तेरा',
    'तेरा तुझको सौंपते क्या लागे है मेरा दातार,\nसेवा का अवसर मिलना ही तेरा सबसे बड़ा उपकार।\nहाथ चलें परोपकार में जिह्वा जपे सदा सतनाम,\nगुरसिख के जीवन का बस इतना सा पावन पैग़ाम।',
    'Tera tujhko saunpte kya laage hai mera Daatar,\nSewa ka avsar milna hi tera sabse bada upkar.\nHaath chalein paropkar mein jihva jape sada Satnam,\nGursikh ke jeevan ka bas itna sa paawan paigham.',
    'Offering Yours back unto You, nothing was ever mine,\nBeing blessed to serve is itself Your greatest favor.\nHands busy in kindness while the tongue chants Satnam,\nSuch is the pure message of a devoted Gursikh life.',
    'NishkamSeva',
    359
  ],
  [
    'सच्चे दिल की अरदास',
    'हाथ जोड़ जब अकाल पुरख के सम्मुख खड़े हो जाते हैं,\nकहे-अनकहे सारे दुखड़े अरदास में बह जाते हैं।\nदुनिया के हर सहारे से बड़ी गुरु घर की अरदास है,\nडूबे बेड़े पार लगाती वाहेगुरु पर विश्वास है।',
    'Haath jod jab Akal Purakh ke sammukh khade ho jaate hain,\nKahe-ankahe saare dukhde Ardaas mein beh jaate hain.\nDuniya ke har sahare se badi Guru ghar ki Ardaas hai,\nDoobe bede paar lagati Waheguru par vishwas hai.',
    'Standing with folded hands before the Timeless Lord,\nSpoken and unspoken burdens melt away in Ardaas.\nGreater than all earthly support is heartfelt supplication,\nFerrying sinking vessels safely ashore through faith.',
    'Ardaas',
    429
  ],
  [
    'सरबत दा भला की प्रार्थना',
    'केवल अपने घर की नहीं जग भर की खैर मनाते हैं,\nसरबत दा भला माँग कर ही अरदास संपूर्ण कराते हैं।\nना किसी का बुरा सोचें ना किसी से ईर्ष्या पालें,\nवाहेगुरु सबका मंगल करे यही दुआ हर रोज़ उछालें।',
    'Kewal apne ghar ki nahi jag bhar ki khair manate hain,\nSarbat da bhala maang kar hi Ardaas sampoorna karate hain.\nNa kisi ka bura sochein na kisi se irshya paalein,\nWaheguru sabka mangal kare yahi dua har roz uchhalein.',
    'Praying not for our home alone, rather for all creation,\nEvery Sikh prayer concludes wishing Sarbat Da Bhala.\nHarboring ill will toward none across the wide earth,\nAsking Waheguru daily to bless every living being.',
    'SarbatDaBhala',
    443
  ],
  [
    'चढ़दी कला का अडिग जज़्बा',
    'तूफ़ान कितने भी घने हों हौसला कभी न गिरने दें,\nचढ़दी कला में रहकर हर मुश्किल का सीना चिरने दें।\nमायूसी का अंधेरा गुरु के सिंह को छू नहीं पाता,\nवाहेगुरु की कृपा से हर काँटा फूल बन जाता।',
    'Toofan kitne bhi ghane hon hausla kabhi na girne dein,\nChardi kala mein rehkar har mushkil ka seena chirne dein.\nMayusi ka andhera Guru ke Singh ko chhoo nahi paata,\nWaheguru ki kripa se har kaanta phool ban jaata.',
    'However fierce the storm blows, never let spirits sink,\nAbiding in Chardi Kala, radiant optimism lights the path.\nGloom cannot overtake a heart anchored in the Guru,\nThrough Waheguru’s grace even thorns turn to blossoms.',
    'ChardiKala',
    414
  ],
  [
    'मन नीवाँ मति ऊँची',
    'मन नीवाँ रहे सदा हमारा और मति रहे आकाश सी ऊँची,\nमति का राखा आप वाहेगुरु रखे भावना सच्ची-सूची।\nपद और पैसे के मद में कभी पाँव न बहकने पाएँ,\nविनम्रता और विवेक से हम सिखी की महक फैलाएँ।',
    'Mann neevan rahe sada hamara aur mati rahe aakash si oonchi,\nMati ka raakha aap Waheguru rakhe bhavna sacchi-soochi.\nPad aur paise ke mad mein kabhi paanv na behakne paayein,\nVinamrata aur vivek se hum Sikhi ki mehak phailayein.',
    'May our mind remain humble and our wisdom soar high,\nWith Waheguru Himself guarding clarity of thought.\nLet neither wealth nor status ever sway steady steps,\nSpreading grace through humility and noble discernment.',
    'ManNeevaMatUchi',
    396
  ],
  [
    'दया और धर्म का नाता',
    'धौल धर्म दया का पूत संतोख थाप रखा जिन सूत,\nदया बिना धर्म की मूरत रहती सदा ही रूखी-अधूत।\nकमज़ोर के आँसू पोंछना ही सच्ची इबादत जानो,\nकरुणा के झरने में ही अकाल पुरख को पहचानो।',
    'Dhaul dharm daya ka poot santokh thaap rakha jin soot,\nDaya bina dharm ki moorat rehti sada hi rookhi-adhoot.\nKamzor ke aansu ponchhna hi sacchi ibadat jaano,\nKaruna ke jharne mein hi Akal Purakh ko pehchano.',
    'Righteousness is born of compassion and held in balance,\nWithout mercy, outward religion remains an empty shell.\nWiping tears of the vulnerable is truest devotion,\nRecognizing the Timeless Lord within springs of kindness.',
    'DayaDharam',
    348
  ],
  [
    'शुक्राना मेरे दात्या',
    'जो दिया है तूने दात्या मेरी औक़ात से कहीं ज़्यादा है,\nतेरी रहमत का शुक्रिया करना हर साँस का वादा है।\nसर पर छत, तन पर कपड़ा और लब पर तेरा नाम रहे,\nवाहेगुरु जी आपके चरणों में ही मेरा मुकाम रहे।',
    'Jo diya hai tune Daatya meri auqat se kahin zyada hai,\nTeri rehmat ka shukriya karna har saans ka waada hai.\nSar par chhat, tan par kapda aur lab par tera Naam rahe,\nWaheguru ji aapke charnon mein hi mera muqam rahe.',
    'What You have granted, O Giver, exceeds all deserving,\nEvery breath pledges heartfelt gratitude for Your grace.\nBlessed with shelter, sustenance, and Your Name on my lips,\nMay my heart rest forever beside Your sacred feet.',
    'ShukranaWaheguru',
    409
  ],
  [
    'गुरमति का उजला मार्ग',
    'मनमति छोड़ के गुरमति पकड़ो तब छँटती है धुंध घनी,\nगुरु के शबद की कसौटी पर ही कुंदन सी काया बनी।\nक्रोध, लोभ, मोह, अहंकार को नाम सिमरन से जीतो,\nवाहेगुरु की रज़ा में हँसकर जीवन का हर पल बीतो।',
    'Manmati chhod ke Gurmati pakdo tab chhatti hai dhundh ghani,\nGuru ke shabad ki kasauti par hi kundan si kaaya bani.\nKrodh, lobh, moh, ahankar ko Naam simran se jeeto,\nWaheguru ki raza mein hanskar jeevan ka har pal beeto.',
    'Set aside self-will for the Guru’s wisdom and mist clears,\nRefined upon the touchstone of Shabad shines pure gold.\nOvercome anger, greed, attachment, and pride by Simran,\nLiving every moment cheerfully in Waheguru’s grace.',
    'Gurmat',
    357
  ],
  [
    'अकाल तख़्त और सच की आवाज़',
    'मीरी और पीरी की जोड़ी भक्ति संग शक्ति का मेल,\nसच के आगे टिक न सका कभी ज़ालिम सत्ता का खेल।\nरूहानियत की नींव पर खड़ा इंसाफ़ का ऊँचा द्वारा,\nसिख इतिहास का हर पन्ना देता साहस का उजियारा।',
    'Miri aur Piri ki jodi bhakti sang shakti ka mel,\nSach ke aage tik na saka kabhi zaalim satta ka khel.\nRoohaniyat ki neev par khada insaaf ka ooncha dwara,\nSikh itihas ka har panna deta saahas ka ujiyara.',
    'Miri and Piri unite spiritual grace with moral strength,\nBefore steadfast truth no unjust tyranny endures.\nFounded on devotion stands the high court of justice,\nEvery page of Sikh heritage radiates fearless light.',
    'MiriPiri',
    374
  ],
  [
    'सचखंड की पावन लगन',
    'निरंकार के देश सचखंड में बसता शाश्वत प्रकाश,\nजहाँ न जन्म-मरण का दुख है ना कोई अधूरी प्यास।\nगुरबाणी के जहाज़ पर चढ़ वाहेगुरु सिमरन कर भाई,\nसच्चे सतगुरु की कृपा से ही जीवात्मा मुक्ति पाई।',
    'Nirankar ke desh Sachkhand mein basta shashwat prakash,\nJahan na janm-maran ka dukh hai na koi adhoori pyas.\nGurbani ke jahaz par chadh Waheguru simran kar bhai,\nSacche Satguru ki kripa se hi jeevatma mukti paayi.',
    'In Sachkhand, realm of the Formless One, shines eternal light,\nBeyond sorrow and longing abides unbroken peace.\nBoard the vessel of Gurbani chanting Waheguru’s Name,\nThrough the True Guru’s grace the soul attains union.',
    'Sachkhand',
    436
  ]
];

export const SIKH_DHARM_SHAYARIS: Shayari[] = SIKH_RAW.map(
  ([title, hindi, hinglish, english, tag, initialLikes], index) => {
    const linesHindi = hindi.split('\n');
    return {
      id: `sikh-dharm-${index + 1}`,
      category: 'sikh-dharm',
      categoryType: 'feelings',
      categoryName: 'Sikh Dharm (सिख धर्म)',
      categoryIcon: '☬',
      title,
      lines: linesHindi,
      linesHindi,
      linesHinglish: hinglish.split('\n'),
      linesEnglish: english.split('\n'),
      tags: [tag, 'SikhDharm', 'Waheguru'],
      author: 'ZQ-FEELINGS 💗',
      initialLikes
    };
  }
);
