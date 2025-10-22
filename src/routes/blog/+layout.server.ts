import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const posts: Post[] = [];
	const paths = import.meta.glob<Post[]>('/src/posts/*.md');
	for (const path in paths) {
		const file = await paths[path]();
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && posts.push(post);
		}
	}

	return { posts };
}) satisfies LayoutServerLoad;

export const config = {
	isr: {
		expiration: 60
	}
};
