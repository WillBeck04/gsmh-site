import Image from "next/image";
import { concepts, copy, faq, img, nav, portfolio, principles } from "../data";

// 1 · Maison — cream, Cinzel titles (client's font guide), gold rule, calm corporate
const C = { cream: "#F8F4EA", deep: "#EFE8D8", ink: "#15161A", soft: "#5A5651", gold: "#8C7A3F", line: "#D9D0BC" };
const cz: React.CSSProperties = { fontFamily: "var(--font-cinzel), Georgia, serif", textTransform: "uppercase" };
const lab: React.CSSProperties = { fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.3em", color: C.gold };
const Eyebrow = ({ n, children }: { n: string; children: React.ReactNode }) => <div style={{ display: "flex", alignItems: "center", gap: 16 }}><span style={lab}>{n}</span><span style={{ flex: 1, maxWidth: 48, height: 1, background: C.gold }} /><span style={lab}>{children}</span></div>;
const H2 = ({ children }: { children: React.ReactNode }) => <h2 style={{ ...cz, margin: 0, fontSize: "clamp(26px, 2.8vw, 40px)", fontWeight: 600, letterSpacing: "0.08em", lineHeight: 1.15, color: C.ink }}>{children}</h2>;

export default function D1() {
  return (
    <main style={{ background: C.cream, color: C.ink, fontFamily: "var(--font-figtree)" }}>
      <header className="rise" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "24px clamp(20px, 5vw, 72px)", borderBottom: `1px solid ${C.line}`, flexWrap: "wrap" }}>
        <Image src="/logo/gsmh.png" alt="Golden Square Mile Hospitalité" width={380} height={406} priority style={{ height: 64, width: "auto" }} />
        <nav className="h" style={{ display: "flex", gap: "8px 28px", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", flexWrap: "wrap" }}>{nav.map((n) => <a key={n} href="#" className="ul" style={{ color: C.ink }}>{n}</a>)}<a href="#" className="ul" style={{ color: C.gold }}>EN</a></nav>
      </header>

      {/* Hero */}
      <section style={{ position: "relative", height: "min(760px, 78vh)", minHeight: 520, overflow: "hidden" }}>
        <div className="plx" data-speed="0.14" style={{ position: "absolute", inset: "-12% 0" }}><Image src={img.facade} alt="Le Pois Penché" fill priority sizes="100vw" className="img kb" /></div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(21,22,26,0.15) 0%, rgba(21,22,26,0.7) 100%)" }} />
        <div style={{ position: "absolute", left: "clamp(20px, 5vw, 72px)", right: "clamp(20px, 5vw, 72px)", bottom: "clamp(36px, 6vw, 72px)", color: C.cream, display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <span className="rise-2" style={{ ...lab, color: "#D8C27A" }}>Golden Square Mile · Montréal · depuis 2011</span>
          <h1 className="rise-3" style={{ ...cz, margin: 0, fontSize: "clamp(30px, 4.2vw, 60px)", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1.1, textWrap: "balance" }}>Développeur de restaurants et de concepts d&apos;hospitalité</h1>
          <p className="rise-4" style={{ margin: 0, fontSize: 19, lineHeight: 1.6, maxWidth: 680, color: "rgba(248,244,234,0.9)" }}>{copy.welcome1}</p>
        </div>
      </section>

      {/* Welcome: three columns */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0" }}>
        <Eyebrow n="01">Bienvenue</Eyebrow>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px 56px", marginTop: 36 }}>
          <div><p style={{ margin: 0, fontSize: 19, lineHeight: 1.65 }}>{copy.welcome2}</p></div>
          <div><h3 style={{ ...cz, margin: "0 0 12px", fontSize: 16, fontWeight: 600, letterSpacing: "0.16em", color: C.gold }}>Vision</h3><p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.soft }}>{copy.vision}</p></div>
          <div><h3 style={{ ...cz, margin: "0 0 12px", fontSize: 16, fontWeight: 600, letterSpacing: "0.16em", color: C.gold }}>Culture</h3><p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.soft }}>{copy.culture}</p></div>
        </div>
      </section>

      <section data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 6, padding: "clamp(56px, 7vw, 90px) 0 0" }}>
        {[img.cuisine, img.equipe, img.salle].map((s) => <div key={s} className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={s} alt="" fill sizes="33vw" className="img" /></div>)}
      </section>

      {/* Principles */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0" }}>
        <Eyebrow n="02">Principes</Eyebrow>
        <div style={{ marginTop: 28, marginBottom: 44 }}><H2>Cinq principes qui guident chaque établissement</H2></div>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "40px 48px" }}>
          {principles.map((p, i) => <div key={p.title} style={{ borderTop: `1px solid ${C.gold}`, paddingTop: 22, display: "flex", flexDirection: "column", gap: 12 }}><span style={{ ...lab, fontSize: 10 }}>0{i + 1}</span><h3 style={{ ...cz, margin: 0, fontSize: 17, fontWeight: 600, letterSpacing: "0.12em", lineHeight: 1.3 }}>{p.title}</h3><p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{p.text}</p></div>)}
        </div>
      </section>

      {/* Portfolio */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0" }}>
        <Eyebrow n="03">Portfolio</Eyebrow>
        <div style={{ marginTop: 28, marginBottom: 20 }}><H2>Nos établissements et nos mandats</H2></div>
        <p style={{ margin: "0 0 48px", fontSize: 18, lineHeight: 1.6, color: C.soft, maxWidth: 720 }}>{copy.portfolioIntro}</p>
        <div data-stagger style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {portfolio.map((p) => (
            <article key={p.name} style={{ display: "flex", flexDirection: "column", gap: 14, gridColumn: p.owned ? "span 1" : "span 1" }}>
              <div className="lift" style={{ position: "relative", aspectRatio: p.owned ? "16/10" : "4/3" }}><Image src={p.img} alt={p.name} fill sizes="(min-width: 900px) 33vw, 100vw" className="img" />{p.owned && <span style={{ ...lab, position: "absolute", left: 14, top: 14, background: C.cream, color: C.gold, padding: "6px 10px", fontSize: 10 }}>Propriété de GSMH</span>}</div>
              <h3 style={{ ...cz, margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: "0.1em" }}>{p.name}</h3>
              <span style={{ fontSize: 13, color: C.gold, letterSpacing: "0.04em" }}>{p.meta}</span>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: C.soft }}>{p.text}</p>
              {p.link && <a href={p.link} className="ul" style={{ ...lab, alignSelf: "flex-start", color: C.ink }}>Visiter le site</a>}
            </article>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", marginTop: "clamp(72px, 9vw, 120px)", background: C.deep }}>
        <div className="lift" style={{ position: "relative", minHeight: 520 }}><Image src={img.imad} alt="Imad Nabwani" fill sizes="(min-width: 900px) 50vw, 100vw" className="img" /></div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 22, padding: "clamp(48px, 7vw, 96px) clamp(24px, 6vw, 80px)" }}>
          <Eyebrow n="04">Fondateur</Eyebrow>
          <h2 style={{ ...cz, margin: 0, fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.1 }}>Imad Nabwani</h2>
          <span style={{ ...lab, color: C.soft }}>{copy.founderTitle}</span>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65 }}>{copy.founder}</p>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.soft }}>{copy.founder2}</p>
        </div>
      </section>

      {/* Development */}
      <section data-reveal className="wrap" style={{ padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px) 0" }}>
        <Eyebrow n="05">En développement</Eyebrow>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px 56px", marginTop: 28, marginBottom: 56 }}><H2>Trois concepts à l&apos;étude</H2><p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: C.soft }}>{copy.devIntro} {copy.devIntro2}</p></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {concepts.map((c, i) => (
            <div key={c.title} data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px 56px", alignItems: "center", direction: i % 2 ? "rtl" : "ltr" }}>
              <div style={{ direction: "ltr", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 8 }}><div className="lift" style={{ position: "relative", aspectRatio: "4/3" }}><Image src={c.img} alt="" fill sizes="35vw" className="img" /></div><div className="lift" style={{ position: "relative", aspectRatio: "3/4" }}><Image src={c.img2} alt="" fill sizes="20vw" className="img" /></div></div>
              <div style={{ direction: "ltr", display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={lab}>{c.services}</span>
                <h3 style={{ ...cz, margin: 0, fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 600, letterSpacing: "0.1em", lineHeight: 1.25 }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: C.soft }}>{c.text}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, fontSize: 15, color: C.soft }}>{c.points.map((pt) => <li key={pt} style={{ display: "flex", gap: 10 }}><span style={{ color: C.gold }}>◆</span>{pt}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + contact */}
      <section data-reveal className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px 80px", padding: "clamp(72px, 9vw, 120px) clamp(20px, 5vw, 72px)" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Eyebrow n="06">Nous joindre</Eyebrow>
          <H2>{copy.name}</H2>
          <address style={{ fontStyle: "normal", fontSize: 17, lineHeight: 1.7, color: C.soft }}>{copy.address}<br /><a href={`tel:${copy.phone}`} style={{ color: C.ink, textDecoration: "none" }}>{copy.phone}</a><br /><a href={`mailto:${copy.email}`} style={{ color: C.ink, textDecoration: "none" }}>{copy.email}</a></address>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faq.map((f, i) => <details key={f.q} open={i === 0} style={{ borderTop: `1px solid ${C.line}`, padding: "18px 0" }}><summary style={{ ...cz, cursor: "pointer", fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", listStyle: "none" }}>{f.q}</summary><p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, color: C.soft }}>{f.a}</p></details>)}
        </div>
      </section>

      <footer style={{ borderTop: `1px solid ${C.line}`, padding: "28px clamp(20px, 5vw, 72px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontFamily: "var(--font-montserrat)", textTransform: "uppercase", fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", color: C.soft }}>
        <span>© GSMH · Golden Square Mile Hospitalité · Montréal</span><span>Le Pois Penché · Tropé</span>
      </footer>
    </main>
  );
}
