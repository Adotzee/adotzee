import React from "react";
import Link from "next/link";
import { Calculator, Award, BrainCircuit, GraduationCap, Coins, ArrowRight } from "lucide-react";
import { CardPremium } from "@/components/ui/card-premium";

export const metadata = {
  title: "Adotzee Student Tools | Calculators & Aptitude Tests",
  description: "Free tools for students to calculate percentages, predict LBS ranks, test career aptitude, and find eligible colleges and scholarships.",
  openGraph: {
    title: "Adotzee Student Tools | Calculators & Aptitude Tests",
    description: "Free tools for students to calculate percentages, predict LBS ranks, test career aptitude, and find eligible colleges and scholarships.",
    type: "website",
  },
};

const TOOLS = [
  {
    id: "percentage-calculator",
    title: "Plus One & Plus Two Percentage Calculator",
    description: "Calculate your overall percentage and grade for Kerala State, CBSE, or ICSE boards.",
    icon: <Calculator className="w-8 h-8 text-blue-500" />,
    href: "/tools/percentage-calculator",
    color: "from-blue-500/20 to-transparent",
  },
  {
    id: "lbs-rank-calculator",
    title: "Kerala LBS Rank Calculator",
    description: "Estimate your LBS rank based on your Plus Two marks for engineering and medical courses.",
    icon: <Award className="w-8 h-8 text-purple-500" />,
    href: "/tools/lbs-rank-calculator",
    color: "from-purple-500/20 to-transparent",
  },
  {
    id: "career-aptitude",
    title: "Career Aptitude Test",
    description: "Discover the best careers and courses based on your interests and personality.",
    icon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
    href: "/tools/career-aptitude",
    color: "from-indigo-500/20 to-transparent",
  },
  {
    id: "college-eligibility",
    title: "College Eligibility Checker",
    description: "Find out which colleges and courses you are eligible for based on your academic profile.",
    icon: <GraduationCap className="w-8 h-8 text-green-500" />,
    href: "/tools/college-eligibility",
    color: "from-green-500/20 to-transparent",
  },
  {
    id: "scholarships",
    title: "Scholarship Eligibility",
    description: "Check your eligibility for government and private scholarships to fund your education.",
    icon: <Coins className="w-8 h-8 text-yellow-500" />,
    href: "/tools/scholarships",
    color: "from-yellow-500/20 to-transparent",
  },
];

export default function StudentToolsLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Success Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to plan your academic journey. Calculate scores, find your perfect career, and discover eligible colleges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOOLS.map((tool) => (
            <Link key={tool.id} href={tool.href} className="group block h-full">
              <CardPremium gradient className="h-full flex flex-col hover:border-blue-500/30 transition-colors">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-6`}>
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {tool.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {tool.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Try Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardPremium>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
