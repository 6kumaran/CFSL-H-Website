import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Link2,
  Newspaper,
  Info,
} from "lucide-react";
import { getLang } from "../../../lib/i18n-server";
import { navLabel } from "../../../data/ui-text";
import { categoryText, linkText, localizeVacancy, nt } from "../../../data/notices-i18n";

type Category = "latest-news" | "vacancy" | "important-links";

// Page titles use the English nav label, which navLabel() translates
const categoryTitles: Record<Category, string> = {
  "latest-news": "Latest News",
  vacancy: "Vacancy",
  "important-links": "Important Links",
};

// Only links here; text comes from linkText (same order)
const officialLinkHrefs = [
  "https://cfslhyd.gov.in/",
  "https://www.mha.gov.in/",
  "https://www.india.gov.in/",
  "https://www.indiascienceandtechnology.gov.in/allstinstitutions/central-forensic-science-laboratory-cfsl-hyderabad",
  "https://rtionline.gov.in/",
];

type Vacancy = {
  id: string;
  postName: string;
  notificationNumber: string;
  publishedDate: string;
  lastDate: string;
  description: string;
  status: "Open" | "Closed";
  notificationUrl: string;
};

const vacancies: Vacancy[] = [
  
];

const categoryLinks = [
  { label: "Latest News", href: "/notices/latest-news" },
  { label: "Vacancy", href: "/notices/vacancy" },
  { label: "Important Links", href: "/notices/important-links" },
];

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(categoryTitles).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!Object.prototype.hasOwnProperty.call(categoryTitles, category)) return {};

  const lang = await getLang();
  const key = category as Category;

  return {
    // The root layout's title template already appends "| CFSL Hyderabad"
    title: navLabel(categoryTitles[key], lang),
    description: categoryText[key].intro[lang],
  };
}

export default async function NoticeCategoryPage({ params }: Props) {
  const { category } = await params;

  if (!Object.prototype.hasOwnProperty.call(categoryTitles, category)) {
    notFound();
  }

  const lang = await getLang();
  const key = category as Category;
  const title = navLabel(categoryTitles[key], lang);
  const text = categoryText[key];
  const localizedVacancies = vacancies.map((v) => localizeVacancy(v, lang));

  return (
    <main>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label={nt.breadcrumbsAria[lang]}>
            <Link href="/">{navLabel("Home", lang)}</Link>
            <span aria-hidden="true">/</span>
            <span>{navLabel("Notice Board", lang)}</span>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </nav>

          <h1>{title}</h1>
          <p>{text.intro[lang]}</p>
        </div>
      </section>

      {/* Notice Board Content */}
      <section className="section page-content notice-category-page">
        <div className="site-container">

          {/* Category Navigation */}
          <nav className="notice-category-navigation" aria-label={nt.navAria[lang]}>
            {categoryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === `/notices/${category}`
                    ? "notice-category-tab active"
                    : "notice-category-tab"
                }
                aria-current={item.href === `/notices/${category}` ? "page" : undefined}
              >
                {navLabel(item.label, lang)}
              </Link>
            ))}
          </nav>

          {/* Section Heading */}
          <div className="notice-category-heading">
            <span className="section-kicker">{nt.kicker[lang]}</span>

            <h2>{text.heading[lang]}</h2>
            <p>{text.description[lang]}</p>
          </div>

          {/* Latest News */}
          {category === "latest-news" && (
            <div className="notice-empty-state">
              <span className="notice-empty-icon">
                <Newspaper size={29} />
              </span>

              <h3>{nt.newsEmptyTitle[lang]}</h3>

              <p>{nt.newsEmptyText[lang]}</p>
            </div>
          )}

          {/* Vacancy */}
          {category === "vacancy" && (
            <>
              {localizedVacancies.length === 0 ? (
                <div className="notice-empty-state">
                  <span className="notice-empty-icon">
                    <BriefcaseBusiness size={29} />
                  </span>

                  <h3>{nt.vacEmptyTitle[lang]}</h3>

                  <p>{nt.vacEmptyText[lang]}</p>

                  <div className="notice-information">
                    <Info size={19} />

                    <p>{nt.vacEmptyInfo[lang]}</p>
                  </div>
                </div>
              ) : (
                <div className="notice-vacancy-list">
                  {localizedVacancies.map((vacancy) => (
                    <article className="notice-vacancy-card" key={vacancy.id}>
                      <div className="notice-vacancy-top">
                        <div className="notice-vacancy-title">
                          <span className="notice-vacancy-icon">
                            <BriefcaseBusiness size={22} />
                          </span>

                          <div>
                            <span className="notice-vacancy-category">
                              {nt.recruitmentNotification[lang]}
                            </span>

                            <h3>{vacancy.postName}</h3>

                            <span className="notice-vacancy-number">
                              {vacancy.notificationNumber}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`notice-vacancy-status ${
                            vacancy.status === "Open" ? "is-open" : "is-closed"
                          }`}
                        >
                          {vacancy.status === "Open" ? nt.open[lang] : nt.closed[lang]}
                        </span>
                      </div>

                      <p className="notice-vacancy-description">{vacancy.description}</p>

                      <div className="notice-vacancy-details">
                        <div>
                          <span>{nt.publishedDate[lang]}</span>
                          <strong>{vacancy.publishedDate}</strong>
                        </div>

                        <div>
                          <span>{nt.lastDate[lang]}</span>
                          <strong>{vacancy.lastDate}</strong>
                        </div>
                      </div>

                      <div className="notice-vacancy-footer">
                        <a
                          href={vacancy.notificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="notice-vacancy-document"
                        >
                          <FileText size={17} />
                          {nt.viewNotification[lang]}
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Important Links */}
          {category === "important-links" && (
            <div className="notice-resource-grid">
              {linkText.map((item, i) => (
                <article className="notice-resource-card" key={i}>
                  <span className="notice-resource-icon">
                    <Link2 size={22} />
                  </span>

                  <div className="notice-resource-content">
                    <span className="notice-resource-category">{item.category[lang]}</span>

                    <h3>{item.title[lang]}</h3>

                    <p>{item.description[lang]}</p>

                    <a
                      href={officialLinkHrefs[i]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="notice-resource-action"
                    >
                      {item.label[lang]}
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Source Note */}
          <p className="notice-category-source-note">{nt.sourceNote[lang]}</p>
        </div>
      </section>
    </main>
  );
}