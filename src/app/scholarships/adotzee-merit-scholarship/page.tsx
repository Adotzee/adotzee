import { Metadata } from "next";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { CTABlock } from "@/components/shared/cta-block";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { GraduationCap, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Banknote, Building } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Adotzee Merit Scholarship | Private Financial Assistance for Students",
  description: "Apply for the Adotzee Merit Scholarship, a private initiative offering up to 50% tuition assistance for deserving students enrolling in partner institutions.",
  openGraph: {
    title: "Adotzee Merit Scholarship | Up to 50% Tuition Assistance",
    description: "Private financial assistance for deserving students enrolling in Adotzee partner institutions.",
  }
};

export default function AdotzeeMeritScholarshipPage() {
  const faqs = [
    {
      question: "Is this a government scholarship?",
      answer: "No. The Adotzee Merit Scholarship is a private scholarship funded exclusively by Adotzee and participating partner institutions. It is not affiliated with any state or central government schemes."
    },
    {
      question: "Who is eligible to apply?",
      answer: "Students with strong academic records (high Plus Two percentages or LBS ranks) who are seeking admission to higher education courses through Adotzee's curated partner network."
    },
    {
      question: "What does the scholarship cover?",
      answer: "It provides up to 50% tuition fee assistance. The exact percentage depends on the specific partner college and the student's academic merit score calculated during the application."
    },
    {
      question: "Can I combine this with E-Grantz?",
      answer: "Yes, because this is a private institutional scholarship, it can often be combined with government schemes like E-Grantz, provided the specific college allows it."
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
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
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumbs items={[
                { label: "Scholarships", href: "/scholarships" },
                { label: "Adotzee Merit" }
            ]} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 border border-amber-200 text-sm font-bold mb-6">
            <AlertTriangle className="w-4 h-4" /> Applications Opening Soon
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Adotzee Merit Scholarship
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
            A private initiative rewarding academic excellence with up to 50% tuition assistance at our partner colleges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-8 text-lg font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-2xl transition-all hover:scale-105 active:scale-95 disabled:opacity-50" disabled>
              Apply Now (Coming Soon)
            </Button>
            <Link href="/contact">
              <Button className="h-14 px-8 text-lg font-bold bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                Talk to Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Transparency Notice */}
      <section className="px-4 md:px-6 max-w-4xl mx-auto mb-16">
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
          <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
            <ShieldAlert className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Private Scholarship Initiative</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              The Adotzee Merit Scholarship is a private scholarship offered exclusively by Adotzee and participating partner institutions. <strong>It is completely independent of AICTE, UGC, or any State/Central Government scholarship schemes.</strong> Eligibility, availability, and award amounts are determined solely by Adotzee.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-blue-600" /> Scholarship Overview
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                At Adotzee, we believe that financial constraints should never stand in the way of quality education. The Adotzee Merit Scholarship is designed to reward academic excellence and provide substantial financial relief to students enrolling in our curated network of partner colleges across India.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <Banknote className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Up to 50% Assistance</h3>
                <p className="text-slate-500 font-medium">Direct tuition fee waivers applied at the time of admission in participating institutions.</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <Building className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Extensive Network</h3>
                <p className="text-slate-500 font-medium">Valid across a wide range of Nursing, Paramedical, Engineering, and Arts colleges.</p>
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
              <h3 className="text-3xl font-black mb-8 relative z-10">Eligibility Criteria</h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-lg mb-1">Academic Merit</strong>
                    <span className="text-slate-400 font-medium">Strong academic performance in Plus Two / 12th Grade examinations. Use our <Link href="/tools/plus-two-percentage-calculator" className="text-blue-400 hover:underline">Percentage Calculator</Link> to check your score.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-lg mb-1">Platform Enrollment</strong>
                    <span className="text-slate-400 font-medium">Confirmed admission or an ongoing application process actively managed through the Adotzee platform.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-lg mb-1">Partner College</strong>
                    <span className="text-slate-400 font-medium">Enrollment strictly limited to an eligible participating partner college.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:w-full">
            <div className="sticky top-32">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-xl mb-6">
                <h3 className="font-black text-2xl text-slate-900 mb-6">Quick Facts</h3>
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Provider</div>
                    <div className="text-slate-900 font-bold text-lg">Adotzee Platform</div>
                  </div>
                  <div className="border-b border-slate-100 pb-4">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Scholarship Type</div>
                    <div className="text-slate-900 font-bold text-lg">Private Assistance</div>
                  </div>
                  <div className="border-b border-slate-100 pb-4">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Amount</div>
                    <div className="text-emerald-600 font-black text-2xl">Up to 50%</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Status</div>
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-bold text-sm">Opening Soon</div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Button className="w-full h-14 text-lg bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold" disabled>
                    Apply Now
                  </Button>
                  <p className="text-sm text-center text-slate-500 font-medium">Applications are currently closed. Check back soon.</p>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-blue-50 p-6 rounded-[2rem] border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-4">Preparation Tools</h4>
                <div className="space-y-3">
                  <Link href="/tools/plus-two-percentage-calculator" className="flex items-center text-blue-700 hover:text-blue-900 font-semibold text-sm group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Calculate +2 Percentage
                  </Link>
                  <Link href="/tools/kerala-lbs-rank-calculator" className="flex items-center text-blue-700 hover:text-blue-900 font-semibold text-sm group">
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Estimate LBS Rank
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Global CTA Block */}
      <CTABlock />
    </div>
  );
}
