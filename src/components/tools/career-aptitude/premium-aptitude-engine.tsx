"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, BarChart3, BrainCircuit, Target, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  { id: 1, text: "I prefer solving complex mathematical equations over writing an essay.", trait: "Analytical" },
  { id: 2, text: "I enjoy helping people and listening to their problems.", trait: "Social" },
  { id: 3, text: "I am fascinated by how machines and software are built.", trait: "Technical" },
  { id: 4, text: "I like taking charge of a group and leading projects.", trait: "Leadership" },
  { id: 5, text: "I enjoy creating art, designing, or expressing myself creatively.", trait: "Creative" }
];

export function PremiumAptitudeEngine() {
  const [step, setStep] = useState<"hub" | "test" | "analyzing" | "result">("hub");
  const [questionCount, setQuestionCount] = useState(10);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleStart = () => {
    setStep("test");
    setCurrentQIndex(0);
    setAnswers({});
  };

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [currentQIndex]: value });
    if (currentQIndex < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQIndex(c => c + 1), 300);
    } else {
      setTimeout(() => {
        setStep("analyzing");
        setTimeout(() => setStep("result"), 2500);
      }, 300);
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        
        {/* Hub */}
        {step === "hub" && (
          <motion.div key="hub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl text-center">
              <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-indigo-100">
                <BrainCircuit className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Adotzee Career Aptitude Assessment</h2>
              <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto mb-10">Discover your core strengths and find the exact degree programs and careers that align with your natural abilities.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <Clock className="w-6 h-6 text-indigo-500 mb-2" />
                  <h3 className="font-bold text-slate-900">Est. Time</h3>
                  <p className="text-slate-500 text-sm font-medium">~5 Minutes</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <BarChart3 className="w-6 h-6 text-emerald-500 mb-2" />
                  <h3 className="font-bold text-slate-900">Difficulty</h3>
                  <p className="text-slate-500 text-sm font-medium">Easy (No right or wrong)</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <Target className="w-6 h-6 text-rose-500 mb-2" />
                  <h3 className="font-bold text-slate-900">Result</h3>
                  <p className="text-slate-500 text-sm font-medium">Comprehensive PDF Report</p>
                </div>
              </div>

              <div className="max-w-xs mx-auto">
                <Button onClick={handleStart} className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg shadow-indigo-600/20 hover:scale-105 transition-transform">
                  Start Assessment
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Test UI */}
        {step === "test" && (
          <motion.div key="test" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-xl relative overflow-hidden min-h-[500px] flex flex-col">
              
              {/* Progress */}
              <div className="flex items-center gap-4 mb-12">
                <div className="text-sm font-bold text-slate-400 w-12">{currentQIndex + 1} / {QUESTIONS.length}</div>
                <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-indigo-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQIndex + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto w-full">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentQIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 leading-[1.2] text-center">
                      {QUESTIONS[currentQIndex].text}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                      {[
                        { val: 1, label: "Strongly Disagree", color: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100 hover:border-rose-400" },
                        { val: 2, label: "Disagree", color: "bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100 hover:border-orange-400" },
                        { val: 3, label: "Neutral", color: "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-400" },
                        { val: 4, label: "Agree", color: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-400" },
                        { val: 5, label: "Strongly Agree", color: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-400" }
                      ].map(opt => (
                        <button 
                          key={opt.val}
                          onClick={() => handleAnswer(opt.val)}
                          className={cn(
                            "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all",
                            opt.color,
                            answers[currentQIndex] === opt.val ? "ring-4 ring-indigo-500/20 scale-105 shadow-md" : ""
                          )}
                        >
                          <span className="text-2xl font-black mb-2 opacity-50">{opt.val}</span>
                          <span className="text-xs font-bold text-center leading-tight">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}

        {/* Analyzing */}
        {step === "analyzing" && (
          <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="bg-white rounded-[3rem] p-16 border border-slate-200 shadow-xl flex flex-col items-center justify-center min-h-[500px]">
              <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6" />
              <h2 className="text-2xl font-black text-slate-900 mb-2">Analyzing Your Profile</h2>
              <p className="text-slate-500 font-medium">Matching your traits with 200+ career pathways...</p>
            </div>
          </motion.div>
        )}

        {/* Result */}
        {step === "result" && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
              
              <div className="text-center mb-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-4 border border-indigo-500/30">
                  <CheckCircle2 className="w-4 h-4" /> Assessment Complete
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Your Primary Trait: Technical</h2>
                <p className="text-slate-400 font-medium text-lg max-w-2xl mx-auto">You exhibit a strong inclination towards logic, systems, and engineering. You excel in structured problem-solving environments.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-12">
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-indigo-400" /> Top Careers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-300 font-medium"><div className="w-2 h-2 rounded-full bg-indigo-500 mr-3" /> Software Engineering</li>
                    <li className="flex items-center text-slate-300 font-medium"><div className="w-2 h-2 rounded-full bg-indigo-500 mr-3" /> Data Science</li>
                    <li className="flex items-center text-slate-300 font-medium"><div className="w-2 h-2 rounded-full bg-indigo-500 mr-3" /> Systems Architecture</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><GraduationCap className="w-5 h-5 text-emerald-400" /> Recommended Courses</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-slate-300 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3" /> B.Tech Computer Science</li>
                    <li className="flex items-center text-slate-300 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3" /> BCA (Bachelor of Computer Apps)</li>
                    <li className="flex items-center text-slate-300 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500 mr-3" /> B.Sc AI & Machine Learning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Want the full 15-page report?</h3>
                <p className="text-slate-500 font-medium mb-6">Our experts can break down your full psychological profile in a free 1-on-1 session.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg hover:scale-105 transition-all">
                      Book Free Expert Session
                    </Button>
                  </Link>
                  <Link href="/recommendations" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl">
                      View Eligible Colleges
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
