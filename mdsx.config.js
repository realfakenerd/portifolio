import { resolve } from 'path';
import rehypeSlug from 'rehype-slug';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGfm from 'remark-gfm';
import codeImport from 'remark-code-import';
import rehypePrettyCode from 'rehype-pretty-code';
import { fileURLToPath } from 'url';
import { getHighlighter } from 'shiki/index.mjs';
import { readFileSync } from 'fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('rehype-pretty-code').Options} */
export const prettyCodeOptions = {
	theme: JSON.parse(String(readFileSync(resolve(__dirname, './dark.json')))),
	getHighlighter: (options) =>
		getHighlighter({
			...options,
			langs: [
				'plaintext',
				import('shiki/langs/javascript.mjs'),
				import('shiki/langs/typescript.mjs'),
				import('shiki/langs/css.mjs'),
				import('shiki/langs/svelte.mjs'),
				import('shiki/langs/shell.mjs'),
				import('shiki/langs/markdown.mjs')
			]
		}),
	keepBackground: false,
	onVisitLine(node) {
		// @ts-expect-error - we're changing the node type
		node.children = { type: 'text', value: ' ' };
	},
	onVisitHighlightedLine(node) {
		node.properties.className = ['line--highlighted'];
	},
	onVisitHighlightedChars(node) {
		node.properties.className = ['chars--highlighted'];
	}
};

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md'],
	layout: resolve(__dirname, './src/lib/components/mdsvex/mdsvex.svelte'),
	smartypants: {
		quotes: true,
		ellipses: false,
		backticks: true,
		dashes: false
	},
	rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
	remarkPlugins: [remarkUnwrapImages, codeImport, remarkGfm]
};
