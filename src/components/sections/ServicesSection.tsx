"use client";

import { useState } from "react";
import { Code, Palette, Zap, Globe, Cpu, Shield } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

// ─── Service Schema Data (inline for this section) ───
const servicesSchemaData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development",
    description:
      "Enterprise-grade web applications built with Next.js, React, and modern architectures. Scalable, fast, and SEO-optimized for global reach.",
    url: "https://techcore.studio/services/web-development",
    provider: {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Web Development",
    offers: {
      "@type": "Offer",
      price: "15000",
      priceCurrency: "GBP",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design",
    description:
      "User-centered design systems that blend aesthetics with functionality. From wireframes to polished, accessible interfaces.",
    url: "https://techcore.studio/services/ui-ux-design",
    provider: {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "UI/UX Design",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Performance Optimization",
    description:
      "Lightning-fast load times and optimized Core Web Vitals. We make every millisecond count for your global user base.",
    url: "https://techcore.studio/services/performance",
    provider: {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Performance Optimization",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Strategy",
    description:
      "Data-driven growth strategies for UK & USA markets. SEO, content architecture, and conversion optimization.",
    url: "https://techcore.studio/services/digital-strategy",
    provider: {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Digital Strategy",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Integration",
    description:
      "Smart automation and AI-powered features. From intelligent chatbots to predictive analytics and ML APIs.",
    url: "https://techcore.studio/services/ai-integration",
    provider: {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "AI Integration",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Security & Compliance",
    description:
      "Enterprise-grade security implementations. Authentication, encryption, and GDPR/SOC2 compliance-ready architectures.",
    url: "https://techcore.studio/services/security",
    provider: {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    serviceType: "Security",
  },
];

// ─── Breadcrumb Schema for this page section ───
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://techcore.studio",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://techcore.studio/#services",
    },
  ],
};

const services = [
  {
    icon: <Code size={22} />,
    title: "Web Development",
    description:
      "Enterprise-grade web applications built with Next.js, React, and modern architectures. Scalable, fast, and SEO-optimized for global reach.",
    features: ["Next.js & React", "API Integration", "Cloud Native"],
    color: "indigo" as const,
  },
  {
    icon: <Palette size={22} />,
    title: "UI/UX Design",
    description:
      "User-centered design systems that blend aesthetics with functionality. From wireframes to polished, accessible interfaces.",
    features: ["Design Systems", "Prototyping", "User Research"],
    color: "purple" as const,
  },
  {
    icon: <Zap size={22} />,
    title: "Performance",
    description:
      "Lightning-fast load times and optimized Core Web Vitals. We make every millisecond count for your global user base.",
    features: ["Core Web Vitals", "CDN Optimization", "Lazy Loading"],
    color: "amber" as const,
  },
  {
    icon: <Globe size={22} />,
    title: "Digital Strategy",
    description:
      "Data-driven growth strategies for UK & USA markets. SEO, content architecture, and conversion optimization.",
    features: ["SEO Strategy", "Content Architecture", "CRO"],
    color: "emerald" as const,
  },
  {
    icon: <Cpu size={22} />,
    title: "AI Integration",
    description:
      "Smart automation and AI-powered features. From intelligent chatbots to predictive analytics and ML APIs.",
    features: ["Machine Learning", "NLP Solutions", "Predictive Analytics"],
    color: "rose" as const,
  },
  {
    icon: <Shield size={22} />,
    title: "Security",
    description:
      "Enterprise-grade security implementations. Authentication, encryption, and GDPR/SOC2 compliance-ready architectures.",
    features: ["GDPR Compliant", "SOC2 Ready", "End-to-End Encryption"],
    color: "cyan" as const,
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative pt-32 pb-16 overflow-hidden">
      {/* ═══════════════════════════════════════════════
          SCHEMA INJECTION - Add these <script> tags
          ═══════════════════════════════════════════════ */}

      {/* Service Schemas (one per service) */}
      {servicesSchemaData.map((schema, index) => (
        <script
          key={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* Breadcrumb Schema for this section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ═══════════════════════════════════════════════ */}

      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,103,242,0.04),transparent_50%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#5d67f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="What We Deliver"
          title={
            <>
              Services built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
                global scale
              </span>
            </>
          }
          description="End-to-end digital solutions crafted with precision and powered by cutting-edge technology, delivered from our UK & USA offices to clients worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}