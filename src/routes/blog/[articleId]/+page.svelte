<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { content, meta } = data;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>

<article class="flex flex-col gap-y-6">
	<section class="flex flex-col gap-y-3">
		<hgroup>
			<h1 class="text-headline-large text-tertiary">{meta.title}</h1>
			<h2 class="text-headline-small">{meta.description}</h2>
		</hgroup>

		<figure>
			<img
				class="max-h-96 w-full rounded-xl object-cover object-center shadow-md"
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
