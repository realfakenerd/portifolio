import type { GitUser } from '$lib/lib';

export const prerender = true;

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/git/user');
	const data = await res.json();

	return {
		user: data as GitUser
	};
});
