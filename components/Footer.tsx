import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { href, pageKeys, type Lang } from "@/lib/routes";

export default function Footer({ lang }: { lang: Lang }) {
  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-cream-deep">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:grid-cols-2 md:px-[clamp(20px,5vw,72px)] lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="flex gap-5">
          <Image src={site.logo} alt="" width={380} height={406} className="h-20 w-auto shrink-0" />
          <address className="not-italic text-[15px] leading-relaxed text-ink-soft">
            <strong className="font-semibold text-ink">{t.contact.orgLine}</strong><br />
            {t.contact.addressLines[0]}<br />
            {t.contact.addressLines[1]}<br />
            <a href={site.phoneHref} className="ul text-ink">{site.phone}</a><br />
            <a href={`mailto:${site.email}`} className="ul text-ink">{site.email}</a>
          </address>
        </div>
        <ul className="label flex flex-col gap-2 !text-[11px] !tracking-[0.2em]">
          {pageKeys.map((key) => (
            <li key={key}><Link href={href(lang, key)} className="ul text-ink">{t.nav.labels[key]}</Link></li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          <span className="label">{t.common.venuesLabel}</span>
          <a href={site.links.poisPenche} target="_blank" rel="noopener" className="ul self-start font-title text-[17px] font-semibold uppercase tracking-[0.1em] text-ink">Le Pois Penché</a>
          <a href={site.links.trope} target="_blank" rel="noopener" className="ul self-start font-title text-[17px] font-semibold uppercase tracking-[0.1em] text-ink">Tropé</a>
        </div>
      </div>
      <div className="label flex flex-wrap justify-between gap-3 border-t border-line px-5 py-6 !text-[10px] !text-ink-soft md:px-[clamp(20px,5vw,72px)]">
        <span>© {year} GSMH · {lang === "fr" ? site.name : site.nameEn} · {t.common.rights}</span>
        <span>Le Pois Penché · Tropé</span>
      </div>
    </footer>
  );
}
