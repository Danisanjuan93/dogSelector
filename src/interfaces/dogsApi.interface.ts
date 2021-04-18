export interface DogsApiResponse {
    message: { [key: string]: string[]},
    status: string
}

export interface DogsApiErrorResponse {
    status: string,
    message: string,
    code: number
}