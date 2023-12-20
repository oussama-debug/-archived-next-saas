import { DM_Sans, Inter, Poppins } from "next/font/google";

export const font_dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const font_inter = Inter({
  subsets: ["latin"],
  variable: "--font-dm-inter",
});

export const font_poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
