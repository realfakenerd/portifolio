import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { fetchJSON } from '$lib/markdown/posts';

interface ContentType {
	content: string;
	fm: Fm;
}

export const load = (async ({ fetch, params }) => {
	try {
		const post = await fetchJSON<ContentType>(`/api/posts/${params.articleId}`, fetch);
		return {
			content: post.content,
			meta: post.fm
		};
	} catch (e) {
		throw error(404, `Could not find ${params.articleId}`);
	}
}) as PageServerLoad;
