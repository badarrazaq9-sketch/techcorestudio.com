"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  Headphones,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <MessageSquare size={22} />,
    title: "Discovery",
    subtitle: "Understanding Your Vision",
    description:
      "We start with deep-dive workshops to understand your business goals, target audience, and technical requirements. This isn't a checkbox exercise — we ask the hard questions that uncover what you actually need.",
    duration: "1-2 Weeks",
    deliverables: [
      "Stakeholder interviews",
      "Competitive analysis",
      "Technical audit",
      "Project roadmap",
    ],
    color: "#5d67f2",
    gradient: "from-[#5d67f2] to-[#7b85ff]",
    bg: "bg-[#5d67f2]/10",
    border: "border-[#5d67f2]/20",
    text: "text-[#7b85ff]",
  },
  {
    number: "02",
    icon: <Lightbulb size={22} />,
    title: "Strategy",
    subtitle: "Architecting Success",
    description:
      "Our senior architects design a technical blueprint aligned with your business objectives. We select the right stack, define scalability patterns, and create a detailed execution plan with clear milestones.",
    duration: "1 Week",
    deliverables: [
      "Technical architecture",
      "Technology stack selection",
      "Risk assessment",
      "Timeline & milestones",
    ],
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    bg: "bg-[#8b5cf6]/10",
    border: "border-[#8b5cf6]/20",
    text: "text-[#a78bfa]",
  },
  {
    number: "03",
    icon: <PenTool size={22} />,
    title: "Design",
    subtitle: "Crafting Experiences",
    description:
      "Our design team creates pixel-perfect, user-centered interfaces. Every interaction is intentional, every animation purposeful. We prototype, test, and refine until the experience feels effortless.",
    duration: "2-3 Weeks",
    deliverables: [
      "Wireframes & prototypes",
      "UI design system",
      "Interaction design",
      "User testing results",
    ],
    color: "#ec4899",
    gradient: "from-[#ec4899] to-[#f472b6]",
    bg: "bg-[#ec4899]/10",
    border: "border-[#ec4899]/20",
    text: "text-[#f472b6]",
  },
  {
    number: "04",
    icon: <Code2 size={22} />,
    title: "Development",
    subtitle: "Engineering Excellence",
    description:
      "This is where magic happens. Our senior engineers build with clean, scalable code using modern frameworks. Daily standups, continuous integration, and rigorous code reviews ensure quality at every commit.",
    duration: "4-8 Weeks",
    deliverables: [
      "Production-ready code",
      "API documentation",
      "Unit & integration tests",
      "Performance optimization",
    ],
    color: "#06b6d4",
    gradient: "from-[#06b6d4] to-[#22d3ee]",
    bg: "bg-[#06b6d4]/10",
    border: "border-[#06b6d4]/20",
    text: "text-[#22d3ee]",
  },
  {
    number: "05",
    icon: <Rocket size={22} />,
    title: "Launch",
    subtitle: "Going Live with Confidence",
    description:
      "We don't just hit deploy and hope. Our launch process includes staging validation, load testing, security audits, and a carefully orchestrated rollout plan to ensure a flawless go-live experience.",
    duration: "1 Week",
    deliverables: [
      "Production deployment",
      "Load testing results",
      "Security verification",
      "Launch monitoring",
    ],
    color: "#10b981",
    gradient: "from-[#10b981] to-[#34d399]",
    bg: "bg-[#10b981]/10",
    border: "border-[#10b981]/20",
    text: "text-[#34d399]",
  },
  {
    number: "06",
    icon: <Headphones size={22} />,
    title: "Support",
    subtitle: "Partnership Beyond Launch",
    description:
      "Launch is just the beginning. Our 12-month partnership includes proactive monitoring, performance tuning, feature iterations, and a dedicated support channel. We're in this together for the long haul.",
    duration: "12 Months",
    deliverables: [
      "24/7 monitoring",
      "Monthly performance reports",
      "Feature iterations",
      "Priority support",
    ],
    color: "#f59e0b",
    gradient: "from-[#f59e0b] to-[#fbbf24]",
    bg: "bg-[#f59e0b]/10",
    border: "border-[#f59e0b]/20",
    text: "text-[#fbbf24]",
  },
];
const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "TechCore Studio Development Process",
  description: "Our 6-step software development process from discovery to launch.",
  totalTime: "P12W",
  step: [
    {
      "@type": "HowToStep",
      name: "Discovery",
      text: "Deep-dive workshops to understand your business goals and requirements.",
      url: "https://techcore.studio/#process",
    },
    {
      "@type": "HowToStep",
      name: "Strategy",
      text: "Technical blueprint and architecture design.",
      url: "https://techcore.studio/#process",
    },
    {
      "@type": "HowToStep",
      name: "Design",
      text: "User-centered interface and experience design.",
      url: "https://techcore.studio/#process",
    },
    {
      "@type": "HowToStep",
      name: "Development",
      text: "Clean, scalable code with modern frameworks.",
      url: "https://techcore.studio/#process",
    },
    {
      "@type": "HowToStep",
      name: "Launch",
      text: "Careful deployment with full testing.",
      url: "https://techcore.studio/#process",
    },
    {
      "@type": "HowToStep",
      name: "Support",
      text: "12-month partnership with proactive monitoring.",
      url: "https://techcore.studio/#process",
    },
  ],
};


