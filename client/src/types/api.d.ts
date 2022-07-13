export interface User {
  id: string;
  username: string;
  avatarURL: string | null;
  role: 'user' | 'admin';
}

export interface UserResponse extends User {
  accessToken: string;
}

export interface FetchingResponseError {
  status: number;
  message: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
}
