import matter from 'gray-matter';
import parseHtmlAndMarkdown from 'rehype-raw';
import toHtml from 'rehype-stringify';
import fromMarkdown from 'remark-parse';
import fromMarkdownToHtml from 'remark-rehype';
import { unified } from 'unified';

// plugins
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import remarkHeadings from 'remark-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import remarkSmartypants from 'remark-smartypants';
import remarkTableofContents from 'remark-toc';
import { rehypeCopyCode, rehypeUnwrapImages } from './plugins';
import searchAndReplace from './searchAndReplace';

interface ContentType {
	content: string;
	frontmatter: Fm;
}

async function markdownToHTML(markdown: string): Promise<ContentType> {
	const { content, data } = matter(markdown);

	// I could use `compile` from mdsvex to get
	// Svelte components working inside Markdown
	const result = await unified()
		.use(fromMarkdown)
		.use([
			// GitHub flavored Markdown
			remarkGfm,

			// Unique identifier for headings
			remarkHeadings,

			// Links for headings
			remarkSlug,

			// Typographic punctuation like real quotes
			remarkSmartypants,

			// Generates table of contents from headings
			// `tight` removes <p> from <li> when nested
			[remarkTableofContents, { tight: true }]
		])
		// To be able to parse a mix of Markdown and HTML
		// `remark-rehype` is required with `rehype-raw`
		// https://github.com/rehypejs/rehype-raw
		.use(fromMarkdownToHtml, { allowDangerousHtml: true })

		// Adds code titles above code blocks
		.use(rehypeCodeTitles)

		// Adds syntax highlight, line numbers and higlight
		.use(rehypePrism)

		// For further processing turn content into a regular syntax tree
		.use(parseHtmlAndMarkdown)

		// Remove paragraph around images
		.use(rehypeUnwrapImages)

		// Copy code to clipboard
		.use(rehypeCopyCode)

		.use(toHtml)
		.process(searchAndReplace(content, data.slug));
	const processedMarkdown = result.value;

	return {
		content: processedMarkdown as string,
		frontmatter: data as Fm
	};
}

export default markdownToHTML;
