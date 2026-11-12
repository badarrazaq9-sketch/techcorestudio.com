"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, BookOpen, PenLine, Megaphone } from "lucide-react";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

type Plan = {
  name: string;
  price: string;
  originalPrice?: string;
  popular?: boolean;
  description: string;
  features: string[];
};

type Category = {
  name: string;
  icon: React.ReactNode;
  tagline: string;
  plans: Plan[];
};

const ghostShared = [
  "Written by Native-English Authors",
  "Work Written by A Dedicated Author",
  "100% Ownership Rights",
  "Customized Layout",
  "Hardcover Book Formatting",
  "Custom Book Cover Design",
  "Newsletter",
  "Book Video Trailer",
  "Book Promotion",
  "Book Launch",
  "Empowering Author Website",
  "Domain & Hosting",
  "Social Media Marketing",
  "Amazon Marketing",
  "Book Promotion on Facebook and Instagram",
  "Book Self-Publishing Assistance",
  "Distribution On Barnes & Noble",
  "Extended Distribution (Publishing the Book across 40,000 Different Platforms all across the Globe)",
];

const categories: Category[] = [
  {
    name: "eBook Services",
    icon: <BookOpen size={22} />,
    tagline: "Book publishing packages — formatting, cover, and distribution.",
    plans: [
      {
        name: "Debutant",
        price: "$499",
        originalPrice: "$998",
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
        price: "$1,000",
        originalPrice: "$2,000",
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
        price: "$2,000",
        originalPrice: "$4,000",
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
    ],
  },
  {
    name: "Book Writing",
    icon: <PenLine size={22} />,
    tagline: "Ghostwriting — a full book written for you, start to finish.",
    plans: [
      {
        name: "Silver",
        price: "$799",
        originalPrice: "$1,598",
        description: "A 50–99 page book, written by native-English authors. 8–12 weeks.",
        features: ["50 to 99 pages", "12 to 15 Chapters", "8 to 12 week duration", "5 Author's Review in the Process", ...ghostShared],
      },
      {
        name: "Gold",
        price: "$1,499",
        originalPrice: "$2,998",
        popular: true,
        description: "A 100–150 page book with full publishing support. 12–16 weeks.",
        features: ["100 to 150 pages", "15 to 20 Chapters", "12 to 16 week duration", "10 Author's Review in the Process", ...ghostShared],
      },
      {
        name: "Platinum",
        price: "$5,999",
        originalPrice: "$11,998",
        description: "A 150–199 page book with Amazon publishing included. 16–20 weeks.",
        features: ["150 to 199 pages", "20 to 25 Chapters", "16 to 20 week duration", "20 Author's Review in the Process", "Publishing On Amazon Included", ...ghostShared],
      },
      {
        name: "Diamond",
        price: "$7,990",
        originalPrice: "$15,980",
        description: "A 200–250 page book with unlimited author reviews. 20–24 weeks.",
        features: ["200 to 250 pages", "25 to 30 Chapters", "20 to 24 week duration", "Unlimited Author's Review in the Process", "Publishing On Amazon Included", ...ghostShared],
      },
    ],
  },
  {
    name: "Book Marketing",
    icon: <Megaphone size={22} />,
    tagline: "Full marketing for your book — social, SEO, Amazon, and media.",
    plans: [
      {
        name: "Basic Plan",
        price: "$8,000",
        originalPrice: "$16,000",
        description: "Full book marketing: social, SEO, Amazon optimization, and media features. 10–12 weeks.",
        features: [
          "Social Media Marketing",
          "Online Reputation Management",
          "Brand Reputation Management",
          "Enhanced Author Website",
          "Domain & Hosting",
          "SEO Friendly Content",
          "3 Design Concepts",
          "Unlimited Revisions",
          "Interactive Website Design",
          "Amazon Integration",
          "3 Promotional Banners",
          "Interactive jQuery Slider Banner",
          "Newsletter",
          "Drop Shipping Integration",
          "CMS — Manage your content",
          "Book Reviews & Ratings",
          "Payment Module Integration",
          "3rd Party API Integration",
          "Customized Filters for Refined Search",
          "3 Months Search Engine Optimization",
          "3 Custom Articles (high-domain websites)",
          "Amazon Optimization",
          "Amazon's Author Central Page",
          "Amazon Keyword Optimization",
          "Blurb & Metadata optimization",
          "4 Creative & Editorial Reviews for Amazon",
          "Google Graph and Knowledge Panel",
          "A Captivating Video Book Trailer",
          "3 Full Featured Articles with publishing on Media Outlets",
          "Extended Distribution (Publishing the Book across 40,000 Different Platforms all across the Globe)",
          "Expedited service available (+$50)",
        ],
      },
    ],
  },
];

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://techcorestudio.com/pricing#webpage",
      "url": "https://techcorestudio.com/pricing",
      "name": "Pricing | TechCore Studio",
      "isPartOf": { "@id": "https://techcorestudio.com#website" },
      "about": { "@id": "https://techcorestudio.com#organization" },
      "description": "Transparent pricing for eBook services, book writing, and book marketing at TechCore Studio."
    },
    {
      "@type": "Service",
      "serviceType": "eBook Services",
      "provider": { "@id": "https://techcorestudio.com#organization" },
      "areaServed": [{ "@type": "Country", "name": "United Kingdom" }, { "@type": "Country", "name": "United States" }],
      "description": "eBook formatting, cover design, and publishing packages from $499."
    }
  ]
};

export default function PricingPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Pricing | TechCore Studio</title>
        <meta
          name="description"
          content="Transparent pricing for eBook services, book writing, and book marketing at TechCore Studio. Publishing packages from $499."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pricingSchema).replace(/</g, "\\u003c"),
          }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />

      <section className="relative pt-40 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#7b85ff] font-semibold uppercase tracking-[0.2em] text-xs block mb-4">Pricing</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Clear Prices, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5d67f2] to-[#8b5cf6]">No Surprises</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Publishing, ghostwriting, and marketing packages for authors — pick the one that fits your book.
            </p>
          </motion.div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.name} className="relative py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-11 h-11 rounded-xl bg-[#5d67f2]/15 border border-[#5d67f2]/25 flex items-center justify-center text-[#7b85ff]">
                {cat.icon}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">{cat.name}</h2>
            </div>
            <p className="text-gray-400 mb-10">{cat.tagline}</p>

            <div className={`grid grid-cols-1 gap-8 items-start ${cat.plans.length === 1 ? "md:grid-cols-1 max-w-xl" : cat.plans.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>
              {cat.plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`relative p-8 rounded-3xl border flex flex-col h-full ${plan.popular ? "bg-gradient-to-b from-[#5d67f2]/25 to-[#8b5cf6]/10 border-[#5d67f2]/50 shadow-2xl shadow-[#5d67f2]/10" : "bg-white/[0.03] border-white/10"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{plan.description}</p>
                  <div className="text-4xl font-bold mb-8">
                    {plan.originalPrice && <span className="line-through opacity-40 text-2xl mr-3">{plan.originalPrice}</span>}
                    {plan.price}
                  </div>
                  <div className="space-y-3 mb-8 flex-grow text-sm max-h-80 overflow-y-auto pr-2">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="flex-shrink-0 text-emerald-400 mt-0.5" />
                        <span className="text-gray-300">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular ? "bg-white text-black hover:bg-gray-200" : "bg-white/10 hover:bg-white/15"}`}>
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <ContactSection />
      <Footer />
    </div>
  );
}
