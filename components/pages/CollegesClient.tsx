"use client";

import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiClient } from "@/lib/apiClient";
import { useCollegesQuery } from "@/features/common/queries";
import { ArrowLeft, ChevronRight, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { SkeletonList } from "../shared/SkeletonCard";
import { College, ApiError } from "@/types";
import { COLLEGES_DATA } from "@/lib/constants/landing-data";
import { JsonLd, BreadcrumbSchema } from "@/components/seo/JsonLd";

interface CollegesClientProps {
    initialData?: College[];
}

function CollegesContent({ initialData }: CollegesClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // All data from previous steps
    const stream = searchParams.get("stream") || "";
    const streamName = searchParams.get("streamName") || "";
    const courseId = searchParams.get("courseId") || "";
    const courseName = searchParams.get("courseName") || "";
    const addonId = searchParams.get("addonId") || "";
    const addonName = searchParams.get("addonName") || "None";

    const { data: apiColleges, isLoading, error } = useCollegesQuery(addonId);
    const apiError = error as ApiError | null;

    // Dynamic data fallback: API > Initial > Curated Constants
    const colleges = (apiColleges && apiColleges.length > 0)
        ? apiColleges
        : (initialData && initialData.length > 0)
            ? initialData
            : (!addonId ? COLLEGES_DATA : []);

    const [, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const handleCollegeSelect = async (collegeName: string) => {
        setSubmitting(true);
        setSubmitError(null);
        try {
            // Sanitization as per security skill
            const sanitizedCollege = collegeName.trim();
            const sanitizedCourse = `${courseName}${addonName !== 'None' ? ` with ${addonName}` : ''}`.trim();

            // 1. Execute POST /api/Leads
            const leadPayload = {
                fullName: "Interactive Selection Student",
                PhoneNumber: "0000000000", // Required by backend validation
                courseInterested: sanitizedCourse,
                collegeInterested: sanitizedCollege,
                source: 1 // 1 = Website
            };

            await apiClient.post("/Leads", leadPayload).catch(e => {
                console.warn("Lead tracking failed but continuing redirect:", e);
                return null;
            });

            // 2. Redirect to WhatsApp with sanitized message
            const message = `Hi Adotzee, I'm interested in admission.\n\nSummary:\nStream: ${streamName}\nCourse: ${sanitizedCourse}\nCollege: ${sanitizedCollege}`;
            const whatsappUrl = `https://wa.me/918281060462?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, "_blank");
            router.push("/");
        } catch (_) {
            setSubmitError("Failed to process your request. Please try again.");
            setSubmitting(false);
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: (idx: number) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as any
            }
        })
    };

    // Breadcrumb Schema for search engine navigation
    const breadcrumbData = BreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: streamName || "Courses", url: `/courses?stream=${stream}` },
        { name: courseName || "Addons", url: `/addons?stream=${stream}&courseId=${courseId}` },
        { name: "Colleges", url: `/colleges?${searchParams.toString()}` }
    ]);

    return (
        <main className="min-h-screen bg-slate-50/30 py-24 px-6 relative overflow-hidden">
            <JsonLd data={breadcrumbData} />
            <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-100/30 rounded-full blur-[140px] opacity-40 mix-blend-multiply" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-100/30 rounded-full blur-[140px] opacity-40 mix-blend-multiply" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Navigation - Ultra Premium */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center text-slate-400 font-bold hover:text-slate-900 transition-all group mb-16 bg-white px-6 py-3 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md"
                >
                    <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
                    Previous Selection
                </button>

                {/* Header with Hierarchy */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-0.5 w-8 bg-blue-600 rounded-full" />
                        <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px]">Institutional Match</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-slate-900 mt-4 tracking-tighter leading-[0.95]"
                    >
                        Premier Institutions <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">
                            {courseName ? `for ${courseName}` : "across South India"}
                        </span>
                    </motion.h1>
                    <p className="text-slate-500 font-medium text-xl mt-10 max-w-2xl leading-relaxed italic">
                        Select an institution below to finalize your interest and receive direct consultation via WhatsApp.
                    </p>
                </div>

                {/* Content */}
                {isLoading && colleges.length === 0 ? (
                    <div className="py-20">
                        <SkeletonList count={3} />
                    </div>
                ) : apiError || submitError ? (
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] border-2 border-slate-50 shadow-2xl text-center max-w-3xl mx-auto relative overflow-hidden">
                        {apiError?.isDatabaseError && (
                            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-400 to-amber-500" />
                        )}
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 ${apiError?.isDatabaseError ? "bg-amber-50" : "bg-red-50"}`}>
                            <span className={`text-3xl ${apiError?.isDatabaseError ? "text-amber-500" : "text-red-500"}`}>!</span>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">
                            {apiError?.isDatabaseError ? "System Optimization" : "Request Interrupted"}
                        </h2>
                        <p className="text-slate-500 font-medium mb-12 text-lg">
                            {(apiError ? apiError.message : submitError) || "Something went wrong while fetching colleges."}
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200 w-full md:w-auto"
                            >
                                Try Refreshing
                            </button>
                            {apiError?.isDatabaseError && (
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
                        {colleges.length > 0 ? colleges.map((college, idx) => (
                            <motion.div
                                key={college.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                custom={idx}
                                whileHover={{ y: -5, scale: 1.01 }}
                                onClick={() => handleCollegeSelect(college.name)}
                                className="bg-white p-4 md:mx-12 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all text-left group relative flex flex-row items-center gap-4 md:gap-18 overflow-hidden min-h-[110px] md:min-h-[130px] cursor-pointer"
                            >
                                {college.isRecommended && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                                        className="absolute top-0 right-0 z-20 cursor-help"
                                        title="Specially recommended by Adotzee for quality education and placements"
                                    >
                                        <div className="bg-linear-to-r from-blue-400 via-brand-primary to-blue-500 text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl shadow-lg flex items-center gap-1.5 border-b border-l border-white/20">
                                            Adotzee&apos;s Choice
                                        </div>
                                    </motion.div>
                                )}
                                <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-linear-to-l from-blue-50/20 to-transparent pointer-events-none" />

                                {/* Icon Section */}
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1rem] md:rounded-[1.5rem] bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-6 shadow-xs">
                                    <GraduationCap className="size-8 md:size-10 text-blue-600 group-hover:text-white transition-colors" />
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                                    <div className="flex flex-col gap-1.5">
                                        <h3 className="text-xl md:text-3xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                            {college.name}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <div className="flex items-center text-green-600 font-bold text-[7px] md:text-[9px] uppercase tracking-[0.15em] border border-green-100 bg-green-50/50 px-2 py-1 rounded-full w-fit group-hover:bg-green-100 transition-colors">
                                                <span className="w-1 h-1 rounded-full bg-green-500 mr-1.5 animate-pulse" />
                                                Direct Placement
                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleCollegeSelect(college.name);
                                                }}
                                                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-bold text-[10px] md:text-xs transition-all shadow-md hover:shadow-lg active:scale-95 group/btn"
                                            >
                                                Click fees and details
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="hidden md:flex flex-col text-right">
                                            <span className="text-slate-300 font-black text-[8px] uppercase tracking-widest mb-0.5">Final Step</span>
                                            <span className="text-slate-900 font-bold text-xs">Consultation</span>
                                        </div>
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center shadow-xs group-hover:bg-green-500 group-hover:scale-110 transition-all duration-500">
                                            <FaWhatsapp className="size-6 md:size-8 text-blue-600 group-hover:text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )) : (
                            <div className="col-span-full py-40 text-center bg-white rounded-[4rem] border-2 border-dashed border-slate-100">
                                <p className="text-slate-300 font-bold text-3xl mb-10 tracking-tight italic">No institutional partnerships found for this path.</p>
                                <Link href="https://wa.me/918281060462" target="_blank" className="inline-flex items-center text-blue-600 font-black text-lg underline decoration-[4px] underline-offset-10 hover:text-indigo-600 transition-colors">
                                    Consult Admissions Desk <ChevronRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}

export default function CollegesPage({ initialData }: CollegesClientProps) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-50/30 px-6 py-24">
                <div className="max-w-7xl mx-auto">
                    <SkeletonList count={4} />
                </div>
            </div>
        }>
            <CollegesContent initialData={initialData} />
        </Suspense>
    );
}
