"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiClient } from "@/lib/apiClient";
import { Loader2, ArrowLeft, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { SkeletonList } from "../shared/SkeletonCard";
import { AddonCourse } from "@/types";

interface AddonsClientProps {
    initialData?: AddonCourse[];
}

function AddonsContent({ initialData }: AddonsClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Params from previous steps
    const stream = searchParams.get("stream") || "";
    const streamName = searchParams.get("streamName") || "";
    const courseId = searchParams.get("courseId") || "";
    const courseName = searchParams.get("courseName") || "";

    const [selectingAddonId, setSelectingAddonId] = useState<string | null>(null);
    const [addons, setAddons] = useState<AddonCourse[]>(initialData || []);
    const [loading, setLoading] = useState(!initialData || initialData.length === 0);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        if (!courseId) {
            router.push("/courses");
            return;
        }

        // Only fetch if we don't have initial data or if courseId changed
        if (initialData && initialData.length > 0 && addons.length > 0) {
            setLoading(false);
            return;
        }

        const fetchAddons = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await apiClient.get(`/Addons/by-course/${courseId}`);
                const addonList = Array.isArray(data) ? data : [];
                setAddons(addonList);
            } catch (err: any) {
                console.error("Addon Fetch Error:", err);
                // Only swallow if it's a 404 (No specialization exists), otherwise report
                if (err.response?.status === 404) {
                    setAddons([]);
                } else {
                    setError(err);
                    setAddons([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAddons();
    }, [courseId, router, initialData]);

    const handleAddonSelect = (addonId: string, addonName: string) => {
        setSelectingAddonId(addonId);
        const params = new URLSearchParams(searchParams.toString());
        params.set("addonId", addonId);
        params.set("addonName", addonName);
        router.push(`/colleges?${params.toString()}`);
    };

    const handleAddonHover = (addonId: string, addonName: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("addonId", addonId);
        params.set("addonName", addonName);
        router.prefetch(`/colleges?${params.toString()}`);
    };

    return (
        <main className="min-h-screen bg-white py-24 px-6 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-40" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Navigation */}
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center text-slate-400 font-bold hover:text-blue-600 transition-colors group mb-12"
                >
                    <div className="p-2 rounded-full bg-slate-50 group-hover:bg-blue-50 mr-4 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </div>
                    Back to Courses
                </button>

                {/* Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-blue-600 font-black uppercase tracking-widest text-sm"
                    >
                        Step 03
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black text-slate-900 mt-4 tracking-tighter leading-tight"
                    >
                        Pick a Specialization for<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">{courseName}</span>
                    </motion.h1>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-8">
                    {loading ? (
                        <div className="py-10">
                            <SkeletonList count={2} />
                        </div>
                    ) : error ? (
                        <div className="bg-white p-12 md:p-16 rounded-[4rem] border-2 border-slate-50 shadow-2xl text-center max-w-3xl mx-auto relative overflow-hidden">
                            {(error as any)?.isDatabaseError && (
                                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-orange-400 to-amber-500" />
                            )}
                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 ${(error as any)?.isDatabaseError ? "bg-amber-50" : "bg-red-50"}`}>
                                <span className={`text-3xl ${(error as any)?.isDatabaseError ? "text-amber-500" : "text-red-500"}`}>!</span>
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">
                                {(error as any)?.isDatabaseError ? "System Optimization" : "Request Interrupted"}
                            </h2>
                            <p className="text-slate-500 font-medium mb-12 text-lg">
                                {(error as any)?.message || "Something went wrong while fetching specializations."}
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-slate-900 text-white px-12 py-5 rounded-3xl font-bold hover:bg-black transition-all shadow-xl shadow-slate-200 w-full md:w-auto"
                                >
                                    Try Refreshing
                                </button>
                                {(error as any)?.isDatabaseError && (
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
                        addons.map((addon, idx) => (
                            <motion.button
                                key={addon.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (idx + 1) * 0.1 }}
                                onClick={() => handleAddonSelect(addon.id.toString(), addon.name)}
                                onMouseEnter={() => handleAddonHover(addon.id.toString(), addon.name)}
                                disabled={selectingAddonId !== null}
                                className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-50 shadow-sm hover:shadow-2xl hover:border-blue-500 transition-all text-left group flex flex-row items-center gap-6 disabled:opacity-70"
                            >
                                <div className="p-4 rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors shrink-0">
                                    {selectingAddonId === addon.id.toString() ? (
                                        <Loader2 className="w-6 h-6 md:w-8 md:h-8 text-blue-600 animate-spin" />
                                    ) : (
                                        <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-blue-600 group-hover:text-white transition-colors" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xl md:text-2xl font-black text-slate-800 block">{addon.name}</span>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-blue-300">Specialization</div>
                                    </div>
                                    <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform text-sm md:text-base">
                                        {selectingAddonId === addon.id.toString() ? "Preparing matched colleges..." : "Explore this path"} 
                                        {selectingAddonId !== addon.id.toString() && <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />}
                                    </div>
                                </div>
                            </motion.button>
                        ))
                    )}
                </div>
            </div>
        </main>
    );
}

export default function AddonsPage({ initialData }: AddonsClientProps) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <SkeletonList count={3} />
                </div>
            </div>
        }>
            <AddonsContent initialData={initialData} />
        </Suspense>
    );
}
