// "use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";


const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcorestudio.com",
      logo: "https://techcorestudio.com/TechCoreStudio Logo-01.jpg",
      description:
        "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
      foundingDate: "2014",
      address: {
        "@type": "PostalAddress",
        streetAddress: "82a James Carter Road",
        addressLocality: "Mildenhall",
        addressRegion: "Suffolk",
        postalCode: "IP28 7DE",
        addressCountry: "GB",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-7828-704078",
          contactType: "sales",
          areaServed: "GB",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-212-555-0199",
          contactType: "sales",
          areaServed: "US",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://linkedin.com/company/techcore-studio",
        "https://twitter.com/techcorestudio",
      ],
    },
    {
      "@type": "WebSite",
      name: "TechCore Studio",
      url: "https://techcorestudio.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://techcorestudio.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://techcorestudio.com",
      url: "https://techcorestudio.com",
      name: "TechCore Studio | Premium Software House UK & USA",
      description:
        "Premium software house with offices in London, UK and New York, USA. Crafting digital excellence through innovative design and cutting-edge technology.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://techcorestudio.com",
      },
      about: {
        "@type": "Organization",
        "@id": "https://techcorestudio.com",
      },
    },
  ],
};


export default function HomePage() {
  return (
    <>
      <Navbar />
 <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <main>
        {/* 1. HOOK: Immediate value proposition */}
        <HeroSection />
        
        {/* 2. SOLUTION: What you offer */}
        <ServicesSection />
        
        {/* 3. DIFFERENTIATION: Why choose YOU */}
        <WhyDifferentSection />
        
        {/* 4. PROCESS: How it works — reduces anxiety */}
        <ProcessSection />
        
        {/* 5. SOCIAL PROOF: Others trust you */}
        <TestimonialsSection />
        
        {/* 6. CREDIBILITY: Who's behind this */}
        <AboutSection />
        
        {/* 7. OBJECTION HANDLING: FAQ removes barriers */}
        <FAQSection />
        
        {/* 8. CONVERSION: Clear CTA to capture lead */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}