"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Share2,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link"; // ← ADD THIS IMPORT

const footerLinks = {
  Services: [
    { name: "Logo Design", href: "/services" },
    { name: "3D Logo Design", href: "/services" },
    { name: "Mascot Logo Design", href: "/services" },
    { name: "Branding", href: "/services" },
    { name: "Web Design", href: "/services" },
    { name: "E-commerce Development", href: "/services" },
    { name: "Mobile App Development", href: "/services" },
    { name: "Custom Development", href: "/services" },
    { name: "Social Media Marketing", href: "/services" },
    { name: "Lead Generation", href: "/services" },
    { name: "SEO", href: "/services" },
    { name: "Video Editing", href: "/services" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "#" }, // Add /careers page if needed
    { name: "Blog", href: "#" }, // Add /blog page if needed
    { name: "Press Kit", href: "#" },
    { name: "Partners", href: "#" },
  ],
  // Resources: [
  //   { name: "Documentation", href: "#" },
  //   { name: "Help Center", href: "#" },
  //   { name: "Community", href: "#" },
  //   { name: "Status", href: "#" },
  //   { name: "Changelog", href: "#" },
  // ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Licenses", href: "/licenses" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  {
    icon: <MessageCircle size={18} />,
    href: "#",
    label: "Chat",
    color: "hover:bg-[#5d67f2]/20 hover:text-[#5d67f2]",
  },
  {
    icon: <Share2 size={18} />,
    href: "#",
    label: "Share",
    color: "hover:bg-[#8b5cf6]/20 hover:text-[#8b5cf6]",
  },
  {
    icon: <Link2 size={18} />,
    href: "#",
    label: "Link",
    color: "hover:bg-[#ec4899]/20 hover:text-[#ec4899]",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:hello@techcorestudio.com",
    label: "Email",
    color: "hover:bg-[#06b6d4]/20 hover:text-[#06b6d4]",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <footer
      id="footer"
      className="relative border-t border-white/[0.06] pt-8 pb-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(93,103,242,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10  ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-2">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 self-start"
          >
            <Link href="/" className="block mb-4">
              <div className="relative w-44 h-44">
                <img
                  src="/TechCoreStudio Logo-01.png"
                  alt="TechCore Studio"
                  className="w-full h-full object-contain"
                />
              </div>
            
            </Link>
            <p className="text-gray-400 mb-1 leading-relaxed text-sm">
              Premium digital studio serving London, UK and New York, USA.
            </p>
            <p className="text-gray-500 mb-3 leading-relaxed text-sm">
              From logos and branding to web, app, and marketing services,
              we help businesses grow with premium digital solutions.
            </p>

            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-[#5d67f2]" />
              <span className="text-sm text-gray-400">
                London, UK • New York, USA
              </span>
            </div>

            {/* Newsletter */}
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#5d67f2]/50 transition-all duration-300 text-sm hover:border-white/[0.15]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsSubscribed(true);
                  setEmail("");
                }}
                className="px-4 py-3 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-lg hover:from-[#4f57d9] hover:to-[#7c4ce6] transition-all duration-300 shadow-lg shadow-[#5d67f2]/20"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-[#5d67f2] mt-2"
              >
                Thanks for subscribing!
              </motion.p>
            )}
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {Object.entries(footerLinks).map(([category, links], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">
                  {category}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-500 hover:text-[#5d67f2] transition-colors duration-300 text-sm flex items-center gap-1 group"
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-[#5d67f2] transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-gray-600 text-sm">
              © 2026 TechCore Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                All systems operational
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-500 ${social.color} transition-all duration-300`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}