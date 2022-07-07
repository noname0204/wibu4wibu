import { AxiosResponse } from 'axios';
import { camelizeKeys } from 'humps';

export const transformResponseToCamelCase = (response: AxiosResponse) => {
  if (response.data) response.data = camelizeKeys(response.data);

  return response;
};
