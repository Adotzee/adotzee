"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, ArrowRight, CheckCircle2, Calculator as CalcIcon, GraduationCap, Building2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Types ---
type Board = "kerala" | "cbse";
type Level = "plus-one" | "plus-two";
type Stream = "science" | "commerce" | "humanities";

interface Subject {
  id: string;
  name: string;
  obtained: number | "";
  maximum: number;
}

// --- Defaults ---
const DEFAULT_SUBJECTS: Record<Stream, Partial<Subject>[]> = {
  science: [
    { name: "English", maximum: 200 },
    { name: "Second Language", maximum: 200 },
    { name: "Physics", maximum: 200 },
    { name: "Chemistry", maximum: 200 },
    { name: "Mathematics", maximum: 200 },
    { name: "Biology / Computer Science", maximum: 200 },
  ],
  commerce: [
    { name: "English", maximum: 200 },
    { name: "Second Language", maximum: 200 },
    { name: "Business Studies", maximum: 200 },
    { name: "Accountancy", maximum: 200 },
    { name: "Economics", maximum: 200 },
    { name: "Computer Application", maximum: 200 },
  ],
  humanities: [
    { name: "English", maximum: 200 },
    { name: "Second Language", maximum: 200 },
    { name: "History", maximum: 200 },
    { name: "Economics", maximum: 200 },
    { name: "Political Science", maximum: 200 },
    { name: "Sociology / Geography", maximum: 200 },
  ]
};

// --- Components ---

function SelectionCard({
  selected,
  onClick,
  title,
  subtitle
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-start p-6 rounded-3xl border-2 transition-all duration-300 text-left w-full",
        selected
          ? "border-blue-600 bg-blue-50/50 shadow-[0_8px_30px_rgb(37,99,235,0.12)]"
          : "border-slate-100 bg-white hover:border-blue-200 hover:shadow-md"
      )}
    >
      <div className="flex justify-between items-center w-full mb-2">
        <h3 className={cn("text-xl font-bold", selected ? "text-blue-900" : "text-slate-800")}>{title}</h3>
        <div className={cn("w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors", selected ? "border-blue-600 bg-blue-600" : "border-slate-200")}>
          {selected && <CheckCircle2 className="w-4 h-4 text-white" />}
        </div>
      </div>
      <p className={cn("text-sm font-medium", selected ? "text-blue-700" : "text-slate-500")}>{subtitle}</p>
    </button>
  );
}

