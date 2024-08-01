import type { PageLoad } from "./$types";

export const load = (async ({params}) => {
	const post = await import(`../../../posts/${params.post}.md`);


	return {
		post
	};
})satisfies PageLoad;