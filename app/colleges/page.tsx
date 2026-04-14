import { Metadata, Viewport } from "next";
import CollegesClient from "@/components/pages/CollegesClient";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { collegeService } from "@/features/colleges/collegeService";
import { College } from "@/types";

export const dynamic = "force-dynamic";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const courseName = params.courseName ? String(params.courseName) : "Your Selected Course";
  
  return {
    title: `Premier Colleges for ${courseName} | ${COMPANY_INFO.name}`,
    description: `Discover and apply to premier institutions for ${courseName} through ${COMPANY_INFO.name}. Get direct admission assistance and expert consultation.`,
    openGraph: {
      title: `Premier Colleges for ${courseName} | ${COMPANY_INFO.name}`,
      description: `Discover and apply to premier institutions for ${courseName} through ${COMPANY_INFO.name}.`,
      url: `${COMPANY_INFO.fullUrl}/colleges`,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: "/Logos/AdotzeeLogoTextNoBG.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Colleges`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${COMPANY_INFO.fullUrl}/colleges`,
    },
  };
}

export default async function CollegesPage({ searchParams }: Props) {
  const params = await searchParams;
  const courseName = params.courseName ? String(params.courseName) : "Your Course";
  const addonId = params.addonId ? String(params.addonId) : "";

  // Pre-fetch colleges on the server
  let initialColleges: College[] = [];
  try {
    if (addonId) {
      initialColleges = await collegeService.getByAddon(addonId);
    } else {
      initialColleges = await collegeService.getAll();
    }
  } catch (error) {
    console.error("Server-side College Fetch Error:", error);
  }

  const breadcrumbData = BreadcrumbSchema([
    { name: "Home", url: COMPANY_INFO.fullUrl },
    { name: "Courses", url: `${COMPANY_INFO.fullUrl}/courses` },
    { name: courseName, url: `${COMPANY_INFO.fullUrl}/addons?courseName=${encodeURIComponent(courseName)}` },
    { name: "Colleges", url: `${COMPANY_INFO.fullUrl}/colleges` }
  ]);

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <CollegesClient initialData={initialColleges} />
    </>
  );
}
