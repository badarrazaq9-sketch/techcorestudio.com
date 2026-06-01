"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Globe,
  Cpu,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: <Code size={24} />,
    title: "Web Development",
    subtitle: "Full-Stack Engineering",
    description:
      "Enterprise-grade web applications built with Next.js, React, Node.js, and cloud-native architectures. From MVPs to complex SaaS platforms.",
    features: ["Next.js & React", "Node.js APIs", "Microservices", "GraphQL", "Serverless"],
    color: "indigo",
    price: "From $15k",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description:
      "Complete design systems from research to pixel-perfect interfaces. We craft experiences that convert visitors into loyal users.",
    features: ["Design Systems", "User Research", "Prototyping", "Accessibility", "Brand Identity"],
    color: "purple",
    price: "From $8k",
  },
  {
    icon: <Zap size={24} />,
    title: "Performance Optimization",
    subtitle: "Speed & Scale",
    description:
      "Lightning-fast load times and optimized Core Web Vitals. We audit, optimize, and monitor your application performance 24/7.",
    features: ["Core Web Vitals", "CDN Setup", "Lazy Loading", "Code Splitting", "Caching Strategy"],
    color: "amber",
    price: "From $5k",
  },
  {
    icon: <Globe size={24} />,
    title: "Digital Strategy",
    subtitle: "Growth & SEO",
    description:
      "Data-driven strategies for UK & USA markets. SEO architecture, content strategy, and conversion rate optimization.",
    features: ["Technical SEO", "Content Architecture", "CRO", "Analytics", "A/B Testing"],
    color: "emerald",
    price: "From $6k",
  },
  {
    icon: <Cpu size={24} />,
    title: "AI & Machine Learning",
    subtitle: "Intelligent Automation",
    description:
      "Smart automation and AI-powered features. From intelligent chatbots to predictive analytics and custom ML models.",
    features: ["NLP Solutions", "Predictive Analytics", "Computer Vision", "Chatbots", "MLOps"],
    color: "rose",
    price: "From $20k",
  },
  {
    icon: <Shield size={24} />,
    title: "Cybersecurity",
    subtitle: "Enterprise Security",
    description:
      "Bank-grade security implementations. Authentication, encryption, penetration testing, and GDPR/SOC2 compliance.",
    features: ["Penetration Testing", "GDPR Compliance", "SOC2 Audit", "Encryption", "Auth Systems"],
    color: "cyan",
    price: "From $10k",
  },
];

const colorMap: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    glow: string;
    gradient: string;
    hoverBorder: string;
    iconBg: string;
  }
> = {
  indigo: {
    bg: "bg-[#5d67f2]/10",
    border: "border-[#5d67f2]/20",
    text: "text-[#7b85ff]",
    glow: "group-hover:shadow-[#5d67f2]/20",
    gradient: "from-[#5d67f2] to-[#8b5cf6]",
    hoverBorder: "group-hover:border-[#5d67f2]/50",
    iconBg: "group-hover:bg-[#5d67f2]/20",
  },
  purple: {
    bg: "bg-[#8b5cf6]/10",
    border: "border-[#8b5cf6]/20",
    text: "text-[#a78bfa]",
    glow: "group-hover:shadow-[#8b5cf6]/20",
    gradient: "from-[#8b5cf6] to-[#ec4899]",
    hoverBorder: "group-hover:border-[#8b5cf6]/50",
    iconBg: "group-hover:bg-[#8b5cf6]/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    gradient: "from-amber-400 to-orange-500",
    hoverBorder: "group-hover:border-amber-500/50",
    iconBg: "group-hover:bg-amber-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    gradient: "from-emerald-400 to-teal-500",
    hoverBorder: "group-hover:border-emerald-500/50",
    iconBg: "group-hover:bg-emerald-500/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    text: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
    gradient: "from-rose-400 to-pink-500",
    hoverBorder: "group-hover:border-rose-500/50",
    iconBg: "group-hover:bg-rose-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
    gradient: "from-cyan-400 to-blue-500",
    hoverBorder: "group-hover:border-cyan-500/50",
    iconBg: "group-hover:bg-cyan-500/20",
  },
};

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,103,242,0.04),transparent_50%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#5d67f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Our Expertise"
          title={
            <>
              Services built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
                global scale
              </span>
            </>
          }
          description="Comprehensive digital solutions tailored to your business objectives. Each service is delivered with precision, transparency, and measurable results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col h-full p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hoverBorder} transition-all duration-500 hover:shadow-2xl ${colors.glow} overflow-hidden cursor-pointer`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`}
                />

                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 group-hover:shadow-lg ${colors.iconBg} transition-all duration-500 shrink-0`}
                >
                  {service.icon}
                </div>

                <div className="mb-2">
                  <span
                    className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}
                  >
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 shrink-0">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 shrink-0">
                  {service.features.map((feature, fi) => (
                    <span
                      key={feature}
                      className={`px-2.5 py-1 rounded-md text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border} opacity-70 group-hover:opacity-100 transition-all duration-300`}
                      style={{ transitionDelay: `${fi * 50}ms` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                  <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                    {service.price}
                  </span>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300 ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  >
                    <span>Details</span>
                    <ArrowUpRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}