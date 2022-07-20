import type { RegisterValidation, LoginValidation } from '~/types/validations';
import joi from 'joi';

export const registerValidation = (data: unknown) => {
  const schema = joi.object<RegisterValidation>({
    username: joi.string().min(3).max(10).required(),
    avatarURL: joi.string().uri().optional(),
    password: joi.string().min(3).required(),
  });

  return schema.validate(data);
};

export const loginValidation = (data: unknown) => {
  const schema = joi.object<LoginValidation>({
    username: joi.string().min(3).max(10).required(),
    password: joi.string().min(3).required(),
  });

  return schema.validate(data);
};
