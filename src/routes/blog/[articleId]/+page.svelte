<script lang="ts">
	import { page } from '$app/stores';
	import { TableOfContents } from '$lib/components/table-of-contents';
	import { cn } from '$lib/utils';
	import imgSrc from '$lib/static/svelte-machine.jpg?enhanced';

	let { data } = $props();
	const { meta: _meta, content } = data;

	const component = $derived(content);
	const meta = $derived(_meta);

	$effect(() => {
		const copyBtn = $state<HTMLButtonElement>(document.querySelector('.copy')!);
		const code = $derived(copyBtn.parentElement?.lastChild);
		copyBtn.addEventListener('click', () => {
			navigator.clipboard.writeText(code?.textContent!);
		});
	});
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

<div class="relative flex flex-col gap-4">
	<header class="flex flex-col gap-4 md:flex-row">
		<hgroup class="card flex min-h-[544px] w-1/2 flex-col justify-center gap-4 text-center">
			<h1 aria-level={1} class="w-full text-display-large text-primary">
				{meta.title}
			</h1>
			<p aria-level={2} class="w-full text-pretty text-title-large">{meta.description}</p>
		</hgroup>
		<div class="card min-h-[544px] w-1/2 object-cover object-right p-0">
			<enhanced:img src={imgSrc} alt="sssdkjgjf" />
		</div>
	</header>
	<main class="flex flex-row-reverse justify-center">
		<div class="hidden md:block">
			<div class="mx-4 mt-8 w-[256px]">
				{#key $page.url.pathname}
					<TableOfContents />
				{/key}
			</div>
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
