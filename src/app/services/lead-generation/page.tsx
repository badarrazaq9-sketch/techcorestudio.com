import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Lead Generation Services UK | Qualified Leads Monthly",
  description: "Lead generation services UK using Meta and Google Ads. Qualified leads sent direct to your phone and inbox, with no long contract.",
  alternates: { canonical: "https://techcorestudio.com/services/lead-generation" },
  openGraph: {
    title: "Lead Generation Services UK | Qualified Leads Monthly",
    description: "Lead generation services UK using Meta and Google Ads. Qualified leads sent direct to your phone and inbox, with no long contract.",
    url: "https://techcorestudio.com/services/lead-generation",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Generation Services UK | Qualified Leads Monthly",
    description: "Lead generation services UK using Meta and Google Ads. Qualified leads sent direct to your phone and inbox, with no long contract.",
  },
};

const data: ServiceDetailData = {
  slug: "lead-generation",
  badge: "LEAD GENERATION",
  heroTitle: "New Customers Every Month",
  heroHighlight: "Without the Guesswork",
  heroSub:
    "We bring ready to buy customers to your business with Meta ads, Google ads and organic methods. Every lead is checked, tracked and sent straight to you.",
  metaTitle: "Lead Generation Services UK | Qualified Leads Monthly",
  metaDescription:
    "Lead generation services UK using Meta and Google Ads. Qualified leads sent direct to your phone and inbox, with no long contract.",
  serviceType: "Lead Generation",
  deliverablesTitle: "What Your Lead Campaign Includes",
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
    "An ad strategy built for your area and your service",
    "Professional ad images and short videos",
    "A landing page or form built to convert visitors",
    "Google Ads or Meta Ads campaigns set up and managed",
    "Lead tracking and a simple reporting dashboard",
    "Weekly updates with tweaks to improve results",
    "Calls and form leads sent straight to you",
    "30 days of optimisation after launch",
  ],
  steps: [
    {
      n: "1",
      title: "Plan the Campaign",
      text: "We learn your service area, your ideal customer and what has worked before, then build the right plan.",
    },
    {
      n: "2",
      title: "Build Ads and Pages",
      text: "We write and design ads and landing pages that speak to people who need your service right now.",
    },
    {
      n: "3",
      title: "Launch and Test",
      text: "We start small, test what works best and fix what does not, before spending more.",
    },
    {
      n: "4",
      title: "Scale What Works",
      text: "We put more budget behind the winning ads and keep tuning the campaign for more and better leads.",
    },
  ],
  faqs: [
    {
      q: "Do I pay for the ads separately?",
      a: "Yes. You pay Meta or Google direct for clicks. Our fee covers strategy, creatives, management and optimisation.",
    },
    {
      q: "What if I get no leads?",
      a: "We offer a money-back guarantee. If we deliver zero qualified leads in the first 30 days, you get a full refund.",
    },
    {
      q: "Can I pause or stop anytime?",
      a: "Yes. There are no long contracts. You can pause or cancel with 7 days notice, and the campaigns stay yours.",
    },
    {
      q: "How soon do leads start coming?",
      a: "Most clients see their first leads within 7 to 14 days of launch. Full momentum usually builds within 30 days.",
    },
  ],
};

export default function LeadGenerationPage() {
  return (
    <>
      <ServiceDetailTemplate data={data} />
      <ServiceJsonLd
        slug={data.slug}
        metaTitle={data.metaTitle}
        metaDescription={data.metaDescription}
        serviceType={data.serviceType}
        faqs={data.faqs}
      />
    </>
  );
}
