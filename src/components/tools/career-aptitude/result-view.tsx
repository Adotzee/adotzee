import React from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { CTABlock } from "@/components/shared/cta-block";
import { BrainCircuit, Briefcase, GraduationCap, Lightbulb, Target, ArrowRight, Download, BarChart2, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AptitudeResultView({ results }: { results: any }) {
  // Mock enterprise generation based on results
  const profileSummary = "You display a strong inclination towards analytical thinking combined with creative problem-solving. This unique combination makes you highly adaptable in technology-driven or design-oriented fields. You prefer structured environments but require autonomy to innovate.";
  
  const strengths = [
    { title: "Logical Reasoning", score: 92, desc: "Excellent at identifying patterns and solving complex problems." },
    { title: "Technical Aptitude", score: 88, desc: "Quickly grasps new systems, software, and mechanical concepts." },
    { title: "Creative Thinking", score: 85, desc: "Ability to generate novel ideas and think outside the box." }
  ];

  const developmentAreas = [
    { title: "Public Speaking", desc: "You may find large group presentations draining." },
    { title: "Routine Tasks", desc: "Highly repetitive administrative work may cause burnout quickly." }
  ];

  const recommendedCareers = [
    { title: "Software Architect", match: "98%", desc: "Designing complex systems and writing code." },
    { title: "Product Manager", match: "94%", desc: "Bridging the gap between design, tech, and business." },
    { title: "UX/UI Designer", match: "91%", desc: "Creating intuitive digital experiences." }
  ];

  const recommendedCourses = ["B.Tech Computer Science", "B.Des (Interaction Design)", "BCA Data Analytics"];
  const suggestedColleges = ["Top Engineering Colleges in Bangalore", "Premium Design Institutes in Kerala"];

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-10">
      {/* HEADER */}
      <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-100 mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4" /> Assessment Verified
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Your Enterprise Career Profile</h2>
        <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
          We have analyzed your cognitive abilities, behavioral traits, and interests. Here is your comprehensive career roadmap.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 font-bold rounded-xl h-12 px-6">
            <Download className="w-4 h-4 mr-2" /> Download PDF Report
          </Button>
        </div>
      </div>

      {/* OVERALL PROFILE */}
      <CardPremium className="p-8 md:p-10 border-slate-200 shadow-xl shadow-slate-200/40 bg-white">
        <h3 className="text-xl font-black text-slate-800 flex items-center mb-6">
          <BrainCircuit className="w-6 h-6 mr-3 text-indigo-600" /> Executive Summary
        </h3>
        <p className="text-slate-600 leading-relaxed text-lg">{profileSummary}</p>
      </CardPremium>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* STRENGTHS */}
        <CardPremium className="p-8 border-indigo-100 bg-indigo-50/30">
          <h3 className="text-xl font-black text-indigo-900 flex items-center mb-6">
            <Target className="w-6 h-6 mr-3 text-indigo-600" /> Core Strengths
          </h3>
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-bold text-slate-800">{s.title}</span>
                  <span className="text-sm font-black text-indigo-600">{s.score}%</span>
                </div>
                <div className="w-full bg-indigo-100 h-2 rounded-full overflow-hidden mb-1">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${s.score}%` }} />
                </div>
                <p className="text-xs text-slate-500 font-medium">{s.desc}</p>
              </div>
            ))}
          </div>
        </CardPremium>

        {/* DEVELOPMENT AREAS */}
        <CardPremium className="p-8 border-amber-100 bg-amber-50/30">
          <h3 className="text-xl font-black text-amber-900 flex items-center mb-6">
            <Lightbulb className="w-6 h-6 mr-3 text-amber-600" /> Areas for Growth
          </h3>
          <ul className="space-y-5">
            {developmentAreas.map((area, i) => (
              <li key={i} className="flex flex-col">
                <span className="font-bold text-slate-800 mb-1">{area.title}</span>
                <span className="text-sm text-slate-600">{area.desc}</span>
              </li>
            ))}
          </ul>
        </CardPremium>
      </div>

      {/* RECOMMENDED CAREERS */}
      <CardPremium className="p-8 border-slate-200 bg-white shadow-xl shadow-slate-200/40">
        <h3 className="text-xl font-black text-slate-800 flex items-center mb-6">
          <Briefcase className="w-6 h-6 mr-3 text-emerald-600" /> High-Match Career Paths
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recommendedCareers.map((c, i) => (
            <div key={i} className="border border-slate-100 bg-slate-50 rounded-xl p-5 hover:border-emerald-200 hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-3">
                <span className="font-black text-slate-800 text-lg leading-tight">{c.title}</span>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-black px-2 py-1 rounded-md">{c.match} Match</span>
              </div>
              <p className="text-sm text-slate-500 font-medium">{c.desc}</p>
            </div>
          ))}
        </div>
      </CardPremium>

      {/* EDUCATIONAL PATHWAY */}
      <CardPremium className="p-8 border-slate-200 bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-2xl">
        <h3 className="text-xl font-black text-white flex items-center mb-8">
          <GraduationCap className="w-6 h-6 mr-3 text-indigo-400" /> Your Educational Pathway
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-4">Suggested Courses</h4>
            <div className="flex flex-col gap-3">
              {recommendedCourses.map(course => (
                <div key={course} className="flex items-center gap-3 bg-white/10 rounded-xl p-3 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="font-semibold text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-4">College Targets</h4>
            <div className="flex flex-col gap-3">
              {suggestedColleges.map(college => (
                <div key={college} className="flex items-center gap-3 bg-white/10 rounded-xl p-3 border border-white/5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-sm text-slate-200">{college}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-lg mb-1">Ready to start applying?</h4>
            <p className="text-indigo-200 text-sm">Get personalized shortlists and direct admission support.</p>
          </div>
          <Link href="/recommendations">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold px-8 h-12 whitespace-nowrap">
              Get College Recommendations
            </Button>
          </Link>
        </div>
      </CardPremium>

      <CTABlock 
        title="Don't navigate admissions alone."
        description="Our expert counsellors analyze your aptitude report to secure you a seat in the best possible college within your budget."
      />
    </div>
  );
}
