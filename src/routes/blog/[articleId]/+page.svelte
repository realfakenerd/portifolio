<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { content, meta } = data;
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

<article class="flex flex-col gap-y-6">
	<section class="flex flex-col gap-y-3">
		<hgroup>
			<h1 style="view-transition-name: postname;" class="text-headline-large text-tertiary" aria-level={1}>{meta.title}</h1>
			<h2 class="text-headline-small" aria-level={2}>{meta.description}</h2>
		</hgroup>

		<figure>
			<img
				class="max-h-96 w-full rounded-xl object-cover object-center shadow-md"
				height="380"
				src={meta.image}
				alt="poster"
			/>
		</figure>
	</section>
	<section class="prose text-on-surface-variant">
		{@html content}
	</section>
</article>

<style>
	section::-webkit-scrollbar-thumb {
		display: hidden;
	}
</style>
