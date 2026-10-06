// 301 redirects from every past version of gsmh.ca. proxy.ts applies these in one hop.
// Sources: the Squarespace sitemap and crawl (Oct 2026) and the Wayback Machine history of the domain.
// The old site was one bilingual page per URL (FR then EN), with no /en/. Every old URL maps to /fr/...,
// whose hreflang alternate is the /en/... twin.
// To add one, add the old path (lowercase, no trailing slash) to the right row.

export const OLD_SITE: { fr: string; old: string[] }[] = [
  { fr: "/fr", old: ["/about", "/home", "/cart", "/book-a-consultation", "/index.html", "/index.php", "/search"] },
  { fr: "/fr/principes", old: ["/principles"] },
  { fr: "/fr/portfolio", old: ["/portfolio", "/services", "/services-3"] },
  { fr: "/fr/fondateur", old: ["/people", "/founder"] },
  { fr: "/fr/developpement", old: ["/in-development", "/development"] },
  { fr: "/fr/blogue", old: ["/blog"] },
  { fr: "/fr/contact", old: ["/contact-us", "/contact"] },
];

/** Old paths that start with these go to the home page (Squarespace blog/commerce leftovers, the pre-2021 site). */
export const OLD_PREFIXES = ["/blog/", "/s/", "/lib/", "/commerce/", "/account"];

export function resolveOldUrl(path: string): string | null {
  const p = path.replace(/\/+$/, "").toLowerCase() || "/";
  if (p === "/") return null;
  for (const r of OLD_SITE) if (r.old.includes(p)) return r.fr;
  if (OLD_PREFIXES.some((prefix) => p.startsWith(prefix))) return p.startsWith("/blog/") ? "/fr/blogue" : "/fr";
  return null;
}
