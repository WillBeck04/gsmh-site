// Every visible sentence on the site, in French and English.
// Text comes from the client's 2026 documents (26-08-11 GSMH_Texte_2026 FR / EN).
// To change a sentence, edit it here in both languages: content.fr.* and content.en.*

import type { Lang, PageKey } from "./routes";

type Meta = [label: string, value: string][];
type Venue = { key: string; name: string; meta: Meta; text: string; link?: string; owned: boolean };
type Concept = { title: string; services: string; text: string; points: string[] };

const fr = {
  nav: {
    labels: { home: "Accueil", principles: "Principes", portfolio: "Portfolio", founder: "Fondateur", development: "En développement", blog: "Blogue", contact: "Nous joindre" } satisfies Record<PageKey, string>,
    switchLang: "English version",
    switchLangShort: "EN",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  common: {
    tagline: "Golden Square Mile · Montréal · depuis 2011",
    readMore: "En savoir plus",
    visitSite: "Visiter le site",
    email: "Écrire à GSMH",
    call: "Appeler",
    directions: "Itinéraire",
    ownedBadge: "Propriété de GSMH",
    mandatesLabel: "Mandats pour des tiers",
    ownedLabel: "Nos établissements",
    highlights: "Faits saillants du concept",
    rights: "Tous droits réservés.",
    venuesLabel: "Nos maisons",
    breadcrumbHome: "Accueil",
    notFoundTitle: "Page introuvable",
    notFoundText: "Cette page n'existe pas ou a été déplacée.",
  },
  home: {
    eyebrow: "Bienvenue",
    title: "Golden Square Mile Hospitalité",
    welcome1:
      "Golden Square Mile Hospitalité (GSMH) est un développeur montréalais de restaurants gastronomiques et de concepts de cuisine rapide santé, situés dans les quartiers les plus achalandés du centre-ville.",
    welcome2:
      "Fondée en 2011 par le restaurateur Imad Nabwani, GSMH possède et exploite la brasserie parisienne emblématique Le Pois Penché et Tropé Jus & Snackbar, dans le Mille carré doré de Montréal. Son portefeuille comprend également des mandats de développement de concept, de gestion et de conseil pour des tierces parties, à la fine pointe de l'hospitalité montréalaise.",
    visionTitle: "Vision",
    vision:
      "GSMH apporte de la vitalité au centre-ville de Montréal. Inspirés des brasseries françaises, nos concepts de restaurants sont d'importants pôles sociaux fondés sur des besoins concrets, une hospitalité chaleureuse, une cuisine exquise, un design accueillant et de solides pratiques de gestion.",
    cultureTitle: "Culture",
    culture:
      "Nous incarnons une culture d'« hospitalité légendaire ». Le succès de notre organisation repose sur des employés attentionnés qui créent du bonheur pour nos clients, un engagement communautaire généreux, des relations avec les fournisseurs fondées sur la confiance, et des rendements sains pour nos investisseurs.",
    principlesTitle: "Cinq principes qui guident chaque établissement",
    portfolioTitle: "Nos établissements et nos mandats",
    developmentTitle: "Trois concepts à l'étude",
    allPrinciples: "Nos principes",
    allPortfolio: "Voir le portfolio",
    founderMore: "Lire le parcours d'Imad",
    allDevelopment: "Les concepts en développement",
    faqTitle: "Foire aux questions",
  },
  principles: {
    title: "Principes",
    intro: "Cinq principes guident chacun de nos établissements, de la salle à manger jusqu'aux bureaux.",
    items: [
      { title: "Hospitalité légendaire", text: "Nos restaurants offrent le type d'hospitalité dont nos clients se souviennent avec tendresse des années plus tard et qu'ils partagent fréquemment avec leurs amis et leur famille. Les histoires qu'ils racontent sont nos « légendes »." },
      { title: "Concepts pertinents", text: "Nous créons des restaurants qui comptent pour leurs communautés, là où ils sont nécessaires et où ils peuvent devenir des pôles de quartier animés." },
      { title: "Gestion profitable", text: "Nos commerces reposent sur des bases de gestion solides. Chaque établissement est exploité avec l'expertise financière requise pour convertir hospitalité chaleureuse et concepts populaires en bénéfices durables." },
      { title: "Confiance", text: "Nous avons mérité la confiance de nos investisseurs, partenaires, employés et clients. Nos opérations sont transparentes, responsables et respectueuses de toutes les parties prenantes." },
      { title: "Engagement communautaire", text: "GSMH redonne. Nous nous engageons à améliorer notre communauté en nous impliquant dans des causes et des événements philanthropiques." },
    ],
  },
  portfolio: {
    title: "Portfolio",
    intro: "GSMH possède et exploite ses propres établissements, et agit également comme créateur de concept, gestionnaire ou conseiller pour des projets de tierces parties.",
    venues: [
      {
        key: "poisPenche", owned: true, name: "Le Pois Penché", link: "https://lepoispenche.com",
        meta: [["Type", "Brasserie parisienne"], ["Propriété de GSMH depuis", "2011"], ["Emplacement", "1230, boul. De Maisonneuve Ouest, Montréal"]],
        text: "Brasserie de style parisien emblématique du centre-ville de Montréal, acquise par Imad Nabwani en 2011 — l'année même de la fondation de GSMH. Réputée pour son hospitalité, ses versions raffinées des classiques de la cuisine française, ses plateaux de fruits de mer, ses steaks et sa carte des vins.",
      },
      {
        key: "trope", owned: true, name: "Tropé | Jus & Snackbar", link: "https://tropevie.com",
        meta: [["Type", "Bar à jus et smoothies"], ["Propriété de GSMH", ""], ["Emplacements", "1448, rue Drummond et 1464, rue Mackay, Montréal"]],
        text: "Bars à jus et smoothies d'inspiration méditerranéenne, offrant des boissons et des aliments faits à partir d'ingrédients 100 % naturels, faits maison, sans conservateurs et sans sucres transformés. Deux succursales dans le centre-ville de Montréal, plus une succursale en développement dans le Vieux-Port.",
      },
      {
        key: "henri", owned: false, name: "Restaurant Henri",
        meta: [["Mandat", "Création et ouverture d'un restaurant français haut de gamme"], ["Client", "Hôtel Birks (5 étoiles), Montréal"], ["Début du projet", "2017"], ["Conclusion du mandat", "Nov. 2019"]],
        text: "Henri s'est rapidement imposé comme l'un des grands restaurants de Montréal. Situé à l'intérieur du bâtiment historique Birks, à la fois moderne et soucieux de l'histoire, Henri sert certaines des meilleures interprétations de la cuisine de brasserie contemporaine de la ville.",
      },
      {
        key: "gustave", owned: false, name: "Restaurant Gustave",
        meta: [["Mandat", "Mise à jour du concept alimentaire et des systèmes de gestion"], ["Client", "Hôtel Le Saint-Martin, Montréal"], ["Début du projet", "Jan. 2019"], ["Conclusion du mandat", "Nov. 2019"]],
        text: "Mise à niveau du concept et des opérations de Gustave pour le transformer en un bistrot moderne aux influences méditerranéennes marquées. L'établissement avait besoin d'une revitalisation majeure à la suite de la dissolution de son partenariat fondateur en 2017.",
      },
      {
        key: "swann", owned: false, name: "Hôtel Chez Swann",
        meta: [["Mandat", "Création et exploitation d'un hôtel boutique"], ["Emplacement", "Mille carré doré, Montréal"], ["Début du projet", "2011"], ["Conclusion du mandat", "2023"]],
        text: "Création et gestion de l'hôtel boutique Chez Swann de 23 chambres, une destination du centre-ville pour les voyageurs à la recherche d'animation urbaine et d'un hébergement spacieux. L'établissement a poursuivi ses activités sous une exploitation distincte après la conclusion du mandat de GSMH en 2023.",
      },
    ] as Venue[],
  },
  founder: {
    title: "Fondateur",
    name: "Imad Nabwani",
    role: "Fondateur et président, GSMH",
    paragraphs: [
      "Imad Nabwani a fondé Golden Square Mile Hospitalité (GSMH) en 2011 et est un éminent restaurateur montréalais depuis les années 1990. En tant qu'ancien vice-président du Groupe Queue de Cheval, il a supervisé certains des restaurants les plus célèbres de la ville, notamment La Queue de Cheval, Trinity et 40Westt.",
      "Il est diplômé en études hôtelières de l'École hôtelière de Lausanne et de l'Institut de tourisme et d'hôtellerie du Québec (ITHQ), et membre de la Confrérie des Chevaliers du Tastevin et des Coteaux de Champagne. Son premier restaurant, Le Pois Penché, est devenu une institution montréalaise.",
      "Imad et GSMH sont engagés dans leur communauté et contribuent à de nombreuses causes, dont l'Hôpital Sainte-Justine, la Fondation Charles-Bruneau et bien d'autres. Il mène une vie active, entre entraînement, ski et golf.",
    ],
  },
  development: {
    title: "En développement",
    intro: "GSMH évalue les opportunités d'accueil et les partenariats avec des organisations partageant notre vision, à Montréal et à l'étranger. Les projets à l'étude incluent des brasseries contemporaines de style européen et des hôtels au design créatif dans des emplacements urbains de premier ordre.",
    intro2: "Nous accueillons des entreprises en adéquation avec nos valeurs, animées par un accueil généreux, un engagement sans faille envers la qualité des produits et la revitalisation des quartiers importants.",
    contactCta: "Discuter d'un partenariat",
    concepts: [
      {
        title: "Une nouvelle espèce de steakhouse", services: "Lunch | Souper | Bar | Événements privés",
        text: "Un grand steakhouse à l'avant-garde de la renaissance du quartier Mille carré doré. Moderne, lumineux et vivant, ce futur temple de la viande fusionnera le meilleur de la culture steak française et américaine aux accents cosmopolites de Montréal.",
        points: ["Hospitalité légendaire", "Le meilleur bœuf canadien, américain et international", "Bar à fruits de mer premium", "Accompagnements innovants", "Convergence franco-américo-montréalaise", "Renaissance du Mille carré doré", "Ambiance vivante", "Service méticuleux et chaleureux, sans prétention", "Destination gastronomique internationale"],
      },
      {
        title: "Brasserie française décontractée", services: "Petit déjeuner | Lunch | Apéro | Souper | Fin de soirée | Brunch",
        text: "Concept de restauration inspiré de l'hospitalité, des succès culinaires et de l'ambiance des brasseries parisiennes emblématiques. Conçu pour plusieurs unités situées dans des emplacements urbains et suburbains de premier ordre, ainsi que pour des hôtels.",
        points: ["Hospitalité légendaire", "Versions modernes de la cuisine réconfortante française", "Des plats de brasserie qui évoluent avec le temps", "Bar cru & fruits de mer", "Desserts français", "D'excellents vins pour tous les budgets", "Déco d'inspiration parisienne", "Service méticuleux et chaleureux, sans prétention", "Duplication simple"],
      },
      {
        title: "Rôtisserie syrienne", services: "À emporter | Livraison | Salle à manger | Traiteur",
        text: "Rôtisserie de poulet moderne et rapide, inspirée des saveurs de la cuisine de rue de Damas.",
        points: ["Hospitalité légendaire", "Poulet rôti à la syrienne, élevé à la ferme locale", "Variété de sauces et d'accompagnements du Moyen-Orient", "Desserts locaux", "Service ultra-efficace, en magasin et en ligne", "Décor moderne avec des matériaux organiques", "Duplication simple"],
      },
    ] as Concept[],
  },
  blog: {
    title: "Blogue",
    intro: "Découvrez-en davantage sur notre culture et la scène hôtelière et gastronomique.",
    readAll: "Lire le blogue",
    readPost: "Lire l'article",
    note: "Les articles sont publiés sur notre blogue WordPress et s'ouvrent dans un nouvel onglet.",
  },
  contact: {
    title: "Nous joindre",
    orgLine: "GSMH — Golden Square Mile Hospitalité",
    addressLines: ["1230, boul. De Maisonneuve Ouest", "Montréal (Québec) H3G 1M2"],
    mapTitle: "Carte : 1230, boul. De Maisonneuve Ouest, Montréal",
  },
  faq: {
    title: "Foire aux questions",
    items: [
      { q: "Qui a fondé GSMH ?", a: "GSMH a été fondée en 2011 par le restaurateur montréalais Imad Nabwani." },
      { q: "Quels établissements appartiennent à GSMH ?", a: "GSMH possède et exploite Le Pois Penché, une brasserie parisienne, et Tropé Jus & Snackbar, un bar à jus et smoothies, tous deux situés dans le Mille carré doré de Montréal." },
      { q: "GSMH crée-t-elle des concepts pour des tiers ?", a: "Oui. En plus de ses propres établissements, GSMH offre des mandats de développement de concept, de gestion et de conseil en hospitalité pour des hôtels et des promoteurs immobiliers, dont Restaurant Henri à l'Hôtel Birks et Restaurant Gustave à l'Hôtel Le Saint-Martin." },
      { q: "Où se trouve GSMH ?", a: "GSMH est basée dans le Mille carré doré, au centre-ville de Montréal." },
    ],
  },
};

const en: typeof fr = {
  nav: {
    labels: { home: "Home", principles: "Principles", portfolio: "Portfolio", founder: "Founder", development: "In Development", blog: "Blog", contact: "Contact Us" },
    switchLang: "Version française",
    switchLangShort: "FR",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  common: {
    tagline: "Golden Square Mile · Montreal · since 2011",
    readMore: "Learn more",
    visitSite: "Visit the website",
    email: "Email GSMH",
    call: "Call",
    directions: "Directions",
    ownedBadge: "GSMH-owned",
    mandatesLabel: "Third-party mandates",
    ownedLabel: "Our establishments",
    highlights: "Concept highlights",
    rights: "All rights reserved.",
    venuesLabel: "Our houses",
    breadcrumbHome: "Home",
    notFoundTitle: "Page not found",
    notFoundText: "This page does not exist or has moved.",
  },
  home: {
    eyebrow: "Welcome",
    title: "Golden Square Mile Hospitality",
    welcome1:
      "Golden Square Mile Hospitality (GSMH) is a Montreal-based developer of fine-dining restaurants and healthy fast-casual concepts, located in the city's busiest downtown neighbourhoods.",
    welcome2:
      "Founded in 2011 by restaurateur Imad Nabwani, GSMH owns and operates the landmark Parisian brasserie Le Pois Penché and Tropé Juice & Snackbar, in Montreal's Golden Square Mile. Its portfolio also includes concept development, management, and consulting mandates for third parties, at the forefront of Montreal hospitality.",
    visionTitle: "Vision",
    vision:
      "GSMH brings vitality to downtown Montreal. Inspired by French brasseries, our restaurant concepts are important social hubs built on real community needs, warm hospitality, exquisite cuisine, inviting design, and solid management practices.",
    cultureTitle: "Culture",
    culture:
      "We embody a culture of “legendary hospitality.” Our organization's success rests on caring employees who create happiness for our guests, generous community engagement, supplier relationships built on trust, and healthy returns for our investors.",
    principlesTitle: "Five principles that guide every establishment",
    portfolioTitle: "Our establishments and mandates",
    developmentTitle: "Three concepts in development",
    allPrinciples: "Our principles",
    allPortfolio: "See the portfolio",
    founderMore: "Read Imad's story",
    allDevelopment: "Concepts in development",
    faqTitle: "Frequently asked questions",
  },
  principles: {
    title: "Principles",
    intro: "Five principles guide each of our establishments, from the dining room to the back office.",
    items: [
      { title: "Legendary hospitality", text: "Our restaurants offer the kind of hospitality our guests remember fondly for years afterward, and share often with friends and family. The stories they tell are our “legends.”" },
      { title: "Relevant concepts", text: "We create restaurants that matter to their communities, where they are needed and where they can become lively neighbourhood hubs." },
      { title: "Profitable management", text: "Our businesses rest on solid management foundations. Each establishment is run with the financial expertise required to convert warm hospitality and popular concepts into lasting profits." },
      { title: "Trust", text: "We have earned the trust of our investors, partners, employees, and guests. Our operations are transparent, accountable, and respectful of every stakeholder." },
      { title: "Community engagement", text: "GSMH gives back. We are committed to improving our community by getting involved in philanthropic causes and events." },
    ],
  },
  portfolio: {
    title: "Portfolio",
    intro: "GSMH owns and operates its own establishments, and also acts as concept creator, manager, or advisor for third-party projects.",
    venues: [
      {
        key: "poisPenche", owned: true, name: "Le Pois Penché", link: "https://lepoispenche.com",
        meta: [["Type", "Parisian brasserie"], ["GSMH-owned since", "2011"], ["Location", "1230 De Maisonneuve Blvd. West, Montreal"]],
        text: "An iconic Parisian-style brasserie in downtown Montreal, acquired by Imad Nabwani in 2011 — the same year GSMH was founded. Known for its hospitality, refined takes on French culinary classics, seafood platters, steaks, and wine list.",
      },
      {
        key: "trope", owned: true, name: "Tropé | Juice & Snackbar", link: "https://tropevie.com",
        meta: [["Type", "Juice and smoothie bar"], ["GSMH-owned", ""], ["Locations", "1448 Drummond Street and 1464 Mackay Street, Montreal"]],
        text: "Mediterranean-inspired juice and smoothie bars, serving drinks and food made with 100% natural, house-made ingredients — no preservatives, no processed sugar. Two locations in downtown Montreal, plus a third location in development in Old Montreal's Vieux-Port.",
      },
      {
        key: "henri", owned: false, name: "Restaurant Henri",
        meta: [["Mandate", "Creation and opening of an upscale French restaurant"], ["Client", "Hôtel Birks (5-star), Montreal"], ["Project start", "2017"], ["Mandate concluded", "Nov. 2019"]],
        text: "Henri quickly established itself as one of Montreal's great restaurants. Located inside the historic Birks building, at once modern and mindful of its history, Henri serves some of the city's finest interpretations of contemporary brasserie cuisine.",
      },
      {
        key: "gustave", owned: false, name: "Restaurant Gustave",
        meta: [["Mandate", "Updating the food concept and management systems"], ["Client", "Hôtel Le Saint-Martin, Montreal"], ["Project start", "Jan. 2019"], ["Mandate concluded", "Nov. 2019"]],
        text: "An upgrade of Gustave's concept and operations, transforming it into a modern bistro with pronounced Mediterranean influences. The establishment needed a major revitalization following the dissolution of its founding partnership in 2017.",
      },
      {
        key: "swann", owned: false, name: "Hôtel Chez Swann",
        meta: [["Mandate", "Creation and operation of a boutique hotel"], ["Location", "Golden Square Mile, Montreal"], ["Project start", "2011"], ["Mandate concluded", "2023"]],
        text: "Creation and management of the 23-room Chez Swann boutique hotel, a downtown destination for travellers seeking urban energy and spacious accommodations. The property has continued operating under separate management since GSMH's mandate concluded in 2023.",
      },
    ],
  },
  founder: {
    title: "Founder",
    name: "Imad Nabwani",
    role: "Founder and President, GSMH",
    paragraphs: [
      "Imad Nabwani founded Golden Square Mile Hospitality (GSMH) in 2011 and has been a prominent Montreal restaurateur since the 1990s. As former vice-president of Groupe Queue de Cheval, he oversaw some of the city's most celebrated restaurants, including La Queue de Cheval, Trinity, and 40Westt.",
      "He holds hospitality management credentials from École hôtelière de Lausanne and the Institut de tourisme et d'hôtellerie du Québec (ITHQ), and is a member of the Confrérie des Chevaliers du Tastevin et des Coteaux de Champagne. His first restaurant, Le Pois Penché, has become a Montreal institution.",
      "Imad and GSMH are committed to their community and support numerous causes, including Sainte-Justine Hospital, the Charles-Bruneau Foundation, and many others. He leads an active life, between training, skiing, and golf.",
    ],
  },
  development: {
    title: "In Development",
    intro: "GSMH evaluates hospitality opportunities and partnerships with organizations that share our vision, in Montreal and abroad. Projects under consideration include contemporary European-style brasseries and creatively designed hotels in prime urban locations.",
    intro2: "We welcome partners aligned with our values — driven by generous hospitality, an unwavering commitment to product quality, and the revitalization of important neighbourhoods.",
    contactCta: "Discuss a partnership",
    concepts: [
      {
        title: "A new breed of steakhouse", services: "Lunch | Dinner | Bar | Private Events",
        text: "A grand steakhouse at the forefront of the Golden Square Mile's renaissance. Modern, bright, and lively, this future temple of meat will fuse the best of French and American steak culture with the cosmopolitan accents of Montreal.",
        points: ["Legendary hospitality", "The best Canadian, American, and international beef", "Premium seafood bar", "Innovative sides", "A French-American-Montreal convergence", "Golden Square Mile renaissance", "Lively atmosphere", "Meticulous, warm, unpretentious service", "An international dining destination"],
      },
      {
        title: "Casual French brasserie", services: "Breakfast | Lunch | Apéro | Dinner | Late Night | Brunch",
        text: "A dining concept inspired by the hospitality, culinary success, and atmosphere of iconic Parisian brasseries. Designed for multi-unit rollout in prime urban and suburban locations, as well as in hotels.",
        points: ["Legendary hospitality", "Modern takes on French comfort food", "Brasserie dishes that evolve over time", "Raw bar & seafood", "French desserts", "Excellent wines for every budget", "Paris-inspired décor", "Meticulous, warm, unpretentious service", "Easy to replicate"],
      },
      {
        title: "Syrian rotisserie", services: "Takeout | Delivery | Dine-In | Catering",
        text: "A modern, fast-casual chicken rotisserie inspired by the flavours of Damascus street food.",
        points: ["Legendary hospitality", "Syrian-style rotisserie chicken, locally farm-raised", "A variety of Middle Eastern sauces and sides", "Local desserts", "Ultra-efficient service, in-store and online", "Modern décor with organic materials", "Easy to replicate"],
      },
    ],
  },
  blog: {
    title: "Blog",
    intro: "Discover more about our culture and the hospitality and food scene.",
    readAll: "Read our blog",
    readPost: "Read the post",
    note: "Posts are published on our WordPress blog and open in a new tab.",
  },
  contact: {
    title: "Contact Us",
    orgLine: "GSMH — Golden Square Mile Hospitality",
    addressLines: ["1230 De Maisonneuve Blvd. West", "Montreal, Quebec H3G 1M2"],
    mapTitle: "Map: 1230 De Maisonneuve Blvd. West, Montreal",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { q: "Who founded GSMH?", a: "GSMH was founded in 2011 by Montreal restaurateur Imad Nabwani." },
      { q: "What establishments does GSMH own?", a: "GSMH owns and operates Le Pois Penché, a Parisian brasserie, and Tropé Juice & Snackbar, a juice and smoothie bar, both located in Montreal's Golden Square Mile." },
      { q: "Does GSMH create concepts for third parties?", a: "Yes. In addition to its own establishments, GSMH provides concept development, management, and hospitality consulting mandates for hotels and real estate developers, including Restaurant Henri at Hôtel Birks and Restaurant Gustave at Hôtel Le Saint-Martin." },
      { q: "Where is GSMH located?", a: "GSMH is based in the Golden Square Mile, in downtown Montreal." },
    ],
  },
};

export const content: Record<Lang, typeof fr> = { fr, en };
