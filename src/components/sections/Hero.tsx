"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ParticlesBackground from "../filters/particles";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

/**
 * Hero - Entry point for the selection funnel.
 * Redirects users to /courses based on their chosen stream.
 */
export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const [loadingStream, setLoadingStream] = useState<string | null>(null);

    const handleStreamSelect = (streamId: string, streamName: string) => {
        setLoadingStream(streamId);
        React.startTransition(() => {
            router.push(`/courses?stream=${streamId}&streamName=${encodeURIComponent(streamName)}`);
        });
    };

    const handlePrefetch = (streamId: string, streamName: string) => {
        router.prefetch(`/courses?stream=${streamId}&streamName=${encodeURIComponent(streamName)}`);
    };

    React.useEffect(() => {
        router.prefetch("/courses");
    }, [router]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-x-clip bg-white">
            <Image
                src="/hero_bg.png"
                alt="University Campus"
                fill
                priority
                className="object-cover opacity-10 pointer-events-none"
                sizes="100vw"
            />

            <ParticlesBackground />

            {/* Background aesthetic blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px] opacity-40 animate-pulse will-change-transform" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-50/50 rounded-full blur-[120px] opacity-40 animate-pulse will-change-transform" />

            <motion.div
                className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-30 mb-30"
            >
                <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-xl p-4 md:p-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                        Find the Best College<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-500">After Plus Two</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-700 mb-6 font-semibold leading-relaxed">
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
                        {[
                            { id: 'Science', name: 'Science', variant: 'default' as const, className: 'bg-blue-50 border-blue-100 text-blue-900 hover:bg-blue-100' },
                            { id: 'Commerce', name: 'Commerce', variant: 'default' as const, className: 'bg-orange-50 border-orange-100 text-orange-900 hover:bg-orange-100' },
                            { id: 'Humanities', name: 'Humanities', variant: 'default' as const, className: 'bg-green-50 border-green-100 text-green-900 hover:bg-green-100' }
                        ].map((s) => (
                            <Button
                                key={s.id}
                                isLoading={loadingStream === s.id}
                                onClick={() => handleStreamSelect(s.id, s.name)}
                                onMouseEnter={() => handlePrefetch(s.id, s.name)}
                                className={cn(
                                    "h-auto py-3 rounded-[2rem] border-2 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center gap-2",
                                    s.className
                                )}
                            >
                                <span className="text-2xl font-black">
                                    {s.name}
                                </span>
                            </Button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}