// Makes the 1200×630 share images (Facebook, LinkedIn, iMessage previews) from page photos.
// Run with `npm run og` after changing a photo below.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const pages = {
  home: "public/images/group/downtown-street.jpg",
  principles: "public/images/principes/salle.jpg",
  portfolio: "public/images/portfolio/pois-penche.jpg",
  founder: "public/images/fondateur/imad-nabwani.jpg",
  development: "public/images/developpement/brasserie-1.jpg",
  blog: "public/images/group/kitchen-team.jpg",
  contact: "public/images/home/pois-penche-facade.jpg",
};

mkdirSync("public/images/og", { recursive: true });
for (const [name, src] of Object.entries(pages)) {
  await sharp(src).resize(1200, 630, { fit: "cover", position: "centre" }).jpeg({ quality: 82, mozjpeg: true }).toFile(`public/images/og/${name}.jpg`);
  console.log("og", name);
}
