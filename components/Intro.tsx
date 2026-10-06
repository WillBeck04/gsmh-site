"use client";

import { useEffect, useState } from "react";

const TEXT = "Golden Square Mile";
const KEY = "gsmh-intro-seen";

/**
 * Opening curtain: types "Golden Square Mile" letter by letter, holds, then slides away.
 * Once per browser session. A click or any key skips it. Never shown with reduced motion, never rendered on the server.
 */
export default function Intro({ tagline }: { tagline: string }) {
  const [phase, setPhase] = useState<"hidden" | "typing" | "hold" | "leaving" | "done">("hidden");
  const [count, setCount] = useState(0);

  useEffect(() => {
    try { if (sessionStorage.getItem(KEY)) return; } catch {}
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setPhase("typing"), 0);
    return () => { clearTimeout(t); document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;
    if (count >= TEXT.length) { const t = setTimeout(() => setPhase("hold"), 220); return () => clearTimeout(t); }
    const t = setTimeout(() => setCount((c) => c + 1), TEXT[count] === " " ? 90 : 34 + Math.random() * 30);
    return () => clearTimeout(t);
  }, [phase, count]);

  useEffect(() => {
    if (phase !== "hold") return;
    const t = setTimeout(() => setPhase("leaving"), 420);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const t = setTimeout(() => { setPhase("done"); document.body.style.overflow = ""; try { sessionStorage.setItem(KEY, "1"); } catch {} }, 800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "typing" && phase !== "hold") return;
    const skip = () => setPhase("leaving");
    window.addEventListener("click", skip);
    window.addEventListener("keydown", skip);
    return () => { window.removeEventListener("click", skip); window.removeEventListener("keydown", skip); };
  }, [phase]);

  if (phase === "hidden" || phase === "done") return null;
  const leaving = phase === "leaving";

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[200] flex cursor-pointer items-center justify-center bg-cream" style={{ transform: leaving ? "translateY(-100%)" : "none", transition: "transform 0.8s cubic-bezier(.76,0,.24,1)" }}>
      <div className="flex w-full flex-col items-center gap-6 px-7 text-center" style={{ opacity: leaving ? 0 : 1, transition: "opacity 0.5s" }}>
        <span className="inline-flex items-baseline whitespace-pre font-title font-semibold uppercase leading-none text-ink" style={{ fontSize: "clamp(24px, 7vw, 76px)", letterSpacing: "0.06em" }}>
          {TEXT.slice(0, count)}
          <span className="ml-[0.08em] inline-block h-[0.95em] w-[0.05em] translate-y-[0.1em] bg-gold" style={{ animation: "blink 0.9s steps(1) infinite" }} />
        </span>
        <span className="label max-w-[340px]" style={{ opacity: count >= TEXT.length ? 1 : 0, transition: "opacity 0.6s" }}>{tagline}</span>
      </div>
    </div>
  );
}
