import Axios, {AxiosInstance} from 'axios';

export const findRetrosAPI: AxiosInstance = Axios.create({
  baseURL: 'https://findretros.com/legacy',
});
