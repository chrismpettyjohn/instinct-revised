import Axios, {AxiosInstance} from 'axios';

export const googleRecaptchaAPI: AxiosInstance = Axios.create({
  baseURL: 'https://www.google.com/recaptcha/api/',
});
