import { Metadata } from "next";
import { PremiumToolLayout } from "@/components/tools/shared/premium-tool-layout";
import { PremiumCalculatorEngine } from "@/components/tools/percentage-calculator/premium-calculator-engine";
import { SchemaMarkup } from "@/components/seo/schema-markup";

export const metadata: Metadata = {
  title: "Kerala Plus Two Percentage Calculator | Calculate HSE Marks Online | Adotzee",
  description: "Accurately calculate your Kerala HSE Plus Two board exam percentage. Get fast, reliable results for science, commerce, and humanities streams to plan your higher education.",
  alternates: {
    canonical: "/tools/plus-two-percentage-calculator",
  },
  openGraph: {
    title: "Kerala Plus Two Percentage Calculator | Calculate HSE Marks Online | Adotzee",
    description: "Accurately calculate your Kerala HSE Plus Two board exam percentage.",
    url: "https://adotzee.com/tools/plus-two-percentage-calculator",
    type: "website",
  }
};

export default function PlusTwoPercentageCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kerala Plus Two Percentage Calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Calculate Kerala HSE Plus Two board exam percentage.",
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
        "name": "How do I calculate Kerala Plus Two percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate your Kerala Plus Two percentage, add the marks obtained in all six subjects and divide the total by the maximum possible marks (usually 600 or 1200), then multiply by 100."
        }
      },
      {
        "@type": "Question",
        "name": "What is the formula for Kerala HSE percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Percentage = (Total Marks Obtained / Total Maximum Marks) × 100."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How do I calculate Kerala Plus Two percentage?",
      answer: "To calculate your Kerala Plus Two percentage, you need to add the total marks obtained in your six subjects (including languages and core subjects) and divide it by the maximum possible marks. Multiply the result by 100 to get your percentage."
    },
    {
      question: "What is the formula for Kerala HSE percentage?",
      answer: "The formula is: Percentage = (Total Marks Obtained / Total Maximum Marks) × 100. For instance, if you scored 1050 out of 1200, your percentage is (1050 / 1200) × 100 = 87.5%."
    },
    {
      question: "Are Plus One marks included in the final Plus Two percentage?",
      answer: "Yes, the final Kerala HSE result is a combined total of your Plus One and Plus Two marks for each subject."
    }
  ];

  const examples = (
    <div className="space-y-4">
      <p><strong>Example: Science Stream Calculation</strong></p>
      <ul className="list-disc pl-5 space-y-2">
        <li>English: 180 / 200</li>
        <li>Second Language: 190 / 200</li>
        <li>Physics: 175 / 200</li>
        <li>Chemistry: 185 / 200</li>
        <li>Mathematics: 190 / 200</li>
        <li>Biology: 180 / 200</li>
      </ul>
      <p>Total Obtained: 1100</p>
      <p>Total Maximum: 1200</p>
      <p><strong>Percentage: (1100 / 1200) × 100 = 91.67%</strong></p>
    </div>
  );

  const understandingContent = (
    <>
      <p>
        The Directorate of Higher Secondary Education (DHSE) Kerala evaluates students based on a combined score from both Plus One (Class 11) and Plus Two (Class 12).
        The maximum marks for a subject typically vary between 100 and 200 depending on whether it includes practical examinations.
      </p>
      <p className="mt-4">
        Understanding your precise percentage is crucial as it heavily influences your eligibility for various higher education avenues, including engineering (KEAM), medical (NEET), and nursing/paramedical admissions through LBS.
      </p>
    </>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <PremiumToolLayout
        title="Kerala Plus Two Percentage Calculator"
        subtitle="Trusted by thousands of students every admission season. Calculate your exact Kerala HSE percentage instantly."
        understandingContent={understandingContent}
        examples={examples}
        faqs={faqs}
        relatedTools={[
          { title: "LBS Rank Calculator", href: "/tools/lbs-rank-calculator" },
          { title: "Career Aptitude Test", href: "/tools/career-aptitude-test" },
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" }
        ]}
      >
        <PremiumCalculatorEngine />
      </PremiumToolLayout>
    </>
  );
}
