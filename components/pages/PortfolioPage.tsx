import Image from "next/image";

import { content } from "@/lib/content";
import { photos, venuePhotos } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

type Venue = (typeof content)["fr"]["portfolio"]["venues"][number];

function Meta({ meta }: { meta: Venue["meta"] }) {
  return (
    <dl className="m-0 grid gap-x-6 gap-y-2 border-y border-line py-4 text-[14px] sm:grid-cols-[auto_1fr]">
      {meta.map(([k, v]) =>
        v ? (
          <div key={k} className="contents">
            <dt className="label !text-[10px] !leading-[2.1]">{k}</dt>
            <dd className="m-0 text-ink">{v}</dd>
          </div>
        ) : (
          <div key={k} className="contents"><dt className="label !text-[10px] !leading-[2.1] sm:col-span-2">{k}</dt></div>
        ),
      )}
    </dl>
  );
}

export default function PortfolioPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const owned = t.portfolio.venues.filter((v) => v.owned);
  const mandates = t.portfolio.venues.filter((v) => !v.owned);

  return (
    <>
      <PageHero photo={photos.cuisine} lang={lang} eyebrow="GSMH" title={t.portfolio.title} intro={t.portfolio.intro} />

      {/* Owned houses: large alternating rows */}
      <section className="mx-auto flex max-w-[1440px] flex-col gap-[clamp(56px,8vw,110px)] px-5 py-[clamp(56px,9vw,120px)] md:px-[clamp(20px,5vw,72px)]">
        <SectionTitle n="01" eyebrow={t.common.ownedLabel} title={t.home.portfolioTitle} />
        {owned.map((v, i) => (
          <article key={v.key} data-reveal className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
            <div className={`lift relative aspect-[16/11] ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={venuePhotos[v.key].src} alt={venuePhotos[v.key].alt[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="img" />
              <span className="label absolute left-3.5 top-3.5 bg-cream px-2.5 py-1.5 !text-[10px]">{t.common.ownedBadge}</span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="m-0 text-[clamp(24px,2.6vw,36px)] tracking-[0.1em]">{v.name}</h2>
              <Meta meta={v.meta} />
              <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{v.text}</p>
              {v.link && <a href={v.link} target="_blank" rel="noopener" className="btn self-start">{t.common.visitSite}</a>}
            </div>
          </article>
        ))}
      </section>

      {/* Mandates for third parties: three equal columns */}
      <section className="bg-cream-deep">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 py-[clamp(56px,9vw,120px)] md:px-[clamp(20px,5vw,72px)]">
          <SectionTitle n="02" eyebrow={t.common.mandatesLabel} title={t.common.mandatesLabel} />
          <div data-stagger className="grid gap-10 md:grid-cols-3">
            {mandates.map((v) => (
              <article key={v.key} className="flex flex-col gap-4">
                <div className="lift relative aspect-[4/3]">
                  <Image src={venuePhotos[v.key].src} alt={venuePhotos[v.key].alt[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" className="img" />
                </div>
                <h2 className="m-0 mt-1 text-[19px] tracking-[0.1em]">{v.name}</h2>
                <Meta meta={v.meta} />
                <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
