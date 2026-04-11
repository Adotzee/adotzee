import { apiClient } from "@/lib/apiClient";
import { College } from "@/types";

export const collegeService = {
    getAll: async (): Promise<College[]> => {
        return apiClient.get("/Colleges");
    },
    getById: async (id: string): Promise<College> => {
        return apiClient.get(`/Colleges/${id}`);
    },
    getByAddon: async (addonId: string): Promise<College[]> => {
        return apiClient.get(`/Addons/${addonId}/colleges`);
    },
};
