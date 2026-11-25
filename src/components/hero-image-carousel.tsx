"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "./language-provider";
import { footerText as f } from "../data/ui-text";
import { carousel as c } from "../data/home-i18n";

// Only image paths live here; text comes from c.slides (same order)
const slideSrcs = [
  "/IMG_20260617_142710508_HDR.jpg",
  "/images/cfsl-gallery/laboratory-building-2.jpg",
  "/CFSL_Hyd_Team_New_Director.jpeg",
];

export default function HeroImageCarousel() {
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slideSrcs.length;

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % total);
  }, [total]);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused) return;

    // Respect the visitor's system preference for reduced motion.
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const timer = window.setInterval(showNext, 6000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, showNext]);

  const activeSlide = c.slides[activeIndex];

  return (
    <section className="hero-carousel" aria-label={c.aria[lang]}>
      <div className="hero-carousel-frame">
        {slideSrcs.map((src, index) => (
          <div
            className={`hero-carousel-slide${index === activeIndex ? " is-active" : ""}`}
            key={src}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={src}
              alt={c.slides[index].alt[lang]}
              fill
              priority={index === 0}
              sizes="(max-width: 980px) 100vw, 42vw"
              className="hero-carousel-image"
            />
          </div>
        ))}
        <div className="hero-carousel-shade" aria-hidden="true" />
        <div className="hero-carousel-caption" aria-live="polite" aria-atomic="true">
          <span className="hero-carousel-kicker">{f.org[lang]}</span>
          <h2>{activeSlide.title[lang]}</h2>
          <p>{activeSlide.description[lang]}</p>
        </div>
      </div>

      <div className="hero-carousel-toolbar" aria-label={c.controls[lang]}>
        <div className="hero-carousel-dots" aria-label={c.chooseSlide[lang]}>
          {slideSrcs.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`hero-carousel-dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={c.showSlide[lang](index + 1, c.slides[index].title[lang])}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <div className="hero-carousel-buttons">
          <button type="button" onClick={showPrevious} aria-label={c.prev[lang]} title={c.prev[lang]}>
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? c.resumeAria[lang] : c.pauseAria[lang]}
            aria-pressed={isPaused}
            title={isPaused ? c.resumeTitle[lang] : c.pauseTitle[lang]}
          >
            <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button type="button" onClick={showNext} aria-label={c.next[lang]} title={c.next[lang]}>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}