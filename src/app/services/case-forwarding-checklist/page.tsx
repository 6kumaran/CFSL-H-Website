"use client";

import { useState } from "react";
import Link from "next/link";
import JSZip from "jszip";
import { useLanguage } from "../../../components/language-provider";
import { navLabel } from "../../../data/ui-text";
import { cf } from "../../../data/services-i18n";

type CaseDocument = {
  id: string;
  title: string;
  filename: string;
  path: string;
};

// Sample documents included in the ZIP download.
const documents: CaseDocument[] = [
  {
    id: "case-opening",
    title: "Case Opening",
    filename: "case-opening.docx",
    path: "/documents/case-forwarding/case-opening.docx",
  },
  {
    id: "case-fir",
    title: "Case / FIR",
    filename: "case-fir.docx",
    path: "/documents/case-forwarding/case-fir.docx",
  },
  {
    id: "chain-of-custody",
    title: "Chain of Custody",
    filename: "chain-of-custody.docx",
    path: "/documents/case-forwarding/chain-of-custody.docx",
  },
];

const forwardingLetterPath = "/documents/case-forwarding/Case_Forwarding_Letter.pdf";

type Status =
  | { kind: "idle" }
  | { kind: "preparing" }
  | { kind: "done" }
  | { kind: "load-failed"; docId: string }
  | { kind: "failed" };

class LoadError extends Error {
  docId: string;
  constructor(docId: string) {
    super("Could not load document");
    this.docId = docId;
  }
}

export default function CaseForwardingChecklistPage() {
  const { lang } = useLanguage();
  const [isPreparing, setIsPreparing] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const statusText =
    status.kind === "preparing"
      ? cf.preparing[lang]
      : status.kind === "done"
        ? cf.done[lang]
        : status.kind === "load-failed"
          ? cf.loadFailed[lang](cf.docTitles[status.docId]?.[lang] ?? status.docId)
          : status.kind === "failed"
            ? cf.failed[lang]
            : "";

  const downloadZip = async () => {
    setIsPreparing(true);
    setStatus({ kind: "preparing" });

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
            throw new LoadError(doc.id);
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

      // Include a reference checklist (in the visitor's language).
      const r = cf.readme;
      const checklist = [
        r.title[lang],
        r.sub[lang],
        "",
        r.included[lang],
        ...documents.map((doc, index) => `${index + 1}. ${cf.docTitles[doc.id][lang]}`),
        "",
        `${r.preparedOn[lang]} ${new Date().toLocaleString(cf.localeTag[lang])}`,
        "",
        ...r.note.map((line) => line[lang]),
      ].join("\n");

      folder.file("Readme-Document-Checklist.txt", checklist);

      // Generate ZIP.
      const blob = await zip.generateAsync({ type: "blob" });

      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");

      anchor.href = url;
      anchor.download = "CFSL-Case-Forwarding-Sample-Documents.zip";

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      window.setTimeout(() => URL.revokeObjectURL(url), 1000);

      setStatus({ kind: "done" });
    } catch (error) {
      setStatus(
        error instanceof LoadError
          ? { kind: "load-failed", docId: error.docId }
          : { kind: "failed" }
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
            <Link href="/">{navLabel("Home", lang)}</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services">{navLabel("Services", lang)}</Link>
            <span aria-hidden="true">/</span>
            <span>{navLabel("Case Forwarding Checklist", lang)}</span>
          </nav>

          <h1>{navLabel("Case Forwarding Checklist", lang)}</h1>

          <p>{cf.bannerText[lang]}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="case-checklist-page">
        <div className="case-checklist-shell">

          {/* Introduction */}
          <div className="case-checklist-intro">
            <span className="case-checklist-eyebrow">{cf.eyebrow[lang]}</span>

            <h1>{cf.introTitle[lang]}</h1>

            <p>{cf.introText[lang]}</p>
          </div>

          <div className="case-checklist-panel">

            {/* Section 1: Forwarding Letter */}
            <div className="case-checklist-panel-head">
              <h2>{cf.s1Title[lang]}</h2>
              <p>{cf.s1Text[lang]}</p>
            </div>

            <div className="case-checklist-body">
              <div className="case-forwarding-letter">
                <a
                  href={forwardingLetterPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-forwarding-letter-open"
                  aria-label={cf.openPdfAria[lang]}
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
                    <small>{cf.pdfDocument[lang]}</small>
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
                  {cf.downloadPdf[lang]}
                </a>
              </div>
            </div>

            {/* Section 2: Document Requirements */}
            <div className="case-checklist-panel-head">
              <h2>{cf.s2Title[lang]}</h2>
              <p>{cf.s2Text[lang]}</p>
            </div>

            <div className="case-checklist-body">
              <ul className="case-forwarding-requirements">
                {cf.requirements.map((item, i) => (
                  <li key={i}>
                    <strong>{item.title[lang]}</strong>
                    <span>{item.text[lang]}</span>
                  </li>
                ))}
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
                    cf.preparingZip[lang]
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
                      {cf.downloadZip[lang]}
                    </>
                  )}
                </button>
              </div>

              <p className="case-checklist-status" role="status" aria-live="polite">
                {statusText}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="case-checklist-disclaimer">
            <strong>{cf.noteLabel[lang]}</strong> {cf.noteText[lang]}
          </p>

        </div>
      </section>
    </main>
  );
}