export interface DogsApiListResponse {
    message: { [key: string]: string[]},
    status: string
}

export interface DogsApiImagesResponse {
    message: string[],
    status: string
}

export interface DogsApiErrorResponse {
    status: string,
    message: string,
    code: number
}