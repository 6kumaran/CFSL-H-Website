"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import LatestNewsTicker from "../components/latest-news-ticker";
import HeroImageCarousel from "../components/hero-image-carousel";

type NoticeItem = {
  title: string;
  date: string;
  category: string;
  reference?: string;
};

const notificationItems: NoticeItem[] = [
  {
    title: "List of Selected Interns on Stipend Basis for a period of one year in Forensic Science Laboratory, Delhi",
    date: "20-11-2025",
    category: "Recruitment update",
  },
  {
    title: "Revised List of Shortlisted Candidates for the walk in Interview for the post of Intern (Biology Division) on Stipend Basis",
    date: "17-11-2025",
    category: "Interview notice",
  },
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
  const filteredItems = useMemo(() => {
    if (!query) return currentItems;
    const normalized = query.toLocaleLowerCase();
    return currentItems.filter((item) =>
      [item.title, item.date, item.category, item.reference ?? ""]
        .some((value) => value.toLocaleLowerCase().includes(normalized))
    );
  }, [currentItems, query]);

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
      <div><span className="eyebrow">Forensic science · Hyderabad</span><h1>Where science helps reveal <em>the truth.</em></h1><p className="hero-copy">Explore the laboratory&apos;s institutional information, scientific disciplines, public notices and resources through a clearer, more accessible digital experience.</p><div className="hero-actions"><Link className="button button-gold" href="/about">Discover the Laboratory <span aria-hidden="true">→</span></Link><Link className="button button-outline" href="/divisions">Explore Divisions <span aria-hidden="true">↗</span></Link></div></div>
      <HeroImageCarousel />
    </div></section>

    <section className="welcome-section" aria-labelledby="welcome-heading">
      <div className="site-container welcome-grid">
        <div className="welcome-copy">
          <h2 id="welcome-heading">Welcome to Forensic Science Laboratory</h2>
          <p>The Forensic Science Laboratory Delhi is a multi - disciplinary scientific organization that includes highly organized, trained professionals and well equipped examination facilities as per ISO/IEC 17025: 2017. The Laboratory coordinates, develops and disseminates new information to investigators and fraternity members of Law Administration Agency through the innovative scientific techniques to resolve the conventional and new pattern of crime. In addition, the Laboratory is requested to assist in the scientific investigations of crime scenes, provide training and sharing knowledge and assist with the reconstruction of a crime. Laboratory prepares forensic report for valuable evidence that contribute to the successful prosecution and conviction of criminals as well as to the exoneration of innocent people. With upto date technical, and knowledge features, as well as a space point of view, the Laboratory can expect to be accepted globally with a facility equal to the quality of work for which the Laboratory has become known.</p>
          <p className="welcome-notification">Laboratory is also notified as Examiner of Electronic Evidence u/s 79A of the Information Technology Act, 2000 on 17.04.2018. by Ministry of Electronics &amp; IT, Govt of India.</p>
          <Link className="welcome-more" href="/about">View More</Link>
        </div>
        <div className="welcome-photo-wrap">
          <img className="welcome-photo" src="/DF_Team.jpeg" alt="Laboratory team outside the laboratory building" />
        </div>
      </div>
    </section>

    <section className="public-updates-section" id="public-notices" aria-label="Notifications and tenders">
      <div className="site-container public-updates-grid">
        <div className="public-notices-card">
          <div className="notice-tabs" role="tablist" aria-label="Public notices">
            <button type="button" role="tab" aria-selected={activeNoticeTab === "notifications"} className={activeNoticeTab === "notifications" ? "notice-tab active" : "notice-tab"} onClick={() => changeTab("notifications")}>Notifications</button>
            <button type="button" role="tab" aria-selected={activeNoticeTab === "tenders"} className={activeNoticeTab === "tenders" ? "notice-tab active" : "notice-tab"} onClick={() => changeTab("tenders")}>Tenders</button>
          </div>

          {query && <div className="notice-search-summary" aria-live="polite">
            <span>Search results for <strong>“{query}”</strong> in {activeNoticeTab === "notifications" ? "Notifications" : "Tenders"}</span>
            <button type="button" onClick={clearSearch}>Clear search</button>
          </div>}

          <div className="public-notice-list" role="tabpanel" aria-label={activeNoticeTab === "notifications" ? "Notifications" : "Tenders"}>
            {filteredItems.length > 0 ? filteredItems.map((item) => <article className={`public-notice-row${activeNoticeTab === "tenders" ? " tender-notice-row" : ""}`} key={`${item.title}-${item.date}`}>
              <div className="public-notice-text">
                <span className={`public-notice-category${activeNoticeTab === "tenders" ? " tender-category" : ""}`}>{highlightMatches(item.category, query)}</span>
                <h3>{highlightMatches(item.title, query)}</h3>
                <p><span className="notice-date-label">Published</span> {highlightMatches(item.date, query)}{item.reference ? <> · Ref: {highlightMatches(item.reference, query)}</> : null}</p>
              </div>
              <Link className="public-notice-view" href="/notices">View details <span aria-hidden="true">→</span></Link>
            </article>) : activeNoticeTab === "tenders" && !query ? <div className="tenders-empty">
              <span className="notice-fallback-icon" aria-hidden="true">⌕</span>
              <div><span className="public-notice-category tender-category">Procurement</span><h3>Tender details will appear here</h3><p>There are no verified tender records added to this page yet. Official tender title, reference number and publication date can be shown here when available.</p><Link className="public-view-all" href="/notices">Check all notices <span aria-hidden="true">→</span></Link></div>
            </div> : <div className="notice-fallback">
              <span className="notice-fallback-icon" aria-hidden="true">⌕</span>
              <div><h3>{query ? "No matching results found" : activeNoticeTab === "notifications" ? "No notifications available" : "No tenders available"}</h3><p>{query ? `No ${activeNoticeTab === "notifications" ? "notifications" : "tenders"} matched “${query}”. Try another keyword or clear your search.` : "New official records will appear here when published."}</p></div>
            </div>}
          </div>
          <div className="public-notice-footer"><Link className="public-view-all" href="/notices">View All <span aria-hidden="true">→</span></Link></div>
        </div>

        <aside className="official-profiles" aria-label="Government officials">
          <div className="official-profile">
            <div className="official-avatar avatar-governor" aria-hidden="true"><img src="/DFSS_Chief.jpg" alt="Director" /></div>
            <div><strong>Shri S. K. Jain</strong><span>Director-cum-Chief Forensic Scientist <br/> Directorate of Forensic Science Services<br/> Ministry of Home Affairs,<br/> Govt. of India<br/> New Delhi</span></div>
          </div>
          <div className="official-profile">
            <div className="official-avatar avatar-governor" aria-hidden="true"><img src="/CFSL_HYD_Director_1.jpeg" alt="Director" /></div>
            <div><strong>Shri Deepak Midha</strong><span>Director Central Forensic Science Laboratory<br/> Directorate of Forensic Science Services<br/> Ministry of Home Affairs,<br/> Govt. of India<br/> Hyderabad</span></div>
          </div>
          
        </aside>
      </div>
    </section>
  </>;
}

export default function Home() {
  return <Suspense fallback={null}><HomeContent /></Suspense>;
}
