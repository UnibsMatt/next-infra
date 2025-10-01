import { createClient } from 'redis';

let redis: ReturnType<typeof createClient>;
const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

export function getRedisClient() {
  if (!redis) {
    redis = createClient({ url: REDIS_URL });
    redis.connect().catch(console.error);
  }
  return redis;
}
