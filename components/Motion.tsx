"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll motion for every page:
 * - fades [data-reveal] and [data-stagger] blocks in as they scroll into view
 * - drives a soft parallax on .plx photos
 * Re-runs on each page change. Does nothing for visitors who prefer reduced motion.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("motion");

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    els.forEach((el) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.9) el.classList.add("in"); else io.observe(el); });

    const plx = Array.from(document.querySelectorAll<HTMLElement>(".plx"));
    let raf = 0;
    const onScroll = () => {
      if (!plx.length) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        plx.forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const speed = Number(el.dataset.speed ?? 0.14);
          el.style.setProperty("--py", String(-(r.top + r.height / 2 - vh / 2) * speed));
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [pathname]);

  return null;
}
