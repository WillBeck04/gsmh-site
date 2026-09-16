import Image from "next/image";
import { concepts, copy, faq, img, nav, portfolio, principles } from "../data";

// 3 · Dossier — editorial, numbered table of contents, case-study rows, founder as profile
const C = { bg: "#F5F1E8", ink: "#15161A", soft: "#57534C", gold: "#8C7A3F", line: "#15161A", lineSoft: "#D6CEBC" };
const cz: React.CSSProperties = { fontFamily: "var(--font-cinzel), Georgia, serif", textTransform: "uppercase" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.28em" };
const Sec = ({ n, title, children, pad = true }: { n: string; title: string; children: React.ReactNode; pad?: boolean }) => (
  <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 3fr)", gap: "24px 64px", padding: pad ? "clamp(64px, 8vw, 104px) clamp(20px, 5vw, 72px) 0" : 0, borderTop: `1px solid ${C.line}`, margin: "0 clamp(20px, 5vw, 72px)" }} data-sec>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}><span style={{ ...cz, fontSize: 40, fontWeight: 600, color: C.gold, lineHeight: 1 }}>{n}</span><span style={{ ...lab, color: C.soft }}>{title}</span></div>
    <div>{children}</div>
  </section>
);

export default function D3() {
  return (
    <main style={{ background: C.bg, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <header style={{ borderBottom: `1px solid ${C.line}` }}>
        <div className="rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "16px clamp(20px, 5vw, 72px)", borderBottom: `1px solid ${C.lineSoft}`, ...lab, color: C.soft, fontSize: 10, flexWrap: "wrap" }}><span>Golden Square Mile Hospitalité</span><span>Montréal · Fondée en 2011</span></div>
        <div className="rise-2" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px clamp(20px, 5vw, 72px)", flexWrap: "wrap" }}>
          <Image src="/logo/gsmh.png" alt="GSMH" width={380} height={406} priority style={{ height: 60, width: "auto" }} />
          <nav style={{ ...lab, display: "flex", gap: "8px 26px", flexWrap: "wrap" }}>{nav.map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}<a href="#" className="ul" style={{ color: C.gold }}>EN</a></nav>
        </div>
      </header>

      {/* Masthead statement + contents */}
      <section className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px 64px", padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px) clamp(56px, 7vw, 96px)", alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span className="rise-2" style={{ ...lab, color: C.gold }}>Dossier 2026</span>
          <h1 className="rise-3" style={{ ...cz, margin: 0, fontSize: "clamp(34px, 4.6vw, 68px)", fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1.06, textWrap: "balance" }}>Développeur de restaurants et de concepts d&apos;hospitalité</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 19, lineHeight: 1.65, maxWidth: 620, color: C.soft }}>{copy.welcome1}</p>
        </div>
        <nav className="rise-4" aria-label="Sommaire" style={{ display: "flex", flexDirection: "column", borderTop: `1px solid ${C.line}` }}>
          {["Bienvenue", "Principes", "Portfolio", "Fondateur", "En développement", "Nous joindre"].map((t, i) => <a key={t} href="#" className="d3-toc" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderBottom: `1px solid ${C.lineSoft}`, textDecoration: "none", color: C.ink, transition: "padding-left 0.35s" }}><span style={{ ...cz, fontSize: 15, fontWeight: 600, letterSpacing: "0.12em" }}>{t}</span><span style={{ ...lab, color: C.gold }}>0{i + 1}</span></a>)}
        </nav>
      </section>

      <section style={{ position: "relative", height: "min(640px, 70vh)", overflow: "hidden" }}><div className="plx" data-speed="0.14" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.equipe} alt="L'équipe" fill priority sizes="100vw" className="img kb" /></div></section>

      <Sec n="01" title="Bienvenue">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px 48px" }}>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.65, gridColumn: "1 / -1", maxWidth: 820 }}>{copy.welcome2}</p>
          <div><span style={{ ...lab, color: C.gold, display: "block", marginBottom: 10 }}>Vision</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{copy.vision}</p></div>
          <div><span style={{ ...lab, color: C.gold, display: "block", marginBottom: 10 }}>Culture</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{copy.culture}</p></div>
        </div>
      </Sec>

      <Sec n="02" title="Principes">
        <div data-stagger style={{ display: "flex", flexDirection: "column" }}>
          {principles.map((p, i) => <div key={p.title} style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", gap: "8px 40px", padding: "22px 0", borderTop: i ? `1px solid ${C.lineSoft}` : "none" }}><h3 style={{ ...cz, margin: 0, fontSize: 16, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.35 }}>{p.title}</h3><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{p.text}</p></div>)}
        </div>
      </Sec>

      <Sec n="03" title="Portfolio">
        <p style={{ margin: "0 0 36px", fontSize: 17, lineHeight: 1.65, color: C.soft, maxWidth: 720 }}>{copy.portfolioIntro}</p>
        <div data-stagger style={{ display: "flex", flexDirection: "column" }}>
          {portfolio.map((p, i) => <article key={p.name} className="d3-case" style={{ display: "grid", gridTemplateColumns: "minmax(200px, 1fr) minmax(0, 2fr)", gap: "16px 40px", padding: "28px 0", borderTop: i ? `1px solid ${C.lineSoft}` : "none", alignItems: "start" }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={p.img} alt={p.name} fill sizes="30vw" className="img" /></div><div style={{ display: "flex", flexDirection: "column", gap: 10 }}><div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline" }}><h3 style={{ ...cz, margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3>{p.owned && <span style={{ ...lab, color: C.gold, fontSize: 10 }}>Propriété de GSMH</span>}</div><span style={{ fontSize: 14, color: C.gold }}>{p.meta}</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{p.text}</p>{p.link && <a href={p.link} className="ul" style={{ ...lab, color: C.ink, alignSelf: "flex-start", fontSize: 10 }}>Visiter le site</a>}</div></article>)}
        </div>
      </Sec>

      <Sec n="04" title="Fondateur">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px 48px", alignItems: "start" }}>
          <div className="lift" style={{ position: "relative", aspectRatio: "4/5" }}><Image src={img.imad} alt="Imad Nabwani" fill sizes="35vw" className="img" /></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, gridColumn: "span 1" }}><h3 style={{ ...cz, margin: 0, fontSize: "clamp(26px, 2.8vw, 38px)", fontWeight: 600, letterSpacing: "0.08em", lineHeight: 1.1 }}>Imad Nabwani</h3><span style={{ ...lab, color: C.gold }}>{copy.founderTitle}</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>{copy.founder}</p><p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: C.soft }}>{copy.founder2}</p></div>
        </div>
      </Sec>

      <Sec n="05" title="En développement">
        <p style={{ margin: "0 0 40px", fontSize: 17, lineHeight: 1.65, color: C.soft, maxWidth: 760 }}>{copy.devIntro} {copy.devIntro2}</p>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
          {concepts.map((c) => <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: 12 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={c.img} alt="" fill sizes="30vw" className="img" /></div><span style={{ ...lab, color: C.gold, fontSize: 10 }}>{c.services}</span><h3 style={{ ...cz, margin: 0, fontSize: 16, fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.35 }}>{c.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: C.soft }}>{c.text}</p></div>)}
        </div>
      </Sec>

      <Sec n="06" title="Nous joindre">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px 48px", paddingBottom: "clamp(64px, 8vw, 104px)" }}>
          <address style={{ fontStyle: "normal", fontSize: 18, lineHeight: 1.7 }}><strong style={{ ...cz, display: "block", fontSize: 15, letterSpacing: "0.12em", marginBottom: 8 }}>{copy.name}</strong>{copy.address}<br /><a href={`tel:${copy.phone}`} style={{ color: C.ink, textDecoration: "none" }}>{copy.phone}</a><br /><a href={`mailto:${copy.email}`} style={{ color: C.gold, textDecoration: "none" }}>{copy.email}</a></address>
          <div style={{ display: "flex", flexDirection: "column" }}>{faq.map((f, i) => <details key={f.q} open={i === 0} style={{ borderTop: `1px solid ${C.lineSoft}`, padding: "16px 0" }}><summary style={{ ...cz, cursor: "pointer", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", listStyle: "none" }}>{f.q}</summary><p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, color: C.soft }}>{f.a}</p></details>)}</div>
        </div>
      </Sec>

      <footer style={{ borderTop: `1px solid ${C.line}`, padding: "28px clamp(20px, 5vw, 72px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, ...lab, color: C.soft, fontSize: 10 }}><span>© GSMH · Golden Square Mile Hospitalité · Montréal</span><span>Le Pois Penché · Tropé</span></footer>
      <style>{`.d3-toc:hover{padding-left:12px}@media(max-width:800px){[data-sec]{grid-template-columns:1fr!important}.d3-case{grid-template-columns:1fr!important}}`}</style>
    </main>
  );
}
