import { content } from "@/lib/content";
import type { Lang } from "@/lib/routes";

/** The four client Q&As, a 2×2 grid (FAQPage JSON-LD is added by the page). */
export default function FaqList({ lang }: { lang: Lang }) {
  return (
    <div data-stagger className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {content[lang].faq.items.map((f) => (
        <div key={f.q} className="flex flex-col gap-2 border-t border-line pt-4">
          <h3 className="m-0 text-[13px] leading-snug tracking-[0.1em]">{f.q}</h3>
          <p className="m-0 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
        </div>
      ))}
    </div>
  );
}
