// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TechCore Studio",
    short_name: "TechCore",
    description: "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080e",
    theme_color: "#5d67f2",
    orientation: "portrait",
    icons: [
      {
        src: "/TechCoreStudio Logo-01.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["business", "productivity", "technology"],
    lang: "en",
    dir: "ltr",
  };
}