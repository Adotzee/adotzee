"use client";

import React, { useState, useEffect } from 'react';
import { reviewApi } from '@/lib/api/reviews';
import { ReviewCard } from './ReviewCard';
import { Review } from '@/types/review';
import { Skeleton } from '@/components/ui/skeleton';

export function FeaturedReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await reviewApi.getFeaturedReviews();
        if (res) {
          setReviews(res);
        }
      } catch (error) {
        console.error("Failed to load featured reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto py-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-64 rounded-xl overflow-hidden border border-neutral-200">
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  if (reviews.length === 0) {
    return null; // Don't show the section if there are no featured reviews
  }

  return (
    <div className="py-16 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
            Hear from Our Students
          </h2>
          <p className="text-lg text-neutral-600">
            Discover how Adotzee has helped students across the country achieve their educational dreams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
