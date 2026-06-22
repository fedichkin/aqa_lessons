export interface ApiResponse<T> {
    status: number,
    statusText: string,
    headers: Record<string, string>,
    data: T,
}
