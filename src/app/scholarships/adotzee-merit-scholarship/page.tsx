import { Metadata } from "next";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { CTABlock } from "@/components/shared/cta-block";
import { CardPremium } from "@/components/ui/card-premium";
import { Button } from "@/components/ui/button";
import { GraduationCap, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Adotzee Merit Scholarship | Private Financial Assistance for Students",
  description: "Apply for the Adotzee Merit Scholarship, a private initiative offering tuition assistance for deserving students enrolling in partner institutions.",
  openGraph: {
    title: "Adotzee Merit Scholarship",
    description: "Private financial assistance for deserving students enrolling in partner institutions.",
  }
};

export default function AdotzeeMeritScholarshipPage() {
  const faqs = [
    {
      question: "Is this a government scholarship?",
      answer: "No. The Adotzee Merit Scholarship is a private scholarship funded by Adotzee and participating partner institutions. It is not affiliated with any state or central government schemes."
    },
    {
      question: "Who is eligible to apply?",
      answer: "Students with strong academic records who are seeking admission to higher education courses through Adotzee's partner network."
    },
    {
      question: "What does the scholarship cover?",
      answer: "It provides up to 50% tuition fee assistance, depending on the specific partner college and the student's academic merit."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 pb-20">
      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-950 to-neutral-950 -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-sm font-semibold mb-4">
            <AlertTriangle className="w-4 h-4" /> Applications Opening Soon
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Adotzee Merit Scholarship
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            A private initiative to support deserving students in achieving their higher education goals through our partner network.
          </p>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="px-4 md:px-6 relative z-10 max-w-4xl mx-auto -mt-4 mb-16">
        <div className="bg-indigo-950/50 border border-indigo-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="bg-indigo-500/20 p-3 rounded-full shrink-0">
            <ShieldAlert className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Private Scholarship Initiative</h3>
            <p className="text-sm text-indigo-200 leading-relaxed">
              The Adotzee Merit Scholarship is a private scholarship offered exclusively by Adotzee and participating partner institutions. <strong>It is completely independent of AICTE, UGC, or any State/Central Government scholarship schemes.</strong> Eligibility, availability, and award amounts are determined solely by Adotzee.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-10">
            <article className="prose prose-invert prose-indigo max-w-none">
              <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-indigo-400" /> Scholarship Overview
              </h2>
              <p>
                At Adotzee, we believe that financial constraints should never stand in the way of quality education. The Adotzee Merit Scholarship is designed to reward academic excellence and provide financial relief to students enrolling in our curated network of partner colleges.
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span>Strong academic performance in Plus Two / 12th Grade examinations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span>Confirmed admission or ongoing application process through Adotzee's platform.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                  <span>Enrollment in an eligible participating partner college.</span>
                </li>
              </ul>
            </article>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5">
                  <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
                  <div className="text-neutral-400 leading-relaxed">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <CardPremium className="p-6 border-indigo-500/20 bg-neutral-900/80">
              <h3 className="font-bold text-xl text-white mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Provider</div>
                  <div className="text-white font-medium">Adotzee Platform</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Scholarship Type</div>
                  <div className="text-white font-medium">Private Assistance</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Amount</div>
                  <div className="text-emerald-400 font-bold">Up to 50% Tuition</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase font-semibold">Status</div>
                  <div className="text-amber-400 font-bold">Opening Soon</div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" disabled>
                  Apply Now
                </Button>
                <p className="text-xs text-center text-neutral-500 mt-3">Applications are currently closed. Check back soon.</p>
              </div>
            </CardPremium>
          </div>
        </div>
      </section>
      
      <div className="mt-20">
        <CTABlock 
          title="Explore Top Colleges" 
          description="Find colleges that match your profile and discover exclusive private scholarship opportunities." 
        />
      </div>
    </div>
  );
}
