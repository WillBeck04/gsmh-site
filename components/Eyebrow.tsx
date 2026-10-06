/** Small gold label with a rule: "01 ——— BIENVENUE" */
export default function Eyebrow({ n, children, light = false }: { n?: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      {n && <span className={`label ${light ? "!text-gold-light" : ""}`}>{n}</span>}
      {n && <span className={`h-px w-12 ${light ? "bg-gold-light" : "bg-gold"}`} />}
      <span className={`label ${light ? "!text-gold-light" : ""}`}>{children}</span>
    </div>
  );
}
