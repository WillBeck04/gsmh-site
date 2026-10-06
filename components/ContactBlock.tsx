import { content } from "@/lib/content";
import { site } from "@/lib/site";
import type { Lang } from "@/lib/routes";

/** Name, address, phone and email, identical everywhere they appear. */
export default function ContactBlock({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <div className="flex flex-col gap-6">
      <address className="not-italic text-[17px] leading-[1.75] text-ink-soft">
        <strong className="font-semibold text-ink">{t.contact.orgLine}</strong><br />
        {t.contact.addressLines[0]}<br />
        {t.contact.addressLines[1]}<br />
        <a href={site.phoneHref} className="ul text-ink">{site.phone}</a><br />
        <a href={`mailto:${site.email}`} className="ul text-ink">{site.email}</a>
      </address>
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${site.email}`} className="btn btn-solid">{t.common.email}</a>
        <a href={site.links.map} target="_blank" rel="noopener" className="btn">{t.common.directions}</a>
      </div>
    </div>
  );
}
