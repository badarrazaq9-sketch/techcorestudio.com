"use client";

import React from "react";
import Head from "next/head";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import ServicesPage from "./service";  // ← import from same folder
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Page() {
  // Schema.org structured data for Services page
const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://techcorestudio.com/services#service",
      "name": "Software Development & Digital Services",
      "description": "Premium digital services including Web Development, UI/UX Design, AI Integration, and Cybersecurity. UK & USA-based software house.",
      "provider": {
        "@type": "Organization",
        "@id": "https://techcorestudio.com#organization",
        "name": "TechCore Studio",
        "url": "https://techcorestudio.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://techcorestudio.com/logo.png"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "82a James Carter Road",
          "addressLocality": "Mildenhall",
          "addressRegion": "Suffolk",
          "postalCode": "IP28 7DE",
          "addressCountry": "GB"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44-7828-704078",
          "contactType": "customer service",
          "availableLanguage": ["English"],
          "areaServed": ["GB", "US"]
        }
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "serviceType": [
        "Web Development",
        "UI/UX Design",
        "AI Integration",
        "Cybersecurity"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "TechCore Studio Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development",
              "description": "Custom web applications and websites built with modern technologies."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "description": "User-centered design solutions for digital products."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Integration",
              "description": "Machine learning and AI solutions for business automation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Security audits and protection for digital assets."
            }
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://techcorestudio.com#organization",
      "name": "TechCore Studio",
      "alternateName": "TechCore Studio - UK & USA Software House",
      "url": "https://techcorestudio.com",
      "sameAs": [
        "https://www.linkedin.com/company/techcorestudio",
        "https://twitter.com/techcorestudio"
      ],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "52.3435",
          "longitude": "0.5089"
        },
        "geoRadius": "10000",
        "description": "UK and USA"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://techcorestudio.com/services#webpage",
      "url": "https://techcorestudio.com/services",
      "name": "Services | TechCore Studio - UK & USA Software House",
      "isPartOf": {
        "@id": "https://techcorestudio.com#website"
      },
      "about": {
        "@id": "https://techcorestudio.com#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://techcorestudio.com/og-services.jpg"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://techcorestudio.com#website",
      "url": "https://techcorestudio.com",
      "name": "TechCore Studio",
      "publisher": {
        "@id": "https://techcorestudio.com#organization"
      }
    }
  ]
};

  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Services | TechCore Studio - UK & USA Software House</title>
        <meta
          name="description"
          content="Premium digital services: Web Development, UI/UX Design, AI Integration, Cybersecurity. UK & USA-based software house."
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
          }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />
      <ServicesPage />
      <ProcessSection />
      <WhyDifferentSection />
      <TestimonialsSection />
      <AboutSection />
       <ContactSection />
       <FAQSection />
       <Footer />
    </div>
  );
}