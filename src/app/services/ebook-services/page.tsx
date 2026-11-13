import React from "react";
import Link from "next/link";
import MotionDiv from "@/components/ui/MotionDiv";
import { BookOpen, CheckCircle2 } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import type { Metadata } from "next";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";
import FaqAccordion from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "eBook Services for Authors | Formatting and Publishing",
  description: "eBook services for authors. Formatting, cover design and publishing for Kindle, EPUB and print. Keep 100 percent of your rights. From $499.",
  alternates: { canonical: "https://techcorestudio.com/services/ebook-services" },
  openGraph: {
    title: "eBook Services for Authors | Formatting and Publishing",
    description: "eBook services for authors. Formatting, cover design and publishing for Kindle, EPUB and print. Keep 100 percent of your rights. From $499.",
    url: "https://techcorestudio.com/services/ebook-services",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "eBook Services for Authors | Formatting and Publishing",
    description: "eBook services for authors. Formatting, cover design and publishing for Kindle, EPUB and print. Keep 100 percent of your rights. From $499.",
  },
};

const packages = [
  {
    name: "Debutant",
    originalPrice: "$998",
    price: "$499",
    popular: false,
    description: "Everything you need to publish your first book. Regularly $998.",
    features: [
      "Formatting & Editing",
      "Publishing (Paperback & Hardback)",
      "Book Cover Design",
      "Book Launch",
      "Book Publishing on Apple",
      "Book Publishing on Google",
      "ISBN & Copyright Registration",
      "Copyright Registration on Amazon",
      "Illustrated Book Interior Layout",
      "Dedicated Project Manager",
      "International Distribution",
      "Expedited service available (+$50)",
    ],
  },
  {
    name: "Fire Starter",
    originalPrice: "$2,000",
    price: "$1,000",
    popular: true,
    description: "For authors ready to reach every major store. Regularly $2,000.",
    features: [
      "Formatting & Editing",
      "Publishing (Paperback & Hardback)",
      "Book Cover Design",
      "Book Launch",
      "Book Publishing on Apple, Google, Amazon & Barnes & Noble",
      "ISBN & Copyright Registration",
      "Copyright Registration on Amazon",
      "Illustrated Book Interior Layout",
      "Dedicated Project Manager",
      "International Distribution",
      "Expedited service available (+$50)",
    ],
  },
  {
    name: "Best Seller",
    originalPrice: "$4,000",
    price: "$2,000",
    popular: false,
    description: "The complete publishing package, premium cover included. Regularly $4,000.",
    features: [
      "Formatting & Editing",
      "Publishing (Paperback & Hardback)",
      "Book Cover Design (Premium)",
      "Book Launch",
      "Book Publishing on Apple, Google, Amazon & Barnes & Noble",
      "Book Publishing at Ingram (Paperback & Hardback)",
      "ISBN & Copyright Registration",
      "Copyright Registration on Amazon",
      "Illustrated Book Interior Layout",
      "Dedicated Project Manager",
      "International Distribution",
      "Expedited service available (+$50)",
    ],
  },
];

const deliverables = [
  "Professional ebook formatting for Kindle, EPUB and PDF",
  "A custom ebook cover made to sell the book in its genre",
  "Interior layout and typesetting that reads well on any device",
  "A table of contents with clear chapter headings and page styling",
  "A linked table of contents and NCX navigation for EPUB",
  "Kept styling for italics, bold and underline",
  "Clickable endnotes and footnotes",
  "Publishing setup help for Amazon KDP and other platforms",
  "An author bio page and back matter setup",
  "A print ready PDF version for paperback",
  "The exact file set you need: EPUB, Amazon ready EPUB, PDF and Word doc",
  "Source files and full ownership",
];

const steps = [
  { n: "01", title: "Share Your Manuscript", text: "Send your finished draft in Word or Google Docs, with notes about your readers and your goals for the book." },
  { n: "02", title: "Format and Design the Cover", text: "We format the book for Kindle, EPUB and PDF, and design a cover that fits your genre and catches the eye." },
  { n: "03", title: "Review and Refine the Proofs", text: "Read the proofs on your own devices. We revise until every chapter looks exactly right." },
  { n: "04", title: "Publish and Launch Your Book", text: "We set up your listings on Amazon KDP and the other stores, then hand over every file you own." },
];

const faqs = [
  { q: "What file do I need to send you?", a: "Your finished manuscript in Word or Google Docs is enough. If you have images or a rough cover idea, send those too and we handle the rest." },
  { q: "Which stores will my book be on?", a: "Amazon KDP, Apple Books, Kobo, Barnes and Noble, IngramSpark and Draft2Digital, depending on the package you choose." },
  { q: "Do I keep the rights to my book?", a: "Yes, 100 percent. You own the book, the cover and every source file. We never take royalties or rights." },
  { q: "How long does it take?", a: "Most books are formatted and ready in 2 to 4 weeks, depending on length and revisions. Fast service is available for 50 dollars extra." },
  { q: "Can you publish a paperback too?", a: "Yes. Every package includes paperback and hardback publishing setup, plus a print ready PDF." },
];

export default function EbookServicesPage() {

  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">

      <AnimatedBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-8">
              <BookOpen size={14} /> eBook Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Book Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">For Readers Everywhere</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Professional ebook formatting, cover design and publishing help for authors ready to sell. Kindle, EPUB and PDF, plus paperback and hardback setup, all handled for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#pricing" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6] font-semibold hover:opacity-90 transition-opacity">
                View Packages
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-full border border-white/20 font-semibold hover:bg-white/5 transition-colors">
                Start Your Book
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="pricing" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold">Packages That Fit Every Author</h2>
            <p className="text-gray-400 mt-4">Pick the package that fits your book. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <MotionDiv
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
                  <span className="line-through opacity-40 text-2xl mr-3">{pkg.originalPrice}</span>
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
              </MotionDiv>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12">
            Need something custom for a longer book or a rush job?{" "}
            <Link href="/contact" className="text-[#7b85ff] font-semibold hover:underline">
              Get a custom quote
            </Link>
            .
          </p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">What You Get</span>
            <h2 className="text-3xl md:text-5xl font-bold">Everything Your Book Needs to Sell Well</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((d) => (
              <div key={d} className="flex items-start gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
                <CheckCircle2 size={20} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                <span className="text-gray-200 text-sm leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 font-semibold mt-12">
            Your book, ready for Amazon KDP, Apple Books, Kobo, Barnes &amp; Noble, IngramSpark, and Draft2Digital.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold">Your Manuscript Becomes a Finished Book</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
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
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold">Common Questions Answered</h2>
          </div>
          <FaqAccordion faqs={faqs} ctaLabel="Start Your Book" />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="relative py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/services/logo-design" className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors">
              Logo Design
            </Link>
            <Link href="/services/branding" className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors">
              Branding
            </Link>
            <Link href="/services" className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors">
              All Services
            </Link>
            <Link href="/pricing" className="px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors">
              Pricing
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <ServiceJsonLd slug="ebook-services" metaTitle="eBook Services for Authors | Formatting and Publishing" metaDescription="eBook services for authors. Formatting, cover design and publishing for Kindle, EPUB and print. Keep 100 percent of your rights. From $499." serviceType="eBook Services" faqs={faqs} />
    </div>
  );
}
