import { notFound } from "next/navigation";
import { designs } from "../data";
import Switcher from "../Switcher";
import Reveal from "../Reveal";
import Intro from "../Intro";
import D1 from "../directions/D1";
import D2 from "../directions/D2";
import D3 from "../directions/D3";
import D4 from "../directions/D4";

const pages = { 1: D1, 2: D2, 3: D3, 4: D4 } as const;
const CZ = "var(--font-cinzel), Georgia, serif";
const palettes = {
  1: { bg: "#F8F4EA", ink: "#15161A", accent: "#8C7A3F", font: CZ },
  2: { bg: "#111318", ink: "#F1ECE0", accent: "#C4A85A", font: CZ },
  3: { bg: "#F5F1E8", ink: "#15161A", accent: "#8C7A3F", font: CZ },
  4: { bg: "#F8F4EA", ink: "#15161A", accent: "#8C7A3F", font: CZ },
} as const;

export function generateStaticParams() { return designs.map((d) => ({ n: String(d.n) })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params; const d = designs.find((x) => String(x.n) === n);
  return { title: d ? `${d.n} · ${d.name} — GSMH` : "GSMH" };
}

export default async function DesignPage({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params; const num = Number(n) as keyof typeof pages; const Page = pages[num];
  if (!Page) notFound();
  return (<><Intro palette={palettes[num]} /><Switcher current={num} /><Reveal /><Page /></>);
}
