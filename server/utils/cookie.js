const config = require('../utils/config');

const setCookie = (res, key, value, opts = {}) => {
  const options = {
    httpOnly: true,
    sameSite: 'strict',
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week
    secure: config.env === 'PRODUCTION',
    ...opts,
  };
  res.cookie(key, value, options);
};

module.exports = setCookie;
