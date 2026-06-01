"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, CircuitBoard, Award, TrendingUp } from "lucide-react";

const stats = [
  { value: "150+", label: "Global Clients", icon: <Users size={20} /> },
  { value: "300+", label: "Projects Delivered", icon: <CircuitBoard size={20} /> },
  { value: "50+", label: "Expert Engineers", icon: <Award size={20} /> },
  { value: "12+", label: "Years Experience", icon: <TrendingUp size={20} /> },
];

export default function StatsRow() {
  return (
    <section className="relative py-20 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-b from-white/[0.08] to-transparent rounded-2xl overflow-hidden backdrop-blur-sm border border-white/[0.06]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#08080e]/60 backdrop-blur-md p-8 text-center group hover:bg-white/[0.04] transition-all duration-500"
            >
              <div className="flex justify-center mb-3 text-[#5d67f2] group-hover:text-[#8b5cf6] transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#5d67f2] group-hover:to-[#8b5cf6] transition-all">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}