import type { Lang, Localized } from "../lib/i18n";
import { localizeDate } from "./site-content-i18n";

const L = (en: string, hi: string, te: string): Localized => ({ en, hi, te });

export const nt = {
  breadcrumbsAria: L("Breadcrumbs", "ब्रेडक्रंब", "బ్రెడ్‌క్రంబ్స్"),
  navAria: L("Notice board categories", "सूचना पट्ट श्रेणियाँ", "నోటీసు బోర్డు వర్గాలు"),
  kicker: L("CFSL Hyderabad · Notice Board", "सीएफएसएल हैदराबाद · सूचना पट्ट", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ · నోటీసు బోర్డు"),
  newsEmptyTitle: L("No announcements published yet", "अभी तक कोई घोषणा प्रकाशित नहीं हुई", "ఇంకా ఏ ప్రకటనలు ప్రచురించబడలేదు"),
  newsEmptyText: L(
    "News updates and institutional announcements will be displayed here when they are officially published and approved for public communication.",
    "समाचार अपडेट और संस्थागत घोषणाएँ आधिकारिक रूप से प्रकाशित और सार्वजनिक संचार के लिए अनुमोदित होने पर यहाँ दिखाई जाएँगी।",
    "వార్తా నవీకరణలు మరియు సంస్థాగత ప్రకటనలు అధికారికంగా ప్రచురించబడి, ప్రజా ప్రకటనకు ఆమోదం పొందిన తర్వాత ఇక్కడ ప్రదర్శించబడతాయి.",
  ),
  vacEmptyTitle: L("Recruitment information", "भर्ती संबंधी जानकारी", "నియామక సమాచారం"),
  vacEmptyText: L(
    "Official vacancy notifications, recruitment advertisements and related documents will be published in this section after verification.",
    "आधिकारिक रिक्ति अधिसूचनाएँ, भर्ती विज्ञापन और संबंधित दस्तावेज़ सत्यापन के बाद इस अनुभाग में प्रकाशित किए जाएँगे।",
    "అధికారిక ఖాళీ నోటిఫికేషన్లు, నియామక ప్రకటనలు మరియు సంబంధిత పత్రాలు ధృవీకరణ తర్వాత ఈ విభాగంలో ప్రచురించబడతాయి.",
  ),
  vacEmptyInfo: L(
    "This section has not yet been populated with recruitment notices. This does not confirm whether recruitment opportunities are currently open or closed.",
    "इस अनुभाग में अभी तक भर्ती सूचनाएँ नहीं जोड़ी गई हैं। इससे यह पुष्टि नहीं होती कि भर्ती के अवसर वर्तमान में खुले हैं या बंद।",
    "ఈ విభాగంలో ఇంకా నియామక నోటీసులు జోడించబడలేదు. నియామక అవకాశాలు ప్రస్తుతం తెరిచి ఉన్నాయా లేదా మూసివేయబడ్డాయా అని ఇది నిర్ధారించదు.",
  ),
  recruitmentNotification: L("Recruitment Notification", "भर्ती अधिसूचना", "నియామక నోటిఫికేషన్"),
  open: L("Open", "खुला", "తెరిచి ఉంది"),
  closed: L("Closed", "बंद", "మూసివేయబడింది"),
  publishedDate: L("Published Date", "प्रकाशन तिथि", "ప్రచురణ తేదీ"),
  lastDate: L("Last Date to Apply", "आवेदन की अंतिम तिथि", "దరఖాస్తుకు చివరి తేదీ"),
  viewNotification: L("View Official Notification", "आधिकारिक अधिसूचना देखें", "అధికారిక నోటిఫికేషన్ చూడండి"),
  sourceNote: L(
    "External websites are maintained by their respective organisations. Please refer to the original source for current information, instructions and updates.",
    "बाहरी वेबसाइटों का रखरखाव संबंधित संगठनों द्वारा किया जाता है। वर्तमान जानकारी, निर्देशों और अपडेट के लिए कृपया मूल स्रोत देखें।",
    "బాహ్య వెబ్‌సైట్లను సంబంధిత సంస్థలు నిర్వహిస్తాయి. ప్రస్తుత సమాచారం, సూచనలు మరియు నవీకరణల కోసం దయచేసి అసలు మూలాన్ని చూడండి.",
  ),
};

// Titles for the three categories come from navLabel() in ui-text.ts
export const categoryText = {
  "latest-news": {
    intro: L(
      "Stay informed about announcements, activities and important updates from CFSL Hyderabad.",
      "सीएफएसएल हैदराबाद की घोषणाओं, गतिविधियों और महत्वपूर्ण अपडेट के बारे में जानकारी प्राप्त करते रहें।",
      "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ ప్రకటనలు, కార్యకలాపాలు మరియు ముఖ్యమైన నవీకరణల గురించి తెలుసుకుంటూ ఉండండి.",
    ),
    heading: L("News & Announcements", "समाचार और घोषणाएँ", "వార్తలు & ప్రకటనలు"),
    description: L(
      "Updates and announcements relating to the laboratory and its activities.",
      "प्रयोगशाला और उसकी गतिविधियों से संबंधित अपडेट और घोषणाएँ।",
      "ప్రయోగశాల మరియు దాని కార్యకలాపాలకు సంబంధించిన నవీకరణలు మరియు ప్రకటనలు.",
    ),
  },
  vacancy: {
    intro: L(
      "Information about recruitment opportunities, vacancies and related employment notifications.",
      "भर्ती के अवसरों, रिक्तियों और संबंधित रोज़गार अधिसूचनाओं की जानकारी।",
      "నియామక అవకాశాలు, ఖాళీలు మరియు సంబంధిత ఉద్యోగ నోటిఫికేషన్ల సమాచారం.",
    ),
    heading: L("Recruitment & Vacancies", "भर्ती और रिक्तियाँ", "నియామకాలు & ఖాళీలు"),
    description: L(
      "Find recruitment-related announcements and official vacancy notifications.",
      "भर्ती से संबंधित घोषणाएँ और आधिकारिक रिक्ति अधिसूचनाएँ देखें।",
      "నియామక సంబంధిత ప్రకటనలు మరియు అధికారిక ఖాళీ నోటిఫికేషన్లను చూడండి.",
    ),
  },
  "important-links": {
    intro: L(
      "Access useful official websites, government resources and institutional information.",
      "उपयोगी आधिकारिक वेबसाइटों, सरकारी संसाधनों और संस्थागत जानकारी तक पहुँचें।",
      "ఉపయోగకరమైన అధికారిక వెబ్‌సైట్లు, ప్రభుత్వ వనరులు మరియు సంస్థాగత సమాచారాన్ని పొందండి.",
    ),
    heading: L("Useful Resources & Official Websites", "उपयोगी संसाधन और आधिकारिक वेबसाइटें", "ఉపయోగకరమైన వనరులు & అధికారిక వెబ్‌సైట్లు"),
    description: L(
      "A collection of relevant government and institutional resources.",
      "संबंधित सरकारी और संस्थागत संसाधनों का संग्रह।",
      "సంబంధిత ప్రభుత్వ మరియు సంస్థాగత వనరుల సమాహారం.",
    ),
  },
} satisfies Record<string, { intro: Localized; heading: Localized; description: Localized }>;

// Same order as `officialLinks` in the page
export const linkText = [
  {
    title: L("CFSL Hyderabad", "सीएफएसएल हैदराबाद", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్"),
    category: L("Official Laboratory Website", "प्रयोगशाला की आधिकारिक वेबसाइट", "ప్రయోగశాల అధికారిక వెబ్‌సైట్"),
    description: L(
      "Visit the official website of the Central Forensic Science Laboratory, Hyderabad.",
      "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद की आधिकारिक वेबसाइट पर जाएँ।",
      "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్ అధికారిక వెబ్‌సైట్‌ను సందర్శించండి.",
    ),
    label: L("Visit Website", "वेबसाइट देखें", "వెబ్‌సైట్ సందర్శించండి"),
  },
  {
    title: L("Ministry of Home Affairs", "गृह मंत्रालय", "హోం మంత్రిత్వ శాఖ"),
    category: L("Government of India", "भारत सरकार", "భారత ప్రభుత్వం"),
    description: L(
      "Access information, announcements, policies and official resources published by the Ministry of Home Affairs.",
      "गृह मंत्रालय द्वारा प्रकाशित जानकारी, घोषणाएँ, नीतियाँ और आधिकारिक संसाधन देखें।",
      "హోం మంత్రిత్వ శాఖ ప్రచురించిన సమాచారం, ప్రకటనలు, విధానాలు మరియు అధికారిక వనరులను పొందండి.",
    ),
    label: L("Visit Ministry Website", "मंत्रालय की वेबसाइट देखें", "మంత్రిత్వ శాఖ వెబ్‌సైట్ సందర్శించండి"),
  },
  {
    title: L("National Portal of India", "भारत का राष्ट्रीय पोर्टल", "భారత జాతీయ పోర్టల్"),
    category: L("Government Information", "सरकारी जानकारी", "ప్రభుత్వ సమాచారం"),
    description: L(
      "Explore government information and services, including the institutional listing for CFSL Hyderabad.",
      "सीएफएसएल हैदराबाद की संस्थागत सूची सहित सरकारी जानकारी और सेवाएँ देखें।",
      "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ సంస్థాగత జాబితాతో సహా ప్రభుత్వ సమాచారం మరియు సేవలను అన్వేషించండి.",
    ),
    label: L("Visit National Portal", "राष्ट्रीय पोर्टल देखें", "జాతీయ పోర్టల్ సందర్శించండి"),
  },
  {
    title: L("India Science, Technology & Innovation", "इंडिया साइंस, टेक्नोलॉजी एंड इनोवेशन", "ఇండియా సైన్స్, టెక్నాలజీ & ఇన్నోవేషన్"),
    category: L("Institutional Directory", "संस्थागत निर्देशिका", "సంస్థాగత డైరెక్టరీ"),
    description: L(
      "View the institutional profile and publicly listed details of CFSL Hyderabad.",
      "सीएफएसएल हैदराबाद का संस्थागत परिचय और सार्वजनिक रूप से सूचीबद्ध विवरण देखें।",
      "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ సంస్థాగత ప్రొఫైల్ మరియు బహిరంగంగా జాబితా చేసిన వివరాలను చూడండి.",
    ),
    label: L("View Institution Profile", "संस्था का परिचय देखें", "సంస్థ ప్రొఫైల్ చూడండి"),
  },
  {
    title: L("Central Government RTI Online Portal", "केंद्र सरकार का आरटीआई ऑनलाइन पोर्टल", "కేంద్ర ప్రభుత్వ ఆర్‌టీఐ ఆన్‌లైన్ పోర్టల్"),
    category: L("Public Information", "सार्वजनिक जानकारी", "ప్రజా సమాచారం"),
    description: L(
      "Access the Central Government RTI Online service for eligible public authorities and applications.",
      "पात्र सार्वजनिक प्राधिकरणों और आवेदनों के लिए केंद्र सरकार की आरटीआई ऑनलाइन सेवा का उपयोग करें।",
      "అర్హత కలిగిన ప్రజా అధికార సంస్థలు మరియు దరఖాస్తుల కోసం కేంద్ర ప్రభుత్వ ఆర్‌టీఐ ఆన్‌లైన్ సేవను పొందండి.",
    ),
    label: L("Open RTI Portal", "आरटीआई पोर्टल खोलें", "ఆర్‌టీఐ పోర్టల్ తెరవండి"),
  },
];

// Vacancy text, keyed by vacancy id. Add an entry whenever you add a vacancy.
const vacancyOverlay: Record<string, { hi: { postName: string; description: string }; te: { postName: string; description: string } }> = {
  "recruitment-2026-01": {
    hi: {
      postName: "कनिष्ठ वैज्ञानिक अधिकारी",
      description: "कनिष्ठ वैज्ञानिक अधिकारी के पद के लिए भर्ती अधिसूचना। पात्रता, योग्यताओं और आवेदन निर्देशों के लिए आधिकारिक विज्ञापन देखें।",
    },
    te: {
      postName: "జూనియర్ సైంటిఫిక్ ఆఫీసర్",
      description: "జూనియర్ సైంటిఫిక్ ఆఫీసర్ పోస్టుకు నియామక నోటిఫికేషన్. అర్హత, విద్యార్హతలు మరియు దరఖాస్తు సూచనల కోసం అధికారిక ప్రకటనను చూడండి.",
    },
  },
};

export function localizeVacancy<T extends { id: string; postName: string; description: string; publishedDate: string; lastDate: string }>(
  v: T,
  lang: Lang,
): T {
  if (lang === "en") return v;
  return {
    ...v,
    ...vacancyOverlay[v.id]?.[lang],
    publishedDate: localizeDate(v.publishedDate, lang),
    lastDate: localizeDate(v.lastDate, lang),
  };
}