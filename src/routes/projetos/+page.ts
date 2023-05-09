import type { PageLoad } from './$types';
import type { Repo } from '$lib/lib';
export const prerender = true;
export const load = (async ({ fetch }) => {
	const res = await fetch('/api/git/repo');
	const data = (await res.json()) as Repo[];
	return {
		repos: data
	};
}) satisfies PageLoad;
