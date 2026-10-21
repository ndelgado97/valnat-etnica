import { Reveal } from "./Reveal";
import { BrandMark } from "./BrandMark";
import { brand, waLink } from "@/lib/content";

export function CTA() {
  return (
    <section className="wood-grain relative overflow-hidden py-20 text-ivory sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-walnut/30 to-espresso/85" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-oat/10 sm:h-[500px] sm:w-[500px]" aria-hidden />
      <Reveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <BrandMark className="mx-auto h-12 w-12 text-ivory sm:h-14 sm:w-14" />
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-wide2 text-oat sm:mt-7">Tu próxima pieza está aquí</p>
        <h2 className="mt-4 font-display text-[2.6rem] font-medium leading-[1] tracking-tight sm:mt-5 sm:text-7xl sm:leading-[.98]">Viste tu historia.<br /><span className="italic text-oat">Complementa tu outfit.</span></h2>
        <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-sand/85 sm:mt-6">Conversemos. Te ayudamos a elegir entre las colecciones y coordinamos tu compra de forma directa y cercana.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row">
          <a href={waLink("Hola VALNAT, quiero ayuda para elegir mi próxima pieza.")} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-xs font-semibold uppercase tracking-wide2 text-white transition-transform hover:scale-[1.02]">Comprar por WhatsApp</a>
          <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full border border-ivory/35 px-8 py-4 text-xs font-semibold uppercase tracking-wide2 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10">Seguir en Instagram</a>
        </div>
      </Reveal>
    </section>
  );
}
