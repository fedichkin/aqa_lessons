export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theCatApi: TheCatApiAuthConfigDto;
}

export interface TheCatApiAuthConfigDto {
    apiKey: string;
}

export interface ApiConfigDto {
    theCatApi: ApiConfig;
}

interface ApiConfig {
    baseUrl: string;
}
