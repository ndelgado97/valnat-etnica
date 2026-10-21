import Image from "next/image";
import { ProductVisual } from "./ProductVisual";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { brand, products, waLink, type Product } from "@/lib/content";

export function Products() {
  return (
    <section id="catalogo" className="paper-grain relative bg-linen py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <SectionHeading index="01" eyebrow="Colecciones" title={<>Encuentra una pieza<br /><span className="italic text-walnut">que hable de ti</span></>} description="Aros, anillos, collares y accesorios de inspiración étnica, elegidos para complementar tu outfit." />
          <Reveal delay={120} className="shrink-0">
            <a href={brand.whatsappCatalog} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] items-center justify-center rounded-full border border-walnut/35 px-7 py-4 text-xs font-medium uppercase tracking-wide2 text-ink transition-colors hover:border-walnut hover:bg-ivory">
              Ver catálogo completo ↗
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => <Reveal key={product.id} delay={(i % 4) * 80}><ProductCard product={product} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const message = `Hola VALNAT, quiero ver la línea de ${product.name}. ¿Me cuentas qué tienes disponible y los valores?`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line/80 bg-ivory shadow-[0_8px_30px_rgba(45,33,26,.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-oat hover:shadow-card">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw"
            className="object-cover saturate-[.78] transition-transform duration-700 group-hover:scale-[1.035]"
            style={{ objectPosition: product.imagePosition ?? "center" }}
          />
        ) : (
          <ProductVisual product={product} />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-3xl font-semibold leading-none text-ink">{product.name}</h3>
        <p className="mt-3 flex-1 text-base font-light leading-relaxed text-muted">{product.description}</p>
        <div className="mt-6 border-t border-line/70 pt-5">
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-full bg-ink px-3 py-3.5 text-xs font-semibold uppercase tracking-wide2 text-ivory transition-colors hover:bg-walnut sm:px-5">
            <WhatsAppIcon /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function WhatsAppIcon() { return <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden><path d="M12.04 2a9.9 9.9 0 0 0-8.58 14.85L2 22l5.25-1.38a9.9 9.9 0 1 0 4.79-18.62Zm4.52 11.86c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-2.32-1.16-3.84-3.53-3.95-3.69-.14-.25-.01-.38.11-.51.31-.31.48-.62.62-.84.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.76-.01-1.19.21-1.56.62-.86.94-1.06 2.77.15 4.56.12.17 1.75 2.67 4.23 3.74 2.48 1.08 2.48.72 2.93.68.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" /></svg>;}
