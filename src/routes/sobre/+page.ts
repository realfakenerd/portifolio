import type { GitUser } from '$lib/lib';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/git/user');
	const data = await res.json();

	return {
		user: data as GitUser
	};
}) satisfies PageLoad;
