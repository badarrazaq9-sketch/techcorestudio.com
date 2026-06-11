"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Server, Share2, Clock, Trash2, Mail } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    icon: Shield,
    title: "Introduction",
    content: `TechCore Studio ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.

We operate in compliance with the UK Data Protection Act 2018, the UK GDPR, and the EU GDPR for our operations in the United States and European Union.`
  },
  {
    icon: Eye,
    title: "Information We Collect",
    content: `We may collect the following types of information:

Personal Information: Name, email address, phone number, company name, and billing information when you contact us or sign up for our services.

Technical Data: IP address, browser type, operating system, device information, and cookies.

Usage Data: Pages visited, time spent on our website, referring URLs, and interaction patterns.

Project Data: Information related to your projects, requirements, and communications with our team.`
  },
  {
    icon: Server,
    title: "How We Use Your Information",
    content: `We use your information for the following purposes:

To provide and maintain our services
To communicate with you about projects, updates, and support
To process payments and send invoices
To improve our website and services
To comply with legal obligations
To send marketing communications (with your consent)
To prevent fraud and ensure security`
  },
  {
    icon: Share2,
    title: "Information Sharing",
    content: `We do not sell your personal information. We may share your data with:

Service Providers: Third-party vendors who assist in operating our business (hosting, payment processing, analytics).

Legal Requirements: When required by law, court order, or government regulation.

Business Transfers: In connection with a merger, acquisition, or sale of assets.

With Your Consent: When you explicitly authorize us to share your information.`
  },
  {
    icon: Lock,
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your data:

Encryption of data in transit (TLS/SSL) and at rest
Regular security audits and vulnerability assessments
Access controls and authentication mechanisms
Employee training on data protection
Incident response procedures

However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.`
  },
  {
    icon: Clock,
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy:

Active accounts: Duration of your relationship with us plus 7 years for tax/legal purposes
Marketing data: Until you unsubscribe or request deletion
Analytics data: 26 months
Project files: As specified in your service agreement

You may request deletion of your data at any time, subject to legal retention requirements.`
  },
  {
    icon: Trash2,
    title: "Your Rights",
    content: `Under UK and EU data protection laws, you have the following rights:

Right to Access: Request copies of your personal data
Right to Rectification: Request correction of inaccurate data
Right to Erasure: Request deletion of your data ("right to be forgotten")
Right to Restrict Processing: Request limitation of data processing
Right to Data Portability: Receive data in a structured format
Right to Object: Object to processing based on legitimate interests
Right to Withdraw Consent: Withdraw consent at any time

To exercise these rights, contact us at privacy@techcorestudio.com`
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact:

TechCore Studio
Email: privacy@techcorestudio.com
Address: London, UK & New York, USA

Data Protection Officer: dpo@techcorestudio.com

We will respond to all requests within 30 days.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Privacy Policy | TechCore Studio</title>
        <meta name="description" content="TechCore Studio Privacy Policy - How we collect, use, and protect your personal data." />
      </Head>

      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d67f2]/10 border border-[#5d67f2]/20 rounded-full mb-6">
              <Shield size={16} className="text-[#5d67f2]" />
              <span className="text-sm text-[#5d67f2] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-[#5d67f2]">Policy</span>
            </h1>
            <p className="text-gray-400">Last updated: January 1, 2026</p>
          </motion.div>

          {/* Content */}
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

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-500 text-sm"
          >
            <p>This Privacy Policy is subject to change. We will notify you of any significant updates.</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}