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
        primary: "#211D2D",
        accentPrimary: "#9C66FF",
        secondary: "#13D3E9",
        black: "#211D2D",
      },
    },
    boxShadow: {
      primary_button:
        "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(89, 44, 229, 0.16), 0px 2px 5px 0px rgba(60, 66, 87, 0.08)",
      secondary_button:
        "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 2px 5px 0px rgba(60, 66, 87, 0.08)",
    },
  },
  plugins: [],
};
export default config;
