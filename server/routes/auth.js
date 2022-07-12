const { Router } = require('express');
const authController = require('../controllers/auth');
const { verifyRefreshToken } = require('../middlewares/verifyToken');

const authRoute = Router();

authRoute.post('/register', authController.register);
authRoute.post('/login', authController.login);
authRoute.post('/refresh-token', verifyRefreshToken, authController.refreshToken);
authRoute.post('/refresh', verifyRefreshToken, authController.refresh);
authRoute.delete('/logout', verifyRefreshToken, authController.logout);

module.exports = authRoute;
