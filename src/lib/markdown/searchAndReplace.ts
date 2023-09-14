function searchAndReplace(content: string, slug: string): string {
	const embed = /{% embed src="(.*?)" title="(.*?)" %}/g;
	const video = /{% video src="(.*?)" %}/g;
	const image = /{% img src="(.*?)" alt="(.*?)" %}/g;
	const youtube = /{% youtube id="(.*?)" title="(.*?)" %}/g;

	return content
		.replace(embed, (_, src, title) => {
			return `
        <iframe
          title="${title}"
          src="${src}"
          loading="lazy"
        ></iframe>
      `.trim();
		})
		.replace(video, (_, src) => {
			return `
        <video controls>
          <source
            src="https://raw.githubusercontent.com/realfakenerd/portifolio/main/posts/${slug}/images/${src}"
            type="video/mp4"
          />
        </video>
      `.trim();
		})
		.replace(image, (_, src, alt) => {
			return `
      <img
        src="https://raw.githubusercontent.com/realfakenerd/portifolio/main/posts/${slug}/images/${src}"
        alt="${alt}"
        loading="lazy"
      />
  `.trim();
		})
		.replace(youtube, (_, id, title) => {
			return `
				<lite-youtube videoid="${id}" playlabel="${title}"></lite-youtube>
			`.trim();
		});
}

export default searchAndReplace;