import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { BounceLoader } from "react-spinners";
import DogSelector from "../components/autocomplete/dogSelector.component";
import DogBreedCarousel from "../components/carousel/dogBreedCarousel.component";
import { DogsImages, DogsList } from "../interfaces/dog.interface";
import { DogsApi } from "../services/dogsApi.service";
import { spinnerColor, spinnerCss } from "../utils/constants";
import { rejectSearchRequest, parseDogsImagesResponse } from "../utils/utils.utils";

export const HomePage = (): JSX.Element => {

    const [dogsBreeds, setDogsBreeds] = React.useState<DogsList>({});
    const [selectedDogBreed, setSelectedDogBreed] = React.useState<string | null>(null);
    const [dogsBreedsImages, setDogsBreedsImages] = React.useState<DogsImages>({ breeds: [], images: [] });
    const [loading, setLoading] = React.useState<boolean>(true);

    const dogsApi: DogsApi = new DogsApi();

    useEffect(() => {
        const runEffect = async (): Promise<void> => {
            const response = await dogsApi.getDogsBreeds();
            response && setDogsBreeds(response.message);
            setLoading(false);
        };
        runEffect();
    }, []);

    const handleOnSearchButton = async (): Promise<void> => {
        if (selectedDogBreed && !rejectSearchRequest(dogsBreedsImages, selectedDogBreed)) {
            setLoading(true);
            const response = await dogsApi.getDogsBreedsImages(selectedDogBreed);
            response && setDogsBreedsImages(parseDogsImagesResponse(dogsBreeds[selectedDogBreed], response.message));
            setLoading(false);
        }
    };

    return (
        <Grid container className="full-container">
            <DogSelector loading={loading} dogsBreeds={dogsBreeds} setSelectedDogBreed={setSelectedDogBreed} handleOnSearchButton={handleOnSearchButton} />
            { (dogsBreedsImages.images.length > 0 && !loading) && <DogBreedCarousel images={dogsBreedsImages} />}
            <BounceLoader color={spinnerColor} loading={loading} css={spinnerCss} size={150} />
        </Grid>
    )

}