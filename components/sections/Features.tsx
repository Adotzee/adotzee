"use client";

import { motion } from "framer-motion";
import { Brain, Search, CheckCircle } from "lucide-react";

export function Features() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-6 max-w-[1240px] relative z-10"
            >
                <motion.div variants={itemVariants} className="text-center mb-24">
                    <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Smart Features</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-[0.9] mb-8">
                        Smart Features for Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">College Journey.</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full mx-auto" />
                </motion.div>

                {/* 12-Column Floating Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Large Main Feature (Span 8 Cols) */}
                    <motion.div 
                        variants={itemVariants}
                        className="md:col-span-8 bg-white/40 backdrop-blur-3xl border border-white/80 shadow-[0_40px_80px_-15px_rgba(37,99,235,0.08)] rounded-[4rem] p-12 md:p-16 flex flex-col justify-between group hover:-translate-y-4 transition-all duration-700 ease-[0.22,1,0.36,1] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center mb-12 shadow-[0_15px_40px_rgba(37,99,235,0.1)] group-hover:rotate-6 transition-transform">
                                <Brain className="w-10 h-10 text-blue-600" />
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter">Elite Admission<br/>Guidance.</h3>
                            <p className="text-slate-500 font-medium leading-relaxed max-w-md text-xl">
                                Our veteran counselors help you navigate the complex terrain of course selection & campus life across the country.
                            </p>
                        </div>

                        {/* Interactive accent */}
                        <div className="mt-16 h-48 w-full rounded-[2.5rem] bg-linear-to-tr from-blue-50 to-indigo-50 border border-white/50 relative overflow-hidden flex items-center justify-center shadow-inner group-hover:shadow-2xl transition-all">
                            <div className="absolute w-[150%] h-[150%] bg-white/40 rounded-full blur-[80px] -top-1/2 -right-1/2 animate-pulse" />
                            <span className="relative z-10 text-[10px] font-black tracking-[0.5em] uppercase text-blue-600 opacity-60">Consultation Protocol Active</span>
                        </div>
                    </motion.div>

                    {/* Small Vertical Feature Stack (Span 4 Cols) */}
                    <div className="md:col-span-4 flex flex-col gap-10">
                        <motion.div 
                            variants={itemVariants}
                            className="flex-1 bg-white/40 backdrop-blur-3xl border border-white/80 shadow-[0_40px_80px_-15px_rgba(37,99,235,0.08)] rounded-[3.5rem] p-12 group hover:-translate-y-2 transition-all duration-500 ease-out"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors">
                                <Search className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Verified Campus Paths.</h3>
                            <p className="text-slate-500 font-medium leading-relaxed italic">
                                Access direct admission channels to premier campuses in Bangalore & Mangalore.
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="flex-1 bg-white/40 backdrop-blur-3xl border border-white/80 shadow-[0_40px_80px_-15px_rgba(37,99,235,0.08)] rounded-[3.5rem] p-12 group hover:-translate-y-2 transition-all duration-500 ease-out"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors">
                                <CheckCircle className="w-7 h-7 text-indigo-500 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Career Alignment.</h3>
                            <p className="text-slate-500 font-medium leading-relaxed italic">
                                Personalized recommendations that bridge the gap between education and ambition.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Ambient Ambient Backgrounds */}
            <div className="absolute top-1/2 left-0 w-[1000px] h-[1000px] bg-blue-50 rounded-full blur-[150px] mix-blend-multiply opacity-40 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[150px] mix-blend-multiply opacity-40 translate-y-1/3 translate-x-1/3 pointer-events-none" />
        </section>
    );
}
