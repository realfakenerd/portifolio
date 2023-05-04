import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import matter from 'gray-matter';
import { marked } from 'marked';

export const GET = (async ({ fetch, params }) => {
  const res = await fetch(`https://raw.githubusercontent.com/realfakenerd/blog/main/posts/${params.slug}.md`);
  const data = await res.text();
  const { content, data: fm } = matter(data);

  marked.Renderer.prototype.paragraph = (text) => {

    if (text.startsWith("<img")) return '<figure>' + text + '</figure>';
    if (text.startsWith("<a")) return text + "\n";

    return "<p>" + text + "</p>";
  }

  const mark = await marked(content, {
    async: true,
    gfm: true,
    breaks: true,
    smartypants: true
  });

  return json({
    content: mark,
    fm
  });
}) satisfies RequestHandler;
