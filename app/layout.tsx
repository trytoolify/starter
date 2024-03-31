import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@trycreo/ui/dist/src/lib/utils";

import "@trycreo/ui/dist/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creo | Local Starter",
  description: "Generate your tools quickly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-secondary min-h-screen", GeistSans.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
