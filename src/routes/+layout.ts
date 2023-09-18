import type { LayoutLoad } from './$types';

export const prerender = true;
export const load = (async ({ url }) => {
	return {
		currentRoute: url.pathname
	};
}) satisfies LayoutLoad;
