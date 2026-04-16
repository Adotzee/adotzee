"use client";

import { BaseCard } from "../shared/BaseCard";
import { College } from "@/types";
import { MapPin, Building } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface CollegeCardProps {
    college: College;
    index?: number;
}

export function CollegeCard({ college, index = 0 }: CollegeCardProps) {
    return (
        <BaseCard index={index}>
            <Link href={`/colleges/${college.id}`} className="block">
                <div className="flex flex-row h-20 md:h-24">
                    {/* Compact Logo/Icon Placeholder */}
                    <div className="w-16 md:w-24 bg-brand-primary/20 flex items-center justify-center shrink-0 border-r border-white/5">
                        <Building className="size-6 md:size-10 text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
                    </div>

                    {/* Content Section - Horizontal */}
                    <div className="flex-1 p-4 md:px-6 flex items-center justify-between">
                        <div className="flex flex-col gap-0.5 overflow-hidden">
                            <h3 className="font-bold text-base md:text-xl text-mesh-silver group-hover:text-brand-light transition-colors truncate">
                                {college.name}
                            </h3>
                            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-400">
                                <MapPin className="size-3 md:size-3.5 text-brand-accent" />
                                <span className="truncate">{college.address}</span>
                            </div>
                        </div>


                        <div className="shrink-0 ml-4">
                            <Button size="sm" className="h-8 md:h-9 px-4 md:px-6 bg-brand-primary hover:bg-brand-primary/90 text-white transition-all font-black rounded-xl text-[10px] md:text-xs uppercase tracking-widest shadow-lg shadow-brand-primary/20">
                                View Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </BaseCard>
    );
}

