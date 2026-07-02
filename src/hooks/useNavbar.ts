"use client";

import { useState, useEffect } from "react";

/**
 * Hook untuk tracking scroll position dan behavior navbar.
 * @returns scrolled - true jika scroll > threshold
 */
export function useNavbar(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // Lock body scroll saat mobile menu terbuka
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile  = () => setMobileOpen(false);

  return { scrolled, mobileOpen, toggleMobile, closeMobile };
}
