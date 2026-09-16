// Shared content for the GSMH design directions, taken from the client's 2026 text (FR).

export const img = {
  facade: "/images/home/pois-penche-facade.jpg",
  cuisine: "/images/home/cuisine.jpg",
  equipe: "/images/home/equipe.jpg",
  chefLogo: "/images/principes/chef-logo.jpg",
  salle: "/images/principes/salle.jpg",
  poisPenche: "/images/portfolio/pois-penche.jpg",
  trope: "/images/portfolio/trope.jpg",
  henri: "/images/portfolio/henri.jpg",
  gustave: "/images/portfolio/gustave.jpg",
  swann: "/images/portfolio/chez-swann.jpg",
  imad: "/images/fondateur/imad-nabwani.jpg",
  devTop: "/images/developpement/top.jpg",
  steak1: "/images/developpement/steakhouse-1.jpg",
  steak2: "/images/developpement/steakhouse-2.jpg",
  brasserie1: "/images/developpement/brasserie-1.jpg",
  brasserie2: "/images/developpement/brasserie-2.jpg",
  roti1: "/images/developpement/rotisserie-1.jpg",
  roti2: "/images/developpement/rotisserie-2.jpg",
} as const;

export const nav = ["Accueil", "Principes", "Portfolio", "Fondateur", "En développement", "Nous joindre"];

export const copy = {
  name: "Golden Square Mile Hospitalité",
  short: "GSMH",
  address: "1230, boul. De Maisonneuve Ouest, Montréal (Québec) H3G 1M2",
  phone: "514-667-5050",
  email: "imad.nabwani@gsmh.ca",
  welcome1: "Golden Square Mile Hospitalité (GSMH) est un développeur montréalais de restaurants gastronomiques et de concepts de cuisine rapide santé, situés dans les quartiers les plus achalandés du centre-ville.",
  welcome2: "Fondée en 2011 par le restaurateur Imad Nabwani, GSMH possède et exploite la brasserie parisienne emblématique Le Pois Penché et Tropé Jus & Snackbar, dans le Mille carré doré de Montréal. Son portefeuille comprend également des mandats de développement de concept, de gestion et de conseil pour des tierces parties, à la fine pointe de l'hospitalité montréalaise.",
  vision: "GSMH apporte de la vitalité au centre-ville de Montréal. Inspirés des brasseries françaises, nos concepts de restaurants sont d'importants pôles sociaux fondés sur des besoins concrets, une hospitalité chaleureuse, une cuisine exquise, un design accueillant et de solides pratiques de gestion.",
  culture: "Nous incarnons une culture d'« hospitalité légendaire ». Le succès de notre organisation repose sur des employés attentionnés qui créent du bonheur pour nos clients, un engagement communautaire généreux, des relations avec les fournisseurs fondées sur la confiance, et des rendements sains pour nos investisseurs.",
  portfolioIntro: "GSMH possède et exploite ses propres établissements, et agit également comme créateur de concept, gestionnaire ou conseiller pour des projets de tierces parties.",
  founderTitle: "Fondateur et président, GSMH",
  founder: "Imad Nabwani a fondé Golden Square Mile Hospitalité (GSMH) en 2011 et est un éminent restaurateur montréalais depuis les années 1990. En tant qu'ancien vice-président du Groupe Queue de Cheval, il a supervisé certains des restaurants les plus célèbres de la ville, notamment La Queue de Cheval, Trinity et 40Westt. Il est diplômé en études hôtelières de l'École hôtelière de Lausanne et de l'Institut de tourisme et d'hôtellerie du Québec (ITHQ), et membre de la Confrérie des Chevaliers du Tastevin et des Coteaux de Champagne. Son premier restaurant, Le Pois Penché, est devenu une institution montréalaise.",
  founder2: "Imad et GSMH sont engagés dans leur communauté et contribuent à de nombreuses causes, dont l'Hôpital Sainte-Justine, la Fondation Charles-Bruneau et bien d'autres.",
  devIntro: "GSMH évalue les opportunités d'accueil et les partenariats avec des organisations partageant notre vision, à Montréal et à l'étranger. Les projets à l'étude incluent des brasseries contemporaines de style européen et des hôtels au design créatif dans des emplacements urbains de premier ordre.",
  devIntro2: "Nous accueillons des entreprises en adéquation avec nos valeurs, animées par un accueil généreux, un engagement sans faille envers la qualité des produits et la revitalisation des quartiers importants.",
};

export const principles = [
  { title: "Hospitalité légendaire", text: "Nos restaurants offrent le type d'hospitalité dont nos clients se souviennent avec tendresse des années plus tard et qu'ils partagent fréquemment avec leurs amis et leur famille. Les histoires qu'ils racontent sont nos « légendes »." },
  { title: "Concepts pertinents", text: "Nous créons des restaurants qui comptent pour leurs communautés, là où ils sont nécessaires et où ils peuvent devenir des pôles de quartier animés." },
  { title: "Gestion profitable", text: "Nos commerces reposent sur des bases de gestion solides. Chaque établissement est exploité avec l'expertise financière requise pour convertir hospitalité chaleureuse et concepts populaires en bénéfices durables." },
  { title: "Confiance", text: "Nous avons mérité la confiance de nos investisseurs, partenaires, employés et clients. Nos opérations sont transparentes, responsables et respectueuses de toutes les parties prenantes." },
  { title: "Engagement communautaire", text: "GSMH redonne. Nous nous engageons à améliorer notre communauté en nous impliquant dans des causes et des événements philanthropiques." },
];

