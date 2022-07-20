import Redis from 'ioredis';
import config from '~/utils/config';

const redis = new Redis({
  ...config.redis,
});

redis.on('ready', () => {
  console.log('Redis ready');
});

redis.on('error', (error) => {
  console.log('Redis error ::', error);
});

export default redis;
