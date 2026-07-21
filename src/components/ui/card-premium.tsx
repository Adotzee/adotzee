"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardPremiumProps extends HTMLMotionProps<"div"> {
  gradient?: boolean;
  children?: React.ReactNode;
}

export const CardPremium = React.forwardRef<HTMLDivElement, CardPremiumProps>(
  ({ className, gradient = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
          gradient && "bg-gradient-to-br from-white/10 to-transparent",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);
CardPremium.displayName = "CardPremium";
