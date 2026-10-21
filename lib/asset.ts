// Prefijo para los archivos de public/ (imágenes, logos).
//
// Next.js aplica basePath y assetPrefix a su propio bundle (_next/...), pero no
// al atributo src de next/image ni al de una <img> plana: ese prefijo hay que
// ponerlo a mano.
// https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
//
// En Railway el sitio vive en la raíz del dominio y NEXT_PUBLIC_BASE_PATH no
// existe, así que asset() devuelve la ruta tal cual. En el build de GitHub Pages
// next.config.mjs la define como /valnat-etnica.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${basePath}${path}`;
}
