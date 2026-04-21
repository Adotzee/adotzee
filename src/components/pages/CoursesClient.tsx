"use client";

import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCoursesQuery } from "@/features/common/queries";
import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CourseCard } from "../cards/CourseCard";
import { SkeletonList } from "../shared/SkeletonCard";
import { Course, ApiError } from "@/types";
import { COURSES_DATA } from "@/lib/constants/landing-data";
import { JsonLd, BreadcrumbSchema } from "@/components/seo/JsonLd";

interface CoursesClientProps {
    initialData?: Course[];
}

function CoursesContent({ initialData }: CoursesClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const stream = searchParams.get("stream") || "";
    const streamName = searchParams.get("streamName") || "";

    const [loadingCourseId, setLoadingCourseId] = useState<string | null>(null);
    const { data: apiCourses, isLoading, error } = useCoursesQuery(stream);
    
    // Cast error to ApiError for safe access
    const apiError = error as ApiError | null;

    // Dynamic data consolidation: API Data > Initial Data
    const courses = (apiCourses && apiCourses.length > 0)
        ? apiCourses
        : (initialData && initialData.length > 0)
            ? initialData
            : [];


    const handleCourseSelect = (courseId: string, courseName: string) => {
        setLoadingCourseId(courseId);
        router.push(`/addons?courseId=${courseId}&courseName=${encodeURIComponent(courseName)}&streamName=${encodeURIComponent(streamName)}&stream=${stream}`);
    };

    const handleCourseHover = (courseId: string, courseName: string) => {
        router.prefetch(`/addons?courseId=${courseId}&courseName=${encodeURIComponent(courseName)}&streamName=${encodeURIComponent(streamName)}&stream=${stream}`);
    };


    // Breadcrumb Schema for search engine navigation
    const breadcrumbData = BreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: streamName || "All Courses", url: `/courses?stream=${stream}` }
    ]);

    return (
        <main className="min-h-screen bg-slate-50/50 py-24 px-6 relative overflow-x-clip">
            <JsonLd data={breadcrumbData} />
            {/* Improved Background Aesthetic */}
            <div className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-blue-100/20 rounded-full blur-[140px] mix-blend-multiply" />
            <div className="absolute bottom-[-15%] left-[-10%] w-[70%] h-[70%] bg-indigo-100/20 rounded-full blur-[140px] mix-blend-multiply" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Navigation - Premium styling */}
                <Link href="/" className="inline-flex items-center text-slate-400 font-bold hover:text-slate-900 transition-all group mb-16 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm hover:shadow-md">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to All Streams
                </Link>

                {/* Header with Bold Typography */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-px w-12 bg-blue-600" />
                        <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px]">Academic Selection</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.04em] leading-[0.9] flex flex-col"
                    >
                        <span>{streamName ? "Expertise in" : "Browse All"}</span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                            {streamName || "Academic Modules"}
                        </span>
                    </motion.h1>
                    <p className="text-slate-500 font-medium text-lg mt-8 max-w-xl leading-relaxed">
                        {streamName
                            ? `Curated collection of industry-leading courses and global specializations for ${streamName}.`
                            : "Explore our comprehensive directory of premier degree programs and professional certifications across South India."}
                    </p>
                </div>

                {/* Content */}
                {isLoading && courses.length === 0 ? (
                    <div className="py-20">
                        <SkeletonList count={3} />
                    </div>
                ) : apiError ? (
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] border-2 border-slate-50 shadow-2xl text-center max-w-3xl mx-auto relative overflow-hidden">
                        {apiError.isDatabaseError && (
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-400 to-amber-500" />
                        )}
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 ${apiError.isDatabaseError ? "bg-amber-50" : "bg-red-50"}`}>
                            <span className={`text-3xl ${apiError.isDatabaseError ? "text-amber-500" : "text-red-500"}`}>!</span>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">
                            {apiError.isDatabaseError ? "System Optimization" : "Request Interrupted"}
                        </h2>
                        <p className="text-slate-500 font-medium mb-12 text-lg">
                            {apiError.message || "Something went wrong while fetching courses."}
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200 w-full md:w-auto"
                            >
                                Try Refreshing
                            </button>
                            {apiError.isDatabaseError && (
                                <Link
                                    href="/"
                                    className="bg-white text-slate-600 border border-slate-100 px-12 py-5 rounded-3xl font-bold hover:bg-slate-50 transition-all w-full md:w-auto"
                                >
                                    Go to Home
                                </Link>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {courses.length > 0 ? courses.map((course, idx) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                index={idx}
                                isLoading={loadingCourseId === course.id}
                                onSelect={handleCourseSelect}
                                onHover={handleCourseHover}
                            />
                        )) : (
                            <div className="col-span-full py-40 text-center bg-white rounded-[4rem] border-2 border-dashed border-slate-100">
                                <p className="text-slate-300 font-bold text-3xl mb-10 tracking-tight italic">No modules match this stream filter.</p>
                                <Link href="/" className="inline-flex items-center text-blue-600 font-black text-lg underline decoration-[4px] underline-offset-10 hover:text-indigo-600 transition-colors">
                                    Browse All Academic Paths <ChevronRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}

export default function CoursesPage({ initialData }: CoursesClientProps) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-50/30 px-6 py-24">
                <div className="max-w-6xl mx-auto">
                    <SkeletonList count={4} />
                </div>
            </div>
        }>
            <CoursesContent initialData={initialData} />
        </Suspense>
    );
}
