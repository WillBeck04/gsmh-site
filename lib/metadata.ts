// What Google shows for each page: the tab title, the description under it, and the share image.
// Keep titles under ~60 characters and descriptions under ~155.
// Share images (1200×630) live in public/images/og/ and are made by `npm run og`.

import type { Lang, PageKey } from "./routes";

type PageMeta = { title: string; description: string; ogImage: string };

const fr: Record<PageKey, PageMeta> = {
  home: {
    title: "GSMH | Golden Square Mile Hospitalité, restaurants à Montréal",
    description:
      "Développeur montréalais de restaurants gastronomiques et de concepts santé. Propriétaire du Pois Penché et de Tropé, dans le Mille carré doré depuis 2011.",
    ogImage: "/images/og/home.jpg",
  },
  principles: {
    title: "Nos principes | GSMH, Golden Square Mile Hospitalité",
    description:
      "Hospitalité légendaire, concepts pertinents, gestion profitable, confiance et engagement communautaire : les cinq principes de GSMH à Montréal.",
    ogImage: "/images/og/principles.jpg",
  },
  portfolio: {
    title: "Portfolio : Le Pois Penché, Tropé, Henri | GSMH Montréal",
    description:
      "Les établissements de GSMH (Le Pois Penché, Tropé Jus & Snackbar) et ses mandats : Restaurant Henri à l'Hôtel Birks, Gustave, Hôtel Chez Swann.",
    ogImage: "/images/og/portfolio.jpg",
  },
  founder: {
    title: "Imad Nabwani, fondateur et président | GSMH",
    description:
      "Restaurateur montréalais depuis les années 1990, ancien vice-président du Groupe Queue de Cheval et fondateur de GSMH en 2011. Son parcours.",
    ogImage: "/images/og/founder.jpg",
  },
  development: {
    title: "Concepts en développement et partenariats | GSMH",
    description:
      "Steakhouse nouvelle génération, brasserie française décontractée, rôtisserie syrienne : les concepts de GSMH et les partenariats recherchés.",
    ogImage: "/images/og/development.jpg",
  },
  blog: {
    title: "Blogue | GSMH, Golden Square Mile Hospitalité",
    description:
      "Notre culture et la scène hôtelière et gastronomique de Montréal : recettes, brasseries françaises, Le Pois Penché, Henri et Chez Swann.",
    ogImage: "/images/og/blog.jpg",
  },
  contact: {
    title: "Nous joindre | GSMH, 1230 De Maisonneuve Ouest, Montréal",
    description:
      "Golden Square Mile Hospitalité, 1230, boul. De Maisonneuve Ouest, Montréal (Québec) H3G 1M2. Écrivez à Imad Nabwani pour un partenariat.",
    ogImage: "/images/og/contact.jpg",
  },
};

const en: Record<PageKey, PageMeta> = {
  home: {
    title: "GSMH | Golden Square Mile Hospitality, Montreal restaurants",
    description:
      "Montreal developer of fine-dining restaurants and healthy fast-casual concepts. Owner of Le Pois Penché and Tropé in the Golden Square Mile since 2011.",
    ogImage: "/images/og/home.jpg",
  },
  principles: {
    title: "Our principles | GSMH, Golden Square Mile Hospitality",
    description:
      "Legendary hospitality, relevant concepts, profitable management, trust and community engagement: the five principles behind GSMH in Montreal.",
    ogImage: "/images/og/principles.jpg",
  },
  portfolio: {
    title: "Portfolio: Le Pois Penché, Tropé, Henri | GSMH Montreal",
    description:
      "GSMH's own establishments (Le Pois Penché, Tropé Juice & Snackbar) and its mandates: Restaurant Henri at Hôtel Birks, Gustave, Hôtel Chez Swann.",
    ogImage: "/images/og/portfolio.jpg",
  },
  founder: {
    title: "Imad Nabwani, Founder and President | GSMH",
    description:
      "A Montreal restaurateur since the 1990s, former vice-president of Groupe Queue de Cheval, and founder of GSMH in 2011. His story.",
    ogImage: "/images/og/founder.jpg",
  },
  development: {
    title: "Concepts in development and partnerships | GSMH",
    description:
      "A new breed of steakhouse, a casual French brasserie and a Syrian rotisserie: GSMH's concepts in development and the partners we look for.",
    ogImage: "/images/og/development.jpg",
  },
  blog: {
    title: "Blog | GSMH, Golden Square Mile Hospitality",
    description:
      "Our culture and Montreal's hospitality and food scene: recipes, French brasseries, Le Pois Penché, Henri and Hôtel Chez Swann.",
    ogImage: "/images/og/blog.jpg",
  },
  contact: {
    title: "Contact Us | GSMH, 1230 De Maisonneuve West, Montreal",
    description:
      "Golden Square Mile Hospitality, 1230 De Maisonneuve Blvd. West, Montreal, Quebec H3G 1M2. Email Imad Nabwani about a partnership.",
    ogImage: "/images/og/contact.jpg",
  },
};

export const metadataByLang: Record<Lang, Record<PageKey, PageMeta>> = { fr, en };
