"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

export type ServicePackage = {
  name: string;
  originalPrice?: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
};

export type ServiceStep = {
  n: string;
  title: string;
  text: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceDetailData = {
  slug: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  packages: ServicePackage[];
  deliverables: string[];
  deliverablesTitle?: string;
  platformStrip?: string;
  steps: ServiceStep[];
  faqs: ServiceFaq[];
};

export default function ServiceDetailTemplate({ data }: { data: ServiceDetailData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://techcorestudio.com/services/${data.slug}#webpage`,
        "url": `https://techcorestudio.com/services/${data.slug}`,
        "name": data.metaTitle,
        "isPartOf": { "@id": "https://techcorestudio.com#website" },
        "about": { "@id": "https://techcorestudio.com#organization" },
        "description": data.metaDescription,
      },
      {
        "@type": "Service",
        "serviceType": data.serviceType,
        "provider": { "@id": "https://techcorestudio.com#organization" },
        "areaServed": [
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United States" },
        ],
        "description": data.metaDescription,
      },
    ],
  };

  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-8">
              {data.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {data.heroTitle}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">
                {data.heroHighlight}
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">{data.heroSub}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#pricing" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] font-semibold hover:opacity-90 transition-opacity">
                View Packages
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition-colors">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PACKAGES */}
      {data.packages.length > 0 && (
        <section id="pricing" className="relative py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">Pricing</span>
              <h2 className="text-3xl md:text-5xl font-bold">Simple Packages, Clear Prices</h2>
              <p className="text-gray-400 mt-4">Pick the package that fits your project. No hidden fees.</p>
            </div>

            <div className={`grid grid-cols-1 gap-8 items-start ${data.packages.length === 1 ? "md:grid-cols-1 max-w-xl mx-auto" : data.packages.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : data.packages.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
              {data.packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative p-8 rounded-3xl border flex flex-col h-full ${pkg.popular ? "bg-gradient-to-b from-[#5d67f2]/25 to-[#8b5cf6]/10 border-[#5d67f2]/50 shadow-2xl shadow-[#5d67f2]/10 md:scale-105" : "bg-white/[0.03] border-white/10"}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{pkg.description}</p>
                  <div className="text-4xl font-bold mb-8">
                    {pkg.originalPrice && <span className="line-through opacity-40 text-2xl mr-3">{pkg.originalPrice}</span>}
                    {pkg.price}
                  </div>
                  <div className="space-y-3 mb-8 flex-grow text-sm max-h-80 overflow-y-auto pr-2">
                    {pkg.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${pkg.popular ? "bg-white text-black hover:bg-gray-200" : "bg-white/10 hover:bg-white/15"}`}>
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-12">
              Need something custom?{" "}
              <Link href="/contact" className="text-[#7b85ff] font-semibold hover:underline">
                Get a custom quote
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      {/* DELIVERABLES */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">What You Get</span>
            <h2 className="text-3xl md:text-5xl font-bold">{data.deliverablesTitle || "Everything Included, Down to the Last Detail"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
                <CheckCircle2 size={20} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                <span className="text-gray-200 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
          {data.platformStrip && (
            <p className="text-center text-gray-400 font-semibold mt-12">{data.platformStrip}</p>
          )}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold">From First Call to Finished Product</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="text-[#7b85ff] font-bold text-sm mb-4">STEP {s.n}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs.length > 0 && (
        <section className="relative py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-bold">Common Questions Answered</h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((f, i) => (
                <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 flex justify-between items-center text-left font-semibold">
                    {f.q}
                    <ChevronDown size={20} className={`flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{f.a}</p>}
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] font-semibold hover:opacity-90 transition-opacity">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer />
    </div>
  );
}
