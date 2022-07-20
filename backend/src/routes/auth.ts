import { Router } from 'express';
import * as authController from '~/controllers/auth';
import { verifyAccessToken, verifyRefreshToken } from '~/middlewares/verifyToken';

const authRoute = Router();

authRoute.post('/register', authController.register);
authRoute.post('/login', authController.login);
authRoute.get('/refresh-token', verifyRefreshToken, authController.refreshToken);
authRoute.post('/refresh', verifyAccessToken, authController.refresh);
authRoute.delete('/logout', verifyAccessToken, authController.logout);

export default authRoute;
