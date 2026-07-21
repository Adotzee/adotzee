import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
    title: `About | ${COMPANY_INFO.name}`,
    description: `Learn more about About at ${COMPANY_INFO.name}, India's trusted college admission platform.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/about`,
    }
};

export default function AboutPage() {
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'About', url: `${COMPANY_INFO.fullUrl}/about` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `About | ${COMPANY_INFO.name}`,
        "description": `Learn more about About at ${COMPANY_INFO.name}.`,
        "url": `${COMPANY_INFO.fullUrl}/about`
    };

    return (
        <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
                    About
                </h1>
                <div className="prose prose-lg text-slate-600 max-w-none">
          
      <h2>Who is Adotzee?</h2>
      <p>Adotzee is India's most trusted college admission and career guidance platform. We are an elite education consultancy and technology platform designed to bridge the gap between ambitious students and premier educational institutions.</p>
      <h2>Why Trust Adotzee?</h2>
      <p>We believe in absolute transparency. Unlike typical consultancies, our data is rigorously verified, and our processes are fully transparent. Every college listed on our platform undergoes strict verification for accuracy in fees, facilities, and placements.</p>
      <h2>How Does Admission Work?</h2>
      <p>Students can explore verified colleges on our platform, compare them, and request a callback. Our expert counsellors provide personalized guidance, helping students select the right course and securing direct admission without hidden charges.</p>
  
      </div>
            </div>
        </div>
    );
}
