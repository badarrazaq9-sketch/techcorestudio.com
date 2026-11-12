"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "video-editing",
  badge: "VIDEO EDITING",
  heroTitle: "Videos That Stop the",
  heroHighlight: "Scroll",
  heroSub:
    "We edit short-form ads, reels, YouTube videos and product content for local businesses and creators. Fast cuts, strong hooks, clean sound and platform-optimized edits that increase views, engagement and real customer actions.",
  metaTitle: "Video Editing Services for Small Businesses",
  metaDescription:
    "Professional editing for ads, Reels, YouTube & product videos. Fast-paced, engaging cuts that boost views, retention and conversions. Quick turnaround.",
  serviceType: "Video Editing",
  packages: [
    {
      name: "Starter Edits",
      price: "$349",
      description: "Great for small businesses and creators starting video content.",
      features: [
        "Up to 6 short videos per month",
        "Basic cuts, captions & transitions",
        "Simple color correction",
        "Stock music & sound effects",
        "1 round of revisions per video",
        "Delivery in 5–7 business days",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
    {
      name: "Professional Edits",
      price: "$649",
      popular: true,
      description: "Best choice for local businesses running ads and growing online.",
      features: [
        "Up to 12 short videos per month",
        "Advanced hooks & pacing",
        "Professional color grading",
        "Custom text animations & motion graphics",
        "Sound design & voiceover sync",
        "2 rounds of revisions per video",
        "Priority turnaround (3–5 days)",
        "Multiple aspect ratios & formats",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
    {
      name: "Premium Video Package",
      price: "$1149",
      description: "High-end editing for brands wanting maximum impact and quality.",
      features: [
        "Up to 20 videos per month (short + long-form)",
        "Premium editing with cinematic feel",
        "Advanced motion graphics & VFX elements",
        "Custom music editing & sound design",
        "Unlimited revisions during active month",
        "Dedicated editor + weekly calls",
        "4K delivery & source files",
        "Same-week turnaround on priority",
        "Satisfaction guarantee",
        "Money back guarantee",
        "No hidden fees",
      ],
    },
  ],
  deliverables: [
    "Edited short-form videos (Reels, Shorts, TikTok, Ads)",
    "YouTube & longer-form video editing",
    "Color correction & grading",
    "Sound design & music sync",
    "Motion graphics & text overlays",
    "Multiple formats per platform",
    "Source project files (if requested)",
    "30 days post-delivery support",
  ],
  steps: [
    {
      n: "1",
      title: "Brief & Raw Files",
      text: "You send goals, raw footage and references.",
    },
    {
      n: "2",
      title: "First Cut & Feedback",
      text: "We deliver rough edit for your review.",
    },
    {
      n: "3",
      title: "Revisions & Polish",
      text: "We refine based on feedback until perfect.",
    },
    {
      n: "4",
      title: "Final Delivery",
      text: "You receive all formats + source files if needed.",
    },
  ],
  faqs: [
    {
      q: "What platforms do you optimize for?",
      a: "We tailor edits for Instagram Reels, TikTok, YouTube Shorts, Facebook Ads, YouTube long-form and more.",
    },
    {
      q: "Do I need to provide music or assets?",
      a: "We use royalty-free libraries or your own music. We can also suggest licensed tracks.",
    },
    {
      q: "Can I get the project files?",
      a: "Yes – all final exports are yours. Source project files available on Premium package.",
    },
    {
      q: "How many revisions do I get?",
      a: "Starter: 1 round per video, Professional: 2 rounds, Premium: unlimited during active month.",
    },
  ],
};

export default function VideoEditingPage() {
  return <ServiceDetailTemplate data={data} />;
}
