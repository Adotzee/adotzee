import React from "react";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
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

export const ArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.headline,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    "@type": "Person",
    name: article.authorName,
  },
  publisher: {
    "@type": "Organization",
    name: article.publisherName,
    logo: {
      "@type": "ImageObject",
      url: article.publisherLogo,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },
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

export const CollegeSchema = (college: { 
  name: string; 
  description: string; 
  url: string; 
  imageUrl?: string;
  address: string;
  city: string;
  state: string;
  rating?: number;
}) => {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: college.name,
    description: college.description,
    url: college.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: college.city,
      addressRegion: college.state,
      streetAddress: college.address,
      addressCountry: "IN"
    }
  };

  if (college.imageUrl) {
    schema.image = college.imageUrl;
  }

  if (college.rating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: college.rating,
      bestRating: "5",
      ratingCount: "10"
    };
  }

  // AI-optimized properties for GEO (Generative Engine Optimization)
  schema.knowsAbout = [
    "Higher Education in India",
    "College Admissions",
    "Scholarship Assistance",
    "Career Guidance"
  ];
  schema.areaServed = ["IN", "AE", "QA"]; // India and Middle-East contexts

  return schema;
};

export const AdmissionServiceSchema = (companyInfo: { name: string; description: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "College Admission Guidance",
  provider: {
    "@type": "Organization",
    name: companyInfo.name,
    url: companyInfo.url
  },
  description: companyInfo.description,
  areaServed: {
    "@type": "Country",
    name: "India"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Admission Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Direct Admission Guidance"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scholarship Assistance"
        }
      }
    ]
  }
});

export const AboutPageSchema = (aboutInfo: { name: string; description: string; url: string }) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: aboutInfo.name,
  description: aboutInfo.description,
  url: aboutInfo.url,
  mainEntity: {
    "@type": "Organization",
    "@id": `${aboutInfo.url}/#organization`
  }
});
