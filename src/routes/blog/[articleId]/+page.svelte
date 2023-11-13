<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const { meta, content } = data;

	const title = meta.title.replaceAll(' ', '').replace('/', '');
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/github-dark.min.css"
	/>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:site_name" content="Lucas Blog" />
	<meta name="description" content={meta.description} />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="min-h-screen">
	<hgroup class="my-32 flex flex-col gap-4 text-center">
		<h1 style:--title="title-{title}" aria-level={1} class="text-display-medium text-primary">
			{meta.title}
		</h1>
		<p aria-level={2} class="text-body-large">{meta.description}</p>
	</hgroup>
	<article class="prose w-[40ch] max-w-4xl md:w-full">
		<main class="text-body-small md:text-body-medium">
			{@html content}
		</main>
	</article>
</div>

<style>
	hgroup h1 {
		view-transition-name: var(--title);
	}
</style>
