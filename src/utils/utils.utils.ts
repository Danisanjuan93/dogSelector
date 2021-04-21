import { DogsImages } from "../interfaces/dog.interface";

export const parseDogsImagesResponse = (breeds: string[], images: string[]): DogsImages => {
    const dogsImages: DogsImages = { breeds: breeds, images: [] };
    images.map((url: string) => dogsImages.images.push({ original: url, thumbnail: url }));
    return dogsImages;
}

export const rejectSearchRequest = (dogsBreedsImages: DogsImages, selectedDogBreed: string): boolean | undefined => {
    const originalImage: string = dogsBreedsImages.images[0]?.original;
    return originalImage ? (originalImage.includes(`/${selectedDogBreed}/`) || originalImage.includes(`/${selectedDogBreed}-`)) : false;
}
