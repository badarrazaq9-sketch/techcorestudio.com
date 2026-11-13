import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Video Editing Services UK | Reels YouTube and Ads",
  description: "Video editing services UK for Reels, TikTok, YouTube and ads. Fast cuts, strong hooks, clean sound and edits sized for every platform.",
  alternates: { canonical: "https://techcorestudio.com/services/video-editing" },
  openGraph: {
    title: "Video Editing Services UK | Reels YouTube and Ads",
    description: "Video editing services UK for Reels, TikTok, YouTube and ads. Fast cuts, strong hooks, clean sound and edits sized for every platform.",
    url: "https://techcorestudio.com/services/video-editing",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Editing Services UK | Reels YouTube and Ads",
    description: "Video editing services UK for Reels, TikTok, YouTube and ads. Fast cuts, strong hooks, clean sound and edits sized for every platform.",
  },
};

const data: ServiceDetailData = {
  slug: "video-editing",
  badge: "VIDEO EDITING",
  heroTitle: "Videos That Make People",
  heroHighlight: "Stop and Watch",
  heroSub:
    "We edit short form ads, reels, YouTube videos and product content for local businesses and creators. Fast cuts, strong hooks, clean sound and edits sized for each platform, so more people watch, engage and buy.",
  metaTitle: "Video Editing Services UK | Reels YouTube and Ads",
  metaDescription:
    "Video editing services UK for Reels, TikTok, YouTube and ads. Fast cuts, strong hooks, clean sound and edits sized for every platform.",
  serviceType: "Video Editing",
  deliverablesTitle: "What Your Editing Includes",
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
    "Edited short form videos for Reels, Shorts, TikTok and ads",
    "YouTube and longer form video editing",
    "Colour correction and grading on every video",
    "Sound design and music matched to the cut",
    "Motion graphics and text overlays",
    "Every format you need for each platform",
    "Source project files when you ask for them",
    "30 days of support after delivery",
  ],
  steps: [
    {
      n: "1",
      title: "Send Your Footage",
      text: "You send us your goals, your raw footage and any examples you like, and we agree the plan.",
    },
    {
      n: "2",
      title: "First Cut for Review",
      text: "We send a rough edit for you to watch and mark up, so the final video matches what you had in mind.",
    },
    {
      n: "3",
      title: "Revisions and Polish",
      text: "We refine the cut, the sound and the graphics based on your feedback, until it is right.",
    },
    {
      n: "4",
      title: "Final Delivery",
      text: "You receive every format you need, plus the source files when your package includes them.",
    },
  ],
  faqs: [
    {
      q: "What platforms do you optimise for?",
      a: "We tailor edits for Instagram Reels, TikTok, YouTube Shorts, Facebook Ads, long form YouTube and more.",
    },
    {
      q: "Do I need to provide music or assets?",
      a: "No. We use royalty free music libraries or your own tracks, and we can suggest licensed music that fits.",
    },
    {
      q: "Can I get the project files?",
      a: "Yes. All final exports are yours. Source project files are included with the Premium package.",
    },
    {
      q: "How many revisions do I get?",
      a: "Starter includes 1 round per video, Professional includes 2 rounds, and Premium includes unlimited revisions during your active month.",
    },
  ],
};

export default function VideoEditingPage() {
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
