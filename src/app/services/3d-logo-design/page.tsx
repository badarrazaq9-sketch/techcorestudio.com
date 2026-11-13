import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "3D Logo Design Services UK | Animated Logos",
  description: "3D logo design services UK for businesses that want depth, light and motion. Renders, animation and source files. Packages from $175.",
  alternates: { canonical: "https://techcorestudio.com/services/3d-logo-design" },
  openGraph: {
    title: "3D Logo Design Services UK | Animated Logos",
    description: "3D logo design services UK for businesses that want depth, light and motion. Renders, animation and source files. Packages from $175.",
    url: "https://techcorestudio.com/services/3d-logo-design",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Logo Design Services UK | Animated Logos",
    description: "3D logo design services UK for businesses that want depth, light and motion. Renders, animation and source files. Packages from $175.",
  },
};

const data: ServiceDetailData = {
  slug: "3d-logo-design",
  badge: "3D LOGO DESIGN",
  heroTitle: "A Logo With Real Depth",
  heroHighlight: "That Moves",
  heroSub:
    "We build 3D logos with depth, light and texture for UK and US businesses that want to stand out. Use them on your website, your videos, your social profiles and your signs, with a flat version included for print.",
  metaTitle: "3D Logo Design Services UK | Animated Logos",
  metaDescription:
    "3D logo design services UK for businesses that want depth, light and motion. Renders, animation and source files. Packages from $175.",
  serviceType: "3D Logo Design",
  deliverablesTitle: "Everything Your 3D Logo Needs to Shine",
  packages: [
    {
      name: "Basic 3D",
      originalPrice: "$349.00",
      price: "$175.00",
      description: "Perfect entry-level 3D option for new businesses wanting their first dimensional logo.",
      features: [
        "2 Unique 3D Logo concepts",
        "1 Creative 3D Designer",
        "72 hrs. Turnaround Time",
        "Unlimited Revisions",
        "High-res PNG renders with transparency",
        "Simple 360° spin animation (GIF)",
        "Flat 2D backup version",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Free Final Formats",
        "PNG, JPG, GIF, MP4",
        "Moneyback Guarantee*",
      ],
    },
    {
      name: "Startup 3D",
      originalPrice: "$499.00",
      price: "$249.00",
      description: "Ideal for startups and growing businesses that want more 3D concepts and free icon design.",
      features: [
        "4 Unique 3D Logo concepts",
        "Free 3D icon design",
        "2 Creative 3D Designers",
        "72 hrs. Turnaround Time",
        "Unlimited Revisions",
        "High-res renders + transparency",
        "360° spin animation (GIF/MP4)",
        "Flat 2D backup version",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Free Final Formats",
        "Moneyback Guarantee*",
        "PNG, JPG, GIF, MP4, Blender",
      ],
    },
    {
      name: "Professional 3D",
      originalPrice: "$599.00",
      price: "$299.00",
      popular: true,
      description: "Best value for growing businesses wanting full 3D branding support including video intro.",
      features: [
        "6 3D Logo concepts",
        "4 Creative 3D Designers",
        "48-72 hrs. Turnaround Time",
        "Unlimited Revision",
        "Advanced lighting & material effects",
        "5-second animated video intro",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Free Brand Consultation",
        "Moneyback Guarantee*",
        "Business Card, Letterhead, Envelope Design",
        "PNG, JPG, GIF, MP4, Blender, OBJ",
      ],
    },
    {
      name: "Elite 3D",
      originalPrice: "$749.00",
      price: "$375.00",
      description: "High-impact 3D package with unlimited concepts and extra marketing materials for serious brands.",
      features: [
        "UNLIMITED 3D Logo Design Concepts",
        "By 6 Award Winning 3D Designers",
        "48-72 hrs. Turnaround Time",
        "Unlimited Revisions",
        "Stationary Design (Letterhead, Envelope, Business Cards)",
        "3D Icon Design",
        "Double Sided Flyer Design / Bi-Fold Brochure",
        "10-second animated video intro",
        "Free Email Signature",
        "Free Final Formats",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Moneyback Guarantee*",
      ],
    },
    {
      name: "Business 3D",
      originalPrice: "$899.00",
      price: "$449.00",
      description: "Complete 3D branding solution with unlimited concepts and full stationery design for established businesses.",
      features: [
        "UNLIMITED 3D Logo Design Concepts",
        "By 8 Award Winning 3D Designers",
        "48-72 hrs. Turnaround Time",
        "Unlimited Revisions",
        "Stationary Design (Letterhead, Envelope, Business Cards)",
        "3D Icon Design",
        "Double Sided Flyer Design / Bi-Fold Brochure",
        "15-second animated video intro",
        "Free Email Signature",
        "Free Final Formats",
        "Ownership Rights",
        "Unique Design Guarantee",
        "Satisfaction Guarantee",
        "Moneyback Guarantee*",
      ],
    },
    {
      name: "Gold 3D",
      originalPrice: "$1199.00",
      price: "$599.00",
      description: "Ultimate all-in-one 3D package with unlimited concepts, website, banners, and full branding materials.",
      features: [
        "UNLIMITED 3D Logo Design Concepts",
        "By 8 Award Winning 3D Designers",
        "3D Icon Design",
        "48-72 hrs. Turnaround Time",
        "UNLIMITED Revisions",
        "Stationary Design (Letterhead, Envelope, Business Cards)",
        "Free Email Signature",
        "3 Page Custom Website",
        "2 Stock Photos",
        "2 Banner Designs",
        "jQuery Slider",
        "30-second animated video intro",
        "All Final Files Format",
        "Ownership Rights",
        "Satisfaction Guarantee",
        "Unique Design Guarantee",
        "Money Back Guarantee*",
      ],
    },
  ],
  deliverables: [
    "Several 3D logo renders in PNG with a clear background",
    "A rotating 360 degree animation in MP4 or GIF",
    "Source 3D files in Blender, OBJ and FBX",
    "A flat 2D version for print and embroidery",
    "Social profile pictures and cover images",
    "Business card and stationery mockups",
    "A video intro animation of 5 to 15 seconds",
    "Full ownership and all source files",
  ],
  steps: [
    {
      n: "1",
      title: "Tell Us About Your Brand",
      text: "Share your story, your customers and the 3D style you like, from clean and light to bold and metallic.",
    },
    {
      n: "2",
      title: "See Your 3D Concepts",
      text: "We show you three to five distinct 3D ideas with a mood board for materials and lighting, so you can pick a direction early.",
    },
    {
      n: "3",
      title: "Refine the Depth and Light",
      text: "We adjust the chosen design with your feedback until the depth, light and finish look right on screen.",
    },
    {
      n: "4",
      title: "Get Renders and Animation",
      text: "You receive all 3D files, renders and animations, plus a short guide on where to use each version.",
    },
  ],
  faqs: [
    {
      q: "How many 3D logo concepts do I get?",
      a: "Basic gives you 2 concepts, Startup gives you 4, Professional gives you 6, and Elite, Business and Gold give you unlimited concepts.",
    },
    {
      q: "Do I own the final 3D logo and files?",
      a: "Yes. You own the logo in full and you receive all source 3D files in Blender, OBJ and FBX when the work is done.",
    },
    {
      q: "Can I use the 3D logo for print and merchandise?",
      a: "Yes. Every package includes a flat 2D version made for print, embroidery and single colour use. The 3D version suits digital, video and large signs.",
    },
    {
      q: "What if I do not like any 3D concepts?",
      a: "Every package includes unlimited revisions, so we keep working on the ideas until you are happy with one.",
    },
  ],
};

export default function ThreeDLogoDesignPage() {
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
