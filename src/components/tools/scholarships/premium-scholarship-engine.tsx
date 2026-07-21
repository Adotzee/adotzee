"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Banknote, ShieldAlert, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const INCOMES = [
  { id: "under-1l", label: "Below ₹1,00,000" },
  { id: "1l-2.5l", label: "₹1,00,000 - ₹2,50,000" },
  { id: "2.5l-8l", label: "₹2,50,000 - ₹8,00,000" },
  { id: "above-8l", label: "Above ₹8,00,000" }
];

const CATEGORIES = [
  { id: "general", label: "General" },
  { id: "obc", label: "OBC / OEC" },
  { id: "scst", label: "SC / ST" },
  { id: "minority", label: "Minority" }
];

export function PremiumScholarshipEngine() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    income: "",
    category: "",
    percentage: 75
  });

  const [analyzing, setAnalyzing] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  const handleNext = () => {
    if (step === 3) {
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
      setStep(3);
    } else {
      setStep(s => s - 1);
    }
  };

  const canProceed = () => {
    switch(step) {
      case 1: return data.income !== "";
      case 2: return data.category !== "";
      case 3: return data.percentage > 0;
      default: return false;
    }
  };

  const getProgress = () => {
    if (resultReady) return 100;
    return (step / 4) * 100;
  };

  return (
    <div className="relative">
      {/* Sticky Progress Bar */}
      <div className="mb-8 sticky top-24 z-20 bg-white/80 backdrop-blur-md p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold">
            {resultReady ? <CheckCircle2 className="w-5 h-5" /> : step}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">
              {resultReady ? "Scholarship Matches Found" : `Step ${step} of 3`}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {resultReady ? "Review your eligible schemes." : "Find financial aid for your profile."}
            </p>
          </div>
        </div>
        <div className="w-32 md:w-64 h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-600 rounded-full"
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
            <div className="w-16 h-16 border-4 border-emerald-100 border-t-emerald-600 rounded-full animate-spin mb-6" />
            <h3 className="text-2xl font-black text-slate-900 mb-2">Scanning Scholarships...</h3>
            <p className="text-slate-500 font-medium text-center max-w-sm">Checking Adotzee Private Scholarships, E-Grantz, and National Scholarship Portal.</p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {!resultReady && step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Annual Family Income?</h2>
              <p className="text-slate-500 font-medium mb-10">Select your family's annual income bracket. This is crucial for government scholarships.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
                {INCOMES.map(inc => (
                  <button 
                    key={inc.id}
                    onClick={() => setData({ ...data, income: inc.id })}
                    className={cn(
                      "p-6 rounded-3xl border-2 text-left transition-all",
                      data.income === inc.id ? "border-emerald-500 bg-emerald-50 shadow-md ring-4 ring-emerald-500/10" : "border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    <div className={cn("w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center transition-colors", data.income === inc.id ? "border-emerald-500 bg-emerald-500" : "border-slate-300")}>
                      {data.income === inc.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{inc.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {!resultReady && step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Reservation Category?</h2>
              <p className="text-slate-500 font-medium mb-10">Select your category to check state and central fee concession schemes.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setData({ ...data, category: cat.id })}
                    className={cn(
                      "p-6 rounded-3xl border-2 text-left transition-all",
                      data.category === cat.id ? "border-emerald-500 bg-emerald-50 shadow-md ring-4 ring-emerald-500/10" : "border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-300"
                    )}
                  >
                    <div className={cn("w-6 h-6 rounded-full border-2 mb-4 flex items-center justify-center transition-colors", data.category === cat.id ? "border-emerald-500 bg-emerald-500" : "border-slate-300")}>
                      {data.category === cat.id && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className="font-bold text-slate-800 text-lg">{cat.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {!resultReady && step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
              <h2 className="text-3xl font-black text-slate-900 mb-2">What is your exact or expected percentage?</h2>
              <p className="text-slate-500 font-medium mb-10">Merit scholarships require specific cut-offs. Use the slider.</p>
              
              <div className="max-w-xl mx-auto w-full mb-auto space-y-12">
                <div className="text-center">
                  <div className="text-[6rem] font-black text-emerald-600 leading-none tracking-tighter">
                    {data.percentage}%
                  </div>
                </div>
                <input 
                  type="range" 
                  min="35" max="100" 
                  value={data.percentage}
                  onChange={(e) => setData({ ...data, percentage: Number(e.target.value) })}
                  className="w-full h-4 bg-slate-100 rounded-full appearance-none cursor-pointer accent-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                />
              </div>
            </motion.div>
          )}

          {resultReady && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6">
                  <Banknote className="w-4 h-4" /> 3 Schemes Found
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Your Scholarship Matches</h2>
                <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">Based on your {data.percentage}% and selected category, you are eligible for the following financial assistance programs.</p>
              </div>

              <div className="space-y-6 mb-12">
                {/* Adotzee Merit Card */}
                <div className="bg-slate-900 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 border border-slate-800 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                      <GraduationCap className="w-8 h-8 text-amber-400" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white leading-tight">Adotzee Merit Scholarship</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20">
                        Opening Soon
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-400 mb-4">
                      <span>Private Scholarship</span>
                    </div>
                    <p className="text-emerald-400 font-bold mb-6">Eligible for up to 50% Tuition Assistance</p>
                    <Link href="/scholarships/adotzee-merit-scholarship" className="inline-flex w-full sm:w-auto items-center justify-center bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 px-6 rounded-xl transition-colors">
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>

                {/* State Govt Card */}
                <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 border border-slate-200 shadow-sm">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                      <Building2 className="w-8 h-8 text-slate-600" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">E-Grantz / State Scheme</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200">
                        Government
                      </span>
                    </div>
                    <p className="text-slate-500 font-medium text-sm mb-4">Depending on exact state rules and income verification.</p>
                    <p className="text-emerald-600 font-bold mb-6">Eligible for Fee Concession / Stipend</p>
                    <Link href="/contact" className="inline-flex w-full sm:w-auto items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                      Talk to Expert for Guidance
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 flex gap-4">
                <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0" />
                <p className="text-amber-800 text-sm font-medium">
                  <strong>Important:</strong> Eligibility shown here is an estimate. Government schemes require verified income and caste certificates. Private schemes are subject to partner college availability.
                </p>
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-8 h-12 font-bold disabled:opacity-50"
            >
              {step === 3 ? "Check Scholarships" : "Continue"} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
