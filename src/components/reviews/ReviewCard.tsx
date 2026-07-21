import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { Review } from '@/types/review';
import { Card, CardContent } from '@/components/ui/card';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  // Extract initials if neither displayName nor displayInitials are set but name is present
  const initials = review.displayInitials || review.displayName?.substring(0, 2).toUpperCase() || 'U';

  return (
    <Card className="h-full bg-white transition-all duration-300 hover:shadow-lg border-neutral-200">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-neutral-200'}`} 
              />
            ))}
          </div>
          <Quote className="w-8 h-8 text-neutral-100 rotate-180" />
        </div>
        
        <h3 className="font-semibold text-lg text-neutral-900 mb-2 line-clamp-2">{review.reviewTitle}</h3>
        <p className="text-neutral-600 mb-6 flex-grow line-clamp-4">{review.reviewMessage}</p>
        
        <div className="flex items-center mt-auto pt-4 border-t border-neutral-100">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3 shrink-0">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-neutral-900">{review.displayName || 'Anonymous Student'}</span>
              {review.verificationType !== 'None' && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
            <div className="text-sm text-neutral-500">
              {review.course} {review.collegeName ? `• ${review.collegeName}` : ''}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
