import Axios, {AxiosInstance} from 'axios';

export const backendAPI: AxiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API ?? '/api',
});

export function setAPIToken(bearerToken?: string): void {
  backendAPI.defaults.headers.Authorization = `Bearer ${bearerToken}`;
}