// --- Main Engine ---
export function PremiumCalculatorEngine() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // 1: Board/Level, 2: Stream, 3: Inputs, 4: Result
  const [board, setBoard] = useState<Board>("kerala");
  const [level, setLevel] = useState<Level>("plus-two");
  const [stream, setStream] = useState<Stream>("science");

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [animatingPercentage, setAnimatingPercentage] = useState(0);

  // Initialize subjects when stream changes
  useEffect(() => {
    const defaultSubs: Subject[] = DEFAULT_SUBJECTS[stream].map((s, i) => ({
      id: Date.now().toString() + i,
      name: s.name!,
      obtained: "",
      maximum: s.maximum!
    }));
    setSubjects(defaultSubs);
  }, [stream]);

  // Calculations
  const stats = useMemo(() => {
    let totalObtained = 0;
    let totalMax = 0;
    let filledCount = 0;

    subjects.forEach((s) => {
      const obt = Number(s.obtained) || 0;
      const max = Number(s.maximum) || 100;
      totalObtained += obt;
      totalMax += max;
      if (s.obtained !== "") filledCount++;
    });

    const percentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;
    const progress = (filledCount / subjects.length) * 100;

    let grade = "A+";
    let status = "Excellent";

    if (percentage < 30) { grade = "D"; status = "Needs Improvement"; }
    else if (percentage < 50) { grade = "C"; status = "Average"; }
    else if (percentage < 70) { grade = "B"; status = "Good"; }
    else if (percentage < 90) { grade = "A"; status = "Very Good"; }

    return { totalObtained, totalMax, percentage, progress, grade, status, filledCount };
  }, [subjects]);

  const handleCalculate = () => {
    setStep(4);
    // Animate percentage
    let start = 0;
    const end = stats.percentage;
    const duration = 1000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatingPercentage(end);
        clearInterval(timer);
      } else {
        setAnimatingPercentage(start);
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
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">1. Select your Board</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectionCard selected={board === "kerala"} onClick={() => setBoard("kerala")} title="Kerala State (DHSE)" subtitle="Official HSE evaluation format" />
                <SelectionCard selected={board === "cbse"} onClick={() => setBoard("cbse")} title="CBSE" subtitle="Central board evaluation format" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">2. Select your Level</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectionCard selected={level === "plus-two"} onClick={() => setLevel("plus-two")} title="Plus Two (Class 12)" subtitle="Final year assessment" />
                <SelectionCard selected={level === "plus-one"} onClick={() => setLevel("plus-one")} title="Plus One (Class 11)" subtitle="First year assessment" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-blue-600/20">
                Continue <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">3. Choose your Stream</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectionCard selected={stream === "science"} onClick={() => setStream("science")} title="Science" subtitle="Physics, Chemistry, Math..." />
                <SelectionCard selected={stream === "commerce"} onClick={() => setStream("commerce")} title="Commerce" subtitle="Accountancy, Business..." />
                <SelectionCard selected={stream === "humanities"} onClick={() => setStream("humanities")} title="Humanities" subtitle="History, Economics..." />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={() => setStep(1)} className="text-slate-500 font-bold hover:text-slate-900 px-4 py-2">
                Back
              </button>
              <Button onClick={() => setStep(3)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-lg font-bold shadow-lg shadow-blue-600/20">
                Enter Marks <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Left: Input Rows */}
            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">Enter your Marks</h2>
                  <p className="text-slate-500 font-medium mt-2">Enter the marks exactly as shown on your mark list.</p>
                </div>
                <button onClick={() => setStep(2)} className="text-slate-900 bg-blue-200 hover:bg-blue-500 rounded-xl px-2 font-bold hover:text-slate-200 text-sm">
                  Change Stream
                </button>
              </div>

              <div className="space-y-3">
                {/* Headers */}
                <div className="hidden md:flex gap-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <div className="flex-[2]">Subject Name</div>
                  <div className="flex-1">Obtained</div>
                  <div className="flex-1">Maximum</div>
                  <div className="w-10"></div>
                </div>

                {/* Rows */}
                <AnimatePresence>
                  {subjects.map((s, index) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col md:flex-row gap-2 md:gap-4 bg-white p-2 md:p-3 rounded-2xl border border-slate-100 shadow-sm focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50 transition-all"
                    >
                      <input
                        type="text"
                        value={s.name}
                        onChange={(e) => {
                          const newSubs = [...subjects];
                          newSubs[index].name = e.target.value;
                          setSubjects(newSubs);
                        }}
                        placeholder="Subject Name"
                        className="flex-[2] bg-slate-50 border-0 rounded-xl px-4 py-3 font-bold text-slate-900 focus:bg-white focus:ring-0 outline-none w-full"
                      />
                      <div className="flex gap-2 md:gap-4 flex-[2]">
                        <input
                          type="number"
                          value={s.obtained}
                          onChange={(e) => {
                            const newSubs = [...subjects];
                            let val: number | "" = e.target.value ? Number(e.target.value) : "";
                            if (typeof val === "number" && val > s.maximum) {
                              val = s.maximum;
                            }
                            newSubs[index].obtained = val;
                            setSubjects(newSubs);
                          }}
                          placeholder="Obtained"
                          className="flex-1 bg-slate-50 border-0 rounded-xl px-4 py-3 font-black text-blue-600 focus:bg-white focus:ring-0 outline-none text-center w-full"
                        />
                        <input
                          type="number"
                          value={s.maximum}
                          onChange={(e) => {
                            const newSubs = [...subjects];
                            newSubs[index].maximum = Number(e.target.value);
                            setSubjects(newSubs);
                          }}
                          placeholder="Max"
                          className="flex-1 bg-slate-50 border-0 rounded-xl px-4 py-3 font-bold text-slate-500 focus:bg-white focus:ring-0 outline-none text-center w-full"
                        />
                      </div>
                      <button
                        onClick={() => {
                          const newSubs = subjects.filter((_, i) => i !== index);
                          setSubjects(newSubs);
                        }}
                        className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl text-slate-300 hover:bg-red-50 hover:text-red-500 transition-colors hidden md:flex"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button
                  onClick={() => {
                    setSubjects([...subjects, { id: Date.now().toString(), name: "", obtained: "", maximum: 200 }]);
                  }}
                  className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  <Plus className="w-5 h-5" /> Add Subject
                </button>
              </div>
            </div>

            {/* Right: Sticky Summary */}
            <div className="lg:w-[320px] shrink-0">
              <div className="sticky top-32 bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="font-bold text-slate-400">Live Summary</h3>
                  <div className="text-sm font-bold bg-white/10 px-3 py-1 rounded-full">{stats.filledCount} / {subjects.length}</div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-medium">Total Marks</span>
                    <span className="text-2xl font-black">{stats.totalObtained} <span className="text-slate-500 text-lg">/ {stats.totalMax}</span></span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-slate-400 font-medium">Est. Grade</span>
                    <span className="text-2xl font-black text-amber-400">{stats.grade}</span>
                  </div>
                  <div className="flex justify-between items-end pb-4">
                    <span className="text-slate-400 font-medium">Status</span>
                    <span className="text-xl font-bold text-emerald-400">{stats.status}</span>
                  </div>
                </div>

                <Button
                  onClick={handleCalculate}
                  disabled={stats.filledCount === 0}
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white rounded-2xl h-14 text-lg font-bold shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calculate Final Score
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            {/* Massive Result Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden mb-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />

              <div className="relative z-10">
                <p className="text-blue-200 font-bold tracking-widest uppercase mb-4">Your Final Percentage</p>
                <div className="text-[6rem] md:text-[8rem] font-black leading-none tracking-tighter mb-6 drop-shadow-lg">
                  {animatingPercentage.toFixed(2)}<span className="text-blue-300">%</span>
                </div>

                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 font-bold text-lg">
                  <span className="text-amber-300">{stats.grade} Grade</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span>{stats.totalObtained} / {stats.totalMax} Marks</span>
                </div>
              </div>
            </div>

            {/* The Funnel: Next Steps */}
            <div className="text-center mb-10">
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Your Next Steps</h3>
              <p className="text-slate-500 font-medium text-lg">Based on your score, here is what you should do next.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/recommendations">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">College Recommendations</h4>
                  <p className="text-slate-500 font-medium mb-4 flex-1">Find the exact colleges where you are guaranteed admission based on this score.</p>
                  <div className="text-blue-600 font-bold flex items-center">
                    Find Colleges <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/tools/lbs-rank-calculator">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:emerald-300 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CalcIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">LBS Rank Predictor</h4>
                  <p className="text-slate-500 font-medium mb-4 flex-1">Calculate your exact LBS rank for Nursing & Paramedical admissions.</p>
                  <div className="text-emerald-600 font-bold flex items-center">
                    Calculate Rank <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/scholarships/adotzee-merit-scholarship">
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:amber-300 transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Check Scholarships</h4>
                  <p className="text-slate-500 font-medium mb-4 flex-1">See if your percentage qualifies you for the Adotzee Merit Scholarship.</p>
                  <div className="text-amber-600 font-bold flex items-center">
                    Check Eligibility <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              <Link href="/contact">
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-sm hover:shadow-xl transition-all group h-full flex flex-col">
                  <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Talk to a Counsellor</h4>
                  <p className="text-slate-400 font-medium mb-4 flex-1">Get free expert guidance on which courses you should apply for with this score.</p>
                  <div className="text-white font-bold flex items-center">
                    Book Session <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <button onClick={() => { setStep(1); setAnimatingPercentage(0); }} className="text-slate-400 font-bold hover:text-slate-900">
                Recalculate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
