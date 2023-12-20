import "./global.scss";
import type { Metadata } from "next";
import classNames from "classnames";
import { font_dm_sans, font_inter, font_poppins } from "@/library/fonts";
import RequestProvider from "@/library/requests/provider";

export const metadata: Metadata = {
  title: "Zenlanes",
  description: "Zenlanes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        font_dm_sans.variable,
        font_inter.variable,
        font_poppins.variable
      )}
    >
      <body>
        <RequestProvider>{children}</RequestProvider>
      </body>
    </html>
  );
}
