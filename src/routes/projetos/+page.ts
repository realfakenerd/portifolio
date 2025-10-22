import type { PageLoad } from './$types';

export const prerender = true;
export const load = (async ({ fetch }) => {
	const [repo_res, org_res] = await Promise.all([
		fetch('/api/git/repo'),
		fetch('/api/git/org')
	]);
	return {
		repos: (await repo_res.json()) as Repo[],
		org: (await org_res.json()) as Repo[]
	};
}) satisfies PageLoad;
