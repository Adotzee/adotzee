import { Metadata, Viewport } from "next";
import CoursesClient from "@/components/pages/CoursesClient";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, CourseSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { courseService } from "@/features/courses/courseService";
import { Course } from "@/types";
import { Suspense } from "react";

// Enable ISR: Revalidate every hour
export const revalidate = 3600;

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
  const stream = params.stream ? String(params.stream) : "";
  const streamName = params.streamName ? String(params.streamName) : "Academic Stream";

  // Pre-fetch courses on the server (Leveraging Next.js Data Cache)
  let initialCourses: Course[] = [];
  try {
    console.log("stream", stream)
    if (stream) {
      initialCourses = await courseService.getByStream(stream);
    } else {
      initialCourses = await courseService.getAll();
    }
  } catch (error) {
    console.error("Server-side Course Fetch Error:", error);
  }

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
      <Suspense fallback={<div className="min-h-screen bg-white animate-pulse" />}>
        <CoursesClient initialData={initialCourses} />
      </Suspense>
    </>
  );
}

