import axios from "axios";

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.adotzee.in/api";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 60000,
});

// Request Interceptor for diagnostics
apiClient.interceptors.request.use((config) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`🚀 [API Request] ${config.method?.toUpperCase()} ${config.url}`, config.params || '');
    }
    return config;
});

// Response Interceptor: Extracts the nested data and handles success: false
apiClient.interceptors.response.use(
    (response) => {
        const res = response.data as any;

        // Support both lowercase (Node.js convention) and PascalCase (.NET convention)
        const isSuccess = res.success !== undefined ? res.success : res.Success;
        
        if (isSuccess === true) {
            return res.data !== undefined ? res.data : res.Data;
        }
        
        if (isSuccess === false) {
            const { errorMsg, isDatabaseError, rawMsg } = formatErrorMessage(res);
            const error = new Error(errorMsg) as any;
            error.isDatabaseError = isDatabaseError;
            error.originalMessage = rawMsg;
            return Promise.reject(error);
        }

        // If no success flag exists, assume it's just raw data (e.g. GET /Courses array)
        return res;
    },
    (error) => {
        // Safely extract error data, prioritizing message strings or stringifying objects
        let errorData = error.response?.data;
        let consoleData = errorData;
        
        if (errorData && typeof errorData === 'object') {
            consoleData = JSON.stringify(errorData);
        }

        // Handle network errors or HTTP error codes
        if (process.env.NODE_ENV === 'development') {
            const method = error.config?.method?.toUpperCase() || 'UNKNOWN';
            const url = error.config?.url || 'UNKNOWN URL';
            const status = error.response?.status || 'NETWORK ERROR';
            console.error(`❌ [API Error] ${method} ${url} | Status: ${status}:`, consoleData || error.message);
        }
        
        const { errorMsg, isDatabaseError, rawMsg } = formatErrorMessage(errorData || {}, error.message);
            
        const customError = new Error(errorMsg) as any;
        customError.isDatabaseError = isDatabaseError;
        customError.originalMessage = rawMsg;
        
        return Promise.reject(customError);
    }
);

// Helper to extract error message and check for database errors
function formatErrorMessage(res: any, defaultMsg: string = "Something went wrong") {
    const rawMsg = res.message || res.Message || res.title || defaultMsg;
    let errorMsg = rawMsg;
    let isDatabaseError = false;

    if (rawMsg.toLowerCase().includes("login-failed") || 
        rawMsg.toLowerCase().includes("login failed") || 
        rawMsg.toLowerCase().includes("sql server")) {
        errorMsg = "Our database is currently undergoing maintenance. Please try again in a few minutes.";
        isDatabaseError = true;
    } else if (!rawMsg || rawMsg === "Network Error") {
        errorMsg = "Service Temporarily Unavailable. Please check your connection.";
    }

    return { errorMsg, isDatabaseError, rawMsg };
}
