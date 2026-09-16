// Resizes the client's originals into web-ready JPEGs in public/images. Run: npm run images
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.resolve(ROOT, "..", "assets", "photos", "2026 web photos GSMH");
const OUT = path.join(ROOT, "public", "images");
const MAP = {
  "01 Page principale : À propos/01 À propos - Le Pois Penché.jpeg": "home/pois-penche-facade.jpg",
  "01 Page principale : À propos/02 À propos - Cuisine.jpeg": "home/cuisine.jpg",
  "01 Page principale : À propos/03 À propos - Équipe.jpeg": "home/equipe.jpg",
  "02 Principes/01 Principes - Chef logo.jpeg": "principes/chef-logo.jpg",
  "02 Principes/02 Principes - Salle à manger.jpeg": "principes/salle.jpg",
  "03 Portfolio/01 Le Pois Penché.jpeg": "portfolio/pois-penche.jpg",
  "03 Portfolio/02 Tropé.jpg": "portfolio/trope.jpg",
  "03 Portfolio/03 Restaurant Henri.jpg": "portfolio/henri.jpg",
  "03 Portfolio/04 Restaurant Gustave.jpg": "portfolio/gustave.jpg",
  "03 Portfolio/05 Hôtel Chez Swann.jpg": "portfolio/chez-swann.jpg",
  "04 Fondateur/01 Fondateur - Imad Nabwani.jpg": "fondateur/imad-nabwani.jpg",
  "05 Dévéloppement/01 Dévélopement - Top photo.jpeg": "developpement/top.jpg",
  "05 Dévéloppement/02 Dévélopement - Steakhouse.jpg": "developpement/steakhouse-1.jpg",
  "05 Dévéloppement/03 Dévélopement - Steakhous.jpeg": "developpement/steakhouse-2.jpg",
  "05 Dévéloppement/04 Dévélopement - French brasserie.jpg": "developpement/brasserie-1.jpg",
  "05 Dévéloppement/05 Dévélopement - French brasserie.jpeg": "developpement/brasserie-2.jpg",
  "05 Dévéloppement/06 Dévélopement - rôtisserie Syrienne.jpg": "developpement/rotisserie-1.jpg",
  "05 Dévéloppement/07 Dévélopement - rôtisserie Syrienne.jpg": "developpement/rotisserie-2.jpg",
};
const exists = async (p) => { try { await stat(p); return true; } catch { return false; } };
for (const [src, out] of Object.entries(MAP)) {
  const cands = [path.join(SRC, src), path.join(SRC, src).normalize("NFD"), path.join(SRC, src).normalize("NFC")];
  const i = (await Promise.all(cands.map(exists))).findIndex(Boolean);
  if (i < 0) { console.warn("MISSING", src); continue; }
  const to = path.join(OUT, out); await mkdir(path.dirname(to), { recursive: true });
  const img = sharp(cands[i]).rotate(); const m = await img.metadata();
  await img.resize({ width: Math.min(2560, m.width ?? 2560), withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true, progressive: true }).toFile(to);
  console.log(out, (await stat(to)).size / 1024 | 0, "KB");
}
await mkdir(path.join(ROOT, "public", "logo"), { recursive: true });
const logo = path.join(SRC, "06 Logo", "Logo-golden-square-mile.jpg");
await sharp(logo).png().toFile(path.join(ROOT, "public", "logo", "gsmh.png"));
console.log("logo ok");
