import { SITE_CONFIG } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WAFloatingButton } from "@/components/ui";
import {
  HeroFrameBackground,
  Hero,
  Promo,
  Menu,
  MediaCoverage,
  Location,
  Facility,
  Advantage,
  AboutUs,
  FAQ,
  CTA,
} from "@/components/sections";

/**
 * MAIN PAGE
 * ─────────────────────────────────────────────────────────────────
 * One-page landing page.
 */
export default function HomePage() {
  return (
    <main className="relative bg-brand-bg min-h-screen overflow-x-hidden">
      {/* ── Fixed Scroll-driven Background (Envision Pattern) ────── */}
      <HeroFrameBackground />
      {/* ── Layout ──────────────────────────────────────────────── */}
      <Navbar />

      <Hero />

      {/* ── Other Sections ──────────────────────────────────────── */}
      <Promo />
      <Menu />
      <Facility />
      <Advantage />
      <Location />
      <AboutUs />
      <MediaCoverage />
      <FAQ />
      <CTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────────────────────────── */}
      <WAFloatingButton />

      {/* ── Structured Data Restaurant ────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: SITE_CONFIG.name,
            image: SITE_CONFIG.url + "/tanta.png",
            url: SITE_CONFIG.url,
            telephone: "+6285117407455",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Plaza Senayan, SOGO Department Store Level 2, Jl. Asia Afrika No.8, Gelora, Tanah Abang",
              addressLocality: "Jakarta Pusat",
              addressRegion: "DKI Jakarta",
              postalCode: "10270",
              addressCountry: "ID",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -6.2239462,
              longitude: 106.7972061,
            },
            servesCuisine: "Indonesian, Western, Fusion, Coffee, Tea",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "22:00",
            },
          }),
        }}
      />
    </main>
  );
}
