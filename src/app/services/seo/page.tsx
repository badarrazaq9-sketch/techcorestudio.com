"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "seo",
  badge: "SEO SERVICES",
  heroTitle: "More Calls & Customers from",
  heroHighlight: "Google",
  heroSub:
    "We help local businesses rank higher on Google so people find you first when they need your service. More visibility means more phone calls, bookings and jobs without depending only on paid ads.",
  metaTitle: "Local SEO Services for Small Businesses",
  metaDescription:
    "Rank higher on Google and attract more local customers. Google Business optimization, citations, reviews & keyword strategy. Visible results in weeks.",
  serviceType: "SEO Services",
  packages: [
    {
      name: "Local Starter SEO",
      price: "$399",
      description: "Great for new or small businesses starting to get found locally.",
      features: [
        "Google Business Profile optimization",
        "10 local citations built",
        "Basic keyword research (5 terms)",
        "On-page fixes (title, meta, headings)",
        "Review response template",
        "Monthly ranking report",
        "4 weeks of support",
        "One-time setup fee",
        "No monthly commitment",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
    {
      name: "Local Growth SEO",
      price: "$699",
      popular: true,
      description: "Best choice for most service businesses wanting steady leads.",
      features: [
        "Everything in Starter Package",
        "25+ local citations & cleanup",
        "Keyword research (10–15 terms)",
        "Full on-page SEO audit & fixes",
        "Review generation strategy",
        "Competitor analysis report",
        "Google Maps ranking focus",
        "Monthly progress call",
        "Ongoing tweaks for 3 months",
        "Dedicated project manager",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
    {
      name: "Local Premium SEO",
      price: "$999",
      description: "High-end package for dominating your local searches.",
      features: [
        "Everything in Growth Package",
        "50+ high-authority citations",
        "Advanced keyword research (20+ terms)",
        "Technical SEO audit & fixes",
        "Content suggestions for service pages",
        "Aggressive review building system",
        "Local link building (guest posts, directories)",
        "Bi-weekly performance calls",
        "Ongoing optimization for 6 months",
        "Expert team review",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
  ],
  deliverables: [
    "Google Business Profile full optimization",
    "Local citation building & cleanup",
    "Keyword research for your area",
    "On-page SEO fixes on your website",
    "Review generation system setup",
    "Monthly ranking & traffic report",
    "30 days post-setup support",
  ],
  steps: [
    {
      n: "1",
      title: "Kickoff & Audit",
      text: "We review your current Google presence, website and competitors.",
    },
    {
      n: "2",
      title: "Optimization Phase",
      text: "We fix your Google Business, citations, on-page elements and start review strategy.",
    },
    {
      n: "3",
      title: "Ranking Push",
      text: "We build authority and monitor rankings while tweaking for best results.",
    },
    {
      n: "4",
      title: "Report & Maintain",
      text: "You get clear monthly updates and we keep improving your position.",
    },
  ],
  faqs: [
    {
      q: "How long until I see more calls?",
      a: "Most clients notice more Google views and calls within 4–8 weeks. Big jumps usually happen in months 3–6.",
    },
    {
      q: "Do you guarantee first position?",
      a: "No one can guarantee #1. We focus on getting you into the top 10 local pack and map consistently.",
    },
    {
      q: "What if my Google Business is suspended?",
      a: "We help recover or rebuild it properly so it stays live and ranks well.",
    },
    {
      q: "Do I need a new website?",
      a: "Not always. We can optimize your current site. A fast, mobile-friendly site helps rankings a lot.",
    },
  ],
};

export default function SeoPage() {
  return <ServiceDetailTemplate data={data} />;
}
