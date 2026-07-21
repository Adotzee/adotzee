export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string; // e.g. "blue", "emerald" for UI styling
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSection {
  id: string; // Used for Table of Contents linking
  title: string;
  content: string; // Markdown or HTML content
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  coverImage: string;
  publishedAt: string; // ISO String
  updatedAt: string;   // ISO String
  readingTime: number; // in minutes
  
  author: BlogAuthor;
  category: BlogCategory;
  tags: string[];
  
  // Content blocks
  sections: BlogSection[];
  
  // SEO & Google AI specific blocks
  faqs?: BlogFAQ[];
  
  // Engagement
  isFeatured?: boolean;
  isTrending?: boolean;
  
  // Internal linking relationships
  relatedArticleIds?: string[];
  relatedCollegeIds?: string[];
  relatedCourseNames?: string[];
}
