"use client";

import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { apiClient } from "@/lib/apiClient";
import { Loader2, ArrowLeft, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { SkeletonList } from "../shared/SkeletonCard";
import { AddonCourse, ApiError } from "@/types";
import { ADDONS_DATA } from "@/lib/constants/landing-data";
import { JsonLd, BreadcrumbSchema } from "@/components/seo/JsonLd";

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
    const [apiError, setApiError] = useState<ApiError | null>(null);

    useEffect(() => {
        // Only fetch if we don't have initial data or if courseId changed
        if (initialData && initialData.length > 0 && addons.length > 0) {
            setLoading(false);
            return;
        }

        const fetchAddons = async () => {
            setLoading(true);
            setApiError(null);
            try {
                const url = courseId ? `/Addons/by-course/${courseId}` : "/Addons";
                const data = await apiClient.get<AddonCourse[]>(url);
                const addonList = Array.isArray(data) ? data : [];
                
                // Fallback to curated data if direct navigation returns empty results
                if (addonList.length === 0 && !courseId) {
                    setAddons(ADDONS_DATA);
                } else {
                    setAddons(addonList);
                }
            } catch (err) {
                const error = err as ApiError;
                console.error("Addon Fetch Error:", error);
                
                // Fallback on error if navigating from navbar
                if (!courseId) {
                    setAddons(ADDONS_DATA);
                } else if (error.name === 'AxiosError' && (error as ApiError & { response?: { status: number } }).response?.status === 404) {
                    setAddons([]);
                } else {
                    setApiError(error);
                    setAddons([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchAddons();
    }, [courseId, router, initialData, addons.length]);

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

    // Breadcrumb Schema for search engine navigation
    const breadcrumbData = BreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: streamName || "Courses", url: `/courses?stream=${stream}` },
        { name: "Addons", url: `/addons?stream=${stream}&courseId=${courseId}` }
    ]);

    return (
        <main className="min-h-screen bg-white py-24 px-6 relative overflow-hidden">
            <JsonLd data={breadcrumbData} />
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
                    {courseName ? `Back to ${courseName}` : "Explore All Courses"}
                </button>

                {/* Header */}
                <div className="mb-16">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-blue-600 font-black uppercase tracking-widest text-[10px]"
                    >
                        {courseId ? "Step 03 — Selection" : "Skill Specializations"}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black text-slate-900 mt-4 tracking-tighter leading-none"
                    >
                        {courseName ? (
                            <>Specialized for <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">{courseName}</span></>
                        ) : (
                            <>Professional <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">Add-on Skills</span></>
                        )}
                    </motion.h1>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-4">
                    {loading ? (
                        <div className="py-10">
                            <SkeletonList count={2} />
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
                                {apiError.message || "Something went wrong while fetching specializations."}
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
                        addons.map((addon, idx) => (
                            <motion.button
                                key={addon.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (idx + 1) * 0.1 }}
                                onClick={() => handleAddonSelect(addon.id.toString(), addon.name)}
                                onMouseEnter={() => handleAddonHover(addon.id.toString(), addon.name)}
                                disabled={selectingAddonId !== null}
                                className="bg-white p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-2 border-slate-50 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all text-left group flex flex-row items-center gap-4 md:gap-6 disabled:opacity-70 min-h-[100px] md:min-h-[120px]"
                            >
                                <div className="p-3 rounded-2xl bg-blue-50 group-hover:bg-blue-600 transition-colors shrink-0">
                                    {selectingAddonId === addon.id.toString() ? (
                                        <Loader2 className="w-5 h-5 md:w-7 md:h-7 text-blue-600 animate-spin" />
                                    ) : (
                                        <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-blue-600 group-hover:text-white transition-colors" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-0.5">
                                        <span className="text-lg md:text-xl font-bold text-slate-800 block">{addon.name}</span>
                                        <div className="text-[8px] font-black uppercase tracking-widest text-blue-300">Specialization</div>
                                    </div>
                                    <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform text-xs md:text-sm">
                                        {selectingAddonId === addon.id.toString() ? "Preparing matched colleges..." : "Explore this path"} 
                                        {selectingAddonId !== addon.id.toString() && <ChevronRight className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4" />}
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
