import type { Article } from '$lib/fromAPI';
import type { PageLoadEvent } from './$types';

export async function load({ fetch, params }: PageLoadEvent) {
	const res = await fetch(`/api/post/${params.articleId}`);

	return {
		article: (await res.json()) as Article
	};
}
