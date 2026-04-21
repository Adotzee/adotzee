import { apiClient } from "@/lib/apiClient";
import { AddonCourse } from "@/types";

export const addonService = {
    getAll: async (): Promise<AddonCourse[]> => {
        const response = await apiClient.get<any>("/Addons", {
            next: { revalidate: 3600 }
        });
        return response?.items || [];
    },
    getByCourse: async (courseId: string): Promise<AddonCourse[]> => {
        const response = await apiClient.get<any>(`/Addons/by-course/${courseId}`, {
            next: { revalidate: 3600 }
        });
        return response?.items || [];
    },
};
