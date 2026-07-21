import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Faq | ${COMPANY_INFO.name}`,
    description: `Learn more about Faq at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/faq`,
    }
};

export default function FaqPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Faq', url: `${COMPANY_INFO.fullUrl}/faq` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Faq | ${COMPANY_INFO.name}`,
        "description": `Learn more about Faq at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/faq`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Faq
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-bold text-xl text-indigo-600">How is data verified on Adotzee?</h3>
          <p>Our dedicated team physically and digitally verifies all college information, including fees, accreditations, and campus facilities. Our live data is updated daily.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-indigo-600">Are there any hidden charges for counselling?</h3>
          <p>No. We provide transparent admission guidance with zero hidden charges. Our primary goal is your educational success.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl text-indigo-600">Which locations do you cover?</h3>
          <p>We specialize in premier institutions across South India, heavily focusing on Karnataka (Bangalore, Mangalore), Tamil Nadu, and Kerala.</p>
        </div>
      </div>
  
      </div>
            </div>
        </div>
    );
}
