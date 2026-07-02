import {
  Users, Award, SquareParking, Wifi, Utensils, KeyRound, HelpCircle
} from "lucide-react";
import { FACILITY_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";
import type { FacilityIcon } from "@/types";

const iconMap: Record<FacilityIcon, React.ElementType> = {
  users:    Users,
  award:    Award,
  parking:  SquareParking,
  wifi:     Wifi,
  utensils: Utensils,
  key:      KeyRound,
  // Fallbacks for safety
  waves:    HelpCircle,
  activity: HelpCircle,
  trees:    HelpCircle,
  shield:   HelpCircle,
  bus:      HelpCircle,
  sun:      HelpCircle,
  recycle:  HelpCircle,
  building: HelpCircle,
  droplets: HelpCircle,
  moon:     HelpCircle,
};

/**
 * FACILITY SECTION
 */
export function Facility() {
  const { eyebrow, headline, subheadline, items } = FACILITY_CONTENT;

  return (
    <section id="facility" className="section-padding bg-[#FCFAF7]">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader eyebrow={eyebrow} headline={headline} subheadline={subheadline} />
        </AnimateInView>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? HelpCircle;
            return (
              <AnimateInView
                key={item.id}
                delay={0.05 * i}
                className="bg-white rounded-[var(--radius-card)] p-5 border border-brand-border group hover:border-brand-primary/25 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors duration-300 text-brand-primary border border-brand-primary/5">
                  <Icon size={20} aria-hidden="true" />
                </div>

                {/* Text */}
                <h3 className="text-sm font-bold text-brand-text mb-1 leading-snug">{item.label}</h3>
                <p className="text-[11px] text-brand-muted leading-relaxed">{item.description}</p>
              </AnimateInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
