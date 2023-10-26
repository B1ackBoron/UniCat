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
