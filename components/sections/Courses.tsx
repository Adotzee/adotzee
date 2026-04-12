"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { COURSES_DATA, CourseData } from "@/lib/constants/landing-data";

export function Courses() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCourseSelect = (courseId: string, courseName: string) => {
        router.push(`/addons?courseId=${courseId}&courseName=${encodeURIComponent(courseName)}&streamName=Science&stream=1`);
    };

    if (!mounted) return null;

    return (
        <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-4 relative inline-block">
                            Trending Courses.
                            <div className="absolute -bottom-2 left-0 w-24 h-1.5 bg-brand-accent rounded-full" />
                        </h2>
                        <p className="text-xl text-[#0F172A] font-medium opacity-70 max-w-xl">
                            Find the right degree program after Plus Two to kickstart your career.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {COURSES_DATA.map((course: CourseData, i) => (
                        <button
                            key={i}
                            onClick={() => handleCourseSelect(course.id, course.title || course.name)}
                            className={`${course.span || "md:col-span-4"} group relative bg-blue-100 backdrop-blur-2xl border border-white/60 shadow-white-glow rounded-3xl p-10 flex flex-col justify-between hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 overflow-hidden text-left`}
                        >
                            <div className="flex justify-between items-start mb-12 relative z-10 w-full">
                                <div className="flex flex-wrap gap-2">
                                    {(course.tags || []).map((tag: string, j: number) => (
                                        <span key={j} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 bg-white rounded-full border border-white shadow-sm text-[#2563EB]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#2563EB] transition-colors duration-300">
                                    <ArrowUpRight className="w-5 h-5 text-[#0F172A] group-hover:text-white transition-colors" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-foreground tracking-tight relative z-10">
                                {course.title || course.name}
                            </h3>

                            {/* Hover Vaporwave Glow */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#E0F2FE] rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply pointer-events-none" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#F1F5F9] rounded-full blur-[200px] mix-blend-multiply opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </section>
    );
}

