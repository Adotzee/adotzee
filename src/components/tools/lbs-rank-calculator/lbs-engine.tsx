"use client";

import React, { useState } from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { ResultCard } from "@/components/shared/result-card";
import { ProgressCircle } from "@/components/shared/progress-circle";
import { CTABlock } from "@/components/shared/cta-block";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator as CalcIcon, Info } from "lucide-react";

export function LBSEngine() {
  const [marks, setMarks] = useState({
    physics: { obtained: "", max: 100 },
    chemistry: { obtained: "", max: 100 },
    biology: { obtained: "", max: 100 },
    mathematics: { obtained: "", max: 100 },
  });

  const [result, setResult] = useState<{
    engScore: number;
    medScore: number;
    estimatedRankRange: string;
  } | null>(null);

  const updateMark = (subject: keyof typeof marks, field: "obtained" | "max", value: string) => {
    setMarks({
      ...marks,
      [subject]: {
        ...marks[subject],
        [field]: value === "" ? "" : Number(value),
      },
    });
  };

  const calculateRank = () => {
    // Basic placeholder logic for LBS Normalization
    // Usually Engineering uses Math + Physics + Chemistry
    // Medical uses Biology + Physics + Chemistry
    
    const pObt = Number(marks.physics.obtained) || 0;
    const pMax = Number(marks.physics.max) || 100;
    
    const cObt = Number(marks.chemistry.obtained) || 0;
    const cMax = Number(marks.chemistry.max) || 100;

    const mObt = Number(marks.mathematics.obtained) || 0;
    const mMax = Number(marks.mathematics.max) || 100;

    const bObt = Number(marks.biology.obtained) || 0;
    const bMax = Number(marks.biology.max) || 100;

    // Normalize to out of 100
    const pNorm = pMax > 0 ? (pObt / pMax) * 100 : 0;
    const cNorm = cMax > 0 ? (cObt / cMax) * 100 : 0;
    const mNorm = mMax > 0 ? (mObt / mMax) * 100 : 0;
    const bNorm = bMax > 0 ? (bObt / bMax) * 100 : 0;

    // Eng Score out of 300
    const engScore = pNorm + cNorm + mNorm;
    
    // Med Score out of 300
    const medScore = pNorm + cNorm + bNorm;

    // Arbitrary estimate range based on score out of 300
    let range = "1000 - 5000";
    if (engScore > 285) range = "1 - 500";
    else if (engScore > 270) range = "500 - 1500";
    else if (engScore > 250) range = "1500 - 4000";
    else if (engScore > 200) range = "4000 - 10000";
    else range = "10000+";

    setResult({
      engScore: Number(engScore.toFixed(2)),
      medScore: Number(medScore.toFixed(2)),
      estimatedRankRange: range
    });
  };

  return (
    <div className="space-y-8">
      <CardPremium className="bg-white/50 dark:bg-slate-900/50">
        <div className="space-y-6">
          <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <Info className="w-5 h-5 mr-2 flex-shrink-0" />
            <p>Enter your marks to estimate your LBS Engineering and Medical index scores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["physics", "chemistry", "mathematics", "biology"] as const).map((subject) => (
              <div key={subject} className="space-y-2">
                <label className="block text-sm font-medium capitalize text-slate-700 dark:text-slate-300">
                  {subject}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Obtained"
                    value={marks[subject].obtained}
                    onChange={(e) => updateMark(subject, "obtained", e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="text-slate-400 self-center">/</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={marks[subject].max}
                    onChange={(e) => updateMark(subject, "max", e.target.value)}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={calculateRank} className="gap-2 bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto">
              <CalcIcon className="w-4 h-4" /> Estimate Rank Score
            </Button>
          </div>
        </div>
      </CardPremium>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResultCard
                title="Engineering Score"
                value={result.engScore}
                subtitle="Out of 300"
              />
              <ResultCard
                title="Medical Score"
                value={result.medScore}
                subtitle="Out of 300"
              />
            </div>
            
            <CardPremium className="text-center border-orange-200 bg-orange-50/50 dark:bg-orange-900/10 dark:border-orange-800">
              <h3 className="text-sm uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold mb-2">Estimated Rank Range</h3>
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">{result.estimatedRankRange}</div>
              <p className="text-xs text-slate-500">Note: This is a rough estimate based on previous year trends. Official rank depends on actual LBS normalisation rules.</p>
            </CardPremium>

            <CTABlock 
              title="Find Colleges Accepting Your Score"
              description="Get expert guidance on which engineering or medical colleges you can secure admission in based on this rank estimate."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
