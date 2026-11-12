// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techcorestudio.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/ebook-services",
    "/services/logo-design",
    "/services/3d-logo-design",
    "/services/mascot-logo-design",
    "/services/branding",
    "/services/ecommerce-development",
    "/services/mobile-app-development",
    "/services/custom-development",
    "/services/social-media-marketing",
    "/services/lead-generation",
    "/services/seo",
    "/services/video-editing",
    "/pricing",
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