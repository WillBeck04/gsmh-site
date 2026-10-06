import { content } from "@/lib/content";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ContactBlock from "@/components/ContactBlock";
import FaqList from "@/components/FaqList";

export default function ContactPage({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <PageHero photo={photos.facade} lang={lang} eyebrow="GSMH" title={t.contact.title} />

      <section data-reveal className="mx-auto grid max-w-[1440px] gap-10 px-5 py-[clamp(56px,9vw,120px)] md:grid-cols-2 md:gap-20 md:px-[clamp(20px,5vw,72px)]">
        <div className="flex flex-col gap-5">
          <Eyebrow n="01">{t.contact.title}</Eyebrow>
          <h2 className="m-0 text-[clamp(25px,2.8vw,40px)]">{lang === "fr" ? site.name : site.nameEn}</h2>
          <ContactBlock lang={lang} />
        </div>
        <div className="relative aspect-[4/3] border border-line bg-cream-deep">
          <iframe src={site.links.mapEmbed} title={t.contact.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0 grayscale-[0.6]" />
        </div>
      </section>

      <section data-reveal className="bg-cream-deep">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8 px-5 py-[clamp(56px,8vw,110px)]">
          <Eyebrow n="02">{t.faq.title}</Eyebrow>
          <FaqList lang={lang} />
        </div>
      </section>
    </>
  );
}
