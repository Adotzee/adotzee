import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { Navbar } from "@/components/shared/Navbar";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { LeadFormModal } from "@/components/shared/LeadFormModal";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | ${COMPANY_INFO.seo.title}`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description: COMPANY_INFO.seo.description,
  keywords: COMPANY_INFO.seo.keywords,
  authors: [{ name: "Adotzee Team" }],
  metadataBase: new URL(COMPANY_INFO.fullUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.seo.description,
    url: COMPANY_INFO.fullUrl,
    siteName: COMPANY_INFO.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Logos/AdotzeeLogoTextNoBG.png",
        width: 1200,
        height: 630,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.seo.description,
    images: ["/Logos/AdotzeeLogoTextNoBG.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'education',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

import { JsonLd, OrganizationSchema } from "@/components/seo/JsonLd";
import { StickyBottomCTA } from "@/components/shared/StickyBottomCTA";
import { ScrollTracker } from "@/components/shared/ScrollTracker";

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgData = OrganizationSchema({
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.fullUrl,
    logoUrl: `${COMPANY_INFO.fullUrl}/Logos/AdotzeeLogoTextNoBG.png`,
    description: COMPANY_INFO.seo.description,
  });

  // AI-Search & Google Searchbox Optimization
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": COMPANY_INFO.name,
    "url": COMPANY_INFO.fullUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${COMPANY_INFO.fullUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={[orgData, websiteSchema]} />
        {/* Google Analytics - Add your GA_MEASUREMENT_ID to your .env file */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white overflow-x-hidden relative`}>
        {/* Subtle noise grain for premium paper feel */}
        <div
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-0.02 mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        <Providers>
          <Navbar />
          <ScrollTracker />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppButton />
          <LeadFormModal />
          <StickyBottomCTA />
          <Toaster position="top-center" expand={false} richColors />
        </Providers>
      </body>
    </html>
  );
}
