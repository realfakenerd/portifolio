<script lang="ts">
	import { page } from '$app/stores';
	import { TableOfContents } from '$lib/components/table-of-contents';
	import { cn } from '$lib/utils';

	let { data } = $props();
	const { meta: _meta, content } = data;

	const component = $derived(content);
	const meta = $derived(_meta);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:image" content={meta.image} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:site_name" content="Lucas Blog" />
	<meta name="description" content={meta.description} />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="flex flex-col gap-4">
	<header>
		<hgroup class="card flex min-h-[544px] flex-col justify-center gap-4 text-center">
			<h1 aria-level={1} class="w-full text-display-large text-primary">
				{meta.title}
			</h1>
			<p aria-level={2} class="w-full text-body-large">{meta.description}</p>
		</hgroup>
	</header>
	<main class="flex flex-row-reverse justify-center">
		<div class="mx-4 mt-8 w-[256px]">
			{#key $page.url.pathname}
				<TableOfContents />
			{/key}
		</div>
		<article
			id="mdsvex"
			class={cn(`mdsvex ml-32 mt-8
			max-w-[852px] flex-1 overflow-visible pb-12 [&>*]:mx-auto`)}
		>
			<svelte:component this={component} />
		</article>
	</main>
</div>
