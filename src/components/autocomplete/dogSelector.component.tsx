import { Button, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BounceLoader } from "react-spinners";
import { DogsImages, DogsList } from "../../interfaces/dog.interface";
import { DogsApi } from "../../services/dogsApi.service";
import DogBreedCarousel from "../carousel/dogBreedCarousel.component";
import "./dogSelector.style.css";

const DogSelector = (): JSX.Element => {

	const [dogsBreeds, setDogsBreeds] = React.useState<DogsList>({});
	const [selectedDogBreed, setSelectedDogBreed] = React.useState<string | null>(null);
	const [dogsBreedsImages, setDogsBreedsImages] = React.useState<DogsImages[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	const { t } = useTranslation();

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
		if (selectedDogBreed) {
			setLoading(true);
			const response = await dogsApi.getDogsBreedsImages(selectedDogBreed);
			if (response) {
				const dogsImages: DogsImages[] = [];
				response.message.map((url: string) => dogsImages.push({ original: url, thumbnail: url }));
				setDogsBreedsImages(dogsImages);
			}
			setLoading(false);
		}
	};

	const override = "margin: 0 auto;";

	return (
		<Grid container className="full-container">
			<Grid container className="custom-margin">
				<Grid item xs={10}>
					<Autocomplete
						disabled={loading}
						onChange={(_event, value): void => setSelectedDogBreed(value)}
						options={Object.keys(dogsBreeds)}
						getOptionLabel={(option: string): string => option}
						renderInput={(params): JSX.Element => <TextField {...params} label={t("autoCompleteLabel")} variant="outlined" />}
					/>
				</Grid>
				<Grid item xs={1} className="custom-button">
					<Button disabled={loading} variant="contained" color="primary" onClick={handleOnSearchButton}>Buscar</Button>
				</Grid>
			</Grid>
			{
				dogsBreedsImages.length > 0 &&
				<DogBreedCarousel images={dogsBreedsImages} />
			}
			<BounceLoader color={"#36D7B7"} loading={loading} css={override} size={150} />
		</Grid>
	);

}

export default DogSelector;