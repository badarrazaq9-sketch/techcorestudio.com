"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play, MapPin, Sparkles, Layers, CheckCircle2, Star, TrendingUp } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import GradientButton from "@/components/ui/GradientButton";

const stats = [
  { value: "50+", label: "Tech Stack", icon: <Layers size={16} /> },
  { value: "24/7", label: "Support", icon: <CheckCircle2 size={16} /> },
  { value: "100%", label: "Custom Solutions", icon: <Star size={16} /> },
  { value: "2x", label: "Faster Delivery", icon: <TrendingUp size={16} /> },
];

export default function ServicesHero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(53,64,255,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
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
        className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-28"
        style={{ opacity: smoothOpacity, y: smoothY, scale }}
      >
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 mb-8 backdrop-blur-sm"
        >
          <MapPin size={14} className="text-[#5d67f2]" />
          <span className="text-gray-400">London, UK • New York, USA</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="flex items-center gap-1.5 text-[#5d67f2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5d67f2] animate-pulse" />
            Our Services
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
          <span>End-to-End Digital Solutions</span>
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
              Solutions That
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="block mt-2"
            >
              Drive{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                  Growth
                </span>
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.8 }}
                >
                  <motion.path
                    d="M2 8C75 2 225 2 298 8"
                    stroke="url(#growthGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="300" y2="0">
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
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          From concept to deployment, we deliver full-stack digital solutions
          tailored to your business needs. Scalable, secure, and built for the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <GradientButton>Get a Quote</GradientButton>
          <GradientButton variant="secondary">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#5d67f2]/20 transition-colors mr-2">
              <Play size={14} className="ml-0.5" />
            </div>
            Watch Our Process
          </GradientButton>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl overflow-hidden max-w-3xl mx-auto backdrop-blur-sm border border-white/[0.06]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={1.7 + i * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>

      <ScrollIndicator label="Explore Services" />
    </section>
  );
}