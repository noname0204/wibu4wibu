const { Router } = require('express');
const authController = require('../controllers/auth');

const authRoute = Router();

authRoute.post('/register', authController.register);

module.exports = authRoute;
