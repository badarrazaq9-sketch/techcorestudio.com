import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Social Media Marketing UK | Facebook and Instagram Ads",
  description: "Social media marketing UK for small businesses. Content, Facebook and Instagram ads and page management that turn followers into calls and bookings.",
  alternates: { canonical: "https://techcorestudio.com/services/social-media-marketing" },
  openGraph: {
    title: "Social Media Marketing UK | Facebook and Instagram Ads",
    description: "Social media marketing UK for small businesses. Content, Facebook and Instagram ads and page management that turn followers into calls and bookings.",
    url: "https://techcorestudio.com/services/social-media-marketing",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing UK | Facebook and Instagram Ads",
    description: "Social media marketing UK for small businesses. Content, Facebook and Instagram ads and page management that turn followers into calls and bookings.",
  },
};

const data: ServiceDetailData = {
  slug: "social-media-marketing",
  badge: "SOCIAL MEDIA MARKETING",
  heroTitle: "Turn Your Followers into",
  heroHighlight: "Paying Customers",
  heroSub:
    "We plan and post content and run targeted ads on Facebook and Instagram, so local customers see you, trust you and get in touch. No random posting. Just steady enquiries.",
  metaTitle: "Social Media Marketing UK | Facebook and Instagram Ads",
  metaDescription:
    "Social media marketing UK for small businesses. Content, Facebook and Instagram ads and page management that turn followers into calls and bookings.",
  serviceType: "Social Media Marketing",
  deliverablesTitle: "What Your Monthly Plan Includes",
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
    "A monthly content calendar planned around your customers",
    "Professional graphics and short videos made for you",
    "Facebook and Instagram profiles set up and polished",
    "Targeted ad campaigns set up for you, with ad spend paid by you",
    "Help with replies and engagement so no message is missed",
    "A monthly report on reach, messages and leads",
    "30 days of support after launch",
  ],
  steps: [
    {
      n: "1",
      title: "Audit and Plan",
      text: "We review your pages, look at what your rivals post and plan content your customers will actually care about.",
    },
    {
      n: "2",
      title: "Create the Content",
      text: "We design posts, reels and stories for the whole month, in your voice and on brand.",
    },
    {
      n: "3",
      title: "Post and Engage",
      text: "We schedule every post and help you reply to comments and messages, so followers become real contacts.",
    },
    {
      n: "4",
      title: "Run Ads and Report",
      text: "We launch small ad campaigns where they will help, then show you what brought in calls and messages.",
    },
  ],
  faqs: [
    {
      q: "Do I have to post myself?",
      a: "No. We create and schedule everything for you. You simply review and approve the content each month.",
    },
    {
      q: "What if I get no engagement?",
      a: "We work to improve your reach and messages from the first month. If you are not happy after the first month, we refund you.",
    },
    {
      q: "Do I pay for ads separately?",
      a: "Yes. Ad spend is paid direct to Facebook or Instagram. Our fee covers management and content only.",
    },
    {
      q: "How soon will I see more messages?",
      a: "Most clients see more profile visits and messages within 2 to 4 weeks. Stronger growth usually builds in month 2 and 3.",
    },
  ],
};

export default function SocialMediaMarketingPage() {
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
