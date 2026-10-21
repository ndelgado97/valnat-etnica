import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { brand, howToBuy, waLink } from "@/lib/content";

export function HowToBuy() {
  return (
    <section id="como-comprar" className="relative overflow-hidden bg-ivory py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading index="02" eyebrow="Cómo comprar" title={<>Cercano, simple<br /><span className="italic text-walnut">y personalizado</span></>} description="Sin carros impersonales. Conversas directo con la marca, confirmas cada detalle y coordinan tu compra por WhatsApp." />
        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {howToBuy.map((item, i) => (
            <Reveal key={item.step} delay={i * 110}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-linen p-7 transition-all hover:-translate-y-1 hover:shadow-card sm:p-9">
                <span className="font-display text-6xl font-semibold text-walnut/15">{item.step}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-base font-light leading-relaxed text-muted">{item.text}</p>
                <span className="absolute right-7 top-8 text-leather/40" aria-hidden>✦</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-9 flex flex-col justify-center gap-3 sm:mt-11 sm:flex-row">
          <a href={waLink("Hola VALNAT, quiero que me ayuden a elegir una pieza.")} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#25D366] px-8 py-4 text-xs font-semibold uppercase tracking-wide2 text-white shadow-lg shadow-[#25D366]/15 transition-transform hover:scale-[1.02]">Comenzar por WhatsApp</a>
          <a href={brand.whatsappCatalog} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full border border-walnut/35 px-8 py-4 text-xs font-medium uppercase tracking-wide2 text-ink transition-colors hover:border-walnut hover:bg-sand/40">Ver catálogo ↗</a>
        </Reveal>
      </div>
    </section>
  );
}
