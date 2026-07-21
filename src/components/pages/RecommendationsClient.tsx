"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles, MapPin, GraduationCap, ArrowRight, BookOpen, RotateCcw, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/cards/CourseCard";
import { CollegeCard } from "@/components/cards/CollegeCard";
import { useRecommendations } from "@/hooks/useData";
import { AddonCard } from "@/components/cards/AddonCard";
import { SkeletonList } from "../shared/SkeletonCard";
import { Course, College, AddonCourse, RecommendationRequest } from "@/types";
import { MultiSelectLocation } from "@/components/ui/multi-select-location";
import { cn } from "@/lib/utils";

const STEPS = [
    { number: 1, label: "Interests" },
    { number: 2, label: "Stream" },
    { number: 3, label: "Location" },
];

const slideVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -16 },
};

const slideTransition = { duration: 0.3, ease: "easeOut" as const };

const INTEREST_OPTIONS = [
    "Engineering", "Medical", "Management", "Computer Science",
    "Design", "Commerce", "Arts", "Nursing", "Pharmacy", "Aviation"
];

const STREAM_OPTIONS = [
    { id: "Science", label: "Science", desc: "Physics, Chemistry, Math/Bio" },
    { id: "Commerce", label: "Commerce", desc: "Accounts, Business, Economics" },
    { id: "Humanities", label: "Humanities", desc: "History, Sociology, Arts" },
    { id: "Diploma", label: "Diploma", desc: "Polytechnic, ITI" },
    { id: "Other", label: "Other", desc: "Any other background" },
];

