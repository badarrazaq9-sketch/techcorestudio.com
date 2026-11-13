import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Services",
  description: "Logo design, branding, ecommerce, apps, custom software, SEO, lead generation, video editing and ebook services. UK and USA based TechCore Studio.",
  alternates: { canonical: "https://techcorestudio.com/services" },
  openGraph: {
    title: "Services | TechCore Studio - UK & USA Software House",
    description: "Logo design, branding, ecommerce, apps, custom software, SEO, lead generation, video editing and ebook services. UK and USA based TechCore Studio.",
    url: "https://techcorestudio.com/services",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | TechCore Studio - UK & USA Software House",
    description: "Logo design, branding, ecommerce, apps, custom software, SEO, lead generation, video editing and ebook services. UK and USA based TechCore Studio.",
  },
};

export default function Page() {
  // Schema.org structured data for Services page
const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://techcorestudio.com/services#service",
      "name": "Software Development & Digital Services",
      "description": "Premium digital services from TechCore Studio: web development, UI/UX design, performance optimisation, digital strategy, AI and machine learning, cybersecurity, plus logo design, branding, ecommerce, apps, custom software, marketing, lead generation, SEO, video editing and ebook services. UK and USA based software house.",
      "provider": {
        "@type": "Organization",
        "@id": "https://techcorestudio.com#organization",
        "name": "TechCore Studio",
        "url": "https://techcorestudio.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://techcorestudio.com/techcore-studio-logo.png"
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
          "availableLanguage": [
            "English"
          ],
          "areaServed": [
            "GB",
            "US"
          ]
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
        "Performance Optimization",
        "Digital Strategy",
        "AI & Machine Learning",
        "Cybersecurity",
        "eBook Services",
        "Logo Design",
        "3D Logo Design",
        "Mascot Logo Design",
        "Branding",
        "E-commerce Development",
        "Mobile App Development",
        "Custom Development",
        "Social Media Marketing",
        "Lead Generation",
        "SEO",
        "Video Editing"
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
              "description": "Enterprise-grade web applications built with Next.js, React, Node.js, and cloud-native architectures. From MVPs to complex SaaS platforms."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design",
              "description": "Complete design systems from research to pixel-perfect interfaces. We craft experiences that convert visitors into loyal users."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Performance Optimization",
              "description": "Lightning-fast load times and optimized Core Web Vitals. We audit, optimize, and monitor your application performance 24/7."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Strategy",
              "description": "Data-driven strategies for UK & USA markets. SEO architecture, content strategy, and conversion rate optimization."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Machine Learning",
              "description": "Smart automation and AI-powered features. From intelligent chatbots to predictive analytics and custom ML models."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cybersecurity",
              "description": "Bank-grade security implementations. Authentication, encryption, penetration testing, and GDPR/SOC2 compliance."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "eBook Services",
              "description": "Professional eBook formatting, cover design, and publishing support. From finished manuscript to a polished Kindle, EPUB, and PDF book ready to sell."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Logo Design",
              "description": "Professional, timeless logos and complete brand identities for small businesses, startups, and local brands — from logo to color palette, typography, and brand guidelines."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "3D Logo Design",
              "description": "Stunning 3D logos with real depth, lighting, and texture that make your brand unforgettable on websites, social media, video intros, and signage."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mascot Logo Design",
              "description": "Unique, memorable mascot characters that become the friendly face of your brand — emotional connection, brand loyalty, and a personality that stands out."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Branding",
              "description": "Clean, professional and consistent brand identities that help local businesses stand out, charge better prices, and win more jobs."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce Development",
              "description": "User-friendly e-commerce platforms that make it simple to sell products online, handle orders, and grow revenue without technical headaches."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development",
              "description": "Fast, reliable mobile apps for iOS and Android that help businesses take bookings, sell products, manage orders, and connect with customers."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Development",
              "description": "Custom software — web applications, dashboards, portals, and automations — that fits your exact process and gives you back hours every week."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing",
              "description": "Engaging social media content and targeted ads on Facebook & Instagram so local customers see you, trust you, and call or book you directly."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Generation",
              "description": "Ready-to-buy customers delivered to your business using Meta ads, Google ads, and organic methods. Qualified leads that turn into paying jobs."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "SEO",
              "description": "Rank higher on Google so people find you first when they need your service. More visibility means more calls, bookings, and jobs."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Video Editing",
              "description": "Short-form ads, reels, YouTube videos, and product content — fast cuts, strong hooks, clean sound, and platform-optimized edits that drive action."
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
        "https://www.linkedin.com/company/techcorestudio/",
        "https://www.instagram.com/techcorestudio/"
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
        "url": "https://techcorestudio.com/techcore-studio-logo.png"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />

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