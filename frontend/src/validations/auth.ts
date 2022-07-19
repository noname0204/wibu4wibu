import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, 'Name must have at least 3 letters')
    .max(10, 'Name must have a maximum of 10 letters'),
  password: z.string().min(3, 'Password must have at least 3 letters'),
});
export const loginResolver = zodResolver(loginSchema);

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Name must have at least 3 letters')
      .max(10, 'Name must have a maximum of 10 letters'),
    password: z.string().min(3, 'Password must have at least 3 letters'),
    confirmPassword: z.string().min(1, 'Confirm password must be not empty'),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: 'Password and confirm password must match',
    path: ['confirmPassword'],
  });
export const registerResolver = zodResolver(registerSchema);
