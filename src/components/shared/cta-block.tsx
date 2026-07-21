"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, CheckCircle2, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CTABlockProps {
  title?: string;
  description?: string;
  badgeText?: string;
  primaryActionText?: string;
  primaryActionHref?: string;
  secondaryActionText?: string;
  secondaryActionHref?: string;
  trustIndicators?: string[];
}

export function CTABlock({
  title = "Need Help Choosing the Right College?",
  description = "Our admission experts help students discover eligible colleges, private scholarships, fee concessions, and complete admission support.",
  badgeText = "Scholarship & Admission Guidance",
  primaryActionText = "Chat on WhatsApp",
  primaryActionHref = "https://wa.me/918281060462",
  secondaryActionText = "Book Free Counselling",
  secondaryActionHref = "/contact",
  trustIndicators = [
    "Free Guidance",
    "Verified Colleges",
    "Scholarship Assistance",
    "Admission Support"
  ]
}: CTABlockProps) {
  return (
    <section className="py-12 px-4 md:px-6 w-full max-w-7xl mx-auto">
      <div className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-[2.5rem] p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden border border-blue-800/50">
        {/* Subtle background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm font-bold mb-8 shadow-sm backdrop-blur-md"
          >
            <GraduationCap className="w-4 h-4" /> {badgeText}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]"
          >
            {title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100/90 font-medium leading-relaxed mb-10 max-w-2xl"
          >
            {description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12"
          >
            <Link href={primaryActionHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {primaryActionText}
              </Button>
            </Link>
            
            <Link href={secondaryActionHref} className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-2xl backdrop-blur-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                {secondaryActionText}
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8 border-t border-white/10 w-full"
          >
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm md:text-base font-bold text-blue-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                {indicator}
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
