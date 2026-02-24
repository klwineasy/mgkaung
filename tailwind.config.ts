import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          neon: "#00f5ff",
        },
        magenta: {
          neon: "#ff00a0",
        },
        yellow: {
          neon: "#f5e642",
        },
        green: {
          neon: "#00ff88",
        },
        dark: {
          base: "#030308",
          panel: "rgba(0,245,255,0.04)",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "monospace"],
        mono: ["Share Tech Mono", "monospace"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "slide-right": "slideRight 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "blink": "blink 0.7s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "date-pulse": "datePulse 3s ease-in-out infinite",
        "icon-pulse": "iconPulse 2.5s ease-in-out infinite",
        "dot-pulse": "dotPulse 2s infinite",
        "orb-1": "orbFloat1 10s ease-in-out infinite",
        "orb-2": "orbFloat2 13s ease-in-out infinite",
        "orb-3": "orbFloat3 8s ease-in-out infinite",
        "grid-pulse": "gridPulse 5s ease-in-out infinite alternate",
        "data-flow": "dataFlow 4s ease-in-out infinite",
        "data-flow-slow": "dataFlow 5s ease-in-out infinite 1.5s",
        "scroll-down": "scrollDown 1.8s ease-in-out infinite",
        "edu-spin": "eduSpin 9s linear infinite",
        "glitch-a": "glitchA 8s infinite 3s",
        "glitch-b": "glitchB 8s infinite 3.15s",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-28px)" },
          to: { opacity: "1", transform: "none" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1", boxShadow: "0 0 14px currentColor" },
        },
        datePulse: {
          "50%": {
            borderColor: "rgba(245,230,66,0.5)",
            boxShadow: "0 0 8px rgba(245,230,66,0.2)",
          },
        },
        iconPulse: {
          "50%": {
            textShadow:
              "0 0 40px rgba(245,230,66,0.9), 0 0 80px rgba(245,230,66,0.4)",
          },
        },
        dotPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.5)", opacity: "0.5" },
        },
        orbFloat1: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(40px,30px)" },
        },
        orbFloat2: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-30px,-40px)" },
        },
        orbFloat3: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(20px,-20px)" },
        },
        gridPulse: {
          to: { opacity: "0.4" },
        },
        dataFlow: {
          to: { top: "200%" },
        },
        scrollDown: {
          to: { top: "200%" },
        },
        eduSpin: {
          to: { transform: "rotate(360deg)" },
        },
        glitchA: {
          "0%, 88%, 100%": {
            opacity: "0",
            transform: "none",
            clipPath: "none",
          },
          "89%": {
            opacity: "0.85",
            transform: "translate(-3px,0) skewX(-2deg)",
            clipPath: "inset(10% 0 70% 0)",
          },
          "91%": {
            opacity: "0.85",
            transform: "translate(3px,0)",
            clipPath: "inset(55% 0 15% 0)",
          },
          "93%": { opacity: "0" },
        },
        glitchB: {
          "0%, 88%, 100%": {
            opacity: "0",
            transform: "none",
            clipPath: "none",
          },
          "89%": {
            opacity: "0.6",
            transform: "translate(3px,0) skewX(2deg)",
            clipPath: "inset(30% 0 50% 0)",
          },
          "92%": {
            opacity: "0.6",
            transform: "translate(-3px,0)",
            clipPath: "inset(65% 0 5% 0)",
          },
          "94%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
