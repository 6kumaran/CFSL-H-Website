"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    src: "/IMG_20260617_142710508_HDR.jpg",
    alt: "Laboratory building exterior",
    title: "Laboratory & Facilities",
    description: "Institutional infrastructure and facilities",
  },
  {
    src: "/images/cfsl-gallery/laboratory-building-2.jpg",
    alt: "Modern science laboratory building exterior",
    title: "Scientific Infrastructure",
    description: "Spaces supporting forensic science work",
  },
  {
    src: "/DF_Team.jpeg",
    alt: "Group photograph at a forensic science laboratory event",
    title: "People & Institution",
    description: "Institutional activities and events",
  },
];

export default function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % slides.length);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    // Respect the visitor's system preference for reduced motion.
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const timer = window.setInterval(showNext, 6000);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, showNext]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="hero-carousel" aria-label="Laboratory image gallery">
      <div className="hero-carousel-frame">
        {slides.map((slide, index) => (
          <div
            className={`hero-carousel-slide${index === activeIndex ? " is-active" : ""}`}
            key={slide.src}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 980px) 100vw, 42vw"
              className="hero-carousel-image"
            />
          </div>
        ))}
        <div className="hero-carousel-shade" aria-hidden="true" />
        <div className="hero-carousel-caption" aria-live="polite" aria-atomic="true">
          <span className="hero-carousel-kicker">CFSL Hyderabad</span>
          <h2>{activeSlide.title}</h2>
          <p>{activeSlide.description}</p>
        </div>
        <div className="hero-carousel-count" aria-label={`Slide ${activeIndex + 1} of ${slides.length}`}>
          {activeIndex + 1} <span>/</span> {slides.length}
        </div>
      </div>

      <div className="hero-carousel-toolbar" aria-label="Image carousel controls">
        <div className="hero-carousel-dots" aria-label="Choose slide">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              className={`hero-carousel-dot${index === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <div className="hero-carousel-buttons">
          <button type="button" onClick={showPrevious} aria-label="Previous image" title="Previous image">
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Resume automatic image rotation" : "Pause automatic image rotation"}
            aria-pressed={isPaused}
            title={isPaused ? "Resume slideshow" : "Pause slideshow"}
          >
            <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
          </button>
          <button type="button" onClick={showNext} aria-label="Next image" title="Next image">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
