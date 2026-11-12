"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "branding",
  badge: "BRANDING",
  heroTitle: "A Brand That Builds",
  heroHighlight: "Trust Fast",
  heroSub:
    "We create clean, professional and consistent brand identities that help local businesses stand out, charge better prices, win more jobs and stop looking like the budget option.",
  metaTitle: "Branding & Logo Design for Small Businesses",
  metaDescription:
    "Professional brand identity, logos, color palettes and visual strategy that help small businesses stand out, build trust and communicate clearly. Fast & affordable.",
  serviceType: "Branding",
  packages: [
    {
      name: "Essential Brand Package",
      price: "$499",
      description: "Great starting point for new or very small businesses.",
      features: [
        "Custom logo (3 different concepts)",
        "Main logo + simplified version",
        "5-7 color palette",
        "Recommended fonts & sizes",
        "Short brand style guide (PDF)",
        "Social media icons & covers",
        "Business card layout (both sides)",
        "4 rounds of revisions",
        "All source + ready files",
        "100% ownership rights",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No monthly or hidden fees",
      ],
    },
    {
      name: "Professional Brand Package",
      price: "$799",
      popular: true,
      description: "Best choice for most local service businesses ready to stand out.",
      features: [
        "Everything in Essential Package",
        "Logo animation (simple loading version)",
        "Detailed brand style guide (10+ pages)",
        "5 ready social media post templates",
        "Professional email signature",
        "Letterhead & envelope design",
        "Favicon and small digital icons",
        "6 rounds of revisions",
        "Dedicated project manager",
        "Faster response times",
        "100% ownership rights",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No monthly or hidden fees",
      ],
    },
    {
      name: "Premium Brand Package",
      price: "$1299",
      description: "High-end look for businesses that charge premium rates.",
      features: [
        "Everything in Professional Package",
        "Unlimited logo concepts & changes",
        "Short tagline + brand voice guide",
        "Mockups showing real-world use",
        "Vehicle magnet / van signage concept",
        "Basic packaging or label design",
        "Extra digital banners & covers",
        "Unlimited revisions during creation",
        "Final expert team review",
        "100% ownership rights",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No monthly or hidden fees",
      ],
    },
  ],
  deliverables: [
    "Custom logo (main + simplified versions)",
    "Full color palette with exact codes",
    "Professional font pairing & sizes",
    "Brand style guide (easy PDF)",
    "Business card design (front & back)",
    "Social media profile & story templates",
    "Basic letterhead & email signature",
    "30 days of support after delivery",
  ],
  steps: [
    {
      n: "1",
      title: "Kickoff Conversation",
      text: "We talk about your business, customers, what you do best and your biggest goals.",
    },
    {
      n: "2",
      title: "Style & Concept Options",
      text: "You review mood boards and early logo directions before we go deep.",
    },
    {
      n: "3",
      title: "Full Design & Feedback",
      text: "We create the complete brand identity and refine everything with you.",
    },
    {
      n: "4",
      title: "Final Files & Guide",
      text: "You receive all files plus a short guide showing exactly how to use your brand.",
    },
  ],
  faqs: [
    {
      q: "Can I make changes to the logo later?",
      a: "Yes. You get all source files (AI, PNG, JPG) so you or any designer can edit later. We also give 30 days of free small adjustments after handover.",
    },
    {
      q: "What happens if I do not like the designs?",
      a: "We show multiple directions early and keep refining until you love it. If we cannot get it right our money-back guarantee covers you completely.",
    },
    {
      q: "Do you create social media posts too?",
      a: "Every package includes branded post templates (square, story, landscape) so your social media always looks consistent and professional.",
    },
    {
      q: "How soon will I receive everything?",
      a: "Most clients get final files in 2-4 weeks depending on the package and how fast feedback comes back.",
    },
  ],
};

export default function BrandingPage() {
  return <ServiceDetailTemplate data={data} />;
}
