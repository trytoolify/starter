import "./globals.css";
import "@trycreo/core/index.css";
import "@trycreo/ui/dist/index.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { default as CreoRootLayout } from "@trycreo/core/pages/layout";

const inter = Inter({ subsets: ["latin"] });

const stabilGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/StabilGrotesk-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/StabilGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/StabilGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/StabilGrotesk-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/StabilGrotesk-Thin.otf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creo | Local development",
  description: "Build great tooling, fast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body
        className={
          stabilGrotesk.className +
          " " +
          "dark bg-black text-foreground styled-scrollbar"
        }
      >
        <CreoRootLayout>{children}</CreoRootLayout>
      </body>
    </html>
  );
}
