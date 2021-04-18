import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { DogsApiErrorResponse, DogsApiImagesResponse, DogsApiListResponse } from "../interfaces/dogsApi.interface";
import { axiosSuccess, genericApiError } from "./constants";

export class AxiosHandler {

    public static validateStatus = (response: DogsApiListResponse | DogsApiImagesResponse): boolean => {
        return (response.status && response.status === axiosSuccess) ? true : false;
    }

    private validateMessage = (error: DogsApiErrorResponse): string => {
        return (error && error.message && error.message.length > 0) ? error.message : genericApiError;
    }

    public handleError = (error: AxiosError): void => {
        const dogsApiErrorResponse: DogsApiErrorResponse = error.response?.data;
        toast.error(this.validateMessage(dogsApiErrorResponse));
    }

}