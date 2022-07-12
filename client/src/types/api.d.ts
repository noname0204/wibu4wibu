export interface User {
  id: string;
  username: string;
  avatarURL: string | null;
  role: 'user' | 'admin';
  accessToken: string;
}

export interface FetchingResponseError {
  status: number;
  message: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
}
