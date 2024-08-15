import { preprocessMeltUI } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-vercel';
import { sveltedown } from './sveltedown.js';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [sveltedown(), vitePreprocess(), preprocessMeltUI()],

	kit: {
		adapter: adapter({
			split: true,
			regions: ['gru1']
		}),
		inlineStyleThreshold: 5120
	}
};

export default config;
