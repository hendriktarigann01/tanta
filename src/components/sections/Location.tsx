import { MapPin, Phone, Clock } from "lucide-react";
import { LOCATION_CONTENT } from "@/constants/content";
import { SITE_CONFIG } from "@/constants/site";
import { SectionHeader, AnimateInView } from "@/components/ui";

/**
 * LOCATION SECTION
 * Google Maps embed + deskripsi lokasi.
 */
export function Location() {
  const { eyebrow, headline, subheadline, description, address, phone, hours } = LOCATION_CONTENT;

  return (
    <section id="location" className="section-padding bg-[#FCFAF7]">
      <div className="container-wide">
        <AnimateInView>
          <SectionHeader eyebrow={eyebrow} headline={headline} subheadline={subheadline} />
        </AnimateInView>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10">
          {/* Map Embed */}
          <AnimateInView variant="fade-left" className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-[var(--radius-card)] overflow-hidden aspect-[4/3] shadow-md border border-brand-border">
              <iframe
                src={SITE_CONFIG.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Peta lokasi ${SITE_CONFIG.name}`}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </AnimateInView>

          {/* Description */}
          <AnimateInView variant="fade-right" delay={0.1} className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <p className="text-base text-brand-muted leading-relaxed">
              {description}
            </p>

            {/* Address, Phone, Hours info */}
            <div className="space-y-5 pt-4 border-t border-brand-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary border border-brand-primary/5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-0.5">Alamat Lengkap</h4>
                  <p className="text-sm text-brand-text font-medium leading-relaxed">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary border border-brand-primary/5">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-0.5">Telepon / WhatsApp</h4>
                  <p className="text-sm text-brand-text font-medium">{phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 text-brand-primary border border-brand-primary/5">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-brand-muted mb-0.5">Jam Operasional</h4>
                  <div className="text-sm text-brand-text font-medium space-y-1">
                    {Object.entries(hours).map(([day, time]) => (
                      <div key={day} className="flex gap-2">
                        <span className="font-semibold text-brand-primary">{day}:</span>
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
