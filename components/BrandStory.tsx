import Image from "next/image";
import { Reveal } from "./Reveal";
import { BrandMark } from "./BrandMark";
import { asset } from "@/lib/asset";
import { brand } from "@/lib/content";

export function BrandStory() {
  return (
    <section id="historia" className="relative overflow-hidden bg-sand py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="mb-5 flex items-center gap-4"><span className="h-px w-12 bg-leather" /><span className="text-[11px] font-semibold uppercase tracking-wide2 text-walnut">03 — Nuestra esencia</span></div>
          <h2 className="font-display text-[2.6rem] font-medium leading-[1] tracking-tight text-ink sm:text-6xl sm:leading-[.98]">Una mirada propia,<br /><span className="italic text-walnut">inspirada en la tierra</span></h2>
          <div className="mt-6 max-w-lg space-y-5 text-base font-light leading-relaxed text-muted sm:mt-7 sm:text-lg">
            <p>VALNAT Étnica nació en Limache en 2022 con la idea de reunir piezas que se sienten especiales: aros con presencia, anillos para todos los días y accesorios que no pasan desapercibidos.</p>
            <p>Nos inspiran la madera, los tonos naturales, la fuerza de lo artesanal y las personas que hacen suyo cada diseño.</p>
            <p className="font-display text-2xl italic text-ink">No buscamos uniformarte. Buscamos complementar tu outfit.</p>
          </div>
          <div className="mt-8 flex items-center gap-4 sm:mt-9"><BrandMark className="h-10 w-10 text-ink" /><span className="h-8 w-px bg-walnut/30" /><span className="text-[11px] font-semibold uppercase tracking-wide2 text-walnut">{brand.full} · {brand.since}</span></div>
        </Reveal>

        <Reveal delay={130}>
          <div className="relative mx-auto h-[420px] max-w-lg sm:h-[560px] lg:h-[650px]">
            <div className="absolute left-0 top-0 h-[72%] w-[72%] overflow-hidden rounded-[1.5rem] shadow-soft"><Image src={asset("/products/aros.jpg")} alt="Par de aros largos con cristales, sobre una hoja verde" fill sizes="(max-width: 640px) 66vw, (max-width: 1024px) 50vw, 35vw" className="object-cover saturate-[.78]" /></div>
            <div className="absolute bottom-0 right-0 h-[53%] w-[58%] overflow-hidden rounded-[1.5rem] border-8 border-sand shadow-soft"><Image src={asset("/products/anillos.jpg")} alt="Anillo con piedra central y detalles en dos tonos de metal" fill sizes="(max-width: 640px) 54vw, (max-width: 1024px) 40vw, 28vw" className="object-cover saturate-[.78]" style={{ objectPosition: "center 45%" }} /></div>
            <div className="wood-grain absolute right-3 top-10 flex h-20 w-20 items-center justify-center rounded-full shadow-soft sm:top-12 sm:h-28 sm:w-28"><BrandMark className="h-10 w-10 text-ivory sm:h-12 sm:w-12" /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
