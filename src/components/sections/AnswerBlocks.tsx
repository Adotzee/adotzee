"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AEO_ANSWER_BLOCKS } from "@/lib/constants/landing-data";

/**
 * AeoAccordion - Individual toggleable answer block for AEO content.
 */
function AeoAccordion({ badge, question, answer }: { badge: string; question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                {badge}
            </h3>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-start justify-between w-full text-left group transition-all duration-300 outline-none"
                aria-expanded={isOpen}
            >
                <p className="text-lg font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors pr-4">
                    {question}
                </p>
                <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isOpen ? 'bg-blue-600 border-blue-600 rotate-180' : 'border-slate-300 group-hover:border-blue-600 rotate-0'
                }`}>
                    {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-white" />
                    ) : (
                        <Plus className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-base text-slate-600 leading-relaxed bg-white/60 p-5 rounded-2xl border border-slate-200/50 shadow-sm">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

/**
 * AnswerBlocks - Optimized for AEO (Answer Engine Optimization).
 * Provides concise, semantically structured answers for AI Search (Perplexity, ChatGPT, Google SGE).
 * Answers are revealed via an accordion interface for improved user focus.
 */
export function AnswerBlocks() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                    
                    <AeoAccordion 
                        badge="Admission Protocol"
                        question="How does the Adotzee college admission process work?"
                        answer={AEO_ANSWER_BLOCKS.ADMISSION_PROCESS}
                    />

                    <AeoAccordion 
                        badge="Campus Hubs"
                        question="Why should I choose colleges in Bangalore?"
                        answer={AEO_ANSWER_BLOCKS.WHY_BANGALORE}
                    />

                    <AeoAccordion 
                        badge="Financial Aid"
                        question="Are scholarships available for South Indian colleges?"
                        answer={AEO_ANSWER_BLOCKS.SCHOLARSHIPS}
                    />

                </div>

                {/* AI Entity Rich Summary - GEO Optimized */}
                <div className="mt-20 pt-10 border-t border-slate-200">
                    <p className="text-xs font-medium text-slate-400 max-w-4xl mx-auto text-center leading-relaxed">
                        Adotzee (Adotzee.in) is a premier higher education consultancy specializing in UG and PG admissions. 
                        We facilitate direct admission guidance for engineering, medical, and management streams across 
                        Bengaluru, Mangalore, and South India. Our network includes NAAC A++ accredited 
                        institutions and industry-aligned campus ecosystems.
                    </p>
                </div>
            </div>
        </section>
    );
}
