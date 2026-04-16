import { useQuery, useMutation } from "@tanstack/react-query";
import { courseService } from "@/features/courses/courseService";
import { collegeService } from "@/features/colleges/collegeService";
import { addonService } from "@/features/addons/addonService";
import { recommendationService, RecommendationRequest } from "@/features/common/recommendationService";
import { apiClient } from "@/lib/apiClient";
import { ENDPOINTS } from "@/lib/endpoints";
import { Course, College, AddonCourse } from "@/types";

// --- Courses Hooks ---

export const useCourses = () => {
    return useQuery<Course[]>({
        queryKey: ["courses"],
        queryFn: () => courseService.getAll(),
    });
};

export const useCourse = (id: string) => {
    return useQuery<Course>({
        queryKey: ["courses", id],
        queryFn: () => courseService.getById(id),
        enabled: !!id,
    });
};

// --- Colleges Hooks ---

export const useColleges = () => {
    return useQuery<College[]>({
        queryKey: ["colleges"],
        queryFn: () => collegeService.getAll(),
    });
};

export const useCollege = (id: string) => {
    return useQuery<College>({
        queryKey: ["colleges", id],
        queryFn: () => collegeService.getById(id),
        enabled: !!id,
    });
};

// --- Addons Hooks ---

export const useAddons = () => {
    return useQuery<AddonCourse[]>({
        queryKey: ["addons"],
        queryFn: () => addonService.getAll(),
    });
};

// --- Recommendations Hook ---

export const useRecommendations = () => {
    return useMutation({
        mutationFn: (data: RecommendationRequest) => recommendationService.getRecommendations(data),
    });
};

// --- Global Search ---

export interface GlobalSearchResponse {
    courses: Course[];
    colleges: College[];
    addons: AddonCourse[];
}

export const useGlobalSearch = (query: string) => {
    return useQuery<GlobalSearchResponse>({
        queryKey: ["search", query],
        queryFn: () => apiClient.get(`${ENDPOINTS.SEARCH.GLOBAL}?q=${encodeURIComponent(query)}`),
        enabled: query.length > 2,
    });
};
