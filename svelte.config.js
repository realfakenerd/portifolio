import { preprocessMeltUI } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocessMeltUI()],

	kit: {
		adapter: adapter({
			split: true,
			regions: ['gru1']
		}),
		inlineStyleThreshold: 5120
	}
};

export default config;
