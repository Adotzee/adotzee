import { Metadata } from "next";
import { PremiumToolLayout } from "@/components/tools/shared/premium-tool-layout";
import { PremiumLBSEngine } from "@/components/tools/lbs-rank-calculator/premium-lbs-engine";
import { SchemaMarkup } from "@/components/seo/schema-markup";

export const metadata: Metadata = {
  title: "LBS Rank Calculator | Estimate Your Admission Rank | Adotzee",
  description: "Predict your LBS rank for BSc Nursing and Paramedical courses. Use our advanced calculator based on your Physics, Chemistry, Biology, and English marks.",
  alternates: {
    canonical: "/tools/lbs-rank-calculator",
  },
  openGraph: {
    title: "LBS Rank Calculator | Estimate Your Admission Rank | Adotzee",
    description: "Predict your LBS rank for BSc Nursing and Paramedical courses.",
    url: "https://adotzee.com/tools/lbs-rank-calculator",
    type: "website",
  }
};

export default function KeralaLBSRankCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LBS Rank Calculator",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Calculate LBS index marks and predict rank for nursing/paramedical admissions.",
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
      answer: "Your LBS index mark is calculated out of a total format which gives maximum weightage to your core science subjects (Physics, Chemistry, Biology) along with your English marks in Plus Two. The marks are normalized to be out of 100 for each subject, resulting in a total Medical Index out of 400."
    },
    {
      question: "Is this rank 100% accurate?",
      answer: "The rank provided by our calculator is a highly accurate estimation based on historical allotment data and current LBS guidelines. Actual state ranks may vary slightly depending on the total number of applicants and their performance in the current admission year."
    },
    {
      question: "Which courses require Mathematics?",
      answer: "While most Nursing and Paramedical courses rely on the Medical Index (PCB + English), specific courses like B.Sc. Optometry may require Mathematics depending on the affiliated university guidelines. That's why we calculate both Medical and Engineering indices for you."
    }
  ];

  const examples = (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Example: Medical Index Calculation</h3>
        <p className="text-slate-600 mb-4">If a student scored the following marks in their final year exams:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-medium">
          <li>Physics: 180 / 200</li>
          <li>Chemistry: 185 / 200</li>
          <li>Biology: 190 / 200</li>
          <li>English: 175 / 200</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <p className="font-bold text-slate-800 mb-2">Step 1: Normalize each subject to out of 100</p>
        <ul className="space-y-1 text-sm text-slate-600 font-medium mb-4">
          <li>Physics: (180/200) * 100 = 90</li>
          <li>Chemistry: (185/200) * 100 = 92.5</li>
          <li>Biology: (190/200) * 100 = 95</li>
          <li>English: (175/200) * 100 = 87.5</li>
        </ul>
        <p className="font-bold text-slate-800 mb-2">Step 2: Add normalized marks</p>
        <p className="text-slate-600 font-medium">Total Medical Index = 90 + 92.5 + 95 + 87.5 = <strong className="text-blue-600 text-xl">365 / 400</strong></p>
      </div>
    </div>
  );

  const understandingContent = (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Understanding LBS Rank</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          The LBS Centre for Science and Technology manages the centralized allotment process (CAP) for various professional degree courses in Nursing and Paramedical streams across Kerala.
          Unlike KEAM (which requires an entrance exam), LBS admissions are strictly based on merit derived from your Higher Secondary (Plus Two) board exam marks.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Eligibility Criteria</h3>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 font-medium">
          <li>Candidates must have passed Higher Secondary Examination of the Board of Higher Secondary Education, Kerala, or examinations recognized equivalent thereto.</li>
          <li>For BSc Nursing, a minimum of 50% marks in Physics, Chemistry, Biology and English put together is generally required.</li>
          <li>Relaxation in minimum marks is applicable for SEBC and SC/ST candidates as per government norms.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Admission Timeline & Process</h3>
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <ol className="space-y-4 text-slate-600 font-medium list-decimal pl-4">
            <li><strong>Online Registration:</strong> Usually opens shortly after Kerala Plus Two results are announced.</li>
            <li><strong>Index Calculation:</strong> LBS publishes individual index scores for all verified applicants.</li>
            <li><strong>Trial Allotment:</strong> Students submit their college/course preferences and a trial allotment is run.</li>
            <li><strong>Final Allotments:</strong> Multiple rounds of actual allotments where students secure seats and pay fees.</li>
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <PremiumToolLayout
        title="LBS Rank Calculator"
        subtitle="Estimate your exact LBS index score and state rank for BSc Nursing & Paramedical admissions in Kerala."
        trustSignals={[
          "Updated LBS Formula",
          "Medical & Engineering Indices",
          "Instant Estimate",
          "Free Tool"
        ]}
        understandingContent={understandingContent}
        examples={examples}
        faqs={faqs}
        relatedTools={[
          { title: "Kerala Plus Two Percentage Calculator", href: "/tools/plus-two-percentage-calculator" },
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" },
          { title: "Career Aptitude Test", href: "/tools/career-aptitude-test" }
        ]}
      >
        <PremiumLBSEngine />
      </PremiumToolLayout>
    </>
  );
}
