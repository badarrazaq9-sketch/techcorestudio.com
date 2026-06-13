"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Box,
  Brush,
  ChartNoAxesColumnIncreasing,
  Check,
  Code2,
  LayoutTemplate,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { pricingCategories, pricingCategoryMap } from "@/app/pricing/pricingData";
import SectionHeader from "@/components/ui/SectionHeader";

const categoryIcons: Record<string, LucideIcon> = {
  "web-design": LayoutTemplate,
  "e-commerce-development": ShoppingCart,
  "shopify-packages": Store,
  "web-maintenance-packages": Wrench,
  "3d-animation": Box,
  "logo-design": Palette,
  "lead-generation": Megaphone,
  seo: Search,
  "social-media-marketing": ChartNoAxesColumnIncreasing,
  "app-development": Smartphone,
  "custom-development": Code2,
  branding: Brush,
  "video-editing": Video,
};

export default function PricingPackages() {
  const [activeCategory, setActiveCategory] = useState("web-design");
  const category = pricingCategoryMap[activeCategory];
  const packages = category.packages ?? [];

  return (
    <section id="pricing-packages" className="relative overflow-hidden py-20 lg:py-28">
      {category.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(category.schema) }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          label="Pricing Categories"
          title={
            <>
              Find the Service That Fits{" "}
              <span className="bg-gradient-to-r from-[#5d67f2] via-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
                Your Goals
              </span>
            </>
          }
          description="Select a service to explore its available packages and included features."
          className="mb-14"
        />

        <div
          className="mx-auto mb-16 flex max-w-7xl flex-wrap items-center justify-center gap-3.5"
          role="tablist"
          aria-label="Pricing categories"
        >
          {pricingCategories.map((item) => {
            const Icon = categoryIcons[item.id] ?? LayoutTemplate;
            const isActive = item.id === activeCategory;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCategory(item.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls="pricing-category-panel"
                className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-6 py-3.5 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:text-base ${
                  isActive
                    ? "border-transparent bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-[0_12px_35px_rgba(93,103,242,0.32)]"
                    : "border-white/12 bg-white/[0.035] text-gray-300 backdrop-blur-md hover:-translate-y-0.5 hover:border-brand-blue/45 hover:bg-brand-blue/10 hover:text-white"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={1.9}
                  className={isActive ? "text-white" : "text-gray-400 transition-colors group-hover:text-[#aeb5ff]"}
                />
                {item.title}
              </button>
            );
          })}
        </div>

        <motion.div
          id="pricing-category-panel"
          key={category.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-10 flex flex-col gap-5 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">
                Selected service
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">{category.title}</h3>
              <p className="mt-3 text-base leading-7 text-gray-400">{category.description}</p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/35 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            >
              Contact Sales
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {packages.length ? (
            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
              {packages.map((packageItem) => (
                <motion.article
                  key={packageItem.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className={`group relative flex h-[620px] min-w-0 flex-col rounded-[2rem] border p-6 transition duration-500 hover:-translate-y-1 sm:p-8 ${
                    packageItem.badge
                      ? "border-brand-blue/50 bg-[linear-gradient(155deg,rgba(93,103,242,0.2),rgba(10,11,25,0.98)_36%)] shadow-[0_24px_80px_rgba(93,103,242,0.2)]"
                      : "border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(9,9,15,0.96)_42%)] shadow-xl shadow-black/20 hover:border-brand-blue/35"
                  }`}
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-purple/10 blur-3xl transition duration-500 group-hover:bg-brand-purple/20" />
                  </div>

                  {packageItem.badge ? (
                    <span className="absolute left-1/2 top-0 z-10 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-blue to-brand-purple px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-brand-blue/30">
                      <Sparkles size={12} />
                      {packageItem.badge}
                    </span>
                  ) : null}

                  <div className="relative flex min-h-[160px] flex-col">
                    <h4 className="line-clamp-2 text-2xl font-bold leading-tight text-white">
                      {packageItem.title}
                    </h4>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                      {packageItem.subtitle}
                    </p>
                  </div>

                  <div className="relative mt-3 border-y border-white/10 py-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-gray-500">Starting from</p>
                    <p className="mt-1 bg-gradient-to-r from-white via-white to-[#aeb5ff] bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                      {packageItem.price}
                    </p>
                  </div>

                  <div
                    className="pricing-card-scroll relative my-5 min-h-0 flex-1 overflow-y-auto pr-3"
                    tabIndex={0}
                    role="region"
                    aria-label={`${packageItem.title} package features`}
                  >
                    <ul className="space-y-3 text-sm text-gray-300">
                      {packageItem.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-blue/25 bg-brand-blue/10 text-[#9ca5ff]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="leading-5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?package=${encodeURIComponent(packageItem.title)}`}
                    className={`group/button relative inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-white transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue ${
                      packageItem.badge
                        ? "bg-gradient-to-r from-brand-blue to-brand-purple shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/40"
                        : "border border-white/15 bg-white/[0.06] hover:border-brand-blue/50 hover:bg-brand-blue/15"
                    }`}
                  >
                    {packageItem.cta}
                    <ArrowRight size={17} className="shrink-0 transition-transform group-hover/button:translate-x-1" />
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-brand-blue/20 bg-[radial-gradient(circle_at_top,rgba(93,103,242,0.14),rgba(255,255,255,0.03)_55%)] p-12 text-center shadow-2xl shadow-brand-blue/5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-[#aeb5ff]">
                {React.createElement(categoryIcons[category.id] ?? LayoutTemplate, { size: 26 })}
              </div>
              <p className="mt-6 text-lg text-gray-300">
                Pricing details for <strong className="text-white">{category.title}</strong> are coming soon.
              </p>
              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Contact our team for a package tailored to your project scope and goals.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
