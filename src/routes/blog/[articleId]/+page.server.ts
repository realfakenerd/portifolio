import type { PageServerLoad } from './$types';
import { getPost } from '$lib/markdown/posts';
import { error } from '@sveltejs/kit';
export const load = (async ({ params }) => {
	try {
		const post = await getPost(params.articleId);
		return {
			content: post.content,
			meta: post.fm
		};
	} catch (e) {
		console.log(e);
		
		throw error(404, `Could not find ${params.articleId}`);
	}
}) as PageServerLoad;
