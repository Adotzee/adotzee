export interface Review {
  id: number;
  fullName: string;
  email: string;
  course: string;
  collegeName?: string;
  rating: number;
  reviewTitle: string;
  reviewMessage: string;
  studentPhoto?: string;
  verificationType: string;
  featured: boolean;
  displayName?: string;
  displayInitials?: string;
  createdAt: string;
}

export interface ReviewSubmitData {
  fullName: string;
  email: string;
  mobileNumber?: string;
  city?: string;
  state?: string;
  course: string;
  collegeName?: string;
  rating: number;
  reviewTitle: string;
  reviewMessage: string;
  studentPhoto?: string;
  isAnonymous: boolean;
}

export interface PagedReviews {
  items: Review[];
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
