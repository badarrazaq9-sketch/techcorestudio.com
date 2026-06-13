"use client";

import React from "react";
import Head from "next/head";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import PricingHero from "@/components/sections/PricingHero";
import PricingPackages from "@/components/sections/PricingPackages";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";


const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://techcorestudio.com/pricing#webpage",
      url: "https://techcorestudio.com/pricing",
      name: "Pricing | TechCore Studio - UK & USA Software House",
      description: "Transparent pricing for TechCore Studio services. Choose a package that fits your stage of growth with no hidden fees.",
      isPartOf: {
        "@id": "https://techcorestudio.com#website"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://techcorestudio.com#organization",
      name: "TechCore Studio",
      alternateName: "TechCore Studio - UK & USA Software House",
      url: "https://techcorestudio.com",
      logo: {
        "@type": "ImageObject",
        url: "https://techcorestudio.com/logo.png",
        width: 512,
        height: 512
      },
      description: "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
      foundingDate: "2014",
      address: {
        "@type": "PostalAddress",
        streetAddress: "82a James Carter Road",
        addressLocality: "Mildenhall",
        addressRegion: "Suffolk",
        postalCode: "IP28 7DE",
        addressCountry: "GB"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-7828-704078",
          contactType: "customer service",
          availableLanguage: ["English"],
          areaServed: ["GB", "US"]
        }
      ],
      sameAs: [
        "https://www.linkedin.com/company/techcorestudio",
        "https://twitter.com/techcorestudio",
        "https://github.com/techcorestudio"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://techcorestudio.com#website",
      url: "https://techcorestudio.com",
      name: "TechCore Studio",
      publisher: {
        "@id": "https://techcorestudio.com#organization"
      }
    }
  ]
};

export default function PricingPage() {
  return (
    <div className="min-h-screen text-white selection:bg-brand-blue/30 bg-background">
      <Head>
        <title>Pricing | TechCore Studio - UK & USA Software House</title>
        <meta
          name="description"
          content="Transparent pricing for TechCore Studio services. Choose a package that fits your stage of growth with no hidden fees."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />
      <PricingHero />
      <PricingPackages />
      <ContactSection />

      <Footer />
    </div>
  );
}