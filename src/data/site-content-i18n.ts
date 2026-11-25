import type { Lang } from "../lib/i18n";
import { divisions, notices, events, quickLinks, pages } from "./site-content";

// [English, Hindi, Telugu]. The English text must match site-content.ts exactly.
const entries: [string, string, string][] = [
  // Quick links
  ["Public Notices", "सार्वजनिक सूचनाएँ", "ప్రజా నోటీసులు"],
  ["Updates and announcements", "अपडेट और घोषणाएँ", "నవీకరణలు మరియు ప్రకటనలు"],
  ["Forensic Divisions", "न्यायालयिक प्रभाग", "ఫోరెన్సిక్ విభాగాలు"],
  ["Explore areas of expertise", "विशेषज्ञता के क्षेत्र देखें", "నైపుణ్య రంగాలను అన్వేషించండి"],
  ["Public Information", "सार्वजनिक जानकारी", "ప్రజా సమాచారం"],
  ["Resources and RTI", "संसाधन और सूचना का अधिकार", "వనరులు మరియు సమాచార హక్కు"],
  ["Contact Laboratory", "प्रयोगशाला से संपर्क करें", "ప్రయోగశాలను సంప్రదించండి"],
  ["Find contact information", "संपर्क जानकारी प्राप्त करें", "సంప్రదింపు సమాచారం పొందండి"],

  // Divisions
  ["Digital Forensics", "डिजिटल फोरेंसिक", "డిజిటల్ ఫోరెన్సిక్స్"],
  ["Physics Forensics", "भौतिकी फोरेंसिक", "భౌతిక శాస్త్ర ఫోరెన్సిక్స్"],
  ["Biology Forensics", "जीव विज्ञान फोरेंसिक", "జీవశాస్త్ర ఫోరెన్సిక్స్"],
  ["Chemical Forensics", "रसायन फोरेंसिक", "రసాయన ఫోరెన్సిక్స్"],
  ["Questioned Documents", "संदिग्ध दस्तावेज़", "సందేహాస్పద పత్రాలు"],
  ["Explosive Forensics", "विस्फोटक फोरेंसिक", "పేలుడు పదార్థాల ఫోరెన్సిక్స్"],
  ["Ballistics Forensics", "बैलिस्टिक्स फोरेंसिक", "బాలిస్టిక్స్ ఫోరెన్సిక్స్"],
  ["DNA Forensics", "डीएनए फोरेंसिक", "డీఎన్ఏ ఫోరెన్సిక్స్"],
  ["Narcotics & Drugs Forensics", "मादक पदार्थ एवं औषधि फोरेंसिक", "మాదక ద్రవ్యాలు & డ్రగ్స్ ఫోరెన్సిక్స్"],
  ["Toxicology Forensics", "विष विज्ञान फोरेंसिक", "టాక్సికాలజీ ఫోరెన్సిక్స్"],
  ["Psychological Forensics", "मनोवैज्ञानिक फोरेंसिक", "మానసిక ఫోరెన్సిక్స్"],
  ["Sample overview of digital evidence examination and related forensic capabilities.", "डिजिटल साक्ष्य की जाँच और संबंधित फोरेंसिक क्षमताओं का नमूना अवलोकन।", "డిజిటల్ సాక్ష్యాల పరీక్ష మరియు సంబంధిత ఫోరెన్సిక్ సామర్థ్యాల నమూనా అవలోకనం."],
  ["A placeholder for relevant physical-science disciplines and their scope of work.", "संबंधित भौतिक-विज्ञान विषयों और उनके कार्य-क्षेत्र के लिए प्लेसहोल्डर।", "సంబంధిత భౌతిక-శాస్త్ర విభాగాలు మరియు వాటి పని పరిధి కోసం ప్లేస్‌హోల్డర్."],
  ["A placeholder for biological examination services and scientific disciplines.", "जैविक परीक्षण सेवाओं और वैज्ञानिक विषयों के लिए प्लेसहोल्डर।", "జీవశాస్త్ర పరీక్ష సేవలు మరియు శాస్త్రీయ విభాగాల కోసం ప్లేస్‌హోల్డర్."],
  ["A placeholder for chemical analysis and associated laboratory capabilities.", "रासायनिक विश्लेषण और संबंधित प्रयोगशाला क्षमताओं के लिए प्लेसहोल्डर।", "రసాయన విశ్లేషణ మరియు సంబంధిత ప్రయోగశాల సామర్థ్యాల కోసం ప్లేస్‌హోల్డర్."],
  ["A placeholder for document examination information and related services.", "दस्तावेज़ परीक्षण की जानकारी और संबंधित सेवाओं के लिए प्लेसहोल्डर।", "పత్ర పరీక్ష సమాచారం మరియు సంబంధిత సేవల కోసం ప్లేస్‌హోల్డర్."],
  ["A placeholder for research, training, collaboration and development activities.", "अनुसंधान, प्रशिक्षण, सहयोग और विकास गतिविधियों के लिए प्लेसहोल्डर।", "పరిశోధన, శిక్షణ, సహకారం మరియు అభివృద్ధి కార్యకలాపాల కోసం ప్లేస్‌హోల్డర్."],

  // Notices
  ["Sample notice", "नमूना सूचना", "నమూనా నోటీసు"],
  ["Training", "प्रशिक्षण", "శిక్షణ"],
  ["Public information", "सार्वजनिक जानकारी", "ప్రజా సమాచారం"],
  ["Demonstration notice — replace with an approved laboratory announcement", "प्रदर्शन सूचना — इसे प्रयोगशाला की अनुमोदित घोषणा से बदलें", "ప్రదర్శన నోటీసు — దీనిని ప్రయోగశాల ఆమోదిత ప్రకటనతో భర్తీ చేయండి"],
  ["This entry is illustrative content for layout testing only.", "यह प्रविष्टि केवल लेआउट परीक्षण के लिए उदाहरण सामग्री है।", "ఈ నమోదు లేఅవుట్ పరీక్ష కోసం ఉదాహరణ కంటెంట్ మాత్రమే."],
  ["Demonstration training update for the notices section", "सूचना अनुभाग के लिए प्रदर्शन प्रशिक्षण अपडेट", "నోటీసుల విభాగం కోసం ప్రదర్శన శిక్షణ నవీకరణ"],
  ["Use this area for verified training announcements or institutional updates.", "इस स्थान का उपयोग सत्यापित प्रशिक्षण घोषणाओं या संस्थागत अपडेट के लिए करें।", "ఈ స్థలాన్ని ధృవీకరించిన శిక్షణ ప్రకటనలు లేదా సంస్థాగత నవీకరణల కోసం ఉపయోగించండి."],
  ["Example public information resource listing", "सार्वजनिक जानकारी संसाधन सूची का उदाहरण", "ప్రజా సమాచార వనరుల జాబితా ఉదాహరణ"],
  ["Replace this text and its link with the correct official document when available.", "उपलब्ध होने पर इस पाठ और इसके लिंक को सही आधिकारिक दस्तावेज़ से बदलें।", "అందుబాటులో ఉన్నప్పుడు ఈ వచనం మరియు దాని లింక్‌ను సరైన అధికారిక పత్రంతో భర్తీ చేయండి."],

  // Events
  ["Training and capacity building", "प्रशिक्षण और क्षमता निर्माण", "శిక్షణ మరియు సామర్థ్య నిర్మాణం"],
  ["A sample item for future workshops, training programmes or academic engagement announcements.", "भावी कार्यशालाओं, प्रशिक्षण कार्यक्रमों या शैक्षणिक सहभागिता की घोषणाओं के लिए एक नमूना प्रविष्टि।", "భవిష్యత్ వర్క్‌షాప్‌లు, శిక్షణ కార్యక్రమాలు లేదా విద్యా భాగస్వామ్య ప్రకటనల కోసం నమూనా అంశం."],
  ["Scientific updates", "वैज्ञानिक अपडेट", "శాస్త్రీయ నవీకరణలు"],
  ["A placeholder for verified research updates, institutional activities and public announcements.", "सत्यापित अनुसंधान अपडेट, संस्थागत गतिविधियों और सार्वजनिक घोषणाओं के लिए प्लेसहोल्डर।", "ధృవీకరించిన పరిశోధన నవీకరణలు, సంస్థాగత కార్యకలాపాలు మరియు ప్రజా ప్రకటనల కోసం ప్లేస్‌హోల్డర్."],
  ["Public resources", "सार्वजनिक संसाधन", "ప్రజా వనరులు"],
  ["A place to highlight approved resources, forms, guidelines or information for stakeholders.", "हितधारकों के लिए अनुमोदित संसाधनों, प्रपत्रों, दिशानिर्देशों या जानकारी को उजागर करने का स्थान।", "భాగస్వాముల కోసం ఆమోదిత వనరులు, ఫారమ్‌లు, మార్గదర్శకాలు లేదా సమాచారాన్ని ప్రదర్శించే స్థలం."],

  // Pages: about / profile
  ["Overview", "अवलोकन", "అవలోకనం"],
  ["An introduction to CFSL Hyderabad, its institutional role and official identity.", "सीएफएसएल हैदराबाद, इसकी संस्थागत भूमिका और आधिकारिक पहचान का परिचय।", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్, దాని సంస్థాగత పాత్ర మరియు అధికారిక గుర్తింపు పరిచయం."],
  ["Institutional overview", "संस्थागत अवलोकन", "సంస్థాగత అవలోకనం"],
  ["Institutional Profile", "संस्थागत परिचय", "సంస్థాగత ప్రొఫైల్"],
  ["A structured place for verified institutional details and leadership information.", "सत्यापित संस्थागत विवरण और नेतृत्व संबंधी जानकारी के लिए एक संरचित स्थान।", "ధృవీకరించిన సంస్థాగత వివరాలు మరియు నాయకత్వ సమాచారం కోసం నిర్మాణాత్మక స్థలం."],
  ["Profile and governance", "परिचय और शासन", "ప్రొఫైల్ మరియు పాలన"],
  ["This section is a template for approved information about the laboratory, its administration and its organisational structure.", "यह अनुभाग प्रयोगशाला, उसके प्रशासन और संगठनात्मक ढाँचे की अनुमोदित जानकारी के लिए एक टेम्पलेट है।", "ఈ విభాగం ప్రయోగశాల, దాని పరిపాలన మరియు సంస్థాగత నిర్మాణం గురించిన ఆమోదిత సమాచారం కోసం టెంప్లేట్."],
  ["Official name and administrative authority", "आधिकारिक नाम और प्रशासनिक प्राधिकारी", "అధికారిక పేరు మరియు పరిపాలనా అధికారం"],
  ["Leadership and organisational structure", "नेतृत्व और संगठनात्मक ढाँचा", "నాయకత్వం మరియు సంస్థాగత నిర్మాణం"],
  ["Approved institutional milestones", "अनुमोदित संस्थागत उपलब्धियाँ", "ఆమోదిత సంస్థాగత మైలురాళ్లు"],

  // Pages: divisions
  ["Scientific Divisions", "वैज्ञानिक प्रभाग", "శాస్త్రీయ విభాగాలు"],
  ["Explore the scientific disciplines and areas of expertise represented by the laboratory.", "प्रयोगशाला द्वारा प्रतिनिधित्व किए जाने वाले वैज्ञानिक विषयों और विशेषज्ञता क्षेत्रों को देखें।", "ప్రయోగశాల ప్రాతినిధ్యం వహించే శాస్త్రీయ విభాగాలు మరియు నైపుణ్య రంగాలను అన్వేషించండి."],
  ["Divisions and areas of expertise", "प्रभाग और विशेषज्ञता के क्षेत्र", "విభాగాలు మరియు నైపుణ్య రంగాలు"],
  ["The division names shown here are illustrative navigation examples, not a verified directory of CFSL Hyderabad. Confirm the actual divisions and their remits before publication.", "यहाँ दिखाए गए प्रभागों के नाम केवल उदाहरण हैं, सीएफएसएल हैदराबाद की सत्यापित निर्देशिका नहीं। प्रकाशन से पहले वास्तविक प्रभागों और उनके कार्यक्षेत्र की पुष्टि करें।", "ఇక్కడ చూపిన విభాగాల పేర్లు ఉదాహరణలు మాత్రమే, సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ యొక్క ధృవీకరించిన డైరెక్టరీ కాదు. ప్రచురణకు ముందు వాస్తవ విభాగాలు మరియు వాటి పరిధిని నిర్ధారించండి."],
  ["Add each confirmed division as structured data", "प्रत्येक पुष्ट प्रभाग को संरचित डेटा के रूप में जोड़ें", "ధృవీకరించిన ప్రతి విభాగాన్ని నిర్మాణాత్మక డేటాగా జోడించండి"],
  ["Provide approved descriptions and scope of work", "अनुमोदित विवरण और कार्यक्षेत्र उपलब्ध कराएँ", "ఆమోదిత వివరణలు మరియు పని పరిధిని అందించండి"],
  ["Add official contact or referral guidance where appropriate", "जहाँ उपयुक्त हो, आधिकारिक संपर्क या संदर्भ संबंधी मार्गदर्शन जोड़ें", "తగిన చోట అధికారిక సంప్రదింపు లేదా రిఫరల్ మార్గదర్శకత్వం జోడించండి"],

  // Pages: services
  ["Services", "सेवाएँ", "సేవలు"],
  ["A clear directory for approved information about forensic services and stakeholder guidance.", "फोरेंसिक सेवाओं और हितधारकों के मार्गदर्शन की अनुमोदित जानकारी के लिए एक स्पष्ट निर्देशिका।", "ఫోరెన్సిక్ సేవలు మరియు భాగస్వాముల మార్గదర్శకత్వం గురించిన ఆమోదిత సమాచారం కోసం స్పష్టమైన డైరెక్టరీ."],
  ["Service information", "सेवा संबंधी जानकारी", "సేవా సమాచారం"],
  ["This page is a placeholder. Populate it with verified service descriptions, eligibility or referral information, document requirements and official procedures as applicable.", "यह पृष्ठ एक प्लेसहोल्डर है। इसे सत्यापित सेवा विवरण, पात्रता या संदर्भ संबंधी जानकारी, दस्तावेज़ आवश्यकताओं और लागू आधिकारिक प्रक्रियाओं से भरें।", "ఈ పేజీ ప్లేస్‌హోల్డర్. దీనిని ధృవీకరించిన సేవా వివరణలు, అర్హత లేదా రిఫరల్ సమాచారం, పత్ర అవసరాలు మరియు వర్తించే అధికారిక విధానాలతో నింపండి."],
  ["Approved service descriptions", "अनुमोदित सेवा विवरण", "ఆమోదిత సేవా వివరణలు"],
  ["Submission and referral guidance", "प्रस्तुति और संदर्भ संबंधी मार्गदर्शन", "సమర్పణ మరియు రిఫరల్ మార్గదర్శకత్వం"],
  ["Applicable forms and official resources", "लागू प्रपत्र और आधिकारिक संसाधन", "వర్తించే ఫారమ్‌లు మరియు అధికారిక వనరులు"],

  // Pages: notices
  ["Notices & Updates", "सूचनाएँ और अपडेट", "నోటీసులు & నవీకరణలు"],
  ["A central place for announcements, tenders, recruitment notices and public resources.", "घोषणाओं, निविदाओं, भर्ती सूचनाओं और सार्वजनिक संसाधनों के लिए एक केंद्रीय स्थान।", "ప్రకటనలు, టెండర్లు, నియామక నోటీసులు మరియు ప్రజా వనరుల కోసం కేంద్ర స్థలం."],
  ["Latest notices", "ताज़ा सूचनाएँ", "తాజా నోటీసులు"],
  ["The notice entries currently shown on this demonstration website are sample content. They are not real official announcements and must be replaced before deployment.", "इस प्रदर्शन वेबसाइट पर वर्तमान में दिखाई गई सूचनाएँ नमूना सामग्री हैं। ये वास्तविक आधिकारिक घोषणाएँ नहीं हैं और तैनाती से पहले इन्हें बदला जाना चाहिए।", "ఈ ప్రదర్శన వెబ్‌సైట్‌లో ప్రస్తుతం చూపిన నోటీసులు నమూనా కంటెంట్. అవి నిజమైన అధికారిక ప్రకటనలు కావు మరియు ప్రారంభానికి ముందు భర్తీ చేయాలి."],
  ["Use a clear title and publication date", "स्पष्ट शीर्षक और प्रकाशन तिथि का उपयोग करें", "స్పష్టమైన శీర్షిక మరియు ప్రచురణ తేదీని ఉపయోగించండి"],
  ["Link directly to the approved document or notice", "अनुमोदित दस्तावेज़ या सूचना से सीधे लिंक करें", "ఆమోదిత పత్రం లేదా నోటీసుకు నేరుగా లింక్ చేయండి"],
  ["Remove expired content according to the site's publishing policy", "साइट की प्रकाशन नीति के अनुसार समाप्त हो चुकी सामग्री हटाएँ", "సైట్ ప్రచురణ విధానం ప్రకారం గడువు ముగిసిన కంటెంట్‌ను తొలగించండి"],

  // Pages: RTI
  ["Right to Information", "सूचना का अधिकार", "సమాచార హక్కు"],
  ["Access RTI application guidance, official government resources and public-information disclosures.", "आरटीआई आवेदन मार्गदर्शन, आधिकारिक सरकारी संसाधन और सार्वजनिक सूचना प्रकटीकरण देखें।", "ఆర్‌టీఐ దరఖాస్తు మార్గదర్శకత్వం, అధికారిక ప్రభుత్వ వనరులు మరియు ప్రజా సమాచార వెల్లడింపులను పొందండి."],
  ["Public information resources", "सार्वजनिक जानकारी संसाधन", "ప్రజా సమాచార వనరులు"],
  ["Find official RTI resources and general guidance for seeking information under the Right to Information Act, 2005. CFSL Hyderabad officer details and current proactive-disclosure documents should be added only after verification.", "सूचना का अधिकार अधिनियम, 2005 के अंतर्गत जानकारी माँगने के लिए आधिकारिक आरटीआई संसाधन और सामान्य मार्गदर्शन प्राप्त करें। सीएफएसएल हैदराबाद के अधिकारियों का विवरण और वर्तमान स्वतः प्रकटीकरण दस्तावेज़ सत्यापन के बाद ही जोड़े जाने चाहिए।", "సమాచార హక్కు చట్టం, 2005 కింద సమాచారం కోరడానికి అధికారిక ఆర్‌టీఐ వనరులు మరియు సాధారణ మార్గదర్శకత్వం పొందండి. సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ అధికారుల వివరాలు మరియు ప్రస్తుత స్వయంచాలక వెల్లడింపు పత్రాలను ధృవీకరణ తర్వాత మాత్రమే జోడించాలి."],
  ["RTI application routes and official forms", "आरटीआई आवेदन के मार्ग और आधिकारिक प्रपत्र", "ఆర్‌టీఐ దరఖాస్తు మార్గాలు మరియు అధికారిక ఫారమ్‌లు"],
  ["Current CPIO and First Appellate Authority details, once verified", "वर्तमान सीपीआईओ और प्रथम अपीलीय प्राधिकारी का विवरण, सत्यापन के बाद", "ప్రస్తుత సీపీఐఓ మరియు మొదటి అప్పీలేట్ అథారిటీ వివరాలు, ధృవీకరణ తర్వాత"],
  ["Section 4 proactive disclosures and official government resources", "धारा 4 के अंतर्गत स्वतः प्रकटीकरण और आधिकारिक सरकारी संसाधन", "సెక్షన్ 4 కింద స్వయంచాలక వెల్లడింపులు మరియు అధికారిక ప్రభుత్వ వనరులు"],

  // Pages: contact
  ["Contact the Laboratory", "प्रयोगशाला से संपर्क करें", "ప్రయోగశాలను సంప్రదించండి"],
  ["Official address and publicly listed communication channels for CFSL Hyderabad.", "सीएफएसएल हैदराबाद का आधिकारिक पता और सार्वजनिक रूप से सूचीबद्ध संचार माध्यम।", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ అధికారిక చిరునామా మరియు బహిరంగంగా జాబితా చేసిన కమ్యూనికేషన్ మార్గాలు."],
  ["Contact information", "संपर्क जानकारी", "సంప్రదింపు సమాచారం"],
  ["The contact page provides the laboratory address and a publicly listed institutional email. Telephone numbers, office hours and visitor requirements should be confirmed through current official channels before a visit.", "संपर्क पृष्ठ में प्रयोगशाला का पता और सार्वजनिक रूप से सूचीबद्ध संस्थागत ईमेल दिया गया है। दूरभाष संख्या, कार्यालय समय और आगंतुक संबंधी आवश्यकताओं की पुष्टि यात्रा से पहले वर्तमान आधिकारिक माध्यमों से करनी चाहिए।", "సంప్రదింపు పేజీ ప్రయోగశాల చిరునామా మరియు బహిరంగంగా జాబితా చేసిన సంస్థాగత ఇమెయిల్‌ను అందిస్తుంది. టెలిఫోన్ నంబర్లు, కార్యాలయ సమయాలు మరియు సందర్శకుల అవసరాలను సందర్శనకు ముందు ప్రస్తుత అధికారిక మార్గాల ద్వారా నిర్ధారించుకోవాలి."],
  ["Confirm the current procedure before forwarding evidence", "साक्ष्य भेजने से पहले वर्तमान प्रक्रिया की पुष्टि करें", "సాక్ష్యాలను పంపే ముందు ప్రస్తుత విధానాన్ని నిర్ధారించుకోండి"],
  ["Do not send confidential case material to an unverified email address", "गोपनीय मामले की सामग्री असत्यापित ईमेल पते पर न भेजें", "గోప్యమైన కేసు సామగ్రిని ధృవీకరించని ఇమెయిల్ చిరునామాకు పంపవద్దు"],
  ["Check the official website for current notices and contact updates", "वर्तमान सूचनाओं और संपर्क अपडेट के लिए आधिकारिक वेबसाइट देखें", "ప్రస్తుత నోటీసులు మరియు సంప్రదింపు నవీకరణల కోసం అధికారిక వెబ్‌సైట్‌ను చూడండి"],

  // Pages: quality policy
  ["Quality Policy", "गुणवत्ता नीति", "నాణ్యతా విధానం"],
  ["Committed to providing the highest quality forensic services to the public, law enforcement agencies and the criminal justice system.", "जनता, कानून प्रवर्तन एजेंसियों और आपराधिक न्याय प्रणाली को उच्चतम गुणवत्ता की फोरेंसिक सेवाएँ प्रदान करने के लिए प्रतिबद्ध।", "ప్రజలకు, చట్ట అమలు సంస్థలకు మరియు నేర న్యాయ వ్యవస్థకు అత్యుత్తమ నాణ్యత గల ఫోరెన్సిక్ సేవలను అందించడానికి కట్టుబడి ఉన్నాం."],
  ["Central Forensic Science Laboratory, Hyderabad is committed to provide the highest quality service available to the public, law enforcement agencies and members of the criminal justice system.", "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद जनता, कानून प्रवर्तन एजेंसियों और आपराधिक न्याय प्रणाली के सदस्यों को उपलब्ध उच्चतम गुणवत्ता की सेवा प्रदान करने के लिए प्रतिबद्ध है।", "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్ ప్రజలకు, చట్ట అమలు సంస్థలకు మరియు నేర న్యాయ వ్యవస్థ సభ్యులకు అందుబాటులో ఉన్న అత్యుత్తమ నాణ్యత గల సేవను అందించడానికి కట్టుబడి ఉంది."],
  ["To meet this goal, CFSL, Hyderabad has established a quality system in accordance with ISO/IEC 17025:2017 guidelines, to ensure that the Laboratory provides accurate, impartial, consistent and relevant reports to law enforcement and criminal justice organizations.", "इस लक्ष्य को पूरा करने के लिए, सीएफएसएल, हैदराबाद ने आईएसओ/आईईसी 17025:2017 दिशानिर्देशों के अनुसार एक गुणवत्ता प्रणाली स्थापित की है, ताकि प्रयोगशाला कानून प्रवर्तन और आपराधिक न्याय संगठनों को सटीक, निष्पक्ष, सुसंगत और प्रासंगिक रिपोर्ट प्रदान करे।", "ఈ లక్ష్యాన్ని సాధించడానికి, సీఎఫ్‌ఎస్‌ఎల్, హైదరాబాద్ ISO/IEC 17025:2017 మార్గదర్శకాలకు అనుగుణంగా నాణ్యతా వ్యవస్థను ఏర్పాటు చేసింది, తద్వారా ప్రయోగశాల చట్ట అమలు మరియు నేర న్యాయ సంస్థలకు కచ్చితమైన, నిష్పాక్షికమైన, స్థిరమైన మరియు సంబంధిత నివేదికలను అందిస్తుంది."],
  ["Accuracy — Providing accurate forensic examination results and reports.", "सटीकता — सटीक फोरेंसिक परीक्षण परिणाम और रिपोर्ट प्रदान करना।", "కచ్చితత్వం — కచ్చితమైన ఫోరెన్సిక్ పరీక్ష ఫలితాలు మరియు నివేదికలను అందించడం."],
  ["Impartiality — Maintaining impartiality in forensic analysis and reporting.", "निष्पक्षता — फोरेंसिक विश्लेषण और रिपोर्टिंग में निष्पक्षता बनाए रखना।", "నిష్పాక్షికత — ఫోరెన్సిక్ విశ్లేషణ మరియు నివేదికలలో నిష్పాక్షికతను కాపాడటం."],
  ["Consistency — Ensuring consistent quality in laboratory services.", "सुसंगतता — प्रयोगशाला सेवाओं में एकसमान गुणवत्ता सुनिश्चित करना।", "స్థిరత్వం — ప్రయోగశాల సేవలలో స్థిరమైన నాణ్యతను నిర్ధారించడం."],
  ["Relevance — Providing relevant reports to law enforcement and criminal justice organizations.", "प्रासंगिकता — कानून प्रवर्तन और आपराधिक न्याय संगठनों को प्रासंगिक रिपोर्ट प्रदान करना।", "సంబంధితత — చట్ట అమలు మరియు నేర న్యాయ సంస్థలకు సంబంధిత నివేదికలను అందించడం."],
  ["Quality Standards — Maintaining a quality system in accordance with ISO/IEC 17025:2017 guidelines.", "गुणवत्ता मानक — आईएसओ/आईईसी 17025:2017 दिशानिर्देशों के अनुसार गुणवत्ता प्रणाली बनाए रखना।", "నాణ్యతా ప్రమాణాలు — ISO/IEC 17025:2017 మార్గదర్శకాలకు అనుగుణంగా నాణ్యతా వ్యవస్థను నిర్వహించడం."],

  // Pages: director
  ["Greetings From The Director", "निदेशक की ओर से शुभकामनाएँ", "డైరెక్టర్ నుండి శుభాకాంక్షలు"],
  ["A message from the Director of CFSL Hyderabad.", "सीएफएसएल हैदराबाद के निदेशक का संदेश।", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ డైరెక్టర్ సందేశం."],
  ["Message from the Director", "निदेशक का संदेश", "డైరెక్టర్ సందేశం"],

  // Pages: acknowledgement
  ["Acknowledgement", "आभार", "కృతజ్ఞతలు"],
  ["Recognition of the people and organisations contributing to the laboratory and this website.", "प्रयोगशाला और इस वेबसाइट में योगदान देने वाले लोगों और संगठनों की सराहना।", "ప్రయోగశాల మరియు ఈ వెబ్‌సైట్‌కు తోడ్పడుతున్న వ్యక్తులు మరియు సంస్థలకు గుర్తింపు."],
  ["The Central Forensic Science Laboratory, Hyderabad acknowledges the professional contribution of its scientific, technical, administrative and support personnel in carrying out the laboratory’s responsibilities.", "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद प्रयोगशाला के दायित्वों के निर्वहन में अपने वैज्ञानिक, तकनीकी, प्रशासनिक और सहायक कर्मियों के पेशेवर योगदान का आभार व्यक्त करती है।", "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్ ప్రయోగశాల బాధ్యతల నిర్వహణలో తన శాస్త్రీయ, సాంకేతిక, పరిపాలనా మరియు సహాయక సిబ్బంది వృత్తిపరమైన తోడ్పాటును గుర్తిస్తోంది."],
  ["This website is intended to make institutional information more accessible to the public. The final list of contributors and formal acknowledgements will be added after confirmation by the laboratory.", "इस वेबसाइट का उद्देश्य संस्थागत जानकारी को जनता के लिए अधिक सुलभ बनाना है। योगदानकर्ताओं की अंतिम सूची और औपचारिक आभार प्रयोगशाला की पुष्टि के बाद जोड़े जाएँगे।", "ఈ వెబ్‌సైట్ సంస్థాగత సమాచారాన్ని ప్రజలకు మరింత అందుబాటులోకి తీసుకురావడానికి ఉద్దేశించబడింది. తోడ్పడినవారి తుది జాబితా మరియు అధికారిక కృతజ్ఞతలు ప్రయోగశాల నిర్ధారణ తర్వాత జోడించబడతాయి."],
  ["Scientific and technical personnel", "वैज्ञानिक और तकनीकी कर्मी", "శాస్త్రీయ మరియు సాంకేతిక సిబ్బంది"],
  ["Administrative and support teams", "प्रशासनिक और सहायक दल", "పరిపాలనా మరియు సహాయక బృందాలు"],
  ["Website contributors — details to be confirmed", "वेबसाइट योगदानकर्ता — विवरण की पुष्टि की जानी है", "వెబ్‌సైట్ తోడ్పడినవారు — వివరాలు నిర్ధారించాలి"],

  // Pages: prominent cases
  ["Prominent Cases", "प्रमुख मामले", "ప్రముఖ కేసులు"],
  ["Publicly shareable information about notable forensic casework and scientific contributions.", "उल्लेखनीय फोरेंसिक मामलों और वैज्ञानिक योगदान के बारे में सार्वजनिक रूप से साझा करने योग्य जानकारी।", "ప్రముఖ ఫోరెన్సిక్ కేసు పని మరియు శాస్త్రీయ తోడ్పాటు గురించి బహిరంగంగా పంచుకోదగిన సమాచారం."],
  ["Details will be added only for cases approved for public communication. Case information must respect confidentiality, privacy, court restrictions and the integrity of ongoing investigations.", "विवरण केवल उन्हीं मामलों के लिए जोड़े जाएँगे जिन्हें सार्वजनिक संचार के लिए अनुमोदित किया गया है। मामले की जानकारी में गोपनीयता, निजता, न्यायालय के प्रतिबंधों और चल रही जाँच की अखंडता का सम्मान किया जाना चाहिए।", "బహిరంగ ప్రకటనకు ఆమోదించిన కేసులకు మాత్రమే వివరాలు జోడించబడతాయి. కేసు సమాచారం గోప్యత, వ్యక్తిగత గోప్యత, కోర్టు ఆంక్షలు మరియు కొనసాగుతున్న దర్యాప్తుల సమగ్రతను గౌరవించాలి."],
  ["Approved case summaries to be added", "अनुमोदित मामलों के सारांश जोड़े जाएँगे", "ఆమోదిత కేసు సారాంశాలు జోడించబడతాయి"],
  ["No confidential evidence or identifying case details will be published without authorisation", "अधिकार प्राप्त किए बिना कोई गोपनीय साक्ष्य या मामले की पहचान संबंधी जानकारी प्रकाशित नहीं की जाएगी", "అనుమతి లేకుండా గోప్యమైన సాక్ష్యాలు లేదా కేసును గుర్తించే వివరాలు ప్రచురించబడవు"],
];

const table = new Map(entries.map(([en, hi, te]) => [en, { hi, te }]));

/** Translate one English string from site-content.ts. Falls back to English. */
export function tx(en: string, lang: Lang): string {
  if (lang === "en") return en;
  return table.get(en)?.[lang] ?? en;
}

const EN_MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const EN_ABBR = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
const MONTHS: Record<"hi" | "te", { full: string[]; short: string[] }> = {
  hi: {
    full: ["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"],
    short: ["जन","फर","मार्च","अप्रै","मई","जून","जुला","अग","सित","अक्टू","नव","दिस"],
  },
  te: {
    full: ["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"],
    short: ["జన","ఫిబ్","మార్చి","ఏప్రి","మే","జూన్","జూలై","ఆగ","సెప్టెం","అక్టో","నవం","డిసెం"],
  },
};

export function localizeDate(date: string, lang: Lang) {
  if (lang === "en") return date;
  const m = date.match(/^(\d+)\s+([A-Za-z]+)\s+(\d{4})$/);
  const i = m ? EN_MONTHS.indexOf(m[2]) : -1;
  return m && i >= 0 ? `${m[1]} ${MONTHS[lang].full[i]} ${m[3]}` : date;
}

export function localizeQuickLinks(lang: Lang) {
  return quickLinks.map((q) => ({ ...q, title: tx(q.title, lang), subtitle: tx(q.subtitle, lang) }));
}

export function localizeEvents(lang: Lang) {
  return events.map((e) => ({ ...e, title: tx(e.title, lang), description: tx(e.description, lang) }));
}

/** `id` is built from the English title so anchor links keep working in every language. */
export function localizeDivisions(lang: Lang) {
  return divisions.map((d) => ({
    ...d,
    id: `division-${d.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`,
    title: tx(d.title, lang),
    description: tx(d.description, lang),
  }));
}

export function localizeNotices(lang: Lang) {
  return notices.map((n) => {
    const i = EN_ABBR.indexOf(n.month);
    return {
      ...n,
      month: lang !== "en" && i >= 0 ? MONTHS[lang].short[i] : n.month,
      type: tx(n.type, lang),
      title: tx(n.title, lang),
      summary: tx(n.summary, lang),
      date: localizeDate(n.date, lang),
    };
  });
}

export function localizePage(slug: string, lang: Lang) {
  const p = pages[slug];
  if (!p) return undefined;
  return {
    title: tx(p.title, lang),
    intro: tx(p.intro, lang),
    heading: tx(p.heading, lang),
    paragraphs: p.paragraphs.map((s) => tx(s, lang)),
    bullets: p.bullets.map((s) => tx(s, lang)),
  };
}
