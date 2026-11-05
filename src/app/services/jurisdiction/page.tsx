import type { Metadata } from "next";
import Link from "next/link";
import JurisdictionMap from "./jurisdiction-map";
import "./jurisdiction.css";

export const metadata: Metadata = {
  title: "Jurisdiction | CFSL Hyderabad",
  description: "Map showing CFSL Hyderabad's regional jurisdiction across five southern states and two Union Territories.",
};

export default function JurisdictionPage() {
  return (
    <>
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services">Services</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Jurisdiction</span>
          </nav>
          <h1>Jurisdiction of CFSL, Hyderabad</h1>
          <p>Central Forensic Science Laboratory · Directorate of Forensic Science Services · Ministry of Home Affairs</p>
        </div>
      </section>
      <JurisdictionMap />
    </>
  );
}
