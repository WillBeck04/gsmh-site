import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 py-32 text-center">
      <span className="label">404</span>
      <h1 className="m-0 text-[clamp(26px,3vw,40px)]">Page introuvable · Page not found</h1>
      <p className="m-0 text-ink-soft">Cette page n&apos;existe pas ou a été déplacée. · This page does not exist or has moved.</p>
      <div className="flex gap-3">
        <Link href="/fr" className="btn">Accueil</Link>
        <Link href="/en" className="btn">Home</Link>
      </div>
    </section>
  );
}
