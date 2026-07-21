"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, CheckCircle2, ArrowRight, Building2, Landmark, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHOLARSHIP_TYPES = [
  {
    title: "Government Scholarships",
    desc: "State & central fee concession schemes (e-Grantz, NSP).",
    icon: Landmark,
    href: "/scholarships",
    color: "emerald",
    status: "View →"
  },
  {
    title: "Private Scholarships",
    desc: "Trusts and corporate CSR initiatives for deserving students.",
    icon: Building2,
    href: "/scholarships",
    color: "blue",
    status: "View →"
  },
  {
    title: "Institution Scholarships",
    desc: "Direct tuition waivers from our verified partner colleges.",
    icon: BookOpen,
    href: "/scholarships",
    color: "purple",
    status: "View →"
  },
  {
    title: "Adotzee Merit Scholarship",
    desc: "Exclusive financial aid for students applying through Adotzee.",
    icon: Award,
    href: "/scholarships/adotzee-merit-scholarship",
    color: "amber",
    status: "Coming Soon",
    highlight: true
  }
];

const TRUST_CHIPS = [
  "Government Scholarships",
  "Private Scholarships",
  "Merit Based",
  "Need Based",
  "Updated Regularly"
];

export function ScholarshipsHighlight() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Column: Context & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200 self-start">
              🎓 Scholarships & Financial Aid
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-[1.1] tracking-tight">
              Find Scholarships That Match Your Profile
            </h2>
            
            <p className="text-lg text-slate-600 font-medium mb-8 max-w-xl leading-relaxed">
              Discover government, private, institutional, and Adotzee scholarship opportunities based on your academic profile, course, and eligibility.
            </p>
            
            {/* Trust Chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TRUST_CHIPS.map((chip, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-600 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {chip}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link href="/tools/scholarship-checker" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-14 px-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                  Check Eligibility
                </Button>
              </Link>
              <Link href="/scholarships" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-xl border-2 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-700 font-bold text-lg transition-all">
                  Browse Scholarships
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Column: Premium Dashboard Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCHOLARSHIP_TYPES.map((type, idx) => (
                <Link key={idx} href={type.href} className="group outline-none">
                  <div className={`bg-white rounded-3xl p-6 border ${type.highlight ? 'border-amber-200 shadow-amber-500/5' : 'border-slate-200'} shadow-sm hover:shadow-xl hover:border-slate-300 transition-all h-full flex flex-col relative overflow-hidden`}>
                    
                    {type.highlight && (
                      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-colors pointer-events-none" />
                    )}

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className={`w-12 h-12 rounded-xl bg-${type.color}-50 text-${type.color}-600 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <type.icon className="w-6 h-6" />
                      </div>
                      {type.highlight && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-amber-700 bg-amber-100 border border-amber-200">
                          {type.status}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">{type.title}</h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6 flex-1 relative z-10">
                      {type.desc}
                    </p>
                    
                    <div className="mt-auto relative z-10">
                      {!type.highlight && (
                        <span className={`text-sm font-bold text-slate-400 group-hover:text-${type.color}-600 transition-colors flex items-center`}>
                          View <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                      {type.highlight && (
                        <span className="text-sm font-bold text-amber-600 group-hover:text-amber-700 transition-colors flex items-center">
                          Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Additional Trust Signal below grid */}
            <div className="mt-6 text-center">
              <p className="text-sm font-bold text-slate-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Verified Scholarship Database • Updated for 2026 Admissions
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
