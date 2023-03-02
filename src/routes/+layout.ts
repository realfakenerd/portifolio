import type { Author } from '$lib/fromAPI';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url, fetch }) => {
	const currentRoute = url.pathname;
	const res = await fetch('/api/author');
	const data = await res.json() as Author;
	return {
		currentRoute,
		authorData: data
	};
};

