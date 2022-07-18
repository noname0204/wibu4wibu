const { Router } = require('express');
const authRoute = require('./auth');

const rootRoute = Router();

rootRoute.use('/auth', authRoute);

module.exports = rootRoute;
