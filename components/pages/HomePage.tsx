import Image from "next/image";
import Link from "next/link";

import { content } from "@/lib/content";
import { photos, venuePhotos, conceptPhotos } from "@/lib/images";
import { href, type Lang } from "@/lib/routes";
import Eyebrow from "@/components/Eyebrow";
import SectionTitle from "@/components/SectionTitle";
import FaqList from "@/components/FaqList";
import ContactBlock from "@/components/ContactBlock";

const section = "mx-auto max-w-[1440px] px-5 md:px-[clamp(20px,5vw,72px)]";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const owned = t.portfolio.venues.filter((v) => v.owned);
  const mandates = t.portfolio.venues.filter((v) => !v.owned);

  return (
    <>
      {/* Hero: downtown Montréal, the group's territory rather than one restaurant */}
      <section className="relative h-[min(760px,78vh)] min-h-[520px] overflow-hidden bg-ink">
        <div className="plx absolute inset-x-0 -inset-y-[12%]">
          <Image src={photos.street.src} alt={photos.street.alt[lang]} fill priority sizes="100vw" className="img kb" style={{ objectPosition: "45% 45%" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 to-ink/75" />
        <div className="absolute inset-x-0 bottom-[clamp(32px,6vw,72px)] flex flex-col items-center gap-5 px-5 text-center text-cream">
          <div className="rise-2"><Eyebrow light>{t.common.tagline}</Eyebrow></div>
          <h1 className="rise-3 m-0 max-w-[980px] text-[clamp(30px,4.2vw,60px)] tracking-[0.06em]">{t.home.title}</h1>
          <p className="rise-4 m-0 max-w-[680px] text-[16px] leading-relaxed text-cream/90 md:text-[19px]">{t.home.welcome1}</p>
        </div>
      </section>

      {/* Welcome, then vision and culture as a pair */}
      <section data-reveal className={`${section} flex flex-col items-center gap-9 pt-[clamp(56px,9vw,120px)]`}>
        <Eyebrow n="01">{t.home.eyebrow}</Eyebrow>
        <p className="m-0 max-w-[860px] text-center text-[clamp(18px,1.6vw,23px)] leading-relaxed">{t.home.welcome2}</p>
        <div data-stagger className="mt-3 grid w-full max-w-[1040px] gap-[2px] md:grid-cols-2">
          {[[t.home.visionTitle, t.home.vision], [t.home.cultureTitle, t.home.culture]].map(([title, text]) => (
            <div key={title} className="flex flex-col gap-3 bg-cream-deep p-[clamp(28px,3.5vw,44px)]">
              <h2 className="m-0 text-[16px] tracking-[0.16em] text-gold">{title}</h2>
              <p className="m-0 text-[17px] leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Three houses, three equal frames */}
      <section data-stagger className="grid gap-[6px] pt-[clamp(48px,7vw,90px)] md:grid-cols-3">
        {[photos.poisPenche, photos.henri, photos.tropeStore].map((p, i) => (
          <Link key={p.src} href={href(lang, "portfolio")} className="lift relative block aspect-[4/3]">
            <Image src={p.src} alt={p.alt[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" className="img" />
            <span className="label absolute bottom-[18px] left-5 !text-[10px] !text-cream [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">{["Le Pois Penché", "Restaurant Henri", "Tropé"][i]}</span>
          </Link>
        ))}
      </section>

      {/* Principles: 2 wide on top, 3 below */}
      <section data-reveal className={`${section} flex flex-col items-center gap-7 pt-[clamp(56px,9vw,120px)]`}>
        <SectionTitle n="02" eyebrow={t.nav.labels.principles} title={t.home.principlesTitle} />
        <div data-stagger className="p-grid mt-5 w-full">
          {t.principles.items.map((p, i) => (
            <div key={p.title} className="flex flex-col gap-3 border-t border-gold pt-5">
              <span className="label !text-[10px]">0{i + 1}</span>
              <h3 className="m-0 text-[17px] leading-snug tracking-[0.12em]">{p.title}</h3>
              <p className="m-0 text-[16px] leading-relaxed text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
        <Link href={href(lang, "principles")} className="btn mt-4">{t.home.allPrinciples}</Link>
      </section>

      {/* Portfolio: two owned houses large, three mandates in an equal row */}
      <section data-reveal className={`${section} flex flex-col items-center gap-5 pt-[clamp(56px,9vw,120px)]`}>
        <SectionTitle n="03" eyebrow={t.nav.labels.portfolio} title={t.home.portfolioTitle} intro={t.portfolio.intro} />
        <div data-stagger className="mt-6 grid w-full gap-8 md:grid-cols-2">
          {owned.map((v) => (
            <article key={v.key} className="flex flex-col gap-3">
              <div className="lift relative aspect-[16/10]">
                <Image src={venuePhotos[v.key].src} alt={venuePhotos[v.key].alt[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="img" />
                <span className="label absolute left-3.5 top-3.5 bg-cream px-2.5 py-1.5 !text-[10px]">{t.common.ownedBadge}</span>
              </div>
              <h3 className="m-0 mt-1 text-[20px] tracking-[0.1em]">{v.name}</h3>
              <span className="text-[13px] tracking-[0.04em] text-gold">{v.meta.map(([k, val]) => (val ? val : k)).join(" · ")}</span>
              <p className="m-0 text-[16px] leading-relaxed text-ink-soft">{v.text}</p>
              {v.link && <a href={v.link} target="_blank" rel="noopener" className="ul label self-start !text-ink">{t.common.visitSite}</a>}
            </article>
          ))}
        </div>
        <div className="label mt-10 self-start !text-ink-soft">{t.common.mandatesLabel}</div>
        <div data-stagger className="grid w-full gap-8 md:grid-cols-3">
          {mandates.map((v) => (
            <article key={v.key} className="flex flex-col gap-3">
              <div className="lift relative aspect-[4/3]">
                <Image src={venuePhotos[v.key].src} alt={venuePhotos[v.key].alt[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" className="img" />
              </div>
              <h3 className="m-0 mt-1 text-[17px] tracking-[0.1em]">{v.name}</h3>
              <span className="text-[13px] text-gold">{v.meta[1][1]} · {v.meta[2][1]} – {v.meta[3][1]}</span>
            </article>
          ))}
        </div>
        <Link href={href(lang, "portfolio")} className="btn mt-6">{t.home.allPortfolio}</Link>
      </section>

      {/* Founder: black-and-white portrait */}
      <section data-reveal className="mt-[clamp(56px,9vw,120px)] grid bg-cream-deep md:grid-cols-2">
        <div className="lift relative aspect-[4/3] md:aspect-auto md:min-h-[560px]">
          <Image src={photos.imadBw.src} alt={photos.imadBw.alt[lang]} fill sizes="(max-width: 768px) 100vw, 50vw" className="img" />
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 py-12 md:px-[clamp(24px,6vw,80px)] md:py-[clamp(48px,7vw,96px)]">
          <Eyebrow n="04">{t.nav.labels.founder}</Eyebrow>
          <h2 className="m-0 text-[clamp(28px,3vw,42px)] tracking-[0.1em]">{t.founder.name}</h2>
          <span className="label !text-ink-soft">{t.founder.role}</span>
          <p className="m-0 text-[17px] leading-relaxed">{t.founder.paragraphs[0]}</p>
          <Link href={href(lang, "founder")} className="btn self-start">{t.home.founderMore}</Link>
        </div>
      </section>

      {/* Development: three concepts, three equal columns */}
      <section data-reveal className={`${section} flex flex-col items-center gap-5 pt-[clamp(56px,9vw,120px)]`}>
        <SectionTitle n="05" eyebrow={t.nav.labels.development} title={t.home.developmentTitle} intro={t.development.intro} />
        <div data-stagger className="mt-8 grid w-full gap-8 md:grid-cols-3">
          {t.development.concepts.map((c, i) => (
            <div key={c.title} className="flex flex-col gap-3">
              <div className="lift relative aspect-[4/3]">
                <Image src={conceptPhotos[i][0].src} alt={conceptPhotos[i][0].alt[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" className="img" />
              </div>
              <span className="label mt-1">{c.services.replaceAll(" | ", " · ")}</span>
              <h3 className="m-0 text-[18px] leading-snug tracking-[0.1em]">{c.title}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{c.text}</p>
            </div>
          ))}
        </div>
        <Link href={href(lang, "development")} className="btn mt-6">{t.home.allDevelopment}</Link>
      </section>

      {/* Contact + FAQ */}
      <section data-reveal className={`${section} grid gap-x-20 gap-y-10 py-[clamp(56px,9vw,120px)] lg:grid-cols-2`}>
        <div className="flex flex-col gap-5">
          <Eyebrow n="06">{t.nav.labels.contact}</Eyebrow>
          <h2 className="m-0 text-[clamp(25px,2.8vw,40px)]">{lang === "fr" ? "Golden Square Mile Hospitalité" : "Golden Square Mile Hospitality"}</h2>
          <ContactBlock lang={lang} />
        </div>
        <div className="flex flex-col gap-6">
          <span className="label">{t.home.faqTitle}</span>
          <FaqList lang={lang} />
        </div>
      </section>
    </>
  );
}
