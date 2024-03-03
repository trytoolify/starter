import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@trycreo/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="bg-secondary min-h-screen">{children}</div>
      </body>
    </html>
  );
}
