"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Heart, ArrowUpRight } from "lucide-react";

type Category = "all" | "web" | "app" | "logo" | "branding" | "ai" | "uiux";

interface Project {
  id: number;
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
  likes: number;
  views: number;
  link: string;
  featured?: boolean;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function PortfolioCard({ project, index, onSelect }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(project.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      className="group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#5d67f2]/30 transition-all duration-500 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#5d67f2]/10 to-[#8b5cf6]/5">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[#5d67f2]/20 to-[#8b5cf6]/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl font-bold text-[#5d67f2]/60">
                {project.title.charAt(0)}
              </span>
            </motion.div>
            <span className="text-xs text-gray-600 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-[#08080e] via-[#08080e]/80 to-transparent flex items-end p-6"
        >
          <div className="w-full">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Eye size={14} />
                  {project.views.toLocaleString()}
                </span>
                <motion.button
                  onClick={handleLike}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center gap-1.5 transition-colors ${
                    liked ? "text-[#ec4899]" : "hover:text-[#ec4899]"
                  }`}
                >
                  <Heart size={14} fill={liked ? "#ec4899" : "none"} />
                  {likeCount}
                </motion.button>
              </div>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(project);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#5d67f2] transition-colors duration-300"
              >
                <ArrowUpRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white text-xs font-medium rounded-full"
          >
            Featured
          </motion.div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-white/10">
          {project.categoryLabel}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5d67f2] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md text-xs text-gray-400 hover:border-[#5d67f2]/30 hover:text-[#5d67f2] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5d67f2]/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}