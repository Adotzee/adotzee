import { Metadata } from "next";
import { HomePage } from "@/components/pages/HomePage";
import { COMPANY_INFO } from "@/lib/constants";
import { JsonLd, FAQSchema } from "@/components/seo/JsonLd";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Home | ${COMPANY_INFO.name} - ${COMPANY_INFO.seo.title}`,
    description: COMPANY_INFO.seo.description,
    openGraph: {
      title: `Home | ${COMPANY_INFO.name}`,
      description: COMPANY_INFO.seo.description,
      url: COMPANY_INFO.fullUrl,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: "/Logos/AdotzeeLogoTextNoBG.png",
          width: 1200,
          height: 630,
          alt: `${COMPANY_INFO.name} Home`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Home | ${COMPANY_INFO.name}`,
      description: COMPANY_INFO.seo.description,
      images: ["/Logos/AdotzeeLogoTextNoBG.png"],
    },
    alternates: {
      canonical: COMPANY_INFO.fullUrl,
    },
  };
}

export default function Home() {
  const faqData = FAQSchema([
    {
      question: "Which are the best colleges in Bangalore after Plus Two?",
      answer: "Bangalore hosts top-tier institutions like Christ University, St. Joseph's, and various prestigious engineering and management colleges. Adotzee provides expert guidance to help you secure admission in the best fit for your career."
    },
    {
      question: "How can I get admission guidance for South Indian colleges?",
      answer: "Adotzee offers comprehensive admission consultancy for colleges in Kerala, Karnataka, and Tamil Nadu. You can begin by selecting your academic stream on our homepage and talking to our expert counselors."
    },
    {
      question: "Does Adotzee provide direct admission assistance?",
      answer: "Yes, Adotzee specializes in direct admission guidance and placement for various UG and PG courses in premier institutions across South India."
    }
  ]);

  return (
    <>
      <JsonLd data={faqData} />
      <HomePage />
    </>
  );
}
