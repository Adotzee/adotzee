"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScholarshipsHighlight() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <GraduationCap className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold tracking-wide uppercase text-yellow-400">Financial Aid Program</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Adotzee Merit <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Scholarship 2026</span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
              We believe financial constraints shouldn't hold back bright minds. The Adotzee Merit Scholarship provides financial assistance for eligible students admitted through our partner institutions.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Up to 50% Tuition Assistance",
                "Based on Academic Merit & Need",
                "Directly applied to College Fees"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/scholarships/adotzee-merit-scholarship">
                <Button className="w-full sm:w-auto h-14 px-8 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-lg shadow-xl shadow-yellow-500/20 transition-all">
                  Check Eligibility
                </Button>
              </Link>
              <Link href="/tools/scholarship-checker">
                <Button variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-2 border-white/20 hover:bg-white/10 text-white font-bold transition-all">
                  Calculate Chances
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-5/12 w-full max-w-md"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-center">
                  <span className="block text-2xl font-black text-slate-900 leading-none">50%</span>
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-tighter">Up To</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Application Status</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-semibold mb-2 text-blue-100">
                    <span>Phase 1 Applications</span>
                    <span>Closing Soon</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-300 h-3 rounded-full w-[85%] relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-blue-200 leading-relaxed italic">
                    "Adotzee is an independent educational platform. This is a private scholarship initiative and is not affiliated with any government schemes."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
