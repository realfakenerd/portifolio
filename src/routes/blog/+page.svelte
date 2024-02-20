<script lang="ts">
	import TextField from '$lib/components/TextField.svelte';
	import { easeEmphasized } from '$lib/transitions';
	import { formatDate } from '$lib/utils';
	import { slide } from 'svelte/transition';
	let value = $state('');

	let { data } = $props();

	const pesquisa = $derived((val: Post) => {
		if (value) return val.title.toLowerCase().includes(value.trim().toLowerCase());
		return val;
	});
</script>

<TextField bind:value style="filled" title={'Search'} trailingIcon="mdi:search" />
<ul class="grid gap-2">
	{#each data.posts.filter(pesquisa) as post, i (i)}
		{@const title = post.title.replaceAll(' ', '').replace('/', '')}
		<li transition:slide={{ easing: easeEmphasized }} class="card w-full gap-y-2">
			<div class="flex justify-between">
				<div class="flex flex-col gap-y-2">
					<a class="text-tertiary hover:underline" href={'/blog/' + post.slug}>
						<h1 class="text-title-medium">
							{post.title}
						</h1>
					</a>

					<section class="flex gap-x-2" aria-label="Categories">
						{#each post.category as cat}
							<span class="text-label-small hover:underline">#{cat}</span>
						{/each}
					</section>
					<p class="text-body-medium">{post.description}</p>
				</div>
				<!-- <figure>
					<img
						class="rounded-lg object-cover object-center"
						height="144"
						width="144"
						src={post.image}
						alt="{post.title} - Imagem da publicação"
						style:--post="image-{title}"
					/>
				</figure> -->
			</div>
			<span class="bg-surface-variant w-fit rounded-lg px-2 py-1">
				<p class="text-label-large">{formatDate(post.published)}</p>
			</span>
		</li>
	{/each}
</ul>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(18rem, 22rem));
	}
</style>
