import type { Post } from '$lib/lib';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts = (await response.json()) as Post[];

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>if-else</title>
				<description>personal blog about </description>
				<link>https://dev-lucasouverney.vercel.app/</link>
				<language>pt-BR</language>
				<ttl>${60 * 24}</ttl>
				<atom:link href="https://dev-lucasouverney.vercel.app/api/posts/rss.xml" rel="self" type="application/rss+xml"/>
				${posts
					.map(
						(post) => `
						  <item>
							  <title>${post.fm.title}</title>
							  <description>${post.fm.description}</description>
							  <link>https://dev-lucasouverney.vercel.app/blog/${post.slug}</link>
							  <guid isPermaLink="true">https://dev-lucasouverney.vercel.app/blog/${post.slug}</guid>
							  <pubDate>${new Date(post.fm.date).toUTCString()}</pubDate>
						  </item>
					  `
					)
					.join('')}
			</channel>
		</rss>
	  `.trim();

	return new Response(xml, { headers });
}) satisfies RequestHandler;
