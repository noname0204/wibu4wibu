import type { User, RefreshTokenResponse } from '~/types/api';
import type { LoginSchema } from '~/validations/auth';
import { createFetchClient } from './services';

const client = createFetchClient({ baseURL: '/auth', withCredentials: true });

const authFetch = {
  login: (data: LoginSchema) => client.post<User>('/login', data),
  register: (data: LoginSchema) => client.post<User>('/register', data),
  refresh: () => client.post<RefreshTokenResponse>('/refresh'),
};

export default authFetch;
