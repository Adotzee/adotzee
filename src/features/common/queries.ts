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
            try {
                const response = streamId 
                    ? await apiClient.get(`/Courses/filter?stream=${streamId}`)
                    : await apiClient.get("/Courses");
                return Array.isArray(response) ? response : [];
            } catch (error) {
                console.error("Courses Fetch Error:", error);
                throw error;
            }
        },
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
            try {
                const response = addonId 
                    ? await apiClient.get<any>(`/Addons/${addonId}/colleges`)
                    : await apiClient.get<any>("/Colleges?pageSize=100");

                // If response is paginated (object with .data array), extract the array
                if (response && typeof response === 'object' && 'data' in response && Array.isArray(response.data)) {
                    return response.data;
                }
                
                return Array.isArray(response) ? response : [];
            } catch (error) {
                console.error("Colleges Fetch Error:", error);
                throw error;
            }
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
