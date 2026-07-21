"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator as CalcIcon, GraduationCap, Building2, MapPin, Activity, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SubjectKey = "physics" | "chemistry" | "biology" | "mathematics" | "english";

interface SubjectState {
  obtained: number | "";
  maximum: number;
}

const SUBJECT_LABELS: Record<SubjectKey, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
  mathematics: "Mathematics",
  english: "English",
};

export function PremiumLBSEngine() {
  const [step, setStep] = useState<1 | 2>(1); // 1: Input, 2: Result
  const [marks, setMarks] = useState<Record<SubjectKey, SubjectState>>({
    physics: { obtained: "", maximum: 100 },
    chemistry: { obtained: "", maximum: 100 },
    biology: { obtained: "", maximum: 100 },
    mathematics: { obtained: "", maximum: 100 },
    english: { obtained: "", maximum: 100 },
  });

  const [animatingMedScore, setAnimatingMedScore] = useState(0);

  const updateMark = (subject: SubjectKey, field: "obtained" | "maximum", value: string) => {
    setMarks(prev => {
      const next = { ...prev };
      let val: number | "" = value ? Number(value) : "";
      
      if (field === "obtained" && typeof val === "number") {
        if (val > prev[subject].maximum) val = prev[subject].maximum;
      }
      
      next[subject] = { ...prev[subject], [field]: val };
      return next;
    });
  };

  const stats = useMemo(() => {
    let filledCount = 0;
    const subjectsList: SubjectKey[] = ["physics", "chemistry", "biology", "mathematics", "english"];
    
    subjectsList.forEach(k => {
      if (marks[k].obtained !== "") filledCount++;
    });

    const getNorm = (k: SubjectKey) => {
      const m = marks[k];
      const obt = Number(m.obtained) || 0;
      const max = Number(m.maximum) || 100;
      return max > 0 ? (obt / max) * 100 : 0;
    };

    const pNorm = getNorm("physics");
    const cNorm = getNorm("chemistry");
    const bNorm = getNorm("biology");
    const mNorm = getNorm("mathematics");
    const eNorm = getNorm("english");

    // Exact Medical Score: Physics + Chemistry + Biology + English
    const medScore = pNorm + cNorm + bNorm + eNorm; 
    
    // Engineering Score (If they have math): Physics + Chemistry + Math
    const engScore = pNorm + cNorm + mNorm;

    // Rank logic (Estimation)
    let range = "Calculating...";
    let medEligibility = "Checking";
    let engEligibility = "Checking";

    if (filledCount >= 4) { // Need at least PCB + English for med, PCM for eng
      if (medScore > 380) { range = "1 - 500"; medEligibility = "High Chances"; }
      else if (medScore > 360) { range = "500 - 1500"; medEligibility = "Very Good"; }
      else if (medScore > 330) { range = "1500 - 4000"; medEligibility = "Good"; }
      else if (medScore > 280) { range = "4000 - 10000"; medEligibility = "Average"; }
      else { range = "10000+"; medEligibility = "Low Chances"; }
      
      if (engScore > 280) engEligibility = "High Chances";
      else if (engScore > 250) engEligibility = "Good";
      else engEligibility = "Average";
    }

    return { 
      medScore: Number(medScore.toFixed(2)), 
      engScore: Number(engScore.toFixed(2)), 
      range, 
      filledCount,
      medEligibility,
      engEligibility
    };
  }, [marks]);

  const handleCalculate = () => {
    setStep(2);
    let start = 0;
    const end = stats.medScore;
    const duration = 1000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatingMedScore(end);
        clearInterval(timer);
      } else {
        setAnimatingMedScore(start);
      }
    }, 16);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Left: Input Cards */}
            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Enter Subject Marks</h2>
                <p className="text-slate-500 font-medium mt-2">Enter your final Plus Two marks. The index score is normalized to 100 per subject.</p>
              </div>

              <div className="space-y-4">
                {(["physics", "chemistry", "biology", "mathematics", "english"] as SubjectKey[]).map((subjectKey) => (
                  <div 
                    key={subjectKey}
                    className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-3xl border border-slate-100 shadow-sm focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 transition-all items-center"
                  >
                    <div className="w-full md:w-48 font-bold text-slate-800 text-lg flex items-center gap-3 pl-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      {SUBJECT_LABELS[subjectKey]}
                    </div>
                    
                    <div className="flex gap-4 w-full md:flex-1">
                      <div className="flex-1">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-2">Obtained</label>
                        <input 
                          type="number" 
                          value={marks[subjectKey].obtained}
                          onChange={(e) => updateMark(subjectKey, "obtained", e.target.value)}
                          placeholder="e.g. 185"
                          className="w-full bg-slate-50 border-0 rounded-2xl px-5 py-4 font-black text-xl text-blue-600 focus:bg-white focus:ring-0 outline-none"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 ml-2">Maximum</label>
                        <input 
                          type="number" 
                          value={marks[subjectKey].maximum}
                          onChange={(e) => updateMark(subjectKey, "maximum", e.target.value)}
                          placeholder="100 or 200"
                          className="w-full bg-slate-50 border-0 rounded-2xl px-5 py-4 font-bold text-lg text-slate-500 focus:bg-white focus:ring-0 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sticky Summary */}
            <div className="lg:w-[360px] shrink-0">
              <div className="sticky top-32 bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <h3 className="font-bold text-slate-400">Live LBS Index</h3>
                  <div className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">{stats.filledCount} / 5</div>
                </div>

                <div className="space-y-6 mb-8 relative z-10">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-blue-300 font-semibold mb-2">
                      <Stethoscope className="w-4 h-4" /> Medical Index
                    </div>
                    <div className="text-3xl font-black">{stats.medScore} <span className="text-slate-500 text-lg font-medium">/ 400</span></div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-2">
                      <Activity className="w-4 h-4" /> Engineering Index
                    </div>
                    <div className="text-3xl font-black">{stats.engScore} <span className="text-slate-500 text-lg font-medium">/ 300</span></div>
                  </div>

                  <div className="flex justify-between items-end pt-2">
                    <span className="text-slate-400 font-medium">Est. Rank</span>
                    <span className="text-xl font-bold text-emerald-400">{stats.range}</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  disabled={stats.filledCount < 3}
                  className="w-full relative z-10 bg-blue-500 hover:bg-blue-400 text-white rounded-2xl h-14 text-lg font-bold shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Full Report
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Massive Result Card */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden mb-12 border border-slate-800">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-blue-500/30">
                  <Stethoscope className="w-4 h-4" /> Medical / Nursing / Paramedical
                </div>
                
                <p className="text-slate-400 font-bold tracking-widest uppercase mb-4">Estimated State Rank Range</p>
                <div className="text-5xl md:text-[6rem] font-black leading-none tracking-tighter mb-8 drop-shadow-lg text-emerald-400">
                  {stats.range}
                </div>
                
                <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                    <p className="text-slate-400 text-sm font-bold mb-1 uppercase">Medical Index</p>
                    <p className="text-3xl font-black text-white">{animatingMedScore.toFixed(2)}</p>
                    <p className="text-emerald-400 text-sm font-bold mt-2">{stats.medEligibility}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
                    <p className="text-slate-400 text-sm font-bold mb-1 uppercase">Engineering Index</p>
                    <p className="text-3xl font-black text-white">{stats.engScore.toFixed(2)}</p>
                    <p className="text-blue-400 text-sm font-bold mt-2">{stats.engEligibility}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps Funnel */}
            <div className="text-center mb-10">
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Your Action Plan</h3>
              <p className="text-slate-500 font-medium text-lg">Use this estimated rank to take the next critical steps in your admission journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/recommendations">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Find Eligible Colleges</h4>
                  <p className="text-slate-500 font-medium mb-4 flex-1">See which Nursing and Paramedical colleges you can get into with this rank.</p>
                  <div className="text-blue-600 font-bold flex items-center">
                    Explore Colleges <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/scholarships/adotzee-merit-scholarship">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:amber-300 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Check Adotzee Scholarship</h4>
                  <p className="text-slate-500 font-medium mb-4 flex-1">High index scores can qualify for up to 50% tuition assistance.</p>
                  <div className="text-amber-600 font-bold flex items-center">
                    Check Eligibility <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              <Link href="/tools/plus-two-percentage-calculator">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:emerald-300 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CalcIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">+2 Percentage Calculator</h4>
                  <p className="text-slate-500 font-medium mb-4 flex-1">Calculate your exact overall Plus Two percentage for other state admissions.</p>
                  <div className="text-emerald-600 font-bold flex items-center">
                    Calculate Percentage <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/contact">
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm hover:shadow-xl transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Talk to LBS Expert</h4>
                  <p className="text-slate-400 font-medium mb-4 flex-1">Get free guidance on option registration and college selection strategies.</p>
                  <div className="text-white font-bold flex items-center">
                    Book Session <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <button onClick={() => { setStep(1); setAnimatingMedScore(0); }} className="text-slate-400 font-bold hover:text-slate-900 transition-colors">
                Recalculate Rank
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
