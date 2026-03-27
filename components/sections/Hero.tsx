"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import ParticlesBackground from "../filters/particles";

/**
 * Hero - Entry point for the selection funnel.
 * Redirects users to /courses based on their chosen stream.
 */
export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleStreamSelect = (streamId: string, streamName: string) => {
        router.push(`/courses?stream=${streamId}&streamName=${encodeURIComponent(streamName)}`);
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            <ParticlesBackground />

            {/* Background aesthetic blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50 rounded-full blur-[120px] opacity-60 animate-pulse" />

            <motion.div
                className="relative z-10 w-full max-w-6xl mx-auto px-6 mt-30 mb-30"
            >

                <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] shadow-xl p-8 md:p-14 text-center">


                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        Find the Best College<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">After Plus Two</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 mb-6 max-w-2xl font-semibold leading-relaxed">
                        Explore Top-Rated Courses &amp; Premier Colleges
                    </p>

                    <p className="text-base text-slate-500 font-medium mb-4">Tailored for your academic path — select a stream to begin.</p>

                    <div className="mt-8 mb-4">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                            Select a Stream
                        </h2>
                        <p className="text-sm text-slate-500 font-medium mt-1">Choose your stream to explore colleges &amp; courses</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-6">
                        { [
                            { id: 'Science', name: 'Science', emoji: '🔬', bg: 'bg-[#E3F2FD]', border: 'border-blue-200', hover: 'hover:bg-blue-100' },
                            { id: 'Commerce', name: 'Commerce', emoji: '📈', bg: 'bg-[#FFF3E0]', border: 'border-orange-200', hover: 'hover:bg-orange-100' },
                            { id: 'Humanities', name: 'Humanities', emoji: '🎨', bg: 'bg-[#E8F5E9]', border: 'border-green-200', hover: 'hover:bg-green-100' }
                        ].map(s => (
                            <button
                                key={s.id}
                                onClick={() => handleStreamSelect(s.id, s.name)}
                                aria-label={`Select ${s.name} stream`}
                                className={`${s.bg} ${s.border} ${s.hover} border-2 p-6 py-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center gap-3`}
                            >
                                <span className="text-4xl">{s.emoji}</span>
                                <span className="text-2xl font-black text-slate-800">{s.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}