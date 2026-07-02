"use client";

import { useEffect, useState } from "react";
import { ChevronsDown, MessageCircle } from "lucide-react";
import { HERO_CONTENT } from "@/constants/content";
import { getWhatsAppUrl } from "@/constants/site";

/**
 * Helper to calculate opacity and Y translation for each slide index based on progress p [0..1]
 * - index = 0: Slide Utama (HeroSlide1)
 * - index = 1..4: Scroll Slides
 */
function getSlideState(p: number, index: number) {
  const start = index * 0.2;
  const end = (index + 1) * 0.2;

  // Fade-in region: first 20% of the slide's active range
  const fadeInStart = start;
  const fadeInEnd = start + 0.04;

  // Fade-out region: last 20% of the slide's active range
  const fadeOutStart = end - 0.04;
  const fadeOutEnd = end;

  let opacity = 0;
  let y = 0; // translation Y

  if (p >= start && p <= end) {
    if (p < fadeInEnd && index > 0) {
      // Fade in phase: fade up muncul (starts at 30px and moves up to 0px)
      const ratio = (p - fadeInStart) / (fadeInEnd - fadeInStart);
      opacity = ratio;
      y = 30 * (1 - ratio);
    } else if (p > fadeOutStart && index < 4) {
      // Fade out phase: fade down hilang (starts at 0px and moves down to 30px)
      const ratio = (p - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      opacity = 1 - ratio;
      y = 30 * ratio;
    } else if (index === 4 && p > fadeOutStart) {
      // Final slide fade-out completely as we transition to Promo
      const ratio = Math.min(
        1,
        (p - fadeOutStart) / (fadeOutEnd - fadeOutStart),
      );
      opacity = 1 - ratio;
      y = 30 * ratio;
    } else {
      // Fully visible phase
      opacity = 1;
      y = 0;
    }
  } else if (index === 0 && p < start) {
    // Before slide 1 starts
    opacity = 1;
    y = 0;
  } else {
    // Outside active range
    opacity = 0;
    y = index > 0 ? 30 : 0;
  }

  return { opacity, y };
}

export function Hero() {
  const { headline, subheadline, cta, slides } = HERO_CONTENT;
  const waUrl = getWhatsAppUrl();

  const [scrollY, setScrollY] = useState(0);
  const [h, setH] = useState(800); 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setH(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Calculate overall scroll progress p [0..1] across the 500vh track
  const maxScroll = h * 5;
  const p = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

  // Calculate translation & opacity for the main wrapper when scrolling past the Hero track (starts at 4 * h)
  const offset = Math.max(0, scrollY - 4 * h);
  const wrapperY = -offset;
  const wrapperOpacity = Math.max(0, 1 - offset / h);
  const isVisible = scrollY < 5 * h;

  // Calculate states for each slide
  const slide0 = getSlideState(p, 0); // Slide Utama
  const slide1 = getSlideState(p, 1); // Slide 2
  const slide2 = getSlideState(p, 2); // Slide 3
  const slide3 = getSlideState(p, 3); // Slide 4
  const slide4 = getSlideState(p, 4); // Slide 5

  return (
    <section
      id="hero-track"
      className="relative h-[500vh] w-full bg-transparent"
    >
      {/* Fixed Container — z-10 ensures it sits on top of the z-0 canvas sequence */}
      <div
        style={{
          opacity: wrapperOpacity,
          transform: `translateY(${wrapperY}px)`,
          visibility: isVisible ? "visible" : "hidden",
          willChange: "opacity, transform, visibility",
        }}
        className="fixed inset-0 w-full h-screen overflow-hidden pointer-events-none z-10"
      >
        {/* ── SLIDE 1 (HeroSlide1) ─────────────────────────────────── */}
        <div
          style={{
            opacity: slide0.opacity,
            transform: `translateY(${slide0.y}px)`,
            visibility: slide0.opacity > 0.01 ? "visible" : "hidden",
            willChange: "opacity, transform, visibility",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        >
          <div className="text-center px-6 space-y-10 mt-24">
            {/* Headline */}
            <div className="w-[350px] md:w-full mx-auto">
              <h1 className="font-display font-medium text-4xl md:text-7xl leading-[1.05] text-white tracking-tight drop-shadow-md">
                {headline}
              </h1>
            </div>

            {/* Subheadline */}
            <div className="w-[350px] md:w-full md:max-w-2xl mx-auto">
              <p className="text-white/90 text-base md:text-lg mx-auto leading-relaxed drop-shadow-sm font-medium">
                {subheadline}
              </p>
            </div>

            {/* Price badge + CTA */}
            <div className="flex flex-col items-center gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-display font-medium text-sm text-white bg-brand-primary border border-brand-primary/20 rounded-xl hover:bg-brand-secondary transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={16} />
                {cta.primary}
              </a>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center animate-bounce">
              <ChevronsDown size={50} className="text-white/70" />
            </div>
          </div>
        </div>

        {/* ── SLIDE 2 ─────────────────────────────────────────────── */}
        <div
          style={{
            opacity: slide1.opacity,
            transform: `translateY(${slide1.y}px)`,
            visibility: slide1.opacity > 0.01 ? "visible" : "hidden",
            willChange: "opacity, transform, visibility",
          }}
          className="absolute inset-0 flex items-end justify-start px-6 md:px-24 pb-12 md:pb-20 pointer-events-auto"
        >
          <div className="text-left max-w-2xl bg-black/30 p-6 rounded-2xl backdrop-blur-xs border border-white/10">
            <h2 className="font-display font-medium text-3xl md:text-6xl text-white mb-4 leading-tight drop-shadow-md">
              {slides[0].headline}
            </h2>
            <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
              {slides[0].description}
            </p>
          </div>
        </div>

        {/* ── SLIDE 3 ─────────────────────────────────────────────── */}
        <div
          style={{
            opacity: slide2.opacity,
            transform: `translateY(${slide2.y}px)`,
            visibility: slide2.opacity > 0.01 ? "visible" : "hidden",
            willChange: "opacity, transform, visibility",
          }}
          className="absolute inset-0 flex items-end justify-start px-6 md:px-24 pb-12 md:pb-20 pointer-events-auto"
        >
          <div className="text-left max-w-2xl bg-black/30 p-6 rounded-2xl backdrop-blur-xs border border-white/10">
            <h2 className="font-display font-medium text-3xl md:text-6xl text-white mb-4 leading-tight drop-shadow-md">
              {slides[1].headline}
            </h2>
            <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
              {slides[1].description}
            </p>
          </div>
        </div>

        {/* ── SLIDE 4 ─────────────────────────────────────────────── */}
        <div
          style={{
            opacity: slide3.opacity,
            transform: `translateY(${slide3.y}px)`,
            visibility: slide3.opacity > 0.01 ? "visible" : "hidden",
            willChange: "opacity, transform, visibility",
          }}
          className="absolute inset-0 flex items-end justify-start px-6 md:px-24 pb-12 md:pb-20 pointer-events-auto"
        >
          <div className="text-left max-w-2xl bg-black/30 p-6 rounded-2xl backdrop-blur-xs border border-white/10">
            <h2 className="font-display font-medium text-3xl md:text-6xl text-white mb-4 leading-tight drop-shadow-md">
              {slides[2].headline}
            </h2>
            <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
              {slides[2].description}
            </p>
          </div>
        </div>

        {/* ── SLIDE 5 ─────────────────────────────────────────────── */}
        <div
          style={{
            opacity: slide4.opacity,
            transform: `translateY(${slide4.y}px)`,
            visibility: slide4.opacity > 0.01 ? "visible" : "hidden",
            willChange: "opacity, transform, visibility",
          }}
          className="absolute inset-0 flex items-end justify-start px-6 md:px-24 pb-12 md:pb-20 pointer-events-auto"
        >
          <div className="text-left max-w-2xl bg-black/30 p-6 rounded-2xl backdrop-blur-xs border border-white/10">
            <h2 className="font-display font-medium text-3xl md:text-6xl text-white mb-4 leading-tight drop-shadow-md">
              {slides[3].headline}
            </h2>
            <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
              {slides[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
