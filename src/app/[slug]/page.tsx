import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Building2, ExternalLink, FileCheck2, Globe, Mail, MapPin, Microscope, ShieldCheck, FileText, ClipboardList, Landmark } from "lucide-react";
import { notFound } from "next/navigation";
import { pages } from "../../data/site-content";
import { localizeNotices, localizePage } from "../../data/site-content-i18n";
import { common, rti as sRti, director as sDir, overview as sOv, contact as sCt } from "../../data/slug-page-i18n";
import { headerText as h, navLabel } from "../../data/ui-text";
import DivisionsContent from "../../components/divisions-content";
import { getLang } from "../../lib/i18n-server";
import type { Lang } from "../../lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = await getLang();
  const page = localizePage(slug, lang);
  return page ? { title: page.title, description: page.intro } : {};
}

function RtiContent({ lang }: { lang: Lang }) {
  // Icons and links stay here; the text comes from sRti.resources (same order).
  const resourceConfig = [
    { icon: FileText, href: "https://www.indiacode.nic.in/bitstream/123456789/2065/1/aa2005.pdf" },
    { icon: ClipboardList, href: "https://cfslhyd.gov.in/img/3.RTI%20Application.pdf" },
    { icon: Landmark, href: "https://rtionline.gov.in/" },
    { icon: FileCheck2, href: "https://cic.gov.in/rti_act" },
  ];

  return (
    <section className="section page-content rti-page-content">
      <div className="site-container">
        <div className="rti-content">
          <section className="page-article rti-intro">
            <span className="section-kicker">{sRti.kicker[lang]}</span>
            <h2>{sRti.title[lang]}</h2>
            <p>{sRti.intro[lang]}</p>

            <div className="rti-notice">
              <ShieldCheck size={21} aria-hidden="true" />
              <p>{sRti.notice[lang]}</p>
            </div>
          </section>

          <section className="rti-section" aria-labelledby="rti-process-title">
            <div className="rti-section-heading">
              <span className="section-kicker">{sRti.processKicker[lang]}</span>
              <h2 id="rti-process-title">{sRti.processTitle[lang]}</h2>
              <p>{sRti.processIntro[lang]}</p>
            </div>

            <ol className="rti-steps">
              {sRti.steps.map((step, i) => (
                <li key={i}>
                  <span className="rti-step-number">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title[lang]}</h3>
                    <p>{step.text[lang]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="rti-section" aria-labelledby="rti-officers-title">
            <div className="rti-section-heading">
              <span className="section-kicker">{sRti.officersKicker[lang]}</span>
              <h2 id="rti-officers-title">{sRti.officersTitle[lang]}</h2>
            </div>

            <div className="rti-officer-panel">
              <div className="rti-officer-icon">
                <Landmark size={23} aria-hidden="true" />
              </div>
              <div>
                <h3>{sRti.officerPanelTitle[lang]}</h3>
                <p>{sRti.officerPanelText[lang]}</p>
              </div>
            </div>

            <p className="rti-small-note">{sRti.appealNote[lang]}</p>
          </section>

          <section className="rti-section" aria-labelledby="rti-disclosures-title">
            <div className="rti-section-heading">
              <span className="section-kicker">{sRti.disclosuresKicker[lang]}</span>
              <h2 id="rti-disclosures-title">{sRti.disclosuresTitle[lang]}</h2>
              <p>{sRti.disclosuresIntro[lang]}</p>
            </div>

            <div className="rti-disclosure-grid">
              {sRti.disclosures.map((item, i) => (
                <article key={i}>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.text[lang]}</p>
                </article>
              ))}
            </div>

            <p className="rti-small-note">{sRti.disclosuresNote[lang]}</p>
          </section>

          <section className="rti-section" aria-labelledby="rti-resources-title">
            <div className="rti-section-heading">
              <span className="section-kicker">{sRti.resourcesKicker[lang]}</span>
              <h2 id="rti-resources-title">{sRti.resourcesTitle[lang]}</h2>
              <p>{sRti.resourcesIntro[lang]}</p>
            </div>

            <div className="rti-resource-list">
              {sRti.resources.map((resource, i) => {
                const { icon: Icon, href } = resourceConfig[i];

                return (
                  <article className="rti-resource-card" key={i}>
                    <span className="rti-resource-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div className="rti-resource-copy">
                      <span className="rti-resource-category">{resource.category[lang]}</span>
                      <h3>{resource.title[lang]}</h3>
                      <p>{resource.description[lang]}</p>
                      <a href={href} target="_blank" rel="noreferrer" className="rti-resource-link">
                        {resource.action[lang]}
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <p className="rti-source-note">{sRti.sourceNote[lang]}</p>
        </div>
      </div>
    </section>
  );
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLang();
  const page = localizePage(slug, lang);
  if (!page) notFound();
  const notices = localizeNotices(lang);

  return (
    <>
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <div className="breadcrumbs">
            <Link href="/">{navLabel("Home", lang)}</Link><span>/</span><span>{page.title}</span>
          </div>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      {slug === "about" ? (
        <OverviewContent lang={lang} />
      ) : slug === "contact" ? (
        <ContactContent lang={lang} />
      ) : slug === "rti" ? (
        <RtiContent lang={lang} />
      ) : slug === "divisions" ? (
        <DivisionsContent />
      ) : slug === "director" ? (
        <DirectorContent lang={lang} />
      ) : (
        <section className="section page-content">
          <div className="site-container page-content-single">
            <article className="page-article">
              <span className="section-kicker">{common.draftKicker[lang]}</span>

              <h2>{page.heading}</h2>

              {page.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <ul className="article-list">
                {page.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {slug === "notices" && (
                <ul className="article-list">
                  {notices.map((item, i) => (
                    <li key={i}>
                      <span>
                        <strong>
                          {item.date} · {item.type}
                        </strong>
                        <br />
                        {item.title}
                        <br />
                        <small>{item.summary}</small>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </div>
        </section>
      )}
    </>
  );
}

function DirectorContent({ lang }: { lang: Lang }) {
  return (
    <section className="section page-content director-page-content">
      <div className="site-container">
        <article className="director-message-card">
          <div className="director-portrait-wrap">
            <Image
              src="/CFSL_HYD_Director_1.jpeg"
              alt={sDir.imgAlt[lang]}
              width={597}
              height={800}
              className="director-portrait"
              priority
            />

            <div className="director-nameplate">
              <h2>{sDir.name[lang]}</h2>
              <p>{sDir.role[lang]}</p>
            </div>
          </div>

          <div className="director-message-copy">
            <span className="section-kicker">{sDir.kicker[lang]}</span>

            <h2>{sDir.title[lang]}</h2>

            {sDir.paragraphs.map((p, i) => (
              <p key={i}>{p[lang]}</p>
            ))}

            <p className="director-signoff">
              {sDir.signoff[lang]}
              <br />
              <strong>{sDir.name[lang]}</strong>
              <br />
              {sDir.role[lang]}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function OverviewContent({ lang }: { lang: Lang }) {
  const shortcutConfig = [
    { href: "/divisions", icon: Microscope },
    { href: "/services", icon: FileCheck2 },
    { href: "/notices/latest-news", icon: ArrowRight },
    { href: "/rti", icon: ShieldCheck },
  ];

  return (
    <section className="section page-content overview-page-content">
      <div className="site-container">
        <div className="institution-intro">
          <div className="institution-copy">
            <span className="section-kicker">{sOv.kicker[lang]}</span>
            <h2>{sOv.title[lang]}</h2>
            <p>{sOv.p1[lang]}</p>
            <p>{sOv.p2[lang]}</p>
          </div>
          <figure className="institution-photo">
            <Image
              src="/IMG_2879.JPG"
              alt={sOv.imgAlt[lang]}
              width={1248}
              height={1248}
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <figcaption>{sOv.caption[lang]}</figcaption>
          </figure>
        </div>

        <div className="institution-facts" aria-label={sOv.factsAria[lang]}>
          <article className="institution-fact">
            <span className="institution-fact-icon"><Building2 size={22} aria-hidden="true" /></span>
            <div>
              <span className="institution-fact-label">{sOv.fact1Label[lang]}</span>
              <h3>{sOv.fact1Title[lang]}</h3>
              <p>{sOv.fact1Text[lang]}</p>
            </div>
          </article>
          <article className="institution-fact">
            <span className="institution-fact-icon"><MapPin size={22} aria-hidden="true" /></span>
            <div>
              <span className="institution-fact-label">{sOv.fact2Label[lang]}</span>
              <h3>{sOv.fact2Title[lang]}</h3>
              <p>{sOv.fact2Text[lang]}</p>
            </div>
          </article>
          <article className="institution-fact">
            <span className="institution-fact-icon"><Award size={22} aria-hidden="true" /></span>
            <div>
              <span className="institution-fact-label">{sOv.fact3Label[lang]}</span>
              <h3>{sOv.fact3Title[lang]}</h3>
              <p>{sOv.fact3Text[lang]}</p>
            </div>
          </article>
        </div>

        <section className="institution-role" aria-labelledby="institution-role-title">
          <div className="institution-role-mark"><Microscope size={28} aria-hidden="true" /></div>
          <div>
            <span className="section-kicker">{sOv.roleKicker[lang]}</span>
            <h2 id="institution-role-title">{sOv.roleTitle[lang]}</h2>
            <p>{sOv.roleText[lang]}</p>
          </div>
        </section>

        <section className="overview-shortcuts" aria-labelledby="overview-shortcuts-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">{sOv.exploreKicker[lang]}</span>
              <h2 id="overview-shortcuts-title">{sOv.exploreTitle[lang]}</h2>
              <p className="section-intro">{sOv.exploreIntro[lang]}</p>
            </div>
          </div>
          <div className="card-grid overview-shortcut-grid">
            {sOv.shortcuts.map((item, i) => {
              const { href, icon: Icon } = shortcutConfig[i];
              return (
                <Link className="content-card overview-shortcut-card" href={href} key={href}>
                  <span className="card-icon"><Icon size={23} aria-hidden="true" /></span>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.description[lang]}</p>
                  <span className="text-link">{sOv.openSection[lang]} <ArrowRight size={16} aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
          <p className="overview-contact-line">
            {sOv.contactBefore[lang]}
            <Link className="text-link" href="/contact">{navLabel("Contact Us", lang)} <ArrowRight size={15} aria-hidden="true" /></Link>
            {sOv.contactAfter[lang]}
          </p>
        </section>
      </div>
    </section>
  );
}

function ContactContent({ lang }: { lang: Lang }) {
  return (
    <section className="section page-content contact-page-content">
      <div className="site-container">
        <div className="contact-content">
          <section className="page-article contact-intro">
            <span className="section-kicker">{sCt.kicker[lang]}</span>
            <h2>{sCt.title[lang]}</h2>
            <p>{sCt.intro[lang]}</p>
          </section>

          <div className="contact-cards">
            <article className="contact-card contact-address-card">
              <span className="contact-card-icon"><MapPin size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">{sCt.addrLabel[lang]}</span>
                <h3>{h.brandTitle[lang]}</h3>
                <address>
                  {h.brandSubtitle[lang]}<br />
                  {sCt.addrMinistry[lang]}<br />
                  {sCt.addrLine3[lang]}<br />
                  {sOv.fact2Text[lang]}
                </address>
                <a
                  className="contact-action"
                  href="https://www.google.com/maps/search/?api=1&query=Central+Forensic+Science+Laboratory+Ramanthapur+Amberpet+Post+Hyderabad+500013"
                  target="_blank"
                  rel="noreferrer"
                >
                  {sCt.directions[lang]} <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon"><Mail size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">{sCt.emailLabel[lang]}</span>
                <h3>{sCt.emailTitle[lang]}</h3>
                <a className="contact-value" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWgTlJBhmZmjJZBvNvmlcdVdztKWmrnsVvrWLzxHpzMcGFrHpFKgSHNCmxXCbPDpkJzdq">
                  director.cfsl-hyd@gov.in
                </a>
                <p className="contact-note">{sCt.emailNote[lang]}</p>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon"><Globe size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">{sCt.webLabel[lang]}</span>
                <h3>{sCt.webTitle[lang]}</h3>
                <a className="contact-action" href="https://cfslhyd.gov.in/" target="_blank" rel="noreferrer">
                  {sCt.webLink[lang]} <ExternalLink size={15} aria-hidden="true" />
                </a>
                <p className="contact-note">{sCt.webNote[lang]}</p>
              </div>
            </article>

            <article className="contact-card contact-caution-card">
              <span className="contact-card-icon"><ShieldCheck size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">{sCt.cautionLabel[lang]}</span>
                <h3>{sCt.cautionTitle[lang]}</h3>
                <p>{sCt.cautionText[lang]}</p>
              </div>
            </article>
          </div>

          <p className="contact-source-note">{sCt.sourceNote[lang]}</p>
        </div>
      </div>
    </section>
  );
}