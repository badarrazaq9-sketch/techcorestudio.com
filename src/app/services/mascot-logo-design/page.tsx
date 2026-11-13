import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Mascot Logo Design Services UK | Custom Characters",
  description: "Mascot logo design services UK for sports teams, schools and brands. A custom character you own outright. Get a custom quote.",
  alternates: { canonical: "https://techcorestudio.com/services/mascot-logo-design" },
  openGraph: {
    title: "Mascot Logo Design Services UK | Custom Characters",
    description: "Mascot logo design services UK for sports teams, schools and brands. A custom character you own outright. Get a custom quote.",
    url: "https://techcorestudio.com/services/mascot-logo-design",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mascot Logo Design Services UK | Custom Characters",
    description: "Mascot logo design services UK for sports teams, schools and brands. A custom character you own outright. Get a custom quote.",
  },
};

const data: ServiceDetailData = {
  slug: "mascot-logo-design",
  badge: "MASCOT LOGO DESIGN",
  heroTitle: "A Character Your Customers",
  heroHighlight: "Will Remember",
  heroSub:
    "We design original mascot characters that give your brand a friendly face. They suit sports teams, schools, food brands, gyms and any UK or US business that wants people to feel something when they see it.",
  metaTitle: "Mascot Logo Design Services UK | Custom Characters",
  metaDescription:
    "Mascot logo design services UK for sports teams, schools and brands. A custom character you own outright. Get a custom quote.",
  serviceType: "Mascot Logo Design",
  deliverablesTitle: "Everything Your Mascot Needs to Come Alive",
  // No packages or prices exist anywhere for mascot logos - packages intentionally empty.
  packages: [],
  deliverables: [
    "A custom mascot character drawn in several poses",
    "A full colour palette made for your mascot",
    "A mascot style guide that sets out character rules and use",
    "Social profile pictures and cover images",
    "Files ready for merchandise such as T-shirts and stickers",
    "A set of animated mascot expressions in GIF form",
    "Business card and stationery mockups",
    "Full ownership and all source files",
  ],
  steps: [
    {
      n: "1",
      title: "Tell Us About Your Brand",
      text: "Share your values, your audience and the traits your mascot should show, from friendly and playful to bold and fierce.",
    },
    {
      n: "2",
      title: "Meet Your Character Sketches",
      text: "We show you three to five distinct character sketches in different styles and expressions, so you can pick the one that fits.",
    },
    {
      n: "3",
      title: "Refine Poses and Expressions",
      text: "We shape the chosen character further and build extra poses and expressions for social posts, kits and merchandise.",
    },
    {
      n: "4",
      title: "Get Every File and Guide",
      text: "You receive all mascot files, poses and expressions, plus a guide that shows how to use the character well.",
    },
  ],
  faqs: [
    {
      q: "How many mascot concepts do I get?",
      a: "We usually show three to five distinct character ideas in the first round. Larger scopes include unlimited ideas until you find the right character.",
    },
    {
      q: "Do I own the mascot character fully?",
      a: "Yes. You own the character in full and you receive all source files when the work is done. The character belongs to you alone.",
    },
    {
      q: "Can I use the mascot on merchandise?",
      a: "Yes. Every project includes files ready for merchandise such as T-shirts, stickers, mugs, packaging and promo items.",
    },
    {
      q: "What if I need the mascot in different poses later?",
      a: "We build several poses during the project. You can ask for extra poses or expressions as add ons at any time after delivery.",
    },
  ],
};

export default function MascotLogoDesignPage() {
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
