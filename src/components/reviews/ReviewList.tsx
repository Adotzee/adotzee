"use client";

import React, { useState, useEffect } from 'react';
import { reviewApi } from '@/lib/api/reviews';
import { ReviewCard } from './ReviewCard';
import { Review } from '@/types/review';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchReviews = async (pageNum: number) => {
    try {
      const res = await reviewApi.getApprovedReviews(pageNum, 9);
      if (res) {
        if (pageNum === 1) {
          setReviews(res.items);
        } else {
          setReviews(prev => [...prev, ...res.items]);
        }
        setHasMore(res.hasNextPage);
      }
    } catch (error) {
      console.error("Failed to load reviews:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchReviews(1);
  }, []);

  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      setLoadingMore(true);
      const nextPage = page + 1;
      setPage(nextPage);
      fetchReviews(nextPage);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 rounded-xl overflow-hidden border border-neutral-200">
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-neutral-900 mb-2">No reviews yet</h3>
        <p className="text-neutral-500">Be the first to share your experience with Adotzee!</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      
      {hasMore && (
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="px-8 rounded-full"
          >
            {loadingMore ? 'Loading...' : 'Load More Reviews'}
          </Button>
        </div>
      )}
    </div>
  );
}
