import React from "react";
import { CheckCircle2, Info, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardPremium } from "@/components/ui/card-premium";

export interface FAQ {
  question: string;
  answer: React.ReactNode;
}

export interface ToolPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  understandingTitle?: string;
  understandingContent?: React.ReactNode;
  examples?: React.ReactNode;
  faqs?: FAQ[];
  relatedTools?: { title: string; href: string }[];
  trustSignals?: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
}

export function ToolPageLayout({
  title,
  subtitle,
  children,
  understandingTitle = "Understanding the Calculation",
  understandingContent,
  examples,
  faqs,
  relatedTools,
  trustSignals = [
    "Educational guidance provided by Adotzee",
    "Calculator results are estimates and should be verified with official authorities where required",
  ],
  ctaTitle = "Need Expert Guidance for College Admissions?",
  ctaDescription = "Our admission counsellors can help you find the best colleges and courses matching your profile.",
  ctaButtonText = "Talk to an Admission Counsellor",
  ctaButtonHref = "/contact",
}: ToolPageLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-950 to-neutral-950 -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Main Content & Calculator */}
      <section className="px-4 md:px-6 relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto">
          {/* Calculator Container */}
          <div className="mb-16">
            <CardPremium gradient className="border-indigo-500/20 shadow-2xl shadow-indigo-500/10 p-1 md:p-2">
              <div className="bg-neutral-900/80 rounded-xl p-6 md:p-8 backdrop-blur-xl border border-white/5">
                {children}
              </div>
            </CardPremium>
          </div>

          {/* Trust Signals */}
          {trustSignals && trustSignals.length > 0 && (
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center mb-16 text-sm text-neutral-400">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Educational Content */}
            <div className="lg:col-span-2 space-y-12">
              {understandingContent && (
                <article className="prose prose-invert prose-indigo max-w-none">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
                    <Info className="w-6 h-6 text-indigo-400" />
                    {understandingTitle}
                  </h2>
                  <div className="text-neutral-300 leading-relaxed space-y-4">
                    {understandingContent}
                  </div>
                </article>
              )}

              {examples && (
                <article className="prose prose-invert prose-indigo max-w-none">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    Example Calculations
                  </h2>
                  <div className="text-neutral-300 leading-relaxed bg-neutral-900/50 p-6 rounded-2xl border border-white/5">
                    {examples}
                  </div>
                </article>
              )}

              {faqs && faqs.length > 0 && (
                <div className="space-y-6">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-white">
                    <HelpCircle className="w-6 h-6 text-amber-400" />
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5">
                        <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                        <div className="text-neutral-400 leading-relaxed">{faq.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8">
              {/* CTA Widget */}
              <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-3xl p-6 border border-indigo-500/20 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{ctaTitle}</h3>
                <p className="text-neutral-300 text-sm mb-6 relative z-10">{ctaDescription}</p>
                <Button asChild className="w-full relative z-10 bg-white text-indigo-950 hover:bg-neutral-200">
                  <Link href={ctaButtonHref}>
                    {ctaButtonText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Related Tools */}
              {relatedTools && relatedTools.length > 0 && (
                <div className="bg-neutral-900/50 rounded-3xl p-6 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-4">Related Tools</h3>
                  <ul className="space-y-3">
                    {relatedTools.map((tool, idx) => (
                      <li key={idx}>
                        <Link href={tool.href} className="flex items-center gap-3 text-neutral-400 hover:text-indigo-400 transition-colors group text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-indigo-400 transition-colors" />
                          {tool.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