export const portfolio = [
  { name: "Le Pois Penché", meta: "Brasserie parisienne · Propriété de GSMH depuis 2011 · 1230, boul. De Maisonneuve Ouest", text: "Brasserie de style parisien emblématique du centre-ville de Montréal, acquise par Imad Nabwani en 2011, l'année même de la fondation de GSMH. Réputée pour son hospitalité, ses versions raffinées des classiques de la cuisine française, ses plateaux de fruits de mer, ses steaks et sa carte des vins.", img: img.poisPenche, link: "https://lepoispenche.com", owned: true },
  { name: "Tropé | Jus & Snackbar", meta: "Bar à jus et smoothies · Propriété de GSMH · Drummond et Mackay, Montréal", text: "Bars à jus et smoothies d'inspiration méditerranéenne, offrant des boissons et des aliments faits à partir d'ingrédients 100 % naturels, faits maison, sans conservateurs et sans sucres transformés. Deux succursales au centre-ville, plus une en développement dans le Vieux-Port.", img: img.trope, link: "https://tropevie.com", owned: true },
  { name: "Restaurant Henri", meta: "Création et ouverture · Hôtel Birks (5 étoiles) · 2017 – nov. 2019", text: "Henri s'est rapidement imposé comme l'un des grands restaurants de Montréal. Situé à l'intérieur du bâtiment historique Birks, à la fois moderne et soucieux de l'histoire, Henri sert certaines des meilleures interprétations de la cuisine de brasserie contemporaine de la ville.", img: img.henri, owned: false },
  { name: "Restaurant Gustave", meta: "Mise à jour du concept et de la gestion · Hôtel Le Saint-Martin · jan. – nov. 2019", text: "Mise à niveau du concept et des opérations de Gustave pour le transformer en un bistrot moderne aux influences méditerranéennes marquées, à la suite de la dissolution de son partenariat fondateur en 2017.", img: img.gustave, owned: false },
  { name: "Hôtel Chez Swann", meta: "Création et exploitation d'un hôtel boutique · Mille carré doré · 2011 – 2023", text: "Création et gestion de l'hôtel boutique Chez Swann de 23 chambres, une destination du centre-ville pour les voyageurs à la recherche d'animation urbaine et d'un hébergement spacieux.", img: img.swann, owned: false },
];

export const concepts = [
  { title: "Une nouvelle espèce de steakhouse", services: "Lunch · Souper · Bar · Événements privés", text: "Un grand steakhouse à l'avant-garde de la renaissance du quartier Mille carré doré. Moderne, lumineux et vivant, ce futur temple de la viande fusionnera le meilleur de la culture steak française et américaine aux accents cosmopolites de Montréal.", points: ["Le meilleur bœuf canadien, américain et international", "Bar à fruits de mer premium", "Accompagnements innovants", "Convergence franco-américo-montréalaise", "Destination gastronomique internationale"], img: img.steak1, img2: img.steak2 },
  { title: "Brasserie française décontractée", services: "Petit déjeuner · Lunch · Apéro · Souper · Fin de soirée · Brunch", text: "Concept de restauration inspiré de l'hospitalité, des succès culinaires et de l'ambiance des brasseries parisiennes emblématiques. Conçu pour plusieurs unités situées dans des emplacements urbains et suburbains de premier ordre, ainsi que pour des hôtels.", points: ["Versions modernes de la cuisine réconfortante française", "Bar cru & fruits de mer", "Desserts français", "D'excellents vins pour tous les budgets", "Duplication simple"], img: img.brasserie1, img2: img.brasserie2 },
  { title: "Rôtisserie syrienne", services: "À emporter · Livraison · Salle à manger · Traiteur", text: "Rôtisserie de poulet moderne et rapide, inspirée des saveurs de la cuisine de rue de Damas.", points: ["Poulet rôti à la syrienne, élevé à la ferme locale", "Variété de sauces et d'accompagnements du Moyen-Orient", "Desserts locaux", "Service ultra-efficace, en magasin et en ligne", "Décor moderne avec des matériaux organiques"], img: img.roti1, img2: img.roti2 },
];

export const faq = [
  { q: "Qui a fondé GSMH ?", a: "GSMH a été fondée en 2011 par le restaurateur montréalais Imad Nabwani." },
  { q: "Quels établissements appartiennent à GSMH ?", a: "GSMH possède et exploite Le Pois Penché, une brasserie parisienne, et Tropé Jus & Snackbar, un bar à jus et smoothies, tous deux situés dans le Mille carré doré de Montréal." },
  { q: "GSMH crée-t-elle des concepts pour des tiers ?", a: "Oui. En plus de ses propres établissements, GSMH offre des mandats de développement de concept, de gestion et de conseil en hospitalité pour des hôtels et des promoteurs immobiliers, dont Restaurant Henri à l'Hôtel Birks et Restaurant Gustave à l'Hôtel Le Saint-Martin." },
  { q: "Où se trouve GSMH ?", a: "GSMH est basée dans le Mille carré doré, au centre-ville de Montréal." },
];

export const designs = [
  { n: 1, slug: "test1", name: "Maison", tagline: "Corporate, calm, cream. Cinzel titles per the client's font guide, gold rule, big portfolio cards.", theme: "light" },
  { n: 2, slug: "test2", name: "Noir et or", tagline: "The logo's own palette. Near-black, gold accents, full-bleed photography.", theme: "dark" },
  { n: 3, slug: "test3", name: "Dossier", tagline: "Editorial. A numbered table of contents, portfolio as case-study rows, founder as a profile.", theme: "light" },
  { n: 4, slug: "test4", name: "Vitrine", tagline: "Split screen. A pinned photo on the left that swaps as each section scrolls past.", theme: "light" },
] as const;
