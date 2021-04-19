import { DogsImages, DogsList } from "./dog.interface";

export interface DogsApiListResponse {
    message: DogsList,
    status: string
}

export interface DogsApiImagesResponse {
    message: DogsImages,
    status: string
}

export interface DogsApiErrorResponse {
    status: string,
    message: string,
    code: number
}