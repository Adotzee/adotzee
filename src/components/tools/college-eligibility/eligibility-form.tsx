"use client";

import React, { useState } from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { CTABlock } from "@/components/shared/cta-block";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Building2, CheckCircle2 } from "lucide-react";

export function CollegeEligibilityForm() {
  const [formData, setFormData] = useState({
    board: "kerala",
    percentage: "",
    course: "engineering",
    state: "kerala",
    city: "kochi",
    budget: "medium",
  });

  const [results, setResults] = useState<any[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API response based on logic
    const mockColleges = [
      { id: 1, name: "Model Engineering College", location: "Kochi", match: "Highly Suitable" },
      { id: 2, name: "Rajagiri School of Engineering", location: "Kochi", match: "Moderately Suitable" },
      { id: 3, name: "Muthoot Institute of Technology", location: "Ernakulam", match: "Reach College" },
    ];
    setResults(mockColleges);
  };

  return (
    <div className="space-y-8">
      <CardPremium className="bg-white/50 dark:bg-slate-900/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Board of Education</label>
              <select 
                value={formData.board}
                onChange={(e) => setFormData({...formData, board: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="kerala">Kerala State Board</option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Plus Two Percentage</label>
              <input 
                type="number"
                placeholder="e.g. 85"
                value={formData.percentage}
                onChange={(e) => setFormData({...formData, percentage: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Preferred Course</label>
              <select 
                value={formData.course}
                onChange={(e) => setFormData({...formData, course: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="engineering">B.Tech / Engineering</option>
                <option value="medical">MBBS / Medical</option>
                <option value="arts">BA / Arts & Humanities</option>
                <option value="commerce">B.Com / Commerce</option>
                <option value="science">B.Sc / Science</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Preferred City</label>
              <select 
                value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="trivandrum">Trivandrum</option>
                <option value="kochi">Kochi</option>
                <option value="kozhikode">Kozhikode</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" className="gap-2 bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
              <Search className="w-4 h-4" /> Check Eligibility
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
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Your Eligible Colleges</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((college) => (
                <CardPremium key={college.id} className="flex flex-col h-full border-green-100 dark:border-green-900/30">
                  <div className="mb-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${college.match === 'Highly Suitable' ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400' : college.match === 'Moderately Suitable' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400'}`}>
                      {college.match}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex-grow">{college.name}</h4>
                  <div className="flex items-center text-sm text-slate-500 mb-6">
                    <MapPin className="w-4 h-4 mr-1" /> {college.location}
                  </div>
                  <Button variant="outline" className="w-full gap-2 border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-400 dark:hover:bg-green-900/20">
                    <CheckCircle2 className="w-4 h-4" /> Apply Now
                  </Button>
                </CardPremium>
              ))}
            </div>

            <CTABlock 
              title="Need Help Choosing?"
              description="Talk to our admission experts to finalize the best college for your profile and secure your admission."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
