// Contenido del sitio. Todos los datos de marca y contacto son los publicados
// por VALNAT Étnica en su Linktree oficial (https://linktr.ee/valnat.joyasetnicas).
export const brand = {
  name: "VALNAT",
  full: "VALNAT Étnica",
  tagline:
    "VALNAT Étnica, desde 2022 complementando de manera perfecta tu outfit.",
  taglineShort: "Complementa tu outfit",
  since: "Desde 2022",
  instagram: "https://www.instagram.com/valnat.etnica/",
  instagramHandle: "@valnat.etnica",
  instagramAlt: "https://instagram.com/valnat.joyasetnicas",
  linktree: "https://linktr.ee/valnat.joyasetnicas",
  whatsapp: "56990477122",
  whatsappDisplay: "+56 9 9047 7122",
  whatsappCatalog: "https://wa.me/c/56990477122",
  phoneE164: "+56990477122",
  city: "Limache, Región de Valparaíso",
  mapsQuery: "Limache, Región de Valparaíso, Chile",
};

export function waLink(message: string) {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Category = "Aros" | "Anillos" | "Collares" | "Accesorios";

export type Product = {
  id: string;
  name: Category;
  shape: "aros" | "anillo" | "collar" | "accesorio";
  description: string;
  image?: string;
  /** Descripción de la foto para lectores de pantalla. */
  alt?: string;
  imagePosition?: string;
};

export const categories: Category[] = [
  "Aros",
  "Anillos",
  "Collares",
  "Accesorios",
];

// Líneas a nivel de categoría, no modelos: la marca no publica catálogo con
// nombres ni precios, así que no se inventa ninguno.
export const products: Product[] = [
  {
    id: "aros",
    name: "Aros",
    shape: "aros",
    description:
      "Aros con presencia, de línea étnica, para cambiar un look completo con un solo detalle.",
    image: "/products/aros.jpg",
    alt: "Par de aros largos con cristales y una piedra azul al centro",
  },
  {
    id: "anillos",
    name: "Anillos",
    shape: "anillo",
    description:
      "Anillos para usar solos o combinados, pensados para acompañarte todos los días.",
    image: "/products/anillos.jpg",
    alt: "Anillo con piedra central y detalles en dos tonos de metal",
    imagePosition: "center 45%",
  },
  {
    id: "collares",
    name: "Collares",
    shape: "collar",
    description:
      "Collares y colgantes que enmarcan el escote y ordenan el resto del outfit.",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    shape: "accesorio",
    description:
      "Complementos de inspiración étnica para sumar textura y color a lo que ya usas.",
  },
];

export const howToBuy = [
  {
    step: "01",
    title: "Mira el catálogo",
    text: "Revisa las líneas de aros, anillos, collares y accesorios, o abre el catálogo de WhatsApp de la marca.",
  },
  {
    step: "02",
    title: "Conversemos por WhatsApp",
    text: "Cada botón abre el chat con la línea que te interesa. Confirmamos disponibilidad, detalles y valor.",
  },
  {
    step: "03",
    title: "Coordinamos la entrega",
    text: "Acordamos el pago y la forma de entrega por el mismo chat, siempre directo con la marca.",
  },
];

export const values = [
  {
    title: "Selección con identidad",
    text: "Piezas elegidas por su textura, su carácter y lo que suman a lo que ya tienes en el closet.",
  },
  {
    title: "Atención directa",
    text: "Te responde la marca por WhatsApp, sin intermediarios ni carros de compra impersonales.",
  },
  {
    title: "Catálogo en WhatsApp",
    text: "El catálogo vive en WhatsApp Business: lo abres, eliges y consultas en la misma conversación.",
  },
  {
    title: "Desde Limache",
    text: "VALNAT Étnica nace y trabaja en Limache, Región de Valparaíso, desde 2022.",
  },
];

export const nav = [
  { label: "Colecciones", href: "#catalogo" },
  { label: "Cómo comprar", href: "#como-comprar" },
  { label: "La marca", href: "#historia" },
  { label: "Ubicación", href: "#ubicacion" },
];

export const dev = {
  name: "Data-strategy",
  url: "https://data-strategy.ai",
  logo: "/brand/logo-data-strategy.svg",
};
