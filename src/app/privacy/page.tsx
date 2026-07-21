import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Privacy | ${COMPANY_INFO.name}`,
    description: `Learn more about Privacy at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/privacy`,
    }
};

export default function PrivacyPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Privacy', url: `${COMPANY_INFO.fullUrl}/privacy` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Privacy | ${COMPANY_INFO.name}`,
        "description": `Learn more about Privacy at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/privacy`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Privacy
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Privacy Commitment</h2>
      <p>Your privacy is our priority. This Privacy Policy outlines how Adotzee collects, uses, and protects your personal information when you use our platform for college discovery and admission guidance.</p>
      <h2>Data Security</h2>
      <p>All enquiries are securely processed. We never sell your data to unverified third parties. Your information is used strictly to connect you with expert counsellors and verified colleges.</p>
  
      </div>
            </div>
        </div>
    );
}
