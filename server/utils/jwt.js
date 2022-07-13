const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const redis = require('../db/redis');

module.exports = {
  async signAccessToken({ id, role }) {
    return new Promise((resolve, reject) => {
      const payload = { id, role };
      const options = {
        expiresIn: '2h',
      };

      jwt.sign(payload, config.jwt.accessKey, options, (error, token) => {
        if (error) return reject(error);
        resolve(token);
      });
    });
  },
  async signRefreshToken({ id, role }) {
    return new Promise((resolve, reject) => {
      const payload = { id, role };
      const expiresTime = 7 * 24 * 60 * 60; // 1 week
      const options = {
        expiresIn: expiresTime,
      };

      jwt.sign(payload, config.jwt.refreshKey, options, (error, token) => {
        if (error) return reject(error);

        redis.set(id, token, 'EX', expiresTime, (error) => {
          if (error) return reject(new httpErrors.InternalServerError());

          resolve(token);
        });
      });
    });
  },
};
