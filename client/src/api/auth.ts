import axios from 'axios';
import type { User } from '~/types/api';
import type { LoginSchema } from '~/validations/auth';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/auth',
  withCredentials: true,
});

const authFetch = {
  login: (data: LoginSchema) => client.post<User>('/login', data),
  register: (data: LoginSchema) => client.post<User>('/register', data),
};

export default authFetch;
