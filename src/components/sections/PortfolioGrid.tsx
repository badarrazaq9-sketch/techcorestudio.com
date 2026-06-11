"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Award, Briefcase, Heart } from "lucide-react";
import PortfolioCard from "@/components/ui/PortfolioCard";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ProjectModal from "@/components/ui/ProjectModal";

// TYPES
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

// PROJECT DATA
const allProjects: Project[] = [
  {
    id: 1,
    title: "Finova Banking Platform",
    category: "web",
    categoryLabel: "Web Development",
    description: "A modern banking dashboard with real-time analytics, secure transactions, and intuitive user experience for a fintech startup.",
    image: "/portfolio/finova.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    likes: 234,
    views: 1205,
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "HealthTrack Mobile App",
    category: "app",
    categoryLabel: "Mobile App",
    description: "Cross-platform health tracking application with AI-powered insights, wearable integration, and personalized wellness recommendations.",
    image: "/portfolio/healthtrack.jpg",
    tags: ["React Native", "Node.js", "TensorFlow", "Firebase"],
    likes: 189,
    views: 892,
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Nexus Tech Brand Identity",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "Complete brand identity system including logo, color palette, typography, and brand guidelines for a tech startup.",
    image: "/portfolio/nexus-brand.jpg",
    tags: ["Figma", "Illustrator", "Brand Strategy"],
    likes: 156,
    views: 678,
    link: "#",
  },
  {
    id: 4,
    title: "E-Commerce Redesign",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    description: "Complete redesign of a fashion e-commerce platform focusing on conversion optimization and seamless checkout experience.",
    image: "/portfolio/ecommerce.jpg",
    tags: ["Figma", "Prototyping", "User Research", "A/B Testing"],
    likes: 312,
    views: 1543,
    link: "#",
    featured: true,
  },
  {
    id: 5,
    title: "AI Content Generator",
    category: "ai",
    categoryLabel: "AI Integration",
    description: "Enterprise-grade AI content generation platform with custom LLM fine-tuning, multi-language support, and SEO optimization.",
    image: "/portfolio/ai-content.jpg",
    tags: ["OpenAI API", "Python", "FastAPI", "React"],
    likes: 278,
    views: 1102,
    link: "#",
  },
  {
    id: 6,
    title: "CloudSync Dashboard",
    category: "web",
    categoryLabel: "Web Development",
    description: "Real-time cloud infrastructure monitoring dashboard with predictive analytics and automated scaling recommendations.",
    image: "/portfolio/cloudsync.jpg",
    tags: ["Vue.js", "D3.js", "AWS", "GraphQL"],
    likes: 145,
    views: 756,
    link: "#",
  },
  {
    id: 7,
    title: "Foodie Express App",
    category: "app",
    categoryLabel: "Mobile App",
    description: "Food delivery application with real-time tracking, AI-powered recommendations, and seamless payment integration.",
    image: "/portfolio/foodie.jpg",
    tags: ["Flutter", "Dart", "Google Maps API", "Stripe"],
    likes: 198,
    views: 934,
    link: "#",
  },
  {
    id: 8,
    title: "EcoGreen Brand System",
    category: "branding",
    categoryLabel: "Branding",
    description: "Sustainable brand identity for an eco-friendly products company, including packaging design and digital assets.",
    image: "/portfolio/ecogreen.jpg",
    tags: ["Brand Identity", "Packaging", "Sustainable Design"],
    likes: 167,
    views: 823,
    link: "#",
  },
  {
    id: 9,
    title: "CryptoVault Platform",
    category: "web",
    categoryLabel: "Web Development",
    description: "Secure cryptocurrency trading platform with advanced charting, portfolio management, and multi-layer security.",
    image: "/portfolio/cryptovault.jpg",
    tags: ["Next.js", "Web3.js", "Solidity", "Chart.js"],
    likes: 245,
    views: 1089,
    link: "#",
  },
  {
    id: 10,
    title: "MedFlow UI Kit",
    category: "uiux",
    categoryLabel: "UI/UX Design",
    description: "Comprehensive healthcare UI kit with 200+ components, accessibility-first design, and dark mode support.",
    image: "/portfolio/medflow.jpg",
    tags: ["Figma", "Design System", "Accessibility", "WCAG"],
    likes: 203,
    views: 967,
    link: "#",
  },
  {
    id: 11,
    title: "SmartRetail AI",
    category: "ai",
    categoryLabel: "AI Integration",
    description: "Computer vision-powered retail analytics solution for inventory management and customer behavior analysis.",
    image: "/portfolio/smartretail.jpg",
    tags: ["Computer Vision", "Python", "YOLO", "Edge AI"],
    likes: 189,
    views: 876,
    link: "#",
  },
  {
    id: 12,
    title: "Pulse Fitness Logo",
    category: "logo",
    categoryLabel: "Logo Design",
    description: "Dynamic fitness brand logo with motion-ready variants for digital and print applications.",
    image: "/portfolio/pulse-logo.jpg",
    tags: ["Logo Design", "Motion Graphics", "Vector"],
    likes: 134,
    views: 654,
    link: "#",
  },
];

