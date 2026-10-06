// One table maps every page to its French and English URL.
// The language switcher, hreflang tags, sitemap and navigation all read from here.

export const langs = ["fr", "en"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "fr";

export const routes = {
  home: { fr: "", en: "" },
  principles: { fr: "principes", en: "principles" },
  portfolio: { fr: "portfolio", en: "portfolio" },
  founder: { fr: "fondateur", en: "founder" },
  development: { fr: "developpement", en: "development" },
  blog: { fr: "blogue", en: "blog" },
  contact: { fr: "contact", en: "contact" },
} as const;

export type PageKey = keyof typeof routes;
export const pageKeys = Object.keys(routes) as PageKey[];

/** Pages in the main navigation, in order (the client's site map). The blog sits in the footer. */
export const navKeys = ["home", "principles", "portfolio", "founder", "development", "contact"] as const satisfies readonly PageKey[];

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

/** Path for a page in a language, e.g. href("en", "founder") -> "/en/founder" */
export function href(lang: Lang, key: PageKey): string {
  const slug = routes[key][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

/** Find which page a slug belongs to, in a given language. */
export function pageFromSlug(lang: Lang, slug: string): PageKey | undefined {
  return pageKeys.find((key) => routes[key][lang] === slug);
}

export function otherLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr";
}

/** Same page, other language. Falls back to the other home page. */
export function alternateHref(lang: Lang, pathname: string): string {
  const slug = pathname.replace(new RegExp(`^/${lang}/?`), "").replace(/\/$/, "");
  const key = slug ? pageFromSlug(lang, slug) : "home";
  return href(otherLang(lang), key ?? "home");
}
