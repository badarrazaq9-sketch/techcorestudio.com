// src/lib/schema.ts
// Centralized schema generation for UK & USA targeting

import { Metadata } from "next";

// ─── Organization Schema (Global) ───
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechCore Studio",
    alternateName: "TechCore",
    url: "https://techcore.studio",
    logo: {
      "@type": "ImageObject",
      url: "https://techcore.studio/TechCoreStudio Logo-01.jpg",
      width: 5000,
      height: 3334,
    },
    image: {
      "@type": "ImageObject",
      url: "https://techcore.studio/og-image.jpg",
      width: 1200,
      height: 630,
    },
    description:
      "Premium UK & USA-based software house delivering enterprise-grade digital solutions, web development, and AI integration.",
    foundingDate: "2014",
    founders: [
      {
        "@type": "Person",
        name: "TechCore Leadership",
      },
    ],
    // UK Office
    location: [
      {
        "@type": "Place",
        name: "TechCore Studio London",
        address: {
          "@type": "PostalAddress",
          streetAddress: "TechHub, 20-22 Wenlock Road",
          addressLocality: "London",
          addressRegion: "England",
          postalCode: "N1 7GU",
          addressCountry: "GB",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "51.5313",
          longitude: "-0.0961",
        },
        telephone: "+44-20-7946-0958",
      },
      // USA Office
      {
        "@type": "Place",
        name: "TechCore Studio New York",
        address: {
          "@type": "PostalAddress",
          streetAddress: "WeWork, 1460 Broadway",
          addressLocality: "New York",
          addressRegion: "NY",
          postalCode: "10036",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.7549",
          longitude: "-73.9860",
        },
        telephone: "+1-212-555-0199",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+44-20-7946-0958",
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-212-555-0199",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        email: "hello@techcore.studio",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://linkedin.com/company/techcore-studio",
      "https://twitter.com/techcorestudio",
      "https://github.com/techcore-studio",
      "https://clutch.co/profile/techcore-studio",
    ],
    knowsAbout: [
      "Web Development",
      "Software Engineering",
      "UI/UX Design",
      "Artificial Intelligence",
      "Cloud Computing",
      "Enterprise Software",
      "Next.js",
      "React",
      "Node.js",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Enterprise Software Development",
      },
    },
  };
}

// ─── LocalBusiness Schema (for local SEO in UK & USA) ───
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TechCore Studio",
    image: "https://techcore.studio/TechCoreStudio Logo-01.jpg",
    url: "https://techcore.studio",
    telephone: "+44-20-7946-0958",
    priceRange: "£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "TechHub, 20-22 Wenlock Road",
      addressLocality: "London",
      addressRegion: "England",
      postalCode: "N1 7GU",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.5313",
      longitude: "-0.0961",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "United Kingdom",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "City",
        name: "London",
      },
      {
        "@type": "City",
        name: "New York",
      },
    ],
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "AI Integration",
      "Cloud Solutions",
      "Digital Strategy",
    ],
  };
}

// ─── WebSite Schema ───
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechCore Studio",
    url: "https://techcore.studio",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://techcore.studio/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["en-GB", "en-US"],
  };
}

// ─── BreadcrumbList Schema ───
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Service Schema (for individual services) ───
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: service.provider || "TechCore Studio",
      url: "https://techcore.studio",
    },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Web Development Services",
      serviceUrl: service.url,
      availableLanguage: {
        "@type": "Language",
        name: "English",
      },
    },
  };
}

// ─── AggregateRating Schema ───
export function getAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
    itemReviewed: {
      "@type": "Organization",
      name: "TechCore Studio",
    },
  };
}

// ─── Review Schema (for testimonials) ───
export function getReviewSchema(review: {
  author: string;
  reviewBody: string;
  rating: number;
  datePublished: string;
  company?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
      affiliation: review.company
        ? {
            "@type": "Organization",
            name: review.company,
          }
        : undefined,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: "5",
    },
    datePublished: review.datePublished,
    publisher: {
      "@type": "Organization",
      name: "TechCore Studio",
    },
  };
}

// ─── FAQPage Schema ───
export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── ContactPage Schema ───
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact TechCore Studio",
    description: "Get in touch with our UK & USA software house team",
    url: "https://techcore.studio/contact",
    mainEntity: {
      "@type": "Organization",
      name: "TechCore Studio",
      telephone: ["+44-20-7946-0958", "+1-212-555-0199"],
      email: "hello@techcore.studio",
      address: [
        {
          "@type": "PostalAddress",
          addressCountry: "GB",
          addressLocality: "London",
          addressRegion: "England",
          streetAddress: "TechHub, 20-22 Wenlock Road",
          postalCode: "N1 7GU",
        },
        {
          "@type": "PostalAddress",
          addressCountry: "US",
          addressLocality: "New York",
          addressRegion: "NY",
          streetAddress: "WeWork, 1460 Broadway",
          postalCode: "10036",
        },
      ],
    },
  };
}

// ─── SoftwareApplication Schema (for SaaS products built) ───
export function getSoftwareApplicationSchema(app: {
  name: string;
  description: string;
  url: string;
  operatingSystem?: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.description,
    url: app.url,
    operatingSystem: app.operatingSystem || "Web",
    applicationCategory: app.applicationCategory || "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "150",
    },
  };
}

// ─── JobPosting Schema (for careers page) ───
export function getJobPostingSchema(job: {
  title: string;
  description: string;
  location: string;
  country: "GB" | "US";
  employmentType: string;
  salary?: string;
  datePosted: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    hiringOrganization: {
      "@type": "Organization",
      name: "TechCore Studio",
      sameAs: "https://techcore.studio",
      logo: "https://techcore.studio/TechCoreStudio Logo-01.jpg",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: job.country,
      },
    },
    employmentType: job.employmentType,
    baseSalary: job.salary
      ? {
          "@type": "MonetaryAmount",
          currency: job.country === "GB" ? "GBP" : "USD",
          value: {
            "@type": "QuantitativeValue",
            value: job.salary,
            unitText: "YEAR",
          },
        }
      : undefined,
  };
}

// ─── Article/BlogPosting Schema ───
export function getBlogPostingSchema(post: {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.headline,
    description: post.description,
    url: post.url,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TechCore Studio",
      logo: {
        "@type": "ImageObject",
        url: "https://techcore.studio/TechCoreStudio Logo-01.jpg",
      },
    },
    keywords: post.tags?.join(", "),
    inLanguage: "en",
  };
}

// ─── Helper: Combine all schemas for homepage ───
export function getHomePageSchemas() {
  return [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebsiteSchema(),
    getAggregateRatingSchema(),
  ];
}