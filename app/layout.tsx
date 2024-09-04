import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { cn } from "@trytoolify/ui/lib/utils";
import { Toaster } from "@trytoolify/ui/sonner";

import "@trytoolify/ui/index.css";
import "./globals.css";
import NavBar from "./nav-bar";

export const metadata: Metadata = {
  title: "Toolify | Local Starter",
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
        {!(process.env.NODE_ENV === "production") && <NavBar />}
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
