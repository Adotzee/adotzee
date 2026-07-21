import { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema } from '@/components/seo/JsonLd';
import BlogsClient from '@/components/pages/BlogsClient';
import { getFeaturedPosts, getTrendingPosts, getLatestPosts, BLOG_CATEGORIES } from '@/lib/data/mock-blogs';

export const metadata: Metadata = {
    title: `Education Knowledge Hub | ${COMPANY_INFO.name}`,
    description: `Read the latest expert guides on engineering admissions, medical courses, scholarships, and career planning. Stay ahead with ${COMPANY_INFO.name}.`,
    alternates: {
        canonical: `${COMPANY_INFO.fullUrl}/blogs`,
    },
    openGraph: {
        title: `Education Knowledge Hub | ${COMPANY_INFO.name}`,
        description: `Read the latest expert guides on engineering admissions, medical courses, scholarships, and career planning.`,
        url: `${COMPANY_INFO.fullUrl}/blogs`,
        type: "website",
    }
};

export default async function BlogsPage() {
    // Fetch data concurrently (simulated server fetch)
    const [featuredPosts, trendingPosts, latestPosts] = await Promise.all([
        getFeaturedPosts(),
        getTrendingPosts(),
        getLatestPosts()
    ]);
    
    const categories = Object.values(BLOG_CATEGORIES);

    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Knowledge Hub', url: `${COMPANY_INFO.fullUrl}/blogs` }
    ]);

    const genericSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `Education Knowledge Hub | ${COMPANY_INFO.name}`,
        "description": metadata.description,
        "url": `${COMPANY_INFO.fullUrl}/blogs`
    };

    return (
        <>
            <JsonLd data={[breadcrumbData, genericSchema]} />
            <BlogsClient 
                featuredPosts={featuredPosts}
                trendingPosts={trendingPosts}
                latestPosts={latestPosts}
                categories={categories}
            />
        </>
    );
}
