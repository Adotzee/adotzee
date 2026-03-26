import { Metadata } from "next";
import SearchClient from "@/components/pages/SearchClient";
import { COMPANY_INFO } from "@/lib/constants";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const q = params.q ? String(params.q) : "";
  
  return {
    title: q ? `Search Results for "${q}" | ${COMPANY_INFO.name}` : `Search Colleges and Courses | ${COMPANY_INFO.name}`,
    description: `Search for top colleges, courses, and educational opportunities on ${COMPANY_INFO.name}.`,
    openGraph: {
      title: q ? `Search Results for "${q}" | ${COMPANY_INFO.name}` : `Search Colleges and Courses | ${COMPANY_INFO.name}`,
      description: `Search for top colleges, courses, and educational opportunities.`,
      url: `${COMPANY_INFO.fullUrl}/search`,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: "/Logos/AdotzeeLogoTextNoBG.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Search`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${COMPANY_INFO.fullUrl}/search`,
    },
    robots: {
      index: false, // Don't index search result pages to prevent duplicate content
      follow: true,
    }
  };
}

export default function SearchPage() {
  return <SearchClient />;
}
