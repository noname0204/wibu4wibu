const config = require('../utils/config');

const setCookie = (res, key, value, opts = {}) => {
  const options = {
    httpOnly: true,
    sameSite: 'strict',
    secure: config.env === 'PRODUCTION',
    ...opts,
  };
  res.cookie(key, value, options);
};

module.exports = setCookie;
