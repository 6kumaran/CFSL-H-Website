import type { Metadata } from "next";
import Link from "next/link";
import JurisdictionMap from "./jurisdiction-map";
import "./jurisdiction.css";
import { getLang } from "../../../lib/i18n-server";
import { navLabel } from "../../../data/ui-text";
import { jr } from "../../../data/services-i18n";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  return {
    // The root layout template already appends "| CFSL Hyderabad"
    title: navLabel("Jurisdiction", lang),
    description: jr.metaDescription[lang],
  };
}

export default async function JurisdictionPage() {
  const lang = await getLang();

  return (
    <>
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label={jr.breadcrumbsAria[lang]}>
            <Link href="/">{navLabel("Home", lang)}</Link><span aria-hidden="true">/</span>
            <Link href="/services">{navLabel("Services", lang)}</Link><span aria-hidden="true">/</span>
            <span aria-current="page">{navLabel("Jurisdiction", lang)}</span>
          </nav>
          <h1>{jr.h1[lang]}</h1>
          <p>{jr.subtitle[lang]}</p>
        </div>
      </section>
      <JurisdictionMap />
    </>
  );
}