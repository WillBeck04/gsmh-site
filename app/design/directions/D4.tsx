import Image from "next/image";
import { concepts, copy, faq, img, nav, portfolio, principles } from "../data";
import PinnedGallery from "./PinnedGallery";

// 4 · Vitrine — split screen, pinned photo swaps per section
const C = { cream: "#F8F4EA", ink: "#15161A", soft: "#57534C", gold: "#8C7A3F", line: "#D9D0BC" };
const cz: React.CSSProperties = { fontFamily: "var(--font-cinzel), Georgia, serif", textTransform: "uppercase" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: C.gold };
const frames = [
  { src: img.street, label: "01 · Bienvenue", cap: "Le centre-ville de Montréal, notre territoire" },
  { src: img.kitchenTeam, label: "02 · Principes", cap: "Hospitalité légendaire" },
  { src: img.henri, label: "03 · Portfolio", cap: "Restaurant Henri, Hôtel Birks" },
  { src: img.imadBw, label: "04 · Fondateur", cap: "Imad Nabwani" },
  { src: img.steakSpread, label: "05 · En développement", cap: "Trois concepts à l'étude" },
  { src: img.gustaveBar, label: "06 · Nous joindre", cap: "1230, boul. De Maisonneuve Ouest" },
];
const Sec = ({ i, title, children }: { i: number; title: string; children: React.ReactNode }) => (
  <section data-index={String(i)} data-reveal style={{ display: "flex", flexDirection: "column", gap: 20, padding: "0 clamp(20px, 4vw, 56px) 120px" }}><span style={lab}>0{i + 1} · {title}</span>{children}</section>
);

export default function D4() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))" }}>
      <div className="d8-left" style={{ background: C.ink, overflow: "hidden" }}>
        <PinnedGallery frames={frames} />
        <Image src="/logo/gsmh.png" alt="GSMH" width={380} height={406} priority className="rise" style={{ position: "absolute", top: 32, left: 32, height: 64, width: "auto", zIndex: 2 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <nav className="rise" style={{ ...lab, color: C.ink, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "36px clamp(20px, 4vw, 56px) 0", flexWrap: "wrap", letterSpacing: "0.24em" }}><div style={{ display: "flex", gap: "6px 20px", flexWrap: "wrap" }}>{nav.slice(1).map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}</div><a href="#" className="ul" style={{ color: C.gold }}>EN</a></nav>

        <section data-index="0" style={{ display: "flex", flexDirection: "column", gap: 24, padding: "clamp(80px, 14vh, 180px) clamp(20px, 4vw, 56px) 130px" }}>
          <span className="rise-2" style={lab}>Golden Square Mile · Montréal · depuis 2011</span>
          <h1 className="rise-3" style={{ ...cz, margin: 0, fontSize: "clamp(30px, 3.4vw, 50px)", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1.1, textWrap: "balance" }}>Développeur de restaurants et de concepts d&apos;hospitalité</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 18, lineHeight: 1.65 }}>{copy.welcome1} {copy.welcome2}</p>
          <div className="rise-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, paddingTop: 8 }}><div><span style={{ ...lab, display: "block", marginBottom: 8 }}>Vision</span><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.soft }}>{copy.vision}</p></div><div><span style={{ ...lab, display: "block", marginBottom: 8 }}>Culture</span><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.soft }}>{copy.culture}</p></div></div>
        </section>

        <Sec i={1} title="Principes">
          <div data-stagger style={{ display: "flex", flexDirection: "column" }}>{principles.map((p, i) => <div key={p.title} style={{ padding: "18px 0", borderTop: i ? `1px solid ${C.line}` : "none", display: "flex", flexDirection: "column", gap: 6 }}><h3 style={{ ...cz, margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: "0.12em" }}>{p.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.soft }}>{p.text}</p></div>)}</div>
        </Sec>

        <Sec i={2} title="Portfolio">
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{copy.portfolioIntro}</p>
          <div data-stagger style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: 8 }}>{portfolio.map((p) => <div key={p.name} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 18, alignItems: "start" }}><div className="lift" style={{ position: "relative", aspectRatio: "1" }}><Image src={p.img} alt={p.name} fill sizes="120px" className="img" /></div><div style={{ display: "flex", flexDirection: "column", gap: 6 }}><h3 style={{ ...cz, margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3><span style={{ fontSize: 12, color: C.gold }}>{p.meta}</span><p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: C.soft }}>{p.text}</p></div></div>)}</div>
        </Sec>

        <Sec i={3} title="Fondateur">
          <h2 style={{ ...cz, margin: 0, fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 600, letterSpacing: "0.08em", lineHeight: 1.1 }}>Imad Nabwani</h2>
          <span style={{ ...lab, color: C.soft }}>{copy.founderTitle}</span>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>{copy.founder}</p>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: C.soft }}>{copy.founder2}</p>
        </Sec>

        <Sec i={4} title="En développement">
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{copy.devIntro}</p>
          <div data-stagger style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 8 }}>{concepts.map((c) => <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: 8, borderTop: `1px solid ${C.line}`, paddingTop: 18 }}><span style={{ ...lab, fontSize: 10 }}>{c.services}</span><h3 style={{ ...cz, margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: "0.1em" }}>{c.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.soft }}>{c.text}</p></div>)}</div>
        </Sec>

        <Sec i={5} title="Nous joindre">
          <address style={{ fontStyle: "normal", fontSize: 17, lineHeight: 1.7 }}><strong style={{ ...cz, display: "block", fontSize: 14, letterSpacing: "0.12em", marginBottom: 6 }}>{copy.name}</strong>{copy.address}<br /><a href={`tel:${copy.phone}`} style={{ color: C.ink, textDecoration: "none" }}>{copy.phone}</a><br /><a href={`mailto:${copy.email}`} style={{ color: C.gold, textDecoration: "none" }}>{copy.email}</a></address>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 8 }}>{faq.map((f, i) => <details key={f.q} open={i === 0} style={{ borderTop: `1px solid ${C.line}`, padding: "14px 0" }}><summary style={{ ...cz, cursor: "pointer", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", listStyle: "none" }}>{f.q}</summary><p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: C.soft }}>{f.a}</p></details>)}</div>
        </Sec>

        <footer style={{ ...lab, color: C.soft, fontSize: 10, marginTop: "auto", display: "flex", justifyContent: "space-between", gap: 12, padding: "24px clamp(20px, 4vw, 56px)", borderTop: `1px solid ${C.line}`, flexWrap: "wrap" }}><span>© GSMH · Montréal</span><span>Le Pois Penché · Tropé</span></footer>
      </div>
    </main>
  );
}
