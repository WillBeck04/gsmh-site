import Image from "next/image";
import { concepts, copy, faq, img, nav, portfolio, principles } from "../data";

// 1 · Maison — cream, Cinzel titles, gold rule. Calm, corporate, symmetrical.
const C = { cream: "#F8F4EA", deep: "#EFE8D8", ink: "#15161A", soft: "#5A5651", gold: "#8C7A3F", line: "#D9D0BC" };
const cz: React.CSSProperties = { fontFamily: "var(--font-cinzel), Georgia, serif", textTransform: "uppercase" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: C.gold };
const Eyebrow = ({ n, children }: { n: string; children: React.ReactNode }) => <div style={{ display: "flex", alignItems: "center", gap: 16 }}><span style={lab}>{n}</span><span style={{ width: 48, height: 1, background: C.gold }} /><span style={lab}>{children}</span></div>;
const H2 = ({ children, center }: { children: React.ReactNode; center?: boolean }) => <h2 style={{ ...cz, margin: 0, fontSize: "clamp(26px, 2.8vw, 40px)", fontWeight: 600, letterSpacing: "0.08em", lineHeight: 1.15, color: C.ink, textAlign: center ? "center" : "left", textWrap: "balance" }}>{children}</h2>;
const owned = portfolio.filter((p) => p.owned);
const mandates = portfolio.filter((p) => !p.owned);

