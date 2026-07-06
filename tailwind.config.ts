import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#4F46E5",
        accent: "#06B6D4",
        surface: "#FFFFFF",
        section: "#F8FAFC",
        dark: "#0B1120",
        heading: "#0F172A",
        paragraph: "#475569",
        muted: "#94A3B8",
        borderc: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        btn: "16px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 23, 42, 0.06)",
        softer: "0 4px 16px rgba(15, 23, 42, 0.04)",
        glow: "0 0 40px rgba(37, 99, 235, 0.25)",
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
        "grad-accent": "linear-gradient(135deg, #06B6D4 0%, #2563EB 100%)",
        "grad-mesh":
          "radial-gradient(at 20% 20%, rgba(37,99,235,0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(79,70,229,0.10) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(6,182,212,0.10) 0px, transparent 50%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
