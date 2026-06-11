"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export default function HomePortfolio() {
  return (
    <section id="portfolio" className="relative pt-5 pb-13 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#5d67f2]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d67f2]/10 border border-[#5d67f2]/20 rounded-full mb-6"
          >
            <ExternalLink size={14} className="text-[#5d67f2]" />
            <span className="text-sm text-[#5d67f2] font-medium">Portfolio</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Latest <span className="text-[#5d67f2]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Discover how we&apos;ve helped businesses transform their digital presence
            with cutting-edge solutions.
          </p>
        </motion.div>

        {/* Reuse PortfolioGrid with homepage settings */}
        <PortfolioGrid
          showStats={false}
          showTitle={false}
          maxProjects={6}
          columns={3}
        />

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(93, 103, 242, 0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/[0.03] border border-white/[0.08] hover:border-[#5d67f2]/50 text-white rounded-full text-sm font-medium transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}