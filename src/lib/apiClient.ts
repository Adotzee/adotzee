
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const IS_SERVER = typeof window === 'undefined';
const API_BASE_URL = IS_SERVER
    ? "https://adotzeebackend.onrender.com/api"
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

/**
 * Optimized fetch wrapper for Next.js 14+
 * Leverages native fetch for Data Cache and Request Memoization.
 */
class ApiClient {
    private async request<T>(
        url: string,
        options: RequestInit & { next?: NextFetchRequestConfig; cache?: RequestCache } = {}
    ): Promise<T> {
        const fullUrl = url.startsWith("http") ? url : `${API_BASE_URL}${url}`;

        // Remove no-cache headers for server-side fetches to allow Next.js caching
        const defaultHeaders: HeadersInit = {
            "Content-Type": "application/json",
        };

        const config = {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers,
            },
        };

        if (process.env.NODE_ENV === 'development') {
            console.log(`🚀 [API Request] ${config.method || 'GET'} ${fullUrl}`);
        }

        try {
            const response = await fetch(fullUrl, config);
            const data = await response.json() as BaseApiResponse;

            if (!response.ok) {
                const { errorMsg, isDatabaseError, rawMsg } = formatErrorMessage(data, response.statusText);
                const error = new Error(errorMsg) as Error & { isDatabaseError?: boolean; originalMessage?: string; status?: number };
                error.isDatabaseError = isDatabaseError;
                error.originalMessage = rawMsg;
                error.status = response.status;
                throw error;
            }

            const isSuccess = data.success !== undefined ? data.success : data.Success;

            if (isSuccess === true) {
                return (data.data !== undefined ? data.data : data.Data) as T;
            }

            if (isSuccess === false) {
                const { errorMsg, isDatabaseError, rawMsg } = formatErrorMessage(data);
                const error = new Error(errorMsg) as Error & { isDatabaseError?: boolean; originalMessage?: string };
                error.isDatabaseError = isDatabaseError;
                error.originalMessage = rawMsg;
                throw error;
            }

            // Fallback for non-standard responses
            if (isSuccess === undefined) {
                return data as unknown as T;
            }

            return data as unknown as T;
        } catch (error: any) {
            if (process.env.NODE_ENV === 'development') {
                console.error(`❌ [API Error] ${url}:`, error.message);
            }
            throw error;
        }
    }

    async get<T>(url: string, config?: RequestInit & { next?: NextFetchRequestConfig }): Promise<T> {
        return this.request<T>(url, { ...config, method: "GET" });
    }

    async post<T>(url: string, data?: any, config?: RequestInit & { next?: NextFetchRequestConfig }): Promise<T> {
        return this.request<T>(url, {
            ...config,
            method: "POST",
            body: JSON.stringify(data),
            cache: 'no-store' // POSTs should generally not be cached
        });
    }

    async put<T>(url: string, data?: any, config?: RequestInit & { next?: NextFetchRequestConfig }): Promise<T> {
        return this.request<T>(url, {
            ...config,
            method: "PUT",
            body: JSON.stringify(data),
            cache: 'no-store'
        });
    }

    async delete<T>(url: string, config?: RequestInit & { next?: NextFetchRequestConfig }): Promise<T> {
        return this.request<T>(url, { ...config, method: "DELETE", cache: 'no-store' });
    }
}

export const apiClient = new ApiClient();

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
    } else if (!rawMsg || rawMsg === "Network Error" || rawMsg === "Failed to fetch") {
        errorMsg = "Service Temporarily Unavailable. Please check your connection.";
    }

    return { errorMsg, isDatabaseError, rawMsg };
}

