import { apiClient } from "@/lib/apiClient";
import { Course } from "@/types";

export const courseService = {
    getAll: async (): Promise<Course[]> => {
        const response = await apiClient.get<any>("/Courses", {
            next: { revalidate: 3600 }
        });
        return response?.items || [];
    },
    getById: async (id: string): Promise<Course> => {
        return apiClient.get(`/Courses/${id}`, {
            next: { revalidate: 86400 }
        });
    },
    getByStream: async (streamId: string): Promise<Course[]> => {
        const response = await apiClient.get<any>(`/Courses/filter?stream=${streamId}`, {
            next: { revalidate: 3600 }
        });
        return Array.isArray(response) ? response : (response?.items || []);
    },
};
