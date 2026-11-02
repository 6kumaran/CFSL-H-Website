"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import JSZip from "jszip";

type CaseDocument = {
  id: string;
  title: string;
  description: string;
  filename: string;
  path: string;
};

// Demo mappings only. Add case-specific groups here after requirements are confirmed.
const caseTypes = [
  { value: "general", label: "General case forwarding" },
];

const documents: CaseDocument[] = [
  {
    id: "forwarding-letter",
    title: "Forwarding Letter",
    description: "Demo template for the forwarding letter accompanying a case submission.",
    filename: "forwarding-letter.docx",
    path: "/documents/case-forwarding/forwarding-letter.docx",
  },
  {
    id: "case-opening",
    title: "Case Opening",
    description: "Demo document labelled Case Opening.",
    filename: "case-opening.docx",
    path: "/documents/case-forwarding/case-opening.docx",
  },
  {
    id: "case-fir",
    title: "Case / FIR",
    description: "Demo document labelled Case / FIR.",
    filename: "case-fir.docx",
    path: "/documents/case-forwarding/case-fir.docx",
  },
  {
    id: "chain-of-custody",
    title: "Chain of Custody",
    description: "Demo document labelled Chain of Custody.",
    filename: "chain-of-custody.docx",
    path: "/documents/case-forwarding/chain-of-custody.docx",
  },
];

export default function CaseForwardingChecklistPage() {
  const [caseType, setCaseType] = useState(caseTypes[0].value);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isPreparing, setIsPreparing] = useState(false);
  const [status, setStatus] = useState("");
  const visibleDocuments = useMemo(() => documents, [caseType]);
  const allSelected = visibleDocuments.length > 0 && visibleDocuments.every((doc) => selectedIds.includes(doc.id));

  const toggleDocument = (id: string, checked: boolean) => {
    setSelectedIds((current) => checked ? [...new Set([...current, id])] : current.filter((item) => item !== id));
    setStatus("");
  };

  const toggleAll = () => {
    setSelectedIds(allSelected ? [] : visibleDocuments.map((doc) => doc.id));
    setStatus("");
  };

  const downloadZip = async () => {
    const chosen = visibleDocuments.filter((doc) => selectedIds.includes(doc.id));
    if (!chosen.length) {
      setStatus("Select at least one document before creating the ZIP file.");
      return;
    }

    setIsPreparing(true);
    setStatus("Preparing your ZIP file…");
    try {
      const zip = new JSZip();
      const folder = zip.folder("Case-Forwarding-Documents");
      if (!folder) throw new Error("Could not create the ZIP folder.");

      const results = await Promise.all(chosen.map(async (doc) => {
        const response = await fetch(doc.path);
        if (!response.ok) throw new Error(`Could not load ${doc.title}. Please try again.`);
        return { doc, blob: await response.blob() };
      }));

      for (const { doc, blob } of results) folder.file(doc.filename, blob);
      const checklist = [
        "CASE FORWARDING DOCUMENT CHECKLIST",
        `Case category: ${caseTypes.find((item) => item.value === caseType)?.label ?? caseType}`,
        `Prepared on: ${new Date().toLocaleString()}`,
        "",
        "Selected demo files:",
        ...chosen.map((doc) => `- ${doc.title} (${doc.filename})`),
        "",
        "Note: These are demonstration documents. Confirm applicable requirements and use approved official templates before forwarding a case.",
      ].join("\n");
      folder.file("Selected-Documents-Checklist.txt", checklist);
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "CFSL-Case-Forwarding-Documents.zip";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      URL.revokeObjectURL(url);
      setStatus(`ZIP created successfully with ${chosen.length} document${chosen.length === 1 ? "" : "s"}.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "The ZIP could not be created. Please try again.");
    } finally {
      setIsPreparing(false);
    }
  };

  return (
    <main>
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>Case Forwarding Checklist</span>
          </nav>
          <h1>Case Forwarding Checklist</h1>
          <p>Choose the documents you need and download them together in one ZIP file.</p>
        </div>
      </section>

      <section className="case-checklist-page">
        <div className="case-checklist-shell">
          <div className="case-checklist-intro">
            <span className="case-checklist-eyebrow">A practical document preparation tool</span>
            <h1>Prepare your case documents</h1>
            <p>Select the relevant documents below. Only the files you select will be included in the ZIP download.</p>
          </div>

          <div className="case-checklist-panel">
            <div className="case-checklist-panel-head">
              <h2>Step 1 · Choose case category</h2>
              <p>The current demo contains general case-forwarding documents. More categories can be added once their document requirements are confirmed.</p>
            </div>
            <div className="case-checklist-body">
              <div className="case-checklist-field">
                <label htmlFor="case-type">Type of case</label>
                <select id="case-type" className="case-checklist-select" value={caseType} onChange={(event) => { setCaseType(event.target.value); setStatus(""); }}>
                  {caseTypes.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
                </select>
              </div>

              <div className="case-checklist-note">
                These filenames and documents are supplied as demo materials. The page does not currently mark any item as officially mandatory.
              </div>

              <div className="case-checklist-list-head">
                <h2>Step 2 · Select documents</h2>
                <span className="case-checklist-selection" aria-live="polite">{selectedIds.filter((id) => visibleDocuments.some((doc) => doc.id === id)).length} of {visibleDocuments.length} selected</span>
              </div>

              <div className="case-checklist-items">
                {visibleDocuments.map((doc) => (
                  <label className="case-checklist-item" key={doc.id}>
                    <input type="checkbox" checked={selectedIds.includes(doc.id)} onChange={(event) => toggleDocument(doc.id, event.target.checked)} />
                    <span>
                      <strong>{doc.title}</strong>
                      <small>{doc.description}</small>
                      <span className="case-checklist-filetype">Word document · .docx</span>
                    </span>
                  </label>
                ))}
              </div>

              <div className="case-checklist-actions">
                <div>
                  <strong>Step 3 · Download selected files</strong>
                  <div className="case-checklist-selection">Your ZIP will also include a text checklist of the files selected.</div>
                </div>
                <div className="case-checklist-action-buttons">
                  <button type="button" className="case-checklist-button secondary" onClick={toggleAll}>{allSelected ? "Clear selection" : "Select all"}</button>
                  <button type="button" className="case-checklist-button" onClick={downloadZip} disabled={selectedIds.length === 0 || isPreparing}>
                    {isPreparing ? "Preparing ZIP…" : "Download selected (.ZIP)"}
                  </button>
                </div>
              </div>
              <p className="case-checklist-status" role="status" aria-live="polite">{status}</p>
            </div>
          </div>

          <p className="case-checklist-disclaimer"><strong>Please note:</strong> This is a demonstration tool using sample documents. Verify the current instructions and applicable document requirements issued by CFSL Hyderabad before forwarding a case. The checklist does not replace official guidance.</p>
        </div>
      </section>
    </main>
  );
}
