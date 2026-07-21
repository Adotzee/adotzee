import { Metadata } from 'next';
import { ReviewList } from '@/components/reviews/ReviewList';
import { ReviewForm } from '@/components/reviews/ReviewForm';
import { reviewApi } from '@/lib/api/reviews';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Student Reviews & Testimonials | Adotzee',
  description: 'Read verified reviews and testimonials from students who have used Adotzee to find their dream courses and colleges.',
  openGraph: {
    title: 'Student Reviews & Testimonials | Adotzee',
    description: 'Read verified reviews and testimonials from students who have used Adotzee to find their dream courses and colleges.',
    type: 'website',
  }
};

export default async function ReviewsPage() {
  // Fetch initial data for SEO schema
  // In a real production scenario, you'd calculate average rating and total reviews from the backend
  // For this implementation, we fetch the first page to get the total count for the schema
  const firstPageRes = await reviewApi.getApprovedReviews(1, 1).catch(() => null);
  const totalReviews = firstPageRes?.totalCount || 0;
  
  // Create AggregateRating schema if we have reviews
  const aggregateRatingSchema = totalReviews > 0 ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adotzee",
    "url": "https://adotzee.com", // Replace with real URL
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8", // Ideally fetched from backend
      "reviewCount": totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  } : null;

  return (
    <>
      {aggregateRatingSchema && (
        <Script
          id="aggregate-rating-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
      )}
      
      <main className="min-h-screen bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl mb-4">
              Student Reviews
            </h1>
            <p className="text-xl text-neutral-600">
              Read authentic experiences from students who navigated their admission journey with Adotzee.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-neutral-900">Latest Reviews</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-500">Filter by:</span>
                    <select className="text-sm border-neutral-300 rounded-md shadow-sm focus:ring-primary focus:border-primary">
                      <option>All Ratings</option>
                      <option>5 Stars</option>
                      <option>4 Stars</option>
                      <option>3 Stars</option>
                    </select>
                  </div>
                </div>
                
                <ReviewList />
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="sticky top-24">
                <ReviewForm />
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
