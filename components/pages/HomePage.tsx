"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { QuickNav } from "@/components/sections/QuickNav";
import { JsonLd, FAQSchema } from "@/components/seo/JsonLd";
import { AEO_ANSWER_BLOCKS } from "@/lib/constants/landing-data";

// Dynamic imports for below-the-fold content to improve TBT and LCP
const Features = dynamic(() => import("@/components/sections/Features").then(m => m.Features), {
    loading: () => <div className="h-[400px] w-full bg-slate-50 animate-pulse rounded-3xl" />
});
const AnswerBlocks = dynamic(() => import("@/components/sections/AnswerBlocks").then(m => m.AnswerBlocks));
const TrustSignals = dynamic(() => import("@/components/sections/TrustSignals").then(m => m.TrustSignals));
const Courses = dynamic(() => import("@/components/sections/Courses").then(m => m.Courses), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-white animate-pulse" />
});
const Colleges = dynamic(() => import("@/components/sections/Colleges").then(m => m.Colleges), {
    ssr: false,
    loading: () => <div className="h-[600px] w-full bg-slate-50 animate-pulse" />
});
const CityAuthority = dynamic(() => import("@/components/sections/CityAuthority").then(m => m.CityAuthority), { ssr: false });
const Protocol = dynamic(() => import("@/components/sections/Protocol").then(m => m.Protocol), { ssr: false });
const CTA = dynamic(() => import("@/components/sections/LowerSections").then(m => m.CTA), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/LowerSections").then(m => m.Footer), { ssr: false });

/**
 * HomePage - Optimized for Core Web Vitals (LCP, TBT, CLS) and AEO/GEO.
 * Uses static imports for critical above-the-fold content and 
 * dynamic imports for supplementary and AI-rich sections.
 */
export function HomePage() {
  // AI-Search & Google Rich Result Optimization
  const faqData = FAQSchema([
    {
        question: "How does the Adotzee college admission process work?",
        answer: AEO_ANSWER_BLOCKS.ADMISSION_PROCESS
    },
    {
        question: "Why should I choose colleges in Bangalore?",
        answer: AEO_ANSWER_BLOCKS.WHY_BANGALORE
    },
    {
        question: "Are scholarships available for South Indian colleges?",
        answer: AEO_ANSWER_BLOCKS.SCHOLARSHIPS
    }
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-brand-light/30 selection:text-brand-primary">
      <JsonLd data={faqData} />
      
      {/* Critical Path */}
      <Hero />
      <QuickNav />
      
      {/* Secondary Path / Deferred Loading */}
      <Features />
      <AnswerBlocks />
      <TrustSignals />
      <Courses />
      <Colleges />
      <CityAuthority />
      <Protocol />
      <CTA />
      <Footer />
    </div>
  );
}
