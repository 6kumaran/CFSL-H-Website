import type { Localized } from "../lib/i18n";

const L = (en: string, hi: string, te: string): Localized => ({ en, hi, te });

export const common = {
  draftKicker: L("CFSL Hyderabad · Draft content", "सीएफएसएल हैदराबाद · प्रारूप सामग्री", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ · ముసాయిదా కంటెంట్"),
};

export const rti = {
  kicker: L("Public information · RTI Act, 2005", "सार्वजनिक जानकारी · आरटीआई अधिनियम, 2005", "ప్రజా సమాచారం · ఆర్‌టీఐ చట్టం, 2005"),
  title: L("Right to Information", "सूचना का अधिकार", "సమాచార హక్కు"),
  intro: L(
    "The Right to Information Act, 2005 provides a legal framework for citizens to request information held by public authorities, subject to the Act and its exemptions. This page brings together official RTI resources and application guidance relevant to CFSL Hyderabad.",
    "सूचना का अधिकार अधिनियम, 2005 नागरिकों को सार्वजनिक प्राधिकरणों के पास उपलब्ध जानकारी माँगने के लिए एक कानूनी ढाँचा प्रदान करता है, जो अधिनियम और उसकी छूटों के अधीन है। यह पृष्ठ सीएफएसएल हैदराबाद से संबंधित आधिकारिक आरटीआई संसाधनों और आवेदन मार्गदर्शन को एक स्थान पर प्रस्तुत करता है।",
    "సమాచార హక్కు చట్టం, 2005 ప్రజా అధికార సంస్థల వద్ద ఉన్న సమాచారాన్ని కోరడానికి పౌరులకు చట్టపరమైన చట్రాన్ని అందిస్తుంది; ఇది చట్టం మరియు దాని మినహాయింపులకు లోబడి ఉంటుంది. ఈ పేజీ సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్‌కు సంబంధించిన అధికారిక ఆర్‌టీఐ వనరులు మరియు దరఖాస్తు మార్గదర్శకత్వాన్ని ఒకచోట చేరుస్తుంది.",
  ),
  notice: L(
    "Please use the official documents and links below. The current names and contact details of CFSL Hyderabad’s designated Central Public Information Officer (CPIO) and First Appellate Authority (FAA) still need to be confirmed from a current official disclosure before they are published here.",
    "कृपया नीचे दिए गए आधिकारिक दस्तावेज़ों और लिंक का उपयोग करें। सीएफएसएल हैदराबाद के नामित केंद्रीय जन सूचना अधिकारी (सीपीआईओ) और प्रथम अपीलीय प्राधिकारी (एफएए) के वर्तमान नाम और संपर्क विवरण यहाँ प्रकाशित करने से पहले वर्तमान आधिकारिक प्रकटीकरण से पुष्ट किए जाने बाकी हैं।",
    "దయచేసి క్రింద ఉన్న అధికారిక పత్రాలు మరియు లింకులను ఉపయోగించండి. సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ నియమిత కేంద్ర ప్రజా సమాచార అధికారి (సీపీఐఓ) మరియు మొదటి అప్పీలేట్ అథారిటీ (ఎఫ్‌ఏఏ) ప్రస్తుత పేర్లు మరియు సంప్రదింపు వివరాలను ఇక్కడ ప్రచురించే ముందు ప్రస్తుత అధికారిక వెల్లడింపు నుండి ధృవీకరించాల్సి ఉంది.",
  ),
  processKicker: L("How to proceed", "आगे कैसे बढ़ें", "ఎలా కొనసాగాలి"),
  processTitle: L("Making an RTI request", "आरटीआई अनुरोध करना", "ఆర్‌టీఐ అభ్యర్థన చేయడం"),
  processIntro: L(
    "Use this general checklist, and follow the current instructions issued by the relevant public authority.",
    "इस सामान्य जाँच-सूची का उपयोग करें और संबंधित सार्वजनिक प्राधिकरण द्वारा जारी वर्तमान निर्देशों का पालन करें।",
    "ఈ సాధారణ చెక్‌లిస్ట్‌ను ఉపయోగించండి మరియు సంబంధిత ప్రజా అధికార సంస్థ జారీ చేసిన ప్రస్తుత సూచనలను అనుసరించండి.",
  ),
  steps: [
    {
      title: L("Identify the information", "जानकारी की पहचान करें", "సమాచారాన్ని గుర్తించండి"),
      text: L(
        "Describe the specific record or information you are seeking as clearly as possible.",
        "आप जो विशिष्ट रिकॉर्ड या जानकारी चाहते हैं, उसका यथासंभव स्पष्ट वर्णन करें।",
        "మీరు కోరుతున్న నిర్దిష్ట రికార్డు లేదా సమాచారాన్ని వీలైనంత స్పష్టంగా వివరించండి.",
      ),
    },
    {
      title: L("Choose the appropriate submission route", "उपयुक्त प्रस्तुति मार्ग चुनें", "తగిన సమర్పణ మార్గాన్ని ఎంచుకోండి"),
      text: L(
        "Review the CFSL-hosted application form or check whether CFSL Hyderabad is available as a public authority on the Central Government RTI Online portal.",
        "सीएफएसएल द्वारा उपलब्ध कराए गए आवेदन प्रपत्र की समीक्षा करें या जाँचें कि क्या सीएफएसएल हैदराबाद केंद्र सरकार के आरटीआई ऑनलाइन पोर्टल पर सार्वजनिक प्राधिकरण के रूप में उपलब्ध है।",
        "సీఎఫ్‌ఎస్‌ఎల్ అందించిన దరఖాస్తు ఫారమ్‌ను పరిశీలించండి లేదా కేంద్ర ప్రభుత్వ ఆర్‌టీఐ ఆన్‌లైన్ పోర్టల్‌లో సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ ప్రజా అధికార సంస్థగా అందుబాటులో ఉందో లేదో తనిఖీ చేయండి.",
      ),
    },
    {
      title: L("Check the current fee and payment instructions", "वर्तमान शुल्क और भुगतान निर्देश जाँचें", "ప్రస్తుత రుసుము మరియు చెల్లింపు సూచనలను తనిఖీ చేయండి"),
      text: L(
        "Follow the latest official instructions. Do not rely on old payment details or incomplete fields in a downloaded form without confirmation.",
        "नवीनतम आधिकारिक निर्देशों का पालन करें। डाउनलोड किए गए प्रपत्र में पुराने भुगतान विवरण या अधूरे क्षेत्रों पर पुष्टि के बिना भरोसा न करें।",
        "తాజా అధికారిక సూచనలను అనుసరించండి. డౌన్‌లోడ్ చేసిన ఫారమ్‌లోని పాత చెల్లింపు వివరాలు లేదా అసంపూర్ణ ఫీల్డ్‌లపై నిర్ధారణ లేకుండా ఆధారపడవద్దు.",
      ),
    },
    {
      title: L("Keep a copy and track the response", "प्रति रखें और उत्तर पर नज़र रखें", "ఒక కాపీని ఉంచుకోండి మరియు ప్రతిస్పందనను ట్రాక్ చేయండి"),
      text: L(
        "Retain the application, proof of submission and any acknowledgement. Use the official portal or contact route applicable to your submission.",
        "आवेदन, प्रस्तुति का प्रमाण और कोई भी पावती सुरक्षित रखें। अपनी प्रस्तुति पर लागू आधिकारिक पोर्टल या संपर्क माध्यम का उपयोग करें।",
        "దరఖాస్తు, సమర్పణ రుజువు మరియు ఏదైనా రసీదును భద్రపరచుకోండి. మీ సమర్పణకు వర్తించే అధికారిక పోర్టల్ లేదా సంప్రదింపు మార్గాన్ని ఉపయోగించండి.",
      ),
    },
  ],
  officersKicker: L("Institutional contacts", "संस्थागत संपर्क", "సంస్థాగత సంప్రదింపులు"),
  officersTitle: L("RTI officers and appeals", "आरटीआई अधिकारी और अपील", "ఆర్‌టీఐ అధికారులు మరియు అప్పీళ్లు"),
  officerPanelTitle: L("Designated CPIO and First Appellate Authority", "नामित सीपीआईओ और प्रथम अपीलीय प्राधिकारी", "నియమిత సీపీఐఓ మరియు మొదటి అప్పీలేట్ అథారిటీ"),
  officerPanelText: L(
    "Current officer names, designations, office addresses and contact details have not been independently confirmed for this page. They should be added from CFSL Hyderabad’s latest official RTI disclosure or order, rather than inferred from general contact information.",
    "वर्तमान अधिकारियों के नाम, पदनाम, कार्यालय के पते और संपर्क विवरण इस पृष्ठ के लिए स्वतंत्र रूप से पुष्ट नहीं किए गए हैं। इन्हें सामान्य संपर्क जानकारी से अनुमान लगाने के बजाय सीएफएसएल हैदराबाद के नवीनतम आधिकारिक आरटीआई प्रकटीकरण या आदेश से जोड़ा जाना चाहिए।",
    "ప్రస్తుత అధికారుల పేర్లు, హోదాలు, కార్యాలయ చిరునామాలు మరియు సంప్రదింపు వివరాలు ఈ పేజీ కోసం స్వతంత్రంగా నిర్ధారించబడలేదు. వాటిని సాధారణ సంప్రదింపు సమాచారం నుండి ఊహించకుండా, సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ తాజా అధికారిక ఆర్‌టీఐ వెల్లడింపు లేదా ఉత్తర్వు నుండి జోడించాలి.",
  ),
  appealNote: L(
    "For appeal stages, applicable time limits and procedure, consult the current Act, rules and official instructions. This page is a public-information guide, not legal advice.",
    "अपील के चरणों, लागू समय-सीमाओं और प्रक्रिया के लिए वर्तमान अधिनियम, नियमों और आधिकारिक निर्देशों को देखें। यह पृष्ठ एक सार्वजनिक-जानकारी मार्गदर्शिका है, कानूनी सलाह नहीं।",
    "అప్పీలు దశలు, వర్తించే కాలపరిమితులు మరియు విధానం కోసం ప్రస్తుత చట్టం, నిబంధనలు మరియు అధికారిక సూచనలను చూడండి. ఈ పేజీ ప్రజా-సమాచార మార్గదర్శి మాత్రమే, న్యాయ సలహా కాదు.",
  ),
  disclosuresKicker: L("Public records", "सार्वजनिक अभिलेख", "ప్రజా రికార్డులు"),
  disclosuresTitle: L("Proactive disclosures", "स्वतः प्रकटीकरण", "స్వయంచాలక వెల్లడింపులు"),
  disclosuresIntro: L(
    "Public authorities publish specified categories of information under Section 4 of the RTI Act. The latest CFSL Hyderabad disclosure documents should be linked here when their current versions are verified.",
    "सार्वजनिक प्राधिकरण आरटीआई अधिनियम की धारा 4 के अंतर्गत जानकारी की निर्दिष्ट श्रेणियाँ प्रकाशित करते हैं। सीएफएसएल हैदराबाद के नवीनतम प्रकटीकरण दस्तावेज़ उनके वर्तमान संस्करण सत्यापित होने पर यहाँ लिंक किए जाने चाहिए।",
    "ప్రజా అధికార సంస్థలు ఆర్‌టీఐ చట్టంలోని సెక్షన్ 4 కింద నిర్దిష్ట సమాచార వర్గాలను ప్రచురిస్తాయి. సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ తాజా వెల్లడింపు పత్రాల ప్రస్తుత వెర్షన్లు ధృవీకరించిన తర్వాత వాటిని ఇక్కడ లింక్ చేయాలి.",
  ),
  disclosures: [
    {
      title: L("Organisation and functions", "संगठन और कार्य", "సంస్థ మరియు విధులు"),
      text: L(
        "Approved details about the laboratory’s organisation, functions and duties.",
        "प्रयोगशाला के संगठन, कार्यों और कर्तव्यों के बारे में अनुमोदित विवरण।",
        "ప్రయోగశాల సంస్థ, విధులు మరియు బాధ్యతల గురించి ఆమోదిత వివరాలు.",
      ),
    },
    {
      title: L("Officer directory", "अधिकारी निर्देशिका", "అధికారుల డైరెక్టరీ"),
      text: L(
        "Verified public office designations and official contact details, including RTI officers.",
        "आरटीआई अधिकारियों सहित सत्यापित सार्वजनिक पदनाम और आधिकारिक संपर्क विवरण।",
        "ఆర్‌టీఐ అధికారులతో సహా ధృవీకరించిన ప్రజా కార్యాలయ హోదాలు మరియు అధికారిక సంప్రదింపు వివరాలు.",
      ),
    },
    {
      title: L("Rules, manuals and records", "नियम, नियमावली और अभिलेख", "నియమాలు, మాన్యువల్స్ మరియు రికార్డులు"),
      text: L(
        "Applicable rules, procedures, manuals and categories of records available for public access.",
        "लागू नियम, प्रक्रियाएँ, नियमावली और सार्वजनिक पहुँच के लिए उपलब्ध अभिलेखों की श्रेणियाँ।",
        "వర్తించే నియమాలు, విధానాలు, మాన్యువల్స్ మరియు ప్రజలకు అందుబాటులో ఉన్న రికార్డుల వర్గాలు.",
      ),
    },
    {
      title: L("Budget and public information", "बजट और सार्वजनिक जानकारी", "బడ్జెట్ మరియు ప్రజా సమాచారం"),
      text: L(
        "Relevant disclosures and reports released by the laboratory or its administrative department.",
        "प्रयोगशाला या उसके प्रशासनिक विभाग द्वारा जारी संबंधित प्रकटीकरण और रिपोर्ट।",
        "ప్రయోగశాల లేదా దాని పరిపాలనా శాఖ విడుదల చేసిన సంబంధిత వెల్లడింపులు మరియు నివేదికలు.",
      ),
    },
  ],
  disclosuresNote: L(
    "These are categories to organise the section, not a claim that each document is currently available on this website. Link only to approved, up-to-date documents.",
    "ये अनुभाग को व्यवस्थित करने की श्रेणियाँ हैं, यह दावा नहीं कि प्रत्येक दस्तावेज़ इस वेबसाइट पर वर्तमान में उपलब्ध है। केवल अनुमोदित, अद्यतन दस्तावेज़ों से ही लिंक करें।",
    "ఇవి ఈ విభాగాన్ని క్రమబద్ధీకరించే వర్గాలు మాత్రమే, ప్రతి పత్రం ప్రస్తుతం ఈ వెబ్‌సైట్‌లో అందుబాటులో ఉందనే వాదన కాదు. ఆమోదిత, తాజా పత్రాలకు మాత్రమే లింక్ చేయండి.",
  ),
  resourcesKicker: L("Official links", "आधिकारिक लिंक", "అధికారిక లింకులు"),
  resourcesTitle: L("RTI forms and resources", "आरटीआई प्रपत्र और संसाधन", "ఆర్‌టీఐ ఫారమ్‌లు మరియు వనరులు"),
  resourcesIntro: L(
    "Open the relevant government source for the Act, application form, portal or rules.",
    "अधिनियम, आवेदन प्रपत्र, पोर्टल या नियमों के लिए संबंधित सरकारी स्रोत खोलें।",
    "చట్టం, దరఖాస్తు ఫారమ్, పోర్టల్ లేదా నియమాల కోసం సంబంధిత ప్రభుత్వ మూలాన్ని తెరవండి.",
  ),
  // Same order as the `resources` config in page.tsx
  resources: [
    {
      category: L("Legislation", "विधान", "శాసనం"),
      title: L("Right to Information Act, 2005", "सूचना का अधिकार अधिनियम, 2005", "సమాచార హక్కు చట్టం, 2005"),
      description: L("Read the Act on the official India Code website.", "आधिकारिक इंडिया कोड वेबसाइट पर अधिनियम पढ़ें।", "అధికారిక ఇండియా కోడ్ వెబ్‌సైట్‌లో చట్టాన్ని చదవండి."),
      action: L("Read the Act", "अधिनियम पढ़ें", "చట్టాన్ని చదవండి"),
    },
    {
      category: L("CFSL Hyderabad form", "सीएफएसएल हैदराबाद प्रपत्र", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ ఫారమ్"),
      title: L("RTI application form", "आरटीआई आवेदन प्रपत्र", "ఆర్‌టీఐ దరఖాస్తు ఫారమ్"),
      description: L(
        "An application form is hosted on the CFSL Hyderabad official website. Check the form and current submission instructions before using it.",
        "एक आवेदन प्रपत्र सीएफएसएल हैदराबाद की आधिकारिक वेबसाइट पर उपलब्ध है। इसका उपयोग करने से पहले प्रपत्र और वर्तमान प्रस्तुति निर्देश जाँच लें।",
        "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ అధికారిక వెబ్‌సైట్‌లో దరఖాస్తు ఫారమ్ ఉంచబడింది. దీన్ని ఉపయోగించే ముందు ఫారమ్ మరియు ప్రస్తుత సమర్పణ సూచనలను తనిఖీ చేయండి.",
      ),
      action: L("Open application form", "आवेदन प्रपत्र खोलें", "దరఖాస్తు ఫారమ్ తెరవండి"),
    },
    {
      category: L("Online service", "ऑनलाइन सेवा", "ఆన్‌లైన్ సేవ"),
      title: L("Central Government RTI Online portal", "केंद्र सरकार का आरटीआई ऑनलाइन पोर्टल", "కేంద్ర ప్రభుత్వ ఆర్‌టీఐ ఆన్‌లైన్ పోర్టల్"),
      description: L(
        "Submit an online request or first appeal for eligible Central Government public authorities. Confirm that the relevant authority is available on the portal before filing.",
        "पात्र केंद्र सरकार के सार्वजनिक प्राधिकरणों के लिए ऑनलाइन अनुरोध या प्रथम अपील प्रस्तुत करें। दाखिल करने से पहले पुष्टि करें कि संबंधित प्राधिकरण पोर्टल पर उपलब्ध है।",
        "అర్హత కలిగిన కేంద్ర ప్రభుత్వ ప్రజా అధికార సంస్థల కోసం ఆన్‌లైన్ అభ్యర్థన లేదా మొదటి అప్పీలు సమర్పించండి. దాఖలు చేసే ముందు సంబంధిత అధికార సంస్థ పోర్టల్‌లో అందుబాటులో ఉందో నిర్ధారించుకోండి.",
      ),
      action: L("Open RTI Online", "आरटीआई ऑनलाइन खोलें", "ఆర్‌టీఐ ఆన్‌లైన్ తెరవండి"),
    },
    {
      category: L("Guidance and rules", "मार्गदर्शन और नियम", "మార్గదర్శకత్వం మరియు నియమాలు"),
      title: L("Central Information Commission — RTI Act and Rules", "केंद्रीय सूचना आयोग — आरटीआई अधिनियम और नियम", "కేంద్ర సమాచార కమిషన్ — ఆర్‌టీఐ చట్టం మరియు నియమాలు"),
      description: L(
        "Find the Act and official RTI rules and notifications published by the Central Information Commission.",
        "केंद्रीय सूचना आयोग द्वारा प्रकाशित अधिनियम और आधिकारिक आरटीआई नियम एवं अधिसूचनाएँ देखें।",
        "కేంద్ర సమాచార కమిషన్ ప్రచురించిన చట్టం మరియు అధికారిక ఆర్‌టీఐ నియమాలు, నోటిఫికేషన్లను చూడండి.",
      ),
      action: L("View Act and rules", "अधिनियम और नियम देखें", "చట్టం మరియు నియమాలను చూడండి"),
    },
  ],
  sourceNote: L(
    "External resources are hosted by India Code, CFSL Hyderabad, the Department of Personnel and Training, or the Central Information Commission. Please check each source for the latest version and submission requirements. Officer details and proactive disclosure files should be reviewed before this page is treated as a complete official RTI directory.",
    "बाहरी संसाधन इंडिया कोड, सीएफएसएल हैदराबाद, कार्मिक एवं प्रशिक्षण विभाग या केंद्रीय सूचना आयोग द्वारा उपलब्ध कराए गए हैं। कृपया नवीनतम संस्करण और प्रस्तुति आवश्यकताओं के लिए प्रत्येक स्रोत की जाँच करें। इस पृष्ठ को पूर्ण आधिकारिक आरटीआई निर्देशिका मानने से पहले अधिकारियों के विवरण और स्वतः प्रकटीकरण फ़ाइलों की समीक्षा की जानी चाहिए।",
    "బాహ్య వనరులను ఇండియా కోడ్, సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్, సిబ్బంది మరియు శిక్షణ శాఖ లేదా కేంద్ర సమాచార కమిషన్ అందిస్తున్నాయి. తాజా వెర్షన్ మరియు సమర్పణ అవసరాల కోసం దయచేసి ప్రతి మూలాన్ని తనిఖీ చేయండి. ఈ పేజీని సంపూర్ణ అధికారిక ఆర్‌టీఐ డైరెక్టరీగా పరిగణించే ముందు అధికారుల వివరాలు మరియు స్వయంచాలక వెల్లడింపు ఫైళ్లను సమీక్షించాలి.",
  ),
};

export const director = {
  imgAlt: L("Deepak Midha, Director of CFSL Hyderabad", "दीपक मिढ़ा, निदेशक, सीएफएसएल हैदराबाद", "దీపక్ మిధా, డైరెక్టర్, సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్"),
  name: L("Deepak Midha", "दीपक मिढ़ा", "దీపక్ మిధా"),
  role: L("Director, CFSL Hyderabad", "निदेशक, सीएफएसएल हैदराबाद", "డైరెక్టర్, సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్"),
  kicker: L("A message from the Director", "निदेशक का संदेश", "డైరెక్టర్ సందేశం"),
  title: L("Committed to scientific service and justice", "वैज्ञानिक सेवा और न्याय के प्रति प्रतिबद्ध", "శాస్త్రీయ సేవ మరియు న్యాయానికి కట్టుబడి"),
  paragraphs: [
    L(
      "It is my pleasure to welcome you to the website of the Central Forensic Science Laboratory, Hyderabad.",
      "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद की वेबसाइट पर आपका स्वागत करते हुए मुझे प्रसन्नता हो रही है।",
      "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్ వెబ్‌సైట్‌కు మిమ్మల్ని స్వాగతించడం నాకు సంతోషంగా ఉంది.",
    ),
    L(
      "Forensic science plays an important role in supporting the justice system through objective, reliable and scientifically grounded examination. Our laboratory remains committed to professionalism, impartiality, integrity and the careful examination of material referred to us.",
      "न्यायालयिक विज्ञान वस्तुनिष्ठ, विश्वसनीय और वैज्ञानिक रूप से सुदृढ़ परीक्षण के माध्यम से न्याय प्रणाली को सहयोग देने में महत्वपूर्ण भूमिका निभाता है। हमारी प्रयोगशाला व्यावसायिकता, निष्पक्षता, सत्यनिष्ठा और हमें भेजी गई सामग्री की सावधानीपूर्वक जाँच के प्रति प्रतिबद्ध है।",
      "ఫోరెన్సిక్ సైన్స్ లక్ష్యనిష్ఠ, నమ్మదగిన మరియు శాస్త్రీయ ఆధారిత పరీక్ష ద్వారా న్యాయ వ్యవస్థకు తోడ్పడటంలో ముఖ్యమైన పాత్ర పోషిస్తుంది. మా ప్రయోగశాల వృత్తి నైపుణ్యం, నిష్పాక్షికత, నిజాయితీ మరియు మాకు పంపిన సామగ్రిని జాగ్రత్తగా పరీక్షించడానికి కట్టుబడి ఉంది.",
    ),
    L(
      "We recognise the importance of working closely with investigating agencies and other stakeholders, while maintaining appropriate scientific standards and the confidentiality required in forensic work. We also value transparency and the responsible sharing of institutional information with the public.",
      "हम जाँच एजेंसियों और अन्य हितधारकों के साथ निकट सहयोग से कार्य करने के महत्व को समझते हैं, साथ ही उपयुक्त वैज्ञानिक मानकों और न्यायालयिक कार्य के लिए आवश्यक गोपनीयता को बनाए रखते हैं। हम पारदर्शिता और जनता के साथ संस्थागत जानकारी साझा करने की जिम्मेदार प्रथा को भी महत्व देते हैं।",
      "దర్యాప్తు సంస్థలు మరియు ఇతర భాగస్వాములతో సన్నిహితంగా పనిచేయడం ముఖ్యమని మేము గుర్తిస్తున్నాము, అదే సమయంలో తగిన శాస్త్రీయ ప్రమాణాలను మరియు ఫోరెన్సిక్ పనికి అవసరమైన గోప్యతను పాటిస్తాము. పారదర్శకతను మరియు సంస్థాగత సమాచారాన్ని ప్రజలతో బాధ్యతాయుతంగా పంచుకోవడాన్ని కూడా మేము విలువైనవిగా భావిస్తాము.",
    ),
    L(
      "Through continued learning, collaboration and the responsible use of scientific methods and technology, we strive to strengthen the quality of forensic services and contribute to the fair administration of justice.",
      "निरंतर सीखने, सहयोग और वैज्ञानिक पद्धतियों तथा प्रौद्योगिकी के जिम्मेदार उपयोग के माध्यम से, हम फोरेंसिक सेवाओं की गुणवत्ता को सुदृढ़ करने और न्याय के निष्पक्ष प्रशासन में योगदान देने का प्रयास करते हैं।",
      "నిరంతర అభ్యాసం, సహకారం మరియు శాస్త్రీయ పద్ధతులు, సాంకేతికత బాధ్యతాయుత వినియోగం ద్వారా, ఫోరెన్సిక్ సేవల నాణ్యతను బలోపేతం చేయడానికి మరియు న్యాయం నిష్పాక్షికంగా అందించడానికి తోడ్పడటానికి మేము కృషి చేస్తున్నాము.",
    ),
  ],
  signoff: L("With best wishes,", "शुभकामनाओं सहित,", "శుభాకాంక్షలతో,"),
};

export const overview = {
  kicker: L("Government of India · Ministry of Home Affairs", "भारत सरकार · गृह मंत्रालय", "భారత ప్రభుత్వం · హోం మంత్రిత్వ శాఖ"),
  title: L("Scientific examination in support of justice", "न्याय के समर्थन में वैज्ञानिक परीक्षण", "న్యాయానికి తోడ్పడే శాస్త్రీయ పరీక్ష"),
  p1: L(
    "The Central Forensic Science Laboratory (CFSL), Hyderabad is a Government of India laboratory associated with the Ministry of Home Affairs and the Directorate of Forensic Science Services. Its institutional purpose is to support forensic science through the scientific examination of evidence referred for analysis.",
    "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला (सीएफएसएल), हैदराबाद भारत सरकार की एक प्रयोगशाला है जो गृह मंत्रालय और न्यायालयिक विज्ञान सेवा निदेशालय से संबद्ध है। इसका संस्थागत उद्देश्य विश्लेषण के लिए भेजे गए साक्ष्यों के वैज्ञानिक परीक्षण के माध्यम से न्यायालयिक विज्ञान को सहयोग देना है।",
    "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల (సీఎఫ్‌ఎస్‌ఎల్), హైదరాబాద్ భారత ప్రభుత్వ ప్రయోగశాల, ఇది హోం మంత్రిత్వ శాఖ మరియు ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్‌తో అనుబంధించబడింది. విశ్లేషణ కోసం పంపిన సాక్ష్యాల శాస్త్రీయ పరీక్ష ద్వారా ఫోరెన్సిక్ సైన్స్‌కు తోడ్పడటం దీని సంస్థాగత ఉద్దేశ్యం.",
  ),
  p2: L(
    "This page provides a concise introduction to the laboratory. Detailed information about individual divisions, service procedures, notices, public information and contact channels remains available in the dedicated sections of this website.",
    "यह पृष्ठ प्रयोगशाला का संक्षिप्त परिचय देता है। अलग-अलग प्रभागों, सेवा प्रक्रियाओं, सूचनाओं, सार्वजनिक जानकारी और संपर्क माध्यमों की विस्तृत जानकारी इस वेबसाइट के समर्पित अनुभागों में उपलब्ध है।",
    "ఈ పేజీ ప్రయోగశాలకు సంక్షిప్త పరిచయాన్ని అందిస్తుంది. వ్యక్తిగత విభాగాలు, సేవా విధానాలు, నోటీసులు, ప్రజా సమాచారం మరియు సంప్రదింపు మార్గాల గురించి వివరమైన సమాచారం ఈ వెబ్‌సైట్‌లోని ప్రత్యేక విభాగాలలో అందుబాటులో ఉంది.",
  ),
  imgAlt: L(
    "Signboard at the Central Forensic Science Laboratory, Ramanthapur, Hyderabad",
    "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, रामंथापुर, हैदराबाद का साइनबोर्ड",
    "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, రామంతాపూర్, హైదరాబాద్ వద్ద సైన్‌బోర్డు",
  ),
  caption: L(
    "Central Forensic Science Laboratory · Ramanthapur, Hyderabad",
    "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला · रामंथापुर, हैदराबाद",
    "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల · రామంతాపూర్, హైదరాబాద్",
  ),
  factsAria: L("Institutional details", "संस्थागत विवरण", "సంస్థాగత వివరాలు"),
  fact1Label: L("Administrative affiliation", "प्रशासनिक संबद्धता", "పరిపాలనా అనుబంధం"),
  fact1Title: L("Government of India", "भारत सरकार", "భారత ప్రభుత్వం"),
  fact1Text: L(
    "Ministry of Home Affairs · Directorate of Forensic Science Services",
    "गृह मंत्रालय · न्यायालयिक विज्ञान सेवा निदेशालय",
    "హోం మంత్రిత్వ శాఖ · ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్",
  ),
  fact2Label: L("Location", "स्थान", "స్థానం"),
  fact2Title: L("Ramanthapur, Hyderabad", "रामंथापुर, हैदराबाद", "రామంతాపూర్, హైదరాబాద్"),
  fact2Text: L("Hyderabad – 500 013, Telangana, India", "हैदराबाद – 500 013, तेलंगाना, भारत", "హైదరాబాద్ – 500 013, తెలంగాణ, భారతదేశం"),
  fact3Label: L("Accreditation", "प्रत्यायन", "అక్రెడిటేషన్"),
  fact3Title: L("ISO/IEC 17025 (2017)", "ISO/IEC 17025 (2017)", "ISO/IEC 17025 (2017)"),
  fact3Text: L(
    "The signboard displays “An ISO - IEC 17025 (2017) Accredited Laboratory.” Current accreditation status and applicable standard edition should be verified before publication as a current claim.",
    "साइनबोर्ड पर “आईएसओ - आईईसी 17025 (2017) मान्यता प्राप्त प्रयोगशाला” प्रदर्शित है। वर्तमान प्रत्यायन स्थिति और लागू मानक संस्करण को वर्तमान दावे के रूप में प्रकाशित करने से पहले सत्यापित किया जाना चाहिए।",
    "సైన్‌బోర్డుపై “ISO - IEC 17025 (2017) గుర్తింపు పొందిన ప్రయోగశాల” అని ప్రదర్శించబడింది. ప్రస్తుత అక్రెడిటేషన్ స్థితి మరియు వర్తించే ప్రమాణ ఎడిషన్‌ను ప్రస్తుత వాదనగా ప్రచురించే ముందు ధృవీకరించాలి.",
  ),
  roleKicker: L("Institutional role", "संस्थागत भूमिका", "సంస్థాగత పాత్ర"),
  roleTitle: L("Evidence examined through scientific methods", "वैज्ञानिक पद्धतियों से साक्ष्यों का परीक्षण", "శాస్త్రీయ పద్ధతుల ద్వారా సాక్ష్యాల పరీక్ష"),
  roleText: L(
    "Forensic science applies scientific methods to the examination of material connected with investigations. The findings of an examination may assist investigators and courts in assessing evidence. The exact nature of an examination depends on the material received, the questions referred and the laboratory's confirmed capabilities.",
    "न्यायालयिक विज्ञान जाँच से जुड़ी सामग्री के परीक्षण में वैज्ञानिक पद्धतियाँ लागू करता है। परीक्षण के निष्कर्ष जाँचकर्ताओं और न्यायालयों को साक्ष्य का आकलन करने में सहायता कर सकते हैं। परीक्षण की वास्तविक प्रकृति प्राप्त सामग्री, भेजे गए प्रश्नों और प्रयोगशाला की पुष्ट क्षमताओं पर निर्भर करती है।",
    "ఫోరెన్సిక్ సైన్స్ దర్యాప్తులకు సంబంధించిన సామగ్రి పరీక్షకు శాస్త్రీయ పద్ధతులను వర్తింపజేస్తుంది. పరీక్ష ఫలితాలు సాక్ష్యాలను అంచనా వేయడంలో దర్యాప్తు అధికారులకు మరియు న్యాయస్థానాలకు సహాయపడవచ్చు. పరీక్ష యొక్క ఖచ్చితమైన స్వభావం అందిన సామగ్రి, సూచించిన ప్రశ్నలు మరియు ప్రయోగశాల నిర్ధారిత సామర్థ్యాలపై ఆధారపడి ఉంటుంది.",
  ),
  exploreKicker: L("Explore this website", "इस वेबसाइट को देखें", "ఈ వెబ్‌సైట్‌ను అన్వేషించండి"),
  exploreTitle: L("Find the information you need", "अपनी आवश्यक जानकारी खोजें", "మీకు కావలసిన సమాచారాన్ని కనుగొనండి"),
  exploreIntro: L(
    "Use these shortcuts to open dedicated pages for detailed information, without repeating their contents here.",
    "विस्तृत जानकारी के लिए समर्पित पृष्ठ खोलने हेतु इन शॉर्टकट का उपयोग करें; उनकी सामग्री यहाँ दोहराई नहीं गई है।",
    "వివరమైన సమాచారం కోసం ప్రత్యేక పేజీలను తెరవడానికి ఈ షార్ట్‌కట్‌లను ఉపయోగించండి; వాటి కంటెంట్ ఇక్కడ పునరావృతం చేయబడలేదు.",
  ),
  // Same order as the `shortcuts` config in page.tsx
  shortcuts: [
    {
      title: L("Scientific Divisions", "वैज्ञानिक प्रभाग", "శాస్త్రీయ విభాగాలు"),
      description: L(
        "Explore the laboratory's scientific disciplines and areas of expertise.",
        "प्रयोगशाला के वैज्ञानिक विषयों और विशेषज्ञता के क्षेत्रों को देखें।",
        "ప్రయోగశాల శాస్త్రీయ విభాగాలు మరియు నైపుణ్య రంగాలను అన్వేషించండి.",
      ),
    },
    {
      title: L("Services", "सेवाएँ", "సేవలు"),
      description: L(
        "Find service information and case-forwarding guidance.",
        "सेवा संबंधी जानकारी और मामला-अग्रेषण मार्गदर्शन प्राप्त करें।",
        "సేవా సమాచారం మరియు కేసు ఫార్వార్డింగ్ మార్గదర్శకత్వాన్ని పొందండి.",
      ),
    },
    {
      title: L("Notices & Updates", "सूचनाएँ और अपडेट", "నోటీసులు & నవీకరణలు"),
      description: L(
        "See public announcements and institutional updates.",
        "सार्वजनिक घोषणाएँ और संस्थागत अपडेट देखें।",
        "ప్రజా ప్రకటనలు మరియు సంస్థాగత నవీకరణలను చూడండి.",
      ),
    },
    {
      title: L("Public Information", "सार्वजनिक जानकारी", "ప్రజా సమాచారం"),
      description: L(
        "Access RTI-related information and public resources.",
        "आरटीआई संबंधी जानकारी और सार्वजनिक संसाधनों तक पहुँचें।",
        "ఆర్‌టీఐ సంబంధిత సమాచారం మరియు ప్రజా వనరులను పొందండి.",
      ),
    },
  ],
  openSection: L("Open section", "अनुभाग खोलें", "విభాగాన్ని తెరవండి"),
  contactBefore: L(
    "For the laboratory's address and official communication channels, visit ",
    "प्रयोगशाला के पते और आधिकारिक संचार माध्यमों के लिए देखें ",
    "ప్రయోగశాల చిరునామా మరియు అధికారిక కమ్యూనికేషన్ మార్గాల కోసం చూడండి ",
  ),
  contactAfter: L(".", "।", "."),
};

export const contact = {
  kicker: L("Central Forensic Science Laboratory · Hyderabad", "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला · हैदराबाद", "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల · హైదరాబాద్"),
  title: L("Contact information", "संपर्क जानकारी", "సంప్రదింపు సమాచారం"),
  intro: L(
    "Use the publicly listed institutional address and email below to contact CFSL Hyderabad. For case submissions, evidence forwarding or visits, confirm the applicable procedure with the laboratory before sending material or travelling to the premises.",
    "सीएफएसएल हैदराबाद से संपर्क करने के लिए नीचे दिए गए सार्वजनिक रूप से सूचीबद्ध संस्थागत पते और ईमेल का उपयोग करें। मामले प्रस्तुत करने, साक्ष्य भेजने या यात्रा के लिए, सामग्री भेजने या परिसर में जाने से पहले प्रयोगशाला से लागू प्रक्रिया की पुष्टि करें।",
    "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్‌ను సంప్రదించడానికి క్రింద బహిరంగంగా జాబితా చేసిన సంస్థాగత చిరునామా మరియు ఇమెయిల్‌ను ఉపయోగించండి. కేసు సమర్పణలు, సాక్ష్యాల ఫార్వార్డింగ్ లేదా సందర్శనల కోసం, సామగ్రి పంపే ముందు లేదా ప్రాంగణానికి వెళ్ళే ముందు ప్రయోగశాలతో వర్తించే విధానాన్ని నిర్ధారించుకోండి.",
  ),
  addrLabel: L("Postal address", "डाक पता", "తపాలా చిరునామా"),
  addrMinistry: L("Ministry of Home Affairs, Government of India", "गृह मंत्रालय, भारत सरकार", "హోం మంత్రిత్వ శాఖ, భారత ప్రభుత్వం"),
  addrLine3: L("Ramanthapur, Amberpet Post", "रामंथापुर, अंबरपेट डाकघर", "రామంతాపూర్, అంబర్‌పేట్ పోస్ట్"),
  directions: L("Get directions", "दिशा-निर्देश प्राप्त करें", "దిశలను పొందండి"),
  emailLabel: L("Publicly listed email", "सार्वजनिक रूप से सूचीबद्ध ईमेल", "బహిరంగంగా జాబితా చేసిన ఇమెయిల్"),
  emailTitle: L("Email the laboratory", "प्रयोगशाला को ईमेल करें", "ప్రయోగశాలకు ఇమెయిల్ చేయండి"),
  emailNote: L(
    "This address is listed in the Government of India’s India Science, Technology & Innovation institutional directory. If your message is time-sensitive, verify the address through the official website as well.",
    "यह पता भारत सरकार की इंडिया साइंस, टेक्नोलॉजी एंड इनोवेशन संस्थागत निर्देशिका में सूचीबद्ध है। यदि आपका संदेश समय-संवेदनशील है, तो पते की पुष्टि आधिकारिक वेबसाइट से भी कर लें।",
    "ఈ చిరునామా భారత ప్రభుత్వ ఇండియా సైన్స్, టెక్నాలజీ & ఇన్నోవేషన్ సంస్థాగత డైరెక్టరీలో జాబితా చేయబడింది. మీ సందేశం సమయానికి సంబంధించినది అయితే, చిరునామాను అధికారిక వెబ్‌సైట్ ద్వారా కూడా ధృవీకరించండి.",
  ),
  webLabel: L("Official website", "आधिकारिक वेबसाइट", "అధికారిక వెబ్‌సైట్"),
  webTitle: L("CFSL Hyderabad online", "सीएफएसएल हैदराबाद ऑनलाइन", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ ఆన్‌లైన్"),
  webLink: L("Visit cfslhyd.gov.in", "cfslhyd.gov.in पर जाएँ", "cfslhyd.gov.in సందర్శించండి"),
  webNote: L(
    "The official site has recently displayed a maintenance notice, so some information may temporarily be unavailable.",
    "आधिकारिक साइट पर हाल ही में रखरखाव की सूचना प्रदर्शित हुई है, इसलिए कुछ जानकारी अस्थायी रूप से अनुपलब्ध हो सकती है।",
    "అధికారిక సైట్‌లో ఇటీవల నిర్వహణ నోటీసు కనిపించింది, కాబట్టి కొంత సమాచారం తాత్కాలికంగా అందుబాటులో ఉండకపోవచ్చు.",
  ),
  cautionLabel: L("Before visiting or sending evidence", "आने या साक्ष्य भेजने से पहले", "సందర్శించే లేదా సాక్ష్యాలు పంపే ముందు"),
  cautionTitle: L("Confirm the current procedure", "वर्तमान प्रक्रिया की पुष्टि करें", "ప్రస్తుత విధానాన్ని నిర్ధారించుకోండి"),
  cautionText: L(
    "Current telephone numbers, public visiting hours and appointment requirements could not be confirmed from a current official contact page. Please verify these details with the laboratory before visiting. Do not send physical evidence or confidential case material to an unverified email address.",
    "वर्तमान दूरभाष संख्याएँ, सार्वजनिक आगंतुक समय और अपॉइंटमेंट संबंधी आवश्यकताएँ किसी वर्तमान आधिकारिक संपर्क पृष्ठ से पुष्ट नहीं की जा सकीं। कृपया आने से पहले प्रयोगशाला से इन विवरणों की पुष्टि करें। भौतिक साक्ष्य या गोपनीय मामले की सामग्री असत्यापित ईमेल पते पर न भेजें।",
    "ప్రస్తుత టెలిఫోన్ నంబర్లు, ప్రజా సందర్శన సమయాలు మరియు అపాయింట్‌మెంట్ అవసరాలను ప్రస్తుత అధికారిక సంప్రదింపు పేజీ నుండి నిర్ధారించలేకపోయాము. దయచేసి సందర్శించే ముందు ఈ వివరాలను ప్రయోగశాలతో ధృవీకరించండి. భౌతిక సాక్ష్యాలను లేదా గోప్యమైన కేసు సామగ్రిని ధృవీకరించని ఇమెయిల్ చిరునామాకు పంపవద్దు.",
  ),
  sourceNote: L(
    "Address and email cross-checked against the Government of India’s India Science, Technology & Innovation institutional directory. Contact details can change; this page should be reviewed periodically before being treated as the laboratory’s definitive public contact directory.",
    "पते और ईमेल का मिलान भारत सरकार की इंडिया साइंस, टेक्नोलॉजी एंड इनोवेशन संस्थागत निर्देशिका से किया गया है। संपर्क विवरण बदल सकते हैं; इस पृष्ठ को प्रयोगशाला की अंतिम सार्वजनिक संपर्क निर्देशिका मानने से पहले इसकी समय-समय पर समीक्षा की जानी चाहिए।",
    "చిరునామా మరియు ఇమెయిల్‌ను భారత ప్రభుత్వ ఇండియా సైన్స్, టెక్నాలజీ & ఇన్నోవేషన్ సంస్థాగత డైరెక్టరీతో సరిపోల్చారు. సంప్రదింపు వివరాలు మారవచ్చు; ఈ పేజీని ప్రయోగశాల నిర్ణయాత్మక ప్రజా సంప్రదింపు డైరెక్టరీగా పరిగణించే ముందు కాలానుగుణంగా సమీక్షించాలి.",
  ),
};