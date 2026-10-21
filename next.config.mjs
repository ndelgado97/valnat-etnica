// Ruta definitiva: Railway (servidor Next.js). Sin variables, la config es la de siempre.
// Ruta provisional: GitHub Pages (export estático en el subpath /valnat-etnica).
// El bloque de export se activa sólo con GITHUB_PAGES=true (script `build:pages`),
// para que `npm run build` —el que usa Railway— no cambie de comportamiento.
const isPages = process.env.GITHUB_PAGES === "true";

// Project page: el sitio se sirve desde https://ndelgado97.github.io/valnat-etnica.
const basePath = "/valnat-etnica";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isPages && {
    // Genera HTML/CSS/JS plano en out/, sin servidor.
    output: "export",
    // Reescribe las rutas del bundle propio de Next (_next/...).
    basePath,
    assetPrefix: `${basePath}/`,
    // El optimizador de next/image necesita servidor; en export no existe.
    images: { unoptimized: true },
    // Cada ruta se emite como <ruta>/index.html, sin depender de que Pages
    // resuelva URLs sin extensión.
    trailingSlash: true,
    // basePath no alcanza al src de las imágenes de public/: lo aplica asset()
    // (lib/asset.ts) con este valor. Única fuente del prefijo.
    env: { NEXT_PUBLIC_BASE_PATH: basePath },
  }),
};

export default nextConfig;
