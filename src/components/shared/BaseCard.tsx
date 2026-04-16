"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

interface BaseCardProps {
    children: React.ReactNode;
    index?: number;
    className?: string;
    containerClassName?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    featured?: boolean;
}

export function BaseCard({
    children,
    index = 0,
    className,
    containerClassName,
    onClick,
    onMouseEnter,
    featured = false,
}: BaseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            className={cn("w-full h-full", containerClassName)}
        >
            <Card
                className={cn(
                    "overflow-hidden transition-all duration-300 bg-card border-border hover:border-brand-accent/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] group h-full",
                    featured && "border-brand-accent/40 shadow-[0_0_15px_rgba(37,99,235,0.1)]",
                    className
                )}
            >
                {children}
            </Card>
        </motion.div>
    );
}
