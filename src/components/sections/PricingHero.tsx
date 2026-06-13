"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const locations = [
  { city: "London", country: "UK", flag: "🇬🇧" },
  { city: "New York", country: "USA", flag: "🇺🇸" },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://techcore.studio/pricing",
      url: "https://techcore.studio/pricing",
      name: "Pricing | TechCore Studio",
      description: "Transparent pricing for TechCore Studio services. Choose a package that fits your stage of growth with no hidden fees.",
      isPartOf: { "@type": "WebSite", "@id": "https://techcore.studio" },
    },
    {
      "@type": "Organization",
      "@id": "https://techcore.studio#organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
      logo: "https://techcore.studio/logo.png",
      description: "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
    },
  ],
};

export default function PricingHero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <motion.div
        className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(53,64,255,0.1) 0%, transparent 70%)",
          x: mousePos.x * 0.8,
          y: mousePos.y * 0.8,
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
          x: mousePos.x * -0.6,
          y: mousePos.y * -0.6,
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 60%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ opacity: smoothOpacity, y: smoothY, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 mb-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#5d67f2]" />
            <span className="flex items-center gap-1.5">
              {locations.map((loc, i) => (
                <span key={loc.city} className="flex items-center gap-1">
                  <span>{loc.flag}</span>
                  <span className="text-gray-400">{loc.city}</span>
                  {i < locations.length - 1 && <span className="text-gray-600 mx-1">•</span>}
                </span>
              ))}
            </span>
          </div>
          <span className="w-px h-4 bg-white/10" />
          <span className="flex items-center gap-1.5 text-[#5d67f2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5d67f2] animate-pulse" />
            Transparent Pricing
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5d67f2]/10 to-[#8b5cf6]/10 border border-[#5d67f2]/20 text-sm text-[#8b9dff] mb-10"
        >
          <Sparkles size={14} />
          <span>Choose the right package for your stage</span>
          <Sparkles size={14} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="block"
            >
              Transparent
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="block mt-2 relative"
            >
              <span className="bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                Pricing
              </span>
              <motion.svg
                className="absolute -bottom-3 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2 }}
              >
                <motion.path
                  d="M2 8C75 2 225 2 298 8"
                  stroke="url(#pricingGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="pricingGradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#5d67f2" />
                    <stop offset="0.5" stopColor="#8b5cf6" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Choose a package that fits your stage of growth. No hidden fees.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 40px rgba(93, 103, 242, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-full font-semibold flex items-center gap-3 hover:from-[#4f57d9] hover:to-[#7c4ce6] transition-all duration-500 shadow-lg shadow-[#5d67f2]/25"
            >
              Talk To Sales
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </motion.button>
          </Link>

          <Link href="/services">
            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#5d67f2]/50 transition-all duration-500 flex items-center gap-3 backdrop-blur-sm"
            >
              Explore Services
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <span className="text-xs text-gray-600 uppercase tracking-[0.2em]">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-[#5d67f2]"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
