"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Globe,
  Shield,
  Clock,
  Heart,
  Sparkles,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

const differentiators = [
  {
    icon: <Globe size={24} />,
    title: "UK & USA Presence",
    description:
      "Dual-headquartered in London and South Carolina, we offer timezone-friendly collaboration and local market expertise for both European and North American clients.",
    stat: "2 Offices",
    gradient: "from-[#5d67f2] to-[#8b5cf6]",
    bg: "bg-[#5d67f2]/10",
    border: "border-[#5d67f2]/20",
    text: "text-[#7b85ff]",
  },
  {
    icon: <Users size={24} />,
    title: "Senior-Only Team",
    description:
      "Every engineer on your project has 8+ years of experience. No juniors, no outsourcing — just senior talent dedicated to your success.",
    stat: "50+ Experts",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    bg: "bg-[#8b5cf6]/10",
    border: "border-[#8b5cf6]/20",
    text: "text-[#a78bfa]",
  },
  {
    icon: <Zap size={24} />,
    title: "Speed Without Compromise",
    description:
      "Our proprietary development framework delivers projects 40% faster than industry average, without cutting corners on quality or security.",
    stat: "40% Faster",
    gradient: "from-[#ec4899] to-[#f43f5e]",
    bg: "bg-[#ec4899]/10",
    border: "border-[#ec4899]/20",
    text: "text-[#f472b6]",
  },
  {
    icon: <Shield size={24} />,
    title: "Enterprise Security First",
    description:
      "SOC 2 Type II certified with end-to-end encryption, penetration testing, and compliance-ready architectures built into every project from day one.",
    stat: "SOC 2 Certified",
    gradient: "from-[#06b6d4] to-[#0ea5e9]",
    bg: "bg-[#06b6d4]/10",
    border: "border-[#06b6d4]/20",
    text: "text-[#22d3ee]",
  },
  {
    icon: <Heart size={24} />,
    title: "True Partnership",
    description:
      "We're not vendors — we're partners. Your dedicated account strategist ensures alignment between technical execution and business objectives.",
    stat: "98% Retention",
    gradient: "from-[#f59e0b] to-[#f97316]",
    bg: "bg-[#f59e0b]/10",
    border: "border-[#f59e0b]/20",
    text: "text-[#fbbf24]",
  },
  {
    icon: <Target size={24} />,
    title: "Results-Driven",
    description:
      "We measure success by your KPIs — conversion rates, load times, user engagement. Every decision is backed by data and focused on ROI.",
    stat: "300% Avg ROI",
    gradient: "from-[#10b981] to-[#34d399]",
    bg: "bg-[#10b981]/10",
    border: "border-[#10b981]/20",
    text: "text-[#34d399]",
  },
];

const comparisonData = [
  {
    feature: "Average Project Delivery",
    others: "4-6 months",
    techcore: "8-12 weeks",
    highlight: true,
  },
  {
    feature: "Team Experience Level",
    others: "Mixed (junior to senior)",
    techcore: "Senior-only (8+ years)",
    highlight: true,
  },
  {
    feature: "Post-Launch Support",
    others: "30-day warranty",
    techcore: "12-month partnership",
    highlight: true,
  },
  {
    feature: "Security Compliance",
    others: "Add-on service",
    techcore: "Built-in from day one",
    highlight: true,
  },
  {
    feature: "Communication",
    others: "Weekly updates",
    techcore: "Real-time Slack + daily standups",
    highlight: false,
  },
];
const ratingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  ratingValue: "4.9",
  reviewCount: "127",
  bestRating: "5",
  itemReviewed: {
    "@type": "Organization",
    name: "TechCore Studio",
  },
};

export default function WhyDifferentSection() {
  return (
    <section id="why-us" className="relative py-32 overflow-hidden">
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05),transparent_50%)]" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#5d67f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8b5cf6]/50" />
            <Sparkles size={16} className="text-[#8b5cf6]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8b5cf6]/50" />
          </motion.div>

          <span className="text-[#8b5cf6] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            What Makes TechCore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
              Different
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We don&apos;t just write code — we engineer digital excellence with
            a approach that sets us apart from typical development agencies.
          </p>
        </motion.div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group relative p-8 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Stat badge */}
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full ${item.bg} ${item.text} text-xs font-semibold border ${item.border}`}
              >
                {item.stat}
              </div>

              <div
                className={`w-14 h-14 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center ${item.text} mb-6 group-hover:scale-110 transition-all duration-500`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>

              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp size={24} className="text-[#5d67f2]" />
              <h3 className="text-2xl font-bold text-white">
                TechCore vs. Typical Agencies
              </h3>
            </div>

            <div className="space-y-1">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 px-4 py-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <div>Feature</div>
                <div className="text-center">Others</div>
                <div className="text-center text-[#5d67f2]">TechCore</div>
              </div>

              {/* Table Rows */}
              {comparisonData.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid grid-cols-3 gap-4 px-4 py-4 rounded-xl transition-colors duration-300 ${
                    row.highlight
                      ? "bg-white/[0.03] hover:bg-white/[0.05]"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="text-gray-300 text-sm font-medium flex items-center gap-2">
                    {row.highlight && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5d67f2]" />
                    )}
                    {!row.highlight && <div className="w-1.5 h-1.5" />}
                    {row.feature}
                  </div>
                  <div className="text-center text-gray-500 text-sm">
                    {row.others}
                  </div>
                  <div className="text-center text-white text-sm font-semibold">
                    {row.techcore}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="h-0.5 bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]" />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {[
            { icon: <Award size={18} />, label: "Top Rated Agency" },
            { icon: <Shield size={18} />, label: "SOC 2 Certified" },
            { icon: <Clock size={18} />, label: "On-Time Delivery" },
            { icon: <Heart size={18} />, label: "98% Satisfaction" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <span className="text-[#5d67f2]">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}