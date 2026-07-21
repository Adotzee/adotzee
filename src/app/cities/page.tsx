import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Cities | ${COMPANY_INFO.name}`,
    description: `Learn more about Cities at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/cities`,
    }
};

export default function CitiesPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Cities', url: `${COMPANY_INFO.fullUrl}/cities` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Cities | ${COMPANY_INFO.name}`,
        "description": `Learn more about Cities at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/cities`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Cities
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Discover Colleges by City</h2>
      <p>Find the perfect campus in your preferred city. Our platform covers major educational destinations:</p>
      <ul>
        <li><strong>Bangalore:</strong> The Silicon Valley of India, perfect for Engineering and Management.</li>
        <li><strong>Mangalore:</strong> A growing hub for Medical and Allied Health Sciences.</li>
        <li><strong>Mysore:</strong> A peaceful city with excellent traditional and modern courses.</li>
        <li><strong>Coimbatore:</strong> The Manchester of South India, known for engineering excellence.</li>
      </ul>
  
      </div>
            </div>
        </div>
    );
}
