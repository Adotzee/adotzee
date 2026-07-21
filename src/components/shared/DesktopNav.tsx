"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, Building2, BookOpen, MapPin, Calculator, Compass, Sparkles, Phone, FileText, Info, MessageSquare, Award, Percent } from "lucide-react";

interface DesktopNavProps {
    scrolled: boolean;
}

const MENU_ITEMS = [
    {
        label: "Discover",
        href: "/discover",
        items: [
            { label: "Colleges", href: "/colleges", icon: Building2, desc: "Explore top verified institutions" },
            { label: "Courses", href: "/courses", icon: BookOpen, desc: "Find the perfect degree or program" },
            { label: "States", href: "/states", icon: MapPin, desc: "Browse colleges by state" },
            { label: "Cities", href: "/cities", icon: MapPin, desc: "Find colleges in specific cities" },
        ]
    },
    {
        label: "Student Tools",
        href: "/tools",
        items: [
            { label: "Percentage Calculator", href: "/tools/plus-two-percentage-calculator", icon: Percent, desc: "Calculate your +2/Board scores" },
            { label: "LBS Rank", href: "/tools/lbs-rank-calculator", icon: Calculator, desc: "Predict your professional course rank" },
            { label: "Career Aptitude", href: "/tools/career-aptitude-test", icon: Compass, desc: "Discover your ideal career path" },
            { label: "Eligibility Checker", href: "/tools/college-eligibility-checker", icon: FileText, desc: "Check college admission criteria" },
            { label: "Scholarship Checker", href: "/tools/scholarship-checker", icon: Award, desc: "Calculate scholarship chances" },
            { label: "Recommendations", href: "/recommendations", icon: Sparkles, desc: "Get AI-driven course & college picks" },
        ]
    },
    {
        label: "Admissions",
        href: "/admissions",
        items: [
            { label: "Counselling", href: "/recommendations", icon: Phone, desc: "Talk to expert admission counsellors" },
            { label: "Scholarships", href: "/scholarships", icon: Award, desc: "Apply for Adotzee merit scholarships" },
        ]
    },
    {
        label: "Resources",
        href: "/resources",
        items: [
            { label: "Education Blog", href: "/blogs", icon: FileText, desc: "Latest insights and updates" },
            { label: "Admission Guides", href: "/guides", icon: BookOpen, desc: "Step-by-step admission help" },
            { label: "FAQs", href: "/faq", icon: MessageSquare, desc: "Commonly asked questions" },
        ]
    },
    {
        label: "Company",
        href: "/company",
        items: [
            { label: "About Us", href: "/about", icon: Info, desc: "Learn about the Adotzee mission" },
            { label: "Contact", href: "/contact", icon: Phone, desc: "Get in touch with our team" },
            { label: "Reviews", href: "/reviews", icon: MessageSquare, desc: "See what students say about us" },
        ]
    }
];

export function DesktopNav({ scrolled }: DesktopNavProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    let timeoutId: NodeJS.Timeout;

    const handleMouseEnter = (label: string) => {
        clearTimeout(timeoutId);
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setActiveDropdown(null);
        }, 150);
    };

    return (
        <div className={cn(
            "hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-bold transition-colors duration-500",
            scrolled ? "text-slate-600" : "text-white/80"
        )}>
            {MENU_ITEMS.map((menu) => (
                <div
                    key={menu.label}
                    className="relative group px-3 py-2 cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(menu.label)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="flex items-center gap-1 relative z-10">
                        <Link href={menu.href} className={cn(
                            "transition-colors duration-300",
                            scrolled ? "group-hover:text-blue-600 hover:text-blue-700" : "group-hover:text-white hover:text-blue-100"
                        )}>
                            {menu.label}
                        </Link>
                        <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            activeDropdown === menu.label ? "rotate-180" : "rotate-0",
                            scrolled ? "group-hover:text-blue-600" : "group-hover:text-white"
                        )} />
                    </div>

                    <motion.div className={cn(
                        "absolute inset-0 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-0",
                        scrolled ? "bg-blue-50" : "bg-white/10"
                    )} />

                    <AnimatePresence>
                        {activeDropdown === menu.label && (
                            <motion.div
                                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[500px] z-[999]"
                            >
                                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden p-4 relative">
                                    {/* Invisible bridge to prevent hover loss when moving mouse diagonally */}
                                    <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />

                                    <div className="grid grid-cols-2 gap-2">
                                        {menu.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setActiveDropdown(null)}
                                                className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-slate-800 text-xs mb-0.5 group-hover/item:text-blue-600 transition-colors">
                                                        {item.label}
                                                    </h4>
                                                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
