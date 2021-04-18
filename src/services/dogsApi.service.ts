import axios, { AxiosError, AxiosResponse } from 'axios';
import { DogsApiResponse } from '../interfaces/dogsApi.interface';
import { AxiosHandler } from '../utils/axios.handler';

export class DogsApi extends AxiosHandler {

    getDogsBreeds = async (): Promise<AxiosResponse | void> => {
        return axios({
            method: 'GET',
            url: 'https://dog.ceo/api/breeds/list/all'
        }).then((response: AxiosResponse) => {
            return response.data;
        }).catch((error: AxiosError) => {
            this.handleError(error);
        })
    }

    getDogsBreedsImages = async (dogBreed: string): Promise<DogsApiResponse> => {
        return axios({
            method: 'GET',
            url: `https://dog.ceo/api/breed/${dogBreed}/images`
        }).then((response: AxiosResponse) => {
            return response.data;
        }).catch((error: AxiosError) => {
            this.handleError(error);
        })
    }

};