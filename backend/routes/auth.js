const { Router } = require('express');
const authController = require('../controllers/auth');
const { verifyRefreshToken, verifyAccessToken } = require('../middlewares/verifyToken');

const authRoute = Router();

authRoute.post('/register', authController.register);
authRoute.post('/login', authController.login);
authRoute.get('/refresh-token', verifyRefreshToken, authController.refreshToken);
authRoute.post('/refresh', verifyAccessToken, authController.refresh);
authRoute.delete('/logout', verifyAccessToken, authController.logout);

module.exports = authRoute;
