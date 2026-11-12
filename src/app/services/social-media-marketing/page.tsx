"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "social-media-marketing",
  badge: "SOCIAL MEDIA MARKETING",
  heroTitle: "Turn Followers Into",
  heroHighlight: "Real Customers",
  heroSub:
    "We create engaging social media content and run targeted ads on Facebook & Instagram so local customers see you, trust you and call/book you directly. Stop posting randomly – start getting real results.",
  metaTitle: "Social Media Marketing for Small Businesses",
  metaDescription:
    "Grow your Instagram, Facebook & TikTok presence. Content creation, targeted ads, engagement & lead generation tailored for startups and local brands.",
  serviceType: "Social Media Marketing",
  packages: [
    {
      name: "Startup SMM",
      price: "$349",
      description: "Perfect entry-level package for businesses starting their social media presence.",
      features: [
        "Social Media strategy will be devised",
        "Competitor Analysis",
        "Copywriting",
        "Content Plan Creation",
        "Social Media Posts (06/month)",
        "Facebook Ad Campaigns will be set up",
        "Community Management",
        "Page Management (Facebook, Instagram, and Twitter)",
        "Page Optimization",
        "Tracking Setup",
        "Facebook Shop Creation",
        "Lead Form Creation",
        "1000 Likes on Facebook page",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
    {
      name: "Professional SMM",
      price: "$649",
      popular: true,
      description: "Best choice for growing businesses ready for stronger engagement and leads.",
      features: [
        "Social Media strategy will be devised",
        "Competitor Analysis",
        "Copywriting",
        "Content Plan Creation",
        "Social Media Posts (10/month)",
        "Facebook Ad Campaigns will be set up",
        "Community Management",
        "Page Management (Facebook, Instagram, and Twitter)",
        "Page Optimization",
        "Tracking Setup",
        "Facebook Shop Creation",
        "Lead Form Creation",
        "1000 Likes on Facebook page",
        "1000 Likes on Instagram",
        "Page Moderation",
        "Facebook Ad Campaign Optimization",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
    {
      name: "PROFESSIONAL Video Package",
      price: "$1149.99",
      description: "Premium package with heavy video focus for maximum reach and conversions.",
      features: [
        "Social Media strategy will be devised",
        "Competitor Analysis",
        "Copywriting",
        "Content Plan Creation",
        "Social Media Posts (15/month)",
        "Facebook Ad Campaigns will be set up",
        "Community Management",
        "Page Management (Facebook, Instagram, and Twitter)",
        "Page Optimization",
        "Tracking Setup",
        "Facebook Shop Creation",
        "Lead Form Creation",
        "10,000 Likes on Facebook page",
        "2,000 Likes on Instagram",
        "Page Moderation",
        "Facebook Ad Campaign Optimization",
        "Facebook Ads A/B Testing",
        "Social Media Listening",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
  ],
  deliverables: [
    "Custom content calendar (monthly)",
    "Professional graphics & short videos",
    "Facebook & Instagram profile optimization",
    "Targeted ad campaign setup (optional spend)",
    "Engagement & reply management guidance",
    "Monthly performance report (reach, leads)",
    "30 days post-launch support",
  ],
  steps: [
    {
      n: "1",
      title: "Strategy & Profile Audit",
      text: "We review your current pages and plan content that matches your customers.",
    },
    {
      n: "2",
      title: "Content Creation",
      text: "We design eye-catching posts, reels and stories for the whole month.",
    },
    {
      n: "3",
      title: "Posting & Engagement",
      text: "We schedule posts and guide you on replies to build real connections.",
    },
    {
      n: "4",
      title: "Ads & Report",
      text: "We launch small ads if needed and show you exactly what is working.",
    },
  ],
  faqs: [
    {
      q: "Do I have to post myself?",
      a: "No. We create and schedule everything. You just review and approve the content each month.",
    },
    {
      q: "What if I get no engagement?",
      a: "We guarantee improvement in reach and messages. If not satisfied after first month we refund.",
    },
    {
      q: "Do I pay for ads separately?",
      a: "Yes. Ad spend is paid directly to Facebook/Instagram. Our fee is only for management and content.",
    },
    {
      q: "How soon will I see more messages?",
      a: "Most clients see more profile visits and DMs within 2–4 weeks. Strong growth builds in month 2–3.",
    },
  ],
};

export default function SocialMediaMarketingPage() {
  return <ServiceDetailTemplate data={data} />;
}
