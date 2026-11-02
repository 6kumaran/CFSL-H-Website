"use client";

import { useCallback, useEffect, useState } from "react";

const announcements = [
  {
    category: "NOTICE",
    title: "Official notices and circulars will be published here",
    href: "/notices",
  },
  {
    category: "UPDATE",
    title: "Explore scientific divisions and laboratory information",
    href: "/divisions",
  },
  {
    category: "INFORMATION",
    title: "Visit the notices section for public information updates",
    href: "/notices",
  },
];

export default function LatestNewsTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % announcements.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + announcements.length) % announcements.length);
  }, []);

  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = window.setInterval(showNext, 6000);
    return () => window.clearInterval(timer);
  }, [isPaused, isHovered, showNext]);

  return (
    <section
      className="latest-news"
      aria-label="Latest news and announcements"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="site-container latest-news-inner">
        <div className="latest-news-label">
          <span className="latest-news-label-icon" aria-hidden="true">▤</span>
          <span>Latest News</span>
        </div>

        <div className="latest-news-content">
          <span className="latest-news-live" aria-hidden="true">NEW</span>
          <a
            key={activeIndex}
            className="latest-news-item"
            href={announcements[activeIndex].href}
            aria-label={`${announcements[activeIndex].category}: ${announcements[activeIndex].title}`}
          >
            <span className="latest-news-category">{announcements[activeIndex].category}</span>
            <span className="latest-news-title">{announcements[activeIndex].title}</span>
          </a>
          <span className="latest-news-count" aria-hidden="true">
            {activeIndex + 1} / {announcements.length}
          </span>
        </div>

        <div className="latest-news-controls" aria-label="News ticker controls">
          <button type="button" onClick={showPrevious} aria-label="Previous announcement" title="Previous announcement">
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Resume automatic announcements" : "Pause automatic announcements"}
            aria-pressed={isPaused}
            title={isPaused ? "Resume" : "Pause"}
          >
            <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button type="button" onClick={showNext} aria-label="Next announcement" title="Next announcement">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
