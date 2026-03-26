"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useUiStore } from "../../store/useUiStore";
import { useLeadForm, STEPS, LeadFormValues } from "../../hooks/useLeadForm";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    ChevronRight,
    ChevronLeft,
    ShieldCheck,
    Send
} from "lucide-react";

export function LeadFormModal() {
    const { openLeadModal, isLeadModalOpen, closeLeadModal } = useUiStore();
    const { form, currentStep, setCurrentStep, isSubmitting, onSubmit, nextStep, prevStep } = useLeadForm();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem("leadModalShown");
        if (hasSeenModal) return;

        const openModal = (source: string) => {
            const alreadyOpen = useUiStore.getState().isLeadModalOpen;
            if (alreadyOpen) return;
            openLeadModal(undefined, source);
            sessionStorage.setItem("leadModalShown", "true");
        };

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const clientHeight = window.innerHeight;
            const scrollPercentage = (scrollTop + clientHeight) / scrollHeight;
            if (scrollPercentage > 1) {
                openModal("scroll_trigger");
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                openModal("exit_intent");
                document.removeEventListener("mouseleave", handleMouseLeave);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        const timer = setTimeout(() => openModal("timed_fallback"), 10000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(timer);
        };
    }, [openLeadModal]);

    const QUICK_COURSES = ["BBA", "BCA", "BCom", "Nursing", "Engineering"];

    // Container variants for staggered children
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

    return (
        <Dialog open={isLeadModalOpen} onOpenChange={(open) => {
            if (!open) {
                closeLeadModal();
                setTimeout(() => setCurrentStep(0), 300);
            }
        }}>
            <DialogContent className="sm:max-w-[500px] bg-slate-50 border border-slate-200/60 rounded-[2.5rem] p-0 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]">
                {/* Progress Bar with Gradient */}
                <div className="absolute top-0 left-0 w-full h-[6px] bg-slate-200/50 z-50">
                    <motion.div
                        className="h-full bg-linear-to-r from-blue-600 to-indigo-500 shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" as const }}
                    />
                </div>

                <div className="flex flex-col h-full max-h-[90vh]">
                    <div className="p-8 md:p-10 pb-4">
                        <DialogHeader>
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-[10px] font-bold uppercase tracking-[0.15em] border border-blue-500/20">
                                    Stage {currentStep + 1} of {STEPS.length}
                                </span>
                                {currentStep > 0 && (
                                    <button
                                        onClick={prevStep}
                                        className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1 text-xs font-semibold group ml-auto"
                                    >
                                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back
                                    </button>
                                )}
                            </div>
                            <DialogTitle className="text-[2rem] font-bold text-slate-900 leading-[1.1] tracking-[-0.03em]">
                                {currentStep === 0 && "Elevate Your Learning"}
                                {currentStep === 1 && "Align Your Preferences"}
                                {currentStep === 2 && "Finalize Application"}
                            </DialogTitle>
                            <DialogDescription className="text-slate-500 text-sm font-medium leading-relaxed mt-2 max-w-[90%]">
                                {currentStep === 0 && "Trusted by 5,000+ students globally to secure their academic future."}
                                {currentStep === 1 && "We filter through top-tier institutions to find your perfect academic fit."}
                                {currentStep === 2 && "Our admission strategists are ready to review your profile. Any last words?"}
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto px-8 md:px-10 py-4 custom-scrollbar"
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="space-y-5"
                                    >
                                        {currentStep === 0 && (
                                            <>
                                                <motion.div variants={itemVariants}>
                                                    <FormField
                                                        control={form.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Full Name</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter your full name" {...field} className="h-14 bg-white border-slate-200/80 text-slate-900 focus:ring-4 focus:ring-blue-100 rounded-2xl border-2 transition-all" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants}>
                                                    <FormField
                                                        control={form.control}
                                                        name="phone"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Personal Contact</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="+91 00000 00000" {...field} className="h-14 bg-white border-slate-200/80 text-slate-900 focus:ring-4 focus:ring-blue-100 rounded-2xl border-2 transition-all" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants}>
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email Address</FormLabel>
                                                                <FormControl>
                                                                    <Input type="email" placeholder="you@example.com" {...field} className="h-14 bg-white border-slate-200/80 text-slate-900 focus:ring-4 focus:ring-blue-100 rounded-2xl border-2 transition-all" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            </>
                                        )}

                                        {currentStep === 1 && (
                                            <>
                                                <motion.div variants={itemVariants}>
                                                    <FormField
                                                        control={form.control}
                                                        name="interestedCourse"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Course Specialization</FormLabel>
                                                                <div className="flex flex-wrap gap-2 mb-4">
                                                                    {QUICK_COURSES.map((course) => (
                                                                        <button
                                                                            key={course}
                                                                            type="button"
                                                                            onClick={() => form.setValue("interestedCourse", course)}
                                                                            className={`px-4 py-2 text-xs font-bold border-2 rounded-xl transition-all ${form.watch("interestedCourse") === course
                                                                                ? "bg-slate-900 border-slate-900 text-white shadow-lg"
                                                                                : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                                                                                }`}
                                                                        >
                                                                            {course}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                                <FormControl>
                                                                    <Input placeholder="Type course or specialization" {...field} className="h-14 bg-white border-slate-200/80 text-slate-900 focus:ring-4 focus:ring-blue-100 rounded-2xl border-2 transition-all" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants}>
                                                    <FormField
                                                        control={form.control}
                                                        name="preferredCity"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Preferred Location</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Ex: Bangalore, Delhi" {...field} className="h-14 bg-white border-slate-200/80 text-slate-900 focus:ring-4 focus:ring-blue-100 rounded-2xl border-2 transition-all" />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            </>
                                        )}

                                        {currentStep === 2 && (
                                            <>
                                                <motion.div variants={itemVariants}>
                                                    <FormField
                                                        control={form.control}
                                                        name="message"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Questions or Notes</FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Tell us about your requirements or specific colleges..."
                                                                        className="resize-none min-h-[140px] bg-white border-2 border-slate-200/80 text-slate-900 focus:ring-4 focus:ring-blue-100 rounded-2xl p-4 transition-all"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                                <motion.div variants={itemVariants} className="bg-blue-100/30 border border-blue-200/50 rounded-2xl p-5 flex items-start gap-4">
                                                    <div className="bg-white p-2 rounded-xl shadow-sm">
                                                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                                        Data Privacy Guaranteed. Your information is encrypted and only shared with our verified admission consultants.
                                                    </p>
                                                </motion.div>
                                            </>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </form>
                        </Form>
                    </div>

                    <div className="p-8 md:p-10 pt-6 bg-slate-50 border-t border-slate-200/60">
                        {currentStep < STEPS.length - 1 ? (
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="w-full bg-blue-600 hover:bg-blue-700 h-16 rounded-2xl text-base font-bold shadow-[0_20px_40px_-12px_rgba(37,99,235,0.3)] hover:shadow-[0_24px_48px_-12px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group text-white"
                            >
                                Next Step <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={form.handleSubmit(onSubmit)}
                                className="w-full bg-slate-900 hover:bg-black h-16 rounded-2xl text-base font-bold shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-white"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Processing...
                                    </div>
                                ) : (
                                    <>Finalize Submission <Send className="w-4 h-4 ml-1" /></>
                                )}
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(0,0,0,0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(0,0,0,0.1);
                }
            `}</style>
        </Dialog>
    );
}
