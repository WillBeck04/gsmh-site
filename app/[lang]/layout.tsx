import type { Metadata } from "next";
import { Montserrat, Figtree, Cinzel } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import { isLang, langs, type Lang } from "@/lib/routes";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { organizationSchema } from "@/lib/schema";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Motion from "@/components/Motion";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-montserrat", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-figtree", display: "swap" });
const cinzel = Cinzel({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-cinzel", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
};

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang: Lang = raw;

  return (
    <html lang={lang === "fr" ? "fr-CA" : "en-CA"} className={`${montserrat.variable} ${figtree.variable} ${cinzel.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={organizationSchema(lang)} />
        <Intro tagline={content[lang].common.tagline} />
        <Header lang={lang} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <Motion />
      </body>
    </html>
  );
}