export default function D1() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <header className="rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "24px clamp(20px, 5vw, 72px)", borderBottom: `1px solid ${C.line}`, flexWrap: "wrap" }}>
        <Image src="/logo/gsmh.png" alt="Golden Square Mile Hospitalité" width={380} height={406} priority style={{ height: 64, width: "auto" }} />
        <nav className="h" style={{ display: "flex", gap: "8px 28px", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", flexWrap: "wrap" }}>{nav.map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}<a href="#" className="ul" style={{ color: C.gold }}>EN</a></nav>
      </header>

      {/* Hero: downtown Montréal at dusk, the group's territory rather than one restaurant */}
      <section style={{ position: "relative", height: "min(760px, 78vh)", minHeight: 520, overflow: "hidden" }}>
        <div className="plx" data-speed="0.14" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.street} alt="Le centre-ville de Montréal" fill priority sizes="100vw" className="img kb" style={{ objectPosition: "45% 45%" }} /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(21,22,26,0.1) 0%, rgba(21,22,26,0.72) 100%)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: "clamp(36px, 6vw, 72px)", color: C.cream, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20, padding: "0 24px" }}>
          <span className="rise-2" style={{ ...lab, color: "#D8C27A" }}>Golden Square Mile · Montréal · depuis 2011</span>
          <h1 className="rise-3" style={{ ...cz, margin: 0, fontSize: "clamp(30px, 4.2vw, 60px)", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1.1, textWrap: "balance", maxWidth: 980 }}>Développeur de restaurants et de concepts d&apos;hospitalité</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 19, lineHeight: 1.6, maxWidth: 680, color: "rgba(248,244,234,0.9)" }}>{copy.welcome1}</p>
        </div>
      </section>

      {/* Welcome: centred statement, then vision and culture as a symmetric pair */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <Eyebrow n="01">Bienvenue</Eyebrow>
        <p style={{ margin: 0, fontSize: "clamp(19px, 1.6vw, 23px)", lineHeight: 1.6, textAlign: "center", maxWidth: 860 }}>{copy.welcome2}</p>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2, width: "100%", maxWidth: 1040, marginTop: 12 }}>
          {[["Vision", copy.vision], ["Culture", copy.culture]].map(([t, x]) => <div key={t} style={{ background: C.deep, padding: "clamp(28px, 3.5vw, 44px)", display: "flex", flexDirection: "column", gap: 12 }}><h3 style={{ ...cz, margin: 0, fontSize: 16, fontWeight: 600, letterSpacing: "0.16em", color: C.gold }}>{t}</h3><p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.soft }}>{x}</p></div>)}
        </div>
      </section>

      {/* Three venues, three equal frames */}
      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 6, padding: "clamp(56px, 7vw, 90px) 0 0" }}>
        {[[img.henri, "Restaurant Henri"], [img.gustaveBar, "Restaurant Gustave"], [img.tropeStore, "Tropé"]].map(([s, l]) => <div key={s} className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={s} alt={l} fill sizes="(max-width: 720px) 100vw, 33vw" className="img" /><span style={{ ...lab, position: "absolute", left: 20, bottom: 18, color: C.cream, fontSize: 10, textShadow: "0 1px 12px rgba(0,0,0,0.6)" }}>{l}</span></div>)}
      </section>

      {/* Principles: 2 wide on top, 3 below. Never 4 + 1. */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        <Eyebrow n="02">Principes</Eyebrow>
        <H2 center>Cinq principes qui guident chaque établissement</H2>
        <div className="p-grid" data-stagger style={{ width: "100%", marginTop: 20 }}>
          {principles.map((p, i) => <div key={p.title} style={{ borderTop: `1px solid ${C.gold}`, paddingTop: 22, display: "flex", flexDirection: "column", gap: 12 }}><span style={{ ...lab, fontSize: 10 }}>0{i + 1}</span><h3 style={{ ...cz, margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.3 }}>{p.title}</h3><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{p.text}</p></div>)}
        </div>
      </section>

      {/* Portfolio: two owned venues large, three mandates in an equal row */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <Eyebrow n="03">Portfolio</Eyebrow>
        <H2 center>Nos établissements et nos mandats</H2>
        <p style={{ margin: "0 0 28px", fontSize: 18, lineHeight: 1.6, color: C.soft, maxWidth: 720, textAlign: "center" }}>{copy.portfolioIntro}</p>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, width: "100%" }}>
          {owned.map((p) => <article key={p.name} style={{ display: "flex", flexDirection: "column", gap: 14 }}><div className="lift" style={{ position: "relative", aspectRatio: "16/10" }}><Image src={p.img} alt={p.name} fill sizes="(max-width: 720px) 100vw, 50vw" className="img" /><span style={{ ...lab, position: "absolute", left: 14, top: 14, background: C.cream, color: C.gold, padding: "6px 10px", fontSize: 10 }}>Propriété de GSMH</span></div><h3 style={{ ...cz, margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3><span style={{ fontSize: 13, color: C.gold, letterSpacing: "0.04em" }}>{p.meta}</span><p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: C.soft }}>{p.text}</p>{p.link && <a href={p.link} className="ul" style={{ ...lab, alignSelf: "flex-start", color: C.ink }}>Visiter le site</a>}</article>)}
        </div>
        <div style={{ ...lab, color: C.soft, margin: "48px 0 8px", alignSelf: "flex-start" }}>Mandats pour des tiers</div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32, width: "100%" }}>
          {mandates.map((p) => <article key={p.name} style={{ display: "flex", flexDirection: "column", gap: 12 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={p.img} alt={p.name} fill sizes="(max-width: 720px) 100vw, 33vw" className="img" /></div><h3 style={{ ...cz, margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3><span style={{ fontSize: 13, color: C.gold }}>{p.meta}</span><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.soft }}>{p.text}</p></article>)}
        </div>
      </section>

      {/* Founder: black-and-white portrait */}
      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", marginTop: "clamp(72px, 9vw, 120px)", background: C.deep }}>
        <div className="lift" style={{ position: "relative", minHeight: 560 }}><Image src={img.imadBw} alt="Imad Nabwani" fill sizes="(max-width: 720px) 100vw, 50vw" className="img" /></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 22, padding: "clamp(48px, 7vw, 96px) clamp(24px, 6vw, 80px)" }}>
          <Eyebrow n="04">Fondateur</Eyebrow>
          <h2 style={{ ...cz, margin: 0, fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.1 }}>Imad Nabwani</h2>
          <span style={{ ...lab, color: C.soft }}>{copy.founderTitle}</span>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65 }}>{copy.founder}</p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.soft }}>{copy.founder2}</p>
        </div>
      </section>

      {/* Development: three concepts, three equal columns, each with a paired photo */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <Eyebrow n="05">En développement</Eyebrow>
        <H2 center>Trois concepts à l&apos;étude</H2>
        <p style={{ margin: "0 0 36px", fontSize: 17, lineHeight: 1.65, color: C.soft, maxWidth: 760, textAlign: "center" }}>{copy.devIntro}</p>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, width: "100%" }}>
          {[{ ...concepts[0], img: img.steakSpread }, { ...concepts[1], img: img.brasserieRoom }, { ...concepts[2], img: img.rotiSpit }].map((c) => <div key={c.title} style={{ display: "flex", flexDirection: "column", gap: 14 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={c.img} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" className="img" /></div><span style={lab}>{c.services}</span><h3 style={{ ...cz, margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.3 }}>{c.title}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: C.soft }}>{c.text}</p><ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 14, color: C.soft }}>{c.points.slice(0, 4).map((pt) => <li key={pt} style={{ display: "flex", gap: 10 }}><span style={{ color: C.gold }}>◆</span>{pt}</li>)}</ul></div>)}
        </div>
      </section>

      {/* Contact + FAQ: two equal columns; FAQ has four, a clean 2x2 */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px 80px", padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}><Eyebrow n="06">Nous joindre</Eyebrow><H2>{copy.name}</H2><address style={{ fontStyle: "normal", fontSize: 17, lineHeight: 1.7, color: C.soft }}>{copy.address}<br /><a href={`tel:${copy.phone}`} style={{ color: C.ink, textDecoration: "none" }}>{copy.phone}</a><br /><a href={`mailto:${copy.email}`} style={{ color: C.ink, textDecoration: "none" }}>{copy.email}</a></address></div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px 32px" }}>{faq.map((f) => <div key={f.q} style={{ borderTop: `1px solid ${C.line}`, paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}><h3 style={{ ...cz, margin: 0, fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.4 }}>{f.q}</h3><p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: C.soft }}>{f.a}</p></div>)}</div>
      </section>

      <footer style={{ borderTop: `1px solid ${C.line}`, padding: "28px clamp(20px, 5vw, 72px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, ...lab, color: C.soft, fontSize: 10 }}><span>© GSMH · Golden Square Mile Hospitalité · Montréal</span><span>Le Pois Penché · Tropé</span></footer>
      <style>{`.p-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:40px 40px}.p-grid>*:nth-child(-n+2){grid-column:span 3}.p-grid>*:nth-child(n+3){grid-column:span 2}@media(max-width:900px){.p-grid{grid-template-columns:1fr}.p-grid>*{grid-column:span 1!important}}`}</style>
    </main>
  );
}
