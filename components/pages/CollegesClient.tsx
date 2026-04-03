"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiClient } from "@/services/apiClient";
import { useCollegesQuery } from "@/services/queries";
import { Loader2, ArrowLeft, ChevronRight, GraduationCap, MessageCircle } from "lucide-react";
import Link from "next/link";

function CollegesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // All data from previous steps
    const streamName = searchParams.get("streamName") || "";
    const courseName = searchParams.get("courseName") || "";
    const addonId = searchParams.get("addonId") || "";
    const addonName = searchParams.get("addonName") || "None";

    const { data: colleges = [], isLoading, error } = useCollegesQuery(addonId);
    const [submitting, setSubmitting] = useState(false);
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
        } catch (err: any) {
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

    return (
        <main className="min-h-screen bg-slate-50/30 py-24 px-6 relative overflow-hidden">
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
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">for {courseName}</span>
                    </motion.h1>
                    <p className="text-slate-500 font-medium text-xl mt-10 max-w-2xl leading-relaxed italic">
                        Select an institution below to finalize your interest and receive direct consultation via WhatsApp.
                    </p>
                </div>

                {/* Content */}
                {isLoading || submitting ? (
                    <div className="flex flex-col items-center justify-center py-40">
                        <div className="relative mb-12">
                            <div className="w-24 h-24 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin" />
                            <GraduationCap className="w-10 h-10 text-blue-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] animate-pulse">
                            {submitting ? "Finalizing Official Request..." : "Evaluating Institutional Data..."}
                        </p>
                    </div>
                ) : error || submitError ? (
                    <div className="bg-white p-20 rounded-[4rem] border-2 border-red-50 shadow-2xl text-center max-w-3xl mx-auto">
                        <div className="w-20 h-20 bg-red-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10">
                            <span className="text-red-500 font-black text-3xl">!</span>
                        </div>
                        <p className="text-slate-900 font-black text-2xl mb-4">Request Interrupted</p>
                        <p className="text-slate-500 font-medium mb-12">{(error ? (error as any).message : submitError)}</p>
                        <button onClick={() => window.location.reload()} className="bg-slate-900 text-white px-16 py-5 rounded-[2rem] font-black hover:bg-black transition-all shadow-xl shadow-slate-200">System Reboot</button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {colleges.length > 0 ? colleges.map((college: any, idx: number) => (
                            <motion.button
                                key={college.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                custom={idx}
                                whileHover={{ y: -12, scale: 1.02 }}
                                onClick={() => handleCollegeSelect(college.name || college.title)}
                                className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-[0_50px_100px_-20px_rgba(37,99,235,0.12)] hover:border-blue-500 transition-all text-left group relative flex flex-col justify-between overflow-hidden min-h-[400px]"
                            >
                                <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-blue-50/50 to-transparent rounded-bl-[5rem] group-hover:from-blue-100 transition-colors" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-12">
                                        <div className="w-20 h-20 rounded-[2rem] bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-all duration-500 group-hover:rotate-6 shadow-sm">
                                            <GraduationCap className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 leading-[1.1] mb-6 group-hover:text-blue-600 transition-colors">{college.name || college.title}</h3>
                                        <div className="flex items-center text-green-600 font-black text-[10px] uppercase tracking-[0.2em] border border-green-100 bg-green-50/50 px-4 py-2 rounded-full w-fit group-hover:bg-green-100 transition-colors">
                                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2.5 animate-pulse" />
                                            Direct Placement
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-10 border-t border-slate-50 flex items-center justify-between group-hover:border-blue-100 transition-colors">
                                        <div className="flex flex-col">
                                            <span className="text-slate-300 font-black text-[9px] uppercase tracking-widest mb-1">Status</span>
                                            <span className="text-slate-900 font-bold text-sm">Connect with expert</span>
                                        </div>
                                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:bg-green-500 group-hover:scale-110 transition-all duration-500">
                                            <MessageCircle className="w-5 h-5 text-green-700 hover:text-white" />
                                        </div>
                                    </div>
                                </div>
                            </motion.button>
                        )) : (
                            <div className="col-span-full py-40 text-center bg-white rounded-[5rem] border-4 border-dashed border-slate-50 italic">
                                <p className="text-slate-300 font-black text-3xl mb-12 tracking-tight">No institutional partnerships found for this path.</p>
                                <Link href="https://wa.me/918281060462" target="_blank">
                                    <button className="bg-blue-600 text-white px-20 py-7 rounded-[2rem] font-black shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)] hover:bg-black transition-all hover:scale-105 active:scale-95 group flex items-center mx-auto">
                                        Consult Admissions Command <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}

export default function CollegesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Loading Colleges</span>
            </div>
        }>
            <CollegesContent />
        </Suspense>
    );
}
