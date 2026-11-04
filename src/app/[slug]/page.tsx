import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Building2, ExternalLink, FileCheck2, Globe, Mail, MapPin, Microscope, ShieldCheck, FileText, ClipboardList, Landmark, } from "lucide-react";
import { notFound } from "next/navigation";
import { divisions, notices, pages } from "../../data/site-content";
import DivisionsContent from "../../components/divisions-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.title, description: page.intro } : {};
}

function RtiContent() {
  const resources = [
    {
      icon: FileText,
      category: "Legislation",
      title: "Right to Information Act, 2005",
      description: "Read the Act on the official India Code website.",
      href: "https://www.indiacode.nic.in/bitstream/123456789/2065/1/aa2005.pdf",
      action: "Read the Act",
    },
    {
      icon: ClipboardList,
      category: "CFSL Hyderabad form",
      title: "RTI application form",
      description:
        "An application form is hosted on the CFSL Hyderabad official website. Check the form and current submission instructions before using it.",
      href: "https://cfslhyd.gov.in/img/3.RTI%20Application.pdf",
      action: "Open application form",
    },
    {
      icon: Landmark,
      category: "Online service",
      title: "Central Government RTI Online portal",
      description:
        "Submit an online request or first appeal for eligible Central Government public authorities. Confirm that the relevant authority is available on the portal before filing.",
      href: "https://rtionline.gov.in/",
      action: "Open RTI Online",
    },
    {
      icon: FileCheck2,
      category: "Guidance and rules",
      title: "Central Information Commission — RTI Act and Rules",
      description:
        "Find the Act and official RTI rules and notifications published by the Central Information Commission.",
      href: "https://cic.gov.in/rti_act",
      action: "View Act and rules",
    },
  ];

    return (
    <section className="section page-content rti-page-content">
      <div className="site-container">
        <div className="rti-content">
          <section className="page-article rti-intro">
            <span className="section-kicker">
              Public information · RTI Act, 2005
            </span>
            <h2>Right to Information</h2>
            <p>
              The Right to Information Act, 2005 provides a legal framework
              for citizens to request information held by public authorities,
              subject to the Act and its exemptions. This page brings together
              official RTI resources and application guidance relevant to
              CFSL Hyderabad.
            </p>

            <div className="rti-notice">
              <ShieldCheck size={21} aria-hidden="true" />
              <p>
                Please use the official documents and links below. The current
                names and contact details of CFSL Hyderabad’s designated
                Central Public Information Officer (CPIO) and First Appellate
                Authority (FAA) still need to be confirmed from a current
                official disclosure before they are published here.
              </p>
            </div>
          </section>

          <section
            className="rti-section"
            aria-labelledby="rti-process-title"
          >
            <div className="rti-section-heading">
              <span className="section-kicker">How to proceed</span>
              <h2 id="rti-process-title">Making an RTI request</h2>
              <p>
                Use this general checklist, and follow the current instructions
                issued by the relevant public authority.
              </p>
            </div>

            <ol className="rti-steps">
              <li>
                <span className="rti-step-number">01</span>
                <div>
                  <h3>Identify the information</h3>
                  <p>
                    Describe the specific record or information you are
                    seeking as clearly as possible.
                  </p>
                </div>
              </li>
              <li>
                <span className="rti-step-number">02</span>
                <div>
                  <h3>Choose the appropriate submission route</h3>
                  <p>
                    Review the CFSL-hosted application form or check whether
                    CFSL Hyderabad is available as a public authority on the
                    Central Government RTI Online portal.
                  </p>
                </div>
              </li>
              <li>
                <span className="rti-step-number">03</span>
                <div>
                  <h3>Check the current fee and payment instructions</h3>
                  <p>
                    Follow the latest official instructions. Do not rely on
                    old payment details or incomplete fields in a downloaded
                    form without confirmation.
                  </p>
                </div>
              </li>
              <li>
                <span className="rti-step-number">04</span>
                <div>
                  <h3>Keep a copy and track the response</h3>
                  <p>
                    Retain the application, proof of submission and any
                    acknowledgement. Use the official portal or contact route
                    applicable to your submission.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          <section
            className="rti-section"
            aria-labelledby="rti-officers-title"
          >
            <div className="rti-section-heading">
              <span className="section-kicker">Institutional contacts</span>
              <h2 id="rti-officers-title">RTI officers and appeals</h2>
            </div>

            <div className="rti-officer-panel">
              <div className="rti-officer-icon">
                <Landmark size={23} aria-hidden="true" />
              </div>
              <div>
                <h3>Designated CPIO and First Appellate Authority</h3>
                <p>
                  Current officer names, designations, office addresses and
                  contact details have not been independently confirmed for
                  this page. They should be added from CFSL Hyderabad’s latest
                  official RTI disclosure or order, rather than inferred from
                  general contact information.
                </p>
              </div>
            </div>

            <p className="rti-small-note">
              For appeal stages, applicable time limits and procedure, consult
              the current Act, rules and official instructions. This page is a
              public-information guide, not legal advice.
            </p>
          </section>

          <section
            className="rti-section"
            aria-labelledby="rti-disclosures-title"
          >
            <div className="rti-section-heading">
              <span className="section-kicker">Public records</span>
              <h2 id="rti-disclosures-title">Proactive disclosures</h2>
              <p>
                Public authorities publish specified categories of information
                under Section 4 of the RTI Act. The latest CFSL Hyderabad
                disclosure documents should be linked here when their current
                versions are verified.
              </p>
            </div>

            <div className="rti-disclosure-grid">
              <article>
                <h3>Organisation and functions</h3>
                <p>
                  Approved details about the laboratory’s organisation,
                  functions and duties.
                </p>
              </article>
              <article>
                <h3>Officer directory</h3>
                <p>
                  Verified public office designations and official contact
                  details, including RTI officers.
                </p>
              </article>
              <article>
                <h3>Rules, manuals and records</h3>
                <p>
                  Applicable rules, procedures, manuals and categories of
                  records available for public access.
                </p>
              </article>
              <article>
                <h3>Budget and public information</h3>
                <p>
                  Relevant disclosures and reports released by the laboratory
                  or its administrative department.
                </p>
              </article>
            </div>

            <p className="rti-small-note">
              These are categories to organise the section, not a claim that
              each document is currently available on this website. Link only
              to approved, up-to-date documents.
            </p>
          </section>

          <section
            className="rti-section"
            aria-labelledby="rti-resources-title"
          >
            <div className="rti-section-heading">
              <span className="section-kicker">Official links</span>
              <h2 id="rti-resources-title">RTI forms and resources</h2>
              <p>
                Open the relevant government source for the Act, application
                form, portal or rules.
              </p>
            </div>

            <div className="rti-resource-list">
              {resources.map((resource) => {
                const Icon = resource.icon;

                return (
                  <article
                    className="rti-resource-card"
                    key={resource.title}
                  >
                    <span className="rti-resource-icon">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <div className="rti-resource-copy">
                      <span className="rti-resource-category">
                        {resource.category}
                      </span>
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rti-resource-link"
                      >
                        {resource.action}
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <p className="rti-source-note">
            External resources are hosted by India Code, CFSL Hyderabad, the
            Department of Personnel and Training, or the Central Information
            Commission. Please check each source for the latest version and
            submission requirements. Officer details and proactive disclosure
            files should be reviewed before this page is treated as a complete
            official RTI directory.
          </p>
        </div>
      </div>
    </section>
  );
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <div className="breadcrumbs">
            <Link href="/">Home</Link><span>/</span><span>{page.title}</span>
          </div>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      {slug === "about" ? (
        <OverviewContent />
      ) : slug === "contact" ? (
        <ContactContent />
      ) : slug === "rti" ? (
        <RtiContent />
      ) : slug === "divisions" ? (
  <DivisionsContent />
) : slug === "director" ? (
  <DirectorContent />
) : (
        <section
          className={`section page-content ${
            slug === "divisions" ? "divisions-page-content" : ""
          }`}
        >
          <div
            className={`site-container ${
              slug === "divisions"
                ? "page-content-grid divisions-page-grid"
                : "page-content-single"
            }`}
          >
            {slug === "divisions" && (
              <aside
                className="side-nav division-side-nav"
                aria-label="Scientific division sections"
              >
                <span className="side-nav-heading">On this page</span>

                {divisions.map((item) => {
                  const sectionId = `division-${item.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`;

                  return (
                    <a key={item.title} href={`#${sectionId}`}>
                      {item.title}
                    </a>
                  );
                })}
              </aside>
            )}

            <article
              className={`page-article ${
                slug === "divisions" ? "divisions-article" : ""
              }`}
            >
              <span className="section-kicker">
                CFSL Hyderabad · Draft content
              </span>

              <h2>{page.heading}</h2>

              {page.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {slug !== "divisions" && (
                <ul className="article-list">
                  {page.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {slug === "divisions" && (
                <div className="card-grid divisions-card-grid">
                  {divisions.map((item) => {
                    const sectionId = `division-${item.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")
                      .replace(/(^-|-$)/g, "")}`;

                    return (
                      <article
                        className="content-card division-card"
                        id={sectionId}
                        key={item.title}
                      >
                        <span className="card-icon" aria-hidden="true">
                          {item.icon}
                        </span>

                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    );
                  })}
                </div>
              )}

              {slug === "notices" && (
                <ul className="article-list">
                  {notices.map((item) => (
                    <li key={item.title}>
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

function DirectorContent() {
  return (
    <section className="section page-content director-page-content">
      <div className="site-container">
        <article className="director-message-card">
          <div className="director-portrait-wrap">
            <Image
              src="/CFSL_HYD_Director_1.jpeg"
              alt="Deepak Midha, Director of CFSL Hyderabad"
              width={597}
              height={800}
              className="director-portrait"
              priority
            />

            <div className="director-nameplate">
              <h2>Deepak Midha</h2>
              <p>Director, CFSL Hyderabad</p>
            </div>
          </div>

          <div className="director-message-copy">
            <span className="section-kicker">
              A message from the Director
            </span>

            <h2>Committed to scientific service and justice</h2>

            <p>
              It is my pleasure to welcome you to the website of the
              Central Forensic Science Laboratory, Hyderabad.
            </p>

            <p>
              Forensic science plays an important role in supporting the
              justice system through objective, reliable and scientifically
              grounded examination. Our laboratory remains committed to
              professionalism, impartiality, integrity and the careful
              examination of material referred to us.
            </p>

            <p>
              We recognise the importance of working closely with
              investigating agencies and other stakeholders, while
              maintaining appropriate scientific standards and the
              confidentiality required in forensic work. We also value
              transparency and the responsible sharing of institutional
              information with the public.
            </p>

            <p>
              Through continued learning, collaboration and the responsible
              use of scientific methods and technology, we strive to
              strengthen the quality of forensic services and contribute
              to the fair administration of justice.
            </p>

            <p className="director-signoff">
              With best wishes,
              <br />
              <strong>Deepak Midha</strong>
              <br />
              Director, CFSL Hyderabad
            </p>

            <p className="director-draft-note">
              General draft message — subject to review and approval
              before publication.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function OverviewContent() {
  const shortcuts = [
    { href: "/divisions", title: "Scientific Divisions", description: "Explore the laboratory's scientific disciplines and areas of expertise.", icon: Microscope },
    { href: "/services", title: "Services", description: "Find service information and case-forwarding guidance.", icon: FileCheck2 },
    { href: "/notices", title: "Notices & Updates", description: "See public announcements and institutional updates.", icon: ArrowRight },
    { href: "/rti", title: "Public Information", description: "Access RTI-related information and public resources.", icon: ShieldCheck },
  ];

  return (
    <section className="section page-content overview-page-content">
      <div className="site-container">
        <div className="institution-intro">
          <div className="institution-copy">
            <span className="section-kicker">Government of India · Ministry of Home Affairs</span>
            <h2>Scientific examination in support of justice</h2>
            <p>
              The Central Forensic Science Laboratory (CFSL), Hyderabad is a Government of India laboratory
              associated with the Ministry of Home Affairs and the Directorate of Forensic Science Services.
              Its institutional purpose is to support forensic science through the scientific examination of
              evidence referred for analysis.
            </p>
            <p>
              This page provides a concise introduction to the laboratory. Detailed information about individual
              divisions, service procedures, notices, public information and contact channels remains available
              in the dedicated sections of this website.
            </p>
          </div>
          <figure className="institution-photo">
            <Image
              src="/IMG_2879.JPG"
              alt="Signboard at the Central Forensic Science Laboratory, Ramanthapur, Hyderabad"
              width={1248}
              height={1248}
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
            <figcaption>Central Forensic Science Laboratory · Ramanthapur, Hyderabad</figcaption>
          </figure>
        </div>

        <div className="institution-facts" aria-label="Institutional details">
          <article className="institution-fact">
            <span className="institution-fact-icon"><Building2 size={22} aria-hidden="true" /></span>
            <div>
              <span className="institution-fact-label">Administrative affiliation</span>
              <h3>Government of India</h3>
              <p>Ministry of Home Affairs · Directorate of Forensic Science Services</p>
            </div>
          </article>
          <article className="institution-fact">
            <span className="institution-fact-icon"><MapPin size={22} aria-hidden="true" /></span>
            <div>
              <span className="institution-fact-label">Location </span>
              <h3>Ramanthapur, Hyderabad</h3>
              <p>Hyderabad – 500 013, Telangana, India</p>
            </div>
          </article>
          <article className="institution-fact">
            <span className="institution-fact-icon"><Award size={22} aria-hidden="true" /></span>
            <div>
              <span className="institution-fact-label">Accreditation </span>
              <h3>ISO/IEC 17025 (2017)</h3>
              <p>The signboard displays “An ISO - IEC 17025 (2017) Accredited Laboratory.” Current accreditation status and applicable standard edition should be verified before publication as a current claim.</p>
            </div>
          </article>
        </div>

        <section className="institution-role" aria-labelledby="institution-role-title">
          <div className="institution-role-mark"><Microscope size={28} aria-hidden="true" /></div>
          <div>
            <span className="section-kicker">Institutional role</span>
            <h2 id="institution-role-title">Evidence examined through scientific methods</h2>
            <p>
              Forensic science applies scientific methods to the examination of material connected with
              investigations. The findings of an examination may assist investigators and courts in assessing
              evidence. The exact nature of an examination depends on the material received, the questions referred
              and the laboratory's confirmed capabilities.
            </p>
          </div>
        </section>

        <section className="overview-shortcuts" aria-labelledby="overview-shortcuts-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Explore this website</span>
              <h2 id="overview-shortcuts-title">Find the information you need</h2>
              <p className="section-intro">Use these shortcuts to open dedicated pages for detailed information, without repeating their contents here.</p>
            </div>
          </div>
          <div className="card-grid overview-shortcut-grid">
            {shortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <Link className="content-card overview-shortcut-card" href={item.href} key={item.href}>
                  <span className="card-icon"><Icon size={23} aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="text-link">Open section <ArrowRight size={16} aria-hidden="true" /></span>
                </Link>
              );
            })}
          </div>
          <p className="overview-contact-line">For the laboratory's address and official communication channels, visit <Link className="text-link" href="/contact">Contact Us <ArrowRight size={15} aria-hidden="true" /></Link>.</p>
        </section>
      </div>
    </section>
  );
}

function ContactContent() {
  return (
    <section className="section page-content contact-page-content">
      <div className="site-container">
        <div className="contact-content">        
          <section className="page-article contact-intro">
            <span className="section-kicker">Central Forensic Science Laboratory · Hyderabad</span>
            <h2>Contact information</h2>
            <p>
              Use the publicly listed institutional address and email below to contact CFSL Hyderabad.
              For case submissions, evidence forwarding or visits, confirm the applicable procedure with
              the laboratory before sending material or travelling to the premises.
            </p>
          </section>

          <div className="contact-cards">
            <article className="contact-card contact-address-card">
              <span className="contact-card-icon"><MapPin size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">Postal address</span>
                <h3>Central Forensic Science Laboratory, Hyderabad</h3>
                <address>
                  Directorate of Forensic Science Services<br />
                  Ministry of Home Affairs, Government of India<br />
                  Ramanthapur, Amberpet Post<br />
                  Hyderabad – 500 013, Telangana, India
                </address>
                <a
                  className="contact-action"
                  href="https://www.google.com/maps/search/?api=1&query=Central+Forensic+Science+Laboratory+Ramanthapur+Amberpet+Post+Hyderabad+500013"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon"><Mail size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">Publicly listed email</span>
                <h3>Email the laboratory</h3>
                <a className="contact-value" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWgTlJBhmZmjJZBvNvmlcdVdztKWmrnsVvrWLzxHpzMcGFrHpFKgSHNCmxXCbPDpkJzdq">
                  director.cfsl-hyd@gov.in
                </a>
                <p className="contact-note">
                  This address is listed in the Government of India’s India Science, Technology &amp; Innovation
                  institutional directory. If your message is time-sensitive, verify the address through the
                  official website as well.
                </p>
              </div>
            </article>

            <article className="contact-card">
              <span className="contact-card-icon"><Globe size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">Official website</span>
                <h3>CFSL Hyderabad online</h3>
                <a className="contact-action" href="https://cfslhyd.gov.in/" target="_blank" rel="noreferrer">
                  Visit cfslhyd.gov.in <ExternalLink size={15} aria-hidden="true" />
                </a>
                <p className="contact-note">
                  The official site has recently displayed a maintenance notice, so some information may
                  temporarily be unavailable.
                </p>
              </div>
            </article>

            <article className="contact-card contact-caution-card">
              <span className="contact-card-icon"><ShieldCheck size={22} aria-hidden="true" /></span>
              <div>
                <span className="contact-card-label">Before visiting or sending evidence</span>
                <h3>Confirm the current procedure</h3>
                <p>
                  Current telephone numbers, public visiting hours and appointment requirements could not be
                  confirmed from a current official contact page. Please verify these details with the laboratory
                  before visiting. Do not send physical evidence or confidential case material to an unverified
                  email address.
                </p>
              </div>
            </article>
          </div>

          <p className="contact-source-note">
            Address and email cross-checked against the Government of India’s India Science, Technology &amp;
            Innovation institutional directory. Contact details can change; this page should be reviewed
            periodically before being treated as the laboratory’s definitive public contact directory.
          </p>
        </div>
      </div>
    </section>
  );
}
