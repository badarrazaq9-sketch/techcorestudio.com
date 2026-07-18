"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Portfolio", href: "/portfolio" },

];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#08080e]/85 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-2xl shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo → Homepage */}
        <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-[120px] h-[90px]">
              <Image
                src="/TechCoreStudio Logo-01.png"
                alt="TechCore Studio"
                fill
                sizes="144px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
            >
              {link.href.startsWith("/#") ? (
                // Anchor links for homepage sections
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] group-hover:w-full transition-all duration-400" />
                </a>
              ) : (
                // Page links (Home, Services)
                <Link
                  href={link.href}
                  className={`text-sm transition-colors duration-300 relative group ${
                    isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] transition-all duration-400 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )}
            </motion.div>
          ))}

          {/* Get Started Button → Services Page */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Link  href="#contact">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(93, 103, 242, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 bg-white text-[#08080e] rounded-full text-sm font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#08080e]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-gray-300 hover:text-white py-2 border-b border-white/5 transition-colors block"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg py-2 border-b border-white/5 transition-colors block ${
                        isActive(link.href) ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link  href="#contact" onClick={() => setIsOpen(false)}>
                <button className="mt-4 w-full py-3 bg-white text-[#08080e] rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}