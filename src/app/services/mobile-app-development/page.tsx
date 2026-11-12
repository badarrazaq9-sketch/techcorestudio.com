"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "mobile-app-development",
  badge: "MOBILE APP DEVELOPMENT",
  heroTitle: "Your Business, On",
  heroHighlight: "Their Phones",
  heroSub:
    "We build fast, reliable mobile apps for iOS and Android that help local businesses take bookings, sell products, manage orders and connect directly with customers – without complicated tech headaches.",
  metaTitle: "Mobile App Development for Small Businesses",
  metaDescription:
    "Custom iOS & Android apps for bookings, orders, loyalty programs & customer engagement. User-friendly, scalable, built for small business budgets and growth.",
  serviceType: "App Development",
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
    "Native iOS and/or Android app",
    "Clean & user-friendly UI/UX design",
    "Core features implemented (booking, cart, payments, etc.)",
    "App Store & Google Play submission support",
    "Source code & full ownership",
    "30 days post-launch bug fixes & support",
  ],
  steps: [
    {
      n: "1",
      title: "Discovery & Planning",
      text: "We understand your business, customers and exact app goals.",
    },
    {
      n: "2",
      title: "Design & Prototype",
      text: "We create wireframes and visual designs for your approval.",
    },
    {
      n: "3",
      title: "Development & Testing",
      text: "We build the app, test thoroughly and fix any issues.",
    },
    {
      n: "4",
      title: "Launch & Support",
      text: "We submit to app stores and give you training + 30 days support.",
    },
  ],
  faqs: [
    {
      q: "Do you build for iOS, Android or both?",
      a: "We build native apps for both. Starter packages are single-platform, higher ones include both iOS and Android.",
    },
    {
      q: "How long does it take?",
      a: "Timeline depends on complexity: 2 weeks for Basic, up to 16 weeks for Enterprise E-Commerce.",
    },
    {
      q: "Will I own the app and code?",
      a: "Yes – 100% ownership and full source code delivered to you upon completion.",
    },
    {
      q: "Can I update the app later?",
      a: "Yes. You get all source files so you or any developer can make future changes easily.",
    },
  ],
};

export default function MobileAppDevelopmentPage() {
  return <ServiceDetailTemplate data={data} />;
}
