import { BreedDto } from './get-breeds-response.dto';

export interface ImageWithBreedsDto {
    breeds: BreedSummaryDto[];
    id: string;
    url: string;
    width: number;
    height: number;
}

export type BreedSummaryDto = Omit<BreedDto, 'breed_group' | 'image'>;
