import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { photos } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export default function PrinciplesPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const [first, ...rest] = t.principles.items;

  return (
    <>
      <PageHero photo={photos.salle} lang={lang} eyebrow="GSMH" title={t.principles.title} intro={t.principles.intro} />

      {/* Principle 01 with the vision and culture behind it */}
      <section data-reveal className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-[clamp(56px,9vw,120px)] md:grid-cols-2 md:gap-20 md:px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-col gap-5">
          <Eyebrow n="01">{t.nav.labels.principles}</Eyebrow>
          <h2 className="m-0 text-[clamp(26px,3vw,42px)]">{first.title}</h2>
          <p className="m-0 text-[clamp(18px,1.5vw,21px)] leading-relaxed">{first.text}</p>
        </div>
        <div className="lift relative aspect-[4/3]">
          <Image src={photos.chefLogo.src} alt={photos.chefLogo.alt[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="img" />
        </div>
      </section>

      {/* Principles 02–05, a 2×2 grid */}
      <section data-reveal className="bg-cream-deep">
        <div data-stagger className="mx-auto grid max-w-[1440px] gap-x-16 gap-y-12 px-5 py-[clamp(56px,8vw,110px)] md:grid-cols-2 md:px-[clamp(20px,5vw,72px)]">
          {rest.map((p, i) => (
            <div key={p.title} className="flex flex-col gap-3 border-t border-gold pt-6">
              <span className="label !text-[10px]">0{i + 2}</span>
              <h2 className="m-0 text-[clamp(19px,1.8vw,24px)] tracking-[0.1em]">{p.title}</h2>
              <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision and culture */}
      <section data-reveal className="mx-auto grid max-w-[1440px] gap-10 px-5 py-[clamp(56px,9vw,120px)] md:grid-cols-[1.1fr_1fr] md:gap-20 md:px-[clamp(20px,5vw,72px)]">
        <div className="lift relative aspect-[4/3]">
          <Image src={photos.equipe.src} alt={photos.equipe.alt[lang]} fill sizes="(max-width: 768px) 100vw, 55vw" className="img" />
        </div>
        <div className="flex flex-col justify-center gap-8">
          {[[t.home.visionTitle, t.home.vision], [t.home.cultureTitle, t.home.culture]].map(([title, text]) => (
            <div key={title} className="flex flex-col gap-3">
              <h2 className="m-0 text-[16px] tracking-[0.16em] text-gold">{title}</h2>
              <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
          <Link href={href(lang, "portfolio")} className="btn self-start">{t.home.allPortfolio}</Link>
        </div>
      </section>
    </>
  );
}
