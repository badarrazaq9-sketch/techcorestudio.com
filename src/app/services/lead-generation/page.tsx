"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "lead-generation",
  badge: "LEAD GENERATION",
  heroTitle: "Predictable New Customers",
  heroHighlight: "Every Month",
  heroSub:
    "We bring ready-to-buy customers to your business using Meta ads, Google ads and organic methods. No guesswork. Just qualified leads that turn into paying jobs.",
  metaTitle: "Lead Generation Services for Small Businesses",
  metaDescription:
    "Targeted campaigns that deliver qualified leads ready to buy. High-quality traffic, conversion-focused strategies for B2B companies and service providers.",
  serviceType: "Lead Generation",
  packages: [
    {
      name: "Starter Lead Package",
      price: "$699/month",
      description: "Perfect for testing and getting first consistent leads.",
      features: [
        "Up to $1,000 monthly ad spend (paid by you)",
        "Meta or Google Ads (your choice)",
        "5 professional ad creatives",
        "Basic landing page or lead form",
        "Targeting your local area only",
        "Lead tracking setup",
        "Weekly performance report",
        "Ad optimization twice per week",
        "Direct lead delivery (call/email)",
        "No long-term contract",
        "Pause or cancel anytime",
        "Full transparency",
        "Money back if no leads in 30 days",
      ],
    },
    {
      name: "Growth Lead Package",
      price: "$899/month",
      popular: true,
      description: "Most popular for steady monthly customer growth.",
      features: [
        "Up to $2,000 monthly ad spend (paid by you)",
        "Meta + Google Ads combined",
        "10 professional ad creatives",
        "Custom landing page with form",
        "Advanced local targeting",
        "Retargeting past visitors",
        "Lead tracking + call recording",
        "Twice weekly performance report",
        "Daily ad optimization",
        "Direct lead delivery + CRM option",
        "No long-term contract",
        "Pause or cancel anytime",
        "Full transparency",
        "Money back if no leads in 30 days",
      ],
    },
    {
      name: "Premium Lead Package",
      price: "$1599/month",
      description: "Maximum leads for businesses ready to scale fast.",
      features: [
        "Up to $4,000 monthly ad spend (paid by you)",
        "Meta + Google + Organic boost",
        "15+ professional ad creatives",
        "High-converting custom landing page",
        "Hyper-local + competitor targeting",
        "Full retargeting + lookalike audiences",
        "Advanced tracking + analytics",
        "Daily performance report + call",
        "Real-time optimization",
        "Direct leads + appointment booking setup",
        "No long-term contract",
        "Pause or cancel anytime",
        "Full transparency",
        "Money back if no leads in 30 days",
      ],
    },
  ],
  deliverables: [
    "Custom ad strategy for your area and service",
    "Professional ad creatives (images + short videos)",
    "Landing page or form setup for best conversions",
    "Google Ads or Meta Ads campaign setup",
    "Lead tracking and reporting dashboard",
    "Weekly performance updates and tweaks",
    "Call and form lead delivery straight to you",
    "30 days of optimization after launch",
  ],
  steps: [
    {
      n: "1",
      title: "Strategy Call",
      text: "We learn your service area, ideal customer and past results to build the right plan.",
    },
    {
      n: "2",
      title: "Creative & Setup",
      text: "We create ads and landing pages that speak directly to people needing your service.",
    },
    {
      n: "3",
      title: "Launch & Testing",
      text: "We start campaigns small, test what works best and quickly improve results.",
    },
    {
      n: "4",
      title: "Scale & Optimize",
      text: "We increase spend on winning ads and keep adjusting for more and better leads.",
    },
  ],
  faqs: [
    {
      q: "Do I pay for the ads separately?",
      a: "Yes. You pay the ad platforms (Meta/Google) directly for clicks. Our fee covers strategy, creatives, management and optimization.",
    },
    {
      q: "What if I get no leads?",
      a: "We offer a money-back guarantee. If we deliver zero qualified leads in the first 30 days you get a full refund.",
    },
    {
      q: "Can I pause or stop anytime?",
      a: "Yes. No long contracts. You can pause or cancel with 7 days notice. Campaigns remain yours.",
    },
    {
      q: "How soon do leads start coming?",
      a: "Most clients see first leads within 7-14 days after launch. Full momentum builds in 30 days.",
    },
  ],
};

export default function LeadGenerationPage() {
  return <ServiceDetailTemplate data={data} />;
}
