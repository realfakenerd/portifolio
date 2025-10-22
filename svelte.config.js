import { preprocessMeltUI } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), preprocessMeltUI()],

	compilerOptions: {
		experimental: {
			async: true
		}
	},
	kit: {
		adapter: adapter({
			runtime: 'edge',
			split: true
		}),
		experimental: { remoteFunctions: true }
	}
};

export default config;
