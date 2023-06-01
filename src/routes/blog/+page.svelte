<script lang="ts">
	import { formatDate } from '$lib/utils';
	import TextField from '$lib/components/TextField.svelte';
	import type { LayoutData } from './$types';
	let value: string = '';
	export let data: LayoutData;

	$: resultado = data.posts;
	function pesquisa() {
		resultado = data.posts.filter((val) => {
			if (value) return val.fm.title.toLowerCase().includes(value.trim().toLowerCase());
			return val;
		});
	}
</script>

<TextField
	{value}
	on:trailingClick={pesquisa}
	title={'Search'}
	trailingIcon={`M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z`}
/>
<ul class="grid gap-2">
	{#each resultado as post (post.id)}
		<li class="interactive-bg-background flex flex-col gap-y-2 rounded-xl p-4">
			<div class="flex justify-between">
				<div class="flex flex-col gap-y-2">
					<a class="text-tertiary hover:underline" href={'/blog/' + post.slug}>
						<h1 class="text-title-medium ">
							{post.fm.title}
						</h1>
					</a>

					<section class="flex gap-x-2" aria-label="Categories">
						{#each post.fm.categories as cat}
							<span class="text-label-small hover:underline">#{cat}</span>
						{/each}
					</section>
					<p class="text-body-medium">{post.fm.description}</p>
				</div>
				<figure>
					<img
						class="rounded-lg object-cover object-center"
						height="100"
						width="100"
						src={post.fm.image}
						alt="{post.fm.title} - Imagem da publicação"
					/>
				</figure>
			</div>
			<span class="bg-surface-variant w-fit rounded-lg px-2 py-1">
				<p class="text-label-large">{formatDate(post.fm.date)}</p>
			</span>
		</li>
	{/each}
</ul>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	}
</style>
