import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Guides | ${COMPANY_INFO.name}`,
    description: `Learn more about Guides at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/guides`,
    }
};

export default function GuidesPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Guides', url: `${COMPANY_INFO.fullUrl}/guides` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Guides | ${COMPANY_INFO.name}`,
        "description": `Learn more about Guides at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/guides`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Guides
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Comprehensive Admission Guides</h2>
      <p>Navigating the college admission process can be complex. Our expert guides break down everything you need to know about:</p>
      <ul>
        <li>Direct Admission Procedures</li>
        <li>Scholarship Opportunities</li>
        <li>Education Loan Assistance</li>
        <li>Course Comparisons (e.g., BCA vs BTech)</li>
      </ul>
  
      </div>
            </div>
        </div>
    );
}
