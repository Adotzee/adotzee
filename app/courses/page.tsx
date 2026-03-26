import { Metadata } from "next";
import CoursesClient from "@/components/pages/CoursesClient";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, CourseSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const streamName = params.streamName ? String(params.streamName) : "Academic Stream";
  
  return {
    title: `Courses for ${streamName} | ${COMPANY_INFO.name}`,
    description: `Explore top-rated courses and premier colleges tailored for ${streamName}. Select a stream to begin your journey with ${COMPANY_INFO.name}.`,
    openGraph: {
      title: `Courses for ${streamName} | ${COMPANY_INFO.name}`,
      description: `Explore top-rated courses and premier colleges tailored for ${streamName}.`,
      url: `${COMPANY_INFO.fullUrl}/courses`,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: "/Logos/AdotzeeLogoTextNoBG.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Courses`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${COMPANY_INFO.fullUrl}/courses`,
    },
  };
}

export default async function CoursesPage({ searchParams }: Props) {
  const params = await searchParams;
  const streamName = params.streamName ? String(params.streamName) : "Academic Stream";

  const breadcrumbData = BreadcrumbSchema([
    { name: "Home", url: COMPANY_INFO.fullUrl },
    { name: "Courses", url: `${COMPANY_INFO.fullUrl}/courses` },
    { name: streamName, url: `${COMPANY_INFO.fullUrl}/courses?streamName=${encodeURIComponent(streamName)}` }
  ]);

  const courseData = CourseSchema({
    name: `Top Courses for ${streamName}`,
    description: `Explore highly-rated courses and premier colleges for ${streamName}.`,
    providerName: COMPANY_INFO.name,
    url: `${COMPANY_INFO.fullUrl}/courses?streamName=${encodeURIComponent(streamName)}`
  });

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={courseData} />
      <CoursesClient />
    </>
  );
}
