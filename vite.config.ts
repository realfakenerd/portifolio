import { sveltekit } from '@sveltejs/kit/vite';
// @ts-ignore
import removeConsole from 'vite-plugin-remove-console';
import viteCompression from 'vite-plugin-compression';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		removeConsole(),
		viteCompression({
			algorithm: 'brotliCompress',
			verbose: false,
			threshold: 512,
			compressionOptions: {
				level: 3
			}
		})
	],
	build: {
		minify: 'terser',
		reportCompressedSize: false,
		target: 'esnext'
	}
};

export default config;
