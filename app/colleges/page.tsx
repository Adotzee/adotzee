import { Metadata } from "next";
import CollegesClient from "@/components/pages/CollegesClient";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, CourseSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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
  const courseName = params.courseName ? String(params.courseName) : "Your Selected Course";

  const breadcrumbData = BreadcrumbSchema([
    { name: "Home", url: COMPANY_INFO.fullUrl },
    { name: "Colleges", url: `${COMPANY_INFO.fullUrl}/colleges` },
    { name: courseName, url: `${COMPANY_INFO.fullUrl}/colleges?courseName=${encodeURIComponent(courseName)}` }
  ]);

  const courseData = CourseSchema({
    name: `Premier Colleges for ${courseName}`,
    description: `Discover and apply to premier institutions for ${courseName} through ${COMPANY_INFO.name}.`,
    providerName: COMPANY_INFO.name,
    url: `${COMPANY_INFO.fullUrl}/colleges?courseName=${encodeURIComponent(courseName)}`
  });

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={courseData} />
      <CollegesClient />
    </>
  );
}
