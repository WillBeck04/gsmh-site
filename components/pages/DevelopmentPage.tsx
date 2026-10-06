import Image from "next/image";

import { content } from "@/lib/content";
import { photos, conceptPhotos } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export default function DevelopmentPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const d = t.development;

  return (
    <>
      <PageHero photo={photos.brasserieRoom} lang={lang} eyebrow="GSMH" title={d.title} />

      <section data-reveal className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-5 py-[clamp(56px,9vw,110px)] text-center">
        <p className="m-0 text-[clamp(18px,1.6vw,22px)] leading-relaxed">{d.intro}</p>
        <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{d.intro2}</p>
        <a href={`mailto:${site.email}?subject=${encodeURIComponent(d.contactCta)}`} className="btn btn-solid mt-2">{d.contactCta}</a>
      </section>

      {/* One row per concept: a photo pair, then the text and highlights */}
      {d.concepts.map((c, i) => (
        <section key={c.title} data-reveal className={i % 2 ? "bg-cream-deep" : ""}>
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-[clamp(56px,8vw,110px)] md:grid-cols-2 md:gap-16 md:px-[clamp(20px,5vw,72px)]">
            <div className={`grid grid-cols-[1.4fr_1fr] gap-[6px] ${i % 2 ? "md:order-2" : ""}`}>
              {conceptPhotos[i].map((p, k) => (
                <div key={p.src} className={`lift relative ${k ? "aspect-[3/4] self-end" : "aspect-[4/5]"}`}>
                  <Image src={p.src} alt={p.alt[lang]} fill sizes="(max-width: 768px) 60vw, 30vw" className="img" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <Eyebrow n={`0${i + 1}`}>{t.nav.labels.development}</Eyebrow>
              <h2 className="m-0 text-[clamp(24px,2.6vw,36px)] tracking-[0.08em]">{c.title}</h2>
              <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{c.text}</p>
              <div className="flex flex-col gap-3 border-t border-line pt-5">
                <span className="label">{t.common.highlights} — {c.services}</span>
                <ul className="m-0 grid list-none gap-x-6 gap-y-2 p-0 text-[15px] text-ink-soft sm:grid-cols-2">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5"><span className="text-gold" aria-hidden="true">◆</span>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
