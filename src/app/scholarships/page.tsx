import { Metadata } from "next";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { CTABlock } from "@/components/shared/cta-block";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { GraduationCap, ArrowRight, ShieldCheck, Banknote, Building2, Globe2, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Scholarships for Higher Education | Adotzee",
  description: "Discover government, private, and institutional scholarships. Find eligibility criteria and apply for financial assistance with Adotzee.",
  alternates: {
    canonical: "/scholarships",
  },
  openGraph: {
    title: "Scholarships for Higher Education | Adotzee",
    description: "Discover and apply for scholarships with Adotzee.",
    url: "https://adotzee.com/scholarships",
    type: "website",
  }
};

const scholarships = [
  {
    id: "adotzee-merit",
    name: "Adotzee Merit Scholarship",
    provider: "Adotzee Platform",
    category: "Private Scholarship",
    status: "Opening Soon",
    statusColor: "text-amber-600 bg-amber-50",
    eligibility: "Based on Plus Two merit & Adotzee partner enrollment",
    benefits: "Up to 50% Tuition Assistance",
    href: "/scholarships/adotzee-merit-scholarship",
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    featured: true
  },
  {
    id: "e-grantz",
    name: "E-Grantz 3.0",
    provider: "Government of Kerala",
    category: "State Scholarship",
    status: "Open",
    statusColor: "text-emerald-600 bg-emerald-50",
    eligibility: "SC/ST/OBC/OEC students studying post-matric courses",
    benefits: "Tuition fee waiver + Monthly stipend",
    href: "/contact", // Placeholder
    icon: <Building2 className="w-8 h-8 text-emerald-600" />,
    featured: false
  },
  {
    id: "nsp",
    name: "National Scholarship Portal (NSP)",
    provider: "Government of India",
    category: "Central Scholarship",
    status: "Check Portal",
    statusColor: "text-slate-600 bg-slate-100",
    eligibility: "Minority students, disabled students, single girl child, etc.",
    benefits: "Direct Benefit Transfer (DBT) up to ₹20,000/year",
    href: "/contact",
    icon: <Globe2 className="w-8 h-8 text-indigo-600" />,
    featured: false
  },
  {
    id: "sn-trust",
    name: "Institutional Merit Cum Means",
    provider: "Various Private Trusts",
    category: "Private Scholarship",
    status: "Varies",
    statusColor: "text-slate-600 bg-slate-100",
    eligibility: "Meritorious students from economically weaker sections",
    benefits: "Partial fee waivers",
    href: "/contact",
    icon: <Banknote className="w-8 h-8 text-rose-600" />,
    featured: false
  }
];

export default function ScholarshipsLandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Scholarships for Higher Education",
    "description": "Directory of government and private scholarships for Indian students.",
    "url": "https://adotzee.com/scholarships",
    "provider": {
      "@type": "Organization",
      "name": "Adotzee"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Adotzee Merit Scholarship?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a private scholarship funded by Adotzee and partner institutions offering up to 50% tuition assistance to deserving students."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply for multiple scholarships?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can apply for multiple scholarships. However, depending on government rules, you may only be allowed to avail the benefits of one central/state scholarship at a time. Private scholarships can often be combined."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Breadcrumbs items={[
                { label: "Scholarships" }
            ]} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Unlock Your Future with Financial Support
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Discover verified government, central, and private scholarships. Find exactly what you are eligible for and get expert assistance with your application.
          </p>
        </div>
      </section>

      {/* Scholarship Cards Directory */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Available Scholarships</h2>
            <p className="text-slate-500 font-medium">Browse opportunities categorized by provider and status.</p>
          </div>
          <Link href="/tools/scholarship-checker" className="hidden md:inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Use Scholarship Eligibility Checker <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {scholarships.map((sch) => (
            <div key={sch.id} className={`flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-[2rem] border transition-all hover:shadow-xl ${sch.featured ? 'bg-white border-blue-200 shadow-md ring-1 ring-blue-50' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}>
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
                  {sch.icon}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight">{sch.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${sch.statusColor}`}>
                    {sch.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-6">
                  <span>{sch.provider}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  <span>{sch.category}</span>
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Eligibility</p>
                    <p className="text-sm font-medium text-slate-700">{sch.eligibility}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Benefits</p>
                    <p className="text-sm font-bold text-emerald-600">{sch.benefits}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link href={sch.href} className="inline-flex w-full sm:w-auto items-center justify-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/tools/scholarship-checker" className="flex w-full items-center justify-center font-bold text-blue-600 bg-blue-50 py-4 rounded-2xl">
            Use Scholarship Eligibility Checker <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-white py-24 px-4 md:px-6 border-t border-slate-100 mt-12">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">How It Works</h2>
            <p className="text-lg text-slate-500 font-medium">The standard process for securing your scholarship through Adotzee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl mb-6">1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Check Eligibility</h3>
              <p className="text-slate-500 font-medium text-sm">Use our tools or talk to an expert to see which schemes apply to your profile.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl mb-6">2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Gather Documents</h3>
              <p className="text-slate-500 font-medium text-sm">Collect income certificates, mark lists, and allotment memos required for validation.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-black text-2xl mb-6">3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Apply & Track</h3>
              <p className="text-slate-500 font-medium text-sm">Submit the application through the correct portal and track its status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-24">
        <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">What is the Adotzee Merit Scholarship?</h3>
            <p className="text-slate-600 font-medium leading-relaxed">It is a private scholarship funded by Adotzee and partner institutions offering up to 50% tuition assistance to deserving students. It is completely independent of government schemes.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Can I apply for multiple scholarships?</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Yes, you can apply for multiple scholarships. However, depending on government rules, you may only be allowed to avail the benefits of one central/state scholarship at a time. Private scholarships can often be combined.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Do I need an income certificate?</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Yes, most government scholarships (like E-Grantz and NSP) require a valid income certificate issued by the competent authority to prove financial eligibility.</p>
          </div>
        </div>
      </section>

      {/* Redesigned CTA Section */}
      <CTABlock />
    </div>
  );
}
