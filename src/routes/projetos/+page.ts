import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/git/repo');
	const data = (await res.json()) as Repo[];
	return {
		repos: data
	};
}) satisfies PageLoad;
