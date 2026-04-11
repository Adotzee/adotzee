import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";

export const QUERY_KEYS = {
    COURSES: (streamId: string) => ["courses", streamId],
    COLLEGES: (addonId: string) => ["colleges", addonId],
};

/**
 * Hook to fetch courses filtered by stream.
 * Implements caching and structured error handling as per scalability.md
 */
export function useCoursesQuery(streamId: string) {
    return useQuery({
        queryKey: QUERY_KEYS.COURSES(streamId),
        queryFn: async () => {
            if (!streamId) return [];
            try {
                const response = await apiClient.get(`/Courses/filter?stream=${streamId}`);
                return Array.isArray(response) ? response : [];
            } catch (error) {
                console.error("Courses Fetch Error:", error);
                throw error;
            }
        },
        enabled: !!streamId,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

/**
 * Hook to fetch colleges filtered by specialization (addonId).
 */
export function useCollegesQuery(addonId: string) {
    return useQuery({
        queryKey: QUERY_KEYS.COLLEGES(addonId),
        queryFn: async () => {
            if (!addonId) return [];
            try {
                const response = await apiClient.get(`/Addons/${addonId}/colleges`);
                return Array.isArray(response) ? response : [];
            } catch (error) {
                console.error("Colleges Fetch Error:", error);
                throw error;
            }
        },
        enabled: !!addonId,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
