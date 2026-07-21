import React, { useState } from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { ResultCard } from "@/components/shared/result-card";
import { ProgressCircle } from "@/components/shared/progress-circle";
import { CTABlock } from "@/components/shared/cta-block";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Calculator as CalcIcon } from "lucide-react";

type Subject = {
  id: string;
  name: string;
  obtained: number | "";
  maximum: number;
};

export interface CalculatorEngineProps {
  initialBoard?: "kerala" | "cbse";
  initialLevel?: "plus-one" | "plus-two";
  initialStream?: "science" | "commerce" | "humanities";
}

export function CalculatorEngine({
  initialBoard = "kerala",
  initialLevel = "plus-two",
  initialStream = "science"
}: CalculatorEngineProps = {}) {
  const [board, setBoard] = useState<"kerala" | "cbse">(initialBoard);
  const [level, setLevel] = useState<"plus-one" | "plus-two">(initialLevel);
  const [stream, setStream] = useState<"science" | "commerce" | "humanities">(initialStream);

  const [subjects, setSubjects] = useState<Subject[]>([
    { id: "1", name: "English", obtained: "", maximum: 100 },
    { id: "2", name: "Second Language", obtained: "", maximum: 100 },
    { id: "3", name: "Physics", obtained: "", maximum: 100 },
    { id: "4", name: "Chemistry", obtained: "", maximum: 100 },
    { id: "5", name: "Mathematics", obtained: "", maximum: 100 },
    { id: "6", name: "Computer Science", obtained: "", maximum: 100 },
  ]);

  const [result, setResult] = useState<{
    percentage: number;
    totalObtained: number;
    totalMax: number;
    grade: string;
    status: string;
  } | null>(null);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      { id: Date.now().toString(), name: "", obtained: "", maximum: 100 },
    ]);
  };

  const removeSubject = (id: string) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    setSubjects(
      subjects.map((s) => {
        if (s.id === id) {
          // Parse number if needed
          let parsedValue = value;
          if (field === "obtained" && value !== "") {
             parsedValue = Number(value);
          } else if (field === "maximum") {
             parsedValue = Number(value) || 100;
          }
          return { ...s, [field]: parsedValue };
        }
        return s;
      })
    );
  };

  const calculate = () => {
    let totalObtained = 0;
    let totalMax = 0;

    subjects.forEach((s) => {
      const obt = Number(s.obtained) || 0;
      const max = Number(s.maximum) || 100;
      totalObtained += obt;
      totalMax += max;
    });

    const percentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;
    
    let grade = "A+";
    let status = "Excellent";
    
    if (percentage < 30) {
      grade = "D";
      status = "Needs Improvement";
    } else if (percentage < 50) {
      grade = "C";
      status = "Average";
    } else if (percentage < 70) {
      grade = "B";
      status = "Good";
    } else if (percentage < 90) {
      grade = "A";
      status = "Very Good";
    }

    setResult({
      percentage: Number(percentage.toFixed(2)),
      totalObtained,
      totalMax,
      grade,
      status,
    });
  };

  return (
    <div className="space-y-8">
      {/* Configuration */}
      <CardPremium className="bg-white/50 dark:bg-slate-900/50">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Board</label>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button 
                onClick={() => setBoard("kerala")}
                className={`flex-1 py-2 text-sm rounded-md transition-colors ${board === "kerala" ? "bg-white dark:bg-slate-700 shadow-sm font-medium" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
              >
                Kerala State
              </button>
              <button 
                onClick={() => setBoard("cbse")}
                className={`flex-1 py-2 text-sm rounded-md transition-colors ${board === "cbse" ? "bg-white dark:bg-slate-700 shadow-sm font-medium" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`}
              >
                CBSE
              </button>
            </div>
          </div>
          
          {board === "kerala" && (
             <div className="flex-1 min-w-[200px]">
               <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Level</label>
               <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                 <button 
                   onClick={() => setLevel("plus-one")}
                   className={`flex-1 py-2 text-sm rounded-md transition-colors ${level === "plus-one" ? "bg-white dark:bg-slate-700 shadow-sm font-medium" : "text-slate-500"}`}
                 >
                   Plus One
                 </button>
                 <button 
                   onClick={() => setLevel("plus-two")}
                   className={`flex-1 py-2 text-sm rounded-md transition-colors ${level === "plus-two" ? "bg-white dark:bg-slate-700 shadow-sm font-medium" : "text-slate-500"}`}
                 >
                   Plus Two
                 </button>
               </div>
             </div>
          )}
        </div>

        {/* Subjects Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500">
                <th className="pb-3 w-1/2">Subject</th>
                <th className="pb-3">Obtained Marks</th>
                <th className="pb-3">Max Marks</th>
                <th className="pb-3 w-10"></th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {subjects.map((sub) => (
                  <motion.tr 
                    key={sub.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-b border-slate-100 dark:border-slate-800/50"
                  >
                    <td className="py-3 pr-4">
                      <input 
                        type="text" 
                        value={sub.name}
                        onChange={(e) => updateSubject(sub.id, "name", e.target.value)}
                        placeholder="Subject Name"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <input 
                        type="number" 
                        value={sub.obtained}
                        onChange={(e) => updateSubject(sub.id, "obtained", e.target.value)}
                        placeholder="0"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 pr-4">
                      <input 
                        type="number" 
                        value={sub.maximum}
                        onChange={(e) => updateSubject(sub.id, "maximum", e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3">
                      <button 
                        onClick={() => removeSubject(sub.id)}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={addSubject} className="gap-2">
            <Plus className="w-4 h-4" /> Add Subject
          </Button>

          <Button onClick={calculate} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
            <CalcIcon className="w-4 h-4" /> Calculate
          </Button>
        </div>
      </CardPremium>

      {/* Results Section */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <ResultCard
              title="Overall Percentage"
              value={`${result.percentage}%`}
              subtitle={`Grade: ${result.grade} (${result.status})`}
              description={`You scored ${result.totalObtained} out of ${result.totalMax} marks.`}
            >
              <div className="flex justify-center mb-6">
                <ProgressCircle 
                  value={result.percentage} 
                  colorClass={result.percentage >= 80 ? "text-green-500" : result.percentage >= 60 ? "text-blue-500" : "text-yellow-500"} 
                />
              </div>
            </ResultCard>

            <CTABlock 
              title={`Congratulations on your ${result.grade} Grade! 🎉`}
              description="Based on your percentage, you may be eligible for top colleges. Find out your options instantly."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
