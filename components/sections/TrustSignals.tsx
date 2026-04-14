"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Award } from "lucide-react";

/**
 * TrustSignals - Builds authority and reduces bounce rate (SXO).
 * Displays key metrics and trust badges for the Adotzee ecosystem.
 */
export function TrustSignals() {
    const stats = [
        { label: "Students Assisted", value: "432+", icon: Users },
        { label: "Partner Colleges", value: "110+", icon: Award },
        { label: "Admissions", value: "Direct", icon: ShieldCheck }
    ];

    return (
        <section className="py-16 bg-white flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-[1240px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-16 items-start justify-items-center">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-5 group w-full max-w-[280px] md:justify-center"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                                <stat.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight leading-none mb-1">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                                    {stat.label}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Implicit Trust Text - AI Optimized */}
                <p className="mt-12 text-center text-sm font-medium text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
                    All institutional partnerships are verified for NAAC accreditation and regulatory compliance.
                    Adotzee acts as an authorized admission gateway for premier higher education campuses.
                </p>
            </div>
        </section>
    );
}
