"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type ColorKey = "indigo" | "purple" | "amber" | "emerald" | "rose" | "cyan";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: ColorKey;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const colorMap: Record<
  ColorKey,
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

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  color,
  index,
  isHovered,
  onHover,
  onLeave,
}: ServiceCardProps) {
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative flex flex-col h-full p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hoverBorder} transition-all duration-500 hover:shadow-2xl ${colors.glow} overflow-hidden cursor-pointer`}
    >
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      {/* Corner accent */}
      <div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`}
      />

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 group-hover:shadow-lg ${colors.iconBg} transition-all duration-500 shrink-0`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 shrink-0">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 leading-relaxed text-sm mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
        {description}
      </p>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-2 mb-6 shrink-0">
        {features.map((feature, fi) => (
          <span
            key={feature}
            className={`px-2.5 py-1 rounded-md text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border} opacity-70 group-hover:opacity-100 transition-all duration-300`}
            style={{ transitionDelay: `${fi * 50}ms` }}
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <div
        className={`flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300 shrink-0 mt-auto ${
          isHovered ? "translate-x-1" : ""
        }`}
      >
        <span>Learn more</span>
        <ArrowUpRight
          size={16}
          className={`transition-transform duration-300 ${
            isHovered ? "translate-x-0.5 -translate-y-0.5" : ""
          }`}
        />
      </div>

      {/* Bottom gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </motion.div>
  );
}