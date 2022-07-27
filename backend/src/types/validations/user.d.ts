import { UserModel } from '../models';

export type UpdateUser = Omit<UserModel, 'role'>;
