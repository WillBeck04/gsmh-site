"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";
import { alternateHref, otherLang, type Lang } from "@/lib/routes";

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const t = content[lang].nav;
  return (
    <Link href={alternateHref(lang, pathname)} hrefLang={otherLang(lang) === "fr" ? "fr-CA" : "en-CA"} lang={otherLang(lang)} aria-label={t.switchLang} className="ul text-gold">
      {t.switchLangShort}
    </Link>
  );
}
