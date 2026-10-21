import { brand, waLink } from "@/lib/content";

export function SocialDock() {
  return (
    <div
      className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6"
      aria-label="Contacto rápido"
    >
      <SocialLink
        href={brand.instagram}
        label="Instagram"
        wrapperClassName="hidden sm:flex"
        className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] shadow-[0_10px_28px_rgba(225,48,108,.28)]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" /></svg>
      </SocialLink>
      <SocialLink
        href={waLink("Hola VALNAT, vengo desde la web y quiero hacer una consulta.")}
        label="WhatsApp"
        className="bg-[#25D366] shadow-[0_10px_28px_rgba(37,211,102,.28)]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden><path d="M12.04 2a9.9 9.9 0 0 0-8.58 14.85L2 22l5.25-1.38a9.9 9.9 0 1 0 4.79-18.62Zm0 18.02a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31A8.23 8.23 0 1 1 12.04 20Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-2.32-1.16-3.84-3.53-3.95-3.69-.14-.25-.01-.38.11-.51.31-.31.48-.62.62-.84.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42-.76-.01-1.19.21-1.56.62-.86.94-1.06 2.77.15 4.56.12.17 1.75 2.67 4.23 3.74 2.48 1.08 2.48.72 2.93.68.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" /></svg>
      </SocialLink>
    </div>
  );
}

function SocialLink({ href, label, className, wrapperClassName = "flex", children }: { href: string; label: string; className: string; wrapperClassName?: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className={`group relative ${wrapperClassName} h-14 w-14 items-center justify-center rounded-full text-white ring-1 ring-white/25 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${className}`}>{children}<span className="pointer-events-none absolute right-[4.25rem] hidden whitespace-nowrap rounded-full bg-ink px-3 py-2 text-[11px] font-semibold uppercase tracking-wide2 text-ivory opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">{label}</span></a>;
}
