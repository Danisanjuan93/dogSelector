import { AxiosInstance, AxiosResponse } from "axios";
import { AxiosHandler } from "../utils/axios.handler";

const onResponse = (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
    return AxiosHandler.validateStatus(response.data) ? response : Promise.resolve(Promise.reject());
}

export function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.response.use(onResponse);
    return axiosInstance;
}