import Image from "next/image";
import { Reveal } from "./Reveal";
import { asset } from "@/lib/asset";
import { brand, categories } from "@/lib/content";

export function Featured() {
  return (
    <section className="relative overflow-hidden bg-espresso py-16 text-ivory sm:py-24 lg:py-32">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-walnut/15" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:gap-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-[1.5rem] shadow-2xl shadow-black/25">
            <Image
              src={asset("/products/hero-sombrero.jpg")}
              alt="Mujer con sombrero de ala ancha y collar fino, imagen editorial en tonos tierra"
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 480px"
              className="object-cover"
              style={{ objectPosition: "center 36%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mb-5 flex items-center gap-4"><span className="h-px w-12 bg-oat/50" /><span className="text-[11px] font-medium uppercase tracking-wide2 text-oat">Catálogo</span></div>
          <h2 className="font-display text-[2.6rem] font-medium leading-[1] tracking-tight text-ivory sm:text-6xl lg:text-7xl">El catálogo vive<br /><span className="italic text-oat">en WhatsApp</span></h2>
          <p className="mt-5 max-w-lg text-base font-light leading-relaxed text-sand/85 sm:mt-6 sm:text-lg">{brand.tagline}</p>
          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3.5 border-y border-oat/20 py-6 text-base text-sand/85 sm:mt-9 sm:py-7">
            {categories.map((item) => <span key={item} className="flex items-center gap-2.5"><span className="text-oat">✦</span>{item}</span>)}
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a href={brand.whatsappCatalog} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full bg-ivory px-7 py-4 text-xs font-semibold uppercase tracking-wide2 text-ink transition-colors hover:bg-oat">Abrir catálogo ↗</a>
            <a href="#catalogo" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full border border-oat/35 px-7 py-4 text-xs font-semibold uppercase tracking-wide2 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10">Ver colecciones</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
