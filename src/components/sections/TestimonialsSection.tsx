"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { getAggregateRatingSchema, getReviewSchema } from "@/lib/schema";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Finova Capital",
    location: "London, UK",
    avatar: "SM",
    rating: 5,
    text: "TechCore transformed our legacy banking platform into a modern, scalable system in just 10 weeks. Their senior-only team meant zero hand-holding — they understood our compliance requirements from day one. The ROI was visible within the first quarter.",
    project: "FinTech Platform Rebuild",
    metric: "300% faster transactions",
    color: "#5d67f2",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Head of Digital",
    company: "Nexus Retail Group",
    location: "New York, USA",
    avatar: "MC",
    rating: 5,
    text: "We interviewed 12 agencies before choosing TechCore. The difference was immediate — they challenged our brief, proposed better architectures, and delivered a headless commerce solution that handles 10x our peak traffic without breaking a sweat.",
    project: "Enterprise E-Commerce",
    metric: "10x traffic capacity",
    color: "#8b5cf6",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "VP Product",
    company: "HealthSync AI",
    location: "San Francisco, USA",
    avatar: "ER",
    rating: 5,
    text: "Building HIPAA-compliant AI diagnostics isn't easy. TechCore's security-first approach and their ability to integrate ML models into our existing workflow saved us 6 months of development time. They're not vendors — they're partners.",
    project: "AI Diagnostic Platform",
    metric: "6 months saved",
    color: "#ec4899",
  },
  {
    id: 4,
    name: "James Whitfield",
    role: "Founder & CEO",
    company: "PropTech Ventures",
    location: "Manchester, UK",
    avatar: "JW",
    rating: 5,
    text: "From MVP to Series B, TechCore has been with us at every stage. Their UK office meant same-timezone collaboration, and the quality never dropped even as we scaled from 3 users to 50,000. That's rare in this industry.",
    project: "PropTech SaaS Platform",
    metric: "0 to 50K users",
    color: "#06b6d4",
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Director of Engineering",
    company: "Global Logistics Inc",
    location: "Singapore",
    avatar: "AP",
    rating: 5,
    text: "We needed a real-time tracking system integrated with 40+ carrier APIs. TechCore delivered in 8 weeks what our previous agency couldn't crack in 6 months. Their process is transparent, their communication is relentless, and their code is bulletproof.",
    project: "Logistics Integration Hub",
    metric: "40+ API integrations",
    color: "#f59e0b",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return next;
    });
  };
  function getTestimonialsSchema(activeTestimonial: typeof testimonials[0]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: activeTestimonial.name,
          jobTitle: activeTestimonial.role,
        },
        reviewBody: activeTestimonial.text,
        reviewRating: {
          "@type": "Rating",
          ratingValue: activeTestimonial.rating,
          bestRating: "5",
        },
        // datePublished: activeTestimonial.datePublished,
        // publisher: {
        //   "@type": "Organization",
        //   name: "TechCore Studio",
        // },
      },
      {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
      },
    ],
  };
}


  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative pt-5 pb-13 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getTestimonialsSchema) }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(93,103,242,0.04),transparent_50%)]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5d67f2]/5 rounded-full blur-3xl" />

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
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#5d67f2]/50" />
            <Star size={16} className="text-[#f59e0b]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#5d67f2]/50" />
          </motion.div>

          <span className="text-[#5d67f2] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Don't just take our word for it — hear from the teams we've helped
            scale, transform, and dominate their markets.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-[#5d67f2]/30 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.06] hover:border-[#5d67f2]/30 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 text-6xl font-serif text-white/[0.03] leading-none">
                <Quote size={48} className="text-[#5d67f2]/10" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star
                      size={18}
                      className="text-[#f59e0b] fill-[#f59e0b]"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 font-light">
                "{current.text}"
              </blockquote>

              {/* Project badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-400 mb-8">
                <Building2 size={14} />
                {current.project}
                <span className="w-px h-4 bg-white/10 mx-1" />
                <span className="text-[#5d67f2] font-medium">
                  {current.metric}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: `${current.color}20`, color: current.color }}
                >
                  {current.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">
                    {current.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {current.role} at {current.company}
                  </div>
                  <div className="text-gray-600 text-xs mt-0.5">
                    {current.location}
                  </div>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(to right, ${current.color}, transparent)`,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? "w-8 h-2 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-xs text-gray-600 uppercase tracking-[0.25em] text-center mb-8">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center gap-12 md:gap-16 opacity-30">
            {["Finova", "Nexus", "HealthSync", "PropTech", "GlobalLog"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-bold text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-default"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}