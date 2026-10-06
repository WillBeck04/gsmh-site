import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { photos } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export default function FounderPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const f = t.founder;

  return (
    <>
      <PageHero photo={photos.imad} lang={lang} eyebrow={f.title} title={f.name} intro={f.role} position="60% 35%" />

      {/* Black-and-white portrait beside the full biography */}
      <section data-reveal className="grid bg-cream-deep md:grid-cols-2">
        <div className="lift relative aspect-[4/3] md:aspect-auto md:min-h-[620px]">
          <Image src={photos.imadBw.src} alt={photos.imadBw.alt[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="img" />
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 py-12 md:px-[clamp(24px,6vw,80px)] md:py-[clamp(48px,7vw,96px)]">
          <Eyebrow n="01">{f.title}</Eyebrow>
          <h2 className="m-0 text-[clamp(28px,3vw,42px)] tracking-[0.1em]">{f.name}</h2>
          <span className="label !text-ink-soft">{f.role}</span>
          {f.paragraphs.map((para, i) => (
            <p key={i} className={`m-0 text-[17px] leading-relaxed ${i ? "text-ink-soft" : ""}`}>{para}</p>
          ))}
        </div>
      </section>

      {/* Two photos and the way to the portfolio */}
      <section data-stagger className="grid gap-[6px] pt-[6px] md:grid-cols-2">
        {[photos.imadGuests, photos.kitchenTeam].map((p) => (
          <div key={p.src} className="lift relative aspect-[16/10]">
            <Image src={p.src} alt={p.alt[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="img" />
          </div>
        ))}
      </section>
      <section data-reveal className="flex flex-wrap justify-center gap-3 px-5 py-[clamp(48px,7vw,90px)]">
        <Link href={href(lang, "portfolio")} className="btn">{t.home.allPortfolio}</Link>
        <Link href={href(lang, "principles")} className="btn">{t.home.allPrinciples}</Link>
      </section>
    </>
  );
}
