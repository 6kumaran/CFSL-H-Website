
"use client";

import { useState } from "react";
import { divisions } from "../data/site-content";

type DivisionDetail = {
  hod: string;
  overview: string;
  history: string;
  work: string[];
  facilities: string;
};

const divisionDetails: Record<string, DivisionDetail> = {
  "Digital Forensics": {
    hod: "Smt. Maheshwari",
    overview:
      "Digital forensics concerns the scientific examination of digital devices and electronic evidence to help establish relevant facts in an investigation. The exact scope depends on the evidence received and the laboratory's confirmed capabilities.",
    history:
      "The establishment history and milestones of the Digital Forensics section need confirmation from CFSL Hyderabad's official records.",
    work: [
      "Examination of digital devices and electronic evidence, subject to the laboratory's approved scope.",
      "Identification and analysis of relevant digital artefacts.",
      "Documentation of examination procedures and findings.",
      "Preparation of scientific findings for the referring authority.",
    ],
    facilities:
      "Specific forensic tools, supported devices, laboratory facilities and examination capabilities should be added after verification.",
  },

  "Physical Sciences": {
    hod: "Smt. Maheshwari",
    overview:
      "Physical-science examinations apply scientific methods to relevant physical evidence. This section is presented as a general overview; the laboratory's precise organisational structure and scope should be confirmed.",
    history:
      "Department establishment dates and historical milestones have not yet been verified.",
    work: [
      "Scientific examination of relevant physical evidence within the approved scope.",
      "Application of suitable measurement, comparison and analytical methods.",
      "Recording observations and examination results.",
      "Preparation of technical findings for the referring authority.",
    ],
    facilities:
      "The specific facilities and instruments used by CFSL Hyderabad need official confirmation.",
  },

  "Ballistics": {
    hod: "Smt. Maheshwari",
    overview:
      "Forensic ballistics examines firearms-related evidence using scientific methods. The exact examinations offered by CFSL Hyderabad should be confirmed before publishing a definitive service list.",
    history:
      "The department's history and development milestones remain to be confirmed.",
    work: [
      "Scientific examination of firearms-related evidence, where within the approved scope.",
      "Examination of relevant ammunition and associated components.",
      "Comparison and interpretation of suitable ballistic evidence.",
      "Documentation of findings and preparation of forensic reports.",
    ],
    facilities:
      "Specific equipment, comparison facilities and examination capabilities require confirmation from the laboratory.",
  },

  "Biological Sciences": {
    hod: "To be confirmed",
    overview:
      "Biological forensic examination applies scientific methods to biological material that may be relevant to an investigation.",
    history:
      "The establishment history and milestones of this section need official confirmation.",
    work: [
      "Examination of biological material within the laboratory's approved scope.",
      "Scientific assessment and documentation of relevant findings.",
      "Interpretation of results in the context of the questions referred.",
      "Preparation of reports for the referring authority.",
    ],
    facilities:
      "Confirm whether and which biological, serological or DNA examination facilities are available at CFSL Hyderabad.",
  },

  "Chemical Sciences": {
    hod: "To be confirmed",
    overview:
      "Chemical forensic examination uses analytical methods to identify or characterise substances and residues relevant to investigations.",
    history:
      "Official establishment dates and departmental milestones have not yet been confirmed.",
    work: [
      "Chemical analysis of submitted samples within the approved scope.",
      "Identification or characterisation of relevant substances and residues.",
      "Use of suitable analytical methods to support examination findings.",
      "Documentation and reporting of analytical results.",
    ],
    facilities:
      "Instrument names, analytical capabilities and the categories of samples accepted must be confirmed from official sources.",
  },

  "Questioned Documents": {
    hod: "To be confirmed",
    overview:
      "Questioned-document examination can involve the scientific assessment of documents whose authorship, authenticity or features are disputed.",
    history:
      "The history and organisational position of this section require official confirmation.",
    work: [
      "Examination of questioned documents within the approved scope.",
      "Comparison of relevant handwriting or signatures, where applicable.",
      "Assessment of suspected alterations or other document features, where supported.",
      "Recording observations and reporting examination findings.",
    ],
    facilities:
      "Specific document-examination instruments and the services available locally need confirmation.",
  },

  "Research & Development": {
    hod: "To be confirmed",
    overview:
      "Research and development can support improvements in forensic methods, scientific knowledge, training and laboratory practice.",
    history:
      "The section's establishment and documented milestones have not yet been verified.",
    work: [
      "Research activities relevant to forensic science, where undertaken.",
      "Evaluation or improvement of scientific examination methods.",
      "Technical knowledge sharing and training, where officially supported.",
      "Scientific collaboration and development activities, where applicable.",
    ],
    facilities:
      "Specific research programmes, collaborations and dedicated facilities should be added only after verification.",
  },
};

/*
 * Maps navigation labels to the existing detail-record keys.
 * Departments without an existing detail record use the fallback content.
 */
const divisionDetailKeyMap: Record<string, string> = {
  "Digital Forensics": "Digital Forensics",
  "Physics Forensics": "Physical Sciences",
  "Physical Sciences": "Physical Sciences",
  "Chemical Forensics": "Chemical Sciences",
  "Chemical Sciences": "Chemical Sciences",
  "Biology Forensics": "Biological Sciences",
  "Biological Sciences": "Biological Sciences",
  "Questioned Documents Forensics": "Questioned Documents",
  "Questioned Documents": "Questioned Documents",
  "Ballistics Forensics": "Ballistics",
  "Research & Development": "Research & Development",
};

