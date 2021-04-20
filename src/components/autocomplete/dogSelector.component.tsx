import { Button, Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";
import { DogsList } from "../../interfaces/dog.interface";
import TranslationContext from "../../utils/translation.context";
import "./dogSelector.style.css";

type Properties = {
	loading: boolean;
	dogsBreeds: DogsList;
	setSelectedDogBreed(dogBreed: string | null): void;
	handleOnSearchButton(): void;
}
const DogSelector = (props: Properties): JSX.Element => {

	const { translator } = React.useContext(TranslationContext());

	return (
		<Grid container className="custom-margin">
			<Grid item xs={10}>
				<Autocomplete
					disabled={props.loading}
					onChange={(_event, value): void => props.setSelectedDogBreed(value)}
					options={Object.keys(props.dogsBreeds)}
					getOptionLabel={(option: string): string => option}
					renderInput={(params): JSX.Element => <TextField {...params} label={translator("autoCompleteLabel")} variant="outlined" />}
				/>
			</Grid>
			<Grid item xs={1} className="custom-button">
				<Button disabled={props.loading} variant="contained" color="primary" onClick={props.handleOnSearchButton}>{translator("searchButtonLabel")}</Button>
			</Grid>
		</Grid>
	);
}

export default DogSelector;