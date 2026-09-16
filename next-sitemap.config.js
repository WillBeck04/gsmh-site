/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.gsmh.ca",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*", "/design", "/design/*", "/test", "/test*"],
  robotsTxtOptions: { policies: [{ userAgent: "*", allow: "/", disallow: ["/design", "/test"] }, { userAgent: "GPTBot", allow: "/" }, { userAgent: "ClaudeBot", allow: "/" }, { userAgent: "PerplexityBot", allow: "/" }] },
};
