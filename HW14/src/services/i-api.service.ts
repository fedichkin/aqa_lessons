import { ApiResponse } from '../models';

export interface IApiService {
    baseUrl: string,
    getAsync<T>(url: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<ApiResponse<T>>,
    postAsync<T>(url: string, data?: unknown, headers?: Record<string, string>): Promise<ApiResponse<T>>,
    putAsync<T>(url: string, data?: unknown, headers?: Record<string, string>): Promise<ApiResponse<T>>,
    deleteAsync<T>(url: string, headers?: Record<string, string>): Promise<ApiResponse<T>>,
}
