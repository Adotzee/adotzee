import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { COMPANY_INFO } from '@/lib/constants';
import { JsonLd, BreadcrumbSchema, ArticleSchema, FAQSchema } from '@/components/seo/JsonLd';
import { getPostBySlug, MOCK_BLOG_POSTS } from '@/lib/data/mock-blogs';
import BlogArticleClient from '@/components/pages/BlogArticleClient';

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate static params for SSG
export async function generateStaticParams() {
    return MOCK_BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);
    
    if (!post) {
        return {
            title: "Article Not Found | Adotzee",
        };
    }

    return {
        title: `${post.title} | Adotzee Knowledge Hub`,
        description: post.summary,
        alternates: {
            canonical: `${COMPANY_INFO.fullUrl}/blogs/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.summary,
            url: `${COMPANY_INFO.fullUrl}/blogs/${post.slug}`,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [post.author.name],
            images: [
                {
                    url: post.coverImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.summary,
            images: [post.coverImage],
        }
    };
}

export default async function BlogArticlePage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Generate JSON-LD Schemas
    const breadcrumbData = BreadcrumbSchema([
        { name: 'Home', url: COMPANY_INFO.fullUrl },
        { name: 'Knowledge Hub', url: `${COMPANY_INFO.fullUrl}/blogs` },
        { name: post.category.name, url: `${COMPANY_INFO.fullUrl}/blogs?category=${post.category.slug}` },
        { name: post.title, url: `${COMPANY_INFO.fullUrl}/blogs/${post.slug}` }
    ]);

    const articleData = ArticleSchema({
        headline: post.title,
        description: post.summary,
        image: post.coverImage,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        authorName: post.author.name,
        publisherName: COMPANY_INFO.name,
        publisherLogo: `${COMPANY_INFO.fullUrl}/Logos/AdotzeeLogoTextNoBG.png`,
        url: `${COMPANY_INFO.fullUrl}/blogs/${post.slug}`
    });

    const schemas: Record<string, unknown>[] = [breadcrumbData, articleData];

    // Conditionally add FAQ Schema if FAQs exist
    if (post.faqs && post.faqs.length > 0) {
        schemas.push(FAQSchema(post.faqs));
    }

    return (
        <>
            <JsonLd data={schemas} />
            <BlogArticleClient post={post} />
        </>
    );
}
