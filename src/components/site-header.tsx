"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  Accessibility,
  ArrowUpRight,
  ChevronDown,
  Languages,
  Menu,
  Network,
  Search,
  X,
} from "lucide-react";
import { navigation } from "../data/site-content";

const languages = ["English", "Hindi", "Telugu"] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [language, setLanguage] = useState<(typeof languages)[number]>("English");

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const toggleMenu = (name: string) =>
    setOpenMenu((current) => (current === name ? null : name));

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // Send the visitor to the site-wide search results page.
    const params = new URLSearchParams();
    params.set("q", query);
    router.push(`/search?${params.toString()}`);
    setMobileOpen(false);
    setOpenMenu(null);
  };

  const searchBox = (mobile = false) => (
    <form
      className={`search-pill${mobile ? " mobile-search" : " desktop-search"}`}
      role="search"
      onSubmit={submitSearch}
    >
      <Search className="search-icon" size={15} aria-hidden="true" />
      <input
        aria-label="Search the entire website"
        placeholder="Search the entire website"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button type="submit" aria-label="Search the entire website">
        <ArrowUpRight size={15} aria-hidden="true" />
      </button>
    </form>
  );

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span className="utility-caption">
            Government of India · Ministry of Home Affairs · Directorate of Forensic Science Services
          </span>
          <div className="utility-right">
            <div className="utility-actions">
              <div className="utility-dropdown" data-open={openMenu === "accessibility"}>
                <button
                  className="utility-control utility-top-control"
                  type="button"
                  aria-expanded={openMenu === "accessibility"}
                  onClick={() => toggleMenu("accessibility")}
                >
                  <Accessibility size={15} aria-hidden="true" />
                  <span>Accessibility</span>
                  <ChevronDown className="small-chevron" size={13} aria-hidden="true" />
                </button>
                <div className="utility-menu">
                  <button type="button" onClick={() => { document.documentElement.style.fontSize = "18px"; setOpenMenu(null); }}>
                    Increase text size
                  </button>
                  <button type="button" onClick={() => { document.documentElement.style.fontSize = "16px"; setOpenMenu(null); }}>
                    Reset text size
                  </button>
                  <button type="button" onClick={() => { document.body.classList.toggle("high-contrast"); setOpenMenu(null); }}>
                    Toggle high contrast
                  </button>
                </div>
              </div>

              <div className="utility-dropdown" data-open={openMenu === "sitemap"}>
                <button
                  className="utility-control utility-top-control sitemap-control"
                  type="button"
                  aria-expanded={openMenu === "sitemap"}
                  onClick={() => toggleMenu("sitemap")}
                >
                  <Network size={15} aria-hidden="true" />
                  <span>Sitemap</span>
                  <ChevronDown className="small-chevron" size={13} aria-hidden="true" />
                </button>
                <div className="utility-menu sitemap-menu">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      <Link href={item.href} onClick={closeMenus}>{item.label}</Link>
                      {item.children?.map((child) => (
                        <Link key={child.label} href={child.href} onClick={closeMenus}>{child.label}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="utility-dropdown language-dropdown" data-open={openMenu === "language"}>
                <button
                  className="utility-control utility-top-control"
                  type="button"
                  aria-expanded={openMenu === "language"}
                  onClick={() => toggleMenu("language")}
                >
                  <Languages size={15} aria-hidden="true" />
                  <span>{language}</span>
                  <ChevronDown className="small-chevron" size={13} aria-hidden="true" />
                </button>
                <div className="utility-menu language-menu">
                  {languages.map((item) => (
                    <button
                      type="button"
                      key={item}
                      className={language === item ? "selected-language" : ""}
                      onClick={() => { setLanguage(item); setOpenMenu(null); }}
                    >
                      {item}{language === item ? " ✓" : ""}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="masthead">
        <div className="site-container masthead-inner">
          <Link href="/" className="brand" aria-label="CFSL Hyderabad home" onClick={closeMenus}>
            <span className="brand-emblem" aria-hidden="true">
              <img src="/Indian_Embelem-removebg-preview.png" alt="National Emblem" />
            </span>
            <span className="brand-copy">
              <span className="brand-title">Central Forensic Science Laboratory, Hyderabad</span>
              <span className="brand-subtitle">Directorate of Forensic Science Services</span>
            </span>
          </Link>
          <div className="identity-actions">
            <span className="national-flag" role="img" aria-label="Flag of India">
              <img src="/Indian_Flag.jpg" alt="Flag of India" />
            </span>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <nav className="site-container nav-inner" aria-label="Main navigation">
          <button
            className="mobile-toggle"
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            {mobileOpen ? "Close" : "Menu"}
          </button>

          <div className="nav-links" id="primary-navigation" data-open={mobileOpen}>
            {navigation.map((item) =>
              item.children ? (
                <div
                  className="nav-group"
                  key={item.label}
                  data-open={openMenu === item.label}
                  onMouseLeave={() => setOpenMenu((current) => current === item.label ? null : current)}
                >
                  <button
                    className="nav-link"
                    type="button"
                    aria-expanded={openMenu === item.label}
                    onMouseEnter={() => {
                      if (window.matchMedia("(min-width: 981px)").matches) setOpenMenu(item.label);
                    }}
                    onClick={() => toggleMenu(item.label)}
                  >
                    {item.label}
                    <ChevronDown className="nav-chevron" size={13} aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    {item.children.map((child) => (
                      <Link
  key={child.label}
  href={child.href}
  onClick={() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }}
>
  {child.label}
</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  className="nav-link"
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={closeMenus}
                >
                  {item.label}
                </Link>
              )
            )}
            {searchBox(true)}
          </div>
          {searchBox(false)}
        </nav>
      </div>
    </header>
  );
}
