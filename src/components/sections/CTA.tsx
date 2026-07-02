import { MessageCircle } from "lucide-react";
import { CTA_CONTENT } from "@/constants/content";
import { getWhatsAppUrl } from "@/constants/site";
import { AnimateInView, Button } from "@/components/ui";

/**
 * CTA SECTION
 */
export function CTA() {
  const { eyebrow, headline, subheadline, cta } = CTA_CONTENT;

  const waUrl = getWhatsAppUrl();

  return (
    <section id="cta" className="relative py-24 md:py-36 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Base Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                #FCFAF7 0%,
                #FAF7F2 45%,
                #FFF6EB 100%
              )
            `,
          }}
        />

        {/* Left Glow */}
        <div
          className="absolute left-[-250px] top-1/2 -translate-y-1/2
               w-[400px] h-[150px] rounded-full blur-[140px] opacity-50"
          style={{
            background: "var(--color-brand-accent)",
          }}
        />

        {/* Right Glow */}
        <div
          className="absolute right-[-250px] top-1/2 -translate-y-1/2
               w-[400px] h-[150px] rounded-full blur-[140px] opacity-50"
          style={{
            background: "var(--color-brand-accent)",
          }}
        />
      </div>

      <div className="container-wide relative text-center">
        {/* Headline */}
        <AnimateInView delay={0.1}>
          <h2 className="font-display font-bold italic text-3xl sm:text-5xl md:text-6xl leading-tight text-brand-primary mb-5 text-balance max-w-3xl mx-auto">
            {headline}
          </h2>
        </AnimateInView>

        {/* Subheadline */}
        <AnimateInView delay={0.2}>
          <p className="text-sm md:text-base text-brand-muted mb-10 max-w-xl mx-auto leading-relaxed">
            {subheadline}
          </p>
        </AnimateInView>

        {/* Buttons */}
        <AnimateInView delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="a"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              <MessageCircle size={18} />
              {cta.primary}
            </Button>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
