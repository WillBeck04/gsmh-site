import Image from "next/image";
import type { Photo } from "@/lib/images";
import type { Lang } from "@/lib/routes";
import Eyebrow from "./Eyebrow";

/** Inner-page opening: full-width photo with a slow settle, eyebrow and Cinzel title at the bottom. */
export default function PageHero({ photo, lang, eyebrow, title, intro, position = "center" }: { photo: Photo; lang: Lang; eyebrow: string; title: string; intro?: string; position?: string }) {
  return (
    <section className="relative h-[62svh] min-h-[420px] max-h-[680px] overflow-hidden bg-ink">
      <div className="plx absolute inset-x-0 -inset-y-[12%]" data-speed="0.12">
        <Image src={photo.src} alt={photo.alt[lang]} fill priority sizes="100vw" className="img kb" style={{ objectPosition: position }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 to-ink/75" />
      <div className="absolute inset-x-0 bottom-[clamp(32px,6vw,64px)] flex flex-col items-center gap-5 px-5 text-center text-cream">
        <div className="rise-2"><Eyebrow light>{eyebrow}</Eyebrow></div>
        <h1 className="rise-3 m-0 max-w-[980px] text-[clamp(30px,4.4vw,60px)] tracking-[0.06em]">{title}</h1>
        {intro && <p className="rise-4 m-0 max-w-[680px] text-[17px] leading-relaxed text-cream/90 md:text-[19px]">{intro}</p>}
      </div>
    </section>
  );
}
