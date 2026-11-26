import type { Lang, Localized } from "../lib/i18n";

export const headerText = {
  govLine: {
    en: "Government of India · Ministry of Home Affairs · Directorate of Forensic Science Services",
    hi: "भारत सरकार · गृह मंत्रालय · न्यायालयिक विज्ञान सेवा निदेशालय",
    te: "భారత ప్రభుత్వం · హోం మంత్రిత్వ శాఖ · ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్",
  },
  accessibility: { en: "Accessibility", hi: "सुगम्यता", te: "యాక్సెసిబిలిటీ" },
  increaseText: { en: "Increase text size", hi: "टेक्स्ट का आकार बढ़ाएँ", te: "అక్షరాల పరిమాణం పెంచండి" },
  resetText: { en: "Reset text size", hi: "टेक्स्ट का आकार रीसेट करें", te: "అక్షరాల పరిమాణాన్ని రీసెట్ చేయండి" },
  contrast: { en: "Toggle high contrast", hi: "उच्च कंट्रास्ट चालू/बंद करें", te: "హై కాంట్రాస్ట్ ఆన్/ఆఫ్ చేయండి" },
  sitemap: { en: "Sitemap", hi: "साइटमैप", te: "సైట్‌మ్యాప్" },
  homeAria: { en: "CFSL Hyderabad home", hi: "सीएफएसएल हैदराबाद – मुखपृष्ठ", te: "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ – హోమ్" },
  emblemAlt: { en: "National Emblem", hi: "राष्ट्रीय प्रतीक", te: "జాతీయ చిహ్నం" },
  flagAlt: { en: "Flag of India", hi: "भारत का राष्ट्रध्वज", te: "భారత జాతీయ పతాకం" },
  brandTitle: {
    en: "Central Forensic Science Laboratory, Hyderabad",
    hi: "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद",
    te: "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్",
  },
  brandSubtitle: {
    en: "Directorate of Forensic Science Services",
    hi: "न्यायालयिक विज्ञान सेवा निदेशालय",
    te: "ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్",
  },
  mainNav: { en: "Main navigation", hi: "मुख्य नेविगेशन", te: "ప్రధాన నావిగేషన్" },
  menu: { en: "Menu", hi: "मेनू", te: "మెను" },
  close: { en: "Close", hi: "बंद करें", te: "మూసివేయండి" },
  search: { en: "Search the entire website", hi: "पूरी वेबसाइट में खोजें", te: "మొత్తం వెబ్‌సైట్‌లో వెతకండి" },
} satisfies Record<string, Localized>;

// Keyed by the existing English nav label, so site-content.ts stays untouched for now.
const navLabels: Record<string, Localized> = {
  Home: { en: "Home", hi: "होम", te: "హోమ్" },
  Overview: { en: "Overview", hi: "अवलोकन", te: "అవలోకనం" },
  "About Us": { en: "About Us", hi: "हमारे बारे में", te: "మా గురించి" },
  Divisions: { en: "Divisions", hi: "प्रभाग", te: "విభాగాలు" },
  Services: { en: "Services", hi: "सेवाएँ", te: "సేవలు" },
  "Notice Board": { en: "Notice Board", hi: "सूचना पट्ट", te: "నోటీసు బోర్డు" },
  RTI: { en: "RTI", hi: "सूचना का अधिकार", te: "సమాచార హక్కు" },
  "Contact Us": { en: "Contact Us", hi: "संपर्क करें", te: "మమ్మల్ని సంప్రదించండి" },
    "Quality Policy": { en: "Quality Policy", hi: "गुणवत्ता नीति", te: "నాణ్యతా విధానం" },
  "Greetings From The Director": { en: "Greetings From The Director", hi: "निदेशक की ओर से शुभकामनाएँ", te: "డైరెక్టర్ నుండి శుభాకాంక్షలు" },
  Acknowledgement: { en: "Acknowledgement", hi: "आभार", te: "కృతజ్ఞతలు" },
  "Prominent Cases": { en: "Prominent Cases", hi: "प्रमुख मामले", te: "ప్రముఖ కేసులు" },
  "Services Overview": { en: "Services Overview", hi: "सेवाओं का अवलोकन", te: "సేవల అవలోకనం" },
  Jurisdiction: { en: "Jurisdiction", hi: "अधिकार क्षेत्र", te: "అధికార పరిధి" },
  "Case Forwarding Checklist": { en: "Case Forwarding Checklist", hi: "मामला अग्रेषण जाँच-सूची", te: "కేసు ఫార్వార్డింగ్ చెక్‌లిస్ట్" },
  "Latest News": { en: "Latest News", hi: "ताज़ा समाचार", te: "తాజా వార్తలు" },
  Vacancy: { en: "Vacancy", hi: "रिक्तियाँ", te: "ఖాళీలు" },
  "Important Links": { en: "Important Links", hi: "महत्वपूर्ण लिंक", te: "ముఖ్యమైన లింకులు" },
};

