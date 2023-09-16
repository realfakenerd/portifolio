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

<article class="prose">
	<header>
		<h1 style:--title="title-{title}" aria-level={1}>
			{meta.title}
		</h1>
		<p aria-level={2}>{meta.description}</p>
	</header>
	{@html content}
</article>

<style>
	header h1 {
		view-transition-name: var(--title);
	}

	/* img {
		view-transition-name: var(--post);
	} */
</style>
