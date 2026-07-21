import { Metadata } from "next";
import { PremiumToolLayout } from "@/components/tools/shared/premium-tool-layout";
import { SchemaMarkup } from "@/components/seo/schema-markup";
import { PremiumAptitudeEngine } from "@/components/tools/career-aptitude/premium-aptitude-engine";

export const metadata: Metadata = {
  title: "Career Aptitude Test for Students | Find Suitable Courses | Adotzee",
  description: "Take our free Career Aptitude Test to discover the best courses and career paths for your unique skills, interests, and personality after Plus Two.",
  alternates: {
    canonical: "/tools/career-aptitude-test",
  },
  openGraph: {
    title: "Career Aptitude Test for Students | Find Suitable Courses | Adotzee",
    description: "Take our free Career Aptitude Test to discover the best courses and career paths.",
    url: "https://adotzee.com/tools/career-aptitude-test",
    type: "website",
  }
};

export default function CareerAptitudeTestPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Career Aptitude Test",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "A psychological test to determine the best career path and college courses for a student.",
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
        "name": "Which Course is Best After Plus Two?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'best' course depends entirely on your aptitude. Science students might thrive in Engineering or Medical, while others might find success in Design, Commerce, or Humanities. This aptitude test helps map your traits to the right field."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Career Aptitude Test work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will answer a series of behavioral, logical, and interest-based questions. Our algorithm analyzes your responses to suggest career clusters where you have the highest probability of success."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "Which Course is Best After Plus Two?",
      answer: "There is no single 'best' course. The right choice aligns with your strengths. This test maps your logical, verbal, numerical, and spatial abilities against hundreds of career profiles to find your perfect match."
    },
    {
      question: "How long does the test take?",
      answer: "The test is designed to be comprehensive yet quick. Most students complete it in under 10 minutes."
    }
  ];

  const understandingContent = (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Choosing the Right Path</h3>
        <p className="text-slate-600 leading-relaxed font-medium">
          Choosing a career path after 12th grade is one of the most critical decisions in a student's life. Unfortunately, many students make this choice based on peer pressure or incomplete information.
        </p>
      </div>
      <div>
        <p className="text-slate-600 leading-relaxed font-medium">
          An aptitude test scientifically evaluates your natural inclinations, cognitive strengths, and personality traits. By matching these with industry requirements, we help you identify not just a college course, but a fulfilling lifelong career.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <SchemaMarkup schema={schema} />
      <SchemaMarkup schema={faqSchema} />
      <PremiumToolLayout
        title="Career Aptitude Test"
        subtitle="Discover your true potential. Find the college courses and career paths that perfectly match your natural abilities."
        trustSignals={[
          "Scientifically Backed",
          "Comprehensive Report",
          "100% Free",
          "Mobile Friendly"
        ]}
        understandingContent={understandingContent}
        faqs={faqs}
        relatedTools={[
          { title: "College Eligibility Checker", href: "/tools/college-eligibility-checker" },
          { title: "Scholarship Checker", href: "/tools/scholarship-checker" }
        ]}
      >
        <PremiumAptitudeEngine />
      </PremiumToolLayout>
    </>
  );
}
