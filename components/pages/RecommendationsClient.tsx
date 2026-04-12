"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MapPin, GraduationCap, ArrowRight, Loader2, BookOpen, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CourseCard } from "@/components/cards/CourseCard";
import { CollegeCard } from "@/components/cards/CollegeCard";
import { useRecommendations } from "@/hooks/useData";
import { AddonCard } from "@/components/cards/AddonCard";
import { SkeletonList } from "../shared/SkeletonCard";
import { Course, College, AddonCourse } from "@/types";

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

export default function RecommendationsPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        interests: "",
        stream: "Science",
        location: "",
    });

    const mutation = useRecommendations();
    const results = mutation.data;
    const isLoading = mutation.isPending;

    const handleNext = () => setStep((s) => Math.min(s + 1, 3));
    const handleBack = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) { handleNext(); return; }
        mutation.mutate({
            interests: formData.interests,
            budget: 0,
            location: formData.location,
            preferredStream: formData.stream,
        });
    };

    /* ── Results View ── */
    if (results) {
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
                            Based on your interests, here are the best courses, colleges and certifications for you.
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
                                    <h2 className="text-lg font-black text-slate-700 uppercase tracking-widest">Colleges</h2>
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

                        {(!results.courses?.length && !results.colleges?.length && !results.addons?.length) && (
                            <div className="text-center py-24 rounded-2xl border-2 border-dashed border-slate-200 bg-white">
                                <p className="text-slate-400 text-base font-medium">No matches found. Try broadening your interests.</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-16 text-center">
                        <Button
                            onClick={() => { mutation.reset(); setStep(1); }}
                            variant="outline"
                            className="border-slate-200 text-slate-600 hover:bg-slate-50 px-8 h-12 rounded-full font-semibold gap-2"
                        >
                            <RotateCcw className="size-4" /> Start Over
                        </Button>
                    </div>
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
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-200 mb-6">
                        <GraduationCap className="size-7 text-white" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">Find Your Path</h1>
                    <p className="text-slate-500 font-medium">Answer 3 quick questions to get tailored recommendations.</p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">

                    {/* Progress bar */}
                    <div className="h-1 bg-slate-100 relative">
                        <motion.div
                            className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full"
                            initial={{ width: `${((step - 1) / 3) * 100}%` }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.4, ease: "easeInOut" as const }}
                        />
                    </div>

                    {/* Step indicators */}
                    <div className="flex items-center justify-between px-8 pt-6 pb-0">
                        {STEPS.map((s) => (
                            <div key={s.number} className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                                    step > s.number
                                        ? "bg-blue-500 text-white"
                                        : step === s.number
                                        ? "bg-blue-50 text-blue-600 ring-2 ring-blue-500"
                                        : "bg-slate-100 text-slate-400"
                                }`}>
                                    {step > s.number ? "✓" : s.number}
                                </div>
                                <span className={`text-xs font-semibold hidden sm:block transition-colors ${step === s.number ? "text-slate-700" : "text-slate-400"}`}>
                                    {s.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Form content */}
                    <div className="p-8">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <SkeletonList count={2} />
                                <h3 className="text-xl font-black text-slate-800 mb-2 mt-8">Finding your matches…</h3>
                                <p className="text-slate-500 text-sm">Our AI is analyzing the best institutional paths for you.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col min-h-[300px]">
                                <AnimatePresence mode="wait">

                                    {/* STEP 1 — Interests */}
                                    {step === 1 && (
                                        <motion.div key="step1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" transition={slideTransition} className="flex-1">
                                            <h2 className="text-2xl font-black text-slate-900 mb-1">What are you interested in?</h2>
                                            <p className="text-slate-500 mb-7 text-sm font-medium">Tell us your passions — tech, medicine, business, arts, anything.</p>

                                            <div className="space-y-3">
                                                <Label htmlFor="interests" className="text-slate-600 font-semibold text-xs uppercase tracking-widest">Your Interests</Label>
                                                <Input
                                                    id="interests"
                                                    autoFocus
                                                    placeholder="e.g. Technology, Healthcare, Design…"
                                                    className="h-12 text-base bg-slate-50 border-slate-200 focus:border-blue-400 focus:ring-0 text-slate-800 rounded-xl placeholder:text-slate-400"
                                                    value={formData.interests}
                                                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                                                    required
                                                />
                                            </div>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {["Technology", "Finance", "Healthcare", "Design", "Law", "Research"].map(tag => (
                                                    <button
                                                        type="button"
                                                        key={tag}
                                                        onClick={() => setFormData({ ...formData, interests: `${formData.interests} ${tag}`.trim() })}
                                                        className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 border border-transparent hover:border-blue-200 transition-all"
                                                    >
                                                        + {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 2 — Stream */}
                                    {step === 2 && (
                                        <motion.div key="step2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" transition={slideTransition} className="flex-1">
                                            <h2 className="text-2xl font-black text-slate-900 mb-1">Which stream are you from?</h2>
                                            <p className="text-slate-500 mb-7 text-sm font-medium">Select the academic stream you studied after 10th.</p>

                                            <RadioGroup
                                                value={formData.stream}
                                                onValueChange={(v: string) => setFormData({ ...formData, stream: v })}
                                                className="grid grid-cols-2 gap-3"
                                            >
                                                {[
                                                    { id: "Science", desc: "STEM & Medicine" },
                                                    { id: "Commerce", desc: "Business & Finance" },
                                                    { id: "Arts", desc: "Humanities & Media" },
                                                    { id: "Any", desc: "Open to all" },
                                                ].map((item) => (
                                                    <Label
                                                        key={item.id}
                                                        htmlFor={item.id}
                                                        className={`flex flex-col items-start p-4 border rounded-2xl cursor-pointer transition-all duration-200 ${
                                                            formData.stream === item.id
                                                                ? "border-blue-500 bg-blue-50 shadow-sm"
                                                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                                                        }`}
                                                    >
                                                        <div className="flex items-center w-full justify-between mb-1">
                                                            <span className={`font-black text-sm ${formData.stream === item.id ? "text-blue-700" : "text-slate-800"}`}>{item.id}</span>
                                                            <RadioGroupItem value={item.id} id={item.id} className="text-blue-500 border-slate-300" />
                                                        </div>
                                                        <span className={`text-xs font-medium ${formData.stream === item.id ? "text-blue-500" : "text-slate-400"}`}>{item.desc}</span>
                                                    </Label>
                                                ))}
                                            </RadioGroup>
                                        </motion.div>
                                    )}

                                    {/* STEP 3 — Location */}
                                    {step === 3 && (
                                        <motion.div key="step3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" transition={slideTransition} className="flex-1">
                                            <h2 className="text-2xl font-black text-slate-900 mb-1">Preferred city or region?</h2>
                                            <p className="text-slate-500 mb-7 text-sm font-medium">We'll find colleges near you. Leave blank to see all.</p>

                                            <div className="space-y-3">
                                                <Label htmlFor="location" className="text-slate-600 font-semibold text-xs uppercase tracking-widest">Location (Optional)</Label>
                                                <Input
                                                    id="location"
                                                    autoFocus
                                                    placeholder="e.g. Bangalore, Mangalore, Kerala…"
                                                    className="h-12 text-base bg-slate-50 border-slate-200 focus:border-blue-400 focus:ring-0 text-slate-800 rounded-xl placeholder:text-slate-400"
                                                    value={formData.location}
                                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={handleBack}
                                        className={`text-slate-500 hover:text-slate-800 hover:bg-slate-100 font-semibold rounded-xl ${step === 1 ? "invisible" : ""}`}
                                    >
                                        Back
                                    </Button>

                                    <Button
                                        type="submit"
                                        isLoading={isLoading}
                                        disabled={step === 1 && formData.interests.length < 3}
                                        className="bg-blue-600 hover:bg-blue-700 min-w-[140px] h-11 rounded-xl text-white font-bold shadow-sm shadow-blue-200 transition-all gap-2 disabled:opacity-40"
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

                <p className="text-center text-xs text-slate-400 mt-6 font-medium">
                    Personalised for students across South India
                </p>
            </div>
        </div>
    );
}
