import { BUTTER_API_KEY } from '$env/static/private';
import type { AllPosts } from '$lib/fromButter';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, params }) => {
	const base = 'https://api.buttercms.com/v2/';
	const url = `${base}posts/${params.id}/?auth_token=${BUTTER_API_KEY}`;
	const res = await fetch(url);
	const { data, meta } = (await res.json()) as AllPosts;

	const rdata = {
		published: data.published,
		updated: data.updated,
        title: data.title,
        body: data.body,
        tags: data.tags.map(tag => tag.name),
        categorias: data.categories.map(cat => cat.name),
		image: {
			url: data.featured_image,
			alt: data.featured_image_alt
		},
		seo: {
			meta_description: data.meta_description,
			seo_title: data.seo_title
		},
		nextPost: {
			slug: meta.next_post?.slug,
			image: meta.next_post?.featured_image,
			title: meta.next_post?.title
		},
		previousPost: {
			slug: meta.previous_post?.slug,
			image: meta.previous_post?.featured_image,
			title: meta.previous_post?.title
		}
	};
	return json(rdata);
};
