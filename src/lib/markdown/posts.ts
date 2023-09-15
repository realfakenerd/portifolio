import { readdir, readFile } from 'fs/promises';
import matter from 'gray-matter';
import { join, resolve } from 'path';
import markdownToHTML from './markdownToHtml';

type Fetch = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
export async function fetchJSON<T>(url: string, fetchFn: Fetch = fetch) {
	const response = await fetchFn(url);
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`);
	return (await response.json()) as Promise<T>;
}

async function parseMarkdownFiles() {
	try {
		const posts: Post[] = [];
		const postsPath = resolve('posts');
		const folders = await readdir(postsPath);

		for (const folder of folders) {
			const markdownFilePath = join(postsPath, folder, `${folder}.md`);
			const markdownContent = await readFile(markdownFilePath, 'utf-8');
			const { data } = matter(markdownContent);

			posts.push(data as Post);
		}

		return posts;
	} catch (e) {
		throw new Error('Could not parse Markdown files');
	}
}

async function parseMarkdownFile(slug: string) {
	try {
		const postPath = resolve(`posts/${slug}/${slug}.md`);
		const markdownContent = await readFile(postPath, 'utf-8');
		return markdownToHTML(markdownContent);
	} catch (e) {
		console.log(e);

		throw new Error(`Could not parse ${slug}.md`);
	}
}

export async function getPosts() {
	let posts = await parseMarkdownFiles();

	posts = posts.sort((firstItem, secondItem) => {
		return new Date(secondItem.published).getTime() - new Date(firstItem.published).getTime();
	});

	return posts;
}

export async function getPostsByCategory(category: string) {
	const posts = await getPosts();
	return posts.filter((post) => !post.draft && post.category === category);
}

export async function getPost(slug: string) {
	return parseMarkdownFile(slug);
}
