import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { DogsApiErrorResponse, DogsApiResponse } from "../interfaces/dogsApi.interface";
import { axiosSuccess, genericApiError } from "./constants";

export class AxiosHandler {

    public static validateStatus = (response: DogsApiResponse): boolean => {
        return (response.status && response.status === axiosSuccess) ? true : false;
    }

    private validateMessage = (error: DogsApiErrorResponse) => {
        return (error && error.message && error.message.length > 0) ? error.message : genericApiError;
    }

    public handleError = (error: AxiosError): void => {
        const dogsApiErrorResponse: DogsApiErrorResponse = error.response?.data;
        toast.error(this.validateMessage(dogsApiErrorResponse));
    }

}