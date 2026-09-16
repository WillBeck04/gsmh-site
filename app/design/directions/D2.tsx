import Image from "next/image";
import { concepts, copy, faq, img, nav, portfolio, principles } from "../data";

// 2 · Noir et or — the logo's own palette: near-black ground, gold accents, full-bleed photography
const C = { bg: "#111318", panel: "#181B21", cream: "#F1ECE0", muted: "#B9B2A4", dim: "#7E786D", gold: "#C4A85A", line: "rgba(196,168,90,0.3)" };
const cz: React.CSSProperties = { fontFamily: "var(--font-cinzel), Georgia, serif", textTransform: "uppercase" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.32em", color: C.gold };
const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ ...cz, margin: 0, fontSize: "clamp(26px, 2.8vw, 40px)", fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.15, color: C.cream }}>{children}</h2>;

export default function D2() {
  return (
    <main style={{ background: C.bg, color: C.cream, fontFamily: "var(--font-figtree)" }}>
      <section style={{ position: "relative", height: "100svh", minHeight: 640, overflow: "hidden" }}>
        <div className="plx" data-speed="0.2" style={{ position: "absolute", inset: "-15% 0" }}><Image src={img.salle} alt="" fill priority sizes="100vw" className="img kb" /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,19,24,0.7) 0%, rgba(17,19,24,0.1) 35%, rgba(17,19,24,0.3) 60%, rgba(17,19,24,0.98) 100%)" }} />
        <header className="rise" style={{ position: "absolute", top: 0, left: 0, right: 0, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "28px clamp(20px, 5vw, 72px) 0", zIndex: 2 }}>
          <Image src="/logo/gsmh.png" alt="Golden Square Mile Hospitalité" width={380} height={406} priority style={{ height: 68, width: "auto" }} />
          <nav className="h" style={{ display: "flex", gap: "8px 28px", fontSize: 11, fontWeight: 600, letterSpacing: "0.24em", flexWrap: "wrap", justifyContent: "flex-end" }}>{nav.map((n) => <a key={n} href="#" className="ul" style={{ color: C.cream }}>{n}</a>)}<a href="#" className="ul" style={{ color: C.gold }}>EN</a></nav>
        </header>
        <div style={{ position: "absolute", left: "clamp(20px, 5vw, 72px)", right: "clamp(20px, 5vw, 72px)", bottom: "clamp(40px, 7vw, 88px)", display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <span className="rise-2" style={lab}>Golden Square Mile · Montréal · depuis 2011</span>
          <h1 className="rise-3" style={{ ...cz, margin: 0, fontSize: "clamp(34px, 5vw, 74px)", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1.06, textWrap: "balance" }}>Hospitalité légendaire</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 19, lineHeight: 1.65, maxWidth: 680, color: C.muted }}>{copy.welcome1}</p>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" style={{ ...lab, padding: "18px 0", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, fontSize: 11 }}><div>{Array.from({ length: 3 }).map((_, i) => <span key={i} style={{ padding: "0 28px" }}>Le Pois Penché ◆ Tropé ◆ Restaurant Henri ◆ Restaurant Gustave ◆ Hôtel Chez Swann ◆ Depuis 2011 ◆ Mille carré doré ◆</span>)}</div></div>

      {/* Welcome */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px 72px", padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}><span style={lab}>Bienvenue</span><H2>Développeur de restaurants et de concepts d&apos;hospitalité</H2></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7 }}>{copy.welcome2}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 28 }}>
            <div style={{ borderLeft: `1px solid ${C.gold}`, paddingLeft: 20 }}><span style={{ ...lab, display: "block", marginBottom: 10 }}>Vision</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.muted }}>{copy.vision}</p></div>
            <div style={{ borderLeft: `1px solid ${C.gold}`, paddingLeft: 20 }}><span style={{ ...lab, display: "block", marginBottom: 10 }}>Culture</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.muted }}>{copy.culture}</p></div>
          </div>
        </div>
      </section>

      {/* Principles on a panel */}
      <section data-reveal style={{ background: C.panel, padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px)" }}>
        <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}><span style={lab}>Principes</span><H2>Cinq principes</H2></div>
          <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 2 }}>
            {principles.map((p, i) => <div key={p.title} style={{ background: C.bg, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 14, minHeight: 260 }}><span style={{ ...cz, fontSize: 34, color: C.gold, lineHeight: 1 }}>0{i + 1}</span><h3 style={{ ...cz, margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: "0.14em", lineHeight: 1.35 }}>{p.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.muted }}>{p.text}</p></div>)}
          </div>
        </div>
      </section>

      {/* Portfolio: owned as large tiles, mandates as a row */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 44 }}><span style={lab}>Portfolio</span><H2>Nos établissements</H2><p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.muted, maxWidth: 720 }}>{copy.portfolioIntro}</p></div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 12 }}>
          {portfolio.filter((p) => p.owned).map((p) => <a key={p.name} href={p.link} className="lift" style={{ position: "relative", aspectRatio: "16/10", display: "block", textDecoration: "none", color: "inherit" }}><Image src={p.img} alt={p.name} fill sizes="50vw" className="img" /><div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,19,24,0) 40%, rgba(17,19,24,0.92) 100%)" }} /><div style={{ position: "absolute", left: 28, right: 28, bottom: 26, display: "flex", flexDirection: "column", gap: 8 }}><span style={lab}>Propriété de GSMH</span><h3 style={{ ...cz, margin: 0, fontSize: 24, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3><span style={{ fontSize: 15, color: C.muted }}>{p.meta}</span></div></a>)}
        </div>
        <div style={{ ...lab, margin: "48px 0 20px", color: C.dim }}>Mandats pour des tiers</div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
          {portfolio.filter((p) => !p.owned).map((p) => <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={p.img} alt={p.name} fill sizes="33vw" className="img" /></div><h3 style={{ ...cz, margin: 0, fontSize: 16, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3><span style={{ fontSize: 13, color: C.gold }}>{p.meta}</span><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.muted }}>{p.text}</p></div>)}
        </div>
      </section>

      {/* Founder */}
      <section data-reveal style={{ position: "relative", height: "min(760px, 90vh)", minHeight: 560, overflow: "hidden", marginTop: "clamp(72px, 9vw, 120px)" }}>
        <div className="plx" data-speed="0.12" style={{ position: "absolute", inset: "-10% 0" }}><Image src={img.imad} alt="Imad Nabwani" fill sizes="100vw" className="img" /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(17,19,24,0.96) 0%, rgba(17,19,24,0.7) 45%, rgba(17,19,24,0.05) 100%)" }} />
        <div style={{ position: "absolute", left: "clamp(20px, 5vw, 72px)", right: 20, top: "50%", transform: "translateY(-50%)", maxWidth: 640, display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={lab}>Fondateur</span>
          <h2 style={{ ...cz, margin: 0, fontSize: "clamp(30px, 3.6vw, 52px)", fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.08 }}>Imad Nabwani</h2>
          <span style={{ ...lab, color: C.muted }}>{copy.founderTitle}</span>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: C.muted }}>{copy.founder}</p>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: C.dim }}>{copy.founder2}</p>
        </div>
      </section>

      {/* Development */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56, maxWidth: 820 }}><span style={lab}>En développement</span><H2>Trois concepts à l&apos;étude</H2><p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.muted }}>{copy.devIntro}</p></div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 12 }}>
          {concepts.map((c) => <div key={c.title} style={{ background: C.panel, display: "flex", flexDirection: "column" }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={c.img} alt="" fill sizes="33vw" className="img" /></div><div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 14 }}><span style={{ ...lab, fontSize: 10 }}>{c.services}</span><h3 style={{ ...cz, margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.3 }}>{c.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: C.muted }}>{c.text}</p><ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: C.dim }}>{c.points.slice(0, 4).map((pt) => <li key={pt}><span style={{ color: C.gold, marginRight: 10 }}>◆</span>{pt}</li>)}</ul></div></div>)}
        </div>
      </section>

      {/* Contact + FAQ */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px 80px", padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}><span style={lab}>Nous joindre</span><H2>{copy.name}</H2><address style={{ fontStyle: "normal", fontSize: 17, lineHeight: 1.7, color: C.muted }}>{copy.address}<br /><a href={`tel:${copy.phone}`} style={{ color: C.cream, textDecoration: "none" }}>{copy.phone}</a><br /><a href={`mailto:${copy.email}`} style={{ color: C.gold, textDecoration: "none" }}>{copy.email}</a></address></div>
        <div style={{ display: "flex", flexDirection: "column" }}>{faq.map((f, i) => <details key={f.q} open={i === 0} style={{ borderTop: `1px solid ${C.line}`, padding: "18px 0" }}><summary style={{ ...cz, cursor: "pointer", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", listStyle: "none" }}>{f.q}</summary><p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: C.muted }}>{f.a}</p></details>)}</div>
      </section>

      <footer style={{ borderTop: `1px solid ${C.line}`, padding: "28px clamp(20px, 5vw, 72px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, ...lab, color: C.dim, fontSize: 10 }}><span>© GSMH · Golden Square Mile Hospitalité · Montréal</span><span>Le Pois Penché · Tropé</span></footer>
    </main>
  );
}
