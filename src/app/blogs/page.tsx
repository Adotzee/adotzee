import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Blogs | ${COMPANY_INFO.name}`,
    description: `Learn more about Blogs at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/blogs`,
    }
};

export default function BlogsPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Blogs', url: `${COMPANY_INFO.fullUrl}/blogs` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Blogs | ${COMPANY_INFO.name}`,
        "description": `Learn more about Blogs at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/blogs`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Blogs
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Education Blog & Insights</h2>
      <p>Stay updated with the latest trends in higher education, entrance exams, and career opportunities. Our enterprise content team regularly publishes verified articles to help you navigate your student journey.</p>
      <p><em>Check back soon for our comprehensive series of 100 Pillar Articles covering Engineering, Medical, and MBA admissions.</em></p>
  
      </div>
            </div>
        </div>
    );
}
