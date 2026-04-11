import { apiClient } from "@/lib/apiClient";
import { Course } from "@/types";

export const courseService = {
    getAll: async (): Promise<Course[]> => {
        return apiClient.get("/Courses");
    },
    getById: async (id: string): Promise<Course> => {
        return apiClient.get(`/Courses/${id}`);
    },
    getByStream: async (streamId: string): Promise<Course[]> => {
        return apiClient.get(`/Courses/filter?stream=${streamId}`);
    },
};
