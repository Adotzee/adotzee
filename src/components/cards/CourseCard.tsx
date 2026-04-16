"use client";

import { BaseCard } from "../shared/BaseCard";
import { Course } from "@/types";
import { GraduationCap, Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface CourseCardProps {
    course: Course;
    index?: number;
    featured?: boolean;
    isLoading?: boolean;
    onSelect?: (id: string, name: string) => void;
    onHover?: (id: string, name: string) => void;
}

export function CourseCard({
    course,
    index = 0,
    featured = false,
    isLoading,
    onSelect,
    onHover
}: CourseCardProps) {

    const handleMouseEnter = () => {
        if (onHover) {
            onHover(course.id, course.name);
        }
    };

    const handleSelectClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // 🚀 prevent navigation
        if (onSelect) {
            onSelect(course.id, course.name);
        }
    };

    return (
        <BaseCard
            index={index}
            featured={featured}
            onClick={() => {
                if (onSelect) onSelect(course.id, course.name);
            }}
            onMouseEnter={handleMouseEnter}
            containerClassName="cursor-pointer active:scale-[0.98]"
        >
            <div className="flex flex-row h-20 md:h-24 px-4 lg:px-6">
                <div className="flex-1 flex flex-col justify-center overflow-hidden">
                    {/* Top Section */}
                    <div className="flex items-center justify-between gap-4 mb-1">
                        {/* LEFT */}
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="p-2 md:p-2.5 rounded-xl bg-brand-accent/10">
                                <GraduationCap className="size-4 md:size-5 text-brand-accent" />
                            </div>

                            <h3 className="font-semibold text-base md:text-lg text-mesh-silver truncate">
                                {course.name}
                            </h3>
                        </div>

                        {/* RIGHT */}
                        <div className="flex items-center gap-1.5 text-xs font-medium text-brand-light bg-brand-accent/50 px-2 py-1 rounded-lg shrink-0">
                            <Clock className="size-3 md:size-3.5" />
                            <span>{course.duration}</span>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between mt-auto mb-2">
                        {onSelect ? (
                            <Button
                                onClick={handleSelectClick}
                                isLoading={isLoading}
                                variant="ghost"
                                size="sm"
                                className="h-7 md:h-8 px-3 md:px-5 ml-auto hover:text-brand-light text-white bg-brand-accent rounded-xl font-black transition-all group/btn text-[10px] md:text-xs"
                            >
                                Select Course
                                <ArrowRight className="ml-1 md:ml-2 size-3 md:size-4 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        ) : (
                            <div className="ml-auto md:ml-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 md:h-8 px-3 md:px-5 hover:text-brand-light text-white bg-brand-accent rounded-xl font-black transition-all group/btn text-[10px] md:text-xs"
                                >
                                    View Program
                                    <ArrowRight className="ml-1 md:ml-2 size-3 md:size-4 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </BaseCard>
    );
}