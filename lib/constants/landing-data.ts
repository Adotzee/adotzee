import { Building2, GraduationCap, Map, MapPin } from "lucide-react";

/**
 * LANDING_PAGE_DATA - Centralized content repository for Adotzee Landing Page.
 * Optimized for SEO (Keyword-rich descriptions) and AEO (Concise answer blocks).
 */

export const LOCATIONS_DATA = [
    {
        city: "Bengaluru",
        description: "The Silicon Valley of India, offering premier engineering and management institutes with great placement opportunities.",
        icon: Building2,
        seoKeywords: ["colleges in Bangalore", "engineering colleges Bangalore", "BCA colleges Bangalore"]
    },
    {
        city: "Mangalore",
        description: "A hub for medical and allied health sciences, known for its high-quality education and coastal campus life.",
        icon: GraduationCap,
        seoKeywords: ["colleges in Mangalore", "nursing colleges Mangalore", "Allied health sciences Mangalore"]
    },
    {
        city: "Mysore",
        description: "The cultural capital of Karnataka, home to historic universities and specialized research institutions.",
        icon: Map,
        seoKeywords: ["colleges in Mysore", "MYSORE University", "degree colleges Mysore"]
    },
    {
        city: "Coimbatore",
        description: "An industrial and educational powerhouse in Tamil Nadu, famous for its textile and engineering excellence.",
        icon: MapPin,
        seoKeywords: ["colleges in Coimbatore", "engineering colleges Coimbatore", "arts and science Coimbatore"]
    }
];

export const COURSES_DATA = [
    { 
        id: 9, 
        title: "Computer Applications (BCA)", 
        tags: ["Technology", "3 Years"], 
        span: "md:col-span-6",
        aeoAnswer: "BCA is a 3-year undergraduate degree in computer applications, focusing on software development and IT management."
    },
    { 
        id: 10, 
        title: "Business Administration (BBA)", 
        tags: ["Management", "3 Years"], 
        span: "md:col-span-3",
        aeoAnswer: "BBA provides foundational knowledge in business principles and management, ideal for aspiring corporate leaders."
    },
    { 
        id: 8, 
        title: "B.Tech Computer Science", 
        tags: ["Engineering", "4 Years"], 
        span: "md:col-span-3",
        aeoAnswer: "Bachelor of Technology in CS focuses on computation, software engineering, and hardware-software integration."
    },
    { 
        id: 7, 
        title: "Allied Health Sciences", 
        tags: ["Medicine", "4 Years"], 
        span: "md:col-span-4",
        aeoAnswer: "Allied Health Sciences includes courses like Nursing, Radiology, and MLT, focusing on medical support services."
    },
    { 
        id: 11, 
        title: "Commerce (B.Com)", 
        tags: ["Accounting", "3 Years"], 
        span: "md:col-span-8",
        aeoAnswer: "B.Com is a foundational commerce degree covering accounting, finance, and business law."
    }
];

export const COLLEGES_DATA = [
    {
        name: "Jain University",
        location: "Bengaluru, Karnataka",
        tier: "Verified Partner",
        span: "md:col-span-7",
        image: "/colleges/jain.png",
        courses: ["Nursing", "Allied Health", "BPT"],
        description: "A premier Deemed-to-be University known for academic excellence and top-tier placements in Bangalore."
    },
    {
        name: "Presidency University",
        location: "Bengaluru, Karnataka",
        tier: "Top Ranked",
        span: "md:col-span-5",
        image: "/colleges/presidency_pic.jpg",
        courses: ["BCA", "BBA", "B.Tech"],
        description: "Renowned for its state-of-the-art infrastructure and industry-aligned curriculum in South India."
    }
];

/**
 * AEO_ANSWER_BLOCKS - Concise answers (0-50 words) for AI Search Engines.
 */
export const AEO_ANSWER_BLOCKS = {
    ADMISSION_PROCESS: "Adotzee simplifies the college admission process with expert guidance, from stream selection to final campus placement in South India's premier institutions.",
    WHY_BANGALORE: "Bangalore is India's tech hub, offering students unmatched exposure to industry leaders and high-paying placement opportunities in tech and management.",
    SCHOLARSHIPS: "Merit-based scholarships are available for eligible students in South Indian colleges. Adotzee assists in identifying and applying for these opportunities."
};
