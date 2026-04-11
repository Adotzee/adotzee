import { Metadata, Viewport } from "next";
import RecommendationsClient from "@/components/pages/RecommendationsClient";
import { COMPANY_INFO } from "@/lib/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Personalized Recommendations | ${COMPANY_INFO.name}`,
    description: `Get personalized course and college recommendations based on your preferences. Start your academic journey with ${COMPANY_INFO.name}.`,
    openGraph: {
      title: `Personalized Recommendations | ${COMPANY_INFO.name}`,
      description: `Get personalized course and college recommendations based on your preferences.`,
      url: `${COMPANY_INFO.fullUrl}/recommendations`,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: "/Logos/AdotzeeLogoTextNoBG.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Recommendations`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${COMPANY_INFO.fullUrl}/recommendations`,
    },
  };
}

export default function RecommendationsPage() {
  return <RecommendationsClient />;
}
