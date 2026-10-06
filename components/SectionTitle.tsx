import Eyebrow from "./Eyebrow";

/** Centred section opening: eyebrow, Cinzel title, optional intro paragraph. */
export default function SectionTitle({ n, eyebrow, title, intro, as = "h2" }: { n?: string; eyebrow: string; title: string; intro?: string; as?: "h1" | "h2" }) {
  const H = as;
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <Eyebrow n={n}>{eyebrow}</Eyebrow>
      <H className="m-0 text-[clamp(25px,2.8vw,40px)]">{title}</H>
      {intro && <p className="m-0 max-w-[760px] text-[17px] leading-relaxed text-ink-soft md:text-[18px]">{intro}</p>}
    </div>
  );
}
