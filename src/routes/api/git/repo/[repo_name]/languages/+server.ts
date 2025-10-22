import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PRIVATE_GIT_TOKEN } from '$env/static/private';

export const GET = (async ({ fetch, params }) => {
	const url = `https://api.github.com/repos/realfakenerd/${params.repo_name}/languages`;
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${PRIVATE_GIT_TOKEN}`
		}
	});
	const data = (await response.json()) as Record<string, number>;

	return json(data, {
		headers: {
			'Cache-Control': 'max-age=86400'
		}
	});
}) satisfies RequestHandler;
