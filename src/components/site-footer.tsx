import Link from "next/link";
import { ArrowUpRight, BookOpen, ExternalLink, Landmark, Mail, MapPin, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-container footer-grid">
        <section aria-labelledby="footer-about-heading">
          <div className="footer-brand" id="footer-about-heading">
            <span className="footer-brand-mark" aria-hidden="true">
              <Landmark size={19} strokeWidth={1.7} />
            </span>
            <span>Central Forensic Science Laboratories</span>
          </div>
          <p className="footer-copy">
            Directorate of Forensic Science Services. This website is a concept using sample content;
            institutional information should be verified before publication.
          </p>
        </section>

        <nav aria-label="Footer quick links">
          <h2 className="footer-heading">Quick links</h2>
          <div className="footer-links">
            <Link href="/about">About the Laboratory</Link>
            <Link href="/divisions">Scientific Divisions</Link>
            <Link href="/services">Services</Link>
            <Link href="/notices">Notices &amp; Updates</Link>
            <Link href="/rti">Right to Information</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <section aria-labelledby="footer-information-heading">
          <h2 className="footer-heading" id="footer-information-heading">Contact &amp; information</h2>
          <ul className="footer-contact-list">
            <li><MapPin size={16} aria-hidden="true" /><span>CFSL Hyderabad, Telangana, India</span></li>
            <li><Mail size={16} aria-hidden="true" /><span>Official contact details to be added after verification</span></li>
            <li><ShieldCheck size={16} aria-hidden="true" /><Link href="/rti"><div className="flex">Right to Information <ArrowUpRight size={13} aria-hidden="true" /></div></Link></li>
          </ul>
        </section>

        <section className="footer-map-section" aria-labelledby="footer-map-heading">
          <h2 className="footer-heading" id="footer-map-heading">Find us</h2>
          <div className="footer-map-frame">
            <iframe
              title="Map search for Central Forensic Science Laboratory, Hyderabad"
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
              <div className="flex">Open in Google Maps <ExternalLink size={13} aria-hidden="true" /></div>
            </a>
          </div>
        </section>
      </div>

      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} CFSL Hyderabad website concept</span>
        <span className="footer-bottom-note">Last Updated : </span>
        <a href="#top" aria-label="Back to top">Back to top ↑</a>
      </div>
    </footer>
  );
}
