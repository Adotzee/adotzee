"use client";

import { motion } from "framer-motion";
import { Course } from "../../types";
import { Card, CardContent } from "../ui/card";
import { GraduationCap, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
    course: Course;
    index?: number;
    featured?: boolean;
    isLoading?: boolean;
    onSelect?: (id: string, name: string) => void;
    onHover?: (id: string, name: string) => void;
}

export function CourseCard({ course, index = 0, featured = false, isLoading, onSelect, onHover }: CourseCardProps) {
    const handleAction = (e: React.MouseEvent) => {
        if (onSelect) {
            e.preventDefault();
            onSelect(course.id, course.name);
        }
    };

    const handleMouseEnter = () => {
        if (onHover) {
            onHover(course.id, course.name);
        }
    };

    return (
        <motion.div
            onMouseEnter={handleMouseEnter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="w-full"
        >
            <Card className={cn(
                "overflow-hidden transition-all p-6 duration-300 bg-card border-border hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]",
                featured ? "border-brand-accent/40 shadow-[0_0_15px_rgba(37,99,235,0.1)]" : ""
            )}>
                <div className="flex flex-row h-22 md:h-30">
                    {/* Image Section - Compact Rectangle */}
                    <CardContent className="flex-1 p-0 lg:px-4 flex flex-col justify-center overflow-hidden">
                        <div className="flex items-center justify-between gap-4 mb-2">

                            {/* LEFT SIDE */}
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="p-2 md:p-3 rounded-xl bg-brand-accent/10">
                                    <GraduationCap className="size-4 md:size-6 text-brand-accent" />
                                </div>

                                <h3 className="font-semibold text-base md:text-xl text-mesh-silver truncate">
                                    {course.name}
                                </h3>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex items-center gap-1.5 text-xs font-medium text-brand-light bg-brand-accent/10 px-2 py-1 rounded-lg shrink-0">
                                <Clock className="size-3 md:size-3.5" />
                                <span>{course.duration}</span>
                            </div>

                        </div>
                        <div className="flex m-2 items-center justify-between mt-auto pt-2">
                            {onSelect ? (
                                <Button
                                    onClick={handleAction}
                                    isLoading={isLoading}
                                    variant="ghost"
                                    size="sm"
                                    className="h-7 md:h-9 px-3 md:px-5 ml-auto text-brand-light hover:text-white hover:bg-brand-accent rounded-xl font-black transition-all group/btn text-[10px] md:text-sm"
                                >
                                    Select Course
                                    <ArrowRight className="ml-1 md:ml-2 size-3 md:size-4 transition-transform group-hover/btn:translate-x-1" />
                                </Button>
                            ) : (
                                <Link href={`/courses/${course.id}`} className="shrink-0 ml-auto md:ml-4">
                                    <Button variant="ghost" size="sm" className="h-7 md:h-9 px-3 md:px-5 text-brand-light hover:text-white hover:bg-brand-accent rounded-xl font-black transition-all group/btn text-[10px] md:text-sm">
                                        View Program
                                        <ArrowRight className="ml-1 md:ml-2 size-3 md:size-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </CardContent>
                </div>
            </Card>
        </motion.div>
    );
}
