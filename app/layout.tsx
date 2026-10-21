import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "VALNAT Étnica, desde 2022 complementando de manera perfecta tu outfit. Aros, anillos, collares y accesorios de inspiración étnica desde Limache, Región de Valparaíso. Compra directa por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VALNAT Étnica — Joyería y accesorios étnicos | Limache, Chile",
    template: "%s · VALNAT Étnica",
  },
  description,
  keywords: [
    "VALNAT",
    "VALNAT Étnica",
    "joyería étnica",
    "aros",
    "anillos",
    "collares",
    "accesorios étnicos",
    "Limache",
    "Región de Valparaíso",
  ],
  authors: [{ name: "VALNAT Étnica" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    title: "VALNAT Étnica — Joyería y accesorios étnicos en Limache",
    description,
    siteName: "VALNAT Étnica",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "VALNAT Étnica — joyería y accesorios de inspiración étnica, Limache",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VALNAT Étnica — Joyería y accesorios étnicos en Limache",
    description,
    images: ["/og.jpg"],
  },
  // Muestra comercial sin autorización de la marca: no se indexa.
  // Cambiar a { index: true, follow: true } cuando el cliente apruebe.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1c1916",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-CL" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-ivory font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
