import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@trycreo/ui/dist/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creo | Local development",
  description: "Build great tooling, fast",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body
        className={
          stabilGrotesk.className + " " + "dark bg-black styled-scrollbar"
        }
      >
        {children}
      </body>
    </html>
  );
}
