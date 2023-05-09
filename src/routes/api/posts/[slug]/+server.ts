import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import matter from 'gray-matter';
import { marked, Renderer } from 'marked';
// @ts-expect-error stop complaining about that
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';
const renderer = {
	heading(text, level) {
		const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
		return `
            <h${level} class="flex flex-row gap-2 items-center">
              <a name="${escapedText}" class="fill-primary p-2" href="#${escapedText}">
               <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px">
               	<path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"/>
               </svg>
              </a>
              ${text}
            </h${level}>`;
	},
	paragraph(text) {
		if (text.startsWith('<img')) return `<figure>${text}</figure>`;
		if (text.startsWith('<a')) return `${text}`;

		return '<p>' + text + '</p>';
	},
	image(href, title, text) {
		if (href === null) return text;
		let out = `<img loading="lazy" src='${href}' alt='${text}'`
		if (title) out += `title='${title}'`

		out += `/>`
		return `<figure>${out}</figure>`;
	},
} satisfies Renderer;

export const GET = (async ({ fetch, params }) => {
	const res = await fetch(
		`https://raw.githubusercontent.com/realfakenerd/blog/main/posts/${params.slug}.md`
	);
	const data = await res.text();
	const { content, data: fm } = matter(data);

	marked.use({ renderer })

	marked.use(markedHighlight({
		async: true,
		langPrefix: 'hljs language-',
		highlight(code: string, lang: string) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	}))
	const mark = await marked(content, {
		async: true,
		gfm: true,
		smartypants: true,
	});

	return json({
		content: mark,
		fm
	});
}) satisfies RequestHandler;
