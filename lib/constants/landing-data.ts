import { Building2, GraduationCap, Map, MapPin } from "lucide-react";

/**
 * LANDING_PAGE_DATA - Centralized content repository for Adotzee Landing Page.
 * Optimized for SEO (Keyword-rich descriptions) and AEO (Concise answer blocks).
 */

export interface CourseData {
    id: string;
    name: string;
    title: string;
    description: string;
    stream: string;
    level: string;
    duration: string;
    careerOpportunities: string[];
    tags: string[];
    isActive: boolean;
    span: string;
}

export interface CollegeData {
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    state: string;
    establishedYear: number;
    accreditation: string[];
    facilities: string[];
    isRecommended: boolean;
    isActive: boolean;
    tier: string;
    span: string;
    image: string;
}

export interface AddonData {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    certifyingBody: string;
    isActive: boolean;
}

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

export const COURSES_DATA: CourseData[] = [
    { 
        id: "9", 
        name: "Computer Applications (BCA)", 
        title: "Computer Applications (BCA)",
        description: "BCA focuses on software development and IT management.",
        stream: "Technology",
        level: "UG",
        duration: "3 Years",
        careerOpportunities: ["Software Engineer", "Web Developer", "System Analyst"],
        tags: ["Technology", "3 Years"],
        isActive: true,
        span: "md:col-span-6"
    },
    { 
        id: "10", 
        name: "Business Administration (BBA)", 
        title: "Business Administration (BBA)",
        description: "BBA provides foundational knowledge in business principles.",
        stream: "Management",
        level: "UG",
        duration: "3 Years",
        careerOpportunities: ["Business Manager", "HR Executive", "Marketing Analyst"],
        tags: ["Management", "3 Years"],
        isActive: true,
        span: "md:col-span-3"
    },
    { 
        id: "8", 
        name: "B.Tech Computer Science", 
        title: "B.Tech Computer Science",
        description: "Bachelor of Technology in CS focuses on computation and software engineering.",
        stream: "Engineering",
        level: "UG",
        duration: "4 Years",
        careerOpportunities: ["Full Stack Developer", "Data Scientist", "Cloud Engineer"],
        tags: ["Engineering", "4 Years"],
        isActive: true,
        span: "md:col-span-3"
    },
    { 
        id: "7", 
        name: "Allied Health Sciences", 
        title: "Allied Health Sciences",
        description: "Focuses on medical support services like Radiology and MLT.",
        stream: "Medicine",
        level: "UG",
        duration: "4 Years",
        careerOpportunities: ["Lab Technician", "Radiologist", "Health Coordinator"],
        tags: ["Nursing", "4 Years"],
        isActive: true,
        span: "md:col-span-4"
    },
    { 
        id: "11", 
        name: "Commerce (B.Com)", 
        title: "Commerce (B.Com)",
        description: "Foundational commerce degree covering accounting and finance.",
        stream: "Accounting",
        level: "UG",
        duration: "3 Years",
        careerOpportunities: ["Accountant", "Financial Analyst", "Tax Specialist"],
        tags: ["Accounting", "3 Years"],
        isActive: true,
        span: "md:col-span-8"
    }
];

export const COLLEGES_DATA: CollegeData[] = [
    {
        id: "c1",
        name: "Jain University",
        description: "A premier Deemed-to-be University known for academic excellence and top-tier placements in Bangalore.",
        address: "Jayanagar",
        city: "Bengaluru",
        state: "Karnataka",
        establishedYear: 1990,
        accreditation: ["NAAC A++", "UGC Recognized"],
        facilities: ["Digital Library", "FinTech Lab", "Sports Complex"],
        isRecommended: true,
        isActive: true,
        tier: "Verified Partner",
        span: "md:col-span-7",
        image: "/colleges/jain.png"
    },
    {
        id: "c2",
        name: "Presidency University",
        description: "Renowned for its state-of-the-art infrastructure and industry-aligned curriculum in South India.",
        address: "Itgalpur",
        city: "Bengaluru",
        state: "Karnataka",
        establishedYear: 2013,
        accreditation: ["Approved by AICTE", "BCI Recognized"],
        facilities: ["Modern Labs", "Innovation Hub", "Cafeteria"],
        isRecommended: true,
        isActive: true,
        tier: "Top Ranked",
        span: "md:col-span-5",
        image: "/colleges/presidency_pic.jpg"
    }
];

export const ADDONS_DATA: AddonData[] = [
    {
        id: "1",
        name: "Artificial Intelligence & ML",
        description: "Advanced certification in AI/ML to complement your technical degree.",
        price: 0,
        duration: "6 Months",
        certifyingBody: "TCS iON / Microsoft",
        isActive: true
    },
    {
        id: "2",
        name: "Cloud Computing (AWS/Azure)",
        description: "Industry-standard cloud infrastructure expertise.",
        price: 0,
        duration: "4 Months",
        certifyingBody: "AWS Academy",
        isActive: true
    },
    {
        id: "3",
        name: "Digital Marketing Strategy",
        description: "Modern marketing techniques for the digital era.",
        price: 0,
        duration: "3 Months",
        certifyingBody: "Google Digital Garage",
        isActive: true
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
