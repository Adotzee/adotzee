"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Award, CheckCircle } from "lucide-react";

/**
 * TrustSignals - Builds authority and reduces bounce rate (SXO).
 * Displays key metrics and trust badges for the Adotzee ecosystem.
 */
export function TrustSignals() {
    const stats = [
        { label: "Students Assisted", value: "5,000+", icon: Users },
        { label: "Partner Colleges", value: "450+", icon: Award },
        { label: "Success Rate", value: "99%", icon: CheckCircle },
        { label: "Verified Admissions", value: "Direct", icon: ShieldCheck }
    ];

    return (
        <section className="py-12 bg-white flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <stat.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
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
