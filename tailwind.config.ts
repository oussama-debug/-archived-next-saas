import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-dm-sans), sans-serif",
      },
      colors: {
        primary: "#603FFD",
        destructive: "#d82c0d",
        brandSecondary: "#27273A",
        brandPrimary: "#603FFD",
        text: "#202223",
        textDisabled: "#8c9196",
        surfaceDisabled: "#fafbfb",
        borderDisabled: "#d2d5d8",
      },
      borderRadius: {
        md: "0.25rem",
      },
      boxShadow: {
        button: "0 0.0625rem 0 rgba(0,0,0,.05)",
      },
    },
  },
  plugins: [],
};
export default config;
