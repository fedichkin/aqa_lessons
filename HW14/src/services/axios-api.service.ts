import axios, { AxiosResponse } from 'axios';
import { IApiService } from './i-api.service';
import { ApiResponse } from '../models';

export class AxiosApiService implements IApiService {
    public constructor(
        public readonly baseUrl: string,
        private readonly secrets: {
            apiKey?: string;
            basicToken?: string;
            bearerToken?: string;
        }
    ) {}

    public async getAsync<T>(
        url: string,
        params?: Record<string, string | number | boolean>,
        headers?: Record<string, string>
    ): Promise<ApiResponse<T>> {
        const response = await axios.get(`${this.baseUrl}${url}`, {
            params,
            headers: {
                ...this.getDefaultHeaders(),
                ...headers
            }
        });

        return this.toApiResponse<T>(response);
    }

    public async postAsync<T>(url: string, data?: unknown, headers?: Record<string, string>): Promise<ApiResponse<T>> {
        const response = await axios.post(`${this.baseUrl}${url}`, data, {
            headers: {
                ...this.getDefaultHeaders(),
                ...headers
            }
        });

        return this.toApiResponse<T>(response);
    }

    public async putAsync<T>(url: string, data?: unknown, headers?: Record<string, string>): Promise<ApiResponse<T>> {
        const response = await axios.put(`${this.baseUrl}${url}`, data, {
            headers: {
                ...this.getDefaultHeaders(),
                ...headers
            }
        });

        return this.toApiResponse<T>(response);
    }

    public async deleteAsync<T>(url: string, headers?: Record<string, string>): Promise<ApiResponse<T>> {
        const response = await axios.delete(`${this.baseUrl}${url}`, {
            headers: {
                ...this.getDefaultHeaders(),
                ...headers
            }
        });

        return this.toApiResponse<T>(response);
    }

    private getDefaultHeaders(): Record<string, string> {
        const defaultHeaders: Record<string, string> = {};

        if (this.secrets.apiKey) {
            defaultHeaders['X-API-KEY'] = this.secrets.apiKey;
        }

        if (this.secrets.basicToken) {
            defaultHeaders['Authorization'] = `Basic ${this.secrets.basicToken}`;
        }

        if (this.secrets.bearerToken) {
            defaultHeaders['Authorization'] = `Bearer ${this.secrets.bearerToken}`;
        }

        return defaultHeaders;
    }

    private toApiResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
        return {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers as Record<string, string>,
            data: response.data
        };
    }
}
