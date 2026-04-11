import { apiClient } from "@/lib/apiClient";
import { Course } from "@/types";

export const courseService = {
    getAll: async (): Promise<Course[]> => {
        const response = await apiClient.get<Course[]>("/Courses");
        return Array.isArray(response) ? response : (response as any)?.data || [];
    },
    getById: async (id: string): Promise<Course> => {
        return apiClient.get(`/Courses/${id}`);
    },
    getByStream: async (streamId: string): Promise<Course[]> => {
        const response = await apiClient.get<Course[]>(`/Courses/filter?stream=${streamId}`);
        return Array.isArray(response) ? response : (response as any)?.data || [];
    },
};
