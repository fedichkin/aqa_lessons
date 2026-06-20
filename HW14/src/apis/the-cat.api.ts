import {IApiService} from '../services/i-api.service';
import {ApiResponse, BreedDto, ImageWithBreedsDto, VoteDto, VoteImageRequestDto, VoteImageResponseDto} from '../models';

export class TheCatApi {
    public constructor(private readonly apiService: IApiService) {}

    public async getBreedsAsync(): Promise<ApiResponse<BreedDto[]>> {
        return this.apiService.getAsync<BreedDto[]>('/breeds');
    }

    public async getImagesByBreedAsync(breedId: string, limit = 1): Promise<ApiResponse<ImageWithBreedsDto[]>> {
        const params = {breed_ids: breedId, limit};

        return this.apiService.getAsync<ImageWithBreedsDto[]>('/images/search', params);
    }

    public async voteImageAsync(payload: VoteImageRequestDto): Promise<ApiResponse<VoteImageResponseDto>> {
        return this.apiService.postAsync<VoteImageResponseDto>('/votes', payload);
    }

    public async getVoteAsync(voteId: number): Promise<ApiResponse<VoteDto>> {
        return this.apiService.getAsync<VoteDto>(`/votes/${ voteId }`);
    }

    public async deleteVoteAsync(voteId: number): Promise<ApiResponse<undefined>> {
        return this.apiService.deleteAsync<undefined>(`/votes/${ voteId }`);
    }
}
