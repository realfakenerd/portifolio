import matter from 'gray-matter';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import parseHtmlAndMarkdown from 'rehype-raw';
import toHtml from 'rehype-stringify';
import remarkHeadings from 'remark-autolink-headings';
import remarkGfm from 'remark-gfm';
import fromMarkdown from 'remark-parse';
import fromMarkdownToHtml from 'remark-rehype';
import remarkSlug from 'remark-slug';
import remarkSmartypants from 'remark-smartypants';
import remarkTableofContents from 'remark-toc';
import { unified } from 'unified';
import { rehypeCopyCode, rehypeUnwrapImages } from './plugins';
import searchAndReplace from './searchAndReplace';

interface ContentType {
	content: string;
	fm: Fm;
}

async function processesMarkdown(markdown: string) {
	const { content, data } = matter(markdown);

	const processor = unified()
		.use(fromMarkdown)
		.use([
			remarkGfm,
			remarkHeadings,
			remarkSlug,
			remarkSmartypants,
			[remarkTableofContents, { tight: true }]
		])
		.use(fromMarkdownToHtml, { allowDangerousHtml: true })
		.use(rehypeCodeTitles)
		.use(rehypePrism)
		.use(parseHtmlAndMarkdown)
		.use(rehypeUnwrapImages)
		.use(rehypeCopyCode)
		.use(toHtml);

	const processed = await processor.process(searchAndReplace(content, data.slug));
	const result = {
		content: processed.value as string,
		fm: data as Fm
	} as ContentType;

	return result;
}

async function markdownToHTML(markdown: string) {
	const processedMarkdown = await processesMarkdown(markdown);

	return processedMarkdown;
}

export default markdownToHTML;
