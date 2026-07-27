import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          950: "#060D18",
          900: "#0A1628",
          800: "#101F36",
          700: "#152A47",
        },
        pearl: {
          DEFAULT: "#F0F4F8",
          dim: "#C7D1DC",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dim: "#8C7527",
          bright: "#F0CD5E",
        },
        teal: {
          DEFAULT: "#00B4D8",
          dim: "#007A94",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.4em",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        gold: "0 0 24px rgba(212,175,55,0.35)",
        teal: "0 0 24px rgba(0,180,216,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 4px rgba(212,175,55,0.5)" },
          "50%": { opacity: "1", boxShadow: "0 0 14px rgba(212,175,55,0.9)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
