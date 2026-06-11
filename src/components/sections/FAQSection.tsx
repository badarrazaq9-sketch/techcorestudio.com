"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getFAQPageSchema } from "@/lib/schema";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects range from 8-12 weeks for MVP delivery, depending on complexity. We've delivered simple marketing sites in 3 weeks and enterprise platforms in 6 months. During our discovery phase, we'll give you a precise timeline with milestones — no vague estimates.",
    category: "Timeline",
  },
  {
    question: "What makes TechCore different from other agencies?",
    answer: "Three things: (1) Senior-only teams — every engineer has 8+ years experience, no juniors or outsourcing. (2) UK & USA offices — timezone-friendly collaboration with local market expertise. (3) Security-first — SOC 2 compliance built-in from day one, not bolted on later. We're partners, not vendors.",
    category: "Differentiation",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer: "Both. We've built MVPs for pre-seed startups that raised Series A, and rebuilt legacy systems for Fortune 500 companies. Our process scales — we adapt team size and scope to your stage, whether you need a quick prototype or a mission-critical platform.",
    category: "Clients",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer fixed-price projects (best for defined scope) and dedicated team retainers (best for ongoing work). Every proposal includes transparent line-item pricing — no hidden fees, no surprise invoices. Typical projects range from £15k to £150k+.",
    category: "Pricing",
  },
  {
    question: "How do you handle communication and updates?",
    answer: "Daily standups via Slack, weekly video reviews, and a dedicated project dashboard you can access 24/7. Your account strategist is available during UK and USA business hours. We believe in over-communication — you'll never wonder what we're working on.",
    category: "Process",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Frontend: Next.js, React, TypeScript, Tailwind CSS. Backend: Node.js, Python, Go, PostgreSQL, MongoDB. Cloud: AWS, Vercel, Google Cloud. AI/ML: OpenAI, LangChain, TensorFlow. We choose the right stack for your specific needs, not our preferences.",
    category: "Tech Stack",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Absolutely. Every project includes 3 months of post-launch support. We also offer 12-month partnership retainers that include proactive monitoring, performance tuning, security updates, and feature iterations. Launch is just the beginning.",
    category: "Support",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Yes — we regularly embed with in-house teams, either as supplementary capacity or as technical leadership. We're comfortable with your Jira, your GitHub, your Slack. Our code reviews and documentation standards ensure seamless handoffs.",
    category: "Collaboration",
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

      

  return (
    <section id="faq" className="relative pt-5 pb-13 overflow-hidden">
            <section id="faq" className="relative pt-5 overflow-hidden">
      {/* Inject FAQ Schema */}
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ... rest of your FAQ section JSX */}
    </section>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.04),transparent_50%)]" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8b5cf6]/50" />
            <HelpCircle size={16} className="text-[#8b5cf6]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8b5cf6]/50" />
          </motion.div>

          <span className="text-[#8b5cf6] text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Got{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
              Questions?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Everything you need to know before starting your project. Can't find
            what you're looking for? Reach out directly.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "All"
                ? "bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white shadow-lg shadow-[#5d67f2]/20"
                : "bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white shadow-lg shadow-[#5d67f2]/20"
                  : "bg-white/[0.03] border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                  className={`rounded-xl border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "border-[#5d67f2]/30 bg-[#5d67f2]/[0.03] shadow-lg shadow-[#5d67f2]/5"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.03]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white"
                            : "bg-white/[0.05] text-gray-500 group-hover:text-white"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <span
                        className={`font-semibold transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#5d67f2]/20 text-[#5d67f2]"
                          : "bg-white/[0.05] text-gray-500 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-16">
                          <p className="text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="w-12 h-12 rounded-full bg-[#5d67f2]/10 flex items-center justify-center">
              <MessageCircle size={20} className="text-[#5d67f2]" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-white font-medium mb-1">
                Still have questions?
              </div>
              <div className="text-gray-500 text-sm">
                Our team is happy to help.{" "}
                <a
                  href="#contact"
                  className="text-[#5d67f2] hover:text-[#8b5cf6] transition-colors font-medium"
                >
                  Contact us directly
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}