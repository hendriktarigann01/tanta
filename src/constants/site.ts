/**
 * SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Ganti nilai di sini untuk mengkustomisasi branding per client.
 * Semua section mengambil data dari file ini — tidak ada hardcode.
 */

export const SITE_CONFIG = {
  /** Nama proyek / restoran */
  name: "Tanta Resto & Lounge",

  /** Tagline singkat */
  tagline: "So much warmth, so much flavor, so much care",

  /** Description untuk SEO */
  description:
    "Tanta Resto & Lounge Plaza Senayan — Nikmati perpaduan kuliner Indonesia & Western fusion dining hangat di SOGO Plaza Senayan Level 2, Jakarta.",

  /** URL canonical */
  url: "https://www.tantaresto.com",

  /** Path logo */
  logo: "/tanta.png",

  /** Nomor WhatsApp (format internasional, tanpa +) */
  whatsapp: {
    number: "6281234567890",
    message:
      "Halo, saya ingin melakukan reservasi atau bertanya mengenai menu di Tanta Resto & Lounge.",
  },

  /** Social media */
  social: {
    instagram: "https://www.instagram.com/tantarestoandlounge/",
    youtube: "https://www.youtube.com/@TantaRestoLounge",
    tiktok: "",
  },

  /** Google Maps Embed URL (Plaza Senayan) */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3335.246692111479!2d106.79748897034567!3d-6.224237183447301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15008a1424f%3A0x53b97110393ca308!2sTanta%20Restaurant%20%26%20Lounge!5e0!3m2!1sid!2sid!4v1782979159715!5m2!1sid!2sid",

  /** Tahun untuk copyright */
  year: new Date().getFullYear(),
} as const;

/** WhatsApp URL builder */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsapp.message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
};
