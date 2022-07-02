import axios from 'axios';

const authFetch = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/auth',
  withCredentials: true,
});

export default authFetch;
