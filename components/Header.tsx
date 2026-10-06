"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { href, navKeys, type Lang } from "@/lib/routes";
import LanguageSwitcher from "./LanguageSwitcher";

/** Logo on the left, the six pages inline on desktop; a full-screen menu behind a button on phones and tablets. */
export default function Header({ lang }: { lang: Lang }) {
  const t = content[lang].nav;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = navKeys.map((key) => ({ key, path: href(lang, key), label: t.labels[key] }));

  return (
    <header className="relative z-40 border-b border-line bg-cream">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 md:px-[clamp(20px,5vw,72px)] md:py-6">
        <Link href={href(lang, "home")} onClick={() => setOpen(false)} aria-label={t.labels.home} className="shrink-0">
          <Image src={site.logo} alt={lang === "fr" ? site.name : site.nameEn} width={380} height={406} priority className="h-12 w-auto md:h-16" />
        </Link>

        <nav aria-label="Navigation" className="label hidden items-center gap-x-7 !text-[11px] !tracking-[0.22em] lg:flex">
          {links.map((l) => (
            <Link key={l.key} href={l.path} aria-current={pathname === l.path ? "page" : undefined} className="ul text-ink">
              {l.label}
            </Link>
          ))}
          <LanguageSwitcher lang={lang} />
        </nav>

        <div className="label flex items-center gap-6 lg:hidden">
          <LanguageSwitcher lang={lang} />
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.closeMenu : t.openMenu} className="relative block h-5 w-7">
            <span className={`absolute left-0 h-px w-7 bg-ink transition-all duration-300 ${open ? "top-[9px] rotate-45" : "top-1"}`} />
            <span className={`absolute left-0 top-[9px] h-px w-7 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-7 bg-ink transition-all duration-300 ${open ? "top-[9px] -rotate-45" : "top-[17px]"}`} />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Navigation" aria-hidden={!open} className={`fixed inset-x-0 bottom-0 top-[81px] z-30 overflow-y-auto bg-cream px-6 pb-16 pt-8 transition-[opacity,transform] duration-500 md:top-[113px] lg:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}>
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li key={l.key} className="border-b border-line">
              <Link href={l.path} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} aria-current={pathname === l.path ? "page" : undefined} className={`flex items-baseline gap-4 py-4 font-title text-[22px] font-semibold uppercase tracking-[0.08em] ${pathname === l.path ? "text-gold" : "text-ink"}`}>
                <span className="label !text-[10px]">0{i + 1}</span>{l.label}
              </Link>
            </li>
          ))}
        </ul>
        <address className="mt-10 not-italic text-[15px] leading-relaxed text-ink-soft">
          <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1} className="text-ink">{site.email}</a><br />
          <a href={site.phoneHref} tabIndex={open ? 0 : -1} className="text-ink">{site.phone}</a>
        </address>
      </nav>
    </header>
  );
}
