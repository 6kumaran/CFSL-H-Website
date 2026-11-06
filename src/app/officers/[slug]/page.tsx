import Link from "next/link";
import { notFound } from "next/navigation";
import { getOfficerBySlug } from "../../../data/officers";

type OfficerPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function OfficerProfilePage({ params }: OfficerPageProps) {
  const { slug } = await params;
  const officer = getOfficerBySlug(slug);

  if (!officer) notFound();

  const hasVerifiedDetails =
    Boolean(officer.biography) ||
    officer.qualifications.length > 0 ||
    Boolean(officer.experience) ||
    officer.specialisations.length > 0 ||
    Boolean(officer.email) ||
    Boolean(officer.officePhone) ||
    Boolean(officer.officeLocation);

  return (
    <main className="section page-content officer-profile-page">
      <div className="site-container">
        <Link href="/divisions" className="officer-profile-back">
          ← Back to Scientific Divisions
        </Link>

        <section className="officer-profile-card">
          <div className="officer-profile-intro">
            {officer.photo ? (
              <img
                className="officer-profile-photo"
                src={officer.photo}
                alt={`Portrait of ${officer.name}`}
              />
            ) : (
              <div className="officer-profile-placeholder" aria-hidden="true">
                {officer.name
                  .split(" ")
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((part) => part[0])
                  .join("")
                  .replace(".", "")}
              </div>
            )}

            <div className="officer-profile-heading">
              <span className="section-kicker">CFSL Hyderabad · Officer Profile</span>
              <h1>{officer.name}</h1>
              <p>{officer.designation}</p>
            </div>
          </div>

          {!hasVerifiedDetails ? (
            <p className="officer-profile-notice">
              The official profile information for this officer is being
              compiled. Biography, qualifications, experience, photograph and
              official contact details will be published here after
              verification.
            </p>
          ) : null}

          {officer.biography ? (
            <section className="officer-profile-section">
              <h2>Professional Profile</h2>
              <p>{officer.biography}</p>
            </section>
          ) : null}

          {officer.qualifications.length > 0 ? (
            <section className="officer-profile-section">
              <h2>Qualifications</h2>
              <ul>
                {officer.qualifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {officer.experience ? (
            <section className="officer-profile-section">
              <h2>Professional Experience</h2>
              <p>{officer.experience}</p>
            </section>
          ) : null}

          {officer.specialisations.length > 0 ? (
            <section className="officer-profile-section">
              <h2>Areas of Specialisation</h2>
              <ul>
                {officer.specialisations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {officer.email || officer.officePhone || officer.officeLocation ? (
            <section className="officer-profile-section">
              <h2>Official Contact</h2>
              <dl className="officer-profile-contact">
                {officer.email ? (
                  <>
                    <dt>Email</dt>
                    <dd>
                      <a href={`mailto:${officer.email}`}>{officer.email}</a>
                    </dd>
                  </>
                ) : null}
                {officer.officePhone ? (
                  <>
                    <dt>Office Phone</dt>
                    <dd>
                      <a href={`tel:${officer.officePhone}`}>{officer.officePhone}</a>
                    </dd>
                  </>
                ) : null}
                {officer.officeLocation ? (
                  <>
                    <dt>Office Location</dt>
                    <dd>{officer.officeLocation}</dd>
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
