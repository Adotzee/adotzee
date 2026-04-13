import { apiClient } from "@/lib/apiClient";
import { College } from "@/types";

export const collegeService = {
    getAll: async (): Promise<College[]> => {
        const response = await apiClient.get<any>("/Colleges?pageSize=100");
        // Handle pagination: Extract array from data.data if it exists, else use response directly
        return Array.isArray(response) ? response : (response?.data && Array.isArray(response.data) ? response.data : []);
    },
    getById: async (id: string): Promise<College> => {
        return apiClient.get(`/Colleges/${id}`);
    },
    getByAddon: async (addonId: string): Promise<College[]> => {
        const response = await apiClient.get<College[]>(`/Addons/${addonId}/colleges`);
        return Array.isArray(response) ? response : [];
    },
};
