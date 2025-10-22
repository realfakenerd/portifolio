import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import type { UserConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import removeConsole from 'vite-plugin-remove-console';

const config = {
	plugins: [
		tailwindcss(),
		enhancedImages(),
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
		target: 'esnext',
		terserOptions: {
			compress: {
				keep_infinity: true,
				pure_getters: true,
				drop_console: true
			}
		}
	},
	define: {
		'process.env': process.env
	}
} satisfies UserConfig;

export default config;
