"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle, AlertTriangle, CreditCard, Gavel, RefreshCw } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    icon: FileText,
    title: "Agreement to Terms",
    content: `By accessing or using TechCore Studio's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.

These terms apply to all visitors, users, and others who access or use our services.`
  },
  {
    icon: CheckCircle,
    title: "Services Description",
    content: `TechCore Studio provides software development services including:

Web Development: Custom websites, web applications, and e-commerce solutions
Mobile App Development: iOS and Android applications
UI/UX Design: User interface and experience design
AI Integration: Machine learning and artificial intelligence solutions
Cybersecurity: Security audits and protection services
Cloud Solutions: Cloud infrastructure and DevOps services

We reserve the right to modify or discontinue any service at any time.`
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: `Payment for services is governed by individual project contracts. General terms include:

Invoices are due within 14 days of issuance
Late payments subject to 1.5% monthly service charge
Project deposits are non-refundable once work begins
Milestone payments as specified in project agreements
All prices exclude applicable taxes unless stated otherwise

We accept bank transfers, credit cards, and PayPal.`
  },
  {
    icon: AlertTriangle,
    title: "Intellectual Property",
    content: `Ownership and rights:

Pre-existing Materials: We retain ownership of our pre-existing tools, frameworks, and methodologies.

Custom Work: Upon full payment, clients receive ownership of custom code and designs created specifically for their project.

Third-party Assets: Licensing of third-party libraries and assets remains with their respective owners.

Portfolio Rights: We reserve the right to display completed work in our portfolio unless otherwise agreed in writing.`
  },
  {
    icon: XCircle,
    title: "Limitation of Liability",
    content: `TechCore Studio shall not be liable for:

Indirect, incidental, special, or consequential damages
Loss of profits, revenue, data, or business opportunities
Damages exceeding the total amount paid for services in the 12 months preceding the claim
Service interruptions due to circumstances beyond our control
Third-party services or integrations

Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.`
  },
  {
    icon: RefreshCw,
    title: "Revisions and Support",
    content: `Project revisions and post-launch support:

Standard projects include 2 rounds of revisions
Additional revisions billed at our standard hourly rate
30-day warranty period for bug fixes post-launch
Ongoing support available via monthly retainer agreements
Emergency support available at premium rates

Response times vary based on support tier and issue severity.`
  },
  {
    icon: Gavel,
    title: "Governing Law",
    content: `These Terms shall be governed by and construed in accordance with:

For UK Clients: The laws of England and Wales
For US Clients: The laws of the State of New York
For EU Clients: The laws of the relevant EU member state

Any disputes shall be resolved through good faith negotiation, followed by mediation if necessary. Legal proceedings shall be brought in the courts of the applicable jurisdiction.

For UK clients, we are registered with the Information Commissioner's Office (ICO).`
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Terms of Service | TechCore Studio</title>
        <meta name="description" content="TechCore Studio Terms of Service - Rules and regulations for using our services." />
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
              <FileText size={16} className="text-[#5d67f2]" />
              <span className="text-sm text-[#5d67f2] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of <span className="text-[#5d67f2]">Service</span>
            </h1>
            <p className="text-gray-400">Last updated: January 1, 2026</p>
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-gray-500 text-sm"
          >
            <p>By using our services, you acknowledge that you have read and understood these Terms of Service.</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}