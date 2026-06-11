"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Globe, Hexagon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const offices = [
  {
    city: "London",
    country: "United Kingdom",
    address: "Tech Hub, 123 Innovation Street, London EC2A 4BX",
    phone: "+44 20 7946 0958",
    flag: "🇬🇧",
    timezone: "GMT",
  },
  {
    city: "New York",
    country: "United States",
    address: "Digital Tower, 456 Broadway, New York, NY 10013",
    phone: "+1 212 555 0199",
    flag: "🇺🇸",
    timezone: "EST",
  },
];

export default function GlobalPresence() {
  return (
    <section className="relative pt-5 pb-13 overflow-hidden border-t border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#5d67f2]/3 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="Global Presence"
          title={
            <>
              Two Offices,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">
                One Team
              </span>
            </>
          }
          description="With offices in London and New York, we deliver round-the-clock service to clients across the globe."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-[#5d67f2]/30 hover:bg-white/[0.04] transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{office.flag}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{office.city}</h3>
                  <span className="text-sm text-gray-500">{office.country}</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#5d67f2] mt-0.5 shrink-0" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-[#5d67f2] shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Hexagon size={16} className="text-[#5d67f2] shrink-0" />
                  <span>{office.timezone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}