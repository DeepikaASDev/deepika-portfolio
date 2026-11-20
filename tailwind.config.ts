import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe7ff",
          200: "#bcd2ff",
          300: "#8fb3fb",
          400: "#5b8ef5",
          500: "#3a6ee8",
          600: "#2856c9",
          700: "#1f3a5f",
          800: "#172b47",
          900: "#0f1d33"
        },
        accent: { 400: "#f6c13b", 500: "#e9a917" },
        ink: { 950: "#070b14", 900: "#0b1120", 800: "#111a2e", 700: "#1a2540" }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 29, 51, 0.08)",
        glow: "0 0 0 1px rgba(91,142,245,0.25), 0 12px 40px rgba(58,110,232,0.18)"
      }
    }
  },
  plugins: []
} satisfies Config;
