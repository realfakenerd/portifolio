import { PRIVATE_GIT_TOKEN } from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const res = await fetch('https://api.github.com/users/aurijs/repos', {
		headers: {
			Authorization: `Bearer ${PRIVATE_GIT_TOKEN}`
		}
	});
	const data = (await res.json()) as Repo[];
	const filteredRepo = data.filter((e) => e.description);

	return json(filteredRepo, {
		headers: {
			'Cache-Control': 'max-age=86400'
		}
	});
};