export default function RecommendationsPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<{
        interests: string[];
        stream: string;
        location: string[];
    }>({
        interests: [],
        stream: "Science",
        location: [],
    });

    // For storing error messages
    const [submitError, setSubmitError] = useState<string | null>(null);

    const mutation = useRecommendations();
    const results = mutation.data;
    const isLoading = mutation.isPending;

    const handleNext = () => setStep((s) => Math.min(s + 1, 3));
    const handleBack = () => {
        setSubmitError(null);
        setStep((s) => Math.max(s - 1, 1));
    };

    const toggleInterest = (interest: string) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (step < 3) {
            handleNext();
            return;
        }

        // Build payload dynamically to omit empty strings/arrays completely
        // The service layer might expect interests as a string based on old type, or array based on new type.
        // The implementation plan says "serialize them as comma-separated strings" if backend expects it.
        const interestsJoined = formData.interests.join(", ");
        const locationJoined = formData.location.join(", ");

        const payload: any = {
            interests: interestsJoined,
            preferredStream: formData.stream,
        };

        if (locationJoined && locationJoined.trim() !== "") {
            payload.location = locationJoined;
        }

        mutation.mutate(payload, {
            onError: (err: any) => {
                let msg = "An unexpected error occurred. Please try again later.";
                if (err.isDatabaseError) {
                    msg = "Our database is currently undergoing maintenance. Please try again in a few minutes.";
                } else if (err.message && (err.message.includes("Network Error") || err.message.includes("Failed to fetch"))) {
                    msg = "Network Error. Please check your internet connection.";
                } else if (err.message) {
                    msg = err.message; // From API error mapping
                }
                setSubmitError(msg);
            }
        });
    };

    /* ── Results View ── */
    if (results) {
        const hasResults = (results.courses && results.courses.length > 0) ||
            (results.colleges && results.colleges.length > 0) ||
            (results.addons && results.addons.length > 0);

        return (
            <div className="min-h-screen bg-slate-50 py-16 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl">

                    {/* Header */}
                    <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-blue-100 mb-6">
                            <Sparkles className="size-3.5" /> Recommendations Ready
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
                            Your Personalized Picks
                        </h1>
                        <p className="text-slate-500 text-lg max-w-xl mx-auto font-medium">
                            Based on your profile, here are the best matches we found for you.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {results.courses && results.courses.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <BookOpen className="size-4 text-blue-600" />
                                    </div>
                                    <h2 className="text-lg font-black text-slate-700 uppercase tracking-widest">Courses</h2>
                                    <div className="flex-1 h-px bg-slate-200" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {results.courses.map((course: Course) => (
                                        <CourseCard key={course.id} course={course} featured />
                                    ))}
                                </div>
                            </section>
                        )}

                        {results.colleges && results.colleges.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                                        <MapPin className="size-4 text-emerald-600" />
                                    </div>
                                    <h2 className="text-lg font-black text-slate-700 uppercase tracking-widest">Top Colleges</h2>
                                    <div className="flex-1 h-px bg-slate-200" />
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {results.colleges.map((college: College) => (
                                        <CollegeCard key={college.id} college={college} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {results.addons && results.addons.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center">
                                        <Sparkles className="size-4 text-violet-600" />
                                    </div>
                                    <h2 className="text-lg font-black text-slate-700 uppercase tracking-widest">Skill Add-ons</h2>
                                    <div className="flex-1 h-px bg-slate-200" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {results.addons.map((addon: AddonCourse) => (
                                        <AddonCard key={addon.id} addon={addon} />
                                    ))}
                                </div>
                            </section>
                        )}

                        {!hasResults && (
                            <div className="text-center py-24 rounded-2xl border-2 border-dashed border-slate-200 bg-white shadow-sm max-w-2xl mx-auto">
                                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <AlertTriangle className="size-8 text-amber-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">No exact matches found</h3>
                                <p className="text-slate-500 text-base font-medium mb-8 px-6">
                                    We couldn't find an exact match for your specific criteria. Try broadening your location or selecting different interests.
                                </p>
                                <Button
                                    onClick={() => { mutation.reset(); setStep(1); }}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-xl font-bold"
                                >
                                    Adjust Preferences
                                </Button>
                            </div>
                        )}
                    </div>

                    {hasResults && (
                        <div className="mt-12">
                            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                        Adotzee Merit Scholarship
                                    </h3>
                                    <p className="text-blue-100 max-w-xl text-lg">
                                        Found your dream course? Apply for our merit scholarship and get up to 50% tuition assistance for partner colleges.
                                    </p>
                                </div>
                                <div className="shrink-0 w-full md:w-auto">
                                    <Link href="/scholarships/adotzee-merit-scholarship">
                                        <Button className="w-full md:w-auto h-14 px-8 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-lg shadow-xl shadow-yellow-500/20 transition-all">
                                            Check Eligibility
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="mt-12 text-center">
                                <Button
                                    onClick={() => { mutation.reset(); setStep(1); }}
                                    variant="outline"
                                    className="border-slate-200 text-slate-600 hover:bg-slate-50 px-8 h-12 rounded-full font-semibold gap-2"
                                >
                                    <RotateCcw className="size-4" /> Start Over
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    /* ── Form View ── */
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-16 px-4">

            {/* Subtle background blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-xl relative z-10">

                {/* Page Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-200 mb-6">
                        <GraduationCap className="size-7 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Find Your Path</h1>
                    <p className="text-slate-500 font-medium">Answer 3 quick questions to get tailored recommendations.</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">

                    {/* Progress bar */}
                    <div className="h-1.5 bg-slate-100 relative">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-r-full"
                            initial={{ width: `${((step - 1) / 3) * 100}%` }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.4, ease: "easeInOut" as const }}
                        />
                    </div>

                    {/* Step indicators */}
                    <div className="flex items-center justify-between px-8 pt-8 pb-0">
                        {STEPS.map((s) => (
                            <div key={s.number} className="flex flex-col items-center gap-2 relative z-10">
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ring-4 ring-white",
                                    step > s.number ? "bg-emerald-500 text-white" :
                                        step === s.number ? "bg-blue-600 text-white shadow-md shadow-blue-200" :
                                            "bg-slate-100 text-slate-400"
                                )}>
                                    {step > s.number ? "✓" : s.number}
                                </div>
                                <span className={cn(
                                    "text-xs font-semibold hidden sm:block transition-colors",
                                    step === s.number ? "text-slate-900" : "text-slate-400"
                                )}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Form content */}
                    <div className="p-8">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
                                <div className="w-16 h-16 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin mb-8" />
                                <h3 className="text-xl font-black text-slate-800 mb-2">Finding the best colleges for you...</h3>
                                <p className="text-slate-500 text-sm max-w-xs mx-auto">Analyzing thousands of data points to find your perfect match.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col min-h-[340px]">
                                <AnimatePresence mode="wait">

                                    {/* STEP 1 — Interests */}
                                    {step === 1 && (
                                        <motion.div key="step1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" transition={slideTransition} className="flex-1">
                                            <h2 className="text-2xl font-black text-slate-900 mb-2">What are you interested in?</h2>
                                            <p className="text-slate-500 mb-8 text-sm font-medium">Select one or more fields you are passionate about.</p>

                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                                {INTEREST_OPTIONS.map((interest) => {
                                                    const isSelected = formData.interests.includes(interest);
                                                    return (
                                                        <button
                                                            key={interest}
                                                            type="button"
                                                            onClick={() => toggleInterest(interest)}
                                                            className={cn(
                                                                "h-14 rounded-xl border-2 text-sm font-bold transition-all duration-200 flex items-center justify-center px-3",
                                                                isSelected
                                                                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                                                                    : "border-slate-100 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50"
                                                            )}
                                                            aria-pressed={isSelected}
                                                        >
                                                            {interest}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 2 — Stream */}
                                    {step === 2 && (
                                        <motion.div key="step2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" transition={slideTransition} className="flex-1">
                                            <h2 className="text-2xl font-black text-slate-900 mb-2">Which stream are you from?</h2>
                                            <p className="text-slate-500 mb-8 text-sm font-medium">Select the academic stream you studied in 12th / Plus Two.</p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {STREAM_OPTIONS.map((item) => {
                                                    const isSelected = formData.stream === item.id;
                                                    return (
                                                        <button
                                                            key={item.id}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, stream: item.id })}
                                                            className={cn(
                                                                "flex flex-col items-start p-4 border-2 rounded-2xl cursor-pointer transition-all duration-200 text-left",
                                                                isSelected
                                                                    ? "border-blue-600 bg-blue-50 shadow-md shadow-blue-100/50"
                                                                    : "border-slate-100 bg-white hover:border-slate-300 hover:bg-slate-50"
                                                            )}
                                                        >
                                                            <div className="flex items-center w-full justify-between mb-1">
                                                                <span className={cn("font-black text-base", isSelected ? "text-blue-700" : "text-slate-800")}>
                                                                    {item.label}
                                                                </span>
                                                                <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", isSelected ? "border-blue-600" : "border-slate-300")}>
                                                                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                                                                </div>
                                                            </div>
                                                            <span className={cn("text-xs font-medium", isSelected ? "text-blue-600/80" : "text-slate-400")}>
                                                                {item.desc}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 3 — Location */}
                                    {step === 3 && (
                                        <motion.div key="step3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" transition={slideTransition} className="flex-1">
                                            <h2 className="text-2xl font-black text-slate-900 mb-2">Preferred location?</h2>
                                            <p className="text-slate-500 mb-8 text-sm font-medium">Select where you'd like to study. (Leave blank to search everywhere)</p>

                                            <div className="space-y-2">
                                                <MultiSelectLocation
                                                    selected={formData.location}
                                                    onChange={(selected) => setFormData({ ...formData, location: selected })}
                                                    placeholder="Search cities or states..."
                                                />
                                                <p className="text-xs text-slate-400 mt-2 ml-1">
                                                    You can select multiple cities or states. Optional.
                                                </p>
                                            </div>

                                            {submitError && (
                                                <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
                                                    <AlertTriangle className="size-5 text-red-500 shrink-0 mt-0.5" />
                                                    <div className="text-sm text-red-800 font-medium leading-relaxed">
                                                        {submitError}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="flex items-center justify-between mt-auto pt-10">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={handleBack}
                                        className={cn(
                                            "text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-bold rounded-xl h-12 px-6",
                                            step === 1 ? "invisible" : ""
                                        )}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                        type="submit"
                                        disabled={step === 1 && formData.interests.length === 0}
                                        className={cn(
                                            "min-w-[140px] h-12 rounded-xl text-white font-bold transition-all gap-2 px-8",
                                            step === 3
                                                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/30"
                                                : "bg-slate-900 hover:bg-slate-800 disabled:opacity-40"
                                        )}
                                    >
                                        {step === 3 ? (
                                            <><Sparkles className="size-4" /> Get Recommendations</>
                                        ) : (
                                            <>Next <ArrowRight className="size-4" /></>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                <p className="text-center text-xs text-slate-400 mt-8 font-medium">
                    Personalized for students across India
                </p>
            </div>
        </div>
    );
}
