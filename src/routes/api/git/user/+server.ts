import { PRIVATE_GIT_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;
export const GET = (async ({ fetch }) => {
	const res = await fetch('https://api.github.com/users/realfakenerd', {
		headers: {
			Authorization: `Bearer ${PRIVATE_GIT_TOKEN}`
		}
	});

	const data = await res.json();

	return json(data, {
		headers: {
			'Cache-Control': 'max-age=86400'
		}
	});
}) satisfies RequestHandler;
