const { Router } = require('express');
const authController = require('../controllers/auth');
const { verifyAccessToken, verifyRefreshToken } = require('../middlewares/verifyToken');

const authRoute = Router();

authRoute.post('/register', authController.register);
authRoute.post('/login', authController.login);
authRoute.post('/refresh', verifyAccessToken, verifyRefreshToken, authController.refresh);
authRoute.delete('/logout', verifyAccessToken, verifyRefreshToken, authController.logout);

module.exports = authRoute;
