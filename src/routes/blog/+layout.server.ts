import { fetchJSON } from '$lib/markdown/posts';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetchJSON<Post[]>('/api/posts', fetch);
	const publishedPosts = res.filter(({ draft }) => !draft);

	return { posts: publishedPosts };
}) satisfies LayoutServerLoad;
