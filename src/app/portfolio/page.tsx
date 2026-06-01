"use client";

import React from "react";
import Head from "next/head";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioHero from "@/components/sections/PortfolioHero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ContactSection from "@/components/sections/ContactSection";

export default function PortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://techcorestudio.com/portfolio#webpage",
        "url": "https://techcorestudio.com/portfolio",
        "name": "Portfolio | TechCore Studio - UK & USA Software House",
        "isPartOf": { "@id": "https://techcorestudio.com#website" },
        "about": { "@id": "https://techcorestudio.com#organization" },
        "description": "Explore our portfolio of web development, mobile apps, UI/UX design, branding, and AI integration projects.",
        "primaryImageOfPage": { "@type": "ImageObject", "url": "https://techcorestudio.com/og-portfolio.jpg" },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position:": 1, "name": "Home", "item": "https://techcorestudio.com" },
            { "@type": "ListItem", "position:": 2, "name": "Portfolio", "item": "https://techcorestudio.com/portfolio" }
          ]
        }
      }
    ]
  };

  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Portfolio | TechCore Studio - UK & USA Software House</title>
        <meta name="description" content="Explore our portfolio of web development, mobile apps, UI/UX design, branding, and AI integration projects. UK & USA-based software house." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(portfolioSchema).replace(/</g, '\\u003c'),
          }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />
      <PortfolioHero />
      <PortfolioGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}