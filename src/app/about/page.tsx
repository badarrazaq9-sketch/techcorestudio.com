"use client";

import React from "react";
import Head from "next/head";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/sections/AboutHero";
import StatsRow from "@/components/sections/StatsRow";
import MissionValues from "@/components/sections/MissionValues";
import GlobalPresence from "@/components/sections/GlobalPresence";

import Footer from "@/components/layout/Footer";
import AboutCTA from "@/components/sections/AboutCTA";
import ContactSection from "@/components/sections/ContactSection";
import WhyDifferentSection from "@/components/sections/WhyDifferentSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";

export default function AboutPage() {
  // Schema.org structured data for About page
 const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://techcorestudio.com/about#webpage",
      "url": "https://techcorestudio.com/about",
      "name": "About Us | TechCore Studio - UK & USA Software House",
      "isPartOf": {
        "@id": "https://techcorestudio.com#website"
      },
      "about": {
        "@id": "https://techcorestudio.com#organization"
      },
      "description": "Learn about TechCore Studio - Premium UK & USA-based software house with 12+ years of experience.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://techcorestudio.com/og-about.jpg"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://techcorestudio.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://techcorestudio.com/about"
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://techcorestudio.com/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Premium UK & USA-based software house with 12+ years of experience delivering web development, UI/UX design, AI integration, and cybersecurity solutions.",
      "foundingDate": "2013",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "50-200"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "82a James Carter Road",
        "addressLocality": "Mildenhall",
        "addressRegion": "Suffolk",
        "postalCode": "IP28 7DE",
        "addressCountry": "GB"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+44-7828-704078",
          "contactType": "customer service",
          "availableLanguage": ["English"],
          "areaServed": ["GB", "US"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/techcorestudio",
        "https://twitter.com/techcorestudio",
        "https://github.com/techcorestudio"
      ],
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
      "knowsAbout": [
        "Web Development",
        "UI/UX Design",
        "AI Integration",
        "Cybersecurity",
        "Software Engineering",
        "Digital Transformation"
      ]
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
        <title>About Us | TechCore Studio - UK & USA Software House</title>
        <meta name="description" content="Learn about TechCore Studio - Premium UK & USA-based software house with 12+ years of experience." />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aboutSchema).replace(/</g, '\\u003c'),
          }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />
      <AboutHero />
      {/* <StatsRow /> */}
          <AboutCTA />
      {/* <MissionValues /> */}
             <WhyDifferentSection />
             <ProcessSection />
              <AboutSection />
     
      <GlobalPresence />
    
       <ContactSection />
      <Footer />
    </div>
  );
}