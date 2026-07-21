import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `Contact | ${COMPANY_INFO.name}`,
    description: `Learn more about Contact at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/contact`,
    }
};

export default function ContactPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Contact', url: `${COMPANY_INFO.fullUrl}/contact` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Contact | ${COMPANY_INFO.name}`,
        "description": `Learn more about Contact at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/contact`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    Contact
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Get in Touch with Our Experts</h2>
      <p>Have questions about college admissions? Our team of verified admission experts is here to provide fast support and transparent guidance.</p>
      <ul>
        <li><strong>Email:</strong> adotzeein@gmail.com</li>
        <li><strong>Phone:</strong> +91 8281060462</li>
        <li><strong>Address:</strong> Kerala, India</li>
      </ul>
      <h2>Fast Response Support</h2>
      <p>We pride ourselves on our student-first approach. Submit an enquiry securely, and one of our experts will contact you shortly.</p>
  
      </div>
            </div>
        </div>
    );
}
