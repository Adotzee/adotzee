import axios from "axios";

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const IS_SERVER = typeof window === 'undefined';
const API_BASE_URL = IS_SERVER 
    ? "https://api.adotzee.in/api" 
    : (process.env.NEXT_PUBLIC_API_URL || "/api-proxy");

interface BaseApiResponse {
    success?: boolean;
    Success?: boolean;
    data?: unknown;
    Data?: unknown;
    message?: string;
    Message?: string;
    title?: string;
}

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
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
    (response: any) => {
        const res = response.data as BaseApiResponse;

        const isSuccess = res.success !== undefined ? res.success : res.Success;
        
        if (isSuccess === true) {
            return (res.data !== undefined ? res.data : res.Data) as unknown;
        }
        
        if (isSuccess === false) {
            const { errorMsg, isDatabaseError, rawMsg } = formatErrorMessage(res);
            const error = new Error(errorMsg) as Error & { isDatabaseError?: boolean; originalMessage?: string };
            error.isDatabaseError = isDatabaseError;
            error.originalMessage = rawMsg;
            return Promise.reject(error);
        }

        // If the response is success but doesn't follow our standard wrapper, return data directly
        if (isSuccess === undefined) {
            return response.data;
        }

        return response;
    },
    (error) => {
        const errorData = error.response?.data as BaseApiResponse | undefined;
        let consoleData: string | undefined;
        
        if (errorData && typeof errorData === 'object') {
            consoleData = JSON.stringify(errorData);
        }

        // Handle network errors or HTTP error codes
        if (process.env.NODE_ENV === 'development') {
            const method = error.config?.method?.toUpperCase() || 'UNKNOWN';
            const url = error.config?.url || 'UNKNOWN URL';
            const status = error.response?.status || 'NETWORK ERROR';
            const baseURL = error.config?.baseURL || '';
            const fullUrl = baseURL.startsWith('http') 
                ? baseURL + url 
                : (typeof window !== 'undefined' ? window.location.origin : '') + baseURL + url;
            console.error(`❌ [API Error] ${method} ${fullUrl} | Status: ${status}:`, consoleData || error.message);
            if (status === 'NETWORK ERROR') {
                console.warn(`💡 [Diagnostic] Please check if the API server is running. (Proxying through ${baseURL})`);
            }
        }
        
        const { errorMsg, isDatabaseError, rawMsg } = formatErrorMessage(errorData || {}, error.message);
            
        const customError = new Error(errorMsg) as Error & { isDatabaseError?: boolean; originalMessage?: string };
        customError.isDatabaseError = isDatabaseError;
        customError.originalMessage = rawMsg;
        
        return Promise.reject(customError);
    }
);

// Helper to extract error message and check for database errors
function formatErrorMessage(res: BaseApiResponse, defaultMsg: string = "Something went wrong") {
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
