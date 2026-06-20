import { describe, expect, it } from 'vitest';
import { ConfigService } from '../src/services/config.service';
import { AxiosApiService } from '../src/services/axios-api.service';
import { TheCatApi } from '../src/apis/the-cat.api';

describe('The cat API tests', () => {
    const { api, auth } = new ConfigService().getConfig();
    const theCatApiService = new AxiosApiService(api.theCatApi.baseUrl, auth.theCatApi);
    const theCatApi = new TheCatApi(theCatApiService);

    const breedId = 'beng';
    let imageId: string;
    let voteId: number;
    let voteCountryCode: string;

    it('should return the list of cat breeds', async () => {
        const response = await theCatApi.getBreedsAsync();

        expect(response.status).toBe(200);
        expect(response.data.length).toBeGreaterThan(0);

        const abyssinian = response.data.find((breed) => breed.id === 'abys');

        expect(abyssinian?.name).toBe('Abyssinian');
        expect(abyssinian?.origin).toBe('Egypt');
    });

    it('should return a single image for the given breed by default', async () => {
        const response = await theCatApi.getImagesByBreedAsync(breedId);

        expect(response.status).toBe(200);
        expect(response.data).toHaveLength(1);
        expect(response.data[0].breeds[0].id).toBe(breedId);

        imageId = response.data[0].id;
    });

    it('should respect the provided limit when searching images by breed', async () => {
        const limit = 2;
        const response = await theCatApi.getImagesByBreedAsync(breedId, limit);

        expect(response.status).toBe(200);
        expect(response.data.length).toBeLessThanOrEqual(limit);

        for (const image of response.data) {
            expect(image.breeds[0].id).toBe(breedId);
        }
    });

    it('should add a vote for an image', async () => {
        const response = await theCatApi.voteImageAsync({ image_id: imageId, value: 1 });

        expect([200, 201]).toContain(response.status);
        expect(response.data.message).toBe('SUCCESS');
        expect(response.data.image_id).toBe(imageId);
        expect(response.data.value).toBe(1);
        expect(response.data.country_code).toHaveLength(2);

        voteId = response.data.id;
        voteCountryCode = response.data.country_code;
    });

    it('should return the created vote by id', async () => {
        const response = await theCatApi.getVoteAsync(voteId);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(voteId);
        expect(response.data.image_id).toBe(imageId);
        expect(response.data.value).toBe(1);
        expect(response.data.country_code).toBe(voteCountryCode);
        expect(response.data.created_at).toBeTypeOf('string');
    });

    it('should delete the created vote', async () => {
        const response = await theCatApi.deleteVoteAsync(voteId);

        expect(response.status).toBe(200);
    });
});
