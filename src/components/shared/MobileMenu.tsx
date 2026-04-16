"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Home, BookOpen, Building2, Sparkles, Phone, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Explore Colleges", href: "/colleges", icon: Building2 },
    { label: "Browse Courses", href: "/courses", icon: BookOpen },
    { label: "Add-on Skills", href: "/addons", icon: GraduationCap },
    { label: "Recommendations", href: "/recommendations", icon: Sparkles },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
                        className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-101 shadow-2xl flex flex-col"
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
                        <div className="flex-1 overflow-y-auto p-6 space-y-3">
                            {menuItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-brand-accent hover:bg-white hover:shadow-xl transition-all group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-xs group-hover:bg-brand-accent group-hover:text-white transition-all">
                                            <item.icon className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                                        </div>
                                        <span className="text-xl font-black text-slate-900 leading-none">{item.label}</span>
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="pt-8">
                                <Link href="/recommendations" onClick={onClose}>
                                    <Button className="w-full h-16 rounded-[1.5rem] bg-brand-accent hover:bg-blue-700 text-white font-black text-xl shadow-brand-glow hover:shadow-brand-glow-lg transition-all">
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
