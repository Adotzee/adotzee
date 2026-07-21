import { Metadata } from "next";
import { ToolPageLayout } from "@/components/tools/shared/tool-page-layout";
import { CalculatorEngine } from "@/components/tools/percentage-calculator/calculator-engine";
import { SchemaMarkup } from "@/components/seo/schema-markup";

export const metadata: Metadata = {
  title: "CBSE Percentage Calculator | Calculate Class 12 Marks Online | Adotzee",
  description: "Instantly calculate your CBSE Class 12 board exam percentage for best of 5 subjects. Quick, easy, and accurate for your college admission planning.",
  alternates: {
    canonical: "/tools/cbse-percentage-calculator",
  },
  openGraph: {
    title: "CBSE Percentage Calculator | Calculate Class 12 Marks Online | Adotzee",
    description: "Instantly calculate your CBSE Class 12 board exam percentage.",
    url: "https://adotzee.com/tools/cbse-percentage-calculator",
    type: "website",
  }
};

export default function CBSEPercentageCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CBSE Percentage Calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Calculate CBSE Class 12 board exam percentage.",
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
        "name": "How is CBSE Class 12 percentage calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For CBSE, your percentage is usually calculated based on your 'Best of 5' subjects. This includes one language and four core subjects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Best of 5 rule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you have 6 subjects, colleges usually calculate your percentage using the marks of the main language plus your 4 highest scoring subjects."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How is CBSE Class 12 percentage calculated?",
      answer: "For CBSE, your percentage is generally calculated based on your 'Best of 5' subjects. This must include at least one language and your four highest-scoring elective subjects."
    },
    {
      question: "What is the Best of 5 rule?",
      answer: "If you have taken 6 subjects, university admissions often allow you to drop the lowest-scoring elective (while keeping the mandatory language) to boost your overall percentage."
    }
  ];

  const examples = (
    <div className="space-y-4">
      <p><strong>Example: Best of 5 Calculation</strong></p>
      <ul className="list-disc pl-5 space-y-2">
        <li>English (Mandatory): 85 / 100</li>
        <li>Physics: 92 / 100</li>
        <li>Chemistry: 88 / 100</li>
        <li>Mathematics: 95 / 100</li>
        <li>Physical Education (Optional): 90 / 100</li>
        <li>Computer Science (Dropped as lowest): 82 / 100</li>
      </ul>
      <p>Total Best of 5 Obtained: 450</p>
      <p>Total Maximum: 500</p>
      <p><strong>Percentage: (450 / 500) × 100 = 90.00%</strong></p>
    </div>
  );

  const understandingContent = (
    <>
      <p>
        The Central Board of Secondary Education (CBSE) Class 12 results are a major turning point for students across India. Unlike State Boards that might consider all subjects across two years, CBSE typically focuses on your Class 12 final exam marks.
      </p>
      <p>
        Many prestigious universities, including Delhi University and various private institutions, rely on the "Best of Four" or "Best of Five" percentage logic to determine merit rankings.
      </p>
    </>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <ToolPageLayout
        title="CBSE Percentage Calculator"
        subtitle="Calculate your exact CBSE Class 12 percentage using the Best of 5 methodology."
        understandingContent={understandingContent}
        examples={examples}
        faqs={faqs}
        relatedTools={[
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" },
          { title: "Career Aptitude Test", href: "/tools/career-aptitude-test" }
        ]}
      >
        <CalculatorEngine initialBoard="cbse" initialLevel="plus-two" />
      </ToolPageLayout>
    </>
  );
}
