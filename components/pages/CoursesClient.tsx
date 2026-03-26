"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiClient } from "@/services/apiClient";
import { useCoursesQuery } from "@/services/queries";
import { Loader2, ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

function CoursesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const stream = searchParams.get("stream") || "";
    const streamName = searchParams.get("streamName") || "";

    const { data: courses = [], isLoading, error } = useCoursesQuery(stream);

    useEffect(() => {
        if (!stream) {
            router.push("/");
        }
    }, [stream, router]);

    const handleCourseSelect = (courseId: string, courseName: string) => {
        router.push(`/addons?courseId=${courseId}&courseName=${encodeURIComponent(courseName)}&streamName=${encodeURIComponent(streamName)}&stream=${stream}`);
    };

    // Card variants for staggered entrance
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: (idx: number) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: idx * 0.08,
                duration: 0.5,
                ease: [0.21, 0.45, 0.32, 0.9] as any,
            },
        }),
    };

    return (
        <main className="min-h-screen bg-slate-50/50 py-24 px-6 relative overflow-hidden">
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
                        <span>Expertise in</span>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">{streamName}</span>
                    </motion.h1>
                    <p className="text-slate-500 font-medium text-lg mt-8 max-w-xl leading-relaxed">
                        Curated collection of industry-leading courses and global specializations for your chosen path.
                    </p>
                </div>

                {/* Content */}
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-40">
                        <div className="relative">
                            <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin" />
                            <Loader2 className="w-8 h-8 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-10">Synthesizing Course Data...</p>
                    </div>
                ) : error ? (
                    <div className="bg-white p-16 rounded-[4rem] border-2 border-red-50 shadow-2xl text-center max-w-3xl mx-auto">
                        <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-8">
                             <span className="text-red-500 text-3xl">!</span>
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-4">Request Interrupted</h2>
                        <p className="text-slate-500 font-medium mb-12">{(error as any).message || "Something went wrong while fetching courses."}</p>
                        <button onClick={() => window.location.reload()} className="bg-slate-900 text-white px-16 py-5 rounded-3xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200">System Reboot</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {courses.length > 0 ? courses.map((course: any, idx: number) => (
                            <motion.button
                                key={course.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                custom={idx}
                                whileHover={{ y: -8, scale: 1.01 }}
                                onClick={() => handleCourseSelect(course.id, course.name || course.title)}
                                className="group relative p-10 text-left bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between min-h-[220px] overflow-hidden"
                            >
                                {/* Decorative Gradient on Hover */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-[4rem]" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-auto">
                                        <span className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-400 font-bold text-[9px] uppercase tracking-widest border border-slate-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                                            #{String(idx + 1).padStart(2, '0')} Module
                                        </span>
                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:rotate-12 transition-all duration-500 shadow-xs">
                                            <ChevronRight className="w-7 h-7 text-slate-300 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8">
                                        <h3 className="text-3xl font-black text-slate-800 leading-[1.1] mb-2 group-hover:text-blue-600 transition-colors">{course.name || course.title}</h3>
                                        <p className="text-slate-400 font-medium text-sm line-clamp-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                            Advanced curriculum & global accreditation available.
                                        </p>
                                    </div>
                                </div>
                            </motion.button>
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

export default function CoursesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Loading Courses</span>
            </div>
        }>
            <CoursesContent />
        </Suspense>
    );
}
