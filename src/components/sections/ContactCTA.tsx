"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="relative pt-5 pb-13 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(93,103,242,0.1),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <div className="p-12 md:p-16 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prefer to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">
              Email?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Drop us a line at hello@techcore.studio and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="mailto:hello@techcore.studio">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(93, 103, 242, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-full font-semibold flex items-center gap-3 hover:from-[#4f57d9] hover:to-[#7c4ce6] transition-all duration-500 shadow-lg shadow-[#5d67f2]/25"
              >
                Email Us Directly
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#5d67f2]/50 transition-all duration-500 backdrop-blur-sm"
              >
                View Services
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}