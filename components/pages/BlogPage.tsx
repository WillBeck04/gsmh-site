import { content } from "@/lib/content";
import { photos } from "@/lib/images";
import { posts, blogHome } from "@/lib/blog";
import type { Lang } from "@/lib/routes";
import PageHero from "@/components/PageHero";

export default function BlogPage({ lang }: { lang: Lang }) {
  const t = content[lang].blog;
  const fmt = new Intl.DateTimeFormat(lang === "fr" ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

  return (
    <>
      <PageHero photo={photos.kitchenTeam} lang={lang} eyebrow="GSMH" title={t.title} intro={t.intro} position="center 30%" />

      <section className="mx-auto max-w-[1040px] px-5 py-[clamp(56px,9vw,110px)]">
        <ol data-stagger className="m-0 list-none p-0">
          {posts.map((post) => (
            <li key={post.url} className="border-b border-line first:border-t">
              <a href={post.url} target="_blank" rel="noopener" className="group grid gap-1 py-5 sm:grid-cols-[180px_1fr_auto] sm:items-baseline sm:gap-6">
                <time dateTime={post.date} className="label !text-[10px]">{fmt.format(new Date(post.date))}</time>
                <span className="font-title text-[16px] font-semibold uppercase leading-snug tracking-[0.06em] text-ink transition-colors group-hover:text-gold">{post.title}</span>
                <span className="label hidden !text-ink-soft sm:inline" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="m-0 text-[15px] text-ink-soft">{t.note}</p>
          <a href={blogHome} target="_blank" rel="noopener" className="btn">{t.readAll}</a>
        </div>
      </section>
    </>
  );
}
