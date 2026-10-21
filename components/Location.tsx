import { Reveal } from "./Reveal";
import { brand } from "@/lib/content";

export function Location() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(brand.mapsQuery)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(brand.mapsQuery)}`;

  return (
    <section id="ubicacion" className="bg-ivory py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-line bg-linen shadow-soft lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="p-7 sm:p-12 lg:p-14">
            <div className="mb-5 flex items-center gap-4"><span className="h-px w-12 bg-leather" /><span className="text-[11px] font-semibold uppercase tracking-wide2 text-walnut">04 — Dónde estamos</span></div>
            <h2 className="font-display text-[2.6rem] font-medium leading-[1] text-ink sm:text-6xl sm:leading-[.98]">Estamos<br /><span className="italic text-walnut">en Limache</span></h2>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-muted sm:mt-6">{brand.full} trabaja desde Limache, Región de Valparaíso. Escríbenos por WhatsApp y coordinamos tu compra directo con la marca.</p>
            <dl className="mt-8 space-y-4 sm:mt-9 sm:space-y-5">
              <Info label="Zona" value={brand.city} />
              <Info label="WhatsApp" value={brand.whatsappDisplay} href={`https://wa.me/${brand.whatsapp}`} />
              <Info label="Instagram" value={brand.instagramHandle} href={brand.instagram} />
            </dl>
            <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="focus-ring mt-8 inline-flex min-h-[48px] items-center rounded-full bg-ink px-7 py-4 text-xs font-semibold uppercase tracking-wide2 text-ivory transition-colors hover:bg-walnut sm:mt-9">Abrir en Google Maps ↗</a>
          </Reveal>
          <Reveal delay={100} className="min-h-[260px] bg-sand sm:min-h-[430px] lg:min-h-full">
            <iframe title={`Ubicación de ${brand.full} en Limache`} src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[260px] w-full grayscale-[.25] contrast-[.95] sm:min-h-[430px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="border-b border-line pb-3">
      <dt className="text-[11px] font-semibold uppercase tracking-wide2 text-walnut">{label}</dt>
      <dd className="mt-1 text-base font-light text-ink">
        {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[44px] items-center rounded-sm transition-colors hover:text-walnut">{value}</a> : <span className="inline-flex min-h-[32px] items-center">{value}</span>}
      </dd>
    </div>
  );
}
