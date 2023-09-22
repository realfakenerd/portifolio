import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess()
	],

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			split: true,
			regions: ['gru1']
		})
	}
};

export default config;
