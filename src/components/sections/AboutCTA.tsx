"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import GradientButton from "@/components/ui/GradientButton";

export default function AboutCTA() {
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
            Ready to Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">
              Together?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Let's build something extraordinary. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <GradientButton icon>Start a Project</GradientButton>
            </Link>
            <Link href="/services">
              <GradientButton variant="secondary">Our Services</GradientButton>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}