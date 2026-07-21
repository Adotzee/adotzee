"use client";

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { reviewApi } from '@/lib/api/reviews';
import { ReviewSubmitData } from '@/types/review';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function ReviewForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(5);

  const [formData, setFormData] = useState<Partial<ReviewSubmitData>>({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
    state: '',
    course: '',
    collegeName: '',
    reviewTitle: '',
    reviewMessage: '',
    isAnonymous: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      toast.error('Please select a valid rating');
      return;
    }

    setLoading(true);
    try {
      const payload: ReviewSubmitData = {
        fullName: formData.fullName || '',
        email: formData.email || '',
        mobileNumber: formData.mobileNumber,
        city: formData.city,
        state: formData.state,
        course: formData.course || '',
        collegeName: formData.collegeName,
        rating,
        reviewTitle: formData.reviewTitle || '',
        reviewMessage: formData.reviewMessage || '',
        isAnonymous: formData.isAnonymous || false,
      };

      await reviewApi.submitReview(payload);
      setSuccess(true);
      toast.success('Review submitted successfully!');
    } catch (error: any) {
      toast.error(error.message || 'An error occurred while submitting your review.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Card className="max-w-2xl mx-auto text-center py-12">
        <CardContent>
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Thank you for your review!</h3>
          <p className="text-neutral-600">
            Your review has been received and will be published after verification by our team.
          </p>
          <Button className="mt-8" onClick={() => setSuccess(false)}>Submit Another Review</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Share Your Experience</CardTitle>
        <CardDescription>Tell us about your journey with Adotzee to help other students.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center mb-8">
            <Label className="mb-3 text-base">Overall Rating</Label>
            <div className="flex gap-2 cursor-pointer">
              {Array.from({ length: 5 }).map((_, i) => {
                const starValue = i + 1;
                return (
                  <Star
                    key={i}
                    className={`w-10 h-10 transition-colors ${starValue <= (hoverRating || rating) ? 'fill-amber-500 text-amber-500' : 'text-neutral-300'}`}
                    onMouseEnter={() => setHoverRating(starValue)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(starValue)}
                  />
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="course">Course *</Label>
              <Input id="course" name="course" required placeholder="e.g. B.Tech Computer Science" value={formData.course} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="collegeName">College Name</Label>
              <Input id="collegeName" name="collegeName" placeholder="Optional" value={formData.collegeName} onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" placeholder="Optional" value={formData.city} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" name="state" placeholder="Optional" value={formData.state} onChange={handleChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reviewTitle">Review Title *</Label>
            <Input id="reviewTitle" name="reviewTitle" required placeholder="Summarize your experience" value={formData.reviewTitle} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reviewMessage">Review Message *</Label>
            <Textarea 
              id="reviewMessage" 
              name="reviewMessage" 
              required 
              placeholder="Tell us what you liked and how we helped you..." 
              className="min-h-[120px]"
              value={formData.reviewMessage} 
              onChange={handleChange} 
            />
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="isAnonymous" 
              name="isAnonymous" 
              className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
              checked={formData.isAnonymous}
              onChange={handleChange}
            />
            <Label htmlFor="isAnonymous" className="font-normal text-sm cursor-pointer">
              Post anonymously (Your name will not be displayed)
            </Label>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
