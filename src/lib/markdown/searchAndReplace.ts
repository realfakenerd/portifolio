type Replacement = (_: string, src: string, title: string) => string;

interface Pattern {
	regex: RegExp;
	replacement: Replacement;
}

function searchAndReplace(content: string, slug: string): string {
	const patterns: Pattern[] = [
		{
			regex: /{% embed src="(.*?)" title="(.*?)" %}/g,
			replacement: (_, src, title) =>
				`
          <iframe
            title="${title}"
            src="${src}"
            loading="lazy"
          ></iframe>
        `.trim()
		},
		{
			regex: /{% video src="(.*?)" %}/g,
			replacement: (_, src) =>
				`
          <video class="card p-0" controls>
            <source
              src="https://raw.githubusercontent.com/realfakenerd/portifolio/main/posts/${slug}/images/${src}"
              type="video/mp4"
            />
          </video>
        `.trim()
		},
		{
			regex: /{% img src="(.*?)" alt="(.*?)" %}/g,
			replacement: (_, src, alt) =>
				`
          <img
			class="card p-0"
            src="https://raw.githubusercontent.com/realfakenerd/portifolio/main/posts/${slug}/images/${src}"
            alt="${alt}"
            loading="lazy"
          />
        `.trim()
		},
		{
			regex: /{% youtube id="(.*?)" title="(.*?)" %}/g,
			replacement: (_, id, title) =>
				`
          <lite-youtube videoid="${id}" playlabel="${title}"></lite-youtube>
        `.trim()
		}
	];

	return patterns.reduce((result, { regex, replacement }) => {
		return result.replace(regex, replacement);
	}, content);
}

export default searchAndReplace;
