import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load = (async ({ fetch, params }) => {
	try {
		const post = await fetchJSON<Post[]>(`/api/posts/${params.articleID}`, fetch);
		return {
			content: post.content,
			meta: post.fm
		};
	} catch (e) {
		console.log(e);
		
		throw error(404, `Could not find ${params.articleId}`);
	}
}) as PageServerLoad;
