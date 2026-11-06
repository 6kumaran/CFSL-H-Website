
"use client";

import { useState } from "react";
import Link from "next/link";
import { divisions } from "../data/site-content";
import { officerProfiles } from "../data/officers";

type DivisionDetail = {
  hod: string;
  overview: string;
  history: string;
  work: string[];
  facilities: string;
};

const divisionDetails: Record<string, DivisionDetail> = {
  "Digital Forensics": {
    hod: "Dr. Maheshwari",
    overview:
      "Digital Forensics focuses on the scientific identification, preservation, acquisition, examination and interpretation of electronic evidence. Digital devices such as computers, mobile phones, storage media and other electronic systems can contain valuable information relevant to an investigation. Forensic examination aims to recover and analyse relevant digital artefacts while maintaining the integrity and traceability of the evidence. The findings can help investigators understand digital activities, establish timelines and interpret information associated with an incident. The exact services and supported technologies depend on the laboratory's approved capabilities.",
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

  "Physics Sciences": {
    hod: "Dr. Maheshwari",
    overview:
      "Forensic Physics applies principles of physics, engineering and material science to the examination of physical evidence. It can help establish the nature, characteristics and possible origin of materials or objects recovered during an investigation. Depending on the type of evidence, examinations may involve measurements, physical comparisons, structural assessment and scientific interpretation. The objective is to convert physical observations into reliable findings that can assist investigative and judicial processes. The specific examination areas available at CFSL Hyderabad require confirmation.",
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
    hod: "Dr. Maheshwari",
    overview:
      "Forensic Ballistics deals with the scientific examination of firearms, ammunition and evidence associated with firearm-related incidents. Examinations can help assess the characteristics of submitted firearms, compare relevant ammunition components and study marks or other features associated with their use. Scientific comparison and interpretation of ballistic evidence may help establish connections between submitted exhibits and provide information relevant to an investigation. The exact range of examinations offered depends on the laboratory's approved scope.",
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
      "Forensic Biology involves the scientific examination of biological materials that may be recovered from crime scenes, objects or other submitted exhibits. Such material can include blood, hair, tissue and other biological traces, depending on the nature of the case. Examination may help determine the nature and relevance of biological evidence and support further scientific analysis. Biological evidence can be particularly important in investigations involving physical contact, violence and unexplained biological traces. The availability of specific serological and DNA examination services at CFSL Hyderabad should be confirmed.",
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
      "Forensic Chemistry applies analytical chemistry to the examination of substances, residues and materials associated with criminal investigations. Scientific analysis can help identify, characterise or compare submitted samples and provide information about their chemical composition. Depending on the evidence and analytical requirements, examinations may involve laboratory-based testing and instrumental techniques. The results can assist in investigations involving unknown substances, chemical residues and other material evidence. Specific analytical facilities and the categories of samples examined at CFSL Hyderabad require official confirmation.",
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
      "Questioned Document Examination focuses on the scientific assessment of documents whose authenticity, authorship or physical characteristics are in dispute. Documents may be examined for handwriting and signature characteristics, alterations, additions, erasures, printing features and other relevant details, where applicable. Comparative examination can help assess similarities and differences between questioned and known material. Such examinations are valuable in cases involving disputed records, suspected document manipulation and other document-related evidence. The precise services available depend on the laboratory's approved scope.",
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

  "Explosive Forensics": {
    hod: "To be confirmed",
    overview:
      "Forensic examination of explosives focuses on the scientific analysis of materials, residues and evidence associated with suspected explosive incidents. Such examinations can help determine the nature and characteristics of submitted materials, identify relevant chemical traces and assess evidence recovered from incident scenes. The analysis of post-blast residues and associated physical evidence may provide valuable information for reconstructing events and supporting investigations. The specific examination methods, facilities and capabilities available at CFSL Hyderabad should be confirmed through official laboratory records.",
    history:
      "The history and organisational position of this section require official confirmation.",
    work: [
  "Scientific examination of materials and residues associated with suspected explosive incidents.",
  "Analysis of relevant post-blast residues and physical evidence, where applicable.",
  "Identification and characterisation of submitted explosive-related samples within the approved scope.",
  "Documentation and interpretation of scientific examination findings.",
],
facilities:
  "Specific analytical instruments, explosive examination facilities and post-blast analysis capabilities require confirmation from official laboratory records.",
  },

  "Research & Development": {
    hod: "To be confirmed",
    overview:
      "Research and Development plays an important role in advancing forensic science through the study, evaluation and improvement of scientific methods and practices. Research activities can contribute to the development of examination procedures, the evaluation of emerging technologies and improvements in the reliability and efficiency of forensic analysis. Collaboration, technical knowledge sharing and scientific training can also support the wider development of forensic capabilities. The specific research programmes, projects and collaborations undertaken by CFSL Hyderabad should be included once verified from official records.",
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

  "Psychological Forensics": {
    hod: "To be confirmed",
    overview:
      "Psychological Forensics concerns the application of psychological knowledge and scientific assessment methods to questions arising in legal and investigative contexts. Depending on the approved scope, relevant work may involve the assessment of psychological factors, interpretation of behavioural information and preparation of structured professional observations. Psychological perspectives can contribute to a broader understanding of matters referred for forensic examination. The exact responsibilities, assessment methods and services associated with this section at CFSL Hyderabad require official confirmation.",
    history:
      "The establishment history and milestones of this section need official confirmation.",
    work: [
      "Scientific assessment of psychological aspects within the approved scope.",
      "Application of suitable psychological evaluation methods.",
      "Documentation of observations and findings.",
      "Preparation of reports for the referring authority.",
    ],
    facilities:
      "Specific psychological assessment tools, facilities and examination capabilities require confirmation from the laboratory.",
  },
};

/*
 * Maps navigation labels to the existing detail-record keys.
 * Departments without an existing detail record use the fallback content.
 */
const divisionDetailKeyMap: Record<string, string> = {
  "Digital Forensics": "Digital Forensics",
  "Physics Forensics": "Physics Sciences",
  "Chemical Forensics": "Chemical Sciences",
  "Chemical Sciences": "Chemical Sciences",
  "Biology Forensics": "Biological Sciences",
  "Biological Sciences": "Biological Sciences",
  "Questioned Documents Forensics": "Questioned Documents",
  "Explosive Forensics": "Explosive Forensics",
  "Questioned Documents": "Questioned Documents",
  "Ballistics Forensics": "Ballistics",
  "Research & Development": "Research & Development",
  "Psychological Forensics": "Psychological Forensics",
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
  "Psychological Forensics":
    "Scientific examination of psychological aspects related to forensic investigations.",
};

const divisionImages: Record<string, string> = {
  "Digital Forensics": "/images/divisions/digital-forensics.png",
  "Physics Forensics": "/images/divisions/physics-forensics.png",
  "Chemical Forensics": "/images/divisions/chemical-forensics.png",
  "Biology Forensics": "/images/divisions/biology-forensics.png",
  "Questioned Documents": "/images/divisions/questioned-documents.png",
  "Explosive Forensics": "/images/divisions/explosive-forensics.png",
  "Ballistics Forensics": "/images/divisions/ballistics.png",
  "DNA Forensics": "/images/divisions/dna-forensics.png",
  "Narcotics & Drugs Forensics": "/images/divisions/narcotics.png",
  "Toxicology Forensics": "/images/divisions/toxicology.png",
  "Psychological Forensics": "/images/divisions/psychological-forensics.png",
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

              <h2>{selected}</h2>

              <p>{current?.overview}</p>

              <div className="division-detail-block">
                <h3>Head of Department</h3>
                <p>
                  {current?.hod && officerProfiles[current.hod] ? (
                    <Link
                      className="division-hod-link"
                      href={`/officers/${officerProfiles[current.hod].slug}`}
                    >
                      {current.hod}
                    </Link>
                  ) : (
                    current?.hod
                  )}
                </p>
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
