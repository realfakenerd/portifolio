import { getPosts } from '$lib/markdown/posts';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;
export const GET = (async () => {
	const posts = await getPosts();
	return json(posts);
}) satisfies RequestHandler;
