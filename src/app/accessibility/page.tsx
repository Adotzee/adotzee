import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Accessibility | ${COMPANY_INFO.name}`,
    description: `Learn more about Accessibility at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/accessibility`,
    }
};

export default function AccessibilityPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Accessibility', url: `${COMPANY_INFO.fullUrl}/accessibility` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Accessibility | ${COMPANY_INFO.name}`,
        "description": `Learn more about Accessibility at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/accessibility`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Accessibility
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Accessibility Statement</h2>
      <p>Adotzee is committed to ensuring digital accessibility for all students, including those with disabilities. We continually improve our user experience and apply relevant accessibility standards (WCAG 2.1).</p>
      <h2>Feedback</h2>
      <p>If you encounter any accessibility barriers on our platform, please contact our support team. We prioritize fixing accessibility issues to maintain a 100/100 accessibility score.</p>
  
      </div>
            </div>
        </div>
    );
}
