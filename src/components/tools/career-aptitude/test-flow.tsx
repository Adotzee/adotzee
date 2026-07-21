import React, { useState } from "react";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { AptitudeResultView } from "./result-view";
import { ArrowRight, ArrowLeft, Lock, ShieldCheck, Mail, User, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample enterprise questions - typically fetched from API
const QUESTIONS = [
  { id: 1, text: "I enjoy solving complex mathematical puzzles and analytical problems.", category: "Logical" },
  { id: 2, text: "I like designing interfaces and making things look beautiful.", category: "Creative" },
  { id: 3, text: "I am fascinated by how machines and computer systems work.", category: "Technology" },
  { id: 4, text: "I find it easy to explain difficult concepts to others.", category: "Communication" },
  { id: 5, text: "I prefer leading a team rather than working alone.", category: "Leadership" },
];

const OPTIONS = [
  { value: 1, label: "Strongly Disagree", color: "hover:border-rose-400 hover:bg-rose-50 hover:text-rose-700" },
  { value: 2, label: "Disagree", color: "hover:border-orange-400 hover:bg-orange-50 hover:text-orange-700" },
  { value: 3, label: "Neutral", color: "hover:border-slate-400 hover:bg-slate-50 hover:text-slate-700" },
  { value: 4, label: "Agree", color: "hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700" },
  { value: 5, label: "Strongly Agree", color: "hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700" },
];

export function TestFlow() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  // Lead Generation Gate
  const [showLeadGate, setShowLeadGate] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "", state: "" });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = (currentIndex / QUESTIONS.length) * 100;

  const handleSelect = (val: number) => {
    setAnswers({ ...answers, [currentQuestion.id]: val });
    
    setTimeout(() => {
      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowLeadGate(true); // Trigger the lead gate when test completes
      }
    }, 300);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    // Simulate API call to save lead
    setTimeout(() => {
      setIsSubmittingLead(false);
      setLeadSubmitted(true);
      setShowLeadGate(false);
    }, 1200);
  };

  if (!started) {
    return (
      <CardPremium className="text-center py-16 px-6 max-w-3xl mx-auto shadow-2xl border-indigo-500/10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 mb-6">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 tracking-tight">Enterprise Career Aptitude System</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Take our scientifically designed assessment to uncover your core strengths, cognitive abilities, and perfect career alignment. 
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto text-left">
          {["Logical Reasoning", "Creative Aptitude", "Technical Skill", "Leadership"].map(trait => (
            <div key={trait} className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{trait}</span>
            </div>
          ))}
        </div>
        <Button onClick={() => setStarted(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-10 h-14 text-lg font-bold shadow-lg shadow-indigo-200 transition-all">
          Start Assessment <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </CardPremium>
    );
  }

  // --- 🔒 LEAD GENERATION GATE ---
  if (showLeadGate && !leadSubmitted) {
    return (
      <CardPremium className="max-w-xl mx-auto overflow-hidden shadow-2xl border-indigo-500/20 p-1">
        <div className="bg-white rounded-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 mb-6">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Your Report is Ready!</h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              We've analyzed your responses. Enter your details below to unlock your personalized 
              <strong> Enterprise Career Aptitude Report</strong>.
            </p>
          </div>

          <form onSubmit={handleLeadSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input id="name" required className="pl-10 h-12 bg-slate-50 border-slate-200 rounded-xl" placeholder="John Doe" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-slate-500">Mobile Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input id="phone" type="tel" required className="pl-10 h-12 bg-slate-50 border-slate-200 rounded-xl" placeholder="+91 98765 43210" value={leadData.phone} onChange={e => setLeadData({...leadData, phone: e.target.value})} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-xs font-bold uppercase tracking-widest text-slate-500">State</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input id="state" required className="pl-10 h-12 bg-slate-50 border-slate-200 rounded-xl" placeholder="Kerala" value={leadData.state} onChange={e => setLeadData({...leadData, state: e.target.value})} />
                </div>
              </div>
            </div>
            <div className="space-y-2 pb-4">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input id="email" type="email" required className="pl-10 h-12 bg-slate-50 border-slate-200 rounded-xl" placeholder="john@example.com" value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} />
              </div>
            </div>

            <Button type="submit" disabled={isSubmittingLead} className="w-full bg-indigo-900 hover:bg-indigo-800 text-white h-12 rounded-xl font-bold shadow-md">
              {isSubmittingLead ? "Generating Report..." : "Unlock My Report Now"}
            </Button>
            
            <p className="text-center text-xs text-slate-400 mt-4 font-medium flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Your data is secure. We respect your privacy.
            </p>
          </form>
        </div>
      </CardPremium>
    );
  }

  // --- 📊 RESULTS VIEW ---
  if (leadSubmitted) {
    return <AptitudeResultView results={answers} />;
  }

  // --- 🧠 ASSESSMENT FLOW ---
  return (
    <CardPremium className="max-w-2xl mx-auto overflow-hidden p-6 md:p-10 shadow-2xl border-indigo-500/10">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
        <span>Question {currentIndex + 1} of {QUESTIONS.length}</span>
        <span className="text-indigo-500">{Math.round(progress)}% Completed</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="min-h-[280px]"
        >
          <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-8 text-center leading-tight">
            "{currentQuestion.text}"
          </h3>

          <div className="flex flex-col space-y-3">
            {OPTIONS.map((opt) => {
              const isSelected = answers[currentQuestion.id] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleSelect(opt.value)}
                  className={cn(
                    "w-full text-left px-6 py-4 rounded-xl border-2 transition-all duration-200 font-bold",
                    isSelected 
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm" 
                      : `border-slate-100 bg-white text-slate-600 ${opt.color}`
                  )}
                >
                  <div className="flex items-center justify-between">
                    {opt.label}
                    <div className={cn("w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors", isSelected ? "border-indigo-600" : "border-slate-200")}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between pt-6 border-t border-slate-100">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="text-slate-500 font-bold rounded-xl"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Previous
        </Button>
      </div>
    </CardPremium>
  );
}
