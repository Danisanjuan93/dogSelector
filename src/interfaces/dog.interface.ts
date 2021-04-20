export interface DogsList {
    [key: string]: string[]
}

export interface DogsCarousel {
    original: string
    thumbnail: string
}

export interface DogsImages {
    breeds: string[]
    images: DogsCarousel[]
}