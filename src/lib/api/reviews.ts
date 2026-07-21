import { apiClient } from "../apiClient";
import { ENDPOINTS } from "../endpoints";
import { Review, ReviewSubmitData, PagedReviews } from "@/types/review";

export const reviewApi = {
  getApprovedReviews: async (pageNumber: number = 1, pageSize: number = 10, rating?: number) => {
    let url = `${ENDPOINTS.REVIEWS.GET_ALL}?pageNumber=${pageNumber}&pageSize=${pageSize}`;
    if (rating) {
      url += `&rating=${rating}`;
    }
    
    return apiClient.get<PagedReviews>(url, {
      next: { revalidate: 60, tags: ['reviews'] } // Cache for 60 seconds
    });
  },

  getFeaturedReviews: async () => {
    return apiClient.get<Review[]>(ENDPOINTS.REVIEWS.GET_FEATURED, {
      next: { revalidate: 300, tags: ['featured-reviews'] } // Cache for 5 minutes
    });
  },

  submitReview: async (data: ReviewSubmitData) => {
    return apiClient.post<Review>(ENDPOINTS.REVIEWS.SUBMIT, data);
  }
};
