"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Cookie, Info, Settings, Check, X } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const cookieTypes = [
  {
    name: "Essential Cookies",
    required: true,
    description: "Necessary for the website to function properly. These cannot be disabled.",
    examples: "Session cookies, authentication cookies, security cookies"
  },
  {
    name: "Analytics Cookies",
    required: false,
    description: "Help us understand how visitors interact with our website.",
    examples: "Google Analytics, Hotjar, visitor tracking"
  },
  {
    name: "Functional Cookies",
    required: false,
    description: "Enable enhanced functionality and personalization.",
    examples: "Language preferences, theme settings, form auto-fill"
  },
  {
    name: "Marketing Cookies",
    required: false,
    description: "Used to deliver relevant advertisements and track campaign performance.",
    examples: "Facebook Pixel, LinkedIn Insight Tag, Google Ads"
  }
];

const cookieSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://techcorestudio.com/cookie-policy#webpage",
      url: "https://techcorestudio.com/cookie-policy",
      name: "Cookie Policy | TechCore Studio",
      isPartOf: {
        "@id": "https://techcorestudio.com#website"
      },
      about: {
        "@id": "https://techcorestudio.com#organization"
      },
      description: "TechCore Studio Cookie Policy - How we use cookies and similar technologies.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://techcorestudio.com/og-cookie.jpg"
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://techcorestudio.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cookie Policy",
            item: "https://techcorestudio.com/cookie-policy"
          }
        ]
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

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Cookie Policy | TechCore Studio</title>
        <meta name="description" content="TechCore Studio Cookie Policy - How we use cookies and similar technologies." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieSchema) }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d67f2]/10 border border-[#5d67f2]/20 rounded-full mb-6">
              <Cookie size={16} className="text-[#5d67f2]" />
              <span className="text-sm text-[#5d67f2] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie <span className="text-[#5d67f2]">Policy</span>
            </h1>
            <p className="text-gray-400">Last updated: January 1, 2026</p>
          </motion.div>

          <div className="space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#5d67f2]/10 flex items-center justify-center">
                  <Info size={20} className="text-[#5d67f2]" />
                </div>
                <h2 className="text-xl font-semibold text-white">What Are Cookies?</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing site traffic, and personalizing content. We also use similar technologies 
                like local storage and pixel tags.
              </p>
            </motion.div>

            {/* Cookie Types Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#5d67f2]/10 flex items-center justify-center">
                  <Settings size={20} className="text-[#5d67f2]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Types of Cookies We Use</h2>
              </div>

              <div className="space-y-4">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.name}
                    className="border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.1] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{cookie.name}</h3>
                      {cookie.required ? (
                        <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                          <Check size={12} /> Required
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs text-gray-400 bg-white/[0.03] px-2 py-1 rounded-full">
                          <X size={12} /> Optional
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{cookie.description}</p>
                    <p className="text-gray-600 text-xs">Examples: {cookie.examples}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* How to Manage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#5d67f2] mt-1">•</span>
                  See what cookies you have and delete them individually
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5d67f2] mt-1">•</span>
                  Block third-party cookies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5d67f2] mt-1">•</span>
                  Block cookies from specific sites
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5d67f2] mt-1">•</span>
                  Block all cookies from being set
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#5d67f2] mt-1">•</span>
                  Delete all cookies when you close your browser
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-4">
                Note: Disabling certain cookies may affect the functionality of our website.
              </p>
            </motion.div>

            {/* Third Party */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use services from third parties that may set cookies on your device:
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {["Google Analytics", "Hotjar", "LinkedIn Insight", "Facebook Pixel", "Intercom", "Stripe"].map((service) => (
                  <div key={service} className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-gray-400">
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-500 text-sm"
          >
            <p>For questions about our Cookie Policy, contact privacy@techcorestudio.com</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}