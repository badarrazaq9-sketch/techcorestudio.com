"use client";

import { motion } from "framer-motion";
import { CircuitBoard, TrendingUp, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: <CircuitBoard size={24} />,
    value: "50+",
    label: "Expert Engineers",
    color: "text-[#5d67f2]",
    borderColor: "hover:border-[#5d67f2]/30",
  },
  {
    icon: <TrendingUp size={24} />,
    value: "98%",
    label: "Retention Rate",
    color: "text-[#8b5cf6]",
    borderColor: "hover:border-[#8b5cf6]/30",
  },
  {
    icon: <Globe size={24} />,
    value: "25+",
    label: "Countries Served",
    color: "text-[#ec4899]",
    borderColor: "hover:border-[#ec4899]/30",
  },
  {
    icon: <Award size={24} />,
    value: "15+",
    label: "Industry Awards",
    color: "text-[#06b6d4]",
    borderColor: "hover:border-[#06b6d4]/30",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About TechCore Studio",
  description: "UK & USA software house with 12+ years experience.",
  mainEntity: {
    "@type": "Organization",
    name: "TechCore Studio",
    foundingDate: "2014",
    numberOfEmployees: "50+",
    award: "15+ Industry Awards",
  },
};


const tags = ["Enterprise Solutions", "SaaS Products", "E-Commerce", "FinTech"];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5d67f2]/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#5d67f2] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              UK & USA Based{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">
                Software House
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              TechCore Studio is a premium software development company with
              offices in London and South Carolina. We specialize in building scalable,
              high-performance digital products for enterprises worldwide.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team of expert engineers and designers combine technical
              excellence with creative innovation to deliver solutions that drive
              measurable business growth.
            </p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 hover:border-[#5d67f2]/30 hover:text-white transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] ${stat.borderColor} transition-all duration-300`}
                  >
                    <div className={`${stat.color} mb-3`}>{stat.icon}</div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}