import { apiClient } from "@/lib/apiClient";
import { College } from "@/types";

export const collegeService = {
    getAll: async (): Promise<College[]> => {
        const response = await apiClient.get<College[]>("/Colleges");
        return Array.isArray(response) ? response : (response as any)?.data || [];
    },
    getById: async (id: string): Promise<College> => {
        return apiClient.get(`/Colleges/${id}`);
    },
    getByAddon: async (addonId: string): Promise<College[]> => {
        const response = await apiClient.get<College[]>(`/Addons/${addonId}/colleges`);
        return Array.isArray(response) ? response : (response as any)?.data || [];
    },
};
