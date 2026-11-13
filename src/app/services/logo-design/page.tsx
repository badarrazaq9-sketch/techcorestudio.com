import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Logo Design Services UK for Small Businesses",
  description: "Logo design services UK for small businesses and startups. Custom logos, full brand files and full ownership. Packages from $125.",
  alternates: { canonical: "https://techcorestudio.com/services/logo-design" },
  openGraph: {
    title: "Logo Design Services UK for Small Businesses",
    description: "Logo design services UK for small businesses and startups. Custom logos, full brand files and full ownership. Packages from $125.",
    url: "https://techcorestudio.com/services/logo-design",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logo Design Services UK for Small Businesses",
    description: "Logo design services UK for small businesses and startups. Custom logos, full brand files and full ownership. Packages from $125.",
  },
};

const data: ServiceDetailData = {
  slug: "logo-design",
  badge: "LOGO DESIGN",
  heroTitle: "A Logo That Helps Customers",
  heroHighlight: "Remember You",
  heroSub:
    "We design clear, professional logos for small businesses, startups and local brands in the UK and the USA. You get a logo that works on your website, your shop front, your van and your social profiles, plus the colours, fonts and files to use it with confidence.",
  metaTitle: "Logo Design Services UK for Small Businesses",
  metaDescription:
    "Logo design services UK for small businesses and startups. Custom logos, full brand files and full ownership. Packages from $125.",
  serviceType: "Logo Design & Brand Identity",
  deliverablesTitle: "Everything Your Logo Needs to Work Hard",
  packages: [
    {
      name: "Basic",
      originalPrice: "$249.00",
      price: "$125.00",
      description: "Perfect entry-level option for new small businesses or simple logo refresh projects.",
      features: [
        "4 Unique Logo concepts",
        "1 Creative Designer",
        "48 hrs. Turnaround Time",
        "Unlimited Revisions",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Free Final Formats",
        "A.I, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF",
        "Moneyback Guarantee*",
      ],
    },
    {
      name: "Startup",
      originalPrice: "$349.00",
      price: "$175.00",
      description: "Ideal for startups and growing businesses that want more concepts and free icon design.",
      features: [
        "6 Unique Logo concepts",
        "Free icon design",
        "2 Creative Designers",
        "48 hrs. Turnaround Time",
        "Unlimited Revisions",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Free Final Formats",
        "Moneyback Guarantee*",
        "A.I, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF",
      ],
    },
    {
      name: "Professional",
      originalPrice: "$399.00",
      price: "$199.00",
      popular: true,
      description: "Best value for growing businesses wanting full branding support including business card design.",
      features: [
        "8 Logo concepts",
        "4 Creative Designers",
        "24-48 hrs. Turnaround Time",
        "Unlimited Revision",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Free Brand Consultation",
        "Moneyback Guarantee*",
        "Business Card, Letterhead, Envelope Design",
        "A.I, EPS, PSD, JPEG, PNG, TIFF, BMP & PDF",
      ],
    },
    {
      name: "Elite",
      originalPrice: "$489.00",
      price: "$245.00",
      description: "High-impact package with unlimited concepts and extra marketing materials for serious brands.",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 8 Award Winning Designers",
        "24-48 hrs. Turnaround Time",
        "Unlimited Revisions",
        "Stationary Design (Letterhead, Envelope, Business Cards)",
        "Icon Design",
        "Double Sided Flyer Design / Bi-Fold Brochure",
        "Free Email Signature",
        "Free Final Formats",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Moneyback Guarantee*",
      ],
    },
    {
      name: "Business",
      originalPrice: "$599.00",
      price: "$299.00",
      description: "Complete branding solution with unlimited concepts and full stationery design for established businesses.",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 8 Award Winning Designers",
        "24-48 hrs. Turnaround Time",
        "Unlimited Revisions",
        "Stationary Design (Letterhead, Envelope, Business Cards)",
        "Icon Design",
        "Double Sided Flyer Design / Bi-Fold Brochure",
        "Free Email Signature",
        "Free Final Formats",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Moneyback Guarantee*",
      ],
    },
    {
      name: "Gold",
      originalPrice: "$849.00",
      price: "$425.00",
      description: "Ultimate all-in-one package with unlimited concepts, website, banners, and full branding materials.",
      features: [
        "UNLIMITED Logo Design Concepts",
        "By 8 Award Winning Designers",
        "Icon Design",
        "24-48 hrs. Turnaround Time",
        "UNLIMITED Revisions",
        "Stationary Design (Letterhead, Envelope, Business Cards)",
        "Free Email Signature",
        "3 Page Custom Website",
        "2 Stock Photos",
        "2 Banner Designs",
        "jQuery Slider",
        "All Final Files Format",
        "Ownership Rights",
        "Satisfaction Guarantee",
        "Unique Design Guarantee",
        "Money Back Guarantee*",
      ],
    },
  ],
  deliverables: [
    "Main, secondary and single colour versions of your logo",
    "A full colour palette with main colours, supporting colours and accents",
    "Font choices that pair well and stay easy to read",
    "A brand guide PDF that shows how to use your logo and what to avoid",
    "Social profile pictures and cover images sized and ready to use",
    "Business card and stationery mockups so you can see the brand in use",
    "Source files in AI, EPS, PNG, SVG and JPG",
    "Unlimited revisions while your design is in progress",
  ],
  steps: [
    {
      n: "1",
      title: "Tell Us About Your Business",
      text: "Share your story, your values, your customers and the look you like. Tell us what must come across in the first glance.",
    },
    {
      n: "2",
      title: "See Your First Concepts",
      text: "We show you three to five distinct logo ideas with a mood board, so you can compare directions before we go further.",
    },
    {
      n: "3",
      title: "Refine Until It Feels Right",
      text: "We adjust the chosen idea with your feedback, shaping the mark, colours and type until it feels like your business.",
    },
    {
      n: "4",
      title: "Get Every File and Guide",
      text: "You receive all final files and a brand guide PDF that shows exactly how to use your logo everywhere.",
    },
  ],
  faqs: [
    {
      q: "How many logo concepts do I get?",
      a: "Basic gives you 4 concepts, Startup gives you 6, Professional gives you 8, and Elite, Business and Gold give you unlimited concepts.",
    },
    {
      q: "Do I own the final logo and files?",
      a: "Yes. You own the logo in full and you receive all source files when the work is done.",
    },
    {
      q: "Can I use the logo commercially?",
      a: "Yes. Full commercial rights pass to you, so you can use the logo on products, signs, vehicles and advertising.",
    },
    {
      q: "What if I do not like any concepts?",
      a: "Every package includes unlimited revisions, so we keep working on the ideas until you are happy with one.",
    },
  ],
};

export default function LogoDesignPage() {
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
