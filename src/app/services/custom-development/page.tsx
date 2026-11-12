"use client";

import ServiceDetailTemplate, { ServiceDetailData } from "@/components/sections/ServiceDetailTemplate";

const data: ServiceDetailData = {
  slug: "custom-development",
  badge: "CUSTOM DEVELOPMENT",
  heroTitle: "Software Built Around",
  heroHighlight: "Your Business",
  heroSub:
    "Off-the-shelf tools force your team into workarounds, spreadsheets and double data entry. We design and build custom software — web applications, dashboards, portals and automations — that fits your exact process, connects the tools you already use, and gives you back hours every week.",
  metaTitle: "Custom Software Development for Small Businesses",
  metaDescription:
    "Custom software, dashboards, portals and automations built around your process — fixed quotes from $2,999, weekly demos, 100% code ownership.",
  serviceType: "Custom Development",
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
    "Discovery & requirements blueprint",
    "UX/UI design your team will find easy to use",
    "Custom web application built to your spec",
    "Database design & secure data storage",
    "Admin dashboard & role-based user accounts",
    "Third-party API integrations",
    "Automated workflows & email notifications",
    "Testing, QA & deployment on cloud hosting",
    "Staff training & plain-English documentation",
    "Full source code & 100% ownership",
    "30 days post-launch bug fixes & support",
  ],
  steps: [
    {
      n: "1",
      title: "Discovery & Blueprint",
      text: "We map your process, your pain points and your tools, then spec exactly what gets built — with a fixed quote before any code.",
    },
    {
      n: "2",
      title: "Design & Prototype",
      text: "You see and click through the screens before we build them, so there are no surprises about how the software will work.",
    },
    {
      n: "3",
      title: "Build & Weekly Demos",
      text: "We build in weekly stages and demo real, working software every week. Your feedback shapes each next step.",
    },
    {
      n: "4",
      title: "Launch, Training & Support",
      text: "We deploy, move your data, train your team and stay on hand after launch while everyone settles in.",
    },
  ],
  faqs: [
    {
      q: "How much does custom software cost?",
      a: "It depends on four things: how many features and screens you need, how complex the rules behind them are, how many other systems it must connect to, and how many types of users (staff, customers, admins) it serves. A focused internal tool starts at $2,999; connected business platforms are typically $5,999; full SaaS platforms start at $9,999. Every project gets a fixed quote after a free discovery session — the price we agree is the price you pay.",
    },
    {
      q: "How long does it take to build?",
      a: "A working first version usually takes 4–10 weeks. Starter systems typically launch in 6–8 weeks, business platforms in 8–12, and larger SaaS platforms in 12–16. We build in stages with a live demo every week, so you are using real software early instead of waiting months for one big reveal.",
    },
    {
      q: "Do I own the software and the code?",
      a: "Yes — 100%. The source code, the data and the system are yours, delivered in full at launch. There is no lock-in and no per-seat licence fee for your own software: you can host it where you like and hire any developer to extend it in future.",
    },
    {
      q: "What happens after launch? Who maintains it?",
      a: "Every package includes a post-launch support window (30–90 days) for bug fixes. After that, most clients take an optional care plan covering hosting checks, security updates, small improvements and priority support — or hand the code to their own developer. Because you own everything, that choice is entirely yours.",
    },
    {
      q: "Should I buy off-the-shelf software instead?",
      a: "Sometimes, honestly, yes — if a proven tool already does exactly what you need, buy it. Custom software wins when your process is your advantage: when your team wastes hours on workarounds, double entry or tools that almost fit, or when you are paying per-seat fees for five products that still do not talk to each other. The free consultation exists to give you an honest answer either way.",
    },
  ],
};

export default function CustomDevelopmentPage() {
  return <ServiceDetailTemplate data={data} />;
}