const categories = [
  { key: "all" as Category, label: "All Projects", count: allProjects.length },
  { key: "web" as Category, label: "Web Development", count: allProjects.filter(p => p.category === "web").length },
  { key: "app" as Category, label: "Mobile Apps", count: allProjects.filter(p => p.category === "app").length },
  { key: "uiux" as Category, label: "UI/UX Design", count: allProjects.filter(p => p.category === "uiux").length },
  { key: "ai" as Category, label: "AI Integration", count: allProjects.filter(p => p.category === "ai").length },
  { key: "logo" as Category, label: "Logo Design", count: allProjects.filter(p => p.category === "logo").length },
  { key: "branding" as Category, label: "Branding", count: allProjects.filter(p => p.category === "branding").length },
];

const stats = [
  { label: "Projects Completed", value: "150+", icon: Briefcase },
  { label: "Happy Clients", value: "80+", icon: Heart },
  { label: "Countries Served", value: "25+", icon: Globe },
  { label: "Awards Won", value: "12", icon: Award },
];

interface PortfolioGridProps {
  showStats?: boolean;
  showTitle?: boolean;
  maxProjects?: number;
  columns?: 2 | 3;
}

export default function PortfolioGrid({
  showStats = true,
  showTitle = true,
  maxProjects,
  columns = 3,
}: PortfolioGridProps) {
  // Using type inference - no angle brackets needed!
  const [activeCategory, setActiveCategory] = useState("all" as Category);
  const [selectedProject, setSelectedProject] = useState(null as Project | null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const displayProjects = maxProjects
    ? filteredProjects.slice(0, maxProjects)
    : filteredProjects;

  const handleSelectProject = (project: Project) => {
    const idx = filteredProjects.findIndex((p) => p.id === project.id);
    setSelectedIndex(idx);
    setSelectedProject(project);
  };

  const handleNext = () => {
    if (selectedIndex < filteredProjects.length - 1) {
      const next = selectedIndex + 1;
      setSelectedIndex(next);
      setSelectedProject(filteredProjects[next]);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      const prev = selectedIndex - 1;
      setSelectedIndex(prev);
      setSelectedProject(filteredProjects[prev]);
    }
  };

  const gridCols = columns === 2
    ? "md:grid-cols-2"
    : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section id="portfolio-grid" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-[#5d67f2]">Work</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Browse through our diverse portfolio of projects. Filter by category to find exactly what you&apos;re looking for.
            </p>
          </motion.div>
        )}

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={(cat: Category) => {
            setActiveCategory(cat);
            setSelectedProject(null);
          }}
        />

        <motion.div
          layout
          className={`grid grid-cols-1 ${gridCols} gap-6`}
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                onSelect={handleSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {displayProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-[#5d67f2]/20 transition-all duration-500 group"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon
                    size={24}
                    className="text-[#5d67f2] mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={selectedIndex < filteredProjects.length - 1}
        hasPrev={selectedIndex > 0}
      />
    </section>
  );
}