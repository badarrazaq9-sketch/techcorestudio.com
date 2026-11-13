import React from "react";

export type ServiceFaqItem = {
  q: string;
  a: string;
};

export type ServiceJsonLdProps = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  faqs: ServiceFaqItem[];
};

// Server component: renders WebPage + Service + FAQPage + BreadcrumbList JSON-LD.
// next/head does not work in the App Router, so schema lives here instead.
export default function ServiceJsonLd({ slug, metaTitle, metaDescription, serviceType, faqs }: ServiceJsonLdProps) {
  const url = `https://techcorestudio.com/services/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: metaTitle,
        isPartOf: { "@id": "https://techcorestudio.com#website" },
        about: { "@id": "https://techcorestudio.com#organization" },
        description: metaDescription,
      },
      {
        "@type": "Service",
        serviceType,
        provider: { "@id": "https://techcorestudio.com#organization" },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "United States" },
        ],
        description: metaDescription,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://techcorestudio.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://techcorestudio.com/services" },
          { "@type": "ListItem", position: 3, name: metaTitle, item: url },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
