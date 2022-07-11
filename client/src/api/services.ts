import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { camelizeKeys } from 'humps';

export const transformResponseToCamelCase = (response: AxiosResponse) => {
  if (response.data) response.data = camelizeKeys(response.data);
  return response;
};

export const createFetchClient = (options: AxiosRequestConfig) => {
  const fetchClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL + options.baseURL,
    ...options,
  });
  fetchClient.interceptors.response.use(transformResponseToCamelCase);

  return fetchClient;
};
