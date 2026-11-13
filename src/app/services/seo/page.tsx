import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Local SEO Services UK | Rank Higher on Google Maps",
  description: "Local SEO services UK for small businesses. Google Business Profile, citations, reviews and on page fixes that bring more calls from Google.",
  alternates: { canonical: "https://techcorestudio.com/services/seo" },
  openGraph: {
    title: "Local SEO Services UK | Rank Higher on Google Maps",
    description: "Local SEO services UK for small businesses. Google Business Profile, citations, reviews and on page fixes that bring more calls from Google.",
    url: "https://techcorestudio.com/services/seo",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services UK | Rank Higher on Google Maps",
    description: "Local SEO services UK for small businesses. Google Business Profile, citations, reviews and on page fixes that bring more calls from Google.",
  },
};

const data: ServiceDetailData = {
  slug: "seo",
  badge: "SEO SERVICES",
  heroTitle: "More Calls from Google",
  heroHighlight: "Every Week",
  heroSub:
    "We help local businesses rank higher on Google, so people find you first when they need your service. More visibility means more calls, bookings and jobs, without relying only on paid ads.",
  metaTitle: "Local SEO Services UK | Rank Higher on Google Maps",
  metaDescription:
    "Local SEO services UK for small businesses. Google Business Profile, citations, reviews and on page fixes that bring more calls from Google.",
  serviceType: "SEO Services",
  deliverablesTitle: "What Your Local SEO Includes",
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
    "Full optimisation of your Google Business Profile",
    "Local citations built and cleaned up across directories",
    "Keyword research for your area and your services",
    "On page SEO fixes across your website",
    "A review system that brings in more happy customers",
    "A monthly report on rankings, calls and traffic",
    "30 days of support after setup",
  ],
  steps: [
    {
      n: "1",
      title: "Audit Your Presence",
      text: "We check your Google listing, your website and your rivals, then show you where you stand and what to fix first.",
    },
    {
      n: "2",
      title: "Fix the Foundations",
      text: "We optimise your Google Business Profile, clean up your citations, fix on page issues and set up your review plan.",
    },
    {
      n: "3",
      title: "Push Your Rankings",
      text: "We build local authority and watch your rankings week by week, tuning the work for the best results.",
    },
    {
      n: "4",
      title: "Report and Improve",
      text: "You get a clear monthly update, and we keep working to hold and improve your position.",
    },
  ],
  faqs: [
    {
      q: "How long until I see more calls?",
      a: "Most clients notice more Google views and calls within 4 to 8 weeks. Bigger jumps usually happen in months 3 to 6.",
    },
    {
      q: "Do you guarantee first position?",
      a: "No one can honestly guarantee number one. We focus on getting you into the local pack and the top results for your area, and keeping you there.",
    },
    {
      q: "What if my Google Business is suspended?",
      a: "We help you recover it or rebuild it the right way, so it stays live and ranks well.",
    },
    {
      q: "Do I need a new website?",
      a: "Not always. We can optimise your current site. A fast site that works well on phones helps your rankings a lot.",
    },
  ],
};

export default function SeoPage() {
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