const fallbackDetail: DivisionDetail = {
  hod: "To be confirmed",
  overview: "Official information for this division is being compiled.",
  history: "Department history needs official confirmation.",
  work: [
    "Add verified areas of expertise.",
    "Add the confirmed examination scope.",
    "Add official reporting and submission guidance.",
  ],
  facilities: "Facilities and instruments need official confirmation.",
};

const divisionDescriptions: Record<string, string> = {
  "Digital Forensics":
    "Examination of digital devices and electronic evidence.",
  "Physics Forensics":
    "Scientific examination of physical evidence using suitable methods.",
  "Physical Sciences":
    "Scientific examination and analysis of physical evidence.",
  "Chemical Forensics":
    "Analysis and characterisation of chemical substances and residues.",
  "Chemical Sciences":
    "Scientific analysis of substances and chemical evidence.",
  "Biology Forensics":
    "Examination of biological material relevant to investigations.",
  "Biological Sciences":
    "Scientific examination of biological evidence.",
  "Questioned Documents Forensics":
    "Examination of questioned documents and disputed document features.",
  "Questioned Documents":
    "Scientific examination of questioned documents.",
  "Explosive Forensics":
    "Scientific examination of explosive-related evidence.",
  "Ballistics Forensics":
    "Examination of firearms-related evidence.",
  "DNA Forensics":
    "Examination of DNA-related evidence, subject to the laboratory's scope.",
  "Narcotics & Drugs Forensics":
    "Examination of suspected narcotic and drug-related substances.",
  "Toxicology Forensics":
    "Scientific examination of toxic substances and related evidence.",
};

const divisionImages: Record<string, string> = {
  "Digital Forensics": "/images/divisions/digital-forensics.jpg",
  "Physics Forensics": "/images/divisions/physics-forensics.jpg",
  "Chemical Forensics": "/images/divisions/chemical-forensics.jpg",
  "Biology Forensics": "/images/divisions/biology-forensics.jpg",
  "Questioned Documents": "/images/divisions/questioned-documents.jpg",
  "Explosive Forensics": "/images/divisions/explosive-forensics.jpg",
  "Ballistics Forensics": "/images/divisions/ballistics.jpg",
  "DNA Forensics": "/images/divisions/dna-forensics.jpg",
  "Narcotics & Drugs Forensics": "/images/divisions/narcotics.jpg",
  "Toxicology Forensics": "/images/divisions/toxicology.jpg",
};

export default function DivisionsContent() {
  const [selected, setSelected] = useState<string | null>(null);

  // Use the existing divisions list and add Ballistics only if it is absent.
  const divisionTitles = Array.from(
    new Set([
      ...divisions.map((item) => item.title),
    ])
  );

  // Resolve navigation labels to the existing detail records.
  const detailKey = selected
    ? divisionDetailKeyMap[selected] ?? selected
    : null;

  const current: DivisionDetail | null = detailKey
    ? divisionDetails[detailKey] ?? fallbackDetail
    : null;

  return (
    <section className="section page-content divisions-page-content">
      <div className="site-container page-content-grid divisions-page-grid">

        {/* Sidebar remains visible in both directory and detail views */}
        <aside
          className="side-nav division-side-nav"
          aria-label="Scientific divisions"
        >
          <span className="side-nav-heading">On this page</span>

          {divisionTitles.map((title) => (
            <button
              key={title}
              type="button"
              className={`division-selector ${
                selected === title ? "active" : ""
              }`}
              aria-current={
                selected === title ? "page" : undefined
              }
              onClick={() => setSelected(title)}
            >
              {title}
            </button>
          ))}
        </aside>

        {/* Main content changes according to the selected department */}
        <article className="page-article divisions-article">
          {!selected ? (
            <>
              <span className="section-kicker">
                CFSL Hyderabad · Scientific Divisions
              </span>

              <h2>Our Divisions</h2>

              <p>
                Explore the scientific divisions of CFSL Hyderabad.
                Select a division to learn more about its responsibilities,
                areas of work and facilities.
              </p>

              <div className="division-card-grid">
                {divisionTitles.map((title) => (
                  <button
                    key={title}
                    type="button"
                    className="division-card"
                    onClick={() => setSelected(title)}
                  >
                    <div className="division-card-image">
                      <img
  src={divisionImages[title] ?? "/images/divisions/default.jpg"}
  alt={`${title} division`}
  loading="lazy"
/>
                    </div>

                    <div className="division-card-content">
                      <h3>{title}</h3>

                      <p>
                        {divisionDescriptions[title] ??
                          "Explore the scientific examination and forensic activities associated with this division."}
                      </p>

                      <span className="division-card-link">
                        Explore division →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button
                type="button"
                className="division-back-button"
                onClick={() => setSelected(null)}
              >
                ← Back to All Divisions
              </button>

              <span className="section-kicker">
                CFSL Hyderabad · Scientific Division
              </span>

              <h2>{selected}</h2>

              <p>{current?.overview}</p>

              <div className="division-detail-block">
                <h3>Head of Department</h3>
                <p>{current?.hod}</p>
              </div>

              <div className="division-detail-block">
                <h3>Department history</h3>
                <p>{current?.history}</p>
              </div>

              <div className="division-detail-block">
                <h3>Areas of work</h3>

                <ul className="article-list">
                  {current?.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="division-detail-block">
                <h3>Facilities and instruments</h3>
                <p>{current?.facilities}</p>
              </div>

              <p className="division-source-note">
                This page is a developing information directory.
                Confirm the division's official name, responsibilities,
                officer details and facilities before treating this
                information as an official laboratory statement.
              </p>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
