import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1916",
        espresso: "#2d211a",
        walnut: "#62442f",
        leather: "#936a4b",
        terracotta: "#ae6f50",
        oat: "#d9c8b2",
        sand: "#e8ddce",
        linen: "#f3ede4",
        ivory: "#fbf8f2",
        sage: "#74745f",
        line: "#d8cbbb",
        muted: "#736b62",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.4em",
        wide2: "0.24em",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(45, 33, 26, 0.12)",
        card: "0 18px 46px rgba(45, 33, 26, 0.10)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        marquee: "marquee 48s linear infinite",
        "fade-up": "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        float: "float 6s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
