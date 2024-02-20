import { getPost } from '$lib/markdown/posts';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ params }) => {
	try {
		const post = await getPost(params.slug);
		return json(post);
	} catch (e) {
		console.log(e);

		throw error(404, `Could not find ${params.slug}`);
	}
}) satisfies RequestHandler;
