const Redis = require('ioredis');
const config = require('../utils/config');

const redis = new Redis({
  ...config.redis,
});

redis.on('ready', () => {
  console.log('Redis ready');
});

redis.on('error', (error) => {
  console.log('Redis error ::', error);
});

module.exports = redis;
