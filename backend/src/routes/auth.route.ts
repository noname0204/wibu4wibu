import { Router } from 'express';
import * as authController from '~/controllers/auth.controller';
import { verifyAccessToken, verifyRefreshToken } from '~/middlewares/verifyToken';

const authRouter = Router();

authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/refresh-token', verifyRefreshToken, authController.refreshToken);
authRouter.post('/refresh', verifyAccessToken, authController.refresh);
authRouter.delete('/logout', verifyAccessToken, authController.logout);

export default authRouter;
