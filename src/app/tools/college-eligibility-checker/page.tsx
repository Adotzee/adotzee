import { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/shared/tool-page-layout";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { CollegeEligibilityForm } from "@/components/tools/college-eligibility/eligibility-form";

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
    <>
      <p>
        Navigating college admissions can be overwhelming due to varying criteria across institutions. While some universities admit strictly based on board exam percentages, others require specific entrance tests or a combination of both.
      </p>
      <p>
        Our Eligibility Checker simplifies this process. By analyzing your academic background against a vast database of college requirements, it provides a curated list of institutions where you meet the cut-off criteria.
      </p>
    </>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <ToolPageLayout
        title="College Eligibility Checker"
        subtitle="Stop guessing. Discover exactly which colleges and courses you qualify for based on your academic profile."
        understandingContent={understandingContent}
        faqs={faqs}
        relatedTools={[
          { title: "Kerala Plus Two Percentage Calculator", href: "/tools/plus-two-percentage-calculator" },
          { title: "Scholarship Checker", href: "/tools/scholarship-checker" }
        ]}
      >
        <CollegeEligibilityForm />
      </ToolPageLayout>
    </>
  );
}
