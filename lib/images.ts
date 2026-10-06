// Every photo on the site, with its alt text in both languages.
// To change a photo: put the new file in public/images/... and update the path here.

export type Photo = { src: string; alt: { fr: string; en: string } };

const p = (src: string, fr: string, en: string): Photo => ({ src, alt: { fr, en } });

export const photos = {
  street: p("/images/group/downtown-street.jpg", "Le Pois Penché à l'angle de De Maisonneuve et Drummond, centre-ville de Montréal", "Le Pois Penché at De Maisonneuve and Drummond, downtown Montreal"),
  facade: p("/images/home/pois-penche-facade.jpg", "La façade et la terrasse du Pois Penché", "Le Pois Penché façade and terrace"),
  cuisine: p("/images/home/cuisine.jpg", "Le passe de la cuisine du Pois Penché", "The kitchen pass at Le Pois Penché"),
  equipe: p("/images/home/equipe.jpg", "Imad Nabwani avec l'équipe de cuisine", "Imad Nabwani with the kitchen team"),
  kitchenTeam: p("/images/group/kitchen-team.jpg", "Imad Nabwani avec l'équipe de cuisine du Pois Penché", "Imad Nabwani with Le Pois Penché's kitchen team"),
  chefLogo: p("/images/principes/chef-logo.jpg", "Veste de chef brodée du logo du Pois Penché", "Chef's jacket embroidered with the Le Pois Penché logo"),
  salle: p("/images/principes/salle.jpg", "Une salle comble au Pois Penché", "A full dining room at Le Pois Penché"),
  poisPenche: p("/images/portfolio/pois-penche.jpg", "La salle à manger du Pois Penché en soirée", "Le Pois Penché dining room in the evening"),
  trope: p("/images/portfolio/trope.jpg", "Bol açaï et smoothie de Tropé", "Açaí bowl and smoothie at Tropé"),
  tropeStore: p("/images/group/trope-store.jpg", "Le comptoir de Tropé Jus & Snackbar", "The counter at Tropé Juice & Snackbar"),
  henri: p("/images/group/henri-salle.jpg", "La salle du Restaurant Henri à l'Hôtel Birks", "Restaurant Henri dining room at Hôtel Birks"),
  gustave: p("/images/group/gustave-bar.jpg", "Le bar du Restaurant Gustave à l'Hôtel Le Saint-Martin", "The bar at Restaurant Gustave, Hôtel Le Saint-Martin"),
  swann: p("/images/portfolio/chez-swann.jpg", "Le hall de l'Hôtel Chez Swann", "The lobby of Hôtel Chez Swann"),
  imad: p("/images/fondateur/imad-nabwani.jpg", "Imad Nabwani dans la salle du Pois Penché", "Imad Nabwani in Le Pois Penché's dining room"),
  imadBw: p("/images/group/imad-portrait-bw.jpg", "Portrait d'Imad Nabwani, fondateur et président de GSMH", "Portrait of Imad Nabwani, founder and president of GSMH"),
  imadGuests: p("/images/developpement/top.jpg", "Imad Nabwani avec des clients", "Imad Nabwani with guests"),
  steak1: p("/images/developpement/steakhouse-1.jpg", "Pièces de bœuf et accompagnements, concept de steakhouse", "Steaks and sides, steakhouse concept"),
  steak2: p("/images/developpement/steakhouse-2.jpg", "Bœuf grillé tranché en poêlon", "Sliced grilled beef in a skillet"),
  brasserie1: p("/images/developpement/brasserie-1.jpg", "Salle de brasserie française avec bar et banquettes", "French brasserie dining room with bar and banquettes"),
  brasserie2: p("/images/developpement/brasserie-2.jpg", "Soupe à l'oignon gratinée et plats de brasserie", "French onion soup and brasserie dishes"),
  brasserieRoom: p("/images/group/brasserie-room.jpg", "Grande salle de brasserie lumineuse", "A bright, grand brasserie room"),
  roti1: p("/images/developpement/rotisserie-1.jpg", "Poulet rôti à la syrienne", "Syrian-style roast chicken"),
  roti2: p("/images/developpement/rotisserie-2.jpg", "Poulets à la broche sur la flamme", "Chickens turning on the spit"),
} as const;

/** Photo for each portfolio entry (keys match content.*.portfolio.venues[].key). */
export const venuePhotos: Record<string, Photo> = {
  poisPenche: photos.poisPenche,
  trope: photos.trope,
  henri: photos.henri,
  gustave: photos.gustave,
  swann: photos.swann,
};

/** Two photos per concept in development, in the same order as content.*.development.concepts. */
export const conceptPhotos: [Photo, Photo][] = [
  [photos.steak1, photos.steak2],
  [photos.brasserie1, photos.brasserie2],
  [photos.roti1, photos.roti2],
];
