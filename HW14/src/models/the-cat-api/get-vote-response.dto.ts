export interface VoteDto {
    id: number,
    user_id: string,
    image_id: string,
    sub_id: string | null,
    created_at: string,
    value: number,
    country_code: string,
    image: VoteImageDto
}

export interface VoteImageDto {
    id: string,
    url: string
}
