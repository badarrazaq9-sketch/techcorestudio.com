"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    icon: <Target size={24} />,
    title: "Our Mission",
    description: "To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and competitive advantage in the global market.",
    color: "indigo",
  },
  {
    icon: <Heart size={24} />,
    title: "Our Values",
    description: "Excellence, transparency, and client success are at the core of everything we do. We believe in building lasting partnerships.",
    color: "purple",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Our Vision",
    description: "To be the world's most trusted software partner, known for delivering transformative technology that shapes the future of industries.",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  indigo: { bg: "bg-[#5d67f2]/10", border: "border-[#5d67f2]/20", text: "text-[#7b85ff]", gradient: "from-[#5d67f2] to-[#8b5cf6]" },
  purple: { bg: "bg-[#8b5cf6]/10", border: "border-[#8b5cf6]/20", text: "text-[#a78bfa]", gradient: "from-[#8b5cf6] to-[#ec4899]" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", gradient: "from-cyan-400 to-blue-500" },
};

export default function MissionValues() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,103,242,0.04),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Who We Are"
          title={
            <>
              Driven by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
                Purpose
              </span>
            </>
          }
          description="Our foundation is built on a commitment to excellence and a passion for innovation that drives every project we undertake."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16">
          {values.map((item, index) => {
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`group relative p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:border-opacity-50 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}