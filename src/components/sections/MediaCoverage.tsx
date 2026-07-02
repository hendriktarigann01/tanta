"use client";

import Image from "next/image";
import { SectionHeader, AnimateInView } from "@/components/ui";

const MEDIA_PARTNERS = [
  { name: "Antara News", logo: "/partners/antara.webp" },
  { name: "IDN Times", logo: "/partners/idn-times.webp" },
  { name: "JPNN", logo: "/partners/logojpnncomt.webp" },
  { name: "Popmama", logo: "/partners/popmama.webp" },
  { name: "Suara Merdeka Jakarta", logo: "/partners/suaramerdeka.webp" },
  { name: "Venue Magz", logo: "/partners/venue-magz.webp" },
];

export function MediaCoverage() {
  return (
    <section id="media" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <AnimateInView>
          <SectionHeader
            eyebrow="Liputan Media"
            headline="Telah Diliput Oleh"
            subheadline="Sorotan dari berbagai media lifestyle dan kuliner nasional terkemuka yang meliput kehangatan dan kelezatan hidangan kami."
            align="center"
          />
        </AnimateInView>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {MEDIA_PARTNERS.map((media, index) => (
              <AnimateInView
                key={media.name}
                delay={index * 0.05}
                className="w-full flex justify-center"
              >
                <div className="relative h-14 w-full max-w-[120px] filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Image
                    src={media.logo}
                    alt={media.name}
                    width={120}
                    height={56}
                    className="object-contain max-h-12 w-auto"
                  />
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
