import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Terms | ${COMPANY_INFO.name}`,
    description: `Learn more about Terms at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/terms`,
    }
};

export default function TermsPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Terms', url: `${COMPANY_INFO.fullUrl}/terms` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Terms | ${COMPANY_INFO.name}`,
        "description": `Learn more about Terms at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/terms`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Terms
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Terms of Service</h2>
      <p>Welcome to Adotzee. By accessing our platform, you agree to these terms. We provide verified college information and admission guidance. While we strive for 100% accuracy, admission decisions ultimately rest with the respective educational institutions.</p>
      <h2>User Responsibilities</h2>
      <p>Students must provide accurate information during the counselling process to ensure we can secure the best possible admission opportunities.</p>
  
      </div>
            </div>
        </div>
    );
}
