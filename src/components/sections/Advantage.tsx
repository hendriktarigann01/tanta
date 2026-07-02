import { ADVANTAGE_CONTENT } from "@/constants/content";
import { SectionHeader, AnimateInView } from "@/components/ui";

/**
 * ADVANTAGE SECTION
 * Numbered list dengan border-bottom divider — editorial style.
 */
export function Advantage() {
  const { eyebrow, headline, subheadline, items } = ADVANTAGE_CONTENT;

  return (
    <section id="advantage" className="section-padding">
      <div className="container-wide">
        {/* Top row: header + description (aligned using 12-column grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-16 items-start">
          <AnimateInView className="col-span-12 md:col-span-4">
            <SectionHeader eyebrow={eyebrow} headline={headline} align="left" className="mb-0" />
          </AnimateInView>
          <AnimateInView variant="fade-left" delay={0.1} className="col-span-12 md:col-span-8 flex items-center md:pt-4">
            <p className="text-sm md:text-base text-brand-text/60 leading-relaxed">
              {subheadline}
            </p>
          </AnimateInView>
        </div>

        {/* Items */}
        <div className="divide-y divide-brand-border">
          {items.map((item, i) => (
            <AnimateInView
              key={item.id}
              delay={0.1 * i}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 group hover:bg-white/[0.02] transition-colors duration-300 rounded-lg px-2 items-start"
            >
              {/* Number (Column 1) */}
              <div className="col-span-12 md:col-span-1 text-5xl md:text-7xl font-medium text-brand-text/10 group-hover:text-brand-text/20 transition-colors duration-300 leading-none">
                {item.number}
              </div>

              {/* Title (Columns 2-4) */}
              <div className="col-span-12 md:col-span-3 flex items-start md:items-center">
                <h3 className="text-lg md:text-2xl font-medium text-brand-text group-hover:text-brand-secondary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description (Columns 5-12) */}
              <div className="col-span-12 md:col-span-8 flex items-start md:items-center">
                <p className="text-sm md:text-base text-brand-text/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
