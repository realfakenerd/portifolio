import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import lightningCSS from 'vite-plugin-lightningcss';
// @ts-expect-error complaining about not having a type;
import removeConsole from 'vite-plugin-remove-console';
const config = {
	plugins: [
		enhancedImages(),
		sveltekit(),
		lightningCSS({
			browserslist: '> 1%'
		}),
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
	server: {
		fs: {
			allow: ['..']
		}
	},
	build: {
		minify: 'terser',
		reportCompressedSize: false,
		target: 'esnext',
		terserOptions: {
			compress: {
				unsafe: true,
				unsafe_comps: true,
				unsafe_math: true,
				unsafe_proto: true,
				pure_funcs: ['console.log'], // Lista de funções a serem removidas
				passes: 3
			},
			
			format: {
				comments: false
			}
		}
	},
	define: {
		'process.env': process.env
	}
} satisfies UserConfig;

export default config;