import { Metadata, Viewport } from "next";
import AddonsClient from "@/components/pages/AddonsClient";
import { COMPANY_INFO } from "@/lib/constants";
import { addonService } from "@/features/addons/addonService";
import { AddonCourse } from "@/types";

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
  const courseName = params.courseName ? String(params.courseName) : "Your Course";
  
  return {
    title: `Addons & Specializations for ${courseName} | ${COMPANY_INFO.name}`,
    description: `Enhance your profile with global specializations and add-on certifications for ${courseName}.`,
    openGraph: {
      title: `Addons & Specializations for ${courseName} | ${COMPANY_INFO.name}`,
      description: `Enhance your profile with global specializations and add-on certifications for ${courseName}.`,
      url: `${COMPANY_INFO.fullUrl}/addons`,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: "/Logos/AdotzeeLogoTextNoBG.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Addons`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: `${COMPANY_INFO.fullUrl}/addons`,
    },
  };
}

export default async function AddonsPage({ searchParams }: Props) {
  const params = await searchParams;
  const courseId = params.courseId ? String(params.courseId) : "";
  
  let initialAddons: AddonCourse[] = [];
  try {
    if (courseId) {
      initialAddons = await addonService.getByCourse(courseId);
    } else {
      initialAddons = await addonService.getAll();
    }
  } catch (error) {
    console.warn("Server-side Addon Fetch Error:", error);
  }

  return <AddonsClient initialData={initialAddons} />;
}
