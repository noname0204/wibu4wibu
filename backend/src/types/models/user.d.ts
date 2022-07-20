interface UserModel {
  username: string;
  avatarURL: string | null;
  role: 'user' | 'admin';
  password: string;
}

export interface User extends Omit<UserModel, 'password'> {
  id: string;
}

export default UserModel;
