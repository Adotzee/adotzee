import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Cookies | ${COMPANY_INFO.name}`,
    description: `Learn more about Cookies at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/cookies`,
    }
};

export default function CookiesPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Cookies', url: `${COMPANY_INFO.fullUrl}/cookies` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Cookies | ${COMPANY_INFO.name}`,
        "description": `Learn more about Cookies at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/cookies`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Cookies
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Cookie Policy</h2>
      <p>Adotzee uses cookies to enhance your college discovery experience. Cookies help us understand user behavior, optimize our website's core web vitals, and personalize your admission guidance journey.</p>
      <h2>Managing Cookies</h2>
      <p>You can control cookie preferences through your browser settings. However, disabling essential cookies may impact the performance of our platform.</p>
  
      </div>
            </div>
        </div>
    );
}
