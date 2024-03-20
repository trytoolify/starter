import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
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
      <body className={GeistSans.className}>
        <div className="bg-secondary min-h-screen">{children}</div>
      </body>
    </html>
  );
}
