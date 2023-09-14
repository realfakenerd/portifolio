import type { PageServerLoad } from './$types';
import { getPost } from '$lib/markdown/posts';
import { error } from '@sveltejs/kit';
export const load = (async ({ params }) => {
	try {
		const post = await getPost(params.articleId);
		return {
			content: post.content,
			fm: post.fm
		};
	} catch (e) {
		throw error(404, `Could not find ${params.articleId}`);
	}
}) as PageServerLoad;
