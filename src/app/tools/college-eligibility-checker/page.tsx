import { Metadata } from "next";
import { PremiumToolLayout } from "@/components/tools/shared/premium-tool-layout";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { PremiumEligibilityEngine } from "@/components/tools/college-eligibility/premium-eligibility-engine";

export const metadata: Metadata = {
  title: "College Eligibility Checker | Check Admission Criteria | Adotzee",
  description: "Instantly check your eligibility for top colleges and courses based on your board marks, entrance scores, and academic profile.",
  alternates: {
    canonical: "/tools/college-eligibility-checker",
  },
  openGraph: {
    title: "College Eligibility Checker | Check Admission Criteria | Adotzee",
    description: "Check your eligibility for top colleges based on your marks.",
    url: "https://adotzee.com/tools/college-eligibility-checker",
    type: "website",
  }
};

export default function CollegeEligibilityCheckerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "College Eligibility Checker",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Calculate admission eligibility for various colleges and universities.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Adotzee"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which College Can I Get?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your college options depend on your 12th percentage, entrance exam scores (like KEAM, NEET, or CUET), and category reservations. Our tool cross-references your profile with historical cut-offs to suggest probable colleges."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "Which College Can I Get?",
      answer: "Your chances depend on multiple factors: board marks, entrance exams, and your category. By entering your academic details, our checker estimates the tier of colleges and specific courses you are eligible for."
    },
    {
      question: "Are these eligibility predictions guaranteed?",
      answer: "No. Eligibility rules and cut-offs change annually. This tool provides a highly educated estimate based on previous year trends and current admission guidelines to help you narrow down your options."
    }
  ];

  const understandingContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Understanding Admissions</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          Navigating college admissions can be overwhelming due to varying criteria across institutions. While some universities admit strictly based on board exam percentages, others require specific entrance tests or a combination of both.
        </p>
      </div>
      <div>
        <p className="text-slate-600 leading-relaxed font-medium">
          Our Eligibility Checker simplifies this process. By analyzing your academic background against a vast database of college requirements, it provides a curated list of institutions where you meet the cut-off criteria.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <PremiumToolLayout
        title="College Eligibility Checker"
        subtitle="Stop guessing. Discover exactly which colleges and courses you qualify for based on your academic profile."
        trustSignals={[
          "100% Free",
          "500+ Colleges",
          "Instant Match",
          "Updated Cut-offs"
        ]}
        understandingContent={understandingContent}
        faqs={faqs}
        relatedTools={[
          { title: "Kerala Plus Two Percentage Calculator", href: "/tools/plus-two-percentage-calculator" },
          { title: "Scholarship Checker", href: "/tools/scholarship-checker" }
        ]}
      >
        <PremiumEligibilityEngine />
      </PremiumToolLayout>
    </>
  );
}
