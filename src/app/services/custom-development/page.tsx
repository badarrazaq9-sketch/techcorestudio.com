import type { Metadata } from "next";
import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";
import ServiceJsonLd from "@/components/sections/ServiceJsonLd";

export const metadata: Metadata = {
  title: "Custom Software Development UK | Bespoke Business Software",
  description: "Custom software development UK for dashboards, portals and automations. Fixed quotes from $2,999, weekly demos and full code ownership.",
  alternates: { canonical: "https://techcorestudio.com/services/custom-development" },
  openGraph: {
    title: "Custom Software Development UK | Bespoke Business Software",
    description: "Custom software development UK for dashboards, portals and automations. Fixed quotes from $2,999, weekly demos and full code ownership.",
    url: "https://techcorestudio.com/services/custom-development",
    siteName: "TechCore Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development UK | Bespoke Business Software",
    description: "Custom software development UK for dashboards, portals and automations. Fixed quotes from $2,999, weekly demos and full code ownership.",
  },
};

const data: ServiceDetailData = {
  slug: "custom-development",
  badge: "CUSTOM DEVELOPMENT",
  heroTitle: "Software That Fits the Way",
  heroHighlight: "You Work",
  heroSub:
    "Off the shelf tools force your team into workarounds and double entry. We build web apps, dashboards, portals and automations around your exact process, so your team saves hours every week.",
  metaTitle: "Custom Software Development UK | Bespoke Business Software",
  metaDescription:
    "Custom software development UK for dashboards, portals and automations. Fixed quotes from $2,999, weekly demos and full code ownership.",
  serviceType: "Custom Development",
  deliverablesTitle: "Everything Your System Includes",
  packages: [
    {
      name: "Starter System",
      price: "$2999",
      description: "Replace spreadsheets and manual processes with one simple custom tool.",
      features: [
        "Discovery & requirements blueprint",
        "One custom web application or internal tool",
        "Up to 5 core modules (jobs, customers, orders, etc.)",
        "User logins with 2 roles (admin & staff)",
        "Database design & setup",
        "Mobile-friendly, responsive interface",
        "Basic reporting & CSV exports",
        "Automated email notifications",
        "Deployment & hosting setup",
        "Typical timeline: 6–8 weeks",
        "Staff training session",
        "Full source code & ownership",
        "30 days post-launch support",
      ],
    },
    {
      name: "Business Platform",
      price: "$5999",
      popular: true,
      description: "A connected system for growing teams — portal, integrations and automation included.",
      features: [
        "Everything in Starter System",
        "Up to 12 modules & screens",
        "Advanced roles & permissions",
        "Customer or client portal",
        "2 third-party integrations (payments, accounting, CRM…)",
        "Automated workflows & reminders",
        "Custom dashboards & reports",
        "Data migration from spreadsheets or old tools",
        "Typical timeline: 8–12 weeks",
        "2 staff training sessions",
        "Full source code & ownership",
        "60 days post-launch support",
      ],
    },
    {
      name: "Advanced / SaaS Platform",
      price: "$9999",
      description: "Full platforms and SaaS products built to scale with your business.",
      features: [
        "Everything in Business Platform",
        "Multi-user SaaS architecture (accounts & billing)",
        "Unlimited modules & screens",
        "Public API for your own integrations",
        "Advanced automations & background jobs",
        "Performance & security hardening",
        "Scalable cloud infrastructure",
        "Admin control panel",
        "Typical timeline: 12–16 weeks",
        "Dedicated project manager",
        "Team training & full documentation",
        "Full source code & ownership",
        "90 days priority support",
      ],
    },
  ],
  deliverables: [
    "A clear discovery and requirements blueprint",
    "Design your team will find easy to use",
    "A custom web app built to your exact spec",
    "Database design with secure data storage",
    "Admin dashboard with role based user accounts",
    "Connections to the third party tools you already use",
    "Automated workflows and email alerts",
    "Testing and deployment on cloud hosting",
    "Staff training with plain English guides",
    "Full source code and complete ownership",
    "30 days of bug fixes and support after launch",
  ],
  steps: [
    {
      n: "1",
      title: "Map Your Process",
      text: "We map how your team works today, where time is lost and which tools must connect, then give you a fixed quote before any code is written.",
    },
    {
      n: "2",
      title: "Click Through the Design",
      text: "You see and click through every screen before we build, so you know exactly how the software will work.",
    },
    {
      n: "3",
      title: "Build in Weekly Steps",
      text: "We build in weekly stages and show you working software every week. Your feedback shapes what comes next.",
    },
    {
      n: "4",
      title: "Launch and Train Your Team",
      text: "We deploy the system, move your data across, train your team and stay on hand while everyone settles in.",
    },
  ],
  faqs: [
    {
      q: "How much does custom software cost?",
      a: "It depends on the features, the rules behind them, the systems it must connect to and the types of users it serves. A focused internal tool starts at $2,999, a connected business platform is typically $5,999 and a full SaaS platform starts at $9,999. You get a fixed quote after a free discovery session, and the price we agree is the price you pay.",
    },
    {
      q: "How long does it take to build?",
      a: "A working first version usually takes 4 to 10 weeks. Starter systems typically launch in 6 to 8 weeks, business platforms in 8 to 12 weeks and larger SaaS platforms in 12 to 16 weeks. You see a live demo every week, so you use real software early.",
    },
    {
      q: "Do I own the software and the code?",
      a: "Yes, completely. The source code, the data and the system are yours, delivered in full at launch. There is no lock in and no per seat licence fee. You can host it where you like and hire any developer to extend it.",
    },
    {
      q: "What happens after launch? Who maintains it?",
      a: "Every package includes a support window of 30 to 90 days for bug fixes. After that most clients take an optional care plan for hosting checks, security updates, small improvements and priority support, or hand the code to their own developer. The choice is yours because you own everything.",
    },
    {
      q: "Should I buy off-the-shelf software instead?",
      a: "Sometimes, yes. If a proven tool already does exactly what you need, buy it. Custom software wins when your process is your advantage: when your team wastes hours on workarounds and double entry, or when you pay per seat fees for five products that still do not talk to each other. The free consultation gives you an honest answer either way.",
    },
  ],
};

export default function CustomDevelopmentPage() {
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
