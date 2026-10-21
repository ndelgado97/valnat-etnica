// URL pública del sitio. En Railway se resuelve con RAILWAY_PUBLIC_DOMAIN;
// se puede forzar con NEXT_PUBLIC_SITE_URL cuando haya dominio propio.
// Sólo se usa en componentes de servidor (metadata y JSON-LD).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.RAILWAY_PUBLIC_DOMAIN
    ? `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`
    : "http://localhost:3000");
