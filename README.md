# VALNAT Étnica — Landing page (muestra)

Landing page de una sola página para **VALNAT Étnica**, marca de joyería y accesorios de inspiración étnica de Limache, Región de Valparaíso.

> **Esto es una muestra comercial, no un sitio autorizado por la marca.** Se construyó para presentarle la propuesta al dueño. Todo el contenido de marca y contacto proviene del [Linktree público de VALNAT Étnica](https://linktr.ee/valnat.joyasetnicas); no se inventaron datos. Por eso el sitio está marcado como `noindex` en `app/layout.tsx`: hay que cambiarlo a `{ index: true, follow: true }` sólo cuando la marca apruebe la publicación.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS 3
- Tipografías vía `next/font`: Cormorant Garamond (display) + Inter (texto)
- Sin dependencias de UI: las animaciones usan `IntersectionObserver` y los iconos son SVG en línea

## Cómo correrla

```bash
npm install
npm run dev      # desarrollo -> http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build (respeta la variable PORT)
```

Node 20 (`.nvmrc` y `engines` en `package.json`).

## Dónde se edita el contenido

Todo el contenido vive en **`lib/content.ts`**:

- `brand` — nombre, bio oficial, WhatsApp, catálogo de WhatsApp Business, Instagram, Linktree y comuna.
- `products` — las cuatro líneas del catálogo (Aros, Anillos, Collares, Accesorios). Son categorías, no modelos: la marca no publica nombres ni precios, así que el sitio no los muestra.
- `howToBuy`, `values`, `nav` — textos de las secciones.
- `dev` — crédito de desarrollo del footer.

`lib/site.ts` resuelve la URL pública para la metadata y el JSON-LD: usa `NEXT_PUBLIC_SITE_URL` si existe, si no `RAILWAY_PUBLIC_DOMAIN`, y en local cae a `http://localhost:3000`.

### Compra por WhatsApp

No hay carro de compras. Cada botón abre WhatsApp con un mensaje prellenado que nombra la línea consultada, y el bloque de catálogo apunta al catálogo real de WhatsApp Business. El número se define una sola vez en `brand.whatsapp`.

## Fotografías: material temporal

Las tres imágenes de `public/products/` son **stock con licencia Creative Commons, no piezas de VALNAT**:

- `hero-sombrero.jpg` — [Shopify Burst, "Woman in Summer Fashion"](https://www.shopify.com/stock-photos/photos/woman-in-summer-fashion)
- `aros.jpg`, `anillos.jpg` — [Unsplash](https://unsplash.com/s/photos/jewelry)

Se sirven con `next/image` y recomprimidas (las tres bajo 300 KB). `public/og.jpg` es un recorte 1200×630 de la foto del hero para compartir el enlace.

**Antes de publicar en firme hay que reemplazarlas por fotografías propias de la marca** y confirmar el mix real del catálogo. Las categorías sin foto se dibujan con line-art SVG (`components/ProductVisual.tsx`).

## Deploy en Railway

El proyecto corre como aplicación con servidor, no como export estático: `next.config.mjs` no define `output`, así que Nixpacks detecta Next.js solo y no hace falta Dockerfile.

1. Conectar el repositorio en Railway.
2. Build: `npm run build` · Start: `npm start` (Railway inyecta `PORT` y `next start` lo respeta).
3. Opcional: definir `NEXT_PUBLIC_SITE_URL` con el dominio final.

## Pendientes de validar con la marca

Envíos, horarios de atención, dirección, precios y el mix exacto del catálogo **no están verificados** y por eso no aparecen en el sitio. Están anotados para confirmarlos con el dueño antes de cualquier publicación definitiva.
