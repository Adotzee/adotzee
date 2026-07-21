import { Metadata } from "next";
import { PremiumToolLayout } from "@/components/tools/shared/premium-tool-layout";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { PremiumScholarshipEngine } from "@/components/tools/scholarships/premium-scholarship-engine";

export const metadata: Metadata = {
  title: "Scholarship Checker | Find Educational Grants | Adotzee",
  description: "Check your eligibility for government, private, and merit-based scholarships in India. Enter your profile to discover financial aid for your college education.",
  alternates: {
    canonical: "/tools/scholarship-checker",
  },
  openGraph: {
    title: "Scholarship Checker | Find Educational Grants | Adotzee",
    description: "Check your eligibility for various scholarships in India.",
    url: "https://adotzee.com/tools/scholarship-checker",
    type: "website",
  }
};

export default function ScholarshipCheckerPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Scholarship Checker",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "A tool to check student eligibility for various scholarships.",
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
        "name": "What types of scholarships are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are merit-based (based on marks), means-based (based on family income), and category-based scholarships available from both government and private organizations."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "What types of scholarships are available?",
      answer: "Scholarships generally fall into three categories: Merit-based (rewarding high academic achievement), Means-based (assisting students from lower-income families), and Category-based (supporting specific communities or demographics)."
    },
    {
      question: "When should I apply for scholarships?",
      answer: "Most government scholarships open their portals between July and October. However, private and institutional scholarships have varying deadlines throughout the year. It's best to check your eligibility early."
    }
  ];

  const understandingContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Understanding Financial Aid</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          Higher education can be a significant financial investment, but lack of funds should never be a barrier to achieving your academic dreams. Millions of rupees in scholarships go unclaimed every year simply because students are unaware they exist.
        </p>
      </div>
      <div>
        <p className="text-slate-600 leading-relaxed font-medium">
          Our Scholarship Checker evaluates your academic performance, financial background, and chosen course to match you with available state, central, and private scholarship schemes that can help fund your education.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <PremiumToolLayout
        title="Scholarship Checker"
        subtitle="Don't let finances hold you back. Discover government and private scholarships you are eligible to claim."
        trustSignals={[
          "100% Free Service",
          "Government Schemes",
          "Private Grants",
          "Instant Matching"
        ]}
        understandingContent={understandingContent}
        faqs={faqs}
        relatedTools={[
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" },
          { title: "Career Aptitude Test", href: "/tools/career-aptitude-test" }
        ]}
      >
        <PremiumScholarshipEngine />
      </PremiumToolLayout>
    </>
  );
}
