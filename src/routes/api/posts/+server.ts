import type { RequestHandler } from './$types';
import { BUTTER_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { Post } from '$lib/fromButter';
export const GET: RequestHandler = async ({ fetch }) => {
	const base = 'https://api.buttercms.com/v2/';
	const url = `${base}posts/?auth_token=${BUTTER_API_KEY}`;
	const res = await fetch(url);
    const data = await res.json();

    const rdata = (data.data as Post[]).map(val => ({
        slug: val.slug,
        url: val.url,
        image: {
            url: val.featured_image,
            alt: val.featured_image_alt
        },
        title: val.title,
        tags: val.tags.map(val => val.name),
        published: val.published,
        summary: val.summary
    }));

    return json(rdata);
};


