/**
 * NAVIGATION CONFIG
 * ─────────────────────────────────────────────────────────────────
 * Daftar menu navbar. `href` menggunakan anchor (#section-id).
 * Tidak semua section perlu masuk navbar — sesuaikan sesuai kebutuhan.
 */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Promo",        href: "#promo" },
  { label: "Fasilitas",    href: "#facility" },
  { label: "Media",        href: "#media" },
  { label: "Lokasi",       href: "#location" },
  { label: "FAQ",          href: "#faq" },
];
