import jwt from 'jsonwebtoken';
import httpErrors from 'http-errors';
import redis from '~/db/redis';
import config from './config';

export interface TokenPayload {
  id: string;
  role: 'user' | 'admin';
}

export const signAccessToken = async ({ id, role }: TokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id, role };
    const options = {
      expiresIn: '2h',
    };

    jwt.sign(payload, config.jwt.accessKey, options, (error, token) => {
      if (error) return reject(error);
      if (!token) {
        return reject(
          new httpErrors.InternalServerError('Error when sign refresh token')
        );
      }
      resolve(token);
    });
  });
};

export const signRefreshToken = async ({ id, role }: TokenPayload): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { id, role };
    const expiresTime = 7 * 24 * 60 * 60; // 1 week
    const options = {
      expiresIn: expiresTime,
    };

    jwt.sign(payload, config.jwt.refreshKey, options, (error, token) => {
      if (error) return reject(error);
      if (!token) {
        return reject(
          new httpErrors.InternalServerError('Error when sign refresh token')
        );
      }

      redis.set(id, token, 'EX', expiresTime, (error) => {
        if (error) {
          return reject(
            new httpErrors.InternalServerError(
              'Error when save refresh token to blacklist'
            )
          );
        }

        resolve(token);
      });
    });
  });
};
