import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLang, langs, pageFromSlug, pageKeys, routes, type Lang, type PageKey } from "@/lib/routes";
import { buildMetadata } from "@/lib/buildMetadata";
import { breadcrumbSchema, faqSchema, founderSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

import PrinciplesPage from "@/components/pages/PrinciplesPage";
import PortfolioPage from "@/components/pages/PortfolioPage";
import FounderPage from "@/components/pages/FounderPage";
import DevelopmentPage from "@/components/pages/DevelopmentPage";
import BlogPage from "@/components/pages/BlogPage";
import ContactPage from "@/components/pages/ContactPage";

/** Pre-render every page in both languages at build time. */
export function generateStaticParams() {
  return langs.flatMap((lang) => pageKeys.filter((key) => key !== "home").map((key) => ({ lang, slug: routes[key][lang] })));
}

export const dynamicParams = false;

async function resolve(params: Promise<{ lang: string; slug: string }>): Promise<{ lang: Lang; key: PageKey } | null> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return null;
  const key = pageFromSlug(lang, slug);
  if (!key || key === "home") return null;
  return { lang, key };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  return buildMetadata(r.lang, r.key);
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const r = await resolve(params);
  if (!r) notFound();
  const { lang, key } = r;

  let page;
  let extra: object | null = null;
  switch (key) {
    case "principles": page = <PrinciplesPage lang={lang} />; break;
    case "portfolio": page = <PortfolioPage lang={lang} />; break;
    case "founder": page = <FounderPage lang={lang} />; extra = founderSchema(lang); break;
    case "development": page = <DevelopmentPage lang={lang} />; break;
    case "blog": page = <BlogPage lang={lang} />; break;
    case "contact": page = <ContactPage lang={lang} />; extra = faqSchema(lang); break;
    default: notFound();
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema(lang, key)} />
      <JsonLd data={extra} />
      {page}
    </>
  );
}
