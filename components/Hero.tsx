import Image from "next/image";
import { BrandMark } from "./BrandMark";
import { asset } from "@/lib/asset";
import { brand, waLink } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="paper-grain relative overflow-hidden bg-ivory pt-[6.5rem] sm:pt-32 lg:min-h-[100svh] lg:pt-28"
    >
      <div className="mx-auto grid max-w-[1500px] lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[48%_52%]">
        <div className="relative z-10 flex items-center px-5 pb-7 sm:px-8 sm:pb-12 lg:px-14 lg:py-14 xl:px-20">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4 animate-fade-up sm:mb-6">
              <span className="h-px w-10 bg-leather sm:w-12" />
              <span className="text-[11px] font-medium uppercase tracking-wide2 text-walnut">
                {brand.since} · Limache
              </span>
            </div>

            <h1
              className="font-display text-[2.2rem] font-medium leading-[0.94] tracking-[-0.03em] text-ink animate-fade-up min-[360px]:text-[2.85rem] sm:text-7xl sm:leading-[0.92] sm:tracking-[-0.035em] xl:text-[6.7rem]"
              style={{ animationDelay: "80ms" }}
            >
              Piezas con alma,
              <br />
              <span className="italic text-walnut">estilo con raíz.</span>
            </h1>

            <p
              className="mt-5 max-w-lg text-base font-light leading-relaxed text-muted animate-fade-up sm:mt-7 sm:text-lg"
              style={{ animationDelay: "170ms" }}
            >
              Aros, anillos, collares y accesorios de inspiración étnica para
              complementar tu outfit. Desde Limache.
            </p>

            <div
              className="mt-6 flex flex-col gap-3 animate-fade-up sm:mt-9 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "250ms" }}
            >
              <a
                href={waLink(
                  "Hola VALNAT, vengo desde la web y quiero conocer sus piezas."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#25D366] whitespace-nowrap px-5 py-4 sm:px-7 text-[11px] min-[360px]:text-xs font-semibold uppercase tracking-wide2 text-white shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon /> Comprar por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="focus-ring group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full border border-walnut/35 whitespace-nowrap px-5 py-4 sm:px-7 text-[11px] min-[360px]:text-xs font-medium uppercase tracking-wide2 text-ink transition-colors hover:border-walnut hover:bg-sand/40"
              >
                Ver colecciones{" "}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[560px] lg:min-h-0">
          <Image
            src={asset("/products/hero-sombrero.jpg")}
            alt="Mujer con sombrero de ala ancha, collar fino y pulsera, en tonos tierra a contraluz"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
            style={{ objectPosition: "center 32%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
          <div className="wood-grain absolute left-0 top-0 h-full w-2.5" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-10 sm:left-10 sm:right-24">
            <div className="max-w-[70%] rounded-2xl border border-white/25 bg-ivory/90 p-4 shadow-soft backdrop-blur-xl sm:max-w-xs sm:p-5">
              <div className="flex items-center gap-3">
                <BrandMark className="h-8 w-8 shrink-0 text-ink sm:h-9 sm:w-9" />
                <div>
                  <p className="font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                    {brand.full}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase leading-snug tracking-wide2 text-walnut">
                    {brand.taglineShort}
                  </p>
                </div>
              </div>
            </div>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hidden min-h-[44px] items-center rounded-full border border-white/40 bg-ink/60 px-5 py-3 text-xs font-medium uppercase tracking-wide2 text-white backdrop-blur-lg transition-colors hover:bg-ink sm:inline-flex"
            >
              Ver Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.58 14.85L2 22l5.25-1.38a9.9 9.9 0 1 0 4.79-18.62Zm4.52 11.86c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-2.32-1.16-3.84-3.53-3.95-3.69-.14-.25-.01-.38.11-.51.31-.31.48-.62.62-.84.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.76-.01-1.19.21-1.56.62-.86.94-1.06 2.77.15 4.56.12.17 1.75 2.67 4.23 3.74 2.48 1.08 2.48.72 2.93.68.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
