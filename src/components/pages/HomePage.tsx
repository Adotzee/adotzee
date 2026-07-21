"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { QuickNav } from "@/components/sections/QuickNav";

import { AEO_ANSWER_BLOCKS } from "@/lib/constants/landing-data";

// Dynamic imports for below-the-fold content to improve TBT and LCP
const Features = dynamic(() => import("@/components/sections/Features").then(m => m.Features));
const AnswerBlocks = dynamic(() => import("@/components/sections/AnswerBlocks").then(m => m.AnswerBlocks));
const FeaturedReviews = dynamic(() => import("@/components/reviews/FeaturedReviews").then(m => m.FeaturedReviews), { ssr: false });
const TrustSignals = dynamic(() => import("@/components/sections/TrustSignals").then(m => m.TrustSignals));
const Courses = dynamic(() => import("@/components/sections/Courses").then(m => m.Courses), { ssr: false });
const Colleges = dynamic(() => import("@/components/sections/Colleges").then(m => m.Colleges), { ssr: false });
const CityAuthority = dynamic(() => import("@/components/sections/CityAuthority").then(m => m.CityAuthority), { ssr: false });
const Protocol = dynamic(() => import("@/components/sections/Protocol").then(m => m.Protocol), { ssr: false });
const CTA = dynamic(() => import("@/components/sections/LowerSections").then(m => m.CTA), { ssr: false });
const StudentToolsSection = dynamic(() => import("@/components/sections/StudentToolsSection").then(m => m.StudentToolsSection), { ssr: false });
const StudentJourney = dynamic(() => import("@/components/sections/HomepageExtensions").then(m => m.StudentJourney), { ssr: false });
const CareerGuidance = dynamic(() => import("@/components/sections/HomepageExtensions").then(m => m.CareerGuidance), { ssr: false });
const AdmissionProcess = dynamic(() => import("@/components/sections/HomepageExtensions").then(m => m.AdmissionProcess), { ssr: false });
const LatestBlogs = dynamic(() => import("@/components/sections/HomepageExtensions").then(m => m.LatestBlogs), { ssr: false });

/**
 * HomePage - Optimized for Core Web Vitals (LCP, TBT, CLS) and AEO/GEO.
 * Uses static imports for critical above-the-fold content and 
 * dynamic imports for supplementary and AI-rich sections.
 */
export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-brand-light/30 selection:text-brand-primary">
      {/* SEO handled by Server Component in app/page.tsx */}

      {/* Critical Path */}
      <Hero />
      <QuickNav />
      <TrustSignals />

      {/* Student Funnel */}
      <StudentJourney />

      <Colleges />
      <Courses />

      <CareerGuidance />

      {/* Financial & Tools */}
      <StudentToolsSection />

      {/* Social Proof & Why Us */}
      <Features />
      <FeaturedReviews />

      {/* Logistics & Resources */}
      <AdmissionProcess />
      <AnswerBlocks />
      <LatestBlogs />

      <CityAuthority />
      <Protocol />
      <CTA />

    </div>
  );
}
