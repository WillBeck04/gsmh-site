import Image from "next/image";
import Link from "next/link";
import { designs, img } from "./data";

const heroes: Record<number, string> = { 1: img.facade, 2: img.salle, 3: img.equipe, 4: img.imad };

export default function DesignIndex() {
  return (
    <main style={{ background: "#F8F4EA", color: "#15161A", minHeight: "100vh", padding: "64px 24px 96px", fontFamily: "var(--font-figtree)" }}>
      <div className="wrap" style={{ maxWidth: 1200 }}>
        <p className="h" style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: "#8C7A3F", margin: 0 }}>GSMH · Site web 2026</p>
        <h1 style={{ fontFamily: "var(--font-cinzel)", textTransform: "uppercase", fontSize: "clamp(26px, 3.6vw, 40px)", fontWeight: 600, letterSpacing: "0.06em", margin: "12px 0 8px", lineHeight: 1.1 }}>Quatre directions pour gsmh.ca</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#57534C", maxWidth: 720, margin: "0 40px 40px 0" }}>Chaque direction est une vraie page avec les textes 2026 et les photos fournies. Le sélecteur en bas à droite permet de passer de l&apos;une à l&apos;autre.</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {designs.map((d) => (
            <li key={d.n}><Link href={`/${d.slug}`} style={{ display: "block", color: "inherit", textDecoration: "none", border: "1px solid #D9D0BC", background: "#fff", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "16/10" }}><Image src={heroes[d.n]} alt="" fill sizes="(min-width: 900px) 33vw, 100vw" className="img" style={{ filter: d.theme === "dark" ? "brightness(0.7)" : "none" }} /><span className="h" style={{ position: "absolute", left: 14, top: 14, background: "#15161A", color: "#F8F4EA", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", padding: "6px 10px" }}>{d.n}</span></div>
              <div style={{ padding: "16px 18px 20px" }}><h2 style={{ fontFamily: "var(--font-cinzel)", textTransform: "uppercase", margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: "0.1em" }}>{d.name}</h2><p style={{ margin: "6px 0 0", fontSize: 14, lineHeight: 1.5, color: "#57534C" }}>{d.tagline}</p><span className="h" style={{ display: "inline-block", marginTop: 12, fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", color: "#8C7A3F", borderBottom: "2px solid #8C7A3F", paddingBottom: 2 }}>Ouvrir /{d.slug}</span></div>
            </Link></li>
          ))}
        </ul>
      </div>
    </main>
  );
}
