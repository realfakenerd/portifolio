import { PRIVATE_GIT_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, setHeaders }) => {
	setHeaders({
		Authorization: `Bearer ${PRIVATE_GIT_TOKEN}`
	});
	const res = await fetch('https://api.github.com/users/realfakenerd/repos');
	return json(await res.json());
}) satisfies RequestHandler;
