import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Mobile App Development UK | iOS and Android Apps",
  description: "Mobile app development UK for iOS and Android. We build booking, ordering and loyalty apps for small businesses, with ownership and store submission included.",
  alternates: { canonical: "https://techcorestudio.com/services/mobile-app-development" },
  openGraph: {
    title: "Mobile App Development UK | iOS and Android Apps",
    description: "Mobile app development UK for iOS and Android. We build booking, ordering and loyalty apps for small businesses, with ownership and store submission included.",
    url: "https://techcorestudio.com/services/mobile-app-development",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development UK | iOS and Android Apps",
    description: "Mobile app development UK for iOS and Android. We build booking, ordering and loyalty apps for small businesses, with ownership and store submission included.",
  },
};

const data: ServiceDetailData = {
  slug: "mobile-app-development",
  badge: "MOBILE APP DEVELOPMENT",
  heroTitle: "An App That Puts Your Business",
  heroHighlight: "in Every Pocket",
  heroSub:
    "We build fast and reliable apps for iPhone and Android. Your customers can book, order, pay and message you direct from their phone, with no tech headaches for you.",
  metaTitle: "Mobile App Development UK | iOS and Android Apps",
  metaDescription:
    "Mobile app development UK for iOS and Android. We build booking, ordering and loyalty apps for small businesses, with ownership and store submission included.",
  serviceType: "App Development",
  deliverablesTitle: "What Your App Includes",
  packages: [
    {
      name: "Basic Package",
      price: "$999",
      description: "Perfect for starting with a simple, single-platform app.",
      features: [
        "Development for a single platform (iOS or Android)",
        "Basic UI/UX design",
        "Up to 5 unique app screens",
        "Standard features implementation",
        "2-week development timeline",
        "1 round of revisions",
        "Ownership rights",
        "Satisfaction guarantee",
        "Free delivery of final app files",
        "Supported formats: APK (Android) or IPA (iOS)",
      ],
    },
    {
      name: "Standard Package",
      price: "$1999",
      popular: true,
      description: "Best choice for most local businesses – both platforms.",
      features: [
        "Development for both iOS and Android platforms",
        "Enhanced UI/UX design",
        "Up to 10 unique app screens",
        "Advanced features implementation",
        "4-week development timeline",
        "2 rounds of revisions",
        "Ownership rights",
        "Satisfaction guarantee",
        "Free delivery of final app files",
        "Supported formats: APK (Android) and IPA (iOS)",
      ],
    },
    {
      name: "Premium Package",
      price: "$4999",
      description: "High-end custom app with unlimited flexibility.",
      features: [
        "Development for both iOS and Android platforms",
        "Custom UI/UX design",
        "Unlimited app screens",
        "Advanced features implementation with API integration",
        "8-week development timeline",
        "Unlimited rounds of revisions",
        "Priority support",
        "Ownership rights",
        "Satisfaction guarantee",
        "Free delivery of final app files",
        "Supported formats: APK (Android) and IPA (iOS)",
      ],
    },
    {
      name: "Starter E-Commerce Package",
      price: "$2999",
      description: "Great entry for small shops wanting to sell online.",
      features: [
        "Development for a single platform (iOS or Android)",
        "Basic UI/UX design optimized for e-commerce functionalities",
        "Integration with popular payment gateways (e.g., PayPal, Stripe)",
        "Limited product catalog (up to 100 products)",
        "Standard features implementation (e.g., product search, cart management)",
        "8-week development timeline",
        "2 rounds of revisions",
        "Ownership rights",
        "Satisfaction guarantee",
        "Free delivery of final app files",
        "Supported formats: APK (Android) or IPA (iOS)",
      ],
    },
    {
      name: "Business E-Commerce Package",
      price: "$7999",
      description: "Ideal for growing stores with more products and features.",
      features: [
        "Development for both iOS and Android platforms",
        "Custom UI/UX design tailored to your brand and target audience",
        "Integration with advanced payment gateways and inventory management systems",
        "Expanded product catalog (up to 500 products)",
        "Enhanced features implementation (e.g., personalized recommendations, wishlist)",
        "12-week development timeline",
        "3 rounds of revisions",
        "Priority support",
        "Ownership rights",
        "Satisfaction guarantee",
        "Free delivery of final app files",
        "Supported formats: APK (Android) and IPA (iOS)",
      ],
    },
    {
      name: "Enterprise E-Commerce Package",
      price: "$15999",
      description: "Full-featured app for serious online sellers.",
      features: [
        "Development for both iOS and Android platforms",
        "Premium UI/UX design with advanced interactive elements and animations",
        "Integration with custom payment solutions and ERP systems",
        "Unlimited product catalog",
        "Comprehensive features implementation (e.g., loyalty programs, multi-language support)",
        "16-week development timeline",
        "Unlimited rounds of revisions",
        "Dedicated project manager",
        "24/7 priority support",
        "Ownership rights",
        "Satisfaction guarantee",
        "Free delivery of final app files",
        "Supported formats: APK (Android) and IPA (iOS)",
      ],
    },
  ],
  deliverables: [
    "Native iOS and Android app built for your business",
    "Clear and easy to use design your customers will enjoy",
    "Booking, cart, payments and loyalty features built in",
    "Help with App Store and Google Play submission",
    "Source code and full ownership handed to you",
    "30 days of bug fixes and support after launch",
  ],
  steps: [
    {
      n: "1",
      title: "Plan Your App",
      text: "We talk through your business, your customers and what the app must do, then agree the scope and price before we start.",
    },
    {
      n: "2",
      title: "See the Design First",
      text: "We draw the screens and build a working preview so you can check the look and flow before we build the full app.",
    },
    {
      n: "3",
      title: "Build and Test",
      text: "We build the app and test it on real phones, fixing any issues before it goes near your customers.",
    },
    {
      n: "4",
      title: "Launch and Support",
      text: "We handle the store submission, show your team how it works and stay on hand for 30 days after launch.",
    },
  ],
  faqs: [
    {
      q: "Do you build for iOS, Android or both?",
      a: "Both. Starter packages cover one platform, while the higher packages cover iPhone and Android together.",
    },
    {
      q: "How long does it take?",
      a: "It depends on the size of the app. A basic app takes about 2 weeks and the largest e-commerce app takes up to 16 weeks.",
    },
    {
      q: "Will I own the app and code?",
      a: "Yes. You own the app and all of the source code. We hand over every file when the work is done.",
    },
    {
      q: "Can I update the app later?",
      a: "Yes. You get the full source files, so you or any developer can add features and make changes later.",
    },
  ],
};

export default function MobileAppDevelopmentPage() {
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
