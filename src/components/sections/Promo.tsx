"use client";

import { CheckCircle2 } from "lucide-react";
import { PROMO_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";

/**
 * PROMO SECTION
 */
export function Promo() {
  const { eyebrow, headline, subheadline, groups, note } = PROMO_CONTENT;

  return (
    <section id="promo" className="section-padding bg-[#FCFAF7]">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            align="center"
          />
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {groups.map((group, i) => (
            <AnimateInView
              key={group.id}
              delay={0.1 * i}
              className="h-full"
            >
              <div className="bg-white rounded-[var(--radius-card)] p-6 shadow-sm border border-brand-border hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 h-full flex flex-col">
                {/* Group Title */}
                <div className="mb-4 flex-shrink-0">
                  <span className="text-xs font-bold tracking-wider text-brand-primary uppercase">
                    ✦ {group.title}
                  </span>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-3 flex-grow">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-brand-accent flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-brand-text/80 leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Note */}
        <AnimateInView delay={0.3} className="mt-8 text-center">
          <p className="text-xs text-brand-muted">{note}</p>
        </AnimateInView>
      </div>
    </section>
  );
}
