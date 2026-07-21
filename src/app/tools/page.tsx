import { Metadata } from "next";
import Link from "next/link";
import { Calculator, Compass, FileText, Award, Percent, Sparkles, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Premium Student Admission Tools | Adotzee",
  description: "Calculate percentages, check eligibility, take career aptitude tests, and discover scholarships with Adotzee's premium student tools.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "Premium Student Admission Tools | Adotzee",
    description: "Calculate percentages, check eligibility, take career aptitude tests, and discover scholarships.",
    url: "https://adotzee.com/tools",
    type: "website",
  }
};

const TOOLS = [
  {
    title: "Career Aptitude Test",
    desc: "Discover your ideal career path based on your psychological and behavioral traits.",
    icon: Compass,
    href: "/tools/career-aptitude-test",
    color: "indigo"
  },
  {
    title: "College Eligibility Checker",
    desc: "Stop guessing. Instantly check which colleges you qualify for based on your academic profile.",
    icon: FileText,
    href: "/tools/college-eligibility-checker",
    color: "blue"
  },
  {
    title: "Scholarship Checker",
    desc: "Find government and private scholarships you are eligible for and calculate the amount.",
    icon: Award,
    href: "/tools/scholarship-checker",
    color: "emerald"
  },
  {
    title: "LBS Rank Predictor",
    desc: "Predict your professional course rank accurately based on previous year trends.",
    icon: Activity,
    href: "/tools/lbs-rank-calculator",
    color: "rose"
  },
  {
    title: "+2 Percentage Calculator",
    desc: "Instantly calculate your accurate board exam percentages without any math errors.",
    icon: Percent,
    href: "/tools/plus-two-percentage-calculator",
    color: "amber"
  }
];

export default function ToolsHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-6 border border-indigo-200">
            <Calculator className="w-4 h-4" /> Smart Decision Making
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Premium Tools for Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Educational Journey
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
            Make data-driven decisions. Use our scientifically backed calculators, tests, and eligibility checkers to secure your admission with confidence.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
          {TOOLS.map(tool => (
            <Link key={tool.href} href={tool.href} className="group">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all h-full flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${tool.color}-500/5 rounded-full blur-2xl group-hover:bg-${tool.color}-500/10 transition-colors`} />
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-${tool.color}-50 text-${tool.color}-600 group-hover:scale-110 transition-transform relative z-10`}>
                  <tool.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold text-slate-900 mb-3 group-hover:text-${tool.color}-600 transition-colors relative z-10`}>
                  {tool.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6 flex-1 relative z-10">
                  {tool.desc}
                </p>
                <div className={`flex items-center text-sm font-bold text-slate-400 group-hover:text-${tool.color}-600 transition-colors relative z-10`}>
                  Launch Tool <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}

          {/* AI Callout Card inside grid */}
          <Link href="/recommendations" className="group">
            <div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 z-0" />
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-white/10 text-amber-400 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform relative z-10">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                AI Recommendations
              </h3>
              <p className="text-slate-300 font-medium leading-relaxed mb-6 flex-1 relative z-10">
                Don't want to use calculators? Let our AI analyze your profile and instantly suggest the perfect path.
              </p>
              <div className="flex items-center text-sm font-bold text-white transition-colors relative z-10">
                Try AI Assistant <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
