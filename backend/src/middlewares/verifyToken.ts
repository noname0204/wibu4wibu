import type { Handler } from 'express';
import type { TokenPayload } from '~/utils/jwt';
import jwt from 'jsonwebtoken';
import httpErrors from 'http-errors';
import config from '~/utils/config';
import redis from '~/db/redis';

export const verifyAccessToken: Handler = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return next(new httpErrors.Unauthorized());
  const token = authHeader.split(' ')[1];

  if (!token) return next(new httpErrors.Unauthorized('Invalid access token'));

  jwt.verify(token, config.jwt.accessKey, (error, payload) => {
    if (error) {
      if (error.message === 'jwt expired') {
        return next(new httpErrors.Forbidden('Token expired'));
      }

      return next(new httpErrors.Unauthorized('Invalid access token'));
    }
    req.body.payload = payload as TokenPayload;
    next();
  });
};

export const verifyRefreshToken: Handler = (req, res, next) => {
  const refreshToken = req.cookies['refresh_token'] as string;
  if (!refreshToken) return next(new httpErrors.Unauthorized('Invalid refresh token'));

  jwt.verify(refreshToken, config.jwt.refreshKey, (error, payload) => {
    if (error) {
      if (error.message === 'jwt expired') {
        return next(new httpErrors.Unauthorized('Token expired'));
      }

      return next(new httpErrors.Unauthorized('Invalid refresh token'));
    }

    const tokenPayload = payload as TokenPayload;

    redis.get(tokenPayload.id, (error, reply) => {
      if (error) return next(new httpErrors.InternalServerError());
      if (refreshToken !== reply) {
        return next(new httpErrors.Unauthorized('Invalid refresh token'));
      }

      req.body.payload = tokenPayload;
      next();
    });
  });
};
