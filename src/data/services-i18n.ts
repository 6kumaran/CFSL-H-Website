import type { Lang, Localized } from "../lib/i18n";

const L = (en: string, hi: string, te: string): Localized => ({ en, hi, te });

/* ───────────── Jurisdiction ───────────── */

export const jr = {
  metaDescription: L(
    "Map showing CFSL Hyderabad's regional jurisdiction across five southern states and two Union Territories.",
    "पाँच दक्षिणी राज्यों और दो केंद्र शासित प्रदेशों में सीएफएसएल हैदराबाद के क्षेत्रीय अधिकार क्षेत्र को दर्शाने वाला मानचित्र।",
    "ఐదు దక్షిణ రాష్ట్రాలు మరియు రెండు కేంద్రపాలిత ప్రాంతాలలో సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ ప్రాంతీయ అధికార పరిధిని చూపే మ్యాప్.",
  ),
  h1: L("Jurisdiction of CFSL, Hyderabad", "सीएफएसएल, हैदराबाद का अधिकार क्षेत्र", "సీఎఫ్‌ఎస్‌ఎల్, హైదరాబాద్ అధికార పరిధి"),
  subtitle: L(
    "Central Forensic Science Laboratory · Directorate of Forensic Science Services · Ministry of Home Affairs",
    "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला · न्यायालयिक विज्ञान सेवा निदेशालय · गृह मंत्रालय",
    "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల · ఫోరెన్సిక్ సైన్స్ సర్వీసెస్ డైరెక్టరేట్ · హోం మంత్రిత్వ శాఖ",
  ),
  breadcrumbsAria: L("Breadcrumbs", "ब्रेडक्रंब", "బ్రెడ్‌క్రంబ్స్"),
  kicker: L("Regional service coverage", "क्षेत्रीय सेवा कवरेज", "ప్రాంతీయ సేవా పరిధి"),
  heading: L("States & Union Territories served", "सेवा प्राप्त राज्य एवं केंद्र शासित प्रदेश", "సేవలు అందించే రాష్ట్రాలు & కేంద్రపాలిత ప్రాంతాలు"),
  intro: L(
    "Five southern states are highlighted across the full India map, with the service routes converging at CFSL Hyderabad.",
    "पूरे भारत के मानचित्र पर पाँच दक्षिणी राज्यों को उजागर किया गया है, जिनके सेवा मार्ग सीएफएसएल हैदराबाद पर मिलते हैं।",
    "మొత్తం భారత మ్యాప్‌లో ఐదు దక్షిణ రాష్ట్రాలు హైలైట్ చేయబడ్డాయి; సేవా మార్గాలు సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ వద్ద కలుస్తాయి.",
  ),
  svgTitle: L("India map showing CFSL Hyderabad jurisdiction", "सीएफएसएल हैदराबाद का अधिकार क्षेत्र दर्शाने वाला भारत का मानचित्र", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ అధికార పరిధిని చూపే భారత మ్యాప్"),
  svgDesc: L(
    "Full India state and Union Territory map. Andhra Pradesh, Telangana, Karnataka, Kerala and Tamil Nadu are highlighted in sequence. The CFSL Hyderabad marker appears first, followed by five subtle curved routes that briefly converge at the marker and then fade away.",
    "भारत के सभी राज्यों और केंद्र शासित प्रदेशों का मानचित्र। आंध्र प्रदेश, तेलंगाना, कर्नाटक, केरल और तमिलनाडु क्रम से उजागर होते हैं। पहले सीएफएसएल हैदराबाद का चिह्न दिखाई देता है, फिर पाँच हल्के वक्र मार्ग उस चिह्न पर कुछ देर के लिए मिलते हैं और फिर धीरे-धीरे लुप्त हो जाते हैं।",
    "భారతదేశంలోని అన్ని రాష్ట్రాలు మరియు కేంద్రపాలిత ప్రాంతాల మ్యాప్. ఆంధ్రప్రదేశ్, తెలంగాణ, కర్ణాటక, కేరళ మరియు తమిళనాడు వరుసగా హైలైట్ అవుతాయి. ముందుగా సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ గుర్తు కనిపిస్తుంది, తర్వాత ఐదు సన్నని వంపు మార్గాలు ఆ గుర్తు వద్ద కొద్దిసేపు కలిసి, ఆపై మాయమవుతాయి.",
  ),
  loading: L("Loading India map…", "भारत का मानचित्र लोड हो रहा है…", "భారత మ్యాప్ లోడ్ అవుతోంది…"),
  loadError: L(
    "India map data could not be loaded. Check that the GeoJSON file is in public/data.",
    "भारत के मानचित्र का डेटा लोड नहीं हो सका। जाँचें कि GeoJSON फ़ाइल public/data में है।",
    "భారత మ్యాప్ డేటాను లోడ్ చేయలేకపోయాము. GeoJSON ఫైల్ public/data లో ఉందో తనిఖీ చేయండి.",
  ),
  caption: L(
    "State and Union Territory boundaries are shown for geographic context. Arrows are illustrative service links, not travel routes.",
    "भौगोलिक संदर्भ के लिए राज्यों और केंद्र शासित प्रदेशों की सीमाएँ दिखाई गई हैं। तीर केवल उदाहरणात्मक सेवा संबंध हैं, यात्रा मार्ग नहीं।",
    "భౌగోళిక సందర్భం కోసం రాష్ట్రాలు మరియు కేంద్రపాలిత ప్రాంతాల సరిహద్దులు చూపబడ్డాయి. బాణాలు సూచనాత్మక సేవా సంబంధాలు మాత్రమే, ప్రయాణ మార్గాలు కాదు.",
  ),
  listAria: L("Jurisdiction list", "अधिकार क्षेत्र सूची", "అధికార పరిధి జాబితా"),
  summaryStrong: L(
    "Seven jurisdictions: 5 states and 2 Union Territories",
    "सात क्षेत्राधिकार: 5 राज्य और 2 केंद्र शासित प्रदेश",
    "ఏడు అధికార పరిధులు: 5 రాష్ట్రాలు మరియు 2 కేంద్రపాలిత ప్రాంతాలు",
  ),
  summaryLabel: L("CFSL Hyderabad:", "सीएफएसएल हैदराबाद:", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్:"),
  summaryPlace: L("Ramanthapur, Hyderabad, Telangana", "रामंथापुर, हैदराबाद, तेलंगाना", "రామంతాపూర్, హైదరాబాద్, తెలంగాణ"),
  disclaimer: L(
    "The highlighted coverage is reproduced from the jurisdiction reference supplied for this website. Confirm current official allocation before using it for case forwarding or legal purposes.",
    "उजागर किया गया कवरेज इस वेबसाइट के लिए उपलब्ध कराए गए अधिकार क्षेत्र संदर्भ से लिया गया है। मामला अग्रेषण या कानूनी प्रयोजनों के लिए उपयोग करने से पहले वर्तमान आधिकारिक आवंटन की पुष्टि करें।",
    "హైలైట్ చేసిన పరిధి ఈ వెబ్‌సైట్ కోసం అందించిన అధికార పరిధి సూచన నుండి తీసుకోబడింది. కేసు ఫార్వార్డింగ్ లేదా చట్టపరమైన అవసరాల కోసం ఉపయోగించే ముందు ప్రస్తుత అధికారిక కేటాయింపును నిర్ధారించుకోండి.",
  ),
};

/** Display names, in the same order as `jurisdictions` in jurisdiction-map.tsx */
export const jurisdictionNames: Localized[] = [
  L("Andhra Pradesh", "आंध्र प्रदेश", "ఆంధ్రప్రదేశ్"),
  L("Telangana", "तेलंगाना", "తెలంగాణ"),
  L("Karnataka", "कर्नाटक", "కర్ణాటక"),
  L("Kerala", "केरल", "కేరళ"),
  L("Tamil Nadu", "तमिलनाडु", "తమిళనాడు"),
  L("Puducherry (UT)", "पुडुचेरी (केंद्र शासित प्रदेश)", "పుదుచ్చేరి (కేంద్రపాలిత ప్రాంతం)"),
  L("Lakshadweep (UT)", "लक्षद्वीप (केंद्र शासित प्रदेश)", "లక్షద్వీప్ (కేంద్రపాలిత ప్రాంతం)"),
];

/** Width of the "CFSL Hyderabad" label box on the map (longer scripts need more room) */
export const mapLabelWidth: Record<Lang, number> = { en: 190, hi: 235, te: 255 };

/* ───────────── Case forwarding checklist ───────────── */

export const cf = {
  bannerText: L(
    "Guidelines and document requirements for forwarding cases to CFSL Hyderabad.",
    "सीएफएसएल हैदराबाद को मामले अग्रेषित करने के लिए दिशानिर्देश और दस्तावेज़ आवश्यकताएँ।",
    "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్‌కు కేసులను ఫార్వార్డ్ చేయడానికి మార్గదర్శకాలు మరియు పత్ర అవసరాలు.",
  ),
  eyebrow: L("Case Forwarding Guidelines", "मामला अग्रेषण दिशानिर्देश", "కేసు ఫార్వార్డింగ్ మార్గదర్శకాలు"),
  introTitle: L("Documents Required for Case Forwarding", "मामला अग्रेषण के लिए आवश्यक दस्तावेज़", "కేసు ఫార్వార్డింగ్ కోసం అవసరమైన పత్రాలు"),
  introText: L(
    "Before forwarding a case to the Central Forensic Science Laboratory, Hyderabad, please refer to the following document requirements and prepare the necessary supporting documents.",
    "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद को मामला अग्रेषित करने से पहले, कृपया निम्नलिखित दस्तावेज़ आवश्यकताएँ देखें और आवश्यक सहायक दस्तावेज़ तैयार करें।",
    "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్‌కు కేసును ఫార్వార్డ్ చేసే ముందు, దయచేసి క్రింది పత్ర అవసరాలను చూసి, అవసరమైన సహాయక పత్రాలను సిద్ధం చేసుకోండి.",
  ),
  s1Title: L("1. Case Forwarding Letter", "1. मामला अग्रेषण पत्र", "1. కేసు ఫార్వార్డింగ్ లేఖ"),
  s1Text: L(
    "Refer to the sample case forwarding letter provided below.",
    "नीचे दिए गए नमूना मामला अग्रेषण पत्र को देखें।",
    "క్రింద ఇచ్చిన నమూనా కేసు ఫార్వార్డింగ్ లేఖను చూడండి.",
  ),
  openPdfAria: L("Open Case Forwarding Letter PDF in a new tab", "मामला अग्रेषण पत्र PDF नए टैब में खोलें", "కేసు ఫార్వార్డింగ్ లేఖ PDF ను కొత్త ట్యాబ్‌లో తెరవండి"),
  pdfDocument: L("PDF Document", "PDF दस्तावेज़", "PDF పత్రం"),
  downloadPdf: L("Download PDF", "PDF डाउनलोड करें", "PDF డౌన్‌లోడ్ చేయండి"),
  s2Title: L("2. Documents Required", "2. आवश्यक दस्तावेज़", "2. అవసరమైన పత్రాలు"),
  s2Text: L(
    "The following supporting documents should be prepared for case forwarding.",
    "मामला अग्रेषण के लिए निम्नलिखित सहायक दस्तावेज़ तैयार किए जाने चाहिए।",
    "కేసు ఫార్వార్డింగ్ కోసం క్రింది సహాయక పత్రాలను సిద్ధం చేయాలి.",
  ),
  // Order matches the list in page.tsx
  requirements: [
    {
      title: L("Case Opening Document", "मामला खोलने का दस्तावेज़", "కేసు ప్రారంభ పత్రం"),
      text: L("Relevant case opening details and information.", "मामला खोलने से संबंधित विवरण और जानकारी।", "కేసు ప్రారంభానికి సంబంధించిన వివరాలు మరియు సమాచారం."),
    },
    {
      title: L("Case / FIR Copy", "मामले / एफआईआर की प्रति", "కేసు / ఎఫ్ఐఆర్ కాపీ"),
      text: L("A copy of the relevant case details or FIR.", "संबंधित मामले के विवरण या एफआईआर की प्रति।", "సంబంధిత కేసు వివరాలు లేదా ఎఫ్ఐఆర్ కాపీ."),
    },
    {
      title: L("Chain of Custody Document", "अभिरक्षा श्रृंखला दस्तावेज़", "కస్టడీ గొలుసు పత్రం"),
      text: L(
        "Documentation relating to the handling and transfer of submitted exhibits or evidence.",
        "प्रस्तुत वस्तुओं या साक्ष्यों के प्रबंधन और हस्तांतरण से संबंधित दस्तावेज़ीकरण।",
        "సమర్పించిన వస్తువులు లేదా సాక్ష్యాల నిర్వహణ మరియు బదిలీకి సంబంధించిన పత్రాలు.",
      ),
    },
  ],
  downloadZip: L("Download Sample ZIP", "नमूना ZIP डाउनलोड करें", "నమూనా ZIP డౌన్‌లోడ్ చేయండి"),
  preparingZip: L("Preparing ZIP…", "ZIP तैयार हो रही है…", "ZIP సిద్ధమవుతోంది…"),
  noteLabel: L("Please note:", "कृपया ध्यान दें:", "దయచేసి గమనించండి:"),
  noteText: L(
    "The documents provided are sample materials for reference purposes only. Please verify the latest applicable instructions and document requirements issued by CFSL Hyderabad before forwarding a case. This page does not replace official guidance.",
    "उपलब्ध कराए गए दस्तावेज़ केवल संदर्भ के लिए नमूना सामग्री हैं। मामला अग्रेषित करने से पहले कृपया सीएफएसएल हैदराबाद द्वारा जारी नवीनतम लागू निर्देशों और दस्तावेज़ आवश्यकताओं की पुष्टि करें। यह पृष्ठ आधिकारिक मार्गदर्शन का स्थान नहीं लेता।",
    "అందించిన పత్రాలు సూచన కోసం నమూనా సామగ్రి మాత్రమే. కేసును ఫార్వార్డ్ చేసే ముందు దయచేసి సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ జారీ చేసిన తాజా వర్తించే సూచనలు మరియు పత్ర అవసరాలను ధృవీకరించుకోండి. ఈ పేజీ అధికారిక మార్గదర్శకత్వానికి ప్రత్యామ్నాయం కాదు.",
  ),

  // Titles used in the ZIP readme, keyed by document id
  docTitles: {
    "case-opening": L("Case Opening", "मामला खोलना", "కేసు ప్రారంభం"),
    "case-fir": L("Case / FIR", "मामला / एफआईआर", "కేసు / ఎఫ్ఐఆర్"),
    "chain-of-custody": L("Chain of Custody", "अभिरक्षा श्रृंखला", "కస్టడీ గొలుసు"),
  } as Record<string, Localized>,

  preparing: L("Preparing sample documents…", "नमूना दस्तावेज़ तैयार हो रहे हैं…", "నమూనా పత్రాలు సిద్ధమవుతున్నాయి…"),
  done: L("Sample ZIP downloaded successfully.", "नमूना ZIP सफलतापूर्वक डाउनलोड हो गई।", "నమూనా ZIP విజయవంతంగా డౌన్‌లోడ్ అయింది."),
  failed: L("The ZIP could not be created. Please try again.", "ZIP नहीं बन सकी। कृपया पुनः प्रयास करें।", "ZIP సృష్టించలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి."),
  loadFailed: {
    en: (t: string) => `Could not load ${t}. Please try again.`,
    hi: (t: string) => `${t} लोड नहीं हो सका। कृपया पुनः प्रयास करें।`,
    te: (t: string) => `${t} లోడ్ చేయలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.`,
  } satisfies Record<Lang, (t: string) => string>,

  readme: {
    title: L("CFSL HYDERABAD - CASE FORWARDING", "सीएफएसएल हैदराबाद - मामला अग्रेषण", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ - కేసు ఫార్వార్డింగ్"),
    sub: L("SAMPLE DOCUMENTS", "नमूना दस्तावेज़", "నమూనా పత్రాలు"),
    included: L("Documents included:", "शामिल दस्तावेज़:", "చేర్చిన పత్రాలు:"),
    preparedOn: L("Prepared on:", "तैयार करने की तिथि:", "సిద్ధం చేసిన తేదీ:"),
    note: [
      L("Note: These are sample documents provided for reference.", "नोट: ये संदर्भ के लिए उपलब्ध कराए गए नमूना दस्तावेज़ हैं।", "గమనిక: ఇవి సూచన కోసం అందించిన నమూనా పత్రాలు."),
      L("Please verify the applicable official requirements before", "कृपया सीएफएसएल हैदराबाद को मामला भेजने से पहले", "దయచేసి సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్‌కు కేసును పంపే ముందు"),
      L("forwarding a case to CFSL Hyderabad.", "लागू आधिकारिक आवश्यकताओं की पुष्टि करें।", "వర్తించే అధికారిక అవసరాలను ధృవీకరించుకోండి."),
    ],
  },
  localeTag: { en: "en-IN", hi: "hi-IN", te: "te-IN" } as Record<Lang, string>,
};