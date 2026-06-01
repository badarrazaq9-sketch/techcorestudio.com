"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Key, Package, ExternalLink } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const licenses = [
  {
    name: "MIT License",
    projects: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
    description: "Permissive free software license allowing reuse with proper attribution."
  },
  {
    name: "Apache License 2.0",
    projects: ["TypeScript", "Node.js"],
    description: "Allows use, modification, and distribution with patent protection."
  },
  {
    name: "BSD License",
    projects: ["PostgreSQL", "FreeBSD tools"],
    description: "Minimal restrictions on redistribution."
  },
  {
    name: "GNU GPL v3",
    projects: ["GNU tools", "GCC"],
    description: "Copyleft license requiring derivative works to be open source."
  },
  {
    name: "Commercial Licenses",
    projects: ["Adobe Fonts", "Figma", "JetBrains IDEs"],
    description: "Proprietary software used under commercial agreements."
  },
  {
    name: "Custom/OSS",
    projects: ["Internal frameworks", "Custom libraries"],
    description: "Developed in-house or under bespoke licensing agreements."
  }
];

const assets = [
  { type: "Icons", source: "Lucide React", license: "ISC License" },
  { type: "Fonts", source: "Inter (Google Fonts)", license: "OFL 1.1" },
  { type: "Images", source: "Unsplash / Pexels", license: "Unsplash License / Pexels License" },
  { type: "3D Assets", source: "Internal / Custom", license: "Proprietary" }
];

export default function LicensesPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Licenses | TechCore Studio</title>
        <meta name="description" content="TechCore Studio - Open source licenses and third-party software attributions." />
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
              <Key size={16} className="text-[#5d67f2]" />
              <span className="text-sm text-[#5d67f2] font-medium">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Software <span className="text-[#5d67f2]">Licenses</span>
            </h1>
            <p className="text-gray-400">Open source attributions and third-party software</p>
          </motion.div>

          <div className="space-y-8">
            {/* Open Source */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#5d67f2]/10 flex items-center justify-center">
                  <Package size={20} className="text-[#5d67f2]" />
                </div>
                <h2 className="text-xl font-semibold text-white">Open Source Software</h2>
              </div>

              <div className="space-y-4">
                {licenses.map((license) => (
                  <div
                    key={license.name}
                    className="border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.1] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium text-sm">{license.name}</h3>
                      <span className="text-xs text-gray-500">{license.projects.length} projects</span>
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{license.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {license.projects.map((project) => (
                        <span
                          key={project}
                          className="px-2 py-1 bg-white/[0.03] border border-white/[0.06] rounded text-xs text-gray-400"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Assets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Assets & Resources</h2>
              <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.03] border-b border-white/[0.06]">
                      <th className="text-left text-gray-400 font-medium px-4 py-3">Type</th>
                      <th className="text-left text-gray-400 font-medium px-4 py-3">Source</th>
                      <th className="text-left text-gray-400 font-medium px-4 py-3">License</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assets.map((asset, index) => (
                      <tr
                        key={asset.type}
                        className={`border-b border-white/[0.04] ${index % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
                      >
                        <td className="text-white px-4 py-3">{asset.type}</td>
                        <td className="text-gray-400 px-4 py-3">{asset.source}</td>
                        <td className="text-gray-400 px-4 py-3">{asset.license}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 hover:border-[#5d67f2]/20 transition-all duration-500"
            >
              <h2 className="text-xl font-semibold text-white mb-4">License Compliance</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                TechCore Studio is committed to open source compliance. All third-party software 
                is used in accordance with its respective license terms. We acknowledge and thank 
                the open source community for their contributions.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you believe any software is being used in violation of its license, please 
                contact us immediately at legal@techcorestudio.com.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://opensource.org/licenses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#5d67f2] hover:text-[#8b5cf6] transition-colors text-sm"
            >
              Learn more about open source licenses
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}