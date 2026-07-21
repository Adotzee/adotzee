import { BlogAuthor, BlogCategory, BlogPost } from "@/types/blog";

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  expert_team: {
    id: "expert_team",
    name: "Adotzee Expert Team",
    role: "Senior Admission Counsellors",
    avatar: "/images/authors/expert-team.png", // Will fallback to initials/icon
    bio: "Our team of seasoned admission counsellors with over 15 years of experience in guiding students to top-tier universities."
  },
  dr_sharma: {
    id: "dr_sharma",
    name: "Dr. R. Sharma",
    role: "Career Strategist",
    avatar: "/images/authors/dr-sharma.png",
    bio: "Former university dean and current career strategist helping students align their passions with future-proof degrees."
  }
};

export const BLOG_CATEGORIES: Record<string, BlogCategory> = {
  engineering: { id: "engineering", name: "Engineering Admissions", slug: "engineering", color: "blue" },
  medical: { id: "medical", name: "Medical Admissions", slug: "medical", color: "emerald" },
  scholarships: { id: "scholarships", name: "Scholarships & Financial Aid", slug: "scholarships", color: "amber" },
  career_guidance: { id: "career_guidance", name: "Career Guidance", slug: "career-guidance", color: "purple" },
  admission_guides: { id: "admission_guides", name: "Admission Guides", slug: "admission-guides", color: "rose" }
};

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: "eng-admissions-2026",
    slug: "ultimate-guide-engineering-admissions-2026",
    title: "The Ultimate Guide to Engineering Admissions 2026: Exams, Eligibility & Top Colleges",
    summary: "Navigate the complex landscape of B.Tech admissions in India. Understand JEE, state-level entrance exams, direct admission protocols, and which specializations offer the highest ROI.",
    coverImage: "/images/blogs/engineering_admissions.png",
    publishedAt: "2026-06-15T09:00:00Z",
    updatedAt: "2026-07-20T10:00:00Z",
    readingTime: 12,
    author: BLOG_AUTHORS.expert_team,
    category: BLOG_CATEGORIES.engineering,
    tags: ["B.Tech", "JEE Main", "KEAM", "Computer Science"],
    isFeatured: true,
    isTrending: true,
    sections: [
      {
        id: "introduction",
        title: "The Changing Landscape of Engineering Education",
        content: "<p>Engineering continues to be one of the most sought-after disciplines in India, but the criteria for success have shifted. It's no longer just about getting a degree; it's about securing a seat in a program that offers specializations in high-growth areas like Artificial Intelligence, Data Science, and Robotics.</p><p>In 2026, the admission process has become highly centralized yet fiercely competitive. Understanding the exact timelines, required percentiles, and backup options is critical for every aspirant.</p>"
      },
      {
        id: "entrance-exams",
        title: "Major Entrance Exams You Must Know",
        content: "<h3>1. JEE Main & Advanced</h3><p>The gateway to NITs, IIITs, and IITs. It remains the gold standard. A percentile above 98 is typically required for premium computer science seats.</p><h3>2. State Level Exams (KEAM, KCET, MHT-CET)</h3><p>For students looking to study in top state institutions, these exams offer a fantastic alternative to the national-level pressure cooker. For instance, KEAM provides access to some of Kerala's finest engineering colleges with highly subsidized fee structures.</p><h3>3. Private University Exams (BITSAT, VITEEE)</h3><p>These exams provide direct pathways into elite private universities known for their stellar placement records and modern infrastructure.</p>"
      },
      {
        id: "eligibility",
        title: "Eligibility Criteria & Documentation",
        content: "<p>The standard baseline remains <strong>60% aggregate in Physics, Chemistry, and Mathematics (PCM)</strong> in your 10+2 board exams. However, top-tier institutions often require 75% for general category students.</p><h4>Crucial Documents Needed:</h4><ul><li>10th and 12th Marksheets</li><li>Transfer Certificate (TC) & Migration Certificate</li><li>Caste/Category Certificate (if applicable)</li><li>Income Certificate (for fee concessions)</li><li>Entrance Exam Scorecards</li></ul>"
      },
      {
        id: "future-scope",
        title: "Career Scope & Placement Trends",
        content: "<p>The tech industry is evolving rapidly. While traditional software engineering is still robust, the highest starting packages (averaging ₹15-20 LPA in top tier colleges) are going to graduates specialized in <strong>AI/ML, Cybersecurity, and Cloud Computing</strong>.</p>"
      }
    ],
    faqs: [
      { question: "Can I get direct admission to B.Tech without JEE?", answer: "Yes, many private universities and state colleges offer direct admission based on your 12th board marks (management quota), though fees may be higher." },
      { question: "What is the minimum percentage required for engineering?", answer: "Generally, you need at least 50% - 60% in PCM in your 12th boards to be eligible for most engineering entrance exams and admissions." },
      { question: "Which engineering branch has the highest salary?", answer: "Currently, Computer Science Engineering (CSE) with specializations in AI and Data Science commands the highest starting salaries." }
    ]
  },
  {
    id: "kerala-lbs-nursing-2026",
    slug: "kerala-lbs-nursing-admissions-allied-health-2026",
    title: "LBS Nursing & Allied Health Admissions 2026: Complete Walkthrough",
    summary: "Everything you need to know about the LBS admission process for B.Sc Nursing and Paramedical courses. Learn how rank lists are calculated and how to secure government seats.",
    coverImage: "/images/blogs/nursing_admissions.png",
    publishedAt: "2026-07-10T08:30:00Z",
    updatedAt: "2026-07-15T14:20:00Z",
    readingTime: 8,
    author: BLOG_AUTHORS.dr_sharma,
    category: BLOG_CATEGORIES.medical,
    tags: ["LBS Kerala", "B.Sc Nursing", "Paramedical", "Medical Admissions"],
    isTrending: true,
    sections: [
      {
        id: "lbs-overview",
        title: "What is the LBS Centre for Science and Technology?",
        content: "<p>The LBS Centre is the nodal agency authorized by the Government of Kerala to conduct the centralized allotment process for B.Sc Nursing and various Paramedical degree courses (BPT, B.Sc MLT, B.Sc Optometry, etc.).</p><p>Unlike MBBS, these courses do <strong>not</strong> require NEET. Admissions are strictly based on the merit of your Plus Two (Class 12) marks in Physics, Chemistry, and Biology.</p>"
      },
      {
        id: "rank-calculation",
        title: "How is the LBS Rank Calculated?",
        content: "<p>The rank list is generated by normalizing your Plus Two board marks. The index mark calculation gives primary weightage to Biology, followed by Chemistry and Physics.</p><p><em>Tip: You can use Adotzee's LBS Rank Calculator to instantly predict your state rank based on previous year trends!</em></p>"
      },
      {
        id: "allotment-process",
        title: "The CAP (Centralized Allotment Process)",
        content: "<ol><li><strong>Online Registration:</strong> Submit your application and upload verified mark lists on the official LBS portal.</li><li><strong>Option Registration:</strong> Choose your preferred colleges and courses. List government colleges first, followed by top private institutions.</li><li><strong>Trial Allotment:</strong> Gives you an idea of what you might get. You can rearrange options after this.</li><li><strong>Final Allotments (Phase 1, 2, 3):</strong> Pay the token fee to secure the allotted seat or float to higher options.</li></ol>"
      }
    ],
    faqs: [
      { question: "Is NEET required for B.Sc Nursing in Kerala?", answer: "No, currently B.Sc Nursing admissions in Kerala via LBS are based on 12th board marks, not NEET scores." },
      { question: "When does the LBS registration start?", answer: "Usually, the notification is released in June, shortly after the Kerala Plus Two results are announced." }
    ]
  },
  {
    id: "adotzee-scholarships-guide",
    slug: "how-to-claim-adotzee-merit-scholarship",
    title: "How to Claim the Adotzee Merit Scholarship for 2026 Admissions",
    summary: "Don't let college fees stop you. Learn how to apply for the Adotzee Merit Scholarship and secure up to 50% tuition fee waivers at our partner institutions.",
    coverImage: "/images/blogs/scholarships.png",
    publishedAt: "2026-07-18T10:00:00Z",
    updatedAt: "2026-07-21T09:00:00Z",
    readingTime: 6,
    author: BLOG_AUTHORS.expert_team,
    category: BLOG_CATEGORIES.scholarships,
    tags: ["Scholarships", "Financial Aid", "Fee Waiver"],
    isFeatured: true,
    sections: [
      {
        id: "introduction",
        title: "Education Should Be Accessible",
        content: "<p>Higher education in India can be expensive, but financial constraints shouldn't dictate your future. The <strong>Adotzee Merit Scholarship</strong> is a private initiative designed to support high-performing students who demonstrate financial need.</p>"
      },
      {
        id: "eligibility",
        title: "Who is Eligible?",
        content: "<ul><li>Students who have scored above 85% in their 12th board examinations.</li><li>Students applying for direct admission through the Adotzee platform to our verified partner colleges.</li><li>Students who can provide valid income certificates demonstrating financial need.</li></ul>"
      },
      {
        id: "application-steps",
        title: "How to Apply",
        content: "<p>Applying is seamless and integrated into your admission journey:</p><ol><li><strong>Profile Creation:</strong> Register on Adotzee and update your academic marks.</li><li><strong>Run the Checker:</strong> Use our <em>Scholarship Checker Tool</em> to instantly see if you qualify.</li><li><strong>Document Verification:</strong> Upload your mark sheets and income proof. Our expert team will verify them within 48 hours.</li><li><strong>College Selection:</strong> Choose from the list of partner colleges that accept the Adotzee waiver.</li></ol>"
      }
    ],
    faqs: [
      { question: "Is the Adotzee Scholarship applicable to all colleges?", answer: "No, it is exclusively available at our verified partner institutions across India." },
      { question: "Can I combine this with government scholarships?", answer: "Yes! You can claim state/central government scholarships (like e-Grantz) alongside the Adotzee Merit Scholarship." }
    ]
  }
];

export async function getFeaturedPosts() {
  return MOCK_BLOG_POSTS.filter(post => post.isFeatured);
}

export async function getTrendingPosts() {
  return MOCK_BLOG_POSTS.filter(post => post.isTrending);
}

export async function getLatestPosts() {
  return [...MOCK_BLOG_POSTS].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export async function getPostBySlug(slug: string) {
  return MOCK_BLOG_POSTS.find(post => post.slug === slug);
}

export async function getPostsByCategory(categorySlug: string) {
  return MOCK_BLOG_POSTS.filter(post => post.category.slug === categorySlug);
}
