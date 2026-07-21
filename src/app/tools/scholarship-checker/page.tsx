import { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/shared/tool-page-layout";
import { ScholarshipForm } from "@/components/tools/scholarships/scholarship-form";
import { SchemaMarkup } from "@/components/seo/schema-markup";

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
    <>
      <p>
        Higher education can be a significant financial investment, but lack of funds should never be a barrier to achieving your academic dreams. Millions of rupees in scholarships go unclaimed every year simply because students are unaware they exist.
      </p>
      <p>
        Our Scholarship Checker evaluates your academic performance, financial background, and chosen course to match you with available state, central, and private scholarship schemes that can help fund your education.
      </p>
    </>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <ToolPageLayout
        title="Scholarship Checker"
        subtitle="Don't let finances hold you back. Discover government and private scholarships you are eligible to claim."
        understandingContent={understandingContent}
        faqs={faqs}
        relatedTools={[
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" },
          { title: "Career Aptitude Test", href: "/tools/career-aptitude-test" }
        ]}
      >
        <ScholarshipForm />
      </ToolPageLayout>
    </>
  );
}
