import { apiClient } from "@/lib/apiClient";
import { College } from "@/types";

export const collegeService = {
    getAll: async (): Promise<College[]> => {
        const response = await apiClient.get<any>("/Colleges", {
            next: { revalidate: 3600 } // Cache for 1 hour
        });
        return response?.items || [];
    },
    getById: async (id: string): Promise<College> => {
        return apiClient.get(`/Colleges/${id}`, {
            next: { revalidate: 86400 } // Cache for 24 hours
        });
    },
    getByAddon: async (addonId: string): Promise<College[]> => {
        const response = await apiClient.get<College[]>(`/Addons/${addonId}/colleges`, {
            next: { revalidate: 3600 }
        });
        return Array.isArray(response) ? response : [];
    },
};
