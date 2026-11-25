import type { Lang, Localized } from "../lib/i18n";
import type { OfficerProfile } from "./officers";

const L = (en: string, hi: string, te: string): Localized => ({ en, hi, te });

type Overlay = Partial<
  Pick<OfficerProfile, "name" | "designation" | "biography" | "experience" | "qualifications" | "specialisations">
>;

// Keyed by officer slug. Only add fields that have a verified English value in officers.ts.
const overlays: Record<string, Partial<Record<"hi" | "te", Overlay>>> = {
  "dr-maheshwari": {
    hi: {
      name: "डॉ. एम. माहेश्वरी",
      designation: "भौतिकी, बैलिस्टिक्स एवं डिजिटल फोरेंसिक प्रभागों के विभागाध्यक्ष",
    },
    te: {
      name: "డాక్టర్ ఎం. మహేశ్వరి",
      designation: "ఫిజిక్స్, బాలిస్టిక్స్ & డిజిటల్ ఫోరెన్సిక్స్ విభాగాల అధిపతి",
    },
  },
};

export function localizeOfficer(officer: OfficerProfile, lang: Lang): OfficerProfile {
  if (lang === "en") return officer;
  return { ...officer, ...overlays[officer.slug]?.[lang] };
}

export const officerText = {
  back: L("← Back to Scientific Divisions", "← वैज्ञानिक प्रभागों पर वापस जाएँ", "← శాస్త్రీయ విభాగాలకు తిరిగి వెళ్ళండి"),
  kicker: L("CFSL Hyderabad · Officer Profile", "सीएफएसएल हैदराबाद · अधिकारी प्रोफ़ाइल", "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ · అధికారి ప్రొఫైల్"),
  portraitOf: {
    en: (n: string) => `Portrait of ${n}`,
    hi: (n: string) => `${n} का चित्र`,
    te: (n: string) => `${n} చిత్రం`,
  } satisfies Record<Lang, (n: string) => string>,
  notice: L(
    "The official profile information for this officer is being compiled. Biography, qualifications, experience, photograph and official contact details will be published here after verification.",
    "इस अधिकारी की आधिकारिक प्रोफ़ाइल जानकारी संकलित की जा रही है। जीवन-परिचय, योग्यताएँ, अनुभव, फ़ोटो और आधिकारिक संपर्क विवरण सत्यापन के बाद यहाँ प्रकाशित किए जाएँगे।",
    "ఈ అధికారి అధికారిక ప్రొఫైల్ సమాచారం సంకలనం చేయబడుతోంది. జీవిత చరిత్ర, అర్హతలు, అనుభవం, ఫోటో మరియు అధికారిక సంప్రదింపు వివరాలు ధృవీకరణ తర్వాత ఇక్కడ ప్రచురించబడతాయి.",
  ),
  profile: L("Professional Profile", "व्यावसायिक परिचय", "వృత్తిపరమైన ప్రొఫైల్"),
  qualifications: L("Qualifications", "योग्यताएँ", "అర్హతలు"),
  experience: L("Professional Experience", "व्यावसायिक अनुभव", "వృత్తిపరమైన అనుభవం"),
  specialisations: L("Areas of Specialisation", "विशेषज्ञता के क्षेत्र", "ప్రత్యేకత రంగాలు"),
  contact: L("Official Contact", "आधिकारिक संपर्क", "అధికారిక సంప్రదింపు"),
  email: L("Email", "ईमेल", "ఇమెయిల్"),
  phone: L("Office Phone", "कार्यालय दूरभाष", "కార్యాలయ ఫోన్"),
};