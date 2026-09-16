// 301 redirects from the old Squarespace gsmh.ca. proxy.ts applies these in one hop.
// Old site was one bilingual page per URL (FR then EN), no /en/. Every old URL maps to /fr/... with /en/... as alternate.

export const OLD_SITE: { fr: string; old: string[] }[] = [
  { fr: "/fr", old: ["/about", "/home", "/cart", "/book-a-consultation", "/index.html"] },
  { fr: "/fr/principes", old: ["/principles"] },
  { fr: "/fr/portfolio", old: ["/portfolio"] },
  { fr: "/fr/fondateur", old: ["/people"] },
  { fr: "/fr/developpement", old: ["/in-development"] },
  { fr: "/fr/blogue", old: ["/blog"] },
  { fr: "/fr/contact", old: ["/contact-us"] },
];

export function resolveOldUrl(path: string): string | null {
  const p = path.replace(/\/+$/, "").toLowerCase() || "/";
  if (p === "/") return null;
  for (const r of OLD_SITE) if (r.old.includes(p)) return r.fr;
  return null;
}
