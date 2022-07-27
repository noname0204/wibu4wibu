import { Router } from 'express';
import * as userController from '~/controllers/user.controller';
import { verifyAccessToken } from '~/middlewares/verifyToken';

const userRouter = Router();

userRouter.post('/update', verifyAccessToken, userController.updateUser);

export default userRouter;
