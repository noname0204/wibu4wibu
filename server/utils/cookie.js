const config = require('../utils/config');

const setCookie = (res, key, value, opts = {}) => {
  const options = {
    ...opts,
    httpOnly: true,
    sameSite: 'strict',
    secure: config.env === 'PRODUCTION',
  };
  res.cookie(key, value, options);
};

module.exports = setCookie;
