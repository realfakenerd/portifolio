import { PRIVATE_GIT_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = true;
export const GET = (async ({ fetch, setHeaders }) => {
	setHeaders({
		Authorization: `Bearer ${PRIVATE_GIT_TOKEN}`
	});
	const res = await fetch('https://api.github.com/users/realfakenerd/repos');
	const data = (await res.json()) as Repo[];
	const filteredData = data.filter(
		(e) => e.name !== 'portifolio' && e.name !== 'realfakenerd' && e.description
	);

	return json(filteredData);
}) satisfies RequestHandler;
