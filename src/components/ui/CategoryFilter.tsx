"use client";

import React from "react";
import { motion } from "framer-motion";

type Category = "all" | "web" | "app" | "logo" | "branding" | "ai" | "uiux";

interface CategoryItem {
  key: Category;
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: CategoryItem[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.key;
        return (
          <motion.button
            key={cat.key}
            onClick={() => onCategoryChange(cat.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive
                ? "text-white"
                : "text-gray-400 hover:text-white bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15]"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {cat.label}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-white/[0.06] text-gray-500"
                }`}
              >
                {cat.count}
              </span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}