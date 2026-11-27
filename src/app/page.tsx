"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LatestNewsTicker from "../components/latest-news-ticker";
import HeroImageCarousel from "../components/hero-image-carousel";
import { useLanguage } from "../components/language-provider";
import { footerText as f } from "../data/ui-text";
import { hm, searchSummary, noMatchText, tabNoun, th } from "../data/home-i18n";

type NoticeItem = {
  title: string;
  date: string;
  category: string;
  reference?: string;
};

const notificationItems: NoticeItem[] = [
  
];

// Add only verified tender records here. Keeping this empty until official details
// are supplied makes the interface show the existing no-details fallback.
const tenderItems: NoticeItem[] = [];

function highlightMatches(text: string, query: string) {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return text;
  const escaped = trimmedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "ig"));
  return parts.map((part, index) =>
    part.toLocaleLowerCase() === trimmedQuery.toLocaleLowerCase()
      ? <mark className="notice-search-highlight" key={`${part}-${index}`}>{part}</mark>
      : part
  );
}

function HomeContent() {
  const { lang } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("noticeSearch")?.trim() ?? "";
  const requestedTab = searchParams.get("noticeTab");
  const [activeNoticeTab, setActiveNoticeTab] = useState<"notifications" | "tenders">(
    requestedTab === "tenders" ? "tenders" : "notifications"
  );

  useEffect(() => {
    setActiveNoticeTab(requestedTab === "tenders" ? "tenders" : "notifications");
  }, [requestedTab]);

  const currentItems = activeNoticeTab === "notifications" ? notificationItems : tenderItems;

  // Displayed text is translated; the English original is kept so search matches both
  const localizedItems = useMemo(
    () =>
      currentItems.map((item) => ({
        ...item,
        orig: item,
        title: th(item.title, lang),
        category: th(item.category, lang),
      })),
    [currentItems, lang]
  );

  const filteredItems = useMemo(() => {
    if (!query) return localizedItems;
    const normalized = query.toLocaleLowerCase();
    return localizedItems.filter((item) =>
      [item.title, item.date, item.category, item.reference ?? "", item.orig.title, item.orig.category]
        .some((value) => value.toLocaleLowerCase().includes(normalized))
    );
  }, [localizedItems, query]);

  const tabLabel = activeNoticeTab === "notifications" ? hm.tabNotifications[lang] : hm.tabTenders[lang];
  const tabNounText = tabNoun[activeNoticeTab][lang];

  const changeTab = (tab: "notifications" | "tenders") => {
    setActiveNoticeTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set("noticeTab", tab);
    const suffix = params.toString();
    router.replace(`/${suffix ? `?${suffix}` : ""}#public-notices`, { scroll: false });
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("noticeSearch");
    const suffix = params.toString();
    router.replace(`/${suffix ? `?${suffix}` : ""}#public-notices`, { scroll: false });
  };

  return <>
    <LatestNewsTicker />
    <section className="hero" id="top"><div className="site-container hero-grid">
      <div><span className="eyebrow">{hm.eyebrow[lang]}</span><h1>{hm.h1a[lang]}<em>{hm.h1em[lang]}</em>{hm.h1b[lang]}</h1><p className="hero-copy">{hm.heroCopy[lang]}</p><div className="hero-actions"><Link className="button button-gold" href="/about">{hm.discover[lang]} <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/divisions">{hm.exploreDiv[lang]} <span aria-hidden="true">↗</span></Link></div></div>
      <HeroImageCarousel />
    </div></section>

    <section className="welcome-section" aria-labelledby="welcome-heading">
      <div className="site-container welcome-grid">
        <div className="welcome-copy">
          <h2 id="welcome-heading">{hm.welcomeTitle[lang]}</h2>
          <p>{hm.welcomeText[lang]}</p>
          <p className="welcome-notification">{hm.welcomeNote[lang]}</p>
          <Link className="welcome-more" href="/about">{hm.viewMore[lang]}</Link>
        </div>
        <div className="welcome-photo-wrap">
          <img className="welcome-photo" src="/CFSL_Hyd_Team.jpeg" alt={hm.teamAlt[lang]} />
        </div>
      </div>
    </section>

    <section className="public-updates-section" id="public-notices" aria-label={hm.noticesAria[lang]}>
      <div className="site-container public-updates-grid">
        <div className="public-notices-card">
          <div className="notice-tabs" role="tablist" aria-label={hm.tablistAria[lang]}>
            <button type="button" role="tab" aria-selected={activeNoticeTab === "notifications"} className={activeNoticeTab === "notifications" ? "notice-tab active" : "notice-tab"} onClick={() => changeTab("notifications")}>{hm.tabNotifications[lang]}</button>
            <button type="button" role="tab" aria-selected={activeNoticeTab === "tenders"} className={activeNoticeTab === "tenders" ? "notice-tab active" : "notice-tab"} onClick={() => changeTab("tenders")}>{hm.tabTenders[lang]}</button>
          </div>

          {query && <div className="notice-search-summary" aria-live="polite">
            <span>{searchSummary.prefix[lang]}<strong>“{query}”</strong>{searchSummary.suffix[lang](tabLabel)}</span>
            <button type="button" onClick={clearSearch}>{hm.clearSearch[lang]}</button>
          </div>}

          <div className="public-notice-list" role="tabpanel" aria-label={tabLabel}>
            {filteredItems.length > 0 ? filteredItems.map((item) => <article className={`public-notice-row${activeNoticeTab === "tenders" ? " tender-notice-row" : ""}`} key={`${item.orig.title}-${item.date}`}>
              <div className="public-notice-text">
                <span className={`public-notice-category${activeNoticeTab === "tenders" ? " tender-category" : ""}`}>{highlightMatches(item.category, query)}</span>
                <h3>{highlightMatches(item.title, query)}</h3>
                <p><span className="notice-date-label">{hm.published[lang]}</span> {highlightMatches(item.date, query)}{item.reference ? <> · {hm.ref[lang]} {highlightMatches(item.reference, query)}</> : null}</p>
              </div>
              <Link className="public-notice-view" href="/notices">{hm.viewDetails[lang]} <span aria-hidden="true">→</span></Link>
            </article>) : activeNoticeTab === "tenders" && !query ? <div className="tenders-empty">
              <span className="notice-fallback-icon" aria-hidden="true">⌕</span>
              <div><span className="public-notice-category tender-category">{hm.procurement[lang]}</span><h3>{hm.tenderEmptyTitle[lang]}</h3><p>{hm.tenderEmptyText[lang]}</p><Link className="public-view-all" href="/notices">{hm.checkAll[lang]} <span aria-hidden="true">→</span></Link></div>
            </div> : <div className="notice-fallback">
              <span className="notice-fallback-icon" aria-hidden="true">⌕</span>
              <div><h3>{query ? hm.noMatch[lang] : activeNoticeTab === "notifications" ? hm.noNotifications[lang] : hm.noTenders[lang]}</h3><p>{query ? noMatchText[lang](tabNounText, query) : hm.newRecords[lang]}</p></div>
            </div>}
          </div>
          <div className="public-notice-footer"><Link className="public-view-all" href="/notices">{hm.viewAll[lang]} <span aria-hidden="true">→</span></Link></div>
        </div>

        <aside className="official-profiles" aria-label={hm.officialsAria[lang]}>
          <div className="official-profile">
            <div className="official-avatar avatar-governor" aria-hidden="true"><img src="/DFSS_Chief.jpg" alt={hm.directorAlt[lang]} /></div>
            <div><strong>{hm.jainName[lang]}</strong><span>{hm.jainLines.map((line, i) => <span key={i}>{i > 0}{line[lang]}</span>)}</span></div>
          </div>
          <div className="official-profile">
            <div className="official-avatar avatar-governor" aria-hidden="true"><img src="/CFSL_HYD_Director_1.jpeg" alt={hm.directorAlt[lang]} /></div>
            <div><strong>{hm.midhaName[lang]}</strong><span>{hm.midhaLines.map((line, i) => <span key={i}>{i > 0}{line[lang]}</span>)}</span></div>
          </div>
        </aside>
      </div>
    </section>
  </>;
}

export default function Home() {
  return <Suspense fallback={null}><HomeContent /></Suspense>;
}