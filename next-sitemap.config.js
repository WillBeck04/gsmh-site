// Generates public/sitemap.xml and public/robots.txt after every build.
// hreflang pairs come from lib/routes.ts (FR slug -> EN slug); keep them in sync when adding a page.
const siteUrl = "https://www.gsmh.ca";
const pairs = {
  "/fr": "/en",
  "/fr/principes": "/en/principles",
  "/fr/portfolio": "/en/portfolio",
  "/fr/fondateur": "/en/founder",
  "/fr/developpement": "/en/development",
  "/fr/blogue": "/en/blog",
  "/fr/contact": "/en/contact",
};
const enToFr = Object.fromEntries(Object.entries(pairs).map(([fr, en]) => [en, fr]));

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/icon.png", "/apple-icon.png"],
  transform: async (config, path) => {
    const fr = pairs[path] ? path : enToFr[path];
    const en = pairs[path] ?? (enToFr[path] ? path : undefined);
    if (!fr || !en) return null;
    const home = path === "/fr" || path === "/en";
    return {
      loc: path,
      changefreq: home ? "weekly" : "monthly",
      priority: home ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        { href: `${siteUrl}${fr}`, hreflang: "fr-CA", hrefIsAbsolute: true },
        { href: `${siteUrl}${en}`, hreflang: "en-CA", hrefIsAbsolute: true },
        { href: `${siteUrl}${fr}`, hreflang: "x-default", hrefIsAbsolute: true },
      ],
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
    ],
  },
};
