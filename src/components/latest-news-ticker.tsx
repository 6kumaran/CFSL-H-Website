"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "./language-provider";
import { ticker as t } from "../data/home-i18n";

// Only hrefs live here; text comes from t.items (same order)
const hrefs = ["/notices", "/divisions", "/notices"];

export default function LatestNewsTicker() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const total = t.items.length;

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = window.setInterval(showNext, 6000);
    return () => window.clearInterval(timer);
  }, [isPaused, isHovered, showNext]);

  const active = t.items[activeIndex];

  return (
    <section
      className="latest-news"
      aria-label={t.aria[lang]}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="site-container latest-news-inner">
        <div className="latest-news-label">
          <span className="latest-news-label-icon" aria-hidden="true">▤</span>
          <span>{t.label[lang]}</span>
        </div>

        <div className="latest-news-content">
          <span className="latest-news-live" aria-hidden="true">{t.newBadge[lang]}</span>
          <a
            key={activeIndex}
            className="latest-news-item"
            href={hrefs[activeIndex]}
            aria-label={`${active.category[lang]}: ${active.title[lang]}`}
          >
            <span className="latest-news-category">{active.category[lang]}</span>
            <span className="latest-news-title">{active.title[lang]}</span>
          </a>
          <span className="latest-news-count" aria-hidden="true">
            {activeIndex + 1} / {total}
          </span>
        </div>

        <div className="latest-news-controls" aria-label={t.controls[lang]}>
          <button type="button" onClick={showPrevious} aria-label={t.prev[lang]} title={t.prev[lang]}>
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? t.resumeAria[lang] : t.pauseAria[lang]}
            aria-pressed={isPaused}
            title={isPaused ? t.resume[lang] : t.pause[lang]}
          >
            <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button type="button" onClick={showNext} aria-label={t.next[lang]} title={t.next[lang]}>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}