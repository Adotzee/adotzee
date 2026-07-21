"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, Compass, Award, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    title: "Career Aptitude Test",
    description: "Discover the best career paths based on your strengths and interests.",
    icon: Compass,
    href: "/tools/career-aptitude-test",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "College Eligibility Checker",
    description: "Check if you meet the admission criteria for top colleges.",
    icon: Award,
    href: "/tools/college-eligibility-checker",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
  },
  {
    title: "+2 Percentage Calculator",
    description: "Quickly calculate your board exam percentage.",
    icon: Percent,
    href: "/tools/plus-two-percentage-calculator",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "=LBS Rank Predictor",
    description: "Estimate your rank for professional courses in Kerala.",
    icon: Calculator,
    href: "/tools/lbs-rank-calculator",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export function StudentToolsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Free Student <span className="text-blue-600">Tools</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Make informed decisions about your future with our suite of intelligent calculators and career tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={tool.href} className="block group h-full">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${tool.bgColor} group-hover:scale-110 transition-transform`}>
                    <tool.icon className={`w-7 h-7 ${tool.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {tool.description}
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center text-sm">
                    Try now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tools">
            <Button variant="outline" className="rounded-full text-slate-700 px-8 py-6 text-base font-bold border-2">
              View All Tools
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
