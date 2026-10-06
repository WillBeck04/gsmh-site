import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLang } from "@/lib/routes";
import { buildMetadata } from "@/lib/buildMetadata";
import { faqSchema } from "@/lib/schema";
import HomePage from "@/components/pages/HomePage";
import JsonLd from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildMetadata(lang, "home");
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <>
      <JsonLd data={faqSchema(lang)} />
      <HomePage lang={lang} />
    </>
  );
}
