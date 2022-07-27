import { Router } from 'express';
import authRouter from './auth.route';
import userRouter from './user.route';

const rootRoute = Router();

rootRoute.use('/auth', authRouter);
rootRoute.use('/user', userRouter);

export default rootRoute;
