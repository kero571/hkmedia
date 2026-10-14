import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import Process from "@/components/sections/Process";
import Why from "@/components/sections/Why";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/data/content";
import Photos from "@/components/sections/Photos";
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "ar",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    alternateName: SITE.arName,
    url: SITE.url,
    image: `${SITE.url}/profile.jpg`,
    description: SITE.description,
    email: SITE.email,
    areaServed: "EG",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات التصوير والإنتاج",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.text },
      })),
    },
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <Works />
        <Photos />
        <Process />
        <Why />
        <About />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
