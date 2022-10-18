import { createClient } from 'redis'
import { PUBLIC_REDIS_API_CACHE } from '$env/static/public';

export const redis = createClient({ url: PUBLIC_REDIS_API_CACHE });
await redis.connect()
