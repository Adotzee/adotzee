import { Metadata } from "next";
import { collegeService } from "@/features/colleges/collegeService";
import { courseService } from "@/features/courses/courseService";
import { CollegeDetailsClient } from "@/components/pages/CollegeDetailsClient";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, CollegeSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";

// Next.js 15+ Params are a Promise
interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    try {
        const college = await collegeService.getById(id);
        if (!college) return { title: "College Not Found" };

        const title = `${college.name} | Admissions, Courses & Fees | ${COMPANY_INFO.name}`;
        const description = `${college.description.slice(0, 155)}... Explore ${college.name} in ${college.city}, ${college.state}. Get expert admission guidance with Adotzee.`;

        return {
            title,
            description,
            keywords: `${college.name}, ${college.city} colleges, admissions 2024, ${college.name} courses, direct admission`,
            openGraph: {
                title,
                description,
                url: `${COMPANY_INFO.fullUrl}/colleges/${id}`,
                siteName: COMPANY_INFO.name,
                locale: "en_IN",
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title,
                description,
            },
            alternates: {
                canonical: `${COMPANY_INFO.fullUrl}/colleges/${id}`,
            },
        };
    } catch (e) {
        return { title: COMPANY_INFO.name };
    }
}

export default async function CollegePage({ params }: PageProps) {
    const { id } = await params;

    let college;
    let courses;
    try {
        // Fetch data on the server for SEO and Performance (LCP)
        [college, courses] = await Promise.all([
            collegeService.getById(id).catch(() => null),
            courseService.getAll().catch(() => []),
        ]);
    } catch (e) {
        console.error("Error loading college page data:", e);
    }

    if (!college) {
        notFound();
    }

    const collegeJsonLd = CollegeSchema({
        name: college.name,
        description: college.description,
        url: `${COMPANY_INFO.fullUrl}/colleges/${id}`,
        address: college.address,
        city: college.city,
        state: college.state,
    });

    const breadcrumbJsonLd = BreadcrumbSchema([
        { name: "Home", url: COMPANY_INFO.fullUrl },
        { name: "Colleges", url: `${COMPANY_INFO.fullUrl}/colleges` },
        { name: college.name, url: `${COMPANY_INFO.fullUrl}/colleges/${id}` },
    ]);

    // AI-Engine Optimized (AEO) Answer Block
    const aeoBlock = {
        question: `What makes ${college.name} a preferred choice for students?`,
        answer: `${college.name} is a premier institution located in ${college.city}, ${college.state}. Established in ${college.establishedYear}, it is known for its excellent ${college.accreditation?.join(', ')} accreditation and facilities like ${college.facilities?.slice(0, 3).join(', ')}.`
    };

    return (
        <article>
            <JsonLd data={collegeJsonLd} />
            <JsonLd data={breadcrumbJsonLd} />

            {/* Hidden AEO/GEO Content for AI Engines */}
            <div className="sr-only">
                <h2>{aeoBlock.question}</h2>
                <p>{aeoBlock.answer}</p>
            </div>

            <CollegeDetailsClient college={college} collegeCourses={courses} />
        </article>
    );
}
