/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ── Brand Tokens (customizable per client) ──────────────────
        brand: {
          primary:   "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          accent:    "var(--color-brand-accent)",
          bg:        "var(--color-brand-bg)",
          surface:   "var(--color-brand-surface)",
          border:    "var(--color-brand-border)",
          text:      "var(--color-brand-text)",
          muted:     "var(--color-brand-muted)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body:    ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bounce-slow": "bounce 2s infinite",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
