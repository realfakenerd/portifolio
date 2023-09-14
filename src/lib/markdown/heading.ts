import type { Renderer } from 'marked';

const heading: Renderer['heading'] = (text, level) => {
	const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
	return `
            <h${level} class="inline-flex gap-2 items-center">
              <a name="${escapedText}" class="p-2" href="#${escapedText}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path fill="currentColor" d="M10.6 13.4c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0 5 5 0 0 1 0-7l3.5-3.6a5 5 0 0 1 7 0 5 5 0 0 1 0 7l-1.4 1.6a7 7 0 0 0-.4-2.4l.5-.5a3 3 0 0 0 0-4.3 3 3 0 0 0-4.3 0l-3.5 3.6a3 3 0 0 0 0 4.2m2.8-4.2a1 1 0 0 1 1.4 0 5 5 0 0 1 0 7l-3.5 3.6a5 5 0 0 1-7 0 5 5 0 0 1 0-7l1.4-1.6c0 .8.1 1.7.4 2.4l-.5.5a3 3 0 0 0 0 4.3 3 3 0 0 0 4.3 0l3.5-3.6a3 3 0 0 0 0-4.2 1 1 0 0 1 0-1.4Z"/></svg>
              </a>
              ${text}
            </h${level}>`;
};

export default heading;
