import Redis from 'ioredis';
import { PUBLIC_REDIS_API_CACHE } from '$env/static/public';

const redis = new Redis(PUBLIC_REDIS_API_CACHE);

export async function cacheBlogArticles(id: string, cache: any) {
	try {
		// store movie response for 24 hours
		await redis.set(id, JSON.stringify(cache), 'EX', 24 * 60 * 60);
	} catch (e) {
		console.log('Unable to cache', id, e);
	}
}

export default redis;
