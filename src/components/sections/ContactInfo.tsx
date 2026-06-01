"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={24} />,
    title: "Email Us",
    lines: ["hello@techcore.studio", "careers@techcore.studio"],
    color: "indigo",
  },
  {
    icon: <Phone size={24} />,
    title: "Call Us",
    lines: ["+44 20 7946 0958 (UK)", "+1 212 555 0199 (USA)"],
    color: "purple",
  },
  {
    icon: <Clock size={24} />,
    title: "Working Hours",
    lines: ["Mon - Fri: 9AM - 6PM GMT", "Mon - Fri: 9AM - 6PM EST"],
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  indigo: { bg: "bg-[#5d67f2]/10", border: "border-[#5d67f2]/20", text: "text-[#7b85ff]" },
  purple: { bg: "bg-[#8b5cf6]/10", border: "border-[#8b5cf6]/20", text: "text-[#a78bfa]" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
};

export default function ContactInfo() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {contacts.map((contact, i) => {
            const colors = colorMap[contact.color];
            return (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`p-8 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:border-opacity-50 transition-all duration-500 group text-center`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{contact.title}</h3>
                <div className="space-y-2">
                  {contact.lines.map((line) => (
                    <p key={line} className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}