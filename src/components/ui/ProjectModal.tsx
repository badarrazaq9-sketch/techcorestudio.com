"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
  ExternalLink,
  Tag,
  Layers,
  Download,
  Share2,
  Info,
  Minimize2,
} from "lucide-react";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: ProjectModalProps) {
  const [zoom, setZoom] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showInfo, setShowInfo] = useState(true);
  const [liked, setLiked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setZoom(1);
    setPanPosition({ x: 0, y: 0 });
    setShowInfo(true);
    setIsFullscreen(false);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
      if (e.key === "ArrowLeft" && hasPrev && onPrev) onPrev();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "f") toggleFullscreen();
      if (e.key === "i") setShowInfo(!showInfo);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, hasNext, hasPrev, onNext, onPrev, isFullscreen, showInfo]);

  const resetControlsTimeout = () => {
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    setShowControls(true);
    controlsTimeoutRef.current = setTimeout(() => {
      if (zoom > 1) setShowControls(false);
    }, 3000);
  };

  const handleZoomIn = () => {
    setZoom((z) => Math.min(z + 0.25, 4));
    resetControlsTimeout();
  };

  const handleZoomOut = () => {
    setZoom((z) => {
      const newZoom = Math.max(z - 0.25, 0.5);
      if (newZoom <= 1) setPanPosition({ x: 0, y: 0 });
      return newZoom;
    });
    resetControlsTimeout();
  };

  const handleReset = () => {
    setZoom(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowInfo(!isFullscreen ? false : true);
    handleReset();
  };

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (zoom > 1) {
        setIsDragging(true);
        setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y });
      }
    },
    [zoom, panPosition]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && zoom > 1) {
        setPanPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart, zoom]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) handleZoomIn();
    else handleZoomOut();
  }, []);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && zoom === 1) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-[100] bg-[#08080e] flex flex-col ${isFullscreen ? '' : 'bg-[#08080e]/98 backdrop-blur-xl'}`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(93,103,242,0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(139,92,246,0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(93,103,242,0.03) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            />
          </div>

          {/* Top Bar */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] relative z-10"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#5d67f2] font-medium">
                    {project.categoryLabel}
                  </span>
                  <span className="text-gray-600">|</span>
                  <h2 className="text-white font-semibold text-lg truncate max-w-md">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  {/* Zoom Controls */}
                  <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-lg overflow-hidden">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                      title="Zoom Out (-)"
                    >
                      <ZoomOut size={18} />
                    </button>
                    <span className="text-xs text-gray-500 px-2 min-w-[3rem] text-center font-mono">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                      title="Zoom In (+)"
                    >
                      <ZoomIn size={18} />
                    </button>
                    <button
                      onClick={handleReset}
                      className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors border-l border-white/[0.06]"
                      title="Reset (100%)"
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>

                  <button
                    onClick={toggleFullscreen}
                    className="p-2 text-gray-400 hover:text-white bg-white/[0.03] border border-white/[0.08] rounded-lg transition-colors"
                    title={isFullscreen ? "Exit Fullscreen (f)" : "Fullscreen (f)"}
                  >
                    {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                  </button>

                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className={`p-2 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-colors ${
                      showInfo ? "text-[#5d67f2]" : "text-gray-400 hover:text-white"
                    }`}
                    title="Toggle Info (i)"
                  >
                    <Info size={18} />
                  </button>

                  <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white hover:bg-red-500/20 bg-white/[0.03] border border-white/[0.08] rounded-lg transition-colors"
                    title="Close (Esc)"
                  >
                    <X size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden relative">
            {/* Image Viewer */}
            <div
              className={`flex-1 relative overflow-hidden ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
              onClick={handleContainerClick}
            >
              {/* Navigation Arrows */}
              <AnimatePresence>
                {showControls && (
                  <>
                    {hasPrev && onPrev && (
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-[#5d67f2]/80 transition-all shadow-lg"
                      >
                        <ChevronLeft size={24} />
                      </motion.button>
                    )}
                    {hasNext && onNext && (
                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-[#5d67f2]/80 transition-all shadow-lg"
                      >
                        <ChevronRight size={24} />
                      </motion.button>
                    )}
                  </>
                )}
              </AnimatePresence>

              {/* Zoomable Image */}
              <motion.div
                className="w-full h-full flex items-center justify-center p-8"
                animate={{ scale: zoom, x: panPosition.x, y: panPosition.y }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-6xl aspect-[16/10] bg-gradient-to-br from-[#5d67f2]/10 to-[#8b5cf6]/5 rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl">
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(135deg, rgba(93,103,242,0.1) 0%, rgba(139,92,246,0.05) 100%)",
                        "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(93,103,242,0.05) 100%)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#5d67f2]/20 to-[#8b5cf6]/20 flex items-center justify-center border border-[#5d67f2]/20">
                        <span className="text-5xl font-bold text-[#5d67f2]/40">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-gray-400 text-lg font-medium">{project.title}</p>
                      <p className="text-gray-600 text-sm mt-2">Scroll to zoom • Drag to pan</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Zoom Hint */}
              <AnimatePresence>
                {zoom === 1 && showControls && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/[0.06]"
                  >
                    Scroll to zoom • Drag to pan • Click background to close
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Info Sidebar */}
            <AnimatePresence>
              {showInfo && !isFullscreen && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="w-96 border-l border-white/[0.06] bg-[#08080e]/80 backdrop-blur-xl p-8 overflow-y-auto relative z-10"
                >
                  <h1 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Eye size={16} className="text-[#5d67f2]" />
                      <span className="font-mono">{project.views.toLocaleString()}</span>
                      <span className="text-gray-600">views</span>
                    </div>
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-2 text-sm transition-colors ${
                        liked ? "text-[#ec4899]" : "text-gray-400 hover:text-[#ec4899]"
                      }`}
                    >
                      <Heart size={16} fill={liked ? "#ec4899" : "none"} />
                      <span className="font-mono">{project.likes + (liked ? 1 : 0)}</span>
                      <span className="text-gray-600">likes</span>
                    </button>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <Tag size={14} /> Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-2 bg-white/[0.03] border border-white/[0.08] rounded-lg text-xs text-gray-300 hover:border-[#5d67f2]/30 hover:text-[#5d67f2] transition-all duration-300 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <Layers size={14} /> Category
                    </h3>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d67f2]/10 border border-[#5d67f2]/20 rounded-lg text-sm text-[#5d67f2]">
                      <span className="w-2 h-2 rounded-full bg-[#5d67f2] animate-pulse" />
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 mb-8">
                    <a
                      href={project.link}
                      className="flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#5d67f2]/20 hover:shadow-[#5d67f2]/40"
                    >
                      <ExternalLink size={16} /> View Live Project
                    </a>
                    <div className="flex gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.03] border border-white/[0.08] text-gray-300 rounded-xl text-sm hover:border-white/[0.15] transition-all">
                        <Share2 size={16} /> Share
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/[0.03] border border-white/[0.08] text-gray-300 rounded-xl text-sm hover:border-white/[0.15] transition-all">
                        <Download size={16} /> Download
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.06]">
                    <p className="text-xs text-gray-600 mb-3 uppercase tracking-wider">
                      Keyboard Shortcuts
                    </p>
                    <div className="space-y-2 text-xs text-gray-500">
                      {[
                        { key: "+ / -", action: "Zoom In/Out" },
                        { key: "← / →", action: "Navigate Projects" },
                        { key: "f", action: "Fullscreen Toggle" },
                        { key: "i", action: "Toggle Info Panel" },
                        { key: "Esc", action: "Close Modal" },
                      ].map((shortcut) => (
                        <div key={shortcut.key} className="flex justify-between items-center">
                          <span>{shortcut.action}</span>
                          <kbd className="px-2 py-1 bg-white/[0.05] rounded text-gray-400 border border-white/[0.06] font-mono text-[10px]">
                            {shortcut.key}
                          </kbd>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/[0.06] relative z-10">
            <motion.div
              className="h-full bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}