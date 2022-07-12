const jwt = require('jsonwebtoken');
const httpErrors = require('http-errors');
const config = require('../utils/config');
const redis = require('../db/redis');

module.exports = {
  verifyAccessToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return next(new httpErrors.Unauthorized());
    const token = authHeader.split(' ')[1];

    if (!token) return next(new httpErrors.Unauthorized('Unvalid access token'));

    jwt.verify(token, config.jwt.accessKey, (error, payload) => {
      if (error) {
        if (error.message === 'jwt expired') {
          return next(new httpErrors.Unauthorized('Token expired'));
        }

        return next(new httpErrors.Unauthorized('Unvalid access token'));
      }
      req.tokenPayload = payload;
      next();
    });
  },
  verifyRefreshToken(req, res, next) {
    const refreshToken = req.cookies['refresh_token'];
    if (!refreshToken) return next(new httpErrors.Unauthorized('Unvalid refresh token'));

    jwt.verify(refreshToken, config.jwt.refreshKey, (error, payload) => {
      if (error) {
        if (error.message === 'jwt expired') {
          return next(new httpErrors.Unauthorized('Token expired'));
        }

        return next(new httpErrors.Unauthorized('Unvalid refresh token'));
      }

      redis.get(payload.id, (error, reply) => {
        if (error) return next(new httpErrors.InternalServerError());
        if (refreshToken !== reply) return next(new httpErrors.Unauthorized());

        req.tokenPayload = payload;
        next();
      });
    });
  },
};
