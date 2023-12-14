import "./global.scss";
import type { Metadata } from "next";
import classNames from "classnames";
import { font_dm_sans, font_inter } from "@/library/fonts";
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
      className={classNames(font_dm_sans.variable, font_inter.variable)}
    >
      <body>
        <RequestProvider>{children}</RequestProvider>
      </body>
    </html>
  );
}
