"use client";

import { Hero } from "@/components/sections/Hero";
import { QuickNav } from "@/components/sections/QuickNav";
import { Features } from "@/components/sections/Features";
import { Courses } from "@/components/sections/Courses";
import { Colleges } from "@/components/sections/Colleges";
import { CityAuthority } from "@/components/sections/CityAuthority";
import { Protocol } from "@/components/sections/Protocol";
import { CTA, Footer } from "@/components/sections/LowerSections";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-brand-light/30 selection:text-brand-primary">
      <Hero />
      <QuickNav />
      <Features />
      <Courses />
      <Colleges />
      <CityAuthority />
      <Protocol />
      <CTA />
      <Footer />
    </div>
  );
}
