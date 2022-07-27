import type { UpdateUser } from '~/types/validations';
import joi from 'joi';

export const updateUserValidation = (data: unknown) => {
  const schema = joi.object<UpdateUser>({
    username: joi.string().min(3).max(10).optional(),
    avatarURL: joi.string().uri().optional(),
    password: joi.string().min(3).optional(),
  });

  return schema.validate(data);
};
