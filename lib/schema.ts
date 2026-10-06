// Builders for schema.org JSON-LD. Google and AI assistants read these to understand who GSMH is.

import { site } from "./site";
import { content } from "./content";
import { href, type Lang, type PageKey } from "./routes";

const abs = (path: string) => `${site.url}${path}`;

export function organizationSchema(lang: Lang) {
  const t = content[lang];
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: lang === "fr" ? site.name : site.nameEn,
    alternateName: [site.short, lang === "fr" ? site.nameEn : site.name],
    url: abs(href(lang, "home")),
    logo: abs(site.logo),
    image: abs("/images/og/home.jpg"),
    description: t.home.welcome1,
    foundingDate: site.founded,
    founder: {
      "@type": "Person",
      "@id": `${site.url}/#founder`,
      name: site.founder,
      jobTitle: t.founder.role,
      url: abs(href(lang, "founder")),
    },
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: lang === "fr" ? site.address.street : site.address.streetEn,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: "Montréal",
    subOrganization: [
      {
        "@type": "Restaurant",
        name: "Le Pois Penché",
        url: site.links.poisPenche,
        servesCuisine: "French",
        address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: "Montréal", addressRegion: "QC", postalCode: "H3G 1M2", addressCountry: "CA" },
      },
      {
        "@type": "Restaurant",
        name: lang === "fr" ? "Tropé Jus & Snackbar" : "Tropé Juice & Snackbar",
        url: site.links.trope,
        address: { "@type": "PostalAddress", streetAddress: "1448, rue Drummond", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H3G 1V9", addressCountry: "CA" },
      },
    ],
    sameAs: [site.links.blog],
  };
}

export function founderSchema(lang: Lang) {
  const t = content[lang].founder;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#founder`,
    name: site.founder,
    jobTitle: t.role,
    image: abs("/images/group/imad-portrait-bw.jpg"),
    description: t.paragraphs[0],
    worksFor: { "@id": `${site.url}/#organization` },
    alumniOf: ["École hôtelière de Lausanne", "Institut de tourisme et d'hôtellerie du Québec (ITHQ)"],
    url: abs(href(lang, "founder")),
  };
}

export function faqSchema(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content[lang].faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(lang: Lang, key: PageKey) {
  if (key === "home") return null;
  const t = content[lang];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.common.breadcrumbHome, item: abs(href(lang, "home")) },
      { "@type": "ListItem", position: 2, name: t.nav.labels[key], item: abs(href(lang, key)) },
    ],
  };
}
