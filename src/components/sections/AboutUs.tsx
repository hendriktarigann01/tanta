"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ABOUT_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";

/**
 * COUNT-UP NUMBER COMPONENT
 * Mengambil value berupa string (misal: "30+", "10K+", "8") dan
 * mendeteksi angka di dalamnya untuk dianimasikan menghitung naik (count up).
 */
function CountUpNumber({ value }: { value: string }) {
  const numericMatch = value.match(/(\d+)/);
  const target = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const numIndex = numericMatch ? value.indexOf(numericMatch[1]) : -1;
  const prefix = numIndex > 0 ? value.substring(0, numIndex) : "";
  const suffix = numericMatch ? value.substring(numIndex + numericMatch[1].length) : value;

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || target === 0) return;

    const duration = 1500; // 1.5 detik
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing: easeOutQuad
      const ease = progress * (2 - progress);

      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {target > 0 ? count : value}
      {suffix}
    </span>
  );
}

export function AboutUs() {
  const { eyebrow, headline, subheadline, description, stats } = ABOUT_CONTENT;

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -right-64 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, var(--color-brand-primary) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
          
          {/* Left: Text */}
          <AnimateInView variant="fade-left" className="h-full flex flex-col justify-center">
            <div className="flex flex-col justify-center h-full">
              <SectionHeader
                eyebrow={eyebrow}
                headline={headline}
                subheadline={subheadline}
                align="left"
                className="mb-6"
              />
              <p className="text-sm md:text-base text-brand-text/60 leading-relaxed">
                {description}
              </p>
            </div>
          </AnimateInView>

          {/* Right: Stats */}
          <AnimateInView variant="fade-right" delay={0.15} className="h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="glass rounded-[var(--radius-card)] p-6 text-center flex flex-col justify-center h-full"
                >
                  <p className="text-3xl md:text-4xl font-medium text-brand-secondary mb-1">
                    <CountUpNumber value={stat.value} />
                  </p>
                  <p className="text-xs text-brand-text/60 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimateInView>

        </div>
      </div>
    </section>
  );
}
