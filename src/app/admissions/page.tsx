import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Phone, Award, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Expert Admission Guidance & Counselling | Adotzee",
  description: "Get direct admission to top colleges across India. Our expert counsellors guide you through applications, scholarships, and partner college placements.",
  alternates: {
    canonical: "/admissions",
  },
  openGraph: {
    title: "Expert Admission Guidance & Counselling | Adotzee",
    description: "Get direct admission to top colleges across India.",
    url: "https://adotzee.com/admissions",
    type: "website",
  }
};

const PROCESS = [
  { step: "01", title: "Profile Analysis", desc: "We evaluate your marks, budget, and career goals using our AI tools." },
  { step: "02", title: "College Selection", desc: "You receive a curated list of institutions where your admission is guaranteed." },
  { step: "03", title: "Scholarship Check", desc: "We verify your eligibility for both Adotzee Merit and state scholarships." },
  { step: "04", title: "Direct Admission", desc: "We handle the paperwork and secure your seat in your chosen college." }
];

export default function AdmissionsHubPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 mt-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-6 border border-rose-200">
            <Sparkles className="w-4 h-4" /> 100% Guaranteed Placements
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Your Direct Path to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600">
              Top Institutions
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
            Skip the stress of multiple applications. Our expert counselling team ensures you get admitted to the right course at the right college, with maximum financial aid.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recommendations" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-lg shadow-lg shadow-rose-600/20 hover:scale-105 transition-transform">
                Talk to a Counsellor
              </Button>
            </Link>
            <Link href="/colleges" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 font-bold text-lg transition-colors">
                View Partner Colleges
              </Button>
            </Link>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">How It Works</h2>
            <p className="text-slate-500 font-medium mt-2">A transparent, stress-free admission process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS.map((item, idx) => (
              <div key={item.step} className="bg-white rounded-3xl p-8 border border-slate-200 relative shadow-sm">
                <div className="text-5xl font-black text-slate-100 absolute top-4 right-6 pointer-events-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-black mb-6 relative z-10 border border-rose-100">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-500 font-medium relative z-10">{item.desc}</p>
                
                {/* Connector Line (Desktop only) */}
                {idx < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-slate-200 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-24">
          <Link href="/recommendations" className="group">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-[3rem] border border-slate-700 shadow-xl relative overflow-hidden h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 text-white group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Expert Counselling</h3>
              <p className="text-slate-300 font-medium text-lg mb-8 flex-1">
                Schedule a 1-on-1 session with our seasoned educational experts who have placed over 10,000+ students.
              </p>
              <div className="inline-flex items-center font-bold text-white group-hover:text-rose-400 transition-colors">
                Book Session <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          <Link href="/scholarships" className="group">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-10 rounded-[3rem] shadow-xl relative overflow-hidden h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-md border border-white/30 text-white group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Adotzee Scholarships</h3>
              <p className="text-white/90 font-medium text-lg mb-8 flex-1">
                We provide exclusive merit-based scholarships and fee concessions at our elite partner institutions.
              </p>
              <div className="inline-flex items-center font-bold text-white group-hover:text-amber-100 transition-colors">
                Check Eligibility <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
