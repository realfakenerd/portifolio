import type { LayoutLoad } from './$types';
import type { Post } from '$lib/lib';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}) satisfies LayoutLoad;
