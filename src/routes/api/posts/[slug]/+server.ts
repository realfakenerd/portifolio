import { getPost } from '$lib/markdown/posts';
import { error } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
export const GFT = (async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		return json(post);
	} catch (e) {
		console.log(e);
		
		throw error(404, `Could not find ${params.articleId}`);
	}
});
