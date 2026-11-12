"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "mascot-logo-design",
  badge: "MASCOT LOGO DESIGN",
  heroTitle: "A Character People Love &",
  heroHighlight: "Remember",
  heroSub:
    "We design unique, memorable mascot characters that become the friendly face of your brand. Perfect for businesses wanting emotional connection, brand loyalty, and a personality that stands out in any market.",
  metaTitle: "Mascot Logo Design Services",
  metaDescription:
    "Custom mascot logo design services for small businesses, sports teams, brands, and startups. Unique, memorable character logos that bring your brand to life. USA-based design team.",
  serviceType: "Mascot Logo Design",
  // No packages or prices exist anywhere for mascot logos — packages intentionally empty.
  packages: [],
  deliverables: [
    "Custom mascot character design (multiple poses)",
    "Full color palette for mascot application",
    "Mascot style guide (character rules & usage)",
    "Social media profile icons and covers",
    "Merchandise-ready files (T-shirt, stickers, etc.)",
    "Animated mascot expressions (GIF set)",
    "Business card and stationery mockups",
    "Full ownership & source files",
  ],
  steps: [
    {
      n: "1",
      title: "Brief & Personality",
      text: "You share your brand values, target audience, and the personality traits your mascot should embody.",
    },
    {
      n: "2",
      title: "Character Concepts",
      text: "We present 3-5 unique mascot character sketches with different styles and expressions.",
    },
    {
      n: "3",
      title: "Revisions & Poses",
      text: "We refine the chosen character and create multiple poses and expressions.",
    },
    {
      n: "4",
      title: "Final Delivery & Guide",
      text: "You receive all mascot files, poses, expressions + usage guidelines.",
    },
  ],
  faqs: [
    {
      q: "How many mascot concepts do I get?",
      a: "We typically present 3-5 unique character concepts in the initial round. Higher-tier packages include unlimited concepts until you find the perfect character.",
    },
    {
      q: "Do I own the mascot character fully?",
      a: "Yes - 100% ownership and all source files delivered upon completion. The character is yours exclusively.",
    },
    {
      q: "Can I use the mascot on merchandise?",
      a: "Absolutely. Every package includes merchandise-ready files perfect for T-shirts, stickers, mugs, packaging, and promotional items.",
    },
    {
      q: "What if I need the mascot in different poses later?",
      a: "We create multiple poses during the project. Additional poses or expressions can be requested as add-ons anytime after delivery.",
    },
  ],
};

export default function MascotLogoDesignPage() {
  return <ServiceDetailTemplate data={data} />;
}
