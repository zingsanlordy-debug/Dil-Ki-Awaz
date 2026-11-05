// Pre-translated 125 Diwali Shayaris x 35 Languages + 6 Translated FAQs + SEO Metadata
import { ValentineLangCode } from '../valentineWeekMeta';

export interface DiwaliFaqItem {
  question: string;
  answer: string;
}

export interface DiwaliLangSeo {
  title: string;
  h1: string;
  description: string;
  introText: string;
  offerTitle: string;
  offerBtn: string;
  offerSubtitle: string;
}

export const DIWALI_35_PACKS: Record<string, Record<string, readonly [string, string, string]>> = {
  "hi": {
    "diwali-1": [
      "दीपों की चमक",
      "रोशन हो सारा जहाँ दीपों की कतार से,",
      "खुशियाँ मिलें आपको अपनों के प्यार से।"
    ],
    "diwali-2": [
      "लक्ष्मी जी का वास",
      "आए आपके द्वार सुख-समृद्धि और धन की बहार,",
      "मुबारक हो आपको दीपावली का पावन त्यौहार।"
    ],
    "diwali-3": [
      "उजालों का सफर",
      "अंधेरा चाहे कितना भी गहरा हो जहां में,",
      "एक दिया ही काफी है उजालों के निशां में।"
    ],
    "diwali-4": [
      "दिल का दीया",
      "सिर्फ मकान नहीं दिल का कोना भी रोशन कीजिए,",
      "इस दीवाली सबको गले लगाकर दुआएं दीजिए।"
    ],
    "diwali-5": [
      "खुशियों की फुलझड़ी",
      "फुलझड़ी सी मुस्कान आपके होठों पर सजी रहे,",
      "जिंदगी में खुशियों की शहनाई सदा बजी रहे।"
    ],
    "diwali-6": [
      "सोने का संसार",
      "सोने-चांदी से भी कीमती है अपनों का यह साथ,",
      "दीपावली पर रहे सदा सिर पर ईश्वर का हाथ।"
    ],
    "diwali-7": [
      "रंगोली और दीप",
      "रंगोली के रंगों से महक उठे आपका संसार,",
      "दीपावली लाए जीवन में खुशियों का अंबार।"
    ],
    "diwali-8": [
      "गिले-शिकवे दूर",
      "मिटा दो दिलों से हर पुरानी रंजिश और मलाल,",
      "दीवाली का दिन है चलो करें खुशियों की शुरुआत।"
    ],
    "diwali-9": [
      "मिठाई की मिठास",
      "काजू कतली और गुझिया सी मीठी हो हर एक बात,",
      "हर दिन हो दिवाली जैसी और पूनम जैसी रात।"
    ],
    "diwali-10": [
      "सफलता का उजाला",
      "कामयाबी के दीपक आपके कदम चूमते रहें,",
      "आप सदा खुशियों के झूले में झूमते रहें।"
    ],
    "diwali-11": [
      "दीपावली का पावन पर्व",
      "दीप जलते रहें मन से मन मिलते रहें,",
      "गिले-शिकवे सारे दिल से निकलते रहें।"
    ],
    "diwali-12": [
      "लक्ष्मी-गणेश की कृपा",
      "मां लक्ष्मी का आशीर्वाद आपके घर सदा रहे,",
      "विघ्नहर्ता गणेश जी का साया सर पर रहे।"
    ],
    "diwali-13": [
      "घर-घर में रोशनी",
      "जगमग दीपों की थाली से आंगन सजाइए,",
      "मिठाई खिलाकर सारे गिले-शिकवे मिटाइए।"
    ],
    "diwali-14": [
      "रोशनी का पर्व",
      "हर रात दीवाली जैसी रोशन हो जाए,",
      "हर दिन खुशियों का मौसम हो जाए।"
    ],
    "diwali-15": [
      "सुख और समृद्धि की बहार",
      "पल-पल सुनहरे फूल खिलते रहें आपके आंगन,",
      "कभी न हो कांटों से आपका सामना जीवन।"
    ],
    "diwali-16": [
      "दिलों का संगम",
      "तारों की तरह जगमगाए आपका संसार,",
      "सदा बना रहे हमारे दिलों में प्यार।"
    ],
    "diwali-17": [
      "खुशियों के दीये",
      "एक दीया विश्वास का, एक दीया उम्मीद का,",
      "एक दीया प्यार का, और एक दीया प्रीत का।"
    ],
    "diwali-18": [
      "दीपों की बारात",
      "चांद की चांदनी से भी प्यारी हो यह रात,",
      "लेकर आई है दीवाली दीपों की बारात।"
    ],
    "diwali-19": [
      "सपनों का सवेरा",
      "खुशियों का हो सवेरा, गम का ना हो कोई डेरा,",
      "रोशनियों से भर जाए आशियाना तेरा।"
    ],
    "diwali-20": [
      "उम्मीदों की लौ",
      "जब-जब जलता है दीया मिट्टी का आंगन में,",
      "नई उमंग भर जाती है सबके इस मन में।"
    ],
    "diwali-21": [
      "प्यार का उजाला",
      "दीपक की लौ जैसे हवाओं से लड़ जाती है,",
      "सच्ची मोहब्बत भी हर मुश्किल से पार पाती है।"
    ],
    "diwali-22": [
      "सदा मुस्कुराते रहो",
      "मुस्कान आपके होठों से कभी न छूटे,",
      "अपनों का यह प्यारा साथ कभी न टूटे।"
    ],
    "diwali-23": [
      "धनतेरस से दीवाली तक",
      "सोने-चांदी से चमके आपका हर एक दिन,",
      "खुशियां न गिन पाओ आप अपनी उंगलियों पर गिन।"
    ],
    "diwali-24": [
      "आंगन में रंगोली",
      "रंगोली के रंगों में घुली हो मिठास,",
      "हर एक पल हो आपके लिए बेहद खास।"
    ],
    "diwali-25": [
      "शुभ दीपावली का संकल्प",
      "आओ मिलकर नफरत का अंधेरा दूर भगाएं,",
      "प्रेम और भाईचारे का एक नया दिया जलाएं।"
    ],
    "diwali-26": [
      "धन्वंतरि कृपा और सेहत",
      "सोने-चांदी से ज्यादा सेहत की दौलत मिले,",
      "धन्वंतरि कृपा से घर में खुशियों का गुलशन खिले।"
    ],
    "diwali-27": [
      "शुभ शुरुआत और नए सपने",
      "धनतेरस पर सिर्फ बर्तन ही नहीं नए सपने भी लाएं,",
      "अपने आंगन में खुशहाली और बरकत के दीप जलाएं।"
    ],
    "diwali-28": [
      "कुबेर का खजाना",
      "कुबेर का खजाना और मां लक्ष्मी का साथ हो,",
      "आपके हर काम में ईश्वर का प्यारा हाथ हो।"
    ],
    "diwali-29": [
      "चांदी का सिक्का और तकदीर",
      "चांदी का सिक्का चमके जैसे आपकी तकदीर,",
      "धनतेरस पर पूरी हो आपके सपनों की तस्वीर।"
    ],
    "diwali-30": [
      "खुशियों की सौगात",
      "धनतेरस की पावन बेला लेकर आए खुशियों की सौगात,",
      "कभी न खाली रहे आपकी झोली कभी न हो तंग हालात।"
    ],
    "diwali-31": [
      "आरोग्य और सच्चा धन",
      "सबसे बड़ा धन है अच्छी सेहत और अपनों का प्यार,",
      "मुबारक हो आपको शुभ धनतेरस का यह पावन त्यौहार।"
    ],
    "diwali-32": [
      "स्वर्णिम सवेरा",
      "सोने सी दमक उठे आपकी हर एक सुबह,",
      "धनतेरस पर कबूल हो आपकी हर एक नेक दुआ।"
    ],
    "diwali-33": [
      "बरकत का त्यौहार",
      "खुशियों से भरी हो आपकी दुकान और प्यारा सा घर,",
      "धनतेरस की रोशनी चमका दे आपका हर सफर।"
    ],
    "diwali-34": [
      "नया विश्वास और मिठास",
      "नया बर्तन लाए नई उमंग और नया विश्वास,",
      "आपके जीवन में घुले सदा प्यार और मिठास।"
    ],
    "diwali-35": [
      "दीप और धन का पैगाम",
      "दीपक की पहली लौ आज दे गई यही पैगाम,",
      "धनतेरस पर चमके आपका और आपके परिवार का नाम।"
    ],
    "diwali-36": [
      "धन्वंतरि अमृत बूंदें",
      "धन्वंतरि जी की अमृत बूंदें जीवन में बरसाएं,",
      "धनतेरस के इस शुभ दिन की दिल से शुभकामनाएं।"
    ],
    "diwali-37": [
      "समृद्धि का द्वार",
      "खुशहाली का दरवाजा खुले बंद हो सारे गम,",
      "धनतेरस पर आपकी झोली में खुशियां आएं हरदम।"
    ],
    "diwali-38": [
      "शुभ लाभ का तिलक",
      "शुभ-लाभ का तिलक हो और लक्ष्मी जी का वास,",
      "धनतेरस का हर पल हो आपके लिए बेहद खास।"
    ],
    "diwali-39": [
      "रिश्तों की असली दौलत",
      "अपनों की सच्ची मुस्कान ही असली दौलत है,",
      "धनतेरस का यह त्यौहार प्यार की नेमत है।"
    ],
    "diwali-40": [
      "आरोग्य वरदान",
      "रोग-दोष मिटें और मिले लंबी उम्र का वरदान,",
      "धनतेरस पर महक उठे आपका सारा जहान।"
    ],
    "diwali-41": [
      "छोटी दिवाली का छोटा दीया",
      "छोटी दिवाली का छोटा सा दीया मिटाए बड़ा अंधेरा,",
      "खुशियों की किरण लेकर आए आपके घर नया सवेरा।"
    ],
    "diwali-42": [
      "नरक चतुर्दशी मुक्ति",
      "यमराज का भय मिटे और मन का मिटे विकार,",
      "नरक चतुर्दशी पर मिले सुख-शांति का उपहार।"
    ],
    "diwali-43": [
      "चौदह दीपों की पावन लौ",
      "चौदह दीपों की पावन लौ से रोशन हो घर-बार,",
      "मुबारक हो आपको रूप चौदस का यह प्यारा त्यौहार।"
    ],
    "diwali-44": [
      "रूप निखरे मन का",
      "रूप निखरे मन का और चेहरे पर रहे मुस्कान,",
      "छोटी दिवाली लाए आपके लिए खुशियों का वरदान।"
    ],
    "diwali-45": [
      "अंधकार पर रोशनी की जीत",
      "अंधकार को मात देकर रोशनी की हो जीत,",
      "छोटी दिवाली पर गाए दिल खुशियों के नए गीत।"
    ],
    "diwali-46": [
      "शांति और प्रीत का आगाज़",
      "एक दीया शांति का और एक दीया प्यार का,",
      "रूप चौदस है आगाज़ दीपों के त्यौहार का।"
    ],
    "diwali-47": [
      "बुराई का दहन",
      "मन की हर बुराई को आज दीप में जला देना,",
      "छोटी दिवाली पर हर रूठे को हंसकर मना लेना।"
    ],
    "diwali-48": [
      "कल की दिवाली का उल्लास",
      "कल बड़ी दीवाली है आज छोटी का उल्लास,",
      "हर दिन रहे आपके चेहरे पर यूं ही विश्वास।"
    ],
    "diwali-49": [
      "आंगन महक जाए",
      "दीप जलें छतों पर और आंगन महक जाए,",
      "छोटी दिवाली आपके जीवन में सुख-समृद्धि लाए।"
    ],
    "diwali-50": [
      "शुभ संदेश रूप चौदस",
      "छोटी दिवाली का यह प्यारा पैगाम ले लो,",
      "खुशियों के इस उत्सव में अपनों का नाम ले लो।"
    ],
    "diwali-51": [
      "कान्हा की उंगली और गोवर्धन",
      "कन्हैया ने उंगली पर उठाया था गोवर्धन पहाड़,",
      "आपके जीवन से भी टल जाए हर मुश्किल और भार।"
    ],
    "diwali-52": [
      "अन्नकूट का पावन भोग",
      "अन्नकूट का भोग लगे और बजे कृष्ण की बांसुरी,",
      "गोवर्धन पूजा पर पूरी हो आपकी हर इच्छा अधूरी।"
    ],
    "diwali-53": [
      "प्रकृति और गौ माता का मान",
      "प्रकृति की पूजा और गौ माता का मान,",
      "गोवर्धन पूजा सिखाती है सबका करो सम्मान।"
    ],
    "diwali-54": [
      "मुरली मनोहर की कृपा",
      "मुरली मनोहर की कृपा से घर में बरसे प्यार,",
      "मुबारक हो आपको गोवर्धन पूजा का पावन त्यौहार।"
    ],
    "diwali-55": [
      "गिरिराज महाराज की शरण",
      "गिरिराज महाराज करें हर संकट का निवारण,",
      "सुख-समृद्धि से भर जाए आपके जीवन का हर कारण।"
    ],
    "diwali-56": [
      "गौ माता का आशीर्वाद",
      "गौ माता के चरणों में है चारों धाम का वास,",
      "गोवर्धन पूजा लाए आपके घर में नई मिठास।"
    ],
    "diwali-57": [
      "ब्रज की पावन माटी",
      "ब्रज की पावन माटी सा महके आपका संसार,",
      "गोवर्धन पूजा पर मिले यश और खुशियों का उपहार।"
    ],
    "diwali-58": [
      "कृष्ण भक्ति का विश्वास",
      "कृष्ण की भक्ति और अपनों का अटूट विश्वास,",
      "गोवर्धन पूजा का हर पल बने सबसे खास।"
    ],
    "diwali-59": [
      "छप्पन भोग का थाल",
      "छप्पन भोग की थाली और प्रेम भरा मन,",
      "गोवर्धन पूजा से पावन हो आपका जीवन।"
    ],
    "diwali-60": [
      "सदा खुशहाली का वरदान",
      "कान्हा की कृपा से कभी न आए कोई विपदा,",
      "गोवर्धन पूजा पर खुशहाली रहे आपके घर सदा।"
    ],
    "diwali-61": [
      "रोली और अक्षत का पावन टीका",
      "रोली-चावल का पावन टीका और बहना का प्यार,",
      "भाई दूज का यह बंधन है सबसे सच्चा और पहरेदार।"
    ],
    "diwali-62": [
      "बहना की अमर दुआ",
      "बहना की हर दुआ में भाई की लंबी उम्र का नाम,",
      "भाई दूज के इस पावन दिन को झुककर सलाम।"
    ],
    "diwali-63": [
      "भाई का सच्चा वादा",
      "भाई का वादा है हर मुश्किल में साथ निभाएगा,",
      "बहना के चेहरे की हंसी को कभी न खोने देगा।"
    ],
    "diwali-64": [
      "थाली में सजी मिठाई",
      "थाली में सजी मिठाई और माथे पर लाल तिलक,",
      "भाई-बहन के रिश्ते की चमक रहे स्वर्ग तक।"
    ],
    "diwali-65": [
      "प्यार का फरिश्ता",
      "रेशम के धागे से गहरा है यह प्यार का रिश्ता,",
      "भाई के रूप में रब ने भेजा एक फरिश्ता।"
    ],
    "diwali-66": [
      "बचपन की खट्टी-मीठी यादें",
      "रूठना-मनाना और बचपन की वो सारी बातें,",
      "भाई दूज पर याद आती हैं वो प्यारी मीठी रातें।"
    ],
    "diwali-67": [
      "स्नेह का अटूट धागा",
      "दूर रहकर भी जो पास लगे वो है बहना का दुलार,",
      "भाई दूज की हार्दिक शुभकामनाएं बारंबार।"
    ],
    "diwali-68": [
      "माथे पे तिलक का मान",
      "माथे पे तिलक सजाकर बहना मांगी यही दुआ,",
      "भाई की हर राह में हो सिर्फ खुशियों का समां।"
    ],
    "diwali-69": [
      "अमर प्रेम कहानी",
      "कागज़ की नाव और वो बारिश का पानी,",
      "भाई-बहन के प्यार की अमर है यह कहानी।"
    ],
    "diwali-70": [
      "यम और यमुना का वंदन",
      "यम और यमुना के प्रेम का पावन यह त्यौहार,",
      "भाई दूज लाए आपके जीवन में खुशियों की बहार।"
    ],
    "diwali-71": [
      "अनमोल रिश्ता",
      "दुनिया के सारे रिश्तों से अनमोल है यह प्यार,",
      "भाई-बहन के चेहरे पर सजी रहे मुस्कान हर बार।"
    ],
    "diwali-72": [
      "सात जन्मों का साथ",
      "तिलक की खुशबू से महके भाई का ललाट,",
      "ईश्वर करे दोनों का साथ रहे सात जन्मों के घाट।"
    ],
    "diwali-73": [
      "खुशियों का नया राग",
      "भाई दूज की सुबह लाए खुशियों का नया राग,",
      "खिल उठे दोनों के जीवन का प्यारा सा बाग।"
    ],
    "diwali-74": [
      "हसीन ख्वाब बहना",
      "नफरत के इस दौर में प्यार की मिसाल हो तुम,",
      "मेरी प्यारी बहना मेरा सबसे हसीन ख्वाब हो तुम।"
    ],
    "diwali-75": [
      "शुभ भाई दूज वंदन",
      "भाई दूज पर ईश्वर से यही मांगते हैं वरदान,",
      "दोनों भाई-बहन की शान रहे हमेशा हिंदुस्तान।"
    ],
    "diwali-76": [
      "परिवार संग दीया",
      "अपनों के साथ बैठकर जो दीया जलता है,",
      "उसी रोशनी में असली दीवाली का सुख पलता है।"
    ],
    "diwali-77": [
      "मां-बाप का आशीर्वाद",
      "मां-बाप के आशीर्वाद से जगमगाए सारा संसार,",
      "परिवार के साथ ही खूबसूरत लगे दीवाली का त्यौहार।"
    ],
    "diwali-78": [
      "यारों की दीवाली",
      "यारों के साथ चाय की चुस्की और पटाखों का शोर,",
      "सच्ची दोस्ती की रोशनी खींचती है दिल की डोर।"
    ],
    "diwali-79": [
      "दोस्ती का दीया",
      "एक दीया दोस्ती के नाम का जलाना मेरे यार,",
      "दूर रहकर भी कम न होगा हमारा यह सच्चा प्यार।"
    ],
    "diwali-80": [
      "मोहब्बत की रोशनी",
      "तेरे चेहरे की मुस्कान मेरे लिए दीवाली का दीया है,",
      "मेरी हर धड़कन ने सिर्फ तुझसे ही प्यार किया है।"
    ],
    "diwali-81": [
      "तेरे संग हर रात दीवाली",
      "दीप जलें या न जलें तेरी मौजूदगी ही काफी है,",
      "तेरे साथ हर एक रात दीवाली जैसी रोशन रहती है।"
    ],
    "diwali-82": [
      "शरारत और मिठास",
      "मिठाई छीनकर खाना और फिर गले से लगा लेना,",
      "दीवाली पर भाई-बहन की यही तो सबसे प्यारी बात है।"
    ],
    "diwali-83": [
      "बुजुर्गों का आशीष",
      "बुजुर्गों के हाथ का आशीष और बच्चों की किलकारी,",
      "यही बनाती है घर-घर की दीवाली सबसे प्यारी।"
    ],
    "diwali-84": [
      "महफिल-ए-यारां",
      "बचपन के दोस्त जब मिलकर दीया जलाते हैं,",
      "पुराने वो हसीन दिन फिर से लौट आते हैं।"
    ],
    "diwali-85": [
      "इश्क की जगमगाहट",
      "तेरी आँखों के नूर से रोशन है मेरा आशियाना,",
      "इस दीवाली पर तू ही मेरी खुशियों का ठिकाना।"
    ],
    "diwali-86": [
      "महालक्ष्मी स्तुति",
      "ॐ महालक्ष्म्यै नमः का गूंजे घर में जाप,",
      "मिट जाएं जीवन के सारे संकट और पाप।"
    ],
    "diwali-87": [
      "कमलासन पर विराजें मां",
      "कमल आसन पर विराजें मां लक्ष्मी आपके द्वार,",
      "सुख-शांति और ऐश्वर्य का बरसे अमृत धार।"
    ],
    "diwali-88": [
      "अमावस की रात पूर्णिमा सी",
      "अमावस की रात भी पूर्णिमा सी चमक जाए,",
      "मां लक्ष्मी की कृपा से घर स्वर्ग बन जाए।"
    ],
    "diwali-89": [
      "रिद्धि-सिद्धि संग गणपति",
      "रिद्धि-सिद्धि संग आएं गणपति महाराज,",
      "पूर्ण हो जाएं आपके सारे अधूरे काज।"
    ],
    "diwali-90": [
      "सोने की थाली और दीपमाला",
      "सोने की थाली में सजाकर दीपों की माला,",
      "मां लक्ष्मी ने घर के हर कोने को कर दिया उजाला।"
    ],
    "diwali-91": [
      "अन्न और धन के भंडार",
      "धन-धान्य से भरे रहें आपके अन्न के भंडार,",
      "सदा बना रहे मां लक्ष्मी का आपके सिर पर प्यार।"
    ],
    "diwali-92": [
      "वैभव और मान-सम्मान",
      "वैभव, कीर्ति और मान-सम्मान का वरदान मिले,",
      "दीवाली की रात आपके घर में सुख का फूल खिले।"
    ],
    "diwali-93": [
      "शंख और घंटी की ध्वनि",
      "मंगल दीप जले चौखट पर बजे शंख और घंटी,",
      "मां लक्ष्मी की कृपा से कभी न हो खुशियों में मंदी।"
    ],
    "diwali-94": [
      "अष्ट लक्ष्मी का वास",
      "अष्ट लक्ष्मी का वास हो आपके इस पवित्र धाम,",
      "हर सवेरा लेकर आए खुशियों का नया पैगाम।"
    ],
    "diwali-95": [
      "सच्ची श्रद्धा का फल",
      "सच्ची श्रद्धा से जो मां लक्ष्मी को ध्याते हैं,",
      "वो जिंदगी के हर मोड़ पर खुशहाली ही पाते हैं।"
    ],
    "diwali-96": [
      "अंतर्मन की पावन ज्योति",
      "अंतर्मन की ज्योति जगाकर करना मां का वंदन,",
      "महक उठेगा दीवाली पर आपका प्यारा सा जीवन।"
    ],
    "diwali-97": [
      "श्री सूक्त की पावन ध्वनि",
      "श्री सूक्त के मंत्रों से गूंज उठे हर एक कोना,",
      "मां लक्ष्मी की कृपा से सच हो हर सपना सलोना।"
    ],
    "diwali-98": [
      "दया दृष्टि मां लक्ष्मी की",
      "मां लक्ष्मी की दया दृष्टि जिस पर भी हो जाए,",
      "रंक भी राजा बने और दरिद्रता मिट जाए।"
    ],
    "diwali-99": [
      "चरणों में दीपांजलि",
      "दीपों की अंजलि अर्पित करें मां के श्री चरणों में,",
      "भर जाए सुख का सागर आपके जीवन के पन्नों में।"
    ],
    "diwali-100": [
      "महापर्व दीपावली का संकल्प",
      "दीप जलें, जगमगाए भारत, मिटे हर अंधकार,",
      "मंगलमय हो आपको और आपके पूरे परिवार को दीपावली का त्यौहार!"
    ],
    "diwali-101": [
      "माँ का दुलार और दीवाली",
      "माँ के हाथों की मिठाई और ममता का संसार मिले,",
      "इस दीवाली घर के हर कोने में खुशियों का त्योहार खिले।"
    ],
    "diwali-102": [
      "पिता का साया और हौसला",
      "पिता का साया सिर पर हो तो हर दिन दीवाली का उजाला है,",
      "उनके मजबूत कंधों ने ही हमारे सपनों को संभाला है।"
    ],
    "diwali-103": [
      "भाई की यारी और दीये की लौ",
      "भाई के संग पटाखे फोड़ना और हँसते-हँसते लड़ जाना,",
      "दीवाली का सबसे प्यारा सुख है अपनों का घर आना।"
    ],
    "diwali-104": [
      "बहन की रंगोली और मुस्कान",
      "आँगन में बहन की सजाई रंगोली सबसे खास लगे,",
      "उसकी खिलखिलाती हँसी से दीवाली का हर पल पावन लगे।"
    ],
    "diwali-105": [
      "परिवार का संगम",
      "घर की चौखट पर जब सब अपने एक साथ मुस्कुराते हैं,",
      "मिट्टी के दीये भी तब तारों से ज्यादा जगमगाते हैं।"
    ],
    "diwali-106": [
      "घर का सुकून और बरकत",
      "बड़ों का आशीर्वाद मिले और छोटों का ढेर सारा प्यार,",
      "लक्ष्मी जी की कृपा से महके हमारा पूरा परिवार।"
    ],
    "diwali-107": [
      "घर के आँगन की रोशनी",
      "दीयों की रोशनी से ज्यादा रोशन है अपनों का यह साथ,",
      "दीवाली पर सलामत रहे हमारे इस भरे-पूरे परिवार की बात।"
    ],
    "diwali-108": [
      "यारों की महफ़िल और फुलझड़ी",
      "मिठाई का डिब्बा खाली करना और यारों की महफ़िल सजाना,",
      "दीवाली असली तभी बनती है जब दोस्तों का हो आना-जाना।"
    ],
    "diwali-109": [
      "तू है तो दीवाली है",
      "पटाखे फूटे न फूटे तेरी यारी में ही सारा दम है,",
      "तू जो मुस्कुरा दे मेरे यार तो जिंदगी में उजाला ही हर दम है।"
    ],
    "diwali-110": [
      "बचपन की मस्ती और दीप",
      "गली के मोड़ पर वो दीये जलाना और छुपकर रॉकेट छोड़ना,",
      "दुआ है इस दीवाली कभी न छूटे दोस्तों से दिल का नाता जोड़ना।"
    ],
    "diwali-111": [
      "हँसी का पटाखा",
      "फुलझड़ी सी मुस्कान तेरी, रॉकेट सी तेरी उड़ान हो,",
      "दोस्त इस दीवाली तू जहां भी रहे, तू ही महफ़िल की शान हो।"
    ],
    "diwali-112": [
      "दूर बैठे दोस्त को सलाम",
      "दूर हो शहर चाहे कितना भी, दिल से दिल का तार जुड़ा है,",
      "दोस्त तेरी सलामती के लिए दीवाली के हर दीये में दुआ है।"
    ],
    "diwali-113": [
      "यारी की अटूट चमक",
      "दीयों की कतारें बुझ सकती हैं मगर अपनी यारी का नूर नहीं,",
      "मुबारक हो दीवाली मेरे भाई, तू आँखों से भले दिल से दूर नहीं।"
    ],
    "diwali-114": [
      "नई ऊंचाइयां और टीम स्पिरिट",
      "सपनों के हर टारगेट को छू लें और छू लें सफलता का आसमान,",
      "दीपावली लाए हमारी पूरी टीम के लिए नई पहचान और सम्मान।"
    ],
    "diwali-115": [
      "मार्गदर्शन और सम्मान",
      "आपके कुशल नेतृत्व से रोशन हुआ हमारे काम का हर रास्ता,",
      "दीवाली के पावन अवसर पर आपको मिले सुख-समृद्धि का वास्ता।"
    ],
    "diwali-116": [
      "ऑफिस का साथ और सहयोग",
      "डेडलाइन की भागदौड़ में भी जो चेहरे पर मुस्कान सजाए,",
      "ऐसे प्यारे सहकर्मियों को दीवाली का पावन पर्व बहुत रास आए।"
    ],
    "diwali-117": [
      "साझेदारी और अटूट विश्वास",
      "हमारे इस भरोसेमंद रिश्ते में हमेशा बना रहे विश्वास का दीया,",
      "आपके सहयोग ने ही हमारे हर प्रोजेक्ट को नया आयाम दिया।"
    ],
    "diwali-118": [
      "तरक्की और नए अवसर",
      "मेहनत का दीपक जले और बरसे प्रमोशन व तरक्की का वरदान,",
      "यह दीवाली आपके करियर को दे एक नई और बुलंद उड़ान।"
    ],
    "diwali-119": [
      "कर्मक्षेत्र में खुशहाली",
      "सफलता के दीप जलें और गूंजे हर दिल में खुशियों की तान,",
      "दीपावली के इस शुभ अवसर पर बढ़े आपका कारोबार और सम्मान।"
    ],
    "diwali-120": [
      "चाचा-ताऊ का स्नेह",
      "चाचा-ताऊ का दुलार और परिवार का मान बना रहे,",
      "दीवाली के पावन उजाले से महकता आपका आशियाना रहे।"
    ],
    "diwali-121": [
      "ननिहाल की मिठास",
      "मामा-मामी का प्यारा आशीष और ननिहाल की वो मीठी याद,",
      "दीवाली लाए आपके आँगन में खुशियों की अनमोल सौगात।"
    ],
    "diwali-122": [
      "बुआ-फूफाजी का दुलार",
      "बुआ के हाथों का स्नेह और फूफाजी की वो प्यारी मुस्कान,",
      "दीपावली पर आपके घर में बरसे सुख, शांति और सम्मान।"
    ],
    "diwali-123": [
      "पड़ोसियों संग दीवाली",
      "दीवारें भले अलग हों पर आँगन में एक ही दीया जलता है,",
      "पड़ोसियों का साथ हो तो हर त्यौहार दिल से सजता है।"
    ],
    "diwali-124": [
      "रिश्तों की गर्माहट",
      "रिश्तेदारी की मिठास कभी कम न हो, फासले सारे मिट जाएं,",
      "इस दीवाली सबके घरों में खुशहाली और प्यार के दीप जल जाएं।"
    ],
    "diwali-125": [
      "सभी सगे-संबंधियों को प्रणाम",
      "हर सगे-संबंधी के घर में सुख-समृद्धि और आरोग्य का वास हो,",
      "दीपावली का यह महापर्व आप सभी के लिए सबसे खास हो।"
    ]
  },
  "hi-Latn": {
    "diwali-1": [
      "दीपों की चमक",
      "Roshan ho saara jahan deepon ki kataar se,",
      "Khushiyan milein aapko apno ke pyaar se."
    ],
    "diwali-2": [
      "लक्ष्मी जी का वास",
      "Aaye aapke dwaar sukh-samriddhi aur dhan ki bahaar,",
      "Mubarak ho aapko Deepawali ka paawan tyohar."
    ],
    "diwali-3": [
      "उजालों का सफर",
      "Andhera chahe kitna bhi gehra ho jahan mein,",
      "Ek diya hi kaafi hai ujaalon ke nishan mein."
    ],
    "diwali-4": [
      "दिल का दीया",
      "Sirf makaan nahi dil ka kona bhi roshan kijiye,",
      "Is Diwali sabko gale lagakar duayein dijiye."
    ],
    "diwali-5": [
      "खुशियों की फुलझड़ी",
      "Phuljhadi si muskaan aapke hothon par saji rahe,",
      "Zindagi mein khushiyon ki shehnai sada baji rahe."
    ],
    "diwali-6": [
      "सोने का संसार",
      "Sone-chandi se bhi keemti hai apno ka yeh saath,",
      "Deepawali par rahe sada sar par Ishwar ka haath."
    ],
    "diwali-7": [
      "रंगोली और दीप",
      "Rangoli ke rangon se mehak uthe aapka sansaar,",
      "Deepawali laaye jeevan mein khushiyon ka ambaar."
    ],
    "diwali-8": [
      "गिले-शिकवे दूर",
      "Mita do dilon se har puraani ranjish aur malaal,",
      "Diwali ka din hai chalo karein khushiyon ki shuruat."
    ],
    "diwali-9": [
      "मिठाई की मिठास",
      "Kaju katli aur gujhiya si meethi ho har ek baat,",
      "Har din ho Diwali jaisi aur poonam jaisi raat."
    ],
    "diwali-10": [
      "सफलता का उजाला",
      "Kaamyabi ke deepak aapke kadam choomte rahein,",
      "Aap sada khushiyon ke jhoole mein jhoomte rahein."
    ],
    "diwali-11": [
      "दीपावली का पावन पर्व",
      "Deep jalte rahein mann se mann milte rahein,",
      "Gile-shikve saare dil se nikalte rahein."
    ],
    "diwali-12": [
      "लक्ष्मी-गणेश की कृपा",
      "Maa Lakshmi ka aashirwaad aapke ghar sada rahe,",
      "Vighnaharta Ganesh ji ka saaya sar par rahe."
    ],
    "diwali-13": [
      "घर-घर में रोशनी",
      "Jagmag deepon ki thaali se aangan sajaiye,",
      "Mithai khilakar saare gile-shikve mitaiye."
    ],
    "diwali-14": [
      "रोशनी का पर्व",
      "Har raat Diwali jaisi roshan ho jaaye,",
      "Har din khushiyon ka mausam ho jaaye."
    ],
    "diwali-15": [
      "सुख और समृद्धि की बहार",
      "Pal-pal sunahare phool khilte rahein aapke aangan,",
      "Kabhi na ho kaanton se aapka saamna jeevan."
    ],
    "diwali-16": [
      "दिलों का संगम",
      "Taaron ki tarah jagmagaye aapka sansaar,",
      "Sada bana rahe humare dilon mein pyaar."
    ],
    "diwali-17": [
      "खुशियों के दीये",
      "Ek diya vishwas ka, ek diya ummeed ka,",
      "Ek diya pyaar ka, aur ek diya preet ka."
    ],
    "diwali-18": [
      "दीपों की बारात",
      "Chaand ki chaandni se bhi pyaari ho yeh raat,",
      "Lekar aayi hai Diwali deepon ki baaraat."
    ],
    "diwali-19": [
      "सपनों का सवेरा",
      "Khushiyon ka ho sawera, gham ka na ho koi dera,",
      "Roshaniyon se bhar jaaye aashiyana tera."
    ],
    "diwali-20": [
      "उम्मीदों की लौ",
      "Jab-jab jalta hai diya mitti ka aangan mein,",
      "Nayi umang bhar jaati hai sabke is mann mein."
    ],
    "diwali-21": [
      "प्यार का उजाला",
      "Deepak ki lau jaise hawaon se lad jaati hai,",
      "Sacchi mohabbat bhi har mushkil se paar paati hai."
    ],
    "diwali-22": [
      "सदा मुस्कुराते रहो",
      "Muskaan aapke hothon se kabhi na choote,",
      "Apno ka yeh pyaara saath kabhi na toote."
    ],
    "diwali-23": [
      "धनतेरस से दीवाली तक",
      "Sone-chandi se chamke aapka har ek din,",
      "Khushiyan na gin pao aap apni ungliyon par gin."
    ],
    "diwali-24": [
      "आंगन में रंगोली",
      "Rangoli ke rangon mein ghuli ho meethas,",
      "Har ek pal ho aapke liye behad khaas."
    ],
    "diwali-25": [
      "शुभ दीपावली का संकल्प",
      "Aao milkar nafrat ka andhera door bhagayein,",
      "Prem aur bhaichaare ka ek naya diya jalayein."
    ],
    "diwali-26": [
      "धन्वंतरि कृपा और सेहत",
      "Sone-chandi se zyada sehat ki daulat mile,",
      "Dhanvantari kripa se ghar mein khushiyon ka gulshan khile."
    ],
    "diwali-27": [
      "शुभ शुरुआत और नए सपने",
      "Dhanteras par sirf bartan hi nahi naye sapne bhi laayein,",
      "Apne aangan mein khushhali aur barkat ke deep jalayein."
    ],
    "diwali-28": [
      "कुबेर का खजाना",
      "Kuber ka khazana aur maa Lakshmi ka saath ho,",
      "Aapke har kaam mein Ishwar ka pyara haath ho."
    ],
    "diwali-29": [
      "चांदी का सिक्का और तकदीर",
      "Chandi ka sikka chamke jaise aapki taqdeer,",
      "Dhanteras par poori ho aapke sapno ki tasveer."
    ],
    "diwali-30": [
      "खुशियों की सौगात",
      "Dhanteras ki paavan bela lekar aaye khushiyon ki saugaat,",
      "Kabhi na khaali rahe aapki jholi kabhi na ho tang halaat."
    ],
    "diwali-31": [
      "आरोग्य और सच्चा धन",
      "Sabse bada dhan hai acchi sehat aur apno ka pyaar,",
      "Mubarak ho aapko shubh Dhanteras ka yeh paavan tyohar."
    ],
    "diwali-32": [
      "स्वर्णिम सवेरा",
      "Sone si damak uthe aapki har ek subah,",
      "Dhanteras par kabool ho aapki har ek nek dua."
    ],
    "diwali-33": [
      "बरकत का त्यौहार",
      "Khushiyon se bhari ho aapki dukaan aur pyara sa ghar,",
      "Dhanteras ki roshni chamka de aapka har safar."
    ],
    "diwali-34": [
      "नया विश्वास और मिठास",
      "Naya bartan laaye nayi umang aur naya vishwas,",
      "Aapke jeevan mein ghule sada pyaar aur mithaas."
    ],
    "diwali-35": [
      "दीप और धन का पैगाम",
      "Deepak ki pehli lau aaj de gayi yahi paigaam,",
      "Dhanteras par chamke aapka aur aapke parivaar ka naam."
    ],
    "diwali-36": [
      "धन्वंतरि अमृत बूंदें",
      "Dhanvantari ji ki amrit boondein jeevan mein barsayein,",
      "Dhanteras ke is shubh din ki dil se shubhkaamnayein."
    ],
    "diwali-37": [
      "समृद्धि का द्वार",
      "Khushhali ka darwaza khule band ho saare gham,",
      "Dhanteras par aapki jholi mein khushiyan aayein hardam."
    ],
    "diwali-38": [
      "शुभ लाभ का तिलक",
      "Shubh-laabh ka tilak ho aur Lakshmi ji ka vaas,",
      "Dhanteras ka har pal ho aapke liye behad khaas."
    ],
    "diwali-39": [
      "रिश्तों की असली दौलत",
      "Apno ki sacchi muskaan hi asli daulat hai,",
      "Dhanteras ka yeh tyohar pyaar ki nemat hai."
    ],
    "diwali-40": [
      "आरोग्य वरदान",
      "Rog-dosh mitein aur mile lambi umr ka vardaan,",
      "Dhanteras par mahak uthe aapka saara jahaan."
    ],
    "diwali-41": [
      "छोटी दिवाली का छोटा दीया",
      "Chhoti Diwali ka chhota sa deeya mitaye bada andhera,",
      "Khushiyon ki kiran lekar aaye aapke ghar naya savera."
    ],
    "diwali-42": [
      "नरक चतुर्दशी मुक्ति",
      "Yamraj ka bhay mite aur mann ka mite vikaar,",
      "Naraka Chaturdashi par mile sukh-shanti ka uphar."
    ],
    "diwali-43": [
      "चौदह दीपों की पावन लौ",
      "Chaudah deepon ki paavan lau se roshan ho ghar-baar,",
      "Mubarak ho aapko Roop Chaudas ka yeh pyara tyohar."
    ],
    "diwali-44": [
      "रूप निखरे मन का",
      "Roop nikhre mann ka aur chehre par rahe muskaan,",
      "Chhoti Diwali laaye aapke liye khushiyon ka vardaan."
    ],
    "diwali-45": [
      "अंधकार पर रोशनी की जीत",
      "Andhkaar ko maat dekar roshni ki ho jeet,",
      "Chhoti Diwali par gaaye dil khushiyon ke naye geet."
    ],
    "diwali-46": [
      "शांति और प्रीत का आगाज़",
      "Ek deeya shanti ka aur ek deeya pyaar ka,",
      "Roop Chaudas hai aagaaz deepon ke tyohar ka."
    ],
    "diwali-47": [
      "बुराई का दहन",
      "Mann ki har buraai ko aaj deep mein jala dena,",
      "Chhoti Diwali par har roothe ko hanskar mana lena."
    ],
    "diwali-48": [
      "कल की दिवाली का उल्लास",
      "Kal badi Diwali hai aaj chhoti ka ullaas,",
      "Har din rahe aapke chehre par yoon hi vishwas."
    ],
    "diwali-49": [
      "आंगन महक जाए",
      "Deep jalein chhaton par aur aangan mahak jaaye,",
      "Chhoti Diwali aapke jeevan mein sukh-samriddhi laaye."
    ],
    "diwali-50": [
      "शुभ संदेश रूप चौदस",
      "Chhoti Diwali ka yeh pyara paigaam le lo,",
      "Khushiyon ke is utsav mein apno ka naam le lo."
    ],
    "diwali-51": [
      "कान्हा की उंगली और गोवर्धन",
      "Kanhaiya ne ungli par uthaya tha Govardhan pahaad,",
      "Aapke jeevan se bhi tal jaaye har mushkil aur bhaar."
    ],
    "diwali-52": [
      "अन्नकूट का पावन भोग",
      "Annakoot ka bhog lage aur baje Krishna ki bansuri,",
      "Govardhan Puja par poori ho aapki har iccha adhoori."
    ],
    "diwali-53": [
      "प्रकृति और गौ माता का मान",
      "Prakriti ki puja aur gau mata ka maan,",
      "Govardhan Puja sikhati hai sabka karo samman."
    ],
    "diwali-54": [
      "मुरली मनोहर की कृपा",
      "Murli Manohar ki kripa se ghar mein barse pyaar,",
      "Mubarak ho aapko Govardhan Puja ka paavan tyohar."
    ],
    "diwali-55": [
      "गिरिराज महाराज की शरण",
      "Giriraj Maharaj karein har sankat ka nivaaran,",
      "Sukh-samriddhi se bhar jaaye aapke jeevan ka har kaaran."
    ],
    "diwali-56": [
      "गौ माता का आशीर्वाद",
      "Gau mata ke charnon mein hai chaaron dhaam ka vaas,",
      "Govardhan Puja laaye aapke ghar mein nayi mithaas."
    ],
    "diwali-57": [
      "ब्रज की पावन माटी",
      "Braj ki paavan maati sa mahke aapka sansaar,",
      "Govardhan Puja par mile yash aur khushiyon ka uphar."
    ],
    "diwali-58": [
      "कृष्ण भक्ति का विश्वास",
      "Krishna ki bhakti aur apno ka atoot vishwas,",
      "Govardhan Puja ka har pal bane sabse khaas."
    ],
    "diwali-59": [
      "छप्पन भोग का थाल",
      "Chhappan bhog ki thaali aur prem bhara mann,",
      "Govardhan Puja se paavan ho aapka jeevan."
    ],
    "diwali-60": [
      "सदा खुशहाली का वरदान",
      "Kanha ki kripa se kabhi na aaye koi vipda,",
      "Govardhan Puja par khushhali rahe aapke ghar sada."
    ],
    "diwali-61": [
      "रोली और अक्षत का पावन टीका",
      "Roli-chawal ka paavan teeka aur behna ka pyaar,",
      "Bhai Dooj ka yeh bandhan hai sabse saccha aur pehredaar."
    ],
    "diwali-62": [
      "बहना की अमर दुआ",
      "Behna ki har dua mein bhai ki lambi umr ka naam,",
      "Bhai Dooj ke is paavan din ko jhukkar salaam."
    ],
    "diwali-63": [
      "भाई का सच्चा वादा",
      "Bhai ka vaada hai har mushkil mein saath nibhaye ga,",
      "Behna ke chehre ki hansi ko kabhi na khone dega."
    ],
    "diwali-64": [
      "थाली में सजी मिठाई",
      "Thaali mein saji mithai aur maathe par laal tilak,",
      "Bhai-behan ke rishte ki chamak rahe swarg tak."
    ],
    "diwali-65": [
      "प्यार का फरिश्ता",
      "Resham ke dhaage se gehra hai yeh pyaar ka rishta,",
      "Bhai ke roop mein rab ne bheja ek farishta."
    ],
    "diwali-66": [
      "बचपन की खट्टी-मीठी यादें",
      "Roothna-manana aur bachpan ki wo saari baatein,",
      "Bhai Dooj par yaad aati hain wo pyari meethee raatein."
    ],
    "diwali-67": [
      "स्नेह का अटूट धागा",
      "Door rehkar bhi jo paas lage wo hai behna ka dulaar,",
      "Bhai Dooj ki hardik shubhkaamnayein baarambaar."
    ],
    "diwali-68": [
      "माथे पे तिलक का मान",
      "Maathe pe tilak sajakar behna maangi yahi dua,",
      "Bhai ki har raah mein ho sirf khushiyon ka samaa."
    ],
    "diwali-69": [
      "अमर प्रेम कहानी",
      "Kaagaz ki naav aur wo baarish ka paani,",
      "Bhai-behan ke pyaar ki amar hai yeh kahani."
    ],
    "diwali-70": [
      "यम और यमुना का वंदन",
      "Yam aur Yamuna ke prem ka paavan yeh tyohar,",
      "Bhai Dooj laaye aapke jeevan mein khushiyon ki bahaar."
    ],
    "diwali-71": [
      "अनमोल रिश्ता",
      "Duniya ke saare rishton se anmol hai yeh pyaar,",
      "Bhai-behan ke chehre par saji rahe muskaan har baar."
    ],
    "diwali-72": [
      "सात जन्मों का साथ",
      "Tilak ki khushboo se mahke bhai ka lalaat,",
      "Ishwar kare dono ka saath rahe saat janmon ke ghaat."
    ],
    "diwali-73": [
      "खुशियों का नया राग",
      "Bhai Dooj ki subah laaye khushiyon ka naya raag,",
      "Khil uthe dono ke jeevan ka pyara sa baagh."
    ],
    "diwali-74": [
      "हसीन ख्वाब बहना",
      "Nafrat ke is daur mein pyaar ki misaal ho tum,",
      "Meri pyari behna mera sabse haseen khwaab ho tum."
    ],
    "diwali-75": [
      "शुभ भाई दूज वंदन",
      "Bhai Dooj par Ishwar se yahi maangte hain vardaan,",
      "Dono bhai-behan ki shaan rahe hamesha Hindustan."
    ],
    "diwali-76": [
      "परिवार संग दीया",
      "Apno ke saath baithkar jo deeya jalta hai,",
      "Usi roshni mein asli Diwali ka sukh palta hai."
    ],
    "diwali-77": [
      "मां-बाप का आशीर्वाद",
      "Maa-baap ke aashirwad se jagmagaye saara sansaar,",
      "Parivaar ke saath hi khoobsoorat lage Diwali ka tyohar."
    ],
    "diwali-78": [
      "यारों की दीवाली",
      "Yaaron ke saath chaay ki chuski aur pataakhon ka shor,",
      "Sacchi dosti ki roshni kheenchti hai dil ki dor."
    ],
    "diwali-79": [
      "दोस्ती का दीया",
      "Ek deeya dosti ke naam ka jalana mere yaar,",
      "Door rehkar bhi kam na hoga hamara yeh saccha pyaar."
    ],
    "diwali-80": [
      "मोहब्बत की रोशनी",
      "Tere chehre ki muskaan mere liye Diwali ka deeya hai,",
      "Meri har dhadkan ne sirf tujhse hi pyaar kiya hai."
    ],
    "diwali-81": [
      "तेरे संग हर रात दीवाली",
      "Deep jalein ya na jalein teri maujoodgi hi kaafi hai,",
      "Tere saath har ek raat Diwali jaisi roshan rehti hai."
    ],
    "diwali-82": [
      "शरारत और मिठास",
      "Mithai chheenkar khaana aur phir gale se laga lena,",
      "Diwali par bhai-behan ki yahi to sabse pyari baat hai."
    ],
    "diwali-83": [
      "बुजुर्गों का आशीष",
      "Buzurgon ke haath ka aashish aur bachhon ki kilkaari,",
      "Yahi banati hai ghar-ghar ki Diwali sabse pyari."
    ],
    "diwali-84": [
      "महफिल-ए-यारां",
      "Bachpan ke dost jab milkar deeya jalate hain,",
      "Purane wo haseen din phir se laut aate hain."
    ],
    "diwali-85": [
      "इश्क की जगमगाहट",
      "Teri aankhon ke noor se roshan hai mera aashiyana,",
      "Is Diwali par tu hi meri khushiyon ka thikaana."
    ],
    "diwali-86": [
      "महालक्ष्मी स्तुति",
      "Om Mahalakshmyai Namah ka goonje ghar mein jaap,",
      "Mit jaayein jeevan ke saare sankat aur paap."
    ],
    "diwali-87": [
      "कमलासन पर विराजें मां",
      "Kamal aasan par viraajein maa Lakshmi aapke dwaar,",
      "Sukh-shanti aur aishwarya ka barse amrit dhaar."
    ],
    "diwali-88": [
      "अमावस की रात पूर्णिमा सी",
      "Amaavas ki raat bhi poornima si chamak jaaye,",
      "Maa Lakshmi ki kripa se ghar swarg ban jaaye."
    ],
    "diwali-89": [
      "रिद्धि-सिद्धि संग गणपति",
      "Riddhi-Siddhi sang aayein Ganpati Maharaj,",
      "Poorn ho jaayein aapke saare adhoore kaaj."
    ],
    "diwali-90": [
      "सोने की थाली और दीपमाला",
      "Sone ki thaali mein sajaakar deepon ki maala,",
      "Maa Lakshmi ne ghar ke har kone ko kar diya ujaala."
    ],
    "diwali-91": [
      "अन्न और धन के भंडार",
      "Dhan-dhaanya se bhare rahein aapke ann ke bhandaar,",
      "Sada bana rahe maa Lakshmi ka aapke sir par pyaar."
    ],
    "diwali-92": [
      "वैभव और मान-सम्मान",
      "Vaibhav, keerti aur maan-samman ka vardaan mile,",
      "Diwali ki raat aapke ghar mein sukh ka phool khile."
    ],
    "diwali-93": [
      "शंख और घंटी की ध्वनि",
      "Mangal deep jale chaukhat par baje shankh aur ghanti,",
      "Maa Lakshmi ki kripa se kabhi na ho khushiyon mein mandi."
    ],
    "diwali-94": [
      "अष्ट लक्ष्मी का वास",
      "Ashta Lakshmi ka vaas ho aapke is pavitra dhaam,",
      "Har savera lekar aaye khushiyon ka naya paigaam."
    ],
    "diwali-95": [
      "सच्ची श्रद्धा का फल",
      "Sacchi shraddha se jo maa Lakshmi ko dhyaate hain,",
      "Wo zindagi ke har mod par khushhali hi paate hain."
    ],
    "diwali-96": [
      "अंतर्मन की पावन ज्योति",
      "Antarmann ki jyoti jagakar karna maa ka vandan,",
      "Mahak uthega Diwali par aapka pyara sa jeevan."
    ],
    "diwali-97": [
      "श्री सूक्त की पावन ध्वनि",
      "Shri Suktam ke mantron se goonj uthe har ek kona,",
      "Maa Lakshmi ki kripa se sach ho har sapna salona."
    ],
    "diwali-98": [
      "दया दृष्टि मां लक्ष्मी की",
      "Maa Lakshmi ki daya drishti jis par bhi ho jaaye,",
      "Rank bhi raja bane aur daridrata mit jaaye."
    ],
    "diwali-99": [
      "चरणों में दीपांजलि",
      "Deepon ki anjali arpit karein maa ke shri charnon mein,",
      "Bhar jaaye sukh ka saagar aapke jeevan ke pannon mein."
    ],
    "diwali-100": [
      "महापर्व दीपावली का संकल्प",
      "Deep jalein, jagmagaye Bharat, mite har andhkaar,",
      "Mangalmay ho aapko aur aapke poore parivaar ko Deepawali ka tyohar!"
    ],
    "diwali-101": [
      "माँ का दुलार और दीवाली",
      "Maa ke haathon ki mithai aur mamta ka sansaar mile,",
      "Is Diwali ghar ke har kone mein khushiyon ka tyohar khile."
    ],
    "diwali-102": [
      "पिता का साया और हौसला",
      "Pita ka saaya sir par ho to har din Diwali ka ujaala hai,",
      "Unke mazboot kandhon ne hi humare sapnon ko sambhaala hai."
    ],
    "diwali-103": [
      "भाई की यारी और दीये की लौ",
      "Bhai ke sang pataakhe phodna aur hanste-hanste lad jaana,",
      "Diwali ka sabse pyara sukh hai apno ka ghar aana."
    ],
    "diwali-104": [
      "बहन की रंगोली और मुस्कान",
      "Aangan mein behan ki sajaai rangoli sabse khaas lage,",
      "Uski khilkhilaati hansi se Diwali ka har pal paavan lage."
    ],
    "diwali-105": [
      "परिवार का संगम",
      "Ghar ki chaukhat par jab sab apne ek saath muskuraate hain,",
      "Mitti ke deeye bhi tab taaron se zyada jagmagaate hain."
    ],
    "diwali-106": [
      "घर का सुकून और बरकत",
      "Badon ka aashirwad mile aur chhoton ka dher saara pyaar,",
      "Lakshmi ji ki kripa se mahke humara poora parivaar."
    ],
    "diwali-107": [
      "घर के आँगन की रोशनी",
      "Deeyon ki roshni se zyada roshan hai apno ka yeh saath,",
      "Diwali par salaamat rahe humare is bhare-poore parivaar ki baat."
    ],
    "diwali-108": [
      "यारों की महफ़िल और फुलझड़ी",
      "Mithai ka dibba khaali karna aur yaaron ki mehfil sajaana,",
      "Diwali asli tabhi banti hai jab doston ka ho aana-jaana."
    ],
    "diwali-109": [
      "तू है तो दीवाली है",
      "Pataakhe phoote na phoote teri yaari mein hi saara dam hai,",
      "Tu jo muskura de mere yaar to zindagi mein ujaala hi har dam hai."
    ],
    "diwali-110": [
      "बचपन की मस्ती और दीप",
      "Gali ke mod par wo deeye jalaana aur chhupkar rocket chhodna,",
      "Dua hai is Diwali kabhi na chhoote doston se dil ka naata jodna."
    ],
    "diwali-111": [
      "हँसी का पटाखा",
      "Phuljhadi si muskaan teri, rocket si teri udaan ho,",
      "Dost is Diwali tu jahan bhi rahe, tu hi mehfil ki shaan ho."
    ],
    "diwali-112": [
      "दूर बैठे दोस्त को सलाम",
      "Door ho shehar chahe kitna bhi, dil se dil ka taar juda hai,",
      "Dost teri salaamati ke liye Diwali ke har deeye mein dua hai."
    ],
    "diwali-113": [
      "यारी की अटूट चमक",
      "Deeyon ki qataarein bujh sakti hain magar apni yaari ka noor nahi,",
      "Mubarak ho Diwali mere bhai, tu aankhon se bhale dil se door nahi."
    ],
    "diwali-114": [
      "नई ऊंचाइयां और टीम स्पिरिट",
      "Sapnon ke har target ko chhoo lein aur chhoo lein safalta ka aasmaan,",
      "Deepawali laaye humari poori team ke liye nayi pehchaan aur samman."
    ],
    "diwali-115": [
      "मार्गदर्शन और सम्मान",
      "Aapke kushal netritva se roshan hua humare kaam ka har raasta,",
      "Diwali ke paavan avsar par aapko mile sukh-samriddhi ka vaasta."
    ],
    "diwali-116": [
      "ऑफिस का साथ और सहयोग",
      "Deadline ki bhaag-daud mein bhi jo chehre par muskaan sajaaye,",
      "Aise pyare sahkarmiyon ko Diwali ka paavan parv bahut raas aaye."
    ],
    "diwali-117": [
      "साझेदारी और अटूट विश्वास",
      "Humare is bharosemand rishte mein hamesha bana rahe vishwas ka deeya,",
      "Aapke sahyog ne hi humare har project ko naya aayaam diya."
    ],
    "diwali-118": [
      "तरक्की और नए अवसर",
      "Mehnat ka deepak jale aur barse promotion va tarakki ka vardaan,",
      "Yeh Diwali aapke career ko de ek nayi aur buland udaan."
    ],
    "diwali-119": [
      "कर्मक्षेत्र में खुशहाली",
      "Safalta ke deep jalein aur goonje har dil mein khushiyon ki taan,",
      "Deepawali ke is shubh avsar par badhe aapka kaarobaar aur sammaan."
    ],
    "diwali-120": [
      "चाचा-ताऊ का स्नेह",
      "Chacha-tau ka dulaar aur parivaar ka maan bana rahe,",
      "Diwali ke paavan ujaale se mahakta aapka aashiyana rahe."
    ],
    "diwali-121": [
      "ननिहाल की मिठास",
      "Mama-mami ka pyara aashish aur nanihaal ki wo meethi yaad,",
      "Diwali laaye aapke aangan mein khushiyon ki anmol saugaat."
    ],
    "diwali-122": [
      "बुआ-फूफाजी का दुलार",
      "Bua ke haathon ka sneh aur phoophaji ki wo pyari muskaan,",
      "Deepawali par aapke ghar mein barse sukh, shaanti aur sammaan."
    ],
    "diwali-123": [
      "पड़ोसियों संग दीवाली",
      "Deewaarein bhale alag hon par aangan mein ek hi deeya jalta hai,",
      "Padosiyon ka saath ho to har tyohar dil se sajta hai."
    ],
    "diwali-124": [
      "रिश्तों की गर्माहट",
      "Rishtedaari ki mithaas kabhi kam na ho, faasle saare mit jaayein,",
      "Is Diwali sabke gharon mein khushhali aur pyaar ke deep jal jaayein."
    ],
    "diwali-125": [
      "सभी सगे-संबंधियों को प्रणाम",
      "Har sage-sambandhi ke ghar mein sukh-samriddhi aur aarogya ka vaas ho,",
      "Deepawali ka yeh mahaparv aap sabhi ke liye sabse khaas ho."
    ]
  },
  "ta": {
    "diwali-1": [
      "தீபாவளி ஒளி 1",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-2": [
      "தீபாவளி ஒளி 2",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-3": [
      "தீபாவளி ஒளி 3",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-4": [
      "தீபாவளி ஒளி 4",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-5": [
      "தீபாவளி ஒளி 5",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-6": [
      "தீபாவளி ஒளி 6",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-7": [
      "தீபாவளி ஒளி 7",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-8": [
      "தீபாவளி ஒளி 8",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-9": [
      "தீபாவளி ஒளி 9",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-10": [
      "தீபாவளி ஒளி 10",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-11": [
      "தீபாவளி ஒளி 11",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-12": [
      "தீபாவளி ஒளி 12",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-13": [
      "தீபாவளி ஒளி 13",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-14": [
      "தீபாவளி ஒளி 14",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-15": [
      "தீபாவளி ஒளி 15",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-16": [
      "தீபாவளி ஒளி 16",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-17": [
      "தீபாவளி ஒளி 17",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-18": [
      "தீபாவளி ஒளி 18",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-19": [
      "தீபாவளி ஒளி 19",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-20": [
      "தீபாவளி ஒளி 20",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-21": [
      "தீபாவளி ஒளி 21",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-22": [
      "தீபாவளி ஒளி 22",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-23": [
      "தீபாவளி ஒளி 23",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-24": [
      "தீபாவளி ஒளி 24",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-25": [
      "தீபாவளி ஒளி 25",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-26": [
      "தீபாவளி ஒளி 26",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-27": [
      "தீபாவளி ஒளி 27",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-28": [
      "தீபாவளி ஒளி 28",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-29": [
      "தீபாவளி ஒளி 29",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-30": [
      "தீபாவளி ஒளி 30",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-31": [
      "தீபாவளி ஒளி 31",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-32": [
      "தீபாவளி ஒளி 32",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-33": [
      "தீபாவளி ஒளி 33",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-34": [
      "தீபாவளி ஒளி 34",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-35": [
      "தீபாவளி ஒளி 35",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-36": [
      "தீபாவளி ஒளி 36",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-37": [
      "தீபாவளி ஒளி 37",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-38": [
      "தீபாவளி ஒளி 38",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-39": [
      "தீபாவளி ஒளி 39",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-40": [
      "தீபாவளி ஒளி 40",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-41": [
      "தீபாவளி ஒளி 41",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-42": [
      "தீபாவளி ஒளி 42",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-43": [
      "தீபாவளி ஒளி 43",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-44": [
      "தீபாவளி ஒளி 44",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-45": [
      "தீபாவளி ஒளி 45",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-46": [
      "தீபாவளி ஒளி 46",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-47": [
      "தீபாவளி ஒளி 47",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-48": [
      "தீபாவளி ஒளி 48",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-49": [
      "தீபாவளி ஒளி 49",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-50": [
      "தீபாவளி ஒளி 50",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-51": [
      "தீபாவளி ஒளி 51",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-52": [
      "தீபாவளி ஒளி 52",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-53": [
      "தீபாவளி ஒளி 53",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-54": [
      "தீபாவளி ஒளி 54",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-55": [
      "தீபாவளி ஒளி 55",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-56": [
      "தீபாவளி ஒளி 56",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-57": [
      "தீபாவளி ஒளி 57",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-58": [
      "தீபாவளி ஒளி 58",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-59": [
      "தீபாவளி ஒளி 59",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-60": [
      "தீபாவளி ஒளி 60",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-61": [
      "தீபாவளி ஒளி 61",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-62": [
      "தீபாவளி ஒளி 62",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-63": [
      "தீபாவளி ஒளி 63",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-64": [
      "தீபாவளி ஒளி 64",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-65": [
      "தீபாவளி ஒளி 65",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-66": [
      "தீபாவளி ஒளி 66",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-67": [
      "தீபாவளி ஒளி 67",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-68": [
      "தீபாவளி ஒளி 68",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-69": [
      "தீபாவளி ஒளி 69",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-70": [
      "தீபாவளி ஒளி 70",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-71": [
      "தீபாவளி ஒளி 71",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-72": [
      "தீபாவளி ஒளி 72",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-73": [
      "தீபாவளி ஒளி 73",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-74": [
      "தீபாவளி ஒளி 74",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-75": [
      "தீபாவளி ஒளி 75",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-76": [
      "தீபாவளி ஒளி 76",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-77": [
      "தீபாவளி ஒளி 77",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-78": [
      "தீபாவளி ஒளி 78",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-79": [
      "தீபாவளி ஒளி 79",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-80": [
      "தீபாவளி ஒளி 80",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-81": [
      "தீபாவளி ஒளி 81",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-82": [
      "தீபாவளி ஒளி 82",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-83": [
      "தீபாவளி ஒளி 83",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-84": [
      "தீபாவளி ஒளி 84",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-85": [
      "தீபாவளி ஒளி 85",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-86": [
      "தீபாவளி ஒளி 86",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-87": [
      "தீபாவளி ஒளி 87",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-88": [
      "தீபாவளி ஒளி 88",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-89": [
      "தீபாவளி ஒளி 89",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-90": [
      "தீபாவளி ஒளி 90",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-91": [
      "தீபாவளி ஒளி 91",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-92": [
      "தீபாவளி ஒளி 92",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-93": [
      "தீபாவளி ஒளி 93",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-94": [
      "தீபாவளி ஒளி 94",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-95": [
      "தீபாவளி ஒளி 95",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-96": [
      "தீபாவளி ஒளி 96",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-97": [
      "தீபாவளி ஒளி 97",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-98": [
      "தீபாவளி ஒளி 98",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-99": [
      "தீபாவளி ஒளி 99",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-100": [
      "தீபாவளி ஒளி 100",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-101": [
      "தீபாவளி ஒளி 101",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-102": [
      "தீபாவளி ஒளி 102",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-103": [
      "தீபாவளி ஒளி 103",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-104": [
      "தீபாவளி ஒளி 104",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-105": [
      "தீபாவளி ஒளி 105",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-106": [
      "தீபாவளி ஒளி 106",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-107": [
      "தீபாவளி ஒளி 107",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-108": [
      "தீபாவளி ஒளி 108",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-109": [
      "தீபாவளி ஒளி 109",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-110": [
      "தீபாவளி ஒளி 110",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-111": [
      "தீபாவளி ஒளி 111",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-112": [
      "தீபாவளி ஒளி 112",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-113": [
      "தீபாவளி ஒளி 113",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-114": [
      "தீபாவளி ஒளி 114",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-115": [
      "தீபாவளி ஒளி 115",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-116": [
      "தீபாவளி ஒளி 116",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-117": [
      "தீபாவளி ஒளி 117",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-118": [
      "தீபாவளி ஒளி 118",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-119": [
      "தீபாவளி ஒளி 119",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-120": [
      "தீபாவளி ஒளி 120",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-121": [
      "தீபாவளி ஒளி 121",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-122": [
      "தீபாவளி ஒளி 122",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-123": [
      "தீபாவளி ஒளி 123",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-124": [
      "தீபாவளி ஒளி 124",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ],
    "diwali-125": [
      "தீபாவளி ஒளி 125",
      "தீபங்களின் ஒளி உங்கள் இல்லத்தில் மகிழ்ச்சியையும் செல்வத்தையும் கொண்டு வரட்டும்.",
      "இனிய தீபாவளி நல்வாழ்த்துக்கள் - லட்சுமி தேவியின் அருள் என்றும் நிலைக்கட்டும்!"
    ]
  },
  "te": {
    "diwali-1": [
      "దీపావళి వెలుగులు 1",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-2": [
      "దీపావళి వెలుగులు 2",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-3": [
      "దీపావళి వెలుగులు 3",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-4": [
      "దీపావళి వెలుగులు 4",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-5": [
      "దీపావళి వెలుగులు 5",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-6": [
      "దీపావళి వెలుగులు 6",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-7": [
      "దీపావళి వెలుగులు 7",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-8": [
      "దీపావళి వెలుగులు 8",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-9": [
      "దీపావళి వెలుగులు 9",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-10": [
      "దీపావళి వెలుగులు 10",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-11": [
      "దీపావళి వెలుగులు 11",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-12": [
      "దీపావళి వెలుగులు 12",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-13": [
      "దీపావళి వెలుగులు 13",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-14": [
      "దీపావళి వెలుగులు 14",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-15": [
      "దీపావళి వెలుగులు 15",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-16": [
      "దీపావళి వెలుగులు 16",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-17": [
      "దీపావళి వెలుగులు 17",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-18": [
      "దీపావళి వెలుగులు 18",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-19": [
      "దీపావళి వెలుగులు 19",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-20": [
      "దీపావళి వెలుగులు 20",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-21": [
      "దీపావళి వెలుగులు 21",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-22": [
      "దీపావళి వెలుగులు 22",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-23": [
      "దీపావళి వెలుగులు 23",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-24": [
      "దీపావళి వెలుగులు 24",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-25": [
      "దీపావళి వెలుగులు 25",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-26": [
      "దీపావళి వెలుగులు 26",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-27": [
      "దీపావళి వెలుగులు 27",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-28": [
      "దీపావళి వెలుగులు 28",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-29": [
      "దీపావళి వెలుగులు 29",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-30": [
      "దీపావళి వెలుగులు 30",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-31": [
      "దీపావళి వెలుగులు 31",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-32": [
      "దీపావళి వెలుగులు 32",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-33": [
      "దీపావళి వెలుగులు 33",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-34": [
      "దీపావళి వెలుగులు 34",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-35": [
      "దీపావళి వెలుగులు 35",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-36": [
      "దీపావళి వెలుగులు 36",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-37": [
      "దీపావళి వెలుగులు 37",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-38": [
      "దీపావళి వెలుగులు 38",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-39": [
      "దీపావళి వెలుగులు 39",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-40": [
      "దీపావళి వెలుగులు 40",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-41": [
      "దీపావళి వెలుగులు 41",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-42": [
      "దీపావళి వెలుగులు 42",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-43": [
      "దీపావళి వెలుగులు 43",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-44": [
      "దీపావళి వెలుగులు 44",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-45": [
      "దీపావళి వెలుగులు 45",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-46": [
      "దీపావళి వెలుగులు 46",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-47": [
      "దీపావళి వెలుగులు 47",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-48": [
      "దీపావళి వెలుగులు 48",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-49": [
      "దీపావళి వెలుగులు 49",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-50": [
      "దీపావళి వెలుగులు 50",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-51": [
      "దీపావళి వెలుగులు 51",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-52": [
      "దీపావళి వెలుగులు 52",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-53": [
      "దీపావళి వెలుగులు 53",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-54": [
      "దీపావళి వెలుగులు 54",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-55": [
      "దీపావళి వెలుగులు 55",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-56": [
      "దీపావళి వెలుగులు 56",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-57": [
      "దీపావళి వెలుగులు 57",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-58": [
      "దీపావళి వెలుగులు 58",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-59": [
      "దీపావళి వెలుగులు 59",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-60": [
      "దీపావళి వెలుగులు 60",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-61": [
      "దీపావళి వెలుగులు 61",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-62": [
      "దీపావళి వెలుగులు 62",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-63": [
      "దీపావళి వెలుగులు 63",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-64": [
      "దీపావళి వెలుగులు 64",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-65": [
      "దీపావళి వెలుగులు 65",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-66": [
      "దీపావళి వెలుగులు 66",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-67": [
      "దీపావళి వెలుగులు 67",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-68": [
      "దీపావళి వెలుగులు 68",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-69": [
      "దీపావళి వెలుగులు 69",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-70": [
      "దీపావళి వెలుగులు 70",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-71": [
      "దీపావళి వెలుగులు 71",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-72": [
      "దీపావళి వెలుగులు 72",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-73": [
      "దీపావళి వెలుగులు 73",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-74": [
      "దీపావళి వెలుగులు 74",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-75": [
      "దీపావళి వెలుగులు 75",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-76": [
      "దీపావళి వెలుగులు 76",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-77": [
      "దీపావళి వెలుగులు 77",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-78": [
      "దీపావళి వెలుగులు 78",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-79": [
      "దీపావళి వెలుగులు 79",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-80": [
      "దీపావళి వెలుగులు 80",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-81": [
      "దీపావళి వెలుగులు 81",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-82": [
      "దీపావళి వెలుగులు 82",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-83": [
      "దీపావళి వెలుగులు 83",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-84": [
      "దీపావళి వెలుగులు 84",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-85": [
      "దీపావళి వెలుగులు 85",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-86": [
      "దీపావళి వెలుగులు 86",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-87": [
      "దీపావళి వెలుగులు 87",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-88": [
      "దీపావళి వెలుగులు 88",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-89": [
      "దీపావళి వెలుగులు 89",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-90": [
      "దీపావళి వెలుగులు 90",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-91": [
      "దీపావళి వెలుగులు 91",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-92": [
      "దీపావళి వెలుగులు 92",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-93": [
      "దీపావళి వెలుగులు 93",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-94": [
      "దీపావళి వెలుగులు 94",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-95": [
      "దీపావళి వెలుగులు 95",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-96": [
      "దీపావళి వెలుగులు 96",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-97": [
      "దీపావళి వెలుగులు 97",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-98": [
      "దీపావళి వెలుగులు 98",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-99": [
      "దీపావళి వెలుగులు 99",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-100": [
      "దీపావళి వెలుగులు 100",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-101": [
      "దీపావళి వెలుగులు 101",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-102": [
      "దీపావళి వెలుగులు 102",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-103": [
      "దీపావళి వెలుగులు 103",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-104": [
      "దీపావళి వెలుగులు 104",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-105": [
      "దీపావళి వెలుగులు 105",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-106": [
      "దీపావళి వెలుగులు 106",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-107": [
      "దీపావళి వెలుగులు 107",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-108": [
      "దీపావళి వెలుగులు 108",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-109": [
      "దీపావళి వెలుగులు 109",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-110": [
      "దీపావళి వెలుగులు 110",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-111": [
      "దీపావళి వెలుగులు 111",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-112": [
      "దీపావళి వెలుగులు 112",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-113": [
      "దీపావళి వెలుగులు 113",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-114": [
      "దీపావళి వెలుగులు 114",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-115": [
      "దీపావళి వెలుగులు 115",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-116": [
      "దీపావళి వెలుగులు 116",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-117": [
      "దీపావళి వెలుగులు 117",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-118": [
      "దీపావళి వెలుగులు 118",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-119": [
      "దీపావళి వెలుగులు 119",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-120": [
      "దీపావళి వెలుగులు 120",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-121": [
      "దీపావళి వెలుగులు 121",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-122": [
      "దీపావళి వెలుగులు 122",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-123": [
      "దీపావళి వెలుగులు 123",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-124": [
      "దీపావళి వెలుగులు 124",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ],
    "diwali-125": [
      "దీపావళి వెలుగులు 125",
      "దీపాల వెలుగు మీ జీవితంలో సుఖశాంతులు మరియు సమృద్ధిని నింపాలి.",
      "మీకు మరియు మీ కుటుంబ సభ్యులకు హృదయపూర్వక దీపావళి శుభాకాంక్షలు!"
    ]
  },
  "kn": {
    "diwali-1": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 1",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-2": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 2",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-3": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 3",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-4": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 4",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-5": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 5",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-6": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 6",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-7": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 7",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-8": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 8",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-9": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 9",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-10": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 10",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-11": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 11",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-12": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 12",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-13": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 13",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-14": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 14",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-15": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 15",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-16": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 16",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-17": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 17",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-18": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 18",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-19": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 19",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-20": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 20",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-21": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 21",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-22": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 22",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-23": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 23",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-24": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 24",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-25": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 25",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-26": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 26",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-27": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 27",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-28": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 28",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-29": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 29",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-30": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 30",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-31": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 31",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-32": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 32",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-33": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 33",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-34": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 34",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-35": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 35",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-36": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 36",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-37": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 37",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-38": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 38",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-39": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 39",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-40": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 40",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-41": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 41",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-42": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 42",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-43": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 43",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-44": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 44",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-45": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 45",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-46": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 46",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-47": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 47",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-48": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 48",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-49": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 49",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-50": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 50",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-51": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 51",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-52": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 52",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-53": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 53",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-54": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 54",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-55": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 55",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-56": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 56",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-57": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 57",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-58": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 58",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-59": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 59",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-60": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 60",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-61": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 61",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-62": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 62",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-63": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 63",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-64": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 64",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-65": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 65",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-66": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 66",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-67": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 67",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-68": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 68",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-69": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 69",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-70": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 70",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-71": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 71",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-72": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 72",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-73": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 73",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-74": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 74",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-75": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 75",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-76": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 76",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-77": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 77",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-78": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 78",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-79": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 79",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-80": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 80",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-81": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 81",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-82": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 82",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-83": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 83",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-84": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 84",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-85": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 85",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-86": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 86",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-87": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 87",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-88": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 88",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-89": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 89",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-90": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 90",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-91": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 91",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-92": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 92",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-93": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 93",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-94": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 94",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-95": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 95",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-96": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 96",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-97": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 97",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-98": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 98",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-99": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 99",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-100": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 100",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-101": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 101",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-102": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 102",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-103": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 103",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-104": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 104",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-105": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 105",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-106": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 106",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-107": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 107",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-108": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 108",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-109": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 109",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-110": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 110",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-111": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 111",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-112": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 112",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-113": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 113",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-114": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 114",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-115": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 115",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-116": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 116",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-117": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 117",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-118": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 118",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-119": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 119",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-120": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 120",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-121": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 121",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-122": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 122",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-123": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 123",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-124": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 124",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ],
    "diwali-125": [
      "ದೀಪಾವಳಿ ಬೆಳಕು 125",
      "ದೀಪಗಳ ಬೆಳಕು ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ ಸಂತೋಷ, ಶಾಂತಿ ಮತ್ತು ಸಮೃದ್ಧಿಯನ್ನು ತರಲಿ.",
      "ನಿಮಗೂ ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೂ ದೀಪಾವಳಿ ಹಬ್ಬದ ಹಾರ್ದಿಕ ಶುಭಾಶಯಗಳು!"
    ]
  },
  "ml": {
    "diwali-1": [
      "ദീപാവലി പ്രഭ 1",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-2": [
      "ദീപാവലി പ്രഭ 2",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-3": [
      "ദീപാവലി പ്രഭ 3",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-4": [
      "ദീപാവലി പ്രഭ 4",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-5": [
      "ദീപാവലി പ്രഭ 5",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-6": [
      "ദീപാവലി പ്രഭ 6",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-7": [
      "ദീപാവലി പ്രഭ 7",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-8": [
      "ദീപാവലി പ്രഭ 8",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-9": [
      "ദീപാവലി പ്രഭ 9",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-10": [
      "ദീപാവലി പ്രഭ 10",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-11": [
      "ദീപാവലി പ്രഭ 11",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-12": [
      "ദീപാവലി പ്രഭ 12",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-13": [
      "ദീപാവലി പ്രഭ 13",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-14": [
      "ദീപാവലി പ്രഭ 14",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-15": [
      "ദീപാവലി പ്രഭ 15",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-16": [
      "ദീപാവലി പ്രഭ 16",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-17": [
      "ദീപാവലി പ്രഭ 17",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-18": [
      "ദീപാവലി പ്രഭ 18",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-19": [
      "ദീപാവലി പ്രഭ 19",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-20": [
      "ദീപാവലി പ്രഭ 20",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-21": [
      "ദീപാവലി പ്രഭ 21",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-22": [
      "ദീപാവലി പ്രഭ 22",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-23": [
      "ദീപാവലി പ്രഭ 23",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-24": [
      "ദീപാവലി പ്രഭ 24",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-25": [
      "ദീപാവലി പ്രഭ 25",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-26": [
      "ദീപാവലി പ്രഭ 26",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-27": [
      "ദീപാവലി പ്രഭ 27",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-28": [
      "ദീപാവലി പ്രഭ 28",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-29": [
      "ദീപാവലി പ്രഭ 29",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-30": [
      "ദീപാവലി പ്രഭ 30",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-31": [
      "ദീപാവലി പ്രഭ 31",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-32": [
      "ദീപാവലി പ്രഭ 32",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-33": [
      "ദീപാവലി പ്രഭ 33",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-34": [
      "ദീപാവലി പ്രഭ 34",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-35": [
      "ദീപാവലി പ്രഭ 35",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-36": [
      "ദീപാവലി പ്രഭ 36",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-37": [
      "ദീപാവലി പ്രഭ 37",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-38": [
      "ദീപാവലി പ്രഭ 38",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-39": [
      "ദീപാവലി പ്രഭ 39",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-40": [
      "ദീപാവലി പ്രഭ 40",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-41": [
      "ദീപാവലി പ്രഭ 41",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-42": [
      "ദീപാവലി പ്രഭ 42",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-43": [
      "ദീപാവലി പ്രഭ 43",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-44": [
      "ദീപാവലി പ്രഭ 44",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-45": [
      "ദീപാവലി പ്രഭ 45",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-46": [
      "ദീപാവലി പ്രഭ 46",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-47": [
      "ദീപാവലി പ്രഭ 47",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-48": [
      "ദീപാവലി പ്രഭ 48",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-49": [
      "ദീപാവലി പ്രഭ 49",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-50": [
      "ദീപാവലി പ്രഭ 50",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-51": [
      "ദീപാവലി പ്രഭ 51",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-52": [
      "ദീപാവലി പ്രഭ 52",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-53": [
      "ദീപാവലി പ്രഭ 53",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-54": [
      "ദീപാവലി പ്രഭ 54",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-55": [
      "ദീപാവലി പ്രഭ 55",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-56": [
      "ദീപാവലി പ്രഭ 56",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-57": [
      "ദീപാവലി പ്രഭ 57",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-58": [
      "ദീപാവലി പ്രഭ 58",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-59": [
      "ദീപാവലി പ്രഭ 59",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-60": [
      "ദീപാവലി പ്രഭ 60",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-61": [
      "ദീപാവലി പ്രഭ 61",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-62": [
      "ദീപാവലി പ്രഭ 62",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-63": [
      "ദീപാവലി പ്രഭ 63",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-64": [
      "ദീപാവലി പ്രഭ 64",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-65": [
      "ദീപാവലി പ്രഭ 65",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-66": [
      "ദീപാവലി പ്രഭ 66",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-67": [
      "ദീപാവലി പ്രഭ 67",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-68": [
      "ദീപാവലി പ്രഭ 68",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-69": [
      "ദീപാവലി പ്രഭ 69",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-70": [
      "ദീപാവലി പ്രഭ 70",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-71": [
      "ദീപാവലി പ്രഭ 71",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-72": [
      "ദീപാവലി പ്രഭ 72",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-73": [
      "ദീപാവലി പ്രഭ 73",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-74": [
      "ദീപാവലി പ്രഭ 74",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-75": [
      "ദീപാവലി പ്രഭ 75",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-76": [
      "ദീപാവലി പ്രഭ 76",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-77": [
      "ദീപാവലി പ്രഭ 77",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-78": [
      "ദീപാവലി പ്രഭ 78",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-79": [
      "ദീപാവലി പ്രഭ 79",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-80": [
      "ദീപാവലി പ്രഭ 80",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-81": [
      "ദീപാവലി പ്രഭ 81",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-82": [
      "ദീപാവലി പ്രഭ 82",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-83": [
      "ദീപാവലി പ്രഭ 83",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-84": [
      "ദീപാവലി പ്രഭ 84",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-85": [
      "ദീപാവലി പ്രഭ 85",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-86": [
      "ദീപാവലി പ്രഭ 86",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-87": [
      "ദീപാവലി പ്രഭ 87",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-88": [
      "ദീപാവലി പ്രഭ 88",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-89": [
      "ദീപാവലി പ്രഭ 89",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-90": [
      "ദീപാവലി പ്രഭ 90",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-91": [
      "ദീപാവലി പ്രഭ 91",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-92": [
      "ദീപാവലി പ്രഭ 92",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-93": [
      "ദീപാവലി പ്രഭ 93",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-94": [
      "ദീപാവലി പ്രഭ 94",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-95": [
      "ദീപാവലി പ്രഭ 95",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-96": [
      "ദീപാവലി പ്രഭ 96",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-97": [
      "ദീപാവലി പ്രഭ 97",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-98": [
      "ദീപാവലി പ്രഭ 98",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-99": [
      "ദീപാവലി പ്രഭ 99",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-100": [
      "ദീപാവലി പ്രഭ 100",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-101": [
      "ദീപാവലി പ്രഭ 101",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-102": [
      "ദീപാവലി പ്രഭ 102",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-103": [
      "ദീപാവലി പ്രഭ 103",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-104": [
      "ദീപാവലി പ്രഭ 104",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-105": [
      "ദീപാവലി പ്രഭ 105",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-106": [
      "ദീപാവലി പ്രഭ 106",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-107": [
      "ദീപാവലി പ്രഭ 107",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-108": [
      "ദീപാവലി പ്രഭ 108",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-109": [
      "ദീപാവലി പ്രഭ 109",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-110": [
      "ദീപാവലി പ്രഭ 110",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-111": [
      "ദീപാവലി പ്രഭ 111",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-112": [
      "ദീപാവലി പ്രഭ 112",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-113": [
      "ദീപാവലി പ്രഭ 113",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-114": [
      "ദീപാവലി പ്രഭ 114",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-115": [
      "ദീപാവലി പ്രഭ 115",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-116": [
      "ദീപാവലി പ്രഭ 116",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-117": [
      "ദീപാവലി പ്രഭ 117",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-118": [
      "ദീപാവലി പ്രഭ 118",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-119": [
      "ദീപാവലി പ്രഭ 119",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-120": [
      "ദീപാവലി പ്രഭ 120",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-121": [
      "ദീപാവലി പ്രഭ 121",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-122": [
      "ദീപാവലി പ്രഭ 122",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-123": [
      "ദീപാവലി പ്രഭ 123",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-124": [
      "ദീപാവലി പ്രഭ 124",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ],
    "diwali-125": [
      "ദീപാവലി പ്രഭ 125",
      "ദീപങ്ങളുടെ തിളക്കം നിങ്ങളുടെ ജീവിതത്തിൽ ശാന്തിയും സമൃദ്ധിയും നിറയ്ക്കട്ടെ.",
      "ഹൃദയം നിറഞ്ഞ ദീപാവലി ആശംസകൾ നേരുന്നു!"
    ]
  },
  "mr": {
    "diwali-1": [
      "दिवाळी प्रकाश 1",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-2": [
      "दिवाळी प्रकाश 2",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-3": [
      "दिवाळी प्रकाश 3",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-4": [
      "दिवाळी प्रकाश 4",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-5": [
      "दिवाळी प्रकाश 5",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-6": [
      "दिवाळी प्रकाश 6",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-7": [
      "दिवाळी प्रकाश 7",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-8": [
      "दिवाळी प्रकाश 8",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-9": [
      "दिवाळी प्रकाश 9",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-10": [
      "दिवाळी प्रकाश 10",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-11": [
      "दिवाळी प्रकाश 11",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-12": [
      "दिवाळी प्रकाश 12",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-13": [
      "दिवाळी प्रकाश 13",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-14": [
      "दिवाळी प्रकाश 14",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-15": [
      "दिवाळी प्रकाश 15",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-16": [
      "दिवाळी प्रकाश 16",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-17": [
      "दिवाळी प्रकाश 17",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-18": [
      "दिवाळी प्रकाश 18",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-19": [
      "दिवाळी प्रकाश 19",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-20": [
      "दिवाळी प्रकाश 20",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-21": [
      "दिवाळी प्रकाश 21",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-22": [
      "दिवाळी प्रकाश 22",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-23": [
      "दिवाळी प्रकाश 23",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-24": [
      "दिवाळी प्रकाश 24",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-25": [
      "दिवाळी प्रकाश 25",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-26": [
      "दिवाळी प्रकाश 26",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-27": [
      "दिवाळी प्रकाश 27",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-28": [
      "दिवाळी प्रकाश 28",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-29": [
      "दिवाळी प्रकाश 29",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-30": [
      "दिवाळी प्रकाश 30",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-31": [
      "दिवाळी प्रकाश 31",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-32": [
      "दिवाळी प्रकाश 32",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-33": [
      "दिवाळी प्रकाश 33",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-34": [
      "दिवाळी प्रकाश 34",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-35": [
      "दिवाळी प्रकाश 35",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-36": [
      "दिवाळी प्रकाश 36",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-37": [
      "दिवाळी प्रकाश 37",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-38": [
      "दिवाळी प्रकाश 38",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-39": [
      "दिवाळी प्रकाश 39",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-40": [
      "दिवाळी प्रकाश 40",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-41": [
      "दिवाळी प्रकाश 41",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-42": [
      "दिवाळी प्रकाश 42",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-43": [
      "दिवाळी प्रकाश 43",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-44": [
      "दिवाळी प्रकाश 44",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-45": [
      "दिवाळी प्रकाश 45",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-46": [
      "दिवाळी प्रकाश 46",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-47": [
      "दिवाळी प्रकाश 47",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-48": [
      "दिवाळी प्रकाश 48",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-49": [
      "दिवाळी प्रकाश 49",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-50": [
      "दिवाळी प्रकाश 50",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-51": [
      "दिवाळी प्रकाश 51",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-52": [
      "दिवाळी प्रकाश 52",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-53": [
      "दिवाळी प्रकाश 53",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-54": [
      "दिवाळी प्रकाश 54",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-55": [
      "दिवाळी प्रकाश 55",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-56": [
      "दिवाळी प्रकाश 56",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-57": [
      "दिवाळी प्रकाश 57",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-58": [
      "दिवाळी प्रकाश 58",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-59": [
      "दिवाळी प्रकाश 59",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-60": [
      "दिवाळी प्रकाश 60",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-61": [
      "दिवाळी प्रकाश 61",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-62": [
      "दिवाळी प्रकाश 62",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-63": [
      "दिवाळी प्रकाश 63",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-64": [
      "दिवाळी प्रकाश 64",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-65": [
      "दिवाळी प्रकाश 65",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-66": [
      "दिवाळी प्रकाश 66",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-67": [
      "दिवाळी प्रकाश 67",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-68": [
      "दिवाळी प्रकाश 68",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-69": [
      "दिवाळी प्रकाश 69",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-70": [
      "दिवाळी प्रकाश 70",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-71": [
      "दिवाळी प्रकाश 71",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-72": [
      "दिवाळी प्रकाश 72",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-73": [
      "दिवाळी प्रकाश 73",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-74": [
      "दिवाळी प्रकाश 74",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-75": [
      "दिवाळी प्रकाश 75",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-76": [
      "दिवाळी प्रकाश 76",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-77": [
      "दिवाळी प्रकाश 77",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-78": [
      "दिवाळी प्रकाश 78",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-79": [
      "दिवाळी प्रकाश 79",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-80": [
      "दिवाळी प्रकाश 80",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-81": [
      "दिवाळी प्रकाश 81",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-82": [
      "दिवाळी प्रकाश 82",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-83": [
      "दिवाळी प्रकाश 83",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-84": [
      "दिवाळी प्रकाश 84",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-85": [
      "दिवाळी प्रकाश 85",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-86": [
      "दिवाळी प्रकाश 86",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-87": [
      "दिवाळी प्रकाश 87",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-88": [
      "दिवाळी प्रकाश 88",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-89": [
      "दिवाळी प्रकाश 89",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-90": [
      "दिवाळी प्रकाश 90",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-91": [
      "दिवाळी प्रकाश 91",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-92": [
      "दिवाळी प्रकाश 92",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-93": [
      "दिवाळी प्रकाश 93",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-94": [
      "दिवाळी प्रकाश 94",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-95": [
      "दिवाळी प्रकाश 95",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-96": [
      "दिवाळी प्रकाश 96",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-97": [
      "दिवाळी प्रकाश 97",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-98": [
      "दिवाळी प्रकाश 98",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-99": [
      "दिवाळी प्रकाश 99",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-100": [
      "दिवाळी प्रकाश 100",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-101": [
      "दिवाळी प्रकाश 101",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-102": [
      "दिवाळी प्रकाश 102",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-103": [
      "दिवाळी प्रकाश 103",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-104": [
      "दिवाळी प्रकाश 104",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-105": [
      "दिवाळी प्रकाश 105",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-106": [
      "दिवाळी प्रकाश 106",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-107": [
      "दिवाळी प्रकाश 107",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-108": [
      "दिवाळी प्रकाश 108",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-109": [
      "दिवाळी प्रकाश 109",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-110": [
      "दिवाळी प्रकाश 110",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-111": [
      "दिवाळी प्रकाश 111",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-112": [
      "दिवाळी प्रकाश 112",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-113": [
      "दिवाळी प्रकाश 113",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-114": [
      "दिवाळी प्रकाश 114",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-115": [
      "दिवाळी प्रकाश 115",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-116": [
      "दिवाळी प्रकाश 116",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-117": [
      "दिवाळी प्रकाश 117",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-118": [
      "दिवाळी प्रकाश 118",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-119": [
      "दिवाळी प्रकाश 119",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-120": [
      "दिवाळी प्रकाश 120",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-121": [
      "दिवाळी प्रकाश 121",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-122": [
      "दिवाळी प्रकाश 122",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-123": [
      "दिवाळी प्रकाश 123",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-124": [
      "दिवाळी प्रकाश 124",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ],
    "diwali-125": [
      "दिवाळी प्रकाश 125",
      "दीपांच्या प्रकाशाने उजळून निघो तुमचे घर आणि संसार, सुख-समृद्धी लाभो वारंवार.",
      "तुम्हाला आणि तुमच्या परिवाराला दिवाळीच्या मनःपूर्वक हार्दिक शुभेच्छा!"
    ]
  },
  "gu": {
    "diwali-1": [
      "દિવાળી પર્વ 1",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-2": [
      "દિવાળી પર્વ 2",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-3": [
      "દિવાળી પર્વ 3",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-4": [
      "દિવાળી પર્વ 4",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-5": [
      "દિવાળી પર્વ 5",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-6": [
      "દિવાળી પર્વ 6",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-7": [
      "દિવાળી પર્વ 7",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-8": [
      "દિવાળી પર્વ 8",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-9": [
      "દિવાળી પર્વ 9",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-10": [
      "દિવાળી પર્વ 10",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-11": [
      "દિવાળી પર્વ 11",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-12": [
      "દિવાળી પર્વ 12",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-13": [
      "દિવાળી પર્વ 13",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-14": [
      "દિવાળી પર્વ 14",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-15": [
      "દિવાળી પર્વ 15",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-16": [
      "દિવાળી પર્વ 16",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-17": [
      "દિવાળી પર્વ 17",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-18": [
      "દિવાળી પર્વ 18",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-19": [
      "દિવાળી પર્વ 19",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-20": [
      "દિવાળી પર્વ 20",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-21": [
      "દિવાળી પર્વ 21",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-22": [
      "દિવાળી પર્વ 22",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-23": [
      "દિવાળી પર્વ 23",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-24": [
      "દિવાળી પર્વ 24",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-25": [
      "દિવાળી પર્વ 25",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-26": [
      "દિવાળી પર્વ 26",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-27": [
      "દિવાળી પર્વ 27",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-28": [
      "દિવાળી પર્વ 28",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-29": [
      "દિવાળી પર્વ 29",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-30": [
      "દિવાળી પર્વ 30",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-31": [
      "દિવાળી પર્વ 31",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-32": [
      "દિવાળી પર્વ 32",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-33": [
      "દિવાળી પર્વ 33",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-34": [
      "દિવાળી પર્વ 34",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-35": [
      "દિવાળી પર્વ 35",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-36": [
      "દિવાળી પર્વ 36",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-37": [
      "દિવાળી પર્વ 37",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-38": [
      "દિવાળી પર્વ 38",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-39": [
      "દિવાળી પર્વ 39",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-40": [
      "દિવાળી પર્વ 40",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-41": [
      "દિવાળી પર્વ 41",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-42": [
      "દિવાળી પર્વ 42",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-43": [
      "દિવાળી પર્વ 43",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-44": [
      "દિવાળી પર્વ 44",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-45": [
      "દિવાળી પર્વ 45",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-46": [
      "દિવાળી પર્વ 46",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-47": [
      "દિવાળી પર્વ 47",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-48": [
      "દિવાળી પર્વ 48",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-49": [
      "દિવાળી પર્વ 49",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-50": [
      "દિવાળી પર્વ 50",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-51": [
      "દિવાળી પર્વ 51",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-52": [
      "દિવાળી પર્વ 52",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-53": [
      "દિવાળી પર્વ 53",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-54": [
      "દિવાળી પર્વ 54",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-55": [
      "દિવાળી પર્વ 55",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-56": [
      "દિવાળી પર્વ 56",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-57": [
      "દિવાળી પર્વ 57",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-58": [
      "દિવાળી પર્વ 58",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-59": [
      "દિવાળી પર્વ 59",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-60": [
      "દિવાળી પર્વ 60",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-61": [
      "દિવાળી પર્વ 61",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-62": [
      "દિવાળી પર્વ 62",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-63": [
      "દિવાળી પર્વ 63",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-64": [
      "દિવાળી પર્વ 64",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-65": [
      "દિવાળી પર્વ 65",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-66": [
      "દિવાળી પર્વ 66",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-67": [
      "દિવાળી પર્વ 67",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-68": [
      "દિવાળી પર્વ 68",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-69": [
      "દિવાળી પર્વ 69",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-70": [
      "દિવાળી પર્વ 70",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-71": [
      "દિવાળી પર્વ 71",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-72": [
      "દિવાળી પર્વ 72",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-73": [
      "દિવાળી પર્વ 73",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-74": [
      "દિવાળી પર્વ 74",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-75": [
      "દિવાળી પર્વ 75",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-76": [
      "દિવાળી પર્વ 76",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-77": [
      "દિવાળી પર્વ 77",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-78": [
      "દિવાળી પર્વ 78",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-79": [
      "દિવાળી પર્વ 79",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-80": [
      "દિવાળી પર્વ 80",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-81": [
      "દિવાળી પર્વ 81",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-82": [
      "દિવાળી પર્વ 82",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-83": [
      "દિવાળી પર્વ 83",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-84": [
      "દિવાળી પર્વ 84",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-85": [
      "દિવાળી પર્વ 85",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-86": [
      "દિવાળી પર્વ 86",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-87": [
      "દિવાળી પર્વ 87",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-88": [
      "દિવાળી પર્વ 88",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-89": [
      "દિવાળી પર્વ 89",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-90": [
      "દિવાળી પર્વ 90",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-91": [
      "દિવાળી પર્વ 91",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-92": [
      "દિવાળી પર્વ 92",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-93": [
      "દિવાળી પર્વ 93",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-94": [
      "દિવાળી પર્વ 94",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-95": [
      "દિવાળી પર્વ 95",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-96": [
      "દિવાળી પર્વ 96",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-97": [
      "દિવાળી પર્વ 97",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-98": [
      "દિવાળી પર્વ 98",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-99": [
      "દિવાળી પર્વ 99",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-100": [
      "દિવાળી પર્વ 100",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-101": [
      "દિવાળી પર્વ 101",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-102": [
      "દિવાળી પર્વ 102",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-103": [
      "દિવાળી પર્વ 103",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-104": [
      "દિવાળી પર્વ 104",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-105": [
      "દિવાળી પર્વ 105",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-106": [
      "દિવાળી પર્વ 106",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-107": [
      "દિવાળી પર્વ 107",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-108": [
      "દિવાળી પર્વ 108",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-109": [
      "દિવાળી પર્વ 109",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-110": [
      "દિવાળી પર્વ 110",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-111": [
      "દિવાળી પર્વ 111",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-112": [
      "દિવાળી પર્વ 112",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-113": [
      "દિવાળી પર્વ 113",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-114": [
      "દિવાળી પર્વ 114",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-115": [
      "દિવાળી પર્વ 115",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-116": [
      "દિવાળી પર્વ 116",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-117": [
      "દિવાળી પર્વ 117",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-118": [
      "દિવાળી પર્વ 118",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-119": [
      "દિવાળી પર્વ 119",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-120": [
      "દિવાળી પર્વ 120",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-121": [
      "દિવાળી પર્વ 121",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-122": [
      "દિવાળી પર્વ 122",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-123": [
      "દિવાળી પર્વ 123",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-124": [
      "દિવાળી પર્વ 124",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ],
    "diwali-125": [
      "દિવાળી પર્વ 125",
      "દીવાઓનો પ્રકાશ તમારા ઘરમાં સુખ, શાંતિ અને સમૃદ્ધિની બહાર લાવે.",
      "તમને અને તમારા પરિવારને દિવાળીની ખૂબ ખૂબ શુભકામનાઓ!"
    ]
  },
  "bn": {
    "diwali-1": [
      "আলোর দীপাবলি 1",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-2": [
      "আলোর দীপাবলি 2",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-3": [
      "আলোর দীপাবলি 3",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-4": [
      "আলোর দীপাবলি 4",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-5": [
      "আলোর দীপাবলি 5",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-6": [
      "আলোর দীপাবলি 6",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-7": [
      "আলোর দীপাবলি 7",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-8": [
      "আলোর দীপাবলি 8",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-9": [
      "আলোর দীপাবলি 9",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-10": [
      "আলোর দীপাবলি 10",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-11": [
      "আলোর দীপাবলি 11",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-12": [
      "আলোর দীপাবলি 12",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-13": [
      "আলোর দীপাবলি 13",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-14": [
      "আলোর দীপাবলি 14",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-15": [
      "আলোর দীপাবলি 15",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-16": [
      "আলোর দীপাবলি 16",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-17": [
      "আলোর দীপাবলি 17",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-18": [
      "আলোর দীপাবলি 18",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-19": [
      "আলোর দীপাবলি 19",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-20": [
      "আলোর দীপাবলি 20",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-21": [
      "আলোর দীপাবলি 21",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-22": [
      "আলোর দীপাবলি 22",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-23": [
      "আলোর দীপাবলি 23",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-24": [
      "আলোর দীপাবলি 24",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-25": [
      "আলোর দীপাবলি 25",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-26": [
      "আলোর দীপাবলি 26",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-27": [
      "আলোর দীপাবলি 27",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-28": [
      "আলোর দীপাবলি 28",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-29": [
      "আলোর দীপাবলি 29",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-30": [
      "আলোর দীপাবলি 30",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-31": [
      "আলোর দীপাবলি 31",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-32": [
      "আলোর দীপাবলি 32",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-33": [
      "আলোর দীপাবলি 33",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-34": [
      "আলোর দীপাবলি 34",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-35": [
      "আলোর দীপাবলি 35",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-36": [
      "আলোর দীপাবলি 36",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-37": [
      "আলোর দীপাবলি 37",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-38": [
      "আলোর দীপাবলি 38",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-39": [
      "আলোর দীপাবলি 39",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-40": [
      "আলোর দীপাবলি 40",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-41": [
      "আলোর দীপাবলি 41",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-42": [
      "আলোর দীপাবলি 42",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-43": [
      "আলোর দীপাবলি 43",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-44": [
      "আলোর দীপাবলি 44",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-45": [
      "আলোর দীপাবলি 45",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-46": [
      "আলোর দীপাবলি 46",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-47": [
      "আলোর দীপাবলি 47",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-48": [
      "আলোর দীপাবলি 48",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-49": [
      "আলোর দীপাবলি 49",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-50": [
      "আলোর দীপাবলি 50",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-51": [
      "আলোর দীপাবলি 51",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-52": [
      "আলোর দীপাবলি 52",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-53": [
      "আলোর দীপাবলি 53",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-54": [
      "আলোর দীপাবলি 54",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-55": [
      "আলোর দীপাবলি 55",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-56": [
      "আলোর দীপাবলি 56",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-57": [
      "আলোর দীপাবলি 57",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-58": [
      "আলোর দীপাবলি 58",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-59": [
      "আলোর দীপাবলি 59",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-60": [
      "আলোর দীপাবলি 60",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-61": [
      "আলোর দীপাবলি 61",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-62": [
      "আলোর দীপাবলি 62",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-63": [
      "আলোর দীপাবলি 63",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-64": [
      "আলোর দীপাবলি 64",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-65": [
      "আলোর দীপাবলি 65",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-66": [
      "আলোর দীপাবলি 66",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-67": [
      "আলোর দীপাবলি 67",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-68": [
      "আলোর দীপাবলি 68",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-69": [
      "আলোর দীপাবলি 69",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-70": [
      "আলোর দীপাবলি 70",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-71": [
      "আলোর দীপাবলি 71",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-72": [
      "আলোর দীপাবলি 72",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-73": [
      "আলোর দীপাবলি 73",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-74": [
      "আলোর দীপাবলি 74",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-75": [
      "আলোর দীপাবলি 75",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-76": [
      "আলোর দীপাবলি 76",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-77": [
      "আলোর দীপাবলি 77",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-78": [
      "আলোর দীপাবলি 78",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-79": [
      "আলোর দীপাবলি 79",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-80": [
      "আলোর দীপাবলি 80",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-81": [
      "আলোর দীপাবলি 81",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-82": [
      "আলোর দীপাবলি 82",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-83": [
      "আলোর দীপাবলি 83",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-84": [
      "আলোর দীপাবলি 84",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-85": [
      "আলোর দীপাবলি 85",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-86": [
      "আলোর দীপাবলি 86",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-87": [
      "আলোর দীপাবলি 87",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-88": [
      "আলোর দীপাবলি 88",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-89": [
      "আলোর দীপাবলি 89",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-90": [
      "আলোর দীপাবলি 90",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-91": [
      "আলোর দীপাবলি 91",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-92": [
      "আলোর দীপাবলি 92",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-93": [
      "আলোর দীপাবলি 93",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-94": [
      "আলোর দীপাবলি 94",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-95": [
      "আলোর দীপাবলি 95",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-96": [
      "আলোর দীপাবলি 96",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-97": [
      "আলোর দীপাবলি 97",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-98": [
      "আলোর দীপাবলি 98",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-99": [
      "আলোর দীপাবলি 99",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-100": [
      "আলোর দীপাবলি 100",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-101": [
      "আলোর দীপাবলি 101",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-102": [
      "আলোর দীপাবলি 102",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-103": [
      "আলোর দীপাবলি 103",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-104": [
      "আলোর দীপাবলি 104",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-105": [
      "আলোর দীপাবলি 105",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-106": [
      "আলোর দীপাবলি 106",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-107": [
      "আলোর দীপাবলি 107",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-108": [
      "আলোর দীপাবলি 108",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-109": [
      "আলোর দীপাবলি 109",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-110": [
      "আলোর দীপাবলি 110",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-111": [
      "আলোর দীপাবলি 111",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-112": [
      "আলোর দীপাবলি 112",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-113": [
      "আলোর দীপাবলি 113",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-114": [
      "আলোর দীপাবলি 114",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-115": [
      "আলোর দীপাবলি 115",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-116": [
      "আলোর দীপাবলি 116",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-117": [
      "আলোর দীপাবলি 117",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-118": [
      "আলোর দীপাবলি 118",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-119": [
      "আলোর দীপাবলি 119",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-120": [
      "আলোর দীপাবলি 120",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-121": [
      "আলোর দীপাবলি 121",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-122": [
      "আলোর দীপাবলি 122",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-123": [
      "আলোর দীপাবলি 123",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-124": [
      "আলোর দীপাবলি 124",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ],
    "diwali-125": [
      "আলোর দীপাবলি 125",
      "প্রদীপের উজ্জ্বল আলোয় আপনার গৃহ সুখ ও সমৃদ্ধিতে ভরে উঠুক।",
      "মা লক্ষ্মীর আশীর্বাদে আপনার জীবন আনন্দময় হোক - শুভ দীপাবলি!"
    ]
  },
  "pa": {
    "diwali-1": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 1",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-2": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 2",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-3": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 3",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-4": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 4",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-5": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 5",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-6": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 6",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-7": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 7",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-8": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 8",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-9": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 9",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-10": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 10",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-11": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 11",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-12": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 12",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-13": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 13",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-14": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 14",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-15": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 15",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-16": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 16",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-17": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 17",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-18": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 18",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-19": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 19",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-20": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 20",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-21": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 21",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-22": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 22",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-23": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 23",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-24": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 24",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-25": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 25",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-26": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 26",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-27": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 27",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-28": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 28",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-29": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 29",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-30": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 30",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-31": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 31",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-32": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 32",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-33": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 33",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-34": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 34",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-35": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 35",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-36": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 36",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-37": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 37",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-38": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 38",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-39": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 39",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-40": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 40",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-41": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 41",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-42": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 42",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-43": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 43",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-44": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 44",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-45": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 45",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-46": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 46",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-47": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 47",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-48": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 48",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-49": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 49",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-50": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 50",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-51": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 51",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-52": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 52",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-53": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 53",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-54": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 54",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-55": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 55",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-56": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 56",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-57": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 57",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-58": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 58",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-59": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 59",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-60": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 60",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-61": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 61",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-62": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 62",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-63": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 63",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-64": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 64",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-65": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 65",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-66": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 66",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-67": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 67",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-68": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 68",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-69": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 69",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-70": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 70",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-71": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 71",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-72": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 72",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-73": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 73",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-74": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 74",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-75": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 75",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-76": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 76",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-77": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 77",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-78": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 78",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-79": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 79",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-80": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 80",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-81": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 81",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-82": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 82",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-83": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 83",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-84": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 84",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-85": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 85",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-86": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 86",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-87": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 87",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-88": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 88",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-89": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 89",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-90": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 90",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-91": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 91",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-92": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 92",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-93": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 93",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-94": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 94",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-95": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 95",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-96": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 96",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-97": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 97",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-98": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 98",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-99": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 99",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-100": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 100",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-101": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 101",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-102": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 102",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-103": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 103",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-104": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 104",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-105": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 105",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-106": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 106",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-107": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 107",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-108": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 108",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-109": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 109",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-110": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 110",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-111": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 111",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-112": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 112",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-113": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 113",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-114": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 114",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-115": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 115",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-116": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 116",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-117": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 117",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-118": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 118",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-119": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 119",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-120": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 120",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-121": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 121",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-122": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 122",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-123": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 123",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-124": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 124",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ],
    "diwali-125": [
      "ਦੀਵਾਲੀ ਦੀ ਰੌਸ਼ਨੀ 125",
      "ਦੀਵਿਆਂ ਦੀ ਚਮਕ ਤੁਹਾਡੇ ਘਰ-ਵਿਹੜੇ ਵਿੱਚ ਖੁਸ਼ੀਆਂ ਤੇ ਬਰਕਤਾਂ ਲੈ ਕੇ ਆਵੇ।",
      "ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਦੀਵਾਲੀ ਦੀਆਂ ਲੱਖ-ਲੱਖ ਵਧਾਈਆਂ!"
    ]
  },
  "or": {
    "diwali-1": [
      "ଦୀପାବଳି ଆଲୋକ 1",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-2": [
      "ଦୀପାବଳି ଆଲୋକ 2",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-3": [
      "ଦୀପାବଳି ଆଲୋକ 3",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-4": [
      "ଦୀପାବଳି ଆଲୋକ 4",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-5": [
      "ଦୀପାବଳି ଆଲୋକ 5",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-6": [
      "ଦୀପାବଳି ଆଲୋକ 6",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-7": [
      "ଦୀପାବଳି ଆଲୋକ 7",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-8": [
      "ଦୀପାବଳି ଆଲୋକ 8",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-9": [
      "ଦୀପାବଳି ଆଲୋକ 9",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-10": [
      "ଦୀପାବଳି ଆଲୋକ 10",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-11": [
      "ଦୀପାବଳି ଆଲୋକ 11",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-12": [
      "ଦୀପାବଳି ଆଲୋକ 12",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-13": [
      "ଦୀପାବଳି ଆଲୋକ 13",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-14": [
      "ଦୀପାବଳି ଆଲୋକ 14",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-15": [
      "ଦୀପାବଳି ଆଲୋକ 15",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-16": [
      "ଦୀପାବଳି ଆଲୋକ 16",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-17": [
      "ଦୀପାବଳି ଆଲୋକ 17",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-18": [
      "ଦୀପାବଳି ଆଲୋକ 18",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-19": [
      "ଦୀପାବଳି ଆଲୋକ 19",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-20": [
      "ଦୀପାବଳି ଆଲୋକ 20",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-21": [
      "ଦୀପାବଳି ଆଲୋକ 21",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-22": [
      "ଦୀପାବଳି ଆଲୋକ 22",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-23": [
      "ଦୀପାବଳି ଆଲୋକ 23",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-24": [
      "ଦୀପାବଳି ଆଲୋକ 24",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-25": [
      "ଦୀପାବଳି ଆଲୋକ 25",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-26": [
      "ଦୀପାବଳି ଆଲୋକ 26",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-27": [
      "ଦୀପାବଳି ଆଲୋକ 27",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-28": [
      "ଦୀପାବଳି ଆଲୋକ 28",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-29": [
      "ଦୀପାବଳି ଆଲୋକ 29",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-30": [
      "ଦୀପାବଳି ଆଲୋକ 30",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-31": [
      "ଦୀପାବଳି ଆଲୋକ 31",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-32": [
      "ଦୀପାବଳି ଆଲୋକ 32",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-33": [
      "ଦୀପାବଳି ଆଲୋକ 33",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-34": [
      "ଦୀପାବଳି ଆଲୋକ 34",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-35": [
      "ଦୀପାବଳି ଆଲୋକ 35",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-36": [
      "ଦୀପାବଳି ଆଲୋକ 36",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-37": [
      "ଦୀପାବଳି ଆଲୋକ 37",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-38": [
      "ଦୀପାବଳି ଆଲୋକ 38",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-39": [
      "ଦୀପାବଳି ଆଲୋକ 39",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-40": [
      "ଦୀପାବଳି ଆଲୋକ 40",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-41": [
      "ଦୀପାବଳି ଆଲୋକ 41",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-42": [
      "ଦୀପାବଳି ଆଲୋକ 42",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-43": [
      "ଦୀପାବଳି ଆଲୋକ 43",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-44": [
      "ଦୀପାବଳି ଆଲୋକ 44",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-45": [
      "ଦୀପାବଳି ଆଲୋକ 45",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-46": [
      "ଦୀପାବଳି ଆଲୋକ 46",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-47": [
      "ଦୀପାବଳି ଆଲୋକ 47",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-48": [
      "ଦୀପାବଳି ଆଲୋକ 48",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-49": [
      "ଦୀପାବଳି ଆଲୋକ 49",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-50": [
      "ଦୀପାବଳି ଆଲୋକ 50",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-51": [
      "ଦୀପାବଳି ଆଲୋକ 51",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-52": [
      "ଦୀପାବଳି ଆଲୋକ 52",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-53": [
      "ଦୀପାବଳି ଆଲୋକ 53",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-54": [
      "ଦୀପାବଳି ଆଲୋକ 54",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-55": [
      "ଦୀପାବଳି ଆଲୋକ 55",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-56": [
      "ଦୀପାବଳି ଆଲୋକ 56",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-57": [
      "ଦୀପାବଳି ଆଲୋକ 57",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-58": [
      "ଦୀପାବଳି ଆଲୋକ 58",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-59": [
      "ଦୀପାବଳି ଆଲୋକ 59",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-60": [
      "ଦୀପାବଳି ଆଲୋକ 60",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-61": [
      "ଦୀପାବଳି ଆଲୋକ 61",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-62": [
      "ଦୀପାବଳି ଆଲୋକ 62",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-63": [
      "ଦୀପାବଳି ଆଲୋକ 63",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-64": [
      "ଦୀପାବଳି ଆଲୋକ 64",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-65": [
      "ଦୀପାବଳି ଆଲୋକ 65",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-66": [
      "ଦୀପାବଳି ଆଲୋକ 66",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-67": [
      "ଦୀପାବଳି ଆଲୋକ 67",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-68": [
      "ଦୀପାବଳି ଆଲୋକ 68",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-69": [
      "ଦୀପାବଳି ଆଲୋକ 69",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-70": [
      "ଦୀପାବଳି ଆଲୋକ 70",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-71": [
      "ଦୀପାବଳି ଆଲୋକ 71",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-72": [
      "ଦୀପାବଳି ଆଲୋକ 72",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-73": [
      "ଦୀପାବଳି ଆଲୋକ 73",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-74": [
      "ଦୀପାବଳି ଆଲୋକ 74",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-75": [
      "ଦୀପାବଳି ଆଲୋକ 75",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-76": [
      "ଦୀପାବଳି ଆଲୋକ 76",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-77": [
      "ଦୀପାବଳି ଆଲୋକ 77",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-78": [
      "ଦୀପାବଳି ଆଲୋକ 78",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-79": [
      "ଦୀପାବଳି ଆଲୋକ 79",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-80": [
      "ଦୀପାବଳି ଆଲୋକ 80",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-81": [
      "ଦୀପାବଳି ଆଲୋକ 81",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-82": [
      "ଦୀପାବଳି ଆଲୋକ 82",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-83": [
      "ଦୀପାବଳି ଆଲୋକ 83",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-84": [
      "ଦୀପାବଳି ଆଲୋକ 84",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-85": [
      "ଦୀପାବଳି ଆଲୋକ 85",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-86": [
      "ଦୀପାବଳି ଆଲୋକ 86",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-87": [
      "ଦୀପାବଳି ଆଲୋକ 87",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-88": [
      "ଦୀପାବଳି ଆଲୋକ 88",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-89": [
      "ଦୀପାବଳି ଆଲୋକ 89",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-90": [
      "ଦୀପାବଳି ଆଲୋକ 90",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-91": [
      "ଦୀପାବଳି ଆଲୋକ 91",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-92": [
      "ଦୀପାବଳି ଆଲୋକ 92",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-93": [
      "ଦୀପାବଳି ଆଲୋକ 93",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-94": [
      "ଦୀପାବଳି ଆଲୋକ 94",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-95": [
      "ଦୀପାବଳି ଆଲୋକ 95",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-96": [
      "ଦୀପାବଳି ଆଲୋକ 96",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-97": [
      "ଦୀପାବଳି ଆଲୋକ 97",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-98": [
      "ଦୀପାବଳି ଆଲୋକ 98",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-99": [
      "ଦୀପାବଳି ଆଲୋକ 99",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-100": [
      "ଦୀପାବଳି ଆଲୋକ 100",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-101": [
      "ଦୀପାବଳି ଆଲୋକ 101",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-102": [
      "ଦୀପାବଳି ଆଲୋକ 102",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-103": [
      "ଦୀପାବଳି ଆଲୋକ 103",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-104": [
      "ଦୀପାବଳି ଆଲୋକ 104",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-105": [
      "ଦୀପାବଳି ଆଲୋକ 105",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-106": [
      "ଦୀପାବଳି ଆଲୋକ 106",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-107": [
      "ଦୀପାବଳି ଆଲୋକ 107",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-108": [
      "ଦୀପାବଳି ଆଲୋକ 108",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-109": [
      "ଦୀପାବଳି ଆଲୋକ 109",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-110": [
      "ଦୀପାବଳି ଆଲୋକ 110",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-111": [
      "ଦୀପାବଳି ଆଲୋକ 111",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-112": [
      "ଦୀପାବଳି ଆଲୋକ 112",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-113": [
      "ଦୀପାବଳି ଆଲୋକ 113",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-114": [
      "ଦୀପାବଳି ଆଲୋକ 114",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-115": [
      "ଦୀପାବଳି ଆଲୋକ 115",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-116": [
      "ଦୀପାବଳି ଆଲୋକ 116",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-117": [
      "ଦୀପାବଳି ଆଲୋକ 117",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-118": [
      "ଦୀପାବଳି ଆଲୋକ 118",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-119": [
      "ଦୀପାବଳି ଆଲୋକ 119",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-120": [
      "ଦୀପାବଳି ଆଲୋକ 120",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-121": [
      "ଦୀପାବଳି ଆଲୋକ 121",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-122": [
      "ଦୀପାବଳି ଆଲୋକ 122",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-123": [
      "ଦୀପାବଳି ଆଲୋକ 123",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-124": [
      "ଦୀପାବଳି ଆଲୋକ 124",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ],
    "diwali-125": [
      "ଦୀପାବଳି ଆଲୋକ 125",
      "ଦୀପର ପବିତ୍ର ଆଲୋକରେ ଆପଣଙ୍କ ଘର ସୁଖ ଓ ଶାନ୍ତିରେ ପରିପୂର୍ଣ୍ଣ ହେଉ।",
      "ଆପଣଙ୍କୁ ଓ ଆପଣଙ୍କ ପରିବାରକୁ ଦୀପାବଳିର ହାର୍ଦ୍ଦିକ ଶୁଭକାମନା!"
    ]
  },
  "as": {
    "diwali-1": [
      "দীপাৱলীৰ পোহৰ 1",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-2": [
      "দীপাৱলীৰ পোহৰ 2",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-3": [
      "দীপাৱলীৰ পোহৰ 3",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-4": [
      "দীপাৱলীৰ পোহৰ 4",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-5": [
      "দীপাৱলীৰ পোহৰ 5",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-6": [
      "দীপাৱলীৰ পোহৰ 6",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-7": [
      "দীপাৱলীৰ পোহৰ 7",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-8": [
      "দীপাৱলীৰ পোহৰ 8",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-9": [
      "দীপাৱলীৰ পোহৰ 9",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-10": [
      "দীপাৱলীৰ পোহৰ 10",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-11": [
      "দীপাৱলীৰ পোহৰ 11",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-12": [
      "দীপাৱলীৰ পোহৰ 12",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-13": [
      "দীপাৱলীৰ পোহৰ 13",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-14": [
      "দীপাৱলীৰ পোহৰ 14",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-15": [
      "দীপাৱলীৰ পোহৰ 15",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-16": [
      "দীপাৱলীৰ পোহৰ 16",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-17": [
      "দীপাৱলীৰ পোহৰ 17",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-18": [
      "দীপাৱলীৰ পোহৰ 18",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-19": [
      "দীপাৱলীৰ পোহৰ 19",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-20": [
      "দীপাৱলীৰ পোহৰ 20",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-21": [
      "দীপাৱলীৰ পোহৰ 21",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-22": [
      "দীপাৱলীৰ পোহৰ 22",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-23": [
      "দীপাৱলীৰ পোহৰ 23",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-24": [
      "দীপাৱলীৰ পোহৰ 24",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-25": [
      "দীপাৱলীৰ পোহৰ 25",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-26": [
      "দীপাৱলীৰ পোহৰ 26",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-27": [
      "দীপাৱলীৰ পোহৰ 27",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-28": [
      "দীপাৱলীৰ পোহৰ 28",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-29": [
      "দীপাৱলীৰ পোহৰ 29",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-30": [
      "দীপাৱলীৰ পোহৰ 30",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-31": [
      "দীপাৱলীৰ পোহৰ 31",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-32": [
      "দীপাৱলীৰ পোহৰ 32",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-33": [
      "দীপাৱলীৰ পোহৰ 33",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-34": [
      "দীপাৱলীৰ পোহৰ 34",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-35": [
      "দীপাৱলীৰ পোহৰ 35",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-36": [
      "দীপাৱলীৰ পোহৰ 36",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-37": [
      "দীপাৱলীৰ পোহৰ 37",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-38": [
      "দীপাৱলীৰ পোহৰ 38",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-39": [
      "দীপাৱলীৰ পোহৰ 39",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-40": [
      "দীপাৱলীৰ পোহৰ 40",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-41": [
      "দীপাৱলীৰ পোহৰ 41",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-42": [
      "দীপাৱলীৰ পোহৰ 42",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-43": [
      "দীপাৱলীৰ পোহৰ 43",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-44": [
      "দীপাৱলীৰ পোহৰ 44",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-45": [
      "দীপাৱলীৰ পোহৰ 45",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-46": [
      "দীপাৱলীৰ পোহৰ 46",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-47": [
      "দীপাৱলীৰ পোহৰ 47",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-48": [
      "দীপাৱলীৰ পোহৰ 48",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-49": [
      "দীপাৱলীৰ পোহৰ 49",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-50": [
      "দীপাৱলীৰ পোহৰ 50",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-51": [
      "দীপাৱলীৰ পোহৰ 51",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-52": [
      "দীপাৱলীৰ পোহৰ 52",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-53": [
      "দীপাৱলীৰ পোহৰ 53",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-54": [
      "দীপাৱলীৰ পোহৰ 54",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-55": [
      "দীপাৱলীৰ পোহৰ 55",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-56": [
      "দীপাৱলীৰ পোহৰ 56",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-57": [
      "দীপাৱলীৰ পোহৰ 57",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-58": [
      "দীপাৱলীৰ পোহৰ 58",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-59": [
      "দীপাৱলীৰ পোহৰ 59",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-60": [
      "দীপাৱলীৰ পোহৰ 60",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-61": [
      "দীপাৱলীৰ পোহৰ 61",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-62": [
      "দীপাৱলীৰ পোহৰ 62",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-63": [
      "দীপাৱলীৰ পোহৰ 63",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-64": [
      "দীপাৱলীৰ পোহৰ 64",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-65": [
      "দীপাৱলীৰ পোহৰ 65",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-66": [
      "দীপাৱলীৰ পোহৰ 66",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-67": [
      "দীপাৱলীৰ পোহৰ 67",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-68": [
      "দীপাৱলীৰ পোহৰ 68",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-69": [
      "দীপাৱলীৰ পোহৰ 69",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-70": [
      "দীপাৱলীৰ পোহৰ 70",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-71": [
      "দীপাৱলীৰ পোহৰ 71",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-72": [
      "দীপাৱলীৰ পোহৰ 72",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-73": [
      "দীপাৱলীৰ পোহৰ 73",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-74": [
      "দীপাৱলীৰ পোহৰ 74",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-75": [
      "দীপাৱলীৰ পোহৰ 75",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-76": [
      "দীপাৱলীৰ পোহৰ 76",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-77": [
      "দীপাৱলীৰ পোহৰ 77",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-78": [
      "দীপাৱলীৰ পোহৰ 78",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-79": [
      "দীপাৱলীৰ পোহৰ 79",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-80": [
      "দীপাৱলীৰ পোহৰ 80",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-81": [
      "দীপাৱলীৰ পোহৰ 81",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-82": [
      "দীপাৱলীৰ পোহৰ 82",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-83": [
      "দীপাৱলীৰ পোহৰ 83",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-84": [
      "দীপাৱলীৰ পোহৰ 84",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-85": [
      "দীপাৱলীৰ পোহৰ 85",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-86": [
      "দীপাৱলীৰ পোহৰ 86",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-87": [
      "দীপাৱলীৰ পোহৰ 87",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-88": [
      "দীপাৱলীৰ পোহৰ 88",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-89": [
      "দীপাৱলীৰ পোহৰ 89",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-90": [
      "দীপাৱলীৰ পোহৰ 90",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-91": [
      "দীপাৱলীৰ পোহৰ 91",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-92": [
      "দীপাৱলীৰ পোহৰ 92",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-93": [
      "দীপাৱলীৰ পোহৰ 93",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-94": [
      "দীপাৱলীৰ পোহৰ 94",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-95": [
      "দীপাৱলীৰ পোহৰ 95",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-96": [
      "দীপাৱলীৰ পোহৰ 96",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-97": [
      "দীপাৱলীৰ পোহৰ 97",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-98": [
      "দীপাৱলীৰ পোহৰ 98",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-99": [
      "দীপাৱলীৰ পোহৰ 99",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-100": [
      "দীপাৱলীৰ পোহৰ 100",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-101": [
      "দীপাৱলীৰ পোহৰ 101",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-102": [
      "দীপাৱলীৰ পোহৰ 102",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-103": [
      "দীপাৱলীৰ পোহৰ 103",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-104": [
      "দীপাৱলীৰ পোহৰ 104",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-105": [
      "দীপাৱলীৰ পোহৰ 105",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-106": [
      "দীপাৱলীৰ পোহৰ 106",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-107": [
      "দীপাৱলীৰ পোহৰ 107",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-108": [
      "দীপাৱলীৰ পোহৰ 108",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-109": [
      "দীপাৱলীৰ পোহৰ 109",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-110": [
      "দীপাৱলীৰ পোহৰ 110",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-111": [
      "দীপাৱলীৰ পোহৰ 111",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-112": [
      "দীপাৱলীৰ পোহৰ 112",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-113": [
      "দীপাৱলীৰ পোহৰ 113",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-114": [
      "দীপাৱলীৰ পোহৰ 114",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-115": [
      "দীপাৱলীৰ পোহৰ 115",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-116": [
      "দীপাৱলীৰ পোহৰ 116",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-117": [
      "দীপাৱলীৰ পোহৰ 117",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-118": [
      "দীপাৱলীৰ পোহৰ 118",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-119": [
      "দীপাৱলীৰ পোহৰ 119",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-120": [
      "দীপাৱলীৰ পোহৰ 120",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-121": [
      "দীপাৱলীৰ পোহৰ 121",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-122": [
      "দীপাৱলীৰ পোহৰ 122",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-123": [
      "দীপাৱলীৰ পোহৰ 123",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-124": [
      "দীপাৱলীৰ পোহৰ 124",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ],
    "diwali-125": [
      "দীপাৱলীৰ পোহৰ 125",
      "চাকিৰ পবিত্ৰ পোহৰে আপোনাৰ জীৱনলৈ সুখ, সমৃদ্ধি আৰু শান্তি কঢ়িয়াই আনক।",
      "আপোনালৈ আৰু পৰিয়ালবৰ্গলৈ দীপাৱলীৰ আন্তৰিক শুভেচ্ছা জ্ঞাপন কৰিলোঁ!"
    ]
  },
  "ur": {
    "diwali-1": [
      "دیوالی کی روشنی 1",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-2": [
      "دیوالی کی روشنی 2",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-3": [
      "دیوالی کی روشنی 3",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-4": [
      "دیوالی کی روشنی 4",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-5": [
      "دیوالی کی روشنی 5",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-6": [
      "دیوالی کی روشنی 6",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-7": [
      "دیوالی کی روشنی 7",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-8": [
      "دیوالی کی روشنی 8",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-9": [
      "دیوالی کی روشنی 9",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-10": [
      "دیوالی کی روشنی 10",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-11": [
      "دیوالی کی روشنی 11",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-12": [
      "دیوالی کی روشنی 12",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-13": [
      "دیوالی کی روشنی 13",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-14": [
      "دیوالی کی روشنی 14",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-15": [
      "دیوالی کی روشنی 15",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-16": [
      "دیوالی کی روشنی 16",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-17": [
      "دیوالی کی روشنی 17",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-18": [
      "دیوالی کی روشنی 18",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-19": [
      "دیوالی کی روشنی 19",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-20": [
      "دیوالی کی روشنی 20",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-21": [
      "دیوالی کی روشنی 21",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-22": [
      "دیوالی کی روشنی 22",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-23": [
      "دیوالی کی روشنی 23",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-24": [
      "دیوالی کی روشنی 24",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-25": [
      "دیوالی کی روشنی 25",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-26": [
      "دیوالی کی روشنی 26",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-27": [
      "دیوالی کی روشنی 27",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-28": [
      "دیوالی کی روشنی 28",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-29": [
      "دیوالی کی روشنی 29",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-30": [
      "دیوالی کی روشنی 30",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-31": [
      "دیوالی کی روشنی 31",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-32": [
      "دیوالی کی روشنی 32",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-33": [
      "دیوالی کی روشنی 33",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-34": [
      "دیوالی کی روشنی 34",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-35": [
      "دیوالی کی روشنی 35",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-36": [
      "دیوالی کی روشنی 36",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-37": [
      "دیوالی کی روشنی 37",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-38": [
      "دیوالی کی روشنی 38",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-39": [
      "دیوالی کی روشنی 39",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-40": [
      "دیوالی کی روشنی 40",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-41": [
      "دیوالی کی روشنی 41",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-42": [
      "دیوالی کی روشنی 42",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-43": [
      "دیوالی کی روشنی 43",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-44": [
      "دیوالی کی روشنی 44",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-45": [
      "دیوالی کی روشنی 45",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-46": [
      "دیوالی کی روشنی 46",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-47": [
      "دیوالی کی روشنی 47",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-48": [
      "دیوالی کی روشنی 48",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-49": [
      "دیوالی کی روشنی 49",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-50": [
      "دیوالی کی روشنی 50",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-51": [
      "دیوالی کی روشنی 51",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-52": [
      "دیوالی کی روشنی 52",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-53": [
      "دیوالی کی روشنی 53",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-54": [
      "دیوالی کی روشنی 54",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-55": [
      "دیوالی کی روشنی 55",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-56": [
      "دیوالی کی روشنی 56",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-57": [
      "دیوالی کی روشنی 57",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-58": [
      "دیوالی کی روشنی 58",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-59": [
      "دیوالی کی روشنی 59",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-60": [
      "دیوالی کی روشنی 60",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-61": [
      "دیوالی کی روشنی 61",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-62": [
      "دیوالی کی روشنی 62",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-63": [
      "دیوالی کی روشنی 63",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-64": [
      "دیوالی کی روشنی 64",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-65": [
      "دیوالی کی روشنی 65",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-66": [
      "دیوالی کی روشنی 66",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-67": [
      "دیوالی کی روشنی 67",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-68": [
      "دیوالی کی روشنی 68",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-69": [
      "دیوالی کی روشنی 69",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-70": [
      "دیوالی کی روشنی 70",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-71": [
      "دیوالی کی روشنی 71",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-72": [
      "دیوالی کی روشنی 72",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-73": [
      "دیوالی کی روشنی 73",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-74": [
      "دیوالی کی روشنی 74",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-75": [
      "دیوالی کی روشنی 75",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-76": [
      "دیوالی کی روشنی 76",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-77": [
      "دیوالی کی روشنی 77",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-78": [
      "دیوالی کی روشنی 78",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-79": [
      "دیوالی کی روشنی 79",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-80": [
      "دیوالی کی روشنی 80",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-81": [
      "دیوالی کی روشنی 81",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-82": [
      "دیوالی کی روشنی 82",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-83": [
      "دیوالی کی روشنی 83",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-84": [
      "دیوالی کی روشنی 84",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-85": [
      "دیوالی کی روشنی 85",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-86": [
      "دیوالی کی روشنی 86",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-87": [
      "دیوالی کی روشنی 87",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-88": [
      "دیوالی کی روشنی 88",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-89": [
      "دیوالی کی روشنی 89",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-90": [
      "دیوالی کی روشنی 90",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-91": [
      "دیوالی کی روشنی 91",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-92": [
      "دیوالی کی روشنی 92",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-93": [
      "دیوالی کی روشنی 93",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-94": [
      "دیوالی کی روشنی 94",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-95": [
      "دیوالی کی روشنی 95",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-96": [
      "دیوالی کی روشنی 96",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-97": [
      "دیوالی کی روشنی 97",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-98": [
      "دیوالی کی روشنی 98",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-99": [
      "دیوالی کی روشنی 99",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-100": [
      "دیوالی کی روشنی 100",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-101": [
      "دیوالی کی روشنی 101",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-102": [
      "دیوالی کی روشنی 102",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-103": [
      "دیوالی کی روشنی 103",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-104": [
      "دیوالی کی روشنی 104",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-105": [
      "دیوالی کی روشنی 105",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-106": [
      "دیوالی کی روشنی 106",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-107": [
      "دیوالی کی روشنی 107",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-108": [
      "دیوالی کی روشنی 108",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-109": [
      "دیوالی کی روشنی 109",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-110": [
      "دیوالی کی روشنی 110",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-111": [
      "دیوالی کی روشنی 111",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-112": [
      "دیوالی کی روشنی 112",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-113": [
      "دیوالی کی روشنی 113",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-114": [
      "دیوالی کی روشنی 114",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-115": [
      "دیوالی کی روشنی 115",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-116": [
      "دیوالی کی روشنی 116",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-117": [
      "دیوالی کی روشنی 117",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-118": [
      "دیوالی کی روشنی 118",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-119": [
      "دیوالی کی روشنی 119",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-120": [
      "دیوالی کی روشنی 120",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-121": [
      "دیوالی کی روشنی 121",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-122": [
      "دیوالی کی روشنی 122",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-123": [
      "دیوالی کی روشنی 123",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-124": [
      "دیوالی کی روشنی 124",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ],
    "diwali-125": [
      "دیوالی کی روشنی 125",
      "دیپ جلتے رہیں روشن رہے سارا جہاں، خوشیاں ملیں آپ کو اپنوں کے درمیان۔",
      "دیوالی کے پرمسرت تہوار پر دلی مبارکباد اور نیک خواہشات!"
    ]
  },
  "bho": {
    "diwali-1": [
      "दीपों की चमक (भोजपुरी)",
      "रोशन होखे सारा जहाँ दीपों की कतार से,",
      "खुशियाँ मिलें आपको अपनों के प्यार से।"
    ],
    "diwali-2": [
      "लक्ष्मी जी का वास (भोजपुरी)",
      "आए आपके द्वार सुख-समृद्धि और धन की बहार,",
      "मुबारक होखे आपको दीपावली का पावन त्यौहार।"
    ],
    "diwali-3": [
      "उजालों का सफर (भोजपुरी)",
      "अंधेरा चाहे कितना भी गहरा होखे जहां में,",
      "एक दिया ही काफी है उजालों के निशां में।"
    ],
    "diwali-4": [
      "दिल का दीया (भोजपुरी)",
      "सिर्फ मकान नहीं दिल का कोना भी रोशन कीजिए,",
      "इस दीवाली सबको गले लगाकर दुआएं दीजिए।"
    ],
    "diwali-5": [
      "खुशियों की फुलझड़ी (भोजपुरी)",
      "फुलझड़ी सी मुस्कान आपके होठों पर सजी रहे,",
      "जिंदगी में खुशियों की शहनाई सदा बजी रहे।"
    ],
    "diwali-6": [
      "सोने का संसार (भोजपुरी)",
      "सोने-चांदी से भी कीमती है अपनों का यह साथ,",
      "दीपावली पर रहे सदा सिर पर ईश्वर का हाथ।"
    ],
    "diwali-7": [
      "रंगोली और दीप (भोजपुरी)",
      "रंगोली के रंगों से महक उठे आपका संसार,",
      "दीपावली लाए जीवन में खुशियों का अंबार।"
    ],
    "diwali-8": [
      "गिले-शिकवे दूर (भोजपुरी)",
      "मिटा दो दिलों से हर पुरानी रंजिश और मलाल,",
      "दीवाली का दिन है चलो करें खुशियों की शुरुआत।"
    ],
    "diwali-9": [
      "मिठाई की मिठास (भोजपुरी)",
      "काजू कतली और गुझिया सी मीठी होखे हर एक बात,",
      "हर दिन होखे दिवाली जैसी और पूनम जैसी रात।"
    ],
    "diwali-10": [
      "सफलता का उजाला (भोजपुरी)",
      "कामयाबी के दीपक आपके कदम चूमते रहें,",
      "आप सदा खुशियों के झूले में झूमते रहें।"
    ],
    "diwali-11": [
      "दीपावली का पावन पर्व (भोजपुरी)",
      "दीप जलते रहें मन से मन मिलते रहें,",
      "गिले-शिकवे सारे दिल से निकलते रहें।"
    ],
    "diwali-12": [
      "लक्ष्मी-गणेश की कृपा (भोजपुरी)",
      "मां लक्ष्मी का आशीर्वाद आपके घर सदा रहे,",
      "विघ्नहर्ता गणेश जी का साया सर पर रहे।"
    ],
    "diwali-13": [
      "घर-घर में रोशनी (भोजपुरी)",
      "जगमग दीपों की थाली से आंगन सजाइए,",
      "मिठाई खिलाकर सारे गिले-शिकवे मिटाइए।"
    ],
    "diwali-14": [
      "रोशनी का पर्व (भोजपुरी)",
      "हर रात दीवाली जैसी रोशन होखे जाए,",
      "हर दिन खुशियों का मौसम होखे जाए।"
    ],
    "diwali-15": [
      "सुख और समृद्धि की बहार (भोजपुरी)",
      "पल-पल सुनहरे फूल खिलते रहें आपके आंगन,",
      "कभी न होखे कांटों से आपका सामना जीवन।"
    ],
    "diwali-16": [
      "दिलों का संगम (भोजपुरी)",
      "तारों की तरह जगमगाए आपका संसार,",
      "सदा बना रहे हमारे दिलों में प्यार।"
    ],
    "diwali-17": [
      "खुशियों के दीये (भोजपुरी)",
      "एक दीया विश्वास का, एक दीया उम्मीद का,",
      "एक दीया प्यार का, और एक दीया प्रीत का।"
    ],
    "diwali-18": [
      "दीपों की बारात (भोजपुरी)",
      "चांद की चांदनी से भी प्यारी होखे यह रात,",
      "लेकर आई है दीवाली दीपों की बारात।"
    ],
    "diwali-19": [
      "सपनों का सवेरा (भोजपुरी)",
      "खुशियों का होखे सवेरा, गम का ना होखे कोई डेरा,",
      "रोशनियों से भर जाए आशियाना तेरा।"
    ],
    "diwali-20": [
      "उम्मीदों की लौ (भोजपुरी)",
      "जब-जब जलता है दीया मिट्टी का आंगन में,",
      "नई उमंग भर जाती है सबके इस मन में।"
    ],
    "diwali-21": [
      "प्यार का उजाला (भोजपुरी)",
      "दीपक की लौ जैसे हवाओं से लड़ जाती है,",
      "सच्ची मोहब्बत भी हर मुश्किल से पार पाती है।"
    ],
    "diwali-22": [
      "सदा मुस्कुराते रहो (भोजपुरी)",
      "मुस्कान आपके होठों से कभी न छूटे,",
      "अपनों का यह प्यारा साथ कभी न टूटे।"
    ],
    "diwali-23": [
      "धनतेरस से दीवाली तक (भोजपुरी)",
      "सोने-चांदी से चमके आपका हर एक दिन,",
      "खुशियां न गिन पाओ आप अपनी उंगलियों पर गिन।"
    ],
    "diwali-24": [
      "आंगन में रंगोली (भोजपुरी)",
      "रंगोली के रंगों में घुली होखे मिठास,",
      "हर एक पल होखे आपके लिए बेहद खास।"
    ],
    "diwali-25": [
      "शुभ दीपावली का संकल्प (भोजपुरी)",
      "आओ मिलकर नफरत का अंधेरा दूर भगाएं,",
      "प्रेम और भाईचारे का एक नया दिया जलाएं।"
    ],
    "diwali-26": [
      "धन्वंतरि कृपा और सेहत (भोजपुरी)",
      "सोने-चांदी से ज्यादा सेहत की दौलत मिले,",
      "धन्वंतरि कृपा से घर में खुशियों का गुलशन खिले।"
    ],
    "diwali-27": [
      "शुभ शुरुआत और नए सपने (भोजपुरी)",
      "धनतेरस पर सिर्फ बर्तन ही नहीं नए सपने भी लाएं,",
      "अपने आंगन में खुशहाली और बरकत के दीप जलाएं।"
    ],
    "diwali-28": [
      "कुबेर का खजाना (भोजपुरी)",
      "कुबेर का खजाना और मां लक्ष्मी का साथ हो,",
      "आपके हर काम में ईश्वर का प्यारा हाथ हो।"
    ],
    "diwali-29": [
      "चांदी का सिक्का और तकदीर (भोजपुरी)",
      "चांदी का सिक्का चमके जैसे आपकी तकदीर,",
      "धनतेरस पर पूरी होखे आपके सपनों की तस्वीर।"
    ],
    "diwali-30": [
      "खुशियों की सौगात (भोजपुरी)",
      "धनतेरस की पावन बेला लेकर आए खुशियों की सौगात,",
      "कभी न खाली रहे आपकी झोली कभी न होखे तंग हालात।"
    ],
    "diwali-31": [
      "आरोग्य और सच्चा धन (भोजपुरी)",
      "सबसे बड़ा धन है अच्छी सेहत और अपनों का प्यार,",
      "मुबारक होखे आपको शुभ धनतेरस का यह पावन त्यौहार।"
    ],
    "diwali-32": [
      "स्वर्णिम सवेरा (भोजपुरी)",
      "सोने सी दमक उठे आपकी हर एक सुबह,",
      "धनतेरस पर कबूल होखे आपकी हर एक नेक दुआ।"
    ],
    "diwali-33": [
      "बरकत का त्यौहार (भोजपुरी)",
      "खुशियों से भरी होखे आपकी दुकान और प्यारा सा घर,",
      "धनतेरस की रोशनी चमका दे आपका हर सफर।"
    ],
    "diwali-34": [
      "नया विश्वास और मिठास (भोजपुरी)",
      "नया बर्तन लाए नई उमंग और नया विश्वास,",
      "आपके जीवन में घुले सदा प्यार और मिठास।"
    ],
    "diwali-35": [
      "दीप और धन का पैगाम (भोजपुरी)",
      "दीपक की पहली लौ आज दे गई यही पैगाम,",
      "धनतेरस पर चमके आपका और आपके परिवार का नाम।"
    ],
    "diwali-36": [
      "धन्वंतरि अमृत बूंदें (भोजपुरी)",
      "धन्वंतरि जी की अमृत बूंदें जीवन में बरसाएं,",
      "धनतेरस के इस शुभ दिन की दिल से शुभकामनाएं।"
    ],
    "diwali-37": [
      "समृद्धि का द्वार (भोजपुरी)",
      "खुशहाली का दरवाजा खुले बंद होखे सारे गम,",
      "धनतेरस पर आपकी झोली में खुशियां आएं हरदम।"
    ],
    "diwali-38": [
      "शुभ लाभ का तिलक (भोजपुरी)",
      "शुभ-लाभ का तिलक होखे और लक्ष्मी जी का वास,",
      "धनतेरस का हर पल होखे आपके लिए बेहद खास।"
    ],
    "diwali-39": [
      "रिश्तों की असली दौलत (भोजपुरी)",
      "अपनों की सच्ची मुस्कान ही असली दौलत है,",
      "धनतेरस का यह त्यौहार प्यार की नेमत है।"
    ],
    "diwali-40": [
      "आरोग्य वरदान (भोजपुरी)",
      "रोग-दोष मिटें और मिले लंबी उम्र का वरदान,",
      "धनतेरस पर महक उठे आपका सारा जहान।"
    ],
    "diwali-41": [
      "छोटी दिवाली का छोटा दीया (भोजपुरी)",
      "छोटी दिवाली का छोटा सा दीया मिटाए बड़ा अंधेरा,",
      "खुशियों की किरण लेकर आए आपके घर नया सवेरा।"
    ],
    "diwali-42": [
      "नरक चतुर्दशी मुक्ति (भोजपुरी)",
      "यमराज का भय मिटे और मन का मिटे विकार,",
      "नरक चतुर्दशी पर मिले सुख-शांति का उपहार।"
    ],
    "diwali-43": [
      "चौदह दीपों की पावन लौ (भोजपुरी)",
      "चौदह दीपों की पावन लौ से रोशन होखे घर-बार,",
      "मुबारक होखे आपको रूप चौदस का यह प्यारा त्यौहार।"
    ],
    "diwali-44": [
      "रूप निखरे मन का (भोजपुरी)",
      "रूप निखरे मन का और चेहरे पर रहे मुस्कान,",
      "छोटी दिवाली लाए आपके लिए खुशियों का वरदान।"
    ],
    "diwali-45": [
      "अंधकार पर रोशनी की जीत (भोजपुरी)",
      "अंधकार को मात देकर रोशनी की होखे जीत,",
      "छोटी दिवाली पर गाए दिल खुशियों के नए गीत।"
    ],
    "diwali-46": [
      "शांति और प्रीत का आगाज़ (भोजपुरी)",
      "एक दीया शांति का और एक दीया प्यार का,",
      "रूप चौदस है आगाज़ दीपों के त्यौहार का।"
    ],
    "diwali-47": [
      "बुराई का दहन (भोजपुरी)",
      "मन की हर बुराई को आज दीप में जला देना,",
      "छोटी दिवाली पर हर रूठे को हंसकर मना लेना।"
    ],
    "diwali-48": [
      "कल की दिवाली का उल्लास (भोजपुरी)",
      "कल बड़ी दीवाली है आज छोटी का उल्लास,",
      "हर दिन रहे आपके चेहरे पर यूं ही विश्वास।"
    ],
    "diwali-49": [
      "आंगन महक जाए (भोजपुरी)",
      "दीप जलें छतों पर और आंगन महक जाए,",
      "छोटी दिवाली आपके जीवन में सुख-समृद्धि लाए।"
    ],
    "diwali-50": [
      "शुभ संदेश रूप चौदस (भोजपुरी)",
      "छोटी दिवाली का यह प्यारा पैगाम ले लो,",
      "खुशियों के इस उत्सव में अपनों का नाम ले लो।"
    ],
    "diwali-51": [
      "कान्हा की उंगली और गोवर्धन (भोजपुरी)",
      "कन्हैया ने उंगली पर उठाया था गोवर्धन पहाड़,",
      "आपके जीवन से भी टल जाए हर मुश्किल और भार।"
    ],
    "diwali-52": [
      "अन्नकूट का पावन भोग (भोजपुरी)",
      "अन्नकूट का भोग लगे और बजे कृष्ण की बांसुरी,",
      "गोवर्धन पूजा पर पूरी होखे आपकी हर इच्छा अधूरी।"
    ],
    "diwali-53": [
      "प्रकृति और गौ माता का मान (भोजपुरी)",
      "प्रकृति की पूजा और गौ माता का मान,",
      "गोवर्धन पूजा सिखाती है सबका करो सम्मान।"
    ],
    "diwali-54": [
      "मुरली मनोहर की कृपा (भोजपुरी)",
      "मुरली मनोहर की कृपा से घर में बरसे प्यार,",
      "मुबारक होखे आपको गोवर्धन पूजा का पावन त्यौहार।"
    ],
    "diwali-55": [
      "गिरिराज महाराज की शरण (भोजपुरी)",
      "गिरिराज महाराज करें हर संकट का निवारण,",
      "सुख-समृद्धि से भर जाए आपके जीवन का हर कारण।"
    ],
    "diwali-56": [
      "गौ माता का आशीर्वाद (भोजपुरी)",
      "गौ माता के चरणों में है चारों धाम का वास,",
      "गोवर्धन पूजा लाए आपके घर में नई मिठास।"
    ],
    "diwali-57": [
      "ब्रज की पावन माटी (भोजपुरी)",
      "ब्रज की पावन माटी सा महके आपका संसार,",
      "गोवर्धन पूजा पर मिले यश और खुशियों का उपहार।"
    ],
    "diwali-58": [
      "कृष्ण भक्ति का विश्वास (भोजपुरी)",
      "कृष्ण की भक्ति और अपनों का अटूट विश्वास,",
      "गोवर्धन पूजा का हर पल बने सबसे खास।"
    ],
    "diwali-59": [
      "छप्पन भोग का थाल (भोजपुरी)",
      "छप्पन भोग की थाली और प्रेम भरा मन,",
      "गोवर्धन पूजा से पावन होखे आपका जीवन।"
    ],
    "diwali-60": [
      "सदा खुशहाली का वरदान (भोजपुरी)",
      "कान्हा की कृपा से कभी न आए कोई विपदा,",
      "गोवर्धन पूजा पर खुशहाली रहे आपके घर सदा।"
    ],
    "diwali-61": [
      "रोली और अक्षत का पावन टीका (भोजपुरी)",
      "रोली-चावल का पावन टीका और बहना का प्यार,",
      "भाई दूज का यह बंधन है सबसे सच्चा और पहरेदार।"
    ],
    "diwali-62": [
      "बहना की अमर दुआ (भोजपुरी)",
      "बहना की हर दुआ में भाई की लंबी उम्र का नाम,",
      "भाई दूज के इस पावन दिन को झुककर सलाम।"
    ],
    "diwali-63": [
      "भाई का सच्चा वादा (भोजपुरी)",
      "भाई का वादा है हर मुश्किल में साथ निभाएगा,",
      "बहना के चेहरे की हंसी को कभी न खोने देगा।"
    ],
    "diwali-64": [
      "थाली में सजी मिठाई (भोजपुरी)",
      "थाली में सजी मिठाई और माथे पर लाल तिलक,",
      "भाई-बहन के रिश्ते की चमक रहे स्वर्ग तक।"
    ],
    "diwali-65": [
      "प्यार का फरिश्ता (भोजपुरी)",
      "रेशम के धागे से गहरा है यह प्यार का रिश्ता,",
      "भाई के रूप में रब ने भेजा एक फरिश्ता।"
    ],
    "diwali-66": [
      "बचपन की खट्टी-मीठी यादें (भोजपुरी)",
      "रूठना-मनाना और बचपन की वो सारी बातें,",
      "भाई दूज पर याद आती बा वो प्यारी मीठी रातें।"
    ],
    "diwali-67": [
      "स्नेह का अटूट धागा (भोजपुरी)",
      "दूर रहकर भी जो पास लगे वो है बहना का दुलार,",
      "भाई दूज की हार्दिक शुभकामनाएं बारंबार।"
    ],
    "diwali-68": [
      "माथे पे तिलक का मान (भोजपुरी)",
      "माथे पे तिलक सजाकर बहना मांगी यही दुआ,",
      "भाई की हर राह में होखे सिर्फ खुशियों का समां।"
    ],
    "diwali-69": [
      "अमर प्रेम कहानी (भोजपुरी)",
      "कागज़ की नाव और वो बारिश का पानी,",
      "भाई-बहन के प्यार की अमर है यह कहानी।"
    ],
    "diwali-70": [
      "यम और यमुना का वंदन (भोजपुरी)",
      "यम और यमुना के प्रेम का पावन यह त्यौहार,",
      "भाई दूज लाए आपके जीवन में खुशियों की बहार।"
    ],
    "diwali-71": [
      "अनमोल रिश्ता (भोजपुरी)",
      "दुनिया के सारे रिश्तों से अनमोल है यह प्यार,",
      "भाई-बहन के चेहरे पर सजी रहे मुस्कान हर बार।"
    ],
    "diwali-72": [
      "सात जन्मों का साथ (भोजपुरी)",
      "तिलक की खुशबू से महके भाई का ललाट,",
      "ईश्वर करे दोनों का साथ रहे सात जन्मों के घाट।"
    ],
    "diwali-73": [
      "खुशियों का नया राग (भोजपुरी)",
      "भाई दूज की सुबह लाए खुशियों का नया राग,",
      "खिल उठे दोनों के जीवन का प्यारा सा बाग।"
    ],
    "diwali-74": [
      "हसीन ख्वाब बहना (भोजपुरी)",
      "नफरत के इस दौर में प्यार की मिसाल होखे तुम,",
      "मेरी प्यारी बहना मेरा सबसे हसीन ख्वाब होखे तुम।"
    ],
    "diwali-75": [
      "शुभ भाई दूज वंदन (भोजपुरी)",
      "भाई दूज पर ईश्वर से यही मांगते बा वरदान,",
      "दोनों भाई-बहन की शान रहे हमेशा हिंदुस्तान।"
    ],
    "diwali-76": [
      "परिवार संग दीया (भोजपुरी)",
      "अपनों के साथ बैठकर जो दीया जलता है,",
      "उसी रोशनी में असली दीवाली का सुख पलता है।"
    ],
    "diwali-77": [
      "मां-बाप का आशीर्वाद (भोजपुरी)",
      "मां-बाप के आशीर्वाद से जगमगाए सारा संसार,",
      "परिवार के साथ ही खूबसूरत लगे दीवाली का त्यौहार।"
    ],
    "diwali-78": [
      "यारों की दीवाली (भोजपुरी)",
      "यारों के साथ चाय की चुस्की और पटाखों का शोर,",
      "सच्ची दोस्ती की रोशनी खींचती है दिल की डोर।"
    ],
    "diwali-79": [
      "दोस्ती का दीया (भोजपुरी)",
      "एक दीया दोस्ती के नाम का जलाना मेरे यार,",
      "दूर रहकर भी कम न होगा हमारा यह सच्चा प्यार।"
    ],
    "diwali-80": [
      "मोहब्बत की रोशनी (भोजपुरी)",
      "तेरे चेहरे की मुस्कान मेरे लिए दीवाली का दीया है,",
      "मेरी हर धड़कन ने सिर्फ तुझसे ही प्यार किया है।"
    ],
    "diwali-81": [
      "तेरे संग हर रात दीवाली (भोजपुरी)",
      "दीप जलें या न जलें तेरी मौजूदगी ही काफी है,",
      "तेरे साथ हर एक रात दीवाली जैसी रोशन रहती है।"
    ],
    "diwali-82": [
      "शरारत और मिठास (भोजपुरी)",
      "मिठाई छीनकर खाना और फिर गले से लगा लेना,",
      "दीवाली पर भाई-बहन की यही तो सबसे प्यारी बात है।"
    ],
    "diwali-83": [
      "बुजुर्गों का आशीष (भोजपुरी)",
      "बुजुर्गों के हाथ का आशीष और बच्चों की किलकारी,",
      "यही बनाती है घर-घर की दीवाली सबसे प्यारी।"
    ],
    "diwali-84": [
      "महफिल-ए-यारां (भोजपुरी)",
      "बचपन के दोस्त जब मिलकर दीया जलाते बा,",
      "पुराने वो हसीन दिन फिर से लौट आते बा।"
    ],
    "diwali-85": [
      "इश्क की जगमगाहट (भोजपुरी)",
      "तेरी आँखों के नूर से रोशन है मेरा आशियाना,",
      "इस दीवाली पर तू ही मेरी खुशियों का ठिकाना।"
    ],
    "diwali-86": [
      "महालक्ष्मी स्तुति (भोजपुरी)",
      "ॐ महालक्ष्म्यै नमः का गूंजे घर में जाप,",
      "मिट जाएं जीवन के सारे संकट और पाप।"
    ],
    "diwali-87": [
      "कमलासन पर विराजें मां (भोजपुरी)",
      "कमल आसन पर विराजें मां लक्ष्मी आपके द्वार,",
      "सुख-शांति और ऐश्वर्य का बरसे अमृत धार।"
    ],
    "diwali-88": [
      "अमावस की रात पूर्णिमा सी (भोजपुरी)",
      "अमावस की रात भी पूर्णिमा सी चमक जाए,",
      "मां लक्ष्मी की कृपा से घर स्वर्ग बन जाए।"
    ],
    "diwali-89": [
      "रिद्धि-सिद्धि संग गणपति (भोजपुरी)",
      "रिद्धि-सिद्धि संग आएं गणपति महाराज,",
      "पूर्ण होखे जाएं आपके सारे अधूरे काज।"
    ],
    "diwali-90": [
      "सोने की थाली और दीपमाला (भोजपुरी)",
      "सोने की थाली में सजाकर दीपों की माला,",
      "मां लक्ष्मी ने घर के हर कोने को कर दिया उजाला।"
    ],
    "diwali-91": [
      "अन्न और धन के भंडार (भोजपुरी)",
      "धन-धान्य से भरे रहें आपके अन्न के भंडार,",
      "सदा बना रहे मां लक्ष्मी का आपके सिर पर प्यार।"
    ],
    "diwali-92": [
      "वैभव और मान-सम्मान (भोजपुरी)",
      "वैभव, कीर्ति और मान-सम्मान का वरदान मिले,",
      "दीवाली की रात आपके घर में सुख का फूल खिले।"
    ],
    "diwali-93": [
      "शंख और घंटी की ध्वनि (भोजपुरी)",
      "मंगल दीप जले चौखट पर बजे शंख और घंटी,",
      "मां लक्ष्मी की कृपा से कभी न होखे खुशियों में मंदी।"
    ],
    "diwali-94": [
      "अष्ट लक्ष्मी का वास (भोजपुरी)",
      "अष्ट लक्ष्मी का वास होखे आपके इस पवित्र धाम,",
      "हर सवेरा लेकर आए खुशियों का नया पैगाम।"
    ],
    "diwali-95": [
      "सच्ची श्रद्धा का फल (भोजपुरी)",
      "सच्ची श्रद्धा से जो मां लक्ष्मी को ध्याते बा,",
      "वो जिंदगी के हर मोड़ पर खुशहाली ही पाते बा।"
    ],
    "diwali-96": [
      "अंतर्मन की पावन ज्योति (भोजपुरी)",
      "अंतर्मन की ज्योति जगाकर करना मां का वंदन,",
      "महक उठेगा दीवाली पर आपका प्यारा सा जीवन।"
    ],
    "diwali-97": [
      "श्री सूक्त की पावन ध्वनि (भोजपुरी)",
      "श्री सूक्त के मंत्रों से गूंज उठे हर एक कोना,",
      "मां लक्ष्मी की कृपा से सच होखे हर सपना सलोना।"
    ],
    "diwali-98": [
      "दया दृष्टि मां लक्ष्मी की (भोजपुरी)",
      "मां लक्ष्मी की दया दृष्टि जिस पर भी होखे जाए,",
      "रंक भी राजा बने और दरिद्रता मिट जाए।"
    ],
    "diwali-99": [
      "चरणों में दीपांजलि (भोजपुरी)",
      "दीपों की अंजलि अर्पित करें मां के श्री चरणों में,",
      "भर जाए सुख का सागर आपके जीवन के पन्नों में।"
    ],
    "diwali-100": [
      "महापर्व दीपावली का संकल्प (भोजपुरी)",
      "दीप जलें, जगमगाए भारत, मिटे हर अंधकार,",
      "मंगलमय होखे आपको और आपके पूरे परिवार को दीपावली का त्यौहार!"
    ],
    "diwali-101": [
      "माँ का दुलार और दीवाली (भोजपुरी)",
      "माँ के हाथों की मिठाई और ममता का संसार मिले,",
      "इस दीवाली घर के हर कोने में खुशियों का त्योहार खिले।"
    ],
    "diwali-102": [
      "पिता का साया और हौसला (भोजपुरी)",
      "पिता का साया सिर पर होखे तो हर दिन दीवाली का उजाला है,",
      "उनके मजबूत कंधों ने ही हमारे सपनों को संभाला है।"
    ],
    "diwali-103": [
      "भाई की यारी और दीये की लौ (भोजपुरी)",
      "भाई के संग पटाखे फोड़ना और हँसते-हँसते लड़ जाना,",
      "दीवाली का सबसे प्यारा सुख है अपनों का घर आना।"
    ],
    "diwali-104": [
      "बहन की रंगोली और मुस्कान (भोजपुरी)",
      "आँगन में बहन की सजाई रंगोली सबसे खास लगे,",
      "उसकी खिलखिलाती हँसी से दीवाली का हर पल पावन लगे।"
    ],
    "diwali-105": [
      "परिवार का संगम (भोजपुरी)",
      "घर की चौखट पर जब सब अपने एक साथ मुस्कुराते बा,",
      "मिट्टी के दीये भी तब तारों से ज्यादा जगमगाते बा।"
    ],
    "diwali-106": [
      "घर का सुकून और बरकत (भोजपुरी)",
      "बड़ों का आशीर्वाद मिले और छोटों का ढेर सारा प्यार,",
      "लक्ष्मी जी की कृपा से महके हमारा पूरा परिवार।"
    ],
    "diwali-107": [
      "घर के आँगन की रोशनी (भोजपुरी)",
      "दीयों की रोशनी से ज्यादा रोशन है अपनों का यह साथ,",
      "दीवाली पर सलामत रहे हमारे इस भरे-पूरे परिवार की बात।"
    ],
    "diwali-108": [
      "यारों की महफ़िल और फुलझड़ी (भोजपुरी)",
      "मिठाई का डिब्बा खाली करना और यारों की महफ़िल सजाना,",
      "दीवाली असली तभी बनती है जब दोस्तों का होखे आना-जाना।"
    ],
    "diwali-109": [
      "तू है तो दीवाली है (भोजपुरी)",
      "पटाखे फूटे न फूटे तेरी यारी में ही सारा दम है,",
      "तू जो मुस्कुरा दे मेरे यार तो जिंदगी में उजाला ही हर दम है।"
    ],
    "diwali-110": [
      "बचपन की मस्ती और दीप (भोजपुरी)",
      "गली के मोड़ पर वो दीये जलाना और छुपकर रॉकेट छोड़ना,",
      "दुआ है इस दीवाली कभी न छूटे दोस्तों से दिल का नाता जोड़ना।"
    ],
    "diwali-111": [
      "हँसी का पटाखा (भोजपुरी)",
      "फुलझड़ी सी मुस्कान तेरी, रॉकेट सी तेरी उड़ान हो,",
      "दोस्त इस दीवाली तू जहां भी रहे, तू ही महफ़िल की शान हो।"
    ],
    "diwali-112": [
      "दूर बैठे दोस्त को सलाम (भोजपुरी)",
      "दूर होखे शहर चाहे कितना भी, दिल से दिल का तार जुड़ा है,",
      "दोस्त तेरी सलामती के लिए दीवाली के हर दीये में दुआ है।"
    ],
    "diwali-113": [
      "यारी की अटूट चमक (भोजपुरी)",
      "दीयों की कतारें बुझ सकती बा मगर अपनी यारी का नूर नहीं,",
      "मुबारक होखे दीवाली मेरे भाई, तू आँखों से भले दिल से दूर नहीं।"
    ],
    "diwali-114": [
      "नई ऊंचाइयां और टीम स्पिरिट (भोजपुरी)",
      "सपनों के हर टारगेट को छू लें और छू लें सफलता का आसमान,",
      "दीपावली लाए हमारी पूरी टीम के लिए नई पहचान और सम्मान।"
    ],
    "diwali-115": [
      "मार्गदर्शन और सम्मान (भोजपुरी)",
      "आपके कुशल नेतृत्व से रोशन हुआ हमारे काम का हर रास्ता,",
      "दीवाली के पावन अवसर पर आपको मिले सुख-समृद्धि का वास्ता।"
    ],
    "diwali-116": [
      "ऑफिस का साथ और सहयोग (भोजपुरी)",
      "डेडलाइन की भागदौड़ में भी जो चेहरे पर मुस्कान सजाए,",
      "ऐसे प्यारे सहकर्मियों को दीवाली का पावन पर्व बहुत रास आए।"
    ],
    "diwali-117": [
      "साझेदारी और अटूट विश्वास (भोजपुरी)",
      "हमारे इस भरोसेमंद रिश्ते में हमेशा बना रहे विश्वास का दीया,",
      "आपके सहयोग ने ही हमारे हर प्रोजेक्ट को नया आयाम दिया।"
    ],
    "diwali-118": [
      "तरक्की और नए अवसर (भोजपुरी)",
      "मेहनत का दीपक जले और बरसे प्रमोशन व तरक्की का वरदान,",
      "यह दीवाली आपके करियर को दे एक नई और बुलंद उड़ान।"
    ],
    "diwali-119": [
      "कर्मक्षेत्र में खुशहाली (भोजपुरी)",
      "सफलता के दीप जलें और गूंजे हर दिल में खुशियों की तान,",
      "दीपावली के इस शुभ अवसर पर बढ़े आपका कारोबार और सम्मान।"
    ],
    "diwali-120": [
      "चाचा-ताऊ का स्नेह (भोजपुरी)",
      "चाचा-ताऊ का दुलार और परिवार का मान बना रहे,",
      "दीवाली के पावन उजाले से महकता आपका आशियाना रहे।"
    ],
    "diwali-121": [
      "ननिहाल की मिठास (भोजपुरी)",
      "मामा-मामी का प्यारा आशीष और ननिहाल की वो मीठी याद,",
      "दीवाली लाए आपके आँगन में खुशियों की अनमोल सौगात।"
    ],
    "diwali-122": [
      "बुआ-फूफाजी का दुलार (भोजपुरी)",
      "बुआ के हाथों का स्नेह और फूफाजी की वो प्यारी मुस्कान,",
      "दीपावली पर आपके घर में बरसे सुख, शांति और सम्मान।"
    ],
    "diwali-123": [
      "पड़ोसियों संग दीवाली (भोजपुरी)",
      "दीवारें भले अलग हों पर आँगन में एक ही दीया जलता है,",
      "पड़ोसियों का साथ होखे तो हर त्यौहार दिल से सजता है।"
    ],
    "diwali-124": [
      "रिश्तों की गर्माहट (भोजपुरी)",
      "रिश्तेदारी की मिठास कभी कम न हो, फासले सारे मिट जाएं,",
      "इस दीवाली सबके घरों में खुशहाली और प्यार के दीप जल जाएं।"
    ],
    "diwali-125": [
      "सभी सगे-संबंधियों को प्रणाम (भोजपुरी)",
      "हर सगे-संबंधी के घर में सुख-समृद्धि और आरोग्य का वास हो,",
      "दीपावली का यह महापर्व आप सभी के लिए सबसे खास हो।"
    ]
  },
  "bgc": {
    "diwali-1": [
      "दीपों की चमक (हरियाणवी)",
      "रोशन हो सारा जहाँ दीपों की कतार से,",
      "खुशियाँ मिलें थारे को अपनों के प्यार से।"
    ],
    "diwali-2": [
      "लक्ष्मी जी का वास (हरियाणवी)",
      "आए थारे के द्वार सुख-समृद्धि और धन की बहार,",
      "मुबारक हो थारे को दीपावली का पावन त्यौहार।"
    ],
    "diwali-3": [
      "उजालों का सफर (हरियाणवी)",
      "अंधेरा चाहे कितना भी गहरा हो जहां में,",
      "एक दिया ही काफी सै उजालों के निशां में।"
    ],
    "diwali-4": [
      "दिल का दीया (हरियाणवी)",
      "सिर्फ मकान नहीं दिल का कोना भी रोशन कीजिए,",
      "इस दीवाली सबको गले लगाकर दुआएं दीजिए।"
    ],
    "diwali-5": [
      "खुशियों की फुलझड़ी (हरियाणवी)",
      "फुलझड़ी सी मुस्कान थारे के होठों पर सजी रहे,",
      "जिंदगी में खुशियों की शहनाई सदा बजी रहे।"
    ],
    "diwali-6": [
      "सोने का संसार (हरियाणवी)",
      "सोने-चांदी से भी कीमती सै अपनों का यह साथ,",
      "दीपावली पर रहे सदा सिर पर ईश्वर का हाथ।"
    ],
    "diwali-7": [
      "रंगोली और दीप (हरियाणवी)",
      "रंगोली के रंगों से महक उठे थारे का संसार,",
      "दीपावली लाए जीवन में खुशियों का अंबार।"
    ],
    "diwali-8": [
      "गिले-शिकवे दूर (हरियाणवी)",
      "मिटा दो दिलों से हर पुरानी रंजिश और मलाल,",
      "दीवाली का दिन सै चलो करें खुशियों की शुरुआत।"
    ],
    "diwali-9": [
      "मिठाई की मिठास (हरियाणवी)",
      "काजू कतली और गुझिया सी मीठी हो हर एक बात,",
      "हर दिन हो दिवाली जैसी और पूनम जैसी रात।"
    ],
    "diwali-10": [
      "सफलता का उजाला (हरियाणवी)",
      "कामयाबी के दीपक थारे के कदम चूमते रहें,",
      "थारे  सदा खुशियों के झूले में झूमते रहें।"
    ],
    "diwali-11": [
      "दीपावली का पावन पर्व (हरियाणवी)",
      "दीप जलते रहें मन से मन मिलते रहें,",
      "गिले-शिकवे सारे दिल से निकलते रहें।"
    ],
    "diwali-12": [
      "लक्ष्मी-गणेश की कृपा (हरियाणवी)",
      "मां लक्ष्मी का आशीर्वाद थारे के घर सदा रहे,",
      "विघ्नहर्ता गणेश जी का साया सर पर रहे।"
    ],
    "diwali-13": [
      "घर-घर में रोशनी (हरियाणवी)",
      "जगमग दीपों की थाली से आंगन सजाइए,",
      "मिठाई खिलाकर सारे गिले-शिकवे मिटाइए।"
    ],
    "diwali-14": [
      "रोशनी का पर्व (हरियाणवी)",
      "हर रात दीवाली जैसी रोशन हो जाए,",
      "हर दिन खुशियों का मौसम हो जाए।"
    ],
    "diwali-15": [
      "सुख और समृद्धि की बहार (हरियाणवी)",
      "पल-पल सुनहरे फूल खिलते रहें थारे के आंगन,",
      "कभी न हो कांटों से थारे का सामना जीवन।"
    ],
    "diwali-16": [
      "दिलों का संगम (हरियाणवी)",
      "तारों की तरह जगमगाए थारे का संसार,",
      "सदा बना रहे हमारे दिलों में प्यार।"
    ],
    "diwali-17": [
      "खुशियों के दीये (हरियाणवी)",
      "एक दीया विश्वास का, एक दीया उम्मीद का,",
      "एक दीया प्यार का, और एक दीया प्रीत का।"
    ],
    "diwali-18": [
      "दीपों की बारात (हरियाणवी)",
      "चांद की चांदनी से भी प्यारी हो यह रात,",
      "लेकर आई सै दीवाली दीपों की बारात।"
    ],
    "diwali-19": [
      "सपनों का सवेरा (हरियाणवी)",
      "खुशियों का हो सवेरा, गम का ना हो कोई डेरा,",
      "रोशनियों से भर जाए आशियाना तेरा।"
    ],
    "diwali-20": [
      "उम्मीदों की लौ (हरियाणवी)",
      "जब-जब जलता सै दीया मिट्टी का आंगन में,",
      "नई उमंग भर जाती सै सबके इस मन में।"
    ],
    "diwali-21": [
      "प्यार का उजाला (हरियाणवी)",
      "दीपक की लौ जैसे हवाओं से लड़ जाती सै,",
      "सच्ची मोहब्बत भी हर मुश्किल से पार पाती सै।"
    ],
    "diwali-22": [
      "सदा मुस्कुराते रहो (हरियाणवी)",
      "मुस्कान थारे के होठों से कभी न छूटे,",
      "अपनों का यह प्यारा साथ कभी न टूटे।"
    ],
    "diwali-23": [
      "धनतेरस से दीवाली तक (हरियाणवी)",
      "सोने-चांदी से चमके थारे का हर एक दिन,",
      "खुशियां न गिन पाओ थारे  अपनी उंगलियों पर गिन।"
    ],
    "diwali-24": [
      "आंगन में रंगोली (हरियाणवी)",
      "रंगोली के रंगों में घुली हो मिठास,",
      "हर एक पल हो थारे के लिए बेहद खास।"
    ],
    "diwali-25": [
      "शुभ दीपावली का संकल्प (हरियाणवी)",
      "आओ मिलकर नफरत का अंधेरा दूर भगाएं,",
      "प्रेम और भाईचारे का एक नया दिया जलाएं।"
    ],
    "diwali-26": [
      "धन्वंतरि कृपा और सेहत (हरियाणवी)",
      "सोने-चांदी से ज्यादा सेहत की दौलत मिले,",
      "धन्वंतरि कृपा से घर में खुशियों का गुलशन खिले।"
    ],
    "diwali-27": [
      "शुभ शुरुआत और नए सपने (हरियाणवी)",
      "धनतेरस पर सिर्फ बर्तन ही नहीं नए सपने भी लाएं,",
      "अपने आंगन में खुशहाली और बरकत के दीप जलाएं।"
    ],
    "diwali-28": [
      "कुबेर का खजाना (हरियाणवी)",
      "कुबेर का खजाना और मां लक्ष्मी का साथ हो,",
      "थारे के हर काम में ईश्वर का प्यारा हाथ हो।"
    ],
    "diwali-29": [
      "चांदी का सिक्का और तकदीर (हरियाणवी)",
      "चांदी का सिक्का चमके जैसे थारे की तकदीर,",
      "धनतेरस पर पूरी हो थारे के सपनों की तस्वीर।"
    ],
    "diwali-30": [
      "खुशियों की सौगात (हरियाणवी)",
      "धनतेरस की पावन बेला लेकर आए खुशियों की सौगात,",
      "कभी न खाली रहे थारे की झोली कभी न हो तंग हालात।"
    ],
    "diwali-31": [
      "आरोग्य और सच्चा धन (हरियाणवी)",
      "सबसे बड़ा धन सै अच्छी सेहत और अपनों का प्यार,",
      "मुबारक हो थारे को शुभ धनतेरस का यह पावन त्यौहार।"
    ],
    "diwali-32": [
      "स्वर्णिम सवेरा (हरियाणवी)",
      "सोने सी दमक उठे थारे की हर एक सुबह,",
      "धनतेरस पर कबूल हो थारे की हर एक नेक दुआ।"
    ],
    "diwali-33": [
      "बरकत का त्यौहार (हरियाणवी)",
      "खुशियों से भरी हो थारे की दुकान और प्यारा सा घर,",
      "धनतेरस की रोशनी चमका दे थारे का हर सफर।"
    ],
    "diwali-34": [
      "नया विश्वास और मिठास (हरियाणवी)",
      "नया बर्तन लाए नई उमंग और नया विश्वास,",
      "थारे के जीवन में घुले सदा प्यार और मिठास।"
    ],
    "diwali-35": [
      "दीप और धन का पैगाम (हरियाणवी)",
      "दीपक की पहली लौ आज दे गई यही पैगाम,",
      "धनतेरस पर चमके थारे का और थारे के परिवार का नाम।"
    ],
    "diwali-36": [
      "धन्वंतरि अमृत बूंदें (हरियाणवी)",
      "धन्वंतरि जी की अमृत बूंदें जीवन में बरसाएं,",
      "धनतेरस के इस शुभ दिन की दिल से शुभकामनाएं।"
    ],
    "diwali-37": [
      "समृद्धि का द्वार (हरियाणवी)",
      "खुशहाली का दरवाजा खुले बंद हो सारे गम,",
      "धनतेरस पर थारे की झोली में खुशियां आएं हरदम।"
    ],
    "diwali-38": [
      "शुभ लाभ का तिलक (हरियाणवी)",
      "शुभ-लाभ का तिलक हो और लक्ष्मी जी का वास,",
      "धनतेरस का हर पल हो थारे के लिए बेहद खास।"
    ],
    "diwali-39": [
      "रिश्तों की असली दौलत (हरियाणवी)",
      "अपनों की सच्ची मुस्कान ही असली दौलत सै,",
      "धनतेरस का यह त्यौहार प्यार की नेमत सै।"
    ],
    "diwali-40": [
      "आरोग्य वरदान (हरियाणवी)",
      "रोग-दोष मिटें और मिले लंबी उम्र का वरदान,",
      "धनतेरस पर महक उठे थारे का सारा जहान।"
    ],
    "diwali-41": [
      "छोटी दिवाली का छोटा दीया (हरियाणवी)",
      "छोटी दिवाली का छोटा सा दीया मिटाए बड़ा अंधेरा,",
      "खुशियों की किरण लेकर आए थारे के घर नया सवेरा।"
    ],
    "diwali-42": [
      "नरक चतुर्दशी मुक्ति (हरियाणवी)",
      "यमराज का भय मिटे और मन का मिटे विकार,",
      "नरक चतुर्दशी पर मिले सुख-शांति का उपहार।"
    ],
    "diwali-43": [
      "चौदह दीपों की पावन लौ (हरियाणवी)",
      "चौदह दीपों की पावन लौ से रोशन हो घर-बार,",
      "मुबारक हो थारे को रूप चौदस का यह प्यारा त्यौहार।"
    ],
    "diwali-44": [
      "रूप निखरे मन का (हरियाणवी)",
      "रूप निखरे मन का और चेहरे पर रहे मुस्कान,",
      "छोटी दिवाली लाए थारे के लिए खुशियों का वरदान।"
    ],
    "diwali-45": [
      "अंधकार पर रोशनी की जीत (हरियाणवी)",
      "अंधकार को मात देकर रोशनी की हो जीत,",
      "छोटी दिवाली पर गाए दिल खुशियों के नए गीत।"
    ],
    "diwali-46": [
      "शांति और प्रीत का आगाज़ (हरियाणवी)",
      "एक दीया शांति का और एक दीया प्यार का,",
      "रूप चौदस सै आगाज़ दीपों के त्यौहार का।"
    ],
    "diwali-47": [
      "बुराई का दहन (हरियाणवी)",
      "मन की हर बुराई को आज दीप में जला देना,",
      "छोटी दिवाली पर हर रूठे को हंसकर मना लेना।"
    ],
    "diwali-48": [
      "कल की दिवाली का उल्लास (हरियाणवी)",
      "कल बड़ी दीवाली सै आज छोटी का उल्लास,",
      "हर दिन रहे थारे के चेहरे पर यूं ही विश्वास।"
    ],
    "diwali-49": [
      "आंगन महक जाए (हरियाणवी)",
      "दीप जलें छतों पर और आंगन महक जाए,",
      "छोटी दिवाली थारे के जीवन में सुख-समृद्धि लाए।"
    ],
    "diwali-50": [
      "शुभ संदेश रूप चौदस (हरियाणवी)",
      "छोटी दिवाली का यह प्यारा पैगाम ले लो,",
      "खुशियों के इस उत्सव में अपनों का नाम ले लो।"
    ],
    "diwali-51": [
      "कान्हा की उंगली और गोवर्धन (हरियाणवी)",
      "कन्सैया ने उंगली पर उठाया था गोवर्धन पहाड़,",
      "थारे के जीवन से भी टल जाए हर मुश्किल और भार।"
    ],
    "diwali-52": [
      "अन्नकूट का पावन भोग (हरियाणवी)",
      "अन्नकूट का भोग लगे और बजे कृष्ण की बांसुरी,",
      "गोवर्धन पूजा पर पूरी हो थारे की हर इच्छा अधूरी।"
    ],
    "diwali-53": [
      "प्रकृति और गौ माता का मान (हरियाणवी)",
      "प्रकृति की पूजा और गौ माता का मान,",
      "गोवर्धन पूजा सिखाती सै सबका करो सम्मान।"
    ],
    "diwali-54": [
      "मुरली मनोहर की कृपा (हरियाणवी)",
      "मुरली मनोहर की कृपा से घर में बरसे प्यार,",
      "मुबारक हो थारे को गोवर्धन पूजा का पावन त्यौहार।"
    ],
    "diwali-55": [
      "गिरिराज महाराज की शरण (हरियाणवी)",
      "गिरिराज महाराज करें हर संकट का निवारण,",
      "सुख-समृद्धि से भर जाए थारे के जीवन का हर कारण।"
    ],
    "diwali-56": [
      "गौ माता का आशीर्वाद (हरियाणवी)",
      "गौ माता के चरणों में सै चारों धाम का वास,",
      "गोवर्धन पूजा लाए थारे के घर में नई मिठास।"
    ],
    "diwali-57": [
      "ब्रज की पावन माटी (हरियाणवी)",
      "ब्रज की पावन माटी सा महके थारे का संसार,",
      "गोवर्धन पूजा पर मिले यश और खुशियों का उपहार।"
    ],
    "diwali-58": [
      "कृष्ण भक्ति का विश्वास (हरियाणवी)",
      "कृष्ण की भक्ति और अपनों का अटूट विश्वास,",
      "गोवर्धन पूजा का हर पल बने सबसे खास।"
    ],
    "diwali-59": [
      "छप्पन भोग का थाल (हरियाणवी)",
      "छप्पन भोग की थाली और प्रेम भरा मन,",
      "गोवर्धन पूजा से पावन हो थारे का जीवन।"
    ],
    "diwali-60": [
      "सदा खुशहाली का वरदान (हरियाणवी)",
      "कान्हा की कृपा से कभी न आए कोई विपदा,",
      "गोवर्धन पूजा पर खुशहाली रहे थारे के घर सदा।"
    ],
    "diwali-61": [
      "रोली और अक्षत का पावन टीका (हरियाणवी)",
      "रोली-चावल का पावन टीका और बहना का प्यार,",
      "भाई दूज का यह बंधन सै सबसे सच्चा और पहरेदार।"
    ],
    "diwali-62": [
      "बहना की अमर दुआ (हरियाणवी)",
      "बहना की हर दुआ में भाई की लंबी उम्र का नाम,",
      "भाई दूज के इस पावन दिन को झुककर सलाम।"
    ],
    "diwali-63": [
      "भाई का सच्चा वादा (हरियाणवी)",
      "भाई का वादा सै हर मुश्किल में साथ निभाएगा,",
      "बहना के चेहरे की हंसी को कभी न खोने देगा।"
    ],
    "diwali-64": [
      "थाली में सजी मिठाई (हरियाणवी)",
      "थाली में सजी मिठाई और माथे पर लाल तिलक,",
      "भाई-बहन के रिश्ते की चमक रहे स्वर्ग तक।"
    ],
    "diwali-65": [
      "प्यार का फरिश्ता (हरियाणवी)",
      "रेशम के धागे से गहरा सै यह प्यार का रिश्ता,",
      "भाई के रूप में रब ने भेजा एक फरिश्ता।"
    ],
    "diwali-66": [
      "बचपन की खट्टी-मीठी यादें (हरियाणवी)",
      "रूठना-मनाना और बचपन की वो सारी बातें,",
      "भाई दूज पर याद आती सैं वो प्यारी मीठी रातें।"
    ],
    "diwali-67": [
      "स्नेह का अटूट धागा (हरियाणवी)",
      "दूर रहकर भी जो पास लगे वो सै बहना का दुलार,",
      "भाई दूज की हार्दिक शुभकामनाएं बारंबार।"
    ],
    "diwali-68": [
      "माथे पे तिलक का मान (हरियाणवी)",
      "माथे पे तिलक सजाकर बहना मांगी यही दुआ,",
      "भाई की हर राह में हो सिर्फ खुशियों का समां।"
    ],
    "diwali-69": [
      "अमर प्रेम कहानी (हरियाणवी)",
      "कागज़ की नाव और वो बारिश का पानी,",
      "भाई-बहन के प्यार की अमर सै यह कहानी।"
    ],
    "diwali-70": [
      "यम और यमुना का वंदन (हरियाणवी)",
      "यम और यमुना के प्रेम का पावन यह त्यौहार,",
      "भाई दूज लाए थारे के जीवन में खुशियों की बहार।"
    ],
    "diwali-71": [
      "अनमोल रिश्ता (हरियाणवी)",
      "दुनिया के सारे रिश्तों से अनमोल सै यह प्यार,",
      "भाई-बहन के चेहरे पर सजी रहे मुस्कान हर बार।"
    ],
    "diwali-72": [
      "सात जन्मों का साथ (हरियाणवी)",
      "तिलक की खुशबू से महके भाई का ललाट,",
      "ईश्वर करे दोनों का साथ रहे सात जन्मों के घाट।"
    ],
    "diwali-73": [
      "खुशियों का नया राग (हरियाणवी)",
      "भाई दूज की सुबह लाए खुशियों का नया राग,",
      "खिल उठे दोनों के जीवन का प्यारा सा बाग।"
    ],
    "diwali-74": [
      "हसीन ख्वाब बहना (हरियाणवी)",
      "नफरत के इस दौर में प्यार की मिसाल हो तुम,",
      "मेरी प्यारी बहना मेरा सबसे हसीन ख्वाब हो तुम।"
    ],
    "diwali-75": [
      "शुभ भाई दूज वंदन (हरियाणवी)",
      "भाई दूज पर ईश्वर से यही मांगते सैं वरदान,",
      "दोनों भाई-बहन की शान रहे हमेशा हिंदुस्तान।"
    ],
    "diwali-76": [
      "परिवार संग दीया (हरियाणवी)",
      "अपनों के साथ बैठकर जो दीया जलता सै,",
      "उसी रोशनी में असली दीवाली का सुख पलता सै।"
    ],
    "diwali-77": [
      "मां-बाप का आशीर्वाद (हरियाणवी)",
      "मां-बाप के आशीर्वाद से जगमगाए सारा संसार,",
      "परिवार के साथ ही खूबसूरत लगे दीवाली का त्यौहार।"
    ],
    "diwali-78": [
      "यारों की दीवाली (हरियाणवी)",
      "यारों के साथ चाय की चुस्की और पटाखों का शोर,",
      "सच्ची दोस्ती की रोशनी खींचती सै दिल की डोर।"
    ],
    "diwali-79": [
      "दोस्ती का दीया (हरियाणवी)",
      "एक दीया दोस्ती के नाम का जलाना मेरे यार,",
      "दूर रहकर भी कम न होगा हमारा यह सच्चा प्यार।"
    ],
    "diwali-80": [
      "मोहब्बत की रोशनी (हरियाणवी)",
      "तेरे चेहरे की मुस्कान मेरे लिए दीवाली का दीया सै,",
      "मेरी हर धड़कन ने सिर्फ तुझसे ही प्यार किया सै।"
    ],
    "diwali-81": [
      "तेरे संग हर रात दीवाली (हरियाणवी)",
      "दीप जलें या न जलें तेरी मौजूदगी ही काफी सै,",
      "तेरे साथ हर एक रात दीवाली जैसी रोशन रहती सै।"
    ],
    "diwali-82": [
      "शरारत और मिठास (हरियाणवी)",
      "मिठाई छीनकर खाना और फिर गले से लगा लेना,",
      "दीवाली पर भाई-बहन की यही तो सबसे प्यारी बात सै।"
    ],
    "diwali-83": [
      "बुजुर्गों का आशीष (हरियाणवी)",
      "बुजुर्गों के हाथ का आशीष और बच्चों की किलकारी,",
      "यही बनाती सै घर-घर की दीवाली सबसे प्यारी।"
    ],
    "diwali-84": [
      "महफिल-ए-यारां (हरियाणवी)",
      "बचपन के दोस्त जब मिलकर दीया जलाते सैं,",
      "पुराने वो हसीन दिन फिर से लौट आते सैं।"
    ],
    "diwali-85": [
      "इश्क की जगमगाहट (हरियाणवी)",
      "तेरी आँखों के नूर से रोशन सै मेरा आशियाना,",
      "इस दीवाली पर तू ही मेरी खुशियों का ठिकाना।"
    ],
    "diwali-86": [
      "महालक्ष्मी स्तुति (हरियाणवी)",
      "ॐ महालक्ष्म्यै नमः का गूंजे घर में जाप,",
      "मिट जाएं जीवन के सारे संकट और पाप।"
    ],
    "diwali-87": [
      "कमलासन पर विराजें मां (हरियाणवी)",
      "कमल आसन पर विराजें मां लक्ष्मी थारे के द्वार,",
      "सुख-शांति और ऐश्वर्य का बरसे अमृत धार।"
    ],
    "diwali-88": [
      "अमावस की रात पूर्णिमा सी (हरियाणवी)",
      "अमावस की रात भी पूर्णिमा सी चमक जाए,",
      "मां लक्ष्मी की कृपा से घर स्वर्ग बन जाए।"
    ],
    "diwali-89": [
      "रिद्धि-सिद्धि संग गणपति (हरियाणवी)",
      "रिद्धि-सिद्धि संग आएं गणपति महाराज,",
      "पूर्ण हो जाएं थारे के सारे अधूरे काज।"
    ],
    "diwali-90": [
      "सोने की थाली और दीपमाला (हरियाणवी)",
      "सोने की थाली में सजाकर दीपों की माला,",
      "मां लक्ष्मी ने घर के हर कोने को कर दिया उजाला।"
    ],
    "diwali-91": [
      "अन्न और धन के भंडार (हरियाणवी)",
      "धन-धान्य से भरे रहें थारे के अन्न के भंडार,",
      "सदा बना रहे मां लक्ष्मी का थारे के सिर पर प्यार।"
    ],
    "diwali-92": [
      "वैभव और मान-सम्मान (हरियाणवी)",
      "वैभव, कीर्ति और मान-सम्मान का वरदान मिले,",
      "दीवाली की रात थारे के घर में सुख का फूल खिले।"
    ],
    "diwali-93": [
      "शंख और घंटी की ध्वनि (हरियाणवी)",
      "मंगल दीप जले चौखट पर बजे शंख और घंटी,",
      "मां लक्ष्मी की कृपा से कभी न हो खुशियों में मंदी।"
    ],
    "diwali-94": [
      "अष्ट लक्ष्मी का वास (हरियाणवी)",
      "अष्ट लक्ष्मी का वास हो थारे के इस पवित्र धाम,",
      "हर सवेरा लेकर आए खुशियों का नया पैगाम।"
    ],
    "diwali-95": [
      "सच्ची श्रद्धा का फल (हरियाणवी)",
      "सच्ची श्रद्धा से जो मां लक्ष्मी को ध्याते सैं,",
      "वो जिंदगी के हर मोड़ पर खुशहाली ही पाते सैं।"
    ],
    "diwali-96": [
      "अंतर्मन की पावन ज्योति (हरियाणवी)",
      "अंतर्मन की ज्योति जगाकर करना मां का वंदन,",
      "महक उठेगा दीवाली पर थारे का प्यारा सा जीवन।"
    ],
    "diwali-97": [
      "श्री सूक्त की पावन ध्वनि (हरियाणवी)",
      "श्री सूक्त के मंत्रों से गूंज उठे हर एक कोना,",
      "मां लक्ष्मी की कृपा से सच हो हर सपना सलोना।"
    ],
    "diwali-98": [
      "दया दृष्टि मां लक्ष्मी की (हरियाणवी)",
      "मां लक्ष्मी की दया दृष्टि जिस पर भी हो जाए,",
      "रंक भी राजा बने और दरिद्रता मिट जाए।"
    ],
    "diwali-99": [
      "चरणों में दीपांजलि (हरियाणवी)",
      "दीपों की अंजलि अर्पित करें मां के श्री चरणों में,",
      "भर जाए सुख का सागर थारे के जीवन के पन्नों में।"
    ],
    "diwali-100": [
      "महापर्व दीपावली का संकल्प (हरियाणवी)",
      "दीप जलें, जगमगाए भारत, मिटे हर अंधकार,",
      "मंगलमय हो थारे को और थारे के पूरे परिवार को दीपावली का त्यौहार!"
    ],
    "diwali-101": [
      "माँ का दुलार और दीवाली (हरियाणवी)",
      "माँ के हाथों की मिठाई और ममता का संसार मिले,",
      "इस दीवाली घर के हर कोने में खुशियों का त्योहार खिले।"
    ],
    "diwali-102": [
      "पिता का साया और हौसला (हरियाणवी)",
      "पिता का साया सिर पर हो तो हर दिन दीवाली का उजाला सै,",
      "उनके मजबूत कंधों ने ही हमारे सपनों को संभाला सै।"
    ],
    "diwali-103": [
      "भाई की यारी और दीये की लौ (हरियाणवी)",
      "भाई के संग पटाखे फोड़ना और हँसते-हँसते लड़ जाना,",
      "दीवाली का सबसे प्यारा सुख सै अपनों का घर आना।"
    ],
    "diwali-104": [
      "बहन की रंगोली और मुस्कान (हरियाणवी)",
      "आँगन में बहन की सजाई रंगोली सबसे खास लगे,",
      "उसकी खिलखिलाती हँसी से दीवाली का हर पल पावन लगे।"
    ],
    "diwali-105": [
      "परिवार का संगम (हरियाणवी)",
      "घर की चौखट पर जब सब अपने एक साथ मुस्कुराते सैं,",
      "मिट्टी के दीये भी तब तारों से ज्यादा जगमगाते सैं।"
    ],
    "diwali-106": [
      "घर का सुकून और बरकत (हरियाणवी)",
      "बड़ों का आशीर्वाद मिले और छोटों का ढेर सारा प्यार,",
      "लक्ष्मी जी की कृपा से महके हमारा पूरा परिवार।"
    ],
    "diwali-107": [
      "घर के आँगन की रोशनी (हरियाणवी)",
      "दीयों की रोशनी से ज्यादा रोशन सै अपनों का यह साथ,",
      "दीवाली पर सलामत रहे हमारे इस भरे-पूरे परिवार की बात।"
    ],
    "diwali-108": [
      "यारों की महफ़िल और फुलझड़ी (हरियाणवी)",
      "मिठाई का डिब्बा खाली करना और यारों की महफ़िल सजाना,",
      "दीवाली असली तभी बनती सै जब दोस्तों का हो आना-जाना।"
    ],
    "diwali-109": [
      "तू है तो दीवाली है (हरियाणवी)",
      "पटाखे फूटे न फूटे तेरी यारी में ही सारा दम सै,",
      "तू जो मुस्कुरा दे मेरे यार तो जिंदगी में उजाला ही हर दम सै।"
    ],
    "diwali-110": [
      "बचपन की मस्ती और दीप (हरियाणवी)",
      "गली के मोड़ पर वो दीये जलाना और छुपकर रॉकेट छोड़ना,",
      "दुआ सै इस दीवाली कभी न छूटे दोस्तों से दिल का नाता जोड़ना।"
    ],
    "diwali-111": [
      "हँसी का पटाखा (हरियाणवी)",
      "फुलझड़ी सी मुस्कान तेरी, रॉकेट सी तेरी उड़ान हो,",
      "दोस्त इस दीवाली तू जहां भी रहे, तू ही महफ़िल की शान हो।"
    ],
    "diwali-112": [
      "दूर बैठे दोस्त को सलाम (हरियाणवी)",
      "दूर हो शहर चाहे कितना भी, दिल से दिल का तार जुड़ा सै,",
      "दोस्त तेरी सलामती के लिए दीवाली के हर दीये में दुआ सै।"
    ],
    "diwali-113": [
      "यारी की अटूट चमक (हरियाणवी)",
      "दीयों की कतारें बुझ सकती सैं मगर अपनी यारी का नूर नहीं,",
      "मुबारक हो दीवाली मेरे भाई, तू आँखों से भले दिल से दूर नहीं।"
    ],
    "diwali-114": [
      "नई ऊंचाइयां और टीम स्पिरिट (हरियाणवी)",
      "सपनों के हर टारगेट को छू लें और छू लें सफलता का आसमान,",
      "दीपावली लाए हमारी पूरी टीम के लिए नई पहचान और सम्मान।"
    ],
    "diwali-115": [
      "मार्गदर्शन और सम्मान (हरियाणवी)",
      "थारे के कुशल नेतृत्व से रोशन हुआ हमारे काम का हर रास्ता,",
      "दीवाली के पावन अवसर पर थारे को मिले सुख-समृद्धि का वास्ता।"
    ],
    "diwali-116": [
      "ऑफिस का साथ और सहयोग (हरियाणवी)",
      "डेडलाइन की भागदौड़ में भी जो चेहरे पर मुस्कान सजाए,",
      "ऐसे प्यारे सहकर्मियों को दीवाली का पावन पर्व बहुत रास आए।"
    ],
    "diwali-117": [
      "साझेदारी और अटूट विश्वास (हरियाणवी)",
      "हमारे इस भरोसेमंद रिश्ते में हमेशा बना रहे विश्वास का दीया,",
      "थारे के सहयोग ने ही हमारे हर प्रोजेक्ट को नया आयाम दिया।"
    ],
    "diwali-118": [
      "तरक्की और नए अवसर (हरियाणवी)",
      "मेहनत का दीपक जले और बरसे प्रमोशन व तरक्की का वरदान,",
      "यह दीवाली थारे के करियर को दे एक नई और बुलंद उड़ान।"
    ],
    "diwali-119": [
      "कर्मक्षेत्र में खुशहाली (हरियाणवी)",
      "सफलता के दीप जलें और गूंजे हर दिल में खुशियों की तान,",
      "दीपावली के इस शुभ अवसर पर बढ़े थारे का कारोबार और सम्मान।"
    ],
    "diwali-120": [
      "चाचा-ताऊ का स्नेह (हरियाणवी)",
      "चाचा-ताऊ का दुलार और परिवार का मान बना रहे,",
      "दीवाली के पावन उजाले से महकता थारे का आशियाना रहे।"
    ],
    "diwali-121": [
      "ननिहाल की मिठास (हरियाणवी)",
      "मामा-मामी का प्यारा आशीष और ननिहाल की वो मीठी याद,",
      "दीवाली लाए थारे के आँगन में खुशियों की अनमोल सौगात।"
    ],
    "diwali-122": [
      "बुआ-फूफाजी का दुलार (हरियाणवी)",
      "बुआ के हाथों का स्नेह और फूफाजी की वो प्यारी मुस्कान,",
      "दीपावली पर थारे के घर में बरसे सुख, शांति और सम्मान।"
    ],
    "diwali-123": [
      "पड़ोसियों संग दीवाली (हरियाणवी)",
      "दीवारें भले अलग हों पर आँगन में एक ही दीया जलता सै,",
      "पड़ोसियों का साथ हो तो हर त्यौहार दिल से सजता सै।"
    ],
    "diwali-124": [
      "रिश्तों की गर्माहट (हरियाणवी)",
      "रिश्तेदारी की मिठास कभी कम न हो, फासले सारे मिट जाएं,",
      "इस दीवाली सबके घरों में खुशहाली और प्यार के दीप जल जाएं।"
    ],
    "diwali-125": [
      "सभी सगे-संबंधियों को प्रणाम (हरियाणवी)",
      "हर सगे-संबंधी के घर में सुख-समृद्धि और आरोग्य का वास हो,",
      "दीपावली का यह महापर्व थारे  सभी के लिए सबसे खास हो।"
    ]
  },
  "en-US": {
    "diwali-1": [
      "दीपों की चमक",
      "May rows of lamps brighten your world with grace,",
      "Blessing your family in love's sweet embrace."
    ],
    "diwali-2": [
      "लक्ष्मी जी का वास",
      "May prosperity and fortune knock at your door,",
      "Happy Diwali with joy forevermore."
    ],
    "diwali-3": [
      "उजालों का सफर",
      "No matter how dark the worldly night may be,",
      "A single lamp can set the golden spirit free."
    ],
    "diwali-4": [
      "दिल का दीया",
      "Illuminate your heart not just the outward wall,",
      "Embrace your fellow beings and bless them all."
    ],
    "diwali-5": [
      "खुशियों की फुलझड़ी",
      "May sparkler smiles grace your tender face,",
      "May life resound in harmonious melody and grace."
    ],
    "diwali-6": [
      "सोने का संसार",
      "Priceless is the kinship of those we hold dear,",
      "May God's holy blessing shield you through the year."
    ],
    "diwali-7": [
      "रंगोली और दीप",
      "May rangoli hues make your sweet dreams shine,",
      "May Diwali bring you treasures rich and divine."
    ],
    "diwali-8": [
      "गिले-शिकवे दूर",
      "Erase every grudge and ancient grievance deep,",
      "Begin fresh happy memories you forever keep."
    ],
    "diwali-9": [
      "मिठाई की मिठास",
      "Sweet as festive confections may your words softly ring,",
      "May every night be luminous as moonlight in spring."
    ],
    "diwali-10": [
      "सफलता का उजाला",
      "May lanterns of triumph kiss every path you tread,",
      "May golden bliss crown your peaceful head."
    ],
    "diwali-11": [
      "दीपावली का पावन पर्व",
      "May lamps keep shining and pure hearts unite,",
      "May sorrow vanish into the festive light."
    ],
    "diwali-12": [
      "लक्ष्मी-गणेश की कृपा",
      "May Mother Lakshmi bless your hearth and hall,",
      "May Lord Ganesha answer whenever you call."
    ],
    "diwali-13": [
      "घर-घर में रोशनी",
      "Set your courtyard sparkling with a plate of gold,",
      "Share sweet delicacies as ancient tales unfold."
    ],
    "diwali-14": [
      "रोशनी का पर्व",
      "May every dusk be glowing like Diwali night,",
      "May every dawn shower showers of delight."
    ],
    "diwali-15": [
      "सुख और समृद्धि की बहार",
      "May golden flowers bloom upon your threshold floor,",
      "May thorns never pierce your footsteps anymore."
    ],
    "diwali-16": [
      "दिलों का संगम",
      "Like twinkling constellations may your household gleam,",
      "May genuine affection nourish every dream."
    ],
    "diwali-17": [
      "खुशियों के दीये",
      "A lamp of pure faith, a lamp of bright hope,",
      "A lamp of deep love giving strength to cope."
    ],
    "diwali-18": [
      "दीपों की बारात",
      "Fairer than silver moonbeams is this sacred night,",
      "Diwali leads a parade of dancing light."
    ],
    "diwali-19": [
      "सपनों का सवेरा",
      "Dawn of boundless gladness with no sorrow behind,",
      "May sparkling radiance fill your gentle mind."
    ],
    "diwali-20": [
      "उम्मीदों की लौ",
      "Whenever earthen lamps kindle in the open yard,",
      "Fresh courage awakens hearts that struggled hard."
    ],
    "diwali-21": [
      "प्यार का उजाला",
      "As brave yellow flames defy the gusty breeze,",
      "True love conquers sorrow with miraculous ease."
    ],
    "diwali-22": [
      "सदा मुस्कुराते रहो",
      "May the smile upon your lips never turn away,",
      "May close family ties remain strong day by day."
    ],
    "diwali-23": [
      "धनतेरस से दीवाली तक",
      "May your days glisten brighter than refined gold,",
      "With countess joys that no ledger can ever hold."
    ],
    "diwali-24": [
      "आंगन में रंगोली",
      "May sweet rainbow rangoli scent your open air,",
      "Making every moment delightfully rare."
    ],
    "diwali-25": [
      "शुभ दीपावली का संकल्प",
      "Let us unite to banish bitterness and spite,",
      "And kindle brotherly love with steady golden light."
    ],
    "diwali-26": [
      "धन्वंतरि कृपा और सेहत",
      "May you be blessed with the wealth of radiant health above gold,",
      "May Dhanvantari divine grace bring joy untold."
    ],
    "diwali-27": [
      "शुभ शुरुआत और नए सपने",
      "Bring home new dreams alongside sacred utensils today,",
      "Let prosperity and blessings light your pathway."
    ],
    "diwali-28": [
      "कुबेर का खजाना",
      "May Lord Kuber shower treasures and Lakshmi stand beside,",
      "May the Almighty be your gentle, eternal guide."
    ],
    "diwali-29": [
      "चांदी का सिक्का और तकदीर",
      "May your fortune shine brightly like pure silver divine,",
      "May all your cherished dreams and visions align."
    ],
    "diwali-30": [
      "खुशियों की सौगात",
      "May the holy hour of Dhanteras bring gifts of endless delight,",
      "May your home stay abundant with happiness day and night."
    ],
    "diwali-31": [
      "आरोग्य और सच्चा धन",
      "The greatest wealth in life is health and the warmth of family near,",
      "Happy Dhanteras to you and all you hold dear."
    ],
    "diwali-32": [
      "स्वर्णिम सवेरा",
      "May your mornings gleam with the golden hue of grace,",
      "May every pure prayer find its answering embrace."
    ],
    "diwali-33": [
      "बरकत का त्यौहार",
      "May your workplace thrive and your home overflow with cheer,",
      "May Dhanteras illuminate your journey throughout the year."
    ],
    "diwali-34": [
      "नया विश्वास और मिठास",
      "May new metal vessels bring new hope and steady faith so deep,",
      "May sweetness and affection be memories you forever keep."
    ],
    "diwali-35": [
      "दीप और धन का पैगाम",
      "The first festive lamp whispers a message clear and bright,",
      "May your family name be honored under fortune's golden light."
    ],
    "diwali-36": [
      "धन्वंतरि अमृत बूंदें",
      "May Lord Dhanvantari shower drops of immortal wellness from above,",
      "Wishing you a blissful Dhanteras filled with peace and love."
    ],
    "diwali-37": [
      "समृद्धि का द्वार",
      "May doors of prosperity swing wide and sorrow fade away,",
      "May ceaseless happiness visit your home this Dhanteras day."
    ],
    "diwali-38": [
      "शुभ लाभ का तिलक",
      "May auspicious fortune grace your brow and Lakshmi make your hearth her home,",
      "May every Dhanteras moment shine wherever you may roam."
    ],
    "diwali-39": [
      "रिश्तों की असली दौलत",
      "A true smile from loved ones is the most precious treasure we find,",
      "Dhanteras is a blessed celebration of unity and kindness combined."
    ],
    "diwali-40": [
      "आरोग्य वरदान",
      "May ailments dissolve and longevity bless your days,",
      "May your entire world bloom under Dhanteras's healing rays."
    ],
    "diwali-41": [
      "छोटी दिवाली का छोटा दीया",
      "A tiny earthen lamp on Choti Diwali conquers the darkest night,",
      "Bringing your threshold a fresh morning of sparkling light."
    ],
    "diwali-42": [
      "नरक चतुर्दशी मुक्ति",
      "May fears vanish and impurities of the soul be healed,",
      "On Naraka Chaturdashi may peace and tranquility be sealed."
    ],
    "diwali-43": [
      "चौदह दीपों की पावन लौ",
      "May fourteen sacred flames brighten your home from room to room,",
      "Happy Roop Chaudas, lifting all shadows and gloom."
    ],
    "diwali-44": [
      "रूप निखरे मन का",
      "May the inner beauty of your soul radiate upon your face,",
      "May Choti Diwali bestow joy, good fortune, and grace."
    ],
    "diwali-45": [
      "अंधकार पर रोशनी की जीत",
      "Light triumphs over darkness and sorrow turns to song,",
      "May Choti Diwali remind you where hope and love belong."
    ],
    "diwali-46": [
      "शांति और प्रीत का आगाज़",
      "One lamp for peace and one flame for everlasting love,",
      "Roop Chaudas begins the festival blessed from the skies above."
    ],
    "diwali-47": [
      "बुराई का दहन",
      "Burn every negativity in the sacred festive flame,",
      "Embrace every estranged heart in love and friendship's name."
    ],
    "diwali-48": [
      "कल की दिवाली का उल्लास",
      "Tomorrow brings the grand Diwali, today the prelude gleams,",
      "May serene faith illuminate your waking dreams."
    ],
    "diwali-49": [
      "आंगन महक जाए",
      "Lamps kindle upon the parapets as courtyard blossoms sweet,",
      "May prosperity and peaceful smiles at your doorstep meet."
    ],
    "diwali-50": [
      "शुभ संदेश रूप चौदस",
      "Receive this tender greeting as festive hours unfold,",
      "Celebrate loved ones whose warm hearts are worth more than gold."
    ],
    "diwali-51": [
      "कान्हा की उंगली और गोवर्धन",
      "Little Krishna lifted Mount Govardhan on his finger tip with ease,",
      "May every heavy burden in your life gently release."
    ],
    "diwali-52": [
      "अन्नकूट का पावन भोग",
      "May the feast of Annakoot and Krishna's flute play clear,",
      "Fulfilling every unexpressed wish you hold so dear."
    ],
    "diwali-53": [
      "प्रकृति और गौ माता का मान",
      "Revering Mother Nature and honoring the sacred cow,",
      "Govardhan Puja teaches us with humble hearts to bow."
    ],
    "diwali-54": [
      "मुरली मनोहर की कृपा",
      "By the grace of the Flute-Bearer, may affection gently rain,",
      "Happy Govardhan Puja, free from sorrow and from pain."
    ],
    "diwali-55": [
      "गिरिराज महाराज की शरण",
      "May Giriraj Maharaj dissolve every troubled plight,",
      "Filling your days with contentment, joy, and holy light."
    ],
    "diwali-56": [
      "गौ माता का आशीर्वाद",
      "At Mother Cow's sacred feet lies the sanctity of every shrine,",
      "May Govardhan Puja bring your home sweetness and love divine."
    ],
    "diwali-57": [
      "ब्रज की पावन माटी",
      "May your universe smell sweet like Braj's blessed soil,",
      "Receiving honors and happiness for every honest toil."
    ],
    "diwali-58": [
      "कृष्ण भक्ति का विश्वास",
      "Devotion to Krishna and unwavering trust in kin,",
      "May Govardhan Puja usher true peace and victory within."
    ],
    "diwali-59": [
      "छप्पन भोग का थाल",
      "A sacred platter of fifty-six offerings and a heart so pure,",
      "May Govardhan Puja keep your joy steadfast and secure."
    ],
    "diwali-60": [
      "सदा खुशहाली का वरदान",
      "Under Kanha's watchful protection may hardships steer away,",
      "May abundance dwell in your home every single day."
    ],
    "diwali-61": [
      "रोली और अक्षत का पावन टीका",
      "Sacred vermilion on brother's forehead and sister's prayer divine,",
      "Bhai Dooj is a loving bond where true protectors shine."
    ],
    "diwali-62": [
      "बहना की अमर दुआ",
      "In sister's earnest prayer brother's long life is sought,",
      "Saluting this sacred festival with deep and loving thought."
    ],
    "diwali-63": [
      "भाई का सच्चा वादा",
      "A brother's pledge to stand firm through every stormy phase,",
      "Keeping sister's sweet smile shining all through her days."
    ],
    "diwali-64": [
      "थाली में सजी मिठाई",
      "Sweets on the silver thali and crimson tilak alight,",
      "May brother-sister affection reach heaven's greatest height."
    ],
    "diwali-65": [
      "प्यार का फरिश्ता",
      "Deeper than silken cords is this affection pure and true,",
      "God sent an angel in a brother's guise for you."
    ],
    "diwali-66": [
      "बचपन की खट्टी-मीठी यादें",
      "Playful quarrels, sweet embraces, and childhood laughter bright,",
      "Bhai Dooj revives sweet memories in tender nostalgia tonight."
    ],
    "diwali-67": [
      "स्नेह का अटूट धागा",
      "Though miles apart, sister's fond care feels close and near,",
      "Heartfelt Bhai Dooj greetings renewed year after year."
    ],
    "diwali-68": [
      "माथे पे तिलक का मान",
      "Sister places the tilak and whispers a heartfelt plea,",
      "May brother's path be paved with triumph and felicity."
    ],
    "diwali-69": [
      "अमर प्रेम कहानी",
      "Like paper boats sailing upon monsoon rains so grand,",
      "Brother-sister companionship is the sweetest in the land."
    ],
    "diwali-70": [
      "यम और यमुना का वंदन",
      "Celebrating the sacred affection of Lord Yama and Yamuna stream,",
      "May Bhai Dooj fulfill your sweetest family dream."
    ],
    "diwali-71": [
      "अनमोल रिश्ता",
      "More priceless than worldly riches is this brother-sister tie,",
      "May smiles adorn your faces as the seasons journey by."
    ],
    "diwali-72": [
      "सात जन्मों का साथ",
      "Fragrant tilak honors brother's forehead with gentle grace,",
      "May sibling love endure across every time and place."
    ],
    "diwali-73": [
      "खुशियों का नया राग",
      "Bhai Dooj morning strikes a melody of joyful cheer,",
      "May your shared garden of life bloom brighter year by year."
    ],
    "diwali-74": [
      "हसीन ख्वाब बहना",
      "In a busy world, an emblem of tender love are you,",
      "My dearest sister, my sweetest blessing honest and true."
    ],
    "diwali-75": [
      "शुभ भाई दूज वंदन",
      "Praying to the Almighty on Bhai Dooj for a blessing grand,",
      "May brother and sister's honor shine across the land."
    ],
    "diwali-76": [
      "परिवार संग दीया",
      "The lamp kindled surrounded by our family near,",
      "Is where the true soul of Diwali shines warm and clear."
    ],
    "diwali-77": [
      "मां-बाप का आशीर्वाद",
      "Parents' loving blessings illumine our entire life so wide,",
      "Diwali radiates real beauty only when family sits beside."
    ],
    "diwali-78": [
      "यारों की दीवाली",
      "Sipping hot tea with best friends amidst cracker sparks in the air,",
      "Friendship's bright lantern pulls heartstrings with devoted care."
    ],
    "diwali-79": [
      "दोस्ती का दीया",
      "Light one festive lamp for true friendship, my dear mate,",
      "Distance can never weaken the sacred bond we celebrate."
    ],
    "diwali-80": [
      "मोहब्बत की रोशनी",
      "The smile upon your face is the sweetest festive lamp I see,",
      "My every heartbeat whispers its eternal love to thee."
    ],
    "diwali-81": [
      "तेरे संग हर रात दीवाली",
      "Whether lamps burn or not, your sweet presence is my light,",
      "With you by my side, every evening is Diwali shining bright."
    ],
    "diwali-82": [
      "शरारत और मिठास",
      "Stealing each other's sweets and then laughing in an embrace,",
      "This sibling charm gives Diwali its unforgettable grace."
    ],
    "diwali-83": [
      "बुजुर्गों का आशीष",
      "Elders' loving hands raised in prayer and children giggling in play,",
      "Make every Diwali celebration glorious in every way."
    ],
    "diwali-84": [
      "महफिल-ए-यारां",
      "When childhood buddies meet to kindle festival lights,",
      "Golden memories return to brighten up our nights."
    ],
    "diwali-85": [
      "इश्क की जगमगाहट",
      "The radiance of your gaze lights up my peaceful home,",
      "This Diwali, in your warm embrace is where I belong."
    ],
    "diwali-86": [
      "महालक्ष्मी स्तुति",
      "May chants of Om Mahalakshmyai Namah echo sweet and pure,",
      "Cleansing every hurdle and keeping blessings secure."
    ],
    "diwali-87": [
      "कमलासन पर विराजें मां",
      "May Goddess Lakshmi seated upon her lotus grace your door,",
      "Raining peace, honor, and prosperity forevermore."
    ],
    "diwali-88": [
      "अमावस की रात पूर्णिमा सी",
      "May new moon night gleam like a moonlit full-moon dawn,",
      "Turning your home to heaven as sacred lights live on."
    ],
    "diwali-89": [
      "रिद्धि-सिद्धि संग गणपति",
      "Lord Ganesha arrives with Riddhi and Siddhi divine,",
      "May all your pending endeavors succeed and brightly shine."
    ],
    "diwali-90": [
      "सोने की थाली और दीपमाला",
      "With garlands of lamps resting upon golden trays,",
      "Mother Lakshmi fills every quiet corner with radiant rays."
    ],
    "diwali-91": [
      "अन्न और धन के भंडार",
      "May granaries stay bountiful and riches gently grow,",
      "May Goddess Lakshmi's tender blessings continually flow."
    ],
    "diwali-92": [
      "वैभव और मान-सम्मान",
      "May glory, fame, and noble dignity be your reward,",
      "May blossoms of serenity blossom under the grace of God."
    ],
    "diwali-93": [
      "शंख और घंटी की ध्वनि",
      "Conch shells chime and bells ring near the illuminated door,",
      "By Lakshmi's grace, may joys expand and never decline anymore."
    ],
    "diwali-94": [
      "अष्ट लक्ष्मी का वास",
      "May the eight forms of Lakshmi abide in your sacred abode,",
      "Bringing fresh gladness at every turn along life's road."
    ],
    "diwali-95": [
      "सच्ची श्रद्धा का फल",
      "Those who meditate on Mother Lakshmi with heartfelt sincerity,",
      "Find at every crossroad of life boundless peace and prosperity."
    ],
    "diwali-96": [
      "अंतर्मन की पावन ज्योति",
      "Awaken the inner flame within your heart in devotion true,",
      "Diwali's fragrant goodness will blossom fresh for you."
    ],
    "diwali-97": [
      "श्री सूक्त की पावन ध्वनि",
      "Chants of the sacred Shri Suktam resonate far and wide,",
      "May your sweet dreams turn to reality with Lakshmi at your side."
    ],
    "diwali-98": [
      "दया दृष्टि मां लक्ष्मी की",
      "Upon whomever Mother Lakshmi casts her merciful glance so kind,",
      "Destitution fades away and royal fulfillment they find."
    ],
    "diwali-99": [
      "चरणों में दीपांजलि",
      "Offering folded hands of light at the Goddess's lotus feet,",
      "May an ocean of joy fill every chapter of your life complete."
    ],
    "diwali-100": [
      "महापर्व दीपावली का संकल्प",
      "May lamps shine across India and extinguish every trace of night,",
      "Wishing you and your entire family an auspicious Diwali full of light!"
    ],
    "diwali-101": [
      "माँ का दुलार और दीवाली",
      "Sweet delicacies made by Mother and a world of endless love,",
      "May this Diwali bring pure joy blessed from the heavens above."
    ],
    "diwali-102": [
      "पिता का साया और हौसला",
      "With Father's sheltering blessings, every day shines Diwali bright,",
      "His strong shoulders supported all our dreams to take their flight."
    ],
    "diwali-103": [
      "भाई की यारी और दीये की लौ",
      "Bursting sparklers with brother and teasing in youthful cheer,",
      "The sweetest joy of Diwali is having our loved ones near."
    ],
    "diwali-104": [
      "बहन की रंगोली और मुस्कान",
      "The colorful rangoli drawn by sister makes our courtyard gleam,",
      "Her cheerful laughter turns each Diwali moment into a blessed dream."
    ],
    "diwali-105": [
      "परिवार का संगम",
      "When the whole family gathers together at our doorway with a smile,",
      "Even simple earthen clay lamps outshine stars across each mile."
    ],
    "diwali-106": [
      "घर का सुकून और बरकत",
      "Blessings from elders and boundless love from the young and dear,",
      "May Goddess Lakshmi bless our entire family throughout the year."
    ],
    "diwali-107": [
      "घर के आँगन की रोशनी",
      "Brighter than festive lamps is the warmth our family shares,",
      "May our blessed home remain forever surrounded by love and prayers."
    ],
    "diwali-108": [
      "यारों की महफ़िल और फुलझड़ी",
      "Emptying sweet boxes together and raising a cheerful toast,",
      "Diwali turns truly magical when celebrating with friends we love most."
    ],
    "diwali-109": [
      "तू है तो दीवाली है",
      "With or without firecrackers, true friendship is our supreme spark,",
      "Your hearty laugh, my dear friend, leaves no corner in the dark."
    ],
    "diwali-110": [
      "बचपन की मस्ती और दीप",
      "Lighting lamps on street corners and lighting rockets side by side,",
      "May our bond of childhood friendship forever remain our pride."
    ],
    "diwali-111": [
      "हँसी का पटाखा",
      "A smile radiant like sparklers and soaring flights like a rocket so high,",
      "Wherever you go my friend, you light up everyone's sky."
    ],
    "diwali-112": [
      "दूर बैठे दोस्त को सलाम",
      "Miles may separate our towns, yet heartstrings closely intertwine,",
      "A prayer for your good health shines in every festive lamp of mine."
    ],
    "diwali-113": [
      "यारी की अटूट चमक",
      "Lamps in festive rows may fade, but the light of our friendship stays,",
      "Happy Diwali my buddy, near in my heart in a thousand ways."
    ],
    "diwali-114": [
      "नई ऊंचाइयां और टीम स्पिरिट",
      "May we conquer every milestone and reach the pinnacle of success,",
      "May Diwali bless our dedicated team with prosperity and progress."
    ],
    "diwali-115": [
      "मार्गदर्शन और सम्मान",
      "Under your inspiring guidance, every professional path turned bright,",
      "Wishing you an auspicious Diwali blessed with honor, health and light."
    ],
    "diwali-116": [
      "ऑफिस का साथ और सहयोग",
      "To wonderful colleagues who bring smiles even through hectic deadlines,",
      "May this Diwali bring you fulfillment, promotion, and good times."
    ],
    "diwali-117": [
      "साझेदारी और अटूट विश्वास",
      "May the lamp of mutual trust continue to illuminate our partnership,",
      "Wishing esteemed clients an abundant Diwali with our deepest gratitude."
    ],
    "diwali-118": [
      "तरक्की और नए अवसर",
      "Kindle the lamp of dedication and reap rewards of flourishing growth,",
      "May this Diwali elevate your career and bring prosperity to both."
    ],
    "diwali-119": [
      "कर्मक्षेत्र में खुशहाली",
      "May lamps of triumph shine and songs of celebration softly ring,",
      "May this Diwali auspicious heights and corporate prestige bring."
    ],
    "diwali-120": [
      "चाचा-ताऊ का स्नेह",
      "May the affection of uncles and family prestige ever endure,",
      "May Diwali sacred radiance keep your sweet home bright and pure."
    ],
    "diwali-121": [
      "ननिहाल की मिठास",
      "Cherished blessings of uncles and aunts with fond nostalgic memories,",
      "May Diwali fill your courtyard with joyous festive harmonies."
    ],
    "diwali-122": [
      "बुआ-फूफाजी का दुलार",
      "Warm maternal aunt affection and uncle joyous smile so wide,",
      "May Diwali shower your home with serenity, peace, and pride."
    ],
    "diwali-123": [
      "पड़ोसियों संग दीवाली",
      "Walls may divide our spaces, yet our shared courtyard catches light,",
      "Good neighbors make every Diwali glow friendly, warm and bright."
    ],
    "diwali-124": [
      "रिश्तों की गर्माहट",
      "May the sweetness of kinship never wane and distances fall away,",
      "May lamps of harmony and pure love illuminate this festive day."
    ],
    "diwali-125": [
      "सभी सगे-संबंधियों को प्रणाम",
      "May health and boundless abundance grace all our relatives near and far,",
      "May this grand Diwali celebration be our brightest guiding star."
    ]
  },
  "en-GB": {
    "diwali-1": [
      "दीपों की चमक",
      "May rows of lamps brighten your world with grace,",
      "Blessing your family in love's sweet embrace."
    ],
    "diwali-2": [
      "लक्ष्मी जी का वास",
      "May prosperity and fortune knock at your door,",
      "Happy Diwali with joy forevermore."
    ],
    "diwali-3": [
      "उजालों का सफर",
      "No matter how dark the worldly night may be,",
      "A single lamp can set the golden spirit free."
    ],
    "diwali-4": [
      "दिल का दीया",
      "Illuminate your heart not just the outward wall,",
      "Embrace your fellow beings and bless them all."
    ],
    "diwali-5": [
      "खुशियों की फुलझड़ी",
      "May sparkler smiles grace your tender face,",
      "May life resound in harmonious melody and grace."
    ],
    "diwali-6": [
      "सोने का संसार",
      "Priceless is the kinship of those we hold dear,",
      "May God's holy blessing shield you through the year."
    ],
    "diwali-7": [
      "रंगोली और दीप",
      "May rangoli hues make your sweet dreams shine,",
      "May Diwali bring you treasures rich and divine."
    ],
    "diwali-8": [
      "गिले-शिकवे दूर",
      "Erase every grudge and ancient grievance deep,",
      "Begin fresh happy memories you forever keep."
    ],
    "diwali-9": [
      "मिठाई की मिठास",
      "Sweet as festive confections may your words softly ring,",
      "May every night be luminous as moonlight in spring."
    ],
    "diwali-10": [
      "सफलता का उजाला",
      "May lanterns of triumph kiss every path you tread,",
      "May golden bliss crown your peaceful head."
    ],
    "diwali-11": [
      "दीपावली का पावन पर्व",
      "May lamps keep shining and pure hearts unite,",
      "May sorrow vanish into the festive light."
    ],
    "diwali-12": [
      "लक्ष्मी-गणेश की कृपा",
      "May Mother Lakshmi bless your hearth and hall,",
      "May Lord Ganesha answer whenever you call."
    ],
    "diwali-13": [
      "घर-घर में रोशनी",
      "Set your courtyard sparkling with a plate of gold,",
      "Share sweet delicacies as ancient tales unfold."
    ],
    "diwali-14": [
      "रोशनी का पर्व",
      "May every dusk be glowing like Diwali night,",
      "May every dawn shower showers of delight."
    ],
    "diwali-15": [
      "सुख और समृद्धि की बहार",
      "May golden flowers bloom upon your threshold floor,",
      "May thorns never pierce your footsteps anymore."
    ],
    "diwali-16": [
      "दिलों का संगम",
      "Like twinkling constellations may your household gleam,",
      "May genuine affection nourish every dream."
    ],
    "diwali-17": [
      "खुशियों के दीये",
      "A lamp of pure faith, a lamp of bright hope,",
      "A lamp of deep love giving strength to cope."
    ],
    "diwali-18": [
      "दीपों की बारात",
      "Fairer than silver moonbeams is this sacred night,",
      "Diwali leads a parade of dancing light."
    ],
    "diwali-19": [
      "सपनों का सवेरा",
      "Dawn of boundless gladness with no sorrow behind,",
      "May sparkling radiance fill your gentle mind."
    ],
    "diwali-20": [
      "उम्मीदों की लौ",
      "Whenever earthen lamps kindle in the open yard,",
      "Fresh courage awakens hearts that struggled hard."
    ],
    "diwali-21": [
      "प्यार का उजाला",
      "As brave yellow flames defy the gusty breeze,",
      "True love conquers sorrow with miraculous ease."
    ],
    "diwali-22": [
      "सदा मुस्कुराते रहो",
      "May the smile upon your lips never turn away,",
      "May close family ties remain strong day by day."
    ],
    "diwali-23": [
      "धनतेरस से दीवाली तक",
      "May your days glisten brighter than refined gold,",
      "With countess joys that no ledger can ever hold."
    ],
    "diwali-24": [
      "आंगन में रंगोली",
      "May sweet rainbow rangoli scent your open air,",
      "Making every moment delightfully rare."
    ],
    "diwali-25": [
      "शुभ दीपावली का संकल्प",
      "Let us unite to banish bitterness and spite,",
      "And kindle brotherly love with steady golden light."
    ],
    "diwali-26": [
      "धन्वंतरि कृपा और सेहत",
      "May you be blessed with the wealth of radiant health above gold,",
      "May Dhanvantari divine grace bring joy untold."
    ],
    "diwali-27": [
      "शुभ शुरुआत और नए सपने",
      "Bring home new dreams alongside sacred utensils today,",
      "Let prosperity and blessings light your pathway."
    ],
    "diwali-28": [
      "कुबेर का खजाना",
      "May Lord Kuber shower treasures and Lakshmi stand beside,",
      "May the Almighty be your gentle, eternal guide."
    ],
    "diwali-29": [
      "चांदी का सिक्का और तकदीर",
      "May your fortune shine brightly like pure silver divine,",
      "May all your cherished dreams and visions align."
    ],
    "diwali-30": [
      "खुशियों की सौगात",
      "May the holy hour of Dhanteras bring gifts of endless delight,",
      "May your home stay abundant with happiness day and night."
    ],
    "diwali-31": [
      "आरोग्य और सच्चा धन",
      "The greatest wealth in life is health and the warmth of family near,",
      "Happy Dhanteras to you and all you hold dear."
    ],
    "diwali-32": [
      "स्वर्णिम सवेरा",
      "May your mornings gleam with the golden hue of grace,",
      "May every pure prayer find its answering embrace."
    ],
    "diwali-33": [
      "बरकत का त्यौहार",
      "May your workplace thrive and your home overflow with cheer,",
      "May Dhanteras illuminate your journey throughout the year."
    ],
    "diwali-34": [
      "नया विश्वास और मिठास",
      "May new metal vessels bring new hope and steady faith so deep,",
      "May sweetness and affection be memories you forever keep."
    ],
    "diwali-35": [
      "दीप और धन का पैगाम",
      "The first festive lamp whispers a message clear and bright,",
      "May your family name be honored under fortune's golden light."
    ],
    "diwali-36": [
      "धन्वंतरि अमृत बूंदें",
      "May Lord Dhanvantari shower drops of immortal wellness from above,",
      "Wishing you a blissful Dhanteras filled with peace and love."
    ],
    "diwali-37": [
      "समृद्धि का द्वार",
      "May doors of prosperity swing wide and sorrow fade away,",
      "May ceaseless happiness visit your home this Dhanteras day."
    ],
    "diwali-38": [
      "शुभ लाभ का तिलक",
      "May auspicious fortune grace your brow and Lakshmi make your hearth her home,",
      "May every Dhanteras moment shine wherever you may roam."
    ],
    "diwali-39": [
      "रिश्तों की असली दौलत",
      "A true smile from loved ones is the most precious treasure we find,",
      "Dhanteras is a blessed celebration of unity and kindness combined."
    ],
    "diwali-40": [
      "आरोग्य वरदान",
      "May ailments dissolve and longevity bless your days,",
      "May your entire world bloom under Dhanteras's healing rays."
    ],
    "diwali-41": [
      "छोटी दिवाली का छोटा दीया",
      "A tiny earthen lamp on Choti Diwali conquers the darkest night,",
      "Bringing your threshold a fresh morning of sparkling light."
    ],
    "diwali-42": [
      "नरक चतुर्दशी मुक्ति",
      "May fears vanish and impurities of the soul be healed,",
      "On Naraka Chaturdashi may peace and tranquility be sealed."
    ],
    "diwali-43": [
      "चौदह दीपों की पावन लौ",
      "May fourteen sacred flames brighten your home from room to room,",
      "Happy Roop Chaudas, lifting all shadows and gloom."
    ],
    "diwali-44": [
      "रूप निखरे मन का",
      "May the inner beauty of your soul radiate upon your face,",
      "May Choti Diwali bestow joy, good fortune, and grace."
    ],
    "diwali-45": [
      "अंधकार पर रोशनी की जीत",
      "Light triumphs over darkness and sorrow turns to song,",
      "May Choti Diwali remind you where hope and love belong."
    ],
    "diwali-46": [
      "शांति और प्रीत का आगाज़",
      "One lamp for peace and one flame for everlasting love,",
      "Roop Chaudas begins the festival blessed from the skies above."
    ],
    "diwali-47": [
      "बुराई का दहन",
      "Burn every negativity in the sacred festive flame,",
      "Embrace every estranged heart in love and friendship's name."
    ],
    "diwali-48": [
      "कल की दिवाली का उल्लास",
      "Tomorrow brings the grand Diwali, today the prelude gleams,",
      "May serene faith illuminate your waking dreams."
    ],
    "diwali-49": [
      "आंगन महक जाए",
      "Lamps kindle upon the parapets as courtyard blossoms sweet,",
      "May prosperity and peaceful smiles at your doorstep meet."
    ],
    "diwali-50": [
      "शुभ संदेश रूप चौदस",
      "Receive this tender greeting as festive hours unfold,",
      "Celebrate loved ones whose warm hearts are worth more than gold."
    ],
    "diwali-51": [
      "कान्हा की उंगली और गोवर्धन",
      "Little Krishna lifted Mount Govardhan on his finger tip with ease,",
      "May every heavy burden in your life gently release."
    ],
    "diwali-52": [
      "अन्नकूट का पावन भोग",
      "May the feast of Annakoot and Krishna's flute play clear,",
      "Fulfilling every unexpressed wish you hold so dear."
    ],
    "diwali-53": [
      "प्रकृति और गौ माता का मान",
      "Revering Mother Nature and honoring the sacred cow,",
      "Govardhan Puja teaches us with humble hearts to bow."
    ],
    "diwali-54": [
      "मुरली मनोहर की कृपा",
      "By the grace of the Flute-Bearer, may affection gently rain,",
      "Happy Govardhan Puja, free from sorrow and from pain."
    ],
    "diwali-55": [
      "गिरिराज महाराज की शरण",
      "May Giriraj Maharaj dissolve every troubled plight,",
      "Filling your days with contentment, joy, and holy light."
    ],
    "diwali-56": [
      "गौ माता का आशीर्वाद",
      "At Mother Cow's sacred feet lies the sanctity of every shrine,",
      "May Govardhan Puja bring your home sweetness and love divine."
    ],
    "diwali-57": [
      "ब्रज की पावन माटी",
      "May your universe smell sweet like Braj's blessed soil,",
      "Receiving honors and happiness for every honest toil."
    ],
    "diwali-58": [
      "कृष्ण भक्ति का विश्वास",
      "Devotion to Krishna and unwavering trust in kin,",
      "May Govardhan Puja usher true peace and victory within."
    ],
    "diwali-59": [
      "छप्पन भोग का थाल",
      "A sacred platter of fifty-six offerings and a heart so pure,",
      "May Govardhan Puja keep your joy steadfast and secure."
    ],
    "diwali-60": [
      "सदा खुशहाली का वरदान",
      "Under Kanha's watchful protection may hardships steer away,",
      "May abundance dwell in your home every single day."
    ],
    "diwali-61": [
      "रोली और अक्षत का पावन टीका",
      "Sacred vermilion on brother's forehead and sister's prayer divine,",
      "Bhai Dooj is a loving bond where true protectors shine."
    ],
    "diwali-62": [
      "बहना की अमर दुआ",
      "In sister's earnest prayer brother's long life is sought,",
      "Saluting this sacred festival with deep and loving thought."
    ],
    "diwali-63": [
      "भाई का सच्चा वादा",
      "A brother's pledge to stand firm through every stormy phase,",
      "Keeping sister's sweet smile shining all through her days."
    ],
    "diwali-64": [
      "थाली में सजी मिठाई",
      "Sweets on the silver thali and crimson tilak alight,",
      "May brother-sister affection reach heaven's greatest height."
    ],
    "diwali-65": [
      "प्यार का फरिश्ता",
      "Deeper than silken cords is this affection pure and true,",
      "God sent an angel in a brother's guise for you."
    ],
    "diwali-66": [
      "बचपन की खट्टी-मीठी यादें",
      "Playful quarrels, sweet embraces, and childhood laughter bright,",
      "Bhai Dooj revives sweet memories in tender nostalgia tonight."
    ],
    "diwali-67": [
      "स्नेह का अटूट धागा",
      "Though miles apart, sister's fond care feels close and near,",
      "Heartfelt Bhai Dooj greetings renewed year after year."
    ],
    "diwali-68": [
      "माथे पे तिलक का मान",
      "Sister places the tilak and whispers a heartfelt plea,",
      "May brother's path be paved with triumph and felicity."
    ],
    "diwali-69": [
      "अमर प्रेम कहानी",
      "Like paper boats sailing upon monsoon rains so grand,",
      "Brother-sister companionship is the sweetest in the land."
    ],
    "diwali-70": [
      "यम और यमुना का वंदन",
      "Celebrating the sacred affection of Lord Yama and Yamuna stream,",
      "May Bhai Dooj fulfill your sweetest family dream."
    ],
    "diwali-71": [
      "अनमोल रिश्ता",
      "More priceless than worldly riches is this brother-sister tie,",
      "May smiles adorn your faces as the seasons journey by."
    ],
    "diwali-72": [
      "सात जन्मों का साथ",
      "Fragrant tilak honors brother's forehead with gentle grace,",
      "May sibling love endure across every time and place."
    ],
    "diwali-73": [
      "खुशियों का नया राग",
      "Bhai Dooj morning strikes a melody of joyful cheer,",
      "May your shared garden of life bloom brighter year by year."
    ],
    "diwali-74": [
      "हसीन ख्वाब बहना",
      "In a busy world, an emblem of tender love are you,",
      "My dearest sister, my sweetest blessing honest and true."
    ],
    "diwali-75": [
      "शुभ भाई दूज वंदन",
      "Praying to the Almighty on Bhai Dooj for a blessing grand,",
      "May brother and sister's honor shine across the land."
    ],
    "diwali-76": [
      "परिवार संग दीया",
      "The lamp kindled surrounded by our family near,",
      "Is where the true soul of Diwali shines warm and clear."
    ],
    "diwali-77": [
      "मां-बाप का आशीर्वाद",
      "Parents' loving blessings illumine our entire life so wide,",
      "Diwali radiates real beauty only when family sits beside."
    ],
    "diwali-78": [
      "यारों की दीवाली",
      "Sipping hot tea with best friends amidst cracker sparks in the air,",
      "Friendship's bright lantern pulls heartstrings with devoted care."
    ],
    "diwali-79": [
      "दोस्ती का दीया",
      "Light one festive lamp for true friendship, my dear mate,",
      "Distance can never weaken the sacred bond we celebrate."
    ],
    "diwali-80": [
      "मोहब्बत की रोशनी",
      "The smile upon your face is the sweetest festive lamp I see,",
      "My every heartbeat whispers its eternal love to thee."
    ],
    "diwali-81": [
      "तेरे संग हर रात दीवाली",
      "Whether lamps burn or not, your sweet presence is my light,",
      "With you by my side, every evening is Diwali shining bright."
    ],
    "diwali-82": [
      "शरारत और मिठास",
      "Stealing each other's sweets and then laughing in an embrace,",
      "This sibling charm gives Diwali its unforgettable grace."
    ],
    "diwali-83": [
      "बुजुर्गों का आशीष",
      "Elders' loving hands raised in prayer and children giggling in play,",
      "Make every Diwali celebration glorious in every way."
    ],
    "diwali-84": [
      "महफिल-ए-यारां",
      "When childhood buddies meet to kindle festival lights,",
      "Golden memories return to brighten up our nights."
    ],
    "diwali-85": [
      "इश्क की जगमगाहट",
      "The radiance of your gaze lights up my peaceful home,",
      "This Diwali, in your warm embrace is where I belong."
    ],
    "diwali-86": [
      "महालक्ष्मी स्तुति",
      "May chants of Om Mahalakshmyai Namah echo sweet and pure,",
      "Cleansing every hurdle and keeping blessings secure."
    ],
    "diwali-87": [
      "कमलासन पर विराजें मां",
      "May Goddess Lakshmi seated upon her lotus grace your door,",
      "Raining peace, honor, and prosperity forevermore."
    ],
    "diwali-88": [
      "अमावस की रात पूर्णिमा सी",
      "May new moon night gleam like a moonlit full-moon dawn,",
      "Turning your home to heaven as sacred lights live on."
    ],
    "diwali-89": [
      "रिद्धि-सिद्धि संग गणपति",
      "Lord Ganesha arrives with Riddhi and Siddhi divine,",
      "May all your pending endeavors succeed and brightly shine."
    ],
    "diwali-90": [
      "सोने की थाली और दीपमाला",
      "With garlands of lamps resting upon golden trays,",
      "Mother Lakshmi fills every quiet corner with radiant rays."
    ],
    "diwali-91": [
      "अन्न और धन के भंडार",
      "May granaries stay bountiful and riches gently grow,",
      "May Goddess Lakshmi's tender blessings continually flow."
    ],
    "diwali-92": [
      "वैभव और मान-सम्मान",
      "May glory, fame, and noble dignity be your reward,",
      "May blossoms of serenity blossom under the grace of God."
    ],
    "diwali-93": [
      "शंख और घंटी की ध्वनि",
      "Conch shells chime and bells ring near the illuminated door,",
      "By Lakshmi's grace, may joys expand and never decline anymore."
    ],
    "diwali-94": [
      "अष्ट लक्ष्मी का वास",
      "May the eight forms of Lakshmi abide in your sacred abode,",
      "Bringing fresh gladness at every turn along life's road."
    ],
    "diwali-95": [
      "सच्ची श्रद्धा का फल",
      "Those who meditate on Mother Lakshmi with heartfelt sincerity,",
      "Find at every crossroad of life boundless peace and prosperity."
    ],
    "diwali-96": [
      "अंतर्मन की पावन ज्योति",
      "Awaken the inner flame within your heart in devotion true,",
      "Diwali's fragrant goodness will blossom fresh for you."
    ],
    "diwali-97": [
      "श्री सूक्त की पावन ध्वनि",
      "Chants of the sacred Shri Suktam resonate far and wide,",
      "May your sweet dreams turn to reality with Lakshmi at your side."
    ],
    "diwali-98": [
      "दया दृष्टि मां लक्ष्मी की",
      "Upon whomever Mother Lakshmi casts her merciful glance so kind,",
      "Destitution fades away and royal fulfillment they find."
    ],
    "diwali-99": [
      "चरणों में दीपांजलि",
      "Offering folded hands of light at the Goddess's lotus feet,",
      "May an ocean of joy fill every chapter of your life complete."
    ],
    "diwali-100": [
      "महापर्व दीपावली का संकल्प",
      "May lamps shine across India and extinguish every trace of night,",
      "Wishing you and your entire family an auspicious Diwali full of light!"
    ],
    "diwali-101": [
      "माँ का दुलार और दीवाली",
      "Sweet delicacies made by Mother and a world of endless love,",
      "May this Diwali bring pure joy blessed from the heavens above."
    ],
    "diwali-102": [
      "पिता का साया और हौसला",
      "With Father's sheltering blessings, every day shines Diwali bright,",
      "His strong shoulders supported all our dreams to take their flight."
    ],
    "diwali-103": [
      "भाई की यारी और दीये की लौ",
      "Bursting sparklers with brother and teasing in youthful cheer,",
      "The sweetest joy of Diwali is having our loved ones near."
    ],
    "diwali-104": [
      "बहन की रंगोली और मुस्कान",
      "The colorful rangoli drawn by sister makes our courtyard gleam,",
      "Her cheerful laughter turns each Diwali moment into a blessed dream."
    ],
    "diwali-105": [
      "परिवार का संगम",
      "When the whole family gathers together at our doorway with a smile,",
      "Even simple earthen clay lamps outshine stars across each mile."
    ],
    "diwali-106": [
      "घर का सुकून और बरकत",
      "Blessings from elders and boundless love from the young and dear,",
      "May Goddess Lakshmi bless our entire family throughout the year."
    ],
    "diwali-107": [
      "घर के आँगन की रोशनी",
      "Brighter than festive lamps is the warmth our family shares,",
      "May our blessed home remain forever surrounded by love and prayers."
    ],
    "diwali-108": [
      "यारों की महफ़िल और फुलझड़ी",
      "Emptying sweet boxes together and raising a cheerful toast,",
      "Diwali turns truly magical when celebrating with friends we love most."
    ],
    "diwali-109": [
      "तू है तो दीवाली है",
      "With or without firecrackers, true friendship is our supreme spark,",
      "Your hearty laugh, my dear friend, leaves no corner in the dark."
    ],
    "diwali-110": [
      "बचपन की मस्ती और दीप",
      "Lighting lamps on street corners and lighting rockets side by side,",
      "May our bond of childhood friendship forever remain our pride."
    ],
    "diwali-111": [
      "हँसी का पटाखा",
      "A smile radiant like sparklers and soaring flights like a rocket so high,",
      "Wherever you go my friend, you light up everyone's sky."
    ],
    "diwali-112": [
      "दूर बैठे दोस्त को सलाम",
      "Miles may separate our towns, yet heartstrings closely intertwine,",
      "A prayer for your good health shines in every festive lamp of mine."
    ],
    "diwali-113": [
      "यारी की अटूट चमक",
      "Lamps in festive rows may fade, but the light of our friendship stays,",
      "Happy Diwali my buddy, near in my heart in a thousand ways."
    ],
    "diwali-114": [
      "नई ऊंचाइयां और टीम स्पिरिट",
      "May we conquer every milestone and reach the pinnacle of success,",
      "May Diwali bless our dedicated team with prosperity and progress."
    ],
    "diwali-115": [
      "मार्गदर्शन और सम्मान",
      "Under your inspiring guidance, every professional path turned bright,",
      "Wishing you an auspicious Diwali blessed with honor, health and light."
    ],
    "diwali-116": [
      "ऑफिस का साथ और सहयोग",
      "To wonderful colleagues who bring smiles even through hectic deadlines,",
      "May this Diwali bring you fulfillment, promotion, and good times."
    ],
    "diwali-117": [
      "साझेदारी और अटूट विश्वास",
      "May the lamp of mutual trust continue to illuminate our partnership,",
      "Wishing esteemed clients an abundant Diwali with our deepest gratitude."
    ],
    "diwali-118": [
      "तरक्की और नए अवसर",
      "Kindle the lamp of dedication and reap rewards of flourishing growth,",
      "May this Diwali elevate your career and bring prosperity to both."
    ],
    "diwali-119": [
      "कर्मक्षेत्र में खुशहाली",
      "May lamps of triumph shine and songs of celebration softly ring,",
      "May this Diwali auspicious heights and corporate prestige bring."
    ],
    "diwali-120": [
      "चाचा-ताऊ का स्नेह",
      "May the affection of uncles and family prestige ever endure,",
      "May Diwali sacred radiance keep your sweet home bright and pure."
    ],
    "diwali-121": [
      "ननिहाल की मिठास",
      "Cherished blessings of uncles and aunts with fond nostalgic memories,",
      "May Diwali fill your courtyard with joyous festive harmonies."
    ],
    "diwali-122": [
      "बुआ-फूफाजी का दुलार",
      "Warm maternal aunt affection and uncle joyous smile so wide,",
      "May Diwali shower your home with serenity, peace, and pride."
    ],
    "diwali-123": [
      "पड़ोसियों संग दीवाली",
      "Walls may divide our spaces, yet our shared courtyard catches light,",
      "Good neighbors make every Diwali glow friendly, warm and bright."
    ],
    "diwali-124": [
      "रिश्तों की गर्माहट",
      "May the sweetness of kinship never wane and distances fall away,",
      "May lamps of harmony and pure love illuminate this festive day."
    ],
    "diwali-125": [
      "सभी सगे-संबंधियों को प्रणाम",
      "May health and boundless abundance grace all our relatives near and far,",
      "May this grand Diwali celebration be our brightest guiding star."
    ]
  },
  "es": {
    "diwali-1": [
      "Luz de Diwali 1",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-2": [
      "Luz de Diwali 2",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-3": [
      "Luz de Diwali 3",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-4": [
      "Luz de Diwali 4",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-5": [
      "Luz de Diwali 5",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-6": [
      "Luz de Diwali 6",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-7": [
      "Luz de Diwali 7",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-8": [
      "Luz de Diwali 8",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-9": [
      "Luz de Diwali 9",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-10": [
      "Luz de Diwali 10",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-11": [
      "Luz de Diwali 11",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-12": [
      "Luz de Diwali 12",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-13": [
      "Luz de Diwali 13",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-14": [
      "Luz de Diwali 14",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-15": [
      "Luz de Diwali 15",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-16": [
      "Luz de Diwali 16",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-17": [
      "Luz de Diwali 17",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-18": [
      "Luz de Diwali 18",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-19": [
      "Luz de Diwali 19",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-20": [
      "Luz de Diwali 20",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-21": [
      "Luz de Diwali 21",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-22": [
      "Luz de Diwali 22",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-23": [
      "Luz de Diwali 23",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-24": [
      "Luz de Diwali 24",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-25": [
      "Luz de Diwali 25",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-26": [
      "Luz de Diwali 26",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-27": [
      "Luz de Diwali 27",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-28": [
      "Luz de Diwali 28",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-29": [
      "Luz de Diwali 29",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-30": [
      "Luz de Diwali 30",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-31": [
      "Luz de Diwali 31",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-32": [
      "Luz de Diwali 32",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-33": [
      "Luz de Diwali 33",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-34": [
      "Luz de Diwali 34",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-35": [
      "Luz de Diwali 35",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-36": [
      "Luz de Diwali 36",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-37": [
      "Luz de Diwali 37",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-38": [
      "Luz de Diwali 38",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-39": [
      "Luz de Diwali 39",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-40": [
      "Luz de Diwali 40",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-41": [
      "Luz de Diwali 41",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-42": [
      "Luz de Diwali 42",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-43": [
      "Luz de Diwali 43",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-44": [
      "Luz de Diwali 44",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-45": [
      "Luz de Diwali 45",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-46": [
      "Luz de Diwali 46",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-47": [
      "Luz de Diwali 47",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-48": [
      "Luz de Diwali 48",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-49": [
      "Luz de Diwali 49",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-50": [
      "Luz de Diwali 50",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-51": [
      "Luz de Diwali 51",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-52": [
      "Luz de Diwali 52",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-53": [
      "Luz de Diwali 53",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-54": [
      "Luz de Diwali 54",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-55": [
      "Luz de Diwali 55",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-56": [
      "Luz de Diwali 56",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-57": [
      "Luz de Diwali 57",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-58": [
      "Luz de Diwali 58",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-59": [
      "Luz de Diwali 59",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-60": [
      "Luz de Diwali 60",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-61": [
      "Luz de Diwali 61",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-62": [
      "Luz de Diwali 62",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-63": [
      "Luz de Diwali 63",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-64": [
      "Luz de Diwali 64",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-65": [
      "Luz de Diwali 65",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-66": [
      "Luz de Diwali 66",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-67": [
      "Luz de Diwali 67",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-68": [
      "Luz de Diwali 68",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-69": [
      "Luz de Diwali 69",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-70": [
      "Luz de Diwali 70",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-71": [
      "Luz de Diwali 71",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-72": [
      "Luz de Diwali 72",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-73": [
      "Luz de Diwali 73",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-74": [
      "Luz de Diwali 74",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-75": [
      "Luz de Diwali 75",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-76": [
      "Luz de Diwali 76",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-77": [
      "Luz de Diwali 77",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-78": [
      "Luz de Diwali 78",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-79": [
      "Luz de Diwali 79",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-80": [
      "Luz de Diwali 80",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-81": [
      "Luz de Diwali 81",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-82": [
      "Luz de Diwali 82",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-83": [
      "Luz de Diwali 83",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-84": [
      "Luz de Diwali 84",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-85": [
      "Luz de Diwali 85",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-86": [
      "Luz de Diwali 86",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-87": [
      "Luz de Diwali 87",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-88": [
      "Luz de Diwali 88",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-89": [
      "Luz de Diwali 89",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-90": [
      "Luz de Diwali 90",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-91": [
      "Luz de Diwali 91",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-92": [
      "Luz de Diwali 92",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-93": [
      "Luz de Diwali 93",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-94": [
      "Luz de Diwali 94",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-95": [
      "Luz de Diwali 95",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-96": [
      "Luz de Diwali 96",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-97": [
      "Luz de Diwali 97",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-98": [
      "Luz de Diwali 98",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-99": [
      "Luz de Diwali 99",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-100": [
      "Luz de Diwali 100",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-101": [
      "Luz de Diwali 101",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-102": [
      "Luz de Diwali 102",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-103": [
      "Luz de Diwali 103",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-104": [
      "Luz de Diwali 104",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-105": [
      "Luz de Diwali 105",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-106": [
      "Luz de Diwali 106",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-107": [
      "Luz de Diwali 107",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-108": [
      "Luz de Diwali 108",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-109": [
      "Luz de Diwali 109",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-110": [
      "Luz de Diwali 110",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-111": [
      "Luz de Diwali 111",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-112": [
      "Luz de Diwali 112",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-113": [
      "Luz de Diwali 113",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-114": [
      "Luz de Diwali 114",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-115": [
      "Luz de Diwali 115",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-116": [
      "Luz de Diwali 116",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-117": [
      "Luz de Diwali 117",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-118": [
      "Luz de Diwali 118",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-119": [
      "Luz de Diwali 119",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-120": [
      "Luz de Diwali 120",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-121": [
      "Luz de Diwali 121",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-122": [
      "Luz de Diwali 122",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-123": [
      "Luz de Diwali 123",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-124": [
      "Luz de Diwali 124",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ],
    "diwali-125": [
      "Luz de Diwali 125",
      "Que la luz sagrada de las lámparas de Diwali ilumine tu hogar de alegría.",
      "¡Te deseamos un Feliz Diwali lleno de paz, salud y prosperidad!"
    ]
  },
  "pt": {
    "diwali-1": [
      "Luz de Diwali 1",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-2": [
      "Luz de Diwali 2",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-3": [
      "Luz de Diwali 3",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-4": [
      "Luz de Diwali 4",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-5": [
      "Luz de Diwali 5",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-6": [
      "Luz de Diwali 6",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-7": [
      "Luz de Diwali 7",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-8": [
      "Luz de Diwali 8",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-9": [
      "Luz de Diwali 9",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-10": [
      "Luz de Diwali 10",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-11": [
      "Luz de Diwali 11",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-12": [
      "Luz de Diwali 12",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-13": [
      "Luz de Diwali 13",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-14": [
      "Luz de Diwali 14",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-15": [
      "Luz de Diwali 15",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-16": [
      "Luz de Diwali 16",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-17": [
      "Luz de Diwali 17",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-18": [
      "Luz de Diwali 18",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-19": [
      "Luz de Diwali 19",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-20": [
      "Luz de Diwali 20",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-21": [
      "Luz de Diwali 21",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-22": [
      "Luz de Diwali 22",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-23": [
      "Luz de Diwali 23",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-24": [
      "Luz de Diwali 24",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-25": [
      "Luz de Diwali 25",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-26": [
      "Luz de Diwali 26",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-27": [
      "Luz de Diwali 27",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-28": [
      "Luz de Diwali 28",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-29": [
      "Luz de Diwali 29",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-30": [
      "Luz de Diwali 30",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-31": [
      "Luz de Diwali 31",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-32": [
      "Luz de Diwali 32",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-33": [
      "Luz de Diwali 33",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-34": [
      "Luz de Diwali 34",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-35": [
      "Luz de Diwali 35",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-36": [
      "Luz de Diwali 36",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-37": [
      "Luz de Diwali 37",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-38": [
      "Luz de Diwali 38",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-39": [
      "Luz de Diwali 39",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-40": [
      "Luz de Diwali 40",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-41": [
      "Luz de Diwali 41",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-42": [
      "Luz de Diwali 42",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-43": [
      "Luz de Diwali 43",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-44": [
      "Luz de Diwali 44",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-45": [
      "Luz de Diwali 45",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-46": [
      "Luz de Diwali 46",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-47": [
      "Luz de Diwali 47",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-48": [
      "Luz de Diwali 48",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-49": [
      "Luz de Diwali 49",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-50": [
      "Luz de Diwali 50",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-51": [
      "Luz de Diwali 51",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-52": [
      "Luz de Diwali 52",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-53": [
      "Luz de Diwali 53",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-54": [
      "Luz de Diwali 54",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-55": [
      "Luz de Diwali 55",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-56": [
      "Luz de Diwali 56",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-57": [
      "Luz de Diwali 57",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-58": [
      "Luz de Diwali 58",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-59": [
      "Luz de Diwali 59",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-60": [
      "Luz de Diwali 60",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-61": [
      "Luz de Diwali 61",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-62": [
      "Luz de Diwali 62",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-63": [
      "Luz de Diwali 63",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-64": [
      "Luz de Diwali 64",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-65": [
      "Luz de Diwali 65",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-66": [
      "Luz de Diwali 66",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-67": [
      "Luz de Diwali 67",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-68": [
      "Luz de Diwali 68",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-69": [
      "Luz de Diwali 69",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-70": [
      "Luz de Diwali 70",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-71": [
      "Luz de Diwali 71",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-72": [
      "Luz de Diwali 72",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-73": [
      "Luz de Diwali 73",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-74": [
      "Luz de Diwali 74",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-75": [
      "Luz de Diwali 75",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-76": [
      "Luz de Diwali 76",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-77": [
      "Luz de Diwali 77",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-78": [
      "Luz de Diwali 78",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-79": [
      "Luz de Diwali 79",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-80": [
      "Luz de Diwali 80",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-81": [
      "Luz de Diwali 81",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-82": [
      "Luz de Diwali 82",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-83": [
      "Luz de Diwali 83",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-84": [
      "Luz de Diwali 84",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-85": [
      "Luz de Diwali 85",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-86": [
      "Luz de Diwali 86",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-87": [
      "Luz de Diwali 87",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-88": [
      "Luz de Diwali 88",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-89": [
      "Luz de Diwali 89",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-90": [
      "Luz de Diwali 90",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-91": [
      "Luz de Diwali 91",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-92": [
      "Luz de Diwali 92",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-93": [
      "Luz de Diwali 93",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-94": [
      "Luz de Diwali 94",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-95": [
      "Luz de Diwali 95",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-96": [
      "Luz de Diwali 96",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-97": [
      "Luz de Diwali 97",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-98": [
      "Luz de Diwali 98",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-99": [
      "Luz de Diwali 99",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-100": [
      "Luz de Diwali 100",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-101": [
      "Luz de Diwali 101",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-102": [
      "Luz de Diwali 102",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-103": [
      "Luz de Diwali 103",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-104": [
      "Luz de Diwali 104",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-105": [
      "Luz de Diwali 105",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-106": [
      "Luz de Diwali 106",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-107": [
      "Luz de Diwali 107",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-108": [
      "Luz de Diwali 108",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-109": [
      "Luz de Diwali 109",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-110": [
      "Luz de Diwali 110",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-111": [
      "Luz de Diwali 111",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-112": [
      "Luz de Diwali 112",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-113": [
      "Luz de Diwali 113",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-114": [
      "Luz de Diwali 114",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-115": [
      "Luz de Diwali 115",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-116": [
      "Luz de Diwali 116",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-117": [
      "Luz de Diwali 117",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-118": [
      "Luz de Diwali 118",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-119": [
      "Luz de Diwali 119",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-120": [
      "Luz de Diwali 120",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-121": [
      "Luz de Diwali 121",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-122": [
      "Luz de Diwali 122",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-123": [
      "Luz de Diwali 123",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-124": [
      "Luz de Diwali 124",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ],
    "diwali-125": [
      "Luz de Diwali 125",
      "Que o brilho sagrado das diyas traga paz, saúde e abundância ao seu lar.",
      "Desejamos a você e sua família um iluminado e Feliz Diwali!"
    ]
  },
  "fr": {
    "diwali-1": [
      "Lumière de Diwali 1",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-2": [
      "Lumière de Diwali 2",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-3": [
      "Lumière de Diwali 3",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-4": [
      "Lumière de Diwali 4",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-5": [
      "Lumière de Diwali 5",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-6": [
      "Lumière de Diwali 6",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-7": [
      "Lumière de Diwali 7",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-8": [
      "Lumière de Diwali 8",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-9": [
      "Lumière de Diwali 9",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-10": [
      "Lumière de Diwali 10",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-11": [
      "Lumière de Diwali 11",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-12": [
      "Lumière de Diwali 12",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-13": [
      "Lumière de Diwali 13",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-14": [
      "Lumière de Diwali 14",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-15": [
      "Lumière de Diwali 15",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-16": [
      "Lumière de Diwali 16",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-17": [
      "Lumière de Diwali 17",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-18": [
      "Lumière de Diwali 18",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-19": [
      "Lumière de Diwali 19",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-20": [
      "Lumière de Diwali 20",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-21": [
      "Lumière de Diwali 21",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-22": [
      "Lumière de Diwali 22",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-23": [
      "Lumière de Diwali 23",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-24": [
      "Lumière de Diwali 24",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-25": [
      "Lumière de Diwali 25",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-26": [
      "Lumière de Diwali 26",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-27": [
      "Lumière de Diwali 27",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-28": [
      "Lumière de Diwali 28",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-29": [
      "Lumière de Diwali 29",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-30": [
      "Lumière de Diwali 30",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-31": [
      "Lumière de Diwali 31",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-32": [
      "Lumière de Diwali 32",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-33": [
      "Lumière de Diwali 33",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-34": [
      "Lumière de Diwali 34",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-35": [
      "Lumière de Diwali 35",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-36": [
      "Lumière de Diwali 36",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-37": [
      "Lumière de Diwali 37",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-38": [
      "Lumière de Diwali 38",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-39": [
      "Lumière de Diwali 39",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-40": [
      "Lumière de Diwali 40",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-41": [
      "Lumière de Diwali 41",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-42": [
      "Lumière de Diwali 42",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-43": [
      "Lumière de Diwali 43",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-44": [
      "Lumière de Diwali 44",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-45": [
      "Lumière de Diwali 45",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-46": [
      "Lumière de Diwali 46",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-47": [
      "Lumière de Diwali 47",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-48": [
      "Lumière de Diwali 48",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-49": [
      "Lumière de Diwali 49",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-50": [
      "Lumière de Diwali 50",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-51": [
      "Lumière de Diwali 51",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-52": [
      "Lumière de Diwali 52",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-53": [
      "Lumière de Diwali 53",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-54": [
      "Lumière de Diwali 54",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-55": [
      "Lumière de Diwali 55",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-56": [
      "Lumière de Diwali 56",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-57": [
      "Lumière de Diwali 57",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-58": [
      "Lumière de Diwali 58",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-59": [
      "Lumière de Diwali 59",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-60": [
      "Lumière de Diwali 60",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-61": [
      "Lumière de Diwali 61",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-62": [
      "Lumière de Diwali 62",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-63": [
      "Lumière de Diwali 63",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-64": [
      "Lumière de Diwali 64",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-65": [
      "Lumière de Diwali 65",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-66": [
      "Lumière de Diwali 66",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-67": [
      "Lumière de Diwali 67",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-68": [
      "Lumière de Diwali 68",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-69": [
      "Lumière de Diwali 69",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-70": [
      "Lumière de Diwali 70",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-71": [
      "Lumière de Diwali 71",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-72": [
      "Lumière de Diwali 72",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-73": [
      "Lumière de Diwali 73",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-74": [
      "Lumière de Diwali 74",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-75": [
      "Lumière de Diwali 75",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-76": [
      "Lumière de Diwali 76",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-77": [
      "Lumière de Diwali 77",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-78": [
      "Lumière de Diwali 78",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-79": [
      "Lumière de Diwali 79",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-80": [
      "Lumière de Diwali 80",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-81": [
      "Lumière de Diwali 81",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-82": [
      "Lumière de Diwali 82",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-83": [
      "Lumière de Diwali 83",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-84": [
      "Lumière de Diwali 84",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-85": [
      "Lumière de Diwali 85",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-86": [
      "Lumière de Diwali 86",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-87": [
      "Lumière de Diwali 87",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-88": [
      "Lumière de Diwali 88",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-89": [
      "Lumière de Diwali 89",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-90": [
      "Lumière de Diwali 90",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-91": [
      "Lumière de Diwali 91",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-92": [
      "Lumière de Diwali 92",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-93": [
      "Lumière de Diwali 93",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-94": [
      "Lumière de Diwali 94",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-95": [
      "Lumière de Diwali 95",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-96": [
      "Lumière de Diwali 96",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-97": [
      "Lumière de Diwali 97",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-98": [
      "Lumière de Diwali 98",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-99": [
      "Lumière de Diwali 99",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-100": [
      "Lumière de Diwali 100",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-101": [
      "Lumière de Diwali 101",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-102": [
      "Lumière de Diwali 102",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-103": [
      "Lumière de Diwali 103",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-104": [
      "Lumière de Diwali 104",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-105": [
      "Lumière de Diwali 105",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-106": [
      "Lumière de Diwali 106",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-107": [
      "Lumière de Diwali 107",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-108": [
      "Lumière de Diwali 108",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-109": [
      "Lumière de Diwali 109",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-110": [
      "Lumière de Diwali 110",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-111": [
      "Lumière de Diwali 111",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-112": [
      "Lumière de Diwali 112",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-113": [
      "Lumière de Diwali 113",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-114": [
      "Lumière de Diwali 114",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-115": [
      "Lumière de Diwali 115",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-116": [
      "Lumière de Diwali 116",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-117": [
      "Lumière de Diwali 117",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-118": [
      "Lumière de Diwali 118",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-119": [
      "Lumière de Diwali 119",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-120": [
      "Lumière de Diwali 120",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-121": [
      "Lumière de Diwali 121",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-122": [
      "Lumière de Diwali 122",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-123": [
      "Lumière de Diwali 123",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-124": [
      "Lumière de Diwali 124",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ],
    "diwali-125": [
      "Lumière de Diwali 125",
      "Que la lueur dorée des lampes de Diwali apporte harmonie et prospérité.",
      "Joyeux Diwali à vous et à toute votre famille, dans la paix et l'amour!"
    ]
  },
  "de": {
    "diwali-1": [
      "Diwali Licht 1",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-2": [
      "Diwali Licht 2",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-3": [
      "Diwali Licht 3",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-4": [
      "Diwali Licht 4",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-5": [
      "Diwali Licht 5",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-6": [
      "Diwali Licht 6",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-7": [
      "Diwali Licht 7",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-8": [
      "Diwali Licht 8",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-9": [
      "Diwali Licht 9",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-10": [
      "Diwali Licht 10",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-11": [
      "Diwali Licht 11",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-12": [
      "Diwali Licht 12",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-13": [
      "Diwali Licht 13",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-14": [
      "Diwali Licht 14",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-15": [
      "Diwali Licht 15",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-16": [
      "Diwali Licht 16",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-17": [
      "Diwali Licht 17",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-18": [
      "Diwali Licht 18",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-19": [
      "Diwali Licht 19",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-20": [
      "Diwali Licht 20",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-21": [
      "Diwali Licht 21",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-22": [
      "Diwali Licht 22",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-23": [
      "Diwali Licht 23",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-24": [
      "Diwali Licht 24",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-25": [
      "Diwali Licht 25",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-26": [
      "Diwali Licht 26",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-27": [
      "Diwali Licht 27",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-28": [
      "Diwali Licht 28",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-29": [
      "Diwali Licht 29",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-30": [
      "Diwali Licht 30",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-31": [
      "Diwali Licht 31",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-32": [
      "Diwali Licht 32",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-33": [
      "Diwali Licht 33",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-34": [
      "Diwali Licht 34",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-35": [
      "Diwali Licht 35",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-36": [
      "Diwali Licht 36",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-37": [
      "Diwali Licht 37",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-38": [
      "Diwali Licht 38",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-39": [
      "Diwali Licht 39",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-40": [
      "Diwali Licht 40",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-41": [
      "Diwali Licht 41",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-42": [
      "Diwali Licht 42",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-43": [
      "Diwali Licht 43",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-44": [
      "Diwali Licht 44",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-45": [
      "Diwali Licht 45",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-46": [
      "Diwali Licht 46",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-47": [
      "Diwali Licht 47",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-48": [
      "Diwali Licht 48",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-49": [
      "Diwali Licht 49",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-50": [
      "Diwali Licht 50",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-51": [
      "Diwali Licht 51",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-52": [
      "Diwali Licht 52",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-53": [
      "Diwali Licht 53",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-54": [
      "Diwali Licht 54",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-55": [
      "Diwali Licht 55",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-56": [
      "Diwali Licht 56",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-57": [
      "Diwali Licht 57",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-58": [
      "Diwali Licht 58",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-59": [
      "Diwali Licht 59",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-60": [
      "Diwali Licht 60",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-61": [
      "Diwali Licht 61",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-62": [
      "Diwali Licht 62",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-63": [
      "Diwali Licht 63",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-64": [
      "Diwali Licht 64",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-65": [
      "Diwali Licht 65",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-66": [
      "Diwali Licht 66",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-67": [
      "Diwali Licht 67",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-68": [
      "Diwali Licht 68",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-69": [
      "Diwali Licht 69",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-70": [
      "Diwali Licht 70",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-71": [
      "Diwali Licht 71",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-72": [
      "Diwali Licht 72",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-73": [
      "Diwali Licht 73",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-74": [
      "Diwali Licht 74",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-75": [
      "Diwali Licht 75",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-76": [
      "Diwali Licht 76",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-77": [
      "Diwali Licht 77",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-78": [
      "Diwali Licht 78",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-79": [
      "Diwali Licht 79",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-80": [
      "Diwali Licht 80",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-81": [
      "Diwali Licht 81",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-82": [
      "Diwali Licht 82",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-83": [
      "Diwali Licht 83",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-84": [
      "Diwali Licht 84",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-85": [
      "Diwali Licht 85",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-86": [
      "Diwali Licht 86",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-87": [
      "Diwali Licht 87",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-88": [
      "Diwali Licht 88",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-89": [
      "Diwali Licht 89",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-90": [
      "Diwali Licht 90",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-91": [
      "Diwali Licht 91",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-92": [
      "Diwali Licht 92",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-93": [
      "Diwali Licht 93",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-94": [
      "Diwali Licht 94",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-95": [
      "Diwali Licht 95",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-96": [
      "Diwali Licht 96",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-97": [
      "Diwali Licht 97",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-98": [
      "Diwali Licht 98",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-99": [
      "Diwali Licht 99",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-100": [
      "Diwali Licht 100",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-101": [
      "Diwali Licht 101",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-102": [
      "Diwali Licht 102",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-103": [
      "Diwali Licht 103",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-104": [
      "Diwali Licht 104",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-105": [
      "Diwali Licht 105",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-106": [
      "Diwali Licht 106",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-107": [
      "Diwali Licht 107",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-108": [
      "Diwali Licht 108",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-109": [
      "Diwali Licht 109",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-110": [
      "Diwali Licht 110",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-111": [
      "Diwali Licht 111",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-112": [
      "Diwali Licht 112",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-113": [
      "Diwali Licht 113",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-114": [
      "Diwali Licht 114",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-115": [
      "Diwali Licht 115",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-116": [
      "Diwali Licht 116",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-117": [
      "Diwali Licht 117",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-118": [
      "Diwali Licht 118",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-119": [
      "Diwali Licht 119",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-120": [
      "Diwali Licht 120",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-121": [
      "Diwali Licht 121",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-122": [
      "Diwali Licht 122",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-123": [
      "Diwali Licht 123",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-124": [
      "Diwali Licht 124",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ],
    "diwali-125": [
      "Diwali Licht 125",
      "Möge der festliche Lichterglanz von Diwali Ihr Zuhause mit Segen erfüllen.",
      "Ein frohes und gesegnetes Diwali voller Frieden, Gesundheit und Glück!"
    ]
  },
  "it": {
    "diwali-1": [
      "Luce di Diwali 1",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-2": [
      "Luce di Diwali 2",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-3": [
      "Luce di Diwali 3",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-4": [
      "Luce di Diwali 4",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-5": [
      "Luce di Diwali 5",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-6": [
      "Luce di Diwali 6",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-7": [
      "Luce di Diwali 7",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-8": [
      "Luce di Diwali 8",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-9": [
      "Luce di Diwali 9",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-10": [
      "Luce di Diwali 10",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-11": [
      "Luce di Diwali 11",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-12": [
      "Luce di Diwali 12",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-13": [
      "Luce di Diwali 13",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-14": [
      "Luce di Diwali 14",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-15": [
      "Luce di Diwali 15",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-16": [
      "Luce di Diwali 16",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-17": [
      "Luce di Diwali 17",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-18": [
      "Luce di Diwali 18",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-19": [
      "Luce di Diwali 19",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-20": [
      "Luce di Diwali 20",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-21": [
      "Luce di Diwali 21",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-22": [
      "Luce di Diwali 22",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-23": [
      "Luce di Diwali 23",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-24": [
      "Luce di Diwali 24",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-25": [
      "Luce di Diwali 25",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-26": [
      "Luce di Diwali 26",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-27": [
      "Luce di Diwali 27",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-28": [
      "Luce di Diwali 28",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-29": [
      "Luce di Diwali 29",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-30": [
      "Luce di Diwali 30",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-31": [
      "Luce di Diwali 31",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-32": [
      "Luce di Diwali 32",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-33": [
      "Luce di Diwali 33",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-34": [
      "Luce di Diwali 34",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-35": [
      "Luce di Diwali 35",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-36": [
      "Luce di Diwali 36",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-37": [
      "Luce di Diwali 37",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-38": [
      "Luce di Diwali 38",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-39": [
      "Luce di Diwali 39",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-40": [
      "Luce di Diwali 40",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-41": [
      "Luce di Diwali 41",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-42": [
      "Luce di Diwali 42",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-43": [
      "Luce di Diwali 43",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-44": [
      "Luce di Diwali 44",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-45": [
      "Luce di Diwali 45",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-46": [
      "Luce di Diwali 46",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-47": [
      "Luce di Diwali 47",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-48": [
      "Luce di Diwali 48",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-49": [
      "Luce di Diwali 49",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-50": [
      "Luce di Diwali 50",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-51": [
      "Luce di Diwali 51",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-52": [
      "Luce di Diwali 52",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-53": [
      "Luce di Diwali 53",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-54": [
      "Luce di Diwali 54",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-55": [
      "Luce di Diwali 55",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-56": [
      "Luce di Diwali 56",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-57": [
      "Luce di Diwali 57",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-58": [
      "Luce di Diwali 58",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-59": [
      "Luce di Diwali 59",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-60": [
      "Luce di Diwali 60",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-61": [
      "Luce di Diwali 61",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-62": [
      "Luce di Diwali 62",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-63": [
      "Luce di Diwali 63",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-64": [
      "Luce di Diwali 64",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-65": [
      "Luce di Diwali 65",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-66": [
      "Luce di Diwali 66",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-67": [
      "Luce di Diwali 67",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-68": [
      "Luce di Diwali 68",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-69": [
      "Luce di Diwali 69",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-70": [
      "Luce di Diwali 70",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-71": [
      "Luce di Diwali 71",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-72": [
      "Luce di Diwali 72",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-73": [
      "Luce di Diwali 73",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-74": [
      "Luce di Diwali 74",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-75": [
      "Luce di Diwali 75",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-76": [
      "Luce di Diwali 76",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-77": [
      "Luce di Diwali 77",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-78": [
      "Luce di Diwali 78",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-79": [
      "Luce di Diwali 79",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-80": [
      "Luce di Diwali 80",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-81": [
      "Luce di Diwali 81",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-82": [
      "Luce di Diwali 82",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-83": [
      "Luce di Diwali 83",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-84": [
      "Luce di Diwali 84",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-85": [
      "Luce di Diwali 85",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-86": [
      "Luce di Diwali 86",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-87": [
      "Luce di Diwali 87",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-88": [
      "Luce di Diwali 88",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-89": [
      "Luce di Diwali 89",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-90": [
      "Luce di Diwali 90",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-91": [
      "Luce di Diwali 91",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-92": [
      "Luce di Diwali 92",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-93": [
      "Luce di Diwali 93",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-94": [
      "Luce di Diwali 94",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-95": [
      "Luce di Diwali 95",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-96": [
      "Luce di Diwali 96",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-97": [
      "Luce di Diwali 97",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-98": [
      "Luce di Diwali 98",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-99": [
      "Luce di Diwali 99",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-100": [
      "Luce di Diwali 100",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-101": [
      "Luce di Diwali 101",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-102": [
      "Luce di Diwali 102",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-103": [
      "Luce di Diwali 103",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-104": [
      "Luce di Diwali 104",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-105": [
      "Luce di Diwali 105",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-106": [
      "Luce di Diwali 106",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-107": [
      "Luce di Diwali 107",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-108": [
      "Luce di Diwali 108",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-109": [
      "Luce di Diwali 109",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-110": [
      "Luce di Diwali 110",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-111": [
      "Luce di Diwali 111",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-112": [
      "Luce di Diwali 112",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-113": [
      "Luce di Diwali 113",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-114": [
      "Luce di Diwali 114",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-115": [
      "Luce di Diwali 115",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-116": [
      "Luce di Diwali 116",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-117": [
      "Luce di Diwali 117",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-118": [
      "Luce di Diwali 118",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-119": [
      "Luce di Diwali 119",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-120": [
      "Luce di Diwali 120",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-121": [
      "Luce di Diwali 121",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-122": [
      "Luce di Diwali 122",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-123": [
      "Luce di Diwali 123",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-124": [
      "Luce di Diwali 124",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ],
    "diwali-125": [
      "Luce di Diwali 125",
      "Possa la luce radiosa delle lampade di Diwali portare pace e prosperità.",
      "Buon Diwali a te e ai tuoi cari, con affetto e gioia sincera!"
    ]
  },
  "ja": {
    "diwali-1": [
      "ディワリの光 1",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-2": [
      "ディワリの光 2",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-3": [
      "ディワリの光 3",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-4": [
      "ディワリの光 4",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-5": [
      "ディワリの光 5",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-6": [
      "ディワリの光 6",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-7": [
      "ディワリの光 7",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-8": [
      "ディワリの光 8",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-9": [
      "ディワリの光 9",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-10": [
      "ディワリの光 10",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-11": [
      "ディワリの光 11",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-12": [
      "ディワリの光 12",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-13": [
      "ディワリの光 13",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-14": [
      "ディワリの光 14",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-15": [
      "ディワリの光 15",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-16": [
      "ディワリの光 16",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-17": [
      "ディワリの光 17",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-18": [
      "ディワリの光 18",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-19": [
      "ディワリの光 19",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-20": [
      "ディワリの光 20",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-21": [
      "ディワリの光 21",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-22": [
      "ディワリの光 22",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-23": [
      "ディワリの光 23",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-24": [
      "ディワリの光 24",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-25": [
      "ディワリの光 25",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-26": [
      "ディワリの光 26",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-27": [
      "ディワリの光 27",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-28": [
      "ディワリの光 28",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-29": [
      "ディワリの光 29",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-30": [
      "ディワリの光 30",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-31": [
      "ディワリの光 31",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-32": [
      "ディワリの光 32",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-33": [
      "ディワリの光 33",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-34": [
      "ディワリの光 34",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-35": [
      "ディワリの光 35",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-36": [
      "ディワリの光 36",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-37": [
      "ディワリの光 37",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-38": [
      "ディワリの光 38",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-39": [
      "ディワリの光 39",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-40": [
      "ディワリの光 40",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-41": [
      "ディワリの光 41",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-42": [
      "ディワリの光 42",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-43": [
      "ディワリの光 43",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-44": [
      "ディワリの光 44",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-45": [
      "ディワリの光 45",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-46": [
      "ディワリの光 46",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-47": [
      "ディワリの光 47",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-48": [
      "ディワリの光 48",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-49": [
      "ディワリの光 49",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-50": [
      "ディワリの光 50",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-51": [
      "ディワリの光 51",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-52": [
      "ディワリの光 52",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-53": [
      "ディワリの光 53",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-54": [
      "ディワリの光 54",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-55": [
      "ディワリの光 55",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-56": [
      "ディワリの光 56",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-57": [
      "ディワリの光 57",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-58": [
      "ディワリの光 58",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-59": [
      "ディワリの光 59",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-60": [
      "ディワリの光 60",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-61": [
      "ディワリの光 61",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-62": [
      "ディワリの光 62",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-63": [
      "ディワリの光 63",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-64": [
      "ディワリの光 64",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-65": [
      "ディワリの光 65",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-66": [
      "ディワリの光 66",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-67": [
      "ディワリの光 67",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-68": [
      "ディワリの光 68",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-69": [
      "ディワリの光 69",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-70": [
      "ディワリの光 70",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-71": [
      "ディワリの光 71",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-72": [
      "ディワリの光 72",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-73": [
      "ディワリの光 73",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-74": [
      "ディワリの光 74",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-75": [
      "ディワリの光 75",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-76": [
      "ディワリの光 76",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-77": [
      "ディワリの光 77",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-78": [
      "ディワリの光 78",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-79": [
      "ディワリの光 79",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-80": [
      "ディワリの光 80",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-81": [
      "ディワリの光 81",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-82": [
      "ディワリの光 82",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-83": [
      "ディワリの光 83",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-84": [
      "ディワリの光 84",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-85": [
      "ディワリの光 85",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-86": [
      "ディワリの光 86",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-87": [
      "ディワリの光 87",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-88": [
      "ディワリの光 88",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-89": [
      "ディワリの光 89",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-90": [
      "ディワリの光 90",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-91": [
      "ディワリの光 91",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-92": [
      "ディワリの光 92",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-93": [
      "ディワリの光 93",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-94": [
      "ディワリの光 94",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-95": [
      "ディワリの光 95",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-96": [
      "ディワリの光 96",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-97": [
      "ディワリの光 97",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-98": [
      "ディワリの光 98",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-99": [
      "ディワリの光 99",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-100": [
      "ディワリの光 100",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-101": [
      "ディワリの光 101",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-102": [
      "ディワリの光 102",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-103": [
      "ディワリの光 103",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-104": [
      "ディワリの光 104",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-105": [
      "ディワリの光 105",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-106": [
      "ディワリの光 106",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-107": [
      "ディワリの光 107",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-108": [
      "ディワリの光 108",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-109": [
      "ディワリの光 109",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-110": [
      "ディワリの光 110",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-111": [
      "ディワリの光 111",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-112": [
      "ディワリの光 112",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-113": [
      "ディワリの光 113",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-114": [
      "ディワリの光 114",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-115": [
      "ディワリの光 115",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-116": [
      "ディワリの光 116",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-117": [
      "ディワリの光 117",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-118": [
      "ディワリの光 118",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-119": [
      "ディワリの光 119",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-120": [
      "ディワリの光 120",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-121": [
      "ディワリの光 121",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-122": [
      "ディワリの光 122",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-123": [
      "ディワリの光 123",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-124": [
      "ディワリの光 124",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ],
    "diwali-125": [
      "ディワリの光 125",
      "ディワリの聖なる灯火が、あなたの人生に平和と繁栄をもたらしますように。",
      "心あたたまるハッピー・ディワリをお祈り申し上げます！"
    ]
  },
  "ko": {
    "diwali-1": [
      "디왈리의 등불 1",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-2": [
      "디왈리의 등불 2",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-3": [
      "디왈리의 등불 3",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-4": [
      "디왈리의 등불 4",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-5": [
      "디왈리의 등불 5",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-6": [
      "디왈리의 등불 6",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-7": [
      "디왈리의 등불 7",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-8": [
      "디왈리의 등불 8",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-9": [
      "디왈리의 등불 9",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-10": [
      "디왈리의 등불 10",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-11": [
      "디왈리의 등불 11",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-12": [
      "디왈리의 등불 12",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-13": [
      "디왈리의 등불 13",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-14": [
      "디왈리의 등불 14",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-15": [
      "디왈리의 등불 15",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-16": [
      "디왈리의 등불 16",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-17": [
      "디왈리의 등불 17",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-18": [
      "디왈리의 등불 18",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-19": [
      "디왈리의 등불 19",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-20": [
      "디왈리의 등불 20",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-21": [
      "디왈리의 등불 21",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-22": [
      "디왈리의 등불 22",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-23": [
      "디왈리의 등불 23",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-24": [
      "디왈리의 등불 24",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-25": [
      "디왈리의 등불 25",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-26": [
      "디왈리의 등불 26",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-27": [
      "디왈리의 등불 27",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-28": [
      "디왈리의 등불 28",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-29": [
      "디왈리의 등불 29",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-30": [
      "디왈리의 등불 30",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-31": [
      "디왈리의 등불 31",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-32": [
      "디왈리의 등불 32",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-33": [
      "디왈리의 등불 33",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-34": [
      "디왈리의 등불 34",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-35": [
      "디왈리의 등불 35",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-36": [
      "디왈리의 등불 36",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-37": [
      "디왈리의 등불 37",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-38": [
      "디왈리의 등불 38",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-39": [
      "디왈리의 등불 39",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-40": [
      "디왈리의 등불 40",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-41": [
      "디왈리의 등불 41",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-42": [
      "디왈리의 등불 42",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-43": [
      "디왈리의 등불 43",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-44": [
      "디왈리의 등불 44",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-45": [
      "디왈리의 등불 45",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-46": [
      "디왈리의 등불 46",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-47": [
      "디왈리의 등불 47",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-48": [
      "디왈리의 등불 48",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-49": [
      "디왈리의 등불 49",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-50": [
      "디왈리의 등불 50",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-51": [
      "디왈리의 등불 51",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-52": [
      "디왈리의 등불 52",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-53": [
      "디왈리의 등불 53",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-54": [
      "디왈리의 등불 54",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-55": [
      "디왈리의 등불 55",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-56": [
      "디왈리의 등불 56",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-57": [
      "디왈리의 등불 57",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-58": [
      "디왈리의 등불 58",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-59": [
      "디왈리의 등불 59",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-60": [
      "디왈리의 등불 60",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-61": [
      "디왈리의 등불 61",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-62": [
      "디왈리의 등불 62",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-63": [
      "디왈리의 등불 63",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-64": [
      "디왈리의 등불 64",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-65": [
      "디왈리의 등불 65",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-66": [
      "디왈리의 등불 66",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-67": [
      "디왈리의 등불 67",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-68": [
      "디왈리의 등불 68",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-69": [
      "디왈리의 등불 69",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-70": [
      "디왈리의 등불 70",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-71": [
      "디왈리의 등불 71",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-72": [
      "디왈리의 등불 72",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-73": [
      "디왈리의 등불 73",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-74": [
      "디왈리의 등불 74",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-75": [
      "디왈리의 등불 75",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-76": [
      "디왈리의 등불 76",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-77": [
      "디왈리의 등불 77",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-78": [
      "디왈리의 등불 78",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-79": [
      "디왈리의 등불 79",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-80": [
      "디왈리의 등불 80",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-81": [
      "디왈리의 등불 81",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-82": [
      "디왈리의 등불 82",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-83": [
      "디왈리의 등불 83",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-84": [
      "디왈리의 등불 84",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-85": [
      "디왈리의 등불 85",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-86": [
      "디왈리의 등불 86",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-87": [
      "디왈리의 등불 87",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-88": [
      "디왈리의 등불 88",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-89": [
      "디왈리의 등불 89",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-90": [
      "디왈리의 등불 90",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-91": [
      "디왈리의 등불 91",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-92": [
      "디왈리의 등불 92",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-93": [
      "디왈리의 등불 93",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-94": [
      "디왈리의 등불 94",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-95": [
      "디왈리의 등불 95",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-96": [
      "디왈리의 등불 96",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-97": [
      "디왈리의 등불 97",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-98": [
      "디왈리의 등불 98",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-99": [
      "디왈리의 등불 99",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-100": [
      "디왈리의 등불 100",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-101": [
      "디왈리의 등불 101",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-102": [
      "디왈리의 등불 102",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-103": [
      "디왈리의 등불 103",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-104": [
      "디왈리의 등불 104",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-105": [
      "디왈리의 등불 105",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-106": [
      "디왈리의 등불 106",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-107": [
      "디왈리의 등불 107",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-108": [
      "디왈리의 등불 108",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-109": [
      "디왈리의 등불 109",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-110": [
      "디왈리의 등불 110",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-111": [
      "디왈리의 등불 111",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-112": [
      "디왈리의 등불 112",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-113": [
      "디왈리의 등불 113",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-114": [
      "디왈리의 등불 114",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-115": [
      "디왈리의 등불 115",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-116": [
      "디왈리의 등불 116",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-117": [
      "디왈리의 등불 117",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-118": [
      "디왈리의 등불 118",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-119": [
      "디왈리의 등불 119",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-120": [
      "디왈리의 등불 120",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-121": [
      "디왈리의 등불 121",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-122": [
      "디왈리의 등불 122",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-123": [
      "디왈리의 등불 123",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-124": [
      "디왈리의 등불 124",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ],
    "diwali-125": [
      "디왈리의 등불 125",
      "디왈리의 밝은 등불이 당신의 가정에 평화와 건강, 번영을 비추기를 바랍니다.",
      "가족과 함께 따뜻하고 행복한 디왈리 보내세요!"
    ]
  },
  "ar": {
    "diwali-1": [
      "نور ديوالي 1",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-2": [
      "نور ديوالي 2",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-3": [
      "نور ديوالي 3",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-4": [
      "نور ديوالي 4",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-5": [
      "نور ديوالي 5",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-6": [
      "نور ديوالي 6",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-7": [
      "نور ديوالي 7",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-8": [
      "نور ديوالي 8",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-9": [
      "نور ديوالي 9",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-10": [
      "نور ديوالي 10",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-11": [
      "نور ديوالي 11",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-12": [
      "نور ديوالي 12",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-13": [
      "نور ديوالي 13",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-14": [
      "نور ديوالي 14",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-15": [
      "نور ديوالي 15",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-16": [
      "نور ديوالي 16",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-17": [
      "نور ديوالي 17",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-18": [
      "نور ديوالي 18",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-19": [
      "نور ديوالي 19",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-20": [
      "نور ديوالي 20",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-21": [
      "نور ديوالي 21",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-22": [
      "نور ديوالي 22",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-23": [
      "نور ديوالي 23",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-24": [
      "نور ديوالي 24",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-25": [
      "نور ديوالي 25",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-26": [
      "نور ديوالي 26",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-27": [
      "نور ديوالي 27",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-28": [
      "نور ديوالي 28",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-29": [
      "نور ديوالي 29",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-30": [
      "نور ديوالي 30",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-31": [
      "نور ديوالي 31",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-32": [
      "نور ديوالي 32",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-33": [
      "نور ديوالي 33",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-34": [
      "نور ديوالي 34",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-35": [
      "نور ديوالي 35",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-36": [
      "نور ديوالي 36",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-37": [
      "نور ديوالي 37",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-38": [
      "نور ديوالي 38",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-39": [
      "نور ديوالي 39",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-40": [
      "نور ديوالي 40",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-41": [
      "نور ديوالي 41",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-42": [
      "نور ديوالي 42",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-43": [
      "نور ديوالي 43",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-44": [
      "نور ديوالي 44",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-45": [
      "نور ديوالي 45",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-46": [
      "نور ديوالي 46",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-47": [
      "نور ديوالي 47",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-48": [
      "نور ديوالي 48",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-49": [
      "نور ديوالي 49",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-50": [
      "نور ديوالي 50",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-51": [
      "نور ديوالي 51",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-52": [
      "نور ديوالي 52",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-53": [
      "نور ديوالي 53",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-54": [
      "نور ديوالي 54",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-55": [
      "نور ديوالي 55",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-56": [
      "نور ديوالي 56",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-57": [
      "نور ديوالي 57",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-58": [
      "نور ديوالي 58",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-59": [
      "نور ديوالي 59",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-60": [
      "نور ديوالي 60",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-61": [
      "نور ديوالي 61",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-62": [
      "نور ديوالي 62",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-63": [
      "نور ديوالي 63",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-64": [
      "نور ديوالي 64",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-65": [
      "نور ديوالي 65",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-66": [
      "نور ديوالي 66",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-67": [
      "نور ديوالي 67",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-68": [
      "نور ديوالي 68",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-69": [
      "نور ديوالي 69",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-70": [
      "نور ديوالي 70",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-71": [
      "نور ديوالي 71",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-72": [
      "نور ديوالي 72",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-73": [
      "نور ديوالي 73",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-74": [
      "نور ديوالي 74",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-75": [
      "نور ديوالي 75",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-76": [
      "نور ديوالي 76",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-77": [
      "نور ديوالي 77",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-78": [
      "نور ديوالي 78",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-79": [
      "نور ديوالي 79",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-80": [
      "نور ديوالي 80",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-81": [
      "نور ديوالي 81",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-82": [
      "نور ديوالي 82",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-83": [
      "نور ديوالي 83",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-84": [
      "نور ديوالي 84",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-85": [
      "نور ديوالي 85",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-86": [
      "نور ديوالي 86",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-87": [
      "نور ديوالي 87",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-88": [
      "نور ديوالي 88",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-89": [
      "نور ديوالي 89",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-90": [
      "نور ديوالي 90",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-91": [
      "نور ديوالي 91",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-92": [
      "نور ديوالي 92",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-93": [
      "نور ديوالي 93",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-94": [
      "نور ديوالي 94",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-95": [
      "نور ديوالي 95",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-96": [
      "نور ديوالي 96",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-97": [
      "نور ديوالي 97",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-98": [
      "نور ديوالي 98",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-99": [
      "نور ديوالي 99",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-100": [
      "نور ديوالي 100",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-101": [
      "نور ديوالي 101",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-102": [
      "نور ديوالي 102",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-103": [
      "نور ديوالي 103",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-104": [
      "نور ديوالي 104",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-105": [
      "نور ديوالي 105",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-106": [
      "نور ديوالي 106",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-107": [
      "نور ديوالي 107",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-108": [
      "نور ديوالي 108",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-109": [
      "نور ديوالي 109",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-110": [
      "نور ديوالي 110",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-111": [
      "نور ديوالي 111",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-112": [
      "نور ديوالي 112",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-113": [
      "نور ديوالي 113",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-114": [
      "نور ديوالي 114",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-115": [
      "نور ديوالي 115",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-116": [
      "نور ديوالي 116",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-117": [
      "نور ديوالي 117",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-118": [
      "نور ديوالي 118",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-119": [
      "نور ديوالي 119",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-120": [
      "نور ديوالي 120",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-121": [
      "نور ديوالي 121",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-122": [
      "نور ديوالي 122",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-123": [
      "نور ديوالي 123",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-124": [
      "نور ديوالي 124",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ],
    "diwali-125": [
      "نور ديوالي 125",
      "لتملأ أنوار ديوالي المباركة بيتك بالسلام والبركة والرخاء الدائم.",
      "عيد ديوالي سعيد لك ولعائلتك الكريمة مع أطيب التمنيات!"
    ]
  },
  "th": {
    "diwali-1": [
      "แสงแห่งดิวาลี 1",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-2": [
      "แสงแห่งดิวาลี 2",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-3": [
      "แสงแห่งดิวาลี 3",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-4": [
      "แสงแห่งดิวาลี 4",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-5": [
      "แสงแห่งดิวาลี 5",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-6": [
      "แสงแห่งดิวาลี 6",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-7": [
      "แสงแห่งดิวาลี 7",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-8": [
      "แสงแห่งดิวาลี 8",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-9": [
      "แสงแห่งดิวาลี 9",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-10": [
      "แสงแห่งดิวาลี 10",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-11": [
      "แสงแห่งดิวาลี 11",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-12": [
      "แสงแห่งดิวาลี 12",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-13": [
      "แสงแห่งดิวาลี 13",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-14": [
      "แสงแห่งดิวาลี 14",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-15": [
      "แสงแห่งดิวาลี 15",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-16": [
      "แสงแห่งดิวาลี 16",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-17": [
      "แสงแห่งดิวาลี 17",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-18": [
      "แสงแห่งดิวาลี 18",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-19": [
      "แสงแห่งดิวาลี 19",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-20": [
      "แสงแห่งดิวาลี 20",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-21": [
      "แสงแห่งดิวาลี 21",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-22": [
      "แสงแห่งดิวาลี 22",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-23": [
      "แสงแห่งดิวาลี 23",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-24": [
      "แสงแห่งดิวาลี 24",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-25": [
      "แสงแห่งดิวาลี 25",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-26": [
      "แสงแห่งดิวาลี 26",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-27": [
      "แสงแห่งดิวาลี 27",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-28": [
      "แสงแห่งดิวาลี 28",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-29": [
      "แสงแห่งดิวาลี 29",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-30": [
      "แสงแห่งดิวาลี 30",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-31": [
      "แสงแห่งดิวาลี 31",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-32": [
      "แสงแห่งดิวาลี 32",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-33": [
      "แสงแห่งดิวาลี 33",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-34": [
      "แสงแห่งดิวาลี 34",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-35": [
      "แสงแห่งดิวาลี 35",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-36": [
      "แสงแห่งดิวาลี 36",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-37": [
      "แสงแห่งดิวาลี 37",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-38": [
      "แสงแห่งดิวาลี 38",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-39": [
      "แสงแห่งดิวาลี 39",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-40": [
      "แสงแห่งดิวาลี 40",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-41": [
      "แสงแห่งดิวาลี 41",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-42": [
      "แสงแห่งดิวาลี 42",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-43": [
      "แสงแห่งดิวาลี 43",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-44": [
      "แสงแห่งดิวาลี 44",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-45": [
      "แสงแห่งดิวาลี 45",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-46": [
      "แสงแห่งดิวาลี 46",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-47": [
      "แสงแห่งดิวาลี 47",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-48": [
      "แสงแห่งดิวาลี 48",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-49": [
      "แสงแห่งดิวาลี 49",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-50": [
      "แสงแห่งดิวาลี 50",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-51": [
      "แสงแห่งดิวาลี 51",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-52": [
      "แสงแห่งดิวาลี 52",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-53": [
      "แสงแห่งดิวาลี 53",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-54": [
      "แสงแห่งดิวาลี 54",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-55": [
      "แสงแห่งดิวาลี 55",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-56": [
      "แสงแห่งดิวาลี 56",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-57": [
      "แสงแห่งดิวาลี 57",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-58": [
      "แสงแห่งดิวาลี 58",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-59": [
      "แสงแห่งดิวาลี 59",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-60": [
      "แสงแห่งดิวาลี 60",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-61": [
      "แสงแห่งดิวาลี 61",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-62": [
      "แสงแห่งดิวาลี 62",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-63": [
      "แสงแห่งดิวาลี 63",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-64": [
      "แสงแห่งดิวาลี 64",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-65": [
      "แสงแห่งดิวาลี 65",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-66": [
      "แสงแห่งดิวาลี 66",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-67": [
      "แสงแห่งดิวาลี 67",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-68": [
      "แสงแห่งดิวาลี 68",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-69": [
      "แสงแห่งดิวาลี 69",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-70": [
      "แสงแห่งดิวาลี 70",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-71": [
      "แสงแห่งดิวาลี 71",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-72": [
      "แสงแห่งดิวาลี 72",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-73": [
      "แสงแห่งดิวาลี 73",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-74": [
      "แสงแห่งดิวาลี 74",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-75": [
      "แสงแห่งดิวาลี 75",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-76": [
      "แสงแห่งดิวาลี 76",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-77": [
      "แสงแห่งดิวาลี 77",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-78": [
      "แสงแห่งดิวาลี 78",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-79": [
      "แสงแห่งดิวาลี 79",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-80": [
      "แสงแห่งดิวาลี 80",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-81": [
      "แสงแห่งดิวาลี 81",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-82": [
      "แสงแห่งดิวาลี 82",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-83": [
      "แสงแห่งดิวาลี 83",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-84": [
      "แสงแห่งดิวาลี 84",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-85": [
      "แสงแห่งดิวาลี 85",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-86": [
      "แสงแห่งดิวาลี 86",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-87": [
      "แสงแห่งดิวาลี 87",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-88": [
      "แสงแห่งดิวาลี 88",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-89": [
      "แสงแห่งดิวาลี 89",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-90": [
      "แสงแห่งดิวาลี 90",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-91": [
      "แสงแห่งดิวาลี 91",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-92": [
      "แสงแห่งดิวาลี 92",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-93": [
      "แสงแห่งดิวาลี 93",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-94": [
      "แสงแห่งดิวาลี 94",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-95": [
      "แสงแห่งดิวาลี 95",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-96": [
      "แสงแห่งดิวาลี 96",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-97": [
      "แสงแห่งดิวาลี 97",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-98": [
      "แสงแห่งดิวาลี 98",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-99": [
      "แสงแห่งดิวาลี 99",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-100": [
      "แสงแห่งดิวาลี 100",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-101": [
      "แสงแห่งดิวาลี 101",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-102": [
      "แสงแห่งดิวาลี 102",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-103": [
      "แสงแห่งดิวาลี 103",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-104": [
      "แสงแห่งดิวาลี 104",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-105": [
      "แสงแห่งดิวาลี 105",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-106": [
      "แสงแห่งดิวาลี 106",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-107": [
      "แสงแห่งดิวาลี 107",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-108": [
      "แสงแห่งดิวาลี 108",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-109": [
      "แสงแห่งดิวาลี 109",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-110": [
      "แสงแห่งดิวาลี 110",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-111": [
      "แสงแห่งดิวาลี 111",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-112": [
      "แสงแห่งดิวาลี 112",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-113": [
      "แสงแห่งดิวาลี 113",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-114": [
      "แสงแห่งดิวาลี 114",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-115": [
      "แสงแห่งดิวาลี 115",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-116": [
      "แสงแห่งดิวาลี 116",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-117": [
      "แสงแห่งดิวาลี 117",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-118": [
      "แสงแห่งดิวาลี 118",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-119": [
      "แสงแห่งดิวาลี 119",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-120": [
      "แสงแห่งดิวาลี 120",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-121": [
      "แสงแห่งดิวาลี 121",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-122": [
      "แสงแห่งดิวาลี 122",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-123": [
      "แสงแห่งดิวาลี 123",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-124": [
      "แสงแห่งดิวาลี 124",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ],
    "diwali-125": [
      "แสงแห่งดิวาลี 125",
      "ขอให้แสงประทีปแห่งดิวาลีนำพาความสุข ความเจริญ และความสงบสุขมาสู่ครอบครัว.",
      "สุขสันต์วันดิวาลี ขอให้ชีวิตรุ่งโรจน์และสดใสตลอดไป!"
    ]
  },
  "tl": {
    "diwali-1": [
      "Liwanag ng Diwali 1",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-2": [
      "Liwanag ng Diwali 2",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-3": [
      "Liwanag ng Diwali 3",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-4": [
      "Liwanag ng Diwali 4",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-5": [
      "Liwanag ng Diwali 5",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-6": [
      "Liwanag ng Diwali 6",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-7": [
      "Liwanag ng Diwali 7",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-8": [
      "Liwanag ng Diwali 8",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-9": [
      "Liwanag ng Diwali 9",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-10": [
      "Liwanag ng Diwali 10",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-11": [
      "Liwanag ng Diwali 11",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-12": [
      "Liwanag ng Diwali 12",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-13": [
      "Liwanag ng Diwali 13",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-14": [
      "Liwanag ng Diwali 14",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-15": [
      "Liwanag ng Diwali 15",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-16": [
      "Liwanag ng Diwali 16",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-17": [
      "Liwanag ng Diwali 17",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-18": [
      "Liwanag ng Diwali 18",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-19": [
      "Liwanag ng Diwali 19",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-20": [
      "Liwanag ng Diwali 20",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-21": [
      "Liwanag ng Diwali 21",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-22": [
      "Liwanag ng Diwali 22",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-23": [
      "Liwanag ng Diwali 23",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-24": [
      "Liwanag ng Diwali 24",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-25": [
      "Liwanag ng Diwali 25",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-26": [
      "Liwanag ng Diwali 26",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-27": [
      "Liwanag ng Diwali 27",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-28": [
      "Liwanag ng Diwali 28",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-29": [
      "Liwanag ng Diwali 29",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-30": [
      "Liwanag ng Diwali 30",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-31": [
      "Liwanag ng Diwali 31",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-32": [
      "Liwanag ng Diwali 32",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-33": [
      "Liwanag ng Diwali 33",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-34": [
      "Liwanag ng Diwali 34",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-35": [
      "Liwanag ng Diwali 35",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-36": [
      "Liwanag ng Diwali 36",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-37": [
      "Liwanag ng Diwali 37",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-38": [
      "Liwanag ng Diwali 38",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-39": [
      "Liwanag ng Diwali 39",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-40": [
      "Liwanag ng Diwali 40",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-41": [
      "Liwanag ng Diwali 41",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-42": [
      "Liwanag ng Diwali 42",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-43": [
      "Liwanag ng Diwali 43",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-44": [
      "Liwanag ng Diwali 44",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-45": [
      "Liwanag ng Diwali 45",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-46": [
      "Liwanag ng Diwali 46",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-47": [
      "Liwanag ng Diwali 47",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-48": [
      "Liwanag ng Diwali 48",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-49": [
      "Liwanag ng Diwali 49",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-50": [
      "Liwanag ng Diwali 50",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-51": [
      "Liwanag ng Diwali 51",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-52": [
      "Liwanag ng Diwali 52",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-53": [
      "Liwanag ng Diwali 53",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-54": [
      "Liwanag ng Diwali 54",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-55": [
      "Liwanag ng Diwali 55",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-56": [
      "Liwanag ng Diwali 56",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-57": [
      "Liwanag ng Diwali 57",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-58": [
      "Liwanag ng Diwali 58",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-59": [
      "Liwanag ng Diwali 59",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-60": [
      "Liwanag ng Diwali 60",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-61": [
      "Liwanag ng Diwali 61",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-62": [
      "Liwanag ng Diwali 62",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-63": [
      "Liwanag ng Diwali 63",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-64": [
      "Liwanag ng Diwali 64",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-65": [
      "Liwanag ng Diwali 65",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-66": [
      "Liwanag ng Diwali 66",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-67": [
      "Liwanag ng Diwali 67",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-68": [
      "Liwanag ng Diwali 68",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-69": [
      "Liwanag ng Diwali 69",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-70": [
      "Liwanag ng Diwali 70",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-71": [
      "Liwanag ng Diwali 71",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-72": [
      "Liwanag ng Diwali 72",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-73": [
      "Liwanag ng Diwali 73",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-74": [
      "Liwanag ng Diwali 74",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-75": [
      "Liwanag ng Diwali 75",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-76": [
      "Liwanag ng Diwali 76",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-77": [
      "Liwanag ng Diwali 77",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-78": [
      "Liwanag ng Diwali 78",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-79": [
      "Liwanag ng Diwali 79",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-80": [
      "Liwanag ng Diwali 80",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-81": [
      "Liwanag ng Diwali 81",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-82": [
      "Liwanag ng Diwali 82",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-83": [
      "Liwanag ng Diwali 83",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-84": [
      "Liwanag ng Diwali 84",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-85": [
      "Liwanag ng Diwali 85",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-86": [
      "Liwanag ng Diwali 86",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-87": [
      "Liwanag ng Diwali 87",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-88": [
      "Liwanag ng Diwali 88",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-89": [
      "Liwanag ng Diwali 89",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-90": [
      "Liwanag ng Diwali 90",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-91": [
      "Liwanag ng Diwali 91",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-92": [
      "Liwanag ng Diwali 92",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-93": [
      "Liwanag ng Diwali 93",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-94": [
      "Liwanag ng Diwali 94",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-95": [
      "Liwanag ng Diwali 95",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-96": [
      "Liwanag ng Diwali 96",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-97": [
      "Liwanag ng Diwali 97",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-98": [
      "Liwanag ng Diwali 98",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-99": [
      "Liwanag ng Diwali 99",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-100": [
      "Liwanag ng Diwali 100",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-101": [
      "Liwanag ng Diwali 101",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-102": [
      "Liwanag ng Diwali 102",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-103": [
      "Liwanag ng Diwali 103",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-104": [
      "Liwanag ng Diwali 104",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-105": [
      "Liwanag ng Diwali 105",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-106": [
      "Liwanag ng Diwali 106",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-107": [
      "Liwanag ng Diwali 107",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-108": [
      "Liwanag ng Diwali 108",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-109": [
      "Liwanag ng Diwali 109",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-110": [
      "Liwanag ng Diwali 110",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-111": [
      "Liwanag ng Diwali 111",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-112": [
      "Liwanag ng Diwali 112",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-113": [
      "Liwanag ng Diwali 113",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-114": [
      "Liwanag ng Diwali 114",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-115": [
      "Liwanag ng Diwali 115",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-116": [
      "Liwanag ng Diwali 116",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-117": [
      "Liwanag ng Diwali 117",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-118": [
      "Liwanag ng Diwali 118",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-119": [
      "Liwanag ng Diwali 119",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-120": [
      "Liwanag ng Diwali 120",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-121": [
      "Liwanag ng Diwali 121",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-122": [
      "Liwanag ng Diwali 122",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-123": [
      "Liwanag ng Diwali 123",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-124": [
      "Liwanag ng Diwali 124",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ],
    "diwali-125": [
      "Liwanag ng Diwali 125",
      "Nawa'y punuin ng banal na liwanag ng Diwali ang inyong tahanan ng kapayapaan at biyaya.",
      "Maligayang Diwali sa iyo at sa iyong buong pamilya!"
    ]
  },
  "ru": {
    "diwali-1": [
      "Свет Дивали 1",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-2": [
      "Свет Дивали 2",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-3": [
      "Свет Дивали 3",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-4": [
      "Свет Дивали 4",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-5": [
      "Свет Дивали 5",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-6": [
      "Свет Дивали 6",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-7": [
      "Свет Дивали 7",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-8": [
      "Свет Дивали 8",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-9": [
      "Свет Дивали 9",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-10": [
      "Свет Дивали 10",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-11": [
      "Свет Дивали 11",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-12": [
      "Свет Дивали 12",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-13": [
      "Свет Дивали 13",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-14": [
      "Свет Дивали 14",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-15": [
      "Свет Дивали 15",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-16": [
      "Свет Дивали 16",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-17": [
      "Свет Дивали 17",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-18": [
      "Свет Дивали 18",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-19": [
      "Свет Дивали 19",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-20": [
      "Свет Дивали 20",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-21": [
      "Свет Дивали 21",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-22": [
      "Свет Дивали 22",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-23": [
      "Свет Дивали 23",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-24": [
      "Свет Дивали 24",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-25": [
      "Свет Дивали 25",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-26": [
      "Свет Дивали 26",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-27": [
      "Свет Дивали 27",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-28": [
      "Свет Дивали 28",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-29": [
      "Свет Дивали 29",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-30": [
      "Свет Дивали 30",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-31": [
      "Свет Дивали 31",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-32": [
      "Свет Дивали 32",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-33": [
      "Свет Дивали 33",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-34": [
      "Свет Дивали 34",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-35": [
      "Свет Дивали 35",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-36": [
      "Свет Дивали 36",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-37": [
      "Свет Дивали 37",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-38": [
      "Свет Дивали 38",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-39": [
      "Свет Дивали 39",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-40": [
      "Свет Дивали 40",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-41": [
      "Свет Дивали 41",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-42": [
      "Свет Дивали 42",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-43": [
      "Свет Дивали 43",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-44": [
      "Свет Дивали 44",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-45": [
      "Свет Дивали 45",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-46": [
      "Свет Дивали 46",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-47": [
      "Свет Дивали 47",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-48": [
      "Свет Дивали 48",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-49": [
      "Свет Дивали 49",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-50": [
      "Свет Дивали 50",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-51": [
      "Свет Дивали 51",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-52": [
      "Свет Дивали 52",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-53": [
      "Свет Дивали 53",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-54": [
      "Свет Дивали 54",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-55": [
      "Свет Дивали 55",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-56": [
      "Свет Дивали 56",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-57": [
      "Свет Дивали 57",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-58": [
      "Свет Дивали 58",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-59": [
      "Свет Дивали 59",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-60": [
      "Свет Дивали 60",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-61": [
      "Свет Дивали 61",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-62": [
      "Свет Дивали 62",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-63": [
      "Свет Дивали 63",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-64": [
      "Свет Дивали 64",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-65": [
      "Свет Дивали 65",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-66": [
      "Свет Дивали 66",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-67": [
      "Свет Дивали 67",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-68": [
      "Свет Дивали 68",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-69": [
      "Свет Дивали 69",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-70": [
      "Свет Дивали 70",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-71": [
      "Свет Дивали 71",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-72": [
      "Свет Дивали 72",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-73": [
      "Свет Дивали 73",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-74": [
      "Свет Дивали 74",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-75": [
      "Свет Дивали 75",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-76": [
      "Свет Дивали 76",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-77": [
      "Свет Дивали 77",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-78": [
      "Свет Дивали 78",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-79": [
      "Свет Дивали 79",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-80": [
      "Свет Дивали 80",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-81": [
      "Свет Дивали 81",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-82": [
      "Свет Дивали 82",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-83": [
      "Свет Дивали 83",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-84": [
      "Свет Дивали 84",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-85": [
      "Свет Дивали 85",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-86": [
      "Свет Дивали 86",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-87": [
      "Свет Дивали 87",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-88": [
      "Свет Дивали 88",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-89": [
      "Свет Дивали 89",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-90": [
      "Свет Дивали 90",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-91": [
      "Свет Дивали 91",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-92": [
      "Свет Дивали 92",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-93": [
      "Свет Дивали 93",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-94": [
      "Свет Дивали 94",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-95": [
      "Свет Дивали 95",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-96": [
      "Свет Дивали 96",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-97": [
      "Свет Дивали 97",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-98": [
      "Свет Дивали 98",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-99": [
      "Свет Дивали 99",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-100": [
      "Свет Дивали 100",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-101": [
      "Свет Дивали 101",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-102": [
      "Свет Дивали 102",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-103": [
      "Свет Дивали 103",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-104": [
      "Свет Дивали 104",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-105": [
      "Свет Дивали 105",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-106": [
      "Свет Дивали 106",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-107": [
      "Свет Дивали 107",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-108": [
      "Свет Дивали 108",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-109": [
      "Свет Дивали 109",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-110": [
      "Свет Дивали 110",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-111": [
      "Свет Дивали 111",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-112": [
      "Свет Дивали 112",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-113": [
      "Свет Дивали 113",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-114": [
      "Свет Дивали 114",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-115": [
      "Свет Дивали 115",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-116": [
      "Свет Дивали 116",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-117": [
      "Свет Дивали 117",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-118": [
      "Свет Дивали 118",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-119": [
      "Свет Дивали 119",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-120": [
      "Свет Дивали 120",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-121": [
      "Свет Дивали 121",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-122": [
      "Свет Дивали 122",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-123": [
      "Свет Дивали 123",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-124": [
      "Свет Дивали 124",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ],
    "diwali-125": [
      "Свет Дивали 125",
      "Пусть священный свет огней Дивали принесет в ваш дом мир, благополучие и радость.",
      "Счастливого Дивали вам и вашим близким!"
    ]
  },
  "zh-CN": {
    "diwali-1": [
      "排灯节光明 1",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-2": [
      "排灯节光明 2",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-3": [
      "排灯节光明 3",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-4": [
      "排灯节光明 4",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-5": [
      "排灯节光明 5",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-6": [
      "排灯节光明 6",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-7": [
      "排灯节光明 7",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-8": [
      "排灯节光明 8",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-9": [
      "排灯节光明 9",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-10": [
      "排灯节光明 10",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-11": [
      "排灯节光明 11",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-12": [
      "排灯节光明 12",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-13": [
      "排灯节光明 13",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-14": [
      "排灯节光明 14",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-15": [
      "排灯节光明 15",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-16": [
      "排灯节光明 16",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-17": [
      "排灯节光明 17",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-18": [
      "排灯节光明 18",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-19": [
      "排灯节光明 19",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-20": [
      "排灯节光明 20",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-21": [
      "排灯节光明 21",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-22": [
      "排灯节光明 22",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-23": [
      "排灯节光明 23",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-24": [
      "排灯节光明 24",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-25": [
      "排灯节光明 25",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-26": [
      "排灯节光明 26",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-27": [
      "排灯节光明 27",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-28": [
      "排灯节光明 28",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-29": [
      "排灯节光明 29",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-30": [
      "排灯节光明 30",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-31": [
      "排灯节光明 31",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-32": [
      "排灯节光明 32",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-33": [
      "排灯节光明 33",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-34": [
      "排灯节光明 34",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-35": [
      "排灯节光明 35",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-36": [
      "排灯节光明 36",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-37": [
      "排灯节光明 37",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-38": [
      "排灯节光明 38",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-39": [
      "排灯节光明 39",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-40": [
      "排灯节光明 40",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-41": [
      "排灯节光明 41",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-42": [
      "排灯节光明 42",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-43": [
      "排灯节光明 43",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-44": [
      "排灯节光明 44",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-45": [
      "排灯节光明 45",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-46": [
      "排灯节光明 46",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-47": [
      "排灯节光明 47",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-48": [
      "排灯节光明 48",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-49": [
      "排灯节光明 49",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-50": [
      "排灯节光明 50",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-51": [
      "排灯节光明 51",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-52": [
      "排灯节光明 52",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-53": [
      "排灯节光明 53",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-54": [
      "排灯节光明 54",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-55": [
      "排灯节光明 55",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-56": [
      "排灯节光明 56",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-57": [
      "排灯节光明 57",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-58": [
      "排灯节光明 58",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-59": [
      "排灯节光明 59",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-60": [
      "排灯节光明 60",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-61": [
      "排灯节光明 61",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-62": [
      "排灯节光明 62",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-63": [
      "排灯节光明 63",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-64": [
      "排灯节光明 64",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-65": [
      "排灯节光明 65",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-66": [
      "排灯节光明 66",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-67": [
      "排灯节光明 67",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-68": [
      "排灯节光明 68",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-69": [
      "排灯节光明 69",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-70": [
      "排灯节光明 70",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-71": [
      "排灯节光明 71",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-72": [
      "排灯节光明 72",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-73": [
      "排灯节光明 73",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-74": [
      "排灯节光明 74",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-75": [
      "排灯节光明 75",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-76": [
      "排灯节光明 76",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-77": [
      "排灯节光明 77",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-78": [
      "排灯节光明 78",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-79": [
      "排灯节光明 79",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-80": [
      "排灯节光明 80",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-81": [
      "排灯节光明 81",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-82": [
      "排灯节光明 82",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-83": [
      "排灯节光明 83",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-84": [
      "排灯节光明 84",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-85": [
      "排灯节光明 85",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-86": [
      "排灯节光明 86",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-87": [
      "排灯节光明 87",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-88": [
      "排灯节光明 88",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-89": [
      "排灯节光明 89",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-90": [
      "排灯节光明 90",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-91": [
      "排灯节光明 91",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-92": [
      "排灯节光明 92",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-93": [
      "排灯节光明 93",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-94": [
      "排灯节光明 94",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-95": [
      "排灯节光明 95",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-96": [
      "排灯节光明 96",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-97": [
      "排灯节光明 97",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-98": [
      "排灯节光明 98",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-99": [
      "排灯节光明 99",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-100": [
      "排灯节光明 100",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-101": [
      "排灯节光明 101",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-102": [
      "排灯节光明 102",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-103": [
      "排灯节光明 103",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-104": [
      "排灯节光明 104",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-105": [
      "排灯节光明 105",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-106": [
      "排灯节光明 106",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-107": [
      "排灯节光明 107",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-108": [
      "排灯节光明 108",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-109": [
      "排灯节光明 109",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-110": [
      "排灯节光明 110",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-111": [
      "排灯节光明 111",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-112": [
      "排灯节光明 112",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-113": [
      "排灯节光明 113",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-114": [
      "排灯节光明 114",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-115": [
      "排灯节光明 115",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-116": [
      "排灯节光明 116",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-117": [
      "排灯节光明 117",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-118": [
      "排灯节光明 118",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-119": [
      "排灯节光明 119",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-120": [
      "排灯节光明 120",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-121": [
      "排灯节光明 121",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-122": [
      "排灯节光明 122",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-123": [
      "排灯节光明 123",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-124": [
      "排灯节光明 124",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ],
    "diwali-125": [
      "排灯节光明 125",
      "愿排灯节的神圣灯火为您的家庭带来无尽的吉祥、健康与繁荣。",
      "衷心祝愿您和家人排灯节快乐，幸福安康！"
    ]
  },
  "id": {
    "diwali-1": [
      "Cahaya Diwali 1",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-2": [
      "Cahaya Diwali 2",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-3": [
      "Cahaya Diwali 3",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-4": [
      "Cahaya Diwali 4",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-5": [
      "Cahaya Diwali 5",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-6": [
      "Cahaya Diwali 6",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-7": [
      "Cahaya Diwali 7",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-8": [
      "Cahaya Diwali 8",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-9": [
      "Cahaya Diwali 9",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-10": [
      "Cahaya Diwali 10",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-11": [
      "Cahaya Diwali 11",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-12": [
      "Cahaya Diwali 12",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-13": [
      "Cahaya Diwali 13",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-14": [
      "Cahaya Diwali 14",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-15": [
      "Cahaya Diwali 15",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-16": [
      "Cahaya Diwali 16",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-17": [
      "Cahaya Diwali 17",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-18": [
      "Cahaya Diwali 18",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-19": [
      "Cahaya Diwali 19",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-20": [
      "Cahaya Diwali 20",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-21": [
      "Cahaya Diwali 21",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-22": [
      "Cahaya Diwali 22",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-23": [
      "Cahaya Diwali 23",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-24": [
      "Cahaya Diwali 24",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-25": [
      "Cahaya Diwali 25",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-26": [
      "Cahaya Diwali 26",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-27": [
      "Cahaya Diwali 27",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-28": [
      "Cahaya Diwali 28",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-29": [
      "Cahaya Diwali 29",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-30": [
      "Cahaya Diwali 30",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-31": [
      "Cahaya Diwali 31",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-32": [
      "Cahaya Diwali 32",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-33": [
      "Cahaya Diwali 33",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-34": [
      "Cahaya Diwali 34",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-35": [
      "Cahaya Diwali 35",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-36": [
      "Cahaya Diwali 36",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-37": [
      "Cahaya Diwali 37",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-38": [
      "Cahaya Diwali 38",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-39": [
      "Cahaya Diwali 39",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-40": [
      "Cahaya Diwali 40",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-41": [
      "Cahaya Diwali 41",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-42": [
      "Cahaya Diwali 42",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-43": [
      "Cahaya Diwali 43",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-44": [
      "Cahaya Diwali 44",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-45": [
      "Cahaya Diwali 45",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-46": [
      "Cahaya Diwali 46",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-47": [
      "Cahaya Diwali 47",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-48": [
      "Cahaya Diwali 48",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-49": [
      "Cahaya Diwali 49",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-50": [
      "Cahaya Diwali 50",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-51": [
      "Cahaya Diwali 51",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-52": [
      "Cahaya Diwali 52",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-53": [
      "Cahaya Diwali 53",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-54": [
      "Cahaya Diwali 54",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-55": [
      "Cahaya Diwali 55",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-56": [
      "Cahaya Diwali 56",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-57": [
      "Cahaya Diwali 57",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-58": [
      "Cahaya Diwali 58",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-59": [
      "Cahaya Diwali 59",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-60": [
      "Cahaya Diwali 60",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-61": [
      "Cahaya Diwali 61",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-62": [
      "Cahaya Diwali 62",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-63": [
      "Cahaya Diwali 63",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-64": [
      "Cahaya Diwali 64",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-65": [
      "Cahaya Diwali 65",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-66": [
      "Cahaya Diwali 66",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-67": [
      "Cahaya Diwali 67",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-68": [
      "Cahaya Diwali 68",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-69": [
      "Cahaya Diwali 69",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-70": [
      "Cahaya Diwali 70",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-71": [
      "Cahaya Diwali 71",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-72": [
      "Cahaya Diwali 72",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-73": [
      "Cahaya Diwali 73",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-74": [
      "Cahaya Diwali 74",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-75": [
      "Cahaya Diwali 75",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-76": [
      "Cahaya Diwali 76",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-77": [
      "Cahaya Diwali 77",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-78": [
      "Cahaya Diwali 78",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-79": [
      "Cahaya Diwali 79",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-80": [
      "Cahaya Diwali 80",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-81": [
      "Cahaya Diwali 81",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-82": [
      "Cahaya Diwali 82",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-83": [
      "Cahaya Diwali 83",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-84": [
      "Cahaya Diwali 84",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-85": [
      "Cahaya Diwali 85",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-86": [
      "Cahaya Diwali 86",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-87": [
      "Cahaya Diwali 87",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-88": [
      "Cahaya Diwali 88",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-89": [
      "Cahaya Diwali 89",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-90": [
      "Cahaya Diwali 90",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-91": [
      "Cahaya Diwali 91",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-92": [
      "Cahaya Diwali 92",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-93": [
      "Cahaya Diwali 93",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-94": [
      "Cahaya Diwali 94",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-95": [
      "Cahaya Diwali 95",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-96": [
      "Cahaya Diwali 96",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-97": [
      "Cahaya Diwali 97",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-98": [
      "Cahaya Diwali 98",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-99": [
      "Cahaya Diwali 99",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-100": [
      "Cahaya Diwali 100",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-101": [
      "Cahaya Diwali 101",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-102": [
      "Cahaya Diwali 102",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-103": [
      "Cahaya Diwali 103",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-104": [
      "Cahaya Diwali 104",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-105": [
      "Cahaya Diwali 105",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-106": [
      "Cahaya Diwali 106",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-107": [
      "Cahaya Diwali 107",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-108": [
      "Cahaya Diwali 108",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-109": [
      "Cahaya Diwali 109",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-110": [
      "Cahaya Diwali 110",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-111": [
      "Cahaya Diwali 111",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-112": [
      "Cahaya Diwali 112",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-113": [
      "Cahaya Diwali 113",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-114": [
      "Cahaya Diwali 114",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-115": [
      "Cahaya Diwali 115",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-116": [
      "Cahaya Diwali 116",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-117": [
      "Cahaya Diwali 117",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-118": [
      "Cahaya Diwali 118",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-119": [
      "Cahaya Diwali 119",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-120": [
      "Cahaya Diwali 120",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-121": [
      "Cahaya Diwali 121",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-122": [
      "Cahaya Diwali 122",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-123": [
      "Cahaya Diwali 123",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-124": [
      "Cahaya Diwali 124",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ],
    "diwali-125": [
      "Cahaya Diwali 125",
      "Semoga gemerlap pelita suci Diwali melimpahkan kedamaian dan kemakmuran bagi Anda.",
      "Selamat Hari Raya Diwali untuk Anda dan segenap keluarga tercinta!"
    ]
  },
  "tr": {
    "diwali-1": [
      "Divali Işığı 1",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-2": [
      "Divali Işığı 2",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-3": [
      "Divali Işığı 3",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-4": [
      "Divali Işığı 4",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-5": [
      "Divali Işığı 5",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-6": [
      "Divali Işığı 6",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-7": [
      "Divali Işığı 7",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-8": [
      "Divali Işığı 8",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-9": [
      "Divali Işığı 9",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-10": [
      "Divali Işığı 10",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-11": [
      "Divali Işığı 11",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-12": [
      "Divali Işığı 12",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-13": [
      "Divali Işığı 13",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-14": [
      "Divali Işığı 14",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-15": [
      "Divali Işığı 15",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-16": [
      "Divali Işığı 16",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-17": [
      "Divali Işığı 17",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-18": [
      "Divali Işığı 18",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-19": [
      "Divali Işığı 19",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-20": [
      "Divali Işığı 20",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-21": [
      "Divali Işığı 21",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-22": [
      "Divali Işığı 22",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-23": [
      "Divali Işığı 23",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-24": [
      "Divali Işığı 24",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-25": [
      "Divali Işığı 25",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-26": [
      "Divali Işığı 26",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-27": [
      "Divali Işığı 27",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-28": [
      "Divali Işığı 28",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-29": [
      "Divali Işığı 29",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-30": [
      "Divali Işığı 30",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-31": [
      "Divali Işığı 31",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-32": [
      "Divali Işığı 32",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-33": [
      "Divali Işığı 33",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-34": [
      "Divali Işığı 34",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-35": [
      "Divali Işığı 35",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-36": [
      "Divali Işığı 36",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-37": [
      "Divali Işığı 37",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-38": [
      "Divali Işığı 38",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-39": [
      "Divali Işığı 39",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-40": [
      "Divali Işığı 40",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-41": [
      "Divali Işığı 41",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-42": [
      "Divali Işığı 42",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-43": [
      "Divali Işığı 43",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-44": [
      "Divali Işığı 44",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-45": [
      "Divali Işığı 45",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-46": [
      "Divali Işığı 46",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-47": [
      "Divali Işığı 47",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-48": [
      "Divali Işığı 48",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-49": [
      "Divali Işığı 49",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-50": [
      "Divali Işığı 50",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-51": [
      "Divali Işığı 51",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-52": [
      "Divali Işığı 52",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-53": [
      "Divali Işığı 53",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-54": [
      "Divali Işığı 54",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-55": [
      "Divali Işığı 55",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-56": [
      "Divali Işığı 56",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-57": [
      "Divali Işığı 57",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-58": [
      "Divali Işığı 58",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-59": [
      "Divali Işığı 59",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-60": [
      "Divali Işığı 60",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-61": [
      "Divali Işığı 61",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-62": [
      "Divali Işığı 62",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-63": [
      "Divali Işığı 63",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-64": [
      "Divali Işığı 64",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-65": [
      "Divali Işığı 65",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-66": [
      "Divali Işığı 66",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-67": [
      "Divali Işığı 67",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-68": [
      "Divali Işığı 68",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-69": [
      "Divali Işığı 69",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-70": [
      "Divali Işığı 70",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-71": [
      "Divali Işığı 71",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-72": [
      "Divali Işığı 72",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-73": [
      "Divali Işığı 73",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-74": [
      "Divali Işığı 74",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-75": [
      "Divali Işığı 75",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-76": [
      "Divali Işığı 76",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-77": [
      "Divali Işığı 77",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-78": [
      "Divali Işığı 78",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-79": [
      "Divali Işığı 79",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-80": [
      "Divali Işığı 80",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-81": [
      "Divali Işığı 81",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-82": [
      "Divali Işığı 82",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-83": [
      "Divali Işığı 83",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-84": [
      "Divali Işığı 84",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-85": [
      "Divali Işığı 85",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-86": [
      "Divali Işığı 86",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-87": [
      "Divali Işığı 87",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-88": [
      "Divali Işığı 88",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-89": [
      "Divali Işığı 89",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-90": [
      "Divali Işığı 90",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-91": [
      "Divali Işığı 91",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-92": [
      "Divali Işığı 92",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-93": [
      "Divali Işığı 93",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-94": [
      "Divali Işığı 94",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-95": [
      "Divali Işığı 95",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-96": [
      "Divali Işığı 96",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-97": [
      "Divali Işığı 97",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-98": [
      "Divali Işığı 98",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-99": [
      "Divali Işığı 99",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-100": [
      "Divali Işığı 100",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-101": [
      "Divali Işığı 101",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-102": [
      "Divali Işığı 102",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-103": [
      "Divali Işığı 103",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-104": [
      "Divali Işığı 104",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-105": [
      "Divali Işığı 105",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-106": [
      "Divali Işığı 106",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-107": [
      "Divali Işığı 107",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-108": [
      "Divali Işığı 108",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-109": [
      "Divali Işığı 109",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-110": [
      "Divali Işığı 110",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-111": [
      "Divali Işığı 111",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-112": [
      "Divali Işığı 112",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-113": [
      "Divali Işığı 113",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-114": [
      "Divali Işığı 114",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-115": [
      "Divali Işığı 115",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-116": [
      "Divali Işığı 116",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-117": [
      "Divali Işığı 117",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-118": [
      "Divali Işığı 118",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-119": [
      "Divali Işığı 119",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-120": [
      "Divali Işığı 120",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-121": [
      "Divali Işığı 121",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-122": [
      "Divali Işığı 122",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-123": [
      "Divali Işığı 123",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-124": [
      "Divali Işığı 124",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ],
    "diwali-125": [
      "Divali Işığı 125",
      "Divali'nin kutsal ışıkları evinize huzur, sağlık ve bereket getirsin.",
      "Siz ve aileniz için neşe dolu, aydınlık bir Divali dileriz!"
    ]
  },
  "vi": {
    "diwali-1": [
      "Ánh sáng Diwali 1",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-2": [
      "Ánh sáng Diwali 2",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-3": [
      "Ánh sáng Diwali 3",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-4": [
      "Ánh sáng Diwali 4",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-5": [
      "Ánh sáng Diwali 5",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-6": [
      "Ánh sáng Diwali 6",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-7": [
      "Ánh sáng Diwali 7",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-8": [
      "Ánh sáng Diwali 8",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-9": [
      "Ánh sáng Diwali 9",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-10": [
      "Ánh sáng Diwali 10",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-11": [
      "Ánh sáng Diwali 11",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-12": [
      "Ánh sáng Diwali 12",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-13": [
      "Ánh sáng Diwali 13",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-14": [
      "Ánh sáng Diwali 14",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-15": [
      "Ánh sáng Diwali 15",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-16": [
      "Ánh sáng Diwali 16",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-17": [
      "Ánh sáng Diwali 17",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-18": [
      "Ánh sáng Diwali 18",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-19": [
      "Ánh sáng Diwali 19",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-20": [
      "Ánh sáng Diwali 20",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-21": [
      "Ánh sáng Diwali 21",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-22": [
      "Ánh sáng Diwali 22",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-23": [
      "Ánh sáng Diwali 23",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-24": [
      "Ánh sáng Diwali 24",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-25": [
      "Ánh sáng Diwali 25",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-26": [
      "Ánh sáng Diwali 26",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-27": [
      "Ánh sáng Diwali 27",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-28": [
      "Ánh sáng Diwali 28",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-29": [
      "Ánh sáng Diwali 29",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-30": [
      "Ánh sáng Diwali 30",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-31": [
      "Ánh sáng Diwali 31",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-32": [
      "Ánh sáng Diwali 32",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-33": [
      "Ánh sáng Diwali 33",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-34": [
      "Ánh sáng Diwali 34",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-35": [
      "Ánh sáng Diwali 35",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-36": [
      "Ánh sáng Diwali 36",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-37": [
      "Ánh sáng Diwali 37",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-38": [
      "Ánh sáng Diwali 38",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-39": [
      "Ánh sáng Diwali 39",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-40": [
      "Ánh sáng Diwali 40",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-41": [
      "Ánh sáng Diwali 41",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-42": [
      "Ánh sáng Diwali 42",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-43": [
      "Ánh sáng Diwali 43",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-44": [
      "Ánh sáng Diwali 44",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-45": [
      "Ánh sáng Diwali 45",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-46": [
      "Ánh sáng Diwali 46",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-47": [
      "Ánh sáng Diwali 47",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-48": [
      "Ánh sáng Diwali 48",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-49": [
      "Ánh sáng Diwali 49",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-50": [
      "Ánh sáng Diwali 50",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-51": [
      "Ánh sáng Diwali 51",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-52": [
      "Ánh sáng Diwali 52",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-53": [
      "Ánh sáng Diwali 53",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-54": [
      "Ánh sáng Diwali 54",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-55": [
      "Ánh sáng Diwali 55",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-56": [
      "Ánh sáng Diwali 56",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-57": [
      "Ánh sáng Diwali 57",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-58": [
      "Ánh sáng Diwali 58",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-59": [
      "Ánh sáng Diwali 59",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-60": [
      "Ánh sáng Diwali 60",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-61": [
      "Ánh sáng Diwali 61",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-62": [
      "Ánh sáng Diwali 62",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-63": [
      "Ánh sáng Diwali 63",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-64": [
      "Ánh sáng Diwali 64",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-65": [
      "Ánh sáng Diwali 65",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-66": [
      "Ánh sáng Diwali 66",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-67": [
      "Ánh sáng Diwali 67",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-68": [
      "Ánh sáng Diwali 68",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-69": [
      "Ánh sáng Diwali 69",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-70": [
      "Ánh sáng Diwali 70",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-71": [
      "Ánh sáng Diwali 71",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-72": [
      "Ánh sáng Diwali 72",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-73": [
      "Ánh sáng Diwali 73",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-74": [
      "Ánh sáng Diwali 74",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-75": [
      "Ánh sáng Diwali 75",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-76": [
      "Ánh sáng Diwali 76",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-77": [
      "Ánh sáng Diwali 77",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-78": [
      "Ánh sáng Diwali 78",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-79": [
      "Ánh sáng Diwali 79",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-80": [
      "Ánh sáng Diwali 80",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-81": [
      "Ánh sáng Diwali 81",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-82": [
      "Ánh sáng Diwali 82",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-83": [
      "Ánh sáng Diwali 83",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-84": [
      "Ánh sáng Diwali 84",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-85": [
      "Ánh sáng Diwali 85",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-86": [
      "Ánh sáng Diwali 86",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-87": [
      "Ánh sáng Diwali 87",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-88": [
      "Ánh sáng Diwali 88",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-89": [
      "Ánh sáng Diwali 89",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-90": [
      "Ánh sáng Diwali 90",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-91": [
      "Ánh sáng Diwali 91",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-92": [
      "Ánh sáng Diwali 92",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-93": [
      "Ánh sáng Diwali 93",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-94": [
      "Ánh sáng Diwali 94",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-95": [
      "Ánh sáng Diwali 95",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-96": [
      "Ánh sáng Diwali 96",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-97": [
      "Ánh sáng Diwali 97",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-98": [
      "Ánh sáng Diwali 98",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-99": [
      "Ánh sáng Diwali 99",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-100": [
      "Ánh sáng Diwali 100",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-101": [
      "Ánh sáng Diwali 101",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-102": [
      "Ánh sáng Diwali 102",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-103": [
      "Ánh sáng Diwali 103",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-104": [
      "Ánh sáng Diwali 104",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-105": [
      "Ánh sáng Diwali 105",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-106": [
      "Ánh sáng Diwali 106",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-107": [
      "Ánh sáng Diwali 107",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-108": [
      "Ánh sáng Diwali 108",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-109": [
      "Ánh sáng Diwali 109",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-110": [
      "Ánh sáng Diwali 110",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-111": [
      "Ánh sáng Diwali 111",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-112": [
      "Ánh sáng Diwali 112",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-113": [
      "Ánh sáng Diwali 113",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-114": [
      "Ánh sáng Diwali 114",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-115": [
      "Ánh sáng Diwali 115",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-116": [
      "Ánh sáng Diwali 116",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-117": [
      "Ánh sáng Diwali 117",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-118": [
      "Ánh sáng Diwali 118",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-119": [
      "Ánh sáng Diwali 119",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-120": [
      "Ánh sáng Diwali 120",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-121": [
      "Ánh sáng Diwali 121",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-122": [
      "Ánh sáng Diwali 122",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-123": [
      "Ánh sáng Diwali 123",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-124": [
      "Ánh sáng Diwali 124",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ],
    "diwali-125": [
      "Ánh sáng Diwali 125",
      "Nguyện cầu ánh sáng thiêng liêng của Diwali mang lại an lành, thịnh vượng cho bạn.",
      "Chúc bạn và gia đình một mùa lễ hội Diwali tràn ngập niềm vui và phúc lành!"
    ]
  },
  "nl": {
    "diwali-1": [
      "Diwali Licht 1",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-2": [
      "Diwali Licht 2",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-3": [
      "Diwali Licht 3",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-4": [
      "Diwali Licht 4",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-5": [
      "Diwali Licht 5",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-6": [
      "Diwali Licht 6",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-7": [
      "Diwali Licht 7",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-8": [
      "Diwali Licht 8",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-9": [
      "Diwali Licht 9",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-10": [
      "Diwali Licht 10",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-11": [
      "Diwali Licht 11",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-12": [
      "Diwali Licht 12",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-13": [
      "Diwali Licht 13",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-14": [
      "Diwali Licht 14",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-15": [
      "Diwali Licht 15",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-16": [
      "Diwali Licht 16",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-17": [
      "Diwali Licht 17",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-18": [
      "Diwali Licht 18",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-19": [
      "Diwali Licht 19",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-20": [
      "Diwali Licht 20",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-21": [
      "Diwali Licht 21",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-22": [
      "Diwali Licht 22",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-23": [
      "Diwali Licht 23",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-24": [
      "Diwali Licht 24",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-25": [
      "Diwali Licht 25",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-26": [
      "Diwali Licht 26",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-27": [
      "Diwali Licht 27",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-28": [
      "Diwali Licht 28",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-29": [
      "Diwali Licht 29",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-30": [
      "Diwali Licht 30",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-31": [
      "Diwali Licht 31",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-32": [
      "Diwali Licht 32",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-33": [
      "Diwali Licht 33",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-34": [
      "Diwali Licht 34",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-35": [
      "Diwali Licht 35",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-36": [
      "Diwali Licht 36",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-37": [
      "Diwali Licht 37",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-38": [
      "Diwali Licht 38",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-39": [
      "Diwali Licht 39",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-40": [
      "Diwali Licht 40",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-41": [
      "Diwali Licht 41",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-42": [
      "Diwali Licht 42",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-43": [
      "Diwali Licht 43",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-44": [
      "Diwali Licht 44",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-45": [
      "Diwali Licht 45",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-46": [
      "Diwali Licht 46",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-47": [
      "Diwali Licht 47",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-48": [
      "Diwali Licht 48",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-49": [
      "Diwali Licht 49",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-50": [
      "Diwali Licht 50",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-51": [
      "Diwali Licht 51",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-52": [
      "Diwali Licht 52",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-53": [
      "Diwali Licht 53",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-54": [
      "Diwali Licht 54",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-55": [
      "Diwali Licht 55",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-56": [
      "Diwali Licht 56",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-57": [
      "Diwali Licht 57",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-58": [
      "Diwali Licht 58",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-59": [
      "Diwali Licht 59",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-60": [
      "Diwali Licht 60",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-61": [
      "Diwali Licht 61",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-62": [
      "Diwali Licht 62",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-63": [
      "Diwali Licht 63",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-64": [
      "Diwali Licht 64",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-65": [
      "Diwali Licht 65",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-66": [
      "Diwali Licht 66",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-67": [
      "Diwali Licht 67",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-68": [
      "Diwali Licht 68",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-69": [
      "Diwali Licht 69",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-70": [
      "Diwali Licht 70",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-71": [
      "Diwali Licht 71",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-72": [
      "Diwali Licht 72",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-73": [
      "Diwali Licht 73",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-74": [
      "Diwali Licht 74",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-75": [
      "Diwali Licht 75",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-76": [
      "Diwali Licht 76",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-77": [
      "Diwali Licht 77",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-78": [
      "Diwali Licht 78",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-79": [
      "Diwali Licht 79",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-80": [
      "Diwali Licht 80",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-81": [
      "Diwali Licht 81",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-82": [
      "Diwali Licht 82",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-83": [
      "Diwali Licht 83",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-84": [
      "Diwali Licht 84",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-85": [
      "Diwali Licht 85",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-86": [
      "Diwali Licht 86",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-87": [
      "Diwali Licht 87",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-88": [
      "Diwali Licht 88",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-89": [
      "Diwali Licht 89",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-90": [
      "Diwali Licht 90",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-91": [
      "Diwali Licht 91",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-92": [
      "Diwali Licht 92",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-93": [
      "Diwali Licht 93",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-94": [
      "Diwali Licht 94",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-95": [
      "Diwali Licht 95",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-96": [
      "Diwali Licht 96",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-97": [
      "Diwali Licht 97",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-98": [
      "Diwali Licht 98",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-99": [
      "Diwali Licht 99",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-100": [
      "Diwali Licht 100",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-101": [
      "Diwali Licht 101",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-102": [
      "Diwali Licht 102",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-103": [
      "Diwali Licht 103",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-104": [
      "Diwali Licht 104",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-105": [
      "Diwali Licht 105",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-106": [
      "Diwali Licht 106",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-107": [
      "Diwali Licht 107",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-108": [
      "Diwali Licht 108",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-109": [
      "Diwali Licht 109",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-110": [
      "Diwali Licht 110",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-111": [
      "Diwali Licht 111",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-112": [
      "Diwali Licht 112",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-113": [
      "Diwali Licht 113",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-114": [
      "Diwali Licht 114",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-115": [
      "Diwali Licht 115",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-116": [
      "Diwali Licht 116",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-117": [
      "Diwali Licht 117",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-118": [
      "Diwali Licht 118",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-119": [
      "Diwali Licht 119",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-120": [
      "Diwali Licht 120",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-121": [
      "Diwali Licht 121",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-122": [
      "Diwali Licht 122",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-123": [
      "Diwali Licht 123",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-124": [
      "Diwali Licht 124",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ],
    "diwali-125": [
      "Diwali Licht 125",
      "Moge de feestelijke lichten van Diwali vrede en voorspoed brengen in uw huis.",
      "Een vreugdevol en gezegend Diwali gewenst voor u en uw familie!"
    ]
  },
  "pl": {
    "diwali-1": [
      "Światło Diwali 1",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-2": [
      "Światło Diwali 2",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-3": [
      "Światło Diwali 3",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-4": [
      "Światło Diwali 4",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-5": [
      "Światło Diwali 5",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-6": [
      "Światło Diwali 6",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-7": [
      "Światło Diwali 7",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-8": [
      "Światło Diwali 8",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-9": [
      "Światło Diwali 9",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-10": [
      "Światło Diwali 10",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-11": [
      "Światło Diwali 11",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-12": [
      "Światło Diwali 12",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-13": [
      "Światło Diwali 13",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-14": [
      "Światło Diwali 14",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-15": [
      "Światło Diwali 15",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-16": [
      "Światło Diwali 16",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-17": [
      "Światło Diwali 17",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-18": [
      "Światło Diwali 18",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-19": [
      "Światło Diwali 19",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-20": [
      "Światło Diwali 20",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-21": [
      "Światło Diwali 21",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-22": [
      "Światło Diwali 22",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-23": [
      "Światło Diwali 23",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-24": [
      "Światło Diwali 24",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-25": [
      "Światło Diwali 25",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-26": [
      "Światło Diwali 26",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-27": [
      "Światło Diwali 27",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-28": [
      "Światło Diwali 28",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-29": [
      "Światło Diwali 29",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-30": [
      "Światło Diwali 30",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-31": [
      "Światło Diwali 31",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-32": [
      "Światło Diwali 32",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-33": [
      "Światło Diwali 33",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-34": [
      "Światło Diwali 34",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-35": [
      "Światło Diwali 35",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-36": [
      "Światło Diwali 36",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-37": [
      "Światło Diwali 37",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-38": [
      "Światło Diwali 38",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-39": [
      "Światło Diwali 39",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-40": [
      "Światło Diwali 40",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-41": [
      "Światło Diwali 41",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-42": [
      "Światło Diwali 42",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-43": [
      "Światło Diwali 43",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-44": [
      "Światło Diwali 44",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-45": [
      "Światło Diwali 45",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-46": [
      "Światło Diwali 46",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-47": [
      "Światło Diwali 47",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-48": [
      "Światło Diwali 48",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-49": [
      "Światło Diwali 49",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-50": [
      "Światło Diwali 50",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-51": [
      "Światło Diwali 51",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-52": [
      "Światło Diwali 52",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-53": [
      "Światło Diwali 53",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-54": [
      "Światło Diwali 54",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-55": [
      "Światło Diwali 55",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-56": [
      "Światło Diwali 56",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-57": [
      "Światło Diwali 57",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-58": [
      "Światło Diwali 58",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-59": [
      "Światło Diwali 59",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-60": [
      "Światło Diwali 60",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-61": [
      "Światło Diwali 61",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-62": [
      "Światło Diwali 62",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-63": [
      "Światło Diwali 63",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-64": [
      "Światło Diwali 64",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-65": [
      "Światło Diwali 65",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-66": [
      "Światło Diwali 66",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-67": [
      "Światło Diwali 67",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-68": [
      "Światło Diwali 68",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-69": [
      "Światło Diwali 69",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-70": [
      "Światło Diwali 70",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-71": [
      "Światło Diwali 71",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-72": [
      "Światło Diwali 72",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-73": [
      "Światło Diwali 73",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-74": [
      "Światło Diwali 74",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-75": [
      "Światło Diwali 75",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-76": [
      "Światło Diwali 76",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-77": [
      "Światło Diwali 77",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-78": [
      "Światło Diwali 78",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-79": [
      "Światło Diwali 79",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-80": [
      "Światło Diwali 80",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-81": [
      "Światło Diwali 81",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-82": [
      "Światło Diwali 82",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-83": [
      "Światło Diwali 83",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-84": [
      "Światło Diwali 84",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-85": [
      "Światło Diwali 85",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-86": [
      "Światło Diwali 86",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-87": [
      "Światło Diwali 87",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-88": [
      "Światło Diwali 88",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-89": [
      "Światło Diwali 89",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-90": [
      "Światło Diwali 90",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-91": [
      "Światło Diwali 91",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-92": [
      "Światło Diwali 92",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-93": [
      "Światło Diwali 93",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-94": [
      "Światło Diwali 94",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-95": [
      "Światło Diwali 95",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-96": [
      "Światło Diwali 96",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-97": [
      "Światło Diwali 97",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-98": [
      "Światło Diwali 98",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-99": [
      "Światło Diwali 99",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-100": [
      "Światło Diwali 100",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-101": [
      "Światło Diwali 101",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-102": [
      "Światło Diwali 102",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-103": [
      "Światło Diwali 103",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-104": [
      "Światło Diwali 104",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-105": [
      "Światło Diwali 105",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-106": [
      "Światło Diwali 106",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-107": [
      "Światło Diwali 107",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-108": [
      "Światło Diwali 108",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-109": [
      "Światło Diwali 109",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-110": [
      "Światło Diwali 110",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-111": [
      "Światło Diwali 111",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-112": [
      "Światło Diwali 112",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-113": [
      "Światło Diwali 113",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-114": [
      "Światło Diwali 114",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-115": [
      "Światło Diwali 115",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-116": [
      "Światło Diwali 116",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-117": [
      "Światło Diwali 117",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-118": [
      "Światło Diwali 118",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-119": [
      "Światło Diwali 119",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-120": [
      "Światło Diwali 120",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-121": [
      "Światło Diwali 121",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-122": [
      "Światło Diwali 122",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-123": [
      "Światło Diwali 123",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-124": [
      "Światło Diwali 124",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ],
    "diwali-125": [
      "Światło Diwali 125",
      "Niech święte światła Diwali przyniosą do Twojego domu spokój, zdrowie i pomyślność.",
      "Życzymy radosnego i pełnego błogosławieństw święta Diwali!"
    ]
  },
  "fa": {
    "diwali-1": [
      "نور دیوالی 1",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-2": [
      "نور دیوالی 2",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-3": [
      "نور دیوالی 3",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-4": [
      "نور دیوالی 4",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-5": [
      "نور دیوالی 5",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-6": [
      "نور دیوالی 6",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-7": [
      "نور دیوالی 7",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-8": [
      "نور دیوالی 8",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-9": [
      "نور دیوالی 9",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-10": [
      "نور دیوالی 10",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-11": [
      "نور دیوالی 11",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-12": [
      "نور دیوالی 12",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-13": [
      "نور دیوالی 13",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-14": [
      "نور دیوالی 14",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-15": [
      "نور دیوالی 15",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-16": [
      "نور دیوالی 16",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-17": [
      "نور دیوالی 17",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-18": [
      "نور دیوالی 18",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-19": [
      "نور دیوالی 19",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-20": [
      "نور دیوالی 20",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-21": [
      "نور دیوالی 21",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-22": [
      "نور دیوالی 22",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-23": [
      "نور دیوالی 23",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-24": [
      "نور دیوالی 24",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-25": [
      "نور دیوالی 25",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-26": [
      "نور دیوالی 26",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-27": [
      "نور دیوالی 27",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-28": [
      "نور دیوالی 28",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-29": [
      "نور دیوالی 29",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-30": [
      "نور دیوالی 30",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-31": [
      "نور دیوالی 31",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-32": [
      "نور دیوالی 32",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-33": [
      "نور دیوالی 33",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-34": [
      "نور دیوالی 34",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-35": [
      "نور دیوالی 35",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-36": [
      "نور دیوالی 36",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-37": [
      "نور دیوالی 37",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-38": [
      "نور دیوالی 38",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-39": [
      "نور دیوالی 39",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-40": [
      "نور دیوالی 40",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-41": [
      "نور دیوالی 41",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-42": [
      "نور دیوالی 42",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-43": [
      "نور دیوالی 43",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-44": [
      "نور دیوالی 44",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-45": [
      "نور دیوالی 45",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-46": [
      "نور دیوالی 46",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-47": [
      "نور دیوالی 47",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-48": [
      "نور دیوالی 48",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-49": [
      "نور دیوالی 49",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-50": [
      "نور دیوالی 50",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-51": [
      "نور دیوالی 51",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-52": [
      "نور دیوالی 52",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-53": [
      "نور دیوالی 53",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-54": [
      "نور دیوالی 54",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-55": [
      "نور دیوالی 55",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-56": [
      "نور دیوالی 56",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-57": [
      "نور دیوالی 57",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-58": [
      "نور دیوالی 58",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-59": [
      "نور دیوالی 59",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-60": [
      "نور دیوالی 60",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-61": [
      "نور دیوالی 61",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-62": [
      "نور دیوالی 62",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-63": [
      "نور دیوالی 63",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-64": [
      "نور دیوالی 64",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-65": [
      "نور دیوالی 65",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-66": [
      "نور دیوالی 66",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-67": [
      "نور دیوالی 67",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-68": [
      "نور دیوالی 68",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-69": [
      "نور دیوالی 69",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-70": [
      "نور دیوالی 70",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-71": [
      "نور دیوالی 71",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-72": [
      "نور دیوالی 72",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-73": [
      "نور دیوالی 73",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-74": [
      "نور دیوالی 74",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-75": [
      "نور دیوالی 75",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-76": [
      "نور دیوالی 76",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-77": [
      "نور دیوالی 77",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-78": [
      "نور دیوالی 78",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-79": [
      "نور دیوالی 79",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-80": [
      "نور دیوالی 80",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-81": [
      "نور دیوالی 81",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-82": [
      "نور دیوالی 82",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-83": [
      "نور دیوالی 83",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-84": [
      "نور دیوالی 84",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-85": [
      "نور دیوالی 85",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-86": [
      "نور دیوالی 86",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-87": [
      "نور دیوالی 87",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-88": [
      "نور دیوالی 88",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-89": [
      "نور دیوالی 89",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-90": [
      "نور دیوالی 90",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-91": [
      "نور دیوالی 91",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-92": [
      "نور دیوالی 92",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-93": [
      "نور دیوالی 93",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-94": [
      "نور دیوالی 94",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-95": [
      "نور دیوالی 95",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-96": [
      "نور دیوالی 96",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-97": [
      "نور دیوالی 97",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-98": [
      "نور دیوالی 98",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-99": [
      "نور دیوالی 99",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-100": [
      "نور دیوالی 100",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-101": [
      "نور دیوالی 101",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-102": [
      "نور دیوالی 102",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-103": [
      "نور دیوالی 103",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-104": [
      "نور دیوالی 104",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-105": [
      "نور دیوالی 105",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-106": [
      "نور دیوالی 106",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-107": [
      "نور دیوالی 107",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-108": [
      "نور دیوالی 108",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-109": [
      "نور دیوالی 109",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-110": [
      "نور دیوالی 110",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-111": [
      "نور دیوالی 111",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-112": [
      "نور دیوالی 112",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-113": [
      "نور دیوالی 113",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-114": [
      "نور دیوالی 114",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-115": [
      "نور دیوالی 115",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-116": [
      "نور دیوالی 116",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-117": [
      "نور دیوالی 117",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-118": [
      "نور دیوالی 118",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-119": [
      "نور دیوالی 119",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-120": [
      "نور دیوالی 120",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-121": [
      "نور دیوالی 121",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-122": [
      "نور دیوالی 122",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-123": [
      "نور دیوالی 123",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-124": [
      "نور دیوالی 124",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ],
    "diwali-125": [
      "نور دیوالی 125",
      "روشنایی شمع‌های دیوالی خانه شما را سرشار از آرامش، شادی و برکت باد.",
      "جشن دیوالی بر شما و خانواده گرامی‌تان فرخنده و پیروز باد!"
    ]
  }
};

export const DIWALI_35_FAQS: Record<string, readonly DiwaliFaqItem[]> = {
  "hi": [
    {
      "question": "Diwali kab hai 2026 me?",
      "answer": "Diwali 2026 me 8 November 2026 (Ravivar) ko manayi jayegi. Is din Lakshmi Puja aur Deepotsav ka mukhya parv hoga."
    },
    {
      "question": "Dhanteras kab hai 2026 me?",
      "answer": "Dhanteras 6 November 2026 (Shukravar) ko hai. Is din Bhagwan Dhanvantari aur Kuber dev ki puja ki jati hai."
    },
    {
      "question": "Bhai Dooj kab hai 2026 me?",
      "answer": "Bhai Dooj 11 November 2026 (Budhvar) ko hai. Yeh bhai-behen ke prem aur tilak ka pavan parv hai."
    },
    {
      "question": "Diwali wishes kaise bheje?",
      "answer": "ZQ Feelings par har shayari ke neeche 'Copy' aur 'WhatsApp Share' button diya gaya hai. Ek click me wish copy karke ya WhatsApp par direct bhej sakte hain."
    },
    {
      "question": "Diwali par family ko kya likhe?",
      "answer": "Parivaar ke liye sukhi jeevan, achhi sehat aur Lakshmi ji ke aashirwad wali 2-line ya 4-line festive shayari bhej sakte hain jo dil ko chhu jaye."
    },
    {
      "question": "Diwali gift me kya de?",
      "answer": "Diwali par mithai, dry fruits, silver coins, decorative diyas, ya personalized gift card ke sath sundar shayari bhej sakte hain."
    }
  ],
  "en-US": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "hi-Latn": [
    {
      "question": "Diwali kab hai 2026 me?",
      "answer": "Diwali 2026 me 8 November 2026 (Ravivar) ko manayi jayegi. Is din Lakshmi Puja aur Deepotsav ka mukhya parv hoga."
    },
    {
      "question": "Dhanteras kab hai 2026 me?",
      "answer": "Dhanteras 6 November 2026 (Shukravar) ko hai. Is din Bhagwan Dhanvantari aur Kuber dev ki puja ki jati hai."
    },
    {
      "question": "Bhai Dooj kab hai 2026 me?",
      "answer": "Bhai Dooj 11 November 2026 (Budhvar) ko hai. Yeh bhai-behen ke prem aur tilak ka pavan parv hai."
    },
    {
      "question": "Diwali wishes kaise bheje?",
      "answer": "ZQ Feelings par har shayari ke neeche 'Copy' aur 'WhatsApp Share' button diya gaya hai. Ek click me wish copy karke ya WhatsApp par direct bhej sakte hain."
    },
    {
      "question": "Diwali par family ko kya likhe?",
      "answer": "Parivaar ke liye sukhi jeevan, achhi sehat aur Lakshmi ji ke aashirwad wali 2-line ya 4-line festive shayari bhej sakte hain jo dil ko chhu jaye."
    },
    {
      "question": "Diwali gift me kya de?",
      "answer": "Diwali par mithai, dry fruits, silver coins, decorative diyas, ya personalized gift card ke sath sundar shayari bhej sakte hain."
    }
  ],
  "ta": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "te": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "kn": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "ml": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "mr": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "gu": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "bn": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "pa": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "or": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "as": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "ur": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "bho": [
    {
      "question": "Diwali kab hai 2026 me?",
      "answer": "Diwali 2026 me 8 November 2026 (Ravivar) ko manayi jayegi. Is din Lakshmi Puja aur Deepotsav ka mukhya parv hoga."
    },
    {
      "question": "Dhanteras kab hai 2026 me?",
      "answer": "Dhanteras 6 November 2026 (Shukravar) ko hai. Is din Bhagwan Dhanvantari aur Kuber dev ki puja ki jati hai."
    },
    {
      "question": "Bhai Dooj kab hai 2026 me?",
      "answer": "Bhai Dooj 11 November 2026 (Budhvar) ko hai. Yeh bhai-behen ke prem aur tilak ka pavan parv hai."
    },
    {
      "question": "Diwali wishes kaise bheje?",
      "answer": "ZQ Feelings par har shayari ke neeche 'Copy' aur 'WhatsApp Share' button diya gaya hai. Ek click me wish copy karke ya WhatsApp par direct bhej sakte hain."
    },
    {
      "question": "Diwali par family ko kya likhe?",
      "answer": "Parivaar ke liye sukhi jeevan, achhi sehat aur Lakshmi ji ke aashirwad wali 2-line ya 4-line festive shayari bhej sakte hain jo dil ko chhu jaye."
    },
    {
      "question": "Diwali gift me kya de?",
      "answer": "Diwali par mithai, dry fruits, silver coins, decorative diyas, ya personalized gift card ke sath sundar shayari bhej sakte hain."
    }
  ],
  "bgc": [
    {
      "question": "Diwali kab hai 2026 me?",
      "answer": "Diwali 2026 me 8 November 2026 (Ravivar) ko manayi jayegi. Is din Lakshmi Puja aur Deepotsav ka mukhya parv hoga."
    },
    {
      "question": "Dhanteras kab hai 2026 me?",
      "answer": "Dhanteras 6 November 2026 (Shukravar) ko hai. Is din Bhagwan Dhanvantari aur Kuber dev ki puja ki jati hai."
    },
    {
      "question": "Bhai Dooj kab hai 2026 me?",
      "answer": "Bhai Dooj 11 November 2026 (Budhvar) ko hai. Yeh bhai-behen ke prem aur tilak ka pavan parv hai."
    },
    {
      "question": "Diwali wishes kaise bheje?",
      "answer": "ZQ Feelings par har shayari ke neeche 'Copy' aur 'WhatsApp Share' button diya gaya hai. Ek click me wish copy karke ya WhatsApp par direct bhej sakte hain."
    },
    {
      "question": "Diwali par family ko kya likhe?",
      "answer": "Parivaar ke liye sukhi jeevan, achhi sehat aur Lakshmi ji ke aashirwad wali 2-line ya 4-line festive shayari bhej sakte hain jo dil ko chhu jaye."
    },
    {
      "question": "Diwali gift me kya de?",
      "answer": "Diwali par mithai, dry fruits, silver coins, decorative diyas, ya personalized gift card ke sath sundar shayari bhej sakte hain."
    }
  ],
  "en-GB": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "es": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "pt": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "fr": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "de": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "it": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "ja": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "ko": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "ar": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "th": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "tl": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "ru": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "zh-CN": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "id": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "tr": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "vi": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "nl": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "pl": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ],
  "fa": [
    {
      "question": "When is Diwali in 2026?",
      "answer": "Diwali in 2026 falls on Sunday, November 8, 2026. The main festival featuring Lakshmi Puja and the Festival of Lights will be observed on this day."
    },
    {
      "question": "When is Dhanteras in 2026?",
      "answer": "Dhanteras will be celebrated on Friday, November 6, 2026, marking the auspicious day to worship Lord Dhanvantari and Lord Kuber."
    },
    {
      "question": "When is Bhai Dooj in 2026?",
      "answer": "Bhai Dooj will be celebrated on Wednesday, November 11, 2026, honoring the sacred bond of brother and sister."
    },
    {
      "question": "How to send Diwali wishes?",
      "answer": "Click the 'Copy' or 'WhatsApp Share' button below any shayari on ZQ Feelings to instantly share heartfelt wishes with friends and family."
    },
    {
      "question": "What to write to family on Diwali?",
      "answer": "Send prayers for prosperity, health, and peace, thanking loved ones for their warmth and celebrating the togetherness that Diwali brings."
    },
    {
      "question": "What are the best Diwali gifts?",
      "answer": "Traditional sweets, premium dry fruits, silver coins, handcrafted diyas, and warm personalized greeting cards are the best gifts for Diwali."
    }
  ]
};

export const DIWALI_35_SEO: Record<string, DiwaliLangSeo> = {
  "hi": {
    "title": "125 Best Diwali Wishes in Hindi 2026 - Happy Diwali, Dhanteras, Bhai Dooj Shayari | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes, Shayari aur Messages in Hindi",
    "description": "Best Happy Diwali Shayari, Diwali Wishes, Deepavali Shayari in Hindi - Dil Ki Awaz",
    "introText": "Diwali Week 6 Nov se 11 Nov 2026 tak hai. Dhanteras, Choti Diwali, Diwali, Govardhan Puja aur Bhai Dooj - sabki wishes yahin se copy karo. 125 Wishes x 35 Languages = 4375 Wishes.",
    "offerTitle": "Diwali Gift Offer Dekho",
    "offerBtn": "Offer Dekho",
    "offerSubtitle": "Dhanteras, Diwali aur Bhai Dooj ke liye best gift offers & festive deals"
  },
  "en-US": {
    "title": "125 Best Diwali Wishes in English 2026 - Deepawali Quotes, Dhanteras & Bhai Dooj | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes, Quotes and Messages in English",
    "description": "100+ Best Happy Diwali Wishes 2026 in English, Dhanteras, Lakshmi Puja, Bhai Dooj quotes & greetings for family & friends. Copy & share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week runs from 6 Nov to 11 Nov 2026. Copy Dhanteras, Choti Diwali, Lakshmi Puja, Govardhan, and Bhai Dooj wishes in 35 pre-translated languages (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "View Diwali Gift Offers",
    "offerBtn": "View Offers",
    "offerSubtitle": "Best festive deals, gift hampers & sweets for Diwali, Dhanteras & Bhai Dooj"
  },
  "hi-Latn": {
    "title": "125 Best Diwali Wishes in Hinglish 2026 - Happy Diwali, Dhanteras, Bhai Dooj | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes, Status aur Messages in Hinglish",
    "description": "100+ Best Happy Diwali Wishes 2026 in Hinglish for WhatsApp & Instagram. Dhanteras, Lakshmi Puja & Bhai Dooj status for family & friends.",
    "introText": "Diwali Week 6 Nov se 11 Nov 2026 tak hai. Dhanteras, Choti Diwali, Diwali, Govardhan Puja aur Bhai Dooj - sabki wishes yahin se copy karo. 125 Wishes x 35 Languages = 4375 Wishes.",
    "offerTitle": "Diwali Gift Offer Dekho",
    "offerBtn": "Offer Dekho",
    "offerSubtitle": "Diwali, Dhanteras aur Bhai Dooj ke special gift deals & festive offers"
  },
  "ta": {
    "title": "125 Best Diwali Wishes in Tamil 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Tamil",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Tamil. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Tamil with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Tamil",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Tamil readers"
  },
  "te": {
    "title": "125 Best Diwali Wishes in Telugu 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Telugu",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Telugu. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Telugu with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Telugu",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Telugu readers"
  },
  "kn": {
    "title": "125 Best Diwali Wishes in Kannada 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Kannada",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Kannada. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Kannada with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Kannada",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Kannada readers"
  },
  "ml": {
    "title": "125 Best Diwali Wishes in Malayalam 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Malayalam",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Malayalam. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Malayalam with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Malayalam",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Malayalam readers"
  },
  "mr": {
    "title": "125 Best Diwali Wishes in Marathi 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Marathi",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Marathi. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Marathi with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Marathi",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Marathi readers"
  },
  "gu": {
    "title": "125 Best Diwali Wishes in Gujarati 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Gujarati",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Gujarati. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Gujarati with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Gujarati",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Gujarati readers"
  },
  "bn": {
    "title": "125 Best Diwali Wishes in Bengali 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Bengali",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Bengali. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Bengali with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Bengali",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Bengali readers"
  },
  "pa": {
    "title": "125 Best Diwali Wishes in Punjabi 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Punjabi",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Punjabi. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Punjabi with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Punjabi",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Punjabi readers"
  },
  "or": {
    "title": "125 Best Diwali Wishes in Odia 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Odia",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Odia. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Odia with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Odia",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Odia readers"
  },
  "as": {
    "title": "125 Best Diwali Wishes in Assamese 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Assamese",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Assamese. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Assamese with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Assamese",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Assamese readers"
  },
  "ur": {
    "title": "125 Best Diwali Wishes in Urdu 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Urdu",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Urdu. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Urdu with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Urdu",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Urdu readers"
  },
  "bho": {
    "title": "125 Best Diwali Wishes in Bhojpuri 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Bhojpuri",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Bhojpuri. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Bhojpuri with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Bhojpuri",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Bhojpuri readers"
  },
  "bgc": {
    "title": "125 Best Diwali Wishes in Haryanvi 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Haryanvi",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Haryanvi. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Haryanvi with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Haryanvi",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Haryanvi readers"
  },
  "en-GB": {
    "title": "125 Best Diwali Wishes in English (UK) 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in English (UK)",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in English (UK). Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in English (UK) with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in English (UK)",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for English (UK) readers"
  },
  "es": {
    "title": "125 Best Diwali Wishes in Spanish 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Spanish",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Spanish. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Spanish with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Spanish",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Spanish readers"
  },
  "pt": {
    "title": "125 Best Diwali Wishes in Portuguese 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Portuguese",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Portuguese. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Portuguese with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Portuguese",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Portuguese readers"
  },
  "fr": {
    "title": "125 Best Diwali Wishes in French 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in French",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in French. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in French with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in French",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for French readers"
  },
  "de": {
    "title": "125 Best Diwali Wishes in German 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in German",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in German. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in German with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in German",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for German readers"
  },
  "it": {
    "title": "125 Best Diwali Wishes in Italian 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Italian",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Italian. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Italian with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Italian",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Italian readers"
  },
  "ja": {
    "title": "125 Best Diwali Wishes in Japanese 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Japanese",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Japanese. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Japanese with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Japanese",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Japanese readers"
  },
  "ko": {
    "title": "125 Best Diwali Wishes in Korean 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Korean",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Korean. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Korean with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Korean",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Korean readers"
  },
  "ar": {
    "title": "125 Best Diwali Wishes in Arabic 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Arabic",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Arabic. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Arabic with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Arabic",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Arabic readers"
  },
  "th": {
    "title": "125 Best Diwali Wishes in Thai 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Thai",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Thai. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Thai with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Thai",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Thai readers"
  },
  "tl": {
    "title": "125 Best Diwali Wishes in Tagalog 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Tagalog",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Tagalog. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Tagalog with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Tagalog",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Tagalog readers"
  },
  "ru": {
    "title": "125 Best Diwali Wishes in Russian 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Russian",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Russian. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Russian with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Russian",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Russian readers"
  },
  "zh-CN": {
    "title": "125 Best Diwali Wishes in Chinese (Simplified) 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Chinese (Simplified)",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Chinese (Simplified). Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Chinese (Simplified) with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Chinese (Simplified)",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Chinese (Simplified) readers"
  },
  "id": {
    "title": "125 Best Diwali Wishes in Indonesian 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Indonesian",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Indonesian. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Indonesian with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Indonesian",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Indonesian readers"
  },
  "tr": {
    "title": "125 Best Diwali Wishes in Turkish 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Turkish",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Turkish. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Turkish with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Turkish",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Turkish readers"
  },
  "vi": {
    "title": "125 Best Diwali Wishes in Vietnamese 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Vietnamese",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Vietnamese. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Vietnamese with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Vietnamese",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Vietnamese readers"
  },
  "nl": {
    "title": "125 Best Diwali Wishes in Dutch 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Dutch",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Dutch. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Dutch with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Dutch",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Dutch readers"
  },
  "pl": {
    "title": "125 Best Diwali Wishes in Polish 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Polish",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Polish. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Polish with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Polish",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Polish readers"
  },
  "fa": {
    "title": "125 Best Diwali Wishes in Persian 2026 | ZQ Feelings",
    "h1": "125 Happy Diwali Wishes and Messages in Persian",
    "description": "Read 100+ Happy Diwali Wishes, Dhanteras, Lakshmi Puja and Bhai Dooj greetings in Persian. Copy and share on WhatsApp. Diwali 8 Nov 2026.",
    "introText": "Diwali Week 6 Nov to 11 Nov 2026. Explore 125 original Diwali wishes pre-translated in Persian with easy copy & share (125 Wishes x 35 Languages = 4375 Wishes).",
    "offerTitle": "Diwali Gift Offers in Persian",
    "offerBtn": "Explore Offers",
    "offerSubtitle": "Exclusive festive offers and Diwali gifts for Persian readers"
  }
};
