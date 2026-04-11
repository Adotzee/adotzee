import { apiClient } from "@/lib/apiClient";
import { AddonCourse } from "@/types";

export const addonService = {
    getAll: async (): Promise<AddonCourse[]> => {
        const response = await apiClient.get<AddonCourse[]>("/Addons");
        return Array.isArray(response) ? response : (response as any)?.data || [];
    },
    getByCourse: async (courseId: string): Promise<AddonCourse[]> => {
        const response = await apiClient.get<AddonCourse[]>(`/Addons/by-course/${courseId}`);
        return Array.isArray(response) ? response : (response as any)?.data || [];
    },
};
