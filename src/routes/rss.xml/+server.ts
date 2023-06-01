import type { Post } from '$lib/lib';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  const response = await fetch('/api/posts');
  const posts = await response.json() as Post[];

  const headers = { 'Content-Type': 'application/xml' };
  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
        <title>if-else</title>
        <description>personal blog about everything cool on the web</description>
        <link>https://dev-lucasouverney.vercel.app/</link>
        <language>pt-BR</language>
        <ttl>${60 * 24}</ttl>
        <atom:link href="https://dev-lucasouverney.vercel.app/api/posts/rss.xml" rel="self" type="application/rss+xml"/>
        ${posts.map((post) => `
          <item>
            <title>${post.fm.title}</title>
            <description>${post.fm.description}</description>
            <image>
              <url>${post.fm.image}</url>
              <title>${post.fm.title}</title>
              <link>https://dev-lucasouverney.vercel.app/blog/${post.slug}</link>
            </image>
            <comments>https://dev-lucasouverney.vercel.app/blog/${post.slug}#comments</comments>
            <link>https://dev-lucasouverney.vercel.app/blog/${post.slug}</link>
            <guid isPermaLink="true">https://dev-lucasouverney.vercel.app/blog/${post.slug}</guid>
            <pubDate>${new Date(post.fm.date).toUTCString()}</pubDate>
            ${post.fm.categories
              .filter((cat) => cat !== ',')
              .map((cat) => `<category>${cat}</category>`)
              .join('')}
          </item>`).join('')}
      </channel>
    </rss>`.trim();

  return new Response(xml, { headers });
};
