"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { BRANCHES_CONTENT } from "@/constants/content";
import { SectionHeader } from "@/components/ui";
import { AnimateInView } from "@/components/ui/AnimateInView";

export function Branches() {
  const { eyebrow, headline, subheadline, branches } = BRANCHES_CONTENT;

  return (
    <section id="branches" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <AnimateInView>
          <SectionHeader
            eyebrow={eyebrow}
            headline={headline}
            subheadline={subheadline}
            align="center"
          />
        </AnimateInView>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {branches.map((branch, index) => (
            <AnimateInView
              key={branch.id}
              delay={index * 0.05}
              className="h-full"
            >
              <div className="flex flex-col h-full bg-brand-bg rounded-2xl p-6 border border-brand-border hover:border-brand-primary/20 hover:shadow-md transition-all duration-300">
                {/* Branch Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-text leading-tight">
                    {branch.name}
                  </h3>
                </div>

                {/* Address */}
                <p className="text-xs text-brand-muted leading-relaxed mb-6 flex-grow">
                  {branch.address}
                </p>

                {/* Info (Phone / Hours) */}
                <div className="space-y-2 pt-4 border-t border-brand-border text-xs text-brand-muted">
                  {branch.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-brand-primary/60 flex-shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                  )}
                  {branch.hours && (
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-brand-primary/60 flex-shrink-0" />
                      <span>Buka: {branch.hours}</span>
                    </div>
                  )}
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
