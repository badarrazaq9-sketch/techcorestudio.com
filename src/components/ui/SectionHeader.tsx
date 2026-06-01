"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`mb-20 ${alignClass} ${className}`}
    >
      {/* Top accent line */}
      {align === "center" && (
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#5d67f2]/50" />
          <div className="w-2 h-2 rounded-full bg-[#5d67f2] shadow-lg shadow-[#5d67f2]/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#5d67f2]/50" />
        </motion.div>
      )}

      <motion.span
        className="text-[#5d67f2] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.span>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}

      {/* Bottom decorative dots */}
      {align === "center" && (
        <motion.div
          className="flex items-center justify-center gap-2 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#5d67f2]/40"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}