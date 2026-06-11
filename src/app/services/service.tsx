"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  Play,
  ChevronDown,
  Code,
  Palette,
  Zap,
  Globe,
  Cpu,
  Shield,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Layers,
  TrendingUp,
  Hexagon,
  Sparkles,
  MessageCircle,
  Share2,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

// --- Services Hero Section ---
const ServicesHero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const stats = [
    { value: "50+", label: "Tech Stack", icon: <Layers size={16} /> },
    { value: "24/7", label: "Support", icon: <CheckCircle2 size={16} /> },
    { value: "100%", label: "Custom Solutions", icon: <Star size={16} /> },
    { value: "2x", label: "Faster Delivery", icon: <TrendingUp size={16} /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(53,64,255,0.1) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-[10%] w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 60%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32"
        style={{ opacity: smoothOpacity, y: smoothY, scale }}
      >
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-gray-300 mb-8 backdrop-blur-sm"
        >
          <MapPin size={14} className="text-[#5d67f2]" />
          <span className="text-gray-400">London, UK • New York, USA</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="flex items-center gap-1.5 text-[#5d67f2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5d67f2] animate-pulse" />
            Our Services
          </span>
        </motion.div>

        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5d67f2]/10 to-[#8b5cf6]/10 border border-[#5d67f2]/20 text-sm text-[#8b9dff] mb-10"
        >
          <Sparkles size={14} />
          <span>End-to-End Digital Solutions</span>
          <Sparkles size={14} />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="block"
            >
              Solutions That
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="block mt-2"
            >
              Drive{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                  Growth
                </span>
                <motion.svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.8 }}
                >
                  <motion.path
                    d="M2 8C75 2 225 2 298 8"
                    stroke="url(#growthGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#5d67f2" />
                      <stop offset="0.5" stopColor="#8b5cf6" />
                      <stop offset="1" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          From concept to deployment, we deliver full-stack digital solutions
          tailored to your business needs. Scalable, secure, and built for the future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <Link href="/ContactInfo">
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(93, 103, 242, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-full font-semibold flex items-center gap-3 hover:from-[#4f57d9] hover:to-[#7c4ce6] transition-all duration-500 shadow-lg shadow-[#5d67f2]/25"
          >
            Get a Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            whileTap={{ scale: 0.97 }}
            className="group px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#5d67f2]/50 transition-all duration-500 flex items-center gap-3 backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#5d67f2]/20 transition-colors">
              <Play size={14} className="ml-0.5" />
            </div>
            Watch Our Process
          </motion.button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl overflow-hidden max-w-3xl mx-auto backdrop-blur-sm border border-white/[0.06]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-[#08080e]/60 backdrop-blur-md p-6 text-center group hover:bg-white/[0.04] transition-all duration-500 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center mb-2 text-[#5d67f2] group-hover:text-[#8b5cf6] transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5d67f2] group-hover:to-[#8b5cf6] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider group-hover:text-gray-400 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
      >
        <span className="text-xs text-gray-600 uppercase tracking-[0.2em]">Explore Services</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-[#5d67f2]"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// --- Services Grid Section ---
const ServicesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      subtitle: "Full-Stack Engineering",
      description: "Enterprise-grade web applications built with Next.js, React, Node.js, and cloud-native architectures. From MVPs to complex SaaS platforms.",
      features: ["Next.js & React", "Node.js APIs", "Microservices", "GraphQL", "Serverless"],
      color: "indigo",
      price: "From $15k",
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      description: "Complete design systems from research to pixel-perfect interfaces. We craft experiences that convert visitors into loyal users.",
      features: ["Design Systems", "User Research", "Prototyping", "Accessibility", "Brand Identity"],
      color: "purple",
      price: "From $8k",
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      subtitle: "Speed & Scale",
      description: "Lightning-fast load times and optimized Core Web Vitals. We audit, optimize, and monitor your application performance 24/7.",
      features: ["Core Web Vitals", "CDN Setup", "Lazy Loading", "Code Splitting", "Caching Strategy"],
      color: "amber",
      price: "From $5k",
    },
    {
      icon: <Globe size={24} />,
      title: "Digital Strategy",
      subtitle: "Growth & SEO",
      description: "Data-driven strategies for UK & USA markets. SEO architecture, content strategy, and conversion rate optimization.",
      features: ["Technical SEO", "Content Architecture", "CRO", "Analytics", "A/B Testing"],
      color: "emerald",
      price: "From $6k",
    },
    {
      icon: <Cpu size={24} />,
      title: "AI & Machine Learning",
      subtitle: "Intelligent Automation",
      description: "Smart automation and AI-powered features. From intelligent chatbots to predictive analytics and custom ML models.",
      features: ["NLP Solutions", "Predictive Analytics", "Computer Vision", "Chatbots", "MLOps"],
      color: "rose",
      price: "From $20k",
    },
    {
      icon: <Shield size={24} />,
      title: "Cybersecurity",
      subtitle: "Enterprise Security",
      description: "Bank-grade security implementations. Authentication, encryption, penetration testing, and GDPR/SOC2 compliance.",
      features: ["Penetration Testing", "GDPR Compliance", "SOC2 Audit", "Encryption", "Auth Systems"],
      color: "cyan",
      price: "From $10k",
    },
  ];

  const colorMap: Record<string, {
    bg: string;
    border: string;
    text: string;
    glow: string;
    gradient: string;
    hoverBorder: string;
    iconBg: string;
  }> = {
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

  return (
    <section id="services" className="relative pt-5 pb-13 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,103,242,0.04),transparent_50%)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#5d67f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
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

          <motion.span
            className="text-[#5d67f2] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Expertise
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Services built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
              global scale
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive digital solutions tailored to your business objectives.
            Each service is delivered with precision, transparency, and measurable results.
          </p>

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
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />

                <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 group-hover:shadow-lg ${colors.iconBg} transition-all duration-500 shrink-0`}>
                  {service.icon}
                </div>

                <div className="mb-2">
                  <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>{service.subtitle}</span>
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
                  <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{service.price}</span>
                  <div className={`flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}>
                    <span>Details</span>
                    <ArrowUpRight size={16} className={`transition-transform duration-300 ${isHovered ? "translate-x-0.5 -translate-y-0.5" : ""}`} />
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- Process Section ---
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your business needs, market position, and technical requirements to build a strategic roadmap.",
      icon: <Hexagon size={20} />,
    },
    {
      number: "02",
      title: "Design",
      description: "User-centered design with iterative prototyping. We validate every interaction before writing code.",
      icon: <Palette size={20} />,
    },
    {
      number: "03",
      title: "Development",
      description: "Agile sprints with daily standups. Clean, documented code with automated testing at every stage.",
      icon: <Code size={20} />,
    },
    {
      number: "04",
      title: "Deploy",
      description: "CI/CD pipelines, cloud infrastructure setup, and zero-downtime deployments to production.",
      icon: <Zap size={20} />,
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#5d67f2]/3 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#5d67f2] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#5d67f2]/30 hover:bg-white/[0.04] transition-all duration-500 h-full">
                <div className="text-5xl font-bold text-white/[0.04] group-hover:text-[#5d67f2]/20 transition-colors duration-500 mb-4">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#5d67f2]/10 border border-[#5d67f2]/20 flex items-center justify-center text-[#5d67f2] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#5d67f2]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA Section ---


// --- Services Footer ---


// --- Main Services Page Component ---
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      {/* <ProcessSection /> */}
  
      {/* <CTASection /> */}
      {/* <ServicesFooter /> */}
    </>
  );
}