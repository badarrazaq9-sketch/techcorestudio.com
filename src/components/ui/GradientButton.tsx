"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface GradientButtonProps {
  children: React.ReactNode;
  icon?: boolean;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function GradientButton({
  children,
  icon = true,
  variant = "primary",
  onClick,
  className = "",
}: GradientButtonProps) {
  if (variant === "secondary") {
    return (
      <motion.button
        whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#5d67f2]/50 transition-all duration-500 backdrop-blur-sm ${className}`}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(93, 103, 242, 0.4)" }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`group px-8 py-4 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-full font-semibold flex items-center gap-3 hover:from-[#4f57d9] hover:to-[#7c4ce6] transition-all duration-500 shadow-lg shadow-[#5d67f2]/25 ${className}`}
    >
      {children}
      {icon && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />}
    </motion.button>
  );
}