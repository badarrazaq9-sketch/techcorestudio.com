"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export type FaqAccordionItem = {
  q: string;
  a: string;
};

export default function FaqAccordion({ faqs, ctaLabel }: { faqs: FaqAccordionItem[]; ctaLabel: string }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <div className="space-y-4">
        {faqs.map((f, i) => (
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
          {ctaLabel} <ArrowRight size={18} />
        </Link>
      </div>
    </>
  );
}
