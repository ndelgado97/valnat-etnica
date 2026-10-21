import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Featured } from "@/components/Featured";
import { Products } from "@/components/Products";
import { HowToBuy } from "@/components/HowToBuy";
import { BrandStory } from "@/components/BrandStory";
import { Values } from "@/components/Values";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { SocialDock } from "@/components/SocialDock";
import { brand } from "@/lib/content";
import { siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: brand.full,
  description:
    "Aros, anillos, collares y accesorios de inspiración étnica en Limache, Región de Valparaíso. Compra directa por WhatsApp. Desde 2022.",
  slogan: brand.tagline,
  url: siteUrl,
  image: `${siteUrl}/og.jpg`,
  telephone: brand.phoneE164,
  foundingDate: "2022",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Limache",
    addressRegion: "Valparaíso",
    addressCountry: "CL",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Región de Valparaíso, Chile",
  },
  sameAs: [brand.instagram, brand.instagramAlt, brand.linktree],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <Products />
        <HowToBuy />
        <BrandStory />
        <Values />
        <Location />
        <CTA />
      </main>
      <Footer />
      <SocialDock />
    </>
  );
}
