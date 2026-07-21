"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Home, BookOpen, Building2, Sparkles, Phone, GraduationCap, Calculator, Banknote } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

import { useState } from "react";
import { cn } from "@/lib/utils";

const MENU_CATEGORIES = [
    {
        label: "Discover",
        icon: Building2,
        items: [
            { label: "Colleges", href: "/colleges" },
            { label: "Courses", href: "/courses" },
            { label: "States", href: "/states" },
            { label: "Cities", href: "/cities" },
        ]
    },
    {
        label: "Student Tools",
        icon: Calculator,
        items: [
            { label: "Percentage Calculator", href: "/tools/plus-two-percentage-calculator" },
            { label: "Kerala LBS Rank", href: "/tools/kerala-lbs-rank-calculator" },
            { label: "Career Aptitude Test", href: "/tools/career-aptitude-test" },
            { label: "Eligibility Checker", href: "/tools/college-eligibility-checker" },
            { label: "Scholarship Checker", href: "/tools/scholarship-checker" },
            { label: "Recommendations", href: "/recommendations" },
        ]
    },
    {
        label: "Admissions",
        icon: Sparkles,
        items: [
            { label: "Counselling", href: "/recommendations" },
            { label: "Scholarships", href: "/scholarships/adotzee-merit-scholarship" },
        ]
    },
    {
        label: "Resources",
        icon: BookOpen,
        items: [
            { label: "Education Blog", href: "/blogs" },
            { label: "Admission Guides", href: "/guides" },
            { label: "FAQs", href: "/faq" },
        ]
    },
    {
        label: "Company",
        icon: Building2,
        items: [
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Reviews", href: "/reviews" },
        ]
    }
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (label: string) => {
        setOpenCategory(prev => prev === label ? null : label);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-100"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-101 shadow-2xl flex flex-col will-change-transform"
                    >
                        {/* Header */}
                        <div className="p-6 flex justify-between items-center border-b border-gray-100">
                            <span className="text-xl font-black tracking-tighter text-foreground">Menu</span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {MENU_CATEGORIES.map((category, i) => (
                                <motion.div
                                    key={category.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100"
                                >
                                    <button
                                        onClick={() => toggleCategory(category.label)}
                                        className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                                <category.icon className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-slate-800">{category.label}</span>
                                        </div>
                                        <div className={cn("transition-transform duration-300 text-slate-400", openCategory === category.label ? "rotate-180" : "")}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openCategory === category.label && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-slate-50"
                                            >
                                                <div className="p-4 space-y-1">
                                                    {category.items.map(item => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            onClick={onClose}
                                                            className="block px-4 py-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 font-semibold transition-colors"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            <div className="pt-6 pb-2">
                                <Link href="/recommendations" onClick={onClose}>
                                    <Button className="w-full h-14 rounded-2xl bg-brand-accent hover:bg-blue-700 text-white font-black text-lg shadow-brand-glow hover:shadow-brand-glow-lg transition-all">
                                        Get Admission Guidance
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Footer Contact - SXO optimized */}
                        <div className="p-8 bg-slate-50/80 backdrop-blur-sm space-y-4 border-t border-slate-100">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Technical Admission Desk</p>
                            <div className="grid grid-cols-2 gap-4">
                                <a
                                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                                    className="flex flex-col items-center justify-center p-5 bg-white rounded-3xl border border-slate-100 shadow-xs hover:border-brand-accent transition-all gap-2"
                                >
                                    <Phone className="w-6 h-6 text-brand-accent" />
                                    <span className="text-xs font-black text-slate-900">Call Now</span>
                                </a>
                                <a
                                    href={COMPANY_INFO.socials.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-5 bg-white rounded-3xl border border-slate-100 shadow-xs hover:border-[#22C55E] transition-all gap-2"
                                >
                                    <FaWhatsapp className="w-6 h-6 text-[#22C55E]" />
                                    <span className="text-xs font-black text-slate-900">WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
