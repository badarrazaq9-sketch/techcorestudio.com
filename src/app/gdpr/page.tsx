"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Scale, UserCheck, Database, Globe, Mail, FileCheck } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const sections = [
  {
    icon: Scale,
    title: "GDPR Compliance Statement",
    content: `TechCore Studio is fully committed to compliance with the General Data Protection Regulation (GDPR) for all our clients and users within the European Union and European Economic Area.

As a UK and USA-based software house, we adhere to:
- UK GDPR (post-Brexit data protection law)
- EU GDPR (Regulation 2016/679)
- Data Protection Act 2018

We process personal data lawfully, fairly, and transparently.`
  },
  {
    icon: UserCheck,
    title: "Your Rights Under GDPR",
    content: `As a data subject, you have the following rights:

Right to be Informed: Clear information about how we use your data
Right of Access: Request a copy of your personal data
Right to Rectification: Correct inaccurate or incomplete data
Right to Erasure: Request deletion of your data ("right to be forgotten")
Right to Restrict Processing: Limit how we use your data
Right to Data Portability: Receive data in a machine-readable format
Right to Object: Object to processing based on legitimate interests
Rights Related to Automated Decision-Making: Including profiling

To exercise any of these rights, email: gdpr@techcorestudio.com`
  },
  {
    icon: Database,
    title: "Data Processing Activities",
    content: `We act as both Data Controller and Data Processor depending on the context:

As Data Controller (our website/marketing):
- Collecting contact information via forms
- Processing newsletter subscriptions
- Analyzing website usage

As Data Processor (client projects):
- Processing data on behalf of our clients
- Hosting applications and databases
- Providing cloud infrastructure services

All processing is governed by Data Processing Agreements (DPAs) where applicable.`
  },
  {
    icon: Globe,
    title: "International Data Transfers",
    content: `We may transfer personal data outside the UK and EEA:

To the USA: Under the UK-US Data Bridge and EU-US Data Privacy Framework
To other countries: Using Standard Contractual Clauses (SCCs) approved by the European Commission

All transfers include appropriate safeguards to ensure your data remains protected according to GDPR standards.

Our sub-processors include cloud providers (AWS, Google Cloud, Azure) all certified under relevant frameworks.`
  },
  {
    icon: FileCheck,
    title: "Data Protection Measures",
    content: `Technical Measures:
- Encryption at rest (AES-256) and in transit (TLS 1.3)
- Regular penetration testing and vulnerability scans
- Multi-factor authentication (MFA)
- Automated backup and disaster recovery

Organizational Measures:
- Data Protection Officer (DPO) appointment
- Regular staff training on data protection
- Incident response plan (72-hour breach notification)
- Privacy by Design and Default principles

We conduct Data Protection Impact Assessments (DPIAs) for high-risk processing activities.`
  },
  {
    icon: Mail,
    title: "Contact Our DPO",
    content: `Data Protection Officer:
Name: [DPO Name]
Email: dpo@techcorestudio.com
Address: 82a James Carter Road, Mildenhall, Suffolk, IP28 7DE, UK

Response Time: We aim to respond to all GDPR-related requests within 72 hours and fully resolve them within 30 days.

Supervisory Authority: You have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK or your local data protection authority.`
  }
];

const gdprSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://techcorestudio.com/gdpr#webpage",
      url: "https://techcorestudio.com/gdpr",
      name: "GDPR Compliance | TechCore Studio",
      isPartOf: {
        "@id": "https://techcorestudio.com#website"
      },
      about: {
        "@id": "https://techcorestudio.com#organization"
      },
      description: "TechCore Studio GDPR Compliance - Your data protection rights and our privacy commitments under EU and UK law.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://techcorestudio.com/og-gdpr.jpg"
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
            name: "GDPR Compliance",
            item: "https://techcorestudio.com/gdpr"
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

export default function GDPRPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>GDPR Compliance | TechCore Studio</title>
        <meta name="description" content="TechCore Studio GDPR Compliance - Your data protection rights and our privacy commitments." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gdprSchema) }}
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
              <Scale size={16} className="text-[#5d67f2]" />
              <span className="text-sm text-[#5d67f2] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GDPR <span className="text-[#5d67f2]">Compliance</span>
            </h1>
            <p className="text-gray-400">Your data protection rights under EU and UK law</p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#5d67f2]/10 flex items-center justify-center">
                    <section.icon size={20} className="text-[#5d67f2]" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                <div className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GDPR Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5d67f2]/20 to-[#8b5cf6]/20 flex items-center justify-center">
                <FileCheck size={24} className="text-[#5d67f2]" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">GDPR Compliant</p>
                <p className="text-gray-500 text-xs">Certified data protection practices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}