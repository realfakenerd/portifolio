import { error } from '@sveltejs/kit';
import type { PageLoadEvent } from './$types';
import type { SinglePost } from '$lib/lib';
export async function load({ params, fetch }: PageLoadEvent) {
	try {
		const res = await fetch(`/api/posts/${params.articleId}`);
		const data = (await res.json()) as SinglePost;
		return {
			content: data.content,
			meta: data.fm
		};
	} catch (e) {
		throw error(404, `Could not find ${params.articleId}`);
	}
}
