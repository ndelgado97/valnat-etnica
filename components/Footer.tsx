import { BrandMark } from "./BrandMark";
import { Wordmark } from "./Wordmark";
import { asset } from "@/lib/asset";
import { brand, nav, dev } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 border-b border-ivory/10 pb-12 md:grid-cols-12 md:gap-12 md:pb-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3"><BrandMark className="h-10 w-10 text-ivory" /><Wordmark className="h-4 w-auto text-ivory" /></div>
            <p className="mt-5 max-w-sm text-base font-light leading-relaxed text-sand/75 sm:mt-6">{brand.tagline}</p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide2 text-oat/70">Explora</h3>
            <ul className="mt-3 sm:mt-4">
              {nav.map((item) => <li key={item.href}><a href={item.href} className="focus-ring inline-flex min-h-[44px] items-center rounded-sm text-base font-light text-sand/80 transition-colors hover:text-ivory">{item.label}</a></li>)}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide2 text-oat/70">Encuéntranos</h3>
            <ul className="mt-3 text-base font-light text-sand/80 sm:mt-4">
              <li className="flex min-h-[36px] items-center">{brand.city}</li>
              <li><a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[44px] items-center rounded-sm transition-colors hover:text-ivory">WhatsApp {brand.whatsappDisplay}</a></li>
              <li><a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[44px] items-center rounded-sm transition-colors hover:text-ivory">{brand.instagramHandle}</a></li>
              <li><a href={brand.whatsappCatalog} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex min-h-[44px] items-center rounded-sm transition-colors hover:text-ivory">Catálogo de WhatsApp ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-8 lg:flex-row">
          <p className="text-center text-xs text-oat/60 lg:text-left">© {year} {brand.full}</p>
          <a href={dev.url} target="_blank" rel="noopener noreferrer" className="focus-ring group flex min-h-[44px] items-center gap-3 rounded-full border border-ivory/10 px-5 py-2.5 transition-colors hover:border-[#00c2e0]/40">
            <span className="text-[11px] font-medium uppercase tracking-wide2 text-oat/60 group-hover:text-oat">Desarrollado por</span>
            <img src={asset(dev.logo)} alt={dev.name} width={52} height={20} className="h-5 w-auto opacity-80 transition-opacity group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </footer>
  );
}
