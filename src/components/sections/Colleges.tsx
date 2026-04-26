"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { COLLEGES_DATA, CollegeData } from "@/lib/constants/landing-data";

export function Colleges() {
    const handleConnect = (collegeName: string) => {
        const message = `Hi Adotzee, I'm interested in admission at ${collegeName}. Can you provide more details?`;
        window.open(`https://wa.me/918281060462?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section className="py-24 md:py-32 bg-blue-100 relative overflow-x-clip">
            <div className="container mx-auto px-6 max-w-[1200px] relative z-10">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-6 relative inline-block">
                        Top Ranked Colleges in Bangalore
                        <div className="absolute -bottom-4 left-1/2 w-24 h-1 bg-brand-accent rounded-full transform -translate-x-1/2" />
                    </h2>
                </div>

                {/* Colleges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {COLLEGES_DATA.map((hub: CollegeData, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`${hub.span} group relative bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col xl:flex-row`}
                        >
                            {/* Image Container */}
                            <div className="relative w-full xl:w-1/2 min-h-[300px] overflow-hidden">
                                <Image
                                    src={hub.image}
                                    alt={hub.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-white bg-brand-accent/80 backdrop-blur-md px-3 py-1.5 rounded-full">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>{hub.tier}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 w-full xl:w-1/2 flex-1 flex flex-col">
                                <h3 className="text-3xl font-black text-foreground tracking-tight mb-2">
                                    {hub.name}
                                </h3>

                                <div className="flex items-center text-foreground opacity-60 font-medium mb-10">
                                    <MapPin className="w-4 h-4 mr-2 text-brand-primary" />
                                    <span>{hub.city}, {hub.state}</span>
                                </div>

                                <button
                                    onClick={() => handleConnect(hub.name)}
                                    className="mt-auto w-full group/btn flex items-center justify-center space-x-3 bg-slate-900 text-white rounded-2xl py-4 font-black hover:bg-brand-primary transition-all duration-300 shadow-xl shadow-slate-200"
                                >
                                    <span>Proceed to Admission</span>
                                    <FaWhatsapp className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-t from-mesh-blue/50 to-transparent pointer-events-none" />
        </section>
    );
}
