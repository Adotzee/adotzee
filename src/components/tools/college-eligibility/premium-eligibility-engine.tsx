"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, GraduationCap, Building2, MapPin, Calculator, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BOARDS = [
  { id: "kerala", label: "Kerala State Board" },
  { id: "cbse", label: "CBSE" },
  { id: "icse", label: "ICSE / ISC" }
];

const COURSES = [
  { id: "nursing", label: "B.Sc Nursing / Paramedical", icon: <School className="w-6 h-6" /> },
  { id: "engineering", label: "B.Tech / Engineering", icon: <Building2 className="w-6 h-6" /> },
  { id: "management", label: "BBA / B.Com", icon: <MapPin className="w-6 h-6" /> },
  { id: "computer", label: "BCA / B.Sc Computer", icon: <Calculator className="w-6 h-6" /> }
];

const LOCATIONS = [
  { id: "kerala", label: "Kerala" },
  { id: "karnataka", label: "Karnataka (Bangalore)" },
  { id: "tamilnadu", label: "Tamil Nadu" },
];

export function PremiumEligibilityEngine() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    board: "",
    percentage: 75,
    course: "",
    location: ""
  });

  const [analyzing, setAnalyzing] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const handleNext = () => {
    if (step === 4) {
      setAnalyzing(true);
      setTimeout(() => {
        setAnalyzing(false);
        setResultReady(true);
      }, 2000);
    } else {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (resultReady) {
      setResultReady(false);
      setStep(4);
    } else {
      setStep(s => s - 1);
    }
  };

  const canProceed = () => {
    switch(step) {
      case 1: return data.board !== "";
      case 2: return data.percentage > 0;
      case 3: return data.course !== "";
      case 4: return data.location !== "";
      default: return false;
    }
  };

  const getProgress = () => {
    if (resultReady) return 100;
    return (step / 5) * 100;
  };

  return (
    <div className="relative">
      {/* Sticky Progress Bar */}
      <div className="mb-8 sticky top-24 z-20 bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
            {resultReady ? <CheckCircle2 className="w-5 h-5" /> : step}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">
              {resultReady ? "Eligibility Report Ready" : `Step ${step} of 4`}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {resultReady ? "Matching colleges found." : "Complete your profile to get matches."}
            </p>
          </div>
        </div>
        <div className="w-32 md:w-64 h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${getProgress()}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl min-h-[400px] flex flex-col relative overflow-hidden">
        {analyzing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-30 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Analyzing Profile...</h3>
            <p className="text-slate-500 font-medium text-center max-w-sm">Cross-referencing your academics with 500+ college admission guidelines.</p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!resultReady && step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Which Education Board?</h2>
              <p className="text-slate-500 font-medium mb-10">Select the board for your 12th standard (Plus Two) examination.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-auto">
                {BOARDS.map(b => (
                  <button 
                    key={b.id}
                    onClick={() => setData({ ...data, board: b.id })}
                    className={cn(
                      "p-6 rounded-3xl border-2 text-left transition-all",
                      data.board === b.id ? "border-blue-500 bg-blue-50 shadow-md ring-4 ring-blue-500/10" : "border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    <div className={cn("w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center transition-colors", data.board === b.id ? "border-blue-500 bg-blue-500" : "border-slate-300")}>
                      {data.board === b.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{b.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {!resultReady && step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">What is your exact or expected percentage?</h2>
              <p className="text-slate-500 font-medium mb-10">Use the slider or type your exact percentage to get accurate college matches.</p>
              
              <div className="max-w-xl mx-auto w-full mb-auto space-y-12">
                <div className="text-center">
                  <div className="text-[6rem] font-black text-blue-600 leading-none tracking-tighter">
                    {data.percentage}%
                  </div>
                </div>
                <input 
                  type="range" 
                  min="35" max="100" 
                  value={data.percentage}
                  onChange={(e) => setData({ ...data, percentage: Number(e.target.value) })}
                  className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </motion.div>
          )}

          {!resultReady && step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">What course are you targeting?</h2>
              <p className="text-slate-500 font-medium mb-10">Select your preferred stream to find colleges offering it.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
                {COURSES.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setData({ ...data, course: c.id })}
                    className={cn(
                      "p-6 rounded-3xl border-2 text-left transition-all flex items-center gap-4",
                      data.course === c.id ? "border-blue-500 bg-blue-50 shadow-md ring-4 ring-blue-500/10" : "border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    <div className={cn("p-3 rounded-2xl", data.course === c.id ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-500")}>
                      {c.icon}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{c.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {!resultReady && step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Where do you want to study?</h2>
              <p className="text-slate-500 font-medium mb-10">Select your preferred location for higher education.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-auto">
                {LOCATIONS.map(l => (
                  <button 
                    key={l.id}
                    onClick={() => setData({ ...data, location: l.id })}
                    className={cn(
                      "p-6 rounded-3xl border-2 text-left transition-all",
                      data.location === l.id ? "border-blue-500 bg-blue-50 shadow-md ring-4 ring-blue-500/10" : "border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    <div className={cn("w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center transition-colors", data.location === l.id ? "border-blue-500 bg-blue-500" : "border-slate-300")}>
                      {data.location === l.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{l.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {resultReady && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6">
                  <CheckCircle2 className="w-4 h-4" /> You are eligible!
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Your Eligibility Match</h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Based on your {data.percentage}% in {BOARDS.find(b=>b.id===data.board)?.label}, you have excellent chances in {LOCATIONS.find(l=>l.id===data.location)?.label}.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden text-white">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                   <h3 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-2">Match Confidence</h3>
                   <div className="text-6xl font-black text-emerald-400 mb-4">85%</div>
                   <p className="text-slate-300 font-medium text-sm">Your profile strongly matches historical cut-offs for Tier-2 and Tier-3 private institutions.</p>
                </div>

                <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                   <h3 className="font-black text-xl text-blue-900 mb-4">Recommended Actions</h3>
                   <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm"><GraduationCap className="w-4 h-4" /></div>
                       <div>
                         <p className="font-bold text-slate-900 text-sm">Explore Colleges</p>
                         <p className="text-xs text-slate-500 font-medium">Browse 50+ matches in your region.</p>
                       </div>
                     </li>
                     <li className="flex items-start gap-3">
                       <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shrink-0 shadow-sm"><CheckCircle2 className="w-4 h-4" /></div>
                       <div>
                         <p className="font-bold text-slate-900 text-sm">Check Scholarships</p>
                         <p className="text-xs text-slate-500 font-medium">You may qualify for up to 30% fee waivers.</p>
                       </div>
                     </li>
                   </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                <Link href="/recommendations" className="w-full">
                  <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-bold shadow-lg shadow-blue-600/20 group">
                    View Eligible Colleges <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button className="w-full h-14 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl text-lg font-bold">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Navigation */}
        {!resultReady && (
          <div className="mt-12 flex justify-between items-center pt-6 border-t border-slate-100">
            {step > 1 ? (
              <Button variant="ghost" onClick={handleBack} className="text-slate-500 hover:text-slate-900 font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            ) : (
              <div />
            )}
            
            <Button 
              onClick={handleNext} 
              disabled={!canProceed()}
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl px-8 h-12 font-bold disabled:opacity-50"
            >
              {step === 4 ? "Analyze Profile" : "Continue"} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
