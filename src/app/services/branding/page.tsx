import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Branding Services UK for Small Businesses",
  description: "Branding services UK for small businesses. Logo, colours, fonts and a clear style guide so every touchpoint matches. From $499.",
  alternates: { canonical: "https://techcorestudio.com/services/branding" },
  openGraph: {
    title: "Branding Services UK for Small Businesses",
    description: "Branding services UK for small businesses. Logo, colours, fonts and a clear style guide so every touchpoint matches. From $499.",
    url: "https://techcorestudio.com/services/branding",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Services UK for Small Businesses",
    description: "Branding services UK for small businesses. Logo, colours, fonts and a clear style guide so every touchpoint matches. From $499.",
  },
};

const data: ServiceDetailData = {
  slug: "branding",
  badge: "BRANDING",
  heroTitle: "A Brand Your Customers",
  heroHighlight: "Trust at First Sight",
  heroSub:
    "We build clean, consistent brand identities for local businesses in the UK and the USA. Logo, colours, fonts and a short guide, so you look professional everywhere and stop looking like the cheap option.",
  metaTitle: "Branding Services UK for Small Businesses",
  metaDescription:
    "Branding services UK for small businesses. Logo, colours, fonts and a clear style guide so every touchpoint matches. From $499.",
  serviceType: "Branding",
  deliverablesTitle: "Everything Your Brand Needs to Look Right",
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
    "A custom logo in main and simplified versions",
    "A full colour palette with exact codes for screen and print",
    "A professional font pairing with sizes set out plainly",
    "A brand style guide in an easy to read PDF",
    "A business card design for front and back",
    "Social profile and story templates that match your brand",
    "A basic letterhead and email signature",
    "30 days of support after delivery",
  ],
  steps: [
    {
      n: "1",
      title: "Talk Through Your Business",
      text: "We talk about your business, your customers, what you do best and the goals that matter most to you.",
    },
    {
      n: "2",
      title: "Review Styles and Directions",
      text: "You look at mood boards and early logo directions before we build the full identity, so nothing goes too far in the wrong direction.",
    },
    {
      n: "3",
      title: "Shape the Full Identity",
      text: "We build the complete brand identity and refine each part with you, from the logo to the colours, fonts and templates.",
    },
    {
      n: "4",
      title: "Get Files and Your Guide",
      text: "You receive all files and a short guide that shows exactly how to use your brand on cards, social posts, email and print.",
    },
  ],
  faqs: [
    {
      q: "Can I make changes to the logo later?",
      a: "Yes. You receive all source files in AI, PNG and JPG, so you or any designer can edit them later. We also give 30 days of free small changes after handover.",
    },
    {
      q: "What happens if I do not like the designs?",
      a: "We show several directions early and keep refining them with you until you love the result. If we cannot get it right, our money back promise covers you in full.",
    },
    {
      q: "Do you create social media posts too?",
      a: "Every package includes branded post templates in square, story and landscape sizes, so your social pages stay consistent and professional.",
    },
    {
      q: "How soon will I receive everything?",
      a: "Most clients receive final files in 2 to 4 weeks, depending on the package and how quickly feedback comes back.",
    },
  ],
};

export default function BrandingPage() {
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
