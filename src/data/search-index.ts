import {
  divisions,
  events,
  navigation,
  notices,
  pages,
  quickLinks,
} from "./site-content";
import {
  localizeDivisions,
  localizeEvents,
  localizeNotices,
  localizePage,
  localizeQuickLinks,
} from "./site-content-i18n";
import { navLabel } from "./ui-text";
import { cat, componentI18n, navDesc } from "./search-i18n";
import type { Lang } from "../lib/i18n";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
};

// Content rendered directly in page components rather than site-content.ts.
// (English base text; translations live in search-i18n.ts, keyed by title.)
const componentContentEntries: SearchEntry[] = [
  {
    title: "Forensic Science Laboratory — Welcome",
    description:
      "Forensic science scientific examination digital evidence crime scene investigation forensic reports training ISO IEC 17025 electronic evidence Information Technology Act 2000 Section 79A laboratory Hyderabad.",
    href: "/",
    category: "Homepage",
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
    title: "Physics Forensics division",
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

type PageParts = { intro: string; heading: string; paragraphs: string[]; bullets: string[] };
const joinPage = (p: PageParts) =>
  [p.intro, p.heading, ...p.paragraphs, ...p.bullets].filter(Boolean).join(" ");

/**
 * Builds the index for one language. Displayed text is localized; the English
 * text is kept in `keywords` so English searches still work on Hindi/Telugu pages.
 */
function buildIndex(lang: Lang): SearchEntry[] {
  const en = lang === "en";

  const pageEntries: SearchEntry[] = Object.entries(pages).map(([slug, page]) => {
    const loc = localizePage(slug, lang)!;
    return {
      title: loc.title,
      description: joinPage(loc),
      href: `/${slug}`,
      category: cat("Website page", lang),
      keywords: en ? undefined : `${page.title} ${joinPage(page)}`,
    };
  });

  const navigationEntries: SearchEntry[] = navigation.flatMap((item) => [
    {
      title: navLabel(item.label, lang),
      description: navDesc.to[lang](navLabel(item.label, lang)),
      href: item.href,
      category: cat("Navigation", lang),
      keywords: en ? undefined : item.label,
    },
    ...(item.children ?? []).map((child) => ({
      title: navLabel(child.label, lang),
      description: navDesc.under[lang](navLabel(child.label, lang), navLabel(item.label, lang)),
      href: child.href,
      category: cat("Navigation", lang),
      keywords: en ? undefined : `${child.label} ${item.label}`,
    })),
  ]);

  const divisionEntries: SearchEntry[] = localizeDivisions(lang).map((d, i) => ({
    title: d.title,
    description: d.description,
    href: d.href,
    category: cat("Scientific division", lang),
    keywords: en ? undefined : `${divisions[i].title} ${divisions[i].description}`,
  }));

  const noticeEntries: SearchEntry[] = localizeNotices(lang).map((n, i) => ({
    title: n.title,
    description: `${n.summary} ${n.type} ${n.date}`,
    href: "/notices",
    category: cat("Notice", lang),
    keywords: en ? undefined : `${notices[i].title} ${notices[i].summary} ${notices[i].type} ${notices[i].date}`,
  }));

  const eventEntries: SearchEntry[] = localizeEvents(lang).map((e, i) => ({
    title: e.title,
    description: e.description,
    href: "/notices",
    category: cat("Updates and information", lang),
    keywords: en ? undefined : `${events[i].title} ${events[i].description}`,
  }));

  const quickLinkEntries: SearchEntry[] = localizeQuickLinks(lang).map((q, i) => ({
    title: q.title,
    description: q.subtitle,
    href: q.href,
    category: cat("Quick link", lang),
    keywords: en ? undefined : `${quickLinks[i].title} ${quickLinks[i].subtitle}`,
  }));

  const componentEntries: SearchEntry[] = componentContentEntries.map((entry) => {
    const tr = en ? undefined : componentI18n[entry.title]?.[lang];
    return {
      title: tr?.title ?? entry.title,
      description: tr?.description ?? entry.description,
      href: entry.href,
      category: cat(entry.category, lang),
      keywords: tr ? `${entry.title} ${entry.description}` : undefined,
    };
  });

  return [
    ...pageEntries,
    ...navigationEntries,
    ...divisionEntries,
    ...noticeEntries,
    ...eventEntries,
    ...quickLinkEntries,
    ...componentEntries,
  ];
}

const indexCache = new Map<Lang, SearchEntry[]>();
export function getSearchIndex(lang: Lang): SearchEntry[] {
  let index = indexCache.get(lang);
  if (!index) {
    index = buildIndex(lang);
    indexCache.set(lang, index);
  }
  return index;
}

// Kept for any existing imports
export const websiteSearchIndex: SearchEntry[] = getSearchIndex("en");

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    // \p{M} keeps Devanagari/Telugu vowel signs and conjuncts intact
    .replace(/[^\p{L}\p{M}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function searchWebsite(query: string, lang: Lang = "en"): SearchEntry[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];

  const terms = normalizedQuery.split(" ").filter(Boolean);

  const ranked = getSearchIndex(lang)
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