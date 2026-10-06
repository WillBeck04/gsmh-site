// Contact details and links used across the site (header, footer, contact page, JSON-LD).
// Keep the name, address and phone identical everywhere: Google matches them across the web.

export const site = {
  url: "https://www.gsmh.ca",
  name: "Golden Square Mile Hospitalité",
  nameEn: "Golden Square Mile Hospitality",
  short: "GSMH",
  founded: "2011",
  founder: "Imad Nabwani",
  email: "imad.nabwani@gsmh.ca",
  phone: "514-865-1832",
  phoneHref: "tel:+15148651832",
  address: {
    street: "1230, boul. De Maisonneuve Ouest",
    streetEn: "1230 De Maisonneuve Blvd. West",
    city: "Montréal",
    region: "QC",
    postalCode: "H3G 1M2",
    country: "CA",
  },
  geo: { lat: 45.4985, lng: -73.5772 },
  logo: "/logo/gsmh.png",
  links: {
    poisPenche: "https://lepoispenche.com",
    trope: "https://tropevie.com",
    blog: "https://gsmhospitality.wordpress.com/",
    map: "https://www.google.com/maps/search/?api=1&query=1230+boul.+De+Maisonneuve+Ouest+Montr%C3%A9al+QC+H3G+1M2",
    mapEmbed: "https://www.google.com/maps?q=1230+boul.+De+Maisonneuve+Ouest,+Montr%C3%A9al,+QC+H3G+1M2&output=embed",
  },
} as const;