export function navLabel(label: string, lang: Lang) {
  return navLabels[label]?.[lang] ?? label; // untranslated labels stay English
}
export const footerText = {
  aria: { en: "Site footer", hi: "साइट फ़ुटर", te: "సైట్ ఫుటర్" },
  brand: {
    en: "Central Forensic Science Laboratories",
    hi: "केंद्रीय न्यायालयिक विज्ञान प्रयोगशालाएँ",
    te: "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాలలు",
  },
  copy: {
    en: "Directorate of Forensic Science Services.",
    hi: "न्यायालयिक विज्ञान सेवा निदेशालय।",
    te: "ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్.",
  },
  quickAria: { en: "Footer quick links", hi: "फ़ुटर त्वरित लिंक", te: "ఫుటర్ క్విక్ లింకులు" },
  quickLinks: { en: "Quick links", hi: "त्वरित लिंक", te: "త్వరిత లింకులు" },
  about: { en: "About the Laboratory", hi: "प्रयोगशाला के बारे में", te: "ప్రయోగశాల గురించి" },
  divisions: { en: "Scientific Divisions", hi: "वैज्ञानिक प्रभाग", te: "శాస్త్రీయ విభాగాలు" },
  services: { en: "Services", hi: "सेवाएँ", te: "సేవలు" },
  notices: { en: "Notices & Updates", hi: "सूचनाएँ और अपडेट", te: "నోటీసులు & నవీకరణలు" },
  rti: { en: "Right to Information", hi: "सूचना का अधिकार", te: "సమాచార హక్కు" },
  contact: { en: "Contact", hi: "संपर्क", te: "సంప్రదింపు" },
  contactInfo: { en: "Contact & information", hi: "संपर्क एवं जानकारी", te: "సంప్రదింపు & సమాచారం" },
  location: {
    en: "CFSL Hyderabad, Telangana, India",
    hi: "सीएफएसएल हैदराबाद, तेलंगाना, भारत",
    te: "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్, తెలంగాణ, భారతదేశం",
  },
  emailPending: {
    en: "director.cfsl-hyd@gov.in",
    hi: "director.cfsl-hyd@gov.in",
    te: "director.cfsl-hyd@gov.in",
  },
  findUs: { en: "Find us", hi: "हमें खोजें", te: "మమ్మల్ని కనుగొనండి" },
  mapTitle: {
    en: "Map search for Central Forensic Science Laboratory, Hyderabad",
    hi: "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद के लिए मानचित्र खोज",
    te: "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్ కోసం మ్యాప్ శోధన",
  },
  openMaps: { en: "Open in Google Maps", hi: "गूगल मैप्स में खोलें", te: "గూగుల్ మ్యాప్స్‌లో తెరవండి" },
  org: { en: "CFSL Hyderabad", hi: "सीएफएसएल हैदराबाद", te: "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్" },
  lastUpdated: { en: "Last Updated : ", hi: "अंतिम अपडेट : ", te: "చివరిగా నవీకరించబడింది : " },
  backToTop: { en: "Back to top ↑", hi: "ऊपर जाएँ ↑", te: "పైకి వెళ్ళండి ↑" },
  backToTopAria: { en: "Back to top", hi: "ऊपर जाएँ", te: "పైకి వెళ్ళండి" },
} satisfies Record<string, Localized>;

export const splashText = {
  aria: {
    en: "CFSL, Hyderabad. Website loading.",
    hi: "सीएफएसएल, हैदराबाद। वेबसाइट लोड हो रही है।",
    te: "సీఎఫ్‌ఎస్‌ఎల్, హైదరాబాద్. వెబ్‌సైట్ లోడ్ అవుతోంది.",
  },
  logoAlt: {
    en: "Directorate of Forensic Science Services emblem",
    hi: "न्यायालयिक विज्ञान सेवा निदेशालय का प्रतीक",
    te: "ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్ చిహ్నం",
  },
  title: { en: "CFSL, Hyderabad", hi: "सीएफएसएल, हैदराबाद", te: "సీఎఫ్‌ఎస్‌ఎల్, హైదరాబాద్" },
} satisfies Record<string, Localized>;