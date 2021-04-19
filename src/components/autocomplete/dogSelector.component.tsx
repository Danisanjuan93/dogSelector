import { Button, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect } from "react";
import { DogsImages, DogsList } from "../../interfaces/dog.interface";
import { DogsApi } from "../../services/dogsApi.service";
import DogBreedCarousel from "../carousel/dogBreedCarousel.component";
import "./dogSelector.style.css";

const DogSelector = (): JSX.Element => {

	const [dogsBreeds, setDogsBreeds] = React.useState<DogsList>({});
	const [selectedDogBreed, setSelectedDogBreed] = React.useState<string | null>(null);
	const [dogsBreedsImages, setDogsBreedsImages] = React.useState<DogsImages[]>([]);
	const dogsApi: DogsApi = new DogsApi();

	useEffect(() => {
		const runEffect = async (): Promise<void> => {
			const response = await dogsApi.getDogsBreeds();
			response && setDogsBreeds(response.message);
		};
		runEffect();
	}, []);

	const handleOnSearchButton = async (): Promise<void> => {
		if (selectedDogBreed) {
			const response = await dogsApi.getDogsBreedsImages(selectedDogBreed);
			if (response) {
				const dogsImages: DogsImages[] = [];
				response.message.map((url: string) => dogsImages.push({ original: url, thumbnail: url }));
				setDogsBreedsImages(dogsImages);
			}

		}
	};

	return (
		<Grid container>
			<Grid container className="custom-margin">
				<Grid item xs={10}>
					<Autocomplete
						onChange={(_event, value): void => setSelectedDogBreed(value)}
						options={Object.keys(dogsBreeds)}
						getOptionLabel={(option: string): string => option}
						renderInput={(params): JSX.Element => <TextField {...params} label="Seleccione una raza" variant="outlined" />}
					/>
				</Grid>
				<Grid item xs={1} className="custom-button">
					<Button variant="contained" color="primary" onClick={handleOnSearchButton}>Buscar</Button>
				</Grid>
			</Grid>
			{
				dogsBreedsImages.length > 0 &&
				<DogBreedCarousel images={dogsBreedsImages} />
			}
		</Grid>
	);

}

export default DogSelector;