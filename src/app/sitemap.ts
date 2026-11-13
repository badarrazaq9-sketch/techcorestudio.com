// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techcorestudio.com";

  // lastModified is a fixed date per route: the date that route's content
  // last changed (2026-11-13 = this SEO rebuild for the service and pricing
  // pages). It must not be new Date(): that changed every day with no
  // content change at all.
  const routes: { path: string; lastModified: string; changeFrequency: "daily" | "weekly" | "monthly"; priority: number }[] = [
    { path: "", lastModified: "2026-10-06", changeFrequency: "daily", priority: 1.0 },
    { path: "/about", lastModified: "2026-06-02", changeFrequency: "monthly", priority: 0.7 },
    { path: "/services", lastModified: "2026-11-13", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/ebook-services", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/logo-design", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/3d-logo-design", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/mascot-logo-design", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/branding", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/ecommerce-development", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/mobile-app-development", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/custom-development", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/social-media-marketing", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/lead-generation", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/seo", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/video-editing", lastModified: "2026-11-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", lastModified: "2026-11-13", changeFrequency: "weekly", priority: 0.9 },
    { path: "/portfolio", lastModified: "2026-06-02", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", lastModified: "2026-07-18", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy-policy", lastModified: "2026-07-18", changeFrequency: "monthly", priority: 0.3 },
    { path: "/terms-of-service", lastModified: "2026-07-18", changeFrequency: "monthly", priority: 0.3 },
    { path: "/cookie-policy", lastModified: "2026-10-06", changeFrequency: "monthly", priority: 0.3 },
    { path: "/gdpr", lastModified: "2026-10-06", changeFrequency: "monthly", priority: 0.3 },
    { path: "/licenses", lastModified: "2026-06-02", changeFrequency: "monthly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
