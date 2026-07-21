export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://backend.adotzee.in/api";

export const ENDPOINTS = {
    COURSES: {
        GET_ALL: "/Courses",
        GET_BY_ID: (id: string) => `/Courses/${id}`,
    },
    COLLEGES: {
        GET_ALL: "/Colleges",
        GET_BY_ID: (id: string) => `/Colleges/${id}`,
    },
    ADDONS: {
        GET_ALL: "/Addons",
        GET_BY_ID: (id: string) => `/Addons/${id}`,
    },
    SEARCH: {
        GLOBAL: "/Search", // ?q={query}
    },
    RECOMMENDATIONS: {
        GET: "/Recommendations",
    },
    LEADS: {
        CREATE: "/Leads",
    },
    REVIEWS: {
        GET_ALL: "/Reviews",
        GET_FEATURED: "/Reviews/featured",
        SUBMIT: "/Reviews",
    }
};
