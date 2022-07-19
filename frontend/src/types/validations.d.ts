import z from 'zod';
import { loginSchema } from '~/validations/auth';

export type LoginValidation = z.infer<typeof loginSchema>;
export type RegisterValidation = z.infer<typeof registerSchema>;