export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-32 overflow-hidden">
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(93,103,242,0.04),transparent_50%)]" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#5d67f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-3xl" />

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
            <div className="w-2 h-2 rounded-full bg-[#5d67f2] shadow-lg shadow-[#5d67f2]/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#5d67f2]/50" />
          </motion.div>

          <span className="text-[#5d67f2] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Our Proven{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
              Process
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A battle-tested methodology refined over 12 years and 300+ projects.
            Transparent, collaborative, and designed to deliver exceptional
            results every time.
          </p>
        </motion.div>

        {/* Process Steps - Desktop: Side by Side, Mobile: Vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Step Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-3"
          >
            {steps.map((step, index) => (
              <motion.button
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-500 text-left group ${
                  activeStep === index
                    ? `${step.bg} ${step.border} shadow-lg`
                    : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    activeStep === index
                      ? `${step.bg} ${step.text} border ${step.border}`
                      : "bg-white/[0.03] text-gray-600 border border-white/[0.06]"
                  }`}
                >
                  {activeStep === index ? step.icon : step.number}
                </div>
                <div className="flex-1">
                  <div
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      activeStep === index ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-gray-500">{step.duration}</div>
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-all duration-300 ${
                    activeStep === index
                      ? `${step.text} translate-x-0 opacity-100`
                      : "text-gray-600 -translate-x-2 opacity-0"
                  }`}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Right: Active Step Detail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${steps[activeStep].gradient} opacity-5 rounded-bl-full`}
                />

                {/* Step number large */}
                <div className="absolute top-6 right-8 text-8xl font-bold text-white/[0.03] leading-none select-none">
                  {steps[activeStep].number}
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${steps[activeStep].bg} border ${steps[activeStep].border} flex items-center justify-center ${steps[activeStep].text}`}
                    >
                      {steps[activeStep].icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        Step {steps[activeStep].number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <h4
                    className={`text-lg font-medium mb-4 ${steps[activeStep].text}`}
                  >
                    {steps[activeStep].subtitle}
                  </h4>

                  <p className="text-gray-400 leading-relaxed mb-8 text-base">
                    {steps[activeStep].description}
                  </p>

                  {/* Deliverables */}
                  <div className="mb-8">
                    <div className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#5d67f2]" />
                      Key Deliverables
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {steps[activeStep].deliverables.map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full`}
                            style={{
                              backgroundColor: steps[activeStep].color,
                            }}
                          />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${steps[activeStep].bg} ${steps[activeStep].text} border ${steps[activeStep].border} text-sm font-medium`}
                    >
                      <ClockIcon />
                      Typical Duration: {steps[activeStep].duration}
                    </div>

                    {activeStep < steps.length - 1 && (
                      <button
                        onClick={() => setActiveStep(activeStep + 1)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                      >
                        Next Step
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Timeline Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 hidden lg:block"
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center gap-3 group cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                      index <= activeStep
                        ? `border-[${step.color}] bg-[${step.color}]`
                        : "border-white/20 bg-transparent"
                    }`}
                    style={{
                      borderColor:
                        index <= activeStep ? step.color : undefined,
                      backgroundColor:
                        index <= activeStep ? step.color : undefined,
                    }}
                  />
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${
                      index === activeStep
                        ? "text-white"
                        : index < activeStep
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-px mx-4 transition-colors duration-500 ${
                      index < activeStep
                        ? "bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]"
                        : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}