"use client";

import { motion } from "framer-motion";
import { AddonCourse } from "../../types";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Award, Clock, IndianRupee } from "lucide-react";
import { Button } from "../ui/button";
import { useUiStore } from "../../store/useUiStore";

interface AddonCardProps {
    addon: AddonCourse;
    index?: number;
}

export function AddonCard({ addon, index = 0 }: AddonCardProps) {
    const openLeadModal = useUiStore((state) => state.openLeadModal);

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full"
        >
            <Card className="overflow-hidden transition-all duration-300 bg-[#111827] border-[#1E293B] hover:border-[#2563EB]/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] group">
                <div className="flex flex-row h-32 md:h-40">
                    {/* Left Icon Section - Fixed Width Rectangle */}
                    <div className="w-24 md:w-48 bg-[#0A1550]/20 flex items-center justify-center shrink-0 border-r border-white/5">
                        <div className="p-2 md:p-4 rounded-2xl bg-[#2563EB]/10 text-[#60A5FA] border border-[#2563EB]/20 group-hover:scale-110 transition-transform">
                            <Award className="size-6 md:size-10" />
                        </div>
                    </div>

                    <div className="flex-1 p-4 md:p-6 lg:px-10 flex flex-col justify-center overflow-hidden">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                            <h3 className="font-black text-lg md:text-2xl text-white group-hover:text-[#60A5FA] transition-colors truncate">
                                {addon.name}
                            </h3>
                            <Badge className="bg-white/5 border-white/10 text-[#60A5FA] font-black h-5 md:h-6 text-[8px] md:text-[10px] uppercase whitespace-nowrap w-fit">
                                {addon.certifyingBody}
                            </Badge>
                        </div>

                        <p className="text-slate-400 text-xs md:text-sm line-clamp-1 mb-3 max-w-2xl">
                            {addon.description}
                        </p>

                        <div className="flex items-center justify-between border-t border-white/5 pt-3">
                            <div className="flex gap-4 md:gap-8">
                                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-300">
                                    <Clock className="size-3 md:size-4 text-[#2563EB]" />
                                    <span>{addon.duration}</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-[#60A5FA] bg-[#2563EB]/10 px-2 py-0.5 rounded">
                                    <IndianRupee className="size-2.5 md:size-3" />
                                    <span>{addon.price?.toLocaleString() || "Enquire"}</span>
                                </div>
                            </div>

                            <Button
                                size="sm"
                                className="h-8 md:h-10 px-4 md:px-8 bg-[#0A1550] border border-[#2563EB]/30 text-white hover:bg-[#2563EB] transition-all font-black text-[9px] md:text-[11px] uppercase tracking-widest rounded-xl"
                                onClick={() => openLeadModal(`Interested in Addon: ${addon.name}`)}
                            >
                                Enquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
