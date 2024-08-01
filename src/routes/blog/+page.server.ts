import type {PageServerLoad} from './$types';

export const load = (async () => {
	try {
		const paths = import.meta.glob(`../../posts/*.md`);

		for (const path in paths) {
			const file = await paths[path]();
			console.log(file);
		}
		return {};
	} catch (err) {
		console.error(err)
	}
}) satisfies PageServerLoad;
