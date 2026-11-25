import Link from "next/link";
import { notFound } from "next/navigation";
import { getOfficerBySlug } from "../../../data/officers";
import { localizeOfficer, officerText as t } from "../../../data/officers-i18n";
import { getLang } from "../../../lib/i18n-server";

type OfficerPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OfficerProfilePage({ params }: OfficerPageProps) {
  const { slug } = await params;
  const lang = await getLang();
  const base = getOfficerBySlug(slug);

  if (!base) notFound();

  const officer = localizeOfficer(base, lang);

  const hasVerifiedDetails =
    Boolean(officer.biography) ||
    officer.qualifications.length > 0 ||
    Boolean(officer.experience) ||
    officer.specialisations.length > 0 ||
    Boolean(officer.email) ||
    Boolean(officer.officePhone);

  return (
    <main className="section page-content officer-profile-page">
      <div className="site-container">
        <Link href="/divisions" className="officer-profile-back">
          {t.back[lang]}
        </Link>

        <section className="officer-profile-card">
          <div className="officer-profile-intro">
            {officer.photo ? (
              <img
                className="officer-profile-photo"
                src={officer.photo}
                alt={t.portraitOf[lang](officer.name)}
              />
            ) : (
              <div className="officer-profile-placeholder" aria-hidden="true">
                {/* Initials come from the English name so they render the same in every language */}
                {base.name
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")
                  .replace(".", "")}
              </div>
            )}

            <div className="officer-profile-heading">
              <span className="section-kicker">{t.kicker[lang]}</span>
              <h1>{officer.name}</h1>
              <p>{officer.designation}</p>
            </div>
          </div>

          {!hasVerifiedDetails ? (
            <p className="officer-profile-notice">{t.notice[lang]}</p>
          ) : null}

          {officer.biography ? (
            <section className="officer-profile-section">
              <h2>{t.profile[lang]}</h2>
              <p>{officer.biography}</p>
            </section>
          ) : null}

          {officer.qualifications.length > 0 ? (
            <section className="officer-profile-section">
              <h2>{t.qualifications[lang]}</h2>
              <ul>
                {officer.qualifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {officer.experience ? (
            <section className="officer-profile-section">
              <h2>{t.experience[lang]}</h2>
              <p>{officer.experience}</p>
            </section>
          ) : null}

          {officer.specialisations.length > 0 ? (
            <section className="officer-profile-section">
              <h2>{t.specialisations[lang]}</h2>
              <ul>
                {officer.specialisations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {officer.email || officer.officePhone ? (
            <section className="officer-profile-section">
              <h2>{t.contact[lang]}</h2>
              <dl className="officer-profile-contact">
                {officer.email ? (
                  <>
                    <dt>{t.email[lang]}</dt>
                    <dd>
                      <a href={`mailto:${officer.email}`}>{officer.email}</a>
                    </dd>
                  </>
                ) : null}
                {officer.officePhone ? (
                  <>
                    <dt>{t.phone[lang]}</dt>
                    <dd>
                      <a href={`tel:${officer.officePhone}`}>{officer.officePhone}</a>
                    </dd>
                  </>
                ) : null}
              </dl>
            </section>
          ) : null}
        </section>
      </div>
    </main>
  );
}