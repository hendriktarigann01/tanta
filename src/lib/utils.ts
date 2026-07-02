import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility untuk menggabungkan Tailwind classes secara aman */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format nomor ke currency Rupiah */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style:    "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Pad number dengan leading zeros */
export function padFrameNumber(n: number, digits = 6): string {
  return String(n).padStart(digits, "0");
}
