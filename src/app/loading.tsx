"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Optimized Premium Loading Component
 * Focused on low TBT (Total Blocking Time) while maintaining brand identity.
 */
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/80 backdrop-blur-md">
      {/* Top Progress Bar Animation - Simple and Effective */}
      <div className="fixed top-0 left-0 w-full h-1 overflow-hidden bg-slate-100">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Simplified Logo Container */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 mb-6"
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src="/Logos/AdotzeeLogoTextNoBG.png"
                alt="Adotzee Logo"
                width={100}
                height={100}
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Minimalist Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-slate-400 text-xs font-medium">Securing your future...</p>
        </div>

        {/* Minimalist dot indicator */}
        <div className="flex gap-1.5 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-blue-600"
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

