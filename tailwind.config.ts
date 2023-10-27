import { Ubuntu, Zilla_Slab } from "next/font/google/index";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      bgDarkColor: "#292929",
      bgLightColor: "#EEE0D4",
      textLightMode: "#2A2A2A",
      white: "#FFF",
      gold: "#F5E4D0",
      primaryLightMode: "#F4F4F4",
      secondary800: "#5A5249",
      secondary1100: "#F9F5F1",
      secondary1200: "#F3EBE2",
      secondary1400: "#E8D6C5",
      secondary1500: "#E2CCB7",
      secondary1600: "#B5A392",
      secondary1800: "#5A5249",
      monochrome100: "#D4D4D4",
      monochrome400: "#555",
      monochrome600: "#222",
    },
    fontFamily: {
      ubuntu: ["Ubuntu"],
      zilla: ["Zilla_Slab"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
