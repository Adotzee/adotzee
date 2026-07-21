import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, MessageSquare, ArrowRight, Download, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Educational Resources, Blogs & Guides | Adotzee",
  description: "Stay updated with the latest educational news, admission guides, syllabus changes, and expert FAQs to help you secure top college admissions.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Educational Resources, Blogs & Guides | Adotzee",
    description: "Stay updated with the latest educational news and admission guides.",
    url: "https://adotzee.com/resources",
    type: "website",
  }
};

const CATEGORIES = [
  { title: "Education Blog", desc: "Read our latest articles on career paths, industry trends, and college reviews.", icon: FileText, href: "/blogs", color: "blue" },
  { title: "Admission Guides", desc: "Step-by-step PDF guides and walkthroughs for major entrance exams and counseling.", icon: BookOpen, href: "/guides", color: "emerald" },
  { title: "Help Center (FAQ)", desc: "Find immediate answers to common questions about admissions, fees, and scholarships.", icon: MessageSquare, href: "/faq", color: "amber" }
];

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            <BookOpen className="w-4 h-4" /> Knowledge Hub
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Knowledge to Empower <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Your Decisions
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
            Access free, high-quality resources created by our educational experts to help you navigate exams, admissions, and career choices.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-6xl mx-auto">
          {CATEGORIES.map(category => (
            <Link key={category.href} href={category.href} className="group">
              <div className={`bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-${category.color}-300 transition-all h-full flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-${category.color}-50 text-${category.color}-600 group-hover:bg-${category.color}-600 group-hover:text-white transition-colors`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800">
                  {category.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {category.desc}
                </p>
                <div className={`inline-flex items-center font-bold text-${category.color}-600`}>
                  Explore <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Guide Callout */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Download the 2026 Ultimate Admission Masterclass</h2>
            <p className="text-slate-400 font-medium text-lg mb-8">
              A comprehensive 50-page guide covering everything from entrance exam strategies to scholarship applications for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="h-14 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg shadow-lg">
                <Download className="w-5 h-5 mr-2" /> Download PDF (Free)
              </Button>
            </div>
          </div>

          <div className="relative z-10 shrink-0 hidden lg:block">
            <div className="w-48 h-64 bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center transform rotate-6">
              <FileText className="w-16 h-16 text-slate-600" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
