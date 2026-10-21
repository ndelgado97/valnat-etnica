"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./BrandMark";
import { Wordmark } from "./Wordmark";
import { brand, nav, waLink } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`overflow-hidden bg-espresso text-ivory transition-all duration-700 ${scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-wide2">
          <span className="hidden sm:inline">Desde Limache</span>
          <span className="hidden text-oat/50 sm:inline">✦</span>
          <span>Compra directa por WhatsApp</span>
        </div>
      </div>

      <div className={`transition-all duration-500 ${scrolled ? "border-b border-line/70 bg-ivory/90 py-2 shadow-sm backdrop-blur-xl sm:py-3" : "bg-ivory/85 py-2 backdrop-blur-md sm:py-4"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="focus-ring group -mx-2 flex min-h-[44px] items-center gap-3 rounded-full px-2" aria-label="VALNAT Étnica, inicio">
            <BrandMark className="h-8 w-8 text-ink transition-transform duration-700 group-hover:rotate-[15deg]" />
            <Wordmark className="h-4 w-auto text-ink" />
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="focus-ring group relative flex min-h-[44px] items-center rounded-sm px-1 text-xs font-medium uppercase tracking-wide2 text-muted transition-colors hover:text-ink">
                {item.label}
                <span className="absolute bottom-2.5 left-1 h-px w-0 bg-walnut transition-all duration-500 group-hover:w-[calc(100%-0.5rem)]" />
              </a>
            ))}
          </nav>

          <a href={waLink("Hola VALNAT, vengo desde la web y quiero consultar por sus piezas.")} target="_blank" rel="noopener noreferrer" className="focus-ring hidden min-h-[44px] items-center rounded-full bg-ink px-6 py-3 text-xs font-medium uppercase tracking-wide2 text-ivory transition-colors hover:bg-walnut md:inline-flex">
            Comprar por WhatsApp
          </a>

          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full md:hidden"
          >
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div id="menu-movil" className={`overflow-hidden border-b border-line bg-ivory/95 backdrop-blur-xl transition-[max-height] duration-500 md:hidden ${open ? "max-h-[420px]" : "max-h-0"}`}>
        <nav className="flex flex-col px-5 py-3" aria-label="Navegación móvil">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring flex min-h-[48px] items-center border-b border-line/70 text-xs font-medium uppercase tracking-wide2 text-muted">{item.label}</a>
          ))}
          <a href={waLink("Hola VALNAT, quiero conocer sus piezas.")} target="_blank" rel="noopener noreferrer" className="focus-ring mt-4 flex min-h-[48px] items-center justify-center rounded-full bg-[#25D366] px-5 text-xs font-semibold uppercase tracking-wide2 text-white">Comprar por WhatsApp</a>
          <a href={brand.whatsappCatalog} target="_blank" rel="noopener noreferrer" className="focus-ring mb-2 mt-2.5 flex min-h-[48px] items-center justify-center rounded-full border border-walnut/35 px-5 text-xs font-medium uppercase tracking-wide2 text-ink">Ver catálogo</a>
        </nav>
      </div>
    </header>
  );
}
