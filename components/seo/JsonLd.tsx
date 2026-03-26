import React from "react";

type JsonLdProps = {
  data: Record<string, any> | Record<string, any>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-configured Generic Schemas

export const OrganizationSchema = (companyInfo: { name: string; url: string; logoUrl: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: companyInfo.name,
  url: companyInfo.url,
  logo: companyInfo.logoUrl,
  description: companyInfo.description,
});

export const BreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const FAQSchema = (faqItems: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const CourseSchema = (course: { name: string; description: string; providerName: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.name,
  description: course.description,
  provider: {
    "@type": "Organization",
    name: course.providerName,
    sameAs: course.url,
  },
});
