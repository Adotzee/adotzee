import { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/shared/tool-page-layout";
import { LBSEngine } from "@/components/tools/lbs-rank-calculator/lbs-engine";
import { SchemaMarkup } from "@/components/seo/schema-markup";

export const metadata: Metadata = {
  title: "Kerala LBS Rank Calculator | Estimate Your Admission Rank | Adotzee",
  description: "Predict your Kerala LBS rank for BSc Nursing and Paramedical courses. Use our advanced calculator based on your Physics, Chemistry, Biology, and English marks.",
  alternates: {
    canonical: "/tools/kerala-lbs-rank-calculator",
  },
  openGraph: {
    title: "Kerala LBS Rank Calculator | Estimate Your Admission Rank | Adotzee",
    description: "Predict your Kerala LBS rank for BSc Nursing and Paramedical courses.",
    url: "https://adotzee.com/tools/kerala-lbs-rank-calculator",
    type: "website",
  }
};

export default function KeralaLBSRankCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kerala LBS Rank Calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Calculate Kerala LBS index marks and predict rank for nursing/paramedical admissions.",
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
        "name": "How is the LBS rank estimated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The LBS rank is estimated by calculating an 'Index Mark' based on your Plus Two marks in Physics, Chemistry, Biology, and English. The highest possible index mark determines the top rank."
        }
      },
      {
        "@type": "Question",
        "name": "What courses are covered under LBS Kerala?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LBS covers admissions for Professional Degree Courses in Nursing and Paramedical streams including BSc Nursing, BSc MLT, BPT, B.Sc. Optometry, etc."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How is the LBS index mark calculated?",
      answer: "Your LBS index mark is calculated out of a total format which gives maximum weightage to your core science subjects (Physics, Chemistry, Biology) along with your English marks in Plus Two."
    },
    {
      question: "Is this rank 100% accurate?",
      answer: "The rank provided by our calculator is an estimation based on historical data and current LBS guidelines. Actual ranks may vary slightly depending on the total number of applicants and their performance in a given year."
    }
  ];

  const examples = (
    <div className="space-y-4">
      <p><strong>Example: LBS Index Calculation</strong></p>
      <p>If you scored:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Physics: 180 / 200</li>
        <li>Chemistry: 185 / 200</li>
        <li>Biology: 190 / 200</li>
        <li>English: 175 / 200</li>
      </ul>
      <p>The system normalizes these marks to calculate a precise index score used for the state-wide rank list.</p>
    </div>
  );

  const understandingContent = (
    <>
      <p>
        The LBS Centre for Science and Technology handles the allotment for various professional degree courses in Nursing and Paramedical streams across Kerala. 
        Unlike KEAM (which has an entrance exam), LBS admissions are strictly based on merit derived from your Higher Secondary (Plus Two) marks.
      </p>
      <p>
        Predicting your rank early gives you a significant advantage in shortlisting colleges and preparing your options list during the centralized allotment process (CAP).
      </p>
    </>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <ToolPageLayout
        title="Kerala LBS Rank Calculator"
        subtitle="Estimate your LBS index score and rank for BSc Nursing & Paramedical admissions in Kerala."
        understandingContent={understandingContent}
        examples={examples}
        faqs={faqs}
        relatedTools={[
          { title: "Kerala Plus Two Percentage Calculator", href: "/tools/plus-two-percentage-calculator" },
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" }
        ]}
      >
        <LBSEngine />
      </ToolPageLayout>
    </>
  );
}
