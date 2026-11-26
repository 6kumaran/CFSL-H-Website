import Link from "next/link";
import { ArrowUpRight, ExternalLink, Landmark, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { getLang } from "../lib/i18n-server";
import { footerText as f } from "../data/ui-text";

export async function SiteFooter() {
  const lang = await getLang();

  return (
    <footer className="site-footer" aria-label={f.aria[lang]}>
      <div className="site-container footer-grid">
        <section aria-labelledby="footer-about-heading">
          <div className="footer-brand" id="footer-about-heading">
            <span className="footer-brand-mark" aria-hidden="true">
              <Landmark size={19} strokeWidth={1.7} />
            </span>
            <span>{f.brand[lang]}</span>
          </div>
          <p className="footer-copy">{f.copy[lang]}</p>
        </section>

        <nav aria-label={f.quickAria[lang]}>
          <h2 className="footer-heading">{f.quickLinks[lang]}</h2>
          <div className="footer-links">
            <Link href="/about">{f.about[lang]}</Link>
            <Link href="/divisions">{f.divisions[lang]}</Link>
            <Link href="/services">{f.services[lang]}</Link>
            <Link href="/notices/latest-news">{f.notices[lang]}</Link>
            <Link href="/rti">{f.rti[lang]}</Link>
            <Link href="/contact">{f.contact[lang]}</Link>
          </div>
        </nav>

        <section aria-labelledby="footer-information-heading">
          <h2 className="footer-heading" id="footer-information-heading">{f.contactInfo[lang]}</h2>
          <ul className="footer-contact-list">
            <li><MapPin size={16} aria-hidden="true" /><span>{f.location[lang]}</span></li>
            <li><Mail size={16} aria-hidden="true" /><span>{f.emailPending[lang]}</span></li>
            <li><ShieldCheck size={16} aria-hidden="true" /><Link href="/rti"><div className="flex">{f.rti[lang]} <ArrowUpRight size={13} aria-hidden="true" /></div></Link></li>
            <li><Phone size={16} aria-hidden="true" /><span>+91-04-2703 8429</span></li>
          </ul>
        </section>

        <section className="footer-map-section" aria-labelledby="footer-map-heading">
          <h2 className="footer-heading" id="footer-map-heading">{f.findUs[lang]}</h2>
          <div className="footer-map-frame">
            <iframe
              title={f.mapTitle[lang]}
              src="https://www.google.com/maps?q=Central+Forensic+Science+Laboratory+Hyderabad&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="footer-map-link"
              href="https://www.google.com/maps/search/?api=1&query=Central+Forensic+Science+Laboratory+Hyderabad"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex">{f.openMaps[lang]} <ExternalLink size={13} aria-hidden="true" /></div>
            </a>
          </div>
        </section>
      </div>

      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} {f.org[lang]}</span>
        <span className="footer-bottom-note">{f.lastUpdated[lang]}</span>
        <a href="#top" aria-label={f.backToTopAria[lang]}>{f.backToTop[lang]}</a>
      </div>
    </footer>
  );
}