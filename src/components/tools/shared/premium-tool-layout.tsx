import React from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { cn } from "@/lib/utils";

export interface FAQ {
  question: string;
  answer: React.ReactNode;
}

export interface PremiumToolLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  understandingContent?: React.ReactNode;
  examples?: React.ReactNode;
  faqs?: FAQ[];
  relatedTools?: { title: string; href: string; desc?: string }[];
  trustSignals?: string[];
}

export function PremiumToolLayout({
  title,
  subtitle,
  children,
  understandingContent,
  examples,
  faqs,
  relatedTools,
  trustSignals = [
    "Kerala HSE Formula",
    "Instant Result",
    "Mobile Friendly",
    "Updated for 2026 Guidelines"
  ],
}: PremiumToolLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumbs items={[
                { label: "Student Tools", href: "/tools" },
                { label: title }
            ]} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                {signal}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Tool Area */}
      <section className="px-4 md:px-6 relative z-20 -mt-4 pb-24">
        <div className="max-w-[1000px] mx-auto">
          {children}
        </div>
      </section>

      {/* SEO & Educational Content */}
      {(understandingContent || examples || faqs) && (
        <section className="bg-white border-t border-slate-100 py-24 px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-24">
            
            {understandingContent && (
              <article className="prose prose-lg prose-slate max-w-none">
                <h2 className="flex items-center gap-3 text-3xl font-black text-slate-900 mb-8 tracking-tight">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                  Understanding the Calculation
                </h2>
                <div className="text-slate-600 leading-relaxed font-medium">
                  {understandingContent}
                </div>
              </article>
            )}

            {examples && (
              <article className="prose prose-lg prose-slate max-w-none">
                <h2 className="flex items-center gap-3 text-3xl font-black text-slate-900 mb-8 tracking-tight">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  Example Calculations
                </h2>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-slate-600">
                  {examples}
                </div>
              </article>
            )}

            {faqs && faqs.length > 0 && (
              <div>
                <h2 className="flex items-center gap-3 text-3xl font-black text-slate-900 mb-8 tracking-tight">
                  <HelpCircle className="w-8 h-8 text-amber-500" />
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                      <div className="text-slate-600 font-medium leading-relaxed">{faq.answer}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* Related Tools Bottom Navigation */}
      {relatedTools && relatedTools.length > 0 && (
        <section className="bg-slate-50 py-24 px-4 md:px-6 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight text-center">Continue Exploring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTools.map((tool, idx) => (
                <Link href={tool.href} key={idx} className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{tool.title}</h3>
                  <p className="text-slate-500 text-sm font-medium flex items-center">
                    Try it out <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
