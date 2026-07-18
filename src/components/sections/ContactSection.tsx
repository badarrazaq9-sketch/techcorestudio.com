"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { getContactPageSchema } from "@/lib/schema";

const contactInfo = [
  {
    icon: <MapPin size={20} />,
    label: "Visit Us",
    value: "London, UK & South Carolina, USA",
    color: "text-[#5d67f2]",
    bg: "bg-[#5d67f2]/10",
    border: "border-[#5d67f2]/20",
  },
  {
    icon: <Mail size={20} />,
    label: "Email Us",
    value: "davidanderson@techcorestudio.com",
    color: "text-[#8b5cf6]",
    bg: "bg-[#8b5cf6]/10",
    border: "border-[#8b5cf6]/20",
  },
  {
    icon: <Phone size={20} />,
    label: "Call Us",
    value: "+44 20 7946 0958",
    color: "text-[#ec4899]",
    bg: "bg-[#ec4899]/10",
    border: "border-[#ec4899]/20",
  },
  {
    icon: <Clock size={20} />,
    label: "Working Hours",
    value: "Mon - Fri: 9AM - 6PM GMT/EST",
    color: "text-[#06b6d4]",
    bg: "bg-[#06b6d4]/10",
    border: "border-[#06b6d4]/20",
  },
];

const budgetOptions = [
  "£5k - £15k",
  "£15k - £50k",
  "£50k - £100k",
  "£100k+",
  "Not sure yet",
];

const serviceOptions = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "AI Integration",
  "Cloud Solutions",
  "Digital Strategy",
  "Other",
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TechCore Studio",
  description: "Get in touch with our UK & USA software house team.",
  mainEntity: {
    "@type": "Organization",
    name: "TechCore Studio",
    telephone: ["+44-20-7946-0958", "+1-212-555-0199"],
    email: "davidanderson@techcorestudio.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "GB",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "South Carolina",
        addressCountry: "US",
      },
    ],
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      alert(data.error || "Failed to send message. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please check your connection and try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(93,103,242,0.06),transparent_50%)]" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#5d67f2]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#8b5cf6]/5 rounded-full blur-3xl" />

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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899]">
              Extraordinary
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to transform your digital presence? Tell us about your project
            and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Start a Conversation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a detailed brief or just a rough idea,
                we&apos;re here to help turn your vision into reality.
              </p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 p-5 rounded-xl ${item.bg} border ${item.border} backdrop-blur-sm transition-all duration-300 cursor-default group`}
              >
                <div
                  className={`w-12 h-12 rounded-lg ${item.bg} ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-white font-medium text-sm">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick response badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-green-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">
                  Average Response Time
                </div>
                <div className="text-gray-500 text-xs">
                  Under 2 hours during business hours
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 overflow-hidden">
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#5d67f2]/10 to-transparent rounded-bl-full" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 max-w-md mx-auto mb-8">
                    Thank you for reaching out. Our team will review your
                    project and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        budget: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#5d67f2]/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#5d67f2]/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#5d67f2]/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[#5d67f2]/50 focus:bg-white/[0.05] transition-all duration-300 text-sm appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                        }}
                      >
                        <option value="" className="bg-[#0a0a14]">
                          Select budget range
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0a0a14]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:border-[#5d67f2]/50 focus:bg-white/[0.05] transition-all duration-300 text-sm appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="" className="bg-[#0a0a14]">
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0a0a14]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, and timeline..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-[#5d67f2]/50 focus:bg-white/[0.05] transition-all duration-300 text-sm resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(93, 103, 242, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] text-white rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-[#4f57d9] hover:to-[#7c4ce6] transition-all duration-500 shadow-lg shadow-[#5d67f2]/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs text-gray-600 text-center">
                    By submitting this form, you agree to our Privacy Policy and
                    Terms of Service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}