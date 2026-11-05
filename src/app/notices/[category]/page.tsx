
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Link2,
  Newspaper,
  ExternalLink,
  Info,
} from "lucide-react";

type Category = "latest-news" | "vacancy" | "important-links";

type CategoryConfig = {
  title: string;
  intro: string;
  heading: string;
  description: string;
};

const categories: Record<Category, CategoryConfig> = {
  "latest-news": {
    title: "Latest News",
    intro:
      "Stay informed about announcements, activities and important updates from CFSL Hyderabad.",
    heading: "News & Announcements",
    description:
      "Updates and announcements relating to the laboratory and its activities.",
  },

  vacancy: {
    title: "Vacancy",
    intro:
      "Information about recruitment opportunities, vacancies and related employment notifications.",
    heading: "Recruitment & Vacancies",
    description:
      "Find recruitment-related announcements and official vacancy notifications.",
  },

  "important-links": {
    title: "Important Links",
    intro:
      "Access useful official websites, government resources and institutional information.",
    heading: "Useful Resources & Official Websites",
    description:
      "A collection of relevant government and institutional resources.",
  },
};

const officialLinks = [
  {
    title: "CFSL Hyderabad",
    category: "Official Laboratory Website",
    description:
      "Visit the official website of the Central Forensic Science Laboratory, Hyderabad.",
    href: "https://cfslhyd.gov.in/",
    label: "Visit Website",
  },
  {
    title: "Ministry of Home Affairs",
    category: "Government of India",
    description:
      "Access information, announcements, policies and official resources published by the Ministry of Home Affairs.",
    href: "https://www.mha.gov.in/",
    label: "Visit Ministry Website",
  },
  {
    title: "National Portal of India",
    category: "Government Information",
    description:
      "Explore government information and services, including the institutional listing for CFSL Hyderabad.",
    href: "https://www.india.gov.in/",
    label: "Visit National Portal",
  },
  {
    title: "India Science, Technology & Innovation",
    category: "Institutional Directory",
    description:
      "View the institutional profile and publicly listed details of CFSL Hyderabad.",
    href: "https://www.indiascienceandtechnology.gov.in/allstinstitutions/central-forensic-science-laboratory-cfsl-hyderabad",
    label: "View Institution Profile",
  },
  {
    title: "Central Government RTI Online Portal",
    category: "Public Information",
    description:
      "Access the Central Government RTI Online service for eligible public authorities and applications.",
    href: "https://rtionline.gov.in/",
    label: "Open RTI Portal",
  },
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
  {
    id: "recruitment-2026-01",
    postName: "Junior Scientific Officer",
    notificationNumber: "CFSL/HYD/RECRUITMENT/01/2026",
    publishedDate: "05 November 2026",
    lastDate: "30 November 2026",
    description:
      "Recruitment notification for the post of Junior Scientific Officer. Refer to the official advertisement for eligibility, qualifications and application instructions.",
    status: "Open",
    notificationUrl: "/documents/recruitments/jso-notification.pdf",
  },
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
  return Object.keys(categories).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { category } = await params;

  const page = categories[category as Category];

  if (!page) return {};

  return {
    title: `${page.title} | CFSL Hyderabad`,
    description: page.intro,
  };
}

export default async function NoticeCategoryPage({ params }: Props) {
  const { category } = await params;

  if (!Object.prototype.hasOwnProperty.call(categories, category)) {
    notFound();
  }

  const page = categories[category as Category];

  return (
    <main>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Notice Board</span>
            <span aria-hidden="true">/</span>
            <span>{page.title}</span>
          </nav>

          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>

      {/* Notice Board Content */}
      <section className="section page-content notice-category-page">
        <div className="site-container">

          {/* Category Navigation */}
          <nav
            className="notice-category-navigation"
            aria-label="Notice board categories"
          >
            {categoryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === `/notices/${category}`
                    ? "notice-category-tab active"
                    : "notice-category-tab"
                }
                aria-current={
                  item.href === `/notices/${category}`
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Section Heading */}
          <div className="notice-category-heading">
            <span className="section-kicker">
              CFSL Hyderabad · Notice Board
            </span>

            <h2>{page.heading}</h2>
            <p>{page.description}</p>
          </div>

          {/* Latest News */}
          {category === "latest-news" && (
            <div className="notice-empty-state">
              <span className="notice-empty-icon">
                <Newspaper size={29} />
              </span>

              <h3>No announcements published yet</h3>

              <p>
                News updates and institutional announcements will
                be displayed here when they are officially published
                and approved for public communication.
              </p>
            </div>
          )}

          {/* Vacancy */}
          
{/* Vacancy */}
{category === "vacancy" && (
  <>
    {vacancies.length === 0 ? (
      <div className="notice-empty-state">
        <span className="notice-empty-icon">
          <BriefcaseBusiness size={29} />
        </span>

        <h3>Recruitment information</h3>

        <p>
          Official vacancy notifications, recruitment
          advertisements and related documents will be
          published in this section after verification.
        </p>

        <div className="notice-information">
          <Info size={19} />

          <p>
            This section has not yet been populated with
            recruitment notices. This does not confirm
            whether recruitment opportunities are currently
            open or closed.
          </p>
        </div>
      </div>
    ) : (
      <div className="notice-vacancy-list">
        {vacancies.map((vacancy) => (
          <article
            className="notice-vacancy-card"
            key={vacancy.id}
          >
            <div className="notice-vacancy-top">
              <div className="notice-vacancy-title">
                <span className="notice-vacancy-icon">
                  <BriefcaseBusiness size={22} />
                </span>

                <div>
                  <span className="notice-vacancy-category">
                    Recruitment Notification
                  </span>

                  <h3>{vacancy.postName}</h3>

                  <span className="notice-vacancy-number">
                    {vacancy.notificationNumber}
                  </span>
                </div>
              </div>

              <span
                className={`notice-vacancy-status ${
                  vacancy.status === "Open"
                    ? "is-open"
                    : "is-closed"
                }`}
              >
                {vacancy.status}
              </span>
            </div>

            <p className="notice-vacancy-description">
              {vacancy.description}
            </p>

            <div className="notice-vacancy-details">
              <div>
                <span>Published Date</span>
                <strong>{vacancy.publishedDate}</strong>
              </div>

              <div>
                <span>Last Date to Apply</span>
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
                View Official Notification
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
              {officialLinks.map((item) => (
                <article
                  className="notice-resource-card"
                  key={item.title}
                >
                  <span className="notice-resource-icon">
                    <Link2 size={22} />
                  </span>

                  <div className="notice-resource-content">
                    <span className="notice-resource-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="notice-resource-action"
                    >
                      {item.label}
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Source Note */}
          <p className="notice-category-source-note">
            External websites are maintained by their respective
            organisations. Please refer to the original source for
            current information, instructions and updates.
          </p>

        </div>
      </section>
    </main>
  );
}
