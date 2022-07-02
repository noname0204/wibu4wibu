export interface User {
  username: string;
  avatarURL: string;
  role: 'user' | 'admin';
  accessToken: string;
}
