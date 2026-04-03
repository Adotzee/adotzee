"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, MessageCircle, BookOpen, Sparkles } from "lucide-react";

export function Colleges() {
    const colleges = [
        {
            name: "Jain University",
            location: "Bengaluru, Karnataka",
            tier: "Verified Partner",
            span: "md:col-span-7",
            image: "/colleges/jain.png",
            courses: ["Nursing", "Allied Health", "BPT"]
        },
        {
            name: "Presidency University",
            location: "Bengaluru, Karnataka",
            tier: "Top Ranked",
            span: "md:col-span-5",
            image: "/colleges/presidency.jpg",
            courses: ["BCA", "BBA", "B.Tech"],
        }
    ];

    const handleConnect = (collegeName: string) => {
        const message = `Hi Adotzee, I'm interested in admission at ${collegeName}. Can you provide more details?`;
        window.open(`https://wa.me/918281060462?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
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
                    {colleges.map((hub, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`${hub.span} group flex flex-col xl:flex-row bg-white/30 backdrop-blur-2xl border border-white/60 shadow-white-glow rounded-[3rem] p-4 transition-all duration-500`}
                        >

                            {/* Image Area */}
                            <div className="relative w-full xl:w-1/2 min-h-[300px] xl:min-h-full rounded-[2rem] overflow-hidden border border-white/50 shrink-0">
                                <Image
                                    src={hub.image}
                                    alt={hub.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
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

                                <div className="flex items-center text-foreground opacity-60 font-medium mb-6">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {hub.location}
                                </div>

                                <button
                                    onClick={() => handleConnect(hub.name)}
                                    className="mt-auto w-full group/btn flex items-center justify-center space-x-3 bg-slate-900 text-white rounded-2xl py-4 font-black hover:bg-brand-primary transition-all duration-300 shadow-xl shadow-slate-200"
                                >
                                    <span>Proceed to Admission</span>
                                    <MessageCircle className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-linear-to-t from-[#E0F2FE]/50 to-transparent pointer-events-none" />
        </section>
    );
}
