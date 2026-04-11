import { apiClient } from "@/lib/apiClient";
import { AddonCourse } from "@/types";

export const addonService = {
    getAll: async (): Promise<AddonCourse[]> => {
        return apiClient.get("/Addons");
    },
    getByCourse: async (courseId: string): Promise<AddonCourse[]> => {
        return apiClient.get(`/Addons/by-course/${courseId}`);
    },
};
