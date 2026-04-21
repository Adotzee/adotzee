import { Metadata } from "next";
import { courseService } from "@/features/courses/courseService";
import { addonService } from "@/features/addons/addonService";
import { CourseDetailsClient } from "@/components/pages/CourseDetailsClient";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, CourseSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Enable ISR: Revalidate daily
export const revalidate = 86400;

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    try {
        const course = await courseService.getById(id);
        if (!course) return { title: "Course Not Found" };

        const title = `${course.name} Course | Admissions & Fees | ${COMPANY_INFO.name}`;
        const description = `Looking for ${course.name}? Discover detailed course syllabus, career scope, fee structure, and top institutional partners. Secure direct admission with Adotzee.`;

        return {
            title,
            description,
            keywords: `${course.name}, course details, eligibility, admission assistance, ${course.level} programs, Adotzee`,
            openGraph: {
                title,
                description,
                url: `${COMPANY_INFO.fullUrl}/courses/${id}`,
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
                canonical: `${COMPANY_INFO.fullUrl}/courses/${id}`,
            },
        };
    } catch (e) {
        return { title: COMPANY_INFO.name };
    }
}

export default async function CoursePage({ params }: PageProps) {
    const { id } = await params;
    
    let course;
    let addons;
    try {
        // Parallelized metadata and data fetching. Next.js Fetch handles memoization.
        [course, addons] = await Promise.all([
            courseService.getById(id).catch(() => null),
            addonService.getAll().catch(() => []),
        ]);
    } catch (e) {
        console.error("Error loading course page data:", e);
    }

    if (!course) {
        notFound();
    }

    const courseJsonLd = CourseSchema({
        name: course.name,
        description: course.description,
        providerName: COMPANY_INFO.name,
        url: `${COMPANY_INFO.fullUrl}/courses/${id}`,
    });

    const breadcrumbJsonLd = BreadcrumbSchema([
        { name: "Home", url: COMPANY_INFO.fullUrl },
        { name: "Courses", url: `${COMPANY_INFO.fullUrl}/courses` },
        { name: course.name, url: `${COMPANY_INFO.fullUrl}/courses/${id}` },
    ]);

    const aeoBlock = {
        question: `What is the career scope of ${course.name}?`,
        answer: `Graduates of ${course.name} can explore diverse career paths such as ${course.careerOpportunities?.slice(0, 5).join(', ')}. This ${course.level} program typically has a duration of ${course.duration} and offers high growth prospects.`
    };

    return (
        <article>
            <JsonLd data={[courseJsonLd, breadcrumbJsonLd]} />
            
            {/* Hidden AEO/GEO Content for AI Engines */}
            <div className="sr-only">
                <h2>{aeoBlock.question}</h2>
                <p>{aeoBlock.answer}</p>
                <h3>Course Key Entities</h3>
                <ul>
                    <li>Program: {course.name}</li>
                    <li>Level: {course.level}</li>
                    <li>Duration: {course.duration}</li>
                    <li>Stream: {course.stream}</li>
                </ul>
            </div>

            <Suspense fallback={<div className="min-h-screen bg-white animate-pulse" />}>
                <CourseDetailsClient course={course} relatedAddons={addons} />
            </Suspense>
        </article>
    );
}

