import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { mdsvexOptions } from './mdsx.config.js';
import {preprocessMeltUI} from '@melt-ui/pp'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess(), preprocessMeltUI()],

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			split: true,
			regions: ['gru1']
		})
	}
};

export default config;
