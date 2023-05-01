import type { LayoutLoad } from './$types';

export interface Posts {
	total: number;
	articles: Article[];
}

export interface Article {
	id: number;
	article_name: string;
	summary: string;
}

export const load: LayoutLoad = async ({ fetch }) => {
	const res = await fetch('https://raw.githubusercontent.com/realfakenerd/blog/main/articles.json');
	return {
		posts: (await res.json()) as Posts
	};
};
