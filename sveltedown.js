import { unified } from 'unified'
import toMarkdownAST from 'remark-parse'
import toHtmlAST from 'remark-rehype'
import toHtmlString from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkSmartypants from 'remark-smartypants'
import rehypeShiki from '@shikijs/rehype'
import matter from 'gray-matter'


/** @type {import('unified').Plugin} */
const plugin = () => {
	console.log('i was used');
}

/**
 * 
 * @param {string} content 
 */
async function parseMarkdown(content) {
	const processor = await unified()
	.use(toMarkdownAST)
	.use(plugin)
		.use([remarkGfm, remarkSmartypants])
		.use(toHtmlAST, { allowDangerousHtml: true })
		.use(rehypeShiki, { theme: 'andromeeda' })
		.use(toHtmlString, { allowDangerousHtml: true })
		.process(content);

	return processor.toString();
}

/**
 * 
 * @param {string} content 
 */
function escapeHtml(content) {
	content = content.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
	const componentRegex = /<A-Z].*/g;
	const components = content.match(componentRegex);
	components?.forEach(component => {

		const replaced = component.replace('&#123;', '{').replace('&#125;', '}')
		content = content.replace(component, replaced);
	})

	return content;
}

/**
 * 
 * @param {string} content 
 */
function frontmatter(content) {
	const { content: markdown, data } = matter(content);
	const meta = `
		<script context="module">
			export const metadata = ${JSON.stringify(data)}
		</script>
	`
	return { meta, markdown }
}


/**
 * 
 * @returns {import('svelte/compiler').PreprocessorGroup}
 */
export function sveltedown() {
	return {
		name: 'sveltedown',
		async markup({ content, filename }) {
			if (filename?.endsWith('.md')) {
				const { meta, markdown } = frontmatter(content);
				const html = await parseMarkdown(markdown);
				const code = escapeHtml(html);
				console.log(html)
				return {
					code: code + meta
				}
			}
		}
	}
}
