import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `States | ${COMPANY_INFO.name}`,
    description: `Learn more about States at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/states`,
    }
};

export default function StatesPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'States', url: `${COMPANY_INFO.fullUrl}/states` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `States | ${COMPANY_INFO.name}`,
        "description": `Learn more about States at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/states`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    States
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Discover Colleges by State</h2>
      <p>Explore premier educational institutions across India's top educational hubs. We provide verified admission guidance for colleges in:</p>
      <ul>
        <li><strong>Karnataka:</strong> Known for IT and Engineering hubs like Bangalore and Mangalore.</li>
        <li><strong>Tamil Nadu:</strong> Home to prestigious medical and technical universities.</li>
        <li><strong>Kerala:</strong> Renowned for high-quality education and scenic campuses.</li>
      </ul>
  
      </div>
            </div>
        </div>
    );
}
