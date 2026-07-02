/**
 * TYPE DEFINITIONS
 * ─────────────────────────────────────────────────────────────────
 * Shared TypeScript interfaces untuk seluruh proyek.
 */

// ── Navigation ───────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href:  string;
}

export interface HeroSlide {
  id:          string;
  headline:    string;
  description: string;
}

export interface HeroContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  description: string;
  badge:       string;
  cta: {
    primary:   string;
    secondary: string;
  };
  totalFrames: number;
  frameDir:    string;
  frameName:   string;
  slides:      HeroSlide[];
}

// ── Promo ────────────────────────────────────────────────────────
export interface PromoGroup {
  id:    string;
  title: string;
  items: string[];
}

export interface PromoContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  note:        string;
  groups:      PromoGroup[];
}

// ── Menu (sebelumnya Cluster) ────────────────────────────────────
export interface MenuItem {
  id:          string;
  name:        string;
  price:       string;
  description: string;
  image:       string;
  tag?:        string; // e.g. "Best Seller", "Reviewer Favorite", "Spicy"
  isSpicy?:    boolean;
}

export interface MenuCategory {
  id:    string;
  name:  string;
  items: MenuItem[];
}

export interface MenuContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  categories:  MenuCategory[];
}

// ── Branches (sebelumnya Landmark) ───────────────────────────────
export interface BranchItem {
  id:       string;
  name:     string;
  address:  string;
  phone?:   string;
  hours?:   string;
}

export interface BranchContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  branches:    BranchItem[];
}

// ── Location ─────────────────────────────────────────────────────
export interface LocationContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  description: string;
  address:     string;
  phone:       string;
  hours:       { [key: string]: string };
}

// ── Facility ─────────────────────────────────────────────────────
export type FacilityIcon =
  | "waves" | "activity" | "trees" | "shield" | "bus"
  | "sun" | "recycle" | "building" | "wifi" | "droplets"
  | "key" | "moon" | "utensils" | "parking" | "award" | "users";

export interface FacilityItem {
  id:          string;
  label:       string;
  description: string;
  icon:        FacilityIcon;
}

export interface FacilityContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  items:       FacilityItem[];
}

// ── Advantage ────────────────────────────────────────────────────
export interface AdvantageItem {
  id:          string;
  number:      string;
  title:       string;
  description: string;
}

export interface AdvantageContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  items:       AdvantageItem[];
}

// ── About ────────────────────────────────────────────────────────
export interface StatItem {
  id:    string;
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  description: string;
  stats:       StatItem[];
}

// ── FAQ ──────────────────────────────────────────────────────────
export interface FAQItem {
  id:       string;
  question: string;
  answer:   string;
}

export interface FAQContent {
  eyebrow:  string;
  headline: string;
  items:    FAQItem[];
}

// ── CTA ──────────────────────────────────────────────────────────
export interface CTAContent {
  eyebrow:     string;
  headline:    string;
  subheadline: string;
  cta: {
    primary:   string;
    secondary: string;
  };
}

// ── Footer ───────────────────────────────────────────────────────
export interface FooterContent {
  tagline:   string;
  copyright: string;
  links:     NavLink[];
}

// ── Generic ──────────────────────────────────────────────────────
export interface SectionProps {
  className?: string;
}
