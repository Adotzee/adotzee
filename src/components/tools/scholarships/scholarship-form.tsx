"use client";

import React, { useState } from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { CTABlock } from "@/components/shared/cta-block";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Coins, ArrowRight } from "lucide-react";

export function ScholarshipForm() {
  const [formData, setFormData] = useState({
    income: "",
    category: "general",
    percentage: "",
    state: "kerala",
    course: "engineering",
  });

  const [results, setResults] = useState<any[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API response
    const mockScholarships = [
      { id: 1, name: "E-Grantz (Kerala Govt)", amount: "Tuition + Stipend", type: "State Government", match: "High Probability" },
      { id: 2, name: "AICTE Pragati Scholarship", amount: "₹50,000 / year", type: "Central Government", match: "For Girl Students" },
      { id: 3, name: "Adotzee Merit Scholarship", amount: "Up to 50% Tuition", type: "Private", match: "Based on 12th Marks" },
    ];
    setResults(mockScholarships);
  };

  return (
    <div className="space-y-8">
      <CardPremium className="bg-white/50 dark:bg-slate-900/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Annual Family Income (₹)</label>
              <input 
                type="number"
                placeholder="e.g. 250000"
                value={formData.income}
                onChange={(e) => setFormData({...formData, income: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="ews">EWS (Economically Weaker Section)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Plus Two Percentage</label>
              <input 
                type="number"
                placeholder="e.g. 85"
                value={formData.percentage}
                onChange={(e) => setFormData({...formData, percentage: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Target Course</label>
              <select 
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="engineering">Engineering</option>
                <option value="medical">Medical</option>
                <option value="arts">Arts & Science</option>
                <option value="diploma">Diploma</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" className="gap-2 bg-yellow-500 hover:bg-yellow-600 text-white w-full sm:w-auto">
              <Search className="w-4 h-4" /> Find Scholarships
            </Button>
          </div>
        </form>
      </CardPremium>

      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Eligible Scholarships & Aid</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((scholarship) => (
                <CardPremium key={scholarship.id} className="border-yellow-200/50 dark:border-yellow-900/30">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                       <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 mb-2 inline-block">
                         {scholarship.type}
                       </span>
                       <h4 className="text-lg font-bold text-slate-900 dark:text-white">{scholarship.name}</h4>
                    </div>
                    <Coins className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="font-medium text-slate-800 dark:text-slate-200">Amount:</span> {scholarship.amount}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <span className="font-medium text-slate-800 dark:text-slate-200">Condition:</span> {scholarship.match}
                  </div>
                  <Button variant="outline" className="w-full gap-2 border-yellow-200 text-yellow-700 hover:bg-yellow-50 dark:border-yellow-800 dark:text-yellow-400 dark:hover:bg-yellow-900/20">
                    Apply or Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardPremium>
              ))}
            </div>

            <CTABlock 
              title="Need Education Loan Assistance?"
              description="If scholarships don't cover everything, our experts can guide you through securing zero-interest or low-interest education loans."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
