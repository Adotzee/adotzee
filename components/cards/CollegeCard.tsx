"use client";

import { motion } from "framer-motion";
import { College } from "../../types";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin, Building, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface CollegeCardProps {
    college: College;
    index?: number;
}

export function CollegeCard({ college, index = 0 }: CollegeCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full"
        >
            <Link href={`/colleges/${college.id}`} className="block">
                <Card className="overflow-hidden transition-all duration-300 bg-card border-border hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] group">
                    <div className="flex flex-row h-24 md:h-32">
                        {/* Compact Logo/Icon Placeholder */}
                        <div className="w-20 md:w-32 bg-brand-primary/20 flex items-center justify-center shrink-0 border-r border-white/5">
                            <Building className="size-8 md:size-12 text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                        </div>

                        {/* Content Section - Horizontal */}
                        <div className="flex-1 p-4 md:px-8 flex items-center justify-between">
                            <div className="flex flex-col gap-1 overflow-hidden">
                                <h3 className="font-black text-lg md:text-2xl text-mesh-silver group-hover:text-brand-light transition-colors truncate">
                                    {college.name}
                                </h3>
                                <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400">
                                    <MapPin className="size-3 md:size-3.5 text-brand-accent" />
                                    <span className="truncate">{college.address}</span>
                                </div>
                            </div>


                            <div className="shrink-0 ml-4">
                                <Button size="sm" className="h-8 md:h-10 px-4 md:px-8 bg-brand-primary hover:bg-brand-primary/90 text-white transition-all font-black rounded-xl text-[10px] md:text-xs uppercase tracking-widest shadow-lg shadow-brand-primary/20">
                                    View Profile
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
