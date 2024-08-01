import type { LayoutLoad } from './$types';
import { _api } from '@iconify/svelte';

export const load = (async ({ fetch, url }) => {
	_api.setFetch(fetch);

	return {
		currentRoute: url.pathname
	};
}) satisfies LayoutLoad;
