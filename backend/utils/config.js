const env = require('env-var');
require('dotenv').config();

module.exports = {
  redis: {
    host: env.get('REDIS_HOST').required().asString(),
    port: env.get('REDIS_PORT').required().asPortNumber(),
    username: env.get('REDIS_USERNAME').required().asString(),
    password: env.get('REDIS_PASSWORD').required().asString(),
  },
  jwt: {
    accessKey: env.get('JWT_ACCESS_KEY').required().asString(),
    refreshKey: env.get('JWT_REFRESH_KEY').required().asString(),
  },
  databaseURL: env.get('DB_URL').required().asString(),
  port: env.get('PORT').default(8000).asPortNumber(),
  env: env.get('ENV').default('PRODUCTION').asString(),
};
