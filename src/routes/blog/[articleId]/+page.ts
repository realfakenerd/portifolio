import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

interface ContentType {
	metadata: Post;
	default: () => unknown;
}

export const load = (async ({ params }) => {
	try {
		const post = (await import(`../../../posts/${params.articleId}.md`)) as ContentType;
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch {
		throw error(404, `Could not find ${params.articleId}`);
	}
}) as PageLoad;
