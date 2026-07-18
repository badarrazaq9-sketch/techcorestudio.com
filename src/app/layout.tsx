import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/background/AnimatedBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// ─── SCHEMA (UK address only) ───
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechCore Studio",
    url: "https://techcorestudio.com",
    logo: "https://techcorestudio.com/TechCoreStudio Logo-01.jpg",
    description:
      "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: "82a James Carter Road",
      addressLocality: "Mildenhall",
      addressRegion: "Suffolk",
      postalCode: "IP28 7DE",
      addressCountry: "GB",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+44-7828-704078",
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
    ],
    sameAs: [
      "https://linkedin.com/company/techcore-studio",
      "https://twitter.com/techcorestudio",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechCore Studio",
    url: "https://techcorestudio.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://techcorestudio.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
];

// ─── METADATA ───
export const metadata: Metadata = {
  metadataBase: new URL("https://techcorestudio.com"),
  title: {
    default: "TechCore Studio | UK & USA Software House | Enterprise Development",
    template: "%s | TechCore Studio",
  },
  description:
    "Premium software house with offices in London, UK and South Carolina, USA. Specializing in Next.js, React, AI integration, and enterprise web development. 150+ global clients, 99% satisfaction rate.",

  keywords: [
    "software house UK",
    "web development London",
    "app development UK",
    "software company London",
    "digital agency UK",
    "enterprise software UK",
    "software house USA",
    "web development South Carolina",
    "app development USA",
    "software company South Carolina",
    "digital agency USA",
    "enterprise software USA",
    "Next.js development",
    "React development",
    "AI integration",
    "UI UX design",
    "cloud solutions",
    "SaaS development",
    "custom software",
    "TechCore Studio",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["en_US"],
    url: "https://techcorestudio.com",
    siteName: "TechCore Studio",
    title: "TechCore Studio | UK & USA Software House",
    description:
      "Premium software house delivering enterprise-grade digital solutions from London and South Carolina.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechCore Studio - UK & USA Software House",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@techcorestudio",
    creator: "@techcorestudio",
    title: "TechCore Studio | UK & USA Software House",
    description:
      "Premium software house delivering enterprise-grade digital solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "8djN5oeLyY_EXVcz71fhrCDhoK2_Xb2MK-0pa3wr0MY",
  },

  authors: [{ name: "TechCore Studio", url: "https://techcorestudio.com" }],
  publisher: "TechCore Studio",
  creator: "TechCore Studio",

  other: {
    "geo.region": "GB-SFK",
    "geo.placename": "Mildenhall, Suffolk",
    "geo.position": "52.3435;0.5089",
    ICBM: "52.3435, 0.5089",
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "TechCore Studio",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080e" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MD253P687G"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MD253P687G');
            `,
          }}
        />
        {/* Schema */}
        {schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body className="min-h-screen text-white antialiased">
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}