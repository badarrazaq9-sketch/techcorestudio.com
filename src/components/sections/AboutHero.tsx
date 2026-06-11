"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MapPin, Sparkles, ArrowRight, Users, CheckCircle2, Star, Award } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "150+", label: "Global Clients", icon: <Users size={16} /> },
  { value: "300+", label: "Projects Delivered", icon: <CheckCircle2 size={16} /> },
  { value: "99%", label: "Client Satisfaction", icon: <Star size={16} /> },
  { value: "12+", label: "Years Experience", icon: <Award size={16} /> },
];

const locations = [
  { city: "London", country: "UK", flag: "🇬🇧" },
  { city: "New York", country: "USA", flag: "🇺🇸" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "TechCore Studio",
      url: "https://techcore.studio",
      logo: "https://techcore.studio/TechCoreStudio Logo-01.jpg",
      description: "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
      foundingDate: "2014",
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "London",
          addressCountry: "GB",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "New York",
          addressCountry: "US",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-20-7946-0958",
          contactType: "sales",
          areaServed: "GB",
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-212-555-0199",
          contactType: "sales",
          areaServed: "US",
        },
      ],
      sameAs: [
        "https://linkedin.com/company/techcore-studio",
        "https://twitter.com/techcorestudio",
      ],
    },
    {
      "@type": "WebSite",
      name: "TechCore Studio",
      url: "https://techcore.studio",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://techcore.studio/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "AboutPage",
      "@id": "https://techcore.studio/about",
      url: "https://techcore.studio/about",
      name: "About TechCore Studio",
      description: "Learn about TechCore Studio, a premium software house with offices in London and New York. We transform complex challenges into elegant, scalable digital solutions.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://techcore.studio",
      },
      mainEntity: {
        "@type": "Organization",
        "@id": "https://techcore.studio",
      },
    },
  ],
};

export default function AboutHero() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Floating gradient orbs with mouse parallax */}
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

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        style={{ opacity: smoothOpacity, y: smoothY, scale }}
      >
        {/* Location Badge */}
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
                  {i < locations.length - 1 && (
                    <span className="text-gray-600 mx-1">•</span>
                  )}
                </span>
              ))}
            </span>
          </div>
          <span className="w-px h-4 bg-white/10" />
          <span className="flex items-center gap-1.5 text-[#5d67f2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5d67f2] animate-pulse" />
            About Us
          </span>
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5d67f2]/10 to-[#8b5cf6]/10 border border-[#5d67f2]/20 text-sm text-[#8b9dff] mb-10"
        >
          <Sparkles size={14} />
          <span>Our Story & Mission</span>
          <Sparkles size={14} />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="block"
            >
              We Build{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                  Tomorrow
                </span>
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.4 }}
                >
                  <motion.path
                    d="M2 8C75 2 225 2 298 8"
                    stroke="url(#aboutGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="aboutGradient" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#5d67f2" />
                      <stop offset="0.5" stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          TechCore Studio is a premium software house with offices in London and New York.
          We transform complex challenges into elegant, scalable digital solutions that drive global growth.
        </motion.p>

        {/* CTA Buttons */}
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
              Work With Us
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
              Our Services
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl overflow-hidden max-w-3xl mx-auto backdrop-blur-sm border border-white/[0.06]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#08080e]/60 backdrop-blur-md p-6 text-center group hover:bg-white/[0.04] transition-all duration-500 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center mb-2 text-[#5d67f2] group-hover:text-[#8b5cf6] transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5d67f2] group-hover:to-[#8b5cf6] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}