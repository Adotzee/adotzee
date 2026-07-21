import { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/shared/tool-page-layout";
import { CalculatorEngine } from "@/components/tools/percentage-calculator/calculator-engine";
import { SchemaMarkup } from "@/components/seo/schema-markup";

export const metadata: Metadata = {
  title: "Kerala Plus One Percentage Calculator | Calculate HSE Marks Online | Adotzee",
  description: "Accurately calculate your Kerala HSE Plus One board exam percentage. Get fast, reliable results for science, commerce, and humanities streams.",
  alternates: {
    canonical: "/tools/plus-one-percentage-calculator",
  },
  openGraph: {
    title: "Kerala Plus One Percentage Calculator | Calculate HSE Marks Online | Adotzee",
    description: "Accurately calculate your Kerala HSE Plus One board exam percentage.",
    url: "https://adotzee.com/tools/plus-one-percentage-calculator",
    type: "website",
  }
};

export default function PlusOnePercentageCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Kerala Plus One Percentage Calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Calculate Kerala HSE Plus One board exam percentage.",
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
        "name": "How do I calculate Kerala Plus One percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Add the total marks you obtained in all Plus One subjects and divide by the total maximum marks, then multiply by 100."
        }
      },
      {
        "@type": "Question",
        "name": "Are Plus One marks important for college admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Most Kerala state university admissions and LBS rank calculations consider your combined Plus One and Plus Two marks."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How do I calculate Kerala Plus One percentage?",
      answer: "Add the total marks you obtained in all Plus One subjects and divide by the total maximum marks (usually 600), then multiply by 100."
    },
    {
      question: "Are Plus One marks important for college admission?",
      answer: "Absolutely. Most Kerala state university admissions, engineering (KEAM), and LBS rank calculations consider your combined Plus One and Plus Two score."
    }
  ];

  const examples = (
    <div className="space-y-4">
      <p><strong>Example: Humanities Stream Calculation</strong></p>
      <ul className="list-disc pl-5 space-y-2">
        <li>English: 75 / 100</li>
        <li>Second Language: 80 / 100</li>
        <li>History: 70 / 100</li>
        <li>Economics: 85 / 100</li>
        <li>Political Science: 78 / 100</li>
        <li>Sociology: 82 / 100</li>
      </ul>
      <p>Total Obtained: 470</p>
      <p>Total Maximum: 600</p>
      <p><strong>Percentage: (470 / 600) × 100 = 78.33%</strong></p>
    </div>
  );

  const understandingContent = (
    <>
      <p>
        Kerala HSE Plus One marks are crucial because they form 50% of your total Higher Secondary weightage. Calculating your percentage now helps you set realistic targets for your Plus Two exams.
      </p>
    </>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <ToolPageLayout
        title="Kerala Plus One Percentage Calculator"
        subtitle="Calculate your exact Kerala HSE Plus One percentage to track your academic progress."
        understandingContent={understandingContent}
        examples={examples}
        faqs={faqs}
        relatedTools={[
          { title: "Kerala Plus Two Percentage Calculator", href: "/tools/plus-two-percentage-calculator" },
          { title: "Career Aptitude Test", href: "/tools/career-aptitude-test" }
        ]}
      >
        <CalculatorEngine initialBoard="kerala" initialLevel="plus-one" />
      </ToolPageLayout>
    </>
  );
}
