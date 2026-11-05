
"use client";

import { useState } from "react";
import Link from "next/link";
import JSZip from "jszip";

type CaseDocument = {
  id: string;
  title: string;
  description: string;
  filename: string;
  path: string;
};

// Sample documents included in the ZIP download.
const documents: CaseDocument[] = [
  {
    id: "case-opening",
    title: "Case Opening",
    description: "Sample case opening document.",
    filename: "case-opening.docx",
    path: "/documents/case-forwarding/case-opening.docx",
  },
  {
    id: "case-fir",
    title: "Case / FIR",
    description: "Sample Case / FIR document.",
    filename: "case-fir.docx",
    path: "/documents/case-forwarding/case-fir.docx",
  },
  {
    id: "chain-of-custody",
    title: "Chain of Custody",
    description: "Sample chain of custody document.",
    filename: "chain-of-custody.docx",
    path: "/documents/case-forwarding/chain-of-custody.docx",
  },
];

const forwardingLetterPath =
  "/documents/case-forwarding/Case_Forwarding_Letter.pdf";

export default function CaseForwardingChecklistPage() {
  const [isPreparing, setIsPreparing] = useState(false);
  const [status, setStatus] = useState("");

  const downloadZip = async () => {
    setIsPreparing(true);
    setStatus("Preparing sample documents…");

    try {
      const zip = new JSZip();
      const folder = zip.folder("CFSL-Case-Forwarding-Samples");

      if (!folder) {
        throw new Error("Could not create the ZIP folder.");
      }

      // Fetch all sample documents.
      const results = await Promise.all(
        documents.map(async (doc) => {
          const response = await fetch(doc.path);

          if (!response.ok) {
            throw new Error(
              `Could not load ${doc.title}. Please try again.`
            );
          }

          return {
            doc,
            blob: await response.blob(),
          };
        })
      );

      // Add documents to ZIP.
      for (const { doc, blob } of results) {
        folder.file(doc.filename, blob);
      }

      // Include a reference checklist.
      const checklist = [
        "CFSL HYDERABAD - CASE FORWARDING",
        "SAMPLE DOCUMENTS",
        "",
        "Documents included:",
        ...documents.map((doc, index) => `${index + 1}. ${doc.title}`),
        "",
        `Prepared on: ${new Date().toLocaleString()}`,
        "",
        "Note: These are sample documents provided for reference.",
        "Please verify the applicable official requirements before",
        "forwarding a case to CFSL Hyderabad.",
      ].join("\n");

      folder.file("Readme-Document-Checklist.txt", checklist);

      // Generate ZIP.
      const blob = await zip.generateAsync({
        type: "blob",
      });

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");

      anchor.href = url;
      anchor.download = "CFSL-Case-Forwarding-Sample-Documents.zip";

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      window.setTimeout(() => URL.revokeObjectURL(url), 1000);

      setStatus(
        "Sample ZIP downloaded successfully."
      );
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "The ZIP could not be created. Please try again."
      );
    } finally {
      setIsPreparing(false);
    }
  };

  return (
    <main>
      {/* Page Banner */}
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>Case Forwarding Checklist</span>
          </nav>

          <h1>Case Forwarding Checklist</h1>

          <p>
            Guidelines and document requirements for forwarding
            cases to CFSL Hyderabad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-checklist-page">
        <div className="case-checklist-shell">

          {/* Introduction */}
          <div className="case-checklist-intro">
            <span className="case-checklist-eyebrow">
              Case Forwarding Guidelines
            </span>

            <h1>Documents Required for Case Forwarding</h1>

            <p>
              Before forwarding a case to the Central Forensic
              Science Laboratory, Hyderabad, please refer to the
              following document requirements and prepare the
              necessary supporting documents.
            </p>
          </div>

          <div className="case-checklist-panel">

            {/* Section 1: Forwarding Letter */}
            <div className="case-checklist-panel-head">
              <h2>1. Case Forwarding Letter</h2>
              <p>
                Refer to the sample case forwarding letter
                provided below.
              </p>
            </div>

            <div className="case-checklist-body">
              
<div className="case-forwarding-letter">
  <a
    href={forwardingLetterPath}
    target="_blank"
    rel="noopener noreferrer"
    className="case-forwarding-letter-open"
    aria-label="Open Case Forwarding Letter PDF in a new tab"
  >
    <span className="case-forwarding-pdf-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
      </svg>
    </span>

    <span className="case-forwarding-letter-details">
      <strong>Case Forwarding Letter.pdf</strong>
      <small>PDF Document</small>
    </span>
  </a>

  <a
    href={forwardingLetterPath}
    download="Case_Forwarding_Letter.pdf"
    className="case-checklist-button secondary"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
    Download PDF
  </a>
</div>

            </div>

            {/* Section 2: Document Requirements */}
            <div className="case-checklist-panel-head">
              <h2>2. Documents Required</h2>
              <p>
                The following supporting documents should be
                prepared for case forwarding.
              </p>
            </div>

            
<div className="case-checklist-body">
  <ul className="case-forwarding-requirements">
    <li>
      <strong>Case Opening Document</strong>
      <span>
        Relevant case opening details and information.
      </span>
    </li>

    <li>
      <strong>Case / FIR Copy</strong>
      <span>
        A copy of the relevant case details or FIR.
      </span>
    </li>

    <li>
      <strong>Chain of Custody Document</strong>
      <span>
        Documentation relating to the handling and transfer
        of submitted exhibits or evidence.
      </span>
    </li>
  </ul>
</div>

            <div className="case-checklist-body">
              <div className="case-forwarding-download">


                <button
                  type="button"
                  className="case-checklist-button"
                  onClick={downloadZip}
                  disabled={isPreparing}
                >
                  {isPreparing ? (
                    "Preparing ZIP…"
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <path d="m7 10 5 5 5-5" />
                        <path d="M12 15V3" />
                      </svg>
                      Download Sample ZIP
                    </>
                  )}
                </button>
              </div>

              <p
                className="case-checklist-status"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="case-checklist-disclaimer">
            <strong>Please note:</strong> The documents provided
            are sample materials for reference purposes only.
            Please verify the latest applicable instructions
            and document requirements issued by CFSL Hyderabad
            before forwarding a case. This page does not replace
            official guidance.
          </p>

        </div>
      </section>
    </main>
  );
}
