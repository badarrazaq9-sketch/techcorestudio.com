// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techcorestudio.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/web-development",
    "/services/ui-ux-design",
    "/services/ai-integration",
    "/services/cloud-solutions",
    "/services/cybersecurity",
    "/portfolio",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/gdpr",
    "/licenses",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}