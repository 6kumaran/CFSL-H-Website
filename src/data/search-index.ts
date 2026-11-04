import {
  divisions,
  events,
  navigation,
  notices,
  pages,
  quickLinks,
} from "./site-content";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
};

const pageEntries: SearchEntry[] = Object.entries(pages).map(([slug, page]) => ({
  title: page.title,
  description: [
    page.intro,
    page.heading,
    ...page.paragraphs,
    ...page.bullets,
  ].filter(Boolean).join(" "),
  href: `/${slug}`,
  category: "Website page",
}));

const navigationEntries: SearchEntry[] = navigation.flatMap((item) => [
  {
    title: item.label,
    description: `Navigate to ${item.label}`,
    href: item.href,
    category: "Navigation",
  },
  ...(item.children ?? []).map((child) => ({
    title: child.label,
    description: `Navigate to ${child.label} under ${item.label}`,
    href: child.href,
    category: "Navigation",
  })),
]);

const divisionEntries: SearchEntry[] = divisions.map((division) => ({
  title: division.title,
  description: division.description,
  href: division.href,
  category: "Scientific division",
}));

const noticeEntries: SearchEntry[] = notices.map((notice) => ({
  title: notice.title,
  description: `${notice.summary} ${notice.type} ${notice.date}`,
  href: "/notices",
  category: "Notice",
}));

const eventEntries: SearchEntry[] = events.map((event) => ({
  title: event.title,
  description: event.description,
  href: "/notices",
  category: "Updates and information",
}));

const quickLinkEntries: SearchEntry[] = quickLinks.map((item) => ({
  title: item.title,
  description: item.subtitle,
  href: item.href,
  category: "Quick link",
}));

// Content rendered directly in page components rather than site-content.ts.
const componentContentEntries: SearchEntry[] = [
  {
    title: "Forensic Science Laboratory — Welcome",
    description:
      "Forensic science scientific examination digital evidence crime scene investigation forensic reports training ISO IEC 17025 electronic evidence Information Technology Act 2000 Section 79A laboratory Hyderabad.",
    href: "/",
    category: "Homepage",
  },
  {
    title: "Notifications — Selected interns",
    description:
      "List of Selected Interns on Stipend Basis for a period of one year in Forensic Science Laboratory, Delhi. Recruitment update published 20 November 2025.",
    href: "/notices",
    category: "Notification",
  },
  {
    title: "Notifications — Shortlisted candidates",
    description:
      "Revised List of Shortlisted Candidates for the walk in Interview for the post of Intern Biology Division on Stipend Basis. Interview notice published 17 November 2025.",
    href: "/notices",
    category: "Notification",
  },
  {
    title: "Case Forwarding Checklist",
    description:
      "Case forwarding documents, forwarding letter, case opening, case FIR, chain of custody, general case forwarding, select documents and download ZIP.",
    href: "/services/case-forwarding-checklist",
    category: "Service",
  },
  {
    title: "RTI Act and application resources",
    description:
      "Right to Information Act 2005 RTI application form Central Government RTI Online portal Central Information Commission rules and public information.",
    href: "/rti",
    category: "Public information",
  },
  {
    title: "RTI request procedure",
    description:
      "Identify the information, choose the appropriate submission route, check current fee and payment instructions, keep a copy and track the response. Central Public Information Officer CPIO First Appellate Authority FAA.",
    href: "/rti",
    category: "Public information",
  },
  {
    title: "Digital Forensics division",
    description:
      "Scientific examination of digital devices electronic evidence digital artefacts examination procedures findings forensic tools supported devices and reports.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Physical Sciences division",
    description:
      "Scientific examination of physical evidence measurement comparison analytical methods observations and technical findings.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Ballistics division",
    description:
      "Forensic ballistics firearms ammunition associated components comparison interpretation ballistic evidence and forensic reports.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Biological Sciences division",
    description:
      "Biological forensic examination biological material scientific assessment findings interpretation and reports.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Chemical Sciences division",
    description:
      "Chemical forensic examination analytical methods substances residues sample analysis identification characterisation and laboratory reports.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Questioned Documents division",
    description:
      "Questioned document examination disputed authorship authenticity handwriting signatures suspected alterations and document features.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Research and Development",
    description:
      "Forensic research development scientific methods training laboratory practice technical knowledge sharing and scientific collaboration.",
    href: "/divisions",
    category: "Scientific division",
  },
  {
    title: "Contact CFSL Hyderabad",
    description:
      "Contact the Central Forensic Science Laboratory Hyderabad Telangana India address communication channels and visitor information.",
    href: "/contact",
    category: "Contact",
  },
];

export const websiteSearchIndex: SearchEntry[] = [
  ...pageEntries,
  ...navigationEntries,
  ...divisionEntries,
  ...noticeEntries,
  ...eventEntries,
  ...quickLinkEntries,
  ...componentContentEntries,
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function searchWebsite(query: string): SearchEntry[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  const terms = normalizedQuery.split(" ").filter(Boolean);

  const ranked = websiteSearchIndex
    .map((entry, index) => {
      const title = normalize(entry.title);
      const description = normalize(entry.description);
      const category = normalize(entry.category);
      const keywords = normalize(entry.keywords ?? "");
      const searchable = `${title} ${description} ${category} ${keywords}`;

      const matchedTerms = terms.filter((term) => searchable.includes(term));
      if (matchedTerms.length !== terms.length) return null;

      let score = matchedTerms.length * 10;
      if (title === normalizedQuery) score += 100;
      else if (title.startsWith(normalizedQuery)) score += 60;
      else if (title.includes(normalizedQuery)) score += 35;
      if (category.includes(normalizedQuery)) score += 8;

      return { entry, score, index };
    })
    .filter((item): item is { entry: SearchEntry; score: number; index: number } => item !== null)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  // Avoid showing the same destination/title twice when it appears in both
  // the page data and the navigation data.
  const seen = new Set<string>();
  return ranked
    .filter(({ entry }) => {
      const key = `${entry.href}::${normalize(entry.title)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .map((item) => item.entry);
}
