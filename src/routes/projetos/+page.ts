import type { PageLoad } from './$types';

export const prerender = true;
export const load = (async ({ fetch }) => {
	const res = await fetch('/api/git/repo');
	const data = (await res.json()) as Repo[];
	return {
		repos: data,
		streamed: {
			org: fetch('/api/git/org').then((r) => r.json()) as Promise<Repo[]>
		}
	};
}) satisfies PageLoad;
