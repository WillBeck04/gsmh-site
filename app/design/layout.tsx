import type { Metadata } from "next";
import { Montserrat, Figtree, Cinzel } from "next/font/google";
import "../globals.css";
import "./design.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-montserrat", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"], variable: "--font-figtree", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-cinzel", display: "swap" });

export const metadata: Metadata = { title: "GSMH · Directions de design", robots: { index: false, follow: false } };

export default function DesignLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${montserrat.variable} ${figtree.variable} ${cinzel.variable}`}>
      <body className="design-body">{children}</body>
    </html>
  );
}
