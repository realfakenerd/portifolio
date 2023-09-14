import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Post } from '$lib/lib';
export const GET = (async ({ fetch }) => {
	try {
		let posts: Post[] = [];

		const res = await fetch(
			'https://raw.githubusercontent.com/realfakenerd/blog/main/articles.json'
		);
		const data = (await res.json()) as Post[];
		for (const post of data) {
			post.fm.published && posts.push(post);
		}

		posts = posts.sort((f, s) => new Date(s.fm.date).getTime() - new Date(f.fm.date).getTime());
		return json(posts);
	} catch {
		return json({});
	}
}) satisfies RequestHandler;
