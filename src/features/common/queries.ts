import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { collegeService } from "../colleges/collegeService";
import { courseService } from "../courses/courseService";

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
            if (streamId) {
                return courseService.getByStream(streamId);
            }
            return courseService.getAll();
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
            if (addonId) {
                return collegeService.getByAddon(addonId);
            }
            return collegeService.getAll();
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}
